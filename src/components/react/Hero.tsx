import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Avatar } from './Avatar';
import { TerminalPanel } from './TerminalPanel';
import { Crosshair, FileText, Mail, MapPin, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { identity, professionalIdentity, summary, education } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Identity & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tactical Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border-subtle shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-status-pulse" />
              <span className="font-mono text-[11px] font-medium text-text-muted tracking-wide">
                {professionalIdentity.statusLine}
              </span>
            </div>

            {/* Greeting & Main Name Heading */}
            <div className="space-y-1">
              <span className="font-mono text-sm text-accent-teal uppercase tracking-wider block">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
                {identity.fullName}
              </h1>
            </div>

            {/* Headline */}
            <p className="text-xl sm:text-2xl text-accent-blue font-semibold tracking-tight">
              "{professionalIdentity.headline}"
            </p>

            {/* Role Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Penetration Testing', 'Web Application Security', 'Network Security'].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium text-accent-blue bg-secondary border border-accent-blue/20 flex items-center gap-1.5 shadow-sm"
                >
                  <Crosshair className="w-3.5 h-3.5 text-accent-blue" />
                  {role}
                </span>
              ))}
            </div>

            {/* Supporting Text */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {summary.factual}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary bg-accent-blue hover:bg-accent-blue-dark rounded-lg transition-all duration-200 shadow-md shadow-accent-blue/15 focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <Crosshair className="w-4 h-4" />
                View My Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-primary bg-secondary hover:bg-card border border-border-subtle hover:border-accent-blue/40 rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <FileText className="w-4 h-4 text-accent-blue" />
                Download Résumé
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary bg-transparent hover:bg-secondary/60 border border-transparent hover:border-border-subtle rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <Mail className="w-4 h-4 text-accent-teal" />
                Let's Talk
              </a>
            </div>

            {/* Quick Meta Details */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-text-muted justify-center lg:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                {identity.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-accent-teal" />
                {education.institution} (GPA {education.gpa})
              </span>
            </div>
          </div>

          {/* Right Column: Avatar & Interactive Visual Terminal Panel */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            <div className="flex justify-center w-full lg:justify-end">
              <Avatar size="hero" />
            </div>
            <div className="w-full max-w-md">
              <TerminalPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
