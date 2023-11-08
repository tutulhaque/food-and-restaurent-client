import { useContext, useState } from "react";
import { AuthContext } from "../../Component/Providers/AuthProvider";
import Banner from "../../Component/Header/Banner";
import Testimonial from "./Testimonial";
import { useLoaderData } from "react-router-dom";
import FoodsByCount from "../../Component/Food/FoodsByCount";
import Gallery from "./Gallery";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    const brandLoadedData = useLoaderData();
    // const [brands, setBrands] = useState(brandLoadedData);
    console.log(brandLoadedData);
    return (
        <div>
            <Banner></Banner>
            <FoodsByCount></FoodsByCount>
            <Gallery></Gallery>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;