import googleIcon from '../assets/g-icon.png';
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Component/Providers/AuthProvider";
import { signInAnonymously } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Login = () => {
    const { singInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        singInUser(email, password)
            .then(result => {
                toast("Logged In Successfully");
                console.log(result.user)
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };

                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
            })
            .catch(error => {
                toast("Wrong Email or Password");
                console.error(error)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
            navigate(location?.state?location?.state : '/')
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Login now!</h1>
                                </div>
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
                                <button className="btn btn-neutral">Login</button>
                            </div>
                        </form>
                        <p>New ? Register here <Link to="/register"><button className="btn btn-link">Register</button></Link></p>
                        <p onClick={handleGoogleSignIn} className="btn btn-ghost"><img className='w-5' src={googleIcon}></img>Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;