import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';

const ToyCard = ({toy}) => {
    const {name, seller, picture, price, quantity, _id, rating}= toy
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="p-5">
    <img src={picture} alt="Shoes" className="rounded-xl w-full h-[200px]" />
  </figure>
  <div className="flex gap-4 px-5 items-center justify-center">
  <div className="avatar">
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={seller?.picture} />
  </div>
</div>
<h4 className="text-1xl font-bold">SELLER NAME: {seller?.name}</h4>
  </div>

  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
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