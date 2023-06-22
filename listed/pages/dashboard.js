import { useEffect } from "react";
import { auth } from "../src/config/firebase";
import { redirect } from "next/navigation";
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const dashboard = () => {
  const checkUserSignedIn = () => {
    const user = auth.currentUser;

    console.log(user);
    if (user === null) {
        {
         redirect("/dashboard");
    }
}
  };

  useEffect(() => {
    checkUserSignedIn();
  }, []);

  return <div>dashboard</div>;
};

export default dashboard;
