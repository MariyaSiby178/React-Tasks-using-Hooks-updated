import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ReduxForm } from "./Pages/ReduxForm";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ReduxPropsform from "./Pages/ReduxPropsform";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/form" element={<ReduxForm/>}></Route>
        <Route path="/propsform" element={<ReduxPropsform/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
