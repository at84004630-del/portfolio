import pymupdf, shutil, os

html = """
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    font-size: 8.8pt;
    line-height: 1.42;
    margin: 0;
    padding: 0;
    background: #fff;
  }
  
  .header {
    margin-bottom: 12px;
    border-bottom: 1.5px solid #0f172a;
    padding-bottom: 8px;
  }
  .name {
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    color: #090d16;
    margin-bottom: 2px;
  }
  .role {
    font-size: 9.6pt;
    font-weight: 700;
    color: #1d4ed8;
    letter-spacing: 1.1px;
    margin-bottom: 4px;
  }
  .contact {
    font-size: 8.2pt;
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
  
  .date-block {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 8.6pt;
    color: #475569;
  }
  
  .recipient-block {
    margin-bottom: 14px;
    font-size: 8.6pt;
    line-height: 1.35;
    color: #334155;
  }
  .recipient-block strong {
    color: #090d16;
  }
  
  .salutation {
    font-size: 9.0pt;
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
  
  .highlight-box {
    background: #f8fafc;
    border-left: 3px solid #1d4ed8;
    padding: 8px 12px;
    margin: 10px 0;
    font-size: 8.4pt;
    line-height: 1.38;
  }
  .highlight-box div {
    margin-bottom: 4px;
  }
  .highlight-box div:last-child {
    margin-bottom: 0;
  }
  
  .closing {
    margin-top: 14px;
    font-size: 8.8pt;
    color: #334155;
  }
  .signature {
    margin-top: 16px;
    font-weight: 700;
    color: #090d16;
    font-size: 9.4pt;
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

<div class="date-block">
  November 18, 2026
</div>

<div class="recipient-block">
  <strong>Technical University Recruiting Team</strong><br>
  Forward Deployed Engineering &amp; Customer Solutions<br>
  Google LLC
</div>

<div class="salutation">
  Dear Google Technical Recruiting Team &amp; Engineering Hiring Managers,
</div>

<p>
  I am writing to express my strong enthusiasm for the <strong>Forward Deployed Software Engineer (FDE) Intern</strong> role at Google. Forward Deployed Engineers at Google operate at the critical intersection of cutting-edge core technologies and mission-critical enterprise customer deployments. As a software engineering student with practical experience building distributed microservices, event-driven streaming pipelines, and containerized systems in <strong>Python, Java, and TypeScript</strong>, I thrive on taking complex, ambiguous customer problem statements and translating them into robust, high-performance production code.
</p>

<p>
  My hands-on projects reflect the exact problem-solving mindset and technical adaptability that Google look for in Forward Deployed Engineers:
</p>

<div class="highlight-box">
  <div>
    <strong>&bull; Multi-Agent Systems &amp; Google AI Integration (SAATHI):</strong> Designed an autonomous banking grievance microservice that automated failed UPI payment dispute resolution. I integrated <strong>Google Gemini 1.5 Flash</strong> and <strong>FastAPI SSE streaming</strong> into a multi-agent orchestrator, reducing simulated dispute intake turnaround from multi-day queues to <strong>4.2 minutes</strong> while implementing deterministic state validation compliant with DPDPA 2023 principles (National Shortlist, SBI Hackathon @ Global Fintech Fest 2026).
  </div>
  <div>
    <strong>&bull; Distributed Incident Diagnostics &amp; Compliance (MedTrace):</strong> Built an automated triage platform that intercepts runtime error logs across distributed services to synthesize reproducible test fixtures in <strong>under 90 seconds</strong>, achieving 100% test pass rates across 16 test suites with automated PHI sanitization heuristics and containerized multi-stage Docker deployment (Awarded Certificate of Excellence, IBM Bob 2.0 Hackathon).
  </div>
  <div>
    <strong>&bull; High-Throughput Execution Under Pressure:</strong> Placed <strong>Rank 78 out of 1,400 nationwide teams (Top 5.5%)</strong> in the Catalyst AI Hackathon, evaluated on architectural resilience and low-latency API throughput.
  </div>
</div>

<p>
  Forward Deployed Engineering requires not only rapid prototyping and systems thinking, but also solid algorithmic rigor. Alongside my full-stack and systems projects, I actively strengthen my foundations in <strong>Data Structures &amp; Algorithms</strong> (Arrays, Strings, Two Pointers, Binary Search, Recursion) in Java through structured training with <strong>Apna College</strong>, maintaining a relentless focus on time and space complexity optimization.
</p>

<p>
  Whether integrating Google Cloud microservices, diagnosing distributed customer endpoints, or building scalable prototypes that unblock strategic enterprise users, I bring high energy, disciplined code standards, and a deep passion for Google's engineering culture. I would welcome the opportunity to discuss how my systems background and hands-on builder mindset can contribute to the Forward Deployed Engineering team during this internship.
</p>

<div class="closing">
  Thank you for your time, consideration, and leadership in technology.
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

# Add clickable hyperlinks
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

# Render high-res preview PNG
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
print("Cover letter successfully generated and verified on 1 page!")
