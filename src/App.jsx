import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import TrackOrders from "./pages/TrackOrders";
import HelpCenter from "./pages/HelpCenter";
import OffersDiscounts from "./pages/OffersDiscounts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Benefits from "./pages/Benefits";
import Newsletter from "./pages/NewsLetter";
import Recipes from "./pages/Recipes";
import Shipping from "./pages/shipping";
import Terms from "./pages/Terms";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/signin";

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trackorders" element={<TrackOrders />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/offers" element={<OffersDiscounts />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/newsletter" element={<Newsletter />} />
         <Route path="/shipping-returns" element={<Shipping />} />
          <Route path="/terms" element={<Terms />} />
         <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
