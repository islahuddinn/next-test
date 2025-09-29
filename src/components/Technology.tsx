"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

export default function Technology() {
  const [activeTab, setActiveTab] = useState("Frameworks");

  const tabs = [
    "Frameworks",
    "Mobile App",
    "Artificial Intelligence",
    "DevOps",
    "CMS",
  ];

  const technologies = {
    Frameworks: [
      { name: "Ruby On Rails", logo: "🚂" },
      { name: "React Native", logo: "⚛️" },
      { name: "Django", logo: "🐍" },
      { name: "Laravel", logo: "🔴" },
      { name: "Flutter", logo: "🦋" },
      { name: "Spring Boot", logo: "🍃" },
      { name: "NodeJS", logo: "🟢" },
      { name: "ReactJS", logo: "⚛️" },
      { name: "jQuery", logo: "📦" },
    ],
    "Mobile App": [
      { name: "React Native", logo: "⚛️" },
      { name: "Flutter", logo: "🦋" },
      { name: "Swift", logo: "🍎" },
      { name: "Kotlin", logo: "🟠" },
      { name: "Ionic", logo: "⚡" },
    ],
    "Artificial Intelligence": [
      { name: "TensorFlow", logo: "🧠" },
      { name: "PyTorch", logo: "🔥" },
      { name: "OpenAI", logo: "🤖" },
      { name: "Scikit-learn", logo: "📊" },
      { name: "Keras", logo: "🔧" },
    ],
    DevOps: [
      { name: "Docker", logo: "🐳" },
      { name: "Kubernetes", logo: "☸️" },
      { name: "AWS", logo: "☁️" },
      { name: "Azure", logo: "🔵" },
      { name: "Jenkins", logo: "🔧" },
    ],
    CMS: [
      { name: "WordPress", logo: "📝" },
      { name: "Drupal", logo: "💧" },
      { name: "Joomla", logo: "🎯" },
      { name: "Strapi", logo: "🎪" },
      { name: "Contentful", logo: "📦" },
    ],
  };

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
                Our Software Development Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We are the architects of digital innovation. We continue our
                legacy to lead the Artificial Intelligence development, Mobile
                apps, and Web development with our exceptional custom/bespoke
                software development services for our esteemed clients globally.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Tabs */}
          <AnimatedSection direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Technology Grid */}
          <AnimatedSection direction="up" delay={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {technologies[activeTab as keyof typeof technologies].map(
                  (tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-orange-100 transition-colors duration-200">
                        {tech.logo}
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                        {tech.name}
                      </h3>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
