;

import Header from "./component/Header";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Notfound from "./component/Notfound";


function App() {

  return (
    <BrowserRouter>
     
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="*" element={<Notfound/>} />
          </Routes>
        </div>
        <Footer />
   
    </BrowserRouter>
  );
}

export default App;
