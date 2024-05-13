import React from "react";

const StationaryTable = (props) => {
  const {
    products,
    handleSave,
    handleEdit,
    handleCancel,
    handleDelete,
    data,
    handleSubmit,
    handleProductChange,
    handleQuantityChange,
    isEditing,
  } = props;
  return (
    <div>
      <table className="table table-bordered table-secondary table-hover border-5 container mt-4 form">
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
          {props.data &&
            props.data.map((data, index) => (
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
                      onClick={() => props.handleSave(index)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-primary rounded text-light"
                      onClick={() => props.handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                  {!data.flag ? (
                    <button
                      type="submit"
                      className="bg-danger rounded text-light mx-2"
                      onClick={() => props.handleCancel(index)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-danger rounded text-light mx-2"
                      onClick={() => props.handleDelete(index)}
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
              Discount: {props.product.DISCOUNT_RATE * 100}%
            </span>
            <span className="fw-bold text-danger mx-2">
              GST: {props.product.GST_RATE * 100}%
            </span>
          </div>
          <div className="flex-box">
            <label className="fw-bold">Grand Total :</label>
            <span className="fw-bold"> {props.product.grandTotal}</span>
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
      </div>
    </div>
  );
};

export default StationaryTable;
