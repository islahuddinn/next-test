"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Smartphone,
  Zap,
  CheckCircle,
  Shield,
} from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function CustomEnterprise() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting user experiences that resonate and engage",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Developing dynamic websites that are powerful and efficient",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating innovative mobile apps that connect and inspire",
    },
    {
      icon: Zap,
      title: "Cutting Edge",
      description: "Latest technology solutions to lead the industry",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Delivering excellence and reliability in every product",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Protecting your digital assets with advanced security solutions",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
            <AnimatedSection direction="left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Custom Enterprise Software Development Services
                </h2>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  We prioritize cultivating lasting business partnerships as
                  your trusted software development partner
                </p>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-start">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-400 group-hover:text-orange-500 transition-colors duration-200"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
