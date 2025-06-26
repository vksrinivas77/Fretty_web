import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Clock, Heart, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description: "Locally sourced, organic vegetables picked daily for maximum nutrition and flavor."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick & Convenient",
      description: "Ready in minutes, perfect for your busy lifestyle without compromising on health."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nutritionist Approved",
      description: "Every salad is crafted with balanced nutrition to fuel your body and mind."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "FRETTY has completely transformed my lunch routine. Fresh, delicious, and so convenient!",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "The customization options are amazing. I can create exactly what I'm craving every time.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Finally, healthy eating that doesn't feel like a chore. Love the variety and freshness!",
      rating: 5
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-sage/20 to-soft-green/20 pt-20">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-brown mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Fresh Salads for
              <span className="text-terracotta block mt-2">Modern Living</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nourish your body with our carefully crafted salads made from the freshest ingredients. 
              Perfect for health-conscious individuals who don't want to compromise on taste.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/menu">
                <motion.button
                  className="bg-terracotta text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    Order Your First Salad
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.button>
              </Link>
              
              <Link to="/menu">
                <motion.button
                  className="border-2 border-terracotta text-terracotta px-8 py-4 rounded-full font-semibold text-lg hover:bg-terracotta hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Customize Your Bowl
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh colorful salad bowl"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-terracotta text-white px-6 py-3 rounded-full font-semibold">
                Made Fresh Daily
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-soft-green rounded-full opacity-30 animate-float"></div>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-muted-peach rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              Why Choose FRETTY?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the freshest, most nutritious salads that fit perfectly into your healthy lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-cream p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-terracotta mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sage/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied customers who've made FRETTY part of their daily routine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold text-deep-brown">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-terracotta to-muted-peach text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Healthy Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Order your first FRETTY salad today and taste the difference fresh makes
            </p>
            <Link to="/menu">
              <motion.button
                className="bg-white text-terracotta px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Feeling Better Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;