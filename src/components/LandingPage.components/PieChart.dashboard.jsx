import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import axios from "axios";
import { useRouter } from "next/router";

const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
const Bullet = ({ ind }) => {
  console.log(ind);
  if (ind === 0) {
    return (
      <div className={`w-[11px] h-[11px] bg-[#98D89E] rounded-full `}></div>
    );
  } else if (ind === 1) {
    return (
      <div className={`w-[11px] h-[11px] bg-[#F6DC7D] rounded-full `}></div>
    );
  } else if (ind === 2) {
    return (
      <div className={`w-[11px] h-[11px] bg-[#EE8484] rounded-full `}></div>
    );
  }
  return <div className={`w-[11px] h-[11px] bg-[#29ac6d] rounded-full `}></div>;
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
  const router = useRouter();

  const modifiedPathname = router.pathname.replace('/dashboard', '');

  const [selectedValue, setSelectedValue] = useState("3");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, [selectedValue]);
  const handleSelectChange = (e) => {
    // console.log(selectedValue);
    setSelectedValue(e.target.value);
  };
  const callApi = () => {
    axios.get(`${modifiedPathname}/api/product?value=${selectedValue}`)
      .then((response) => {
        const data = response.data.data;
        console.log(data); // Handle the response data as needed
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occur during the request
      });
  };

  if (loading === true) return <div className="">Loading</div>;
  return (
    <div className="mt-4  basis-1/2 h-full min-h-full">
      <div className=" bg-white   rounded-[20px] flex w-full relative min-h-full pb-6">
        <div className="absolute top-4 text-black z-20 w-full  flex justify-between px-4 ">
          <h6 className="font-montserrat text-[18px] font-bold">
            Top Products
          </h6>
          <div className="text-[12px]">
            <select
              name="date"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="3">May - June 2021</option>
              <option value="4">June - July 2021</option>
              <option value="5">August - Sept 2021</option>
            </select>
          </div>
        </div>
        <div className=" mt-12 flex text-black">
          <PieChart width={180} height={100}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <div className="">
            {data.map((item, index) => (
              <CustomLegend
                key={index}
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
