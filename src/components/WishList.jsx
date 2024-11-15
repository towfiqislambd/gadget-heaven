import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import { HandleContext } from "./Root";

const WishList = ({ product, handleRemoveWishListProduct }) => {
    const {product_id, product_title, product_image, price, description } = product;
    const { handleAddToCart } = useContext(HandleContext);
    return (
        <div className="border rounded-lg px-6 py-4 pr-10 flex justify-between items-center mx-32 mb-4">
            <div className="flex gap-5 items-center">
                <img src={product_image} className="h-32 w-28" />
                <div className="">
                    <h2 className="font-semibold text-xl mb-1">{product_title}</h2>
                    <p className="text-gray-500 mb-1">{description}</p>
                    <p className="text-gray-800 mb-2">Price: {price}</p>
                    <button onClick={() => handleAddToCart(product)} className="flex items-center gap-2 w-28 justify-center  py-1 border bg-purple-600 rounded-full text-white border-purple-600 text-sm font-medium">Add To Cart</button>
                </div>
            </div>
            <button onClick={() => handleRemoveWishListProduct(product_id)}><RxCrossCircled className="text-4xl text-red-500" /></button>
        </div>
    )
}

export default WishList;