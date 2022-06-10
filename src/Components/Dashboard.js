import React from "react";
import Counter from "./Counter";


function Dashboard() {
  return (
    <div
      className="   rounded-md border-solid border-4 border-black grid 
        mobile:grid-cols-1  
        tablet:grid-cols-2
        desktop:grid-cols-3 gap-4 justify-items-center items-center px-2 py-4 w-full dark:border-white "
    >
      <Counter message={"red"} />
      <Counter message={"blue"} />
      <Counter message={"green"} />
      <Counter message={"yellow"} />
      <Counter message={"purple"} />
      <Counter message={"emerald"} />
      <Counter message={"cyan"} />
      <Counter message={"pink"} />
    </div>
  );
}

export default Dashboard;
