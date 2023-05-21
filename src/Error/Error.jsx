import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-1/2 mx-auto relative">
        <img src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png" alt="" />
        <Link to='/'>
        <button className="btn absolute top-1/2 right-1/3">Back To Home</button></Link>
        </div>
    );
};

export default Error;