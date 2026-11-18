const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const outputDir = __dirname;
const outputPath = path.join(outputDir, "Vishal_Gautam_Resume.pdf");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 54, bottom: 54, left: 54, right: 54 },
  info: {
    Title: "Vishal Gautam - Resume",
    Author: "Vishal Gautam",
    Subject: "Software Engineer Resume",
    Keywords:
      "Software Engineer, Full Stack, MERN, .NET, Python, MES, DELMIA Apriso, VizRT, AI",
  },
});

doc.pipe(fs.createWriteStream(outputPath));

const colors = {
  text: "#111111",
  muted: "#444444",
  accent: "#0f3a8a",
  rule: "#888888",
};

function horizontalRule() {
  const y = doc.y + 4;
  doc
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.width - doc.page.margins.right, y)
    .lineWidth(0.6)
    .strokeColor(colors.rule)
    .stroke();
  doc.moveDown(0.6);
}

function sectionHeading(title) {
  doc.moveDown(0.6);
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(colors.accent)
    .text(title.toUpperCase(), { characterSpacing: 1 });
  horizontalRule();
}

function bullet(text) {
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor(colors.text)
    .list([text], {
      bulletRadius: 1.6,
      textIndent: 12,
      bulletIndent: 4,
      paragraphGap: 2,
      lineGap: 2,
    });
}

function paragraph(text) {
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor(colors.text)
    .text(text, {
      align: "justify",
      lineGap: 2,
      paragraphGap: 4,
    });
}

function roleHeader({ company, role, location, duration }) {
  doc.moveDown(0.4);

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(colors.text)
    .text(company, { continued: true })
    .font("Helvetica")
    .fillColor(colors.muted)
    .text(`   ${duration}`, { align: "left" });

  doc
    .font("Helvetica-Oblique")
    .fontSize(11)
    .fillColor(colors.text)
    .text(`${role} | ${location}`);

  doc.moveDown(0.2);
}

doc
  .font("Helvetica-Bold")
  .fontSize(22)
  .fillColor(colors.text)
  .text("VISHAL GAUTAM", { align: "center" });

doc
  .moveDown(0.2)
  .font("Helvetica")
  .fontSize(11)
  .fillColor(colors.muted)
  .text(
    "Software Engineer | AI-Augmented Developer | .NET & MERN Stack",
    { align: "center" }
  );

doc
  .moveDown(0.2)
  .font("Helvetica")
  .fontSize(10)
  .fillColor(colors.text)
  .text(
    "India | +91 8076542834 | vishalgautam271999@gmail.com",
    { align: "center" }
  );

doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(colors.text)
  .text(
    "linkedin.com/in/vishal-gautam327 | github.com/vishal327 | instagram.com/vishalgautam327",
    { align: "center" }
  );

doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(colors.accent)
  .text(
    "Portfolio: https://vishal327.github.io/portfolio_vishal",
    { align: "center", link: "https://vishal327.github.io/portfolio_vishal", underline: true }
  )
  .fillColor(colors.text);

sectionHeading("Professional Summary");
paragraph(
  "Software engineer with 4+ years of experience across enterprise manufacturing systems, full-stack web development, and live sports broadcast technology. Skilled in MERN stack, .NET, Python, DELMIA Apriso MES, VizRT scripting, and AI-assisted development workflows. Adept at delivering reliable, scalable software in production-critical environments and collaborating with global teams across time zones."
);

sectionHeading("Core Skills");

doc
  .font("Helvetica")
  .fontSize(10.5)
  .fillColor(colors.text)
  .text("Languages: Python, JavaScript, C#, Java, TypeScript, SQL");

doc.text(
  "Frontend: React, HTML, CSS, Tailwind CSS, Responsive UI, Component Architecture"
);
doc.text(
  "Backend: Node.js, Express, .NET, Python, REST APIs, WebSockets, Microservices"
);
doc.text(
  "Databases: SQL Server, MySQL, PostgreSQL, MongoDB"
);
doc.text(
  "Enterprise Systems: DELMIA Apriso MES, MES Implementation, Production Automation, UAT, Deployment Support"
);
doc.text(
  "Broadcast Technology: VizRT Scripting (Visual Basic), Live Data Pipelines, Graphics Automation"
);
doc.text(
  "AI Tools: ChatGPT, Cursor AI, Claude Sonnet, AI-Assisted Debugging and Solution Design"
);
doc.text(
  "Tools & Platforms: Git, GitHub, Figma, Postman, JIRA, Linux/Windows"
);
doc.text(
  "Strengths: Ownership, Communication, Adaptability, On-site Production Support, Cross-Team Collaboration"
);

