import { useContext, useState } from "react";
import { HandleContext } from "./Root";
import AddToCart from "./AddToCart";
import WishList from "./WishList";
import Img from "../assets/group.png"
import { Link } from "react-router-dom";
import { BsSortDown } from "react-icons/bs";


const Dashboard = () => {
    const { resetCart, totalPrice, newProducts, wishListProducts, handleRemoveProduct, handleRemoveWishListProduct } = useContext(HandleContext);
    const [activeBtn, setActiveBtn] = useState(null);
    const handleActiveBtn = status => {
        setActiveBtn(status)
    }
    const [sortedArr, setSortedArr] = useState([])
    const sortedProducts = () => {
        const sortedArray = newProducts.sort((a, b) => Number(b.price) - Number(a.price));
        setSortedArr(sortedArray)
        console.log(sortedArr)
    }


    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <img src={Img} className="mx-auto mb-3" />
                    <h3 className="font-bold text-lg">Payment Successful</h3>
                    <p className="py-4">Thank you for purchasing</p>
                    <p className="">{totalPrice}</p>
                    <div className="modal-action w-full block">
                        <form method="dialog" onClick={() => resetCart()}>
                            <Link to="/" className="btn w-full bg-gray-200 min-h-0 h-10  rounded-full">Close</Link>
                        </form>
                    </div>
                </div>
            </dialog>


            <div className="bg-purple-600 text-center text-white py-10 space-y-5 mb-5">
                <h1 className="text-2xl font-bold leading-tight">Dashboard</h1>
                <p className="w-3/5 mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button onClick={() => handleActiveBtn('cart')} className={` border border-white rounded-full py-2 px-8 font-medium me-3 ${activeBtn === 'cart' ? 'bg-white text-purple-600' : 'text-white'}`}>Cart</button>
                <button onClick={() => handleActiveBtn('wishlist')} className={` border border-white rounded-full py-2 px-8 font-medium me-3 ${activeBtn === 'wishlist' ? 'bg-white text-purple-600' : 'text-white'}`}>Wishlist</button>
            </div>
            <div className={`${activeBtn === 'wishlist' ? 'hidden' : 'block'}`}>
                <div className="flex justify-between py-3 mx-32">
                    <h3 className="text-xl font-semibold">Cart</h3>
                    <div className="flex gap-3 items-center">
                        <h4 className="font-semibold">Total Cost: <span id="price">{totalPrice}</span></h4>
                        <button onClick={sortedProducts} className="border border-purple-600 rounded-full py-2 px-4 font-medium text-sm text-purple-600 flex gap-2 items-center">Sort By Price <BsSortDown className="text-xl" />
                        </button>
                        {
                            totalPrice === 0 || newProducts.length === 0 ?
                                <button disabled className="hover:cursor-not-allowed border text-sm rounded-full py-2 px-4 font-medium text-gray-300 bg-purple-500" >Purchase</button> :
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="border text-sm rounded-full py-2 px-4 font-medium text-white bg-purple-500" >Purchase</button>
                        }
                    </div>
                </div>
                {
                    newProducts.map(product => <AddToCart handleRemoveProduct={handleRemoveProduct} key={product.product_id} product={product}></AddToCart>)
                }
            </div>
            <div className={`${activeBtn === 'wishlist' ? 'block' : 'hidden'}`}>
                <h3 className="text-xl py-3 font-semibold mx-32">Wishlist</h3>
                {
                    wishListProducts.map(product => <WishList handleRemoveWishListProduct={handleRemoveWishListProduct} key={product.product_id} product={product}></WishList>)
                }
            </div>
        </div>
    )
}

export default Dashboard;