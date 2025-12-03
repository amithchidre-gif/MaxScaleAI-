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
      <section className="bg-gray-900 text-white py-8 min-h-screen flex items-center justify-center">
        <div className="w-[92%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Layer 4 - Deepest base plate */}
            <div className="absolute inset-0 bg-gray-700/20 rounded-[40px] translate-y-9 blur-md"></div>

            {/* Layer 3 - Base plate */}
            <div className="absolute inset-0 bg-gray-700/30 rounded-[40px] translate-y-6 blur-sm"></div>

            {/* Layer 2 - Soft blurred shadow layer */}
            <div className="absolute inset-0 bg-gray-800/50 rounded-[40px] translate-y-3 blur-xl"></div>

            {/* Layer 1 - Main panel */}
            <div className="relative bg-gradient-to-b from-[#0B0F17] to-[#0F1522] rounded-[40px] shadow-2xl overflow-hidden">
              {/* Navigation Bar */}
              <nav className="flex items-center justify-between px-8 md:px-12 py-6 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-xl">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">GrowthIQX</span>
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
                    Contact
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
                      Contact
                    </Link>
                  </div>
                </div>
              )}

              {/* Hero Content */}
              <div className="relative px-8 md:px-12 lg:px-16 py-16">
                {/* Premium 3D AI Robot Scene */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] max-w-xl"
                >
                  {/* Multi-layer Halo Glow */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-radial from-[#00FF95]/20 via-[#B05CFF]/15 to-transparent blur-3xl scale-125"></div>
                    <div className="absolute inset-0 bg-gradient-radial from-[#00FF95]/10 to-transparent blur-2xl scale-110"></div>
                  </div>

                  <svg viewBox="0 0 500 600" className="relative z-10 w-full h-auto drop-shadow-2xl">
                    <defs>
                      {/* Premium Gradients */}
                      <linearGradient id="glossyBlack" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                        <stop offset="30%" style={{ stopColor: '#0a0a0a', stopOpacity: 1 }} />
                        <stop offset="70%" style={{ stopColor: '#050505', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                      </linearGradient>

                      <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#00FF95', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#00cc7a', stopOpacity: 1 }} />
                      </linearGradient>

                      <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#B05CFF', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8B3FD9', stopOpacity: 1 }} />
                      </linearGradient>

                      <radialGradient id="studioLight" cx="30%" cy="30%">
                        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.4 }} />
                        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                      </radialGradient>

                      <radialGradient id="greenGlow">
                        <stop offset="0%" style={{ stopColor: '#00FF95', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#00FF95', stopOpacity: 0 }} />
                      </radialGradient>

                      <radialGradient id="purpleGlow">
                        <stop offset="0%" style={{ stopColor: '#B05CFF', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#B05CFF', stopOpacity: 0 }} />
                      </radialGradient>

                      <filter id="softShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                        <feOffset dx="0" dy="8" result="offsetblur"/>
                        <feFlood floodColor="#000000" floodOpacity="0.3"/>
                        <feComposite in2="offsetblur" operator="in"/>
                        <feMerge>
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>

                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Main Hero Bot */}
                    <g className="animate-float" filter="url(#softShadow)">
                      {/* Ground platform with gradient */}
                      <ellipse cx="250" cy="560" rx="120" ry="20" fill="url(#neonGreen)" opacity="0.3" />
                      <ellipse cx="250" cy="560" rx="100" ry="15" fill="url(#neonGreen)" opacity="0.5" />

                      {/* Legs with purple accents */}
                      <rect x="200" y="460" width="40" height="100" rx="20" fill="url(#glossyBlack)" />
                      <rect x="260" y="460" width="40" height="100" rx="20" fill="url(#glossyBlack)" />
                      <ellipse cx="220" cy="465" rx="15" ry="8" fill="url(#studioLight)" />
                      <ellipse cx="280" cy="465" rx="15" ry="8" fill="url(#studioLight)" />

                      {/* Purple knee joints */}
                      <circle cx="220" cy="510" r="14" fill="url(#neonPurple)" opacity="0.8" filter="url(#glow)" />
                      <circle cx="280" cy="510" r="14" fill="url(#neonPurple)" opacity="0.8" filter="url(#glow)" />
                      <circle cx="220" cy="510" r="25" fill="url(#purpleGlow)" opacity="0.4" />
                      <circle cx="280" cy="510" r="25" fill="url(#purpleGlow)" opacity="0.4" />

                      {/* Feet */}
                      <ellipse cx="220" cy="565" rx="28" ry="18" fill="url(#glossyBlack)" />
                      <ellipse cx="280" cy="565" rx="28" ry="18" fill="url(#glossyBlack)" />
                      <rect x="192" y="555" width="56" height="20" rx="10" fill="url(#glossyBlack)" />
                      <rect x="252" y="555" width="56" height="20" rx="10" fill="url(#glossyBlack)" />

                      {/* Main Body - glossy black */}
                      <rect x="180" y="300" width="140" height="160" rx="25" fill="url(#glossyBlack)" />
                      <ellipse cx="220" cy="320" rx="35" ry="50" fill="url(#studioLight)" opacity="0.2" />

                      {/* Purple chest core */}
                      <circle cx="250" cy="370" r="30" fill="url(#neonPurple)" opacity="0.3" filter="url(#glow)" />
                      <circle cx="250" cy="370" r="18" fill="url(#neonPurple)" filter="url(#glow)" />
                      <circle cx="250" cy="370" r="50" fill="url(#purpleGlow)" opacity="0.5" />

                      {/* Arms with purple accents */}
                      <rect x="125" y="310" width="45" height="110" rx="22" fill="url(#glossyBlack)" />
                      <rect x="330" y="310" width="45" height="110" rx="22" fill="url(#glossyBlack)" />
                      <ellipse cx="147" cy="315" rx="15" ry="8" fill="url(#studioLight)" opacity="0.3" />
                      <ellipse cx="352" cy="315" rx="15" ry="8" fill="url(#studioLight)" opacity="0.3" />

                      {/* Purple elbow joints */}
                      <circle cx="147" cy="360" r="16" fill="url(#neonPurple)" opacity="0.6" stroke="url(#neonPurple)" strokeWidth="2" filter="url(#glow)" />
                      <circle cx="352" cy="360" r="16" fill="url(#neonPurple)" opacity="0.6" stroke="url(#neonPurple)" strokeWidth="2" filter="url(#glow)" />

                      {/* Hands */}
                      <circle cx="147" cy="425" r="20" fill="url(#glossyBlack)" />
                      <circle cx="352" cy="425" r="20" fill="url(#glossyBlack)" />
                      <ellipse cx="147" cy="420" rx="10" ry="6" fill="url(#studioLight)" opacity="0.3" />
                      <ellipse cx="352" cy="420" rx="10" ry="6" fill="url(#studioLight)" opacity="0.3" />

                      {/* Head - large glossy sphere */}
                      <circle cx="250" cy="220" r="80" fill="url(#glossyBlack)" />
                      <ellipse cx="230" cy="200" rx="30" ry="35" fill="url(#studioLight)" opacity="0.3" />

                      {/* Green headphone pieces */}
                      <rect x="150" y="200" width="25" height="70" rx="12" fill="url(#neonGreen)" filter="url(#glow)" />
                      <rect x="325" y="200" width="25" height="70" rx="12" fill="url(#neonGreen)" filter="url(#glow)" />
                      <circle cx="162" cy="235" r="35" fill="url(#greenGlow)" opacity="0.5" />
                      <circle cx="337" cy="235" r="35" fill="url(#greenGlow)" opacity="0.5" />

                      {/* Headband connector */}
                      <path d="M 175 190 Q 250 170 325 190" stroke="url(#neonGreen)" strokeWidth="8" fill="none" strokeLinecap="round" filter="url(#glow)" />

                      {/* Happy face - white smile */}
                      <path d="M 210 235 Q 250 250 290 235" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />

                      {/* White eyes */}
                      <ellipse cx="220" cy="210" rx="18" ry="25" fill="#FFFFFF" opacity="0.9" />
                      <ellipse cx="280" cy="210" rx="18" ry="25" fill="#FFFFFF" opacity="0.9" />

                      {/* Rim lighting */}
                      <path d="M 310 320 Q 335 380 310 440" stroke="url(#neonGreen)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
                      <path d="M 190 320 Q 165 380 190 440" stroke="url(#neonGreen)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
                    </g>

                    {/* LeadGen Mini Bot - Floating in front */}
                    <g className="animate-float-slow" style={{ animationDelay: '0.5s' }}>
                      {/* Mini bot platform */}
                      <ellipse cx="130" cy="380" rx="45" ry="8" fill="url(#neonGreen)" opacity="0.4" />

                      {/* Mini bot body */}
                      <rect x="95" y="300" width="70" height="75" rx="15" fill="url(#glossyBlack)" filter="url(#softShadow)" />
                      <ellipse cx="115" cy="315" rx="15" ry="20" fill="url(#studioLight)" opacity="0.2" />

                      {/* Mini bot head */}
                      <circle cx="130" cy="270" r="35" fill="url(#glossyBlack)" />
                      <ellipse cx="120" cy="260" rx="12" ry="15" fill="url(#studioLight)" opacity="0.2" />

                      {/* Green glowing eyes */}
                      <circle cx="120" cy="268" r="8" fill="url(#neonGreen)" filter="url(#glow)" />
                      <circle cx="140" cy="268" r="8" fill="url(#neonGreen)" filter="url(#glow)" />
                      <circle cx="120" cy="268" r="15" fill="url(#greenGlow)" opacity="0.5" />
                      <circle cx="140" cy="268" r="15" fill="url(#greenGlow)" opacity="0.5" />

                      {/* Smile */}
                      <path d="M 115 280 Q 130 288 145 280" stroke="url(#neonGreen)" strokeWidth="2" fill="none" strokeLinecap="round" />

                      {/* Green accent lines */}
                      <rect x="105" y="310" width="50" height="3" rx="1.5" fill="url(#neonGreen)" opacity="0.8" />
                      <rect x="105" y="320" width="50" height="3" rx="1.5" fill="url(#neonGreen)" opacity="0.8" />

                      {/* Hologram label - LeadGen AI */}
                      <rect x="70" y="335" width="120" height="32" rx="8" fill="url(#neonGreen)" opacity="0.15" stroke="url(#neonGreen)" strokeWidth="2" filter="url(#glow)" />
                      <text x="130" y="356" fontSize="14" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">LeadGen AI</text>

                      {/* HUD Icons around mini bot */}
                      {/* Funnel Icon - Top Left */}
                      <g transform="translate(40, 240)">
                        <rect x="0" y="0" width="35" height="35" rx="6" fill="rgba(0, 255, 149, 0.1)" stroke="url(#neonGreen)" strokeWidth="1.5" />
                        <path d="M 10 12 L 25 12 L 20 20 L 15 20 Z" stroke="url(#neonGreen)" strokeWidth="1.5" fill="none" />
                        <rect x="16" y="20" width="3" height="6" fill="url(#neonGreen)" />
                      </g>

                      {/* Target Icon - Top Right */}
                      <g transform="translate(175, 245)">
                        <rect x="0" y="0" width="35" height="35" rx="6" fill="rgba(0, 255, 149, 0.1)" stroke="url(#neonGreen)" strokeWidth="1.5" />
                        <circle cx="17.5" cy="17.5" r="10" stroke="url(#neonGreen)" strokeWidth="1.5" fill="none" />
                        <circle cx="17.5" cy="17.5" r="6" stroke="url(#neonGreen)" strokeWidth="1.5" fill="none" />
                        <circle cx="17.5" cy="17.5" r="2" fill="url(#neonGreen)" />
                      </g>

                      {/* Growth Graph Icon - Bottom */}
                      <g transform="translate(105, 385)">
                        <rect x="0" y="0" width="35" height="35" rx="6" fill="rgba(0, 255, 149, 0.1)" stroke="url(#neonGreen)" strokeWidth="1.5" />
                        <path d="M 8 22 L 12 18 L 16 20 L 22 12 L 27 15" stroke="url(#neonGreen)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="22,12 27,12 27,15" fill="url(#neonGreen)" />
                      </g>

                      {/* Connecting lines from icons to bot */}
                      <line x1="57" y1="275" x2="95" y2="320" stroke="url(#neonGreen)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                      <line x1="192" y1="280" x2="160" y2="320" stroke="url(#neonGreen)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                      <line x1="122" y1="385" x2="122" y2="375" stroke="url(#neonGreen)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                    </g>
                  </svg>
                </motion.div>

                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  className="max-w-5xl lg:max-w-[55%]"
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