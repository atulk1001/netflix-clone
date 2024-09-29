import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Auth } from "../utils/firebase";
import { GUEST_USER_AVATAR, LOGO } from "../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = Auth;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth Status Changed .......");
      if (user) {
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

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
      <div>
        <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 justify-between"> <img
          className="w-44"
          src={LOGO}
          alt="Netflix logo"
        /></div>
    
      {user &&
        <div className="relative float-right z-10 mt-0 mr-1">
          <div className="text-black text-xs float-right" title={"Logged in as " + user.displayName} >
            <div><img src={user.photoURL === null ? {GUEST_USER_AVATAR} : user.photoURL} alt="user icon" className="h-14 w-20 mt-1 " />
            </div>
            <div className="text-red-500 font-bold "><button className="bg-white bg-opacity-55 border-2 order-neutral-500 hover:bg-opacity-30 w-20 mt-1 mb-1 p-1" onClick={handleLogOut}> Log Out </button></div>
          </div>
        </div>
      }
      </div>
    </>
  );
};

export default Header;
