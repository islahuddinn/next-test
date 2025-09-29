"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

export default function Portfolio() {
  const projects = [
    {
      title: "Pricing & Services",
      description: "A comprehensive pricing platform with service showcases",
      image: "/api/placeholder/400/300",
      tags: ["Web App", "Pricing", "Services"],
      liveUrl: "#",
      githubUrl: "#",
      color: "blue",
    },
    {
      title: "Clients & Community",
      description: "Community management platform with client insights",
      image: "/api/placeholder/400/300",
      tags: ["Community", "Management", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      color: "green",
    },
    {
      title: "Plants E-commerce",
      description: "Nature-focused e-commerce platform for plant lovers",
      image: "/api/placeholder/400/300",
      tags: ["E-commerce", "Plants", "Nature"],
      liveUrl: "#",
      githubUrl: "#",
      color: "dark",
    },
    {
      title: "Dev Team Process",
      description: "Development team management and process optimization",
      image: "/api/placeholder/400/300",
      tags: ["DevOps", "Team", "Process"],
      liveUrl: "#",
      githubUrl: "#",
      color: "orange",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
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
                Our Projects & Portfolio
              </h2>
            </motion.div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, rotate: 2 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        project.color === "blue"
                          ? "bg-gradient-to-br from-blue-100 to-blue-200"
                          : project.color === "green"
                          ? "bg-gradient-to-br from-green-100 to-green-200"
                          : project.color === "dark"
                          ? "bg-gradient-to-br from-gray-800 to-gray-900"
                          : "bg-gradient-to-br from-orange-100 to-orange-200"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-400 mb-2">
                          {project.title.charAt(0)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {project.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + tagIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
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
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Read More Case Studies
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
