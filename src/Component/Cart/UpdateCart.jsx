const UpdateCart = () => {
    
    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Add Coffee</h1>
                <form onSubmit='{handleAddProduct}'>
                    {/* Row-01 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select name="brand" className="select w-full">
                                <option disabled selected>Pick your favorite Brand</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Nike">Nike</option>
                                <option value="Puma">Puma</option>
                                <option value="Recbok">Recbok</option>
                                <option value="Bata">Bata</option>
                                <option value="Fila">Fila</option>
                            </select>
                        </div>
                    </div>
                    {/* Row-02 */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" className="input input-bordered w-full" />
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
                                <input type="text" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Add Product" className="btn btn-outline" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateCart;