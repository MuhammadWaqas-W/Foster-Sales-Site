import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import locationIcon from "@root/assets/img/location-icon.png";
import callsIcon from "@root/assets/img/calls-icon.png";
import salesIcon from "@root/assets/img/sales-icon.png";
import supportIcon from "@root/assets/img/support-icon.png";

export const contactFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "firstName",
      label: "First Name",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "lastName",
      label: "Last Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "companyName",
      label: "Company Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "email",
      label: "Email",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "phone",
      label: "Phone Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "hearAbout",
      label: "How did you hear about us?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "address1",
      label: "Address 1",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "address2",
      label: "Address 2",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    otherOptions: {
      name: "privacy",
      label: "You agree to our friendly privacy policy.",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
];

export const defaultValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  hearAbout: "",
  address1: "",
  address2: "",
  privacy: "",
  comments: "",
};
export const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  hearAbout: Yup.string(),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
  privacy: Yup.string().required("Required"),
  comments: Yup.string(),
});

export const cardsData = [
  {
    id: 1,
    icon: locationIcon,
    title: "Chat to sales",
    description: `Speak to our friendly team.`,
    contact: "info@fosterapp.co.uk",
  },
  {
    id: 2,
    icon: callsIcon,
    title: "Chat to support",
    description: `We’re here to help.`,
    contact: "info@fosterapp.co.uk",
  },
  {
    id: 3,
    icon: salesIcon,
    title: "Visit us",
    description: `Celystik`,
    contact: `6-9, The square, Stockley park, Hayes, Uxbridge UB11 1FW`,
  },
  {
    id: 4,
    icon: supportIcon,
    title: "Call us",
    description: `Mon-Fri from 8am to 5pm.`,
    contact: `+92 (0)123 456 789`,
  },
];
