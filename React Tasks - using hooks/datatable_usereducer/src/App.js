import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import List from "./Pages/List";
import ContextPage from "./Pages/ContextPage";
import RowProvider from "./UseContext/RowProvider";
import ContextList from "./Pages/ContextList";
import Carousel from "./Carousel";
import View from "./Pages/View";
import Find from "./find";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="App">
      <RowProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/contextpage" element={<ContextPage />}></Route>
            <Route path="/contextlist" element={<ContextList />}></Route>
            <Route path="/view" element={<View/>}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/form/:id" element={<Form />}></Route>
            <Route path="/carousel" element={<Carousel items={items} />}></Route>
            <Route path="/find" element={<Find/>}></Route>
          </Routes>
        </BrowserRouter>
      </RowProvider>
    </div>
  );
}

export default App;
