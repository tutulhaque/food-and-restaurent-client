import { useContext } from "react";
import { AuthContext } from "../../Component/Providers/AuthProvider";
import Banner from "../../Component/Header/Banner";
import Testimonial from "./Testimonial";
import { useLoaderData } from "react-router-dom";
import FoodsByCount from "../../Component/Food/FoodsByCount";
import Gallery from "./Gallery";
import { Helmet } from "react-helmet";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    const brandLoadedData = useLoaderData();
    console.log(brandLoadedData);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <FoodsByCount></FoodsByCount>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;