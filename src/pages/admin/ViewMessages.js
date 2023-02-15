import MessagesTab from "@/components/MessagesTab.js/MessagesTab";
import React from "react";

const ViewMessages = ({messages}) => {
  return (
    <>
      <div className="flex flex-col h-full w-full items-center justify-around">
        <div className="w-full h-[7%] font-bold text-3xl flex items-center justify-around">
          View Your Messages !
        </div>
        <div className="w-full h-[93%] flex items-center justify-around">
          <div className="overflow-y-scroll h-[98%] w-[98%]  border-[1px] flex flex-wrap justify-around items-center gap-[1rem] pt-[1rem]">
            {
              messages.length==0?"No Messages to Display":messages.map((el)=>{
                return   <MessagesTab key={el._index} name={el.name} message={el.message} id={el._id} isAnon={el.isAnonymous}/>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMessages;
