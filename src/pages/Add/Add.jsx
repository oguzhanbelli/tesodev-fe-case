import { useFormik } from "formik";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Add/Header/Header";
import Form from "../../components/Form/Form";
import validationSchema from "../../components/Form/validations";
import apiService from "../../db/userDb";
const Add = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      NameSurname: "",
      Country: "",
      Company: "",
      City: "",
      Email: "",
      Date: new Date().getFullYear().toString(),
    },

    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        apiService.addUser(values);
        toast("Added Succesfull", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
      } catch (e) {
        toast(e, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
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
