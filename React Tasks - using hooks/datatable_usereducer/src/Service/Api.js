import axios from "axios";

export const API_URL =
  "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/hooks/";

export const postData = async (data) => {
  const response = await axios({
    method: "POST",
    url: API_URL,
    data: data,
  });
  return response;
};

export const getData = async (data) => {
  const response = await axios({
    method: "GET",
    url: API_URL,
    data: data,
  });
  return response;
};

export const getIdData = async (id) => {
  const response = await axios({
    method: "GET",
    url: API_URL + id,
  });
  return response;
};

export const updateData = async (id,data) => {
  const response = await axios({
    method: "PUT",
    url: API_URL + id,
    data:data,
  });
  return response;
};

export const deleteData = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: API_URL + id,
    data: id,
  });
  return response;
};

// export const updateUser = async (id, data) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, data);
//     return response;
//   } catch (err) {
//     throw err;
//   }
// };

// export const getUser = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response;
//   } catch (err) {
//     throw err;
//   }
// };
