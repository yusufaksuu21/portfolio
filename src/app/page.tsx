import Link from "next/link";

export default function HomePage() {
  return (
    <section className="card welcome-card">
      <div className="welcome-content">
        <h2 className="welcome-title">
          <span className="wave">👋</span> Hoş Geldiniz
        </h2>

        <p className="welcome-intro">
          Merhaba! Ben <strong className="highlight">Yusuf Aksu</strong>, yapay
          zeka ve yazılım geliştirme alanlarında çözümler üreten bir{" "}
          <strong className="highlight">Yazılım Mühendisi</strong>&apos;yim.
        </p>

        <div className="welcome-description">
          <p>
            <i className="fas fa-palette icon-inline"></i>
            <strong>Front-end</strong> dünyasında kullanıcı dostu arayüzler
            tasarlıyor,
          </p>
          <p>
            <i className="fas fa-server icon-inline"></i>
            <strong>Back-end</strong> tarafında güçlü API&apos;lar
            geliştiriyor,
          </p>
          <p>
            <i className="fas fa-robot icon-inline"></i>
            <strong>Yapay zeka</strong> ile geleceğin uygulamalarını inşa
            ediyorum.
          </p>
        </div>

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
      </div>
    </section>
  );
}
