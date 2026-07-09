'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">AI-PDLC Platform</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Intelligent multi-agent system for autonomous orchestration of subsystem design, simulation, and review.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-accent-orange transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Agents</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Tools</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-accent-orange transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-accent-orange transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-accent-orange transition-colors text-slate-300 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-accent-blue transition-colors text-slate-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-accent-cyan transition-colors text-slate-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-accent-purple transition-colors text-slate-300 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 AI-PDLC Platform. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent-orange transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
