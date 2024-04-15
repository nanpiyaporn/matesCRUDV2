import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import allTeamImage from './assets/img/allteam.png'; // import the image


// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Welcome to Crewmate Fanclub</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Crewmate</Link>
      </nav>
      <br />
      <div style={{ textAlign: "center" }}>
        <img src={allTeamImage} alt="allcrewmate" style={{ display: "block", margin: "0 auto" }} /> {/* use the imported image */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
