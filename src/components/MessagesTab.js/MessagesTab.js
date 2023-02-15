import axios from "axios";
import React from "react";

const MessagesTab = ({id, name, message, isAnon}) => {
  const deleteHandler = async () =>{
    await axios.delete(`http://localhost:3000/api/messages/${id}`)
    // console.log("Message Deleted")
  }
  return (
    <div className="w-[90%] h-64 flex flex-wrap items-center justify-around mb-3 box-border border-[1px]  ease-in-out border-discoverBlue bg-lightBlack-200">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col ">
          <div className="h-1/6">
            <p className="w-full  h-full text-4xl font-bold px-2  border-l-2 text-discoverBlue border-b-2 border-discoverBlue">
              {name}
            </p>
          </div>
          <div className="h-4/6">
            <p className="w-full text-white h-full px-2 border-b-2 border-l-2 border-discoverBlue">
              {message}
            </p>
          </div>
          <div className="h-1/6 py-3 flex items-center justify-start">
            <button onClick={deleteHandler} className="inline-flex w-1/5 items-center justify-center h-10 px-10 py-0 text-xl font-semibold text-center hover:text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2  hover:border-discoverBlue border-solid  cursor-pointer select-none text-discoverPink border-discoverPink hover:border-2 focus:shadow-xs focus:no-underline">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesTab;
