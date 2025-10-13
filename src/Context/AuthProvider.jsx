import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteAlert } from "../components/Alert";

const MyContext = createContext();
const AuthProvider = ({ children }) => {
  const apiUrl =
    "https://68d8056a2144ea3f6da72875.mockapi.io/user_management_puc";
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [toggal, setToggal] = useState(false);
  const date = new Date();
  const today = date.toLocaleDateString("en-Gb");
  // console.log(today);

  const getTableData = () => {
    setEditData(null);
    axios
      .get(apiUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
