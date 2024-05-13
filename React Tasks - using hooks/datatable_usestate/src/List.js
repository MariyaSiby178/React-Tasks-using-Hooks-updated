// import React from 'react'
// import {
//     updateDetails,
//     getDetails,
//     deleteDetails,
//   } from "./Services/ApiUrl";



// export const List = () => {

//     // const deleteItemOnServer = async (item) => {
//     //     try {
//     //       // Assuming that `deleteDetails` is a function that deletes an item on the server
//     //       const response = await deleteDetails(item);
      
//     //       if (response.statusText === "OK") {
//     //         // If the deletion was successful on the server, update the local state
//     //         const updatedItems = items.filter((existingItem) => existingItem.id !== item.id);
//     //         setItems(updatedItems);
//     //       } else {
//     //         // Handle the case when the deletion on the server was not successful
//     //         console.error("Failed to delete the item on the server. Status code: " + response.status);
//     //       }
//     //     } catch (error) {
//     //       console.error("Error while deleting the item:", error);
//     //     }
//     //   };

//     // const handleEdit = (index) => {
//     //     if (index >= 0 && index < items.length) {
//     //       const itemToEdit = items[index];
//     //       setFormData({ ...itemToEdit });
//     //       setEditingIndex(index);
//     //     }
//     //   };
    
//     //   const handleDelete = (index) => {
//     //     if (index >= 0 && index < items.length) {
//     //       // Send a DELETE request to remove the item from the server
//     //       deleteItemOnServer(items[index]);
//     //       const updatedItems = items.filter((_, i) => i !== index);
//     //       setItems(updatedItems);
//     //       setEditingIndex(null);
//     //     }
//     //   };

//   return (
//     <div><table className=" table  w-50 mx-auto mt-4" id="contact-form">
//     <thead>
//       <tr>
//         <th>SL.No</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Password</th>
//         <th className="text-center" colSpan={2}>
//           Action
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       {items.map((item, index) => (
//         <tr key={item.id}>
//           <td>{index + 1}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//           <td>{item.password}</td>
//           <td>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </td>
//           <td>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table></div>
//   )
// }




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiUrl } from './Services/Api'

const EmployeeList = () => {
  const[array,setArray]=useState([])
  let nav = useNavigate()
  const link =async()=>{
  
      let res = await axios.get(ApiUrl)
      setArray(res.data)
    }

  useEffect(()=>{
    link()
  },[])
  
  const Edit = async (id) =>{
    nav(`/${id}`);
};

  const Delete = async(index,id) => {
   
      await axios.delete(ApiUrl + id);
      setArray((preventArray)=> preventArray.filter((val, i) => i !== index) )
    
    
  }
  return (
    <div>
        <h1 className="text-dark mt-5">STUDENTLIST</h1>
      <div className="table1">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="table-info">
                SL.NO
              </th>
              <th scope="col" className="table-info">
                EMPLOYEE NAME
              </th>
              <th scope="col" className="table-info">
                EMAIL
              </th>
              <th scope="col" className="table-info">
                EMPLOYEE ID
              </th>
              <th scope="col" className="table-info">
                JOIN DATE
              </th>
              <th scope="col" className="table-info">
               ATTENDANCE
              </th>
              <th scope="col" className="table-info">
               JOB
              </th>
              <th scope="col" className="table-info">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {array.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.date}</td>
                <td>{data.attendance}</td>
                <td>{data.job}</td>
                <td>
                  <button
                    className="rounded-2 border-0 bg-primary text-light"
                    onClick={() => Edit(data.id)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="rounded-2  border-0 bg-danger text-light"
                    onClick={() => Delete(index,data.id)}
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
  )
}

export default EmployeeList