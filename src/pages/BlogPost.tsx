import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog data - in production, this would come from your database
  const blogPosts = {
    '1': {
      title: "10 Superfoods That Will Transform Your Health",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Nutrition",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Discover the power-packed ingredients that can revolutionize your nutrition and boost your energy levels naturally.",
      content: `
        <h2>The Power of Superfoods</h2>
        <p>In today's fast-paced world, maintaining optimal health can be challenging. However, incorporating superfoods into your daily diet can make a significant difference in your overall well-being. These nutrient-dense foods are packed with vitamins, minerals, antioxidants, and other beneficial compounds that support your body's natural functions.</p>
        
        <h3>1. Leafy Greens: The Foundation of Health</h3>
        <p>Spinach, kale, and arugula are nutritional powerhouses. Rich in iron, folate, and vitamins A, C, and K, these greens support everything from bone health to immune function. At FRETTY, we source our greens from local organic farms to ensure maximum freshness and nutritional value.</p>
        
        <h3>2. Avocados: Healthy Fats for Brain Power</h3>
        <p>Avocados are loaded with monounsaturated fats that support brain health and help your body absorb fat-soluble vitamins. They're also rich in fiber, potassium, and folate. Add them to any of our salads for a creamy, satisfying boost.</p>
        
        <h3>3. Quinoa: The Complete Protein</h3>
        <p>Unlike most plant-based foods, quinoa contains all nine essential amino acids, making it a complete protein. It's also high in fiber, magnesium, and iron. Our quinoa bowls are perfect for post-workout recovery.</p>
        
        <h3>4. Blueberries: Antioxidant Champions</h3>
        <p>These tiny berries pack a powerful antioxidant punch. They support brain health, may improve memory, and help fight inflammation. We love adding them to our seasonal salads for a burst of sweetness and nutrition.</p>
        
        <h3>5. Nuts and Seeds: Tiny Nutritional Giants</h3>
        <p>Almonds, walnuts, chia seeds, and hemp hearts provide healthy fats, protein, and essential minerals. They add satisfying crunch to our salads while delivering sustained energy.</p>
        
        <h2>Making Superfoods Part of Your Daily Routine</h2>
        <p>The key to benefiting from superfoods is consistency. At FRETTY, we've made it easy to incorporate these nutritional powerhouses into your daily routine. Our carefully crafted salads combine multiple superfoods in delicious, satisfying combinations.</p>
        
        <p>Remember, the best diet is one you can stick to long-term. Start by adding one or two superfoods to your meals each day, and gradually build from there. Your body will thank you for the extra nutrition!</p>
        
        <h3>Ready to Start Your Superfood Journey?</h3>
        <p>Visit our menu to explore our superfood-packed salads, or use our custom salad builder to create your own nutritional masterpiece. Every ingredient we use is selected for both taste and nutritional value.</p>
      `
    },
    '2': {
      title: "The Science Behind Meal Prep for Better Health",
      author: "Chef Maria Lopez",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Lifestyle",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Learn how proper meal preparation can improve your nutrition, save time, and support your wellness goals.",
      content: `
        <h2>The Art and Science of Meal Preparation</h2>
        <p>Meal preparation isn't just a trend—it's a scientifically-backed approach to better nutrition and health. Research shows that people who plan and prepare their meals in advance make healthier food choices, consume more nutrients, and maintain better weight management.</p>
        
        <h3>The Psychology of Meal Planning</h3>
        <p>When we're hungry and pressed for time, we often make impulsive food choices that don't align with our health goals. Meal prep removes this decision fatigue by having healthy options readily available. Studies show that having prepared meals reduces the likelihood of ordering takeout by up to 60%.</p>
        
        <h3>Nutritional Benefits of Fresh Preparation</h3>
        <p>At FRETTY, we understand that freshness matters. Our salads are prepared daily using ingredients that are sourced within 24 hours of preparation. This ensures maximum nutrient retention, especially for water-soluble vitamins like vitamin C and B-complex vitamins.</p>
        
        <h3>Time Management and Stress Reduction</h3>
        <p>Meal prep isn't just about nutrition—it's about creating a sustainable lifestyle. When your meals are planned and prepared, you eliminate the daily stress of deciding what to eat. This mental clarity can improve your overall well-being and productivity.</p>
        
        <h2>FRETTY's Approach to Fresh Meal Prep</h2>
        <p>We've revolutionized meal prep by combining the convenience of prepared meals with the freshness of made-to-order food. Our salads are assembled fresh when you order them, using pre-prepped ingredients that maintain their nutritional integrity.</p>
        
        <h3>Storage and Freshness Tips</h3>
        <p>To maintain the quality of your FRETTY salads:</p>
        <ul>
          <li>Keep dressings separate until ready to eat</li>
          <li>Store in the refrigerator at 40°F or below</li>
          <li>Consume within 24-48 hours for optimal freshness</li>
          <li>Add delicate ingredients like avocado just before eating</li>
        </ul>
        
        <p>Ready to experience the benefits of professional meal prep? Order your weekly FRETTY salads and taste the difference that fresh, scientifically-planned nutrition can make in your life.</p>
      `
    },
    // Add more blog posts as needed
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-deep-brown mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-terracotta hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-terracotta hover:text-deep-brown transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Article Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-brown mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 text-gray-600 hover:text-terracotta transition-colors duration-300">
                <Heart className="w-5 h-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-terracotta transition-colors duration-300">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-terracotta transition-colors duration-300">
                <BookOpen className="w-5 h-5" />
                <span>Save</span>
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 p-8 bg-gradient-to-r from-terracotta to-muted-peach text-white rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Healthy Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Put these insights into action with our fresh, nutritious salads
            </p>
            <Link
              to="/menu"
              className="bg-white text-terracotta px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-block"
            >
              Explore Our Menu
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;