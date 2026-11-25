import pymupdf, shutil, os

html = """
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #0f172a;
    font-size: 8.0pt;
    line-height: 1.25;
    margin: 0;
    padding: 0;
    background: #fff;
  }
  
  .header {
    text-align: center;
    margin-bottom: 3.5px;
  }
  .name {
    font-size: 16.5pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    color: #090d16;
    margin-bottom: 2px;
  }
  .role {
    font-size: 9.0pt;
    font-weight: 700;
    color: #1d4ed8;
    letter-spacing: 1.1px;
    margin-bottom: 2px;
  }
  .contact {
    font-size: 7.9pt;
    color: #334155;
  }
  .contact a {
    color: #1d4ed8;
    text-decoration: none;
    font-weight: 500;
  }
  .sep {
    color: #94a3b8;
    margin: 0 4px;
  }
  
  .section-title {
    font-size: 8.6pt;
    font-weight: 800;
    color: #090d16;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    border-bottom: 1.3px solid #0f172a;
    padding-bottom: 1px;
    margin-top: 4px;
    margin-bottom: 2px;
  }
  
  .summary {
    font-size: 7.8pt;
    line-height: 1.25;
    text-align: justify;
    color: #1e293b;
  }
  .summary strong {
    color: #090d16;
  }

  .skills-box {
    font-size: 7.7pt;
    line-height: 1.23;
    color: #1e293b;
  }
  .skills-box div {
    margin-bottom: 1px;
  }
  .skills-box strong {
    color: #090d16;
    font-weight: 700;
  }

  .edu-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.9pt;
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
    font-size: 7.4pt;
    color: #475569;
    margin-top: 0.5px;
    line-height: 1.21;
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
    font-size: 7.8pt;
    font-weight: 700;
    padding-left: 8px;
  }
  .project-right a {
    color: #1d4ed8;
    text-decoration: none;
  }
  .project-title {
    font-size: 8.3pt;
    font-weight: 700;
    color: #090d16;
  }
  .project-tech {
    font-size: 7.5pt;
    font-weight: 500;
    color: #2563eb;
  }
  .project-desc {
    font-size: 7.8pt;
    line-height: 1.24;
    color: #1e293b;
    margin-top: 0.8px;
    margin-bottom: 1.2px;
    text-align: justify;
  }
  .project-desc strong {
    color: #090d16;
  }
  .project-bullets {
    margin: 0;
    padding-left: 12px;
    font-size: 7.6pt;
    line-height: 1.21;
    color: #334155;
    margin-bottom: 2.5px;
  }
  .project-bullets li {
    margin-bottom: 0.2px;
  }
  .project-bullets strong {
    color: #090d16;
    font-weight: 600;
  }

  .honors-list {
    margin: 0;
    padding-left: 12px;
    font-size: 7.7pt;
    line-height: 1.23;
  }
  .honors-list li {
    margin-bottom: 1.4px;
    color: #1e293b;
  }
  .honors-list strong {
    color: #090d16;
    font-weight: 700;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">ABHINAV TRIPATHI</div>
  
  <div class="contact">
    Lucknow, India <span class="sep">&bull;</span>
    <a href="mailto:at84004630@gmail.com">at84004630@gmail.com</a> <span class="sep">&bull;</span>
    <a href="https://www.linkedin.com/in/abhinav-tripathi-22236a2a6/">linkedin.com/in/abhinav-tripathi</a> <span class="sep">&bull;</span>
    <a href="https://github.com/at84004630-del">github.com/at84004630-del</a>
  </div>
</div>

<div class="section-title">PROFESSIONAL SUMMARY</div>
<div class="summary">
  Software Engineer &amp; Systems Engineering candidate with hands-on experience building high-performance backend microservices, event-driven streaming pipelines, on-device AI platforms, and containerized architectures in <strong>Python, TypeScript, and Rust</strong>. Skilled in multi-agent orchestration (LangGraph), relational schema design, distributed incident diagnostics, and enterprise data privacy compliance. Proven track record of developing resilient technical solutions recognized across national hackathons (<strong>Rank 78/1,400 in Catalyst AI</strong>, SBI Global Fintech Fest shortlist, IBM Bob 2.0).
</div>

<div class="section-title">TECHNICAL SKILLS</div>
<div class="skills-box">
  <div><strong>Programming Languages:</strong> Python (FastAPI, AsyncIO, OOP), TypeScript, JavaScript, Rust, Java (Core Java, Collections), Dart, SQL</div>
  <div><strong>Core Computer Science:</strong> Data Structures &amp; Algorithms (Arrays, Strings, Two Pointers, Binary Search, Recursion, Sorting), Object-Oriented Design, Complexity Analysis</div>
  <div><strong>AI, Systems &amp; Web Architecture:</strong> Google Gemini 1.5 Flash, LangGraph Multi-Agent Workflows, Next.js 14/15, RESTful APIs, SSE Streaming, WebSockets, Edge AI (Qualcomm Hexagon NPU)</div>
  <div><strong>Cloud, DevOps &amp; Containers:</strong> Docker, Multi-Stage Builds, Docker Compose, GitHub Actions (CI/CD), Vercel, Firebase, Linux/Unix CLI, Bash</div>
  <div><strong>Databases &amp; Web3:</strong> PostgreSQL, SQLite, SQLAlchemy ORM, ACID Transactions, Solana, Anchor Smart Contracts, Switchboard Oracles</div>
  <div><strong>Software Engineering &amp; Reliability:</strong> Automated Testing (PyTest, Jest), Code Reviews &amp; Style Guidelines, Incident Bug Triaging, Technical Documentation, Git, GitHub</div>
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
      <span class="project-title">SAATHI &mdash; Automated Banking Grievance &amp; Dispute Resolution Microservice</span>
      <span class="project-tech">[Google Gemini 1.5 Flash, Python, FastAPI, LangGraph, SSE, Docker]</span>
    </td>
    <td class="project-right">
      <a href="https://github.com/at84004630-del/SAATHI">GitHub</a> &bull; <a href="https://github.com/at84004630-del/SAATHI">Architecture</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Autonomous banking triage platform shortlisted at <strong>SBI Hackathon @ Global Fintech Fest 2026</strong>.
</div>
<ul class="project-bullets">
  <li>Engineered a multi-agent supervisor orchestrator in Python powered by <strong>Google Gemini 1.5 Flash</strong> and <strong>LangGraph</strong>, reducing simulated dispute turnaround to <strong>4.2 minutes</strong>.</li>
  <li>Designed deterministic state-machine guardrails (Guardian agent) and relational schemas with strict data-masking compliant with DPDPA 2023 and RBI guidelines.</li>
  <li>Packaged services with Docker and configured FastAPI Server-Sent Events (SSE) streaming real-time agent telemetry to a Next.js command console.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">Wellness &mdash; Intelligent Healthcare &amp; Medication Management Platform</span>
      <span class="project-tech">[Next.js 14, TypeScript, Tailwind CSS, Automated Testing, Role-Based Access]</span>
    </td>
    <td class="project-right">
      <a href="https://wellness-psi-silk.vercel.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del/Wellness">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Role-based elderly care and medication compliance platform awarded <strong>Rank 78 / 1,400 in Catalyst AI Hackathon</strong>.
</div>
<ul class="project-bullets">
  <li>Engineered an intelligent drug-conflict detection system and medication adherence tracking pipeline verified across a <strong>22-test automated suite</strong>.</li>
  <li>Architected multi-role command centers (Patients, Caregivers, Doctors) with error boundaries, strict input sanitization, and sub-second UI responsiveness.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">MedTrace &mdash; Distributed Incident Diagnostics &amp; Bug Triaging Platform</span>
      <span class="project-tech">[TypeScript, Next.js, REST APIs, Docker, CI/CD, Error Diagnostics]</span>
    </td>
    <td class="project-right">
      <a href="https://medtrace-ai.vercel.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del/MedTrace">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Healthcare software diagnostics platform that intercepts runtime errors to synthesize reproducible test cases (IBM Bob 2.0 Hackathon).
</div>
<ul class="project-bullets">
  <li>Intercepts distributed runtime errors and stack traces to synthesize minimal reproducible test fixtures in <strong>under 90 seconds</strong>.</li>
  <li>Configured containerized multi-stage Docker deployment and automated GitHub Actions CI workflow for linting, security, and build verification.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">MicroShield &mdash; Decentralized Parametric Flight Insurance Protocol</span>
      <span class="project-tech">[Solana, Rust, Anchor, Switchboard Oracle, USDC, Next.js]</span>
    </td>
    <td class="project-right">
      <a href="https://micro-sheild-test.vercel.app/">Live Demo</a> &bull; <a href="https://github.com/at84004630-del/MicroShield">GitHub</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> Decentralized Solana protocol executing instant programmatic flight delay insurance payouts to user wallets.
</div>
<ul class="project-bullets">
  <li>Built Anchor smart contracts in Rust locking USDC premiums into non-custodial Program Derived Address (PDA) escrow vaults on Solana devnet.</li>
  <li>Integrated Switchboard Oracle feeds to verify real-time flight telemetry on-chain, automatically executing claim settlements without paperwork.</li>
</ul>

<table class="project-table">
  <tr>
    <td class="project-left">
      <span class="project-title">MediSense Edge &mdash; On-Device Medical AI Suite (Qualcomm AI Hub)</span>
      <span class="project-tech">[Snapdragon X Elite, Hexagon NPU (45 TOPS), Qualcomm AI Hub, React 19, TypeScript]</span>
    </td>
    <td class="project-right">
      <a href="https://github.com/at84004630-del/medisense-edge">GitHub</a> &bull; <a href="https://github.com/at84004630-del/medisense-edge">Submission</a>
    </td>
  </tr>
</table>
<div class="project-desc">
  <strong>Project Overview:</strong> On-device clinical intelligence suite developed for the <strong>Qualcomm Snapdragon AI Lab Hackathon</strong>.
</div>
<ul class="project-bullets">
  <li>Engineered privacy-first clinical AI running 100% locally on the Hexagon NPU with <strong>0 KB cloud data egress</strong> for strict HIPAA/GDPR offline compliance.</li>
  <li>Optimized neural model pipelines via Qualcomm AI Hub targeting Snapdragon ARM64 architectures for real-time edge medical diagnostics.</li>
</ul>

<div class="section-title">HONORS, CERTIFICATIONS &amp; LEADERSHIP</div>
<ul class="honors-list">
  <li><strong>National Shortlist &mdash; SBI Hackathon @ Global Fintech Fest 2026:</strong> Shortlisted into Idea Submission phase by NPCI, FCC, and HackCulture from thousands of nationwide participants for Gemini-powered SAATHI banking grievance platform.</li>
  <li><strong>Rank 78 / 1,400 Teams (Top 5.5%) &mdash; Catalyst AI Hackathon:</strong> Outperformed 1,320+ competing engineering teams nationwide for developing <strong>Wellness</strong>, evaluated on architectural resilience and low-latency API throughput.</li>
  <li><strong>Certificate of Completion &amp; Excellence &mdash; IBM Bob 2.0 Hackathon:</strong> Awarded for outstanding performance, attendance, and submitting MedTrace incident triaging platform (Cert ID: CMULAQ6XC00H7S601WX38KT9U).</li>
  <li><strong>Runner Up &mdash; Amiphoria Technical Hackathon 2026:</strong> Runner Up in inter-university technical coding competition in 2026 at Amity University.</li>
  <li><strong>Structured Algorithmic Training &mdash; Apna College:</strong> Actively completing structured curriculum in foundational Data Structures &amp; Algorithms (Arrays, Strings, Two Pointers, Binary Search, Recursion) in Java with focus on optimal time &amp; space complexity.</li>
</ul>

</body>
</html>

"""


