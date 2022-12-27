import React from 'react';

const Login = () => {
    return (
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
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;