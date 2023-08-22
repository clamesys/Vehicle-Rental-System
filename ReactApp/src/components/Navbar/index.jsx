import  { useContext,useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.scss";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { AuthContext } from "../../context/authContext";
function Navbar({ selected }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    
    const handleResize = () => {
      console.log(localStorage.getItem("user"));
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  }; 
  const Logout =  useContext(AuthContext).logoutContext;
  const user = useContext(AuthContext).currentUser;
  const LogoutPress = async() => {
    localStorage.removeItem("user");
    await Logout
    window.location.reload();
  };
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          Rent A Vehicle
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li
              className={` ${selected == "Home" ? `${"isSelected"}` : ""}  }`}
            >
              <Link to="/"><HomeOutlinedIcon/>Home</Link>
            </li>

            <li
              className={` ${selected == "Browse" ? `${"isSelected"}` : ""}  }`}
            >
              <Link to="/browse"><SearchOutlinedIcon/>Browse</Link>
            </li>
            <li
              className={` ${selected == "Help" ? `${"isSelected"}` : ""}  }`}
            >
              <Link to="/help"> <HelpCenterOutlinedIcon/>Help</Link>
            </li>
            <li
              className={` ${
                selected == "Profile" ? `${"isSelected"}` : ""
              }  }`}
            >
              <Link to={(user!== null && user !==undefined )?"/profile/"+ user.UserId:"/"}><AccountBoxOutlinedIcon/>Profile</Link>
            </li>
            {" | "}
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/login">{localStorage.getItem("user")? <button className="btn logout" onClick={
             LogoutPress
            }>Logout</button> :
              <button className="btn login">Login</button>}
            </Link>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
