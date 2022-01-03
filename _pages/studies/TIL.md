---
title: "Today I Learned - 소소하게나마 배운 내용들을 정리합니다."
layout: archive
permalink: categories/TIL   # url 이름 설정
author_profile: true
sidebar_main: true
paginate: 10
---

{% assign posts = site.categories.TIL %}

{% for post in posts %}
{% include archive-single.html type=page.entries_layout %} 
{% endfor %}