// App.js
import React, { useReducer, useState } from "react";
import List from "./Components/Pages/List";
import AddItem from "./Components/Pages/AddItem";
import EditItem from "./Components/Pages/EditItem";
import { initialState, ItemReducer } from "./Components/Reducers/ItemReducers";

const App = () => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, id: Date.now() } });
  };

  const deleteItem = (itemId) => {
    dispatch({ type: "DELETE_ITEM", payload: itemId });
  };

  const startEdit = (item) => {
    setEditingItem(item);
  };

  const cancelEdit = () => {
    setEditingItem(null);
  };

  const updateItem = (updatedItem) => {
    dispatch({ type: "UPDATE_ITEM", payload: updatedItem });
    setEditingItem(null);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <List items={state.items} onDelete={deleteItem} onEdit={startEdit} />
      {editingItem ? (
        <EditItem item={editingItem} onUpdate={updateItem} onCancel={cancelEdit} />
      ) : (
        <AddItem onAdd={addItem} />
      )}
    </div>
  );
};

export default App;
