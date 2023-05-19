import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 justify-center gap-5 mt-10">
        {toys.map(toy => console.log(toy))}  
        </div>
    );
};

export default AllToys;