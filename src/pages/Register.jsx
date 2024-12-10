import Lottie from 'lottie-react';
import registerData from '../../src/assets/register.json'
import { useContext } from 'react';
import AuthContex from '../context/AuthContext/AuthContext';

const Register = () => {

  const {createUser} = useContext(AuthContex);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(email, password);

        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log(error.message)
        })
    }


    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-96 lg:text-left">
            <Lottie animationData={registerData}></Lottie>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold">Register now</h1>
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
          </div>
        </div>
      </div>
    );
};

export default Register;