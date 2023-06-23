import { useEffect, useState } from "react";
import { auth } from "../src/config/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import Leftpane from "@/src/components/DashboardPage/Leftpane.dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOutUser } from "../src/config/firebase";
import Header from "@/src/components/DashboardPage/Header.dashboard";
import Cards from "@/src/components/DashboardPage/Cards.dashboard";
import LineChart from "@/src/components/DashboardPage/LineChart.dashboard";
import RenderPieChart from "@/src/components/DashboardPage/PieChart.dashboard";
import Schedule from "@/src/components/DashboardPage/Schedule.dashboard";

const dashboard = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const router = useRouter();
  const [loading, setLoading] = useState(false);


  async function IsUserSignedIn() {
    try {
      var userData = null;
      await new Promise((resolve, reject) =>
        onAuthStateChanged(
          getAuth(),
          (user) => {
            if (user) {
              // User is signed in.
              resolve(user);
              userData = user;
              console.log(userData.displayName);
            } else {
              // No user is signed in.
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
      <div className="w-screen min-h-screen flex text-white min-w-fit  md:p-5 ">
        <Leftpane
          activeState={activeState}
          setActiveState={setActiveState}
          showleftPane={showLeftPane}
          setShowLeftPane={setShowLeftPane}
        />
        <div
          className={`md:basis-4/5 px-2 md:px-14 ${
            showLeftPane ? "basis-5/5" : null
          }`}
        >
          <Header />
          <Cards />
          <LineChart />
          <div className="md:flex gap-x-8 ">
            {domLoaded && <RenderPieChart />}
            <Schedule />
          </div>
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
