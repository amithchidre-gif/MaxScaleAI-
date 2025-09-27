import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "What types of businesses can benefit from AI solutions?",
      answer: "AI solutions can benefit businesses across all industries and sizes. From small startups looking to automate customer service to large enterprises optimizing complex operations, our AI solutions are customized to fit specific business needs. We work with e-commerce, healthcare, finance, real estate, manufacturing, and service-based businesses."
    },
    {
      question: "How quickly can I see results from AI implementation?",
      answer: "Most of our clients start seeing measurable results within 30-60 days of implementation. Initial improvements in efficiency and cost reduction are often visible within the first few weeks. However, the full potential of AI solutions typically unfolds over 3-6 months as the systems learn and optimize based on your business data."
    },
    {
      question: "Is AI implementation expensive and complex?",
      answer: "We've designed our AI solutions to be cost-effective and easy to implement. Our team handles all the technical complexity, and we offer flexible pricing models that scale with your business. Many clients save more in operational costs than they invest in our AI solutions within the first year."
    },
    {
      question: "Will AI replace my employees?",
      answer: "No, our AI solutions are designed to augment and empower your team, not replace them. AI handles repetitive tasks, data analysis, and routine processes, freeing your employees to focus on high-value activities like strategy, creativity, and customer relationships. This typically leads to higher job satisfaction and productivity."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data processing, and compliance with industry standards like GDPR and SOC 2. Your business data never leaves our secure environment, and we provide complete transparency about data usage and storage practices."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
              AI, Simplified.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are answers to common questions business owners ask us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-xl mb-4 shadow-sm border border-gray-600 overflow-hidden"
                variants={fadeInUp}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Support Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help you understand how AI can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@maxscaleai.com"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Email Us Directly
              </a>
              <a
                href="tel:+919063338206"
                className="border-2 border-gray-400 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-400 hover:text-gray-900 transition-all duration-300"
              >
                Call +91-906-3338206
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;