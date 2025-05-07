
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const navLinks = ["Perfumes", "About", "Contact", "Home", "Cart"];
  const location = useLocation();
 const currentPath = location.pathname === "/"?"Home":location.pathname.slice(1);
 console.log(currentPath)
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
                  className={
                    currentPath === link?"text-2xl myFont underline":"text-2xl myFont"
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
