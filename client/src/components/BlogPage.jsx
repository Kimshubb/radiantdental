import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Brighter, Healthier Smile",
    excerpt: "Learn the top 10 dental care tips that will keep your teeth healthy and strong.",
    date: "March 10, 2025",
    image: "/images/dental-care-tips.jpg",
    content:
      "Brushing twice a day, flossing regularly, and visiting your dentist are essential for a healthy smile. But did you know that your diet also plays a huge role?",
  },
  {
    id: 2,
    title: "Is Teeth Whitening Safe? What You Need to Know",
    excerpt: "Many people want a whiter smile, but is it safe? Find out the best and safest teeth whitening methods.",
    date: "March 5, 2025",
    image: "/images/teeth-whitening.jpg",
    content:
      "Teeth whitening is generally safe when done correctly. However, overuse of bleaching products can weaken enamel...",
  },
  {
    id: 3,
    title: "Understanding Teeth Whitening Options",
    excerpt: "Explore various teeth whitening methods and discover which one might be best suited for your needs.",
    content: "Teeth whitening is one of the most popular cosmetic dental procedures. There are several options available, including in-office professional whitening, at-home whitening kits provided by your dentist, and over-the-counter products. Professional whitening offers the most dramatic results in the shortest time but costs more...",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Dental Care for Children: A Parent's Guide",
    excerpt: "Essential tips for helping your children develop good oral hygiene habits from an early age.",
    content: "Establishing good dental habits early in life is crucial for children's long-term oral health. Start cleaning your baby's gums even before teeth emerge. Once teeth appear, brush gently with a soft toothbrush and water. Introduce fluoride toothpaste in tiny amounts when your child learns to spit...",
    image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "The Latest Advancements in Dental Technology",
    excerpt: "Stay informed about cutting-edge technologies that are transforming the field of dentistry.",
    content: "Dental technology continues to evolve rapidly, offering patients more comfortable, efficient, and effective treatment options. Digital X-rays reduce radiation exposure while providing clearer images. CAD/CAM technology allows for same-day crowns and restorations. Laser dentistry enables more precise treatment with less pain and faster healing...",
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];


const Blog = () => {
  return (
    <section className="bg-gray-50 py-16 mt-8 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Dental Blog</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay informed with the latest dental care tips, treatments, and technology advancements from our expert team.
        </p>

        <div className="relative">
          {/* Swiper Carousel */}
          <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="w-full mb-10"
            >
              {blogPosts.map((post) => (
                <SwiperSlide key={post.id} className="flex justify-center py-4">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg transition-transform hover:scale-105 duration-300 min-h-[450px] flex flex-col">
                    {/* Consistent Image Height */}
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />

                    {/* Content Wrapper with Fixed Height */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-2">{post.title}</h2>
                        <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                        <p className="text-gray-700">{post.excerpt}</p>
                      </div>

                      {/* CTA Buttons (Always at the Bottom) */}
                      <div className="flex justify-between items-center mt-4">
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read More
                        </Link>

                        <Link
                          to="/#contact"
                          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition shadow-md"
                        >
                          Book an Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          {/* Custom Navigation Arrows */}
          <button className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-100 transition">
            <FaChevronLeft size={18} />
          </button>
          <button className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-100 transition">
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block border-2 border-blue-600 text-blue-600 font-medium py-2 px-6 rounded-md hover:bg-blue-50 transition"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;