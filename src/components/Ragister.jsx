import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyCreateContext } from '../providers/AuthProvider';

const Ragister = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(MyCreateContext)

    const handleRagister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password)

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (

        <div className="card bg-base-100 mx-auto w-full  max-w-sm shrink-0 shadow-2xl">
            <div className="">
                <h1 className="text-2xl text-center font-bold">Ragister now!</h1>
                <form onSubmit={handleRagister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Ragister</button>
                    </div>
                </form>
                <p className=' mb-4 text-center'>
                    Already have an account? <Link to="/login"><span className='underline text-blue-600'>Login</span></Link>
                </p>
            </div>
        </div>

    );
};

export default Ragister;