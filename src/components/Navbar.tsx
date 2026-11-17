import { useEffect, useState } from 'react';
import { Download, Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onDownloadCv: () => void;
  isDownloadingCv: boolean;
}

const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#profil', label: 'Profil Saya' },
  { href: '#tentang', label: 'Tentang Saya' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#sertifikat', label: 'Sertifikat' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' },
];

export function Navbar({ onDownloadCv, isDownloadingCv }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('beranda');

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#060B16]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-md"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-yellow-400">
            <Zap className="w-4 h-4" />
          </span>
          <span>Arya Shoma</span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-300"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded ${
                  isActive ? 'text-yellow-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full transition-transform duration-200 origin-left ${
                    isActive
                      ? 'bg-yellow-400 scale-x-100'
                      : 'bg-blue-500 scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onDownloadCv}
            disabled={isDownloadingCv}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <Download className="w-3.5 h-3.5" />
            {isDownloadingCv ? 'Menyiapkan...' : 'Download CV'}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="xl:hidden w-10 h-10 rounded-lg border border-slate-800 bg-[#0D1528] text-slate-200 hover:text-white hover:border-slate-700 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Menu Mobile"
          className="xl:hidden border-t border-slate-800/80 bg-[#080F1E] px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeId === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/20 text-yellow-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-3 mt-2 border-t border-slate-800/80 sm:hidden">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onDownloadCv();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV (PDF)
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
