import {db} from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register =  (req, res) => {
    
    const q = "SELECT * FROM user WHERE UserId = ?";
    db.query(q, [req.body.UserId], (err, data) => { 
        if (err) throw res.status(500).json(err);
        else if(data.length) return res.status(409).json("User already exists");
        else{
            const q = "INSERT INTO user (`UserId`,`Name`, `Email`, `Password`,`Age`,`Adress` ,`TelNo`) VALUE (?,?,?,?,?,?,?)";

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.Password, salt);

            const values = [req.body.UserId, req.body.Name, req.body.Email, hash, req.body.Age,req.body.Adress,req.body.TelNo];
            db.query(q, values, (err, result) => {
                if (err) throw res.status(500).json(err);
                else return res.status(200).json("User has been registered");
            });
        }
    });
}

export const login = async (req, res) => { 
    const q = "SELECT * FROM user WHERE Email = ?" ;
    db.query(q, [req.body.Email], (err, data) => { 
        if (err) throw res.status(500).json(err);
        else if(data.length === 0) return res.status(404).json("User not found");
        const  checkPassword = bcrypt.compareSync(req.body.Password, data[0].Password);

        if(!checkPassword)
         return res.status(400).json("Password is incorrect");
        else{
            const token = jwt.sign({id: data[0].UserId},"secretkey");
            const {Password, ...others} = data[0];
            res
            .cookie("accessToken", token, {
                httpOnly: true,
            })
            .status(200)
            .json(others);
        }

    });  
}

export const logout = async (req, res) => {
    res.clearCookie("accessToken",{secure:true,sameSite:"none" }).status(200).json("User has been logged out");
}