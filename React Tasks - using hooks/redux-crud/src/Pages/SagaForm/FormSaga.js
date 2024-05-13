import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import {
  postDataRequest,
  updateDataRequest,
} from "../../Redux/Action/actionSaga";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

const FormSaga = () => {
  let dispatch = useDispatch();
  const nav = useNavigate();
  const state = useSelector((res) => res.reducerSaga);
  console.log(state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [selectlang, setSelectlang] = useState("");
  const [gender, setGender] = useState("");

  // const validation = () => {
  //   let hasError = false;
  //   if (name.length < 3) {
  //     setNameerr("**Name required");
  //     hasError = true;
  //   } else {
  //     setNameerr("");
  //   }
  //   const phoneNumberRegex = /^\d{10}$/;
  //   if (!phoneNumberRegex.test(number)) {
  //     setNumbererr("**Phone number required (exactly 10 digits)");
  //     hasError = true;
  //   } else {
  //     setNumbererr("");
  //   }
  //   const passwordRegex =
  //     /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
  //   if (!passwordRegex.test(password)) {
  //     setPassworderr("**Password required");
  //     hasError = true;
  //   } else {
  //     setPassworderr("");
  //   }
  //   if (cpassword !== password) {
  //     setPassworderr("**Password required");
  //     hasError = true;
  //   } else {
  //     setPassworderr("");
  //   }
  //   if (date === "") {
  //     setDateerr("**Date required");
  //     hasError = true;
  //   } else {
  //     setDateerr("");
  //   }
  //   if (selectlang === "") {
  //     setSelectlangerr("**Date required");
  //     hasError = true;
  //   } else {
  //     setSelectlangerr("");
  //   }
  //   if (gender === "") {
  //     setGendererr("**Date required");
  //     hasError = true;
  //   } else {
  //     setGendererr("");
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setEmailerr("**Email required");
  //     hasError = true;
  //   } else {
  //     setEmailerr("");
  //   }

  //   return hasError;
  // };

  const post = useCallback(() => {
    // const val = validation();

    const formData = {
      name,
      email,
      number,
      date,
      password,
      cpassword,
      selectlang,
      gender,
    };

    if (state.editObj) {
      formData.id = state.editObj.id;
      dispatch(updateDataRequest(formData));
      nav("/stable");
    } else {
      dispatch(postDataRequest(formData));
      nav("/stable");
    }
    setName("");
    setEmail("");
    setNumber("");
    setDate("");
    setPassword("");
    setCpassword("");
    setSelectlang("");
    setGender("");
  }, [
    dispatch,
    name,
    email,
    number,
    date,
    password,
    cpassword,
    selectlang,
    gender,
  ]);

  useEffect(() => {
    console.log(state.obj);
    if (state.obj) {
      nav("/stable");
    }
  }, [state.obj, nav]);
  useEffect(() => {
    console.log(state.editObj);
    if (state.editObj) {
      setName(state.editObj.name);
      setEmail(state.editObj.email);
      setNumber(state.editObj.number);
      setDate(state.editObj.date);
      setPassword(state.editObj.password);
      setCpassword(state.editObj.cpassword);
      setSelectlang(state.editObj.selectlang);
      setGender(state.editObj.gender);
    }
  }, [state.editObj]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      date: "",
      password: "",
      cpassword: "",
      selectlang: "",
      gender: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name Required";
      }
      if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.number) {
        errors.number = "Mobile number Required";
      } else if (!/^\d{10}$/i.test(values.number)) {
        errors.number = "Invalid number";
      }
      if (!values.date) {
        errors.date = "Date Required";
      }
      if (!values.password) {
        errors.password = "Password Required";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
          values.password
        )
      ) {
        errors.password = "Password must contain atleast 8 characters, a number and a special character"; 
      }
      if (!values.cpassword) {
        errors.cpassword = "Confirm password Required";
      } else if (values.cpassword !== values.password) {
        errors.cpassword = "Invalid Password";
      }
      if (!values.selectlang) {
        errors.selectlang = "Please select a Language";
      }
      if (values.gender !== "Male" && values.gender !== "Female") {
        errors.gender = "Please select a Gender";
      }

      return errors;
    },
    onSubmit: (values) => {
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

      if (state.editObj) {
        formData.id = state.editObj.id;
        dispatch(updateDataRequest(formData));
        nav("/stable");
      } else {
        dispatch(postDataRequest(formData));
        nav("/stable");
      }
      formik.resetForm();
    },
  });

  return (
    // <Formik >
    <div className="container d-flex justify-content-center mt-5">
      <form className="card" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              id="name"
              name="name"
              // value={name}
              value={formik.values.name}
              // onChange={(e) => setName(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* <p value={nameerr} className="text-danger"></p> */}
            {/* <ErrorMessage name="fullname" component="div" /> */}
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">
                {formik.errors.name}
                <span>*</span>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="father" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email Address"
              id="email"
              className="form-control"
              autoComplete="true"
              // value={email}
              value={formik.values.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">
                {formik.errors.email}
                <span>*</span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Mobile Number<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter Your Mobile Number"
              id="number"
              className="form-control"
              // value={number}
              value={formik.values.number}
              // onChange={(e) => setNumber(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.number && formik.errors.number && (
              <div className="text-danger">
                {formik.errors.number}
                <span>*</span>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">
              Date<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control"
              // value={date}
              value={formik.values.date}
              // onChange={(e) => setDate(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date && (
              <div className="text-danger">
                {formik.errors.date}
                <span>*</span>
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              name="password"
              autoComplete="true"
              placeholder="Enter Your Password"
              id="password"
              className="form-control"
              // value={password}
              value={formik.values.password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">
                {formik.errors.password}
                <span>*</span>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="pincode" className="form-label">
              Confirm Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              name="cpassword"
              autoComplete="true"
              placeholder="Confirm Your Password"
              id="cpassword"
              className="form-control"
              // value={cpassword}
              value={formik.values.cpassword}
              // onChange={(e) => setCpassword(e.target.value)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cpassword && formik.errors.cpassword && (
              <div className="text-danger">
                {formik.errors.cpassword}
                <span>*</span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="language" className="form-label">
              Language<span className="text-danger">*</span>
            </label>

            <select
              className="form-select"
              aria-label="Default select example"
              id="selectlang"
              value={formik.values.selectlang}
              // onChange={(e) => setSelectlang(e.target.value)}
              // value={formik.values.selectlang}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select The Language</option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
            </select>
            {formik.touched.selectlang && formik.errors.selectlang && (
              <div className="text-danger">
                {formik.errors.selectlang}
                <span>*</span>
              </div>
            )}
          </div>

          <div className="col-md-6 d-flex flex-column">
            <label htmlFor="gender" className="form-label">
              Gender<span className="text-danger">*</span>
            </label>
            <div className="form-check">
              <input
                className="form-check-input border-dark"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formik.values.gender === "Male"}
                onChange={formik.handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border-dark"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formik.values.gender === "Female"}
                onChange={formik.handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-danger">{formik.errors.gender}</div>
            )}
          </div>
        </div>

        <div className="leaf mt-4">
          <a className="button me-2">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <button type="submit" className="button__text border-0">
              Submit
            </button>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
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
      </form>
    </div>
    // </Formik>
  );
};

export default FormSaga;
