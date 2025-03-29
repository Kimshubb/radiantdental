import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { blogPosts } from "./blog-data.js"; 

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const currentPost = blogPosts.find(post => post.id === parseInt(id));
    setPost(currentPost);

    if (currentPost) {
      const related = blogPosts
        .filter(post => post.id !== parseInt(id) && post.category === currentPost.category)
        .slice(0, 5); // Ensure at least 5 related articles
      setRelatedPosts(related.length < 5 ? blogPosts.slice(0, 5) : related);
    }
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
      <Helmet>
        <title>{post.title} | Radiant Dental Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, dental care, oral health, teeth whitening`} />
        <meta name="author" content="Radiant Dental" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://radiantdental.co.ke/blog/${post.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Blog</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  {post.title}
                </h1>
                
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

                <p className="text-lg font-medium text-gray-700 mb-6">
                  {post.excerpt}
                </p>
                
                <div className="prose max-w-none">
                  <p className="mb-4">{post.content}</p>
                </div>

                {/* CTA: Call to Action after the Article */}
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
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition shadow-md inline-block"
                  >
                    Book an Appointment
                  </Link>
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
          </div>

          {/* Sidebar: Related Posts */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
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
                      loading="lazy"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
