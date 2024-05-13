import React, { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const handleAdd = () => {
    if (itemName.trim() !== "" && itemDescription.trim() !== "" && itemQuantity.trim() !== "") {
      onAdd({ name: itemName, description: itemDescription, quantity: itemQuantity });
      setItemName("");
      setItemDescription("");
      setItemQuantity("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
