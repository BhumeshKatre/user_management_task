import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../Data";
import { deleteAlert } from "../components/Alert";


const MyContext = createContext();
const AuthProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [toggal, setToggal] = useState(false);
  const date = new Date();
  const today = date.toLocaleDateString('en-Gb')
  console.log(today);

  const handleFormPop = () => {
    // localStorage.removeItem('data');
    setToggal(!toggal);
    // console.log(toggal);
  };
  const getTableData = () => {
    axios
      .get(apiUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleDel = (id) => {
    deleteAlert(getTableData , id);
  }


  const handleEdit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    handleFormPop();
    console.log("clicked");
  };

  useEffect(() => {
    getTableData();
  }, []);

  // console.log(data);

  return <MyContext.Provider value={{ data, toggal, handleDel, handleEdit, handleFormPop, today }}>{children}</MyContext.Provider>;
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
