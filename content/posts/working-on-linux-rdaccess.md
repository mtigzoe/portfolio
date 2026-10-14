---
title: "Working on linux-rdaccess: Why Accessible Remote Linux Access Matters"
date: "2026-10-14T12:00:00-04:00"
formattedDate: "October 14, 2026"
slug: "working-on-linux-rdaccess"
aliases: []
categories: ["Accessibility","Assistive Tech","Linux","Projects"]
readingTime: "3 min read"
originalUrl: ""
author: "Author"
excerpt: "Why I am working on linux-rdaccess: bringing Linux accessibility output to NVDA on Windows so remote work can include keyboard access and refreshable Braille."
---

I am working on linux-rdaccess because access to a remote computer needs to include access to its applications and information. As a DeafBlind software developer, I use a refreshable Braille display to read code and navigate my computer. I want that access to continue when I work with a Linux desktop from Windows.

## Why we need linux-rdaccess

A remote desktop picture alone does not give me the text, focus information, or Braille output I need. Audio alone does not meet my needs either. To work independently, I need to know which control has focus, read its contents, and use the keyboard and Braille display to interact with it.

This matters when reading documentation, editing code, using a terminal, or completing a form. My goal is to make those everyday tasks accessible across the connection, so that using another operating system does not mean giving up the tools I depend on.

## How the bridge works

linux-rdaccess is an experimental accessibility bridge between Linux and Windows screen readers. Its recommended approach connects Orca on Linux to NVDA on Windows through NVDA Remote. Orca provides accessibility output from Linux applications, and the connection carries speech and Braille to the Windows side while supporting remote keyboard control.

For me, Braille is central to this work. The text needs to follow what I am doing, and navigation needs to be predictable. Showing text on a display is one part of access; being able to move through it and interact with the correct place is just as important.

## What working on the project involves

The project includes work on keyboard handling, focus, Braille navigation and routing, connection diagnostics, and compatibility with applications. I am approaching these as usability questions: can a person read the information they need, move to the right control, and continue their task?

Automated checks help catch software errors, but they cannot answer every question about the experience of using a physical Braille display. Live testing with NVDA, Orca, and Linux applications is also needed. The project is still experimental, and compatibility and reliable interaction remain areas of ongoing development.

## Why this work matters to me

I want accessible remote computing to support learning, development, and collaboration. A person who relies on assistive technology should be able to work with a Linux environment using the access tools that work for them. That is why I am continuing to work on linux-rdaccess.

You can follow [linux-rdaccess and its current documentation on GitHub](https://github.com/mtigzoe/linux-rdaccess).
