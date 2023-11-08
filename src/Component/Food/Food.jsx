import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Food = () => {
    const { user } = useContext(AuthContext)
    const singleFood = useLoaderData();
    const { _id,name, category, quantity, price, description, origin, photo,userEmail } = singleFood;
    const navigate = useNavigate();
    

    // const handleAddToCart = () => {
    //     const SingleFoodData = {
    //         cartId: singleFood._id,
    //         cartName: singleFood.name,
    //         cartCategory: singleFood.category,
    //         cartQuantity: singleFood.quantity,
    //         cartDescription: singleFood.description,
    //         cartPrice: singleFood.price,
    //         cartPhoto: singleFood.photo,
    //         cartOrigin: singleFood.origin,
    //         userEmail: user.email,
    //         quantity: 1,
    //     };

    //     // Make a POST request to server's
    //     fetch('https://food-and-restaurent-server.vercel.app/add-to-cart', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(SingleFoodData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 Swal.fire({
    //                     title: 'Success!',
    //                     text: 'Product Added To Cart Successfully.',
    //                     icon: 'success',
    //                     confirmButtonText: 'Close'
    //                   })
    //                   navigate('/my-cart');
    //             }

    //         })
    // };

    return (
        <div className="my-10">
            <Helmet>
                <title>food</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex-1">
                        <img src={photo} className="max-w-lg rounded-lg shadow-2xl" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <h1 className="text-lg font-bold py-1">${price}</h1>
                            <h1 className="text-lg font-bold py-1">Category: {category}</h1>
                            <h1 className="text-lg font-bold py-1">Origin: {origin}</h1>
                            <h1 className="text-lg font-bold py-1">Made By: {userEmail}</h1>
                            <p className="py-6">{description.slice(0,450)}...</p>
                            {/* <button onClick={handleAddToCart} className="btn btn-neutral">Add to Cart</button> */}
                            <Link to={`/food/checkout/${_id}`}><button className="btn btn-neutral">Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Food;