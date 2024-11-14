import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import { HandleContext } from "./Root";

const WishList = ({ product, handleRemoveWishListProduct }) => {
    const {product_id, product_title, product_image, price, description } = product;
    const { handleAddToCart } = useContext(HandleContext);
    return (
        <div className="border rounded-lg p-6 pr-10 flex justify-between items-center mx-20 mb-4">
            <div className="flex gap-5 items-center">
                <img src={product_image} className="h-36 w-32" />
                <div className="">
                    <h2 className="font-semibold text-xl mb-1">{product_title}</h2>
                    <p className="text-gray-500 mb-2">{description}</p>
                    <p className="text-gray-800 mb-3">Price: {price}</p>
                    <button onClick={() => handleAddToCart(product)} className="flex items-center gap-2 w-32 justify-center  py-2 border bg-purple-600 rounded-full text-white border-purple-600 text-sm font-medium">Add To Cart</button>
                </div>
            </div>
            <button onClick={() => handleRemoveWishListProduct(product_id)}><RxCrossCircled className="text-4xl text-red-500" /></button>
        </div>
    )
}

export default WishList;