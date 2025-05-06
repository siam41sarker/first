import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <div className="w-full h-[600px]">
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
          {/* Replace these with real images/text */}
          <SwiperSlide>
            <div
              className="hero bg-base-200 min-h-screen"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className="">
                <div className="hero-content flex-col lg:flex-row">
                  <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero bg-base-200 min-h-screen"
              style={{
                backgroundImage:
                  "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
            >
              <div className=" flex-col lg:flex-row-reverse">
               
               
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
