import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [show, setShow] = useState('');
    const handleRegistration = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo)
    }
    return (
        <form className="hero min-h-screen bg-base-200" onSubmit={handleRegistration}>
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" name="name"/>
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" className="input input-bordered" name="photo"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <Link to='/login'>Already a member? Login</Link>
      </div>
    </div>
</form>
    );
};

export default Registration;