import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteAlert } from "../components/Alert";
import { apiUrl } from "../Data";

const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState();
  const [loading, SetLoading] = useState(true);
  const [toggal, setToggal] = useState(false);
  const date = new Date();
  // console.log(today);

  const getTableData = async () => {
    setEditData(null);
    SetLoading(true);
    try {
      const res = await axios.get(apiUrl);
      setData(res.data);
    } catch (error) {
      console.log(error);
      SetLoading(false);
    } finally {
      SetLoading(false);
    }
  };

  const handleFormPop = () => {
    // localStorage.removeItem('data');
    setToggal(!toggal);
    return
    // console.log(toggal);
  };

  const handleDel = (id) => {
    return deleteAlert(getTableData, id);
  };

  const handleEdit = (id) => {
    const userData = data.find((i) => i.id === id);
    // console.log(userData);
    setEditData(userData);
    handleFormPop();
    return;
    // console.log("clicked");
  };

  // console.log(data);
  // console.log(loading);

  useEffect(() => {
    getTableData();
    setEditData();
  }, []);

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
        loading,
        getTableData,
        date
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
