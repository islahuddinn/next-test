"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Shield,
} from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js", "TypeScript", "API Integration"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      features: [
        "Figma Design",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native",
        "Flutter",
        "iOS Development",
        "Android Development",
      ],
    },
    {
      icon: Globe,
      title: "E-commerce",
      description:
        "Complete e-commerce solutions with payment integration and inventory management.",
      features: [
        "Shopify",
        "WooCommerce",
        "Payment Gateways",
        "Inventory Management",
      ],
    },
    {
      icon: Database,
      title: "Backend Services",
      description:
        "Robust backend systems and APIs to power your applications.",
      features: ["REST APIs", "GraphQL", "Database Design", "Cloud Services"],
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description:
        "Comprehensive security solutions and ongoing maintenance services.",
      features: [
        "Security Audits",
        "SSL Certificates",
        "Regular Updates",
        "24/7 Monitoring",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection direction="up">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We offer a comprehensive range of digital services to help your
                business thrive in the modern digital landscape.
              </p>
            </motion.div>
          </AnimatedSection>

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
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  {/* Icon */}
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection direction="up" delay={0.8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Let&apos;s discuss your project and bring your ideas to life.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Your Project
                </motion.button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
