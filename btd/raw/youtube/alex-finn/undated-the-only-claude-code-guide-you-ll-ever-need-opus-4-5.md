---
title: "The only Claude Code guide you'll ever need (Opus 4.5)"
creator: "alex-finn"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=UVJXh57MgI0"
video_id: "UVJXh57MgI0"
duration: "24:45"
transcript_method: "youtube-captions"
segment_count: 734
char_count: 28262
status: ingested
topics: []
meta_patterns: []
---

# The only Claude Code guide you'll ever need (Opus 4.5)

**Creator**: alex-finn | **Duration**: 24:45
**URL**: https://www.youtube.com/watch?v=UVJXh57MgI0
**Transcript**: 734 segments, 28262 chars

## Transcript

Clawed Code with Opus 45 is the greatest AI coding tool on planet Earth, but only if you use it the right way. In this video, I'm going to go through every single pro as someone who's been building with Claw Code for 12 hours a day for the last year. In this video, I'm going to go through every single pro tip there is from how to set it up, all the features, and how to build an entire application from beginning to end. Even if you've never coded a day in your life, whether you're a Claude Code pro or a stone cold beginner, you're going to learn a ton in this video if you stick with me till the end. Let's lock in. Leave a like if you want more videos like this and let's get into it. So, starting out with why Claude Code is the best. If you're brand new to it, feel free to skip to the next section if you want to get to set up. All the chapters are down below. Feel free to skip around, jump wherever you need to learn. But why it's the best one, it's the simplest to use. You just give it commands. It writes code for you. That's it. There's nothing more. There's nothing less. It is just a prompting tool and that is it. It is so simple which makes it very beginnerfriendly. Instead of having 20 different features and an entire ID, it is just a text box where you enter commands and the AI agent does things for you. And despite being so beginnerfriendly, it is still by far the smartest tool out there, especially since Opus 45 launched, which is in my opinion the greatest leap in AI technology since GPT4 came out. It is so beyond leaps and bounds smarter than any other coding model out there. You tell it what to do, it does it without errors, it does it without flaws, and it does exactly what you want to do. And maybe my favorite part about all this by far when it comes to claude code is it is the most proactive. You give it a command, it understands the context and nuance of what you want it to do and it goes and it does extra things. It builds out those extra features. It asks you questions. Wait, did you mean this or did you want to do this? It truly understands what you want to do in a deep level and it proactively builds out exactly what you want. All of this combined makes for in what my opinion is the best. Not only AI coding tool out there, but just the by far the best AI tool there is. And if you're going to learn just one AI coding tool, in my opinion, Claude Code's the one. I'm not getting paid by Claude Code. No one from Anthropic even really talks to me to be quite honest with you. I just love this tool and use it every single day and that's why I teach so many people about it. So let's start with setup. There are three ways to use Claude Code. A IDE extension. So an extension like in Visual Studio or cursor, the desktop anthropic claude app as well as the CLI which is kind of the classic way of using it which is just right in your terminal. There are pros and cons to each. I prefer the CLI and for this video we'll be using the CLI. The reason being is a few. There's the extension which I was actually recommending for the last few months and recently changed. The extension has a great guey, a great user interface which makes it very easy to use. It has all the basic features of Claude Code. It just lacks some advanced functionality we'll talk about. Then there's the desktop app. This is the Claude desktop app that is actually really cool and really neat. Has the best user interface by far for claude code. It allows you to spin up cloud agents, local agents, which is like it's basically the best AI agent manager out there. It is the best for efficiency, so working on multiple projects at once. It is the best with clawed skills. One issue though, it has no plan mode, which is a major oversight by Anthropic. I'm sure that's coming soon. But that lack of plan mode really kills the experience, which is why we're going with the CLI, which has the worst user interface because it's the terminal, and no one really likes using the terminal unless you're a total nerd. But despite having not the strongest user interface and having no cloud agent management, it has the best features and functionality of all three of these. And that is enough for it to be the winner and earn my recommendation for best way to use Claude Code. Its plan mode is just smarter than the other formats. When you use the plan mode in the CLI, it's just different. It asks you more questions. It feels like it understands you on a deeper level. It feels smarter. It makes less mistakes. I don't know what it is, but the CLI harness for Claude is the best in the entire game. And so, despite it having the worst user interface, we are going to be using the terminal for this. And I'll show you how to set that up next. So, real quick, going into a couple more basics. If you already got Claude Code set up, feel free to skip to the next chapter where we start building the app for this. But, I wanted to make a video that's inclusive of all beginners and everyone interested in Claude Code. So to set it up, you can just go to clawed code the website. Take this command right here. We're going to put that into the terminal. And there's also just a real quick cover the pricing. You have three plans. You can use claude code with claude opus on the pro plan for $17. You probably won't even have enough usage to build one app. But maybe you start with the $17 plan just so you get a feel for Claude code and see if this life is for you. This Claude code life. The max plan. I know a ton of people on the max plan, the $100 month plan, and they still get really good usage. So, you're totally fine then starting with the $100 plan, and upgrading to 200 when you need the usage, that's totally fine and acceptable. But if you like Claude Code and you end up using it any sort of amount to build even a single app, you will probably end up on one of these two tiers. And let me tell you this, it is more than worth it. It is the best $200 I spent a month by far. You shouldn't be comparing these $200 to like the amount you're spending on like Netflix or like HBO Max. All those SAS tools you compare that to, you're comparing it to things that drain your time and energy and money and don't actually add anything to your life. This is the equivalent of like hiring a developer for $200 a month. Typically, developers cost you like 10 $15,000 a month. So, this is actually an incredibly great deal if you think about it with that perspective. And that's the way I think everyone should be thinking about. So this is actually a steal for what you're getting. So now let's go into actually setting it up. What we're going to be using here to set it up is actually Visual Studio Code, which is a completely free platform to use. I'll leave the link down below for Visual Studio Code. This is where we're going to actually house the CLI itself. So if you're on Mac, you hit control till day. This opens up the terminal. I actually like having this on the right hand side so you have a little bit more vertical space. And what we're going to do is if you've never set up Claude Code before, copy and paste that command from the last website we were on. Paste that into here. That'll install it. Once you have that installed, you can hit Claude. Just type that in. Hit enter. Say yes, I trust this folder. And you are good to go from here. And actually, you probably should have done this first. We want to open up a new project. So, hit command O. If you're on Mac, that'll let you set up a new project. We're going to go into documents here. We're going to set up a new folder. I'm going to call this project management. And I'm going to hit create. And we're going to actually build out today an entire project management app. I love building apps that you can use in your day-to-day life. And one app everyone should build, even if it's your first project, is a project management app where you can enter in tasks, track your progress on whatever project you're working on. This will make it a lot easier to build more projects in the future. So work with me here. Do what I'm doing. Pause the video if you need. Set up a folder project management. Hit open and we are good to go. We're going to need to just open up Claude one more time. So control till day panel position right and claude and hit enter and boom just like that we are in claude code. So by default you should be in opus 45 that is the greatest AI coding model in the history of mankind. If it doesn't say opus 45 right there make sure you hit /model and then select default. That'll give you opus 45. So we are going to be on that. We are in opus 45 which is the fastest smartest best AI coding model ever. If you hit slash here, you're going to see a lot of the different slash commands you can use. There are a ton of them. I'm going to go through just a couple that I think are super important. There's a few important ones in here you probably want to know. Slash clears all the context. So, we're going to use that every time we build out a new feature so that Claude is nice and snappy and fast. You'll probably want to use slash login if you've never used Claude before. That'll log into your account so you can validate that you're on a tier. slashre will actually undo code as you go. So if you ever make a mistake, you can go back to a last checkpoint. Slcurity review is awesome. We'll use this in the video as well. It sends up an agent that actually reviews your app for security. Security is super important, especially when you're vibe coding app. So you want to make sure you know about that. And then slash stats tell you about your claw code usage to see if you're near any limits. Those are the important slash commands you need to know. Those are the only ones basically I use. What we're going to do from here is we're going to use plan mode. Plan mode is an incredible feature in Claude Code. If you do shift tab, shift tab, you will see plan mode on. This is going to build out a plan for whatever we want to build. What makes Claude code so so so good is it builds the best plans, the best to-do lists that help you execute the tasks you want to build. And plan mode is the best way to do this. Before you build any big features, before you build out your kind of first prompt for your app, you always want to use plan mode because what that will do is cause Claude to think deeply about what you want to do. Build a plan, run it by you, ask any questions it has, and let you approve that plan. So, we want to be using plan mode when a we're starting a new project or b we're building out any big features. So, here is the beginning prompt we're going to use to build our project management app. I want to build a project management app for vibe coders. It should be a cananband board that also has a to-do list next to it and a note-taking area. The cananband board should have todo, in progress, and complete and have cards for the tasks you can drag and move around. Make it a clean, simple, dark mode interface that doesn't look at AI generated. Right after this, once we get V1, I'm going to go into actually designing this, making it look beautiful. There's a couple tips and tricks I want to go through with that, but this is the initial prompt. I also put it down below. You can paste that in here. I'm also going to say I want to use NextJS for this and local storage. Next.js very popular web technology we're going to use for this. And local storage is just going to store all the to-dos and notes locally before you implement a database. I'm going to hit enter on that and Claude is going to get to work. This is your AI agent. That really is all cloud code is at the end of the day is just an AI agent that just happens to code very well. You can use claude code to do anything you want on your computer. You can have it go do research on the web, anything you want. It just happens to be very very good at writing code. So it's saying, I'll help you build a project management app for vibe coders. Let me first explore the current directory to understand what we're doing. So it's getting to work. It's exploring the code we already have, which is absolutely none. Then it's using a front-end design skill. This is a specialized claude skill, which is a super powerful feature of Claude code, which I'll show you in a second that actually makes it a design expert. So I'm going to show you how to set this up. But Claude skills are an amazing feature that really no other AI tool has where you can actually plug in very specific skills including UI and design skills. So it makes it way better. So after I show you V1 in this app and what this interface looks like, I'll show you exactly how to plug in that design skill. So everything Claude Code builds for you looks amazing. This is one of my favorite parts about Claude Code's plan mode that you only get in the CLI. And this is when it starts asking you questions about what you want to build. So, we gave it a prompt. We said, "Hey, can you build this for us?" Now, it's specifying some things and making some recommendations for what we can build. What should the app be called? I suggested flow state, but you might have something else in mind. I like that. Flow state. That's a good name. Let's do flow state. Should cards on the cannon board have any extra fields beyond title and description? Let's keep it simple for now. Maybe we add priority and everything else after. I'm going to go down and hit next. I love how it's multiple choice. It makes it really easy for you to make decisions. Anytime you're talking to someone important, always making multiple choice. So, it's very easy for them to make decisions. Claude Code understands that because they're talking to you and me. They know we're important. So, it gives us multiple choices. How should the note panel work? Single scratch pad or multiple notes. Let's make it notable multiple notes. You can save multiple notes and then we're going to submit our answers. It specified some things. It help us came up with new ideas. And it's just awesome. It's just awesome to work with the Claude Code plan mode. This is one of the biggest reasons why I think Claude Code is the best AI coding tool on planet Earth. All right. So, here's the amazing plan it built for us. It gave us an entire overview of the cananban style project, an entire aesthetic direction about the project, which is amazing. Even tells the exact colors it's going to use, the text stack, so you can see what it's built on. And listen, even if you're not technical, just read through it real quick so you kind of understand what it's going to build out, the data model, the layout structure. Again, this is getting technical, but it doesn't matter quite as much. Just read it. It give you a feel for the project, how it's working, and as you go, you'll actually get more and more technical naturally. So, let's do this. Let's go in and let's say yes and auto accept edits. I always auto accept edits just because it is so smart. It is so good and it really doesn't mess up for me at all. I fully trust Claude Code to build what we need. So, feel free as it goes to say yes and yes, don't ask again. Uh, it really is not capable of doing anything to mess up here. There's no stories online of Claude Code messing things up and deleting a whole bunch of stuff. You really are free to trust it. If you really want to prove step by step, you can go right ahead and do that, but I have never found issues with giving it full access to do whatever it needs. All right, looks like v1 finished. When your cloud code is done working, it'll give you a local host address to go to. You can then go to that local host address. And let's see what it looks like here. This is actually uh awesome. Let's see. I'll move this over here. flow state, quick task. So, we can add quick tasks, plan out the app, market the app. Uh, we have our to-do list board. So, we also have to tweet about the app. Add that there. And it gives us a nice card which we can drag around. That is awesome. I love this UI. I'm going to be honest. I'm not just saying this so I can hype up this video and keep it exciting. I actually think this is the best UI uh an AI has ever built for me for an app. This is beautiful. It is clean, simple. I don't think anyone would guess that this is AI generated. There's no blue or purple gradients everywhere. Uh, and then we have this note section. This This looks amazing. So, let me do this. Now that we have what the V1 this looks like, your app might not look anything remotely as good or close to this. The reason being is I'm using a very particular clawed skill. It is a UI design skill. Let me show you how to set that up so you start getting awesome looking UIs like this. So, here is how you make your AI build way better interfaces. That is with the Claw design skill. So, I'm going to put the link to this tweet down below. Make sure to go to it. This has the two commands you need to install this Claude skill. And basically, all Claude skills are are plugins for Claude that teach it new skills. And what these two commands will do will teach it a skill that shows it how to make professionallooking user interfaces. So, go down below, go to this tweet, pause now, grab these two commands, and then you're going to go into Claude Code, paste them right in here, hit enter on the first one, hit enter on the second one, and you'll have the design skill installed. Now, what you can do is you can say, "Redesign my UI using the new design skill." Hit enter, and it will redo your UI to make it look a lot better. Because if you didn't have this design skill, my guess would be what you're looking at here is a whole bunch of blue and purple gradients uh that are pretty hard to the eyes. So doing that will make this look way better, much closer to mine, which I think this is very professional looking, almost linear. I even like the uh fonts. The fonts look very modern. So make sure you do that. Your UI will look way better. So let's move on. Let's build out more features here. I'll go through how to prompt to get better features and I'll go into little tips and tricks here. So, basically, when it comes to prompting, you don't need advanced prompting techniques. You don't need to structure it in crazy ways. Everyone on planet Earth will give you different frameworks for prompting where you have to include a whole bunch of context. No, no, no. It's very simple. Just be very clear and upfront about what you want to build. So, for instance, I want to make it so we have priorities in each one of these tasks on the Cananban board. So we'll just be very clear and straightforward. I want to add priorities to the tasks in the canban board. So high level exactly what we want. Now we can give it little details about what we want in there as well. I want to make sure I can assign different priority levels. Here's the thing I also like to do often is I like to say anything else you want to add. Mark, you can treat this very much like a creative partner. I like to ask tons of questions like that. What else would you add? What else would you do here? What do you think about this? What's your opinion? Claude Opus 4.5 has better taste than any other AI model I've ever used. So, it actually will give you really, really good recommendations. It will be honest with you. It'll be honest about when things stink or when you shouldn't implement things. So, let's do this. Let's send that. Make sure you ask questions like, "What else would you add? What else would you do here?" You'll get a lot of really nice recommendations. So, this is great. Even though we're not in plan mode, it's still going to ask us really cool questions. So, how should priorities be displayed on cards? A colored dot, a side border, or a badge, or a pill? Let's do a colored dot. I like that. Subtle and minimal. Want me to add any of these while I'm at? This is what makes Opus 4.5 so great. Is it super proactive? We talked about this earlier. So, we just asked about adding priority, but it's like, hey buddy, anything else you want me to add here? I can add due dates, archive columns, filter by priority, keeping it simple. Yeah, let's add a couple. This is multiple choice. We can say due dates and we can say archive column and we can say filter. Let's add all of them. Filter by priority as well. And let's hit submit. And it's going to do all of that for us. It's super proactive. It comes up with ideas on the fly. It gives us recommendations. It's truly the first time I feel like I have like a senior developer working for me rather than like an intern, right? It's little things like that that that no other AI model that no other AI tool does that really makes it feel special working with this tool. And it's also what makes it so beginner friendly is you can come in here with no ideas, no idea what to do and it will kind of guide you through building it out. Again, I'm not being pi paid by Anthropic. This isn't a sponsored video. I'm just really passionate and love this tool a ton and really think everyone should be using it. All right, looks like it is all done. They added a whole bunch of features for us. Let's go over here. Let's give this a refresh. And it looks like we are getting errors. This is good. This is good. So now I can show you how to debug in the rare instance that Opus45 gives us errors. Here's how you debug. It's very simple, very straightforward. You get an error like this. You copy it. You go back into the clock. You say, "Hey, I'm getting an error and then you paste and then you hit enter." And here we go. It'll just go and fix it. Very, very simple. Oh, looks like it is a stale cache issue. So, all we need to do is just basically hard refresh the page and it'll fix it. All right. So, it wasn't Claude Code's fault fault, but either way, it's telling us how to fix what we're seeing, which is great. All right. So, the cash is cleared. Let's pull this open here. And boom. Look at that. Looking good. Let's add a task. Oh, and look, we can do the priority, low, medium, high, market our app. Let's see here. Yep, we can click and it moves it around. I like the colors. All the colors kind of match. I really like the theme of the entire app. It really has extremely good taste. And we can move it around. And you can see the different priorities here. We can filter. That looks great. I love that. That's cool. So from here you can add any features and functionality you want. But how do you take it to the next level? How do you start giving it a database so you can store all the data, right? Maybe we want to put our tasks in the database so it stays consistent across all our sessions. Maybe we want to add off. Maybe we want to add pricing. Well, here's what you got to do for all that. The first thing you're going to want to do is add this to GitHub. If we're going to host our app, if we are going to allow other people to use it, we're going to want to have it on GitHub. So, make sure you go and sign up at github.com. You're going to want to start a new repository. Give it a name. We can call it flow state. Make it a private repository and create that repository. This is going to give you a URL where you can upload this code. Take that URL. Then we're going to come back into Claude Code and we're going to say add all this code to GitHub and then paste in the URL it gives you. This will then have Claude code go take all the code, put it onto GitHub. This is where your code will be hosted and stored so we can do things like put it on the web, allow other people to use it. This is a really important step. It's also going to back everything up just in case your computer gets wiped. All the code will be stored on the web. So you want to make sure you have this on GitHub. From there, you can implement other tech, right? So if you want a database, this is where all the data in your app is going to be stored like the tasks or the users, you can use superbase for this. This can also be your off. So this is what an entire web app looks like from the front end which is what you see that's Nex.js to the backend and database that's where the data is stored to the hosting. So this is what's going to actually host your website so people can visit it. You're going to use Verscell, right? So Verscell will be able to host it for free. You can put the code there. It links to your GitHub. So you can sign up for these services. O is going to allow the user to sign in. You can use Superbase O for that. Payments I like to use Stripe. Stripe the easiest to use, easy to implement and all of this. You can screenshot this here. You can just go to Claude Code and say, "Hey, I want to set up Superbase as the database. How do I do that?" And Claude Code will walk you through it. I want to put this on Versell so people can visit our app. How do I do that? Claude Code will walk you through it. I want to implement Stripe so people can start paying me for the app so I can start making money. Claude Code will work you through that. That's the best part. Anything you don't know how to do, Claude Code will walk you through it. The mindset 99% of people have when doing things like this is, "Oh, I don't know how to do this. I'm going to roll over and die and give up." Right? That's not the mindset you want to have. You want to be autodidactic. What does autodidactic mean? It's your ability to work on your own and just figure things the f out, right? And now that you have Claude code, you need to be autodidactic. Anytime you don't know how to do something, anything you get confused about, you have super intelligence at your fingertips. You go into Claude Code and say, "Hey, I don't know how to set up a database. What the heck do I do here?" And it will teach you how to do it. There's nothing you don't know how to do anymore. Claude Code teaches it all. So after you get your app in the shape you want, you built out the features you like, you're ready to implement the database and allow more users to use the app. Make sure you screenshot this, pause this here, and anything you see here, you say, "Claude code, how do I implement Superbase? How do I implement Versell?" And it will walk you step by step, very simply on how to do it. I go into a lot of detail and walk you through everything you need to know about Superbase and Versel and payments in the Vibe Code Academy. It's my private community. Feel free to sign up for that. I do weekly calls there. Answer your questions. You can DM me there. Anything you want. Link for the Vibe Coding Academy is down below. Also, if you've learned anything, make sure to leave a like, hit subscribe, and turn on notifications. All I do is make amazing videos about AI. And also, leaving a like will just let me know you want more videos like this. I've been told by a lot of people my Claude Code videos are great. So, I'm going to make a lot more videos about Claude Code. Let me know down in the replies what part of everything I showed you you want to see more of. Whether it's, hey, show me more how to build. Maybe I want to build out iOS apps. Show me how to set up databases. Anything like that you want me to do super deep dives on, I'll do that. I kind of went a mile wide and an inch deep here. So, let me know what you want me to go a mile deep on and I'll make sure to make videos about that. You can do that down in the replies below. From here, if you follow these steps and you host it on Versel, you'll have a full web app that anyone can use. You'll have a full app live. And even if you've never coded before, you'll have an app you can send to your friends and family members and at Christmas they'll be like, "Oh my god, that's incredible. You're the smartest person I ever met in my life. How'd you do that?" And you can be like, "Oh, I'm just really smart." But in reality is you had super intelligence, aka Claude Code, working for you. I hope this was helpful. I hope you enjoyed it. I hope you learned a little something. Claude Code is constantly changing, so keep it locked in. I'll go over all the interesting features for you as they release. and I'll see you in the next

