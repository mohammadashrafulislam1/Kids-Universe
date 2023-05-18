const Banner = () => {
    return (
        <div className="carousel h-[600px] rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/xXJ2Jrt/Untitled-design-9.png" className="w-full" />
    <div className="absolute flex items-center lg:gap-52 lg:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
    <div className="text-white">
        <h1 className="text-6xl font-bold">Best Toy Collection <br/> In The World.</h1>
        <p className="text-2xl">This is kids universe to buy toys which is related to animals. <br/> Thank you for visiting us. <br/> </p>
    </div>
    </div>
    <div className="absolute flex gap-4 transform -translate-y-1/2 right-10 bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Q9K8BMn/Untitled-design-8.png" className="w-full " />
    <div className="absolute flex items-center lg:gap-52 lg:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
    <div className="text-white">
        <h1 className="text-6xl font-bold">Best Toy Collection <br/> In The World.</h1>
        <p className="text-2xl">This is kids universe to buy toys which is related to animals. <br/> Thank you for visiting us.</p>
    </div>
    </div>
    <div className="absolute flex gap-4 transform -translate-y-1/2 right-10 bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
  </div></div>
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LhxQq23/Untitled-design-7.png" className="w-full " /><div className="absolute flex items-center lg:gap-52 lg:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
    <div className="text-white">
        <h1 className="text-6xl font-bold">Best Toy Collection <br/> In The World.</h1>
        <p className="text-2xl">This is kids universe to buy toys which is related to animals. <br/> Thank you for visiting us.</p>
    </div>
    </div>
    <div className="absolute flex gap-4 transform -translate-y-1/2 right-10 bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/C1FzcBj/Untitled-design-6.png" className="w-full" /><div className="absolute flex items-center lg:gap-52 lg:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
    <div className="text-white">
        <h1 className="text-6xl font-bold">Best Toy Collection <br/> In The World.</h1>
        <p className="text-2xl">This is kids universe to buy toys which is related to animals. <br/> Thank you for visiting us.</p>
    </div>
    </div>
    <div className="absolute flex gap-4 transform -translate-y-1/2 right-10 bottom-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;