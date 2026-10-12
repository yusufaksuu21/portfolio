import Link from "next/link";

export default function HomePage() {
  return (
    <section className="card welcome-card">
      <div className="welcome-content">
        <h2 className="welcome-title">
          <span className="wave">👋</span> Hoş Geldiniz
        </h2>

        <p className="welcome-intro">
          Merhaba! Ben <strong className="highlight">Yusuf Aksu</strong>,
          uçtan uca yazılım çözümleri geliştiren bir{" "}
          <strong className="highlight">Yazılım Mühendisi</strong>&apos;yim.
        </p>

        <div className="focus-areas" aria-label="Odak alanlarım">
          <span className="focus-pill">
            <i className="fab fa-python"></i> Python &amp; Backend
          </span>
          <span className="focus-pill">
            <i className="fas fa-brain"></i> Yapay Zeka
          </span>
          <span className="focus-pill">
            <i className="fas fa-globe"></i> Web Geliştirme
          </span>
        </div>

        <p className="welcome-summary">
          Şu anda <strong>Python</strong> ile API ve servis katmanları,
          <strong> yapay zeka</strong> entegrasyonları ve{" "}
          <strong>modern web</strong> arayüzlerini aynı projede bir araya
          getirmeye odaklanıyorum; veri modelinden kullanıcı deneyimine kadar
          tutarlı, sürdürülebilir ürünler geliştiriyorum.
        </p>

        <div className="cta-section">
          <p className="cta-text">
            Projelerime göz atın, hikayemi öğrenin ve birlikte harika şeyler
            yapalım! 🚀
          </p>
          <div className="cta-buttons">
            <Link href="/projects" className="cta-btn primary">
              <i className="fas fa-code"></i> Projelerimi İncele
            </Link>
            <Link href="/contact" className="cta-btn secondary">
              <i className="fas fa-paper-plane"></i> İletişime Geç
            </Link>
          </div>
        </div>

        <div className="resume-section">
          <h3>
            <i className="fas fa-file-download"></i> Özgeçmiş
          </h3>
          <p className="resume-text">
            Güncel CV&apos;mi PDF olarak indirmek için aşağıdaki butonu
            kullanabilirsiniz.
          </p>
          <a
            href="/Yusuf_Aksu_CV_TR.pdf"
            className="cta-btn secondary"
            download
          >
            <i className="fas fa-download"></i> Güncel CV&apos;yi İndir
          </a>
        </div>
      </div>
    </section>
  );
}
