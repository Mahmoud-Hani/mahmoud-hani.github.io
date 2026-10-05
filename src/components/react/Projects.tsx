import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="rounded-2xl bg-card border border-border-subtle p-6 sm:p-8 flex flex-col justify-between hover:border-accent-blue/40 transition-all duration-300 shadow-md group relative overflow-hidden"
        >
          <div className="space-y-4">
            {/* Case Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <span className="font-mono text-xs font-bold text-accent-blue tracking-wider">
                {proj.caseId}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold text-accent-teal bg-accent-teal/10 border border-accent-teal/20">
                {proj.status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
              {proj.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed">
              {proj.description}
            </p>

            {/* Techniques */}
            <div className="pt-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-2">
                Core Techniques &amp; Focus:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {proj.techniques.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-secondary text-text-secondary border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono text-text-dark">
            <span>SECURITY_LAB // VERIFIED</span>
            <span className="text-accent-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
              Details <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
