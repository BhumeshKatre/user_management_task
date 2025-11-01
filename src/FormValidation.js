import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormSchema = yup.object({
  name: yup.string().min(2,'Please , enter your name... ').max(50).trim().required("Name must be entered"),
  phone: yup
    .string()
    .min(10, "Mobile number must be 10 digits")
    .max(10, "Mobile number must be 10 digits")
    .required("Mobile Number is required")
  .matches(phoneRegExp , "Enter valid mobile number")
  ,
  vehicle: yup
    .string()
    .min(8 ,'enter valid Vehicle number')
    .max(10 , 'Enter valid Vehicle Number ' )
    .trim()
    .matches(
      /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/i
      ,'Invalid vehicle number format l'
    )
    .required("Vehicle Number is must"),
  incExpDate: yup.date().required("Inc. Expiry Date  is must"),
  pucExpDate: yup.date().required("Puc Expiry date is must"),
});
