// pages/Blog/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import "./Blog.css";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Digital Marketing Strategies for Township Businesses",
      excerpt: "Learn how to reach more customers online with simple, effective strategies.",
      author: "Nomsa Dlamini",
      date: "Mar 15, 2024",
      category: "Marketing",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Fintech in South African Townships",
      excerpt: "How mobile payments are transforming township economies.",
      author: "David Chen",
      date: "Mar 10, 2024",
      category: "Fintech",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Success Story: From Spaza Shop to Online Store",
      excerpt: "How one entrepreneur 10x their business with digital tools.",
      author: "Thabo Mokoena",
      date: "Mar 5, 2024",
      category: "Success Stories",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "All Topics", "Marketing", "Fintech", "Success Stories", 
    "Business Tips", "Digital Literacy", "Community"
  ];

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1 className="hero-title">Kasi360 <span className="gradient-text">Insights</span></h1>
          <p className="hero-subtitle">
            Expert advice, success stories, and tips for growing your township business.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-container">
          <div className="categories-list">
            {categories.map((category, index) => (
              <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="section-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-category">{post.category}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-meta">
                  <div className="meta-item">
                    <FiUser /> {post.author}
                  </div>
                  <div className="meta-item">
                    <FiCalendar /> {post.date}
                  </div>
                  <div className="meta-item">
                    {post.readTime}
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`} className="blog-link">
                  Read Article <FiArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest insights delivered to your inbox</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;