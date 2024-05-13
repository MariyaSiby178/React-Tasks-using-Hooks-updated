import React, { useCallback, useEffect, useState } from "react";
import {
  getDataRequest,
  deleteDataRequest,
  updateDataRequest,
  getIdRequest,
} from "../../Redux/Action/actionSaga";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TableSaga = () => {
  let nav = useNavigate();
  let dispatch = useDispatch();
  const [array, setArray] = useState(null);
  const state = useSelector((res) => res.reducerSaga);
  console.log(state);

  const get = useCallback(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  const Delete = useCallback(
    (data) => {
      console.log(data);
      dispatch(deleteDataRequest(data));
    },
    [dispatch]
  );

  const edit = useCallback((data) => {
    console.log(data);
    // formik.setValues({
    //   name: data.name,
    // })
    dispatch(getIdRequest(data.id));
    nav(`/saga`);
  });

  useEffect(() => {
    get();
  }, []);
  useEffect(() => {
    setArray(state.details);
  }, [state]);

  return (
    <div>
      <div className="container d-flex justify-content-center mt-5 ">
        <table className="table table-hover shadow-lg text-center card-two rounded">
          <thead className="col">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Date</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Language</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {array &&
              array.map((res) => (
                <tr key={res}>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.number}</td>
                  <td>{res.date}</td>
                  <td>{res.password}</td>
                  <td>{res.cpassword}</td>
                  <td>{res.selectlang}</td>
                  <td>{res.gender}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => edit(res)}
                      className="bg-primary rounded"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => Delete(res.id)}
                      className="bg-danger rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSaga;
