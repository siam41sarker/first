import { useEffect, useState } from "react";
import Featured from "../Featured/Featured";
const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("featured_product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="mt-10">
      <div className="mt-10 flex justify-between max-w-7xl  mx-auto">
        <h1 className="text-[#141414] bannerFont text-[55px]">
          Featured Products
        </h1>
        <button className="btn bg-[#A7231A] hover:bg-red-950 capitalize mt-7 text-white font-semibold py-[20px] px-[30px] manRope text-base">
          shop all product
        </button>
      </div>
      <div className="mt-10 w-11/12 mx-auto ">
           <div className="w-full flex gap-5 pb-5">
                 {
                product.map(prod=><Featured key={prod.id} prod={prod}></Featured>)
            }
           </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
