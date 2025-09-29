"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

export default function Blogs() {
  const [activeFilter, setActiveFilter] = useState("Technologies");

  const filters = ["Technologies", "AI", "Cases", "RoR", "Mobile", "Design"];

  const blogs = [
    {
      title:
        "Why Your Startup Needs A Fractional CTO: Benefits, Costs, And When To Hire One",
      category: "Technologies",
      image: "Content Marketing",
      color: "orange",
    },
    {
      title: "Monolithic To Headless Migration",
      category: "AI",
      image: "Mobile App",
      color: "blue",
    },
    {
      title:
        "Software Rescue Services: Turning Failed Software Into Success Stories",
      category: "Cases",
      image: "Blog Benefits",
      color: "orange",
    },
    {
      title: "Custom Odoo Theme Development Solutions",
      category: "RoR",
      image: "Portfolio",
      color: "green",
    },
  ];

  const filteredBlogs = blogs.filter(
    (blog) => blog.category === activeFilter || activeFilter === "Technologies"
  );

  return (
    <section id="blog" className="py-20 lg:py-32 bg-white">
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
                Our Blogs
              </h2>
            </motion.div>
          </AnimatedSection>

          {/* Filter Buttons */}
          <AnimatedSection direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {filteredBlogs.map((blog, index) => (
              <AnimatedSection
                key={blog.title}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Blog Image */}
                  <div className="relative overflow-hidden h-48">
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        blog.color === "orange"
                          ? "bg-gradient-to-br from-orange-100 to-orange-200"
                          : blog.color === "blue"
                          ? "bg-gradient-to-br from-blue-100 to-blue-200"
                          : "bg-gradient-to-br from-green-100 to-green-200"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400 mb-2">
                          {blog.image.charAt(0)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {blog.image}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200 line-clamp-3">
                      {blog.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Button */}
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
                ALL Blogs
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
