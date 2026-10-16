export type SkillCategory = {
  title: string;
  icon: string;
  skills: { icon: string; label: string }[];
};

export const skillCategories: SkillCategory[] = [
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
