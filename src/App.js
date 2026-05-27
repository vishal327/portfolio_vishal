import React from "react";
import profileImage from "./assets/profile.png";

const heroParagraphs = [
  "I am a software engineer with over 4+ years of experience working across manufacturing technology, full-stack development, and live broadcast graphics systems. My work sits at the intersection of reliable engineering and real-world execution, whether that means digitizing plant operations for global manufacturers or delivering real-time data systems for high-pressure sports productions.",
  "I enjoy building practical solutions with MERN, .NET, Python, and AI-assisted development workflows. I am especially drawn to projects where software has to perform reliably in dynamic environments and where speed, ownership, and problem solving directly impact outcomes.",
];

const aboutParagraphs = [
  "My background spans two demanding domains: enterprise manufacturing systems and sports broadcast technology. In manufacturing, I have worked extensively with DELMIA Apriso MES to automate production, quality, maintenance, and warehouse workflows for large-scale global operations. In sports technology, I have built and supported systems that process live data, drive broadcast graphics, and help production teams deliver smooth on-air experiences across major events.",
  "Beyond writing code, I value understanding the environment in which software is used. That mindset has helped me work effectively with plant teams, global stakeholders, broadcasters, operators, and fast-moving production teams. I aim to build software that is not only technically sound, but also dependable when it matters most.",
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", ".NET", "Python", "REST APIs"],
  },
  {
    title: "Data & Tools",
    items: ["SQL Server", "MongoDB", "Git", "Figma"],
  },
];

const timeline = [
  {
    company: "wTVision",
    role: "Software Development Engineer",
    label: "Live Productions",
    duration: "Nov 2024 - Present",
    bullets: [
      "Build MERN applications and Python data pipelines for sports workflows.",
      "Integrate live feeds, WebSockets, and graphics tooling for on-air delivery.",
      "Support venue deployments and operator-facing systems under live deadlines.",
    ],
    details: [
      "At wTVision, I work on sports broadcast and real-time graphics systems where software reliability directly affects live productions. My role includes developing MERN stack applications for sports data management, building Python-based data pipelines, integrating external APIs and WebSocket feeds, and supporting internal .NET applications used in graphics workflows.",
      "I also work with VizRT scripting in Visual Basic to connect live data with on-screen broadcast graphics and automate operator tasks. Beyond development, I travel to live venues, deploy systems on site, train operators, and handle last-minute client requirements during major events. This has given me hands-on experience across IPL, international cricket, tennis, golf, kabaddi, and other live sports productions where fast decisions and stable systems are essential.",
      "In this environment, I regularly use AI tools such as ChatGPT, Cursor AI, and Claude to accelerate debugging, stress testing, and solution design, helping me move quickly while maintaining quality under pressure.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Associate System Engineer",
    label: "Industry 4.0",
    duration: "Dec 2021 - Nov 2024",
    bullets: [
      "Implemented DELMIA Apriso MES solutions for global manufacturing plants.",
      "Automated production, maintenance, quality, and warehouse processes.",
      "Worked across UAT, deployment, and production support with distributed teams.",
    ],
    details: [
      "During my time at TCS, I worked on MES implementation for one of the world's largest steel wire transformation and coating manufacturers. My work focused on automating critical manufacturing processes across production, quality, maintenance, and warehouse operations using DELMIA Apriso.",
      "I supported large-scale operations across Europe and China plants, collaborated with global teams during deployment and UAT cycles, and contributed to production support in live operational environments. This role strengthened my understanding of industrial systems, business process digitization, and the importance of building software that improves efficiency while reducing manual intervention.",
    ],
  },
  {
    company: "Head Field Solutions Pvt. Ltd.",
    role: "Technical Recruiter",
    label: "US IT Recruiter",
    duration: "Feb 2020 - Apr 2020",
    bullets: [
      "Joined during my 3rd year of B.Tech to strengthen communication skills and improve English fluency.",
      "Worked as a US IT recruiter, designing and executing recruitment strategies for technical roles.",
      "Sourced, screened, and evaluated candidates based on client requirements.",
      "Collaborated with clients and internal teams to understand hiring needs.",
      "Gained experience working across multiple US time zones from India.",
    ],
    details: [
      "Head Field Solutions Pvt. Ltd. | Feb 2020 - Apr 2020 | Noida, India (On-site)",
      "This experience helped me build communication confidence early in my career while learning how to operate in a client-facing, deadline-driven environment.",
    ],
  },
];

const portfolioProjects = [
  {
    title: "Logic Gate Simulator",
    tags: ["React", "JavaScript", "Digital Logic", "Interactive UI"],
    description:
      "An interactive logic gate learning tool where users can build and visualize digital circuits. The preview shows the live UI in action—drag, connect, and watch signals flow through gates in real time.",
    clip: `${process.env.PUBLIC_URL}/clips/logicGateProjectClip.mp4`,
    links: [{ label: "View on GitHub", href: "https://github.com/vishal327" }],
  },
];

const projectHighlights = [
  {
    title: "Broadcast Graphics Automation",
    tags: ["MERN", "Python", "WebSockets", "VizRT"],
    description:
      "End-to-end sports broadcast systems with real-time data processing, low-latency communication, and VizRT graphics automation for live productions.",
  },
  {
    title: "Manufacturing Digitization",
    tags: ["DELMIA Apriso", "MES", "SQL", "Automation"],
    description:
      "MES automation for global manufacturing—digitizing production, quality, maintenance, and warehouse workflows across large-scale plant operations.",
  },
];

const socialLinks = [
  {
    label: "Phone",
    short: "ph",
    href: "tel:+918076542834",
  },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/vishal-gautam327",
  },
  {
    label: "GitHub",
    short: "gh",
    href: "https://github.com/vishal327",
  },
  {
    label: "Instagram",
    short: "ig",
    href: "https://www.instagram.com/vishalgautam327",
  },
  {
    label: "Email",
    short: "@",
    href: "mailto:vishalgautam271999@gmail.com",
  },
];

