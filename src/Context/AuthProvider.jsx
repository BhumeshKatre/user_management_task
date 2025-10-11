import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../Data";

const MyContext = createContext();

const value = {};
const AuthProvider = ({children}) => {
  const [data, setData] = useState([]);

  const getTableData = () => {
    axios
      .get(apiUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTableData();
  }, []);

  console.log(data);

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
