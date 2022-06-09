import React,{useState} from "react";

function Counter (props){

const [count,setCount] = useState(0)

const onclick = () => {
    setCount(count + 1);
  };

return(
    <div className={`flex flex-row border-solid justify-center items-center border-2 rounded-lg h-20 w-40 border-${props.message}-900`}>
    {/* <div className="flex flex-row border-solid justify-center items-center border-2 rounded-lg h-20 w-40 border-black">  */}
        {/* <p className={`basis-1/3 text-center text-${props.message}-900`} >{props.message}</p> */}
        <p className={`ml-2 basis-1/3 text-center text-${ props.message }-900`} >{props.message}</p>
        <p className={`basis-1/3 text-center text-${props.message}-900`}>{count}</p>
        <button className={`text-white  bg-${props.message}-700 hover:bg-${props.message}-800 basis-1/3 font-medium rounded-full text-sm p-1 m-1  text-center`} onClick={onclick}>Click</button>
    </div>
)


}

export default Counter