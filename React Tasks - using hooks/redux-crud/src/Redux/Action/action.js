import * as Type from "../Type/type";

export const addProduct = (product) => ({
  type: Type.ADD_PRODUCT,
  payload: { product },
});

export const addCosProduct = (product) => ({
  type: Type.ADD_COS_PRODUCT,
  payload: { product },
});

export const selectProduct = (index, selectedProduct) => ({
  type: Type.SELECT_PRODUCT,
  payload: { index, selectedProduct },
});

export const selectCosProduct = (index,selectedCosProduct) => ({
  type: Type.SELECT_PRODUCT,
  payload: { index, selectedCosProduct },
});

export const updateQuantity = (index, quantity) => ({
  type: Type.UPDATE_QUANTITY,
  payload: { index, quantity },
});

export const updateCosQuantity = (index, quantity) => ({
  type: Type.UPDATE_COS_QUANTITY,
  payload: { index, quantity },
});

export const clearAmountAndTotal = (index) => ({
  type: Type.CLEAR_AMOUNT_AND_TOTAL,
  payload: { index },
});
export const saveRow = (index) => ({
  type: Type.SAVE_ROW,
  payload: { index },
});

export const editRow = (index) => ({
  type: Type.EDIT_ROW,
  payload: { index },
});

export const deleteRow = (index) => ({
  type: Type.DELETE_ROW,
  payload: { index },
});

export const submitData = (data) => ({
  type: Type.SUBMIT_DATA,
  payload: data,
});
export const updateData = (data) => ({
  type: Type.UPDATE_DATA,
  payload: data,
});

export const editData = (data) => ({
  type: Type.EDIT_DATA,
  payload: data,
});

export const editDataProducts = (data) => ({
  type: Type.EDIT_DATA_PRODUCTS,
  payload: data,
});

export const deleteData = (index) => ({
  type: Type.DELETE_DATA,
  payload: { index },
});

export const viewData = (data) => ({
  type: Type.VIEW_DATA,
  payload: data,
});

export const updateGrandTotal = (amount) => ({
  type: Type.UPDATE_GRAND_TOTAL,
  payload: { amount },
});
