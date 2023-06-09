import { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const DetailsToy = ({}) => {
    const toyDetails = useLoaderData();
    
    const {toyName, sellerName, sellerEmail, sellerPicture, toyPhoto, category, price, quantity, _id, details, rating}= toyDetails;
    return (
    <>
    <div className="hero h-96" style={{ backgroundImage: `url(${toyPhoto? toyPhoto :''})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{toyName ? toyName : ''}</h1>
      <p className="mb-5">{details ? details : ''}</p>
      <Rating className="text-yellow-400" placeholderSymbol={<FaStar></FaStar>} fullSymbol={<FaStar></FaStar>} emptySymbol={<FaRegStar></FaRegStar>} placeholderRating={rating ? rating : ''} readonly></Rating>
      <p><b>Available Quantity: {quantity ? quantity : ''}</b></p>
    </div>
  </div>
     </div>
     <div className="flex justify-center items-center gap-5 mt-10 border p-20 mx-20 rounded-lg">
    <h2 className="text-3xl">Supplier:</h2>
     <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={sellerPicture ? sellerPicture : ''} />
  </div>
  </div>
        <p className="text-2xl"><b>Name: </b>{sellerName ? sellerName :''}</p>
        <div className="divider divider-horizontal">&</div>
        <p className="text-2xl"><b>Email: </b> {sellerEmail ? sellerEmail : ''}</p>
     </div>
    </>
    );
};

export default DetailsToy;