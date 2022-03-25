---
title: "주간 학습내용을 정리합니다."
layout: archive
permalink: categories/Weekly   # url 이름 설정
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.Weekly %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}