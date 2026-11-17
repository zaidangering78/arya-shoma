import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import type { GalleryCategory, GalleryItem } from '../types/portfolio';
import { ImageWithFallback } from './ImageWithFallback';

interface GallerySectionProps {
  items: GalleryItem[];
}

const CATEGORIES: GalleryCategory[] = [
  'Semua',
  'Praktik Instalasi',
  'Perakitan Panel',
  'Kegiatan Praktik',
  'Dokumentasi PKL',
  'Proyek Kelistrikan',
  'Pelatihan & Sertifikasi',
];

export function GallerySection({ items }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Semua');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  const filteredItems =
    selectedCategory === 'Semua'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] ?? null : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') {
        setActiveIndex(null);
        setZoomScale(1);
      } else if (e.key === 'ArrowRight') {
        setZoomScale(1);
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length,
        );
      } else if (e.key === 'ArrowLeft') {
        setZoomScale(1);
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, filteredItems.length]);

  return (
    <section id="galeri" className="py-16 lg:py-24 bg-[#070D1B] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
            07. Dokumentasi Aktivitas Workshop & Lapangan
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Galeri Dokumentasi
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Dokumentasi praktik instalasi listrik, perakitan panel, kegiatan laboratorium, pelaksanaan PKL industri, proyek lapangan, serta sesi pelatihan dan sertifikasi.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter dokumentasi galeri"
          className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0D162B] border border-slate-800 mb-8"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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

        {/* Media-First Bento / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                setZoomScale(1);
              }}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-yellow-400/50 bg-[#0C1428] text-left cursor-zoom-in transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#060B16]/95 via-[#060B16]/35 to-transparent"
              />
              <span className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#060B16]/75 border border-slate-700 text-slate-200 flex items-center justify-center group-hover:text-yellow-400 transition-colors">
                <ZoomIn className="w-4 h-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-mono text-yellow-400">
                  {item.category} · {item.date}
                </p>
                <h3 className="mt-1 text-base font-display font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 line-clamp-2">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Zoomable Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-zoom-title"
          onClick={() => {
            setActiveIndex(null);
            setZoomScale(1);
          }}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between gap-4 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs font-mono text-yellow-400">
                {activeItem.category} · {activeItem.location} · {activeItem.date}
              </p>
              <h3 id="gallery-zoom-title" className="text-base sm:text-lg font-display font-bold text-white">
                {activeItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setZoomScale((z) => Math.max(1, Number((z - 0.5).toFixed(1))))}
                disabled={zoomScale <= 1}
                aria-label="Perkecil gambar"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-300 w-10 text-center tabular-nums">
                {zoomScale}x
              </span>
              <button
                type="button"
                onClick={() => setZoomScale((z) => Math.min(2.5, Number((z + 0.5).toFixed(1))))}
                disabled={zoomScale >= 2.5}
                aria-label="Perbesar gambar"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white flex items-center justify-center cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(null);
                  setZoomScale(1);
                }}
                aria-label="Tutup galeri"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Image Viewport */}
          <div
            className="relative flex-1 flex items-center justify-center overflow-auto my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  setZoomScale(1);
                  setActiveIndex(
                    (prev) =>
                      prev === null
                        ? 0
                        : (prev - 1 + filteredItems.length) % filteredItems.length,
                  );
                }}
                aria-label="Foto sebelumnya"
                className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:border-yellow-400 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div
              className="transition-transform duration-200 origin-center"
              style={{ transform: `scale(${zoomScale})` }}
            >
              <ImageWithFallback
                src={activeItem.image}
                alt={activeItem.title}
                fallbackTitle={activeItem.title}
                className="max-h-[70vh] max-w-[90vw] rounded-xl object-contain"
              />
            </div>

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  setZoomScale(1);
                  setActiveIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % filteredItems.length,
                  );
                }}
                aria-label="Foto berikutnya"
                className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:border-yellow-400 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption */}
          <div
            className="max-w-3xl mx-auto text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-slate-300">{activeItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
