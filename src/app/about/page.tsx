import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda - Yusuf Aksu",
};

const skills = [
  { icon: "fab fa-python", label: "Python" },
  { icon: "fab fa-java", label: "Java" },
  { icon: "fas fa-hashtag", label: "C#" },
  { icon: "fas fa-code", label: "C" },
  { icon: "fab fa-js", label: "JavaScript" },
  { icon: "fab fa-php", label: "PHP" },
  { icon: "fas fa-mobile-alt", label: "Dart" },
  { icon: "fas fa-brain", label: "TensorFlow / Keras / PyTorch" },
  { icon: "fas fa-eye", label: "OpenCV / YOLO" },
  { icon: "fab fa-python", label: "Django / DRF" },
  { icon: "fab fa-html5", label: "HTML5" },
  { icon: "fab fa-css3-alt", label: "CSS3 / Bootstrap" },
  { icon: "fas fa-mobile-alt", label: "Flutter" },
  { icon: "fab fa-unity", label: "Unity" },
  { icon: "fas fa-database", label: "SQL Server / MySQL / PostgreSQL" },
  { icon: "fab fa-git-alt", label: "Git / GitHub" },
  { icon: "fab fa-docker", label: "Docker" },
  { icon: "fab fa-linux", label: "Linux" },
  { icon: "fas fa-shield-alt", label: "Siber Güvenlik (CTF)" },
];

export default function AboutPage() {
  return (
    <section className="card">
      <h2>
        <i className="fas fa-user-circle"></i> Hakkımda
      </h2>

      <div className="about-content">
        <p className="intro-text">
          Merhaba! Ben <strong>Yusuf Aksu</strong>, Kırklareli Üniversitesi Yazılım
          Mühendisliği mezunuyum. Yapay zeka, makine öğrenimi, derin öğrenme ve
          bilgisayarlı görü alanlarına odaklanarak gerçek dünya problemlerine
          çözüm üreten projeler geliştirdim.
        </p>

        <div className="journey-section">
          <h3>
            <i className="fas fa-rocket"></i> Yolculuğum
          </h3>
          <p>
            Front-end geliştirme alanında modern teknolojilerle kullanıcı
            dostu arayüzler tasarlarken, back-end tarafında da API
            entegrasyonları ve veritabanı yönetimi konularında deneyim
            kazandım. Her proje, benim için hem bir öğrenme fırsatı hem de
            yaratıcılığımı konuşturma alanı.
          </p>
          <p>
            Web teknolojileri (Django, JavaScript, Bootstrap) ve oyun geliştirme
            (Unity/C#) alanlarında da deneyim sahibiyim. Ayrıca Siber Güvenlik
            Kulübü&apos;nde aktif rol alarak CTF yarışmalarına katıldım; SQL
            Injection, XSS, CSRF gibi güvenlik açıkları ve şifreleme (AES, RSA)
            konularında bilgi edindim.
          </p>
        </div>

        <div className="philosophy-section">
          <h3>
            <i className="fas fa-lightbulb"></i> Çalışma Felsefem
          </h3>
          <p>
            Temiz kod yazmak, sürdürülebilir çözümler üretmek ve ekip
            çalışmasına değer vermek benim temel ilkelerim. Her projede{" "}
            <em>kullanıcı merkezli tasarım</em> yaklaşımını benimseyerek,
            sadece işlevsel değil, aynı zamanda estetik ve anlaşılır ürünler
            ortaya çıkarmayı hedefliyorum.
          </p>
        </div>

        <div className="goals-section">
          <h3>
            <i className="fas fa-bullseye"></i> Hedeflerim
          </h3>
          <p>
            Kariyerimde, teknolojinin gücünü kullanarak topluma değer katan,
            hayatı kolaylaştıran ve fark yaratan projeler geliştirmek
            istiyorum. Yazılım dünyasında kendimi sürekli geliştirerek,
            global çapta tanınan bir yazılım mühendisi olmayı hedefliyorum.
          </p>
        </div>
      </div>

      <h3 style={{ margin: "40px 0 20px" }}>
        <i className="fas fa-code"></i> Teknik Yetenekler
      </h3>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill.label}>
            <i className={skill.icon}></i> {skill.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
