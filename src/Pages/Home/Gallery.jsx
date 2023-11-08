import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      offset: 200,
    });
  }, []);
  return (
    <div className='bg-[#f7f7f7] py-5'>
      <div className='max-w-7xl mx-auto'>
      <div className="my-10">
        <h1 className="text-5xl font-bold text-center">Our Food Gallery</h1>
        <div className="my-6 md:my-10 lg:my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div data-aos="fade-in" data-aos-delay="100" className="w-full p-2">
              <img
                alt="food gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/tp176XK/product-16.jpg"
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="200" className="w-full p-2">
              <img
                alt="food gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/hLL0McC/product-21.jpg"
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="300" className="w-full p-2">
              <img
                alt="food gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/8NbP3tW/product-20.jpg"
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="300" className="w-full p-2">
              <img
                alt="food gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/Mp8t9Jm/product-19.jpg"
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="200" className="w-full p-2">
              <img
                alt="food gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/x1nChd1/product-18.jpg"
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="100" className="w-full p-2">
              <img
                alt="food gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/RPzb186/product-17.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Gallery;