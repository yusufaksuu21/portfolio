import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Yusuf Aksu",
};

export default function ContactPage() {
  return (
    <section className="card">
      <h2>
        <i className="fas fa-paper-plane"></i> İletişim
      </h2>
      <p style={{ marginBottom: "30px" }}>
        Projeleriniz veya işbirliği fırsatları hakkında benimle iletişime
        geçebilirsiniz. En kısa sürede dönüş yapacağım.
      </p>

      <div className="contact-grid">
        <div className="contact-box">
          <i className="fas fa-phone"></i>
          <h4>Telefon</h4>
          <a href="tel:+905541602147" className="contact-link">
            +90 554 160 2147
          </a>
        </div>
        <div className="contact-box">
          <i className="fas fa-envelope"></i>
          <h4>E-posta</h4>
          <a href="mailto:aksu.yusuf360@gmail.com" className="contact-link">
            aksu.yusuf360@gmail.com
          </a>
        </div>
        <div className="contact-box">
          <i className="fab fa-linkedin"></i>
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/yusuf-aksu-969172253/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin-link"
          >
            LinkedIn Profilim
          </a>
        </div>
      </div>
    </section>
  );
}
