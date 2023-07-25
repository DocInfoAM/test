import Doctors from "./pages/doctors";
import Clinics from "./pages/clinics";
import Contacts from "./pages/contacts";
import Navigation from "./pages/nav";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Doctors />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
