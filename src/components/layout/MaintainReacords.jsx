import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Table from "../UI/Table";
import FormModal from "../UI/formModal";
import { FaPlus } from "react-icons/fa6";


const MaintainReacords = () => {
  const [toggal, setToggal] = useState(false);
  const handleFormPop = () => {
    localStorage.clear();
    setToggal(!toggal);
    // console.log(toggal);
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold p-3">Customers Records</h1>
      <div className="p-2 flex md:flex-row flex-col justify-between gap-4">
        <div className="flex gap-2 border-1 border-gray-400 bg-gray-100 items-center md:justify-center px-3 rounded-xl md:w-80">
          <CiSearch />
          <input
            className="py-2 outline-none text-sm md:w-60 w-100 "
            type="text"
            placeholder="search by name , phone or vehicle.."
            name=""
            id=""
          />
        </div>
        <button
          onClick={handleFormPop}
          className="px-3 py-2 text-white font-semibold bg-sky-600 rounded-md flex justify-center items-center gap-2 w-40"
        >
          <span><FaPlus /></span>
          Add Customer
        </button>
      </div>

      <div className="p-4">
        <Table handleFormPop={handleFormPop} />
      </div>

      {toggal && <FormModal toggal={toggal} handleFormPop={handleFormPop} />}
    </div>
  );
};

export default MaintainReacords;
