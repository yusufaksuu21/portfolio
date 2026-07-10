# 👨‍💻 Yusuf Aksu - Yazılım Mühendisi Portfolyosu

Kişisel portfolyo web sitesi - **Yazılım Mühendisi** olarak yaptığım projeleri, yeteneklerimi ve iletişim bilgilerimi gösteren modern bir platform.

🌐 **[Canlı Siteyi Ziyaret Edin](https://yusufaksu.vercel.app/)**

---

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Sayfalar](#sayfalar)
- [Projelendirme](#projelendirme)
- [Dağıtım](#dağıtım)

---

## ✨ Özellikler

✅ **Responsive Tasarım** - Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
✅ **Dark Mode** - Gece modu desteği (localStorage'da saklanır)
✅ **Scroll Animasyonu** - Header'ın scroll yönüne göre hareketli görünümü
✅ **4 Ana Sayfa**:
   - 🏠 **Anasayfa** - Hoş gelişin mesajı, tanıtım ve hızlı bağlantılar
   - 📖 **Hakkımda** - Hikaye, yetkinlikler ve kariyer hedefleri
   - 🎯 **Projeler** - 7 önemli projeden oluşan portfolyo
   - 📧 **İletişim** - E-mail, LinkedIn ve telefon bağlantıları

✅ **CV İndirme** - Bir tıkla CV PDF'ini indir
✅ **GitHub Entegrasyonu** - Tüm kodlara GitHub profilinden erişim

---

## 🛠️ Teknolojiler

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.2](https://react.dev/)
- **Dil**: [TypeScript 5](https://www.typescriptlang.org/)
- **Stil**: CSS3 (Modern CSS, Flexbox, Grid, Media Queries)
- **İkonlar**: [Font Awesome](https://fontawesome.com/)
- **Dağıtım**: [Vercel](https://vercel.com/)

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'i klonlayın:**
   ```bash
   git clone https://github.com/yusufaksuu21/portfolio.git
   cd portfolio
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

---

## 💻 Kullanım

### Kullanılabilir Komutlar

```bash
npm run dev      # Geliştirme sunucusunu başlat (hot reload)
npm run build    # Production için derle
npm run start    # Production sunucusunu başlat
npm run lint     # ESLint ile kod kalitesini kontrol et
```

### Dosya Yapısı

```
src/
├── app/
│   ├── page.tsx              # Anasayfa
│   ├── about/page.tsx        # Hakkımda sayfası
│   ├── projects/page.tsx     # Projeler sayfası
│   ├── contact/page.tsx      # İletişim sayfası
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global stiller
├── components/
│   ├── Header.tsx            # Navigasyon header'ı (scroll animasyonu)
│   └── Footer.tsx            # Footer bileşeni
```

---

## 📄 Sayfalar

### 🏠 Anasayfa (`/`)
- Hoş geldiniz mesajı ile başlıyor
- Yazılım Mühendisliği tanıtımı
- Front-end, Back-end ve Yapay Zeka alanlarında kısa bilgi
- "Projelerimi İncele" ve "İletişime Geç" butonları

### 📖 Hakkımda (`/about`)
- Kişisel hikaye ve yolculuk
- Yazılım geliştirmedeki felsefesi
- Hedefler ve vizyon

### 🎯 Projeler (`/projects`)
Şu 7 projeden oluşur:

1. **Kalıp Planı ve Yapısal Ön Boyutlandırma Aracı**
   - İnşaat mühendisleri için HTML5 Canvas + JavaScript
   - DXF, PDF, DOCX, JSON dışa aktarma

2. **Otonom Araç Tespit Uygulaması**
   - Python + YOLOv8 + OpenCV
   - Gerçek zamanlı RTSP akışı işleme

3. **AI Destekli Kariyer Destek Sistemi**
   - Python + Gemini API + Streamlit
   - Özgeçmiş analizi ve kariyer önerileri

4. **Akıllı Otopark Sistemi**
   - Django API + Flutter mobil arayüzü
   - Gerçek zamanlı araç takip ve doluluk

5. **Hastane Randevu Yönetim Sistemi**
   - Java Swing masaüstü uygulaması
   - SQL Server veritabanı entegrasyonu

6. **Kişisel Web Sitesi**
   - HTML, CSS, JavaScript

7. **Soru Bankası Sistemi (Bitirme Projesi)** 🏆
   - Django 4.2 + Gemini AI
   - Celery + Redis arka plan işleme

### 📧 İletişim (`/contact`)
- E-mail: Direct mail linki
- LinkedIn: Profil bağlantısı
- Telefon: Bağlantı bilgisi

---

## 🌟 Öne Çıkan Özellikler

### Scroll Animasyonu
Header aşağıya scroll yapılınca gizleniyor, yukarıya scroll yapılınca geri geliyor:
```typescript
// src/components/Header.tsx'de useEffect ile yapılıyor
const handleScroll = () => {
  if (currentY > lastScrollY && currentY > 120) {
    setHidden(true);
  } else {
    setHidden(false);
  }
};
```

### Dark Mode
localStorage'da kullanıcının tercihini saklar:
```typescript
const saved = localStorage.getItem("darkMode") === "true";
setIsDark(saved);
```

### Responsive Tasarım
- **Mobil** (≤768px): Hamburger menü
- **Tablet** (768px - 900px): Düzenlenmiş layout
- **Masaüstü** (>900px): Full layout

---

## 📦 Projelendirme

Bu proje şu araçlarla yönetiliyor:
- **Git**: Versiyon kontrolü
- **GitHub**: Kod deposu ve collaboration
- **ESLint**: Kod kalitesi kontrolü
- **TypeScript**: Tip güvenliği

---

## 🚀 Dağıtım

Site **Vercel**'de yayınlanmıştır: https://yusufaksu.vercel.app/

### Vercel'de Yayınlama (Kendi projeniz için)

1. GitHub hesabınızla Vercel'e giriş yapın
2. "New Project" tıklayın
3. Repository'i seçin
4. Deploy edin (otomatik build + deploy)

---

## 📞 İletişim

- 📧 **E-mail**: [E-mail Gönder](mailto:yusufaksu.dev@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/yusufaksu](https://linkedin.com/in/yusufaksu)
- 🐙 **GitHub**: [github.com/yusufaksuu21](https://github.com/yusufaksuu21)
- 🌐 **Portfolio**: [yusufaksu.vercel.app](https://yusufaksu.vercel.app/)
