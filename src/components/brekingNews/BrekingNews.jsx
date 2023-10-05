import Marquee from "react-fast-marquee";


const BrekingNews = () => {
    return (
        <div className="pb-4">
            <div className="bg-[#F3F3F3] p-2 flex rounded-sm">
                <button className="bg-[#D72050] text-white rounded-sm p-[6px] px-6">Latest</button>
                <Marquee className="font-semibold">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default BrekingNews;