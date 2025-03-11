import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const BlogCarousel = () => {
  // Sample blog data - replace with your actual blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Regular Dental Check-ups",
      excerpt: "Discover why bi-annual dental visits are crucial for maintaining optimal oral health and preventing serious issues.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "March 5, 2025",
      author: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      title: "Tips for Proper Brushing Techniques",
      excerpt: "Learn the correct way to brush your teeth to ensure thorough cleaning and prevent gum disease.",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "February 20, 2025",
      author: "Dr. Michael Chen"
    },
    {
      id: 3,
      title: "Understanding Teeth Whitening Options",
      excerpt: "Explore various teeth whitening methods and discover which one might be best suited for your needs.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "January 15, 2025",
      author: "Dr. Lisa Patel"
    },
    {
      id: 4,
      title: "Dental Care for Children: A Parent's Guide",
      excerpt: "Essential tips for helping your children develop good oral hygiene habits from an early age.",
      image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "December 10, 2024",
      author: "Dr. James Wilson"
    }
  ];

  // State for carousel control
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of cards to display at once (responsive)
  const getCardsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // Desktop
      if (window.innerWidth >= 640) return 2; // Tablet
      return 1; // Mobile
    }
    return 3; // Default for SSR
  };

  const cardsToShow = getCardsToShow();

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
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Blog
          </p>
        </div>
        <Fade>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="blog-pattern"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#blog-pattern)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Latest </span>
            </span>{" "}
            Dental Health Insights
          </h2>
        </Fade>
        <Fade>
          <p className="text-base text-gray-700 md:text-lg">
            Stay informed with the latest dental health tips, treatments, and innovations through our expert articles.
          </p>
        </Fade>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button
            onClick={handlePrev}
            className="p-2 bg-white rounded-full shadow-md focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(blogPosts.length * 100) / cardsToShow}%`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="px-2"
                style={{ width: `${100 / blogPosts.length}%` }}
              >
                <Fade>
                  <div className="flex flex-col h-full overflow-hidden border rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <img
                        className="object-cover w-full h-48"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-600">
                          <span>{post.date}</span> • <span>{post.author}</span>
                        </p>
                        <a href={`/blog/${post.id}`} className="block mt-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </h3>
                          <p className="mt-3 text-base text-gray-500">
                            {post.excerpt}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6">
                        <a
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-800 hover:text-blue-500"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-md focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <a
          href="/blog"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View All Articles
        </a>
      </div>
    </div>
  );
};

export default BlogCarousel;
