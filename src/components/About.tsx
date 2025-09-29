"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock, Shield } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function About() {
  const serviceCards = [
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "Our Dedicated Team of expert developers will work exclusively on your projects. They'll ensure the progress, flexibility, and seamless integration with your existing processes, delivering top-notch results tailored to your on-demand needs.",
    },
    {
      icon: Award,
      title: "Staff Augmentation",
      description:
        "Engage top-tier professionals from our talent pool to strengthen your existing team. Our highly skilled individuals will accelerate project growth, and boost productivity without the need for long-term hiring commitments.",
    },
    {
      icon: Clock,
      title: "Project Deliveries",
      description:
        "From concept to completion, we'll handle every aspect of your project and ensure the final product will be completely satisfactory. Expect timely, high-quality results and a seamless experience as we manage end-to-end development.",
    },
  ];

  const coreValues = [
    {
      icon: CheckCircle,
      title: "Accountability",
      description:
        "Client satisfaction defines our success, measured by the smiles we address.",
    },
    {
      icon: Clock,
      title: "Transparency",
      description:
        "We maintain an employee policy, requiring timely follow-up.",
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description:
        "Rest assured, your idea stays secure, confidentiality is our practice and enduring.",
    },
    {
      icon: Users,
      title: "Relationships",
      description:
        "Our talented and dedicated team works together enthusiastically to materialize your ideas.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {serviceCards.map((card, index) => (
              <AnimatedSection
                key={card.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <card.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
            {/* Content */}
            <div>
              <AnimatedSection direction="left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    About Us
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Deshit-BD is one of the best software companies in
                    Bangladesh. With over 14+ years of experience, delivering
                    innovative and tailored software solutions. Our journey has
                    been driven by a passion for technology and a commitment to
                    excellence, helping our clients navigate the complexities of
                    the digital landscape.
                  </p>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    At Deshit-BD, we believe in the power of collaboration and
                    the impact of well-crafted software. Our team of highly
                    skilled developers, designers, and strategists work closely
                    with our clients to understand their unique needs and
                    challenges. We take pride in transforming ideas into robust,
                    scalable solutions that drive growth and success.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
                  >
                    Our Team
                  </motion.button>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Team Image */}
            <div>
              <AnimatedSection direction="right">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-orange-600" />
                      </div>
                      <p className="text-gray-600 font-medium">Team Photo</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedSection
                key={value.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
