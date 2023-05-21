import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = ({toy}) => {
    const {toyName, sellerName, sellerEmail, toyPhoto, category, price, quantity, _id, rating}= toy;
    
    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`http://localhost:5000/toys/${id}`,{
              method: 'DELETE'
            })
            .then(r => r.json())
            .then(d => {
                console.log(d)
                if(d.deletedCount > 0){
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
            })
            }
          })}
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toyPhoto} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{toyName}</div>
              <div className="text-sm opacity-50">Price: {price}</div>
            </div>
        </td>
        <td>
         {sellerName}
        </td>
        <td>{category}</td>
        <td className="text-center">{quantity}</td>
        <th>
         <button className="btn mr-3" onClick={()=>handleDelete(_id)}>Delete</button>
         <Link to={`/update/${_id}`}><button className="btn">Update</button></Link>
        </th>
      </tr>
    );
};

export default MyList;