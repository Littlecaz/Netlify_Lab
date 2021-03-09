---
layout: template.html
title: Macintosh Project
tags: page
---
# This is my {{ title }}!
Some Macs I have in my collection:
<ul>
    {% for mac in macs -%}
        <li>{{ mac }}</li>
    {% endfor -%}
</ul>
