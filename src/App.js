import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1";

import Section2 from "./components/Section2";

import Section3 from "./components/Section3";

import Section4 from "./components/Section4";

import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section1></Section1>

      <Section2></Section2>

      <Section3></Section3>

      <Section4></Section4>

      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
