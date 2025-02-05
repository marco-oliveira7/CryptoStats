import Background from "./components/Background/Background";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
function App() {
  return (
    <>
      <Background />
      <div className="containerBox">
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:coinId" element={<Coin />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
