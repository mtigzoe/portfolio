---
title: "Challenges in Developing a YouTube Transcript Web Application"
date: "2022-01-28T16:37:48+00:00"
formattedDate: "January 28, 2022"
slug: "challenges-youtube-transcript"
aliases: ["11"]
categories: ["Projects", "Python & Flask", "Debugging"]
readingTime: "2 min read"
originalUrl: ""
author: "Author"
excerpt: "Challenges My goal was to develop a web application for retrieving a transcript from YouTube. I had been struggling with it for a few weeks so I researched using the libraries in Python. Once I found youtube-transcript-a..."
---

My goal was to develop a web application for retrieving a transcript from YouTube. I had been struggling with it for a few weeks so I researched using the libraries in Python. Once I found youtube-transcript-api and pafy, I did a lot of trial and error until I successfully retrieved a transcript. The HTML form that I attempted to create was challenging because I had to figure out how to copy and paste a YouTube URL in the text field and submit it by using the Flask’s request function. After that, it successfully printed to the HTML page and Flask’s request function worked properly.





Heroku allowed me to deploy my web application and publish it. Now people are able to view and try it.  





Unfortunately, YouTube introduced a new dislike count feature in November 2021. This caused my web application on Heroku to malfunction. I researched and found the issue with pafy while opening and looking at their module’s file. The pafy module had issues with dislike counts in YouTube that prevented me from retrieving a transcript. After commenting out “self._dislikes = self._ydl_info[‘dislike_count’]” on line 54 in backend_youtube_dl.py, I am now able to retrieve a transcript from YouTube and run my program to retrieve a transcript in a local environment. 





Deploying my program to Heroku from Github does currently have problematic issues, though. I haven’t had success allowing other  people to view my program online and retrieve a transcript for themselves. I will continue working on correcting these issues until they are resolved.
