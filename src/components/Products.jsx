import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
            })

    }, [])

    const handleAllCategory = (status) => {
        setFilteredProducts(products);
        setActiveCategory(status)
    }
    const handlePhoneCategory = (status) => {
        const phones = products.filter(product => product.category === 'phone');
        setFilteredProducts(phones);
        setActiveCategory(status)
    }
    const handleLaptopCategory = (status) => {
        const laptops = products.filter(product => product.category === 'laptop');
        setFilteredProducts(laptops);
        setActiveCategory(status)
    }
    const handleWatchCategory = (status) => {
        const watches = products.filter(product => product.category === 'watch');
        setFilteredProducts(watches);
        setActiveCategory(status)
    }
    const handleNoCategory = (status) => {
        setFilteredProducts([]);
        setActiveCategory(status)
    }

    return (
        <div className="mb-20 -mt-16">
            <h2 className="text-center font-semibold text-4xl pb-10 text-gray-800">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-5 gap-4 xl:gap-7 items-start">
                <div className="border rounded-lg flex flex-col gap-5 px-5 py-7">
                    <button onClick={() => handleAllCategory('all')} className={`hover:border-purple-600 px-4 py-3 border rounded-full text-sm font-medium border-purple-200 shadow ${activeCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-slate-200'}`}>All Products</button>
                    <button onClick={() => handlePhoneCategory('phone')} className={`hover:border-purple-600 px-4 py-3 border rounded-full text-sm font-medium border-purple-200 shadow ${activeCategory === 'phone' ? 'bg-purple-600 text-white' : 'bg-slate-200'}`}>Phones</button>
                    <button onClick={() => handleWatchCategory('watch')} className={`hover:border-purple-600 px-3 py-3 border rounded-full text-sm font-medium border-purple-200 shadow ${activeCategory === 'watch' ? 'bg-purple-600 text-white' : 'bg-slate-200'}`}>Smart Watches</button>
                    <button onClick={() => handleLaptopCategory('laptop')} className={`hover:border-purple-600 px-4 py-3 border rounded-full text-sm font-medium border-purple-200 shadow ${activeCategory === 'laptop' ? 'bg-purple-600 text-white' : 'bg-slate-200'}`}>Laptops</button>
                    <button onClick={() => handleNoCategory('no')} className={`hover:border-purple-600 px-4 py-3 border rounded-full text-sm font-medium border-purple-200 shadow ${activeCategory === 'no' ? 'bg-purple-600 text-white' : 'bg-slate-200'}`}>Mac Book</button>
                </div>
                <div className="col-span-4 grid grid-cols-3 gap-6">
                    {
                        filteredProducts.length === 0 ? <h3 className="text-4xl font-semibold text-red-500">No Found Data!!!</h3> :
                            filteredProducts.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;