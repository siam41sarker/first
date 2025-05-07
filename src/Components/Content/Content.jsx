import content_img1 from "../../assets/Untitled-1tfr-430x287.jpg";
const Content = () => {
  return (
    <div className="mt-2 bg-[#F5F5F5] mb-10">
      <div className="py-24 max-w-7xl mx-auto flex gap-3">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="manRope text-base text-black"><span className="text-[50px] font-semibold text-black">S</span>tallion Scents a complate Perfume Store</p>
          <h1>Unveil Your Personal Aromatic Signare</h1>
          <p>
            Stallion Scents offers a world of luxury perfumes, curated to match
            your every mood. Explore timeless fragrances for every occasion, all
            at affordable prices.
          </p>
          <div className="flex gap-3">
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={content_img1} />
        </div>
      </div>
    </div>
  );
};

export default Content;
