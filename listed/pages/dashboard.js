import { useEffect, useState } from "react";
import { auth } from "../src/config/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import Leftpane from "@/src/components/DashboardPage/Leftpane.dashboard";


const dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  let displayName = null;
  let email = null;
  let photoURL = null;
  let emailVerified = null;
  let user = auth.currentUser;

  const checkUserSignedIn = async () => {
    console.log(user);
    try {
      if (user !== null) {
        displayName = user.displayName;
        email = user.email;
        photoURL = user.photoURL;
        emailVerified = user.emailVerified;
        setLoading(false);
      } else {
        // router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   checkUserSignedIn();
  // }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading === true) return <div className="">LOADING...</div>;
  const [activeState, setActiveState] = useState(0);
  return (
    <>
      <div className="w-screen min-h-screen flex text-white p-10  ">
        <Leftpane activeState={activeState} setActiveState={setActiveState}/>
        <div className="basis-4/5 px-14 border">afsdf</div>
      </div>
    </>
  );
};

export default dashboard;
