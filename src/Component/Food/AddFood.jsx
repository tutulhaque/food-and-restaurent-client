import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const AddFood = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const navigate = useNavigate();
    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const origin = form.origin.value;
        const photo = form.photo.value;
        const newFood = { name, category, quantity, price, description, origin, photo,userEmail: user.email,count:0}
        console.log(newFood);
        fetch('https://food-and-restaurent-server.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added To Cart Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      navigate('/');
                }

            })
    }

    return (
        <div className="my-10">
            <Helmet>
                <title>Add food</title>
            </Helmet>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Add Food</h1>
                <form onSubmit={handleAddFood}>
                    {/* Row-01 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Category</span>
                            </label>
                            <select name="category" className="select w-full">
                                <option disabled selected>Your favorite Food category</option>
                                <option value="Italian Cuisine">Italian Cuisine</option>
                                <option value="Mexican Cuisine">Mexican Cuisine</option>
                                <option value="Sushi">Sushi</option>
                                <option value="Indian Cuisine">Indian Cuisine</option>
                                <option value="Mediterranean Cuisine">Mediterranean Cuisine</option>
                                <option value="Seafood">Seafood</option>
                            </select>
                        </div>
                    </div>
                    {/* Row-02 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Price</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Row-03 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Origin</span>
                            </label>
                            <label className="input-group">
                                <input  required type="text" name="origin" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Row-03 */}
                    <div className="my-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Food Photo URL</span>
                            </label>
                            <label className="input-group">
                                < input type="text" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Add Food" className="btn btn-neutral" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddFood;