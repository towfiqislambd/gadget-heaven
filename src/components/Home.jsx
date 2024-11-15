import Banner from "./Banner";
import Header from "./Header";
import Products from "./Products";
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Home | Gadget Heaven';
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container mx-auto px-5">
                <Banner></Banner>
                <Products></Products>
            </div>
        </div>
    )
}

export default Home;