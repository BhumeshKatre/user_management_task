import React from "react";

const Loader = () => {
  return (
    <div className=" fixed top-0 left-0 backdrop-blur-sm bg-white  flex justify-center items-center w-full h-[100vh] z-40">
      <div className="text-2xl font-bold ">
        <div className="border-t-2 border-blue-500 rounded-full h-20 w-20 animate-spin p-2  duration-500">
          <div className="border-r-2 border-blue-500 rounded-full h-16 w-16 animate-spin">
            <div className="border-r-2 border-blue-500 rounded-full h-12 w-12 animate-spin">
              <div className="border-r-2 border-blue-500 rounded-full h-8 w-8 animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
