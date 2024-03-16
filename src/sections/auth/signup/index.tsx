import * as Yup from "yup";

export const defaultValues = {
  firstName: "",
  lastName: "",
  bussinessName: "",
  agencyName: "",
  agencyPostCode: "",
  phoneNumber: "",
  bussinessEmail: "",
  registrationNumber: "",
  password: "",
  confirmPassword: "",
};

export const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  bussinessName: Yup.string().required("Required"),
  agencyName: Yup.string().required("Required"),
  agencyPostCode: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  bussinessEmail: Yup.string().required("Required"),
  registrationNumber: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});

export { default as ReactHookForm } from "./SignupForm";
