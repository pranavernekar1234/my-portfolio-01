"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Cloud,
  Code2,
  Server,
  Terminal,
  Award,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Cpu,
  Shield,
  Database,
  Gamepad2,
  Film,
  Trophy,
  BookOpen,
  Telescope,
  Sparkles,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS_ROW1 = [
  { label: "AWS EC2", icon: "☁️" },
  { label: "Terraform", icon: "🏗️" },
  { label: "Docker", icon: "🐳" },
  { label: "Kubernetes", icon: "⚙️" },
  { label: "Python", icon: "🐍" },
  { label: "Bash", icon: "💻" },
  { label: "GitHub Actions", icon: "🔄" },
  { label: "Jenkins", icon: "🔧" },
  { label: "AWS Lambda", icon: "λ" },
  { label: "CloudFormation", icon: "📐" },
  { label: "Ansible", icon: "📡" },
  { label: "Nginx", icon: "🌐" },
];

const SKILLS_ROW2 = [
  { label: "AWS IAM", icon: "🔐" },
  { label: "AWS S3", icon: "🗄️" },
  { label: "AWS RDS", icon: "🗃️" },
  { label: "VPC", icon: "🔒" },
  { label: "Route 53", icon: "🗺️" },
  { label: "CloudWatch", icon: "📊" },
  { label: "ECS", icon: "📦" },
  { label: "Linux", icon: "🐧" },
  { label: "PowerShell", icon: "⚡" },
  { label: "GitLab", icon: "🦊" },
  { label: "Apache", icon: "🪶" },
  { label: "AWS ELB", icon: "⚖️" },
];

