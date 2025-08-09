import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav className="navbar">
  {/* Left section */}
<div className="left-section">
  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </div>
  <div className="logo">
    <Link to="/" onClick={() => setMenuOpen(false)}>
      <img src="/logo.png" alt="Suvria Logo" />
    </Link>
  </div>
</div>


      {/* Middle links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
      </ul>

      {/* Right section */}
     <div className="icons">
  <Link to="/cart" className="cart" title="Cart" onClick={() => setMenuOpen(false)}>
    🛒<span className="badge">1</span>
  </Link>

        {/* User dropdown */}
        <div
          className="user"
          ref={dropdownRef}
          onClick={() => setUserDropdown(!userDropdown)}
          title="Account"
        >
          👤
          {userDropdown && (
            <div className="user-dropdown">
               {/* Single button */}
        <Link to="/signin" className="signin-btn">
          Sign In / Register
        </Link>
              <Link to="/trackorders">Track Orders</Link>
              <Link to="/contact">Help Center</Link>
              <Link to="/offers">Offers & Discounts</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
