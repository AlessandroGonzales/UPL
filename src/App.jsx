import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProposalsPage from "./pages/ProposalsPage";
import ProposalDetails from "./pages/ProposalDetails";
import "./App.css";
import FacultyDetail from "./pages/FacultyDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propuestas" element={<ProposalsPage />} />
        <Route path="/propuestas/:id" element={<ProposalDetails />} />
        <Route path="facultad/:id" element={<FacultyDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
