import { useEffect, useState } from "react";
import { auth } from "../src/config/firebase";
import Image from "next/image";
import Leftpane from "@/src/components/Leftpane.dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOutUser } from "../src/config/firebase";
import LandingPage from "@/src/Sections/LandingPage";
import PageSelector from "@/src/components/PageSelector";


const dashboard = () => {
  const [loading, setLoading] = useState(false);
  async function IsUserSignedIn() {
    try {
      var userData = null;
      await new Promise((resolve, reject) =>
        onAuthStateChanged(
          getAuth(),
          (user) => {
            if (user) {
              resolve(user);
              userData = user;
              console.log(userData.displayName);
            } else {
              console.log("not signed in");
              reject("no user logged in");
            }
          },
          // Prevent console error
          (error) => reject(error)
        )
      );
    } catch (error) {
      return false;
    }
  }


  useEffect(() => {
    IsUserSignedIn();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  const [showLeftPane, setShowLeftPane] = useState(false);
  if (loading === true) return <div className="">LOADING...</div>;
  const [activeState, setActiveState] = useState(0);
  return (
    <>
      <div className={`min-h-screen flex text-white min-w-fit md:p-5 my-4   ${showLeftPane?"px-0 ": "px-4"}`}>
        <Leftpane
          activeState={activeState}
          setActiveState={setActiveState}
          showleftPane={showLeftPane}
          setShowLeftPane={setShowLeftPane}
        />
        <div
          className={`md:basis-4/5 px-2 xl:px-14 ${
            showLeftPane ? "basis-5/5" : null
          }`}
        >
          {/* <LandingPage/> */}
          <PageSelector activeState={activeState}/>
        </div>
      </div>
    </>
  );
};

export default dashboard;

{
  /* <button
            onClick={() => {
              signOutUser();
              console.log("signupur");
            }}
          >
            Logout
          </button> */
}
