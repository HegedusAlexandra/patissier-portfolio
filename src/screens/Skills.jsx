import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="w-[100%]  font-poppins">
      <div className="flex flex-row w-[100%] bg-transparent px-[5vw] py-[10vh] gap-2">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
            <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[12vh] -translate-x-[3vw]"></div>{" "}
            {/* Red line */}
            <h2 className="font-sofia font-bold text-red-700 text-[20vh] drop-shadow-smaller">
              100+
            </h2>
            <p className="text-[2vh] w-[50%] text-center -translate-y-[3vh]">
              receipes
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
            <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[12vh] -translate-x-[3vw]"></div>{" "}
            {/* Red line */}
            <h2 className="font-sofia font-bold text-red-700 text-[20vh] drop-shadow-smaller">
              10
            </h2>
            <p className="text-[2vh] w-[50%] text-center -translate-y-[3vh]">
              years of experience
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
            <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[12vh] -translate-x-[3vw]"></div>{" "}
            {/* Red line */}
            <h2 className="font-sofia font-bold text-red-700 text-[20vh] drop-shadow-smaller">
              8
            </h2>
            <p className="text-[2vh] w-[50%] text-center -translate-y-[3vh]">
              countries's desserts
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items center bg-transparent px-[5vw] py-[10vh] gap-[10vh] bg-white">
        <div className="flex flex-row w-[100%] h-[50vh]">
          <div className="flex flex-col w-[50%] pr-[20vw]">
            <h2 className="font-sofia drop-shadow-smaller text-[#6DAAE3] text-[8vh] mb-[4vh]">
              technical skills
            </h2>
            <p>
              making websites and this a short introduction so you can develop
              sympahy with memaking websites and this a short introduction so
              you can develop sympahy with memaking websites and this a short{" "}
            </p>
          </div>
          <div className="w-[50%]">
            <img className="w-[100%] h-[50vh] bg-blue-600" />
          </div>
        </div>
        <div className="flex flex-row w-[100%] h-[50vh]">
          <div className="w-[50%]">
            <img className="w-[100%] h-[50vh] bg-blue-600" />
          </div>
          <div className="flex flex-col items-end w-[50%] pl-[20vw]">
            <h2 className="font-sofia drop-shadow-smaller text-[#6DAAE3] text-[8vh] mb-[4vh]">
              soft skills
            </h2>
            <p >
              making websites and this a short introduction so you can develop
              sympahy with memaking websites and this a short introduction so
              you can develop sympahy with memaking websites and this a short{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-[100%] h-[50vh]">
          <div className="flex flex-col w-[50%] pr-[20vw]">
            <h2 className="font-sofia drop-shadow-smaller text-[#6DAAE3] text-[8vh] mb-[4vh]">
              languages
            </h2>
            <p>
              making websites and this a short introduction so you can develop
              sympahy with memaking websites and this a short introduction so
              you can develop sympahy with memaking websites and this a short{" "}
            </p>
          </div>
          <div className="w-[50%]">
            <img className="w-[100%] h-[50vh] bg-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
}