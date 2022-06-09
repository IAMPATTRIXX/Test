import React from "react";
import Counter from "./Counter";

function Dashboard() {
    return(
        <div className="desktop:mt-20 desktop:ml-40 rounded-md border-solid border-4 border-black grid 
        mobile:grid-cols-1 mobile:mt-7 mobile:ml-14 
        tablet:grid-cols-2 tablet:mt-9 tablet:ml-20
        desktop:grid-cols-3 gap-4 justify-items-center items-center px-2 py-4 w-9/12">
            <Counter message={"red"} />
            <Counter message={"blue"} />
            <Counter message={"green"} />
            <Counter message={"yellow"} />
            <Counter message={"purple"} />
            <Counter message={"emerald"} />
            <Counter message={"cyan"} />
        </div>
        

    )
}

export default Dashboard;
