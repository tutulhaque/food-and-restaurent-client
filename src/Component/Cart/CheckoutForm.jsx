import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const CheckoutForm = () => {
    const { user } = useContext(AuthContext);
    const singleFood = useLoaderData();
    const { name, price, quantity: availableQuantity, userEmail } = singleFood;
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity < 1) {
            // quantity less than 1
            setQuantity(1);
        } else if (newQuantity > availableQuantity) {
            // quantity greater than availableQuantity
            setQuantity(availableQuantity);
            Swal.fire({
                title: "Error",
                text: "The requested quantity is not available.",
                icon: "error",
                confirmButtonText: "Close",
            });
        } else {
            const newPrice = newQuantity * price;
            setQuantity(newQuantity);
            setTotalPrice(newPrice); 
        }
    };

    const handleCheckout = (event) => {
        event.preventDefault();
        if (user.email === userEmail) {
            // purchasing own added food items restriction
            Swal.fire({
                title: "Error",
                text: "You can't purchase your own added food items.",
                icon: "error",
                confirmButtonText: "Close",
            });
        } else if (quantity > availableQuantity) {
            // purchasing more than availableQuantity restriction
            Swal.fire({
                title: "Error",
                text: "The requested quantity is not available.",
                icon: "error",
                confirmButtonText: "Close",
            });
        } else {
            const form = event.target;
            const name = form.name.value;
            const buyerName = form.buyerName.value;
            const email = form.email.value;
            const date = form.date.value;
            const photo = singleFood.photo;
            const newFood = { name, buyerName, email, quantity, price: totalPrice, photo, date };

            fetch("http://localhost:5000/add-to-cart", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newFood),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Food Added To Cart Successfully.",
                            icon: "success",
                            confirmButtonText: "Close",
                        });
                        navigate('/my-cart');
                    }
                });
        }
    };

    return (
        <div className="my-10">
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Checkout</h1>
                <form onSubmit={handleCheckout}>
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    required
                                    type="text"
                                    defaultValue={name}
                                    name="name"
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    required
                                    type="text"
                                    defaultValue={user?.displayName}
                                    name="buyerName"
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input
                                    required
                                    type="number"
                                    value={quantity}
                                    name="quantity"
                                    className="input input-bordered w-full"
                                    min={1}
                                    onChange={handleQuantityChange}
                                />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    required
                                    type="text"
                                    value={totalPrice}
                                    name="price"
                                    className="input input-bordered w-full"
                                    readOnly
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <label className="input-group">
                                <input
                                    required
                                    type="email"
                                    defaultValue={user.email}
                                    name="email"
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Buying Date</span>
                            </label>
                            <label className="input-group">
                                <input
                                    required
                                    type="date"
                                    name="date"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Confirm Order" className="btn btn-neutral" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
