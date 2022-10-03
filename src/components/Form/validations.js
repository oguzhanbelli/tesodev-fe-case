import * as yup from "yup";

const validations = yup.object().shape({
  NameSurname: yup
    .string()

    .required("Required Field"),
  Email: yup.string().email().required("Required Field"),
  Country: yup
    .string()

    .required("Required Field"),
  City: yup
    .string()

    .required("Required Field"),
});

export default validations;
