import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import {
  auth,
  googleProvider,
  signInAuthUserWithEmailAndPassword,
} from "../../config/firebase";
import {
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password).then(
        (result) => {
          const user = result.user;
          console.log(user);
          router.push("/dashboard");
        }
      );
    } catch (err) {
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
    }
  };

  return (
    <div className="min-w-min w-4/12  ">
      <h3 className="text-4xl font-bold">Sign In</h3>
      <p className="text-base">Sign in to your account</p>
      <div className="flex gap-x-6 justify-center [&>*]:text-secondary  [&>*]:text-xs my-8">
        <button
          className="bg-white p-2 rounded-[10px] flex "
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
        <button className="bg-white p-2 rounded-[10px] flex">
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
      <form className="w-full py-8 bg-white flex flex-col p-8  rounded-[20px] [&>*]:text-base">
        <label htmlFor="email" className="font-lato  ">
          Email address
        </label>
        <input
          type="text"
          name="email"
          className="bg-background p-1 px-4 mt-2 rounded-[10px]"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="font-lato mt-5">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-background  p-1 px-4 mt-2 rounded-[10px] "
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="" className="mt-5 text-[#346BD4] text-base font-lato ">
          Forgot Password?
        </a>
        <button
          type="submit"
          className="bg-black text-center py-2 font-bold rounded-[10px] mt-5 text-white"
          onClick={signIn}
        >
          Sign In
        </button>
      </form>
      <p className="text-center font-lato mt-5">
        <span className="text-secondary ">Don’t have an account?</span>
        <a href=""> Register here</a>
      </p>
    </div>
  );
};

export default Signin;
