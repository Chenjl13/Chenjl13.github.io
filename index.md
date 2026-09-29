---
layout: homepage
---

<section id="about" class="page-section reveal">
  <div class="section-heading">
    <h2>About Me</h2>
  </div>
  <div class="about-grid">
    <div class="about-copy">
      <p>I am an undergraduate student in <strong>Electronic Science and Technology</strong> at Beijing University of Technology. My interests span efficient AI systems, GPU computing, hardware acceleration, and multimodal learning.</p>
      <p>I am currently a research intern at <strong>Shanghai Jiao Tong University</strong> under the supervision of Dr. Hongyu Zhao. Previously, I was advised by Prof. Sujuan Liu.</p>
    </div>
    <div class="quick-facts">
      <div><span>Degree</span><strong>B.S. · 2023–2027</strong></div>
      <div><span>GPA</span><strong>3.76 / 4.00</strong></div>
      <div><span>Junior Year</span><strong>93.12 / 100</strong></div>
      <div><span>IELTS</span><strong>7.5 / 9.0</strong></div>
    </div>
  </div>
</section>

<section id="research" class="page-section reveal">
  <div class="section-heading">
    <h2>Research Interests</h2>
    <p>My current work connects model efficiency with systems and hardware-aware design.</p>
  </div>

  <div class="interest-grid">
    <article class="interest-card">
      <div class="card-icon"><i class="fa-solid fa-server"></i></div>
      <h3>AI Systems</h3>
      <p>GPU computing, efficient inference, model deployment, and system-level optimization.</p>
      <div class="tag-row"><span>GPU</span><span>Inference</span><span>OpenVINO</span></div>
    </article>
    <article class="interest-card">
      <div class="card-icon"><i class="fa-solid fa-microchip"></i></div>
      <h3>Hardware &amp; Accelerators</h3>
      <p>Digital IC design, FPGA systems, architecture, validation, and hardware-aware acceleration.</p>
      <div class="tag-row"><span>Digital IC</span><span>FPGA</span><span>Architecture</span></div>
    </article>
    <article class="interest-card">
      <div class="card-icon"><i class="fa-solid fa-brain"></i></div>
      <h3>Multimodal AI</h3>
      <p>Multimodal large language models, parameter-efficient adaptation, and medical image analysis.</p>
      <div class="tag-row"><span>MLLM</span><span>LoRA</span><span>Medical AI</span></div>
    </article>
  </div>

  <div class="subsection-heading">
    <h3>Selected Research &amp; Projects</h3>
  </div>

  <div class="project-grid">
    <article class="project-card featured-project">
      <div class="project-art project-art-lora"><span>r</span><span>8</span><span>12</span><span>4</span></div>
      <div class="project-content">
        <span class="project-label">Efficient MLLM</span>
        <h3>Dynamic LoRA Rank Allocation</h3>
        <p>Layer-sensitive, budget-aware rank allocation for multimodal large language models, exploring dynamic adaptation under a fixed parameter budget.</p>
        <div class="tag-row"><span>Qwen2.5-VL</span><span>QLoRA</span><span>ScienceQA</span></div>
      </div>
    </article>

    <article class="project-card">
      <div class="project-image-wrap">
        <img src="{{ '/assets/img/MedFusion.png' | relative_url }}" alt="MedFusion project preview">
      </div>
      <div class="project-content">
        <span class="project-label">Medical AI</span>
        <h3>MedFusion</h3>
        <p>Budget-aware shared LoRA adaptation for multi-source medical image classification with efficient routing across heterogeneous datasets.</p>
        <div class="tag-row"><span>MLLM</span><span>Shared LoRA</span><span>Medical Imaging</span></div>
      </div>
    </article>

    <article class="project-card">
      <div class="project-art project-art-gpu"><i class="fa-solid fa-display"></i><i class="fa-solid fa-arrow-right"></i><i class="fa-solid fa-eye"></i></div>
      <div class="project-content">
        <span class="project-label">GPU Automation</span>
        <h3>Visual Validation Automation</h3>
        <p>Computer-vision-assisted automation for repetitive GPU validation workflows across resolutions and DPI settings.</p>
        <div class="tag-row"><span>GPU</span><span>DexiNed</span><span>SAM</span></div>
      </div>
    </article>
  </div>
</section>

<section id="news" class="page-section reveal">
  <div class="section-heading compact-heading">
    <h2>News</h2>
  </div>
  <div class="news-list">
    <div class="news-item"><span class="news-date">Apr. 2026</span><p>Our paper on communication-efficient compression for FedDyn federated learning was accepted to <strong>ICCECT 2026</strong>.</p></div>
  </div>
