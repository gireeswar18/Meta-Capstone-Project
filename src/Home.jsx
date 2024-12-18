import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
