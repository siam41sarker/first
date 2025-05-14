import { useLoaderData, useParams } from "react-router-dom";
import banner_pic from "../../assets/omre.jpg";
import { useContext, useState } from "react";
import { cartContext } from "../../main";
const Product_Details = () => {
  const { url } = useParams();
  const loadedData = useLoaderData();
  const { quantity, setQuantity,cartItems,setCartItems} = useContext(cartContext);
  const [valueFromCart, setValueFromCart] = useState(1);
  const [selectedSizeLabel,setSelectedSizeLabel] = useState('');
  const filtered_data = loadedData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === url
  );
  const [price, setSPrice] = useState(
    parseFloat(filtered_data.price?.["1ml"].slice(1))
  );
  const [salePrice, setSalePrice] = useState("");
  console.log(salePrice);
  const [isSelected, setIsSelected] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [regularPrice, setRegularPrice] = useState("");
  const interest = 4;
  const handleChangeOption = (event) => {
    if (event.target.value === "") {
      setIsSelected(false);
      setSPrice(parseFloat(filtered_data.price?.["1ml"].slice(1)));
    } else {
      setIsSelected(true);
      setSPrice(parseFloat(event.target.value));
    }
    const optionSelected = event.target.options[event.target.selectedIndex];
    setSelectedSizeLabel(optionSelected.text);
    const sale = optionSelected.getAttribute("data-sale");
    const regular = optionSelected.getAttribute("data-regular");
    setSalePrice(sale ? sale : "");
    setRegularPrice(regular ? regular : "");
    console.log("regular: ", regular);
    console.log("sale: ", sale);
  };
  console.log("value: ", quantity);
  return (
    <div>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner_pic})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <h1 className="text-[50px] text-white bannerFont">
          {filtered_data.title}
        </h1>
      </div>
      <div className="mt-2 bg-[#F5F5F5] flex gap-10 justify-center pt-12 pb-12">
        <div>
          <img src={filtered_data.image} alt="" />
        </div>
        <div className="w-[650px]">
          <h1 className="text-[#141414] bannerFont tracking-[-2px] text-5xl font-medium">
            {filtered_data.title}
          </h1>
          <p className="mt-2">
            {!isSelected && "From "}${parseFloat(price)}{" "}
            <span className="ml-4">
              <del>{regularPrice && `$${regularPrice}`}</del>
            </span>
          </p>
          <p>
            or {interest} interest-free payments of £
            {(price / interest).toFixed(2)} with
          </p>
          <p className="mt-2">{filtered_data.short_description}</p>
          <div className="mt-4">
            <p>Size:</p>
            <div className="relative w-full">
              <select
                onChange={handleChangeOption}
                className="appearance-none px-8 w-full py-5 rounded-md bg-transparent border border-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Size</option>
                <option
                  value={parseFloat(filtered_data.price?.["1ml"].slice(1))}
                >
                  {filtered_data.price?.["1ml"] && "1ML SAMPLE SIZE"}
                </option>
                <option
                  value={parseFloat(filtered_data.price?.["5ml"].slice(1))}
                >
                  {filtered_data.price?.["5ml"] && "5ML SAMPLE SIZE"}
                </option>
                <option
                  value={parseFloat(filtered_data.price?.["10ml"].slice(1))}
                >
                  {filtered_data.price?.["10ml"] && "10ML SAMPLE SIZE"}
                </option>
                <option
                  value={
                    filtered_data.price?.["20ml"] &&
                    parseFloat(filtered_data.price?.["20ml"].slice(1))
                  }
                  className={filtered_data.price?.["20ml"] || "hidden"}
                >
                  {filtered_data.price?.["20ml"] && "20ML TRAVEL SIZE"}
                </option>
                <option
                  className={filtered_data.price?.["30ml"] || "hidden"}
                  value={
                    filtered_data.price?.["30ml"] &&
                    parseFloat(filtered_data.price?.["30ml"].slice(1))
                  }
                >
                  {filtered_data.price?.["30ml"] && "30ML TRAVEL SIZE"}
                </option>
                <option
                  value={parseFloat(
                    filtered_data.price?.["50ml_sale"].slice(1)
                  )}
                  data-sale={
                    filtered_data.price?.["50ml_sale"]
                      ? parseFloat(filtered_data.price?.["50ml_sale"].slice(1))
                      : ""
                  }
                  data-regular={
                    filtered_data.price?.["50ml_regular"]
                      ? parseFloat(
                          filtered_data.price?.["50ml_regular"].slice(1)
                        )
                      : ""
                  }
                >
                  {filtered_data.price?.["50ml_sale"] && "50ML DECANT BOTTLE"}
                </option>
                <option
                  value={parseFloat(
                    filtered_data.price?.["100ml_sale"].slice(1)
                  )}
                  data-sale={
                    filtered_data.price?.["100ml_sale"]
                      ? parseFloat(filtered_data.price?.["100ml_sale"].slice(1))
                      : ""
                  }
                  data-regular={
                    filtered_data.price?.["100ml_regular"]
                      ? parseFloat(
                          filtered_data.price?.["100ml_regular"].slice(1)
                        )
                      : ""
                  }
                >
                  {filtered_data.price?.["100ml_sale"] && "100ML DECANT BOTTLE"}
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-5 flex gap-6">
              <input
                className="py-1 px-3 rounded-lg border border-solid border-black"
                type="number"
                aria-label="Quantity"
                min={1}
                max={999}
                size={4}
                value={valueFromCart}
                step={1}
                onChange={(e) => {
                  let val = e.target.value;
                  if (val < 1) val = 1;
                  if (val > 999) val = 999;
                  setValueFromCart(parseInt(val));
                }}
              />
              <button
                onClick={() => {
                  if (!isSelected) {
                    alert("Please select an option!");
                  } else {
                    setIsButtonClicked(true);
                    setQuantity(parseInt(quantity + valueFromCart));
                    setCartItems([
                      ...cartItems,{
                          id:filtered_data.id,
                          image:filtered_data.image,
                          title:filtered_data.title,
                          size:selectedSizeLabel,
                          cartQuantity:parseFloat(valueFromCart),
                          priceOfIt: parseFloat(price)
                      }
                    ])
                  }
                }}
                className={
                  !isSelected
                    ? "btn bg-[#7249a4] text-white bannerFont border border-solid border-[#7249a4] rounded-lg  opacity-[0.3] cursor-not-allowed"
                    : "btn bg-[#7249a4] text-white bannerFont border border-solid border-[#7249a4] rounded-lg"
                }
              >
                {!isButtonClicked ? "Add To Cart" : "Added"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        reprehenderit tempora totam numquam dolores nulla, eum, molestiae
       
      </p>

    </div>
  );
};

export default Product_Details;
