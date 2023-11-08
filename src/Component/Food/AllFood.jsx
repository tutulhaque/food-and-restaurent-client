import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFoods, setFilteredFoods] = useState([]);
    const {count} = useLoaderData();
    const numberOfPages = Math.ceil(count/itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`https://food-and-restaurent-server.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`)
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setFilteredFoods(data); // Initialize filteredFoods with all food items
            });
    }, [currentPage,itemsPerPage]);

    // useEffect(() => {
    //     fetch('https://food-and-restaurent-server.vercel.app/foods')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setFoods(data);
    //             setFilteredFoods(data); // Initialize filteredFoods with all food items
    //         });
    // }, []);

    // 
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value)
        console.log(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);

    }

    // Function to handle search and filter the food items
    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = foods.filter((food) =>
            food.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredFoods(filtered);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>All food</title>
            </Helmet>
            <div className="form-control my-10">
                <div className="input-group justify-center">
                    <input
                        type="text"
                        placeholder="Search food by name..."
                        className="input input-bordered"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-square" onClick={handleSearch}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6">
                {filteredFoods.map((food) => (
                    <div className="card card-compact w-96 bg-base-100 shadow-xl" key={food._id}>
                        <figure><img src={food.photo} alt="Food" /></figure>
                        <div className="card-body">
                            <div className="flex gap-6">
                                <h2 className="card-title font-bold">{food.name}</h2>
                                <h2 className="card-title text-red-500 font-bold">Price ${food.price}</h2>
                            </div>
                            <div className="flex gap-4">
                                <p><button className="btn btn-sm font-bold">{food.category}</button></p>
                                <p className="text-md font-bold">QTY: {food.quantity}</p>
                            </div>
                            <div className="card-actions justify-start my-4">
                                <Link to={`/food/${food._id}`}><button className="btn btn-neutral">Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {
                    pages.map(page => <button 
                    onClick={()=> setCurrentPage(page)} 
                    className={currentPage === page? 'selected':undefined } 
                    key={page}>{page+1}
                    </button>)
                }
                {/* <select name="" value={itemsPerPage} onChange={handleItemsPerPage} id="">
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select> */}

            </div>
        </div>
    );
};

export default AllFood;
