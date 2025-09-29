"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Development", href: "#services" },
      { name: "Cutting Edge", href: "#services" },
      { name: "Quality Assurance (QA)", href: "#services" },
      { name: "Cyber Security", href: "#services" },
    ],
    products: [
      { name: "Uddogi: NBR approved VAT software", href: "#products" },
      { name: "Biyeta: A matrimonial SaaS", href: "#products" },
    ],
    company: [
      { name: "Services", href: "#services" },
      { name: "Contact Us", href: "#contact" },
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Instagram, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Dribbble" },
    { icon: Phone, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold mb-6">
                    Grow Your Online Business and Improve Customer Retention
                  </h3>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-600">+880 1537-570379</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-600">
                        House D/36, Block E, Lalmatia, Dhaka-1207
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <span className="text-orange-500 font-medium">
                        Get Estimate
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Services Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold mb-6">Services</h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Products Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold mb-6">Products</h4>
                  <ul className="space-y-3">
                    {footerLinks.products.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Company Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold mb-6">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 text-center md:text-left"
              >
                <p>&copy; {currentYear} DeshIT-BD.ltd</p>
              </motion.div>

              {/* Center Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                >
                  Sitemap
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </motion.div>

              {/* Right Side */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
              >
                <div className="text-gray-600 text-center md:text-right">
                  <p>
                    Download Brochure:{" "}
                    <span className="text-orange-500">English</span>
                  </p>
                </div>
                <div className="text-gray-600">
                  <p>info@deshit-bd.com</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
