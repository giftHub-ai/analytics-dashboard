import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between  items-center ">
      <h2 className="text-2xl  font-montserrat font-bold text-black max-sm:ml-8">Dashboard</h2>
      <div className=" flex gap-x-7  items-center ">
        <div className=" relative md:block hidden">
          <input type="text" placeholder={`Search...`} className="text-[14px] text-secondary font-sans p-1 px-4 rounded-[10px] outline-none"/>
          <Image
          className="absolute top-2 right-4 "
            src="./assets/search_icon.svg"
            height={12}
            width={12}
            alt="search icon"
          ></Image>
        </div>
        <Image
          className=""
            src="./assets/notification.svg"
            height={20}
            width={18}
            alt="search icon"
          ></Image>
        <Image
          className="rounded-full w-[50px] h-[50px]"
            src="/assets/image1.png"
            height={100}
            width={120}
            alt="search icon"
          ></Image>
      </div>
    </div>
  );
};

export default Header;
