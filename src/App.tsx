import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Locnar from "./Components/Pages/Locnar";
import Universe133 from "Components/Pages/Universe133";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/wheres_waldo/" element={<Home/>}/>
          <Route path="/wheres_waldo/locnar" element={<Locnar/>}/>
          <Route path="/wheres_waldo/universe_133" element={<Universe133/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
