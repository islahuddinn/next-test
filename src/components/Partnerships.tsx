"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

export default function Partnerships() {
  const partners = [
    { name: "AWS", logo: "☁️" },
    { name: "ORACLE", logo: "🔴" },
    { name: "Odoo", logo: "🟢" },
    { name: "ISO", logo: "🌍" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
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
                Partnerships & Certifications
              </h2>
            </motion.div>
          </AnimatedSection>

          {/* Partners Grid */}
          <AnimatedSection direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-lg font-semibold text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                      {partner.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
