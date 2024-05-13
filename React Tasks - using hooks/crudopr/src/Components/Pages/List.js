import React from "react";

const List = ({ items, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
      <th>Name</th>
      <th>Des</th>
      <th>qty</th>
      <th>Action</th>
      </thead>
      {items.map((item) => (
        <tbody key={item.id}>
        <td>{item.name}</td>  
        <td>{item.description}</td> 
        <td>{item.quantity} </td>
        <td>
        <button onClick={() => onDelete(item.id)}>Delete</button>{" "}
          <button onClick={() => onEdit(item)}>Edit</button>
        </td>
          
        </tbody>
      ))}
    </table>
  );
};

export default List;
