import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds, 130);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        aria-label="Main Navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-primary/90 backdrop-blur-md border-b border-border-subtle/80 py-3 shadow-lg shadow-black/40'
            : 'bg-primary/60 backdrop-blur-sm border-b border-border-subtle/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group rounded-lg focus-visible:ring-2 focus-visible:ring-accent-blue p-1"
            aria-label={`${portfolioData.identity.fullName} - Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden shrink-0">
              {portfolioData.identity.hasPhoto && portfolioData.identity.photoUrl ? (
                <img
                  src={portfolioData.identity.photoUrl}
                  alt={portfolioData.identity.fullName}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              ) : (
                <span className="font-mono text-xs font-bold text-accent-blue">
                  {portfolioData.identity.initials}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-text-primary group-hover:text-accent-blue transition-colors leading-none">
                {portfolioData.identity.shortName}
              </span>
              <span className="font-mono text-[9px] text-text-muted tracking-wider uppercase mt-0.5">
                AppSec // Pentester
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-blue ${
                    isActive
                      ? 'text-accent-blue bg-accent-blue/10 border border-accent-blue/20 font-semibold'
                      : 'text-text-muted hover:text-text-primary hover:bg-secondary/60 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Résumé PDF (opens in new tab)"
              className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-primary bg-accent-blue hover:bg-accent-blue-dark rounded-md transition-all duration-200 shadow-sm shadow-accent-blue/20 focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Résumé
            </a>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Résumé PDF"
              className="px-2.5 py-1 text-xs font-semibold text-primary bg-accent-blue hover:bg-accent-blue-dark rounded transition-colors"
            >
              CV
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-secondary border border-border-subtle text-text-muted hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-blue"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-accent-blue" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-secondary/95 backdrop-blur-xl border-b border-border-subtle px-4 pt-3 pb-5 space-y-1 animate-in fade-in duration-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent-blue bg-accent-blue/10 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-card'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
