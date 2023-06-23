import { Cell, Legend, Pie, PieChart } from "recharts";
const data01 = [
  {
    name: "Basic Tees",
    value: 55,
  },
  {
    name: "Custom Short Pants",
    value: 31,
  },
  {
    name: "Super Hoodies",
    value: 14,
  },
];
const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
const Bullet = (ind) => {
  console.log(ind);
  if (ind === 0) {
    return (
      <div className={`w-[11px] h-[11px] bg-[#98D89E] rounded-full `}></div>
    );
  }
  if (ind === 1) {
    return (
      <div className={`w-[11px] h-[11px] bg-[#F6DC7D] rounded-full `}></div>
    );
  }
  if (ind === 2) {
    return (
      <div className={`w-[11px] h-[11px] bg-[#EE8484] rounded-full `}></div>
    );
  }
};
const CustomLegend = ({ ind, text, value }) => {
  return (
    <div className="">
      <div className="flex items-center ">
        <Bullet ind={ind} />
        <p className="text-[14px] font-bold ml-2">{text}</p>
      </div>
      <p className="text-secondary text-xs ml-5">{value}%</p>
    </div>
  );
};
const RenderPieChart = () => {
  return (
    <div className="mt-4  w-1/2 h-full">
      <div className=" bg-white   rounded-[20px] flex w-full relative h-full pb-6">
        <div className="absolute top-4 text-black z-20 w-full  flex justify-between px-4 ">
          <h6 className="font-montserrat text-[18px] font-bold">
            Top Products
          </h6>
          <div className="text-[12px]">
            <select name="date" id="">
              <option value="3_2021">May - June 2021</option>
              <option value="3_2021">May - June 2021</option>
              <option value="3_2021">May - June 2021</option>
            </select>
          </div>
        </div>
        <div className=" mt-12 flex text-black">
          <PieChart width={180} height={100}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            >
              {data01.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* <Legend
            verticalAlign="middle"
            align="right"
            height={16}
            iconType="circle"
          /> */}
          </PieChart>
          <div className="">
            {data01.map((item, index) => (
              <CustomLegend
                ind={index}
                text={item.name}
                value={item.value}
              ></CustomLegend>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderPieChart;
