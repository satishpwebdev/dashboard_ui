import React from "react";
import Bars from "./Bars";
import Pie from "./Pie";
const Charts = () => {
  return (
    <section className="mt-6 md:flex  items-center justify-center gap-6">
        <Bars></Bars>
      {/* <div className="h-72 w-1/3 bg-red-200 rounded-lg"> */}
        <Pie></Pie>
      {/* </div> */}
    </section>
  );
};

export default Charts;
