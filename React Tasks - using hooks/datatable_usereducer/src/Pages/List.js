import React, { useEffect, useReducer, useState } from "react";
import {
  getSuccess,
  getError,
  deleteSuccess,
  deleteError,
} from "../Reducer/Action";
import { useNavigate } from "react-router-dom";
import { getData, deleteData } from "../Service/Api";
import { initialState, Reducer } from "../Reducer/Reducer";

export default function List() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state);
  const callgetApi = async () => {
    try {
      const getItem = await getData();
      console.log(getItem);
      if (getItem.status === 200 || getItem.status === 201) {
        dispatch(getSuccess(getItem.data));
      }
    } catch (error) {
      dispatch(getError(error));
    }
  };
  let nav = useNavigate();

  useEffect(() => {
    callgetApi();
  }, []);

  const deleteApi = async (id) => {
    try {
      const deleteItem = await deleteData(id);
      if (deleteItem.status === 200 || deleteItem.status === 201) {
        dispatch(deleteSuccess(id));
      }
    } catch (error) {
      dispatch(deleteError(error));
    }
  };

  const editApi = async (id) => {
    nav(`/form/${id}`);
  };

  // const navigate = useNavigate();
  //  const routeChange = () => {
  //    let path = "/form";
  //    navigate(path);
  //  };

  return (
    <div>
      <div className="list">
        <div className="table_change table-responsive">
          <table className="table mt-4 container border-1">
            <thead>
              <tr>
                <th scope="col">SL.NO</th>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Company</th>
                <th scope="col">Active</th>
                <th scope="col">Date</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {state.items.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                  <td>{data.company}</td>
                  <td>{data.status}</td>
                  <td>{data.date}</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => editApi(data.id)}
                      className="bg-primary rounded"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteApi(data.id)}
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
    </div>
  );
}

// import React, { useState, useEffect, useReducer, useRef } from "react";
// import { Button } from "primereact/button";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { deleteUser, getUsers } from "../Service/Api";
// import { Link } from "react-router-dom";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import { InputText } from "primereact/inputtext";
// import { useNavigate } from "react-router-dom";
// import { FaPencilAlt, FaTrash } from "react-icons/fa";
// import { reducer, initialState } from "../Reducer/Reducer";
// import { Tooltip } from "primereact/tooltip";
// import { Dialog } from "primereact/dialog";

// function ReducerList() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [open, setOpen] = useState(true);
//   const dt = useRef(null);

//   const handleSearch = (e) => {
//     dispatch({ type: "SET_SEARCH_TEXT", value: e.target.value });
//   };
//   const filteredData = state.apiData.filter((row) =>
//     (row.name?.toLowerCase() || "").includes(state.searchText.toLowerCase())
//   );

//   const clearFilters = () => {
//     dt.current.reset();
//   };

//   const deleteUserHandler = (user) => {
//     dispatch({ type: "SET_DELETE_TARGET", value: user });
//     dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: true });
//   };

//   const confirmDelete = async () => {
//     if (state.deleteTarget) {
//       try {
//         const res = await deleteUser(state.deleteTarget.id);
//         if (res.status === 200 || res.status === 201) {
//           dispatch({
//             type: "SET_SELECTED_PRODUCTS",
//             value: state.selectedProducts.filter(
//               (res) => res.id !== state.deleteTarget.id
//             ),
//           });
//         }

//         callGetAPI();
//       } catch (error) {
//         console.error(error);
//       } finally {
//         dispatch({ type: "SET_DELETE_TARGET", value: null });
//         dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: false });
//       }
//     }
//   };

//   const deleteSelectedUsers = async () => {
//     if (state.selectedProducts && state.selectedProducts.length > 0) {
//       dispatch({ type: "SET_DELETE_SELECTED_DIALOG_VISIBLE", value: true });
//     }
//   };

//   const confirmDeleteSelected = async () => {
//     dispatch({ type: "SET_DELETE_SELECTED_DIALOG_VISIBLE", value: false });

