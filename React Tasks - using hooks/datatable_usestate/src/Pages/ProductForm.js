
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { API_URL } from "../Services/Api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const ProductForm = () => {
  const { id } = useParams();
  console.log(id);
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
  const [statusError, setstatus] = useState(false);
  const [dateError, setDate] = useState("");
  const [emailError, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const val = await validation();
    if (val) {
      if (id) {
        await edit(id, Object);
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
      status: "",
      date: "",
      email: "",
    });
  };

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

  const post = async (Object) => {
    const res = await axios.post(API_URL, Object);
    nav("/list");
  };

  const edit = async (id, Object) => {
    const res = await axios.put(API_URL + id, Object);
    nav("/list");
  };
  useEffect(() => {
    if (id) {
      const getdata = async (data) => {
        const res = await axios.get(API_URL + data);
        setObject(res.data);
      };
      getdata(id);
    }
  }, [id]);

  const statuscheck = (e) => {
    const value = e.target.checked;
    console.log(value);
    if (value) {
      setObject({ ...Object, status: "Active" });
    } else {
      setObject({ ...Object, status: "InActive" });
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="d-flex justify-content-center card p-5 shadow">
        <div className="col-lg-12 ms-5">
        <h1>Product Details</h1>
        </div>
        <div className="col-4">
          <lable for="product name">Name : </lable>
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
        <div className="col-4">
          <lable for="product amount">Amount : </lable>
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
        <div className="input-group d-flex">
          <label for="company name" className="ms-3" >Company: </label>
          <select
            id="company"
            className="ms-2 border-black"
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
        <div className="input-group col-4">
          <lable for="Status" className="ms-3" >Status : </lable>
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
        <div className="col-4">
          <lable for="date">Date : </lable>
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
        <div className="col-4">
          <lable for="email">Email : </lable>
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
};

export default ProductForm;
