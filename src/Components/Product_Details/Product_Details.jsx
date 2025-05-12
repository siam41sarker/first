import { useLoaderData, useParams } from "react-router-dom";
import banner_pic from "../../assets/omre.jpg";
import { useState } from "react";
const Product_Details = () => {
  const { url } = useParams();
  const loadedData = useLoaderData();

  const filtered_data = loadedData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === url
  );
  const [price, setSPrice] = useState(
    parseFloat(filtered_data.price?.["1ml"].slice(1))
  );

  const [salePrice, setSalePrice] = useState("");
  console.log(salePrice);
  const [quality,setQuality] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  const [regularPrice, setRegularPrice] = useState("");
  const interest = 4;
  const handleChangeOption = (event) => {
    setSPrice(parseFloat(event.target.value));
    setIsSelected(true);
    const optionSelected = event.target.options[event.target.selectedIndex];
    const sale = optionSelected.getAttribute("data-sale");
    const regular = optionSelected.getAttribute("data-regular");
    setSalePrice(sale ? sale : "");
    setRegularPrice(regular ? regular : "");
    console.log("regular: ", regular);
    console.log("sale: ", sale);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${banner_pic})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      ></div>
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
            <div>
            
            </div>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        reprehenderit tempora totam numquam dolores nulla, eum, molestiae
        repellendus veritatis vero ad, perspiciatis temporibus doloremque
        deserunt sed ducimus incidunt. Labore laudantium dignissimos impedit
        accusantium illo porro inventore sed nemo maxime vel eveniet, ex
        repellat ullam saepe numquam minima quam ad autem qui nihil temporibus
        cumque sequi officiis. Amet ab quis consequuntur excepturi ipsum numquam
        recusandae error ut quia repellat odit praesentium quibusdam nobis eius
        sint aspernatur, dolorum dolores sed eaque voluptas facere adipisci
        deleniti voluptatibus ratione. Distinctio eaque quibusdam quos
        recusandae illum dolore! Pariatur, non ullam culpa neque expedita
        temporibus excepturi quae deleniti? Excepturi perferendis odio illo
        pariatur rem eum, minus voluptate, aut natus dolorum possimus enim
        reiciendis soluta provident neque cupiditate accusantium mollitia
        facilis fuga dolores dolorem explicabo. Facilis eligendi cumque aperiam,
        sequi nam expedita excepturi aliquid magni tenetur culpa. Explicabo
        praesentium delectus ratione porro quibusdam? Id modi corporis
        voluptates commodi, autem consectetur accusamus aut tenetur, est vel
        aliquid maxime possimus magni perspiciatis sequi deleniti corrupti a
        incidunt expedita exercitationem nobis ratione totam ipsum consequuntur?
        Corporis est eligendi sunt cumque ducimus? Quis delectus ipsa
        perferendis debitis aut laboriosam expedita dolorum quasi sapiente
        blanditiis? Natus debitis ipsum ad, vel id nihil ducimus unde labore
        nemo mollitia, modi explicabo iste cum beatae quasi sapiente eius
        corrupti vitae dicta tempore aliquid aperiam autem hic exercitationem!
        Fugit libero aut, veniam veritatis eius sunt eaque, provident inventore
        distinctio optio ullam, doloribus reiciendis tempore possimus tempora.
        Iure non numquam praesentium, consectetur aperiam aut aliquam saepe,
        iste dolore earum iusto quasi nesciunt laudantium natus, odio ipsam!
        Deserunt accusamus quidem nostrum facilis praesentium dolor error,
        totam, eaque quos nemo eum rerum magnam voluptate ducimus mollitia dicta
        sint perferendis exercitationem tenetur rem? Itaque aut incidunt labore
        doloribus, magni, doloremque alias exercitationem perspiciatis quae
        beatae omnis fuga debitis possimus eveniet.
      </p>
    </div>
  );
};

export default Product_Details;
