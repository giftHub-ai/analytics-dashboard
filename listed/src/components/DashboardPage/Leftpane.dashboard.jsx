import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const leftData = [
  { img: "./assets/dashboard_icon.svg", text: "Dashboard" },
  { img: "./assets/left_transaction_icon.svg", text: "Transactions" },
  { img: "./assets/left_schedule_icon.svg", text: "Schedules" },
  { img: "./assets/left_user_icon.svg", text: "Users" },
  { img: "./assets/left_setting_icon.svg", text: "Settings" },
];
const Leftpane = ({
  activeState,
  setActiveState,
  showleftPane,
  setShowLeftPane,
}) => {
  const Options = ({ isActive, text, img, ind, setActiveState }) => {
    return (
      <div
        className={`flex md:gap-x-5 gap-x-2 text-white text-xs md:text-[1.125rem] font-montserrat  mb-10  cursor-pointer min-w-fit `}
        onClick={() => setActiveState(ind)}
      >
        <Image alt="icon" height={18} width={18} src={img} ></Image>
        <p className={` ${isActive == ind ? "font-bold" : "font-normal"}`}>
          {text}
        </p>
      </div>
    );
  };
  return (
    <>
      <Image
        src={"/assets/hamburgermenu.svg"}
        alt="E"
        height={20}
        width={20}
        className={`text-black md:hidden  fixed mt-4  z-50 ${  showleftPane?"ml-40 text-white ":null}`}
        onClick={() => {
          setShowLeftPane(!showleftPane);
        }}
      ></Image>
      <div
        className={`  md:block md:basis-1/5 bg-black min-h-full min-w-[12rem]  ${  showleftPane?"min-w-[150px] ": "rounded-[30px]"}  ${
          showleftPane ? "block basis-4/5 h-screen z-30" : "hidden"
        }`}
      >
        <div className=" w-[70%] mx-auto flex flex-col justify-evenly min-h-full  ">
          <div className="">
            <h1 className="font-bold font-montserrat my-auto text-base md:text-2xl text-primary ">
              Board.
            </h1>
          </div>
          <div className="flex flex-col ">
            {leftData.map((item, ind) => {
              return (
                <Options
                  key={ind}
                  isActive={activeState}
                  text={item.text}
                  img={item.img}
                  ind={ind}
                  setActiveState={setActiveState}
                />
              );
            })}
          </div>
          <div className="text-[0.875rem] ">
            <button>Help</button>
            <br />
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftpane;
