import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as emailjs from "emailjs-com";
import { SignupSchema } from "./validation";
import api from "../../constants/api";
import "./style.css";
import constants from "../../constants";

/**
 * SignIn component
 * @returns
 */
function SignInForm({ setIsModalOpen, setDisplayModal }) {
  const [loader, setLoader] = useState(false);
  /**
   * add to google sheets method
   * @param {*} values
   */
  const addToGoogleSheets = async (values) => {
    try {
      const response = await axios.post(api.GOOGLE_SHEETS_API, values);
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  /**
   * email confirmation email
   * @param {*} values
   */
  const sendConfirmationEmail = async (values) => {
    try {
      const templateParams = {
        to_name: values.name,
      };
      const response = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      if (response) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };
  return (
    <>
      <h3 className="signUpHeadingForm">{constants.SIGN_UP_FORM}</h3>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          setLoader(true);
          /** to add form data to google sheets */
          const response = await addToGoogleSheets(values);
          if (response) {
            /** to send confirmation email */
            const emailResponse = await sendConfirmationEmail(values);
            if (emailResponse) {
              toast.success(constants.USER_REGISTERED_SUCCESSFULLY, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                setDisplayModal(false);
                setIsModalOpen(false);
                setLoader(false);
              }, 2000);
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label className="form-label">
              <b>Name</b>
            </label>
            <Field
              name="name"
              placeholder="name"
              className="input-group mb-3 form-control"
            />
            {errors.name && touched.name ? (
              <div className="error">{errors.name}</div>
            ) : null}

            <label className="form-label">
              <b>Phone Number</b>
            </label>
            <Field
              name="phoneNumber"
              placeholder="phone number"
              className="input-group mb-3 form-control"
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <div className="error">{errors.phoneNumber}</div>
            ) : null}

            <label className="form-label">
              {" "}
              <b>Email</b>
            </label>
            <Field
              name="email"
              placeholder="email"
              type="email"
              className="input-group mb-3 form-control"
            />
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
            <button
              type="submit"
              className="btn btn-info submitBtn https://sheet.best/"
            >
              {loader ? (
                <div className="spinner-border text-light" role="status"></div>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default SignInForm;
