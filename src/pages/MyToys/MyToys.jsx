import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyList from "../MyList/MyList";

const MyToys = () => {
    const {user} = useContext(AuthContext);const [myToys, setMyToys] = useState();
    const [searchText, useSearchText] =useState();
    const handleMySearch =()=>{
      fetch(`http://localhost:5000/jobSearchByTitle/${searchText}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }

  
    useEffect(()=>{
        fetch(`http://localhost:5000/my/${user?.email}`)
        .then(r => r.json())
        .then(d => setMyToys(d))
    })
    return (
        <div>
            <>
     <div className="form-control w-96 my-10 mx-auto">
      <input onChange={(e) => useSearchText(e.target.value)} type="text" placeholder="Search" className="input input-bordered my-5" />
      <button className="btn " onClick={handleMySearch}>Search</button>
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
    myToys?.map(toy => 
      <MyList toy={toy} key={toy._id}></MyList>)
   }
   </tbody>
    
  </table>
</div>
     </>  
        </div>
    );
};

export default MyToys;