import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyCard from "../../pages/AllToys/ToyCard";

const SortsByCategory = () => {
    const [toys, setToys] = useState('');
    const [active, setActive] = useState('Teddy');
    useEffect(()=>{
        fetch('https://kids-universe-server-mohammadashrafulislam1.vercel.app/toys')
        .then(r => r.json())
        .then(data => setToys(data))
    })
    const results = Array.isArray(toys) ? toys.filter(toy => toy.category === active) : [];

    console.log(results)
    const handleClick = category=>{
     setActive(category)
    }
    return (
    <div>
 <div className="text-center">
 <h2 className="text-3xl my-10 font-bold">Sort By Category</h2></div>
  <div className="gap-4 mt-10 flex justify-center flex-wrap	">
  <button className="btn  glass text-black" onClick={()=>handleClick("Teddy")}>Teddy</button>
  <button className="btn  glass text-black" onClick={()=>handleClick("Cow")}>Cow</button>
  <button className="btn  glass text-black" onClick={()=>handleClick("Horse")}>Horse</button>
  <button className="btn  glass text-black" onClick={()=>handleClick("Monkey")}>Monkey</button>
  <button className="btn  glass text-black" onClick={()=>handleClick("Dinosaur")}>Dinosaur</button>
  <button className="btn  glass text-black" onClick={()=>handleClick("Dog")}>Dog</button>
  <button className="btn glass text-black" onClick={()=>handleClick("Cat")}>Cat</button>
  </div>
   
   <div className="grid lg:grid-cols-3 justify-center gap-5 mt-10">
    {
        results?.map(re => <ToyCard key={re._id} re={re}></ToyCard>)
    }
    
   </div>
    </div>
    );
};

export default SortsByCategory;