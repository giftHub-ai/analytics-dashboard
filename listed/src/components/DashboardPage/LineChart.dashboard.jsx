import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const dataintial = [
  { name: "", user: 100, guest: 200, amt: 2400 },
  { name: "Week 1", user: 400, guest: 400, amt: 2400 },
  { name: "Week 2", user: 150, guest: 200, amt: 2400 },
  { name: "Week 3", user: 450, guest: 300, amt: 2400 },
  { name: "Week 4", user: 180, guest: 220, amt: 2400 },
];

const RenderLineChart = () => {
  const [selectedValue, setSelectedValue] = useState("3");
  const [data, setData] = useState(dataintial);
  const [loading, setLoading] = useState(true);

  const handleSelectChange = (e) => {
    // console.log(selectedValue);
    setSelectedValue(e.target.value);

    
  };
  const callApi=()=>
  {
    axios
      .get(`http://localhost:3000/api/activities?value=${selectedValue}`)
      .then((response) => {
        const data = response.data.data;
        console.log(data); // Handle the response data as needed
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occur during the request
      });
  }
  useEffect(() => {
    callApi();
  }, [selectedValue])
  

  if (loading === true) return <div className="">Loading</div>;
  return (
    <div className="w-full bg-white p-4 pt-12 relative rounded-2xl">
      <div className="absolute top-5 text-black z-20 flex flex-row  md:flex-col">
        <h6 className="font-montserrat text-[18px] font-bold">Activities</h6>
        <select name="date" value={selectedValue}  onChange={handleSelectChange}>
          <option value="3">May - June 2021</option>
          <option value="4">June - July 2021</option>
          <option value="5">August - Sept 2021</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={270}>
        <LineChart width={1000} height={270} data={data}>
          <Line
            type="monotone"
            dataKey="guest"
            stroke="#E9A0A0"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="user"
            stroke="#9BDD7C"
            strokeWidth={3}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            height={36}
            iconType="circle"
          />
          <CartesianGrid vertical={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RenderLineChart;
