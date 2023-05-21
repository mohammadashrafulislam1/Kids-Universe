import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import SortsByCategory from "../SortsByCategory/SortsByCategory";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
        <SortsByCategory></SortsByCategory>
        <div className="my-10">
        <Gallery></Gallery>
        </div>
        <Testimonial></Testimonial>
        </div>
        <Contact></Contact>
        </div>
    );
};

export default Home;