import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { HandleContext } from "./Root";

const Details = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const detail = data.find(product => product.product_id === product_id);
    const { product_title, product_image, price, description, specification, availability, rating } = detail;
    const { handleAddToCart, handleWishList } = useContext(HandleContext);

    return (
        <div>
            <div className="bg-purple-600 text-center text-white pt-8 pb-32 space-y-5">
                <h1 className="text-2xl font-bold leading-tight">Product Details</h1>
                <p className="w-3/5 mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="grid grid-cols-3 gap-5 bg-slate-50 border p-5 rounded-xl w-[900px] mx-auto -translate-y-24 shadow">
                <div className="p-5">
                    <img src={product_image} className="w-full h-full" />
                </div>
                <div className="col-span-2">
                    <h3 className="text-black font-semibold text-xl mb-1">{product_title}</h3>
                    <p className="text-gray-700 mb-2">Price: ${price}</p>
                    <span className="text-lime-500 border text-xs rounded-full font-medium border-lime-500 px-2 py-1">{availability}</span>
                    <p className="text-gray-500 mt-2 font-light mb-2">{description}</p>
                    <p className="text-black font-semibold text-lg mb-1">Specification:</p>
                    <ol className="pl-2 text-gray-500 text-sm space-y-1 mb-2">
                        {
                            specification.map((item, idx) => <li key={idx}>{idx + 1}. {item}</li>)
                        }
                    </ol>
                    <p className="text-black font-semibold text-lg mb-1">Rating: </p>
                    <div className="flex gap-10 mb-2 text-sm">
                        <div className="flex text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>
                        <p className="">{rating}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button onClick={() => handleAddToCart(detail)} className="flex items-center gap-2 w-36 justify-center  py-2 border bg-purple-600 rounded-full text-white border-purple-600 text-sm font-medium">Add To Cart <IoCartOutline className="text-xl" /></button>
                        <button id="heart" onClick={() => handleWishList(detail)} className="p-2 border border-gray-300 rounded-full"><IoMdHeartEmpty className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details;