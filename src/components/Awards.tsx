"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Shield } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function Awards() {
  const awards = [
    {
      title: "BASIS Outsourcing Award",
      description: "MOST REVIEWED SOFTWARE DEVELOPMENT COMPANIES",
      icon: Award,
      color: "gray",
    },
    {
      title: "US Department of State-Grant",
      description: "TOP SOFTWARE DEVELOPMENT COMPANY",
      icon: Trophy,
      color: "blue",
    },
    {
      title: "National Productivity Award",
      description: "Top Software Testing Companies",
      icon: Star,
      color: "gray",
    },
    {
      title: "CBI Award, Netherlands",
      description: "TOP COMPANY Software Developers 2023",
      icon: Shield,
      color: "gray",
    },
    {
      title: "Red Herring Asia Award",
      description: "RED 100 WINNER",
      icon: Award,
      color: "gray",
    },
    {
      title: "Microsoft No. Asia Award",
      description: "ALORSHDE",
      icon: Trophy,
      color: "gray",
    },
    {
      title: "Asia 2011 Award",
      description: "ASIA2011",
      icon: Star,
      color: "gray",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
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
                Widely Endorsed Software Company
              </h2>
            </motion.div>
          </AnimatedSection>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <AnimatedSection
                key={award.title}
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
                  {/* Award Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                      <award.icon className="w-10 h-10 text-gray-600 group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    {/* Laurel wreath */}
                    <div className="absolute -inset-2 border-2 border-gray-300 rounded-full opacity-50"></div>
                  </div>

                  {/* Award Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600">{award.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
