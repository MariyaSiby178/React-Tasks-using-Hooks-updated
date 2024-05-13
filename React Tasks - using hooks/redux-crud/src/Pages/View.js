import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewData } from "../Redux/Action/action";
import { useLocation, useNavigate } from "react-router-dom";

function View() {
  const product = useSelector((state) => state.productReducer);
let location = useLocation()
  console.log(product);
  let nav = useNavigate();
  //   useEffect(() => {
  // console.log(product)
  //   })
  const backtoPage = () => {
    nav(`/list`);
  };

  return (
    <div>
      <div className="container card invoice p-5  mt-5">
        <div className=" container text-start">
          <hr></hr>
          <p>
            <span className="fw-bold">Name: </span>
            {product.editObj.name}
          </p>
          <p>
            <span className="fw-bold">Email: </span>
            {product.editObj.email}
          </p>
          <p>
            <span className="fw-bold">Mobile: </span>
            {product.editObj.number}
          </p>
          <p>
            <span className="fw-bold">Address: </span>
            {product.editObj.address}
          </p>
          <p>
            <span className="fw-bold">Date: </span>
            {product.editObj.date}
          </p>
          <hr></hr>
        </div>
        <div className=" container mt-3 text-start">
          <h6>Product Details</h6>
          <table className="table mt-3 ">
            <thead>
              <tr className="table-info">
                <th scope="col">SI.NO</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {product.editObj.products.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.productName}</td>
                  <td>{data.quantity}</td>
                  <td>{data.amount}</td>
                  <td>{data.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-5">
        <p className="fw-bold ">Grand Total: {product.editObj.grandTotal}</p>
      </div>
        <div className="d-flex justify-content-end container">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => backtoPage()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default View;
