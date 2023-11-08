import { Helmet } from "react-helmet";
import { Navigate, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFood = () => {
    const singleProduct = useLoaderData();
    const { _id, name, category, quantity, price, description, origin, photo } = singleProduct;
    const navigate = useNavigate();
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const origin = form.origin.value;
        const photo = form.photo.value;
        const updatedProduct = { name, category, quantity, price, description, origin, photo }
        console.log(updatedProduct)
        fetch(`https://food-and-restaurent-server.vercel.app/food/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    navigate('/');
                }

            })

    }
    return (
        <div>
            <Helmet>
                <title>Update food</title>
            </Helmet>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Update Food</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* Row-01 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Category</span>
                            </label>
                            <select name="category" className="select w-full" defaultValue={category}>
                                <option disabled selected>Select Food Category</option>
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
                                <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" />
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
                                <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Food Origin</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="origin" defaultValue={origin} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Row-03 */}
                    <div className="my-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Update Food" className="btn btn-neutral" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateFood;