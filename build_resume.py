import pymupdf, shutil, os

html = """
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: sans-serif;
    color: #111827;
    font-size: 8.0pt;
    line-height: 1.27;
    margin: 0;
    padding: 0;
  }
  
  .header {
    text-align: center;
    margin-bottom: 3px;
  }
  .name {
    font-size: 15.5pt;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: #0f172a;
    margin-bottom: 1.5px;
  }
  .role {
    font-size: 9.2pt;
    font-weight: bold;
    color: #2563eb;
    letter-spacing: 1.1px;
    margin-bottom: 2.5px;
  }
  .contact {
    font-size: 8.0pt;
    color: #334155;
  }
  .contact a {
    color: #1d4ed8;
    text-decoration: none;
  }
  .sep {
    color: #94a3b8;
    margin: 0 5px;
  }
  
  .section-title {
    font-size: 8.8pt;
    font-weight: bold;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    border-bottom: 1.2px solid #0f172a;
    padding-bottom: 1px;
    margin-top: 4.5px;
    margin-bottom: 2.5px;
  }
  
  .summary {
    font-size: 7.9pt;
    line-height: 1.27;
    text-align: justify;
    color: #1e293b;
  }

  .skills-box {
    font-size: 7.8pt;
    line-height: 1.25;
    color: #1e293b;
  }
  .skills-box div {
    margin-bottom: 1.2px;
  }
  .skills-box strong {
    color: #0f172a;
  }

  .edu-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.0pt;
  }
  .edu-table td {
    padding: 0.5px 0;
    vertical-align: top;
  }
  .edu-right {
    text-align: right;
    white-space: nowrap;
    color: #475569;
    font-weight: 600;
  }
  .coursework {
    font-size: 7.5pt;
    color: #475569;
    margin-top: 0.5px;
    line-height: 1.24;
  }

  .project-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 0.5px;
  }
  .project-table td {
    padding: 0;
    vertical-align: baseline;
  }
  .project-left {
    text-align: left;
  }
  .project-right {
    text-align: right;
    white-space: nowrap;
    font-size: 7.9pt;
    font-weight: bold;
    padding-left: 8px;
  }
  .project-right a {
    color: #1d4ed8;
    text-decoration: none;
  }
  .project-title {
    font-size: 8.4pt;
    font-weight: bold;
    color: #0f172a;
  }
  .project-tech {
    font-size: 7.6pt;
    font-weight: normal;
    color: #2563eb;
  }
  .project-desc {
    font-size: 7.9pt;
    line-height: 1.26;
    color: #1e293b;
    margin-top: 1px;
    margin-bottom: 1.5px;
    text-align: justify;
  }
  .project-desc strong {
    color: #0f172a;
  }
  .project-bullets {
    margin: 0;
    padding-left: 12px;
    font-size: 7.7pt;
    line-height: 1.23;
    color: #334155;
    margin-bottom: 2.8px;
  }
  .project-bullets li {
    margin-bottom: 0.3px;
  }

  .honors-list {
    margin: 0;
    padding-left: 12px;
    font-size: 7.8pt;
    line-height: 1.24;
  }
  .honors-list li {
    margin-bottom: 1.5px;
    color: #1e293b;
  }
  .honors-list strong {
    color: #0f172a;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">ABHINAV TRIPATHI</div>
  <div class="role">SOFTWARE ENGINEER INTERN</div>
  <div class="contact">
    Lucknow, India <span class="sep">&bull;</span>
    <a href="mailto:at84004630@gmail.com">at84004630@gmail.com</a> <span class="sep">&bull;</span>
    <a href="https://www.linkedin.com/in/abhinav-tripathi-22236a2a6/">linkedin.com/in/abhinav-tripathi</a> <span class="sep">&bull;</span>
    <a href="https://github.com/at84004630-del">github.com/at84004630-del</a>
  </div>
</div>

<div class="section-title">PROFESSIONAL SUMMARY</div>
<div class="summary">
  Software Engineering candidate with deep practical experience building high-performance backend microservices, event-driven streaming pipelines, and containerized systems in Python, Java, and TypeScript. Skilled in relational schema architecture, API gateway design, distributed debugging, and enterprise compliance integration. Proven track record of developing resilient technical solutions recognized across national hackathons (SBI Global Fintech Fest, IBM Bob 2.0). Strong focus on observability, comprehensive automated testing, and developer tooling.
</div>

<div class="section-title">TECHNICAL SKILLS</div>
<div class="skills-box">
  <div><strong>Programming Languages:</strong> Python (AsyncIO, OOP, Scripting), Java (Core Java, OOP, Collections), TypeScript, JavaScript, SQL, Rust</div>
  <div><strong>Cloud &amp; DevOps:</strong> Docker, Containerization, Google Cloud Platform (Cloud Run, Cloud Storage, Pub/Sub), CI/CD (GitHub Actions), Linux/Unix CLI, Bash</div>
  <div><strong>Systems &amp; Web Architecture:</strong> FastAPI, RESTful APIs, Next.js, Server-Sent Events (SSE), WebSockets, Microservices, JSON Schema, Redis (Caching)</div>
  <div><strong>Databases &amp; Storage:</strong> PostgreSQL, MySQL, SQLite, Relational Database Design, Query Optimization, Indexing, SQLAlchemy ORM, ACID Transactions</div>
  <div><strong>Software Engineering:</strong> Automated Testing (PyTest), Code Reviews &amp; Style Guidelines, Incident Diagnostics &amp; Bug Triaging, Technical Documentation, Git, GitHub</div>
</div>

<div class="section-title">EDUCATION</div>
<table class="edu-table">
  <tr>
    <td class="edu-left"><strong>Amity University Online</strong> &mdash; Master of Computer Applications (MCA)</td>
    <td class="edu-right">2026 &ndash; 2028 (In Progress)</td>
  </tr>
  <tr>
    <td class="edu-left">
      <strong>Amity University</strong> &mdash; Bachelor of Computer Applications (BCA) | GPA: 7.50 / 10.0 (Bachelor's Degree)
      <div class="coursework"><strong>Relevant Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Software Engineering, Computer Networks.</div>
    </td>
    <td class="edu-right">2023 &ndash; 2026</td>
  </tr>
</table>

<div class="section-title">TECHNICAL PROJECTS</div>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">SAATHI &mdash; Automated Banking Grievance &amp; Dispute Resolution Service</span>
      <span class="project-tech">[Python, FastAPI, AsyncIO, SQLite, SSE, Docker]</span>
    </td>
    <td class="project-right">
      <a href="https://github.com/at84004630-del">GitHub</a> &bull; <a href="https://github.com/at84004630-del">GFF Shortlist</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Automated banking microservice that rapidly resolves failed UPI payment disputes without manual intervention.
</div>
<ul class="project-bullets">
  <li>Engineered a multi-agent orchestrator in Python with FastAPI SSE streaming, reducing simulated dispute intake turnaround to 4.2 minutes.</li>
  <li>Designed deterministic state-machine validation and relational schemas with strict data-masking mechanisms compliant with DPDPA 2023 principles.</li>
  <li>Packaged services with Docker and configured integration tests verifying transactional reconciliation under simulated network failures.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">MedTrace &mdash; Automated Incident Diagnostics &amp; Bug Triaging Platform</span>
      <span class="project-tech">[Python, Next.js, REST APIs, PyTest, Docker, CI/CD]</span>
    </td>
    <td class="project-right">
      <a href="https://medtrace-ai.vercel.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del/MedTrace">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Healthcare software diagnostics platform that intercepts runtime errors to synthesize safe, automated test fixtures.
</div>
<ul class="project-bullets">
  <li>Intercepts runtime error logs and stack traces across distributed services to synthesize minimal reproducible test cases in under 90 seconds.</li>
  <li>Built automated test verification achieving 100% test pass rate across 16 test suites, integrating log sanitation to prevent sensitive PHI data exposure.</li>
  <li>Configured containerized multi-stage Docker deployment and GitHub Actions CI workflow for automated linting and integration testing.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">MicroShield &mdash; Decentralized Parametric Flight Insurance Protocol</span>
      <span class="project-tech">[Solana, Rust, Anchor, Switchboard Oracle, USDC, Docker]</span>
    </td>
    <td class="project-right">
      <a href="https://micro-sheild-test.vercel.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del/MicroShield">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Decentralized Solana protocol that executes programmatic flight delay insurance claims directly to user wallets.
</div>
<ul class="project-bullets">
  <li>Built Anchor smart contracts on Solana locking USDC premiums in non-custodial Program Derived Address (PDA) escrow vaults.</li>
  <li>Integrated Switchboard Oracle feeds to verify real-time flight telemetry on-chain, automatically executing payouts without paperwork.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">StaffPulse &mdash; Enterprise Workforce &amp; Automated Payroll Management Backend</span>
      <span class="project-tech">[Python, Java, SQL, Relational Schema Design, Security]</span>
    </td>
    <td class="project-right">
      <a href="https://staffpulse-hr-2024.web.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del/staffpulse">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Smart attendance and payroll backend managing complex work shifts and automated salary slips.
</div>
<ul class="project-bullets">
  <li>Architected split-shift allocation algorithms managing overlapping 12-hour shifts with concurrency controls and normalized SQL schemas.</li>
  <li>Automated overtime wage calculation tiers and generated tamper-proof employee payslip PDFs dynamically in under 500ms.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">AORA AI &mdash; Your Emotional Companion</span>
      <span class="project-tech">[Next.js, React, TypeScript, REST APIs, AI Conversational Models]</span>
    </td>
    <td class="project-right">
      <a href="https://aora-ai-two.vercel.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Conversational AI assistant that offers empathetic emotional support and daily mental wellness.
</div>
<ul class="project-bullets">
  <li>Engineered a responsive Next.js frontend with streaming dialogue states and client-side care detection heuristics for sub-second responses.</li>
  <li>Interfaced with contextual conversational AI models using strict privacy controls, safe dialogue heuristics, and zero data retention.</li>
</ul>

<div class="section-title">HONORS, CERTIFICATIONS &amp; LEADERSHIP</div>
<ul class="honors-list">
  <li><strong>Rank 78 / 1,400 Teams (Top 5.5%) &mdash; Catalyst AI Hackathon:</strong> Ranked 78th nationwide out of 1,400 competing teams, recognized for high-throughput AI agent architecture and low-latency response engineering.</li>
  <li><strong>National Shortlist &mdash; SBI Hackathon @ Global Fintech Fest 2026:</strong> Shortlisted into Idea Submission phase by NPCI, FCC, and HackCulture from thousands of nationwide participants for SAATHI banking platform.</li>
  <li><strong>Certificate of Completion &amp; Excellence &mdash; IBM Bob 2.0 Hackathon:</strong> Awarded for outstanding performance, attendance, and submitting MedTrace incident triaging platform (Cert ID: CMULAQ6XC00H7S601WX38KT9U).</li>
  <li><strong>Runner Up &mdash; Amiphoria Technical Hackathon 2026:</strong> Runner Up in inter-university technical coding competition in 2026 at Amity University.</li>
  <li><strong>Algorithmic Problem Solving &amp; Competitive Programming:</strong> Solved 300+ problems across LeetCode &amp; GeeksforGeeks focusing on Data Structures, Graphs, Dynamic Programming, and optimal time &amp; space complexity.</li>
</ul>

</body>
</html>
"""

