import React, { useEffect, useState } from "react";
import { apiUrl } from "../../Data";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { LuSendHorizontal } from "react-icons/lu";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider";
import { redirect, useNavigate } from "react-router-dom";

const Table = ({ handleFormPop }) => {
  const { data, handleDel, handleEdit, today } = useAuth();
  const navigate = useNavigate();
  // console.log(data);

  // data.map((item)=>console.log(item.incExpDate > today))

  const sendReminder = (phone) => {
    const msg = "Your insurance expired";
    const url = `https://wa.me/91${phone}/?text=${msg}`;
    window.location.href = url;
  };

  return (
    <div className="overflow-x-auto rounded-md  border border-gray-100">
      {data && data.length > 0 ? (
        <>
          <table className=" md:min-w-full   rounded-2xl ">
            <thead className=" rounded-2xl bg-sky-400">
              <tr className="text-gray-100">
                <th className="p-2 border-r border-gray-100">Name</th>
                <th className="p-2 border-r border-gray-100">Phone</th>
                <th className="p-2 border-r border-gray-100">Vehicle</th>
                <th className="p-2 border-r border-gray-100">Ins.Exp.Date</th>
                <th className="p-2 border-r border-gray-100">PUC.exp.Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-sky-50  odd:bg-white even:bg-gray-100 "
                >
                  <td className="py-2 px-2 border-r border-gray-300">{item.name}</td>
                  <td className="p-2 border-r border-gray-300"> {item.phone}</td>
                  <td className="p-2 border-r border-gray-300">{item.vehicle}</td>
                  <td className="p-2 text-center border-r border-gray-300">{item.incExpDate}</td>
                  <td className="p-2 text-center border-r border-gray-300">{item.pucExpDate}</td>
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
                      onClick={() => sendReminder(item.phone)}
                      disabled
                      className="text-2xl hover:bg-green-200 p-1 rounded-2xl text-green-600 disabled:text-gray-300"
                    >
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
