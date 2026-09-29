<section id="publications" class="page-section reveal">
  <div class="section-heading">
    <span class="section-kicker">04 · Publications</span>
    <h2>Publications</h2>
  </div>

  <div class="publications">
    {% for link in site.data.publications.main %}
    <article class="publication-card">
      {% if link.image %}
      <div class="publication-image">
        <img src="{{ link.image | relative_url }}" alt="Preview for {{ link.title }}">
        {% if link.conference_short %}<span class="venue-badge">{{ link.conference_short }}</span>{% endif %}
      </div>
      {% endif %}
      <div class="publication-content">
        <div class="publication-meta">{{ link.conference }}</div>
        <h3>{% if link.pdf %}<a href="{{ link.pdf | relative_url }}" target="_blank" rel="noopener">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}</h3>
        <div class="publication-authors">{{ link.authors }}</div>
        <div class="publication-links">
          {% if link.pdf %}<a href="{{ link.pdf | relative_url }}" target="_blank" rel="noopener"><i class="fa-regular fa-file-pdf"></i> PDF</a>{% endif %}
          {% if link.code %}<a href="{{ link.code }}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>{% endif %}
          {% if link.page %}<a href="{{ link.page }}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Project</a>{% endif %}
          {% if link.bibtex %}<a href="{{ link.bibtex | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-quote-right"></i> BibTeX</a>{% endif %}
        </div>
        {% if link.notes %}<div class="publication-note"><i class="fa-solid fa-circle-check"></i> {{ link.notes }}</div>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>
