"use client";

import React from "react";
// Lucide for UI icons (Arrows/Messages)
import { ChevronUp, MessageSquare } from "lucide-react";
// React Icons for Brand/Social icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { RiWechatFill } from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white pt-16 pb-8 px-6 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Us */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-6">
              About Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-6">
              For Students
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Search Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Online Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Global Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* For Universities */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-6">
              For Universities
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Advertise with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us & Socials */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-6">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              <SocialIcon icon={<FaFacebookF size={14} />} bg="bg-[#3b5998]" />
              <SocialIcon icon={<FaInstagram size={14} />} bg="bg-black" />
              <SocialIcon icon={<FaLinkedinIn size={14} />} bg="bg-[#0077b5]" />
              <SocialIcon icon={<FaYoutube size={14} />} bg="bg-[#ff0000]" />
              <SocialIcon icon={<FaTwitter size={14} />} bg="bg-[#55acee]" />
              <SocialIcon icon={<RiWechatFill size={16} />} bg="bg-[#1aad19]" />
            </div>
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                <span className="font-bold">Currency:</span>
              </p>
              <p className="text-gray-500">31 students applied today</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-500 text-center md:text-left">
            China Admissions © 2026 - Terms and Conditions - Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, bg }) => (
  <a
    href="#"
    className={`${bg} text-white w-8 h-8 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center`}
  >
    {icon}
  </a>
);

export default Footer;