//     if (state.selectedProducts && state.selectedProducts.length > 0) {
//       const selectedUserIds = state.selectedProducts.map((user) => user.id);
//       try {
//         await Promise.all(selectedUserIds.map(deleteUser));

//         callGetAPI();
//         dispatch({ type: "SET_SELECTED_PRODUCTS", value: [] });
//       } catch (error) {}
//     }
//   };

//   const callGetAPI = async () => {
//     try {
//       const users = await getUsers();
//       if (users.status === 200 || users.status === 201) {
//         setOpen(false);
//       }
//       dispatch({ type: "SET_API_DATA", value: users.data });
//     } catch (error) {
//       console.error("Error fetching user data:", error);

//       dispatch({ type: "SET_API_DATA", value: [] });
//     }
//   };

//   useEffect(() => {
//     callGetAPI();
//   }, []);

//   const navigate = useNavigate();
//   const routeChange = () => {
//     let path = "/form";
//     navigate(path);
//   };

//   const header = (
//     <div className="d-md-flex justify-content-between gap-2">
//       <div>
//         <h3>User Details</h3>
//       </div>
//       <div className="d-md-flex ">
//         <div className="my-auto">
//           <Button
//             onClick={clearFilters}
//             className="pi pi-filter-slash p-button-outlined me-3 p-2"
//           >
//             <span className="ms-2 ">Clear</span>
//           </Button>
//         </div>
//         <div className="me-2">
//           <span className="p-input-icon-left">
//             <i className="pi pi-search" />
//             <InputText
//               value={state.searchText}
//               onChange={handleSearch}
//               placeholder="Keyword Search"
//             />
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="text-center col-10 mx-auto">
//       <div className="container datatable-responsive">
//         <div className="d-md-flex border shadow justify-content-between p-3 my-3">
//           <div className="d-flex justify-content-center">
//             <div>
//               <button
//                 onClick={routeChange}
//                 className="btn-success mx-1 btn py-3 p-c p-button-icon-left pi pi-"
//               >
//                 <span>+ New</span>
//               </button>
//             </div>
//             <div>
//               <button
//                 onClick={deleteSelectedUsers}
//                 className="btn-danger mx-1 btn py-3 p-c p-button-icon-left pi  pi-trash"
//                 disabled={
//                   !state.selectedProducts || state.selectedProducts.length === 0
//                 }
//               >
//                 <span className="ms-1">Delete</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <Tooltip target=".export-buttons>button" position="bottom" />

//         <DataTable
//           ref={dt}
//           value={filteredData}
//           paginator
//           header={header}
//           rows={5}
//           className="card shadow mb-5"
//           rowsPerPageOptions={[5, 10, 25, 50]}
//           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
//           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
//           columnResizeMode="expand"
//           resizableColumns
//           showGridlines
//           tableStyle={{ minWidth: "50rem" }}
//           selectionMode="multiple"
//           selection={state.selectedProducts}
//           onSelectionChange={(e) =>
//             dispatch({ type: "SET_SELECTED_PRODUCTS", value: e.value })
//           }
//         >
//           <Column
//             selectionMode="multiple"
//             headerStyle={{ width: "3rem" }}
//           ></Column>
//           <Column
//             field="name"
//             header="Name"
//             sortable
//             filter
//             filterPlaceholder="Search by name"
//             style={{ width: "25%" }}
//           />
//           <Column
//             field="amount"
//             header="Amount"
//             sortable
//             filter
//             filterPlaceholder="Search by amount"
//             style={{ width: "25%" }}
//           />
//           <Column
//             body={(rowData) => (
//               <>
//                 <Link to={`/form/${rowData.id}`}>
//                   <Button className="p-button-primary p-2 rounded-pill">
//                     <FaPencilAlt />
//                   </Button>
//                 </Link>
//                 <Button
//                   onClick={() => deleteUserHandler(rowData)}
//                   className="p-button-danger p-2 rounded-pill ms-2"
//                 >
//                   <FaTrash />
//                 </Button>
//               </>
//             )}
//             header="Actions"
//             sortable
//             style={{ width: "25%" }}
//           />
//         </DataTable>

