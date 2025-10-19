import * as yup from 'yup';


export const FormSchema = yup.object({
  name: yup.string().min(2).max(50).trim().required('Name must be entered'),
  phone: yup.number().min(10).required('Phone is must'),
  vehicle: yup.string().min(8).max(12).trim().required('Vehicle Number is must'),
  incExpDate: yup.date().required('Inc. Expiry Date  is must'),
  pucExpDate: yup.date().required('Puc Expiry date is must')
})

 