import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [show, setShow] = useState('');
    const {signIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .catch(error =>{
          console.log(error)
        })
    }
    return (
        <form className="hero min-h-screen bg-base-200" onSubmit={handleLogin}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" name="email"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered" name="password"/>
          <label className="label" >
          <p style={{cursor: 'pointer'}} onClick={() => setShow(!show)}>{show ? <span>Hide Password</span> : <span>Show Password</span>}</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link to='/register'>Already a member? register</Link>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</form>
    );
};

export default Login;