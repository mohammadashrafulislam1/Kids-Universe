import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListDetails = ({toy}) => {
    const {_id, picture, name, seller, price, category, quantity} = toy;
    
    // useEffect(()=>{
        
    // },[])
    
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Price: {price}</div>
            </div>
        </td>
        <td>
         {seller.name}
        </td>
        <td>{category}</td>
        <td className="text-center">{quantity}</td>
        <th>
         <Link to={`/toys/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>
    );
};

export default ListDetails;