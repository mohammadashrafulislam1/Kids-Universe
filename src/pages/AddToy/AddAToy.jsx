import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddAToy = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const toyPhoto = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const details = form.details.value;
        console.log(toyPhoto, toyName, sellerName, sellerEmail, category, price, quantity, rating, details)
    }
    return (
        <div className="mx-auto text-center my-5">
    <h2 className="text-3xl font-bold">Add a toy</h2>

    <form onSubmit={handleSubmit} className="my-10 border lg:w-1/2 p-5 mx-auto rounded-lg">
    <label>Toy Photo</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" name="toyPhoto"/><br /><br />
    
    <label>Toy Name</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" name="toyName"/><br /><br />

    
    <label>Seller Name</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" defaultValue={user?.displayName} name="sellerName" /><br /><br />

    
    <label>Seller Email</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5"  defaultValue={user?.email} name="sellerEmail"/><br /><br />

    <label>Category</label> <br />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full mb-5" name="category"/><br /><br />

    <label>Price</label> <br />
    <input type="number" placeholder="Price?" className="input input-bordered input-secondary w-full mb-5" name="price"/><br /><br />

    <label>Available Quantity</label> <br />
    <input type="number" placeholder="How many available?" className="input input-bordered input-secondary w-full mb-5" name="quantity"/><br /><br />

    <label>Rating</label> <br />
    <input type="number" placeholder="Rating?" className="input input-bordered input-secondary w-full mb-5" name="rating"/><br /><br />
    
    <label>Details</label><br />
    <input type="textarea" placeholder="Details" className="input input-bordered input-secondary w-full mb-5" name="details"/><br /><br />
    <button className="btn w-full">Add Toy</button>
    </form>
    </div>
    );
};

export default AddAToy;