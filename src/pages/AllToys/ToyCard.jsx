import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const ToyCard = ({re}) => {
  useEffect(()=>{
    Aos.init();
  }, [])
  console.log(re)
    const {toyName, sellerPicture, sellerName, sellerEmail, toyPhoto, price, quantity, _id, rating}= re;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
  <figure className="p-5">
    <img src={toyPhoto} alt="Shoes" className="rounded-xl w-full h-[200px]" />
  </figure>
  <div className="flex gap-4 px-5 items-center justify-center">
  <div className="avatar">
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={sellerPicture} />
  </div>
</div>
<h4 className="text-1xl font-bold">SELLER NAME: {sellerName}</h4>
  </div>

  <div className="card-body items-center text-center">
    <h2 className="card-title">{toyName}</h2>
    <p><b>PRICE :</b>{price}</p>
    <p><b>AVAILABLE PRODUCTS :</b>{quantity}</p>
    <div className="card-actions flex gap-2 items-center">
    <div className="flex gap-1 items-center">
    <p>Rating: {rating}</p>
    <Rating className="text-yellow-400" placeholderSymbol={<FaStar></FaStar>} fullSymbol={<FaStar></FaStar>} emptySymbol={<FaRegStar></FaRegStar>} placeholderRating={rating}></Rating>
    </div>
    <Link to={`toys/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyCard;