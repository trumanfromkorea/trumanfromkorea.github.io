---
title: "Projects"
layout: single
permalink: /projects/
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.Projects %}

{% for post in posts %}
{% include archive-sidebar.html type=page.entries_layout %} 
{% endfor %}