</section>

{% include_relative _includes/publications.md %}

<section id="experience" class="page-section reveal">
  <div class="section-heading">
    <h2>Industry Experience</h2>
  </div>

  <div class="timeline">
    <article class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-topline"><div><h3>Glenfly</h3><p>Software Development Intern · Shanghai, China</p></div><span>Jun. 2026 – Aug. 2026</span></div>
        <ul>
          <li>Conducted functional, stress, stability, and compatibility testing on GPUs across system-level workloads and graphics/compute APIs.</li>
          <li>Performed repeated workload validation and failure reproduction to evaluate driver compatibility and platform stability.</li>
          <li>Developed a desktop-folder detection pipeline using DexiNed and SAM for repetitive validation workflows across multiple resolutions and DPI settings.</li>
        </ul>
      </div>
    </article>

    <article class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-topline"><div><h3>Cisco</h3><p>Technical Engineer Intern · Beijing, China</p></div><span>Jan. 2026 – Feb. 2026</span></div>
        <ul>
          <li>Investigated AI data-center networking for distributed GPU training, including RDMA, RoCEv2, ECN/PFC, and Leaf-Spine architectures.</li>
          <li>Supported validation of switches and optical modules in data-center scenarios.</li>
          <li>Configured and validated BGP, OSPF, VLAN, STP, and ACL environments for protocol verification and troubleshooting.</li>
        </ul>
      </div>
    </article>

    <article class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-topline"><div><h3>Lenovo</h3><p>Embedded Algorithm Engineer · Beijing, China</p></div><span>Jun. 2025 – Aug. 2025</span></div>
        <ul>
          <li>Developed Stable Diffusion 3 inference pipelines for text-to-image, image-to-image, and inpainting with SAM/SAM2.</li>
          <li>Built a large-scale data-processing pipeline and trained ControlNet on image-mask-prompt triplets.</li>
          <li>Converted SD3 + ControlNet from PyTorch to OpenVINO and deployed the pipeline on Intel GPUs.</li>
        </ul>
      </div>
    </article>
  </div>
</section>

<section id="education" class="page-section reveal">
  <div class="section-heading">
    <h2>Education</h2>
  </div>
  <div class="education-card">
    <div class="education-main">
      <div class="school-mark">BJUT</div>
      <div>
        <h3>Beijing University of Technology</h3>
        <p>B.S. in Electronic Science and Technology · 2023–2027</p>
      </div>
    </div>
    <div class="education-stats">
      <div><span>GPA</span><strong>3.76 / 4.00</strong></div>
      <div><span>Overall Average</span><strong>88.7 / 100</strong></div>
      <div><span>Junior Year</span><strong>93.12 / 100</strong></div>
    </div>
    <div class="course-block">
      <span>Selected coursework</span>
      <p>Advanced Mathematics (100), Control Systems (99), Deep Learning (98), RF Integrated Circuit Design (97), Microcontroller Systems (97), General Physics (97), Electronic Materials and Devices (96), Digital Integrated Circuit Design (95).</p>
    </div>
  </div>

  <div class="language-card">
    <h3>Language</h3>
    <div class="language-grid">
      <div><span>IELTS</span><strong>7.5 / 9.0</strong><small>Listening 8.0 · Reading 8.5</small></div>
      <div><span>CET-4</span><strong>604 / 710</strong><small>First attempt</small></div>
      <div><span>CET-6</span><strong>513 / 710</strong><small>First attempt</small></div>
    </div>
  </div>
</section>

<section id="beyond" class="page-section reveal">
  <div class="section-heading">
    <h2>Life Outside the Lab</h2>
  </div>
  <div class="life-grid">
    <article class="life-column">
      <div class="life-label"><span>01</span><strong>Guitar</strong></div>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/guitar3.jpg' | relative_url }}" alt="Guitar performance on stage"></figure>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/guitar2.jpg' | relative_url }}" alt="Guitar performance"></figure>
    </article>

    <article class="life-column">
      <div class="life-label"><span>02</span><strong>Football</strong></div>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/Football1.jpg' | relative_url }}" alt="Football team photo"></figure>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/Football2.jpg' | relative_url }}" alt="Football with friends"></figure>
    </article>

    <article class="life-column">
      <div class="life-label"><span>03</span><strong>Travel</strong></div>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/travel1.jpg' | relative_url }}" alt="Travel photo"></figure>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/travel2.jpg' | relative_url }}" alt="Travel by the lake"></figure>
    </article>
  </div>
</section>
