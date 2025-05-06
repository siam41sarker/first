import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isClicked, setIsClicked] = useState("");
  const navLinks = ["Perfumes", "About", "Contact", "Home", "Cart"];
  return (
    <div>
      <div className="navbar bg-base-100 shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-50 relative px-80 py-5">
        <div className="flex-1">
          <NavLink to="/" className="text-3xl myFont">
            STALLION SCENTS
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={`/${link === "Home" ? "" : link}`}
                  onClick={() => setIsClicked(link)}
                  className={
                    isClicked === link
                      ? "text-2xl myFont underline"
                      : "text-2xl myFont"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
