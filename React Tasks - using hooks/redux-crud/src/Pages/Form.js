import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

import {
  addProduct,
  deleteRow,
  editRow,
  saveRow,
  selectProduct,
  updateQuantity,
  submitData,
  updateData,
  editData,
  editDataProducts,
} from "../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import StationaryTable from "./StationaryTable";
import CosmeticsTable from "./CosmeticsTable";

const updateGrandTotal = (state, action) => {
  switch (action.type) {
    case "UPDATE_GRAND_TOTAL":
      return action.payload;
    default:
      return state;
  }
};

const Form = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);
  console.log(product);
  const [view, setView] = useState(null);
  const [activeTab, setActiveTab] = useState("stdDeductionDetails");
  // const [tab, selectTab] = useState("")
  const [nameerr, setNameerr] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [numbererr, setNumbererr] = useState("");
  const [addresserr, setAddresserr] = useState("");
  const [dateerr, SetDateerr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  let nav = useNavigate();

  const addRow = () => {
    const val = validation();
    if (val) {
      return val;
    } else {
      if (!isEditing) {
        const newProduct = {
          productName: "",
          quantity: 0,
          amount: 0,
          totalAmount: 0,
        };
        dispatch(addProduct(newProduct));
        setIsEditing(true);
        setView(newProduct);
      }
    }
  };

  const addCosRow = () => {
    const val = validation();
    if (val) {
      return val;
    } else {
      if (!isEditing) {
        const newProduct = {
          productName: "",
          quantity: 0,
          amount: 0,
          totalAmount: 0,
        };
        dispatch(addProduct(newProduct));
        setIsEditing(true);
        setView(newProduct);
      }
    }
  };
  const validation = () => {
    let hasError = false;
    if (name.length < 3) {
      setNameerr("**Name required");
      hasError = true;
    } else {
      setNameerr("");
    }
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(number)) {
      setNumbererr("**Phone number required (exactly 10 digits)");
      hasError = true;
    } else {
      setNumbererr("");
    }
    if (address === "") {
      setAddresserr("**Address required");
      hasError = true;
    } else {
      setAddresserr("");
    }
    if (date === "") {
      SetDateerr("**Date required");
      hasError = true;
    } else {
      SetDateerr("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailerr("**Email required");
      hasError = true;
    } else {
      setEmailerr("");
    }

    return hasError;
  };

  const handleProductChange = (index, selectedProduct) => {
    const objFind = products.find((p) => p.productName === selectedProduct);
    console.log(objFind);
    dispatch(selectProduct(index, objFind));
  };

  const handleCosmeticsChange = (index, selectedProduct) => {
    const objFind = cosmeticsProducts.find(
      (p) => p.cosmeticsName === selectedProduct
    );
    console.log(objFind);
    dispatch(selectProduct(index, objFind));
  };

  const handleQuantityChange = (index, quantity) => {
    console.log(index, parseInt(quantity));
    console.log(products);
    dispatch(updateQuantity(index, parseInt(quantity)));
  };

  const products = [
    {
      id: "1",
      productName: "Pen",
      price: 10,
    },
    {
      id: "2",
      productName: "Pencil",
      price: 5,
    },
    {
      id: "3",
      productName: "Eraser",
      price: 3,
    },
    {
      id: "4",
      productName: "Scale",
      price: 15,
    },
  ];

  const cosmeticsProducts = [
    {
      ind: "1",
      cosmeticsName: "Foundation",
      cosmeticprice: 500,
    },
    {
      ind: "2",
      cosmeticsName: "Concealer",
      cosmeticprice: 450,
    },
    {
      ind: "3",
      cosmeticsName: "Lipstick",
      cosmeticprice: 300,
    },
    {
      ind: "4",
      cosmeticsName: "Eye Liner",
      cosmeticprice: 350,
    },
  ];

  const selectTab = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  useEffect(() => {
    if (product.editObj) {
      setName(product.editObj.name);
      setEmail(product.editObj.email);
      setNumber(product.editObj.number);
      setAddress(product.editObj.address);
      setDate(product.editObj.date);
      dispatch(editDataProducts(product.editObj.products));
    }
    const newGrandTotal = product.products.reduce(
      (total, data) => total + data.totalAmount,
      0
    );
    dispatch({ type: "UPDATE_GRAND_TOTAL", payload: newGrandTotal });
  }, [product.products]);

  const handleSave = (index) => {
    const selectedProduct = product.products[index].productName;
    const selectedCosProduct = product.cosmeticsProducts[index].cosmeticsName;
    const selectedPrice = products.find(
      (p) => p.productName === selectedProduct
    ).price;
    const selectedCosPrice = cosmeticsProducts.find(
      (p) => p.cosmeticsName === selectedCosProduct
    ).cosmeticprice;

    const amount = parseInt(product.products[index].quantity) * selectedPrice;
    const cosamount =
      parseInt(product.cosmeticsProducts[index].quantity) * selectedCosPrice;
    const totalAmount = amount * parseInt(product.products[index].quantity);
    const totalCosAmount =
      cosamount * parseInt(product.cosmeticsProducts[index].quantity);

    dispatch(saveRow(index, amount, totalAmount, cosamount, totalCosAmount,));
    setIsEditing(false);
  };

  const handleEdit = (index) => {
    dispatch(editRow(index));
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    dispatch(deleteRow(index));
    setIsEditing(false);
  };
  const handleCancel = (index) => {
    dispatch(deleteRow(index));
    setIsEditing(false);
  };

  const handleSubmit = () => {
    if (product.products.length === 0) {
      toast.warning("Please add at least one product before submitting.");
      return;
    }

    if (
      name.trim() === "" &&
      email.trim() === "" &&
      number.trim() === "" &&
      address.trim() === "" &&
      date.trim() === "" &&
      product.products.length === 0 &&
      product.userInfo.length === 0
    ) {
      toast.warning("Please fill in at least one field before submitting.");
      return;
    }

    if (product.editObj) {
      const payload = {
        id: product.editObj.id,
        name,
        email,
        address,
        grandTotal: product.grandTotal,
        date,
        number,
        products: product.products,
      };
      dispatch(updateData(payload));
      setIsEditing(false);
      addProduct("");
      nav(`/list`);
    } else {
      const payload = {
        id: uuidv4(),
        name,
        email,
        address,
        grandTotal: product.grandTotal,
        date,
        number,
        products: product.products,
      };
      dispatch(submitData(payload));
      setIsEditing(false);
      addProduct("");
      nav(`/list`);
    }
  };

  const edit = (index) => {
    dispatch(editData(index, product.userInfo[index]));
    console.log(product.userInfo[index]);
    setIsEditing(true);
  };

  return (
    <>
      <div className="container card mt-4 pt-4 px-4 form bg-transparent">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 input-data">
            <label htmlFor="name" className="fw-bold form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p id="name_error" className="text-danger">
              {nameerr}
            </p>
          </div>
          <div className="col-lg-5 input-data">
            <label htmlFor="email" className="fw-bold form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p id="email_error" className="text-danger">
              {emailerr}
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 input-data mt-4">
            <label htmlFor="number" className="fw-bold form-label">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <p id="number_error" className="text-danger">
              {numbererr}
            </p>
          </div>
          <div className="col-lg-5 input-data mt-4">
            <label htmlFor="date" className="fw-bold form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <p id="date_error" className="text-danger">
              {dateerr}
            </p>
          </div>
        </div>
        <div className="mt-3 address-change container flex-box">
          <div className="col-lg-5 input-data mt-3 mb-5">
            <label htmlFor="date" className="text-center label-add fw-bold">
              Address
            </label>
            <textarea
              type="Address"
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <p id="address_error" className="text-danger">
              {addresserr}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-4 flex-box">
        <button
          type="button"
          className="btn btn-primary"
          onClick={addRow}
          disabled={isEditing}
        >
          Add Row
        </button>
      </div> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <ul class="navbar-nav mr-auto">
          <li
            class={`nav-item${
              activeTab === "stationaryTable"
                ? "active bg-primary text-light"
                : "text-warning"
            }`}
          >
            <a
              class="nav-link"
              href="#stationaryTable"
              onClick={(e) => selectTab(e, "stationaryTable")}
            >
              <span className="fw-bold">Stationary</span>
            </a>
          </li>
          <li
            class={`nav-item ${
              activeTab === "cosmeticsTable"
                ? "active bg-primary text-light"
                : ""
            }`}
          >
            <a
              class="nav-link"
              href="#cosmeticsTable"
              onClick={(e) => selectTab(e, "cosmeticsTable")}
            >
              <span className="fw-bold">Cosmetics</span>
            </a>
          </li>
        </ul>
        {/* </div> */}
      </nav>
      <div className="mt-4 flex-box">
        {activeTab === "stationaryTable" ? (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={addRow}
            disabled={isEditing}
          >
            Add Stationary
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={addRow}
            disabled={isEditing}
          >
            Add Cosmetics
          </button>
        )}
      </div>
      {activeTab === "stationaryTable" ? (
        <>
          <StationaryTable
            products={products}
            handleSave={handleSave}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            handleDelete={handleDelete}
            data={product.cosmeticsProducts}
            handleSubmit={handleSubmit}
            product={product}
            handleProductChange={handleProductChange}
            handleQuantityChange={handleQuantityChange}
            isEditing={isEditing}
          />
          {/* <table className="table table-bordered table-secondary table-hover border-5 container mt-4 form">
            <thead>
              <tr>
                <th scope="col">SI.NO</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {product.products &&
                product.products.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {!data.flag ? (
                        <select
                          id="productName"
                          value={data.productName}
                          onChange={(e) =>
                            handleProductChange(index, e.target.value)
                          }
                        >
                          <option value=""></option>
                          {products.map((res) => (
                            <option
                              key={res.id}
                              value={res.productName}
                              disabled={res === ""}
                            >
                              {res.productName}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span>{data.productName}</span>
                      )}
                    </td>
                    <td>
                      {!data.flag ? (
                        <input
                          id="quantity"
                          type="number"
                          value={data.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, e.target.value)
                          }
                        />
                      ) : (
                        <span>{data.quantity}</span>
                      )}
                    </td>
                    <td>
                      {!data.flag ? (
                        <input
                          type="number"
                          id=" amount"
                          value={data.amount}
                          readOnly
                        />
                      ) : (
                        <span>{data.amount}</span>
                      )}
                    </td>
                    <td>
                      {!data.flag ? (
                        <input
                          type="number"
                          id="totalAmount"
                          value={data.totalAmount}
                          readOnly
                        />
                      ) : (
                        <span>{data.totalAmount}</span>
                      )}
                    </td>

                    <td>
                      {!data.flag ? (
                        <button
                          type="submit"
                          className="bg-primary rounded text-light"
                          onClick={() => handleSave(index)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-primary rounded text-light"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                      )}
                      {!data.flag ? (
                        <button
                          type="submit"
                          className="bg-danger rounded text-light mx-2"
                          onClick={() => handleCancel(index)}
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-danger rounded text-light mx-2"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex-box">
            <div className="border border-2 border-secondary p-1">
              <div>
                <span className="fw-bold text-success">
                  Discount: {product.DISCOUNT_RATE * 100}%
                </span>
                <span className="fw-bold text-danger mx-2">
                  GST: {product.GST_RATE * 100}%
                </span>
              </div>
              <div className="flex-box">
                <label className="fw-bold">Grand Total :</label>
                <span className="fw-bold"> {product.grandTotal}</span>
              </div>
            </div>
          </div>
          <div className="flex-box">
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleSubmit}
              disabled={isEditing}
            >
              Submit
            </button>
          </div> */}
        </>
      ) : (
        <>
          <CosmeticsTable
            cosmeticsProducts={cosmeticsProducts}
            handleSave={handleSave}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            handleDelete={handleDelete}
            data={product.products}
            handleSubmit={handleSubmit}
            product={product}
            handleCosmeticsChange={handleCosmeticsChange}
            handleQuantityChange={handleQuantityChange}
            isEditing={isEditing}
          />
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Form;
