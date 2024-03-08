import Layout from "./pages/layout.jsx";
import { Route, Routes,  } from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import AboutMe from "./pages/about-me.jsx";

import "./App.css";

export function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      <div>
        <div className="empty"></div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default App;
