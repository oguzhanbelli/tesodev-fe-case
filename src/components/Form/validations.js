import * as yup from "yup";

const validations = yup.object().shape({
  NameSurname: yup
    .string()

    .required("Zorunlu Alan"),
  Email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Zorunlu Alan"),
  Country: yup
    .string()

    .required("Zorunlu Alan"),
  City: yup
    .string()

    .required("Zorunlu Alan"),
});

export default validations;
