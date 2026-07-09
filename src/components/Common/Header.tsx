'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-accent-orange to-accent-blue">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">AI-PDLC</h1>
              <p className="text-xs text-slate-400">Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-accent-orange transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#agents"
              className="text-slate-300 hover:text-accent-orange transition-colors"
            >
              Agents
            </Link>
            <Link
              href="#tools"
              className="text-slate-300 hover:text-accent-orange transition-colors"
            >
              Tools
            </Link>
            <Link
              href="#workflow"
              className="text-slate-300 hover:text-accent-orange transition-colors"
            >
              Workflow
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden sm:block px-6 py-2 rounded-lg bg-gradient-to-r from-accent-orange to-accent-blue text-white font-semibold hover:shadow-lg hover:shadow-accent-orange/50 transition-all transform hover:scale-105">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#agents"
              className="block px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Agents
            </Link>
            <Link
              href="#tools"
              className="block px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Tools
            </Link>
            <Link
              href="#workflow"
              className="block px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Workflow
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
