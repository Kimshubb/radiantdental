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
        .slice(0, 5);
      setRelatedPosts(related.length < 5 ? blogPosts.slice(0, 5) : related);
    }
  }, [id]);

  // Function to format the content dynamically
  const renderContent = (content) => {
    if (!content) return null;

    // Check if the content contains numbered lists
    if (/\d+\./.test(content)) {
      return (
        <ul className="list-disc list-inside space-y-2">
          {content
            .split(/\d+\./) // Split by numbered list items (e.g., "1. Tip one 2. Tip two")
            .filter(item => item.trim()) // Remove empty items
            .map((item, index) => (
              <li key={index} className="mb-2">{item.trim()}</li>
            ))}
        </ul>
      );
    }

    // Otherwise, split into paragraphs
    return content.split(". ").map((sentence, index) => (
      <p key={index} className="mb-4">
        {sentence}.
      </p>
    ));
  };

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
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://radiantdental.co.ke/blog/${post.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />

        {/* Structured Data with JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "author": {
              "@type": "Organization",
              "name": "Radiant Dental"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Radiant Dental",
              "logo": {
                "@type": "ImageObject",
                "url": "https://radiantdental.co.ke/logo.png"
              }
            },
            "datePublished": post.date,
            "mainEntityOfPage": `https://radiantdental.co.ke/blog/${post.id}`
          })}
        </script>
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

                {/* ✅ Full Content with Additional Section */}
                <div className="prose max-w-none">
                  {renderContent(post.content)}

                  {/* 📢 Why Regular Check-ups Matter Section */}
                  <h2 className="text-2xl font-semibold text-blue-800 my-4">
                    Why Regular Check-ups Matter
                  </h2>
                  <p className="mb-4">
                    Regular dental check-ups are essential for maintaining good oral health. 
                    During these visits, your dentist can detect early signs of problems such as 
                    tooth decay, gum disease, and oral cancer. Early detection often means 
                    simpler and less expensive treatment.
                  </p>
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

                      {/* WhatsApp */}
                      <a 
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0a12 12 0 0 0-12 12c0 2.13.55 4.2 1.6 6.02L0 24l6.32-1.64A12 12 0 1 0 12 0zm.12 21.53A9.47 9.47 0 0 1 2.53 12 9.47 9.47 0 1 1 21.53 12a9.47 9.47 0 0 1-9.41 9.53zM16.1 14.38c-.24-.12-1.42-.7-1.63-.78-.22-.07-.38-.12-.54.12s-.62.77-.76.93c-.14.16-.28.18-.52.06a7.57 7.57 0 0 1-3.63-3.15c-.27-.47.27-.44.76-1.47.09-.2.05-.36-.02-.5-.06-.12-.54-1.31-.74-1.8-.2-.48-.4-.42-.54-.42h-.47c-.17 0-.43.06-.65.3-.22.25-.86.83-.86 2.03 0 1.2.88 2.37 1 2.53.12.16 1.72 2.63 4.17 3.62 1.47.61 1.87.66 2.55.56.41-.06 1.42-.58 1.62-1.14.2-.55.2-1.03.15-1.14-.05-.12-.2-.18-.44-.3z"/>
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24H12.9v-9.3H9.72v-3.6H12.9V8.1c0-3.06 1.8-4.74 4.56-4.74 1.32 0 2.7.24 2.7.24v3h-1.5c-1.5 0-1.98.9-1.98 1.8V11h3.36l-.6 3.6H16.7V24h5.98c.72 0 1.32-.6 1.32-1.32V1.32C24 .6 23.4 0 22.68 0z"/>
                        </svg>
                      </a>

                      {/* Twitter */}
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.58.59-2.44.7a4.18 4.18 0 0 0 1.82-2.3c-.8.48-1.69.82-2.63 1a4.17 4.17 0 0 0-7.1 3.8A11.85 11.85 0 0 1 2 4.64a4.17 4.17 0 0 0 1.29 5.56A4.1 4.1 0 0 1 1.7 9v.05a4.16 4.16 0 0 0 3.35 4.07c-.5.13-1.02.16-1.56.06a4.17 4.17 0 0 0 3.9 2.9A8.37 8.37 0 0 1 2 18.39a11.77 11.77 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69v-.53A8.3 8.3 0 0 0 24 5.06c-.9.4-1.86.67-2.86.79a4.16 4.16 0 0 0 1.8-2.3z"/>
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.46H3.55V9h3.57v11.46zM5.34 7.52a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.46 20.46h-3.57v-5.6c0-1.33-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3.57V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.4 4.3 5.52v6.23z"/>
                        </svg>
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
