import { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AuthContext } from "../Component/Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const newUser = { name, photoURL,email}

        // Password Validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one capital letter.");
            return;
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("Password must contain at least one special character.");
            return;
        }

        createUser(email, password, name, photoURL)
        .then((result) => {
            toast.success("User successfully created");
            console.log(result);
            // Insert to database
            fetch('https://food-and-restaurent-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Insert to Database Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      navigate('/');
                }

            })
            // Insert to database
            navigate('/');
        })
        .catch((error) => {
            console.error(error);
            toast.error(error.message);
        });
};
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Register</title>
            </Helmet>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                            </div>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoURL" required placeholder="photoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Register</button>
                                </div>
                            </form>
                            <p>Already Have account?<Link to="/login"><button className="btn btn-link">Login</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;