pdf_path = "C:/Users/ABHINAV TRIPATHI/portfolio/public/Abhinav_Tripathi_Resume.pdf"

story = pymupdf.Story(html=html)
writer = pymupdf.DocumentWriter(pdf_path)
rect = pymupdf.Rect(28, 20, 584, 772)

more = 1
pages = 0
while more:
    device = writer.begin_page(pymupdf.Rect(0, 0, 612, 792))
    more, _ = story.place(rect)
    story.draw(device)
    writer.end_page()
    pages += 1
writer.close()
print(f"Rendered {pages} page(s).")
assert pages == 1, f"ERROR: Expected 1 page, got {pages} pages!"

doc = pymupdf.open(pdf_path)
page = doc[0]

def add_link(text_query, url, y_min=0, y_max=800):
    rects = page.search_for(text_query)
    for r in rects:
        if y_min <= r.y0 <= y_max:
            hit_box = pymupdf.Rect(r.x0 - 2, r.y0 - 2, r.x1 + 2, r.y1 + 2)
            page.insert_link({"kind": pymupdf.LINK_URI, "from": hit_box, "uri": url})
            return True
    return False

add_link("at84004630@gmail.com", "mailto:at84004630@gmail.com", 30, 90)
add_link("linkedin.com/in/abhinav-tripathi", "https://www.linkedin.com/in/abhinav-tripathi-22236a2a6/", 30, 90)
add_link("github.com/at84004630-del", "https://github.com/at84004630-del", 30, 90)

projects_info = [
    ("SAATHI", [("GitHub", "https://github.com/at84004630-del"), ("GFF Shortlist", "https://github.com/at84004630-del")]),
    ("MedTrace", [("Live Demo", "https://medtrace-ai.vercel.app/"), ("GitHub", "https://github.com/at84004630-del/MedTrace")]),
    ("MicroShield", [("Live Demo", "https://micro-sheild-test.vercel.app/"), ("GitHub", "https://github.com/at84004630-del/MicroShield")]),
    ("Pulse", [("Live Demo", "https://staffpulse-hr-2024.web.app/"), ("GitHub", "https://github.com/at84004630-del/staffpulse")]),
    ("AORA AI", [("Live Demo", "https://aora-ai-two.vercel.app/"), ("GitHub", "https://github.com/at84004630-del")]),
]

for title, links in projects_info:
    title_rects = page.search_for(title)
    if title_rects:
        y_center = title_rects[0].y0
        y_min = y_center - 10
        y_max = y_center + 15
        for link_text, link_url in links:
            add_link(link_text, link_url, y_min, y_max)

doc.save(pdf_path, incremental=True, encryption=pymupdf.PDF_ENCRYPT_KEEP)

# Render high-res preview PNG
pix = page.get_pixmap(dpi=150)
preview_path = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder/resume_preview.png"
pix.save(preview_path)
print(f"Saved preview PNG to {preview_path}")

workspace_pdf = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder/Abhinav_Tripathi_Resume.pdf"
desktop_pdf = "C:/Users/ABHINAV TRIPATHI/OneDrive/Desktop/Abhinav_Tripathi_Software_Engineer_Resume.pdf"
new_folder_3_pdf = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder (3)/Abhinav_Tripathi_SWE_Resume.pdf"

shutil.copyfile(pdf_path, workspace_pdf)
print(f"Copied PDF to {workspace_pdf}")
if os.path.exists("C:/Users/ABHINAV TRIPATHI/OneDrive/Desktop"):
    shutil.copyfile(pdf_path, desktop_pdf)
    print(f"Copied PDF to {desktop_pdf}")
if os.path.exists("C:/Users/ABHINAV TRIPATHI/Downloads/New folder (3)"):
    shutil.copyfile(pdf_path, new_folder_3_pdf)
    print(f"Copied PDF to {new_folder_3_pdf}")

doc.close()
print("All PDFs and previews refreshed successfully!")

