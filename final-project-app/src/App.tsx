import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SIEM from "./pages/SIEM";
import Penetretion from "./pages/Penetretion";
import Response from "./pages/Response";
import Network from "./pages/Network";
import Security from "./pages/Security";
import Industries2 from "./pages/Industries2";
import Partner from "./pages/Partner";
import ContactUs from "./pages/ContactUs";
import Jobs from "./pages/Jobs";
import NewsLetter from "./pages/NewsLetter";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/siem-threat" element={<SIEM />} />
        <Route path="/penetretion" element={<Penetretion />} />
        <Route path="/response" element={<Response />} />
        <Route path="/network" element={<Network />} />
        <Route path="/security" element={<Security />} />
        <Route path="/industries2" element={<Industries2 />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/newsletter" element={<NewsLetter />} />
      </Routes>
    </Router>
  );
};

export default App;
