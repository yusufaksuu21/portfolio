import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projeler - Yusuf Aksu",
};

type Project = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
};

const projects: Project[] = [
  {
    icon: "fas fa-file-contract",
    title: "Sigorta Poliçe API",
    description:
      "Müşteri, poliçe ve hasar kayıtları için katmanlı mimarili ASP.NET Core Web API. Repository/servis katmanları, global exception handling, SQLite ve Swagger dokümantasyonu.",
    tags: [".NET 8", "Web API", "EF Core", "SQLite"],
  },
  {
    icon: "fas fa-wrench",
    title: "Oto Sanayi Randevu Sistemi",
    description:
      "Oto sanayi işletmeleri için çevrim içi servis randevusu: müşteri araç/hizmet yönetimi, kapasiteye göre saat seçimi ve admin paneli. ASP.NET Core Identity ile rol tabanlı yetkilendirme; Render üzerinde canlı demo.",
    tags: ["ASP.NET Core 9", "Razor Pages", "Identity", "Docker"],
    demoUrl: "https://oto-sanayi-randevu-sistemi.onrender.com",
  },
  {
    icon: "fas fa-question-circle",
    title: "Soru Bankası Sistemi (Bitirme Projesi)",
    description:
      "Öğretmenler için Django 4.2 tabanlı soru havuzu, otomatik sınav oluşturma ve Word/PDF çıktı. Gemini AI ile soru ayrıştırma; Celery + Redis ile arka plan işleme.",
    tags: ["Django", "Gemini AI", "Celery", "Redis"],
  },
  {
    icon: "fas fa-robot",
    title: "AI Destekli Kariyer Destek Sistemi",
    description:
      "Python ve Gemini API ile özgeçmiş analizi ve kariyer önerileri sunan Streamlit uygulaması.",
    tags: ["Python", "Streamlit", "Gemini API"],
  },
  {
    icon: "fas fa-car",
    title: "Otonom Araç Tespit Uygulaması",
    description:
      "RTSP akışında YOLOv8 ve OpenCV ile gerçek zamanlı araç tespiti ve video işleme.",
    tags: ["Python", "YOLOv8", "OpenCV"],
  },
  {
    icon: "fas fa-square-parking",
    title: "Akıllı Otopark Sistemi",
    description:
      "Django API backend ve Flutter mobil arayüz ile gerçek zamanlı doluluk ve araç takibi.",
    tags: ["Django", "Flutter", "REST API"],
  },
  {
    icon: "fas fa-drafting-compass",
    title: "Kalıp Planı ve Yapısal Ön Boyutlandırma Aracı",
    description:
      "İnşaat mühendisleri için tarayıcı tabanlı kolon, kiriş ve perde duvar görselleştirme; DXF, PDF, DOCX ve JSON dışa aktarma.",
    tags: ["JavaScript", "Canvas", "CAD"],
  },
  {
    icon: "fas fa-hospital",
    title: "Hastane Randevu Yönetim Sistemi",
    description:
      "Java Swing masaüstü uygulaması: hasta, doktor ve randevu modülleri; OOP tasarım ve SQL Server entegrasyonu.",
    tags: ["Java", "Swing", "SQL Server"],
  },
  {
    icon: "fas fa-laptop-code",
    title: "Kişisel Web Sitesi (Portfolyo)",
    description:
      "Next.js ve TypeScript ile geliştirdiğim responsive kişisel portfolyo sitesi; App Router, bileşen tabanlı yapı ve modern UI.",
    tags: ["Next.js", "TypeScript", "React"],
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
          <article className="project-card" key={project.title}>
            <div className="project-icon">
              <i className={project.icon}></i>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-link"
              >
                <i className="fas fa-external-link-alt"></i> Canlı Demo
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
