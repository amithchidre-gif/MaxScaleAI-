import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Users, 
  Bot, 
  Workflow, 
  PhoneCall, 
  PhoneOutgoing, 
  Globe, 
  Search
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: 'AI Sales QA / Call Analyzer',
      description: 'Analyze 100% of sales calls automatically (vs. 2–5% manually reviewed)\n\nIdentify 30–40% more conversion opportunities hidden in calls\n\nImprove closing rates by 20–35% with data-driven insights\n\nReduce sales ramp-up time by 25% through continuous feedback'
    },
    {
      icon: Users,
      title: 'AI Sales Coach / Trainer',
      description: 'Deliver real-time coaching that improves performance by 20–30%\n\nReduce training costs by 50% compared to traditional methods\n\nIncrease objection-handling success rate by 40%\n\nShorten sales rep onboarding time by 30–40%'
    },
    {
      icon: Bot,
      title: 'AI Lead Generation',
      description: 'Increase qualified leads by 40–60% within the first quarter\n\nReduce manual prospecting time by up to 70%\n\nImprove sales team efficiency by 30%\n\nBoost revenue pipeline growth by 2–3X'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Save teams 20–30 hours per week on repetitive tasks\n\nIncrease operational efficiency by 50%\n\nReduce human error rates by up to 90%\n\nScale processes 3X faster without extra staff'
    },
    {
      icon: Globe,
      title: 'AI Website Development',
      description: 'Improve website conversions by 30–50%\n\nReduce bounce rates by 20–35%\n\nIncrease site speed and performance by 2–3X\n\nAchieve 25% higher ROI on marketing campaigns'
    },
    {
      icon: Search,
      title: 'AI SEO & Content Automation',
      description: 'Publish content 5–10X faster than manual writing\n\nIncrease organic traffic by 50–100% in 6 months\n\nImprove keyword rankings across 70%+ of target terms\n\nReduce content creation costs by 60%'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              AI Solutions 
              <span className="text-purple-400"> Tailored for Growth</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              GrowthIQX provides AI-powered business solutions designed to generate leads, 
              improve sales, and automate operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agents Hero Section - Matching Reference Design */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-300 text-sm font-medium">Get started</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The fast way to actually get AI<br />
              working in your business
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              GrowthIQX Call Agents are designed for rapid deployment and immediate impact on your phone operations
            </p>
          </motion.div>

          {/* AI Agent Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Receptionist Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <PhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Receptionist</h3>
                    <div className="inline-flex items-center bg-green-900/30 border border-green-500/30 rounded-full px-3 py-1 mt-1">
                      <span className="text-green-300 text-xs font-medium">Inbound Call AI Agent</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Never miss a call again with 24/7 intelligent call handling, lead qualification, and seamless customer service.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">24/7 Call Handling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">Lead Qualification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">Appointment Booking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">CRM Integration</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-1">70<span className="text-purple-400">%</span></div>
                    <div className="text-gray-400 text-xs leading-tight">
                      Costs 70% less than a traditional human receptionist
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-1">2<span className="text-purple-400">Mins</span></div>
                    <div className="text-gray-400 text-xs leading-tight">
                      Customer response time dropped from 4 hrs to 2 mins
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>

            {/* AI Outbound Caller Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <PhoneOutgoing className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Outbound Caller</h3>
                    <div className="inline-flex items-center bg-yellow-900/30 border border-yellow-500/30 rounded-full px-3 py-1 mt-1">
                      <span className="text-yellow-300 text-xs font-medium">Outbound Sales Agent</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scale your outreach with intelligent AI that qualifies leads, books appointments, and drives conversions.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">Intelligent Outreach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">Lead Qualification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">Appointment Setting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-300 text-sm">Performance Analytics</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-1">3<span className="text-purple-400">x</span></div>
                    <div className="text-gray-400 text-xs leading-tight">
                      Generate 3x more qualified leads with our AI Agent
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-1">85<span className="text-purple-400">%</span></div>
                    <div className="text-gray-400 text-xs leading-tight">
                      Free up 85% of your sales team's prospecting time
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform every aspect of your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/80 p-8 rounded-xl shadow-sm border border-gray-600/50 hover:shadow-lg transition-all duration-300 group hover:bg-gray-700"
              >
                <div className="w-16 h-16 bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/80 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-purple-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <div className="text-gray-300/90 leading-relaxed space-y-2">
                  {service.description.split('\n\n').map((point, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-purple-300/80 mt-1">•</span>
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive growth and reduce costs for your business.
            </p>
            <Link
              to="/contact"
              className="bg-purple-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;