import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "", user: 100, guest: 200, amt: 2400 },
  { name: "Week 1", user: 400, guest: 400, amt: 2400 },
  { name: "Week 2", user: 150, guest: 200, amt: 2400 },
  { name: "Week 3", user: 450, guest: 300, amt: 2400 },
  { name: "Week 4", user: 180, guest: 220, amt: 2400 },
];

const RenderLineChart = () => {
  return (
    <div className="w-full bg-white p-4 pt-12 relative rounded-2xl">
      <div className="absolute top-5 text-black z-20">
        <h6 className="font-montserrat text-[18px] font-bold">Activities</h6>
        <select name="date" id="">
          <option value="3_2021">May - June 2021</option>
          <option value="3_2021">May - June 2021</option>
          <option value="3_2021">May - June 2021</option>
        </select>
      </div>
      <LineChart width={1000} height={270} data={data}>
        <Line
          type="monotone"
          dataKey="guest"
          stroke="#E9A0A0"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="user" stroke="#9BDD7C" strokeWidth={3} />
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
    </div>
  );
};

export default RenderLineChart;
