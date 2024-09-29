import React from "react";
import { signOut } from "firebase/auth";
import { Auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();
  const auth = Auth;
  const handleLogOut = () => {
    console.log("logout button clicked ........");
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix logo"
        />
      </div>
      { user && 
        <div>
          <div className="float-right text-black text-xs" title = {"Logged in as "+user.displayName} >
           <div><img src={user.photoURL === null ? "https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png": user.photoURL} alt="user icon" className="h-16 mt-3" />
           </div>
            <div className=" text-black mr-3 font-bold">{user.displayName}</div>
            <div className=" text-red-500 mr-3 font-bold text-md "><button className="bg-red-300 p-2 mt-1 rounded-sm" onClick={handleLogOut}> Log Out </button></div>
         </div>
         
        </div>
     
      }
    </>
  );
};

export default Header;
