---
title: "Programmers"
layout: archive
permalink: categories/Programmers   # url 이름 설정
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.Programmers %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}