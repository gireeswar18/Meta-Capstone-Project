import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="outer-container">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
