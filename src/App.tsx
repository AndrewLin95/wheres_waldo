import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Locnar from "./Components/Pages/Locnar";
import Test from "./Components/Pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Test/>
        <Routes>
          <Route path="/wheres_waldo/" element={<Home/>}/>
          <Route path="/wheres_waldo/locnar" element={<Locnar/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
