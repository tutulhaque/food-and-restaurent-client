import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FoodsByCount = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    fetch("https://food-and-restaurent-server.vercel.app/foods")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => b.count - a.count);

        const topSixFoods = data.slice(0, 6);

        setTopFoods(topSixFoods);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-5xl font-bold text-center py-10">Our Top Food</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {topFoods.map((food) => (
          <div
            key={food._id}
            className="card card-compact w-96 mx-auto bg-base-100 shadow-xl"
          >
            <figure>
              <img className="" src={food.photo} alt={food.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.name}</h2>
              <div className="flex gap-3 text-red-400">
                <h2 className="card-title">Price ${food.price}</h2>
                <p><button className="btn btn-sm font-bold">{food.category}</button></p>
              </div>
              <div className="card-actions justify-start my-4">
                <Link to={`/food/${food._id}`}>
                  <button className="btn btn-neutral">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <Link to={'/all-food'}><button className="btn btn-neutral">See All</button></Link>
        </div>
    </div>
  );
};

export default FoodsByCount;
