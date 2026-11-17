import type {
  CertificateItem,
  ExperienceItem,
  GalleryItem,
  ProfileData,
  ProjectItem,
  SkillItem,
} from '../types/portfolio';

export const IMAGES = {
  portrait: '/src/assets/images/arya_student_portrait_1794898275164.jpg',
  panel: '/src/assets/images/electrical_panel_assembly_1794897560520.jpg',
  residential: '/src/assets/images/residential_wiring_installation_1794897560443.jpg',
  motor: '/src/assets/images/motor_control_testing_1794897560593.jpg',
  safety: '/src/assets/images/electrical_safety_training_1794897560550.jpg',
};

export const PROFILE_DATA: ProfileData = {
  fullName: 'Arya Shoma Rizqyanto',
  shortName: 'Arya Shoma',
  fieldTitle: 'Electrical Installation Engineering / Teknik Instalasi Tenaga Listrik',
  tagline: 'Membangun Masa Depan Melalui Teknologi dan Energi Listrik.',
  heroSummary:
    'Siswa Teknik Instalasi Tenaga Listrik (TITL) di SMKN 1 Sidayu yang berfokus pada instalasi daya 1 & 3 fasa, perakitan panel distribusi dan kontrol motor industri, serta penerapan standar keselamatan kerja kelistrikan (PUIL 2011 & K3 Listrik).',
  avatar: IMAGES.portrait,
  birthPlaceDate: 'Gresik, 5 Oktober 2011',
  address: 'Sidomukti, Kec. Bungah, Kabupaten Gresik, Jawa Timur 61152',
  education: 'Siswa SMK Program Keahlian Teknik Ketenagalistrikan',
  school: 'SMKN 1 Sidayu',
  major: 'Teknik Instalasi Tenaga Listrik (TITL)',
  email: 'arya.shoma.titl@gmail.com',
  phone: '+62 812-3456-7890',
  personalDescription:
    'Saya adalah teknisi dan pembelajar aktif di bidang ketenagalistrikan dengan ketelitian tinggi dalam membaca gambar teknik, merakit sistem pengawatan panel kontrol, serta melakukan pengujian dan troubleshooting instalasi listrik secara aman dan terukur.',
  lifeMotto:
    'Presisi dalam setiap sambungan, disiplin dalam keselamatan, dan terus bertumbuh mengikuti kemajuan teknologi energi.',
  careerGoal:
    'Menjadi Electrical Installation & Panel Control Engineer profesional yang berkontribusi dalam sistem distribusi tenaga listrik industri, otomasi kontrol motor, dan efisiensi energi terbarukan.',
};

