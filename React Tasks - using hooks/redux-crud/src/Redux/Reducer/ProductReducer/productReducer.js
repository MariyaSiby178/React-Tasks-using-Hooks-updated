import * as type from "../../Type/type";
import { useState } from "react";

const initialState = {
  // userInfo: null,
  userInfo: [],
  products: [],
  cosmeticsProducts: [],
  obj: null,
  editObj: null,
  grandTotal: 0,
  DISCOUNT_RATE: 0.1,
  GST_RATE: 0.02,
};

const productReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case type.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
        cosmeticsProducts: [...state.cosmeticsProducts, action.payload.cosmeticsProducts]
      };
      case type.ADD_COS_PRODUCT:
        return {
          ...state,
          cosmeticsProducts: [...state.cosmeticsProducts, action.payload.cosmeticsProducts]
        }; 
    case type.SELECT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index === action.payload.index
            ? {
                ...product,
                productName: action.payload.selectedProduct.productName,
                
                quantity: 0,
                amount: action.payload.selectedProduct.price,
                
                totalAmount: 0,
              }
            : product
        ),
        cosmeticsProducts: state.cosmeticsProducts.map((product, index) =>
        index === action.payload.index ? {
          ...product,
          cosmeticsName: action.payload.selectedProduct.cosmeticsName,
          quantity:0,
          cosamount: action.payload.selectedProduct.cosmeticprice,
          totalAmount: 0,
        }
        : product
        ),
      };
      case type.SELECT_COS_PRODUCT:
      return {
        ...state,
        cosmeticsProducts: state.cosmeticsProducts.map((product, index) =>
        index === action.payload.index ? {
          ...product,
          cosmeticsName: action.payload.selectedCosProduct.cosmeticsName,
          quantity:0,
          cosamount: action.payload.selectedCosProduct.cosmeticprice,
          totalAmount: 0,
        }
        : product
        ),
      };
    case type.UPDATE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index === action.payload.index
            ? {
                ...product,
                quantity: action.payload.quantity,
                totalAmount:
                  action.payload.quantity !== 0
                    ? action.payload.quantity * product.amount
                    : product.amount,
              }
            : product
        ),
      };
      case type.UPDATE_COS_QUANTITY:
      return {
        ...state,
        cosmeticsProducts: state.cosmeticsProducts.map((product, index) =>
          index === action.payload.index
            ? {
                ...product,
                quantity: action.payload.quantity,
                totalCosAmount:
                  action.payload.quantity !== 0
                    ? action.payload.quantity * product.cosamount
                    : product.cosamount,
              }
            : product
        ),
      };
    case type.CLEAR_AMOUNT_AND_TOTAL:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index === action.payload.index
            ? { ...product, quantity: 0, amount: 0, totalAmount: 0 }
            : product
        ),
      };
    case type.CALCULATE_GRAND_TOTAL:
      const grandTotal = state.products.reduce(
        (total, product) => total + product.totalAmount,
        0
      );
      return {
        ...state,
        grandTotal: grandTotal,
      };
    case "UPDATE_GRAND_TOTAL":
      const grandTotalBeforeDiscount = action.payload;
      const discountAmount = grandTotalBeforeDiscount * state.DISCOUNT_RATE;
      const grandTotalAfterDiscount = grandTotalBeforeDiscount - discountAmount;
      const gstAmount = grandTotalAfterDiscount * state.GST_RATE;
      const grandTotalWithGST = grandTotalAfterDiscount + gstAmount;

      return {
        ...state,
        grandTotal: grandTotalWithGST,
      };

    case type.SAVE_ROW:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index === action.payload.index ? { ...product, flag: true } : product
        ),
        cosmeticsProducts: state.cosmeticsProducts.map((product, index) =>
          index === action.payload.index ? { ...product, flag: true } : product
        ),
      };

    case type.EDIT_ROW:
      return {
        ...state,
        products: state.products.map((product, index) =>
          index === action.payload.index ? { ...product, flag: false } : product
        ),
      };

    case type.DELETE_ROW:
      return {
        ...state,
        products: state.products.filter(
          (product, index) => index !== action.payload.index
        ),
      };
    case type.SUBMIT_DATA:
      return {
        ...state,
        userInfo: [...state.userInfo, action.payload],
        products: [],
        grandTotal: 0,
      };
    case type.UPDATE_DATA:
      return {
        ...state,
        userInfo: state.userInfo.map((res) =>
          res.id === action.payload.id ? action.payload : res
        ),
        products: [],
        editObj: null,
        grandTotal: 0,
      };
    case type.EDIT_DATA:
      return {
        ...state,
        editObj: action.payload,
        grandTotal: action.payload.grandTotal,
        // products: action.payload.products,
      };
    case type.EDIT_DATA_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case type.DELETE_DATA:
      return {
        ...state,
        userInfo: state.userInfo.filter(
          (userdata, idx) => idx !== action.payload.index
        ),
        // products: state.products.filter(
        //   (product, idx) => idx !== action.payload.index
        // ),
      };
    // Inside your reducer
    case type.VIEW_DATA:
      return {
        ...state,
        editObj: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
