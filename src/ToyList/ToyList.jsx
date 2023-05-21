import { useState, useEffect } from "react";
import ListDetails from "../pages/AllToys/ListDetails";
const ToyList = () => {
  const [toys, setToys] =useState();
  useEffect(() =>{
   fetch('http://localhost:5000/toys')
   .then(r => r.json())
   .then(d => setToys(d))
  }, [])
  const [searchText, useSearchText] =useState();
  const handleSearch =()=>{
    fetch(`http://localhost:5000/jobSearchByTitle/${searchText}`)
    .then(res => res.json())
    .then(data => setToys(data))
}
    return (
     <>
     <div className="form-control w-96 my-10 mx-auto">
      <input onChange={(e) => useSearchText(e.target.value)} type="text" placeholder="Search" className="input input-bordered my-5" />
      <button className="btn " onClick={handleSearch}>Search</button>
    </div>

     <div className="overflow-x-auto w-full">
  <table className="table w-1/2  mx-auto">
    <thead>
      <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Seller</th>
      <th>Category</th>
      <th>Available Quantity</th>
      <th>Details</th>
      </tr>
    </thead>
    <tbody>
   {
    toys?.map(toy => 
      <ListDetails toy={toy} key={toy._id}></ListDetails>)
   }
   </tbody>
    
  </table>
</div>
     </>   
    );
};

export default ToyList;