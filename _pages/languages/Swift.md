---
title: "Swift"
layout: archive
permalink: categories/Swift   # url 이름 설정
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.Swift %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}