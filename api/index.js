import  Express  from "express";
const app = Express();
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import vehicleRoutes from './routes/vehicles.js';
import rentRoutes from './routes/rents.js';
import liveryRoutes from './routes/liverys.js';

import cors from 'cors';
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(Express.json()); 
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/rents', rentRoutes);
app.use('/api/liverys', liveryRoutes);

app.listen(8800, () => {
    console.log("Server running on port 8800:  http://localhost:8800");
});
app.use("/", (req, res) => {
    res.send("Hello from Express!");
});