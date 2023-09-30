import * as yup from "yup";

export const addEmployeeSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "First name should only contain alphabets")
    .min(6, "First name should be at least 6 characters")
    .max(10, "First name should not exceed 10 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Last name should only contain alphabets")
    .min(6, "Last name should be at least 6 characters")
    .max(10, "Last name should not exceed 10 characters"),

  email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email address"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^(\+94|0)[1-9][0-9]{8}$/, "Invalid LK phone number format"),

  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid gender"),
});
