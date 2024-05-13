import React, { useReducer, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  postError,
  postSuccess,
  getIdSuccess,
  getIdError,
  putSuccess,
  putError,
} from "../Reducer/Action";
import { initialState, Reducer } from "../Reducer/Reducer";
import { postData, getIdData, updateData } from "../Service/Api";
import { POST_REQ_SUCCESS, POST_REQ_FAILURE } from "../Reducer/Type";
// import { useNavigate } from "react-router-dom";

function Form() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { id } = useParams();
  const [Object, setObject] = useState({
    name: "",
    amount: "",
    company: "",
    status: "InActive",
    date: "",
    email: "",
  });
  let nav = useNavigate();

  const [nameError, setName] = useState("");
  const [amountError, setAmount] = useState("");
  const [companyError, setCompany] = useState("");
  const [statusError, setStatus] = useState(false);
  const [dateError, setDate] = useState("");
  const [emailError, setEmail] = useState("");

  const validation = async () => {
    let hasError = true;
    if (Object.name.length < 3) {
      setName("**Name required");
      hasError = false;
    } else {
      setName("");
    }
    if (Object.amount.length < 3) {
      setAmount("**Amount required");
      hasError = false;
    } else {
      setAmount("");
    }
    if (Object.company === "") {
      setCompany("**Company required");
      hasError = false;
    } else {
      setCompany("");
    }
    if (Object.date === "") {
      setDate("**Date required");
      hasError = false;
    } else {
      setDate("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Object.email)) {
      setEmail("**Email required");
      hasError = false;
    } else {
      setEmail("");
    }

    if (hasError) {
      return true;
    } else {
      return false;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const val = await validation();
    if (val) {
      if (id) {
        await editApi(id, Object);
      } else {
        await post(Object);
      }
    } else {
      return;
    }
    setObject({
      name: "",
      amount: "",
      company: "",
      status: "Inactive",
      date: "",
      email: "",
    });
  };

  const post = async (e) => {
    try {
      const addItem = await postData(e);
      nav(`/list`);
      console.log(e);
      if (addItem.status === 200 || addItem.status === 201) {
        dispatch(postSuccess(Object));
      }
    } catch (error) {
      dispatch(postError(error));
    }
  };

  const editApi = async (id, data) => {
    try {
      const editItem = await updateData(id, data);
      console.log(data);

      if (editItem.status === 200 || editItem.status === 201) {
        dispatch(putSuccess(id, data));
        nav(`/list`);
      }
    } catch (error) {
      dispatch(putError(error));
    }
  };

  // useEffect(() => {
  //   editApi();
  // }, []);

  useEffect(() => {
    const get = async () => {
      try {
        const getItem = await getIdData(id);
        if (getItem.status === 200 || getItem.status === 201) {
          dispatch(getIdSuccess(getItem.data));
          setObject(getItem.data);
        }
      } catch (error) {
        dispatch(getIdError(error));
      }
    };
    get();
  }, [id]);

  const statuscheck = (e) => {
    const value = e.target.checked;
    console.log(value);
    if (value) {
      setObject({ ...Object, status: "Active" });
    } else {
      setObject({ ...Object, status: "Inactive" });
    }
  };

  return (
    <div className="d-flex justify-content-center  mt-5">
      <form className="d-flex justify-content-center form card bg-color p-5 shadow">
        <div className="d-flex justify-content-center">
          <h2>Product Details</h2>
        </div>
        <div className="col-4 input-group">
          <lable htmlFor="product name">Name : </lable>
          <input
            type="text"
            id="name"
            value={Object.name}
            onChange={(e) => {
              setObject({ ...Object, name: e.target.value });
              setName("");
            }}
          ></input>
          <p id="name_error" className="text-danger">
            {nameError}
          </p>
        </div>
        <div className="col-4 input-group">
          <lable htmlFor="product amount">Amount : </lable>
          <input
            type="number"
            id="amount"
            value={Object.amount}
            onChange={(e) => {
              setObject({ ...Object, amount: e.target.value });
              setAmount("");
            }}
          ></input>
          <p id="amount_error" className="text-danger">
            {amountError}
          </p>
        </div>
        <div className="col-4 input-group">
          <label htmlFor="company name">Company : </label>
          <select
            id="company"
            value={Object.company}
            onChange={(e) => {
              setObject({ ...Object, company: e.target.value });
              setCompany("");
            }}
          >
            <option value="" selected disabled></option>
            <option value="Benz">Benz</option>
            <option value="Audi">Audi</option>
          </select>
          <p id="company_error" className="text-danger">
            {companyError}
          </p>
        </div>
        <div className="col-4 input-group">
          <lable htmlFor="Status">Status : </lable>
          <input
            type="checkbox"
            checked={Object.status === "Active"}
            onChange={statuscheck}
            className="status-check"
            id="status"
          ></input>
          <p id="status_error" className="text-danger ">
            {statusError}
          </p>
        </div>
        <div className="col-4 input-group">
          <lable htmlFor="date">Date : </lable>
          <input
            type="date"
            id="date"
            value={Object.date}
            onChange={(e) => {
              setObject({ ...Object, date: e.target.value });
              setDate("");
            }}
          ></input>
          <p id="date_error" className="text-danger">
            {dateError}
          </p>
        </div>
        <div className="col-4 input-group">
          <lable htmlFor="email">Email : </lable>
          <input
            type="email"
            id="email"
            value={Object.email}
            onChange={(e) => {
              setObject({ ...Object, email: e.target.value });
              setEmail("");
            }}
          ></input>
          <p id="email_error" className="text-danger">
            {emailError}
          </p>
        </div>
        <div>
          <button type="submit" onClick={submit} className="rounded fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

// import React, { useReducer, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import { createUser, getUser, updateUser } from "../Service/Api";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { FaEye, FaEyeSlash, FaAngleDoubleLeft } from "react-icons/fa";
// import actionTypes from "../Reducer/Action";
// import { initialState, reducer } from "../Reducer/Reducer";

// function Reducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const navigate = useNavigate();
//   const router = useParams();
//   const nameRegex = /^[a-zA-Z ]{3,30}$/;
//   useEffect(() => {
//     if (router.id) {
//       getId(router.id);
//       setIsEditing(true);
//     }
//   }, [router.id]);

//   const setIsEditing = (editing) => {
//     dispatch({ type: actionTypes.SET_IS_EDITING, value: editing });
//   };

//   const validateField = (field, value) => {
//     let error = "";
//     switch (field) {
//       case "name":
//         if (!value) {
//           error = "Name is required*";
//         } else if (!nameRegex.test(value)) {
//           error = "Invalid Name format*";
//         }
//         break;
//     }
//     return error;
//   };

//   const handleFieldChange = (field, value) => {
//     dispatch({ type: actionTypes.SET_FIELD, field, value });
//     const errors = { ...state.errors };
//     errors[field] = validateField(field, value);
//     dispatch({ type: actionTypes.SET_ERRORS, errors });
//   };

//   const validateForm = () => {
//     const { formData } = state;
//     const errors = {};

//     for (const field in formData) {
//       const value = formData[field];
//       errors[field] = validateField(field, value);
//     }

//     const isFormValid = Object.values(errors).every((error) => !error);

//     dispatch({ type: actionTypes.SET_ERRORS, errors });

//     return isFormValid;
//   };

//   const postData = async () => {
//     try {
//       await createUser(state.formData);

//       console.log("Posted Data:", state.formData);
//     } catch (error) {
//     } finally {
//     }
//     navigate("/list");
//   };

//   const Edituser = async () => {
//     const isvalid = validateForm();
//     if (!isvalid) {
//       return;
//     }
//     try {
//       await updateUser(state.id, state.formData);

//       navigate("/list");
//     } catch (error) {}
//   };

//   const getId = async (id) => {
//     try {
//       const userdata = await getUser(id);
//       dispatch({ type: actionTypes.SET_ID, value: userdata.data.id });
//       dispatch({
//         type: actionTypes.SET_FIELD,
//         field: "name",
//         value: userdata.data.name,
//       });
//       dispatch({
//         type: actionTypes.SET_FIELD,
//         field: "amount",
//         value: userdata.data.amount,
//       });
//     } catch (error) {
//       dispatch({ type: actionTypes.SET_ID, value: "" });
//       dispatch({ type: actionTypes.SET_FIELD, field: "name", value: "" });
//       dispatch({ type: actionTypes.SET_FIELD, field: "amount", value: "" });
//     } finally {
//     }
//   };
//   const handleClick = () => {
//     if (state.isEditing) {
//       Edituser();
//     } else {
//       const isvalid = validateForm();
//       if (!isvalid) {
//         return;
//       }
//       postData();
//     }
//   };

//   return (
//     <div>
//       <div className="main-container w-75 mx-auto">
//         <div className="form-container row shadow-lg mt-5">
//           <div className="d-flex justify-content-start">
//             <Link to="/list">
//               <Button className="rounded-pill mt-4" variant="primary">
//                 <FaAngleDoubleLeft className="me-2 mb-1" />
//                 Back
//               </Button>
//             </Link>
//           </div>
//           <div className="text-center fw-bold fs-2 mb-3">STUDENT FORM</div>
//           <div className="col-md-6">
//             <label className="fw-bold">
//               Name <span className="text-danger">*</span>
//             </label>
//             <input
//               className={`form-control ${
//                 state.errors.name
//                   ? "is-invalid"
//                   : state.formData.name
//                   ? "is-valid"
//                   : ""
//               }`}
//               name="Name"
//               value={state.formData.name}
//               onChange={(event) => {
//                 handleFieldChange("name", event.target.value);
//               }}
//               placeholder="Enter your Name"
//               required
//             />
//             <p className="error-message">{state.errors.name}</p>
//           </div>
//           <div className="col-md-6">
//             <label className="fw-bold">
//               Amount <span className="text-danger">*</span>
//             </label>
//             <input
//               className={`form-control ${
//                 state.errors.amount
//                   ? "is-invalid"
//                   : state.formData.amount
//                   ? "is-valid"
//                   : ""
//               }`}
//               name="Amount"
//               type="number"
//               value={state.formData.amount}
//               onChange={(event) => {
//                 handleFieldChange("amount", event.target.value);
//               }}
//               placeholder="Enter your Amount"
//               required
//             />
//             <p className="error-message">{state.errors.amount}</p>
//           </div>
//           <div className="d-flex justify-content-center">
//             <div className="">
//               <Button className="rounded-pill mb-4 mt-4" onClick={handleClick}>
//                 {state.isEditing ? "Update" : "Submit"}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Reducer;
