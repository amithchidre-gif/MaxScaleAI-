import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, Users, TrendingUp, Zap, Shield, Clock, Target,
  ArrowRight, Phone, MessageSquare, Globe, BarChart3,
  Settings, Headphones, PhoneCall, Search
} from 'lucide-react';

const Home = () => {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left"
                variants={fadeInUp}
              >
                Scale Smarter with AI
              </motion.h1>
              <div className="space-y-2 mt-2">
                <div className="flex flex-row gap-6 items-center">
                  <span className="text-2xl md:text-3xl font-bold text-green-400">Cut Costs up to 79%</span>
                  <span className="hidden md:inline-block w-8 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full animate-pulse"></span>
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">Grow Revenue by 100%</span>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-gray-700 via-purple-500 to-gray-700 rounded-full my-2 animate-pulse"></div>
              </div>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-2xl text-left mt-2"
                variants={fadeInUp}
              >
                We design AI solutions that help businesses reduce expenses, generate qualified leads,<br />
                and double their revenue — all without adding complexity.
              </motion.p>
              <motion.div 
                className="flex flex-col gap-6"
                variants={fadeInUp}
              >
                <div className="flex flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    Let's Talk
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-gray-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Our services
                  </Link>
                </div>
                {/* Social Proof - Below buttons */}
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
              </motion.div>
            </div>
            {/* Right Content - Spline Animation */}
            <motion.div 
              className="flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="w-full h-[600px] max-w-lg">
              </div>
            </motion.div>
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
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/LinkedIn-logo.png"
                    alt="LinkedIn"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Facebook_logo.png"
                    alt="Facebook"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/OpenAI-Logo-2022.png"
                    alt="OpenAI"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/pinecone.png"
                    alt="Pinecone"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/vapi logo.png"
                    alt="Vapi"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/airtable logo.png"
                    alt="Airtable"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Twilio_logo.png"
                    alt="Twilio"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/gemini logo.jpg"
                    alt="Gemini"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/supabase logo.png"
                    alt="Supabase"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 items-center flex-shrink-0">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/LinkedIn-logo.png"
                    alt="LinkedIn"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Facebook_logo.png"
                    alt="Facebook"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/OpenAI-Logo-2022.png"
                    alt="OpenAI"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/pinecone.png"
                    alt="Pinecone"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/vapi logo.png"
                    alt="Vapi"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/airtable logo.png"
                    alt="Airtable"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Twilio_logo.png"
                    alt="Twilio"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/gemini logo.jpg"
                    alt="Gemini"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/supabase logo.png"
                    alt="Supabase"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              
              {/* Third set for extra smoothness */}
              <div className="flex space-x-8 items-center flex-shrink-0">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/LinkedIn-logo.png"
                    alt="LinkedIn"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/Facebook_logo.png"
                    alt="Facebook"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/OpenAI-Logo-2022.png"
                    alt="OpenAI"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/pinecone.png"
                    alt="Pinecone"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/vapi logo.png"
                    alt="Vapi"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-32 h-20 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                  <img
                    src="/airtable logo.png"
                    alt="Airtable"
                    className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
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