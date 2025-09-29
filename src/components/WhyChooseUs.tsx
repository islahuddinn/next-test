"use client";

import { motion } from "framer-motion";
import { Search, FileText, Eye, Network } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function WhyChooseUs() {
  const processSteps = [
    { icon: Search, label: "Research" },
    { icon: FileText, label: "Development" },
    { icon: Eye, label: "Testing" },
    { icon: Network, label: "Deployment" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <AnimatedSection direction="left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Why Choose Us
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We have been thriving for 7 years. Choose us for
                    cutting-edge expertise and dedicated service. As
                    Bangladesh&apos;s premier software company, we deliver
                    tailored solutions with a team of top-tier developers. Rely
                    on us for innovative, efficient, and reliable results that
                    drive your business forward.
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

            {/* Right Content - Development Process */}
            <div>
              <AnimatedSection direction="right">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Development
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Creating high-quality, scalable software using the latest
                    technologies. Designing web and mobile app.
                  </p>

                  {/* Circular Process Diagram */}
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Main Circle */}
                    <div className="absolute inset-0 border-2 border-gray-300 rounded-full"></div>

                    {/* Process Steps */}
                    {processSteps.map((step, index) => {
                      const angle = index * 90 - 90; // Start from top
                      const x = Math.cos((angle * Math.PI) / 180) * 120 + 160;
                      const y = Math.sin((angle * Math.PI) / 180) * 120 + 160;

                      return (
                        <motion.div
                          key={step.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="absolute w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                          style={{ left: x, top: y }}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      );
                    })}

                    {/* Connecting Lines */}
                    {processSteps.map((_, index) => {
                      const angle = index * 90 - 90;
                      const x1 = Math.cos((angle * Math.PI) / 180) * 120 + 160;
                      const y1 = Math.sin((angle * Math.PI) / 180) * 120 + 160;
                      const x2 =
                        Math.cos(((angle + 90) * Math.PI) / 180) * 120 + 160;
                      const y2 =
                        Math.sin(((angle + 90) * Math.PI) / 180) * 120 + 160;

                      return (
                        <motion.line
                          key={index}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#d1d5db"
                          strokeWidth="2"
                          className="absolute"
                        />
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
