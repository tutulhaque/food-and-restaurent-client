import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/Providers/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const email = user ? user.email : <p className="text-5xl">Cart Empty</p>; // Get the user's email if available
        if (email) {
            // Fetch cart items for the logged-in user based on their email
            // Make a GET request to your server's API endpoint that fetches the user's cart items
            fetch(`https://food-and-restaurent-server.vercel.app/cart-by-email?email=${email}`)
                .then((response) => response.json())
                .then((data) => {
                    setCartItems(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-and-restaurent-server.vercel.app/add-to-cart/${_id}`,{
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log("deleted");
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cartItems.filter(item => item._id !== _id);
                            setCartItems(remaining);

                        }
                    })
            }
        })

    }

    return (
        <div className="max-w-7xl mx-auto my-10 p-20 bg-[#f7f7f7]">
            <h1 className="text-4xl font-extrabold py-10">My Cart</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartItems.map(item => 
                                <tr key={item?._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>{item?.name}</p>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.date}</td>
                            <td>
                                <button onClick={()=>handleDelete(item?._id)} className="btn btn-ghost btn-xs text-red-500">X</button>
                            </td>
                        </tr>
                                )
                        }
                        <p>{cartItems.length ===0 ? <p className="text-2xl mt-3">Your Cart is Empty</p>: ''}</p>
                        
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default MyCart;
