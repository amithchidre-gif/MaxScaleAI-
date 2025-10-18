import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Founder = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const teamMembers = [
    {
        name: "Amith Chidre",
        role: "Founder & Strategy Lead",
        bio: "Amith brings over two decades of business growth and strategy experience. He has helped hundreds of businesses transform their operations through intelligent automation and data-driven decision-making. His vision is to make AI accessible to organizations of all sizes—empowering them to scale efficiently, innovate faster, and achieve greater profitability.",
        image: "/amith-profile-new.png",
        social: {
          linkedin: "#",
          twitter: "#",
          email: "amith@growthiqx.com"
        }
    },
    {
      name: "Sarah Johnson",
      role: "AI Engineering Lead",
      bio: "Sarah is a machine learning expert with 8+ years of experience building production AI systems. She specializes in natural language processing and computer vision, ensuring our AI solutions are both powerful and practical for real-world business applications.",
      image: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@growthiqx.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Business Development Director",
      bio: "Michael has a proven track record in scaling technology companies and building strategic partnerships. He ensures our AI solutions align perfectly with business objectives and deliver measurable ROI for our clients.",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@growthiqx.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      bio: "Emily is passionate about ensuring our clients achieve their goals with AI. She works closely with businesses throughout their AI transformation journey, providing guidance, training, and ongoing support to maximize their success.",
      image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@growthiqx.com"
      }
    }
  ];

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
              Meet the People Behind GrowthIQX
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a team of innovators, engineers, and strategists dedicated to building AI 
              that empowers businesses, not replaces them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Member Grid */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-xl object-cover"
                      onLoad={() => console.log(`Image loaded successfully: ${member.image}`)}
                      onError={(e) => console.error(`Image failed to load: ${member.image}`, e)}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe AI should amplify human potential, not replace it. Our mission is to 
              democratize AI technology and make it accessible to businesses of all sizes, helping 
              them achieve unprecedented growth and efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <p className="text-gray-300">Businesses Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">79%</div>
                <p className="text-gray-300">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">2x</div>
                <p className="text-gray-300">Revenue Growth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Founder;