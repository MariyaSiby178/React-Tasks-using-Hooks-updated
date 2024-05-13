import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../Layout/SideBar/SideBar";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { ProductService } from './service/ProductService';
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import "../../src/Sagatable.css";
import {
  deleteDataRequest,
  getDataRequest,
  getIdRequest,
} from "../Redux/Action/action";

function SagaTable() {
  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };
  let nav = useNavigate();
  let dispatch = useDispatch();

  const state = useSelector((res) => res.reducerSaga);
  console.log(state);
  const [array, setArray] = useState(null);
  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const get = useCallback(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  useEffect(() => {
    get();
  }, []);

  // useEffect(() => {
  //   if (state.details) {
  //     setProducts(state.details);
  //   }
  // }, [state.details]);

  const openNew = () => {
    nav("/sagaform");
  };

  useEffect(() => {
    setArray(state.details);
  }, [state]);

  const Edit = useCallback((product) => {
    console.log(product);
    dispatch(getIdRequest(product.id));
    nav(`/sagaform`);
  });

  const Delete = useCallback(
    (product) => {
      console.log(product.id);
      dispatch(deleteDataRequest(product.id));
    },
    [dispatch]
  );

  // const confirmDeleteSelected = () => {
  //   setDeleteProductsDialog(true);
  // };

  // const deleteSelectedProducts = () => {
  //   let _products = products.filter((val) => !selectedProducts.includes(val));

  //   setProducts(_products);
  //   setDeleteProductsDialog(false);
  //   setSelectedProducts(null);
  //   toast.current.show({
  //     severity: "success",
  //     summary: "Successful",
  //     detail: "Products Deleted",
  //     life: 3000,
  //   });
  // };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          onClick={openNew}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        // onClick={exportCSV}
      />
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Products</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => Edit(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => Delete(rowData)}
        />
      </React.Fragment>
    );
  };

  return (
    <div className="d-flex">
      <SideBar />
      <div className="col-8 mx-auto mt-5">
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={array}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column
              header="S.No"
              selectionMode="multiple"
              exportable={false}
            ></Column>
            <Column
              field="name"
              header="Name"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="email"
              header="Email"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="number"
              header="Phone number"
              // body={priceBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="date"
              header="Date"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="password"
              header="Password"
              // body={ratingBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="cpassword"
              header="Confirm Password"
              // body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="selectlang"
              header="Language"
              // body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="gender"
              header="Gender"
              // body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="action"
              header="Action"
              body={actionBodyTemplate}
              sortable
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
            {/* <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column> */}
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default SagaTable;
