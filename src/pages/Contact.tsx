import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    "AI Sales QA / Call Analyzer",
    "AI Sales Coach / Trainer",
    "AI Lead Generation",
    "AI Chatbot Implementation",
    "AI Workflow Automation",
    "AI Inbound Calling Agent",
    "AI Outbound Calling Agent",
    "AI Website Development",
    "AI SEO & Content Automation"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Your AI Advantage
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation and explore how AI can help you cut costs, 
              generate leads, and scale revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-gray-700 rounded-2xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get Your Free AI Consultation
                </h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      className="grid md:grid-cols-2 gap-6"
                      variants={staggerChildren}
                    >
                      <motion.div variants={fadeInUp}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </motion.div>
                      
                      <motion.div variants={fadeInUp}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                        placeholder="Your company name"
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                        placeholder="Tell us about your business challenges and goals..."
                      ></textarea>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send className="h-5 w-5" />
                    </motion.button>
                  </form>
                ) : (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                    <p className="text-gray-300">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info Sidebar */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-gray-900 text-white rounded-2xl p-8 h-fit">
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Us</h4>
                      <a 
                        href="mailto:info@growthiqx.com"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        info@growthiqx.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <a 
                        href="tel:+919063338206"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        +91-906-3338206
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                      <p className="text-gray-300">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="font-semibold text-white mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;