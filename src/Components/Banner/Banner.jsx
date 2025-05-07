import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import bg_img1 from "../../assets/niche-scaleddfffddf.jpg";
import bg_img2 from "../../assets/Guerlain_1600x930_2ff.webp";
import bg_img3 from "../../assets/s4.png";
import { useNavigate } from "react-router-dom";
import Content from "../Content/Content";
const Banner = () => {
  const navigation = useNavigate();
  const handleClickButton = ()=>
      {
          navigation('/Perfumes');
      }
  return (
    <div>
      <div className="w-full h-[700px]">
        <Swiper
          modules={[Navigation, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full flex justify-start items-center pl-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-zoom z-0"
                style={{ backgroundImage: `url(${bg_img1})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              <div className="relative z-20 w-1/3">
                <h1 className="text-[45px] text-white font-semibold bannerFont">
                  A Journey Through Fragrance, One Decant at a Time.
                </h1>
                <p className="mt-2 text-3xl text-white bannerFont">
                  Explore the world of niche perfumes, made affordable by us!
                </p>
                <p className="mt-4 text-base text-white bannerFont">
                  Discover the allure of niche fragrances without the luxury
                  price tag. We bring you unique, artisan-crafted perfumes that
                  redefine sophistication—at a price you can afford.
                </p>
                <button onClick={handleClickButton} className="btn btn-outline mt-6 text-white border-white py-8 px-10 text-2xl bannerFont">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex justify-start items-center pl-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-zoom z-0"
                style={{ backgroundImage: `url(${bg_img2})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              <div className="relative z-20 w-1/3">
                <h1 className="text-[45px] text-white font-semibold bannerFont">
                  Timeless Elegance, Fragrance for Every Occasion
                </h1>
                <p className="mt-2 text-3xl text-white bannerFont">
                  Fragrance that captures every moment’s grace.
                </p>
                <p className="mt-4 text-base text-white bannerFont">
                  Indulge in sophisticated scents that elevate every moment.
                  From everyday grace to evening glamour, our niche perfumes are
                  crafted to match your every mood.
                </p>
                <button onClick={handleClickButton} className="btn btn-outline mt-6 text-white border-white py-8 px-10 text-2xl bannerFont">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex justify-start items-center pl-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-zoom z-0"
                style={{ backgroundImage: `url(${bg_img3})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
              <div className="relative z-20 w-1/3">
                <h1 className="text-[45px] text-white font-semibold bannerFont">
                  Fragrance for Every Occasion
                </h1>
                <p className="mt-2 text-3xl text-white bannerFont">
                  Fragrance for Every Occasion
                </p>
                <p className="mt-4 text-base text-white bannerFont">
                  Our handpicked niche fragrances are designed to complement
                  your lifestyle—from quiet mornings to unforgettable nights,
                  always in style.
                </p>
                <button onClick={handleClickButton} className="btn btn-outline mt-6 text-white border-white py-8 px-10 text-2xl bannerFont">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Content></Content>
    </div>
  );
};

export default Banner;
