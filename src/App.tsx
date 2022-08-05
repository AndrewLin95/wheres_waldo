import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Locnar from "./Components/Pages/Locnar";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/wheres_waldo/" element={<Home/>}/>
          <Route path="/wheres_waldo/locnar" element={<Locnar/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
