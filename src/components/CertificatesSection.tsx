import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Award, Download, Eye, Plus, Trash2, Upload, X } from 'lucide-react';
import type { CertificateCategory, CertificateItem } from '../types/portfolio';
import { downloadCertificatePdf } from '../utils/pdfGenerator';
import { ImageWithFallback } from './ImageWithFallback';

interface CertificatesSectionProps {
  certificates: CertificateItem[];
  holderName: string;
  onAddCertificate: (cert: CertificateItem) => void;
  onDeleteCertificate: (id: string) => void;
}

const CATEGORIES: CertificateCategory[] = [
  'Semua',
  'Sertifikat kompetensi',
  'Sertifikat pelatihan',
  'Sertifikat PKL',
  'Sertifikat K3',
  'Sertifikat seminar',
  'Sertifikat keahlian kelistrikan',
];

const UPLOAD_CATEGORIES: Exclude<CertificateCategory, 'Semua'>[] = [
  'Sertifikat kompetensi',
  'Sertifikat pelatihan',
  'Sertifikat PKL',
  'Sertifikat K3',
  'Sertifikat seminar',
  'Sertifikat keahlian kelistrikan',
];

export function CertificatesSection({
  certificates,
  holderName,
  onAddCertificate,
  onDeleteCertificate,
}: CertificatesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>('Semua');
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Upload form state
  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [category, setCategory] = useState<Exclude<CertificateCategory, 'Semua'>>(
    'Sertifikat kompetensi',
  );
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [formError, setFormError] = useState('');

  const filteredCertificates =
    selectedCategory === 'Semua'
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPreviewCert(null);
        setUploadOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFormError('Pilih file gambar sertifikat berformat PNG, JPG, atau WebP.');
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setFormError('Ukuran gambar maksimal 4 MB.');
      return;
    }
    setFormError('');
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUploadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !issuer.trim() || !issueDate.trim() || !description.trim()) {
      setFormError('Lengkapi nama sertifikat, lembaga penerbit, tanggal, dan deskripsi pelatihan.');
      return;
    }

    const newCert: CertificateItem = {
      id: `user-cert-${Date.now()}`,
      name: name.trim(),
      issuer: issuer.trim(),
      issueDate: issueDate.trim(),
      certificateNumber: certificateNumber.trim() || undefined,
      category,
      description: description.trim(),
      imageUrl: imagePreview || undefined,
      isUserUploaded: true,
    };

    onAddCertificate(newCert);
    setName('');
    setIssuer('');
    setIssueDate('');
    setCertificateNumber('');
    setDescription('');
    setImagePreview('');
    setFormError('');
    setUploadOpen(false);
  };

  const handleDownloadPdf = async (cert: CertificateItem) => {
    setDownloadingId(cert.id);
    try {
      await downloadCertificatePdf(cert, holderName);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="sertifikat" className="py-16 lg:py-24 bg-[#060B16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Upload CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
              06. Kualifikasi & Pengakuan Resmi
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Sertifikat
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Koleksi sertifikat kompetensi BNSP, pelatihan PLC, PKL industri, K3 kelistrikan, seminar, dan keahlian teknik listrik. Anda dapat melihat pratinjau penuh, mengunggah sertifikat baru, atau mengunduh versi PDF.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setUploadOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-semibold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Upload Sertifikat</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Kategori sertifikat"
          className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0D162B] border border-slate-800 mb-8"
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="rounded-2xl bg-[#0C1428] border border-slate-800 p-12 text-center">
            <Award className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-base font-medium text-slate-300">
              Belum ada sertifikat pada kategori ini.
            </p>
            <button
              type="button"
              onClick={() => setUploadOpen(true)}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
            >
              Tambahkan Sertifikat Sekarang
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <article
                key={cert.id}
                className="rounded-2xl bg-[#0C1428] border border-slate-800 hover:border-blue-500/50 transition-colors overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Image / Framed Document Visual */}
                  <button
                    type="button"
                    onClick={() => setPreviewCert(cert)}
                    className="relative aspect-[16/10] w-full bg-[#091022] border-b border-slate-800 overflow-hidden group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    aria-label={`Preview sertifikat ${cert.name}`}
                  >
                    <ImageWithFallback
                      src={cert.imageUrl}
                      alt={cert.name}
                      fallbackTitle={cert.name}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#060B16]/95 via-[#060B16]/45 to-transparent"
                    />
                    <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-mono text-yellow-400">{cert.category}</p>
                        <p className="text-xs font-mono text-slate-300 tabular-nums mt-0.5">
                          {cert.issueDate}
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-blue-600/80 text-white flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-colors">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </button>

                  {/* Metadata & Description */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-display font-semibold text-white leading-snug">
                        {cert.name}
                      </h3>
                      <p className="mt-1.5 text-xs font-medium text-blue-300">{cert.issuer}</p>
                      {cert.certificateNumber && (
                        <p className="mt-1 text-xs font-mono text-slate-400 tabular-nums">
                          {cert.certificateNumber}
                        </p>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-800/80 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPreviewCert(cert)}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#121D38] hover:bg-[#19284B] text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>Lihat Sertifikat</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadPdf(cert)}
                    disabled={downloadingId === cert.id}
                    className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloadingId === cert.id ? 'Unduh...' : 'Download PDF'}</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Large Certificate Preview Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-preview-title"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl bg-[#0B1325] border border-slate-700 overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-800">
              <div>
                <p className="text-xs font-mono text-yellow-400">{previewCert.category}</p>
                <h3
                  id="cert-preview-title"
                  className="text-lg font-display font-bold text-white mt-0.5"
                >
                  {previewCert.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                aria-label="Tutup pratinjau sertifikat"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
              {/* High-resolution rendered certificate view + image */}
              <div className="rounded-xl border-2 border-blue-500/40 bg-gradient-to-br from-[#0F1B35] via-[#0B1429] to-[#081020] p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs font-mono text-yellow-400 tracking-wide">
                      DOKUMEN SERTIFIKAT · {previewCert.category.toUpperCase()}
                    </p>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                      {previewCert.name}
                    </h4>
                    <p className="text-sm text-slate-300">
                      Diberikan kepada:{' '}
                      <span className="font-semibold text-white">{holderName}</span>
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {previewCert.description}
                    </p>
                    <div className="pt-3 border-t border-slate-700/70 space-y-1 text-xs text-slate-400">
                      <p>
                        Lembaga Penerbit:{' '}
                        <span className="text-slate-200 font-medium">{previewCert.issuer}</span>
                      </p>
                      <p className="font-mono tabular-nums">
                        Tanggal Terbit: {previewCert.issueDate}
                        {previewCert.certificateNumber
                          ? ` · ${previewCert.certificateNumber}`
                          : ''}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 bg-[#060B16]">
                      <ImageWithFallback
                        src={previewCert.imageUrl}
                        alt={previewCert.name}
                        fallbackTitle={previewCert.name}
                        className="w-full h-full object-contain bg-[#060B16]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                {previewCert.isUserUploaded ? (
                  <button
                    type="button"
                    onClick={() => {
                      onDeleteCertificate(previewCert.id);
                      setPreviewCert(null);
                    }}
                    className="px-4 py-2 rounded-lg border border-red-500/40 text-red-300 hover:bg-red-500/15 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Hapus Sertifikat Unggahan</span>
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">
                    Sertifikat terverifikasi dalam portofolio TITL
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => handleDownloadPdf(previewCert)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Sertifikat PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload New Certificate Modal */}
      {uploadOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="upload-cert-title"
          onClick={() => setUploadOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#0B1325] border border-slate-700 overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <h3 id="upload-cert-title" className="text-lg font-display font-bold text-white">
                Upload & Tambahkan Sertifikat Baru
              </h3>
              <button
                type="button"
                onClick={() => setUploadOpen(false)}
                aria-label="Tutup form upload sertifikat"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
              {formError && (
                <p className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-xs text-red-300">
                  {formError}
                </p>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Gambar Sertifikat (PNG / JPG / WebP)
                </label>
                <label className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 hover:border-blue-500 bg-[#070E1D] p-4 cursor-pointer transition-colors">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Pratinjau gambar sertifikat"
                      className="max-h-40 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="text-center py-2">
                      <Upload className="w-6 h-6 text-blue-400 mx-auto mb-1.5" />
                      <p className="text-xs text-slate-300">Klik untuk pilih file gambar sertifikat</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Maksimal 4 MB</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="cert-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nama Sertifikat *
                </label>
                <input
                  id="cert-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Sertifikat Uji Kompetensi Instalasi Motor 3 Fasa"
                  className="w-full rounded-lg bg-[#070E1D] border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cert-issuer" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Lembaga Penerbit *
                  </label>
                  <input
                    id="cert-issuer"
                    type="text"
                    required
                    value={issuer}
                    onChange={(e) => setIssuer(e.target.value)}
                    placeholder="Contoh: BNSP / LSP Teknik"
                    className="w-full rounded-lg bg-[#070E1D] border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cert-date" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Tanggal Penerbitan *
                  </label>
                  <input
                    id="cert-date"
                    type="text"
                    required
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    placeholder="Contoh: 15 April 2025"
                    className="w-full rounded-lg bg-[#070E1D] border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cert-category" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Kategori Sertifikat *
                  </label>
                  <select
                    id="cert-category"
                    value={category}
                    onChange={(e) =>
                      setCategory(e.target.value as Exclude<CertificateCategory, 'Semua'>)
                    }
                    className="w-full rounded-lg bg-[#070E1D] border border-slate-700 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {UPLOAD_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cert-number" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nomor Sertifikat (Opsional)
                  </label>
                  <input
                    id="cert-number"
                    type="text"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    placeholder="Contoh: REG. 2025/091"
                    className="w-full rounded-lg bg-[#070E1D] border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cert-desc" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Deskripsi Pelatihan / Kompetensi *
                </label>
                <textarea
                  id="cert-desc"
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Jelaskan materi pelatihan atau unit kompetensi yang dikuasai..."
                  className="w-full rounded-lg bg-[#070E1D] border border-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setUploadOpen(false)}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs font-semibold cursor-pointer"
                >
                  Simpan Sertifikat
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
