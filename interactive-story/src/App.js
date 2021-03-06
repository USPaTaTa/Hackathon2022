import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import Formulaire from './components/formulaire';
import Home from './components/home';
import Artiste from "./components/artistPage"
import Sondage from "./components/sondage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/formulaire" element={<Formulaire/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/artist/delacoux" element={<Artiste/>} />
        <Route path="/sondage" element={<Sondage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

