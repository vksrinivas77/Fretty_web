import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, CalendarDays, Zap, ShoppingCart, CreditCard } from 'lucide-react';

const Menu = () => {
  const [selectedSalad, setSelectedSalad] = useState(null);
  const [customIngredients, setCustomIngredients] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const salads = [
    {
      id: 1,
      name: "Mediterranean Delight",
      description: "Fresh lettuce, tomatoes, cucumber, olives, feta cheese, and olive oil dressing",
      price: 12.99,
      calories: 320,
      protein: 12,
      image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Protein Power Bowl",
      description: "Grilled chicken, quinoa, spinach, avocado, chickpeas, and tahini dressing",
      price: 15.99,
      calories: 450,
      protein: 35,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Green Goddess",
      description: "Kale, arugula, broccoli, avocado, edamame, and green goddess dressing",
      price: 11.99,
      calories: 280,
      protein: 15,
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Rainbow Crunch",
      description: "Mixed greens, rainbow vegetables, nuts, seeds, and balsamic vinaigrette",
      price: 13.99,
      calories: 350,
      protein: 18,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const ingredients = [
    { name: "Grilled Chicken", calories: 140, protein: 26, price: 3.00 },
    { name: "Avocado", calories: 160, protein: 2, price: 2.00 },
    { name: "Feta Cheese", calories: 75, protein: 4, price: 1.50 },
    { name: "Quinoa", calories: 110, protein: 4, price: 1.00 },
    { name: "Chickpeas", calories: 90, protein: 5, price: 1.00 },
    { name: "Walnuts", calories: 130, protein: 3, price: 2.00 },
    { name: "Cherry Tomatoes", calories: 15, protein: 1, price: 0.50 },
    { name: "Cucumber", calories: 8, protein: 0, price: 0.50 },
  ];

  const handleIngredientChange = (ingredient, change) => {
    const newCount = Math.max(0, (customIngredients[ingredient.name] || 0) + change);
    const newIngredients = { ...customIngredients, [ingredient.name]: newCount };
    setCustomIngredients(newIngredients);

    // Calculate totals
    let calories = 0;
    let protein = 0;
    Object.entries(newIngredients).forEach(([name, count]) => {
      const ing = ingredients.find(i => i.name === name);
      if (ing && count > 0) {
        calories += ing.calories * count;
        protein += ing.protein * count;
      }
    });
    setTotalCalories(calories);
    setTotalProtein(protein);
  };

  const getSelectedIngredients = () => {
    return Object.entries(customIngredients)
      .filter(([name, count]) => count > 0)
      .map(([name, count]) => {
        const ingredient = ingredients.find(i => i.name === name);
        return { ...ingredient, count };
      });
  };

  const getTotalPrice = () => {
    return Object.entries(customIngredients).reduce((total, [name, count]) => {
      const ing = ingredients.find(i => i.name === name);
      return total + (ing ? ing.price * count : 0);
    }, 8.99);
  };

  const PaymentModal = () => (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-deep-brown mb-2">Payment Demo</h3>
          <p className="text-gray-600">This is a demo payment interface</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-deep-brown mb-2">Order Summary</h4>
            <div className="flex justify-between">
              <span>Custom Salad</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
              />
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => setShowPaymentModal(false)}
            className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowPaymentModal(false);
              alert('Demo payment successful! 🎉');
            }}
            className="flex-1 py-3 bg-terracotta text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300"
          >
            Pay Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

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
            Our Fresh Menu
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our carefully crafted salads or build your own perfect bowl with our fresh ingredients
          </motion.p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {salads.map((salad, index) => (
              <motion.div
                key={salad.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={salad.image}
                    alt={salad.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${salad.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-brown mb-2">
                    {salad.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {salad.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        {salad.calories} cal
                      </span>
                      <span className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {salad.protein}g protein
                      </span>
                    </div>
                  </div>
                  <motion.button
                    className="w-full bg-terracotta text-white py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowPaymentModal(true)}
                  >
                    <span className="relative z-10">Add to Cart</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salad Builder */}
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
              Build Your Perfect Salad
            </h2>
            <p className="text-lg text-gray-600">
              Customize your bowl with our fresh, premium ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-deep-brown mb-6">
                Choose Your Ingredients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <motion.div
                    key={ingredient.name}
                    className="bg-cream p-4 rounded-xl border border-gray-200 hover:border-terracotta transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: customIngredients[ingredient.name] > 0 ? 1.02 : 1.01,
                      y: customIngredients[ingredient.name] > 0 ? -2 : 0
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-deep-brown">{ingredient.name}</h4>
                      <span className="text-terracotta font-medium">+${ingredient.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{ingredient.calories} cal</span>
                      <span>{ingredient.protein}g protein</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <motion.button
                          onClick={() => handleIngredientChange(ingredient, -1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus size={16} />
                        </motion.button>
                        <span className="w-8 text-center font-medium">
                          {customIngredients[ingredient.name] || 0}
                        </span>
                        <motion.button
                          onClick={() => handleIngredientChange(ingredient, 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Cart Summary */}
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-sage/20 to-soft-green/20 p-6 rounded-2xl h-fit sticky top-24 border border-sage/30"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-terracotta mr-2" />
                    <h3 className="text-xl font-semibold text-deep-brown">
                      Your Custom Salad
                    </h3>
                  </div>

                  {/* Selected Ingredients List */}
                  {getSelectedIngredients().length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-deep-brown mb-3">Selected Ingredients:</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {getSelectedIngredients().map((item) => (
                          <div key={item.name} className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded-lg">
                            <span className="font-medium">{item.name} x{item.count}</span>
                            <div className="text-right">
                              <div className="text-terracotta font-medium">${(item.price * item.count).toFixed(2)}</div>
                              <div className="text-gray-500 text-xs">{item.calories * item.count} cal</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Price:</span>
                      <span className="font-medium text-deep-brown">$8.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Calories:</span>
                      <span className="font-medium text-deep-brown">{totalCalories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Protein:</span>
                      <span className="font-medium text-deep-brown">{totalProtein}g</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-semibold">
                        <span className="text-deep-brown">Total Price:</span>
                        <span className="text-terracotta">${getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-terracotta text-white py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: Object.keys(customIngredients).length > 0 ? 1.02 : 1 }}
                    whileTap={{ scale: Object.keys(customIngredients).length > 0 ? 0.98 : 1 }}
                    disabled={Object.keys(customIngredients).filter(key => customIngredients[key] > 0).length === 0}
                    onClick={() => setShowPaymentModal(true)}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add Custom Salad to Cart
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && <PaymentModal />}
    </div>
  );
};

export default Menu;