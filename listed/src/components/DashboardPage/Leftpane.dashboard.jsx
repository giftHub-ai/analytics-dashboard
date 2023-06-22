import Image from "next/image";
import React from "react";
const leftData = [
  { img: "./assets/dashboard_icon.svg", text: "Dashboard" },
  { img: "./assets/dashboard_icon.svg", text: "Transactions" },
  { img: "./assets/dashboard_icon.svg", text: "Schedules" },
  { img: "./assets/dashboard_icon.svg", text: "Users" },
  { img: "./assets/dashboard_icon.svg", text: "Settings" },
];
const Leftpane = ({ activeState, setActiveState }) => {
  const Options = ({ isActive, text, img, ind, setActiveState }) => {
    return (
      <div
        className={`flex gap-x-5 text-white text-[1.125rem] font-montserrat  mb-10 border-white cursor-pointer`}
        onClick={() => setActiveState(ind)}
      >
        <Image
          alt="icon"
          height={18}
          width={18}
          src={"./assets/dashboard_icon.svg"}
        ></Image>
        <p className={` ${isActive == ind ? "font-bold" : "font-normal"}`}>
          {text}
        </p>
      </div>
    );
  };
  return (
    <div className="basis-1/5 bg-black rounded-[30px] min-h-full">
      <div className="w-[70%]  mx-auto  flex flex-col h-full">
        <h1 className="font-bold font-montserrat my-auto text-2xl text-primary ">
          Board.
        </h1>
<div className="">
        <div className="flex flex-col border">
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
          <p>Help</p>
          <p>Contact Us</p>
        </div></div>
      </div>
    </div>
  );
};

export default Leftpane;
