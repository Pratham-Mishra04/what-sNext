import React from "react";
import Image from "next/image";
const ProjectTab = ({name, desp, img, tags, link}) => {
  return (
    <a href={link}>
  <div className="w-full h-64 flex flex-wrap items-center justify-around mb-3 box-border border-[1px] hover:border-discoverYellow ease-in-out border-white bg-lightBlack-200">
      <div className="w-1/6 h-full flex justify-around items-center">
        <Image src= {img?`/${img}`:"/people.svg"} alt="project" width={100} height={100} />
      </div>
      <div className="w-5/6 h-full">
        <div className="w-full h-full flex flex-col ">
          <div className="h-1/6">
            <p className="w-full h-full text-4xl font-bold px-2  border-l-2 text-discoverBlue border-b-2 border-white">
              {name}
            </p>
          </div>
          <div className="h-4/6">
            <p className="w-full h-full px-2 border-b-2 border-l-2 border-white">
              {desp}
            </p>
          </div>
          <div className="h-1/6 my-2">
          {
              tags.map((el, index)=>{
                return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {el.replace('_', ' ')}
              </span>
              })
            }
          </div>
        </div>
      </div>
    </div>
    </a>
   
  );
};

export default ProjectTab;