const skillParagraphs = [
  "My technical skill set includes Python, JavaScript, C#, and Java, with practical development experience across the MERN stack and .NET ecosystems. I work with technologies such as DELMIA Apriso MES, VizRT, REST APIs, and WebSockets, and I am comfortable building applications that rely on real-time data exchange and reliable backend integration.",
  "I have also worked with SQL Server, MySQL, and PostgreSQL for data-driven systems, and I actively incorporate modern AI tools such as ChatGPT, Cursor AI, and Claude Sonnet into my workflow for faster development, debugging, and experimentation. My strengths lie in ownership, adaptability, and the ability to deliver calmly in high-pressure production settings.",
];

const contactParagraph =
  "I am open to software engineering opportunities involving full-stack development, manufacturing systems, real-time applications, AI-assisted workflows, and broadcast technology. If you would like to discuss a role, project, or collaboration, feel free to reach out by phone or email, or connect with me through GitHub, LinkedIn, and Instagram.";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Professional Roles" },
  { value: "2", label: "Core Domains" },
  { value: "10+", label: "Technologies Used" },
];

const capabilityTiles = [
  {
    title: "Frontend",
    accent: "from-sky-400/20 to-cyan-400/5",
    items: ["React", "Next.js mindset", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    accent: "from-blue-400/20 to-sky-400/5",
    items: ["Node.js", ".NET", "Python", "REST APIs"],
  },
  {
    title: "Enterprise Systems",
    accent: "from-emerald-400/20 to-green-400/5",
    items: ["DELMIA Apriso", "MES", "Manufacturing", "Workflows"],
  },
  {
    title: "AI & Data",
    accent: "from-amber-400/20 to-orange-400/5",
    items: ["ChatGPT", "Claude", "Cursor", "Data pipelines"],
  },
  {
    title: "Broadcast Tech",
    accent: "from-cyan-400/20 to-blue-400/5",
    items: ["VizRT", "Live data", "Graphics", "WebSockets"],
  },
  {
    title: "Tools",
    accent: "from-pink-400/20 to-rose-400/5",
    items: ["Git", "Figma", "SQL Server", "MongoDB"],
  },
];

function SocialIcon({ name, className = "h-5 w-5" }) {
  switch (name) {
    case "Phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.25 8h4.5V23H.25V8Zm7.25 0h4.31v2.05h.06c.6-1.13 2.07-2.32 4.27-2.32 4.57 0 5.41 3.01 5.41 6.93V23h-4.5v-6.66c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V23H7.5V8Z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.94 10.94 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Email":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}

function Panel({ children, className = "" }) {
  return (
    <section
      className={`rounded-[28px] border border-white/10 bg-slate-950/65 shadow-[0_20px_80px_rgba(2,8,23,0.7)] backdrop-blur-xl ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ${className}`}
    >
      {children}
    </span>
  );
}

function LinkButton({ href, children, variant = "primary" }) {
  const classes =
    variant === "primary"
      ? "border-blue-400/50 bg-blue-500/20 text-blue-100 hover:bg-blue-500/30"
      : "border-white/10 bg-white/5 text-slate-100 hover:bg-white/10";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-2xl border px-5 py-3 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </a>
  );
}

function ProjectClipCard({ project }) {
  return (
    <Panel className="group overflow-hidden">
      <div className="relative aspect-video overflow-hidden rounded-t-[28px] border-b border-white/10 bg-slate-900">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <video
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          src={project.clip}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} preview`}
        />
        <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-200 backdrop-blur-sm">
          Live preview
        </span>
      </div>

      <div className="px-6 py-6 sm:px-7">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag} className="bg-white/10 text-slate-100">
              {tag}
            </Pill>
          ))}
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {project.description}
        </p>
        {project.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <LinkButton
                key={link.label}
                href={link.href}
                variant="secondary"
              >
                {link.label}
              </LinkButton>
            ))}
          </div>
        ) : null}
      </div>
    </Panel>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_24%),radial-gradient(circle_at_75%_18%,_rgba(14,165,233,0.22),_transparent_18%),linear-gradient(180deg,_#040b1f_0%,_#020617_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <main className="relative mx-auto max-w-[1380px] px-4 py-5 sm:px-6 lg:px-8">
          <Panel className="sticky top-4 z-20 px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-xl font-bold tracking-tight text-white">VISHAL.</div>

              <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <LinkButton href="#contact">Let&apos;s Connect</LinkButton>
            </div>
          </Panel>

          <section
            id="home"
            className="mt-8 grid gap-6 lg:grid-cols-[68px_minmax(0,1.1fr)_minmax(340px,520px)]"
          >
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-5">
              <div className="mt-16 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-blue-300/40 hover:text-blue-200"
                    aria-label={link.label}
                  >
                    <SocialIcon name={link.label} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
              <span className="h-24 w-px bg-gradient-to-b from-blue-300/70 to-transparent" />
            </div>

            <Panel className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-blue-300">
                Software Engineer
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                I build solutions that{" "}
                <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                  scale.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                Software Engineer | AI-Augmented Developer | .NET & MERN Stack
              </p>

              <div className="mt-6 space-y-4">
                {heroParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-3xl text-sm leading-7 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton href="#projects">View My Work</LinkButton>
                <LinkButton href="#experience" variant="secondary">
                  Explore Experience
                </LinkButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>India</Pill>
                <Pill>4+ Years Experience</Pill>
                <Pill>Manufacturing + Broadcast Tech</Pill>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-300/40 hover:text-blue-200"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-blue-200">
                      <SocialIcon name={link.label} className="h-4 w-4" />
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </Panel>

            <Panel className="overflow-hidden px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-slate-400">
                <span>Current Focus</span>
                <span>05</span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.96))] px-6 py-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.4),_transparent_38%)]" />
                <div className="pointer-events-none absolute inset-x-12 top-10 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

                <div className="relative flex justify-center">
                  <div className="rounded-full border border-blue-300/40 bg-slate-950/70 p-2 shadow-[0_0_70px_rgba(59,130,246,0.45)]">
                    <img
                      src={profileImage}
                      alt="Vishal Gautam"
                      className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72"
                    />
                  </div>
                </div>

                <div className="relative mt-8 rounded-3xl border border-white/10 bg-slate-950/75 p-4">
                  <div className="flex items-center gap-2 text-sm text-emerald-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Currently Exploring
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill className="bg-blue-500/10 px-4 py-2 text-base font-semibold text-blue-100 sm:text-lg">
                      AI Systems
                    </Pill>
                    <Pill className="bg-sky-500/10 px-4 py-2 text-base font-semibold text-sky-100 sm:text-lg">
                      DELMIA Apriso
                    </Pill>
                    <Pill className="bg-emerald-500/10 px-4 py-2 text-base font-semibold text-emerald-100 sm:text-lg">
                      Game Development
                    </Pill>
                  </div>
                </div>
              </div>
            </Panel>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Panel key={stat.label} className="px-5 py-5">
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </Panel>
            ))}
          </section>

          <section
            id="about"
            className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <Panel className="px-6 py-7 sm:px-8">
              <SectionHeading
                eyebrow="About Me"
                title={
                  <>
                    Turning ideas into impactful{" "}
                    <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                      solutions.
                    </span>
                  </>
                }
                subtitle="I specialize in building robust, scalable, and user-centric applications that perform well in production and in the real world."
              />

              <div className="mt-6 space-y-4">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-300 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <LinkButton href="#contact" variant="secondary">
                  More About Me
                </LinkButton>
              </div>
            </Panel>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {capabilityTiles.map((tile) => (
                <Panel
                  key={tile.title}
                  className={`bg-gradient-to-br ${tile.accent} px-5 py-5`}
                >
                  <h3 className="text-lg font-semibold text-white">{tile.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {tile.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Panel>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
          >
            <Panel className="px-6 py-7 sm:px-8">
              <SectionHeading
                eyebrow="Tech Stack"
                title="Platforms, languages, and systems I work with."
              />

              <div className="mt-6 space-y-4">
                {skillParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-300 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {stackGroups.map((group) => (
                  <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel className="px-6 py-7 sm:px-8">
              <SectionHeading
                eyebrow="AI Driven Workflow"
                title="How I use modern tooling without losing engineering quality."
              />

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                <p>
                  I use ChatGPT, Claude, and Cursor to accelerate debugging, stress
                  testing, refactoring, and solution design while keeping production
                  quality standards high.
                </p>
                <p>
                  My workflow combines fast ideation with disciplined execution:
                  clarify the problem, validate approaches quickly, then implement in
                  a way that is maintainable for live systems and enterprise teams.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-blue-200">Research</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Explore options, compare approaches, and prepare implementation plans.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-sky-200">Build</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Ship features faster with AI-assisted scaffolding, debugging, and review.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-emerald-200">Refine</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Tighten reliability, improve clarity, and keep production standards intact.
                  </p>
                </div>
              </div>
            </Panel>
          </section>

          <section id="experience" className="mt-12">
            <SectionHeading
              eyebrow="Experience"
              title="Roles where delivery, ownership, and reliability mattered."
              subtitle="Every role below retains the full detail from your current portfolio while presenting it in a cleaner, more visual format."
            />

            <div className="mt-8 space-y-6">
              {timeline.map((item, index) => (
                <Panel key={item.company} className="px-6 py-7 sm:px-8">
                  <div className="grid gap-6 xl:grid-cols-[150px_minmax(0,1fr)]">
                    <div className="flex flex-col gap-3">
                      <Pill className="w-fit border-blue-400/20 bg-blue-500/10 text-blue-100">
                        {item.label}
                      </Pill>
                      <div className="hidden xl:flex xl:items-center xl:gap-3">
                        <span className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
                        {index !== timeline.length - 1 ? (
                          <span className="h-24 w-px bg-gradient-to-b from-blue-300/60 to-transparent" />
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{item.company}</h3>
                          <p className="mt-1 text-base font-medium text-blue-200">
                            {item.role}
                          </p>
                        </div>
                        <Pill className="w-fit text-slate-200">{item.duration}</Pill>
                      </div>

                      <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>

                      <div className="mt-5 space-y-4">
                        {item.details.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-7 text-slate-300 sm:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Panel>
              ))}
            </div>
          </section>

          <section id="projects" className="mt-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="My Projects"
                title="Things I&apos;ve built."
                subtitle="Scroll through live previews of apps and tools I have shipped. Each card loops a short clip so you can see the product in motion before diving in."
              />
              <LinkButton href="#contact" variant="secondary">
                Let&apos;s Build Together
              </LinkButton>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {portfolioProjects.map((project) => (
                <ProjectClipCard key={project.title} project={project} />
              ))}
            </div>

            <div className="mt-10">
              <SectionHeading
                eyebrow="Professional Highlights"
                title="Work that shaped my engineering path."
                subtitle="Beyond personal builds, these domains reflect the systems I deliver in manufacturing and live broadcast environments."
              />
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {projectHighlights.map((project) => (
                <Panel key={project.title} className="overflow-hidden px-6 py-6 sm:px-7">
                  <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(15,23,42,0.15))] p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Pill key={tag} className="bg-white/10 text-slate-100">
                          {tag}
                        </Pill>
                      ))}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </Panel>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
          >
            <Panel className="px-6 py-7 sm:px-8">
              <SectionHeading
                eyebrow="Let&apos;s Connect"
                title="Start a conversation."
                subtitle={contactParagraph}
              />

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-200 transition hover:text-blue-200"
                  >
                    <SocialIcon name={link.label} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Panel>

            <Panel className="px-6 py-7 sm:px-8">
              <div className="rounded-[28px] border border-white/10 bg-[#080b18] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-sm text-slate-300">vishal@portfolio:~</span>
                </div>

                <div className="mt-6 space-y-4 font-mono text-sm leading-7 text-slate-300">
                  <p>
                    <span className="text-emerald-300">vishal@portfolio:~$</span> whoami
                    <br />
                    Software Engineer focused on reliable systems, modern web apps,
                    and real-world delivery.
                  </p>
                  <p>
                    <span className="text-emerald-300">vishal@portfolio:~$</span>{" "}
                    current_focus
                    <br />
                    Full-stack development, AI-assisted workflows, MES platforms,
                    and broadcast technology.
                  </p>
                  <p>
                    <span className="text-emerald-300">vishal@portfolio:~$</span>{" "}
                    contact
                    <br />
                    <a
                      href="tel:+918076542834"
                      className="text-blue-200 hover:text-blue-100"
                    >
                      +91 8076542834
                    </a>
                    <br />
                    <a
                      href="mailto:vishalgautam271999@gmail.com"
                      className="text-blue-200 hover:text-blue-100"
                    >
                      vishalgautam271999@gmail.com
                    </a>
                    <br />
                    <a
                      href="https://www.instagram.com/vishalgautam327"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-200 hover:text-blue-100"
                    >
                      instagram.com/vishalgautam327
                    </a>
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="https://github.com/vishal327" variant="secondary">
                    GitHub Profile
                  </LinkButton>
                </div>
              </div>
            </Panel>
          </section>
        </main>
      </div>
    </div>
  );
}
