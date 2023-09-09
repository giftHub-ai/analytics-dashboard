import React from "react";
import {
  ResponsiveContainer,
  Heatmap,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  Line,
} from "recharts";

const data = [
  { product: "Product A", month: "Jan", performance: 80 },
  { product: "Product B", month: "Feb", performance: 90 },
  { product: "Product C", month: "Jan", performance: 8 },
  { product: "Product D", month: "Feb", performance: 50 },
  { product: "Product E", month: "Jan", performance: 30 },
  { product: "Product F", month: "Feb", performance: 80 },
  // Add more data points for other products and months
];

const Performance = () => {
  return (
    <>
      <div className="w-full bg-white p-4 pt-12 relative rounded-2xl">
      <div className="absolute top-5 text-black z-20 flex flex-row  md:flex-col">
        <h6 className="font-montserrat text-[18px] font-bold">Products</h6>
        <select name="date">
          <option value="3">Product A</option>
          <option value="4">Product B</option>
          <option value="5">Product C</option>
        </select>
      </div>{" "}
      {/* <p className="text-black"></p> */}
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="performance" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="performance" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </>
  );
};

export default Performance;
