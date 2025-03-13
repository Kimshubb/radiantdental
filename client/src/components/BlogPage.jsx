import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Link } from "react-router-dom";

// Import the blog posts from the separate file
import { blogPosts } from "./blog-data.js";

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
                      {/*
                      <Link
                        to="/#contact"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition shadow-md"
                      >
                        Book an Appointment
                      </Link>*/}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <button className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-100 transition">
            <ChevronLeft size={18} />
          </button>
          <button className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-blue-100 transition">
            <ChevronRight size={18} />
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