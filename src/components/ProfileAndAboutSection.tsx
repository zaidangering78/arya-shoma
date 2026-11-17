import { Compass, GraduationCap, Mail, MapPin, Phone, Target, User } from 'lucide-react';
import { ABOUT_DETAILS } from '../data/portfolioData';
import type { ProfileData } from '../types/portfolio';
import { ElectricalSchematic } from './ElectricalSchematic';
import { ImageWithFallback } from './ImageWithFallback';

interface ProfileAndAboutSectionProps {
  profile: ProfileData;
}

export function ProfileAndAboutSection({ profile }: ProfileAndAboutSectionProps) {
  const bioRows = [
    { label: 'Nama Lengkap', value: profile.fullName },
    { label: 'Tempat, Tanggal Lahir', value: profile.birthPlaceDate },
    { label: 'Sekolah', value: profile.school },
    { label: 'Jurusan', value: profile.major },
    { label: 'Pendidikan', value: profile.education },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Nomor Telepon', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
    { label: 'Alamat', value: profile.address },
  ];

  return (
    <>
      {/* SECTION 2: PROFIL SAYA */}
      <section id="profil" className="py-16 lg:py-24 bg-[#070D1B] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
              01. Identitas & Data Diri
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Profil Saya
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Informasi lengkap latar belakang pendidikan, kontak personal, motto hidup, dan arah karier di bidang ketenagalistrikan.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0C1428] border border-slate-800 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Portrait & Core Summary */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-slate-700/80 bg-[#081020]">
                  <ImageWithFallback
                    src={profile.avatar}
                    alt={`Foto ${profile.fullName}`}
                    fallbackTitle={profile.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-5 text-xl font-display font-bold text-white">
                  {profile.fullName}
                </h3>
                <p className="text-sm text-blue-400 font-medium mt-1">{profile.major}</p>
                <div className="mt-4 pt-4 border-t border-slate-800 w-full space-y-2 text-xs text-slate-400">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <GraduationCap className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>{profile.school}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-mono tabular-nums">{profile.phone}</span>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>Sidomukti, Bungah, Gresik</span>
                  </div>
                </div>
              </div>

              {/* Right Detailed Data Grid & Statements */}
              <div className="lg:col-span-8 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pb-8 border-b border-slate-800/80">
                  {bioRows.map((row) => (
                    <div key={row.label} className="space-y-1">
                      <p className="text-xs font-medium text-slate-400">{row.label}</p>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="text-sm sm:text-base font-medium text-blue-300 hover:text-yellow-400 transition-colors block break-words"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-medium text-white break-words">
                          {row.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <User className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Deskripsi Pribadi</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {profile.personalDescription}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Compass className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span>Motto Hidup</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      “{profile.lifeMotto}”
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Target className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Tujuan Karier</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {profile.careerGoal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TENTANG SAYA */}
      <section id="tentang" className="py-16 lg:py-24 bg-[#060B16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Narrative & Vision/Mission */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="text-xs font-mono text-yellow-400 tracking-wide mb-2">
                  02. Visi, Misi & Dedikasi Teknik
                </p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Tentang Saya
                </h2>
                <h3 className="mt-4 text-lg font-semibold text-blue-300">
                  {ABOUT_DETAILS.interestTitle}
                </h3>
                <div className="mt-3 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {ABOUT_DETAILS.interestParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Visi & Misi */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Visi</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{ABOUT_DETAILS.vision}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Tujuan Pengembangan</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {ABOUT_DETAILS.developmentGoals}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <h4 className="text-sm font-semibold text-white mb-3">Misi Kerja & Pembelajaran</h4>
                <ul className="space-y-2.5">
                  {ABOUT_DETAILS.missions.map((mission, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="font-mono text-xs text-yellow-400 mt-0.5 tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Interactive Electrical Schematic + Character Grid */}
            <div className="lg:col-span-6 space-y-6">
              <ElectricalSchematic />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ABOUT_DETAILS.characters.map((char) => (
                  <div
                    key={char.title}
                    className="rounded-xl bg-[#0C1428] border border-slate-800 p-4 space-y-1.5"
                  >
                    <h4 className="text-sm font-semibold text-white">{char.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{char.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
