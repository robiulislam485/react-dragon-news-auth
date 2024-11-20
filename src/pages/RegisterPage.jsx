import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const RegisterPage = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        createNewUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user);
                updateUserProfile({dispalyName: name , photoURL: photo})
                .then(()=>{
                navigate('/')
                })
                .catch(error=>{console.log(error)})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    };



    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                <h2 className="text-2xl font-semibold text-center p-6">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                    </div>
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

                        <div className="form-control">
                            <label className=" flex items-center gap-2 mt-4 cursor-pointer">

                                <input type="checkbox" defaultChecked className="checkbox" />
                                <span className="label-text">Remember me</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                    <p className="text-center font-semibold">
                        Already have An Account ? <Link to='/auth/login'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;