export const ABOUT_DETAILS = {
  interestTitle: 'Ketertarikan & Fokus Teknik Ketenagalistrikan',
  interestParagraphs: [
    'Ketertarikan saya pada dunia kelistrikan berawal dari rasa ingin tahu tentang bagaimana energi listrik dibangkitkan, didistribusikan melalui panel utama (MDP/SDP), hingga menggerakkan mesin industri dan menerangi bangunan secara aman.',
    'Selama menempuh pendidikan di jurusan Teknik Instalasi Tenaga Listrik (TITL), saya mendalami teknik instalasi tenaga listrik 1 fasa dan 3 fasa, sistem distribusi tegangan rendah, perawatan berkala instalasi, perakitan panel kontrol elektromagnetik berbasis kontaktor dan PLC, serta pemanfaatan teknologi energi modern yang efisien.',
  ],
  vision:
    'Menjadi tenaga ahli teknik instalasi tenaga listrik yang kompeten, berintegritas tinggi, dan adaptif terhadap perkembangan teknologi sistem distribusi tenaga dan otomasi industri.',
  missions: [
    'Menerapkan standar keselamatan kerja (K3 Listrik) dan regulasi PUIL dalam setiap pekerjaan instalasi maupun perawatan.',
    'Menghasilkan rangkaian pengawatan panel dan instalasi bangunan yang rapi, terstruktur, dan mudah dilakukan pemeliharaan.',
    'Mengembangkan keahlian pengukuran, analisis beban listrik, dan kontrol motor berbasis teknologi otomasi modern.',
  ],
  characters: [
    {
      title: 'Teliti & Terstruktur',
      detail: 'Memastikan kode warna kabel, penomoran terminal, dan torsi sambungan sesuai diagram wiring.',
    },
    {
      title: 'Disiplin K3',
      detail: 'Selalu menerapkan prosedur LOTO (Lockout/Tagout), penggunaan APD dielektrik, dan uji isolasi sebelum bertegangan.',
    },
    {
      title: 'Kolaboratif & Solutif',
      detail: 'Mampu bekerja dalam tim proyek maupun menganalisis gangguan hubung singkat dan beban lebih secara sistematis.',
    },
  ],
  developmentGoals:
    'Dalam 3–5 tahun ke depan, saya menargetkan penguasaan mendalam pada sistem Panel ATS-AMF, Smart Building Power Monitoring, serta integrasi pembangkit listrik tenaga surya (PLTS) hybrid untuk skala komersial dan industri.',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'skill-1',
    name: 'Instalasi Listrik 1 Fasa',
    category: 'Instalasi & Daya',
    level: 95,
    description:
      'Perancangan dan pemasangan jaringan 220V AC untuk bangunan residensial lengkap dengan pembagian grup MCB dan ELCB.',
    iconName: 'Zap',
    standard: 'PUIL 2011 · 220V AC',
  },
  {
    id: 'skill-2',
    name: 'Instalasi Listrik 3 Fasa',
    category: 'Instalasi & Daya',
    level: 90,
    description:
      'Pemasangan sistem distribusi tenaga 380V/400V R-S-T-N dengan penyeimbangan beban antar fasa untuk bengkel dan industri.',
    iconName: 'Cpu',
    standard: '3 Phase · 380/400V',
  },
  {
    id: 'skill-3',
    name: 'Instalasi Penerangan',
    category: 'Instalasi & Daya',
    level: 96,
    description:
      'Pengawatan sakelar tunggal, seri, tukar (hotel), dan kontrol penerangan gedung bertingkat dengan tata letak pipa konduit rapi.',
    iconName: 'Lightbulb',
    standard: 'Lux & Konduit PVC/Galvanis',
  },
  {
    id: 'skill-4',
    name: 'Instalasi Stop Kontak',
    category: 'Instalasi & Daya',
    level: 95,
    description:
      'Pemasangan kotak kontak umum dan khusus berdaya besar lengkap dengan penghantar pembumian (PE) yang terverifikasi.',
    iconName: 'Plug',
    standard: '2P+E · 16A/32A',
  },
  {
    id: 'skill-5',
    name: 'Perakitan Panel Listrik',
    category: 'Panel & Kontrol',
    level: 92,
    description:
      'Tata letak komponen DIN rail (MCCB, MCB, busbar tembaga, cable duct, dan terminal blok) pada box panel SDP dan MDP.',
    iconName: 'Server',
    standard: 'IP54/IP65 · Busbar Cu',
  },
  {
    id: 'skill-6',
    name: 'Pengawatan Panel Kontrol',
    category: 'Panel & Kontrol',
    level: 91,
    description:
      'Wiring rangkaian daya dan kontrol motor induksi (DOL, Forward-Reverse, Star-Delta otomatis) dengan ferule label bernomor.',
    iconName: 'Cable',
    standard: 'IEC 60947 · Contactor & TDR',
  },
  {
    id: 'skill-7',
    name: 'Membaca Diagram Single Line',
    category: 'Panel & Kontrol',
    level: 93,
    description:
      'Interpretasi gambar diagram satu garis untuk distribusi daya utama, kapasitas pemutus, serta koordinasi proteksi jaringan.',
    iconName: 'FileCode',
    standard: 'SLD · Standar IEC',
  },
  {
    id: 'skill-8',
    name: 'Membaca Wiring Diagram',
    category: 'Panel & Kontrol',
    level: 94,
    description:
      'Pembacaan skema pengawatan kontrol, diagram garis putus-putus, kontak bantu NO/NC, hingga integrasi input-output PLC.',
    iconName: 'GitBranch',
    standard: 'Ladder & Schematic',
  },
  {
    id: 'skill-9',
    name: 'Penggunaan Alat Ukur Listrik',
    category: 'Pengukuran & K3',
    level: 94,
    description:
      'Terampil mengoperasikan Multimeter digital/analog, Tang Ampere (Clamp Meter), Megger Insulation Tester, dan Earth Tester.',
    iconName: 'Gauge',
    standard: 'CAT III/IV Instruments',
  },
  {
    id: 'skill-10',
    name: 'Pengukuran Tegangan, Arus & Hambatan',
    category: 'Pengukuran & K3',
    level: 95,
    description:
      'Pengujian akurasi tegangan fasa-netral, fasa-fasa, arus beban motor, kontinuitas penghantar, dan tahanan isolasi kabel.',
    iconName: 'Activity',
    standard: 'V · A · Ω · MΩ',
  },
  {
    id: 'skill-11',
    name: 'Sistem Grounding',
    category: 'Pengukuran & K3',
    level: 89,
    description:
      'Instalasi elektroda batang tembaga (ground rod), ikatan ekuipotensial, dan pengujian tahanan pentanahan di bawah 5 Ohm.',
    iconName: 'Anchor',
    standard: 'R < 5 Ω · PUIL Earthing',
  },
  {
    id: 'skill-12',
    name: 'Perawatan & Troubleshooting Instalasi',
    category: 'Pengukuran & K3',
    level: 90,
    description:
      'Inspeksi preventif, pelacakan gangguan hubung singkat, kebocoran arus, motor overheat, serta penggantian komponen rusak.',
    iconName: 'Wrench',
    standard: 'Preventive & Corrective',
  },
  {
    id: 'skill-13',
    name: 'Keselamatan & Kesehatan Kerja (K3) Kelistrikan',
    category: 'Pengukuran & K3',
    level: 96,
    description:
      'Penerapan prosedur Lockout-Tagout (LOTO), pemilihan APD berisolasi 1000V, dan mitigasi bahaya busur listrik (arc flash).',
    iconName: 'ShieldCheck',
    standard: 'Permenaker 12/2015',
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    type: 'PKL / Magang',
    title: 'Teknisi Magang Instalasi & Pemeliharaan Panel Industri',
    organization: 'PT. Daya Elektrindo Nusantara',
    period: 'Juli 2025 – Desember 2025',
    location: 'Kawasan Industri Gresik, Jawa Timur',
    summary:
      'Terlibat langsung dalam perakitan sub-distribution panel (SDP), perawatan panel kontrol motor pompa industri, serta inspeksi berkala instalasi 3 fasa.',
    highlights: [
      'Membantu perakitan dan pengawatan 12 unit panel kontrol motor Star-Delta dan pompa booster.',
      'Melakukan pengukuran arus beban fasa R-S-T dan pemeriksaan termal sambungan busbar.',
      'Menerapkan prosedur LOTO dan dokumentasi checklist K3 sebelum pengujian panel bertegangan.',
    ],
  },
  {
    id: 'exp-2',
    type: 'Proyek Instalasi',
    title: 'Asisten Teknisi Proyek Instalasi Listrik Ruko & Hunian Modern',
    organization: 'CV. Sinar Teknik Mandiri (Proyek Lepas)',
    period: 'Januari 2026 – Maret 2026',
    location: 'Bungah & Sidayu, Gresik',
    summary:
      'Menangani penarikan jalur kabel NYM/NYY dalam pipa konduit PVC, pemasangan panel MCB pembagi 10 grup, dan instalasi sistem grounding.',
    highlights: [
      'Menyelesaikan instalasi penerangan dan 24 titik stop kontak untuk bangunan ruko 3 lantai.',
      'Melakukan uji tahanan isolasi (Megger 500V DC) dengan hasil seluruh jalur di atas 200 MΩ.',
      'Pemasangan sistem pentanahan batang tembaga terukur sebesar 1,8 Ohm.',
    ],
  },
  {
    id: 'exp-3',
    type: 'Praktik Sekolah',
    title: 'Asisten Praktikum Bengkel Instalasi Tenaga & Kontrol Motor',
    organization: 'Laboratorium TITL SMKN 1 Sidayu',
    period: 'Agustus 2024 – Mei 2025',
    location: 'Sidayu, Gresik',
    summary:
      'Melaksanakan modul praktik standar industri mencakup instalasi penerangan gedung, panel hubung bagi, dan pengendali motor induksi 3 fasa.',
    highlights: [
      'Merakit trainer panel kontrol motor Forward-Reverse dan Star-Delta otomatis dengan timer.',
      'Membantu kalibrasi dan pengecekan kelayakan alat ukur multimeter serta tang ampere bengkel.',
      'Meraih predikat nilai praktik unggulan pada evaluasi praktikum kejuruan TITL.',
    ],
  },
  {
    id: 'exp-4',
    type: 'Pelatihan',
    title: 'Pelatihan Intensif K3 Kelistrikan & Uji Kompetensi LSP',
    organization: 'LSP P1 Energi & Balai Latihan Kerja Teknik Gresik',
    period: 'Februari 2026',
    location: 'Gresik, Jawa Timur',
    summary:
      'Program pembekalan keselamatan kerja ketenagalistrikan tegangan rendah dan sertifikasi kompetensi instalasi pemanfaatan tenaga listrik.',
    highlights: [
      'Simulasi penanganan kondisi darurat sengatan listrik dan pemadaman panel bertegangan.',
      'Uji praktik membaca SLD dan wiring diagram sistem distribusi bangunan komersial.',
    ],
  },
  {
    id: 'exp-5',
    type: 'Organisasi',
    title: 'Ketua Divisi Teknik & Keselamatan Workshop',
    organization: 'Himpunan Siswa Teknik Instalasi Tenaga Listrik (HIMATIL)',
    period: '2024 – 2025',
    location: 'SMKN 1 Sidayu',
    summary:
      'Mengkoordinasikan pemeliharaan peralatan bengkel kelistrikan, kegiatan bakti sosial perbaikan instalasi warga, serta seminar energi terbarukan.',
    highlights: [
      'Memimpin tim 15 siswa dalam program audit instalasi aman untuk fasilitas umum sekitar Sidomukti.',
      'Menyelenggarakan pelatihan dasar pembacaan diagram wiring untuk siswa tingkat awal.',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Instalasi Listrik Rumah Tinggal 2 Lantai (2200 VA)',
    category: 'Instalasi Bangunan',
    projectType: 'Instalasi Listrik Rumah Tinggal',
    year: '2025',
    voltageSpec: '1 Fasa · 220V AC · 50Hz',
    shortDesc:
      'Perencanaan dan pemasangan jaringan listrik rumah tinggal lengkap dengan pembagian 6 grup MCB, RCCB 30mA anti-kontak, dan jalur konduit tanam.',
    fullDesc:
      'Proyek instalasi listrik rumah tinggal 2 lantai dengan total beban terpasang 2.200 VA. Sistem dibagi menjadi beberapa grup terpisah untuk penerangan lantai 1 & 2, stop kontak umum, serta jalur khusus AC dan pompa air. Menggunakan kabel NYM 3x2.5mm² untuk daya dan NYM 3x1.5mm² untuk penerangan, dilindungi oleh RCCB 30mA dan MCB Schneider sesuai standar PUIL 2011.',
    image: IMAGES.residential,
    tools: ['MCB & RCCB 30mA', 'Kabel NYM 2.5mm²', 'Pipa Konduit PVC 20mm', 'Megger Tester'],
    deliverables: ['Single Line Diagram', 'Box Panel PHB 8 Grup', 'Uji Isolasi > 250 MΩ'],
  },
  {
    id: 'proj-2',
    title: 'Sistem Instalasi Penerangan Gedung & Sakelar Tukar',
    category: 'Instalasi Bangunan',
    projectType: 'Instalasi Penerangan',
    year: '2024',
    voltageSpec: '1 Fasa · 220V · Kontrol Multi-Titik',
    shortDesc:
      'Pengawatan sistem penerangan koridor dan ruang kelas menggunakan sakelar tukar (hotel), sakelar seri, dan sistem darurat otomatis.',
    fullDesc:
      'Perancangan dan pemasangan instalasi penerangan multi-zona pada bangunan ruang praktik. Menggabungkan kontrol sakelar tukar di dua pintu masuk koridor, sakelar seri untuk zona lampu depan-belakang, serta indikator pilot lamp pada box kontrol.',
    image: IMAGES.residential,
    tools: ['Sakelar Tukar & Seri', 'Lampu LED Panel', 'T-Dus & Saddle Clamp', 'Testpen & Multimeter'],
    deliverables: ['Diagram Pengawatan', 'Pemasangan Rapi Konduit', 'Pengujian Lux & Kontinuitas'],
  },
  {
    id: 'proj-3',
    title: 'Perakitan Panel Distribusi SDP 3 Fasa 400V',
    category: 'Panel & Kontrol',
    projectType: 'Perakitan Panel Listrik',
    year: '2024',
    voltageSpec: '3 Fasa · 380/400V · 63A',
    shortDesc:
      'Pembuatan panel Sub-Distribution Panel (SDP) dilengkapi MCCB utama, pilot lamp fasa R-S-T, volt-ampere meter digital, dan busbar tembaga.',
    fullDesc:
      'Merakit box panel baja IP54 ukuran 60x80x25 cm dari tahap layout pelat mounting, pemotongan DIN rail dan slotted cable duct, pemasangan MCCB 3P 63A sebagai main breaker, pembagian 3 line MCB cabang, hingga penataan kabel NYAF warna merah-kuning-hitam-biru menggunakan skun dan ferule terminal.',
    image: IMAGES.panel,
    tools: ['MCCB 3P 63A', 'Busbar Tembaga', 'Tang Skun Hidrolik', 'Panel Meter Digital'],
    deliverables: ['Layout Panel 1:1', 'Wiring R-S-T-N-PE', 'Balancing Beban 3 Fasa'],
  },
  {
    id: 'proj-4',
    title: 'Rangkaian Kontrol Motor Listrik Star-Delta Otomatis',
    category: 'Panel & Kontrol',
    projectType: 'Rangkaian Kontrol Motor Listrik',
    year: '2024',
    voltageSpec: '3 Fasa · 380V · Motor 5.5 kW',
    shortDesc:
      'Panel starter Bintang-Segitiga (Star-Delta) untuk menurunkan lonjakan arus start motor induksi 3 fasa menggunakan 3 kontaktor dan timer.',
    fullDesc:
      'Membangun rangkaian daya dan kontrol motor induksi 3 fasa sistem Star-Delta otomatis. Menggunakan Kontaktor Utama (K1), Kontaktor Delta (K2), dan Kontaktor Star (K3) dengan sistem interlock elektrik (NC) untuk mencegah hubung singkat antar fasa, dilengkapi Thermal Overload Relay (TOR) dan timer tunda 5 detik.',
    image: IMAGES.motor,
    tools: ['3x Kontaktor Magnetik', 'Time Delay Relay', 'Thermal Overload Relay', 'Clamp Meter'],
    deliverables: ['Interlock Aman', 'Penurunan Arus Start 33%', 'Uji Beban Motor'],
  },
  {
    id: 'proj-5',
    title: 'Instalasi Tenaga Listrik 3 Fasa Bengkel Mesin',
    category: 'Instalasi Bangunan',
    projectType: 'Instalasi Listrik 3 Fasa',
    year: '2024',
    voltageSpec: '3 Fasa · 380V · 4-Wire + PE',
    shortDesc:
      'Penarikan kabel tray dan instalasi stop kontak industri 3 fasa (CEE 5-Pin) untuk suplai mesin bubut dan kompresor workshop.',
    fullDesc:
      'Instalasi sistem tenaga 3 fasa untuk kebutuhan mesin workshop menggunakan kabel NYY 4x6mm² melalui jalur cable tray galvanis menuju kotak kontak industri CEE 3P+N+E 32A. Seluruh jalur dilengkapi proteksi arus lebih dan identifikasi fasa berurutan dengan phase sequence tester.',
    image: IMAGES.safety,
    tools: ['Kabel NYY 4x6mm²', 'Socket CEE 5-Pin', 'Phase Sequence Tester', 'Cable Tray'],
    deliverables: ['Urutan Fasa R-S-T Benar', 'Proteksi MCB 3P', 'Label Jalur Kabel'],
  },
  {
    id: 'proj-6',
    title: 'Sistem Pengendali Motor Forward-Reverse Berbasis Relay & PLC',
    category: 'Panel & Kontrol',
    projectType: 'Sistem Pengendali Motor',
    year: '2025',
    voltageSpec: 'Kontrol 24V DC / Daya 380V AC',
    shortDesc:
      'Sistem kendali putaran motor dua arah (maju-mundur) untuk mekanisme konveyor dengan proteksi limit switch dan emergency stop.',
    fullDesc:
      'Mengintegrasikan unit PLC mikro dengan kontaktor daya untuk mengendalikan arah putaran motor konveyor secara bergantian. Dilengkapi tombol Emergency Stop (NC), limit switch batas ujung lintasan, serta indikator status Run Forward, Run Reverse, dan Trip Fault.',
    image: IMAGES.motor,
    tools: ['PLC Smart Relay', 'Limit Switch', 'Push Button & Pilot Lamp', 'Power Supply 24VDC'],
    deliverables: ['Program Ladder Diagram', 'Box Kontrol HMI Sederhana', 'Uji Respon Interlock'],
  },
  {
    id: 'proj-7',
    title: 'Instalasi Sistem Grounding & Proteksi Arus Bocor',
    category: 'Grounding & Simulasi',
    projectType: 'Instalasi Grounding',
    year: '2024',
    voltageSpec: 'Tahanan Pentanahan < 2 Ω',
    shortDesc:
      'Pemasangan elektroda pentanahan rod tembaga 2.5 meter, bak kontrol ukur, dan ikatan ekuipotensial pada panel utama.',
    fullDesc:
      'Pelaksanaan instalasi sistem pembumian (earthing) menggunakan batang tembaga murni berdiameter 5/8 inci yang ditanam sedalam 2,5 meter dengan konduktor BC 16mm² menuju terminal PE panel MDP. Pengujian dilakukan dengan metode 3-pole fall of potential menggunakan Digital Earth Tester.',
    image: IMAGES.safety,
    tools: ['Copper Ground Rod', 'Kabel BC 16mm²', 'Digital Earth Tester', 'Klem Cincin Tembaga'],
    deliverables: ['Nilai Tahanan 1,68 Ω', 'Bak Kontrol Grounding', 'Laporan Pengujian'],
  },
  {
    id: 'proj-8',
    title: 'Simulasi Rangkaian Kontrol Otomatis ATS & Motor Industri',
    category: 'Grounding & Simulasi',
    projectType: 'Simulasi Rangkaian Listrik',
    year: '2025',
    voltageSpec: 'Simulasi CADe-SIMU & EKTS',
    shortDesc:
      'Pemodelan digital dan verifikasi logika rangkaian Automatic Transfer Switch (PLN–Genset) serta kontrol motor sebelum perakitan fisik.',
    fullDesc:
      'Membuat simulasi penuh skema kontrol dan daya menggunakan perangkat lunak CADe-SIMU dan EKTS untuk memvalidasi logika penguncian kontaktor (interlock), urutan waktu perpindahan sumber PLN ke Genset (ATS), serta simulasi gangguan trip TOR sebelum proses pengawatan di panel nyata.',
    image: IMAGES.panel,
    tools: ['CADe-SIMU', 'EKTS Simulator', 'AutoCAD Electrical', 'Multimeter Virtual'],
    deliverables: ['File Simulasi Teruji', 'Bill of Materials (BOM)', 'Dokumentasi Wiring'],
  },
];

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    name: 'Sertifikat Kompetensi Klaster Instalasi Tenaga Listrik Bangunan',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) / LSP-P1',
    issueDate: '18 Maret 2025',
    certificateNumber: 'No. REG. TITL-2025-0418-882',
    category: 'Sertifikat kompetensi',
    description:
      'Menyatakan kompeten pada unit kompetensi pemasangan instalasi penerangan, instalasi daya 1 fasa & 3 fasa, perakitan PHB, serta pengujian sistem pentanahan sesuai SKKNI.',
    imageUrl: IMAGES.panel,
  },
  {
    id: 'cert-2',
    name: 'Sertifikat Praktik Kerja Lapangan (PKL) Bidang Panel Industri',
    issuer: 'PT. Daya Elektrindo Nusantara',
    issueDate: '30 Desember 2024',
    certificateNumber: 'PKL/DEN/XII/2024/094',
    category: 'Sertifikat PKL',
    description:
      'Menyelesaikan program Praktik Kerja Lapangan selama 6 bulan dengan predikat Sangat Baik pada divisi perakitan panel SDP, kontrol motor 3 fasa, dan pemeliharaan listrik pabrik.',
    imageUrl: IMAGES.safety,
  },
  {
    id: 'cert-3',
    name: 'Sertifikat Keselamatan dan Kesehatan Kerja (K3) Kelistrikan Dasar',
    issuer: 'Pusat Pelatihan K3 Energi Jawa Timur',
    issueDate: '12 Februari 2025',
    certificateNumber: 'K3-ELK/2025/1129',
    category: 'Sertifikat K3',
    description:
      'Pelatihan standar keselamatan kerja listrik tegangan rendah, penerapan prosedur LOTO, penggunaan APD dielektrik, serta mitigasi bahaya hubung singkat dan sengatan listrik.',
    imageUrl: IMAGES.safety,
  },
  {
    id: 'cert-4',
    name: 'Pelatihan Pengawatan & Troubleshooting Kontrol Motor Berbasis PLC',
    issuer: 'Balai Pelatihan Teknik Industri Gresik',
    issueDate: '22 Oktober 2025',
    certificateNumber: 'BPTI-PLC-2025-317',
    category: 'Sertifikat pelatihan',
    description:
      'Pelatihan praktik pemrograman diagram tangga (ladder diagram), pengawatan sensor industri, serta integrasi kontaktor daya motor induksi 3 fasa.',
    imageUrl: IMAGES.motor,
  },
  {
    id: 'cert-5',
    name: 'Seminar Nasional Transisi Energi & Smart Grid Instalasi Modern',
    issuer: 'Asosiasi Teknik Ketenagalistrikan Indonesia',
    issueDate: '09 November 2025',
    certificateNumber: 'SEM-ATKI/2025/5502',
    category: 'Sertifikat seminar',
    description:
      'Partisipasi aktif dalam seminar teknologi efisiensi energi bangunan hijau, integrasi panel surya (PLTS) atap, dan standar proteksi instalasi modern.',
    imageUrl: IMAGES.residential,
  },
  {
    id: 'cert-6',
    name: 'Sertifikat Keahlian Perakitan Panel & Pengujian Alat Ukur',
    issuer: 'SMKN 1 Sidayu — Mitra Industri Schneider',
    issueDate: '15 Mei 2025',
    certificateNumber: 'TITL-SKK-2025-028',
    category: 'Sertifikat keahlian kelistrikan',
    description:
      'Pengakuan keahlian khusus dalam tata letak panel distribusi tegangan rendah, pembacaan diagram single line, serta pengoperasian Megger dan Earth Tester.',
    imageUrl: IMAGES.panel,
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Perakitan Panel Distribusi 3 Fasa',
    category: 'Perakitan Panel',
    date: 'Oktober 2025',
    location: 'Workshop PT. Daya Elektrindo Nusantara',
    caption: 'Penataan kabel fasa R-S-T, MCCB utama, dan kontaktor pada panel kontrol industri.',
    image: IMAGES.panel,
  },
  {
    id: 'gal-2',
    title: 'Pengujian Tegangan & Kontrol Motor Star-Delta',
    category: 'Kegiatan Praktik',
    date: 'September 2025',
    location: 'Laboratorium Kontrol Motor SMKN 1 Sidayu',
    caption: 'Pengukuran tegangan antar fasa 398,7V pada terminal X1 rangkaian kontrol motor 1,5 kW.',
    image: IMAGES.motor,
  },
  {
    id: 'gal-3',
    title: 'Instalasi Pipa Konduit & Box MCB Residensial',
    category: 'Praktik Instalasi',
    date: 'Januari 2026',
    location: 'Sidomukti, Bungah, Gresik',
    caption: 'Pemasangan box PHB 12 grup lengkap dengan RCCB serta kerapian jalur konduit PVC menuju kotak kontak.',
    image: IMAGES.residential,
  },
  {
    id: 'gal-4',
    title: 'Inspeksi Panel Switchgear dengan APD Lengkap',
    category: 'Dokumentasi PKL',
    date: 'November 2025',
    location: 'Kawasan Industri Gresik',
    caption: 'Pengecekan terminal kontrol panel distribusi 400V menggunakan sarung tangan dielektrik dan helm K3.',
    image: IMAGES.safety,
  },
  {
    id: 'gal-5',
    title: 'Uji Kompetensi Instalasi Tenaga & Pengawatan',
    category: 'Pelatihan & Sertifikasi',
    date: 'Maret 2026',
    location: 'Tempat Uji Kompetensi (TUK) SMKN 1 Sidayu',
    caption: 'Persiapan alat ukur clamp meter sebelum melakukan verifikasi rangkaian daya dan kontrol pada sesi sertifikasi.',
    image: IMAGES.portrait,
  },
  {
    id: 'gal-6',
    title: 'Proyek Instalasi Panel Kontrol Pompa 3 Fasa',
    category: 'Proyek Kelistrikan',
    date: 'Februari 2026',
    location: 'Bungah, Gresik',
    caption: 'Finishing pelabelan kabel ferule dan pengujian fungsi overload relay pada panel kontrol pompa gedung.',
    image: IMAGES.panel,
  },
];
