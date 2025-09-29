"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "I have been working with Deshlt-BD since 2011. My contact person has now taken on the role of CTO. With the help of his team, he takes full responsibility for all tech-related things from daily maintenance to servers and security. Recently, Deshlt-BD also took over product development. I highly trust Deshlt-BD and am glad to work with such a committed and competent team. I can recommend Deshlt-BD for any web or Ruby on Rails project.",
      author: "Bodilija Abelsson",
      title: "Founder of SimpleSignup.se",
      rating: 5,
    },
    {
      text: "Deshlt-BD has been an exceptional partner for our software development needs. Their expertise and dedication have helped us achieve our goals efficiently and effectively.",
      author: "John Smith",
      title: "CEO of TechCorp",
      rating: 5,
    },
    {
      text: "The team at Deshlt-BD is professional, reliable, and delivers high-quality solutions. We are very satisfied with their services and would recommend them to anyone.",
      author: "Sarah Johnson",
      title: "CTO of InnovateLab",
      rating: 5,
    },
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
                Clients Testimonials
              </h2>
            </motion.div>
          </AnimatedSection>

          {/* Testimonial Content */}
          <AnimatedSection direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-gray-200">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-gray-600 leading-relaxed mb-8 pl-8"
                >
                  {testimonials[currentTestimonial].text}
                </motion.p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pl-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-lg">
                      {testimonials[currentTestimonial].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-orange-600 text-sm">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
