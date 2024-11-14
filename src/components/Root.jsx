import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useState } from "react";
export const HandleContext = createContext(null);
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const [newProducts, setNewProducts] = useState([]);
    const [wishListProducts, setWishListProducts] = useState([]);
    const [price, setPrice] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const resetCart = () => {
        setNewProducts([]);
        setTotalPrice(0);
    }

    const notify = () => toast.warning('Product Already Added', {
        autoClose: 2000,
    })
    const notify1 = () => toast.success('Successfully Added To Cart', {
        autoClose: 2000,
    })
    const notify2 = () => toast.success('Successfully Added To Wishlist', {
        autoClose: 2000,
    })


    const handleRemoveProduct = (id, price) => {
        const newProductArray = newProducts.filter(product => product.product_id !== id);
        setNewProducts(newProductArray)
        const removePrice = Number(totalPrice - price).toFixed(2);
        setTotalPrice(removePrice)
    }
    const handleRemoveWishListProduct = id => {
        const newProductArr = wishListProducts.filter(product => product.product_id !== id);
        setWishListProducts(newProductArr)
    }



    const handleAddToCart = products => {
        if (newProducts.includes(products)) {
            return notify()
        }
        else {
            const myNewProducts = [...newProducts, products];
            const priceArr = [...price, products.price]
            setPrice(priceArr)
            setNewProducts(myNewProducts)
            const totalPrice = price.reduce((p, c) => p + c, products.price);
            setTotalPrice(totalPrice.toFixed(2))
            notify1()
        }
    }




    const handleWishList = product => {
        if (wishListProducts.includes(product)) {
            document.getElementById('heart').setAttribute('disabled', true)
            document.getElementById('heart').classList.add('bg-gray-200')
            return notify()
        }
        else {
            const newProducts = [...wishListProducts, product];
            setWishListProducts(newProducts)
            notify2()
        }
    }

    return (
        <div>
            <ToastContainer />
            <Navbar></Navbar>
            <div>
                <HandleContext.Provider value={{ resetCart, totalPrice, price, newProducts, wishListProducts, handleAddToCart, handleWishList, handleRemoveProduct, handleRemoveWishListProduct }}>
                    <Outlet></Outlet>
                </HandleContext.Provider>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root;