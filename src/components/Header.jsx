import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-purple-600 text-center text-white pt-20 pb-48 rounded-b-xl space-y-5">
            <h1 className="text-[2.5rem] font-bold leading-tight">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="w-3/5 mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to="/dashboard" className="bg-white rounded-full py-3 px-6 text-purple-600 font-semibold inline-block">Shop Now</Link>
        </div>
    )
}

export default Header;