import { useEffect, useState } from 'react';
import { ArrowUp, Zap } from 'lucide-react';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProfileAndAboutSection } from './components/ProfileAndAboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import {
  EXPERIENCES_DATA,
  GALLERY_DATA,
  INITIAL_CERTIFICATES,
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
} from './data/portfolioData';
import type { CertificateItem } from './types/portfolio';
import { downloadPortfolioCvPdf } from './utils/pdfGenerator';

const STORAGE_KEY = 'titl_portfolio_user_certificates_v1';

export default function App() {
  const [userCertificates, setUserCertificates] = useState<CertificateItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
    } catch {
      // Ignore storage read errors
    }
    return [];
  });

  const [isDownloadingCv, setIsDownloadingCv] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userCertificates));
    } catch {
      // Ignore storage quota errors
    }
  }, [userCertificates]);

  const allCertificates = [...userCertificates, ...INITIAL_CERTIFICATES];

  const handleDownloadCv = async () => {
    setIsDownloadingCv(true);
    try {
      await downloadPortfolioCvPdf(
        PROFILE_DATA,
        SKILLS_DATA,
        EXPERIENCES_DATA,
        allCertificates,
      );
    } finally {
      setIsDownloadingCv(false);
    }
  };

  const handleAddCertificate = (cert: CertificateItem) => {
    setUserCertificates((prev) => [cert, ...prev]);
  };

  const handleDeleteCertificate = (id: string) => {
    setUserCertificates((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#060B16] text-slate-100 flex flex-col">
      <Navbar onDownloadCv={handleDownloadCv} isDownloadingCv={isDownloadingCv} />

      <main className="flex-1">
        <HeroSection
          profile={PROFILE_DATA}
          onDownloadCv={handleDownloadCv}
          isDownloadingCv={isDownloadingCv}
          skillsCount={SKILLS_DATA.length}
          projectsCount={PROJECTS_DATA.length}
          certificatesCount={allCertificates.length}
        />

        <ProfileAndAboutSection profile={PROFILE_DATA} />

        <SkillsSection skills={SKILLS_DATA} />

        <ExperienceSection experiences={EXPERIENCES_DATA} />

        <ProjectsSection projects={PROJECTS_DATA} />

        <CertificatesSection
          certificates={allCertificates}
          holderName={PROFILE_DATA.fullName}
          onAddCertificate={handleAddCertificate}
          onDeleteCertificate={handleDeleteCertificate}
        />

        <GallerySection items={GALLERY_DATA} />

        <ContactSection profile={PROFILE_DATA} />
      </main>

      <footer className="border-t border-slate-800/80 bg-[#050913] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>
              © {new Date().getFullYear()} {PROFILE_DATA.fullName} · Teknik Instalasi Tenaga Listrik
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#profil" className="hover:text-white transition-colors">
              Profil
            </a>
            <a href="#proyek" className="hover:text-white transition-colors">
              Proyek
            </a>
            <a href="#sertifikat" className="hover:text-white transition-colors">
              Sertifikat
            </a>
            <a
              href="#beranda"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-yellow-400 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
