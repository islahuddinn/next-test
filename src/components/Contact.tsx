"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Button from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-black">
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
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Let&apos;s Make Things Happen!
                  </h2>

                  {/* Team Image */}
                  <div className="w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-gray-400" />
                      </div>
                      <p className="text-gray-400 font-medium">Team Photo</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white italic text-lg mb-6">
                    &quot;Do not suffer novices, hire a skilled team&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        S
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Sajib</h4>
                      <p className="text-gray-400 text-sm">COO, Deshit-BD</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Right Content - Contact Form */}
            <div>
              <AnimatedSection direction="right">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Contact Us
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Query */}
                    <div>
                      <label
                        htmlFor="query"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Query*
                      </label>
                      <textarea
                        id="query"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Send
                      </Button>
                    </motion.div>

                    <p className="text-gray-500 text-sm text-center">
                      We will contact you when you query submission.
                    </p>
                  </form>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
