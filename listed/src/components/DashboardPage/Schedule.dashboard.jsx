import React from "react";

const Schedule = () => {
  return (
    <div className="mt-4  w-1/2 h-full">
      <div className=" bg-white   rounded-[20px] flex w-full relative h-full pb-6">
        <div className="absolute top-4 text-black z-20 w-full  flex justify-between px-4 ">
          <h6 className="font-montserrat text-[18px] font-bold">
          Today’s schedule
          </h6>
          <div className="text-[12px]">See all</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
