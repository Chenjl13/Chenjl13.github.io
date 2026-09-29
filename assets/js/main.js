(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  const getPreferredTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    }
  };

  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...document.querySelectorAll('.nav-links a')];

  const setActiveLink = () => {
    const y = window.scrollY + 140;
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= y) current = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
})();
