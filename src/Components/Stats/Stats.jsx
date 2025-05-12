import CountUp from "react-countup";

const Stats = () => {
    return (
        <div className="grid grid-cols-3 gap-2 w-[600px] mx-auto pb-12">
                <div>
                    <p className="text-black text-base font-medium manRope">Years Experience</p>
                    <p className="text-[55px] bannerFont text-black font-medium italic"><CountUp end={5} duration={5}></CountUp>+</p>
                </div>
                <div>
                    <p className="text-black text-base font-medium manRope">Professional Staffs</p>
                    <p className="text-[55px] bannerFont text-black font-medium italic"><CountUp end={50} duration={5}></CountUp>+</p>
                </div>
                <div>
                    <p className="text-black text-base font-medium manRope">Positive Reviews</p>
                    <p className="text-[55px] bannerFont text-black font-medium italic"><CountUp end={99} duration={5}></CountUp>+</p>
                </div>
        </div>
    );
};

export default Stats;