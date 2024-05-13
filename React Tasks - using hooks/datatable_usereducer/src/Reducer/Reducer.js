import * as Types from "../Reducer/Type";

export const initialState = {
  items: [],
  error: null,
};

export const Reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case Types.POST_REQ_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case Types.POST_REQ_FAILURE:
    case Types.DELETE_REQ_FAILURE:
    case Types.GET_REQ_FAILURE:
    case Types.GET_ID_REQ_FAILURE:
      return { ...state, error: action.payload };
    case Types.GET_REQ_SUCCESS:
      return { ...state, items: action.payload };
    case Types.GET_ID_REQ_SUCCESS:
      return { ...state, items: action.payload };
    case Types.PUT_REQ_SUCCESS:
      return {
        ...state,
        items:[ state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),]
      };
    case Types.DELETE_REQ_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// import actionTypes from "../Reducer/Action";

// export const initialState = {
//   isLoading: false,
//   formData: {
//     name: "",
//     amount: "",
//     // phone: "",
//     // password: "",
//     // cpass: "",
//     // language: "",
//     // gender: "",
//     // dob: "",
//   },
//   errors: {},

//   initialGender: "",
//   isEditing: false,
//   showPassword: false,
//   cshowPassword: false,
//   apiData: [],
//   searchText: "",
//   selectedProducts: [],
//   deleteDialogVisible: false,
//   deleteTarget: null,
//   deleteSelectedDialogVisible: false,
// };

// export function reducer(state, action) {
//   switch (action.type) {
//     case actionTypes.SET_FIELD:
//       return {
//         ...state,
//         formData: { ...state.formData, [action.field]: action.value },
//       };
//     case actionTypes.SET_ERRORS:
//       return { ...state, errors: action.errors };
//     case actionTypes.SET_ID:
//       return { ...state, id: action.value };
//     case actionTypes.SET_IS_EDITING:
//       return { ...state, isEditing: action.value };

//     case actionTypes.SET_API_DATA:
//       return { ...state, apiData: action.value };
//     case actionTypes.SET_SEARCH_TEXT:
//       return { ...state, searchText: action.value };
//     case actionTypes.SET_SELECTED_PRODUCTS:
//       return { ...state, selectedProducts: action.value };
//     case actionTypes.SET_DELETE_DIALOG_VISIBLE:
//       return { ...state, deleteDialogVisible: action.value };
//     case actionTypes.SET_DELETE_TARGET:
//       return { ...state, deleteTarget: action.value };
//     case actionTypes.SET_DELETE_SELECTED_DIALOG_VISIBLE:
//       return { ...state, deleteSelectedDialogVisible: action.value };

//     case "SET_EMPLOYEES":
//       return { ...state, employees: action.payload };
//     case "SET_SEARCH_TEXT":
//       return { ...state, searchText: action.value };
//     case "ADD_EMPLOYEE":
//       return { ...state, employees: [...state.employees, action.payload] };
//     case "UPDATE_EMPLOYEE":
//       const updatedEmployees = state.employees.map((employee) =>
//         employee.id === action.payload.id ? action.payload : employee
//       );
//       return { ...state, employees: updatedEmployees };
//     case "DELETE_EMPLOYEE":
//       const filteredEmployees = state.employees.filter(
//         (employee) => employee.id !== action.payload
//       );
//       return { ...state, employees: filteredEmployees };

//     default:
//       return state;
//   }
// }
