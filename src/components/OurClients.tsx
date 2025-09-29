"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

export default function OurClients() {
  const clients = [
    "United Nations",
    "UNDP",
    "International Trade Centre",
    "PWC",
    "ICT",
    "University International Bangladesh",
    "Mulberry Systems",
    "Rhin Academy",
    "Grameenphone",
    "Banglalink",
    "Robi",
    "NOKIA",
    "Vivo",
    "BC",
    "Berkeley",
    "Red Digital",
    "Simple Signer",
    "CZM",
    "Bangladesh Army",
    "Unilever",
    "Citygroup",
    "HEMAS",
    "HERFY",
    "KSRM",
    "The Daily Star",
    "School",
    "Triplogic",
    "Bikroy",
    "Quickteller",
    "EQUITY",
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
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
                Our Clients
              </h2>
            </motion.div>
          </AnimatedSection>

          {/* Clients Grid */}
          <AnimatedSection direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.02,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <div className="w-24 h-16 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-200 text-center">
                      {client}
                    </span>
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
