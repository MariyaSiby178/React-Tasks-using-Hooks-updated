import React, { useContext } from "react";
import { RowContext } from "../UseContext/RowProvider";
import { BrowserRouter, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function ContextList() {
  const {
    rows,
    setRows,
    data,
    list,
    setList,
    ContextValue,
    checkedFlag,
    setRowFlag,
    setIsCheckboxChecked,
    view,
    setView,
  } = useContext(RowContext);

  let nav = useNavigate("");
  const backtoPage = () => {
    setIsCheckboxChecked(false);
    nav(`/contextpage`);
  };
  const deleteData = (data, ind) => {
    const array = list;
    const array3 = array.filter((item, index) => item.id !== data.id);
    setList(array3);
  };
  const edit = (data, index) => {
    console.log(data);
    console.log(index);
    ContextValue.setSelectedCountry(data.selectedCountry);
    ContextValue.setRemarks(data.remarks);
    ContextValue.setId(data.id);
    setRows(data.row);
    setRowFlag(true);
    nav(`/contextpage`);
  };
  const View = (data) => {
    setView(data);
    nav(`/view`);
  };

  return (
    <div>
      <div className="table_change table-responsive">
        <table className="table mt-4 container border-1">
          <thead>
            <tr className="text-center">
              <th scope="col">SL.NO</th>
              <th scope="col">Country</th>
              <th scope="col">remarks</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  {row.selectedCountry === "" ? "India" : row.selectedCountry}
                </td>
                <td>{row.remarks}</td>
                <td>
                  <button
                    type="button"
                    className="me-2 btn btn-primary"
                    onClick={() => edit(row, index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => deleteData(row, index)}
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
    </div>
  );
}
// createBrowserRouter
// RouterProvider
// BrowserRouter