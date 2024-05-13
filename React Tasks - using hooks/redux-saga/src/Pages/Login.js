import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginImage from "../Images/abstract-vibrant-color-background_78474-190.avif";
import "bootstrap/dist/css/bootstrap.css";
import { BiUser, BiLock } from "react-icons/bi";
import { UseAuth } from "../Authentication/UseAuth";
import { useNavigate } from "react-router-dom";
import Dummy from "../Authentication/Dummy.json"
import '../../src/Login.css';

export const Login = () => {
  const auth = UseAuth();
  const nav = useNavigate();

  const initialValues = {
    user: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    user: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(Dummy)
    const list=Dummy.users.find((res)=>res.name === values.name&& res.password === values.password)
    console.log(list);
    auth.setAuthData(list)
    nav("/layout")
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <div className="container-fluid shadow-md-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="row py-4 py-sm-0">
              <div className="gx-0 col-lg-8 overflow-hidden vh-100 mb-4 mb-md-0 d-none d-sm-block position-relative">
                <img
                  src={loginImage}
                  className="h-100 w-100 object-fit-cover opacity-75"
                  alt=""
                />
              </div>
              <div className="position-absolute col-lg-7 ms-lg-5 ps-lg-5 d-none d-md-flex flex-column align-items-start justify-content-center top-50 end-25 bottom-50">
                <h1
                  className="mb-3 display-1 text-light"
                  style={{ fontFamily: "Mukta, serif" }}
                >
                  Welcome to website
                </h1>
                <p
                  className="fs-3 mb-5 text-start text-light"
                  style={{ fontFamily: "Mukta" }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat mollitia necessitatibus omnis ut eveniet velit
                  reiciendis enim itaque? Dolorum, aperiam?
                </p>
              </div>
              <div className="col-lg-4 d-flex align-items-center mt-5 mt-md-3 ">
                <div className="container py-sm-5 py-xs-0 py-md-0 px-xl-5 mx-xl-3">
                  <div className="mb-3">
                    <h3
                      className="fw-bold mb-md-5 mt-md-2 mb-4 icon-color"
                      style={{ fontFamily: "Mukta" }}
                    >
                      USER LOGIN
                    </h3>
                  </div>
                  <div className="mb-4 position-relative container px-4">
                    <BiUser className="ms-4 icon-position icon-color icon" />
                    <Field
                      type="text"
                      id="user"
                      name="user"
                      className={`form-control rounded-pill px-5 input-color${
                        touched.user && errors.user ? " is-invalid" : ""
                      }`}
                      placeholder="User name"
                    />
                    <ErrorMessage
                      name="user"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3 position-relative container px-4 mt-3">
                    <BiLock className="ms-4 icon-position icon-color icon" />
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className={`form-control px-5 rounded-pill input-color${
                        touched.password && errors.password ? " is-invalid" : ""
                      }`}
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="d-block d-sm-flex justify-content-between container mt-4">
                    <div className="">
                      <Field
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="form-check-input border border-dark ms-md-3 custom-checkbox rounded-circle"
                      />
                      <label
                        htmlFor="remember"
                        className="color form-check-label ms-md-1"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="mt-2 mt-md-0">
                      <label className="form-check-label color lables-font me-md-3">
                        Forget Password ?
                      </label>
                    </div>
                  </div>
                  <div className="mt-md-5 mt-4 mb-md-4">
                    <button
                      type="submit"
                      className=" btn button px-5 py-2 float-middle rounded-pill fw-bold text-light fs-5"
                      style={{ fontFamily: "Mukta" }}
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
