import React, { useEffect, useState } from "react";
import { apiUrl } from "../../Data";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { LuSendHorizontal } from "react-icons/lu";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider";

const Table = ({ handleFormPop }) => {
  const {  data , handleDel , handleEdit , today} = useAuth();
  // console.log(data);

  return (
    <div className="overflow-x-auto rounded-md  border border-blue-400">
      {data && data.length > 0 ? (
        <>
          <table className=" md:min-w-full   rounded-2xl ">
            <thead className=" rounded-2xl bg-sky-200">
              <tr className="">
                <th className="p-2">Name</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Vehicle</th>
                <th className="p-2">Ins.Exp.Date</th>
                <th className="p-2">PUC.exp.Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-sky-50  odd:bg-white even:bg-gray-100 "
                >
                  <td className="py-2 px-2 ">{item.name}</td>
                  <td className="p-2"> {item.phone}</td>
                  <td className="p-2">{item.vehicle}
                  </td>
                  <td className="p-2">{item.incExpDate}
                    <span>{today > item.incExpDate ? 'expired' : ''}</span>
                  </td>
                  <td className="p-2">{item.pucExpDate}</td>
                  <td className="flex items-center py-2 px-2  justify-center gap-4 ">
                    <button
                      className="text-2xl hover:bg-sky-200 p-1 rounded-2xl text-blue-500"
                      onClick={() => handleEdit(item)}
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="text-2xl hover:bg-red-200 p-1 rounded-2xl text-red-600"
                      onClick={() => handleDel(item.id)}
                    >
                      <AiOutlineDelete />
                    </button>
                    <button
                    disabled
                      className="text-2xl hover:bg-green-200 p-1 rounded-2xl text-green-600 disabled:text-gray-300">
                      <LuSendHorizontal />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className="p-3 bg-sky-300 text-center text-gray-100 rounded-md ">
            <h3>No Data Available . Please add some entries</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
