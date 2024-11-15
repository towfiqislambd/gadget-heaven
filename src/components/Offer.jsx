const Offer = () => {
    return (
        <div>
            <div className="bg-purple-600 text-center text-white py-10 space-y-5 mb-5">
                <h1 className="text-2xl font-bold leading-tight">Special Offer</h1>
                <p className="w-3/5 mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="grid grid-cols-3 gap-10 container mx-auto px-5">
                <div className="border rounded-xl p-5 border-purple-600 space-y-2">
                    <h3 className="text-black font-semibold text-lg">Basic Offer</h3>
                    <p className="text-gray-600">Get Upto 20% discount for Mobile (Only Iphone)</p>
                    <button>Promo Code: <span className="border px-2 py-1 rounded-lg border-error text-xs bg-red-400 font-medium">A104FF</span></button>
                </div>
                <div className="border rounded-xl p-5 border-purple-600 space-y-2">
                    <h3 className="text-black font-semibold text-lg">Combo Offer</h3>
                    <p className="text-gray-600">Get Upto 50% discount for Apple Watches and Samsung</p>
                    <button>Promo Code: <span className="border px-2 py-1 rounded-lg border-error text-xs bg-red-400 font-medium">D604GG</span></button>
                </div>
                <div className="border rounded-xl p-5 border-purple-600 space-y-2">
                    <h3 className="text-black font-semibold text-lg">Premium Offer</h3>
                    <p className="text-gray-600">Get Upto 80% discount for Laptop and Mobile</p>
                    <button>Promo Code: <span className="border px-2 py-1 rounded-lg border-error text-xs bg-red-400 font-medium">B804GF</span></button>
                </div>
            </div>
        </div>
    )
}

export default Offer;