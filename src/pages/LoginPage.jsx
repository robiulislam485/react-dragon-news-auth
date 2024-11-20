import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const LoginPage = () => {
    const { logInUser, setUser } = useContext(AuthContext)
    const [error, setError] = useState([])
    const location = useLocation()
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                setError(...error ,err.code)
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center p-6">Login to your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error && <p className="text-sm text-red-600">{error}</p> 
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <p className="text-center font-semibold">
                        Dont’t Have An Account ? <Link to='/auth/register'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;