//         <Dialog
//           visible={state.deleteDialogVisible}
//           onHide={() =>
//             dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: false })
//           }
//           header="Confirm Deletion"
//           footer={
//             <div>
//               <Button
//                 label="No"
//                 icon="pi pi-times"
//                 className="p-button-text"
//                 onClick={() =>
//                   dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: false })
//                 }
//               />
//               <Button
//                 label="Yes"
//                 icon="pi pi-check"
//                 className="p-button-danger"
//                 onClick={confirmDelete}
//               />
//             </div>
//           }
//         >
//           {state.deleteTarget && (
//             <p>
//               Are you sure you want to delete the user{" "}
//               <strong>{state.deleteTarget.name}</strong>?
//             </p>
//           )}
//         </Dialog>
//         <Dialog
//           visible={state.deleteSelectedDialogVisible}
//           onHide={() =>
//             dispatch({
//               type: "SET_DELETE_SELECTED_DIALOG_VISIBLE",
//               value: false,
//             })
//           }
//           header="Confirm Deletion"
//           footer={
//             <div>
//               <Button
//                 label="No"
//                 icon="pi pi-times"
//                 className="p-button-text"
//                 onClick={() =>
//                   dispatch({
//                     type: "SET_DELETE_SELECTED_DIALOG_VISIBLE",
//                     value: false,
//                   })
//                 }
//               />
//               <Button
//                 label="Yes"
//                 icon="pi pi-check"
//                 className="p-button-danger"
//                 onClick={confirmDeleteSelected}
//               />
//             </div>
//           }
//         >
//           <p>Are you sure you want to delete the selected users ?</p>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

// export default ReducerList;

// import React, { useState, useEffect, useReducer, useRef } from "react";
// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom";
// import { getUsers, deleteUser } from "../Service/Api";
// import { reducer, initialState } from "../Reducer/Reducer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaPencilAlt, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function ReducerList() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [open, setOpen] = useState(true);
//   const tableRef = useRef(null);
//   let navigate = useNavigate();

//   const handleSearch = (e) => {
//     dispatch({ type: "SET_SEARCH_TEXT", value: e.target.value });
//   };
//   const filteredData = state.apiData.filter((row) =>
//     (row.name?.toLowerCase() || "").includes(state.searchText.toLowerCase())
//   );

//   const deleteUserHandler = (user) => {
//     dispatch({ type: "SET_DELETE_TARGET", value: user });
//     dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: true });
//   };

//   const confirmDelete = async () => {
//     if (state.deleteTarget) {
//       try {
//         // Replace with your delete function
//         const res = await deleteUser(state.deleteTarget.id);
//         if (res.status === 200 || res.status === 201) {
//           dispatch({
//             type: "SET_SELECTED_PRODUCTS",
//             value: state.selectedProducts.filter(
//               (res) => res.id !== state.deleteTarget.id
//             ),
//           });
//         }

//         callGetAPI();
//       } catch (error) {
//         console.error(error);
//       } finally {
//         dispatch({ type: "SET_DELETE_TARGET", value: null });
//         dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: false });
//       }
//     }
//   };

//   // const deleteSelectedUsers = async () => {
//   //   if (state.selectedProducts && state.selectedProducts.length > 0) {
//   //     dispatch({ type: "SET_DELETE_SELECTED_DIALOG_VISIBLE", value: true });
//   //   }
//   // };

//   // const confirmDeleteSelected = async () => {
//   //   dispatch({ type: "SET_DELETE_SELECTED_DIALOG_VISIBLE", value: false });

//   //   if (state.selectedProducts && state.selectedProducts.length > 0) {
//   //     const selectedUserIds = state.selectedProducts.map((user) => user.id);
//   //     try {
//   //       // Replace with your delete function
//   //       // await Promise.all(selectedUserIds.map(deleteUser));

//   //       // Call your get data function
//   //        callGetAPI();
//   //       dispatch({ type: "SET_SELECTED_PRODUCTS", value: [] });
//   //     } catch (error) {}
//   //   }
//   // };

