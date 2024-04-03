import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-[100%] bg-transparent px-[5vw] font-poppins"
    >
      <div className="flex flex-row w-[100%] py-[10vh] gap-2">
        
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
            <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[12vh] -translate-x-[3vw]"></div> {/* Red line */}
            <h2 className="font-sofia font-bold text-red-700 text-[20vh] drop-shadow-smaller">
              100+
            </h2>            
            <p className="text-[2vh] w-[50%] text-center -translate-y-[3vh]">receipes</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
            <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[12vh] -translate-x-[3vw]"></div> {/* Red line */}
            <h2 className="font-sofia font-bold text-red-700 text-[20vh] drop-shadow-smaller">
              10
            </h2>            
            <p className="text-[2vh] w-[50%] text-center -translate-y-[3vh]">years of experience</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
            <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[12vh] -translate-x-[3vw]"></div> {/* Red line */}
            <h2 className="font-sofia font-bold text-red-700 text-[20vh] drop-shadow-smaller">
              8
            </h2>            
            <p className="text-[2vh] w-[50%] text-center -translate-y-[3vh]">countries's desserts</p>
          </div>
        </div>
             
      </div>
    </section>
  );
}
