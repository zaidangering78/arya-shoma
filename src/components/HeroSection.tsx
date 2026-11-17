import { motion } from 'motion/react';
import { ArrowDownRight, Download, Zap } from 'lucide-react';
import type { ProfileData } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSectionProps {
  profile: ProfileData;
  onDownloadCv: () => void;
  isDownloadingCv: boolean;
  skillsCount: number;
  projectsCount: number;
  certificatesCount: number;
}

export function HeroSection({
  profile,
  onDownloadCv,
  isDownloadingCv,
  skillsCount,
  projectsCount,
  certificatesCount,
}: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden electrical-grid-bg border-b border-slate-800/80"
    >
      {/* Subtle electrical radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full bg-blue-600/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/6 w-[380px] h-[380px] rounded-full bg-yellow-400/8 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-mono font-medium text-yellow-400 tracking-wide mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 shrink-0" />
              <span>{profile.fieldTitle}</span>
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold text-white tracking-tight leading-[1.08] text-balance">
              {profile.fullName}
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-display font-medium text-blue-300 leading-snug max-w-2xl text-balance">
              “{profile.tagline}”
            </p>

            <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl">
              {profile.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-semibold text-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <span>Lihat Portofolio</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onDownloadCv}
                disabled={isDownloadingCv}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E172B] hover:bg-[#15223E] text-white border border-slate-700 hover:border-blue-500/60 font-semibold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{isDownloadingCv ? 'Menyiapkan CV...' : 'Download CV'}</span>
              </button>
            </div>

            {/* Subtle electrical circuit trace vector */}
            <div className="mt-10 hidden sm:block" aria-hidden="true">
              <svg viewBox="0 0 560 36" className="w-full max-w-xl h-9">
                <path
                  d="M 0 18 L 160 18 L 176 6 L 290 6 L 306 18 L 440 18 L 456 30 L 560 30"
                  fill="none"
                  stroke="#1E3A8A"
                  strokeWidth="1.5"
                />
                <path
                  d="M 0 18 L 160 18 L 176 6 L 290 6 L 306 18 L 440 18 L 456 30 L 560 30"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="1.5"
                  className="animate-current-flow"
                  opacity="0.7"
                />
                <circle cx="160" cy="18" r="3" fill="#3B82F6" />
                <circle cx="306" cy="18" r="3" fill="#FACC15" />
                <circle cx="440" cy="18" r="3" fill="#3B82F6" />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Portrait Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0B1325] shadow-2xl shadow-blue-950/30 min-h-[340px] lg:min-h-[460px]">
              <ImageWithFallback
                src={profile.avatar}
                alt={`Foto profil ${profile.fullName} — Teknisi Teknik Instalasi Tenaga Listrik`}
                fallbackTitle={profile.fullName}
                className="w-full h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#060B16]/90 via-transparent to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-yellow-400">
                    {profile.school} · {profile.major}
                  </p>
                  <p className="text-base font-semibold text-white mt-1">
                    Teknisi Instalasi & Panel Kontrol
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-300 tabular-nums shrink-0">
                  220V / 380V
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Metrics Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="text-2xl sm:text-3xl font-display font-bold text-white font-mono tabular-nums">
              {skillsCount}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Kompetensi Teknis Kelistrikan
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-display font-bold text-yellow-400 font-mono tabular-nums">
              {projectsCount}+
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Proyek Instalasi, Panel & Simulasi
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-display font-bold text-blue-400 font-mono tabular-nums">
              {certificatesCount}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Sertifikat Kompetensi & Pelatihan
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-display font-bold text-white font-mono tabular-nums">
              PUIL 2011
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Kepatuhan Standar & K3 Listrik
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
