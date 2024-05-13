import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import "bootstrap/dist/css/bootstrap.css";
import List from "./Pages/List";
import View from "./Pages/View";
import FormSaga from "./Pages/SagaForm/FormSaga";
import TableSaga from "./Pages/SagaForm/TableSaga";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/form:id" element={<Form />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/saga" element={<FormSaga/>}></Route>
        <Route path="/stable" element={<TableSaga/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;
