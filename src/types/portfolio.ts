export type SkillCategory = 'Semua' | 'Instalasi & Daya' | 'Panel & Kontrol' | 'Pengukuran & K3';

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'Semua'>;
  level: number;
  description: string;
  iconName:
    | 'Zap'
    | 'Cpu'
    | 'Lightbulb'
    | 'Plug'
    | 'Server'
    | 'Cable'
    | 'FileCode'
    | 'GitBranch'
    | 'Gauge'
    | 'Activity'
    | 'Anchor'
    | 'Wrench'
    | 'ShieldCheck';
  standard: string;
}

export type ExperienceType =
  | 'Praktik Sekolah'
  | 'PKL / Magang'
  | 'Proyek Instalasi'
  | 'Organisasi'
  | 'Pelatihan';

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export type ProjectCategory =
  | 'Semua'
  | 'Instalasi Bangunan'
  | 'Panel & Kontrol'
  | 'Grounding & Simulasi';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Semua'>;
  projectType: string;
  year: string;
  voltageSpec: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tools: string[];
  deliverables: string[];
}

export type CertificateCategory =
  | 'Semua'
  | 'Sertifikat kompetensi'
  | 'Sertifikat pelatihan'
  | 'Sertifikat PKL'
  | 'Sertifikat K3'
  | 'Sertifikat seminar'
  | 'Sertifikat keahlian kelistrikan';

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  certificateNumber?: string;
  category: Exclude<CertificateCategory, 'Semua'>;
  description: string;
  imageUrl?: string;
  isUserUploaded?: boolean;
}

export type GalleryCategory =
  | 'Semua'
  | 'Praktik Instalasi'
  | 'Perakitan Panel'
  | 'Kegiatan Praktik'
  | 'Dokumentasi PKL'
  | 'Proyek Kelistrikan'
  | 'Pelatihan & Sertifikasi';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'Semua'>;
  date: string;
  location: string;
  caption: string;
  image: string;
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  fieldTitle: string;
  tagline: string;
  heroSummary: string;
  avatar: string;
  birthPlaceDate: string;
  address: string;
  education: string;
  school: string;
  major: string;
  email: string;
  phone: string;
  personalDescription: string;
  lifeMotto: string;
  careerGoal: string;
}