//   const callGetAPI = async () => {
//     try {
//       // Replace with your get function
//       const users = await getUsers();
//       if (users.status === 200 || users.status === 201) {
//         // setOpen(false);
//       }
//       dispatch({ type: "SET_API_DATA", value: users.data });
//     } catch (error) {
//       console.error("Error fetching user data:", error);

//       dispatch({ type: "SET_API_DATA", value: [] });
//     }
//   };

//   useEffect(() => {
//     callGetAPI();
//   }, []);

//   const routeChange = () => {
//     let path = "/form";

//     navigate(path);
//   };

//   return (
//     <div className="container text-center">
//       <div className="my-3">
//         <h3>User Details</h3>
//       </div>
//       <div className="d-flex justify-content-between align-items-center">
//         <div className="d-flex">
//           <div>
//             <Form.Group>
//               <div className="input-group">
//                 <div className="input-group-prepend"></div>
//                 <Form.Control
//                   value={state.searchText}
//                   onChange={handleSearch}
//                   placeholder="Keyword Search"
//                 />
//               </div>
//             </Form.Group>
//           </div>
//         </div>
//         <div>
//           <Button onClick={routeChange} className="btn btn-success mx-1 p-2">
//             + New
//           </Button>
//           {/* <Button
//             onClick={deleteSelectedUsers}
//             className="btn btn-danger mx-1 p-2"
//             disabled={!state.selectedProducts || state.selectedProducts.length === 0}
//           >
//             Delete
//           </Button> */}
//         </div>
//       </div>
//       <Table responsive hover bordered striped>
//         <thead>
//           <tr>
//             {/* <th style={{ width: "3rem" }}>
//                <input
//                 type="checkbox"
//                 onChange={(e) => dispatch({ type: "SET_SELECTED_PRODUCTS", value: e.target.checked ? filteredData : [] })}
//               />
//             </th> */}
//             <th style={{ width: "25%" }}>Name</th>
//             <th style={{ width: "25%" }}>Amount</th>
//             <th style={{ width: "25%" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((rowData) => (
//             <tr key={rowData.id}>
//               {/* <td>
//                 <input
//                   type="checkbox"
//                   checked={state.selectedProducts.includes(rowData)}
//                   onChange={(e) => dispatch({ type: "SET_SELECTED_PRODUCTS", value: e.target.checked ? [...state.selectedProducts, rowData] : state.selectedProducts.filter(user => user.id !== rowData.id) })}
//                 />
//               </td> */}
//               <td>{rowData.name}</td>
//               <td>{rowData.amount}</td>
//               <td>
//                 <Link to={`/form/${rowData.id}`}>
//                   <Button className="btn btn-primary p-2 rounded-pill">
//                     <FaPencilAlt />
//                   </Button>
//                 </Link>
//                 <Button
//                   onClick={() => deleteUserHandler(rowData)}
//                   className="btn btn-danger p-2 rounded-pill ms-2"
//                 >
//                   <FaTrash />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Modal
//         show={state.deleteDialogVisible}
//         onHide={() =>
//           dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: false })
//         }
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {state.deleteTarget && (
//             <p>
//               Are you sure you want to delete the user{" "}
//               <strong>{state.deleteTarget.name}</strong>?
//             </p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="secondary"
//             onClick={() =>
//               dispatch({ type: "SET_DELETE_DIALOG_VISIBLE", value: false })
//             }
//           >
//             No
//           </Button>
//           <Button variant="danger" onClick={confirmDelete}>
//             Yes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <Modal
//         show={state.deleteSelectedDialogVisible}
//         onHide={() =>
//           dispatch({ type: "SET_DELETE_SELECTED_DIALOG_VISIBLE", value: false })
//         }
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Are you sure you want to delete the selected users?</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="secondary"
//             onClick={() =>
//               dispatch({
//                 type: "SET_DELETE_SELECTED_DIALOG_VISIBLE",
//                 value: false,
//               })
//             }
//           >
//             No
//           </Button>
//           {/* <Button
//             variant="danger"
//             onClick={confirmDeleteSelected}
//           >
//             Yes
//           </Button> */}
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default ReducerList;
