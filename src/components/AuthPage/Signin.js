import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import {
  auth,
  googleProvider,
  signInAuthUserWithEmailAndPassword,
} from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
const Signin = ({setLogin}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(auth?.currentUser?.email);
  const [errMessage, setErrorMessage] = useState(null);
  const signIn = async () => {
    console.log("here");
    try {
      await signInAuthUserWithEmailAndPassword(email, password).then(
        (result) => {
          const user = result.user;
          console.log(user);
          router.push("/dashboard");
        }
        );
      } catch (err) {
        setErrorMessage(err.code);
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((result) => {
        const user = result.user;
        console.log(user);
        router.push("/dashboard");
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
      setErrorMessage(error.code);

    }
  };

  return (
    <div className="min-w-min w-4/12 mx-4  ">
      <h3 className="text-2xl md:text-4xl font-bold">Sign In</h3>
      <p className="text-base">Sign in to your account</p>
      <div className="flex gap-x-6 justify-center [&>*]:text-secondary  [&>*]:text-xs my-8">
        <button
          className="bg-white p-2 rounded-[10px] flex items-center"
          onClick={() => signInWithGoogle()}
        >
          <Image
            alt="google"
            height={14}
            width={14}
            src={"./assets/google.svg"}
            className="mr-2"
          ></Image>
          Sign in with Google
        </button>
        <button className="bg-white p-2 rounded-[10px] flex items-center">
          <Image
            alt="google"
            height={14}
            width={14}
            src={"./assets/apple.svg"}
            className="mr-2"
          ></Image>
          Sign in with Apple
        </button>
      </div>
      <div className="w-full py-8 bg-white flex flex-col p-8  rounded-[20px] [&>*]:text-base">
        <label htmlFor="email" className="font-sans  ">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="bg-background p-1 px-4 mt-2 rounded-[10px] outline-none"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="font-sans mt-5">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-background  p-1 px-4 mt-2 rounded-[10px] outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="" className="mt-5 text-[#346BD4] text-base font-sans ">
          Forgot Password?
        </a>
        <button
          className="bg-black text-center py-2 font-bold rounded-[10px] mt-5 text-white"
          onClick={() => signIn()}
        >
          Sign In
        </button>
        {errMessage && <div className="text-red-500">{errMessage}</div>}
      </div>
      <p className="text-center font-sans mt-5">
        <span className="text-secondary ">Don’t have an account?</span>
        <span className="cursor-pointer" onClick={()=>setLogin(false)}> Register here</span>
      </p>
    </div>
  );
};

export default Signin;
