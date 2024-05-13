import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Auth from "./Authentication/Auth";
import { UnAuthorized } from "./Authentication/UnAuthorized";
import Home from "./Pages/Home";
// import Dashboard from "./Pages/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "./Layout/Layout";
import SideBar from "./Layout/SideBar/SideBar";
import SagaTable from "./Pages/SagaTable";
import SagaForm from "./Pages/SagaForm";
import React from "react";
const LazyDashboard = React.lazy(() => import("./Pages/Dashboard"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />}></Route> */}
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback="Loading...">
                <LazyDashboard />
              </React.Suspense>
            }
          ></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/unauthorized" element={<UnAuthorized />}></Route>
          <Route element={<Auth/>}>
              <Route path='/layout' element={<Layout/>}/>
            </Route>
          <Route path="/layout" element={<Layout />} />
          <Route path="/sagaform" element={<SagaForm />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/sagatable" element={<SagaTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
