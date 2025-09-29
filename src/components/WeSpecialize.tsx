"use client";

import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Globe,
  Cloud,
  Users,
  Settings,
  CreditCard,
  FileText,
  GraduationCap,
} from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function WeSpecialize() {
  const services = [
    {
      icon: Star,
      title: "Portal",
      description:
        "Get Your Customized Portal to Engage, Collaborate, and Navigate the Digital Landscape.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Showcase your Digital Storefronts with dynamic E-commerce Development Solutions for Lasting Success.",
    },
    {
      icon: Globe,
      title: "Brand Website",
      description:
        "Craft a Dynamic Website that articulates your vision and captivates your audience, amplifying your brand's unique identity.",
    },
    {
      icon: Cloud,
      title: "SaaS",
      description:
        "Step into the future of digital innovation with SaaS. We're here to turn your ideas into reality through custom SaaS dev.",
    },
    {
      icon: Users,
      title: "CRM",
      description:
        "We specialize in crafting robust CRM solutions meticulously designed to enhance and elevate every aspect of your customer interactions.",
    },
    {
      icon: Settings,
      title: "ERP",
      description:
        "Design, Develop, and Deploy Customized ERP Solutions Tailored to Streamline and Maximize Efficiency in Your Business's Resource Planning.",
    },
    {
      icon: CreditCard,
      title: "POS",
      description:
        "Innovate at checkout with a tailored POS system designed to facilitate swift and secure transactions.",
    },
    {
      icon: FileText,
      title: "CMS",
      description:
        "We specialize in customized CMS development to control, updates, and amplification of online content.",
    },
    {
      icon: GraduationCap,
      title: "LMS",
      description:
        "We are dedicated to crafting bespoke Learning Management Systems (LMS) that empower education.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                We Specialize
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We specialize in providing on-demand software solutions across
                various sectors. Our expertise covers a wide range of domains,
                ensuring tailored solutions to meet diverse business needs.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex justify-start">
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
