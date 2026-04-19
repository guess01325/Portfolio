import "./App.css";
import Layout from "./Layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./screens/Portfolio";
import About from "./screens/About";
import Main from "./screens/Main";
import Contact from "./screens/Contact";
import PrivacyPolicy from "./screens/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-positive-adversity" element={<PrivacyPolicy />} />
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
