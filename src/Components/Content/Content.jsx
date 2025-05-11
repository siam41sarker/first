import { useNavigate } from "react-router-dom";
import content_img1 from "../../assets/content.jpg";
const Content = () => {
  const navigateToContact = useNavigate();
  const handleNavToContact = () => {
      navigateToContact("/About");
  };
    const navigateToPerfumes = useNavigate();
  const handleNavToPerfumes = () => {
      navigateToPerfumes("/Perfumes");
  };
  return (
    <div>
      <div className="mt-2 bg-[#F5F5F5]">
        <div className="py-24 max-w-7xl mx-auto flex gap-10">
          <div className="w-1/2 flex flex-col ">
            <p className="manRope text-base text-black tracking-[5px] font-bold text-[14px] uppercase">
              <span className="text-[50px] font-extrabold relative top-6">
                S
              </span>
              tallion Scents a complete Perfume Store
            </p>

            <h1 className="Montserrat text-[51px] text-[#0F0D02] tracking-[-2px] mt-10 lineHight">
              Unveil Your Personal Aromatic Signare
            </h1>
            <p className="text-black Montserrat mt-5 ">
              <span className="font-extrabold">Stallion Scents</span> offers a
              world of luxury perfumes, curated to match your every mood.
              Explore timeless fragrances for every occasion, all at affordable
              prices.
            </p>
            <div className="flex gap-3 mt-5">
              <button onClick={handleNavToContact} className="btn btn-neutral text-white py-6 px-10 text-lg font-medium Montserrat transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105">
                Get Started
              </button>

              <button onClick={handleNavToPerfumes} className="btn bg-red-800 text-white py-6 px-10 text-lg font-medium Montserrat transition-all duration-300 ease-in-out hover:bg-red-900 hover:scale-105">
                Our Product
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img className="w-full" src={content_img1} />
          </div>
        </div>
        <div className=" pb-14 ">
          <h1 className="bannerFont text-[55px] text-[#141414] text-center">
            Dare to be different
          </h1>
          <p className="text-lg Montserrat mt-5 text-center w-[700px] mx-auto">
            At Stallion Scents, every fragrance tells a story. Shop our
            collection of carefully selected perfumes designed for those who
            appreciate the art of scent.
          </p>
        </div>
      </div>
      <div className="bg-[#ebe5dc] flex flex-col items-center">
        <div className="w-[630px] p-16 flex flex-col items-center">
          <h5 className="manRope text-xl font-semibold uppercase text-[#141414] tracking-[5px]">
            About Stallion Scents
          </h5>
          <h1 className="bannerFont text-[#141414] text-[55px] text-center mt-2">
            Who we are
          </h1>
          <p className="text-center mt-6 bannerFont text-[#141414]">
            At StallionScents, we’re more than just a fragrance retailer—we’re
            scent enthusiasts with a passion for helping others discover the
            world of fine fragrances. Born from a love of niche and designer
            perfumes, our mission is simple: to make luxury fragrances more
            accessible through high-quality, 100% authentic decants.
          </p>
          <p className="text-center mt-2 bannerFont text-[#141414]">
            We know that finding your perfect scent is personal, and sometimes,
            a full bottle isn’t the first step. That’s where we come in. Whether
            you’re exploring a new fragrance house, testing a seasonal scent, or
            simply building your collection one decant at a time, we’ve got you
            covered.
          </p>
          <p className="text-center mt-2 bannerFont text-[#141414]">
            We curate our decants by sourcing full-sized bottles of genuine,
            high-end fragrances and meticulously hand-pouring them into elegant,
            smaller formats—perfect for experiencing luxury in a more accessible
            and refined way.
          </p>
          <p className="text-center mt-2 bannerFont text-[#141414]">
            StallionScents is built on trust, transparency, and a deep
            appreciation for the art of fragrance. Join us on this scented
            journey and find your signature scent!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
