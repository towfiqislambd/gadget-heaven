import { RxCrossCircled } from "react-icons/rx";

const AddToCart = ({ product, handleRemoveProduct }) => {
    const { product_id, product_title, product_image, price, description } = product
    return (
        <div className="border rounded-lg px-6 py-4 pr-10 flex justify-between items-center mx-32 mb-4">
            <div className="flex gap-5 items-center">
                <img src={product_image} className="h-28 w-24" />
                <div className="">
                    <h2 className="font-semibold text-xl mb-1">{product_title}</h2>
                    <p className="text-gray-500 mb-2">{description}</p>
                    <p className="text-gray-800 mb-3">Price: {price}</p>
                </div>
            </div>
            <button onClick={() => handleRemoveProduct(product_id,price)}><RxCrossCircled className="text-4xl text-red-500" /></button>
        </div>
    )
}

export default AddToCart;