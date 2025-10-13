import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { apiUrl } from "../../Data";
import { successAlert } from "../Alert";
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../Context/AuthProvider";

const FormModal = ({ toggal, handleFormPop }) => {
 const {editData} = useAuth()
  const data = localStorage.getItem("data");
  // console.log(data);
  const getData = editData;
  // console.log(getData);

  return (
    <>
      <div
        style={{
          top: toggal ? "0" : "-100vh",
        }}
        className="w-full h-full backdrop:blur-2xl bg-white/80 flex items-center justify-center absolute  left-0   duration-700 "
      >
        <div className="relative  w-90  border  p-4 rounded-2xl border-sky-200 bg-white duration-700">
          <button
            onClick={handleFormPop}
            className=" absolute top-5 right-5 cursor-pointer"
          >
            <IoCloseOutline className="text-2xl font-bold" />
          </button>

          <Formik
            initialValues={{
              name: getData?.name || "",
              phone: getData?.phone || "",
              vehicle: getData?.vehicle || "",
              incExpDate: getData?.incExpDate || "",
              pucExpDate: getData?.pucExpDate || "",
            }}
            onSubmit={(values, actions) => {
              getData
                ? axios
                    .put(`${apiUrl}/${getData?.id}`, {
                      name: values.name,
                      phone: values.phone,
                      vehicle: values.vehicle,
                      incExpDate: values.incExpDate,
                      pucExpDate: values.pucExpDate,
                    })
                    .then(() => successAlert())
                    .catch((err) => console.log(err))
                : axios
                    .post(apiUrl, {
                      name: values.name,
                      phone: values.phone,
                      vehicle: values.vehicle,
                      incExpDate: values.incExpDate,
                      pucExpDate: values.pucExpDate,
                    })
                    .then(() => {
                      successAlert();
                    })
                    .catch((err) => console.log(err));
              actions.setSubmitting(false);
              handleFormPop();
            }}
          >
            {(props) => (
              <form action="" onSubmit={props.handleSubmit}>
                <h1 className="text-2xl font-semibold p-2">
                  Add new Customer{" "}
                </h1>
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    required
                    onChange={props.handleChange}
                    value={name || props.values.name}
                    placeholder="nitish kumar"
                    type="text"
                    name="name"
                    id="name"
                    className="border p-1 border-gray-400 rounded-md outline-sky-300"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    required
                    onChange={props.handleChange}
                    value={props.values.phone}
                    className="border p-1 border-gray-400 rounded-md outline-sky-300"
                    type="number"
                    name="phone"
                    id="name"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="phone">Vehicle</label>
                  <input
                    required
                    value={props.values.vehicle}
                    onChange={props.handleChange}
                    className="border p-1 border-gray-400 rounded-md outline-sky-300"
                    type="text"
                    placeholder="MH35AC3434"
                    name="vehicle"
                    id="name"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="incExpDate">Inc. exp. Date</label>
                    <input
                      required
                      onChange={props.handleChange}
                      value={props.values.incExpDate}
                      className="border p-1 border-gray-400 rounded-md outline-sky-300"
                      type="date"
                      name="incExpDate"
                      id="IncExpDate"
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="pucExpDate">PUC exp. Date</label>
                    <input
                      required
                      onChange={props.handleChange}
                      value={props.values.pucExpDate}
                      className="border p-1 border-gray-400 rounded-md outline-sky-300"
                      type="date"
                      name="pucExpDate"
                      id="name"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-sky-600 text-white mt-3"
                >
                  Save
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormModal;
