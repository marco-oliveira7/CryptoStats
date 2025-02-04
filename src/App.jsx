import Background from "./components/Background/Background";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Background />
      <div className="containerBox">
        <NavBar />
        <div className="main">
          <Home />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
