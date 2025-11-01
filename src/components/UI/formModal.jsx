import axios from "axios";
import {  useFormik } from "formik";
import { IoCloseOutline } from "react-icons/io5";
import { apiUrl } from "../../Data";
import { successAlert } from "../Alert";
import { useAuth } from "../../Context/AuthProvider";
import { FormSchema } from "../../FormValidation";

const FormModal = () => {
  const { editData, getTableData, setEditData ,handleFormPop  , toggal} = useAuth();
  // console.log(editData);
  
  const { handleSubmit, handleChange, values, errors, touched, setSubmitting } =
    useFormik({
      initialValues: {
        name: editData?.name || "",
        phone: editData?.phone || "",
        vehicle: editData?.vehicle || "",
        incExpDate: editData?.incExpDate || "",
        pucExpDate: editData?.pucExpDate || "",
      },
      validationSchema: FormSchema,
      onSubmit: async (values, actions) => {
        editData
          ? await axios
              .put(`${apiUrl}/${editData?.id}`, {
                name: values.name,
                phone: values.phone,
                vehicle: values.vehicle,
                incExpDate: values.incExpDate,
                pucExpDate: values.pucExpDate,
              })
              .then(() => {
                const msg = "data updted";
                getTableData();
                successAlert(msg);
              })
              .catch((err) => console.log(err))
          : await axios
              .post(apiUrl, {
                name: values.name,
                phone: values.phone,
                vehicle: values.vehicle,
                incExpDate: values.incExpDate,
                pucExpDate: values.pucExpDate,
              })
              .then(() => {
                const msg = "new customer added";
                getTableData();
                successAlert(msg);
              })
              .catch((err) => console.log(err));
        actions.setSubmitting(false);
        handleFormPop();
      },
    });

  // console.log(errors);
  return (
    <>
      <div
        style={{
          top: toggal ? "0" : "-100vh",
        }}
        className="w-full min-h-[100%] backdrop:blur-2xl bg-white/80 flex items-center justify-center fixed left-0 duration-500 "
      >
        <div className="relative  w-90  border  p-4 rounded-2xl border-sky-200 bg-white duration-700">
          <button
            onClick={() => {
              handleFormPop()
              setEditData('')
            }}
            className=" absolute top-5 right-5 cursor-pointer"
          >
            <IoCloseOutline className="text-2xl font-bold" />
          </button>

          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold p-2">Add new Customer </h1>
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                value={values.name}
                placeholder="nitish kumar"
                type="text"
                name="name"
                id="name"
                className="border p-1 border-gray-400 rounded-md outline-sky-300"
              />
              {errors.name && touched.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="phone">Phone</label>
              <input
                onChange={handleChange}
                value={values.phone}
                className="border p-1 border-gray-400 rounded-md outline-sky-300"
                type="number"
                name="phone"
                id="name"
              />
              {errors.phone && touched.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="phone">Vehicle</label>
              <input
                value={values.vehicle}
                onChange={handleChange}
                className="border p-1 border-gray-400 rounded-md outline-sky-300 uppercase"
                type="text"
                placeholder="MH35AC3434"
                name="vehicle"
                id="vehicle"
              />
              {errors.vehicle && touched.vehicle && (
                <span className="text-red-500 text-sm">{errors.vehicle}</span>
              )}
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="incExpDate">Inc. exp. Date</label>
                <input
                  onChange={handleChange}
                  value={values.incExpDate}
                  className="border p-1 border-gray-400 rounded-md outline-sky-300"
                  type="date"
                  name="incExpDate"
                  id="IncExpDate"
                />
                {errors.incExpDate && touched.incExpDate && (
                  <span className="text-red-500 text-sm">
                    {errors.incExpDate}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="pucExpDate">PUC exp. Date</label>
                <input
                  onChange={handleChange}
                  value={values.pucExpDate}
                  className="border p-1 border-gray-400 rounded-md outline-sky-300"
                  type="date"
                  name="pucExpDate"
                  id="name"
                />
                {errors.pucExpDate && touched.pucExpDate && (
                  <span className="text-red-500 text-sm">
                    {errors.pucExpDate}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 hover:bg-sky-700 bg-sky-400 text-white mt-3"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormModal;
