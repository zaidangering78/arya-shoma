import { useEffect, useState } from 'react';
import { Maximize2, X, Wrench, CheckCircle2 } from 'lucide-react';
import type { ProjectCategory, ProjectItem } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

const CATEGORIES: ProjectCategory[] = [
  'Semua',
  'Instalasi Bangunan',
  'Panel & Kontrol',
  'Grounding & Simulasi',
];

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Semua');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [zoomFullImage, setZoomFullImage] = useState(false);

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomFullImage) {
          setZoomFullImage(false);
        } else {
          setActiveProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomFullImage]);

  return (
    <section id="proyek" className="py-16 lg:py-24 bg-[#070D1B] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
              05. Portofolio Pekerjaan & Simulasi
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Proyek Kelistrikan
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Kumpulan proyek instalasi listrik rumah tinggal, penerangan, perakitan panel, rangkaian kontrol motor, grounding, dan simulasi sistem. Klik gambar untuk melihat ukuran penuh.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter kategori proyek"
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
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-[#0C1428] border border-slate-800 hover:border-blue-500/50 transition-colors overflow-hidden flex flex-col"
            >
              <button
                type="button"
                onClick={() => {
                  setActiveProject(project);
                  setZoomFullImage(true);
                }}
                aria-label={`Lihat foto penuh proyek ${project.title}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#081020] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  fallbackTitle={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#060B16]/85 via-transparent to-transparent"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#060B16]/75 border border-slate-700/80 text-slate-200 flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:text-yellow-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </span>
                <span className="absolute bottom-3 left-3 right-3 text-left text-[11px] font-mono text-yellow-400 truncate">
                  {project.voltageSpec}
                </span>
              </button>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">
                    {project.projectType} <span aria-hidden="true">·</span>{' '}
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </p>
                  <h3 className="mt-1.5 text-base font-display font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-3">
                  <p className="text-xs text-slate-400 truncate">
                    Alat: <span className="text-slate-300">{project.tools.slice(0, 2).join(', ')}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(project);
                      setZoomFullImage(false);
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-[#121D38] hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Detail Proyek
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Lightbox & Full Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => {
            setActiveProject(null);
            setZoomFullImage(false);
          }}
        >
          <div
            className={`relative w-full rounded-2xl bg-[#0B1325] border border-slate-700/80 overflow-hidden shadow-2xl my-auto ${
              zoomFullImage ? 'max-w-5xl' : 'max-w-3xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-800">
              <div>
                <p className="text-xs font-mono text-yellow-400">
                  {activeProject.projectType} · {activeProject.voltageSpec}
                </p>
                <h3
                  id="project-modal-title"
                  className="text-lg font-display font-bold text-white mt-0.5"
                >
                  {activeProject.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setZoomFullImage((prev) => !prev)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 cursor-pointer whitespace-nowrap"
                >
                  {zoomFullImage ? 'Lihat Detail Teknis' : 'Perbesar Gambar'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null);
                    setZoomFullImage(false);
                  }}
                  aria-label="Tutup modal proyek"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {zoomFullImage ? (
              <div className="bg-[#060B16] p-3 sm:p-5 flex items-center justify-center">
                <ImageWithFallback
                  src={activeProject.image}
                  alt={activeProject.title}
                  fallbackTitle={activeProject.title}
                  className="max-h-[75vh] w-auto rounded-xl object-contain"
                />
              </div>
            ) : (
              <div className="p-5 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-[#060B16]">
                  <ImageWithFallback
                    src={activeProject.image}
                    alt={activeProject.title}
                    fallbackTitle={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">Deskripsi Pekerjaan</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{activeProject.fullDesc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                      <Wrench className="w-4 h-4 text-blue-400" />
                      <span>Komponen & Alat Kerja</span>
                    </div>
                    <ul className="space-y-2">
                      {activeProject.tools.map((tool) => (
                        <li key={tool} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                          <span className="font-mono text-yellow-400">•</span>
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      <span>Hasil & Pengujian</span>
                    </div>
                    <ul className="space-y-2">
                      {activeProject.deliverables.map((item) => (
                        <li key={item} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                          <span className="font-mono text-blue-400">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
