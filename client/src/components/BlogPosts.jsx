import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, ChevronRight } from "lucide-react";

// Reusing the blog posts data from existing component
import { blogPosts } from "./blog-data.js"; 

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === parseInt(id));
    setPost(currentPost);
    
    // Get related posts (excluding current post)
    const related = blogPosts
      .filter(post => post.id !== parseInt(id))
      .slice(0, 3); // Limit to 3 related posts
    setRelatedPosts(related);
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-center text-gray-600">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Blog</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Featured Image */}
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-80 object-cover"
              />
              
              {/* Post Content */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  {post.title}
                </h1>
                
                {/* Post Meta */}
                <div className="flex items-center text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>5 min read</span>
                  </div>
                </div>
                
                {/* Post Excerpt */}
                <p className="text-lg font-medium text-gray-700 mb-6">
                  {post.excerpt}
                </p>
                
                {/* Full Content */}
                <div className="prose max-w-none">
                  <p className="mb-4">{post.content}</p>
                  {/* Additional content would go here */}
                  <p className="mb-4">
                    Regular dental check-ups are essential for maintaining good oral health. 
                    During these visits, your dentist can detect early signs of problems such as 
                    tooth decay, gum disease, and oral cancer. Early detection often means 
                    simpler and less expensive treatment.
                  </p>
                  <h2 className="text-2xl font-semibold text-blue-800 my-4">
                    Why Regular Check-ups Matter
                  </h2>
                  <p className="mb-4">
                    Professional cleanings remove plaque and tartar that regular brushing and 
                    flossing can't reach. This helps prevent cavities and gum disease. Your dentist 
                    can also provide personalized advice on improving your oral hygiene routine.
                  </p>
                  <p className="mb-4">
                    Remember, oral health is connected to your overall health. Problems in your 
                    mouth can affect the rest of your body. For example, gum disease has been 
                    linked to heart disease, diabetes, and other health conditions.
                  </p>
                </div>
                
                {/* Social Share */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <span className="mr-3 text-gray-600">Share this article:</span>
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                        <Share2 size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            
            {/* CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Ready to improve your dental health?
              </h3>
              <p className="text-gray-700 mb-4">
                Schedule a consultation with our expert team to discuss your dental care needs.
              </p>
              <Link
                to="#contact"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default navigation
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition shadow-md inline-block"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-gray-200 pb-2">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex items-start border-b border-gray-100 pb-4 last:border-0">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-16 h-16 object-cover rounded flex-shrink-0 mr-4"
                    />
                    <div>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="font-medium text-blue-800 hover:text-blue-600 line-clamp-2"
                      >
                        {relatedPost.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                to="/blog"
                className="mt-4 flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View all articles
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b border-gray-200 pb-2">
                Categories
              </h3>
              <ul className="space-y-2">
                {['Dental Tips', 'Teeth Whitening', 'Oral Health', 'Children\'s Dentistry', 'Dental Technology'].map((category) => (
                  <li key={category}>
                    <Link 
                      to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100 last:border-0"
                    >
                      <span>{category}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;