import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import './App.css'


export default function App() {

  return (
    <>
    <div id="container">
      <h1>Welcome to the Puppy Bowl!</h1>
      <div id="navbar">
        <Link to="/allplayers">View All Players</Link>
        <br/>
        <Link to="/singleplayer">View Player</Link>
        {/* <Link to="/">Home</Link> */}
      </div>
    </div>
    <div id="main-section">
      <Routes>
        <Route path="/AllPlayers" element={<AllPlayers />} />
        <Route path="/SinglePlayer/:selectedPlayerId" element={<SinglePlayer />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>

    </>
  )
}


