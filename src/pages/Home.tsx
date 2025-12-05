import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot, Users, TrendingUp, Zap, Shield, Clock, Target,
  ArrowRight, Phone, MessageSquare, Globe, BarChart3,
  Settings, Headphones, PhoneCall, Search, Linkedin, Youtube, Menu, X
} from 'lucide-react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Sales QA / Call Analyzer",
      description: "Analyze sales calls and provide quality assurance insights automatically."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "AI Sales Coach / Trainer",
      description: "Intelligent coaching system that trains your sales team effectively."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "AI Lead Generation",
      description: "Generate high-quality leads using advanced AI algorithms."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Chatbot Implementation",
      description: "Deploy intelligent chatbots to handle customer interactions 24/7."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "AI Workflow Automation",
      description: "Automate complex business processes and workflows seamlessly."
    },
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "AI Inbound Calling Agent",
      description: "Smart inbound call handling with natural language processing."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "AI Outbound Calling Agent",
      description: "Automated outbound calling system for lead nurturing and sales."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "AI Website Development",
      description: "Build intelligent websites with AI-powered features and optimization."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "AI SEO & Content Automation",
      description: "Automate content creation and SEO optimization for better rankings."
    }
  ];

  const processSteps = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Plan",
      description: "We analyze your business needs and create a custom AI strategy."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Build",
      description: "Our team develops and implements your AI solution."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Iterate",
      description: "We continuously improve and optimize based on performance data."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scale",
      description: "Expand your AI capabilities as your business grows."
    }
  ];

  return (
    <div>
      {/* Hero Section with Floating Card */}
      <section className="bg-gray-900 text-white py-8 flex items-center justify-center">
        <div className="w-full max-w-[1587px] aspect-[125/76] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            {/* Layer 4 - Deepest base plate */}
            <div className="absolute inset-0 bg-gray-700/20 rounded-[40px] translate-y-9 blur-md"></div>

            {/* Layer 3 - Base plate */}
            <div className="absolute inset-0 bg-gray-700/30 rounded-[40px] translate-y-6 blur-sm"></div>

            {/* Layer 2 - Soft blurred shadow layer */}
            <div className="absolute inset-0 bg-gray-800/50 rounded-[40px] translate-y-3 blur-xl"></div>

            {/* Layer 1 - Main panel */}
            <div className="relative bg-gradient-to-b from-[#0B0F17] to-[#0F1522] rounded-[40px] shadow-2xl overflow-hidden h-full flex flex-col">
              {/* Navigation Bar */}
              <nav className="flex items-center justify-between px-8 md:px-12 py-6 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white">Growth IQ X</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Let's Talk
                  </Link>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </nav>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800/95 border-b border-gray-700/50">
                  <div className="px-8 py-4 space-y-3">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Home
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                    >
                      Services
                    </Link>
                    <Link
                      to="/faq"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-white transition-colors py-2"
                    >
                      FAQ
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Let's Talk
                    </Link>
                  </div>
                </div>
              )}

              {/* Hero Content */}
              <div className="relative px-8 md:px-12 lg:px-16 pt-5 pb-16 flex-1 flex items-center">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  className="max-w-5xl"
                >
                  {/* Large Headline */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-white mb-6">
                    Scale Smarter with AI
                  </h1>
                  <div className="space-y-2 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                      <span className="text-2xl md:text-3xl font-bold text-green-400">Cut Costs up to 79%</span>
                      <span className="hidden md:inline-block w-8 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full animate-pulse"></span>
                      <span className="text-2xl md:text-3xl font-bold text-purple-400">Grow Revenue by 100%</span>
                    </div>
                    <div className="w-full h-1 bg-gradient-to-r from-gray-700 via-purple-500 to-gray-700 rounded-full my-2 animate-pulse"></div>
                  </div>

                  {/* Subheadline */}
                  <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                    We design AI solutions that help businesses reduce expenses, generate qualified leads, and double their revenue — all without adding complexity.
                  </p>

                  {/* CTA Row */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Let's Talk
                      </Link>

                      <Link
                        to="/services"
                        className="text-gray-300 hover:text-white transition-colors text-base font-medium"
                      >
                        Our services
                      </Link>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-gray-600"></div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-4">
                      <p className="text-gray-400 text-sm">Loved by founders worldwide</p>
                      <div className="flex -space-x-3">
                        <img
                          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                          alt="Founder 1"
                          className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
                        />
                        <img
                          src="https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                          alt="Founder 2"
                          className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
                        />
                        <img
                          src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                          alt="Founder 3"
                          className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
                        />
                        <img
                          src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2"
                          alt="Founder 4"
                          className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="bg-gray-900 py-12 overflow-hidden border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              20,104+ Integration support from companies around the world
            </h2>
            <p className="text-lg text-blue-400 font-medium">Join thousands of businesses already scaling with AI</p>
          </div>
          
          <div className="relative">
            <div className="flex animate-scroll-left space-x-8 items-center">
              {/* First set of logos */}
              <div className="flex space-x-8 items-center flex-shrink-0">
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/LinkedIn_Logo_0.svg"
                    alt="LinkedIn"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/YouTube_Logo_0.svg"
                    alt="YouTube"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/x- logo.svg"
                    alt="X"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/WhatsApp-Logo.wine copy.svg"
                    alt="WhatsApp"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Instagram_Glyph_Gradient.png"
                    alt="Instagram"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/OpenAI_Logo_0.svg"
                    alt="OpenAI"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Pinecone.svg"
                    alt="Pinecone"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/full-logo-square-2 copy.svg"
                    alt="Vapi"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Airtable_idksKOtgp1_0.svg"
                    alt="Airtable"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/supabase.svg"
                    alt="Supabase"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 items-center flex-shrink-0">
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/LinkedIn_Logo_0.svg"
                    alt="LinkedIn"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/YouTube_Logo_0.svg"
                    alt="YouTube"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/x- logo.svg"
                    alt="X"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/WhatsApp-Logo.wine copy.svg"
                    alt="WhatsApp"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Instagram_Glyph_Gradient.png"
                    alt="Instagram"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/OpenAI_Logo_0.svg"
                    alt="OpenAI"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Pinecone.svg"
                    alt="Pinecone"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/full-logo-square-2 copy.svg"
                    alt="Vapi"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Airtable_idksKOtgp1_0.svg"
                    alt="Airtable"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/supabase.svg"
                    alt="Supabase"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
              </div>
              
              {/* Third set for extra smoothness */}
              <div className="flex space-x-8 items-center flex-shrink-0">
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/LinkedIn_Logo_0.svg"
                    alt="LinkedIn"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/YouTube_Logo_0.svg"
                    alt="YouTube"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/x- logo.svg"
                    alt="X"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/WhatsApp-Logo.wine copy.svg"
                    alt="WhatsApp"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Instagram_Glyph_Gradient.png"
                    alt="Instagram"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/OpenAI_Logo_0.svg"
                    alt="OpenAI"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Pinecone.svg"
                    alt="Pinecone"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/full-logo-square-2 copy.svg"
                    alt="Vapi"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Airtable_idksKOtgp1_0.svg"
                    alt="Airtable"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
                <div className="bg-white/5 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <img
                    src="/supabase.svg"
                    alt="Supabase"
                    className="h-10 w-auto brightness-110 contrast-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive AI-powered services.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                variants={fadeInUp}
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose GrowthIQX?
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Business-First AI</h3>
              <p className="text-gray-300">Solutions designed specifically for business growth and ROI.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-gray-300">Quick implementation to start seeing results immediately.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
              <p className="text-gray-300">Enterprise-grade security for your data and operations.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-orange-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Fit</h3>
              <p className="text-gray-300">Tailored solutions that fit your specific business needs.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to implementing AI that delivers measurable results.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                variants={fadeInUp}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-blue-600/20' :
                  index === 1 ? 'bg-green-600/20' :
                  index === 2 ? 'bg-purple-600/20' :
                  'bg-orange-600/20'
                }`}>
                  <div className={`${
                    index === 0 ? 'text-blue-400' :
                    index === 1 ? 'text-green-400' :
                    index === 2 ? 'text-purple-400' :
                    'text-orange-400'
                  }`}>{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-500 absolute top-6 -right-8 hidden md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet The Founder Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Meet The Founder
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="flex justify-center"
                variants={fadeInUp}
              >
                <div className="relative">
                  <img
                    src="/amith-profile-new.png.png"
                    alt="Amith Chidre - Founder of GrowthIQX"
                    className="rounded-2xl w-full max-w-md object-cover shadow-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-6 text-gray-300"
                variants={fadeInUp}
              >
                <p className="text-lg leading-relaxed">
                  Hi, I'm <span className="text-white font-semibold">Amith Chidre</span> — Founder of GrowthIQX and a Business AI Growth Consultant helping entrepreneurs unlock growth with AI-powered systems.
                </p>

                <p className="text-lg leading-relaxed">
                  After 12+ years of building and running businesses in the US, I've seen exactly where companies lose time, money, and momentum — and GrowthIQX was created to eliminate that.
                </p>

                <p className="text-lg leading-relaxed">
                  I help entrepreneurs use AI not as a buzzword, but as a practical tool to save time, reduce stress, speed up execution, optimize decisions, and scale faster.
                </p>

                <p className="text-lg leading-relaxed">
                  My mission is simple: to empower you with intelligent, done-for-you AI systems that make your business lighter, faster, and far more profitable to run.
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/amithchidre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@growthiqx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6 text-white" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section id="book-meeting" className="bg-gray-950 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-3">
              Schedule a Meeting
            </h2>
            <p className="text-gray-400 text-lg">
              Pick a time that works for you
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
          >
            <div className="rounded-xl overflow-hidden bg-gray-950">
              <iframe
                src="https://calender.growthiqx.com/book/cmio9i9x30000k0040q70mwwn"
                width="100%"
                height="750"
                frameBorder="0"
                className="border-none"
                title="Book a Meeting"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to cut costs and scale with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with our AI solutions.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Schedule Your Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;