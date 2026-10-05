import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import type { SkillCategory } from '../../data/portfolio';
import { 
  Code2, 
  Monitor, 
  Network, 
  ShieldAlert, 
  Wrench, 
  Users2,
  Terminal,
  Layers
} from 'lucide-react';

export const SkillsFilter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = portfolioData.skillCategories;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-accent-blue" />;
      case 'operating-systems':
        return <Monitor className="w-4 h-4 text-accent-teal" />;
      case 'networking':
        return <Network className="w-4 h-4 text-accent-blue" />;
      case 'cybersecurity':
        return <ShieldAlert className="w-4 h-4 text-accent-teal" />;
      case 'security-tools':
        return <Wrench className="w-4 h-4 text-accent-blue" />;
      case 'interpersonal':
        return <Users2 className="w-4 h-4 text-accent-teal" />;
      default:
        return <Terminal className="w-4 h-4 text-accent-blue" />;
    }
  };

  const displayedCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <div className="w-full space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        <button
          onClick={() => setActiveCategory('all')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-accent-blue text-primary shadow-sm font-semibold'
              : 'bg-secondary text-text-muted hover:text-text-primary hover:bg-card border border-border-subtle'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          ALL CATEGORIES
        </button>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200 ${
                isActive
                  ? 'bg-accent-blue text-primary shadow-sm font-semibold'
                  : 'bg-secondary text-text-muted hover:text-text-primary hover:bg-card border border-border-subtle'
              }`}
            >
              {getCategoryIcon(cat.id)}
              {cat.title.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl bg-card border border-border-subtle p-5 hover:border-accent-blue/40 transition-all duration-300 shadow-md group relative overflow-hidden"
          >
            {/* Tactical top-corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-accent-blue/15 to-transparent pointer-events-none" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue/40" />

            {/* Header */}
            <div className="flex items-center gap-2.5 pb-3.5 mb-4 border-b border-border-subtle/80">
              <div className="p-2 rounded-lg bg-secondary border border-border-subtle">
                {getCategoryIcon(cat.id)}
              </div>
              <div>
                <h3 className="font-semibold text-text-primary text-sm">
                  {cat.title}
                </h3>
                <span className="font-mono text-[10px] text-text-dark uppercase tracking-wider">
                  {cat.skills.length} VERIFIED ITEMS
                </span>
              </div>
            </div>

            {/* Badges / Items */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary/90 border border-border-subtle/80 text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-150 select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsFilter;
