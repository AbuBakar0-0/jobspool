import "./App.css";
import Test from "./components/Test";
import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar1";
import Search from "./components/Search";
import Company from "./components/Company";
import Analytics from "./components/Analytics";
import Listing from "./components/Listing";
function App() {
  return (
    <>
      <Navbar1 />
      <hr />
      <Listing />
      <hr />
      <Search />
      <Company />
      <Analytics />
      <Test />
      <Footer />
    </>
  );
}

export default App;
