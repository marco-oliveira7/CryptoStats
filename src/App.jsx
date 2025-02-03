import Background from "./components/Background/Background";
import List from "./components/List/list";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import Search from "./components/Search/search";

function App() {
  return (
    <>
      <Background />
      <div className="containerBox">
        <NavBar />
        <div className="main">
          <Search />
          <List />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