pdf_path = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder/Abhinav_Tripathi_Resume.pdf"

story = pymupdf.Story(html=html)
writer = pymupdf.DocumentWriter(pdf_path)
rect = pymupdf.Rect(28, 18, 584, 774)

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

def add_link(text_query, url):
    rects = page.search_for(text_query)
    for r in rects:
        hit_box = pymupdf.Rect(r.x0 - 2, r.y0 - 2, r.x1 + 2, r.y1 + 2)
        page.insert_link({"kind": pymupdf.LINK_URI, "from": hit_box, "uri": url})
        return True
    return False

add_link("at84004630@gmail.com", "mailto:at84004630@gmail.com")
add_link("linkedin.com/in/abhinav-tripathi", "https://www.linkedin.com/in/abhinav-tripathi-22236a2a6/")
add_link("github.com/at84004630-del", "https://github.com/at84004630-del")

projects_info = [
    ("SAATHI", [("GitHub", "https://github.com/at84004630-del"), ("Architecture", "https://github.com/at84004630-del")]),
    ("Wellness", [("Live Demo", "https://wellness-ai.vercel.app/"), ("GitHub", "https://github.com/at84004630-del/wellness")]),
    ("MedTrace", [("Live Demo", "https://medtrace-ai.vercel.app/"), ("GitHub", "https://github.com/at84004630-del/MedTrace")]),
    ("MicroShield", [("Live Demo", "https://micro-sheild-test.vercel.app/"), ("GitHub", "https://github.com/at84004630-del/MicroShield")]),
    ("MediSense", [("GitHub", "https://github.com/at84004630-del/medisense-edge"), ("Submission", "https://github.com/at84004630-del/medisense-edge")]),
]

