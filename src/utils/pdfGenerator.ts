import { jsPDF } from 'jspdf';
import type { CertificateItem, ExperienceItem, ProfileData, SkillItem } from '../types/portfolio';

async function loadImageAsDataUrl(src: string): Promise<string | null> {
  if (!src) return null;
  if (src.startsWith('data:image/')) return src;

  try {
    const response = await fetch(src);
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(typeof reader.result === 'string' ? reader.result : null);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function downloadPortfolioCvPdf(
  profile: ProfileData,
  skills: SkillItem[],
  experiences: ExperienceItem[],
  certificates: CertificateItem[],
): Promise<void> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  // Header band
  doc.setFillColor(6, 11, 22);
  doc.rect(0, 0, pageWidth, 42, 'F');
  doc.setFillColor(250, 204, 21);
  doc.rect(0, 40, pageWidth, 2, 'F');

  doc.setTextColor(250, 204, 21);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('CURRICULUM VITAE · TEKNIK INSTALASI TENAGA LISTRIK (TITL)', margin, 13);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text(profile.fullName, margin, 23);

  doc.setTextColor(148, 163, 184);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(profile.fieldTitle, margin, 30);
  doc.text(`${profile.email}  |  ${profile.phone}  |  ${profile.school}`, margin, 36);

  y = 52;

  const ensureSpace = (needed: number) => {
    if (y + needed > 280) {
      doc.addPage();
      y = 18;
    }
  };

  const addSectionTitle = (title: string) => {
    ensureSpace(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(37, 99, 235);
    doc.text(title.toUpperCase(), margin, y);
    doc.setDrawColor(203, 213, 225);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    y += 8;
  };

  // Ringkasan & Profil
  addSectionTitle('Profil & Tujuan Karier');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  const descLines = doc.splitTextToSize(profile.personalDescription, contentWidth);
  doc.text(descLines, margin, y);
  y += descLines.length * 4.5 + 3;

  const metaItems = [
    `Tempat, Tanggal Lahir: ${profile.birthPlaceDate}`,
    `Pendidikan: ${profile.school} — ${profile.major}`,
    `Alamat: ${profile.address}`,
    `Tujuan Karier: ${profile.careerGoal}`,
  ];
  for (const line of metaItems) {
    const wrapped = doc.splitTextToSize(line, contentWidth);
    ensureSpace(wrapped.length * 4.5 + 2);
    doc.text(wrapped, margin, y);
    y += wrapped.length * 4.5 + 1.5;
  }
  y += 3;

  // Keahlian
  addSectionTitle('Kompetensi Teknis Kelistrikan');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  skills.forEach((skill, index) => {
    ensureSpace(6);
    const colX = index % 2 === 0 ? margin : margin + contentWidth / 2 + 2;
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${skill.name} (${skill.level}%)`, colX, y);
    if (index % 2 === 1 || index === skills.length - 1) {
      y += 5.2;
    }
  });
  y += 4;

  // Pengalaman
  addSectionTitle('Pengalaman Praktik, PKL & Proyek');
  for (const exp of experiences) {
    ensureSpace(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.title}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(71, 85, 105);
    y += 4.5;
    doc.text(`${exp.organization} · ${exp.period} (${exp.type})`, margin, y);
    y += 4.5;

    const sumLines = doc.splitTextToSize(exp.summary, contentWidth);
    doc.setTextColor(51, 65, 85);
    doc.text(sumLines, margin, y);
    y += sumLines.length * 4.2 + 4;
  }

  // Sertifikat
  addSectionTitle('Sertifikat & Kualifikasi');
  for (const cert of certificates) {
    ensureSpace(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${cert.name}`, margin, y);
    y += 4.2;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const certMeta = `${cert.issuer} · ${cert.issueDate}${cert.certificateNumber ? ` · ${cert.certificateNumber}` : ''}`;
    doc.text(certMeta, margin + 3, y);
    y += 5.5;
  }

  doc.save(`CV_${profile.fullName.replace(/\s+/g, '_')}_TITL.pdf`);
}

export async function downloadCertificatePdf(
  cert: CertificateItem,
  holderName: string,
): Promise<void> {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  // Outer Navy Frame
  doc.setFillColor(6, 11, 22);
  doc.rect(0, 0, w, h, 'F');

  // Certificate Card Surface
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(12, 12, w - 24, h - 24, 3, 3, 'F');

  // Double border in electric blue and yellow
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(1.2);
  doc.rect(16, 16, w - 32, h - 32);

  doc.setDrawColor(234, 179, 8);
  doc.setLineWidth(0.5);
  doc.rect(19, 19, w - 38, h - 38);

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(37, 99, 235);
  doc.text(cert.category.toUpperCase(), 26, 30);

  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42);
  const titleLines = doc.splitTextToSize(cert.name, w - 52);
  doc.text(titleLines, 26, 40);

  const afterTitleY = 40 + titleLines.length * 8.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text('Diberikan kepada:', 26, afterTitleY + 4);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  doc.text(holderName, 26, afterTitleY + 13);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(51, 65, 85);
  const descWidth = cert.imageUrl ? w - 135 : w - 52;
  const descLines = doc.splitTextToSize(cert.description, descWidth);
  doc.text(descLines, 26, afterTitleY + 23);

  // Try embedding certificate image on the right side
  if (cert.imageUrl) {
    const imgData = await loadImageAsDataUrl(cert.imageUrl);
    if (imgData) {
      try {
        const format = imgData.includes('image/png') ? 'PNG' : 'JPEG';
        doc.setDrawColor(203, 213, 225);
        doc.rect(w - 102, afterTitleY + 4, 74, 56);
        doc.addImage(imgData, format, w - 101, afterTitleY + 5, 72, 54);
      } catch {
        // Skip image if format cannot be parsed
      }
    }
  }

  // Footer metadata
  const footerY = h - 34;
  doc.setDrawColor(203, 213, 225);
  doc.line(26, footerY - 6, w - 26, footerY - 6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`Lembaga Penerbit: ${cert.issuer}`, 26, footerY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(`Tanggal Penerbitan: ${cert.issueDate}`, 26, footerY + 6);
  if (cert.certificateNumber) {
    doc.text(`Nomor Sertifikat: ${cert.certificateNumber}`, w - 26, footerY, { align: 'right' });
  }

  const safeName = cert.name.replace(/[^a-zA-Z0-9]+/g, '_').slice(0, 40);
  doc.save(`Sertifikat_${safeName}.pdf`);
}
