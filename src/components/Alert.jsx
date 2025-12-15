import Swal from "sweetalert2";
import { apiUrl } from "../Data";
import axios from "axios";

export const successAlert = (text) =>
  Swal.fire({
    title: text,
    icon: "success",
    draggable: true,
  });

export const deleteAlert = (getTableData, id) =>
  Swal.fire({
    title: "Are you sure?",
    text: `Delete Customer with Id :${id}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${apiUrl}/api/users/${id}`).then(() => getTableData()).catch((err) => console.log(err))
      Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });
    }
  });

  export const warningAlert = (text) =>
    Swal.fire({
      icon: "warning",
      title: "Already Registered",
      text: text,
      footer: "Please check the vehicle number",
    });