import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Superfoods That Will Transform Your Health",
      excerpt: "Discover the power-packed ingredients that can revolutionize your nutrition and boost your energy levels naturally.",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Nutrition",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 2,
      title: "The Science Behind Meal Prep for Better Health",
      excerpt: "Learn how proper meal preparation can improve your nutrition, save time, and support your wellness goals.",
      author: "Chef Maria Lopez",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Lifestyle",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Plant-Based Proteins: Complete Guide",
      excerpt: "Everything you need to know about getting complete proteins from plant-based sources for optimal health.",
      author: "Nutritionist Alex Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Nutrition",
      image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Seasonal Eating: Spring Vegetables Guide",
      excerpt: "Explore the benefits of eating seasonally and discover which spring vegetables should be on your plate.",
      author: "Emily Green",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Seasonal",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Building Sustainable Eating Habits",
      excerpt: "Simple strategies to create lasting healthy eating habits that fit into your busy lifestyle.",
      author: "Dr. James Wilson",
      date: "March 5, 2024",
      readTime: "8 min read",
      category: "Lifestyle",
      image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "The Art of Salad Dressing: Healthy & Delicious",
      excerpt: "Master the art of creating flavorful, healthy dressings that will make your salads irresistible.",
      author: "Chef Isabella Rodriguez",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Recipes",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = ["All", "Nutrition", "Lifestyle", "Recipes", "Seasonal"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-sage/20 to-soft-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-deep-brown mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Health & Wellness Blog
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover expert insights, tips, and recipes to fuel your healthy lifestyle journey
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-terracotta text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-sage/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="bg-gradient-to-r from-terracotta to-muted-peach rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-8 lg:p-12 text-white">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Featured Post
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6 text-sm opacity-80">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    <motion.button
                      className="bg-white text-terracotta px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
                <div className="h-64 lg:h-full">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(selectedCategory === "All" ? 1 : 0).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-brown mb-3 group-hover:text-terracotta transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <motion.button
                        className="text-terracotta font-medium hover:text-deep-brown transition-colors duration-300 inline-flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-sage/20 to-soft-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              Stay Updated with Our Latest Posts
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest health tips, recipes, and wellness insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
              <motion.button
                className="bg-terracotta text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;