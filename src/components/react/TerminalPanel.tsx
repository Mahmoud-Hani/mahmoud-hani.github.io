import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Terminal, Shield, CheckCircle2 } from 'lucide-react';

export const TerminalPanel: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-card border border-border-subtle overflow-hidden shadow-2xl shadow-black/60 font-mono text-xs text-text-secondary select-none">
      {/* Terminal Header */}
      <div className="px-4 py-2.5 bg-secondary border-b border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[11px] text-text-muted font-mono flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent-blue" />
            sec-ops@atlam-terminal:~
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] text-accent-teal bg-accent-teal/10 px-2 py-0.5 rounded border border-accent-teal/20">
            <Shield className="w-3 h-3" />
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-3.5 bg-primary/70 backdrop-blur-sm">
        <div>
          <div className="text-text-muted flex items-center gap-1.5">
            <span className="text-accent-blue font-bold">$</span>
            <span className="text-text-primary">whoami</span>
          </div>
          <div className="text-accent-teal mt-0.5 pl-3 border-l border-accent-teal/30">
            &gt; {portfolioData.identity.fullName}
          </div>
        </div>

        <div>
          <div className="text-text-muted flex items-center gap-1.5">
            <span className="text-accent-blue font-bold">$</span>
            <span className="text-text-primary">specialization</span>
          </div>
          <div className="mt-1 pl-3 border-l border-accent-blue/30 space-y-0.5">
            <div className="text-accent-blue flex items-center gap-1.5">
              &gt; Penetration Testing
            </div>
            <div className="text-accent-blue flex items-center gap-1.5">
              &gt; Web Application Security
            </div>
            <div className="text-accent-blue flex items-center gap-1.5">
              &gt; Network Security
            </div>
          </div>
        </div>

        <div>
          <div className="text-text-muted flex items-center gap-1.5">
            <span className="text-accent-blue font-bold">$</span>
            <span className="text-text-primary">status</span>
          </div>
          <div className="mt-1 pl-3 border-l border-accent-teal/30 space-y-0.5">
            <div className="text-text-secondary flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-teal shrink-0" />
              <span>Cybersecurity Training (DEPI / ITI / NTI)</span>
            </div>
            <div className="text-text-secondary flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-teal shrink-0" />
              <span>Security Labs &amp; Vulnerability Assessment</span>
            </div>
            <div className="text-accent-blue font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-status-pulse" />
              <span>Available for entry-level opportunities</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-border-subtle/50 flex items-center justify-between text-[10px] text-text-dark">
          <span>HOST: CAIRO_EG [SEC-NODE]</span>
          <span className="font-mono">ACADEMIC: BENHA CS&amp;AI (GPA: 3.6)</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalPanel;
