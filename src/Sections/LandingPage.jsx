import React, { useEffect, useState } from 'react'
import Header from "@/src/components/Header.dashboard";
import Cards from "@/src/components/LandingPage.components/Cards.dashboard";
import LineChart from "@/src/components/LandingPage.components/LineChart.dashboard";
import RenderPieChart from "@/src/components/LandingPage.components/PieChart.dashboard";
import Schedule from "@/src/components/LandingPage.components/Schedule.dashboard";
const LandingPage = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
      setDomLoaded(true);
    }, []);
  
  return (
    <div>
         <Header />
          <Cards />
          <LineChart />
          <div className="lg:flex gap-x-8 ">
            {domLoaded && <RenderPieChart />}
            <Schedule />
          </div>
    </div>
  )
}

export default LandingPage