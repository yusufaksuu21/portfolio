import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda - Yusuf Aksu",
};

const skillCategories = [
  {
    title: "Odak Alanlarım",
    icon: "fas fa-bullseye",
    skills: [
      { icon: "fab fa-python", label: "Python Backend" },
      { icon: "fas fa-brain", label: "Yapay Zeka & LLM" },
      { icon: "fas fa-server", label: "REST API & Servisler" },
      { icon: "fab fa-react", label: "Next.js / React" },
    ],
  },
  {
    title: "Yapay Zeka & Veri",
    icon: "fas fa-robot",
    skills: [
      { icon: "fas fa-eye", label: "OpenCV / YOLO" },
      { icon: "fas fa-network-wired", label: "TensorFlow / PyTorch" },
      { icon: "fas fa-wand-magic-sparkles", label: "Gemini API" },
    ],
  },
  {
    title: "Backend & Framework",
    icon: "fas fa-layer-group",
    skills: [
      { icon: "fab fa-python", label: "Django / DRF" },
      { icon: "fas fa-hashtag", label: "ASP.NET Core" },
      { icon: "fas fa-database", label: "Entity Framework Core" },
      { icon: "fas fa-bolt", label: "Celery / Redis" },
    ],
  },
  {
    title: "Web & Arayüz",
    icon: "fas fa-laptop-code",
    skills: [
      { icon: "fab fa-js", label: "JavaScript / TypeScript" },
      { icon: "fab fa-html5", label: "HTML5 / CSS3" },
      { icon: "fab fa-bootstrap", label: "Bootstrap" },
    ],
  },
  {
    title: "Diller",
    icon: "fas fa-code",
    skills: [
      { icon: "fab fa-python", label: "Python" },
      { icon: "fas fa-hashtag", label: "C#" },
      { icon: "fab fa-java", label: "Java" },
      { icon: "fas fa-code", label: "C" },
      { icon: "fab fa-php", label: "PHP" },
      { icon: "fas fa-mobile-alt", label: "Dart" },
    ],
  },
  {
    title: "Veritabanı & Altyapı",
    icon: "fas fa-database",
    skills: [
      { icon: "fas fa-database", label: "PostgreSQL / MySQL" },
      { icon: "fas fa-database", label: "SQL Server / SQLite" },
      { icon: "fab fa-docker", label: "Docker" },
      { icon: "fab fa-git-alt", label: "Git / GitHub" },
      { icon: "fab fa-linux", label: "Linux" },
    ],
  },
  {
    title: "Diğer Deneyimler",
    icon: "fas fa-puzzle-piece",
    skills: [
      { icon: "fas fa-mobile-alt", label: "Flutter" },
      { icon: "fab fa-unity", label: "Unity" },
      { icon: "fas fa-shield-alt", label: "Siber Güvenlik (CTF)" },
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="card">
      <h2>
        <i className="fas fa-user-circle"></i> Hakkımda
      </h2>

      <div className="about-content">
        <p className="intro-text">
          Merhaba! Ben <strong>Yusuf Aksu</strong>, Kırklareli Üniversitesi
          Yazılım Mühendisliği mezunuyum. <strong>Python</strong> tabanlı
          backend servisleri, <strong>yapay zeka</strong> entegrasyonları ve{" "}
          <strong>web</strong> uygulamalarını birlikte ele alarak gerçek
          problemlere çözüm üreten projeler geliştiriyorum.
        </p>

        <div className="journey-section">
          <h3>
            <i className="fas fa-rocket"></i> Yolculuğum
          </h3>
          <p>
            Django ve ASP.NET Core ile API katmanları, veritabanı tasarımı ve
            iş kurallarını uygularken; YOLO, OpenCV ve LLM tabanlı özellikleri
            aynı ürünlerin içine entegre ettim. Next.js ile modern arayüzler
            geliştirerek backend ve kullanıcı tarafını dengeli biçimde
            ilerletiyorum.
          </p>
          <p>
            Bitirme projemden otonom tespit sistemlerine, otopark ve randevu
            yönetiminden sigorta API&apos;larına kadar farklı domain&apos;lerde
            çalıştım. Siber Güvenlik Kulübü&apos;nde CTF deneyimiyle güvenli
            kod yazma alışkanlığımı güçlendirdim.
          </p>
        </div>

        <div className="philosophy-section">
          <h3>
            <i className="fas fa-lightbulb"></i> Çalışma Felsefem
          </h3>
          <p>
            Temiz kod, okunabilir mimari ve kullanıcı odaklı tasarım benim
            için vazgeçilmez. Her projede hem teknik doğruluğu hem de
            sürdürülebilirliği gözeterek; ekip içi iletişime değer veren,
            dokümantasyonu güçlü çözümler üretmeyi hedefliyorum.
          </p>
        </div>

        <div className="goals-section">
          <h3>
            <i className="fas fa-bullseye"></i> Hedeflerim
          </h3>
          <p>
            Python, yapay zeka ve web teknolojilerini bir arada kullanarak
            ölçeklenebilir, güvenilir ve topluma değer katan yazılımlar
            geliştirmek istiyorum. Global ölçekte ürün odaklı ekiplerde
            deneyimimi derinleştirmeyi hedefliyorum.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h3>
          <i className="fas fa-code"></i> Teknik Yetenekler
        </h3>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h4>
                <i className={category.icon}></i> {category.title}
              </h4>
              <ul className="skills">
                {category.skills.map((skill) => (
                  <li key={skill.label}>
                    <i className={skill.icon}></i> {skill.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
