import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyFood = () => {
    const [foodItems, setFoodItems] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const userEmail = user ? user.email : <p className="text-5xl">Food Empty</p>;
        if (userEmail) {
            fetch(`http://localhost:5000/my-food-email?userEmail=${userEmail}`)
                .then((response) => response.json())
                .then((data) => {
                    setFoodItems(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [user]);
    return (
        <div className="my-10">
            <Helmet>
                <title>My food</title>
            </Helmet>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
            <div className="mt-10 grid grid-cols-3 justify-between gap-6">

                {
                    foodItems.map(food => <>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={food._id}>
                            <figure><img src={food.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="flex gap-5">
                                    <h2 className="card-title font-bold">{food.name}</h2>
                                    <h2 className="card-title text-red-500 font-bold">Price ${food.price}</h2>
                                </div>
                                <div className="flex gap-5">
                                    <p><button className="btn btn-sm font-bold">{food.category}</button></p>
                                    <p className="text-md font-bold">QTY: {food.quantity}</p>
                                </div>
                                {/* <p>{food.description.slice(0, 100)}...</p> */}
                                <div className="card-actions justify-start my-4">
                                    <Link to={`/food/${food._id}`}><button className="btn btn-primary">Details</button></Link>
                                    <Link to={`/update-food/${food._id}`}><button className="btn btn-primary">Update</button></Link>
                                </div>
                            </div>

                        </div>
                    </>)
                }
                <div className="h-96">
                <p>{foodItems.length ===0 ? <p className="text-4xl mt-3 text-red-500">Currently You do not have any Food</p>: ''}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyFood;