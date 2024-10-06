import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Auth } from "../utils/firebase";
import { GUEST_USER_AVATAR, LOGO, SUPPORTED_LANG } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGpt);
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
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchViewToggle = () => {
    dispatch(toggleGptSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div>
        <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 justify-between">
          <img className="w-44" src={LOGO} alt="Netflix logo" />
        </div>
        {user && (
          <div className="relative z-10 mt-0 mr-1">
            <div className="text-black text-xs float-right">
              <div className="mx-2 mt-0 p-2 ">
                <select
                  className="mx-2 mt-2 p-2 bg-black text-white font-semibold rounded-md"
                  onChange={handleLangChange}
                >
                  {SUPPORTED_LANG.map((lng) => (
                    <option key="lng.identifier" value={lng.identifier}>
                      {lng.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="text-black text-xs float-right"
              title={"Logged in as " + user.displayName}
            >
              <div className="mr-2">
                <button
                  className="bg-red-500 rounded-md hover:bg-opacity-50 w-24 mt-3 mb-1 p-2 ml-1 text-white font-semibold"
                  onClick={handleGptSearchViewToggle}
                >
                  {showGpt ? "Home" : "GPT Search"}
                </button>
              </div>
              <div className="mr-2">
                <button
                  className="bg-red-500 rounded-md hover:bg-opacity-50 w-24 mt-3 mb-1 ml-1 p-2 text-white font-semibold"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            </div>

            <div
              className="text-black text-xs float-right"
              title={"Logged in as " + user.displayName}
            >
              <div>
                <img
                  className="w-24 mt-1 mb-1 p-1 rounded-full border-red-400 border-2"
                  src={
                    user.photoURL === null
                      ? { GUEST_USER_AVATAR }
                      : user.photoURL
                  }
                  alt="user"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
