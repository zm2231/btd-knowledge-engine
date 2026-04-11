---
title: "How To Build An App With AI (no experience required)"
creator: "alex-finn"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=XPXKU-zAxAQ"
video_id: "XPXKU-zAxAQ"
duration: "17:13"
transcript_method: "youtube-captions"
segment_count: 441
char_count: 16158
status: ingested
topics: []
meta_patterns: []
---

# How To Build An App With AI (no experience required)

**Creator**: alex-finn | **Duration**: 17:13
**URL**: https://www.youtube.com/watch?v=XPXKU-zAxAQ
**Transcript**: 441 segments, 16158 chars

## Transcript

in this video I'm going to teach you how to build your first application just with AI no programming experience necessary it doesn't matter if you've never wrote a line of code in your life by the end of this video if you stick all the way through you'll have your first app and on top of that you'll be able to program more apps by yourself no help required let's get into it boom I'm over here now let's get right into it what I'm going to show you how to do today is build a Todo app through JavaScript no coding experience necessary really easy to do and all you'll be doing is using AI the AI is going to teach you how to write the code it's going to teach you what the code means and it's going to give you the skills you need to then go and build other applications yourself again beginners can do this no coding experience necessary and this will put you on a path where you can start building your own applications that you can then turn around and sell or have others use so what we're looking at here is on the left is a site called repet and on the right is AI I'm using grock 2.0 but you can use whatever you want if you want to use chat GPT or Claude you can do that any of them work uh I just like to use grock it's the newest model grock 2.0 at the moment this video came out so on the left hand side is repet what repet is is a place where you can put code and run it completely free on the internet uh it's the best beginner friendly way to write and run code I like to use it completely free easy to use so what you're going to do right now first is sign up for repet pause the video link down below completely free create your account come back and we'll start building code okay welcome back here we are let's do it so now that we're in repet we're going to create a rep down here it's going to be in react JavaScript uh react JavaScript is a programming language that a lot of big companies use today it's one of the fastest ways to build and deploy applications if you learn these skills here you can very quickly turn around and build a lot of other different applications let's give it a name we'll name it AI to do app and we will create it now our environment is set up on the left side to put in code we get some basic code set up for us here uh and then what we can do is if we go to console we can then click run and what's going to happen is it will run the code for us and so what you can see here is your basic boilerplate react JavaScript code all set up for you as you edit code over here on the left you'll get the results in real time on the right this could be a little intimidating don't be intimidated we're right at the beginning what we're going to do now is switch over to the AI over here and we're going to start using it to teach us how to code teach us how to build this app and get some really cool results really quick so I'm in grock again you can use anything you want if you want to use chat GPT if you want to use Claude it's all up to you they'll all be doing the same thing I'm just using grock for this and what we're going to do is we're going to say hi grock I always say hi to to my AI as I'm building things out you got you got to have your manners you got to have your manag one day they'll be more powerful than us and can kill us so you got to make sure you say hello and thank you and all that hi grock uh I'm a brand new programmer and I'd like to make and by the way this prompt will be down below in the description uh if I'm you I would actually type this out yourself not just copy and paste it uh a big thing here is you know you I want you to also learn how to prompt with me and use Ai and get better results so if you manually type this in yourself you're going to learn prompting skills while you're doing this too so follow along with me while I do this and then you can pause and prompt yourself and change the prompt if you want but here we go hi grock I'm a brand new programmer and I'd like to make a Todo list app using react I've never programmed a line of code in my life before so if you please can help me out here but also teach me step by step what you're doing so I can then build other applications myself please make this app simple so that I can then customize it any way I want so what we did here is we set the state with the AI on what we're trying to do what our background experience is It's always important when you're prompting AI especially if you're going to be building applications uh letting them know what the situation is what your skill levels are and not just to build it right if they're just building it you're not learning anything here so what I'm doing is I'm explaining what my skill level is and what I'd like roock to do which is teach me along the way so that I not only just spit out a bunch of code that I don't know what is doing but also I learn what it's doing so I can customize and build myself uh and build my skills as well and real quick let's also make sure that we let grock know we're using repet so the AI know about all the websites and how they work it's pretty amazing how they work actually so let's go in here and also make sure they know that I'm doing this completely Onre awesome now we can run it so what we'll get here is we'll get a guide from grock on how to build this application from repet step by step right so it's going to tell us exactly what we need to do uh we can skip most of this cuz I got this most of this set up for you already but let's go into the basic structure so it's going to teach you about the basic structure of a react application again react is a really awesome framework for JavaScript basically makes it very easy to quickly spit out applications ship them launch them and get people using your apps it's going to tell you about the code structure over here on the left the different files what they each do I definitely recommend taking the time to go through this and learn about what each one of these do um but what we're going to do here is we're going to go into the main part of the application uh which is app.jsx this is the code you see here so if I come into app here and I say uh subscribe to Alex Finn and then I save it what you can see is Boom immediately updates uh what you see on the application in the web view so pretty PR cool so this app.jsx this is going to be your main file where you're going to do all the code editing as explained by grock here um so what I'm going to do is copy over this code I'm going to drop it in here so you can get a taste of what the kind of basic app code does spit out from grock so this is the basic to-do list and we can do to-do item one and add it and so what you can see is all the items you add your to-do list go under here so this isn't obviously good enough this gives us an application but we don't know how the hell this works or what the hell it's doing since we're beginner programmers we really want to understand line by line what's going on here so what we're going to do is we're going to go down here it's going to give us some basic styling it's going to tell us the exact app file to put that in and put that in here update it o looks makes it look a little prettier and then now what it's going to do is start explaining so let's do this let's say start with app .js please explain line by line how this works so I can truly understand the code I'm writing here my goal is to become proficient in react so I can build other applications and so what we're doing here is we're now having a conversation with the AI uh to learn what it is it's having us do so we can learn how the code works so that after this we can a customize this Todo list to our liking and then B build other applications maybe applications we build ship and start selling and making money off of so let's hit enter on this and now it's going to break down app.js which is our main file here which is building the main portion of the code it's going to go line by line and tell us uh how it's working so as it generates the code here here what you can see is first it starts at the Imports so up here at the top it explains what these import statements mean uh it means it's it's importing a lot of the react technology that's basically saying this application is built in react so it knows what type of programming language you're using and then goes in and tells you line by line what it's building out what different functions are how State management works event handlers and this all sounds very complex I know as you're doing this but what I really want want you to be able to do is a not only understand how you can use AI to build applications but B start to get a grip on how the code works and understand the powers you have and how you can start building applications even with no coding experience before so what I want you to do now is quickly go through here there's going to be a lot of very complex stuff if you try to understand it all at once you're going to become very intimidated uh and it's going to be hard to learn all this but what I want you to do is go through this find one or two things you want to learn about right so maybe we go in here and we ask grock can you explain event handling to me as if this is my first JavaScript application right so we're picking different things out we want to learn about you know I I really recommend choosing one or two things at a time again if you try to learn everything at once this can get really complicated really quick choose one or two things read about what that concept means and the more applications you build the more you can pick out different things to learn and get better at coding but let's do this let's go back in and let's start customizing our to-do list application here so we have our application here maybe we want to start actually numbering each item in the to-do list as we put it out so right now it says to-do item one so maybe we want to get groceries got to learn how to spell groceries there and we need to buy I paper tells and go to the gym so maybe we want to start customizing this and getting them numbered so let's say grock please make it so that each item in the Todo list automatically gets numbered in ascending order okay so basically what we're doing now is we're using grock as a pair programmer we're finding different things we want to edit in the application we're telling grock what it is we want to do and then grock is giving us the new code to automatically number each to-do item in ascending order in your react to-do list we'll apply the following code okay so it gives us the code we can take this copy it over I have it copied over already and now let's test it out uh get groceries add and as you can see automatically numbered uh Play video games when in Madden online as you can see everything is numbered we asked the AI to edit the code for us add new functionality it spit out the code and then on top of that it then goes and tells us exactly what it did so it goes inside the map function and for every item in the to-do list it pluses one right and so now you can go in not only has it changed the code for us but now it explains the code change isn't made this is really awesome right this is the power of AI this is what AI unlocks is the fact that anyone with zero programming experience can go in and not only build out fully functional applications like you see here but now they can come in and also learn the coding along the way so they can come back make any applications they want why is this so economically powerful because now anyone who has an idea can go and create that idea and make it a reality very fast and then start making money off of it before AI if you had ideas you had to go hire a programmer which could take months and then work with the program you might not even get the application you want but because of AI you can now by yourself go from idea to reality in under 15 minutes right it's unbelievably powerful what you have here if you're not taking advantage of this you're really going to fall behind the people who come up with ideas and are able to create them and sell them are going to make a lot of money this AI Revolution let's do some other tinkerings here let's try some other things out some other stylings and show you some other ways you can use AI to build applications uh let's also do this let's add a new field for each to-do item that lets me rank the priority so now I'll be able to go in and give each to-do list item a ranking of difficulty so I know how to PR prioritize each one so now I can come in I can take this code add it to the sections it has me doing here and I have the brand new application I can keep going back and forth right I can keep going back and forth with the app uh and adding new features new functionality any ideas I come up with I can do it here's another powerful thing you can even do and I love doing this when I'm building applications with AI is you could actually ask the AI for advice so maybe have an application like the to-do list here but you're not sure how to improve it you don't have other ideas you can bounce ideas off the AI to come up with new things to add so let's do that hey grock what other features and functionality would you add to this app to make it more useful and now what you can see here is grock actually gave us recommendations on how we can improve the application through categories due dates sorting and filtering notifications and reminder editing this is pretty incredible not only is the AI our programmer it's also our product manager our marketer it's taking on all these different roles for us right it's giving us recommendations on how to improve the product so you can come in here it's basically like your free business partner where you give it ideas it helps you build the ideas it helps you improve the ideas it'll help you ship the ideas to help you make money off the ideas this is the power of AI that not many people are taking advantage of most people are just going in Ai and trying to make it say silly things right if you're not using AI to ideate build and ship products you're you're losing that on potential millions of dollars right A lot of people are using AI coming up with ideas and then shipping those ideas and making a lot of money off of it and it's really easy to do I did this all in what the span of 15 minutes it was super easy now I can go okay let's do this uh let's add edit functionality okay let's implement the editing functionality and now grock will give me all the code and ideas necessary I need to do that right now it's generating the code I can implement it and keep iterating on this application it's pretty amazing it's pretty powerful and you're able to do this really with zero programming experience required with zero programming experience you're able to build an app improve it and then now as next steps I can go and say okay help me out and ship this application right and then it'll tell us how to put it on the internet and get other users in it and then I can say okay give me a marketing plan for this for this application right every step of the way AI will be helping you out so really powerful stuff two important things here is one use AI to help you build the products but equally is important make sure you understand what you're building ask the AI to walk you through the code line by line of what's going on so you're not only building the application but you're also learning how it works so that next time you do this you can be a little better a little bit faster and understand what's going on a little bit more if you found this helpful make sure to like subscribe turn on notifications as well I'm going to be building a ton of these videos I'm going to be showing you how to build many different applications if you never used AI before if you've never built applications before keep it tuned to this Channel I want to make it super easy to use Ai and build really incredible things and make it so anyone can do it no experience required this was a lot of fun I hope you had fun too see you in the next video

