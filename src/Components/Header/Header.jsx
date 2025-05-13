import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useContext, useState } from "react";
import { cartContext } from "../../main";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navLinks = ["Perfumes", "About us", "Home", "Contact us", "Cart"];
  const routeMap = {
    Home: "",
    Perfumes: "perfumes",
    "About us": "about_us",
    "Contact us": "contact_us",
    Cart: "cart",
  };
  const { quantity } = useContext(cartContext);
  const location = useLocation();
  const currentPath =
    location.pathname === "/" ? routeMap["Home"] : location.pathname.slice(1);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-50 relative px-80 py-5 flex justify-between items-center">
        <div className="">
          <NavLink
            to="/"
            className="text-[45px] font-serif bannerFont text-[#141414]"
          >
            STALLION SCENTS
          </NavLink>
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={`/${routeMap[link]}`}
                  className={
                    currentPath === routeMap[link]
                      ? "text-2xl myFont underline decoration-[1.5px] underline-offset-8"
                      : "text-2xl myFont"
                  }
                >
                  {link === "Cart" ? (
                    <div
                      onClick={() => setIsModalOpen(true)}
                      className="border border-solid border-black p-5 relative"
                    >
                      <div className="relative bg-[#f57e76] w-4 h-4 rounded-full left-4 top-2 flex justify-center items-center">
                        <p className="text-white text-[10px] ">{quantity}</p>
                      </div>
                      <BsCart3 />
                    </div>
                  ) : (
                    <div className="mt-7 text-[#A7231A]">{link}</div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-[300px] h-full p-6 shadow-lg transform transition-transform duration-[800ms] ease-in-out translate-x-0 animate-slide-in relative">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-5xl text-gray-600 hover:text-black"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 className="font-bold text-lg mt-8">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the cross icon to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
