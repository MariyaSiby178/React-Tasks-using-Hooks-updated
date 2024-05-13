import React, { useState, useEffect } from "react";

const EditItem = ({ item, onUpdate }) => {
  const [editedItem, setEditedItem] = useState(item);

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleUpdate = () => {
    onUpdate(editedItem);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item name"
        value={editedItem.name}
        onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Item description"
        value={editedItem.description}
        onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Item quantity"
        value={editedItem.quantity}
        onChange={(e) => setEditedItem({ ...editedItem, quantity: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditItem;
