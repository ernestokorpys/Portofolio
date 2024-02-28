import Layout from "./pages/layout.jsx";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import AboutUs from "./pages/about-us.jsx";
import Products from "./pages/products.jsx";
import Footer from "./pages/footer.jsx";
import "./App.css";

export function App() {
  return (
    <>
      <body>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        <div>


          <div className="empty"></div>

          {/* <Footer /> */}
        </div>
      </body>
    </>
  );
}
export default App;
