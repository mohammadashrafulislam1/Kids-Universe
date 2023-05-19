import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import ToyList from "./ToyList";

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 justify-center gap-5 mt-10">
        {toys.map(toy => <ToyList key={toy._id} toy={toy}></ToyList>)}  
        </div>
    );
};

export default AllToys;