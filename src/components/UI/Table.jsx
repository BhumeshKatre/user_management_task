import React, {  useEffect, useState } from "react";
import {  apiUrl } from "../../Data";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { LuSendHorizontal } from "react-icons/lu";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider";

const Table = ({ handleFormPop }) => {  
  const { data } = useAuth();
  console.log(data);
  const handleDel = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(()=>getTableData()).catch((err)=>console.log(err))
  }

  const handleEdit = (data) => {
    localStorage.setItem('data', JSON.stringify(data))
    handleFormPop();
    }

  // console.log('data',data)
  return (
    <div className="overflow-x-auto p-2 rounded-2xl overflow-hidden">

    <table  className=" md:min-w-full  border border-gray-50 overflow-auto ">
      <thead className=" rounded-2xl bg-white">
        <tr className="">
          <th className='p-2'>Name</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Vehicle</th>
          <th className="p-2">Ins.Exp.Date</th>
          <th className="p-2">PUC.exp.Date</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item, i) => (
            <tr
            key={i}
              className="border-t border-gray-100 hover:bg-sky-50  bg-sky-100">
              <td className="py-2 px-2 ">{item.name}</td>
              <td className="p-2"> {item.phone}</td>
              <td className="p-2">{item.vehicle}</td>
              <td className="p-2">{item.incExpDate}</td>
              <td className="p-2">{item.pucExpDate}</td>
              <td className="flex items-center py-2 px-2  justify-center gap-4 ">
                <button
                  className="text-2xl"
                  onClick={() => (handleEdit(item))}><CiEdit /></button>
                <button onClick={()=> handleDel(item.id)}><AiFillDelete /></button>
                <button><LuSendHorizontal /></button>
              </td>
            </tr>
          ))
        } 
        
      </tbody>
      </table>
    </div>

  );
};

export default Table;
