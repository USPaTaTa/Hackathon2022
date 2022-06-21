import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import HeaderSpectator from "./components/headerSpectator";
import HeaderArtist from "./components/headerArtist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/headerSpectator" element={<HeaderSpectator />} />
        <Route path="/headerArtist" element={<HeaderArtist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
