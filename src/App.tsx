import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/wheres_waldo/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
