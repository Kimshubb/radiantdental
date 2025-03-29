import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { blogPosts } from "./blog-data.js"; 

const BlogCarousel = () => {
  // State for carousel control
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update cards to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Desktop
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(1); // Mobile
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : blogPosts.length - cardsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < blogPosts.length - cardsToShow ? prevIndex + 1 : 0
    );
  };

  return (
    <section id="blog-preview" className="bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": blogPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "image": `https://radiantdental.co.ke.com${post.image}`,
                "author": {
                  "@type": "Person",
                  "name": "Admin"
                },
                "datePublished": post.date,
                "url": `https://radiantdental.co.ke/blog/${post.slug}`
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <Fade>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest <span className="text-blue-600">Dental Health Insights</span>
            </h2>
          </Fade>
          <Fade>
            <p className="text-base text-gray-700 md:text-lg">
              Stay informed with the latest dental health tips, treatments, and innovations through our expert articles.
            </p>
          </Fade>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md focus:outline-none"
            aria-label="Previous articles"
          >
            ❮
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                width: `${(blogPosts.length * 100) / cardsToShow}%`,
              }}
            >
              {blogPosts.map((post) => (
                <article key={post.id} className="px-2" style={{ width: `${100 / blogPosts.length}%` }}>
                  <Fade>
                    <div className="flex flex-col h-full overflow-hidden border rounded-lg shadow-sm">
                      <img className="object-cover w-full h-48" src={post.image} alt={post.title} />
                      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                        <p className="text-sm text-blue-600">{post.date}</p>
                        <Link to={`/blog/${post.slug}`} className="block mt-2">
                          <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                          <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                        </Link>
                        <div className="mt-6">
                          <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">Read more</Link>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </article>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md focus:outline-none"
            aria-label="Next articles"
          >
            ❯
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link to="/blog" className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
