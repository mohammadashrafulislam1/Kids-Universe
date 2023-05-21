import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const existToy = useLoaderData();
    console.log(existToy._id)
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const toyPhoto = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const sellerPicture = form.sellerPicture.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const updatedToy ={toyPhoto, toyName, sellerName, sellerEmail, category, price, quantity, rating, sellerPicture, details};
        fetch(`http://localhost:5000/toys/${existToy._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedToy)
        })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0 ){
            Swal.fire({
                icon: 'Success!',
                title: 'Wala',
                text: 'Successfully Updated'
              })
        }
    })
    }
    return (
        <div className="mx-auto text-center my-5">
    <h2 className="text-3xl font-bold">Update: {existToy.toyName}</h2>

    <form onSubmit={handleUpdate} className="my-10 border lg:w-1/2 p-5 mx-auto rounded-lg">
    <label>Toy Photo</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" defaultValue={existToy.toyPhoto} name="toyPhoto"/><br /><br />
    
    <label>Toy Name</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" defaultValue={existToy.toyName} name="toyName"/><br /><br />

    
    <label>Seller Name</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" name="sellerName" defaultValue={existToy.sellerName}/><br /><br />

    
    <label>Seller Email</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5"  name="sellerEmail" defaultValue={existToy.sellerEmail}/><br /><br />

    <label>Seller Photo</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5"   name="sellerPicture" defaultValue={existToy.sellerPicture}/><br /><br />

    <label>Category</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" name="category" defaultValue={existToy.category}/><br /><br />

    <label>Price</label> <br />
    <input type="number" placeholder="Price?" className="input input-bordered input-secondary w-full mb-5" defaultValue={existToy.price} name="price"/><br /><br />

    <label>Available Quantity</label> <br />
    <input type="number" placeholder="How many available?" className="input input-bordered input-secondary w-full mb-5" defaultValue={existToy.quantity} name="quantity"/><br /><br />

    <label>Rating</label> <br />
    <input type="number" placeholder="Rating?" className="input input-bordered input-secondary w-full mb-5" defaultValue={existToy.rating} name="rating"/><br /><br />
    
    <label>Details</label><br />
    <input type="textarea" placeholder="Details" className="input input-bordered input-secondary w-full mb-5" defaultValue={existToy.details} name="details"/><br /><br />
    <button className="btn w-full">Update {existToy.toyName}</button>
    </form>
    </div>
    );
};

export default Update;