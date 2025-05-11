import { NavLink, useNavigate } from "react-router-dom";
const Featured = ({ prod }) => {
  const { title, price, image } = prod;
  const first_price = parseFloat(price["1ml"].slice(1));
  const second_price = parseFloat(price["100ml_sale"].slice(1));
  const navigateToCart = useNavigate();
  const formatted_title =  title.toLowerCase().replace(/\s+/g,"-");
  const handleNavigateToCart = () => {
    navigateToCart(`/product/${formatted_title}`);
  };
  return (
    <div onClick={handleNavigateToCart} className="cursor-pointer">
      <img className="w-full h-[500px]" src={image} />
      <h1 className="mt-10 bannerFont text-[35px] text-[#141414]">{title}</h1>
      <NavLink to={"/cart"}>
        <p className="mt-4 text-[#A7231A] bannerFont">
          ${first_price} - ${second_price}
        </p>
      </NavLink>
      <button
        onClick={handleNavigateToCart}
        className="btn mt-5 bg-[#dcd7e2] text-[#515151] hover:bg-[#c2bccf] font-bold py-[10px] px-[30px] manRope text-base"
      >
        Select options
      </button>
    </div>
  );
};
export default Featured;
