import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyCreateContext } from '../providers/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(MyCreateContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // SignIn User
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })

    }
    return (

        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-2xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className=' text-center mb-4'>
                New to this website? <Link to="/ragister"><span className='underline text-blue-600'>Ragister</span></Link>
            </p>
        </div>

    );
};

export default Login;