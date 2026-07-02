import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler - Yusuf Aksu",
};

const projects = [
  {
    icon: "fas fa-drafting-compass",
    title: "Kalıp Planı ve Yapısal Ön Boyutlandırma Aracı",
    description:
      "İnşaat mühendisleri için tarayıcı tabanlı kolon, kiriş ve perde duvar yerleşim görselleştirme aracı. HTML5 Canvas ve vanilla JavaScript ile geliştirildi; DXF, PDF, DOCX ve JSON dışa aktarma desteği sunar.",
  },
  {
    icon: "fas fa-car",
    title: "Otonom Araç Tespit Uygulaması",
    description:
      "RTSP akışı üzerinden Python ve YOLOv8 ile gerçek zamanlı araç tespiti. OpenCV ile video işleme ve nesne sınıflandırma.",
  },
  {
    icon: "fas fa-robot",
    title: "AI Destekli Kariyer Destek Sistemi",
    description:
      "Python ve Gemini API kullanarak geliştirilen, özgeçmişleri analiz edip kariyer önerileri sunan Streamlit tabanlı uygulama.",
  },
  {
    icon: "fas fa-square-parking",
    title: "Akıllı Otopark Sistemi",
    description:
      "Django API ile backend tarafı yönetilen, Flutter ile mobil arayüzü sunulan gerçek zamanlı araç takip ve doluluk sistemi.",
  },
  {
    icon: "fas fa-hospital",
    title: "Hastane Randevu Yönetim Sistemi",
    description:
      "Java Swing ile geliştirilen masaüstü uygulaması; hasta kayıt, doktor ve randevu yönetimi modülleri içerir. Nesne yönelimli tasarım prensipleri ve SQL Server veritabanı entegrasyonu.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Kişisel Web Sitesi",
    description:
      "HTML, CSS ve JavaScript kullanarak oluşturduğum responsive tasarımlı kişisel portfolyo sitesi.",
  },
  {
    icon: "fas fa-question-circle",
    title: "Soru Bankası Sistemi (Bitirme Projesi)",
    description:
      "Öğretmenler için Django 4.2 tabanlı soru havuzu yönetimi, otomatik sınav oluşturma ve Word/PDF çıktı platformu. Gemini AI ile otomatik soru ayrıştırma; Celery + Redis ile arka plan işleme.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="card">
      <div className="project-header">
        <h2>Projelerim</h2>
        <div className="github-box">
          <p className="github-text">
            Kodlarımın tamamına GitHub üzerinden ulaşabilirsiniz
          </p>
          <a
            href="https://github.com/yusufaksuu21"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <i className="fab fa-github"></i> GitHub Profilim
          </a>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-icon">
              <i className={project.icon}></i>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
