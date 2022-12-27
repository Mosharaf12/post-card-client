import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle, IconName } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {googleSign, signIn}= useContext(AuthContext)
    const [error, setError] =useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'



    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            toast.success('Your account has been logged in')
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
        })
    }
    const handleGoogle=()=>{
        googleSign()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err=> console.err(err))
    }
    return (
     <form onSubmit={handleLogin}>
           <div className="hero bg-white shadow-xl py-24 my-5 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <div className="text-center lg:text-left">
      
      <img className='rounded-lg' src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" srcset="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Login Now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold">Login</button>
        </div>
        { setError && <p className='text-error'>{error}</p> }
        <div className="divider">OR</div>
        <div className="form-control">
          <button onClick={handleGoogle} className="btn btn-info text-white font-bold "> <FaGoogle className='mr-5 text-xl'></FaGoogle>Login with Google</button>
        </div>
        <div>
            <h3>don't have an account !<Link to='/register' className='text-sky-500 underline'> Please Registration</Link> </h3>
        </div>
      </div>
    </div>
  </div>
</div>
     </form>
    );
};

export default Login;