import Swal from 'sweetalert2'

export const successAlert = () => Swal.fire({
  title: "New Customer Added",
  icon: "success",
  draggable: true
});
