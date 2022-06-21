import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import ArtistPage from "./components/artistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/artist/delacoux" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
