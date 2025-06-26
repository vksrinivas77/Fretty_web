import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Users, Lock } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Terms of Service",
      content: [
        {
          subtitle: "Acceptance of Terms",
          text: "By accessing and using FRETTY's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Service Description",
          text: "FRETTY provides fresh, made-to-order salads and healthy meal delivery services. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time."
        },
        {
          subtitle: "User Responsibilities",
          text: "You are responsible for providing accurate information when placing orders, maintaining the security of your account, and complying with all applicable laws and regulations."
        },
        {
          subtitle: "Order and Payment Terms",
          text: "All orders are subject to acceptance and availability. Payment is required at the time of order placement. We reserve the right to refuse or cancel orders for any reason."
        }
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Policy",
      content: [
        {
          subtitle: "Information We Collect",
          text: "We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This includes name, email, phone number, delivery address, and payment information."
        },
        {
          subtitle: "How We Use Your Information",
          text: "We use your information to process orders, provide customer service, send updates about your orders, improve our services, and communicate promotional offers (with your consent)."
        },
        {
          subtitle: "Information Sharing",
          text: "We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with service providers who assist in our operations."
        },
        {
          subtitle: "Data Security",
          text: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Food Safety & Liability",
      content: [
        {
          subtitle: "Food Safety Standards",
          text: "We maintain the highest food safety standards and follow all local health department regulations. All ingredients are sourced from reputable suppliers and handled according to food safety protocols."
        },
        {
          subtitle: "Allergen Information",
          text: "While we provide allergen information and take precautions, we cannot guarantee that our food is completely free of allergens. Please inform us of any allergies when ordering."
        },
        {
          subtitle: "Limitation of Liability",
          text: "FRETTY's liability is limited to the cost of the product purchased. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services."
        },
        {
          subtitle: "Product Quality",
          text: "We guarantee the freshness and quality of our products. If you're not satisfied with your order, please contact us within 24 hours for a replacement or refund."
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Conduct & Account",
      content: [
        {
          subtitle: "Account Creation",
          text: "You may be required to create an account to use certain features of our service. You are responsible for maintaining the confidentiality of your account credentials."
        },
        {
          subtitle: "Prohibited Uses",
          text: "You may not use our service for any unlawful purpose, to harass others, transmit harmful content, or attempt to interfere with the proper functioning of our systems."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to terminate or suspend accounts that violate our terms of service or engage in fraudulent activity."
        },
        {
          subtitle: "Intellectual Property",
          text: "All content on our website and app, including text, graphics, logos, and images, is the property of FRETTY and protected by copyright and other intellectual property laws."
        }
      ]
    }
  ];

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
            Terms & Privacy Policy
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your privacy and trust are important to us. Please review our terms of service and privacy policy.
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: March 15, 2024
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-terracotta mr-3">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-deep-brown">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-deep-brown mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-deep-brown mb-4">
              Additional Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-sage/10 p-6 rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-deep-brown mb-4">
                Delivery & Cancellation Policy
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Orders can be cancelled up to 30 minutes before scheduled delivery</li>
                <li>• Delivery times are estimates and may vary due to traffic or weather</li>
                <li>• We require someone to be present to receive the delivery</li>
                <li>• Redelivery fees may apply for missed deliveries</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-terracotta/10 p-6 rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-deep-brown mb-4">
                Contact Information
              </h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p><strong>Email:</strong> legal@fretty.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Health Street, Wellness City, WC 12345</p>
                <p><strong>Business Hours:</strong> Mon-Fri 9AM-6PM EST</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 p-6 bg-gradient-to-r from-deep-brown to-deep-brown/90 text-white rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Changes to Terms</h3>
            <p className="text-sm leading-relaxed opacity-90">
              We reserve the right to modify these terms at any time. Changes will be posted on this page 
              with an updated date. Your continued use of our services after changes are posted constitutes 
              acceptance of the new terms. We encourage you to review this page periodically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-sage/20 to-soft-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-deep-brown mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is happy to clarify any questions you have about our policies
            </p>
            <motion.a
              href="/contact"
              className="bg-terracotta text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;