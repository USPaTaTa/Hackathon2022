import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Sondage from "./components/sondage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sondage" element={<Sondage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