## Timed Segments

[0:00] in this video I&#39;m going to teach you how
[0:01] to build your first application just
[0:04] with AI no programming experience
[0:06] necessary it doesn&#39;t matter if you&#39;ve
[0:08] never wrote a line of code in your life
[0:10] by the end of this video if you stick
[0:11] all the way through you&#39;ll have your
[0:13] first app and on top of that you&#39;ll be
[0:15] able to program more apps by yourself no
[0:17] help required let&#39;s get into
[0:20] it boom I&#39;m over here now let&#39;s get
[0:23] right into it what I&#39;m going to show you
[0:25] how to do today is build a Todo app
[0:28] through JavaScript no coding experience
[0:31] necessary really easy to do and all
[0:34] you&#39;ll be doing is using AI the AI is
[0:36] going to teach you how to write the code
[0:37] it&#39;s going to teach you what the code
[0:38] means and it&#39;s going to give you the
[0:40] skills you need to then go and build
[0:42] other applications yourself again
[0:44] beginners can do this no coding
[0:46] experience necessary and this will put
[0:48] you on a path where you can start
[0:50] building your own applications that you
[0:51] can then turn around and sell or have
[0:53] others use so what we&#39;re looking at here
[0:56] is on the left is a site called repet
[0:59] and on the right is AI I&#39;m using grock
[1:01] 2.0 but you can use whatever you want if
[1:03] you want to use chat GPT or Claude you
[1:05] can do that any of them work uh I just
[1:08] like to use grock it&#39;s the newest model
[1:09] grock 2.0 at the moment this video came
[1:11] out so on the left hand side is repet
[1:14] what repet is is a place where you can
[1:16] put code and run it completely free on
[1:18] the internet uh it&#39;s the best beginner
[1:21] friendly way to write and run code I
[1:23] like to use it completely free easy to
[1:25] use so what you&#39;re going to do right now
[1:27] first is sign up for repet pause the
[1:29] video link down below completely free
[1:31] create your account come back and we&#39;ll
[1:33] start building
[1:35] code okay welcome back here we are let&#39;s
[1:38] do it so now that we&#39;re in repet we&#39;re
[1:39] going to create a rep down here it&#39;s
[1:42] going to be in react JavaScript uh react
[1:44] JavaScript is a programming language
[1:47] that a lot of big companies use today
[1:49] it&#39;s one of the fastest ways to build
[1:50] and deploy applications if you learn
[1:52] these skills here you can very quickly
[1:54] turn around and build a lot of other
[1:56] different applications let&#39;s give it a
[1:58] name we&#39;ll name it AI to do app and we
[2:02] will create
[2:04] it now our environment is set up on the
[2:07] left side to put in code we get some
[2:09] basic code set up for us here uh and
[2:11] then what we can do is if we go to
[2:13] console we can then click run and what&#39;s
[2:16] going to happen is it will run the code
[2:18] for us and so what you can see here is
[2:21] your basic boilerplate react JavaScript
[2:25] code all set up for you as you edit code
[2:27] over here on the left you&#39;ll get the
[2:29] results in real time on the right this
[2:31] could be a little intimidating don&#39;t be
[2:33] intimidated we&#39;re right at the beginning
[2:35] what we&#39;re going to do now is switch
[2:36] over to the AI over here and we&#39;re going
[2:38] to start using it to teach us how to
[2:40] code teach us how to build this app and
[2:42] get some really cool results really
[2:43] quick so I&#39;m in grock again you can use
[2:46] anything you want if you want to use
[2:47] chat GPT if you want to use Claude it&#39;s
[2:49] all up to you they&#39;ll all be doing the
[2:50] same thing I&#39;m just using grock for this
[2:52] and what we&#39;re going to do is we&#39;re
[2:53] going to say hi grock I always say hi to
[2:56] to my AI as I&#39;m building things out you
[2:58] got you got to have your manners you got
[2:59] to have your manag one day they&#39;ll be
[3:01] more powerful than us and can kill us so
[3:02] you got to make sure you say hello and
[3:04] thank you and all that hi grock uh I&#39;m a
[3:07] brand new
[3:10] programmer and I&#39;d like to make and by
[3:13] the way this prompt will be down below
[3:15] in the description uh if I&#39;m you I would
[3:17] actually type this out yourself not just
[3:19] copy and paste it uh a big thing here is
[3:22] you know you I want you to also learn
[3:23] how to prompt with me and use Ai and get
[3:26] better results so if you manually type
[3:28] this in yourself you&#39;re going to learn
[3:30] prompting skills while you&#39;re doing this
[3:31] too so follow along with me while I do
[3:33] this and then you can pause and prompt
[3:35] yourself and change the prompt if you
[3:37] want but here we go hi grock I&#39;m a brand
[3:39] new programmer and I&#39;d like to make a
[3:42] Todo list app using
[3:46] react I&#39;ve never programmed a line of
[3:52] code in my life before so if you please
[3:57] can help me out here
[4:00] but also teach me step by step what
[4:05] you&#39;re
[4:07] doing so I can then build other
[4:12] applications
[4:14] myself please make this app
[4:19] simple so that I can then customize it
[4:24] any way I want so what we did here is we
[4:29] set the state with the AI on what we&#39;re
[4:31] trying to do what our background
[4:33] experience is It&#39;s always important when
[4:35] you&#39;re prompting AI especially if you&#39;re
[4:36] going to be building applications uh
[4:39] letting them know what the situation is
[4:40] what your skill levels are and not just
[4:42] to build it right if they&#39;re just
[4:44] building it you&#39;re not learning anything
[4:45] here so what I&#39;m doing is I&#39;m explaining
[4:48] what my skill level is and what I&#39;d like
[4:50] roock to do which is teach me along the
[4:52] way so that I not only just spit out a
[4:54] bunch of code that I don&#39;t know what is
[4:55] doing but also I learn what it&#39;s doing
[4:57] so I can customize and build myself
[5:00] uh and build my skills as well and real
[5:02] quick let&#39;s also make sure that we let
[5:04] grock know we&#39;re using repet so the AI
[5:07] know about all the websites and how they
[5:08] work it&#39;s pretty amazing how they work
[5:10] actually so let&#39;s go in here and also
[5:12] make sure they know that I&#39;m doing this
[5:17] completely
[5:20] Onre awesome now we can run
[5:24] it so what we&#39;ll get here is we&#39;ll get a
[5:27] guide from grock on how to build this
[5:29] application from repet step by step
[5:31] right so it&#39;s going to tell us exactly
[5:33] what we need to do uh we can skip most
[5:35] of this cuz I got this most of this set
[5:36] up for you already but let&#39;s go into the
[5:39] basic structure so it&#39;s going to teach
[5:41] you about the basic structure of a react
[5:43] application again react is a really
[5:46] awesome framework for JavaScript
[5:48] basically makes it very easy to quickly
[5:50] spit out applications ship them launch
[5:52] them and get people using your apps it&#39;s
[5:54] going to tell you about the code
[5:56] structure over here on the left the
[5:57] different files what they each do I
[6:00] definitely recommend taking the time to
[6:02] go through this and learn about what
[6:03] each one of these do um but what we&#39;re
[6:06] going to do here is we&#39;re going to go
[6:07] into the main part of the application uh
[6:10] which is
[6:12] app.jsx this is the code you see here so
[6:15] if I come into app here and I
[6:17] say uh subscribe to Alex Finn and then I
[6:23] save it what you can see is Boom
[6:25] immediately updates uh what you see on
[6:27] the application in the web view so
[6:29] pretty PR cool so this app.jsx this is
[6:31] going to be your main file where you&#39;re
[6:33] going to do all the code editing as
[6:35] explained by grock here um so what I&#39;m
[6:38] going to do is copy over this code I&#39;m
[6:41] going to drop it in here so you can get
[6:43] a taste of what the kind of basic app
[6:46] code does spit out from grock so this is
[6:48] the basic to-do list and we can do to-do
[6:51] item one and add it and so what you can
[6:54] see is all the items you add your to-do
[6:56] list go under here so this isn&#39;t
[6:58] obviously good enough this gives us an
[7:00] application but we don&#39;t know how the
[7:01] hell this works or what the hell it&#39;s
[7:02] doing since we&#39;re beginner programmers
[7:04] we really want to understand line by
[7:06] line what&#39;s going on here so what we&#39;re
[7:08] going to do is we&#39;re going to go down
[7:09] here it&#39;s going to give us some basic
[7:11] styling it&#39;s going to tell us the exact
[7:13] app file to put that in and put that in
[7:16] here update it o looks makes it look a
[7:19] little prettier and then now what it&#39;s
[7:21] going to do is start explaining so let&#39;s
[7:23] do this let&#39;s
[7:26] say start with app
[7:31] .js please explain line by line how this
[7:37] works so I can truly understand the code
[7:43] I&#39;m writing here my goal is to become
[7:49] proficient in react so I can build other
[7:55] applications and so what we&#39;re doing
[7:57] here is we&#39;re now having a conversation
[7:58] with the AI
[8:00] uh to learn what it is it&#39;s having us do
[8:02] so we can learn how the code works so
[8:03] that after this we can a customize this
[8:06] Todo list to our liking and then B build
[8:08] other applications maybe applications we
[8:11] build ship and start selling and making
[8:13] money off of so let&#39;s hit enter on
[8:16] this and now it&#39;s going to break down
[8:18] app.js which is our main file here which
[8:21] is building the main portion of the code
[8:23] it&#39;s going to go line by line and tell
[8:25] us uh how it&#39;s working so as it
[8:28] generates the code here here what you
[8:30] can see is first it starts at the
[8:31] Imports so up here at the top it
[8:34] explains what these import statements
[8:36] mean uh it means it&#39;s it&#39;s importing a
[8:39] lot of the react technology that&#39;s
[8:41] basically saying this application is
[8:43] built in react so it knows what type of
[8:45] programming language you&#39;re using and
[8:47] then goes in and tells you line by line
[8:49] what it&#39;s building out what different
[8:51] functions are how State management works
[8:54] event handlers and this all sounds very
[8:56] complex I know as you&#39;re doing this but
[8:58] what I really want want you to be able
[9:00] to do is a not only understand how you
[9:03] can use AI to build applications but B
[9:06] start to get a grip on how the code
[9:07] works and understand the powers you have
[9:10] and how you can start building
[9:11] applications even with no coding
[9:13] experience before so what I want you to
[9:15] do now is quickly go through here
[9:17] there&#39;s going to be a lot of very
[9:19] complex stuff if you try to understand
[9:21] it all at once you&#39;re going to become
[9:23] very intimidated uh and it&#39;s going to be
[9:25] hard to learn all this but what I want
[9:27] you to do is go through this find one or
[9:30] two things you want to learn about right
[9:31] so maybe we go in here and we ask grock
[9:35] can you
[9:37] explain event handling to me as if this
[9:42] is my first
[9:44] JavaScript application right so we&#39;re
[9:47] picking different things out we want to
[9:49] learn about you know I I really
[9:51] recommend choosing one or two things at
[9:52] a time again if you try to learn
[9:53] everything at once this can get really
[9:55] complicated really quick choose one or
[9:57] two things read about what that concept
[10:00] means and the more applications you
[10:02] build the more you can pick out
[10:04] different things to learn and get better
[10:05] at coding but let&#39;s do this let&#39;s go
[10:08] back in and let&#39;s start customizing our
[10:10] to-do list application here so we have
[10:12] our application here maybe we want to
[10:14] start actually numbering each item in
[10:17] the to-do list as we put it out so right
[10:18] now it says to-do item one so maybe we
[10:21] want to get
[10:24] groceries got to learn how to spell
[10:26] groceries there and we need to buy I
[10:29] paper
[10:31] tells and go to the gym so maybe we want
[10:35] to start customizing this and getting
[10:37] them numbered so let&#39;s say grock please
[10:40] make it so that each item in the Todo
[10:44] list
[10:46] automatically gets
[10:48] numbered in ascending order okay so
[10:55] basically what we&#39;re doing now is we&#39;re
[10:56] using grock as a pair programmer we&#39;re
[10:58] finding different things we want to edit
[11:00] in the application we&#39;re telling grock
[11:02] what it is we want to do and then grock
[11:04] is giving us the new code to
[11:06] automatically number each to-do item in
[11:08] ascending order in your react to-do list
[11:10] we&#39;ll apply the following code okay so
[11:13] it gives us the code we can take this
[11:16] copy it over I have it copied over
[11:18] already and now let&#39;s test it out uh get
[11:24] groceries add and as you can see
[11:26] automatically numbered uh Play video
[11:31] games when in Madden
[11:36] online as you can see everything is
[11:38] numbered we asked the AI to edit the
[11:41] code for us add new functionality it
[11:43] spit out the code and then on top of
[11:45] that it then goes and tells us exactly
[11:48] what it did so it goes inside the map
[11:50] function and for every item in the to-do
[11:53] list it pluses one right and so now you
[11:55] can go in not only has it changed the
[11:57] code for us but now it explains the code
[11:59] change isn&#39;t made this is really awesome
[12:02] right this is the power of AI this is
[12:05] what AI unlocks is the fact that anyone
[12:07] with zero programming experience can go
[12:10] in and not only build out fully
[12:12] functional applications like you see
[12:13] here but now they can come in and also
[12:16] learn the coding along the way so they
[12:18] can come back make any applications they
[12:20] want why is this so economically
[12:22] powerful because now anyone who has an
[12:25] idea can go and create that idea and
[12:28] make it a reality very fast and then
[12:30] start making money off of it before AI
[12:32] if you had ideas you had to go hire a
[12:34] programmer which could take months and
[12:36] then work with the program you might not
[12:38] even get the application you want but
[12:40] because of AI you can now by yourself go
[12:43] from idea to reality in under 15 minutes
[12:47] right it&#39;s unbelievably powerful what
[12:49] you have here if you&#39;re not taking
[12:51] advantage of this you&#39;re really going to
[12:52] fall behind the people who come up with
[12:55] ideas and are able to create them and
[12:57] sell them are going to make a lot of
[12:58] money this AI Revolution let&#39;s do some
[13:01] other tinkerings here let&#39;s try some
[13:03] other things out some other stylings and
[13:05] show you some other ways you can use AI
[13:07] to build
[13:09] applications uh let&#39;s also do this let&#39;s
[13:13] add a new field for each to-do item that
[13:19] lets me rank the
[13:22] priority so now I&#39;ll be able to go in
[13:24] and give each to-do list item a ranking
[13:27] of difficulty so I know how to PR
[13:29] prioritize each one so now I can come in
[13:33] I can take this code add it to the
[13:35] sections it has me doing
[13:37] here and I have the brand new
[13:39] application I can keep going back and
[13:41] forth right I can keep going back and
[13:43] forth with the app uh and adding new
[13:46] features new functionality any ideas I
[13:48] come up with I can do it here&#39;s another
[13:50] powerful thing you can even do and I
[13:52] love doing this when I&#39;m building
[13:53] applications with AI is you could
[13:56] actually ask the AI for advice so maybe
[13:59] have an application like the to-do list
[14:00] here but you&#39;re not sure how to improve
[14:02] it you don&#39;t have other ideas you can
[14:05] bounce ideas off the AI to come up with
[14:07] new things to add so let&#39;s do that hey
[14:11] grock what other features and
[14:16] functionality would you add to this app
[14:20] to make it more
[14:23] useful and now what you can see here is
[14:26] grock actually gave us recommendations
[14:29] on how we can improve the application
[14:31] through categories due dates sorting and
[14:33] filtering notifications and reminder
[14:35] editing this is pretty incredible not
[14:37] only is the AI our programmer it&#39;s also
[14:41] our product manager our marketer it&#39;s
[14:43] taking on all these different roles for
[14:45] us right it&#39;s giving us recommendations
[14:47] on how to improve the product so you can
[14:50] come in here it&#39;s basically like your
[14:51] free business partner where you give it
[14:54] ideas it helps you build the ideas it
[14:56] helps you improve the ideas it&#39;ll help
[14:58] you ship the ideas to help you make
[14:59] money off the ideas this is the power of
[15:02] AI that not many people are taking
[15:03] advantage of most people are just going
[15:05] in Ai and trying to make it say silly
[15:07] things right if you&#39;re not using AI to
[15:10] ideate build and ship products you&#39;re
[15:13] you&#39;re losing that on potential millions
[15:15] of dollars right A lot of people are
[15:16] using AI coming up with ideas and then
[15:19] shipping those ideas and making a lot of
[15:21] money off of it and it&#39;s really easy to
[15:23] do I did this all in what the span of 15
[15:26] minutes it was super easy now I can go
[15:28] okay let&#39;s do this uh let&#39;s add edit
[15:33] functionality okay let&#39;s implement the
[15:37] editing
[15:39] functionality and now grock will give me
[15:42] all the code and ideas necessary I need
[15:44] to do that right now it&#39;s generating the
[15:46] code I can implement it and keep
[15:48] iterating on this
[15:51] application it&#39;s pretty amazing it&#39;s
[15:53] pretty powerful and you&#39;re able to do
[15:55] this really with zero programming
[15:57] experience required with zero
[15:58] programming experience you&#39;re able to
[15:59] build an app improve it and then now as
[16:02] next steps I can go and say okay help me
[16:05] out and ship
[16:08] this
[16:10] application right and then it&#39;ll tell us
[16:13] how to put it on the internet and get
[16:14] other users in it and then I can say
[16:15] okay give me a marketing plan for this
[16:18] for this application right every step of
[16:20] the way AI will be helping you out so
[16:23] really powerful stuff two important
[16:25] things here is one use AI to help you
[16:27] build the products but equally is
[16:29] important make sure you understand what
[16:30] you&#39;re building ask the AI to walk you
[16:33] through the code line by line of what&#39;s
[16:35] going on so you&#39;re not only building the
[16:36] application but you&#39;re also learning how
[16:38] it works so that next time you do this
[16:40] you can be a little better a little bit
[16:42] faster and understand what&#39;s going on a
[16:43] little bit
[16:44] more if you found this helpful make sure
[16:47] to like subscribe turn on notifications
[16:49] as well I&#39;m going to be building a ton
[16:51] of these videos I&#39;m going to be showing
[16:53] you how to build many different
[16:54] applications if you never used AI before
[16:57] if you&#39;ve never built applications
[16:58] before
[16:59] keep it tuned to this Channel I want to
[17:01] make it super easy to use Ai and build
[17:04] really incredible things and make it so
[17:06] anyone can do it no experience
[17:08] required this was a lot of fun I hope
[17:10] you had fun too see you in the next
[17:12] video
