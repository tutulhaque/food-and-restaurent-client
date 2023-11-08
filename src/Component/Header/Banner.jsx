import HomeBanner from '../../assets/banner-home.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Banner = () => {

    // Define the style object for the background image
    const backgroundImageStyle = {
        backgroundImage: `url(${HomeBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in',
            offset: 200, // Animation starts as soon as the element is in the viewport
        });
    }, []);

    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${HomeBanner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To PH Restaurant</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to={'/all-food'}><button className="btn btn-neutral">All Food</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;