sectionHeading("Professional Experience");

roleHeader({
  company: "wTVision",
  role: "Software Development Engineer",
  location: "India / On-Site Live Events",
  duration: "Nov 2024 - Present",
});
[
  "Develop MERN stack applications for sports data management and operator-facing tools used in live broadcast productions.",
  "Build Python-based data pipelines and integrate external APIs and WebSocket feeds to drive real-time on-air systems.",
  "Maintain and extend internal .NET applications and VizRT Visual Basic scripts that connect live data with broadcast graphics.",
  "Deploy and support systems on-site for major events including IPL, international cricket, tennis, golf, and kabaddi productions.",
  "Train operators, troubleshoot live issues, and handle last-minute client requirements during high-pressure broadcasts.",
  "Use AI tooling such as ChatGPT, Cursor AI, and Claude to accelerate debugging, stress testing, and solution design while preserving production quality.",
].forEach(bullet);

roleHeader({
  company: "Tata Consultancy Services",
  role: "Associate System Engineer",
  location: "India (Global Delivery for Europe and China Plants)",
  duration: "Dec 2021 - Nov 2024",
});
[
  "Implemented and customized DELMIA Apriso MES for one of the world's largest steel wire transformation and coating manufacturers.",
  "Automated key manufacturing workflows across production, quality, maintenance, and warehouse operations.",
  "Collaborated with global stakeholders, plant teams, and business analysts during requirements, UAT, and go-live phases.",
  "Provided production support and incident handling for live operational environments across multiple time zones.",
  "Improved manufacturing efficiency and reduced manual intervention through process digitization and automation.",
].forEach(bullet);

roleHeader({
  company: "Head Field Solutions Pvt. Ltd.",
  role: "Technical Recruiter (US IT Recruitment)",
  location: "Noida, India (On-site)",
  duration: "Feb 2020 - Apr 2020",
});
[
  "Joined during the third year of B.Tech to build communication and English fluency through a client-facing role.",
  "Worked as a US IT recruiter, designing and executing recruitment strategies for technical positions.",
  "Sourced, screened, and evaluated candidates against client and project-specific requirements.",
  "Collaborated with internal teams and US clients to understand hiring needs and shortlist suitable candidates.",
  "Gained experience operating across multiple US time zones from India in a deadline-driven environment.",
].forEach(bullet);

sectionHeading("Project Highlights");
[
  "Manufacturing Digitization: Delivered end-to-end MES automation for global manufacturing environments, digitizing plant-level operations across production, quality, maintenance, and warehouse functions.",
  "Broadcast Graphics Automation: Contributed to live sports broadcast systems requiring real-time data processing, low-latency communication, and reliable on-air graphics.",
  "VizRT Live Data Workflows: Scripted automation that maps live sports data into broadcast graphics, reducing manual operator effort during productions.",
  "AI-Assisted Engineering: Built productive workflows using ChatGPT, Claude, and Cursor for faster debugging, refactoring, and solution design.",
].forEach(bullet);

sectionHeading("Education");
doc
  .font("Helvetica-Bold")
  .fontSize(11)
  .fillColor(colors.text)
  .text("Bachelor of Technology (B.Tech) in Computer Science");
doc
  .font("Helvetica")
  .fontSize(10.5)
  .fillColor(colors.text)
  .text("BS Anangpuria Institute of Technology and Management");
doc
  .font("Helvetica")
  .fontSize(10.5)
  .fillColor(colors.muted)
  .text("JC Bose University of Technology and Management, YMCA");
doc
  .font("Helvetica")
  .fontSize(10.5)
  .fillColor(colors.muted)
  .text("Aug 2017 - Aug 2021");

sectionHeading("Additional Information");
[
  "Open to roles in Full-Stack Development, Manufacturing Systems, AI-Enabled Workflows, and Broadcast Technology.",
  "Comfortable with on-site production support, live event deployments, and cross-team collaboration.",
  "Portfolio: vishal327.github.io/portfolio_vishal",
].forEach(bullet);

doc.end();

doc.on("end", () => {
  console.log(`Resume generated at: ${outputPath}`);
});
