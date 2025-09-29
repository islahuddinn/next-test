"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <AnimatedSection direction="left" delay={0.2}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Experience Excellence With Top Software Company Of Bangladesh
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.4}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Get your application developed by experts. As Bangladesh&apos;s
                leading software company, we create top-notch custom software
                that meets our client&apos;s requirements.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mb-12"
              >
                <Button variant="outline" size="lg" className="group">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right Content - Abstract Graphic */}
          <div className="relative">
            <AnimatedSection direction="right" delay={0.8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative w-full h-96 flex items-center justify-center"
              >
                {/* Abstract wireframe sphere */}
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border-2 border-orange-300 rounded-full opacity-30"></div>
                  <div className="absolute inset-4 border-2 border-orange-300 rounded-full opacity-20"></div>
                  <div className="absolute inset-8 border-2 border-orange-300 rounded-full opacity-10"></div>

                  {/* Dots representing network nodes */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + i * 0.05 }}
                      className="absolute w-2 h-2 bg-orange-400 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats Section */}
        <AnimatedSection direction="up" delay={1.0}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
          >
            {[
              { number: "14", label: "Years of Experience" },
              { number: "175", label: "Delivered Projects" },
              { number: "22", label: "Countries Served" },
              { number: "50", label: "Developers" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
