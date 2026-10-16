import Reveal from "@/components/Reveal";

const contactMethods = [
  {
    label: "Telefon",
    value: "+90 554 160 2147",
    action: "Ara",
    href: "tel:+905541602147",
    icon: "fas fa-phone",
  },
  {
    label: "E-posta",
    value: "aksu.yusuf360@gmail.com",
    action: "E-posta gönder",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=aksu.yusuf360@gmail.com",
    icon: "fas fa-envelope",
  },
  {
    label: "LinkedIn",
    value: "Profesyonel profilim",
    action: "Profili görüntüle",
    href: "https://www.linkedin.com/in/yusuf-aksu-969172253/",
    icon: "fab fa-linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/yusufaksuu21",
    action: "Projelerimi incele",
    href: "https://github.com/yusufaksuu21",
    icon: "fab fa-github",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="snap-section snap-section-contact">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">03 · İletişim</p>
          <h2 className="section-title">
            <i className="fas fa-paper-plane" aria-hidden="true"></i> İletişim
          </h2>
          <p className="contact-intro">
            Birlikte çalışmak veya projelerim hakkında konuşmak için bana aşağıdaki kanallardan ulaşabilirsiniz.
          </p>
        </Reveal>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <Reveal key={method.label} delay={80 + index * 50}>
              <a
                className="contact-box contact-action"
                href={method.href}
                target={method.href.startsWith("https:") ? "_blank" : undefined}
                rel={method.href.startsWith("https:") ? "noopener noreferrer" : undefined}
                aria-label={`${method.label}: ${method.action}`}
              >
                <i className={method.icon} aria-hidden="true"></i>
                <h3>{method.label}</h3>
                <span className="contact-value">{method.value}</span>
                <span className="contact-action-label">{method.action}<i className="fas fa-arrow-right" aria-hidden="true"></i></span>
              </a>
            </Reveal>
          ))}
        </div>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Yusuf Aksu · Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </section>
  );
}
