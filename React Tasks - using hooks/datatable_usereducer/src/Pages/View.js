// export default function View(){
//     return(
//         <div></div>
//     )
// }
import React, { useEffect } from "react";
import { useContext } from "react";
import { RowContext } from "../UseContext/RowProvider";

const View = () => {
  const { rows, view, ContextValue, countryData } = useContext(RowContext);

  useEffect(() => {
    console.log(view);
  }, []);

  return (
    <div className="container card invoice p-5  mt-5">
      <div className=" container text-start">
        <hr></hr>
        <p>
          <span className="fw-bold">Location: </span>
          {view.selectedCountry === "" ? "India" : view.selectedCountry}
        </p>
        <p>
          <span className="fw-bold">Remarks:</span> {view.remarks}
        </p>
        <hr></hr>
      </div>
      <div className=" container mt-3 text-start">
        <h6>Details</h6>
        <table className="table mt-3 ">
          <thead>
            <tr className="table-info">
              <th scope="col">SI.NO</th>
              <th scope="col">State</th>
              <th scope="col">City</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {/* {view && view.row && ( */}
            {/* <tbody> */}
            {view.row &&
              view.row.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.state}</td>
                  <td>{data.city}</td>
                  <td>{data.remark}</td>
                </tr>
              ))}
            {/* </tbody> */}
            {/* )} */}
          </tbody>
        </table>
      </div>
      {/* <div className="text-center mt-5">
        <p className="fw-bold ">Grand Total: {grandTotal}</p>
      </div> */}
    </div>
  );
};

export default View;