const EXPERIENCE = [
  {
    role: "AWS Intern",
    company: "Internship Studio",
    period: "Sep 2024 – Dec 2024",
    type: "Internship",
    icon: <Cloud size={14} />,
    highlights: [
      "Worked with core AWS services including EC2, S3, IAM, and VPC",
      "Deployed and managed cloud infrastructure for various workloads",
      "Implemented monitoring solutions using CloudWatch",
    ],
  },
  {
    role: "Student Intern",
    company: "DX Systems",
    period: "Jun 2024 – Sep 2024",
    type: "Internship",
    icon: <Server size={14} />,
    highlights: [
      "Assisted in system administration and IT support operations",
      "Gained hands-on experience with enterprise infrastructure",
      "Contributed to automation scripts for routine tasks",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "KLE Technological University",
    location: "Hubballi",
    period: "2023 – 2024",
    icon: <GraduationCap size={14} />,
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Karnataka University",
    location: "Dharwad",
    period: "2019 – 2022",
    icon: <GraduationCap size={14} />,
  },
];

const CERTIFICATIONS = [
  { label: "Google Cloud Gen AI Academy", color: "rgba(66,133,244,0.15)", border: "rgba(66,133,244,0.3)" },
  { label: "Generative AI Mastermind", color: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
  { label: "AWS Cloud Practitioner Essentials", color: "rgba(255,153,0,0.12)", border: "rgba(255,153,0,0.3)" },
  { label: "AWS Cloud Quest", color: "rgba(255,153,0,0.10)", border: "rgba(255,153,0,0.25)" },
  { label: "Cloud Data Engineering", color: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)" },
  { label: "AWS Academy Cloud Foundations", color: "rgba(255,153,0,0.10)", border: "rgba(255,153,0,0.25)" },
  { label: "Java Basic — HackerRank", color: "rgba(0,235,100,0.10)", border: "rgba(0,235,100,0.25)" },
];

const FOCUS_AREAS = [
  {
    icon: <Cloud size={20} />,
    title: "Cloud Services",
    desc: "AWS expert focused on optimizing cloud performance and cost efficiency across EC2, S3, Lambda, and more.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Infrastructure as Code",
    desc: "Deep proficiency in Terraform and CloudFormation for reproducible, version-controlled infrastructure.",
  },
  {
    icon: <Layers size={20} />,
    title: "DevOps Practices",
    desc: "Building robust CI/CD pipelines with containerization via Docker, Kubernetes, and ECS.",
  },
  {
    icon: <Terminal size={20} />,
    title: "System Administration",
    desc: "Linux expertise with advanced shell scripting and automation to streamline operations.",
  },
];

const HOBBIES = [
  { label: "Anime & Movies", icon: <Film size={14} /> },
  { label: "Gaming", icon: <Gamepad2 size={14} /> },
  { label: "Volleyball", icon: <Trophy size={14} /> },
  { label: "Japanese Manga", icon: <BookOpen size={14} /> },
  { label: "Marvel & DC Comics", icon: <Sparkles size={14} /> },
  { label: "Astronomy", icon: <Telescope size={14} /> },
];

// ─── COMPONENTS ──────────────────────────────────────────

function MarqueeRow({ items, reverse = false }: { items: typeof SKILLS_ROW1; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="marquee-wrapper py-1 overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {doubled.map((item, i) => (
          <span key={i} className="skill-chip">
            <span>{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-subtitle">{children}</p>;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-card p-6 ${className}`}>{children}</div>;
}

// ─── MAIN PAGE ───────────────────────────────────────────

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="relative min-h-screen" style={{ background: "hsl(201,100%,13%)" }}>

      {/* ── VIDEO BACKGROUND ── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.7)" }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        {/* Multi-layer gradient overlay for deep cinematic feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,33,51,0.55) 0%, rgba(0,33,51,0.25) 40%, rgba(0,33,51,0.35) 70%, rgba(0,33,51,0.8) 100%)",
          }}
        />
        {/* Subtle radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,20,35,0.6) 100%)",
          }}
        />
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="flex justify-between items-center mb-10">
          <span
            className="text-xl font-normal"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            Pranav Vernekar
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-lg text-white/70 hover:text-white hover:bg-white/8 transition-all text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
              <ChevronRight size={14} className="opacity-40" />
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary btn-glass w-full justify-center">
            Contact Me
          </a>
        </div>
      </div>

      {/* ── CONTENT WRAPPER ── */}
      <div className="relative z-10">

        {/* ══ NAVBAR ══════════════════════════════════════════ */}
        <header
          className={`sticky top-0 z-30 transition-all duration-300 ${scrolled ? "glass-nav" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="text-3xl font-normal tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              Pranav Vernekar
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "hsl(var(--muted-foreground))",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--foreground))")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a href="#contact" className="btn-glass hidden md:inline-flex">
                Contact Me
              </a>
              <button
                className="md:hidden text-white/70 hover:text-white transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </header>

        {/* ══ HERO SECTION ════════════════════════════════════ */}
        <section
          id="home"
          className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40"
          style={{ minHeight: "92vh", justifyContent: "center" }}
        >
          {/* Floating badge */}
          <div className="animate-fade-in-up mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontFamily: "var(--font-body)",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                style={{ animation: "float 2s ease-in-out infinite" }}
              />
              Available for opportunities
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-in-up delay-100 font-normal leading-none text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 9vw, 7rem)",
              letterSpacing: "-0.04em",
              lineHeight: "0.95",
              maxWidth: "900px",
            }}
          >
            Hi, I&apos;m Pranav Vernekar.{" "}
            <br className="hidden sm:block" />
            A{" "}
            <span className="text-highlight-cloud">Cloud and DevOps</span>
            ,
            <br className="hidden sm:block" />
            <span className="text-highlight-ai">Generative AI Enthusiast</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up delay-200 max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
            style={{
              fontFamily: "var(--font-body)",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Specializing in modern cloud solutions, automation, and DevOps
            practices to help businesses achieve scalability, reliability, and
            efficiency.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn-primary btn-glass">
              View Projects
              <ArrowUpRight size={15} />
            </a>
            <a href="#contact" className="btn-glass">
              Get in Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-fade-in-up delay-500 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          >
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Scroll
            </span>
            <div
              className="w-px h-8"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
              }}
            />
          </div>
        </section>

        {/* ══ ABOUT SECTION ═══════════════════════════════════ */}
        <section id="about" className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Text column */}
              <div>
                <SectionLabel>About Me</SectionLabel>
                <h2 className="section-title mb-6">
                  Crafting reliable<br />
                  <span className="text-highlight-cloud">cloud infrastructure</span>
                </h2>
                <p
                  className="leading-relaxed mb-8 text-base"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: "1.8",
                  }}
                >
                  I&apos;m a passionate Cloud and DevOps Engineer with expertise in
                  building scalable infrastructure, implementing CI/CD pipelines,
                  and optimizing cloud resources. My focus is on creating
                  efficient, automated solutions that help businesses achieve
                  their technical goals.
                </p>

                {/* Quick links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass text-sm"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass text-sm"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Focus areas grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {FOCUS_AREAS.map((area, i) => (
                  <GlassCard key={i}>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.7)" }}>{area.icon}</span>
                    </div>
                    <h3
                      className="text-sm font-medium text-white mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "hsl(var(--muted-foreground))",
                        lineHeight: "1.7",
                      }}
                    >
                      {area.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SKILLS SECTION ══════════════════════════════════ */}
        <section id="skills" className="section-padding overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <SectionLabel>Technical Skills</SectionLabel>
            <h2 className="section-title">
              Tools &amp;{" "}
              <span className="text-highlight-ai">Technologies</span>
            </h2>
          </div>

          {/* AWS highlight cards */}
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-5"
              style={{
                fontFamily: "var(--font-body)",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              AWS Core Architecture
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { icon: <Cpu size={14} />, label: "EC2 & EFS", sub: "Compute & Storage" },
                { icon: <Shield size={14} />, label: "IAM & CloudWatch", sub: "Security & Monitoring" },
                { icon: <Server size={14} />, label: "ELB & Route 53", sub: "Load Balancing & DNS" },
                { icon: <Shield size={14} />, label: "VPC", sub: "Secure Networking" },
                { icon: <Database size={14} />, label: "S3 & RDS", sub: "Object & DB Storage" },
                { icon: <Cloud size={14} />, label: "CloudFormation", sub: "Infrastructure as Code" },
                { icon: <Code2 size={14} />, label: "Lambda", sub: "Serverless Compute" },
                { icon: <Layers size={14} />, label: "ECS & EKS", sub: "Container Services" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-4 flex items-start gap-3"
                  style={{ borderRadius: "0.75rem" }}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(255,153,0,0.12)",
                      border: "1px solid rgba(255,153,0,0.25)",
                      color: "rgba(255,180,50,0.9)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white" style={{ fontFamily: "var(--font-body)" }}>
                      {item.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "hsl(var(--muted-foreground))",
                      }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee rows */}
          <div className="flex flex-col gap-3">
            <MarqueeRow items={SKILLS_ROW1} />
            <MarqueeRow items={SKILLS_ROW2} reverse />
          </div>
        </section>

        {/* ══ EXPERIENCE & EDUCATION ══════════════════════════ */}
        <section id="experience" className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Work Experience */}
              <div>
                <SectionLabel>Work History</SectionLabel>
                <h2 className="section-title mb-10">
                  Professional<br />
                  <span className="text-highlight-cloud">Experience</span>
                </h2>
                <div className="relative pl-10">
                  <div className="timeline-line" />
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="relative flex gap-4 mb-8 last:mb-0">
                      <div className="timeline-node absolute -left-[1.875rem] top-1.5" />
                      <div className="glass-card p-5 flex-1" style={{ borderRadius: "0.875rem" }}>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3
                              className="text-sm font-medium text-white"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {exp.role}
                            </h3>
                            <p
                              className="text-xs mt-0.5"
                              style={{
                                fontFamily: "var(--font-body)",
                                color: "hsl(var(--muted-foreground))",
                              }}
                            >
                              {exp.company}
                            </p>
                          </div>
                          <span
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "hsl(var(--muted-foreground))",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                          {exp.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-xs"
                              style={{
                                fontFamily: "var(--font-body)",
                                color: "hsl(var(--muted-foreground))",
                                lineHeight: "1.6",
                              }}
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <SectionLabel>Academic Background</SectionLabel>
                <h2 className="section-title mb-10">
                  Education &<br />
                  <span className="text-highlight-ai">Certifications</span>
                </h2>

                {/* Education cards */}
                <div className="relative pl-10 mb-10">
                  <div className="timeline-line" />
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="relative flex gap-4 mb-6 last:mb-0">
                      <div className="timeline-node absolute -left-[1.875rem] top-1.5" />
                      <div className="glass-card p-5 flex-1" style={{ borderRadius: "0.875rem" }}>
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3
                              className="text-sm font-medium text-white"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {edu.degree}
                            </h3>
                            <p
                              className="text-xs mt-0.5"
                              style={{
                                fontFamily: "var(--font-body)",
                                color: "hsl(var(--muted-foreground))",
                              }}
                            >
                              {edu.institution} · {edu.location}
                            </p>
                          </div>
                          <span
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "hsl(var(--muted-foreground))",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "hsl(var(--muted-foreground))",
                    }}
                  >
                    Certifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATIONS.map((cert, i) => (
                      <span
                        key={i}
                        className="cert-badge"
                        style={{
                          background: cert.color,
                          borderColor: cert.border,
                        }}
                      >
                        <Award size={11} className="opacity-70" />
                        {cert.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECTS SECTION ════════════════════════════════ */}
        <section id="projects" className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="section-title mb-12">
              Projects &amp;{" "}
              <span className="text-highlight-cloud">Deployments</span>
            </h2>

            {/* Featured project card */}
            <div
              className="glass-card p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(255,153,0,0.4) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="relative z-10 grid md:grid-cols-2 gap-10">
                <div>
                  {/* Project label */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        background: "rgba(255,153,0,0.12)",
                        border: "1px solid rgba(255,153,0,0.25)",
                        color: "rgba(255,180,50,0.9)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Featured Project
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-normal text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
                  >
                    Multi-Tier Website Using AWS EC2
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "hsl(var(--muted-foreground))",
                      lineHeight: "1.8",
                    }}
                  >
                    Designed and deployed a scalable multi-tier architecture for a
                    PHP-based web application using Amazon EC2, Amazon RDS, and AWS
                    Auto Scaling. The solution included distinct layers for the web
                    server, application logic, and database — enabling high
                    availability and fault tolerance.
                  </p>

                  <a href="#contact" className="btn-glass text-sm">
                    <ExternalLink size={14} />
                    Learn More
                  </a>
                </div>

                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "hsl(var(--muted-foreground))",
                    }}
                  >
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS EC2", "ELB", "Auto Scaling", "Amazon RDS",
                      "VPC", "Route 53", "CloudWatch",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium"
                        style={{
                          background: "rgba(255,153,0,0.08)",
                          border: "1px solid rgba(255,153,0,0.2)",
                          color: "rgba(255,180,50,0.85)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Architecture diagram (visual only) */}
                  <div
                    className="mt-6 p-4 rounded-xl flex flex-col gap-2"
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest mb-3"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "hsl(var(--muted-foreground))",
                      }}
                    >
                      Architecture Layers
                    </p>
                    {[
                      { layer: "Presentation Layer", tech: "ELB + Route 53", color: "rgba(56,189,248,0.15)", border: "rgba(56,189,248,0.3)" },
                      { layer: "Application Layer", tech: "EC2 + Auto Scaling", color: "rgba(255,153,0,0.12)", border: "rgba(255,153,0,0.3)" },
                      { layer: "Data Layer", tech: "Amazon RDS + VPC", color: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)" },
                    ].map((l, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs"
                        style={{
                          background: l.color,
                          border: `1px solid ${l.border}`,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        <span className="text-white/80">{l.layer}</span>
                        <span style={{ color: "hsl(var(--muted-foreground))" }}>{l.tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT SECTION ═════════════════════════════════ */}
        <section id="contact" className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="section-title mb-4">
              Let&apos;s build something<br />
              <span className="text-highlight-ai">remarkable</span>
            </h2>
            <p
              className="max-w-xl text-sm leading-relaxed mb-12"
              style={{
                fontFamily: "var(--font-body)",
                color: "hsl(var(--muted-foreground))",
                lineHeight: "1.8",
              }}
            >
              Have a project in mind or want to discuss cloud and DevOps
              solutions? I&apos;d love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact details */}
              <div className="flex flex-col gap-4">
                <a href="mailto:vernekarpranav777@gmail.com" className="contact-link">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Mail size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-body)", color: "hsl(var(--muted-foreground))" }}
                    >
                      Email
                    </p>
                    <p className="text-sm text-white" style={{ fontFamily: "var(--font-body)" }}>
                      vernekarpranav777@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+918123674782" className="contact-link">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Phone size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-body)", color: "hsl(var(--muted-foreground))" }}
                    >
                      Phone
                    </p>
                    <p className="text-sm text-white" style={{ fontFamily: "var(--font-body)" }}>
                      +91 8123674782
                    </p>
                  </div>
                </a>

                <div className="contact-link" style={{ cursor: "default" }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <MapPin size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ fontFamily: "var(--font-body)", color: "hsl(var(--muted-foreground))" }}
                    >
                      Location
                    </p>
                    <p className="text-sm text-white" style={{ fontFamily: "var(--font-body)" }}>
                      Karwar, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Hobbies panel */}
              <div className="glass-card p-6" style={{ height: "fit-content" }}>
                <p
                  className="text-xs uppercase tracking-widest mb-5"
                  style={{ fontFamily: "var(--font-body)", color: "hsl(var(--muted-foreground))" }}
                >
                  Beyond the Terminal
                </p>
                <div className="flex flex-wrap gap-2">
                  {HOBBIES.map((hobby, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "var(--font-body)",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.55)" }}>{hobby.icon}</span>
                      {hobby.label}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "hsl(var(--muted-foreground))",
                      lineHeight: "1.7",
                    }}
                  >
                    When not deploying infrastructure, you&apos;ll find me
                    exploring the cosmos through an eyepiece, following manga
                    storylines, or rallying on a volleyball court.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══════════════════════════════════════════ */}
        <footer
          className="relative z-10 px-6 py-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span
              className="text-xl font-normal tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              Pranav Vernekar
            </span>

            <p
              className="text-xs text-center"
              style={{
                fontFamily: "var(--font-body)",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              © 2026 Pranav Vernekar. All rights reserved. Cloud Engineer &amp;
              DevOps Enthusiast
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:vernekarpranav777@gmail.com"
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </footer>
      </div>
      {/* END content wrapper */}
    </div>
  );
}