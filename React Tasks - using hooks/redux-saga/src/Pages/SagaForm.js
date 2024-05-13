import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../src/Sagaform.css";
import SideBar from "../Layout/SideBar/SideBar";
import { postDataRequest, updateDataRequest } from "../Redux/Action/action";


const SagaForm = () => {
  const state = useSelector((res) => res.reducerSaga);
  let dispatch = useDispatch();
  let nav = useNavigate();
  const [loading, setLoading] = useState(false)
  async function validateName(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = name.length > 3;
        resolve(isValid);
      }, 500);
    });
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .test(
        "len",
        "Name must be more than 3 characters",
        async function (value) {
          if (!value) return true;

          const isNameValid = await validateName(value);
          return isNameValid;
        }
      ),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string()
      .required("Phone number is required")
      .test("len", "Phone number must be 10 digits", function (value) {
        if (!value) return true;

        const phoneNumber = String(value).replace(/\D/g, "");
        return phoneNumber.length === 10;
      }),
    password: Yup.string().required("Password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    // gender: Yup.string().required("Gender is required"),

    // selectlang: Yup.string()
    //   .required("Language is required")
    //   .notOneOf(["Select"], "Please select a valid language"),
    date: Yup.date().required("Date of Birth is required"),
  });

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    password: "",
    cpassword: "",
    selectlang: "",
    gender: "",
  });

  useEffect(() => {
    console.log(state.editObj);
    if (state.editObj) {
      setFormValues((prevValues) => ({
        ...prevValues,
        name: state.editObj.name || "",
        email: state.editObj.email || "",
        number: state.editObj.number || "",
        date: state.editObj.date || "",
        password: state.editObj.password || "",
        cpassword: state.editObj.cpassword || "",
        selectlang: state.editObj.selectlang || "",
        gender: state.editObj.gender || "",
      }));
    }
  }, [state.editObj]);

  return (
    // <Formik >
    <div className="d-flex">
      <SideBar />
      <div className="d-flex flex-column justify-content-center mx-lg-auto">
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            setLoading(true);
            // Handle form submission
            const formData = {
              name: values.name,
              email: values.email,
              number: values.number,
              date: values.date,
              password: values.password,
              cpassword: values.cpassword,
              selectlang: values.selectlang,
              gender: values.gender,
            };
                  
            if (formValues.id) {
              // Update existing data
              values.id = formValues.id;
              dispatch(updateDataRequest({ formValues: formValues }));
            } else {
              // Post new data
              dispatch(postDataRequest(values));
            }

            nav(`/sagatable`);

            console.log(values);

            // Do further actions like dispatching to Redux, etc.
          }}
        >
          {({ isSubmitting, touched, errors, setFieldTouched }) => (
            <Form className="card mx-lg-5">
              <div className="row">
                <div className="col-lg-6 text-start">
                  <label htmlFor="name" className="form-label">
                    Name<span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("name", true);
                    }}
                    placeholder="Enter Your Name"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    className="text-danger"
                    component="div"
                  />
                </div>
                <div className="col-lg-6 text-start">
                  <label htmlFor="father" className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter Your Email Address"
                    id="email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("email", true);
                    }}
                    autoComplete="true"
                    // value={email}
                    // value={formik.values.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.email && formik.errors.email && (
              <div className="text-danger">
                {formik.errors.email}
                <span>*</span>
              </div>
            )} */}
                  <ErrorMessage
                    name="email"
                    className="text-danger"
                    component="div"
                  />
                </div>

                <div className="col-lg-6 text-start">
                  <label htmlFor="age" className="form-label">
                    Mobile Number<span className="text-danger">*</span>
                  </label>
                  <Field
                    type="number"
                    name="number"
                    placeholder="Enter Your Mobile Number"
                    id="number"
                    className={`form-control ${
                      touched.number && errors.number ? "is-invalid" : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("number", true);
                    }}
                    // value={number}
                    // value={formik.values.number}
                    // onChange={(e) => setNumber(e.target.value)}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.number && formik.errors.number && (
              <div className="text-danger">
                {formik.errors.number}
                <span>*</span>
              </div>
            )} */}
                  <ErrorMessage
                    name="number"
                    className="text-danger"
                    component="div"
                  />
                </div>
                <div className="col-lg-6 text-start">
                  <label htmlFor="dob" className="form-label">
                    Date<span className="text-danger">*</span>
                  </label>
                  <Field
                    type="date"
                    name="date"
                    id="date"
                    className={`form-control ${
                      touched.date && errors.date ? "is-invalid" : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("date", true);
                    }}
                    // value={date}
                    // value={formik.values.date}
                    // onChange={(e) => setDate(e.target.value)}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.date && formik.errors.date && (
              <div className="text-danger">
                {formik.errors.date}
                <span>*</span>
              </div>
            )} */}
                  <ErrorMessage
                    name="date"
                    className="text-danger"
                    component="div"
                  />
                </div>

                <div className="col-lg-6 text-start">
                  <label htmlFor="city" className="form-label">
                    Password<span className="text-danger">*</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    autoComplete="true"
                    placeholder="Enter Your Password"
                    id="password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("password", true);
                    }}
                    // value={password}
                    // value={formik.values.password}
                    // onChange={(e) => setPassword(e.target.value)}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.password && formik.errors.password && (
              <div className="text-danger">
                {formik.errors.password}
                <span>*</span>
              </div>
            )} */}
                  <ErrorMessage
                    name="password"
                    className="text-danger"
                    component="div"
                  />
                </div>
                <div className="col-lg-6 text-start">
                  <label htmlFor="pincode" className="form-label">
                    Confirm Password<span className="text-danger">*</span>
                  </label>
                  <Field
                    type="password"
                    name="cpassword"
                    autoComplete="true"
                    placeholder="Confirm Your Password"
                    id="cpassword"
                    className={`form-control ${
                      touched.cpassword && errors.cpassword ? "is-invalid" : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("cpassword", true);
                    }}
                    // value={cpassword}
                    // value={formik.values.cpassword}
                    // onChange={(e) => setCpassword(e.target.value)}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.cpassword && formik.errors.cpassword && (
              <div className="text-danger">
                {formik.errors.cpassword}
                <span>*</span>
              </div>
            )} */}
                  <ErrorMessage
                    name="cpassword"
                    className="text-danger"
                    component="div"
                  />
                </div>

                <div className="col-lg-6 text-start">
                  <label htmlFor="language" className="form-label">
                    Language<span className="text-danger">*</span>
                  </label>
                  <Field
                    as="select"
                    className={`form-select ${
                      touched.selectlang && errors.selectlang
                        ? "is-invalid"
                        : ""
                    }`}
                    onFocus={(e) => {
                      setFieldTouched("selectlang", true);
                    }}
                    id="selectlang"
                    name="selectlang"
                    aria-label="Floating label select example"
                  >
                    <option value="Select">Select</option>
                    <option value="Tamil">Tamil</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Malayalam">Malayalam</option>
                  </Field>
                  <ErrorMessage
                    name="selectlang"
                    className="text-danger"
                    component="div"
                  />
                </div>
                {/* <div>
                          <label className="fw-bold float-start">Gender</label>
                          <br />
                          <Field
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                          />
                          <label htmlFor="male">Male</label>
                          <Field
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                          />
                          <label htmlFor="female">Female</label>
                          <ErrorMessage name="gender" component="div" className="text-danger" />

                        </div> */}

                <div className="col-md-6 text-start d-flex flex-column">
                  <label htmlFor="gender" className="form-label">
                    Gender<span className="text-danger">*</span>
                  </label>
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      name="gender"
                      id="male"
                      value="male"
                      className="form-check-input border-dark"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <Field
                      type="checkbox"
                      name="gender"
                      id="female"
                      value="female"
                      className="form-check-input border-dark"
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    className="text-danger"
                    component="div"
                  />
                </div>
              </div>

              <div className="leaf mt-4">
                <a className="bttn me-2">
                  <div className="bttn__line "></div>
                  <div className="bttn__line"></div>
                  <button
                    type="submit"
                    className="bttn__text border-0 border-pos"
                  >
                    Submit
                  </button>
                  <div className="bttn__drow1"></div>
                  <div className="bttn__drow2"></div>
                </a>
                {/* <a onclick="deleteForm()" className="button">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">Reset</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
              </a> */}
              </div>
              {/*  <div className="flex-strat d-flex">
              <input
                type="button"
                onclick="myFunction()"
                className="button_color me-3"
                value="Submit Form"
              />
    
              <input
                type="button"
                onclick="deleteForm()"
                className="button_color"
                value="Reset Fields"
              />
            </div>  */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
    //
    //   return (
    //     <div>
    //         <SideBar/>

    //       Hello Everyone
    //     </div>
    //   )
  );
};

export default SagaForm;
