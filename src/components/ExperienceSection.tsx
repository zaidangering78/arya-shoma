import { Briefcase, Award, Building2, Wrench, Users } from 'lucide-react';
import type { ExperienceItem, ExperienceType } from '../types/portfolio';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

const TYPE_ICON: Record<ExperienceType, typeof Briefcase> = {
  'PKL / Magang': Building2,
  'Proyek Instalasi': Wrench,
  'Praktik Sekolah': Briefcase,
  Pelatihan: Award,
  Organisasi: Users,
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="pengalaman" className="py-16 lg:py-24 bg-[#060B16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
            04. Rekam Jejak Praktik & Lapangan
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Pengalaman
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Perjalanan praktik sekolah, Praktik Kerja Lapangan (PKL), proyek instalasi bangunan, kepemimpinan organisasi, dan pelatihan sertifikasi.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative space-y-6 before:hidden md:before:block before:absolute before:left-6 before:top-3 before:bottom-3 before:w-px before:bg-slate-800">
          {experiences.map((exp) => {
            const Icon = TYPE_ICON[exp.type];
            return (
              <article
                key={exp.id}
                className="relative md:pl-16 group"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-[#0C1428] border border-slate-800 group-hover:border-yellow-400/60 items-center justify-center text-blue-400 group-hover:text-yellow-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="rounded-2xl bg-[#0C1428] border border-slate-800 group-hover:border-slate-700 transition-colors p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-yellow-400">{exp.type}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-300">{exp.organization}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.location}</span>
                    </div>
                    <span className="font-mono text-blue-300 tabular-nums">{exp.period}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-display font-semibold text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <span className="font-mono text-yellow-400 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
