import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf, Award, Target, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health First",
      description: "We prioritize your health and well-being in every ingredient we choose and every salad we create."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to sustainable practices, from sourcing to packaging, for a healthier planet."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a community of health-conscious individuals who support each other's wellness journey."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Never compromising on quality - only the freshest, premium ingredients make it to your bowl."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Passionate about healthy living and sustainable food systems"
    },
    {
      name: "Chef Maria Lopez",
      role: "Head Chef",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "15+ years of culinary experience with a focus on nutritious cuisine"
    },
    {
      name: "Dr. Alex Chen",
      role: "Nutritionist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Clinical nutritionist ensuring every meal meets optimal health standards"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "1M+", label: "Salads Served" },
    { number: "100+", label: "Fresh Ingredients" },
    { number: "5", label: "Cities Served" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-sage/20 to-soft-green/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-deep-brown mb-6">
                Our Story
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                FRETTY was born from a simple belief: healthy eating should be accessible, 
                delicious, and convenient for everyone. Founded in 2022, we've been on a 
                mission to revolutionize how people think about salads and healthy eating.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small local operation has grown into a movement, 
                serving thousands of health-conscious individuals who refuse to compromise 
                on taste or nutrition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh ingredients"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-terracotta rounded-full opacity-30 animate-float"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-muted-peach rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To make healthy eating effortless and enjoyable by providing fresh, 
              nutritious, and delicious salads that fuel your body and satisfy your taste buds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-cream rounded-2xl hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-terracotta mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-terracotta to-muted-peach text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg opacity-90">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate people behind FRETTY's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cream group-hover:border-terracotta transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-terracotta opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-deep-brown mb-2">
                  {member.name}
                </h3>
                <p className="text-terracotta font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-sage/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of the healthy eating revolution. Together, we're creating a 
              world where nutritious food is accessible, delicious, and sustainable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-deep-brown mb-4">
                What's Next?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h4 className="font-medium text-deep-brown">Expansion</h4>
                    <p className="text-gray-600 text-sm">Growing to serve more cities and communities</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h4 className="font-medium text-deep-brown">Innovation</h4>
                    <p className="text-gray-600 text-sm">Developing new recipes and sustainable practices</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-terracotta mt-1" />
                  <div>
                    <h4 className="font-medium text-deep-brown">Community</h4>
                    <p className="text-gray-600 text-sm">Building stronger connections with our customers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Future of healthy eating"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;