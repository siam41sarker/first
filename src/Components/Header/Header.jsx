import { NavLink, useLocation, useNavigate,  } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useContext, useState } from "react";
import { cartContext } from "../../main";

const Header = () => {
  const navigateToCartDetails = useNavigate();
  const handleNavigateToCartDetails = ()=>
      {
          navigateToCartDetails("/cart-details");
      }
  const navigateToCheckout = useNavigate();
  const handleNavigateToCheckout = ()=>
      {
          navigateToCheckout("/checkout");
      }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navLinks = ["Perfumes", "About us", "Home", "Contact us", "Cart"];
  const routeMap = {
    Home: "",
    Perfumes: "perfumes",
    "About us": "about_us",
    "Contact us": "contact_us",
    Cart: "cart",
  };
  const { quantity,cartItems } = useContext(cartContext);
  console.log("cart items: ",cartItems.length)
  const location = useLocation();
  const currentPath =
    location.pathname === "/" ? routeMap["Home"] : location.pathname.slice(1);
  return (
    <div>
      <div className="navbar bg-base-100  z-50 relative w-full  px-80 py-5 flex justify-center gap-[250px] items-center">
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
          <div className="bg-white w-[300px] h-full p-6 shadow-lg transform transition-transform duration-[800ms] ease-in-out translate-x-0 animate-slide-in relative overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-5xl text-gray-600 hover:text-black"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="w-11/12">
                  {
                      cartItems.map(item=><div key={item.id} className="pt-14">
                          <img src={item.image} alt="" className="w-full" />
                          <h1 className="text-[#A7231A] myFont font-bold text-[14px]">{item.title} {"    "} <span>{item.size}</span></h1>
                          <p className="mt-2 text-black">{item.cartQuantity} ×  ${item.priceOfIt}</p>
                          <p className="mt-4 text-[#959595]"><span className="font-extrabold">Subtotal: </span>${parseFloat(item.cartQuantity*item.priceOfIt).toFixed(2)}</p>
                          <div className="mt-4 flex justify-between">
                            <button onClick={()=>
                                {
                                    handleNavigateToCartDetails();
                                    setIsModalOpen(false);
                                }
                            } className="btn bg-[#e9e6ed] text-[#515151] rounded-[3px] hover:bg-[#5d5c5e] hover:font-bold hover:text-white">View Cart</button>
                            <button onClick={()=>
                                {
                                    handleNavigateToCheckout();
                                    setIsModalOpen(false);
                                }
                            } className="btn bg-[#e9e6ed] text-[#515151] rounded-[3px] hover:bg-[#5d5c5e] hover:font-bold hover:text-white">Checkout</button>
                          </div>
                      </div>)
                  }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
