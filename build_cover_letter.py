import pymupdf, shutil, os

html = """
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    font-size: 9.0pt;
    line-height: 1.45;
    margin: 0;
    padding: 0;
    background: #fff;
  }
  
  .header {
    margin-bottom: 14px;
    border-bottom: 1.5px solid #0f172a;
    padding-bottom: 8px;
  }
  .name {
    font-size: 16.5pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    color: #090d16;
    margin-bottom: 2px;
  }
  .role {
    font-size: 9.8pt;
    font-weight: 700;
    color: #1d4ed8;
    letter-spacing: 1.1px;
    margin-bottom: 4px;
  }
  .contact {
    font-size: 8.4pt;
    color: #475569;
  }
  .contact a {
    color: #1d4ed8;
    text-decoration: none;
    font-weight: 500;
  }
  .sep {
    color: #94a3b8;
    margin: 0 5px;
  }
  
  .meta-block {
    margin-top: 12px;
    margin-bottom: 14px;
    font-size: 8.8pt;
    color: #334155;
    line-height: 1.35;
  }
  .meta-block strong {
    color: #090d16;
  }
  
  .salutation {
    font-size: 9.2pt;
    font-weight: 700;
    color: #090d16;
    margin-bottom: 10px;
  }
  
  p {
    margin: 0 0 10px 0;
    text-align: justify;
  }
  p strong {
    color: #090d16;
  }
  
  .points-list {
    margin: 10px 0 14px 0;
    padding-left: 0;
    list-style: none;
  }
  .points-list li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 9px;
    font-size: 8.8pt;
    line-height: 1.40;
    color: #1e293b;
  }
  .points-list li::before {
    content: "■";
    position: absolute;
    left: 0;
    top: 0px;
    color: #1d4ed8;
    font-size: 7pt;
  }
  .points-list strong {
    color: #090d16;
  }
  
  .closing {
    margin-top: 14px;
    font-size: 9.0pt;
    color: #334155;
  }
  .signature {
    margin-top: 16px;
    font-weight: 700;
    color: #090d16;
    font-size: 9.6pt;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">ABHINAV TRIPATHI</div>
  <div class="role">SOFTWARE ENGINEER INTERN &bull; FORWARD DEPLOYED ENGINEERING</div>
  <div class="contact">
    Lucknow, India <span class="sep">&bull;</span>
    <a href="mailto:at84004630@gmail.com">at84004630@gmail.com</a> <span class="sep">&bull;</span>
    <a href="https://www.linkedin.com/in/abhinav-tripathi-22236a2a6/">linkedin.com/in/abhinav-tripathi</a> <span class="sep">&bull;</span>
    <a href="https://github.com/at84004630-del">github.com/at84004630-del</a>
  </div>
</div>

<div class="meta-block">
  <strong>Date:</strong> November 18, 2026<br>
  <strong>To:</strong> Technical Recruiting Team &bull; Forward Deployed Engineering &bull; Google LLC<br>
  <strong>Subject:</strong> Application for Forward Deployed Software Engineer (FDE) Intern
</div>

<div class="salutation">
  Dear Google Technical Recruiting Team &amp; Hiring Managers,
</div>

<p>
  I am writing to apply for the <strong>Forward Deployed Software Engineer (FDE) Intern</strong> role at Google. I specialize in building event-driven backend microservices, real-time data streaming pipelines, and containerized architectures in <strong>Python, Java, and TypeScript</strong>.
</p>

<p>
  Here is how my hands-on systems experience maps directly to Google's Forward Deployed mission:
</p>

<ul class="points-list">
  <li>
    <strong>Google AI Integration &amp; Banking Automation (SAATHI):</strong> Architected a multi-agent dispute triage microservice using <strong>Google Gemini 1.5 Flash</strong> and <strong>FastAPI SSE streaming</strong>, cutting simulated grievance turnaround to <strong>4.2 minutes</strong> with deterministic DPDPA 2023 compliance. <em>(National Shortlist, SBI Hackathon @ Global Fintech Fest 2026)</em>.
  </li>
  <li>
    <strong>Distributed Incident Diagnostics &amp; Compliance (MedTrace):</strong> Built an automated triage engine intercepting distributed error logs to synthesize reproducible test fixtures in <strong>under 90 seconds</strong>, passing 100% of 16 test suites with automated PHI sanitization and multi-stage Docker deployment. <em>(Awarded Certificate of Excellence, IBM Bob 2.0 Hackathon)</em>.
  </li>
  <li>
    <strong>High-Throughput Execution Under Pressure:</strong> Ranked <strong>78th nationwide out of 1,400 competing teams (Top 5.5%)</strong> in the Catalyst AI Hackathon, evaluated on architectural resilience and low-latency API throughput.
  </li>
  <li>
    <strong>Core Algorithmic Foundations:</strong> Actively strengthening foundational Data Structures &amp; Algorithms (Arrays, Strings, Two Pointers, Binary Search, Recursion) in Java through structured training with <strong>Apna College</strong>, focusing on optimal time and space complexity.
  </li>
  <li>
    <strong>Enterprise Deployment Readiness:</strong> Experienced in Docker containerization, REST API contracts, Linux command-line tooling, and CI/CD automated test verification.
  </li>
</ul>

<p>
  Forward Deployed Engineering requires fast technical triage, rock-solid communication, and rapid prototype-to-production delivery. I am eager to contribute these capabilities to Google's engineering teams and strategic enterprise customer deployments.
</p>

<div class="closing">
  Thank you for your consideration. I look forward to the opportunity to interview.
</div>

<div class="signature">
  Sincerely,<br>
  <strong>Abhinav Tripathi</strong>
</div>

</body>
</html>
"""

pdf_path = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder/Abhinav_Tripathi_Cover_Letter.pdf"

story = pymupdf.Story(html=html)
writer = pymupdf.DocumentWriter(pdf_path)
rect = pymupdf.Rect(32, 28, 580, 764)

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

doc.save(pdf_path, incremental=True, encryption=pymupdf.PDF_ENCRYPT_KEEP)

pix = page.get_pixmap(dpi=150)
preview_path = "C:/Users/ABHINAV TRIPATHI/Downloads/New folder/cover_letter_preview.png"
pix.save(preview_path)
print(f"Saved preview PNG to {preview_path}")

desktop_pdf = "C:/Users/ABHINAV TRIPATHI/OneDrive/Desktop/Abhinav_Tripathi_Cover_Letter.pdf"
portfolio_pdf = "C:/Users/ABHINAV TRIPATHI/portfolio/public/Abhinav_Tripathi_Cover_Letter.pdf"

if os.path.exists("C:/Users/ABHINAV TRIPATHI/OneDrive/Desktop"):
    shutil.copyfile(pdf_path, desktop_pdf)
    print(f"Copied Cover Letter to {desktop_pdf}")
if os.path.exists("C:/Users/ABHINAV TRIPATHI/portfolio/public"):
    shutil.copyfile(pdf_path, portfolio_pdf)
    print(f"Copied Cover Letter to {portfolio_pdf}")

doc.close()
print("Short, point-to-point cover letter generated successfully!")
