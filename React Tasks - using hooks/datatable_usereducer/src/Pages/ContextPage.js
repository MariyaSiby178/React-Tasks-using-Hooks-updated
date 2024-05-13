import React, { useContext, useEffect } from "react";
import { RowContext } from "../UseContext/RowProvider";
import "bootstrap/dist/css/bootstrap.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const ContextPage = () => {
  let nav = useNavigate("");

  const {  
    rows,
    state,
    city,
    checkedFlag,
    setCheckedFlag,
    remarkFlag,
    countryFlag,
    addFlag,
    setRows,
    list,
    setList,
    addRow,
    setAddFlag,
    setRowFlag,
    rowFlag,
    ContextValue,
    countryData,
    setcountryFlag,
    newRow,
    setNewRow,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    handleRemarksChange,
    handleInputChange,
    handleCheckboxChange,
    isCheckboxChecked,
    setIsCheckboxChecked,
    isCheckboxDisabled,
    setIsCheckboxDisabled,
    isRemarkDisable,
    handleSave,
    handleCancel,
    handleEdit,
    handleDelete,
    isTableEmpty,
  } = useContext(RowContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleSubmit = () => {
    // const isAnyRowEditable = rows.filter((row) => !row.flag);

    if (isTableEmpty) {
      toast.warning(
        "Please add at least one set of details before submitting."
      );
      return;
    }

    console.log(ContextValue);
    if (ContextValue.id) {
      console.log("update");
      const obj = {
        id: ContextValue.id,
        location: "",
        remarks: ContextValue.remarks,
        selectedCountry: ContextValue.selectedCountry,
        row: rows,
      };
      const array = list.map((item, index) =>
        item.id === obj.id ? obj : item
      );
      console.log(array);
      setList(array);
    } else {
      console.log("create");
      const obj = {
        id: uuidv4(),
        location: "",
        remarks: ContextValue.remarks,
        selectedCountry: ContextValue.selectedCountry,
        row: rows,
      };

      setList([...list, obj]);
    }

    // ContextValue.setSelectedCountry("");
    ContextValue.setSelectedState("");
    ContextValue.setSelectedCity("");
    ContextValue.setRemarks("");
    // setIsCheckboxChecked(false);
    setRowFlag(false)
    // setCheckedFlag(false);
    ContextValue.setId(null);
    setRows([]);
    nav(`/contextlist`);
  };

  return (
    <div>
      <div className="container card mt-5 p-4 shadow col-8 bg-transparent">
        <form>
          <div className="d-flex justify-content-center">
            <div className="mb-3 form-check d-flex justify-content-center align-items-center me-4">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="exampleCheck1"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                disabled={countryFlag || rowFlag}
              />
              <h5 className="me-3 mt-2">Current Location</h5>
            </div>
            <div className="mb-3 col-4 me-4">
              <label htmlFor="country" className="form-label">
                Select a Country
              </label>
              <select
                className="me-4 form-control"
                id="country"
                value={ContextValue.selectedCountry}
                onChange={handleCountryChange}
                disabled={checkedFlag || rowFlag}
              >
                <option value="">Select a Country</option>
                {countryData
                  .filter((country) => country.countryName !== "India") // Exclude India
                  .map((country) => (
                    <option key={country} value={country.countryName}>
                      {country.countryName}
                    </option>
                  ))}
                {/* {countryData.map((country) => (
                  <option key={country} value={country.countryName}>
                    {country.countryName}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="remarks" className="form-label">
                Remarks
              </label>
              <textarea
                type="text"
                className="form-control"
                id="remarks"
                name="remarks"
                value={ContextValue.remarks}
                onChange={handleInputChange}
                disabled={remarkFlag || rowFlag}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="container d-flex justify-content-end col-9 mt-4 pe-5">
        <button
          type="button"
          className="btn btn-primary me-4"
          onClick={addRow}
          disabled={addFlag}
        >
          Add Row
        </button>
      </div>
      <div className="col-9 mx-auto mt-4 shadow">
        <table className="table table-success table-striped table-bordered">
          <thead>
            <tr className="text-center">
              <th>SL No</th>
              <th>State</th>
              <th>City</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  {!row.flag ? (
                    <select
                      id={`state_${index}`}
                      value={row.state}
                      onChange={(e) => handleStateChange(e, index)}
                    >
                      <option value="">Select a State</option>
                      {state.map((res) => (
                        <option
                          key={res}
                          value={res.stateName}
                          disabled={res === ""}
                        >
                          {res.stateName}
                        </option>
                      ))}
                    </select>
                  ) : (
                    row.state
                  )}
                </td>
                <td>
                  {!row.flag ? (
                    <select
                      id={`city_${index}`}
                      value={row.city}
                      onChange={(e) => handleCityChange(e, index)}
                    >
                      <option value="">Select a City</option>
                      {city.map((city) => (
                        <option key={city} value={city.cityName}>
                          {city.cityName}
                        </option>
                      ))}
                    </select>
                  ) : (
                    row.city
                  )}
                </td>
                <td>
                  {!row.flag ? (
                    <textarea
                      type="text"
                      value={row.remark}
                      onChange={(e) => handleRemarksChange(e, index)}
                    />
                  ) : (
                    <div>{row.remark}</div>
                  )}
                </td>
                <td>
                  {!row.flag ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-success me-1"
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger ms-1"
                        onClick={() => handleCancel(index)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary me-1"
                        onClick={() => handleEdit(index)}
                        disabled={addFlag}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger ms-1"
                        onClick={() => handleDelete(index)}
                        disabled={addFlag}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <button
          type="submit"
          className="btn btn-primary me-4"
          onClick={handleSubmit}
          disabled={addFlag}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContextPage;
