import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import type { ProfileData } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) return;
    setSubmitted(true);
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
  };

  const contactLinks = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      href: 'https://wa.me/6281234567890',
      icon: MessageCircle,
    },
    {
      label: 'Instagram',
      value: '@aryashoma.titl',
      href: 'https://instagram.com/aryashoma.titl',
      icon: Instagram,
    },
    {
      label: 'Facebook',
      value: 'Arya Shoma Rizqyanto',
      href: 'https://facebook.com',
      icon: Facebook,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/arya-shoma-rizqyanto',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
  ];

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-[#060B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
            08. Kolaborasi & Peluang Kerja
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Kontak
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Terbuka untuk peluang kerja teknisi instalasi listrik, asisten panel builder, kolaborasi proyek, maupun diskusi teknik ketenagalistrikan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0C1428] border border-slate-800 p-6 space-y-4">
              <h3 className="text-lg font-display font-semibold text-white">
                Saluran Komunikasi Langsung
              </h3>
              <div className="divide-y divide-slate-800/80">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-yellow-400 shrink-0 group-hover:bg-blue-600/25 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-400">{item.label}</p>
                          <p className="text-sm font-medium text-slate-100 group-hover:text-yellow-400 transition-colors truncate">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Lokasi Card */}
            <div className="rounded-2xl bg-[#0C1428] border border-slate-800 p-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Lokasi Domisili</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    {profile.address}
                  </p>
                  <p className="mt-2 text-xs font-mono text-slate-400 tabular-nums">
                    7°02&apos;42&quot;S · 112°34&apos;21&quot;E · Sidomukti, Bungah, Gresik
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Sidomukti+Bungah+Gresik+Jawa+Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-yellow-400 transition-colors pt-1"
              >
                <span>Buka Peta Lokasi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0C1428] border border-slate-800 p-6 sm:p-8">
              <h3 className="text-xl font-display font-semibold text-white">
                Kirim Pesan atau Penawaran Proyek
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Silakan tinggalkan pesan terkait rekrutmen teknisi, kerja sama instalasi listrik, atau pertanyaan teknis.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-blue-600/15 border border-blue-500/40 p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-yellow-400 mx-auto" />
                  <h4 className="text-base font-semibold text-white">
                    Pesan Anda Berhasil Dicatat
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Terima kasih telah menghubungi {profile.fullName}. Untuk respon lebih cepat, Anda juga dapat menghubungi langsung melalui WhatsApp atau Email.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Masukkan nama Anda"
                        className="w-full rounded-xl bg-[#070E1D] border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Alamat Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="nama@perusahaan.com"
                        className="w-full rounded-xl bg-[#070E1D] border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subjek
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Contoh: Undangan Interview Teknisi Listrik / Proyek Panel"
                      className="w-full rounded-xl bg-[#070E1D] border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Isi Pesan *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan kebutuhan proyek, posisi pekerjaan, atau pertanyaan Anda..."
                      className="w-full rounded-xl bg-[#070E1D] border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
