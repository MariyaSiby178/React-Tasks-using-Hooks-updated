import { logDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteData, editData, viewData } from "../Redux/Action/action";

const List = () => {
  const product = useSelector((state) => state.productReducer);
  let nav = useNavigate();
  let dispatch = useDispatch();

  const edit = (data) => {
    dispatch(editData(data));
    nav(`/form`);
  };
  const Delete = (index) => {
    dispatch(deleteData(index));
  };
  const backtoPage = () => {
    nav(`/form`);
  };
  const View = (data) => {
    dispatch(viewData(data));
    nav(`/view`);
  };
  return [
    <div>
      <div className="table_change table-responsive">
        <table className="table mt-4 container border-1">
          <thead>
            <tr className="text-center">
              <th scope="col">SL.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile number</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.userInfo &&
              product.userInfo.map((row, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.number}</td>
                  <td>{row.address}</td>
                  <td>{row.date}</td>
                  <td>
                    <button
                      type="button"
                      className="me-2 btn btn-primary"
                      onClick={() => edit(row)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger me-2"
                      onClick={() => Delete(index)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => View(row)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
    </div>,
  ];
};

export default List;
