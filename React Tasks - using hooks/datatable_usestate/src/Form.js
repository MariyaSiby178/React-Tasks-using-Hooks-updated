// // export default Submit;
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// import {
//   postDetails,
//   updateDetails,
//   getDetails,
//   deleteDetails,
// } from "./Services/Api";
// import { useParams } from "react-router-dom";

// function Submit() {
//   const [items, setItems] = useState([]);
//   // const router = useParams()
//   const [formData, setFormData] = useState({
//     id: null,
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [error, setError] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // API URL
//   // const apiUrl = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/hooks/";

//   // Function to fetch data from the API
//   const fetchData = async () => {
//     try {
//       const response = await getDetails();
//       console.log(response);
//       if (response.statusText === "OK") {
//         setItems(response.data);
//       } else {
//         console.error("Failed to fetch data from the API");
//       }
//     } catch (error) {
//       console.error("Error while fetching data:", error);
//     }
//   };

//   // Call the API to fetch data when the component mounts
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleAdd = () => {
//     if (validateInputs(formData.name, formData.email, formData.password)) {
//       if (editingIndex !== null) {
//         // Editing an existing item
//         const updatedItems = [...items];
//         const itemToEdit = updatedItems[editingIndex];
//         itemToEdit.name = formData.name;
//         itemToEdit.email = formData.email;
//         itemToEdit.password = formData.password;

//         // Send a PUT request to update the item on the server
//         updateItemOnServer(itemToEdit);
//         setItems(updatedItems);
//         setEditingIndex(null);
//       } else {
//         // Creating a new item
//         const newItem = { ...formData };

//         // Send a POST request to create the new item on the server
//         createItemOnServer(newItem);
//         setItems([...items, newItem]);
//       }

//       setFormData({
//         id: null,
//         name: "",
//         email: "",
//         password: "",
//       });

//       setError({ name: "", email: "", password: "" });
//     }
//   };

 

//   const validateInputs = (name, email, password) => {
//     const nameRegex = /^[A-Za-z ]{3,}$/;
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

//     if (!name.match(nameRegex)) {
//       setError({
//         ...error,
//         name: "Please enter a valid name (letters and spaces only).",
//       });
//       return;
//     } else {
//       setError({
//         ...error,
//         name: "",
//       });
//     }
//     if (!email.match(emailRegex)) {
//       setError({ ...error, email: "Please enter a valid email address." });
//       return false;
//     } else {
//       setError({ ...error, email: "" });
//     }
//     if (!password.match(passwordRegex)) {
//       setError({
//         ...error,
//         password: "Password must be at least 6 characters long.",
//       });
//       return false;
//     } else {
//       setError({
//         ...error,
//         password: "",
//       });
//     }
//     setError({
//       name: "",
//       email: "",
//       password: "",
//     });
//     return true;
//   };

//   const createItemOnServer = async (item) => {
//     try {
//       const response = await postDetails(item);
//       if (response.statusText === "OK"){
//         setItems(...formData, item)
//       }else {
//         console.error("Failed to fetch data from the API");
//       }
//     } catch (error) {
//       console.error("Error while creating the item:", error);
//     }
//   };

//   const updateItemOnServer = async (item) => {
//     try {
//       const response = await updateDetails(item);
  
//       if (response.statusText === "OK") {
//         const updatedItems = [...items]; // Create a copy of the items array
  
//         for (let i = 0; i < updatedItems.length; i++) {
//           if (updatedItems[i].id === item.id) {
//             updatedItems[i] = item; // Replace the item in the array
//             break; // Exit the loop since we found and updated the item
//           }
//         }
  
//         setItems(updatedItems);
//       } else {
//         console.error("Update on the server failed with status code: " + response.status);
//       }
//     } catch (error) {
//       console.error("Error while updating the item:", error);
//     }
//   };
  

//   return (
//     <div id="body" className="text-center">
//       <h2 className="mt-3 text-center">CRUD Operation</h2>
//       <div
//         id="contact-form"
//         className="mt-3 d-flex flex-column align-items-center "
//       >
//         <input
//           id="name"
//           type="text"
//           Data={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           placeholder="Enter name"
//           className="mb-3"
//         />
//         {error && <p className="text-danger">{error.name}</p>}
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           placeholder="Enter email address"
//           className="mb-3"
//         />
//         {error && <p className="text-danger">{error.email}</p>}
//         <input
//           type="password"
//           value={formData.password}
//           onChange={(e) =>
//             setFormData({ ...formData, password: e.target.value })
//           }
//           placeholder="Enter password"
//           className="mb-3"
//         />
//         {error && <p className="text-danger">{error.password}</p>}
//         <div id="bar" className="text-center">
//           <button className="text-center" onClick={handleAdd}>
//             {editingIndex !== null ? "Update" : "Submit"}
//           </button>
//         </div>
//       </div>
    
//     </div>
//   );
// }

// export default Submit;






import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiUrl } from './Services/Api'
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = () => {
  const {id} = useParams()
console.log(id);

 
  const [formData, setformData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    attendance:"",
    job: ""
  });
  const [array, setArray] = useState([]);
  const [error, setId] = useState();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [idError, setidError] = useState("");
  const [dateError, setDateError] = useState("");
  const [attendanceError, setAttendanceError] = useState("");
  const [jobError, setJobError] = useState("");
  let nav = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    console.log(formData);
    await validation()
    if(id){
      console.log(id);
      console.log(formData);
      await Edit(id,formData)
    }
    else{
      await post(formData)
    }
    // await post(
    //   formData
    // );
    setformData({
      name: "",
      email: "",
      number:"",
      date: "",
    attendance:"",
      job: ""
    });
  };

 
  const validation = async (e) => {
    let errorData = false;

    if (formData.name < 3) {
      setNameError("NAME REQUIRED");
      errorData = true;
    } else {
      setNameError("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("EMAIL REQUIRED");
      errorData = true;
    } else {
      setEmailError("");
    }
  
    if (formData.number< 6) {
        setidError("EMPLOYEE ID REQUIRED");
        errorData = true;
      } else {
        setidError("");
      }
      if (formData.date=='') {
        setDateError("DATE REQUIRED");
        errorData = true;
      } else {
        setDateError("");
      }
    if (formData.attendance=='') {
      setAttendanceError("DATE REQUIRED");
      errorData = true;
    } else {
      setAttendanceError("");
    }
      if (formData.job ==="Select") {
        setJobError("JOB REQUIRED");
        errorData = true;
      } else {
        setJobError("");
      }
    if (errorData) {
      return false;
    }
    console.log(formData);
    console.log(error);
    if (error >= 0) {
      let update = array.map((item, index) =>
        index === error ? { ...item, ...formData } : item
      );
      console.log(update);
      setId()
      setArray(update);
    } else {
      setArray([...array, formData]);
    }
    setformData({
      name: "",
      email: "",
      number:"",
      date: "",
    attendance:"",
      job: ""
    });
   
  };
  const post =async(formData)=>{
    const res = await axios.post(
      ApiUrl,formData
    )
    nav("/list");

  }
  const Edit = async (id,formData) =>{
    console.log(id);
    console.log(formData);
    const res = await axios.put(ApiUrl+id,formData)
    nav('/list')
  }
  useEffect(() =>{
    if(id){
      console.log(id);
      const getItem = async (data)=>{
        console.log(data);
      const res = await axios.get(ApiUrl+data)
      console.log(res);
      setformData(res.data)
    
      }
      getItem(id)
    }
    }, [id])

     
  const attendradio=(e)=>{
    const Data = e.target.Data;
    setformData({ ...formData, attendance: Data });
}
  return (
    <div>
      <div className="form1">
        <form>
        <div className="color form-floating mb-3">
            <input
              type="text"
              className="form-control"
              Data={formData.name}
              onChange={(e) => {
                setformData({ ...formData, name: e.target.Data });
                setNameError("");
              }}
              id="name"
              name="name"
              placeholder="Name"
            />
            <label htmlFor="name">Employee Name</label>
            <p id="name_error" className="text-danger fw-bold">
              {nameError}
            </p>
          </div>

          <div className=" form-floating mb-3">
            <input
              type="email"
              className="form-control"
              Data={formData.email}
              onChange={(e) => {
                setformData({ ...formData, email: e.target.Data });
                setEmailError("");
              }}
              id="email"
              name="email"
              placeholder="email"
            />
            <label htmlFor="email">Email</label>
            <p id="name_error" className="text-danger fw-bold"
            >
              {emailError}
            </p>
          </div>

          <div className=" form-floating mb-3">
            <input
              type="number"
              className="form-control"
              Data={formData.number}
              onChange={(e) => {
                setformData({ ...formData, number: e.target.Data });
                setidError("");
              }}
              id="email"
              name="email"
              placeholder="email"
            />
            <label htmlFor="number">Employee Id</label>
            <p id="id_error" className="text-danger fw-bold"
            >
              {idError}
            </p>
          </div>

          <div class="color form-floating mb-3">
            <input
              type="date"
              class="form-control"
              Data={formData.date}
              onChange={(e) => {
                setformData({ ...formData, date: e.target.Data });
                setDateError("");
              }}
              id="date"
              name="date"
              placeholder="date"
            />
            <label for="date">Join Date</label>
            <p id="name8" class="text-danger">
              {dateError}

            </p>
          </div>

          <div className="attend mb-3">
            <label>Attendance</label>
            <br></br>
            <label>In</label>
            <input type="radio"
            className="in"
            id="in"
            name="attendance"
            Data="Present"
            checked={formData.attendance ==="Present"}
            onChange={attendradio}
              
            ></input>
            <label>Out</label>
            <input type="radio"
            className="out"
            name="attendance"
            Data="Absent"
            checked={formData.attendance ==="Absent"}
            onChange={attendradio}
            ></input>
            <p id="Attendance_err" className="text-warning fw-bold ms-5">
               {attendanceError}
            </p>
          </div>

          <div class="color form-floating mb-3">
            <select
              class="form-select"
              id="job"
              aria-label="Floating label select example"
              Data={formData.job}
              onChange={(e) => {
                setformData({ ...formData, job: e.target.Data });
                setAttendanceError("");
              }}
            >
              <option>Select</option>
              <option>Manager</option>
              <option>Worker</option>
            </select>
            <label for="job">Job</label>
            <p id="name7" class="text-danger">
            {jobError}

            </p>

          </div>

          <div className=" form-floating mb-3">
            <input
              type="submit"
              Data="Submit"
              className="bg-primary border-0 rounded text-white p-2"
              onClick={store}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;