## Timed Segments

[0:00] Clawed Code with Opus 45 is the greatest
[0:03] AI coding tool on planet Earth, but only
[0:06] if you use it the right way. In this
[0:08] video, I&#39;m going to go through every
[0:10] single pro as someone who&#39;s been
[0:12] building with Claw Code for 12 hours a
[0:14] day for the last year. In this video,
[0:16] I&#39;m going to go through every single pro
[0:19] tip there is from how to set it up, all
[0:22] the features, and how to build an entire
[0:25] application from beginning to end. Even
[0:27] if you&#39;ve never coded a day in your
[0:29] life, whether you&#39;re a Claude Code pro
[0:31] or a stone cold beginner, you&#39;re going
[0:33] to learn a ton in this video if you
[0:35] stick with me till the end. Let&#39;s lock
[0:37] in. Leave a like if you want more videos
[0:39] like this and let&#39;s get into it. So,
[0:41] starting out with why Claude Code is the
[0:43] best. If you&#39;re brand new to it, feel
[0:44] free to skip to the next section if you
[0:46] want to get to set up. All the chapters
[0:48] are down below. Feel free to skip
[0:49] around, jump wherever you need to learn.
[0:51] But why it&#39;s the best one, it&#39;s the
[0:53] simplest to use. You just give it
[0:55] commands. It writes code for you. That&#39;s
[0:57] it. There&#39;s nothing more. There&#39;s
[0:58] nothing less. It is just a prompting
[1:00] tool and that is it. It is so simple
[1:02] which makes it very beginnerfriendly.
[1:05] Instead of having 20 different features
[1:07] and an entire ID, it is just a text box
[1:10] where you enter commands and the AI
[1:12] agent does things for you. And despite
[1:14] being so beginnerfriendly, it is still
[1:17] by far the smartest tool out there,
[1:20] especially since Opus 45 launched, which
[1:22] is in my opinion the greatest leap in AI
[1:26] technology since GPT4 came out. It is so
[1:30] beyond leaps and bounds smarter than any
[1:32] other coding model out there. You tell
[1:34] it what to do, it does it without
[1:36] errors, it does it without flaws, and it
[1:37] does exactly what you want to do. And
[1:39] maybe my favorite part about all this by
[1:42] far when it comes to claude code is it
[1:44] is the most proactive. You give it a
[1:46] command, it understands the context and
[1:49] nuance of what you want it to do and it
[1:51] goes and it does extra things. It builds
[1:53] out those extra features. It asks you
[1:55] questions. Wait, did you mean this or
[1:57] did you want to do this? It truly
[1:59] understands what you want to do in a
[2:01] deep level and it proactively builds out
[2:03] exactly what you want. All of this
[2:05] combined makes for in what my opinion is
[2:08] the best. Not only AI coding tool out
[2:10] there, but just the by far the best AI
[2:12] tool there is. And if you&#39;re going to
[2:13] learn just one AI coding tool, in my
[2:16] opinion, Claude Code&#39;s the one. I&#39;m not
[2:18] getting paid by Claude Code. No one from
[2:19] Anthropic even really talks to me to be
[2:21] quite honest with you. I just love this
[2:23] tool and use it every single day and
[2:24] that&#39;s why I teach so many people about
[2:26] it. So let&#39;s start with setup. There are
[2:28] three ways to use Claude Code. A IDE
[2:31] extension. So an extension like in
[2:32] Visual Studio or cursor, the desktop
[2:35] anthropic claude app as well as the CLI
[2:38] which is kind of the classic way of
[2:40] using it which is just right in your
[2:41] terminal. There are pros and cons to
[2:44] each. I prefer the CLI and for this
[2:47] video we&#39;ll be using the CLI. The reason
[2:49] being is a few. There&#39;s the extension
[2:51] which I was actually recommending for
[2:53] the last few months and recently
[2:55] changed. The extension has a great guey,
[2:57] a great user interface which makes it
[3:00] very easy to use. It has all the basic
[3:02] features of Claude Code. It just lacks
[3:05] some advanced functionality we&#39;ll talk
[3:07] about. Then there&#39;s the desktop app.
[3:09] This is the Claude desktop app that is
[3:12] actually really cool and really neat.
[3:14] Has the best user interface by far for
[3:17] claude code. It allows you to spin up
[3:19] cloud agents, local agents, which is
[3:22] like it&#39;s basically the best AI agent
[3:23] manager out there. It is the best for
[3:26] efficiency, so working on multiple
[3:28] projects at once. It is the best with
[3:30] clawed skills. One issue though, it has
[3:33] no plan mode, which is a major oversight
[3:36] by Anthropic. I&#39;m sure that&#39;s coming
[3:37] soon. But that lack of plan mode really
[3:40] kills the experience, which is why we&#39;re
[3:42] going with the CLI, which has the worst
[3:44] user interface because it&#39;s the
[3:46] terminal, and no one really likes using
[3:48] the terminal unless you&#39;re a total nerd.
[3:50] But despite having not the strongest
[3:53] user interface and having no cloud agent
[3:55] management, it has the best features and
[3:59] functionality of all three of these. And
[4:02] that is enough for it to be the winner
[4:03] and earn my recommendation for best way
[4:06] to use Claude Code. Its plan mode is
[4:08] just smarter than the other formats.
[4:11] When you use the plan mode in the CLI,
[4:13] it&#39;s just different. It asks you more
[4:15] questions. It feels like it understands
[4:17] you on a deeper level. It feels smarter.
[4:20] It makes less mistakes. I don&#39;t know
[4:22] what it is, but the CLI harness for
[4:24] Claude is the best in the entire game.
[4:27] And so, despite it having the worst user
[4:29] interface, we are going to be using the
[4:32] terminal for this. And I&#39;ll show you how
[4:33] to set that up next. So, real quick,
[4:35] going into a couple more basics. If you
[4:36] already got Claude Code set up, feel
[4:38] free to skip to the next chapter where
[4:39] we start building the app for this. But,
[4:41] I wanted to make a video that&#39;s
[4:42] inclusive of all beginners and everyone
[4:44] interested in Claude Code. So to set it
[4:46] up, you can just go to clawed code the
[4:48] website. Take this command right here.
[4:51] We&#39;re going to put that into the
[4:53] terminal. And there&#39;s also just a real
[4:55] quick cover the pricing. You have three
[4:58] plans. You can use claude code with
[5:00] claude opus on the pro plan for $17. You
[5:03] probably won&#39;t even have enough usage to
[5:05] build one app. But maybe you start with
[5:07] the $17 plan just so you get a feel for
[5:09] Claude code and see if this life is for
[5:11] you. This Claude code life. The max
[5:13] plan. I know a ton of people on the max
[5:15] plan, the $100 month plan, and they
[5:17] still get really good usage. So, you&#39;re
[5:19] totally fine then starting with the $100
[5:21] plan, and upgrading to 200 when you need
[5:23] the usage, that&#39;s totally fine and
[5:25] acceptable. But if you like Claude Code
[5:27] and you end up using it any sort of
[5:29] amount to build even a single app, you
[5:31] will probably end up on one of these two
[5:33] tiers. And let me tell you this, it is
[5:35] more than worth it. It is the best $200
[5:38] I spent a month by far. You shouldn&#39;t be
[5:41] comparing these $200 to like the amount
[5:43] you&#39;re spending on like Netflix or like
[5:45] HBO Max. All those SAS tools you compare
[5:48] that to, you&#39;re comparing it to things
[5:50] that drain your time and energy and
[5:53] money and don&#39;t actually add anything to
[5:55] your life. This is the equivalent of
[5:58] like hiring a developer for $200 a
[6:00] month. Typically, developers cost you
[6:02] like 10 $15,000 a month. So, this is
[6:05] actually an incredibly great deal if you
[6:07] think about it with that perspective.
[6:09] And that&#39;s the way I think everyone
[6:10] should be thinking about. So this is
[6:11] actually a steal for what you&#39;re
[6:12] getting. So now let&#39;s go into actually
[6:14] setting it up. What we&#39;re going to be
[6:16] using here to set it up is actually
[6:18] Visual Studio Code, which is a
[6:19] completely free platform to use. I&#39;ll
[6:22] leave the link down below for Visual
[6:24] Studio Code. This is where we&#39;re going
[6:25] to actually house the CLI itself. So if
[6:28] you&#39;re on Mac, you hit control till day.
[6:29] This opens up the terminal. I actually
[6:31] like having this on the right hand side
[6:33] so you have a little bit more vertical
[6:35] space. And what we&#39;re going to do is if
[6:36] you&#39;ve never set up Claude Code before,
[6:38] copy and paste that command from the
[6:40] last website we were on. Paste that into
[6:42] here. That&#39;ll install it. Once you have
[6:44] that installed, you can hit Claude. Just
[6:46] type that in. Hit enter. Say yes, I
[6:48] trust this folder. And you are good to
[6:49] go from here. And actually, you probably
[6:51] should have done this first. We want to
[6:52] open up a new project. So, hit command
[6:54] O. If you&#39;re on Mac, that&#39;ll let you set
[6:56] up a new project. We&#39;re going to go into
[6:58] documents here. We&#39;re going to set up a
[6:59] new folder. I&#39;m going to call this
[7:01] project management. And I&#39;m going to hit
[7:04] create. And we&#39;re going to actually
[7:05] build out today an entire project
[7:07] management app. I love building apps
[7:10] that you can use in your day-to-day
[7:11] life. And one app everyone should build,
[7:14] even if it&#39;s your first project, is a
[7:16] project management app where you can
[7:18] enter in tasks, track your progress on
[7:20] whatever project you&#39;re working on. This
[7:21] will make it a lot easier to build more
[7:23] projects in the future. So work with me
[7:25] here. Do what I&#39;m doing. Pause the video
[7:27] if you need. Set up a folder project
[7:29] management. Hit open and we are good to
[7:31] go. We&#39;re going to need to just open up
[7:32] Claude one more time. So control till
[7:34] day panel position right and claude and
[7:37] hit enter and boom just like that we are
[7:39] in claude code. So by default you should
[7:42] be in opus 45 that is the greatest AI
[7:45] coding model in the history of mankind.
[7:48] If it doesn&#39;t say opus 45 right there
[7:50] make sure you hit /model and then select
[7:53] default. That&#39;ll give you opus 45. So we
[7:55] are going to be on that. We are in opus
[7:58] 45 which is the fastest smartest best AI
[8:00] coding model ever. If you hit slash
[8:02] here, you&#39;re going to see a lot of the
[8:04] different slash commands you can use.
[8:06] There are a ton of them. I&#39;m going to go
[8:08] through just a couple that I think are
[8:10] super important. There&#39;s a few important
[8:12] ones in here you probably want to know.
[8:14] Slash clears all the context. So, we&#39;re
[8:17] going to use that every time we build
[8:18] out a new feature so that Claude is nice
[8:20] and snappy and fast. You&#39;ll probably
[8:22] want to use slash login if you&#39;ve never
[8:24] used Claude before. That&#39;ll log into
[8:25] your account so you can validate that
[8:26] you&#39;re on a tier. slashre will actually
[8:29] undo code as you go. So if you ever make
[8:32] a mistake, you can go back to a last
[8:34] checkpoint. Slcurity review is awesome.
[8:36] We&#39;ll use this in the video as well. It
[8:39] sends up an agent that actually reviews
[8:40] your app for security. Security is super
[8:42] important, especially when you&#39;re vibe
[8:44] coding app. So you want to make sure you
[8:45] know about that. And then slash stats
[8:47] tell you about your claw code usage to
[8:49] see if you&#39;re near any limits. Those are
[8:50] the important slash commands you need to
[8:52] know. Those are the only ones basically
[8:54] I use. What we&#39;re going to do from here
[8:55] is we&#39;re going to use plan mode. Plan
[8:58] mode is an incredible feature in Claude
[9:00] Code. If you do shift tab, shift tab,
[9:03] you will see plan mode on. This is going
[9:05] to build out a plan for whatever we want
[9:07] to build. What makes Claude code so so
[9:10] so good is it builds the best plans, the
[9:12] best to-do lists that help you execute
[9:15] the tasks you want to build. And plan
[9:17] mode is the best way to do this. Before
[9:19] you build any big features, before you
[9:21] build out your kind of first prompt for
[9:23] your app, you always want to use plan
[9:25] mode because what that will do is cause
[9:27] Claude to think deeply about what you
[9:30] want to do. Build a plan, run it by you,
[9:32] ask any questions it has, and let you
[9:34] approve that plan. So, we want to be
[9:35] using plan mode when a we&#39;re starting a
[9:38] new project or b we&#39;re building out any
[9:39] big features. So, here is the beginning
[9:41] prompt we&#39;re going to use to build our
[9:43] project management app. I want to build
[9:45] a project management app for vibe
[9:46] coders. It should be a cananband board
[9:48] that also has a to-do list next to it
[9:50] and a note-taking area. The cananband
[9:52] board should have todo, in progress, and
[9:54] complete and have cards for the tasks
[9:56] you can drag and move around. Make it a
[9:58] clean, simple, dark mode interface that
[10:00] doesn&#39;t look at AI generated. Right
[10:02] after this, once we get V1, I&#39;m going to
[10:04] go into actually designing this, making
[10:06] it look beautiful. There&#39;s a couple tips
[10:08] and tricks I want to go through with
[10:09] that, but this is the initial prompt. I
[10:11] also put it down below. You can paste
[10:13] that in here. I&#39;m also going to say I
[10:15] want to use NextJS for this and local
[10:19] storage. Next.js very popular web
[10:21] technology we&#39;re going to use for this.
[10:23] And local storage is just going to store
[10:24] all the to-dos and notes locally before
[10:27] you implement a database. I&#39;m going to
[10:29] hit enter on that and Claude is going to
[10:31] get to work. This is your AI agent. That
[10:33] really is all cloud code is at the end
[10:35] of the day is just an AI agent that just
[10:37] happens to code very well. You can use
[10:40] claude code to do anything you want on
[10:42] your computer. You can have it go do
[10:43] research on the web, anything you want.
[10:46] It just happens to be very very good at
[10:47] writing code. So it&#39;s saying, I&#39;ll help
[10:49] you build a project management app for
[10:50] vibe coders. Let me first explore the
[10:52] current directory to understand what
[10:54] we&#39;re doing. So it&#39;s getting to work.
[10:55] It&#39;s exploring the code we already have,
[10:57] which is absolutely none. Then it&#39;s
[10:59] using a front-end design skill. This is
[11:01] a specialized claude skill, which is a
[11:03] super powerful feature of Claude code,
[11:05] which I&#39;ll show you in a second that
[11:07] actually makes it a design expert. So
[11:09] I&#39;m going to show you how to set this
[11:10] up. But Claude skills are an amazing
[11:12] feature that really no other AI tool has
[11:15] where you can actually plug in very
[11:16] specific skills including UI and design
[11:20] skills. So it makes it way better. So
[11:21] after I show you V1 in this app and what
[11:23] this interface looks like, I&#39;ll show you
[11:25] exactly how to plug in that design
[11:27] skill. So everything Claude Code builds
[11:28] for you looks amazing. This is one of my
[11:31] favorite parts about Claude Code&#39;s plan
[11:33] mode that you only get in the CLI. And
[11:35] this is when it starts asking you
[11:37] questions about what you want to build.
[11:39] So, we gave it a prompt. We said, &quot;Hey,
[11:41] can you build this for us?&quot; Now, it&#39;s
[11:42] specifying some things and making some
[11:44] recommendations for what we can build.
[11:46] What should the app be called? I
[11:47] suggested flow state, but you might have
[11:49] something else in mind. I like that.
[11:50] Flow state. That&#39;s a good name. Let&#39;s do
[11:52] flow state. Should cards on the cannon
[11:55] board have any extra fields beyond title
[11:56] and description? Let&#39;s keep it simple
[11:58] for now. Maybe we add priority and
[12:00] everything else after. I&#39;m going to go
[12:02] down and hit next. I love how it&#39;s
[12:03] multiple choice. It makes it really easy
[12:05] for you to make decisions. Anytime
[12:07] you&#39;re talking to someone important,
[12:08] always making multiple choice. So, it&#39;s
[12:10] very easy for them to make decisions.
[12:12] Claude Code understands that because
[12:13] they&#39;re talking to you and me. They know
[12:14] we&#39;re important. So, it gives us
[12:16] multiple choices. How should the note
[12:17] panel work? Single scratch pad or
[12:19] multiple notes. Let&#39;s make it notable
[12:21] multiple notes. You can save multiple
[12:22] notes and then we&#39;re going to submit our
[12:24] answers. It specified some things. It
[12:26] help us came up with new ideas. And it&#39;s
[12:28] just awesome. It&#39;s just awesome to work
[12:30] with the Claude Code plan mode. This is
[12:31] one of the biggest reasons why I think
[12:33] Claude Code is the best AI coding tool
[12:35] on planet Earth. All right. So, here&#39;s
[12:36] the amazing plan it built for us. It
[12:38] gave us an entire overview of the
[12:39] cananban style project, an entire
[12:42] aesthetic direction about the project,
[12:44] which is amazing. Even tells the exact
[12:46] colors it&#39;s going to use, the text
[12:47] stack, so you can see what it&#39;s built
[12:49] on. And listen, even if you&#39;re not
[12:50] technical, just read through it real
[12:51] quick so you kind of understand what
[12:53] it&#39;s going to build out, the data model,
[12:55] the layout structure. Again, this is
[12:57] getting technical, but it doesn&#39;t matter
[12:58] quite as much. Just read it. It give you
[13:00] a feel for the project, how it&#39;s
[13:02] working, and as you go, you&#39;ll actually
[13:03] get more and more technical naturally.
[13:06] So, let&#39;s do this. Let&#39;s go in and let&#39;s
[13:07] say yes and auto accept edits. I always
[13:10] auto accept edits just because it is so
[13:13] smart. It is so good and it really
[13:15] doesn&#39;t mess up for me at all. I fully
[13:17] trust Claude Code to build what we need.
[13:19] So, feel free as it goes to say yes and
[13:22] yes, don&#39;t ask again. Uh, it really is
[13:24] not capable of doing anything to mess up
[13:26] here. There&#39;s no stories online of
[13:28] Claude Code messing things up and
[13:29] deleting a whole bunch of stuff. You
[13:31] really are free to trust it. If you
[13:32] really want to prove step by step, you
[13:34] can go right ahead and do that, but I
[13:36] have never found issues with giving it
[13:38] full access to do whatever it needs. All
[13:39] right, looks like v1 finished. When your
[13:43] cloud code is done working, it&#39;ll give
[13:45] you a local host address to go to. You
[13:47] can then go to that local host address.
[13:49] And let&#39;s see what it looks like here.
[13:52] This is actually uh awesome. Let&#39;s see.
[13:55] I&#39;ll move this over here. flow state,
[13:57] quick task. So, we can add quick tasks,
[13:59] plan out the app, market the app. Uh, we
[14:04] have our to-do list board. So, we also
[14:06] have to tweet about the app. Add that
[14:09] there. And it gives us a nice card which
[14:11] we can drag around. That is awesome. I
[14:13] love this UI. I&#39;m going to be honest.
[14:16] I&#39;m not just saying this so I can hype
[14:17] up this video and keep it exciting. I
[14:19] actually think this is the best UI uh an
[14:21] AI has ever built for me for an app.
[14:23] This is beautiful. It is clean, simple.
[14:25] I don&#39;t think anyone would guess that
[14:27] this is AI generated. There&#39;s no blue or
[14:29] purple gradients everywhere. Uh, and
[14:31] then we have this note section. This
[14:33] This looks amazing. So, let me do this.
[14:37] Now that we have what the V1 this looks
[14:39] like, your app might not look anything
[14:41] remotely as good or close to this. The
[14:44] reason being is I&#39;m using a very
[14:45] particular clawed skill. It is a UI
[14:48] design skill. Let me show you how to set
[14:50] that up so you start getting awesome
[14:51] looking UIs like this. So, here is how
[14:53] you make your AI build way better
[14:55] interfaces. That is with the Claw design
[14:58] skill. So, I&#39;m going to put the link to
[15:00] this tweet down below. Make sure to go
[15:01] to it. This has the two commands you
[15:04] need to install this Claude skill. And
[15:06] basically, all Claude skills are are
[15:08] plugins for Claude that teach it new
[15:10] skills. And what these two commands will
[15:12] do will teach it a skill that shows it
[15:14] how to make professionallooking user
[15:16] interfaces. So, go down below, go to
[15:18] this tweet, pause now, grab these two
[15:20] commands, and then you&#39;re going to go
[15:22] into Claude Code, paste them right in
[15:24] here, hit enter on the first one, hit
[15:27] enter on the second one, and you&#39;ll have
[15:29] the design skill installed. Now, what
[15:32] you can do is you can say, &quot;Redesign my
[15:35] UI using the new design skill.&quot; Hit
[15:40] enter, and it will redo your UI to make
[15:42] it look a lot better. Because if you
[15:44] didn&#39;t have this design skill, my guess
[15:46] would be what you&#39;re looking at here is
[15:48] a whole bunch of blue and purple
[15:50] gradients uh that are pretty hard to the
[15:53] eyes. So doing that will make this look
[15:55] way better, much closer to mine, which I
[15:56] think this is very professional looking,
[15:58] almost linear. I even like the uh fonts.
[16:01] The fonts look very modern. So make sure
[16:03] you do that. Your UI will look way
[16:05] better. So let&#39;s move on. Let&#39;s build
[16:07] out more features here. I&#39;ll go through
[16:09] how to prompt to get better features and
[16:11] I&#39;ll go into little tips and tricks
[16:12] here. So, basically, when it comes to
[16:14] prompting, you don&#39;t need advanced
[16:17] prompting techniques. You don&#39;t need to
[16:18] structure it in crazy ways. Everyone on
[16:21] planet Earth will give you different
[16:23] frameworks for prompting where you have
[16:25] to include a whole bunch of context. No,
[16:26] no, no. It&#39;s very simple. Just be very
[16:28] clear and upfront about what you want to
[16:31] build. So, for instance, I want to make
[16:33] it so we have priorities in each one of
[16:36] these tasks on the Cananban board. So
[16:38] we&#39;ll just be very clear and
[16:39] straightforward. I want to add
[16:41] priorities to the tasks in the canban
[16:45] board. So high level exactly what we
[16:48] want. Now we can give it little details
[16:49] about what we want in there as well. I
[16:51] want to make sure I can assign different
[16:56] priority levels. Here&#39;s the thing I also
[16:59] like to do often is I like to say
[17:01] anything else you want to add. Mark, you
[17:05] can treat this very much like a creative
[17:07] partner. I like to ask tons of questions
[17:09] like that. What else would you add? What
[17:10] else would you do here? What do you
[17:11] think about this? What&#39;s your opinion?
[17:14] Claude Opus 4.5 has better taste than
[17:16] any other AI model I&#39;ve ever used. So,
[17:18] it actually will give you really, really
[17:20] good recommendations. It will be honest
[17:22] with you. It&#39;ll be honest about when
[17:24] things stink or when you shouldn&#39;t
[17:25] implement things. So, let&#39;s do this.
[17:26] Let&#39;s send that. Make sure you ask
[17:28] questions like, &quot;What else would you
[17:29] add? What else would you do here?&quot;
[17:30] You&#39;ll get a lot of really nice
[17:32] recommendations. So, this is great. Even
[17:33] though we&#39;re not in plan mode, it&#39;s
[17:35] still going to ask us really cool
[17:36] questions. So, how should priorities be
[17:37] displayed on cards? A colored dot, a
[17:39] side border, or a badge, or a pill?
[17:41] Let&#39;s do a colored dot. I like that.
[17:43] Subtle and minimal. Want me to add any
[17:45] of these while I&#39;m at? This is what
[17:47] makes Opus 4.5 so great. Is it super
[17:50] proactive? We talked about this earlier.
[17:52] So, we just asked about adding priority,
[17:54] but it&#39;s like, hey buddy, anything else
[17:56] you want me to add here? I can add due
[17:57] dates, archive columns, filter by
[17:59] priority, keeping it simple. Yeah, let&#39;s
[18:01] add a couple. This is multiple choice.
[18:02] We can say due dates and we can say
[18:05] archive column and we can say filter.
[18:07] Let&#39;s add all of them. Filter by
[18:08] priority as well. And let&#39;s hit submit.
[18:10] And it&#39;s going to do all of that for us.
[18:11] It&#39;s super proactive. It comes up with
[18:13] ideas on the fly. It gives us
[18:15] recommendations. It&#39;s truly the first
[18:17] time I feel like I have like a senior
[18:19] developer working for me rather than
[18:21] like an intern, right? It&#39;s little
[18:23] things like that that that no other AI
[18:25] model that no other AI tool does that
[18:27] really makes it feel special working
[18:29] with this tool. And it&#39;s also what makes
[18:30] it so beginner friendly is you can come
[18:32] in here with no ideas, no idea what to
[18:34] do and it will kind of guide you through
[18:35] building it out. Again, I&#39;m not being pi
[18:37] paid by Anthropic. This isn&#39;t a
[18:39] sponsored video. I&#39;m just really
[18:41] passionate and love this tool a ton and
[18:43] really think everyone should be using
[18:44] it. All right, looks like it is all
[18:46] done. They added a whole bunch of
[18:47] features for us. Let&#39;s go over here.
[18:49] Let&#39;s give this a refresh. And it looks
[18:51] like we are getting errors. This is
[18:52] good. This is good. So now I can show
[18:54] you how to debug in the rare instance
[18:57] that Opus45 gives us errors. Here&#39;s how
[18:59] you debug. It&#39;s very simple, very
[19:01] straightforward. You get an error like
[19:03] this. You copy it. You go back into the
[19:05] clock. You say, &quot;Hey, I&#39;m getting an
[19:08] error and then you paste and then you
[19:11] hit enter.&quot; And here we go. It&#39;ll just
[19:14] go and fix it. Very, very simple. Oh,
[19:16] looks like it is a stale cache issue.
[19:19] So, all we need to do is just basically
[19:20] hard refresh the page and it&#39;ll fix it.
[19:22] All right. So, it wasn&#39;t Claude Code&#39;s
[19:23] fault fault, but either way, it&#39;s
[19:25] telling us how to fix what we&#39;re seeing,
[19:26] which is great. All right. So, the cash
[19:28] is cleared. Let&#39;s pull this open here.
[19:30] And boom. Look at that. Looking good.
[19:32] Let&#39;s add a task. Oh, and look, we can
[19:34] do the priority, low, medium, high,
[19:37] market our app. Let&#39;s see here. Yep, we
[19:40] can click and it moves it around. I like
[19:42] the colors. All the colors kind of
[19:43] match. I really like the theme of the
[19:45] entire app. It really has extremely good
[19:48] taste. And we can move it around. And
[19:49] you can see the different priorities
[19:52] here. We can filter. That looks great. I
[19:55] love that. That&#39;s cool. So from here you
[19:57] can add any features and functionality
[20:00] you want. But how do you take it to the
[20:02] next level? How do you start giving it a
[20:04] database so you can store all the data,
[20:06] right? Maybe we want to put our tasks in
[20:07] the database so it stays consistent
[20:10] across all our sessions. Maybe we want
[20:12] to add off. Maybe we want to add
[20:13] pricing. Well, here&#39;s what you got to do
[20:15] for all that. The first thing you&#39;re
[20:16] going to want to do is add this to
[20:18] GitHub. If we&#39;re going to host our app,
[20:20] if we are going to allow other people to
[20:22] use it, we&#39;re going to want to have it
[20:23] on GitHub. So, make sure you go and sign
[20:25] up at github.com. You&#39;re going to want
[20:28] to start a new repository. Give it a
[20:30] name. We can call it flow state. Make it
[20:33] a private repository and create that
[20:35] repository. This is going to give you a
[20:38] URL where you can upload this code. Take
[20:41] that URL. Then we&#39;re going to come back
[20:43] into Claude Code and we&#39;re going to say
[20:45] add all this code to GitHub and then
[20:49] paste in the URL it gives you. This will
[20:52] then have Claude code go take all the
[20:54] code, put it onto GitHub. This is where
[20:56] your code will be hosted and stored so
[20:58] we can do things like put it on the web,
[21:00] allow other people to use it. This is a
[21:02] really important step. It&#39;s also going
[21:03] to back everything up just in case your
[21:05] computer gets wiped. All the code will
[21:06] be stored on the web. So you want to
[21:08] make sure you have this on GitHub. From
[21:10] there, you can implement other tech,
[21:12] right? So if you want a database, this
[21:14] is where all the data in your app is
[21:16] going to be stored like the tasks or the
[21:18] users, you can use superbase for this.
[21:20] This can also be your off. So this is
[21:23] what an entire web app looks like from
[21:26] the front end which is what you see
[21:27] that&#39;s Nex.js to the backend and
[21:29] database that&#39;s where the data is stored
[21:31] to the hosting. So this is what&#39;s going
[21:32] to actually host your website so people
[21:34] can visit it. You&#39;re going to use
[21:36] Verscell, right? So Verscell will be
[21:38] able to host it for free. You can put
[21:39] the code there. It links to your GitHub.
[21:41] So you can sign up for these services. O
[21:44] is going to allow the user to sign in.
[21:45] You can use Superbase O for that.
[21:47] Payments I like to use Stripe. Stripe
[21:49] the easiest to use, easy to implement
[21:51] and all of this. You can screenshot this
[21:54] here. You can just go to Claude Code and
[21:56] say, &quot;Hey, I want to set up Superbase as
[21:57] the database. How do I do that?&quot; And
[21:59] Claude Code will walk you through it. I
[22:01] want to put this on Versell so people
[22:03] can visit our app. How do I do that?
[22:04] Claude Code will walk you through it. I
[22:06] want to implement Stripe so people can
[22:08] start paying me for the app so I can
[22:09] start making money. Claude Code will
[22:11] work you through that. That&#39;s the best
[22:12] part. Anything you don&#39;t know how to do,
[22:15] Claude Code will walk you through it.
[22:17] The mindset 99% of people have when
[22:20] doing things like this is, &quot;Oh, I don&#39;t
[22:21] know how to do this. I&#39;m going to roll
[22:23] over and die and give up.&quot; Right? That&#39;s
[22:25] not the mindset you want to have. You
[22:27] want to be autodidactic. What does
[22:29] autodidactic mean? It&#39;s your ability to
[22:32] work on your own and just figure things
[22:34] the f out, right? And now that you have
[22:36] Claude code, you need to be
[22:37] autodidactic. Anytime you don&#39;t know how
[22:39] to do something, anything you get
[22:40] confused about, you have super
[22:42] intelligence at your fingertips. You go
[22:44] into Claude Code and say, &quot;Hey, I don&#39;t
[22:46] know how to set up a database. What the
[22:48] heck do I do here?&quot; And it will teach
[22:50] you how to do it. There&#39;s nothing you
[22:52] don&#39;t know how to do anymore. Claude
[22:54] Code teaches it all. So after you get
[22:56] your app in the shape you want, you
[22:59] built out the features you like, you&#39;re
[23:00] ready to implement the database and
[23:02] allow more users to use the app. Make
[23:04] sure you screenshot this, pause this
[23:06] here, and anything you see here, you
[23:08] say, &quot;Claude code, how do I implement
[23:10] Superbase? How do I implement Versell?&quot;
[23:12] And it will walk you step by step, very
[23:14] simply on how to do it. I go into a lot
[23:16] of detail and walk you through
[23:18] everything you need to know about
[23:19] Superbase and Versel and payments in the
[23:22] Vibe Code Academy. It&#39;s my private
[23:23] community. Feel free to sign up for
[23:25] that. I do weekly calls there. Answer
[23:26] your questions. You can DM me there.
[23:28] Anything you want. Link for the Vibe
[23:30] Coding Academy is down below. Also, if
[23:32] you&#39;ve learned anything, make sure to
[23:33] leave a like, hit subscribe, and turn on
[23:36] notifications. All I do is make amazing
[23:37] videos about AI. And also, leaving a
[23:40] like will just let me know you want more
[23:41] videos like this. I&#39;ve been told by a
[23:43] lot of people my Claude Code videos are
[23:45] great. So, I&#39;m going to make a lot more
[23:46] videos about Claude Code. Let me know
[23:48] down in the replies what part of
[23:50] everything I showed you you want to see
[23:52] more of. Whether it&#39;s, hey, show me more
[23:54] how to build. Maybe I want to build out
[23:55] iOS apps. Show me how to set up
[23:57] databases. Anything like that you want
[23:59] me to do super deep dives on, I&#39;ll do
[24:01] that. I kind of went a mile wide and an
[24:03] inch deep here. So, let me know what you
[24:05] want me to go a mile deep on and I&#39;ll
[24:07] make sure to make videos about that. You
[24:09] can do that down in the replies below.
[24:10] From here, if you follow these steps and
[24:12] you host it on Versel, you&#39;ll have a
[24:14] full web app that anyone can use. You&#39;ll
[24:16] have a full app live. And even if you&#39;ve
[24:18] never coded before, you&#39;ll have an app
[24:20] you can send to your friends and family
[24:22] members and at Christmas they&#39;ll be
[24:23] like, &quot;Oh my god, that&#39;s incredible.
[24:24] You&#39;re the smartest person I ever met in
[24:25] my life. How&#39;d you do that?&quot; And you can
[24:27] be like, &quot;Oh, I&#39;m just really smart.&quot;
[24:28] But in reality is you had super
[24:30] intelligence, aka Claude Code, working
[24:32] for you. I hope this was helpful. I hope
[24:34] you enjoyed it. I hope you learned a
[24:35] little something. Claude Code is
[24:37] constantly changing, so keep it locked
[24:39] in. I&#39;ll go over all the interesting
[24:41] features for you as they release. and
[24:43] I&#39;ll see you in the next
