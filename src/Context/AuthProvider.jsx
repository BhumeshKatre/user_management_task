import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteAlert } from "../components/Alert";
import { apiUrl } from "../Data";

const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [toggal, setToggal] = useState(false);
  const date = new Date();
  const today = date.toLocaleDateString("en-Gb");
  // console.log(today);

  const getTableData = async () => {
    setEditData(null);
    SetLoading(true)
    try {
      const res = await axios.get(apiUrl)
      setData(res.data)
    } catch (error) {
      console.log(error);
      SetLoading(false)
    }finally {
      SetLoading(false)
    }    
  };

  const handleFormPop = () => {
    // localStorage.removeItem('data');
    setToggal(!toggal);
    // console.log(toggal);
  };

  const handleDel = (id) => {
    deleteAlert(getTableData, id);
  };

  const handleEdit = (item) => {
    setEditData(item);
    localStorage.setItem("data", JSON.stringify(data));
    handleFormPop();
    console.log(editData);
    // console.log("clicked");
  };

  useEffect(() => {
    getTableData();
  }, [data]);

  // console.log(data);
  // console.log(loading);
  return (
    <MyContext.Provider
      value={{
        data,
        toggal,
        handleDel,
        setEditData,
        editData,
        handleEdit,
        handleFormPop,
        today,
        loading
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
