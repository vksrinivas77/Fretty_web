import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "Orders & Delivery",
      questions: [
        {
          question: "How do I place an order?",
          answer: "You can place an order through our website by selecting your favorite salads or building a custom bowl. Simply add items to your cart and proceed to checkout. We also offer a mobile app for even easier ordering."
        },
        {
          question: "What are your delivery hours?",
          answer: "We deliver Monday through Friday from 7 AM to 8 PM, and weekends from 8 AM to 6 PM. Same-day delivery is available for orders placed before 2 PM."
        },
        {
          question: "What's your delivery area?",
          answer: "We currently deliver within a 15-mile radius of our kitchen locations. Enter your zip code during checkout to confirm delivery availability in your area."
        },
        {
          question: "How much does delivery cost?",
          answer: "Delivery is free for orders over $25. For orders under $25, we charge a $3.99 delivery fee. Premium delivery (within 1 hour) is available for an additional $4.99."
        }
      ]
    },
    {
      category: "Menu & Ingredients",
      questions: [
        {
          question: "Are your ingredients organic?",
          answer: "We source organic ingredients whenever possible and work with local farmers who follow sustainable practices. All our greens are certified organic, and we clearly mark organic ingredients on our menu."
        },
        {
          question: "Do you offer vegan options?",
          answer: "Yes! We have many vegan salads and all our dressings can be made vegan upon request. Look for the plant-based icon on our menu, or build your own vegan bowl with our extensive selection of vegetables, legumes, and nuts."
        },
        {
          question: "Can I customize my salad?",
          answer: "Absolutely! Our salad builder allows you to create the perfect bowl with your choice of base, proteins, vegetables, toppings, and dressings. You can also modify any of our signature salads to suit your preferences."
        },
        {
          question: "Do you provide nutritional information?",
          answer: "Yes, we provide detailed nutritional information for all our salads, including calories, protein, carbs, fat, fiber, and sodium content. This information is available on our website and app."
        }
      ]
    },
    {
      category: "Allergies & Dietary Restrictions",
      questions: [
        {
          question: "How do you handle food allergies?",
          answer: "We take allergies very seriously. All major allergens are clearly marked on our menu. Please inform us of any allergies when ordering, and we'll take extra precautions during preparation. However, we cannot guarantee a completely allergen-free environment."
        },
        {
          question: "Are your salads gluten-free?",
          answer: "Most of our salads are naturally gluten-free, but some contain ingredients like croutons or certain dressings that may contain gluten. We mark all gluten-free options on our menu and can customize salads to be gluten-free."
        },
        {
          question: "Do you offer keto-friendly options?",
          answer: "Yes! We have several keto-friendly salads that are high in healthy fats and low in carbs. Look for the keto icon on our menu, or use our nutritional filters to find options that fit your macros."
        }
      ]
    },
    {
      category: "Freshness & Storage",
      questions: [
        {
          question: "How fresh are your ingredients?",
          answer: "We receive fresh deliveries daily from our partner farms and prep all ingredients the same day. Our salads are made to order to ensure maximum freshness and quality."
        },
        {
          question: "How long do the salads stay fresh?",
          answer: "Our salads are best consumed within 24 hours of delivery. We package them in specially designed containers that help maintain freshness. Keep them refrigerated and consume within the recommended time frame."
        },
        {
          question: "Can I store leftover salad?",
          answer: "Yes, you can store leftover salad in the refrigerator for up to 24 hours. We recommend keeping the dressing separate until you're ready to eat to maintain the best texture and flavor."
        }
      ]
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. We also offer corporate accounts for businesses that want to provide healthy meal options for their employees."
        },
        {
          question: "Do you offer any discounts or loyalty programs?",
          answer: "Yes! We have a loyalty program where you earn points with every purchase. We also offer student discounts, corporate rates, and seasonal promotions. Sign up for our newsletter to stay updated on special offers."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "Your satisfaction is our priority. If you're not completely happy with your order, contact us within 24 hours and we'll make it right with a replacement or full refund."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find quick answers to common questions about our fresh salads, delivery, and more
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {filteredFAQ.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-deep-brown mb-6 border-b-2 border-terracotta pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[globalIndex];
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-sage/5 rounded-2xl transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-deep-brown pr-4">
                          {item.question}
                        </h3>
                        <div className="text-terracotta flex-shrink-0">
                          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredFAQ.length === 0 && searchTerm && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg mb-4">
                No questions found matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-terracotta hover:text-deep-brown font-medium"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-terracotta to-muted-peach text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our friendly customer support team is here to help you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-terracotta px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
              <motion.a
                href="mailto:hello@fretty.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-terracotta transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;