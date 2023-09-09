import Image from "next/image";
import React from "react";

const scheduleData = [
  {
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
  },
  {
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "at Central Jakarta",
  },
  {
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
  },
];

const VerticalLine = ({ ind }) => {
  if (ind === 0)
    return (
      <div className="items-stretch bg-[#9BDD7C] min-h-fit w-[5px] mr-4"></div>
    );
  if (ind === 1)
    return (
      <div className="items-stretch bg-[#6972C3] min-h-fit w-[5px] mr-4"></div>
    );
};

const ScheduleCard = ({ ind, title, time, location }) => {
  return (
    <div className="flex mb-2">
      <VerticalLine ind={ind} />
      <div className=" font-sans">
        <p className="font-bold text-sm text-[#666]">{title}</p>
        <p className="text-xs text-[#999]">{time}</p>
        <p className="text-xs text-[#999]">{location}</p>
      </div>
    </div>
  );
};
const Schedule = () => {
  const top2Schedule = scheduleData.slice(0, 2);
  return (
    <div className="mt-4  md:w-1/2 h-full text-black ">
      <div className=" p-4 bg-white rounded-[20px] ">
        <div className="   flex items-center justify-between w-full  h-full pb-2">
          <h6 className=" text-[18px] font-bold ">Today’s schedule</h6>
          <div className="text-[12px] flex gap-x-1  ">See all <Image alt=">" src ="/assets/rightIcon.svg" height={5} width={5}></Image></div>
          
        </div>
        {top2Schedule.map((item, ind) => {
          return (
            <ScheduleCard 
              key={ind}
              title={item.title}
              time={item.time}
              ind={ind}
              location={item.location}
            ></ScheduleCard>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
