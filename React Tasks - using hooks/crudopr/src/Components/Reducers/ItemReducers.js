const initialState = {
    items: [],
  };
  
  const ItemReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, items: [...state.items, action.payload] };
      case "DELETE_ITEM":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case "UPDATE_ITEM":
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        return { ...state, items: updatedItems };
      default:
        return state; // Return current state for unknown action types.
    }
  };
  
  export { initialState, ItemReducer };
  