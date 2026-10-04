---
layout: homepage
---

<section id="about" class="page-section reveal">
  <div class="section-heading">
    <h2>About Me</h2>
  </div>
  <div class="about-grid">
    <div class="about-copy">
      <p>I am an undergraduate student in <strong>Electronic Science and Technology</strong> at <strong>Beijing University of Technology</strong>. My academic interests lie at the intersection of AI systems, GPU computing, hardware acceleration, computer architecture, and multimodal learning.</p>
      <p>I am currently a research intern at <strong>Shanghai Jiao Tong University</strong>, where I work on efficient multimodal learning and parameter-efficient adaptation for large vision-language models. My recent research explores dynamic LoRA rank allocation, multimodal model efficiency, and hardware-aware deployment.</p>
      <p>Beyond research, I have gained engineering experience in GPU validation, AI inference deployment, embedded systems, and data-center networking through internships at <strong>Glenfly, Lenovo, and Cisco</strong>. I am particularly interested in bridging algorithmic efficiency with practical system and hardware constraints.</p>
    </div>
  </div>
</section>

<section id="education" class="page-section reveal">
  <div class="section-heading">
    <h2>Education</h2>
  </div>
  <div class="education-card">
    <div class="education-main">
      <div class="school-mark"><img src="{{ '/assets/img/bjut.png' | relative_url }}" alt="Beijing University of Technology logo"></div>
      <div>
        <h3>Beijing University of Technology</h3>
        <p>B.S. in Electronic Science and Technology · 2023–2027</p>
      </div>
    </div>
    <div class="education-stats">
      <div><strong>3.76 / 4.00</strong><span>GPA</span></div>
      <div><strong>88.7 / 100</strong><span>Overall Average</span></div>
      <div><strong>93.12 / 100</strong><span>Junior Year</span></div>
    </div>
    <div class="course-block">
      <span>Selected coursework</span>
      <p>Advanced Mathematics (100), Control Systems (99), Deep Learning (98), RF Integrated Circuit Design (97), Microcontroller Systems (97), General Physics (97), Electronic Materials and Devices (96), Digital Integrated Circuit Design (95).</p>
    </div>
  </div>

  <div class="language-card">
    <h3>Language (IELTS)</h3>
    <div class="language-grid">
      <div><strong>7.5 / 9.0</strong><span>Overall</span></div>
      <div><strong>8.0 / 9.0</strong><span>Listening</span></div>
      <div><strong>8.5 / 9.0</strong><span>Reading</span></div>
    </div>
  </div>
</section>

<section id="research" class="page-section reveal">
  <div class="section-heading">
    <h2>Research &amp; Projects</h2>
  </div>

  <div class="project-grid">
    <article class="project-card featured-project">
      <div class="project-image-wrap">
        <img src="{{ '/assets/img/project/QLoRA.png' | relative_url }}" alt="Dynamic LoRA Rank Allocation">
      </div>
      <div class="project-content">
        <span class="project-label">EFFICIENT MLLM</span>
        <h3>Dynamic LoRA Rank Allocation</h3>
        <p>Layer-sensitive, budget-aware rank allocation for multimodal large language models, enabling adaptive parameter allocation under a fixed training budget.</p>
        <div class="tag-row"><span>QLoRA</span><span>Quantization</span><span>Adaptation</span><span>LLM</span></div>
      </div>
    </article>

<a class="project-card-link" href="https://github.com/Chenjl13/Remote_FPGA_Lab" target="_blank" rel="noopener noreferrer">
<article class="project-card">
<div class="project-image-wrap">
<img class="fpga-project-image" src="{{ '/assets/img/project/FPGA.png' | relative_url }}" alt="Remote FPGA Laboratory Platform">
</div>
<div class="project-content">
<span class="project-label">FPGA / EMBEDDED SYSTEMS</span>
<h3>Remote FPGA Laboratory Platform</h3>
<p>Built a remote FPGA laboratory platform integrating FPGA, STM32, Raspberry Pi, and ADC/DAC modules for remote programming, signal acquisition, and hardware debugging.</p>
<div class="tag-row"><span>FPGA</span><span>STM32</span><span>Raspberry Pi</span><span>System</span></div>
</div>
</article>
</a>

    <article class="project-card">
      <div class="project-image-wrap">
        <img src="{{ '/assets/img/project/FolderSight.png' | relative_url }}" alt="Visual Validation Automation">
      </div>
      <div class="project-content">
        <span class="project-label">GPU AUTOMATION</span>
        <h3>Visual Validation Automation</h3>
        <p>Developed a vision-based automation pipeline for repetitive GPU validation across multiple DPI settings, improving workflow consistency and efficiency.</p>
        <div class="tag-row"><span>GPU</span><span>Computer Vision</span><span>DexiNed</span><span>SAM</span></div>
      </div>
    </article>
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
          <li>Developed a desktop-folder detection pipeline using DexiNed and SAM for repetitive validation workflows across multiple DPI settings.</li>
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


<section id="beyond" class="page-section reveal">
  <div class="section-heading">
    <h2>Life Outside the Lab</h2>
  </div>
  <div class="life-grid">
    <article class="life-column">
      <div class="life-label"><strong>Guitar</strong></div>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/guitar3.jpg' | relative_url }}" alt="Guitar performance on stage"></figure>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/guitar2.jpg' | relative_url }}" alt="Guitar performance"></figure>
    </article>

    <article class="life-column">
      <div class="life-label"><strong>Football</strong></div>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/Football1.jpg' | relative_url }}" alt="Football team photo"></figure>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/Football2.jpg' | relative_url }}" alt="Football with friends"></figure>
    </article>

    <article class="life-column">
      <div class="life-label"><strong>Travel</strong></div>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/travel1.jpg' | relative_url }}" alt="Travel photo"></figure>
      <figure class="life-photo"><img src="{{ '/assets/img/misc/travel2.jpg' | relative_url }}" alt="Travel by the lake"></figure>
    </article>
  </div>
</section>
