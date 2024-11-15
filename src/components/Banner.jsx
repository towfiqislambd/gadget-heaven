import BannerImg from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="w-[750px] h-[400px] mx-auto rounded-xl border-[3px] p-4 bg-purple-400 -translate-y-40">
            <img src={BannerImg} className="w-full h-full rounded-xl" />
        </div>
    )
}
export default Banner;