---
title: "Flutter 프로젝트를 진행하며 학습한 내용을 정리합니다."
layout: archive
permalink: categories/flutter    # url 이름 설정
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.Flutter %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}