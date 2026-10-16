import Reveal from "@/components/Reveal";
import { skillCategories } from "@/data/skills";

export default function AboutSection() {
  return (
    <section id="about" className="snap-section">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">01 · Hakkımda</p>
          <h2 className="section-title"><i className="fas fa-user-circle" aria-hidden="true"></i> Hakkımda</h2>
        </Reveal>
        <div className="about-content">
          <Reveal delay={80}><p className="intro-text">Merhaba! Ben <strong>Yusuf Aksu</strong>, Kırklareli Üniversitesi Yazılım Mühendisliği mezunuyum. <strong>Python</strong> tabanlı backend servisleri, <strong>yapay zekâ</strong> entegrasyonları ve <strong>web</strong> uygulamaları geliştirerek gerçek problemlere çözüm üretiyorum.</p></Reveal>
          <Reveal delay={120}><div className="journey-section">
            <h3><i className="fas fa-rocket" aria-hidden="true"></i> Yolculuğum</h3>
            <p>Django ve ASP.NET Core ile API katmanları, veritabanı tasarımı ve iş kuralları üzerinde çalıştım. YOLO, OpenCV ve LLM tabanlı özellikleri ürünlere entegre ettim; Next.js ile modern arayüzler geliştirerek backend ve kullanıcı deneyimini birlikte ele alıyorum.</p>
            <p>Bitirme projemden otonom tespit sistemlerine, otopark ve randevu yönetiminden sigorta API’larına kadar farklı alanlarda projeler geliştirdim.</p>
          </div></Reveal>
          <Reveal delay={160}><div className="philosophy-section">
            <h3><i className="fas fa-lightbulb" aria-hidden="true"></i> Çalışma felsefem</h3>
            <p>Temiz kod, okunabilir mimari ve kullanıcı odaklı tasarım benim için vazgeçilmez. Teknik doğruluğu ve sürdürülebilirliği gözetirken güçlü iletişime ve açık dokümantasyona önem veriyorum.</p>
          </div></Reveal>
          <Reveal delay={200}><div className="goals-section">
            <h3><i className="fas fa-bullseye" aria-hidden="true"></i> Hedeflerim</h3>
            <p>Python, yapay zekâ ve web teknolojileriyle ölçeklenebilir, güvenilir ve değer üreten yazılımlar geliştirmek; ürün odaklı ekiplerde deneyimimi derinleştirmek istiyorum.</p>
          </div></Reveal>
        </div>
        <Reveal delay={120}>
          <div className="skills-section">
            <h3><i className="fas fa-code" aria-hidden="true"></i> Teknik yetenekler</h3>
            <div className="skills-grid">
              {skillCategories.map((category) => <div className="skill-category" key={category.title}>
                <h4><i className={category.icon} aria-hidden="true"></i> {category.title}</h4>
                <ul className="skills">{category.skills.map((skill) => <li key={skill.label}><i className={skill.icon} aria-hidden="true"></i> {skill.label}</li>)}</ul>
              </div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
