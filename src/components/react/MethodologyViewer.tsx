import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { 
  Search, 
  Binary, 
  KeyRound, 
  Flame, 
  ArrowUpRight, 
  Network, 
  CheckCircle, 
  FileCheck2,
  Info,
  Shield
} from 'lucide-react';

export const MethodologyViewer: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const stages = portfolioData.methodology;

  // Icons matching each stage
  const stageIcons = [
    <Search key="1" className="w-4 h-4" />,
    <Binary key="2" className="w-4 h-4" />,
    <KeyRound key="3" className="w-4 h-4" />,
    <Flame key="4" className="w-4 h-4" />,
    <ArrowUpRight key="5" className="w-4 h-4" />,
    <Network key="6" className="w-4 h-4" />,
    <CheckCircle key="7" className="w-4 h-4" />,
    <FileCheck2 key="8" className="w-4 h-4" />,
  ];

  // Specific verified techniques & verified tools mapped strictly to CV tools
  const stageDetails: Record<number, { focusAreas: string[]; confirmedTools: string[] }> = {
    0: {
      focusAreas: ['Passive Reconnaissance', 'Attack Surface Mapping', 'OSINT & Subdomain Discovery'],
      confirmedTools: ['Subfinder', 'httpx'],
    },
    1: {
      focusAreas: ['Port & Service Scanning', 'Endpoint & Parameter Discovery', 'Content Discovery'],
      confirmedTools: ['Nmap', 'ffuf', 'Gobuster', 'Katana'],
    },
    2: {
      focusAreas: ['Authentication Testing', 'Input Validation Checks', 'Vulnerability Assessment'],
      confirmedTools: ['Burp Suite', 'Nuclei', 'SQLMap'],
    },
    3: {
      focusAreas: ['OWASP Top 10 Flaws Verification', 'Web & Network Exploitation Practice', 'Vulnerability Validation'],
      confirmedTools: ['Burp Suite', 'Metasploit Framework', 'SQLMap'],
    },
    4: {
      focusAreas: ['Privilege Boundaries Assessment', 'Misconfiguration Checks', 'Access Control Testing'],
      confirmedTools: ['Linux CLI', 'Kali Linux Environment'],
    },
    5: {
      focusAreas: ['Network Protocol Analysis', 'Traffic & Routing Inspection', 'Segment Isolation Verification'],
      confirmedTools: ['Wireshark', 'TCP/IP Analysis'],
    },
    6: {
      focusAreas: ['False Positive Reduction', 'Reproducible Proof-of-Concept', 'Impact & Severity Verification'],
      confirmedTools: ['Burp Suite', 'Wireshark'],
    },
    7: {
      focusAreas: ['Vulnerability Documentation', 'Actionable Mitigation Guidance', 'Technical Summary'],
      confirmedTools: ['Git', 'GitHub', 'Markdown Reports'],
    },
  };

  const currentStage = stages[activeStageIndex];
  const currentDetail = stageDetails[activeStageIndex];

  return (
    <div className="w-full space-y-8">
      {/* 8-Stage Timeline Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {stages.map((stage, idx) => {
          const isActive = activeStageIndex === idx;
          return (
            <button
              key={stage.number}
              onClick={() => setActiveStageIndex(idx)}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 group relative ${
                isActive
                  ? 'bg-secondary border-accent-blue shadow-lg shadow-accent-blue/10'
                  : 'bg-card/80 border-border-subtle hover:border-border-hover hover:bg-secondary/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-accent-blue' : 'text-text-dark group-hover:text-text-muted'}`}>
                  {stage.number}
                </span>
                <div className={`p-1 rounded-md ${isActive ? 'text-accent-blue bg-accent-blue/10' : 'text-text-dark'}`}>
                  {stageIcons[idx]}
                </div>
              </div>
              <span className={`text-xs font-medium line-clamp-2 leading-snug ${isActive ? 'text-text-primary font-semibold' : 'text-text-muted group-hover:text-text-secondary'}`}>
                {stage.name}
              </span>
              
              {/* Bottom active indicator */}
              {isActive && (
                <div className="absolute bottom-0 inset-x-2 h-0.5 bg-accent-blue rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <div className="rounded-2xl bg-card border border-border-subtle p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-radial-glow opacity-60 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary border border-border-subtle">
              <span className="font-mono text-xs font-bold text-accent-blue">STAGE {currentStage.number} OF 08</span>
              <span className="text-border-subtle">•</span>
              <span className="font-mono text-[11px] text-text-muted uppercase">Framework Concept</span>
            </div>

            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span>{currentStage.name}</span>
            </h3>

            <p className="text-text-secondary text-base leading-relaxed">
              {currentStage.description}
            </p>

            {/* Focus Areas */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                Key Methodology Components:
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentDetail.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-secondary text-text-secondary border border-border-subtle"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Confirmed Tools & Info */}
          <div className="lg:w-72 shrink-0 space-y-4">
            <div className="p-4 rounded-xl bg-secondary border border-border-subtle space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-blue flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Verified Toolset:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentDetail.confirmedTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-card text-accent-blue border border-accent-blue/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-primary/40 border border-border-subtle/50 text-[11px] text-text-dark flex items-start gap-2">
              <Info className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
              <span>
                Standard penetration-testing lifecycle reference. Tools and concepts align with verified training labs and security modules.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyViewer;
