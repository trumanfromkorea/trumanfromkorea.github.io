---
title: "ET CETERA"
layout: archive
permalink: categories/ETC   # url 이름 설정
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.ETC %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}