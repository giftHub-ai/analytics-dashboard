import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex justify-between my-4 text-black">
      <div className="bg-[#DDEFE0] relative p-4 pt-12  pr-20 rounded-[10px]">
      <Image
          className="absolute top-[20px] right-[25px]"
            src="./assets/revenue_icon.svg"
            height={26}
            width={24}
            alt="search icon"
          ></Image>
        <p className="text-sm font-lato mb-1">Total Revenues</p>
        <p className="text-2xl font-sans font-bold">$2,129,430</p>
      </div>
      <div className="bg-[#F4ECDD] relative p-4 pt-12  pr-20 rounded-[10px]">
      <Image
          className="absolute top-[20px] right-[25px]"
            src="./assets/revenue_icon.svg"
            height={26}
            width={24}
            alt="search icon"
          ></Image>
        <p className="text-sm font-lato mb-1">Total Transactions</p>
        <p className="text-2xl font-sans font-bold">$2,129,430</p>
      </div>
      <div className="bg-[#EFDADA] relative p-4 pt-12  pr-20 rounded-[10px]">
      <Image
          className="absolute top-[20px] right-[25px]"
            src="./assets/revenue_icon.svg"
            height={26}
            width={24}
            alt="search icon"
          ></Image>
        <p className="text-sm font-lato mb-1">Total Revenues</p>
        <p className="text-2xl font-sans font-bold">$2,129,430</p>
      </div>
      <div className="bg-[#DEE0EF] relative p-4 pt-12  pr-20 rounded-[10px]">
      <Image
          className="absolute top-[20px] right-[25px]"
            src="./assets/revenue_icon.svg"
            height={26}
            width={24}
            alt="search icon"
          ></Image>
        <p className="text-sm font-lato mb-1">Total Revenues</p>
        <p className="text-2xl font-sans font-bold">$2,129,430</p>
      </div>
    </div>
  );
};

export default Cards;
