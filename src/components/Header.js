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
        <div className="absolute w-screen px-[25%] md:px-8 md:mx-0 mx-5 md:py-5 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row md:float-none float-start">
          <img className="md:w-44 w-32 " src={LOGO} alt="Netflix logo" />
        </div>
        {user && (
          <div className="relative z-10 mt-0 md:mr-1 mr-5">
            <div className="text-black text-xs md:float-right float-left">
              <div className="md:mx-1 mx-3 mt-0 p-2 ">
                <select
                  className="mx-1 mt-2 p-2 bg-black text-white font-semibold rounded-md"
                  onChange={handleLangChange}
                >
                  {SUPPORTED_LANG.map((lng) => (
                    <option key={lng.identifier} value={lng.identifier}>
                      {lng.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="text-black text-xs float-right "
              title={"Logged in as " + user.displayName}
            >
              <div className="md:mr-1 mr-0">
                <button
                  className="bg-red-500 rounded-md hover:bg-opacity-50 w-24 md:mt-3 mt-5 md:mb-1 mb-3 p-2 ml-1 text-white font-semibold"
                  onClick={handleGptSearchViewToggle}
                >
                  {showGpt ? "Home" : "GPT Search"}
                </button>
              </div>
              <div className="md:mr-1 mr-0">
                <button
                  className="bg-red-500 rounded-md hover:bg-opacity-50 w-24 md:mt-3 mt-0 md:mb-1 mb-3 ml-1 p-2 text-white font-semibold"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            </div>

            <div
              className="text-black text-xs md:float-right float-left md:mt-0 mt-10"
              title={"Logged in as " + user.displayName}
            >
              <div>
                <img
                  className="md:w-24 w-16 md:mx-0 mx-0 md:mt-1 mt-2 mb-1 p-1 rounded-full border-red-400 md:border-2 border-none"
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
