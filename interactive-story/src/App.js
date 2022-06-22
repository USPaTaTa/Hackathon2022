import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Formulaire from './components/formulaire';
import Artiste from './components/artistes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/formulaire" element={<Formulaire/>} />
        <Route path="/artiste" element={<Artiste/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;