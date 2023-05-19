const Gallery = () => {
    return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
        <div className="text-center">
        <h2 className="text-3xl my-10 font-bold">Gallery</h2>
        </div>
                  <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                      <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1613339038444-ca6b1e8eb7b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1c2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGx1c2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
                      <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsdXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                      </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://media.istockphoto.com/id/1479497265/photo/birthday-party-for-cute-child.jpg?b=1&s=170667a&w=0&k=20&c=QMswg7aodkqPK1VrL9mk-1NpHMoMvdrXkBpBbUgoKYs=" />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1618500299034-abce7ed0e8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdCUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                      </div>
                      <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://media.istockphoto.com/id/1173277486/photo/toy-miniature-cow-on-a-isolated-white-background.jpg?b=1&s=170667a&w=0&k=20&c=uRzdxXxkI-nWSYIxk4cYRFRwfg3H1emdSpVZfgnk8Q4=" />
                      </div>
                    </div>
                  </div>
                </div>
             
    );
};

export default Gallery;