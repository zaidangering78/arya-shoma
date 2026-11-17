import { useState } from 'react';
import {
  Activity,
  Anchor,
  Cable,
  Cpu,
  FileCode,
  Gauge,
  GitBranch,
  Lightbulb,
  Plug,
  Server,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import type { SkillCategory, SkillItem } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillItem[];
}

const CATEGORIES: SkillCategory[] = [
  'Semua',
  'Instalasi & Daya',
  'Panel & Kontrol',
  'Pengukuran & K3',
];

const ICON_MAP = {
  Zap,
  Cpu,
  Lightbulb,
  Plug,
  Server,
  Cable,
  FileCode,
  GitBranch,
  Gauge,
  Activity,
  Anchor,
  Wrench,
  ShieldCheck,
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('Semua');

  const filteredSkills =
    selectedCategory === 'Semua'
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <section id="keahlian" className="py-16 lg:py-24 bg-[#070D1B] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
              03. Kompetensi Teknis
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Keahlian Kelistrikan
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Penguasaan instalasi daya 1 & 3 fasa, pengawatan panel kontrol, pembacaan diagram teknis, pengujian alat ukur, hingga standar keselamatan kerja K3.
            </p>
          </div>

          {/* Category Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filter kategori keahlian"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0D162B] border border-slate-800 self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.iconName];
            return (
              <article
                key={skill.id}
                className="group rounded-2xl bg-[#0C1428] border border-slate-800 hover:border-blue-500/50 transition-colors p-6 flex flex-col justify-between gap-5"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-yellow-400 shrink-0 group-hover:bg-blue-600/25 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {skill.standard}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-display font-semibold text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-400">{skill.category}</span>
                    <span className="font-mono font-semibold text-yellow-400 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-yellow-400 transition-transform duration-300 origin-left"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