for title, links in projects_info:
    title_rects = page.search_for(title)
    if title_rects:
        y_center = title_rects[0].y0
        for link_text, link_url in links:
            add_link(link_text, link_url)

doc.save(pdf_path, incremental=True, encryption=pymupdf.PDF_ENCRYPT_KEEP)

pix = page.get_pixmap(dpi=150)
preview_path = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder/resume_preview.png"
pix.save(preview_path)
print(f"Saved preview PNG to {preview_path}")

desktop_pdf = "C:/Users/ABHINAV TRIPATHI/OneDrive/Desktop/Abhinav_Tripathi_Software_Engineer_Resume.pdf"
portfolio_pdf = "C:/Users/ABHINAV TRIPATHI/portfolio/public/Abhinav_Tripathi_Resume.pdf"

if os.path.exists("C:/Users/ABHINAV TRIPATHI/OneDrive/Desktop"):
    shutil.copyfile(pdf_path, desktop_pdf)
    print(f"Copied PDF to {desktop_pdf}")
if os.path.exists("C:/Users/ABHINAV TRIPATHI/portfolio/public"):
    shutil.copyfile(pdf_path, portfolio_pdf)
    print(f"Copied PDF to {portfolio_pdf}")

doc.close()
print("Compilation and sync completed successfully!")
