import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const {product_id,product_title,product_image,price} = product;
    return (
        <div className="border rounded-lg p-5">
            <img src={product_image} className="mx-auto h-48 mb-3" />
            <h2 className="font-semibold text-lg mb-1">{product_title}</h2>
            <p className="text-gray-600 mb-3">Price: {price}</p>
            <Link to={`/products/${product_id}`}  className="px-4 py-2 border bg-purple-600 rounded-full text-white border-purple-600 text-sm font-medium">View Details</Link>
        </div>
    )
}

export default Product;