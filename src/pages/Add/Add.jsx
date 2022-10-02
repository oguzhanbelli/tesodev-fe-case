import { useFormik } from "formik";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Add/Header/Header";
import Form from "../../components/Form/Form";
import validationSchema from "../../components/Form/validations";
import apiService from "../../db/userDb";
const Add = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      NameSurname: "",
      Country: "",
      Company: "",
      City: "",
      Email: "",
      Date: new Date().getFullYear().toString(),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      apiService.addUser(values);
    },
  });
  return (
    <>
      <div className="container">
        <Header searchValue={state} />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              <div className="resultContainer">
                <Form formik={formik} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Add;
