---
layout: page
title: Blogs
permalink: /blogs/
---

Here's a list of my blogs:

<ul class="blog-list">
{% for blog in site.data.blogs %}
  <li class="blog-item">
    <h2 class="blog-title">
      <a href="{{ blog.link }}" target="_blank" rel="noopener noreferrer">{{ blog.title }}</a>
    </h2>
    <time class="blog-date" datetime="{{ blog.date | date: "%Y-%m-%d" }}">{{ blog.date | date: "%B %d, %Y" }}</time>
    {% if blog.description %}
      <p class="blog-description">{{ blog.description }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>