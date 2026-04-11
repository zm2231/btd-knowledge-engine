---
title: "The Complete Beginner’s Guide to Claude Code (Even If You’re Not Technical)"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=A0SV-DExypQ"
video_id: "A0SV-DExypQ"
duration: "1:21:03"
transcript_method: "youtube-captions"
segment_count: 2245
char_count: 85662
status: ingested
topics: []
meta_patterns: []
---

# The Complete Beginner’s Guide to Claude Code (Even If You’re Not Technical)

**Creator**: mark-kashef | **Duration**: 1:21:03
**URL**: https://www.youtube.com/watch?v=A0SV-DExypQ
**Transcript**: 2245 segments, 85662 chars

## Transcript

If you've heard all the hype about this thing called clawed code and you're still not sure whether or not you should care, this miniourse is for you. Now, most tutorials out there jump straight into a terminal and skip the bigger picture of how things like claude code can make you superhuman, whether you're technical or non-technical. And for this video specifically, I'm aiming to empower and upskill as many self-identifying non-technical people as possible. Because while Cloud Code did start and continues to be a developer tool, it's quickly evolving into something so accessible that practically anyone can take advantage of it if they know what to do, what buttons to press, and how to structure projects. So, in this course, I'm going to break down what Claude code is in plain English. And through me explaining that, you'll be able to better understand why Claude Code is a huge paradigm shift compared to all the other vibe coding tools and context engineering tools that are currently out there. But aside from the conceptual, I'm going to walk you through how to set up and use Cloud Code step by step, and I'll do my best to make as many things make sense as I possibly can. And last, but not least, you'll leave this video with a free mega guide of how to use Cloud Code, some common commands, and enough of a cheat sheet to get you up and running, whether you're technical or non-technical. If you're ready for step one of becoming more superhuman, let's jump in. All right, so this is the lay of the land for our entire miniourse where we're going to go from understanding why Cloud Code is so hyped right now and most importantly how to tactically use it. Very similar to something like a video game wherever there are cheat codes in the process. Instead of having separate videos just for cheat codes, I'm going to weave in any cheat codes or ways to make things easier as much as I can while we go through all the steps, both the conceptual ones and the technical ones. Now, what is all the fuss about this thing called clawed code? So, on the face of it, it's very similar conceptually to other AI coding platforms out there like cursor, windsurf, rue code, and the rest of the tens of other alternatives. And to be frank with you, I haven't touched Claude code up until this month because I usually have a personal motto, especially in the Generative AI space where if something or someone is very much overhyped or in trend, I usually stay away from that trend as long as possible until I see whether or not it has some legs that's worthy of me actually shifting the way I do things or shifting the tools I use. So, the reason why I have this Game of Thrones picture here is when that came out years ago, I waited through season 1, season 2, and season 3 before I had the urge to actually go and invest because I saw that there was some form of longevity in that series. Now, if you've ever watched it and you know how it ends, don't worry. This is not how this tutorial is going to end. It's going to end a lot brighter. Sorry for the spoiler alert, but regardless, once I realized what Claude Code could do, then I understood why it's truly a step change. And just as a disclaimer, this is not a sponsored video. I hate changing tools. I hate switching stacks. So, it has to be something very compelling for me to do. So, once again, we asked the question, what is all the fuss about this tool? Now, I'm going to have a lot of visuals here. I made them primarily for myself, but if you are a visual person, I hope they help you. Claude allows you to create what are called sub agents. So, there's all kinds of abuse of the word agent in this entire space. There are workflows that are literally a tob that we call agentic. There are chat bots that we call agents and then there are things that are actually semi-agentic. Let's say an end workflow with a series of AI agent nodes and sub aents. In the land of cloud code, we are one step further on that agentic scale where I won't say that they have full autonomy or they can run completely maniacal on their own with no human intervention, but we are definitely closer to that point. So you can see here you can not only spin up different agents in cloud to help you accomplish different tasks but what's really important is that they all operate in parallel and I'll tell you why that's important. So typically in using something like cursor or windsurf when you want to build something let's say you want to build a to-do list app or a finance tracker name anything that's easy for you to conceptualize it's typically taken one step at a time. So you have a to-do list and you go through that to-do list and check off one thing after the other. And what happens is if you're using an AI coding platform like cursor where it's much more sequential in nature, you'll realize that if you're trying to do very big tasks and you're not being very efficient in the way you're executing those tasks, that's where you have a conversation that gets short consistently and you have to keep restarting the operation. And you'll notice that you're always ramming different parts of what's called a codebase, which is basically where all the code and information lives. And then you get this suboptimal conversation where sometimes you can build things, but for some reason you keep spinning on certain areas. Now with cloud code, when you spin up these sub agents, each one technically has its own fresh blank slate context window. And what's cool is as of this recording, Anthropic released a million context window for Claude Sonnet 4, which is a huge change. Up until now, Claude has always been limited, even though it's been such a great coding partner at using only 200,000 context window, which if you're trying to generate something or have a simple back and forth conversation, is more than sufficient. But once you start building and investing in the features of a production level web application or any application of any sort, you'll notice that not having additional context basically hinders your ability to keep moving forward. If you're just using claw to build some form of application that's pretty simple or having this normal back and forth conversation, 200,000 tokens is more than enough to get you there. But if you want to be able to build production level code, having something like a million context window gives you a lot more breathing room, a lot more bandwidth to go back and forth and get to the crux of not only planning but also building multiple features in the same thematic area or domain area in one shot. So from an experience standpoint, you write better code without you writing the code. You're just using natural language prompts to try to execute the next part of the workflow. But once it actually accomplishes the thing, one, it's really good at showing you its work, meaning the to-do list. And two, you have a longer shelf life for your conversation before the language model begins to really hallucinate and you need to begin a new session. Not only that, I'm going to show you very shortly what are called slash commands that will allow you to do things like summarize your conversation or make it more compact so you can keep having that conversation, especially if you're in the middle of it or in the zone, so you don't have to restart from scratch. Now, if all of this is new to you, then you might be asking a very astute question, which is what happens to all of the other tools on the market, the lovables, the bolds, the replets, the base 44s, the insert name of brand new tool that's come out in the past few weeks. Being able to use cloud code doesn't necessarily negate being able to use these tools to go from zero to 20 to 30%. The key thing here is that it doesn't have to be either or. I see a world where for someone that is less technical or non-technical you can use these tools to go from zero to 30 40%. And once you're there within a few clicks and copy paste you can export the project from these platforms to something like cloud code to keep going and really take your project to the next level without having to worry about spaghetti code being generated without you being able to be involved in every part of the process. Because while all of these tools and more tools will come out in the future to shortcut this entire process I'm about to show you, if you know how to actually manipulate clog code in its essence at its root, then everything related to these tools will be so easy for you to manipulate because you'll know that you'll have this skill set that will allow you to push these platforms as far as they'll naturally allow you to build whatever you're trying to build and then you know you can export it to something like cloud code and take it to production level. And if I were to guess as to where we're going in the next 6 to 12 months, I would imagine that all of these tools will begin to compete in the making software on demand arena where something like Framer is right now in web development where if you compare it to things like Wix and Web Flow and WordPress, it makes really pretty websites very quickly. So I think that the market eventually will have a monopoly where you have one mega tool that can go from zero to 100%. But until we get there, we're still dealing with language models which hallucinate, have scaling problems, are expensive to run, etc. I think we will have a bifurcated market where there will be from 0 to 30 kind of tools that can maybe get you to some semblance of 100 slower and then you'll have these tools like claw code where if you know the recipe and the blueprint to use it properly, you can go from 0 to 100, from 20 to 100, you'll have that skill set or that foundation to do whatever you want. Now, if you put your finger in the wind and you let YouTube decide for you whether you should use claude or cursor, you'll see two main schools of thought. One that says, you know what, cursor has been around for a while. They have staying power. They allow you to talk to all the different models. And by the way, if you don't know what cursor is, it's basically another AI coding tool, but the main difference is it is a wrapper around every other language model like Claude, like OpenAI, like Gemini. While Claude is, you know, for the most part optimizing for Claude models, some folks will favor this, some folks will favor this. Over time, features will come out. You'll have one side of the aisle say that Claude killed cursor and then cursor killed Claude. And this will continue as debate, but my opinion is don't worry about the noise. We are not attached to tools. We're not on team A or B. We are attached to outcomes. So, as of right now, Cloud Code has evolving infrastructure and tools and capabilities and most importantly, amazing models that help you build faster. And I say this as someone who has used Cursor ever since it came out, meaning I have a bias to want to go that side. But right now, it seems like it's faster to get to my outcomes using Cloud Code. So, I don't care about the debate. I'm going to use the tool that's going to get me there faster. And one more thing on this, if you're ever betting on which tool is going to win, you will go crazy because we can't really forecast 12 to 18 months out. But what we can see is usually 1 to 3 months ahead. Well, right now the momentum behind Anthropic pushing new updates to Cloud Code on top of the community around it trying to build as many features as possible to make it as accessible to everyone as possible. I am betting on cloud code at least for the short term. And just like everything I keep preaching, I'm going to re-evaluate in one to three months and if I have to shift my stack again, I will. But there's a couple reasons myself why I'm betting on cloud code is we talk a lot about MCP which went from three letters that nobody understood that if you're not familiar with what it means by the way, I'll explain it just in a bit. But it went from something that was very ambiguous to now it's a commonplace word that we use in place of let's say HTTP which was for websites and anthropic are the inventors and pioneers of it and now other industry leaders like OpenAI and Gemini have supported this infrastructure. So knowing that they not only came first, but they're the ones that built it on top of being literally one of the best coding language model providers since day one gives me more confidence that if I had to bet on a horse, Claude Code would probably be the horse of choice. Now, even though I'm breaking it down, you might be staring at the screen and saying, "Mark, you said the words code and editor, and both of those words scare me. I don't know if I'm ready for this yet." Even if you break down the tutorial amazingly, you do have alternatives. Meaning, we have new tools coming out every day. Let's say like Gen Spark Super Agent has come up with something that's called the AI developer, which is basically a very clawed codelike platform that allows you to ask for something as you would on the other platforms I showed you above. And then it will build you a platform with the to-do list style that Claude Code does and it will help you go from zero 30 40% maybe even 100% depending on the complexity of your platform. So if you feel in watching this tutorial that you need something to help you warm up to the ideas I'm about to show you then you always have alternatives like this on the market. And I'm imagining that in the next few months, more and more wrappers around cloud code or things that are very similar to cloud code will come out to make it even more easy to vibe code using this kind of stack. And even with the open- source community, they've created something called Claudia, which is a wrapper on top of Cloud Code that allows you to interact with it like you would chatt. So you don't have to learn the commands and the prompts that I'm about to show you. So there's different ways that you can deint this for yourself. But I would say that if you learn the source, the root, then you can do whatever you want after, but if you understand the root, then everything that comes out won't overwhelm you because you can always go back to first principles if need be. Now that pretty much wraps up the yappy part of this miniourse. I'm going to just end off with just defining what cloud code is in terms of what it can do and how you can use it. So in terms of the what, we've already gone through that. In terms of the old way, you would have to write Python scripts or use code from chatbt or claude to help you write Python or JavaScript. You might have had to learn these tools or learn how they actually operate and learn what the heck a terminal is. A very ugly white or black box you have to interact with to install things and leverage things called bash, which is basically a language that your computer uses to install and manage files, folders, and packages on your computer. Most importantly, you had to manually either hire someone to debug for you or you had to debug yourself and Google all types of errors. In the new promised land, you can now offload a lot of things to cloud code from writing scripts to building websites to building platforms. And most importantly, I'm going to say this with an underline, you can rebuild a lot of AI tools that you currently pay subscriptions for. Now, I know that's been a promised fever dream from a lot of the Vibe coding tools out there, but this can actually do it. I have physically built software that I pay for on a monthly basis within Cloud Code and been able to cancel those subscriptions. One small example is I want to rebuild a local transcription tool where I can take voice notes from meetings that I just upload and or I make notes to self and just be able to upload it from my iPhone and autoingest it in a software where I can just drag and drop. Everything gets transcribed locally for security reasons and then it creates a nice little report about that meeting. It took almost 45 minutes for Claude Code to understand where to find transcription software, which is the cheapest to use, what is the fastest way to build it, and most importantly, it figured out how to build the most efficient type of software for my hardware, my RAM, so I can run it really quickly. One of the best features of Cloud Code is it really helps you do the planning process the best way possible. So, help me plan is typically an afterthought with a lot of different platforms, but Claude even has different modes where it's like planning mode where it uses the most powerful model which is Claude Opus to help you construct a beautiful what are called PRD files which is a product requirement document and it's the equivalent of you having an AI product manager or project manager depending on what you're trying to build that comes up with a list of everything that needs to be done, how it should be done and most importantly in what order it should be done. And what's awesome is whether you are a developer or non-developer, when you lean on AI to help you plan how to build this app, as you build over and over again, you begin to learn by osmosis all of these micro software engineering principles that become familiar to you over time, even if you don't have an engineering background. If you're starting from scratch, I fully understand and empathize that it will take maybe longer for you to get used to it. But it's the fact that you're actively learning something that typically in the past we've had to passively learn through courses, textbooks, and hands-on exercises that were very boxed in. They weren't real world problems. But in this case, you always can tackle a project that's going for a real world problem that's very meaty. And then you break it down with AI and then you build with AI and you're just there to kind of like manage and give feedback as to whether or not it accomplished the tasks that you originally set up. As a quick summary, Cloud Code is an AI assistant that can help you actually do things from writing code to organizing files to fixing problem and basically having a developer. That definitely costs you sometimes an arm and a leg, but for the most part, it's pretty efficient if you know how to use it efficiently. One thing you'll realize from this video is you can use cloud code for pretty much everything, not just web applications, not just vibe coding. If you are unhappy with the world of opening eyes chat GBT after the GPT5 debacle and you want to build your own custom GPTs that really scale, you can build your own version of Chat GBT projects or custom GPTs or even claude projects within cloud code. You can create workflows. You can create automations that don't even need things like Zapier make.com or edit. You can have the custom code do the automation for you. But if you do want to do other things like for example building something that's like claude or build a platform like a custom GPT where you can white label it resell it use it for onboarding what what have you you can do that as well and you can even if you've seen my other videos let's say on using cursor within naden mcp to build naden workflows you can do that within cloud code and if you've watched my videos before you'll know that claude is very exceptionally talented at being able to generate what's called JSON, which is the file structure needed to create these workflows without you having to manually make them yourself. So, without overselling it, Claude Code opens a whole new world in a brand new portal where you can build all kinds of things. And if you've seen in other tutorials where someone has to log in and then quickly goes over installing something or installing a software or a package or going back and forth and debating with AI on some weird errors, you can offload a lot of that to cloud code if you allow it access to things like your terminal and your computer. So it can go from planning to realizing what software is needed to installing that software to then resolving any issues that come as a result of trying to install that software and then it gets installed and then used right away. All right. And at this point of the video, if you want to take a quick breather, we're going to actually try and install Cloud Code on your computer so you can get up and running right away. So what you want to do is first you want to install something called Node.js. So if you go to nodejs.org, there's going to be a download button. download that and install it on your computer and it should work on every type of operating system like Mac, Windows, and Linux. And step two is you're going to want to write cla code into Google and then download ideally and you'll be able to see a download link really quickly. And all we have to do right here is go into something like Google and write cla download and then click on the very first link that pops up that says claude code deep coding at terminal velocity. So we'll click on this. You'll have a screen with a very big screenshot and then it will tell you as I said to download NodeJS and then run this command. Now immediately if you are not techsavvy you'll be asking how do I run this command? You have multiple ways you can do it. You can run it on your computer's terminal which is ugly but it will work. My personal recommendation, especially if you are technical agnostic, is to download this other software that's free, free to use at least for a very large amount of requests for someone that's not a developer called Warp. And although Claude Code eventually can replace Warp for a lot of things, if you're getting started, Warp is like a terminal that has a language model. So you can literally talk to and say, "Hey, why is this not working?" Or, "What's this error? Can you try to fix the error?" and come up with a way that we can fix it on my computer. So, if we take this command, I already have Node.js downloaded on my personal computer. We can go into a terminal that looks like this. For you, a terminal could look a lot uglier. Like if we go to here and we go to terminal. If you want this, then go for it. I applaud you. Otherwise, I personally enjoy looking at this where I can just enter this It will see whether I have it installed. I already have it installed. So, it's going to do whatever makes sense on your computer. And then the next thing, it'll tell you what to do. So, in this case, it will be npm fund. npm fund. And you can see here as I'm actually typing, it is suggesting what happens next. In this case, it already found it on my computer. There we go. And then you can say right here, this little tab will tell you what's the natural next thing that you should see or use. In this case, it's telling me I already have this on my computer. This is already funded. There's so many things on my computer related to cloud code, so I'm pretty good. But if you're starting out, it'll be downloading and pulling stuff on your computer. Once it does that successfully, you'll be able to go into a terminal, type claude, and similar to a 2000 Nintendo video game, you'll see a clawed code image pop up. So once again, once you have Node.js, then you'll see something like this in your terminal cla. And if we actually pop into our terminal, let's open a new tab and let's just say claude. This command should start. And if I just say yes, proceed. Now, in my case, I hear a little beep button. In your case, you can see welcome to cloud code. So, this will already look intimidating to a lot of you that don't like terminals, which is why we want to get out of a terminal as soon as possible, unless you're comfortable here. And again, if you're going to choose a terminal, I would probably lean towards warp because at least you have that AI in the background to help you respond to things if you're confused what to do next. Personally though, I like to use cloud code within cursor. So, I like to have the best of both worlds. And again, most people will say either team A or team B. I'm actually pro both on the same team. And I'll show you what I mean shortly. Now, one more thing on this side. If it's your first time logging into Claude Code and you try to actually send the request, it will push you to actually sign into your Anthropic account and register for an account. Now, if you're on the normal plus plan, I believe for Claude, that's 20 bucks a month. It will be very limited in terms of what you can do. But if you go to the max plans, which ranges from, I believe, $100 to $200 a month, that's where you can really push some real usage. But if you just want to be able to tinker and see what it can do, and you're kind of warming up to the concept, then the $20 should be just fine to build a small mini version of a website that you can just demo. So, like I said, you get to choose where Cloud Code can live. And once it is installed on your computer, you can use it wherever you want. So, you can wake up one day and say, you know what, I really don't like myself today. I'm going to use the terminal to interact with cloud code. On other days, you might feel like you want a warm and cozy environment that's a bit more sheltered from the dryness of the terminal. In which case, you could use things like VS Code, which is another type of terminal. Uh, Cursor, Windsurf, whatever makes you feel happy and warm and fuzzy inside. In my case, I am a proponent of Cursor and Claude living together in the same ecosystem because there are some benefits that not enough people mention. But again, we'll get to that later. We're not going to run before we can crawl. In something like cursor, you can use claude in the terminal. It has its own terminal that we'll see shortly. And then you can actually download this extension that's typically designated for VS Code. Again, the other Kodi thingy platform, but in this case, you can use a mini app where it'll give you a nice little Claude button that you click on every time to spin up a brand new version of Claude Code. Once you have that installed, you'll be able to not just use it in the terminal of wherever you want. You can use it in the terminal of cursor, but you'll have this nice and shiny button that will just create a new tab where it is larger. It's easier to see. It's easier to manipulate. And then you can even have cursor on the side here by clicking on this tab. So, you can actually have access to two different AIs. Claude code is looking at your codebase and creating it, but so is cursor. And again as you build you'll see all kinds of benefits from having both side by side. Now if you want to go down this route then all you have to do is step one install cursor. So you can do that by literally going to Google cursor install. It could also be windsurf whatever you want. In this case all I have to do is just download it on my Mac. It'll be equivalent for I think Windows as well. And then you can just add the extension that I showed you right there. And then now you have double AI at your fingertips. Now in my case again I have it already set up but you can see here when you click on this button you see this claude code for VS code. All I have to do is install this and then it pops this up and I just basically installed it. And then you can see I already have this button to run cloud code. So if I want to be able to spin up a brand new session, you can actually spin up multiple sessions. You can have multiple cloud code sessions running in parallel on top of another sidebar here. But for now, just to make it nice and clean, we'll close this. We'll close this. So that's an example of a Claude Co session ready to go. And like I said, if you click on this button, the toggle panel, this will create and show another terminal where we've already initiated cloud code as well. So you get to choose how you interact with it and how you use it. You can go from a normal terminal to one where you're using cloud code. You can have multiple where you can create a brand new terminal. And again, this is what you would do. You'd write claud right here. And then this will show the initial image telling you what you can do and what you can't do. And this is how you know, all right, we're ready to start rocking and rolling with cloud code. So on my end here, you can see I already have a head start. I already have some files ready to go. On your end, this will be completely blank. So if we go into file, new window, you'll see something that looks closer to this where you might look at it, you don't even have recent projects. It looks purely blank and you don't really know where to go from here. All we have to do really to get started is click on open project. Go onto desktop and then go on to in this case I'm going to go into my YouTube folder to create a new folder. I'm going to call this YouTube demo CC CC for cloud code. We'll click on create open. And then this should give me a blank Virgin environment with no files. And this is exactly what yours will look like, especially before you install something like Claude Code. And again, to get started from zero, you can just click on this toggle panel. And there's a command we're going to run right now. It's called Claude Run Dangerously. If you're a complete noob, then I don't recommend you necessarily use it. But if you're just trying to see how far you can push it from the get-go, then you can just copy paste it. And basically, it will not ask you permission to do everything. For learning purposes, you should just write here clawed again to initiate a session. But if you want to live on the edge and just ask it a oneshot request and see how far it can go, then using the claw dangerously option is probably the best way to go. Now, in terms of upskilling yourself on the fly, I'm going to definitely have the mega guide available for you in the first link in description below. But if you want to be able to be nimble, then use something like a perplexity. Even the free plan would be sufficient enough and say, "Hey, what's the command to basically use claude code and not be asked permissions?" I think it's called Claude dangerously something. And then you can basically use the quick search, it will give you the command. There we go. Claude skip dangerously or dangerously skip permissions. And then we paste that over here. And then when we run that, there we go. It is going to acknowledge that. I'll run it one more time just in case it didn't get the memo. Actually, I think we should be good to go. We'll know whether or not it's working from whether or not it asks us permission a million times. Okay. Can you build me a small mini website for an AI consultancy called prompt advisors? The advisor part is with an E because I couldn't afford the domain at the time. So, it's advisor with an E. All right. So, we're going to send that over and then it's going to start doing stuff. It's going to start building files on the lefth hand side. So if you're intimidated by code, again, you don't have to worry about really dealing with the code. You're going to see things being built like assets like HTML files, CSS files for styling, and depending on what you're trying to build, any relevant files, especially if it's like a functional web application, you'll have GS files, JavaScript files, which really help you build backend infrastructure for front end, back end, and builds the entire symbiosis of that app. But like you can see here, it starts doing basically a to-do list as a normal junior software engineer would. Now, we can make this super loaded and supercharged. But right now, behind the scenes, I'm getting these little dings. It's sending me a feedback loop that things are working and we're crossing off the to-do list in real time of what's happening. And you can see it's actually even created a sample draft of this website as I'm speaking to you. So, you lose nothing by using this kind of platform to be able to vibe code anything from a website to a mini to-do list app to whatever you're actually looking to build. And by the way, if you're watching this and you love the way that I break down cloud code and try to make it more digestible for you, I literally have an entire portion of my community that I'm going to be building out over the next few weeks from beginner to intermediate to advanced on how to use cloud code on steroids. In this miniourse, I'll only have enough time to go through the nuts and bolts of how to get up and running to really make use of the main tools you have at your disposal. But if you want to be able to use it at the proexert level and be in a community of hundreds of other business owners and entrepreneurs, then check out the second link in the description below and you'll see all kinds of cool stuff there. Anyway, back to the video. Okay, so we'll use this little platform as our launching pad to learn how to use the different tools at our disposal. And if we go back to the nice little mirror board here, we have some hidden features you want to try. So in cloud code again, you can interact with it just like normal cloud AI or cloud desktop where you can screenshot something and then paste it into the chat and tell it, you know what, this is ugly or these are all the different things that we need to build. And when I mentioned before, one of the best ways to use Claude in a way that you don't burn your credits really quickly is as you build an understanding of what it's doing. So if you go back here right now we have a very simple website. We have a HTML file and we have a CSS file. The HTML is responsible for all the content on this website. And the CSS is like the colors, the schema, the fonts, etc. Over time if we start to build a really big codebase, this is where you want to start doing things like at. So now you can start to say, you know what, I actually just want to look at index html. So, I'll just go down here and say HTML. And now it knows that I just want to target this one file. And right now, this doesn't matter because we have such a small tiny codebase. But if you're building something more ambitious, you'll have five, 10, maybe a hundred files eventually in your codebase. And if you don't really specify it and just leave it to the AI to guess whether or not it's one particular file or many, it might mistakenly go through tons of different files, ram that into your context window, which is going to lower the bandwidth of the AI to focus on what you're trying to do. So even from the beginning, it's good to keep the AI focused. So at the beginning, if you don't even understand what these files are and you have no bearing on which one it should look at, then don't worry about this for now. But as this scales, as this gets bigger, it's a good skill to have in your back pocket. Next one here, one of my favorite modes in any app, whether it's a lovable, a bold, chat, GBT, is some form of ask mode where I just ask a question without any kind of code being written. So in cloud code, you accomplish that by clicking on shift tab. Notice how the bottom here is switching. So it says right now accept edits is on. Meaning if it has some form of edit, it won't ask me for permission to approve that edit. It will just go through with it. And there's this different mode here that I love that's called planning mode. So planning mode is very powerful because we can now have a back and forth and understand and build a strategy around what we're going to plan before we actually build it. And what's actually useful is you want to double check what kind of model are you even using here. So if you do slash, you can see right now a little preview of what I'll go through after which are these slash commands. You have all kinds of commands at your disposal. If I select model, it will show me the default. So the recommended one is opus 4.1 for up to 50% of usage requests or usage limits rather. Otherwise, use sonnet. And then you can use a new mode that's called opus plan mode. This is a really cool mode. So use Opus 4.1 in plan mode and basically use the most powerful slashexpensive language model to help you build a plan. And that's usually, by the way, the only time I truly use Opus because Opus will burn down your credits quicker than a flame can burn down a house of hay. So bearing that in mind, even though this is the default, I typically just use Sonnet, especially now, like I said before, there's a million context window with Sonnet. So keeping track of the codebase using more of the context of the codebase without risking hallucination, as much is a lot easier to accomplish with sonnet. But in this case, because I want to be able to plan our next step, we can click on four. And now we are in set model to opus plan mode. And now I can say I don't really like the direction of where the website's going. I feel like it's very bland, cookie cutter. It's not using modern design. I really want to rethink the way we lay it out so we would look different. We don't look like some average AI consultancy firm that's broke and doesn't have a way to properly vibe code a website. And what I'm using to dictate, by the way, is called Whisper Flow. There's all kinds of tools now you can use like Aqua and Mac Whisper, but this is the one I like to use because it learns how I speak over time. And it does help you remove yet another friction point to vibe code because if the AI is doing the thinking, AI is doing the coding and you're just dictating what's working and not working, your ability to move quickly becomes really easy. Now, we'll send this request over and you'll notice after this runs how detailed the response is going to be because we have a heavy hitter language model taking the helm at being able to build the plan. Now, even though we said the clawed dangerously thing, it will still ask us for the first time to use things like tool use. In this case, it wants to use web search, which is super cool because again, you get the GPT or cloud AI experience of doing web search within this terminal, which is why you can do almost everything here, especially when we add MCPS, but you have to wait for that next part. So, in this case, I'm going to say yes. So, I'll click down. I'll click yes. And then it will start doing a web search. And you'll notice right away, it creates this folder, acloud folder. When I open this up, this is going to have something called a settings.local.json file. And if I give you a little preview, it's going to be completely empty because we have again a virgin breakdown. But what it's going to do is document in real time all of our preferences that we're explaining to Claude Code as we're building this platform or this project in this case. So, it's basically creating a little note to self. Okay, Mark seems to be okay with me using web search and he doesn't want me to bother him again. So, it looks like this is on the allow list. And over time, you can start to really manipulate this to build the perfect environment or workspace that works for you because what is optimal for me might not be optimal for you. But the idea is you can talk to it and tell it, you know what, I don't like you doing this or I wish you'd ask me this less and it will actually create a note to self to help you with that. So, it comes up with a full website redesign for the website. Right. So now it's going through things like how the hero section should be imagined, how the navigation should be imagined, visual language, interactive elements, typography system, layout and innovation, all of this. Now even recommending a new text stack. So remember before how we started out with just an HTML and a CSS file. It's now creating these other types of files. And now do you have to know what they mean? No. But it's actually really good practice to just read what they mean in plain English because like I said before, even if you're beginning from zero and you have minimal to no knowledge about technical expertise stuff, this will teach you at least subconsciously or consciously and the more you build, the more you're going to learn. So in this case, I'm going to click on auto accept edits. So I'm going to click on keep planning for a second. Okay. Now, I want to do this just so I can do shift tab, go back into bypass permissions, and then just say, let's execute this entire plan. Don't bother me until everything's implemented step by step, and then let me know when you're done, and I'll take a look. Right? So, I'm speaking to it like an employee. And trust me, this can become a much richer conversation. I can start telling it, you know what, spin up a sub agent that has a specialty in UI or UX design. Spin up an agent that acts as a project manager to keep you on track to make sure you tick off every single thing. Spin up another thing. So, the sky's is the limit in terms of how rich of a conversation I can have. But for now, we're just going to inch our way to showing you what it can do with just a few commands, let alone all the different tools and bells and whistles you can use to take this to the next level. All right. And after 10 minutes, it updated all of these to-dos. It completed and we got a brand new, apparently a premium consulting website. And you'll see the difference is night and day where we have this cursor thing that floats around. Now, the actual text looks a bit weird, which will give us a good opportunity to be able to actually uh give some feedback. You can see it actually functions. Things look pretty. As you hover over, definitely is not a normal website that's out of the box. We have some stats here. Definitely looks a lot better. Now, what we could do is let's just click on the menu. Okay, looks very clean. Does it actually go to a services tab? Very cool. We can go and give some feedback now. But one thing I actually forgot to do was switch the model. So, I'm going to show you one little command here you can run to make sure whether or not you have bankrupted yourself. So if you use this command that's called npx and then cc cloud code usage at latest, it will give you a full report of how much money you've costed anthropic, how much money you spent and what that looked like in terms of a costing standpoint, the most productive days, whether or not you've used your cash, meaning are you properly using prior chats to your advantage? Are you just ramming in all kinds of files and using it over and over again? We don't need to. It'll also give you an efficiency report. So it'll say you're making excellent use of context caching. Cash reads are much cheaper than fresh input tokens. And it'll give you some more stats here as well. So in this case, I'm going to go back to models because I don't want to be on the street because of this. So we'll go to sonnet number three and I'm going to park it at sonnet probably for the rest of this demo. And now what we can do is like I told you, we can screenshot this. Now, if you know what an MCP is, we probably don't even need to do screenshotting in the future, but for now, we're going to assume that you have to. I'm literally just going to do commandV. It's probably uh control C or controlV on a Windows computer. And then I'll screenshot anything that I think is looks off. For the most part, looks decent. Um, let me just screenshot while I hover over. All right. So, in this case, I can take this save to clipboard. Command V. It'll paste it in and then I can dictate right into it. Okay. So, it looks a lot better, but I want to be able to improve the text. It looks super weird and funky on the main hero part of the landing page. And when I hover over one of these sections for services, it seems like there's an overlap of a title and a weird subtitle off the left. And I just want to make it look a lot more crisp. Now, despite the stutter, it should have got most of that. And I can send this over and we'll come back to the next version of it. And with that change, if I refresh, and now we get this cool little landing page with a loading bar. And then this finally looks like plain English. We have a little tagline. And then we can keep on going from here. But the main gist of this is you can get up and running with what two, three, four prompts. And none of them were technical in nature at all. We offloaded the technicality onto Opus plan mode which made our life way easier. Now to bring us back to conceptual, we've gone through the screenshotting the at symbol. I show you really quickly. Now on the at symbol side of things, like I said before, you ideally don't want AI having to look at each and every file that it's created over time when it's responding to a minimal change. Let's say I said make the website blue themed and now it's gone through every single file to make that change. Now typically especially cloud models are smart enough to know okay change in color then probably a CSS file but what if you asked for a whole menu of things which I don't recommend but if you wanted to say do these eight things right those eight things could span 15 different files as you get more familiar with what it's doing over time you can literally go into ask mode and go to shift tab let's uh plan mode and say uh walk me through what each file on the sidebar are does and how it contributes to the website we're building. Right? So now you don't have an excuse to not understand what these things do because it will break it down for you in plain English. So once you understand what they do, then you can start to at and target them and then you'll understand what you need to manipulate where. And within a minute it will break down exactly what each file does, how it sets it up, and then you start to become really acquainted with the entire workflow and structure of your folder. And you can even do and give commands like this. Okay, take that entire explanation, create a new folder that's called a noob_ch checklist and place this as a markdown file in that folder. So now that we have or it has access to your terminal, it means it can not only create files, it can create folders in those files and move those folders around. So this as you keep building will inevitably get messy. You can tell it go and clean everything up, remove all the files that we don't need to keep things nice and clean and tidy. So, if we submit this, this should be able to create a new folder without me doing anything and store this in that folder for quick reference later. Just like that, it used what I referred to before, the language called bash to create the commands on its own. I didn't have to hop in a terminal to create the file like we said, create the noob_ch checkcklist folder. And now we have a file here called web architecture.md. And in here, if I just minimize this a bit, you'll see that it's the entire structure of what it just communicated to us. And now we have this artifact, an asset. And why this is important to know is, as you'll see shortly, you'll be able to create an asset that acts as memory for Claude. So you can basically put all your preference in there in terms of the styles you like, the fonts you like, the way you want it to communicate with you, and you can really play around with that. And by the way, if you want to be able to create a new chat and use the extension we installed earlier, this run cloud code, you can always click on any file on the sidebar and then it's a good shortcut to be able to open a brand new session. And again, we could do run cloud code dangerously, right? And it'll understand what we're trying to do and then we can keep building on the project from here. Now, like I said before, one of the beauties of Claude code is you can start to marry something that's very native to Claude and the anthropic ecosystem, which are MCP servers. And if you have no clue what those letters mean, imagine an MCP server, which stands for model, context, protocol, as someone knocking on a door and then someone behind the door saying password. You have to give the password to open the door. in that in a very practical case, it's an API key that you give to a back-end service that allows you to use that service for one particular action. What MCP did is allow you to knock on one door, give the password once, and then it opens all the doors. So, it's not just write an email, it's not just draft an email, it is send the email. You can access all of those different actions. It's get my contacts. And now you can make that request in natural language. And behind the scenes, it takes that request in natural language and then it kicks it off to whatever door that seems to be leading down the path where that action can be executed. And the real power is we can go from one of these doors. And once you get in there, you realize you have a superpower arcade where now you can combine multiple MCP servers. one that maybe comes in to check your work, one that opens a browser to see what your web app looks like. And then you can start to combine these tools or servers with agents, actual agents to use those tools and servers to execute tasks semi-autonomously to possibly fully autonomously. And the goal, of course, is to have a lot of these MCP servers manage themselves. So, all you have to do is find a way to add the MCP server, which again, I'll show you right away, and you can just use AI to help you give the commands. You don't have to memorize them in any shape or form. And then once you have them, you just have to speak to Claude and say, "Listen, when we complete these changes, in this case, to our website, I want you to use this MCP server to open up the browser and inspect it yourself. Check your own work." And now you start to really remove yourself from the equation. And then you can layer on another level where you say, you know what, don't just use the MCP server. I want to build an agent that's sole rule is to like do quality assurance testing that uses the server to check its own work. And that's just one small tease of the type of leverage that you can get using a tool like this. Now, I listed a few of many MCP servers that you can take advantage of. You can use ones like firecrawl which are really good for web scraping to things like exa which is basically like perplexity or web search using AI but specifically for development purposes. And then you have literally one of my favorite which is called playright. It's a server or a tool, if you want to think about it that way, by Microsoft that allows it to autonomously take control of a browser and click around as you and I would, which gives us the ability in this case to tell it, you know what, go and search and look on the web page that you built and you critique yourself where you think we could close the gap to make this world class. These are example requests of how you'd add it. So, you'd literally just copy paste the request cla xa. There are some really trusted MCPs. And one little disclaimer here is when you add an MCP server, there are now thousands if not hundreds of thousands. So ideally, you want to trust providers that are tried and true. Like if you go to on firecrawl, that's an established YC company. If you go on Playright, it's literally by Microsoft. So try and be careful with what tools you add, even if some look really beautiful. And one little extra tip here is if you already use MCP servers and you use them on your cloud desktop, you can use this command that's called claude MCP add from desktop exactly verbatim. And this will help you import everything that you already have on cloud desktop into cloud code. So huge timesaver tip here. Now just to actually test it out, let's actually try to add an MCP server. So in this case, I'm going to use one of my favorite ones. So can you find me and write me the command I can copy paste into cloud code that will allow me to use the playright MCP server. Okay, so in this case it should be able to find it pretty quickly. It's a very popular one. And then there we go. See this is a better version of the command that I had. This will take the latest version of that server. So if I paste this into cloud code, it might ask me for some permissions here. We'll double check. See, right now it's writing the bash. I'm going to click on number two. So, it doesn't bother me again about this particular thing. It's now going to install this MCP server. And now, within literally seconds, it it's at our disposal. So, now if I ask it something like, how can we use this MCP server realistically with our web design project? And let's go into ask mode. So, I'll do shift tab until we go to ask mode. So, in this case, it actually researches it. It says it's going to research the current structure of the project. It then goes through every file. It goes to the originating website of the MCP server. It reads through all the lines to familiar familiarize itself with it. And then it says based on my analysis of your web design project. Here are realistic ways to use it. So cross browser compatibility testing, responsive design validation, form functionality testing. So this is where I said it can take control of a browser user experience analysis and then content management. So these are examples of many things it can do and I think that it created examples of like a test for a contact form. So it's showing me not just telling me exactly what it can use it for. And literally as we speak it went from just an idea to initiative. So I did auto accept mode instead of plan mode. So that's why it jumped the gun. But it's already going through, it's spinning up the actual browser and going through the back and forth on the different to-dos. And it's going to come back with some form of report on how well it's done so far. And without me even telling it to, it created a series of tests that it can use to check the website each and every single time we make an update. So now it will conduct these sites to test different things like the navigation, the contact form, the performance, the responsive testing, and as well as visual regression, meaning it will actually look at it and see do things look good. And if I scroll back down here until we get to the checklist, you'll see it's come up with things like uh complete testing files, like we said before, cross browser configuration, professional documentation, and then it'll tell you realistic benefits for your project. And this is where, for example, it might make sense to spin up a little. But let's add one more MCP for good measure. So let's add Exa which again is a version of Perplexity and it's a lot richer than web search. So it can do a lot more targeted searching on different components. So let's say I want to say okay I want to add one more MCV server. I want to add the exa XA MCP server that will help me search the web really easily. Can you create another command I can copy paste in the cloud code. So if we send that over right here it's going to go into the repo. I can already see it. And then now we'll need an API key. So in this case, all we have to do is go to Exa. Exam MCP. And then this will take us to the docs. We'll be able to go to a API dashboard. It should be free for a decent amount of usage. So if we go into API keys, you'll be able to create one here. And then I will just create one behind the scenes and then take it from here. So, while the XAMCP did install, when I asked it to actually do some research, it kept defaulting to web search. So, I kept going back and forth and then eventually realized that it wasn't using the XAMCP. So, I'm only scrolling through this. So, you can see that it tried to go through my system, see which MCPs were actually working, which was only the Playright MCP. This is an example of some issues that might pop up while you add MCP servers, especially if there's some overlap because claude when it hears something like a web search, it will default towards using its own web search. So, we kind of have to override its instinct. You'll see here it tries to install it, debug it, and then at the very end, it tells us that it seems like the XMCP server is running properly, but to expose the tools, we need to create a new session. So, luckily with this tool, we just click on run cloud code. We can terminate that last session. And what we can do is ask what MCP servers do you have at your disposal? You should have two. You should have the Playright MCP and you should have the exam MCP. Just make sure you're fully connected to both. So when we send that off, we should hopefully get a report that both are healthy. And luckily on second try, we see that here it's looking at the MCP health after I asked it. It sees seemingly only the playright MCP. But then when I ask it, do you have access for sure to Exa? I can visually see that has access to these specific things. I can do deep research web search. So now if I ask it, okay, let's conduct some web search just using Exa, nothing else, not your standard web search to go and look for the best practices for building a very pretty version of the current website we have. So now if we send that over, fingers crossed, we should see it use not normal web search, but the Exa MCP server. So now it's popping this up. I'm already getting a good feedback loop here. So if I click on number two one, it shouldn't ask me again. And now I can physically see. Perfect. We're using this MCP server. And assuming that my API key is good to go, we should be off to the races. We have eight results from what I can see. Now it's going to go through the results. This is the request ID and this is basically what it's searching. and we'll get back some form of response that it will parse out and basically put on a silver platter for us as to what's important. And just like that, it comes up with the visual design trends, layout interaction, and pretty much this is how you build with MCPS. Sometimes, some will be really easy. It'll be one command and you're off to the races, but other ones you want to double and triple check that it's actually working. And if it's not working, but it seems like it's actually installed, then you typically have to open a brand new session and close the current one that you're using. Now, it might seem that I've dwelled on this MCP part, but it's super important because I have like 15 that I'm using. There's some really, really powerful ones. Like for example, there's one called cipher that I'm showing my community where you can have memory of different parts of your conversation so that every single time you start a conversation, you can reference this vector database that has access to all kinds of information about how you like to build projects, what is your style of design that you like and you can start to build artifacts that persist not just from one project to another but anywhere where you can hit this open-source open memory database. Now moving on coming to the complete setup. So we're going to have this file called a claude MD file. And the claude MD file acts as a control center a command center. This is where general concepts and ideas come into play to build the proper command center for where Claude can look at and be like okay this is how Mark likes to build certain infrastructure at least for this project. Which is different from persistent memory where it's more evergreen. The claw MD file is really temporal for this specific project what we're looking to do. Can you use the same MD file in other projects? Absolutely. It's more so you can make it specific to the project you're building in. And I'll finally show you how we can use the symbiosis of using cursor and cloud code in the same zone or ecosystem to have it help us with this specific task. So now we can actually expand the panel and expose cursor. What's cool is it's kind of like having a doctor with a second opinion. I can go to Dr. GPT5 low and then go into ask mode and you know what you can even go into agent mode and say can you go search the web for the best practices for creating a claude.md file for a claude code project and then we'll send that over and then we'll send this right there and you can see here we have a second opinion since cursor also has access to the exact same codebase so it can unbiasedly look at what's happening and give us recommendations and it can also execute web search using the old-fashioned version of web search and it can come up with key principles. Now I'm just getting it to do this here. So we have it in memory. So now when I ask it the next request which is can you create the best MD file for maintaining the design principles that we need to make this world class. So I'll actually ask it now in agent mode. I can use cloud forset uh non-max version. Can you create a MD file, a claw.md file specifically with all the best principles and practices that this project should adhere to to increase the likelihood that we have success in the project in terms of design, in terms of the look and feel, and most importantly creating a good high converting landing page. So in this case again showing you an example you could completely create this exact request in plan mode in cloud code but it's cool to have two AIs at your disposal. One with really virgin eyes that's not really u muddied by any of the context window or the context in general of the conversation at hand and then it can act as your mini co-pilot and it can also do things meaning it can actually create this MD file. Now, one thing I need to correct here is it created some weird name for the file. So, I just called it cloud MD again. And then now it's going through, it's creating a checklist. There we go. And then it'll actually write the best principles that we can obviously edit after the fact. But at least we have some form of reference point or command center to operate from. And just like that, it's created the MD file. It's summarizing here at a high level what it's done. But I can actually close this for now. And we can doubleclick on this MD file. and let's bring bring it to the forefront. And you can see right here it has a breakdown of the mission, the target audience, the core objectives, the front end, the color palette, typography, and this just gives you a small taste of how detailed you can make the IMD file. Number one. Number two, that you don't have to do a lot of these things yourself. So in terms of organizing, in terms of creating the proper structure, all of this can be offloaded onto the AI, whether it's cloud code itself or your friendly co-pilot waiting for you on the right hand side. So that's the MD file. In terms of finally, this word agents that's so amorphous and hard to really pin down, you can spin up agents in the same type of slash command that we used to add an MCP server. Now, your AI team can be whatever you think. Now, typically a lot of tutorials go hog wild and add like 10 or 15 so that they can say, "I built an entire team of agents to do my job for me. Really good clickbait, great click-through rate." But in terms of practical AI building, probably not what you want to optimize for because especially if you are budget constrained and you don't have $200 to pay on a max plan, then you probably don't want to spend hundreds of dollars with like seven to 10 agents doing the job of potentially three or four or even one agent. So you want to practically look at your project as if you have $10,000 in budget and you can only hire one or two employees. If you had to hire one or two employees that can technically wear multiple hats, start there. And as you hit natural constraints where everything's taking a while and it's spinning and it's spending, then maybe you can expand and delegate to subtasks. It's just really important that you don't use agents for the fun of telling other people that you're using agents. Ideally, use cloud code the way I'm doing it right now, which is pretty linear in nature, as you want different tasks to happen in parallel, like we alluded to at the very beginning. That's where it makes sense to spin up a couple different agents and say, you are the project manager. You make sure that the to-do lists are very crisp and detailed and you are the UI or UX designer or both in one and you make sure that whatever we create we do what's called we spin up a local host which is basically spinning up that website on our uh desktop computer and you audit it and you can use an MCP server like the playright MCP to actually go and review the site come back with a report tell the project manager what needs to be changed and then do that. That's where you start to build some real leverage in this workflow where if you let it run now autonomously, these agents communicate with each other and they work together to get the job done. Now, if you're intimidated at the prospect of writing prompts to create these agents, right? You know, I already have your back. So, there is a website that's called subagents.cc, which is pretty new. And what this brilliant person did is they created a small repository of what different AI agent promps might look like. So if we go into that, let's go into sub agents.cc and you'll see that we have a entire repository of different types of agents. So let's say I care right now about design. So let's go into uh UI designer. So I can click on preview right here. And this will reveal an entire instruction to build a really solid designer agent. Now, there's different ways you can install it. You can in use an install command. I like to personally copy the content because I might want to just be able to manipulate it myself. But bottom line, you can get this up and running and done very quickly. So now, this is the magic command. And again, if you want to see all the commands, I'll go through some of my favorite ones shortly, but we can say slash agents. And now when you click enter it'll ask you do you want to use the mobile app builder agent we built another project because I stored that in memory or do you want to build a brand new agent so in this case I can say no I want to build a brand new agent and I want to build it not just for my personal use but for this specific project. Okay. And now I want to do either generate with cloud code which you can totally do or you can do a manual configuration. So I'm going to choose the second one. And in this case, I'm just going to paste this prompt that we got and then send it over and downloading it will allow you to manipulate if you so choose. But if you wanted to do it the lazy way, you can click on copy install command and then we can send this over. Otherwise, we'd use slash agents and I'll show you how we could set it up manually or get clawed to create its own agent. So it initially creates the agent here. What happens is sometimes it creates it as a hidden file, meaning I can visually not see it under the main claude project. So this agent folder didn't exist initially. Now I like to see it there just so that I can keep track of what agents I have access to. So at the very bottom here, you'll see that I went through and I told it, can you make sure it's not hidden and can you place it explicitly in the MD folder? So you can see right here, I want to see it in thecloud folder in this project. And probably what would have been smarter was to actually say at.claude. Okay. Um, show it in this folder because I did go back and forth a few times to actually get it to understand what I'm trying to do. So that's one example. But let me show you how to spin up an agent a bit easier, a bit faster. So I can also go to agents, manage, create a new agent, and then we'll click on enter. We'll click on project and then generate with claude. And then I can just tell it what I want. Okay. Okay, so I want to create a project manager that looks at the current files we have and then based on the feedback that I'm providing as well as the help of the UI designer agent, it decides what tasks need to be done and completed in the proper order and it prioritizes the user experience versus the core content on whatever page or pages we create. So in this case, I give it something that's decently vague and it basically uses meta prompting to use AI to write a prompt with AI for the AI. So it creates its own next agent. And then it asks me to continue whether I want it for all tools or readonly tools or MCP tools. I'm just going to say all tools. Yeah. And then click on continue. And then it asks me what kind of model do you want to use which is awesome because um you can make it so that inherit from parent which means in plain English if your conversation is using sonnet 4 then the agent will use sonnet 4. But if you want to designate that an agent should get the firepower of opus which in this case for a project manager might make sense if it's in planning mode then maybe we let it use opus just for that particular agent. And the next thing it asks you is to create a color so that when you see these little dots here on the left hand side, you'll know which agent is being executed when based on that particular color. So if I go back into here, let's make it something like purple. Okay. And now it comes up with a name, the project task orchestrator. It walks you through exactly where the file is. So if I open this up, right now we just have designer. Now it's behind the scenes, but we can also make it apparent here. But in this case, I think we should be good to go. And then after I click on enter now, you can see now it goes from behind the scenes to right here. And we have access to this agent. And you can see right here we have access to the UI designer agent. And we have the project task orchestrator agent. And all we have to do now is just invoke them. If I click on escape here, we don't need to do this anymore. We can just have a normal conversation and say for this next task I want you to call on this first project manager to help us plan it out and then I want the project manager to work with the UI designer to do XYZ. And this is really where you start to get real leverage. All right, so take another breather. We're almost there for at least this iteration of the course. And by the way, if you're enjoying this and this is helpful for you, I'm definitely going on a slower speed than I usually would. But if this is making things more crystal clear and more approachable, please let me know down in the comments below. That will probably motivate me to make a part two for this course at some point where I go a little bit deeper on the extra bells and whistles we can use to keep adding more leverage and more firepower to this build. Okay, so the first zone here is just looking more on slash commands. So in terms of core slash commands, we have some basic ones and we have some advanced ones. And what's cool is you can even build your own slash commands by telling Claude to do it for you. So in this case, we have commands like claude, which is literally just to get it started, especially if you're starting a brand new terminal session. We also have claude dangerously skip perms, which basically stands for go on yolo mode, which again, if you're building something very minimal and it's not too dangerous, then you can just use it. Because if you're building a basic website prototype, there's only so many things that can go wrong. But if you're building something in production or something that's very client-f facing or you're dealing with client confidential data, highly recommend you don't use this unless you know what you're doing. And on this side, we have a lot of the common commands. So we have /clear, which creates a new conversation. We have compact, which basically creates a compressed version of your current chat. So, if you're in the middle or the heat of actually building something, then this will allow you to just summarize the conversation to keep the conversation going and minimize the amount of context window being used actively in that conversation. If you actually do slashinit, it will autocreate an MD file to familiarize itself and document what's happening in the current project. Obviously, you can manipulate it after the fact, but if you want a quick way to do that, that's one of the best ways. There's more foundational ones like slashexit which is basically quiz the session. You can alternatively just leave or click the X button on the session. This one is wildly used which is slashres. And a lot of folks that use this basically assume that it's it's best to be able to resume your last conversation so that the AI has context. So while this seems very rational and logical in practice, I've noticed that this leads to a lot of hallucination happening in subsequent sessions that you have with cloud code. So if it were me and what I do is I always will create some form of artifact of the conversation either through a memory MCP server or through creating my own file that summarizes what's happened in the conversation. So let me show you what I mean. So, if we jump in here, we could say a request like, okay, go through this entire conversation and go through the back and forth that we had and basically summarize the crux of what I'm looking to build. What is the premise of this project and where we've left off in terms of action items and where you think it would make the most sense to move forward assuming that my number one intention moving forward is to start to really build out each and every subpage and add some more depth to it and store this as a MD file in the external folder. So in this case I can send that over and now again I put this on claude itself to go through the conversation create an artifact and at least for now doing this the manual way I can use that artifact in the next chat and I can even do an at to reference it and you'll see here it created the file that has the project premise where we left off and I actually created a folder called external. Now I did mean external folder like this where I drag it outside but I can just move it myself if I want to. I don't have to be lazy. And I can just delete this folder. Boom. Boom. And now if I go to project summary and I pull this over just a little bit right here, you can see that it's a website modernization project summary. So we have the project premise, the research we completed, the layout we currently have, the current status, the next natural step. So a current website audit design system foundation implementation approach. So, we can keep adding on to this. We can tell it to edit it, but you can start to create assets that you basically import or migrate to your next sessions. Are there more efficient ways of doing this? Absolutely. And probably a way more efficient way than using the slashres command. But if you're starting out, this is a way more efficient way of executing the /resume command. And the last thing here are hooks. Now, hooks are very, very powerful and I would cover them in another video where you can do anything from create a sound every single time one of your agents executes a task, which is actually very helpful, especially if you're multitasking and you have, let's say, three, four agents. Each agent could have its own version of a sound. And you could literally tell Claude, "Go and access any default sounds on my computer and use those sounds for different tasks like when something's completed, when I submit a message, when you're thinking about something." And it's definitely something I could cover in another video. So, this was the basic version of different controls and slashcomands, but we can go into advanced where we have some newer things that are very helpful. Let's say like security view output style. And my little Easter egg to you is the fact that again you can create your own versions of these slash commands. So if we go back into cloud code and before we actually do that, this is a little summary. So slashsummarize is something that I personally built as a command that I'll show you how we can do. We already saw MCP. You can actually do slashmemory to create this MD file to keep track of different editing project conventions or context that you want it to store. And again, you can do that in combination with what I just showed you or just that or just what I just showed you. Completely up to you. At the end of the day, I'm not telling you that there is a right or wrong way to do something. I'm more so giving you the lay of the land so you can make the decision on how you like to organize your own closet. Now, on the first command, if we do slashoutput style, this is a new command you can use. So you can set the output style of how Claude should communicate with you. So in this case, it created its own version of a system prompt essentially of how it should communicate with me in this project based on what it's seen. So if I go back to output style right here, instead of clicking new, we can go on set output style and I can choose, do I want Claude to be verbose by default, completes coding tasks efficiently, and provides a concise summary? Do I want it to overexlain what's happening which again if you're starting out this might be an awesome setting for you to select or do I want to use this new version which is optimized for modern web design projects and you can keep adding and removing as you wish but in this case you can see here learning is if you're actually trying to learn to code it will give you bite-sized chunks of what it's doing how it's doing it and why it's doing it so you can follow along and most likely try to like implement and ingest what's happening and this is really one of the small examples of why the cloud ecosystem is doing so well is they're really looking at how folks are using this platform and what their workflows look like and they're trying to make it as frictionless as possible to cater to that. And if we do slash security review, this will basically look at your project and audit it for any form of security vulnerabilities before you submit it to production. And this is very helpful because for the average person that is not a cyber security expert, this will not plug every single hole or not cover all your bases, but it will give you a decent understanding of where you could have vulnerabilities in your system, your web application or your website. In terms of plan mode, I've already alluded to this before and we use it a couple times where you could use Opus plan mode. And one thing to note is that if you want Claude to think, there's actually four different versions of thinking. There is think, there's think hard, think harder, and ultra think. And while this might seem funny, behind the scenes, it actually uses way more tokens to basically reflect comma longer each time. And ultrathink is like if you combine this with opus, you will bankrupt yourself in seconds. So, I don't recommend you use this, but you actually want to use the uh nomenclature that you see here to accomplish it. Now, to go off on a slight tangent, if you're still not a big fan of the claw code look and feel of that terminal, then again, you could download something on your computer through warp. You just have to get the repo name called Claudia where it acts like a chat interface where something like think hard harder. You don't have to memorize this. It's a part of the front-end platform. And just to give some color, all I did was install and clone this repository of code and it's called claudia.git. It cloned it on my computer. I told it basically how do I run it? It ran it for me. It downloaded all these different packages and then it spun it up. And you can see here it is running on my computer, Claudia. And this is what it looks like. It's nothing too fancy, but basically I can click on new projects. I can go to our current YouTube demo. I can click on create new session. And now I can just have a conversation here where I can have a chat experience. I can click on here to choose which model. I can click on here to select which level of thinking I want to choose. So now I'm not restricted to have to remember that textual command. And I can go into let's say a usage tab and see what it looks like by model, by project, by session instead of memorizing that command I showed you. So I can see here exactly how much I've spent on this particular project up until now, especially when we used Opus. That was probably not a good idea. You can see a timeline of when we used the most usage. This is an example of me building an internal tool for my community on cloud code. So I was definitely heavier that day, but this gives you a quicker version and especially on the agent front. You can click on here and actually spin up your agents right here in the project instead of doing it externally. So, if you do want the best of both worlds where you have a front-end product, but you're still technically using cloud code, then you can absolutely do that. Like I said before, there's all kinds of things we can do with cloud code. We can implement hook systems for bells, whistles, audio notifications in between different processes. We can tell it how to image process properly depending on what we're trying to accomplish. We can create new versions of reasoning modes and checkpoint systems. And like I said, this is a preview of what it looks like if you implement hooks where right now in my current stack, I have sounds for completions, for errors, for starting, for stopping, for success, for thinking. So my desktop sounds very noisy during most days, but you can add your own soundtrack for your building process. And I will be able to show you that in a future video. And when it comes to understanding of settings, if you're not familiar with what JSON is, it is a type of file. It's called JavaScript object notation. And its data that it stores within it looks a lot like this. So when you add an MCP server, this is what it looks like behind the scenes. Each one's like a open curly bracket and a closed curly bracket with a command on executing it with the actual name of the MCP server. So behind the scenes on the left hand side in a lot of your projects you'll eventually see a settings.json file and a local settings.json file anything in the local JSON file will apply to this particular project whereas this one will apply globally to even future projects you spin up. So my hooks and sounds for example is global. So I don't have to keep creating that set of hooks each and every time. So you can see here on the local side of things in this particular session I said I want you to allow these kinds of requests to run autonomously without you asking me permission. So store that in local settings whereas again if I wanted something to apply to all projects and all sessions moving forward then it would be stored here. And to finish off more conceptually, especially if you are not technical and you're not a developer, one thing to think about is you want to build what's called modularly. Kind of like this little clawed mini agent is building with Lego, you want to build one domain at a time. So if you're working on a website and you want the design to be beautiful, work on that specific session you're having on the design. Now, if you want to make it functional where you click a series of buttons and it creates some form of automation behind the scenes that takes a lead form and has a little spinny screen and then it actually audits the results and comes back with a result, then maybe that's a separate chat. And now, if you want to be able to collect leads from the contact form on the website you're making, that's where you might want to spin up a database and you should dedicate a separate session for the database. And building in this way will lower the likelihood that the AI's behind the scenes, especially if you add agents, I know it sounds beautiful, but when you add agents, you do add complexity and you add more surface area for hallucinations to happen. So with that, you if you try to keep things thematically very similar and you don't switch from the design of the website to now add a database to now make an automation, you increase the likelihood that you're going to get exactly what you're looking for. And that's pretty much it for this iteration of walking through Claude Code for everyday folks to be able to use this and start to really push the boundaries of what they can do and more importantly what they can build. And believe it or not, I've literally just scratched the surface. So, if you want to see more videos like this, especially mega courses, things like this take me weeks to put together, but add-ons in the future will take less. So, if you're looking for a specific series of things to help you learn and build faster, let me know down in the comments below. And if you are interested in really going to the next level, I have created assets for beginner, intermediate, and advanced level for claude codes. But if you're trying to go from the shallow end of the pool to the deep end with hundreds of other business owners and entrepreneurs just like you helping each other out to level up to the next level, check out the early AI adopters community. It's probably one of the best communities you'll find out there. I put my heart and soul into building all the content to make things digestible and most importantly take you to where you want to go.

## Timed Segments

[0:00] If you&#39;ve heard all the hype about this
[0:01] thing called clawed code and you&#39;re
[0:03] still not sure whether or not you should
[0:05] care, this miniourse is for you. Now,
[0:07] most tutorials out there jump straight
[0:09] into a terminal and skip the bigger
[0:11] picture of how things like claude code
[0:13] can make you superhuman, whether you&#39;re
[0:15] technical or non-technical. And for this
[0:17] video specifically, I&#39;m aiming to
[0:19] empower and upskill as many
[0:21] self-identifying non-technical people as
[0:23] possible. Because while Cloud Code did
[0:25] start and continues to be a developer
[0:27] tool, it&#39;s quickly evolving into
[0:29] something so accessible that practically
[0:31] anyone can take advantage of it if they
[0:34] know what to do, what buttons to press,
[0:36] and how to structure projects. So, in
[0:37] this course, I&#39;m going to break down
[0:39] what Claude code is in plain English.
[0:41] And through me explaining that, you&#39;ll
[0:42] be able to better understand why Claude
[0:45] Code is a huge paradigm shift compared
[0:47] to all the other vibe coding tools and
[0:50] context engineering tools that are
[0:51] currently out there. But aside from the
[0:52] conceptual, I&#39;m going to walk you
[0:54] through how to set up and use Cloud Code
[0:57] step by step, and I&#39;ll do my best to
[0:58] make as many things make sense as I
[1:01] possibly can. And last, but not least,
[1:02] you&#39;ll leave this video with a free mega
[1:05] guide of how to use Cloud Code, some
[1:07] common commands, and enough of a cheat
[1:09] sheet to get you up and running, whether
[1:11] you&#39;re technical or non-technical. If
[1:12] you&#39;re ready for step one of becoming
[1:14] more superhuman, let&#39;s jump in. All
[1:17] right, so this is the lay of the land
[1:18] for our entire miniourse where we&#39;re
[1:21] going to go from understanding why Cloud
[1:23] Code is so hyped right now and most
[1:25] importantly how to tactically use it.
[1:28] Very similar to something like a video
[1:29] game wherever there are cheat codes in
[1:31] the process. Instead of having separate
[1:33] videos just for cheat codes, I&#39;m going
[1:35] to weave in any cheat codes or ways to
[1:38] make things easier as much as I can
[1:40] while we go through all the steps, both
[1:42] the conceptual ones and the technical
[1:44] ones. Now, what is all the fuss about
[1:45] this thing called clawed code? So, on
[1:48] the face of it, it&#39;s very similar
[1:49] conceptually to other AI coding
[1:51] platforms out there like cursor,
[1:54] windsurf, rue code, and the rest of the
[1:56] tens of other alternatives. And to be
[1:58] frank with you, I haven&#39;t touched Claude
[2:00] code up until this month because I
[2:02] usually have a personal motto,
[2:04] especially in the Generative AI space
[2:05] where if something or someone is very
[2:09] much overhyped or in trend, I usually
[2:11] stay away from that trend as long as
[2:13] possible until I see whether or not it
[2:15] has some legs that&#39;s worthy of me
[2:17] actually shifting the way I do things or
[2:19] shifting the tools I use. So, the reason
[2:21] why I have this Game of Thrones picture
[2:23] here is when that came out years ago, I
[2:26] waited through season 1, season 2, and
[2:29] season 3 before I had the urge to
[2:31] actually go and invest because I saw
[2:33] that there was some form of longevity in
[2:35] that series. Now, if you&#39;ve ever watched
[2:36] it and you know how it ends, don&#39;t
[2:37] worry. This is not how this tutorial is
[2:39] going to end. It&#39;s going to end a lot
[2:40] brighter. Sorry for the spoiler alert,
[2:42] but regardless, once I realized what
[2:44] Claude Code could do, then I understood
[2:46] why it&#39;s truly a step change. And just
[2:48] as a disclaimer, this is not a sponsored
[2:50] video. I hate changing tools. I hate
[2:53] switching stacks. So, it has to be
[2:55] something very compelling for me to do.
[2:56] So, once again, we asked the question,
[2:58] what is all the fuss about this tool?
[3:00] Now, I&#39;m going to have a lot of visuals
[3:02] here. I made them primarily for myself,
[3:04] but if you are a visual person, I hope
[3:06] they help you. Claude allows you to
[3:07] create what are called sub agents. So,
[3:10] there&#39;s all kinds of abuse of the word
[3:12] agent in this entire space. There are
[3:14] workflows that are literally a tob that
[3:16] we call agentic. There are chat bots
[3:18] that we call agents and then there are
[3:19] things that are actually semi-agentic.
[3:21] Let&#39;s say an end workflow with a series
[3:23] of AI agent nodes and sub aents. In the
[3:26] land of cloud code, we are one step
[3:28] further on that agentic scale where I
[3:32] won&#39;t say that they have full autonomy
[3:34] or they can run completely maniacal on
[3:36] their own with no human intervention,
[3:38] but we are definitely closer to that
[3:40] point. So you can see here you can not
[3:42] only spin up different agents in cloud
[3:44] to help you accomplish different tasks
[3:46] but what&#39;s really important is that they
[3:48] all operate in parallel and I&#39;ll tell
[3:50] you why that&#39;s important. So typically
[3:53] in using something like cursor or
[3:55] windsurf when you want to build
[3:57] something let&#39;s say you want to build a
[3:58] to-do list app or a finance tracker name
[4:00] anything that&#39;s easy for you to
[4:02] conceptualize it&#39;s typically taken one
[4:04] step at a time. So you have a to-do list
[4:06] and you go through that to-do list and
[4:08] check off one thing after the other. And
[4:10] what happens is if you&#39;re using an AI
[4:12] coding platform like cursor where it&#39;s
[4:15] much more sequential in nature, you&#39;ll
[4:17] realize that if you&#39;re trying to do very
[4:18] big tasks and you&#39;re not being very
[4:20] efficient in the way you&#39;re executing
[4:22] those tasks, that&#39;s where you have a
[4:24] conversation that gets short
[4:25] consistently and you have to keep
[4:27] restarting the operation. And you&#39;ll
[4:29] notice that you&#39;re always ramming
[4:30] different parts of what&#39;s called a
[4:32] codebase, which is basically where all
[4:34] the code and information lives. And then
[4:36] you get this suboptimal conversation
[4:38] where sometimes you can build things,
[4:40] but for some reason you keep spinning on
[4:42] certain areas. Now with cloud code, when
[4:44] you spin up these sub agents, each one
[4:47] technically has its own fresh blank
[4:49] slate context window. And what&#39;s cool is
[4:52] as of this recording, Anthropic released
[4:54] a million context window for Claude
[4:57] Sonnet 4, which is a huge change. Up
[4:59] until now, Claude has always been
[5:01] limited, even though it&#39;s been such a
[5:02] great coding partner at using only
[5:05] 200,000 context window, which if you&#39;re
[5:07] trying to generate something or have a
[5:08] simple back and forth conversation, is
[5:10] more than sufficient. But once you start
[5:12] building and investing in the features
[5:14] of a production level web application or
[5:17] any application of any sort, you&#39;ll
[5:19] notice that not having additional
[5:21] context basically hinders your ability
[5:23] to keep moving forward. If you&#39;re just
[5:25] using claw to build some form of
[5:26] application that&#39;s pretty simple or
[5:28] having this normal back and forth
[5:30] conversation, 200,000 tokens is more
[5:33] than enough to get you there. But if you
[5:34] want to be able to build production
[5:36] level code, having something like a
[5:38] million context window gives you a lot
[5:40] more breathing room, a lot more
[5:41] bandwidth to go back and forth and get
[5:44] to the crux of not only planning but
[5:46] also building multiple features in the
[5:48] same thematic area or domain area in one
[5:51] shot. So from an experience standpoint,
[5:53] you write better code without you
[5:54] writing the code. You&#39;re just using
[5:56] natural language prompts to try to
[5:57] execute the next part of the workflow.
[5:59] But once it actually accomplishes the
[6:01] thing, one, it&#39;s really good at showing
[6:03] you its work, meaning the to-do list.
[6:05] And two, you have a longer shelf life
[6:07] for your conversation before the
[6:09] language model begins to really
[6:10] hallucinate and you need to begin a new
[6:12] session. Not only that, I&#39;m going to
[6:14] show you very shortly what are called
[6:15] slash commands that will allow you to do
[6:17] things like summarize your conversation
[6:19] or make it more compact so you can keep
[6:21] having that conversation, especially if
[6:23] you&#39;re in the middle of it or in the
[6:25] zone, so you don&#39;t have to restart from
[6:27] scratch. Now, if all of this is new to
[6:28] you, then you might be asking a very
[6:30] astute question, which is what happens
[6:32] to all of the other tools on the market,
[6:34] the lovables, the bolds, the replets,
[6:36] the base 44s, the insert name of brand
[6:39] new tool that&#39;s come out in the past few
[6:40] weeks. Being able to use cloud code
[6:42] doesn&#39;t necessarily negate being able to
[6:44] use these tools to go from zero to 20 to
[6:47] 30%. The key thing here is that it
[6:49] doesn&#39;t have to be either or. I see a
[6:51] world where for someone that is less
[6:53] technical or non-technical you can use
[6:55] these tools to go from zero to 30 40%.
[6:58] And once you&#39;re there within a few
[7:00] clicks and copy paste you can export the
[7:03] project from these platforms to
[7:05] something like cloud code to keep going
[7:07] and really take your project to the next
[7:09] level without having to worry about
[7:10] spaghetti code being generated without
[7:12] you being able to be involved in every
[7:14] part of the process. Because while all
[7:16] of these tools and more tools will come
[7:18] out in the future to shortcut this
[7:20] entire process I&#39;m about to show you, if
[7:22] you know how to actually manipulate clog
[7:24] code in its essence at its root, then
[7:27] everything related to these tools will
[7:29] be so easy for you to manipulate because
[7:30] you&#39;ll know that you&#39;ll have this skill
[7:32] set that will allow you to push these
[7:34] platforms as far as they&#39;ll naturally
[7:36] allow you to build whatever you&#39;re
[7:37] trying to build and then you know you
[7:39] can export it to something like cloud
[7:41] code and take it to production level.
[7:43] And if I were to guess as to where we&#39;re
[7:45] going in the next 6 to 12 months, I
[7:47] would imagine that all of these tools
[7:49] will begin to compete in the making
[7:51] software on demand arena where something
[7:54] like Framer is right now in web
[7:55] development where if you compare it to
[7:57] things like Wix and Web Flow and
[7:59] WordPress, it makes really pretty
[8:01] websites very quickly. So I think that
[8:03] the market eventually will have a
[8:05] monopoly where you have one mega tool
[8:07] that can go from zero to 100%. But until
[8:10] we get there, we&#39;re still dealing with
[8:12] language models which hallucinate, have
[8:14] scaling problems, are expensive to run,
[8:16] etc. I think we will have a bifurcated
[8:19] market where there will be from 0 to 30
[8:21] kind of tools that can maybe get you to
[8:23] some semblance of 100 slower and then
[8:26] you&#39;ll have these tools like claw code
[8:28] where if you know the recipe and the
[8:30] blueprint to use it properly, you can go
[8:33] from 0 to 100, from 20 to 100, you&#39;ll
[8:35] have that skill set or that foundation
[8:38] to do whatever you want. Now, if you put
[8:39] your finger in the wind and you let
[8:41] YouTube decide for you whether you
[8:43] should use claude or cursor, you&#39;ll see
[8:46] two main schools of thought. One that
[8:48] says, you know what, cursor has been
[8:50] around for a while. They have staying
[8:52] power. They allow you to talk to all the
[8:54] different models. And by the way, if you
[8:55] don&#39;t know what cursor is, it&#39;s
[8:57] basically another AI coding tool, but
[8:59] the main difference is it is a wrapper
[9:01] around every other language model like
[9:03] Claude, like OpenAI, like Gemini. While
[9:07] Claude is, you know, for the most part
[9:09] optimizing for Claude models, some folks
[9:11] will favor this, some folks will favor
[9:13] this. Over time, features will come out.
[9:16] You&#39;ll have one side of the aisle say
[9:18] that Claude killed cursor and then
[9:20] cursor killed Claude. And this will
[9:21] continue as debate, but my opinion is
[9:24] don&#39;t worry about the noise. We are not
[9:26] attached to tools. We&#39;re not on team A
[9:29] or B. We are attached to outcomes. So,
[9:31] as of right now, Cloud Code has evolving
[9:34] infrastructure and tools and
[9:36] capabilities and most importantly,
[9:38] amazing models that help you build
[9:40] faster. And I say this as someone who
[9:42] has used Cursor ever since it came out,
[9:45] meaning I have a bias to want to go that
[9:47] side. But right now, it seems like it&#39;s
[9:49] faster to get to my outcomes using Cloud
[9:51] Code. So, I don&#39;t care about the debate.
[9:53] I&#39;m going to use the tool that&#39;s going
[9:54] to get me there faster. And one more
[9:56] thing on this, if you&#39;re ever betting on
[9:58] which tool is going to win, you will go
[10:00] crazy because we can&#39;t really forecast
[10:02] 12 to 18 months out. But what we can see
[10:05] is usually 1 to 3 months ahead. Well,
[10:07] right now the momentum behind Anthropic
[10:10] pushing new updates to Cloud Code on top
[10:12] of the community around it trying to
[10:14] build as many features as possible to
[10:17] make it as accessible to everyone as
[10:18] possible. I am betting on cloud code at
[10:21] least for the short term. And just like
[10:22] everything I keep preaching, I&#39;m going
[10:24] to re-evaluate in one to three months
[10:26] and if I have to shift my stack again, I
[10:28] will. But there&#39;s a couple reasons
[10:30] myself why I&#39;m betting on cloud code is
[10:33] we talk a lot about MCP which went from
[10:35] three letters that nobody understood
[10:37] that if you&#39;re not familiar with what it
[10:38] means by the way, I&#39;ll explain it just
[10:40] in a bit. But it went from something
[10:41] that was very ambiguous to now it&#39;s a
[10:44] commonplace word that we use in place of
[10:46] let&#39;s say HTTP which was for websites
[10:48] and anthropic are the inventors and
[10:50] pioneers of it and now other industry
[10:53] leaders like OpenAI and Gemini have
[10:55] supported this infrastructure. So
[10:57] knowing that they not only came first,
[10:58] but they&#39;re the ones that built it on
[11:00] top of being literally one of the best
[11:02] coding language model providers since
[11:05] day one gives me more confidence that if
[11:07] I had to bet on a horse, Claude Code
[11:09] would probably be the horse of choice.
[11:10] Now, even though I&#39;m breaking it down,
[11:12] you might be staring at the screen and
[11:13] saying, &quot;Mark, you said the words code
[11:16] and editor, and both of those words
[11:18] scare me. I don&#39;t know if I&#39;m ready for
[11:20] this yet.&quot; Even if you break down the
[11:21] tutorial amazingly, you do have
[11:23] alternatives. Meaning, we have new tools
[11:26] coming out every day. Let&#39;s say like Gen
[11:28] Spark Super Agent has come up with
[11:30] something that&#39;s called the AI
[11:32] developer, which is basically a very
[11:35] clawed codelike platform that allows you
[11:37] to ask for something as you would on the
[11:40] other platforms I showed you above. And
[11:42] then it will build you a platform with
[11:43] the to-do list style that Claude Code
[11:46] does and it will help you go from zero
[11:49] 30 40% maybe even 100% depending on the
[11:52] complexity of your platform. So if you
[11:53] feel in watching this tutorial that you
[11:55] need something to help you warm up to
[11:57] the ideas I&#39;m about to show you then you
[11:59] always have alternatives like this on
[12:00] the market. And I&#39;m imagining that in
[12:02] the next few months, more and more
[12:05] wrappers around cloud code or things
[12:07] that are very similar to cloud code will
[12:09] come out to make it even more easy to
[12:12] vibe code using this kind of stack. And
[12:14] even with the open- source community,
[12:16] they&#39;ve created something called
[12:17] Claudia, which is a wrapper on top of
[12:20] Cloud Code that allows you to interact
[12:22] with it like you would chatt. So you
[12:24] don&#39;t have to learn the commands and the
[12:26] prompts that I&#39;m about to show you. So
[12:27] there&#39;s different ways that you can
[12:28] deint this for yourself. But I would say
[12:31] that if you learn the source, the root,
[12:33] then you can do whatever you want after,
[12:35] but if you understand the root, then
[12:37] everything that comes out won&#39;t
[12:38] overwhelm you because you can always go
[12:40] back to first principles if need be. Now
[12:42] that pretty much wraps up the yappy part
[12:44] of this miniourse. I&#39;m going to just end
[12:46] off with just defining what cloud code
[12:48] is in terms of what it can do and how
[12:50] you can use it. So in terms of the what,
[12:52] we&#39;ve already gone through that. In
[12:54] terms of the old way, you would have to
[12:56] write Python scripts or use code from
[12:58] chatbt or claude to help you write
[13:00] Python or JavaScript. You might have had
[13:02] to learn these tools or learn how they
[13:04] actually operate and learn what the heck
[13:06] a terminal is. A very ugly white or
[13:09] black box you have to interact with to
[13:11] install things and leverage things
[13:13] called bash, which is basically a
[13:15] language that your computer uses to
[13:17] install and manage files, folders, and
[13:20] packages on your computer. Most
[13:22] importantly, you had to manually either
[13:24] hire someone to debug for you or you had
[13:26] to debug yourself and Google all types
[13:28] of errors. In the new promised land, you
[13:31] can now offload a lot of things to cloud
[13:33] code from writing scripts to building
[13:36] websites to building platforms. And most
[13:39] importantly, I&#39;m going to say this with
[13:40] an underline, you can rebuild a lot of
[13:43] AI tools that you currently pay
[13:45] subscriptions for. Now, I know that&#39;s
[13:46] been a promised fever dream from a lot
[13:48] of the Vibe coding tools out there, but
[13:50] this can actually do it. I have
[13:52] physically built software that I pay for
[13:54] on a monthly basis within Cloud Code and
[13:57] been able to cancel those subscriptions.
[13:59] One small example is I want to rebuild a
[14:02] local transcription tool where I can
[14:04] take voice notes from meetings that I
[14:06] just upload and or I make notes to self
[14:08] and just be able to upload it from my
[14:10] iPhone and autoingest it in a software
[14:13] where I can just drag and drop.
[14:14] Everything gets transcribed locally for
[14:16] security reasons and then it creates a
[14:18] nice little report about that meeting.
[14:20] It took almost 45 minutes for Claude
[14:23] Code to understand where to find
[14:25] transcription software, which is the
[14:27] cheapest to use, what is the fastest way
[14:29] to build it, and most importantly, it
[14:30] figured out how to build the most
[14:32] efficient type of software for my
[14:34] hardware, my RAM, so I can run it really
[14:37] quickly. One of the best features of
[14:38] Cloud Code is it really helps you do the
[14:41] planning process the best way possible.
[14:43] So, help me plan is typically an
[14:46] afterthought with a lot of different
[14:48] platforms, but Claude even has different
[14:50] modes where it&#39;s like planning mode
[14:52] where it uses the most powerful model
[14:54] which is Claude Opus to help you
[14:56] construct a beautiful what are called
[14:58] PRD files which is a product requirement
[15:02] document and it&#39;s the equivalent of you
[15:04] having an AI product manager or project
[15:07] manager depending on what you&#39;re trying
[15:08] to build that comes up with a list of
[15:10] everything that needs to be done, how it
[15:12] should be done and most importantly in
[15:14] what order it should be done. And what&#39;s
[15:16] awesome is whether you are a developer
[15:18] or non-developer, when you lean on AI to
[15:21] help you plan how to build this app, as
[15:23] you build over and over again, you begin
[15:26] to learn by osmosis all of these micro
[15:28] software engineering principles that
[15:30] become familiar to you over time, even
[15:32] if you don&#39;t have an engineering
[15:33] background. If you&#39;re starting from
[15:35] scratch, I fully understand and
[15:36] empathize that it will take maybe longer
[15:39] for you to get used to it. But it&#39;s the
[15:41] fact that you&#39;re actively learning
[15:42] something that typically in the past
[15:44] we&#39;ve had to passively learn through
[15:47] courses, textbooks, and hands-on
[15:50] exercises that were very boxed in. They
[15:52] weren&#39;t real world problems. But in this
[15:54] case, you always can tackle a project
[15:56] that&#39;s going for a real world problem
[15:59] that&#39;s very meaty. And then you break it
[16:01] down with AI and then you build with AI
[16:03] and you&#39;re just there to kind of like
[16:05] manage and give feedback as to whether
[16:06] or not it accomplished the tasks that
[16:08] you originally set up. As a quick
[16:10] summary, Cloud Code is an AI assistant
[16:12] that can help you actually do things
[16:14] from writing code to organizing files to
[16:17] fixing problem and basically having a
[16:19] developer. That definitely costs you
[16:21] sometimes an arm and a leg, but for the
[16:23] most part, it&#39;s pretty efficient if you
[16:25] know how to use it efficiently. One
[16:27] thing you&#39;ll realize from this video is
[16:29] you can use cloud code for pretty much
[16:31] everything, not just web applications,
[16:34] not just vibe coding. If you are unhappy
[16:36] with the world of opening eyes chat GBT
[16:39] after the GPT5 debacle and you want to
[16:41] build your own custom GPTs that really
[16:43] scale, you can build your own version of
[16:46] Chat GBT projects or custom GPTs or even
[16:49] claude projects within cloud code. You
[16:51] can create workflows. You can create
[16:53] automations that don&#39;t even need things
[16:55] like Zapier make.com or edit. You can
[16:58] have the custom code do the automation
[17:00] for you. But if you do want to do other
[17:02] things like for example building
[17:05] something that&#39;s like claude or build a
[17:07] platform like a custom GPT where you can
[17:09] white label it resell it use it for
[17:12] onboarding what what have you you can do
[17:14] that as well and you can even if you&#39;ve
[17:16] seen my other videos let&#39;s say on using
[17:18] cursor within naden mcp to build naden
[17:22] workflows you can do that within cloud
[17:24] code and if you&#39;ve watched my videos
[17:25] before you&#39;ll know that claude is very
[17:27] exceptionally talented at being able to
[17:29] generate what&#39;s called JSON, which is
[17:31] the file structure needed to create
[17:34] these workflows without you having to
[17:36] manually make them yourself. So, without
[17:37] overselling it, Claude Code opens a
[17:39] whole new world in a brand new portal
[17:41] where you can build all kinds of things.
[17:43] And if you&#39;ve seen in other tutorials
[17:44] where someone has to log in and then
[17:47] quickly goes over installing something
[17:49] or installing a software or a package or
[17:52] going back and forth and debating with
[17:54] AI on some weird errors, you can offload
[17:57] a lot of that to cloud code if you allow
[17:59] it access to things like your terminal
[18:01] and your computer. So it can go from
[18:03] planning to realizing what software is
[18:06] needed to installing that software to
[18:08] then resolving any issues that come as a
[18:10] result of trying to install that
[18:12] software and then it gets installed and
[18:14] then used right away. All right. And at
[18:16] this point of the video, if you want to
[18:17] take a quick breather, we&#39;re going to
[18:18] actually try and install Cloud Code on
[18:21] your computer so you can get up and
[18:23] running right away. So what you want to
[18:24] do is first you want to install
[18:26] something called Node.js. So if you go
[18:28] to nodejs.org, there&#39;s going to be a
[18:30] download button. download that and
[18:32] install it on your computer and it
[18:33] should work on every type of operating
[18:35] system like Mac, Windows, and Linux. And
[18:38] step two is you&#39;re going to want to
[18:39] write cla code into Google and then
[18:42] download ideally and you&#39;ll be able to
[18:43] see a download link really quickly. And
[18:45] all we have to do right here is go into
[18:47] something like Google and write cla
[18:50] download and then click on the very
[18:53] first link that pops up that says claude
[18:54] code deep coding at terminal velocity.
[18:57] So we&#39;ll click on this. You&#39;ll have a
[18:59] screen with a very big screenshot and
[19:01] then it will tell you as I said to
[19:03] download NodeJS and then run this
[19:06] command. Now immediately if you are not
[19:09] techsavvy you&#39;ll be asking how do I run
[19:12] this command? You have multiple ways you
[19:14] can do it. You can run it on your
[19:15] computer&#39;s terminal which is ugly but it
[19:18] will work. My personal recommendation,
[19:20] especially if you are technical
[19:22] agnostic, is to download this other
[19:25] software that&#39;s free, free to use at
[19:27] least for a very large amount of
[19:29] requests for someone that&#39;s not a
[19:30] developer called Warp. And although
[19:33] Claude Code eventually can replace Warp
[19:35] for a lot of things, if you&#39;re getting
[19:36] started, Warp is like a terminal that
[19:39] has a language model. So you can
[19:41] literally talk to and say, &quot;Hey, why is
[19:43] this not working?&quot; Or, &quot;What&#39;s this
[19:45] error? Can you try to fix the error?&quot;
[19:46] and come up with a way that we can fix
[19:48] it on my computer. So, if we take this
[19:50] command, I already have Node.js
[19:52] downloaded on my personal computer. We
[19:54] can go into a terminal that looks like
[19:57] this. For you, a terminal could look a
[19:59] lot uglier. Like if we go to here and we
[20:04] go to terminal.
[20:06] If you want this, then go for it. I
[20:09] applaud you. Otherwise, I personally
[20:11] enjoy looking at this where I can just
[20:14] enter this
[20:16] It will see whether I have it installed.
[20:18] I already have it installed. So, it&#39;s
[20:20] going to do whatever makes sense on your
[20:23] computer. And then the next thing, it&#39;ll
[20:25] tell you what to do. So, in this case,
[20:26] it will be npm fund. npm
[20:30] fund. And you can see here as I&#39;m
[20:32] actually typing, it is suggesting what
[20:35] happens next. In this case, it already
[20:37] found it on my computer. There we go.
[20:40] And then you can say right here, this
[20:42] little tab will tell you what&#39;s the
[20:44] natural next thing that you should see
[20:46] or use. In this case, it&#39;s telling me I
[20:49] already have this on my computer. This
[20:50] is already funded. There&#39;s so many
[20:52] things on my computer related to cloud
[20:53] code, so I&#39;m pretty good. But if you&#39;re
[20:55] starting out, it&#39;ll be downloading and
[20:57] pulling stuff on your computer. Once it
[20:59] does that successfully, you&#39;ll be able
[21:01] to go into a terminal, type claude, and
[21:04] similar to a 2000 Nintendo video game,
[21:08] you&#39;ll see a clawed code image pop up.
[21:10] So once again, once you have Node.js,
[21:12] then you&#39;ll see something like this in
[21:14] your terminal cla. And if we actually
[21:16] pop into our terminal, let&#39;s open a new
[21:19] tab and let&#39;s just say claude. This
[21:22] command should start. And if I just say
[21:25] yes, proceed.
[21:28] Now, in my case, I hear a little beep
[21:29] button. In your case, you can see
[21:31] welcome to cloud code. So, this will
[21:33] already look intimidating to a lot of
[21:34] you that don&#39;t like terminals, which is
[21:36] why we want to get out of a terminal as
[21:38] soon as possible, unless you&#39;re
[21:40] comfortable here. And again, if you&#39;re
[21:41] going to choose a terminal, I would
[21:42] probably lean towards warp because at
[21:44] least you have that AI in the background
[21:46] to help you respond to things if you&#39;re
[21:48] confused what to do next. Personally
[21:50] though, I like to use cloud code within
[21:52] cursor. So, I like to have the best of
[21:54] both worlds. And again, most people will
[21:57] say either team A or team B. I&#39;m
[21:59] actually pro both on the same team. And
[22:02] I&#39;ll show you what I mean shortly. Now,
[22:03] one more thing on this side. If it&#39;s
[22:05] your first time logging into Claude Code
[22:06] and you try to actually send the
[22:08] request, it will push you to actually
[22:10] sign into your Anthropic account and
[22:13] register for an account. Now, if you&#39;re
[22:15] on the normal plus plan, I believe for
[22:17] Claude, that&#39;s 20 bucks a month. It will
[22:19] be very limited in terms of what you can
[22:21] do. But if you go to the max plans,
[22:23] which ranges from, I believe, $100 to
[22:26] $200 a month, that&#39;s where you can
[22:28] really push some real usage. But if you
[22:30] just want to be able to tinker and see
[22:32] what it can do, and you&#39;re kind of
[22:33] warming up to the concept, then the $20
[22:35] should be just fine to build a small
[22:38] mini version of a website that you can
[22:40] just demo. So, like I said, you get to
[22:41] choose where Cloud Code can live. And
[22:43] once it is installed on your computer,
[22:45] you can use it wherever you want. So,
[22:47] you can wake up one day and say, you
[22:48] know what, I really don&#39;t like myself
[22:50] today. I&#39;m going to use the terminal to
[22:52] interact with cloud code. On other days,
[22:54] you might feel like you want a warm and
[22:56] cozy environment that&#39;s a bit more
[22:58] sheltered from the dryness of the
[23:00] terminal. In which case, you could use
[23:01] things like VS Code, which is another
[23:03] type of terminal. Uh, Cursor, Windsurf,
[23:07] whatever makes you feel happy and warm
[23:08] and fuzzy inside. In my case, I am a
[23:10] proponent of Cursor and Claude living
[23:13] together in the same ecosystem because
[23:15] there are some benefits that not enough
[23:16] people mention. But again, we&#39;ll get to
[23:18] that later. We&#39;re not going to run
[23:20] before we can crawl. In something like
[23:23] cursor, you can use claude in the
[23:25] terminal. It has its own terminal that
[23:27] we&#39;ll see shortly. And then you can
[23:28] actually download this extension that&#39;s
[23:30] typically designated for VS Code. Again,
[23:33] the other Kodi thingy platform, but in
[23:35] this case, you can use a mini app where
[23:37] it&#39;ll give you a nice little Claude
[23:39] button that you click on every time to
[23:42] spin up a brand new version of Claude
[23:43] Code. Once you have that installed,
[23:45] you&#39;ll be able to not just use it in the
[23:47] terminal of wherever you want. You can
[23:48] use it in the terminal of cursor, but
[23:50] you&#39;ll have this nice and shiny button
[23:52] that will just create a new tab where it
[23:56] is larger. It&#39;s easier to see. It&#39;s
[23:58] easier to manipulate. And then you can
[23:59] even have cursor on the side here by
[24:02] clicking on this tab. So, you can
[24:04] actually have access to two different
[24:06] AIs. Claude code is looking at your
[24:07] codebase and creating it, but so is
[24:09] cursor. And again as you build you&#39;ll
[24:12] see all kinds of benefits from having
[24:14] both side by side. Now if you want to go
[24:16] down this route then all you have to do
[24:17] is step one install cursor. So you can
[24:20] do that by literally going to Google
[24:22] cursor install. It could also be
[24:26] windsurf whatever you want. In this case
[24:29] all I have to do is just download it on
[24:31] my Mac. It&#39;ll be equivalent for I think
[24:33] Windows as well. And then you can just
[24:35] add the extension that I showed you
[24:37] right there. And then now you have
[24:38] double AI at your fingertips. Now in my
[24:40] case again I have it already set up but
[24:42] you can see here when you click on this
[24:44] button you see this claude code for VS
[24:47] code. All I have to do is install this
[24:49] and then it pops this up and I just
[24:52] basically installed it. And then you can
[24:53] see I already have this button to run
[24:55] cloud code. So if I want to be able to
[24:56] spin up a brand new session, you can
[24:58] actually spin up multiple sessions. You
[25:00] can have multiple cloud code sessions
[25:03] running in parallel on top of another
[25:05] sidebar here. But for now, just to make
[25:08] it nice and clean, we&#39;ll close this.
[25:10] We&#39;ll close this. So that&#39;s an example
[25:12] of a Claude Co session ready to go. And
[25:15] like I said, if you click on this
[25:16] button, the toggle panel, this will
[25:19] create and show another terminal where
[25:22] we&#39;ve already initiated cloud code as
[25:24] well. So you get to choose how you
[25:26] interact with it and how you use it. You
[25:28] can go from a normal terminal to one
[25:30] where you&#39;re using cloud code. You can
[25:32] have multiple where you can create a
[25:33] brand new terminal. And again, this is
[25:36] what you would do. You&#39;d write claud
[25:38] right here. And then this will show the
[25:41] initial image telling you what you can
[25:43] do and what you can&#39;t do. And this is
[25:45] how you know, all right, we&#39;re ready to
[25:46] start rocking and rolling with cloud
[25:48] code. So on my end here, you can see I
[25:50] already have a head start. I already
[25:51] have some files ready to go. On your
[25:53] end, this will be completely blank. So
[25:56] if we go into file, new window, you&#39;ll
[25:59] see something that looks closer to this
[26:01] where you might look at it, you don&#39;t
[26:03] even have recent projects. It looks
[26:04] purely blank and you don&#39;t really know
[26:06] where to go from here. All we have to do
[26:09] really to get started is click on open
[26:11] project. Go onto desktop and then go on
[26:15] to in this case I&#39;m going to go into my
[26:17] YouTube folder to create a new folder.
[26:19] I&#39;m going to call this YouTube demo CC
[26:22] CC for cloud code. We&#39;ll click on create
[26:26] open.
[26:28] And then this should give me a blank
[26:30] Virgin environment with no files. And
[26:33] this is exactly what yours will look
[26:34] like, especially before you install
[26:36] something like Claude Code. And again,
[26:38] to get started from zero, you can just
[26:39] click on this toggle panel. And there&#39;s
[26:42] a command we&#39;re going to run right now.
[26:43] It&#39;s called Claude Run Dangerously. If
[26:47] you&#39;re a complete noob, then I don&#39;t
[26:49] recommend you necessarily use it. But if
[26:51] you&#39;re just trying to see how far you
[26:53] can push it from the get-go, then you
[26:54] can just copy paste it. And basically,
[26:56] it will not ask you permission to do
[26:58] everything. For learning purposes, you
[27:00] should just write here clawed again to
[27:02] initiate a session. But if you want to
[27:04] live on the edge and just ask it a
[27:06] oneshot request and see how far it can
[27:09] go, then using the claw dangerously
[27:11] option is probably the best way to go.
[27:12] Now, in terms of upskilling yourself on
[27:14] the fly, I&#39;m going to definitely have
[27:16] the mega guide available for you in the
[27:18] first link in description below. But if
[27:20] you want to be able to be nimble, then
[27:22] use something like a perplexity. Even
[27:24] the free plan would be sufficient enough
[27:25] and say, &quot;Hey, what&#39;s the command to
[27:28] basically use claude code and not be
[27:30] asked permissions?&quot; I think it&#39;s called
[27:32] Claude dangerously something. And then
[27:34] you can basically use the quick search,
[27:37] it will give you the command. There we
[27:38] go. Claude skip dangerously or
[27:40] dangerously skip permissions. And then
[27:43] we paste that over here. And then when
[27:44] we run that, there we go. It is going to
[27:48] acknowledge that. I&#39;ll run it one more
[27:49] time just in case it didn&#39;t get the
[27:51] memo. Actually, I think we should be
[27:52] good to go. We&#39;ll know whether or not
[27:54] it&#39;s working from whether or not it asks
[27:56] us permission a million times. Okay. Can
[27:59] you build me a small mini website for an
[28:02] AI consultancy called prompt advisors?
[28:06] The advisor part is with an E because I
[28:08] couldn&#39;t afford the domain at the time.
[28:09] So, it&#39;s advisor with an E.
[28:13] All right. So, we&#39;re going to send that
[28:15] over and then it&#39;s going to start doing
[28:18] stuff. It&#39;s going to start building
[28:20] files on the lefth hand side. So if
[28:22] you&#39;re intimidated by code, again, you
[28:23] don&#39;t have to worry about really dealing
[28:25] with the code. You&#39;re going to see
[28:27] things being built like assets like HTML
[28:30] files, CSS files for styling, and
[28:32] depending on what you&#39;re trying to
[28:33] build, any relevant files, especially if
[28:35] it&#39;s like a functional web application,
[28:37] you&#39;ll have GS files, JavaScript files,
[28:40] which really help you build backend
[28:42] infrastructure for front end, back end,
[28:45] and builds the entire symbiosis of that
[28:46] app. But like you can see here, it
[28:48] starts doing basically a to-do list as a
[28:50] normal junior software engineer would.
[28:53] Now, we can make this super loaded and
[28:56] supercharged. But right now, behind the
[28:58] scenes, I&#39;m getting these little dings.
[28:59] It&#39;s sending me a feedback loop that
[29:02] things are working and we&#39;re crossing
[29:04] off the to-do list in real time of
[29:06] what&#39;s happening. And you can see it&#39;s
[29:08] actually even created a sample draft of
[29:10] this website as I&#39;m speaking to you. So,
[29:13] you lose nothing by using this kind of
[29:16] platform to be able to vibe code
[29:18] anything from a website to a mini to-do
[29:20] list app to whatever you&#39;re actually
[29:22] looking to build. And by the way, if
[29:23] you&#39;re watching this and you love the
[29:24] way that I break down cloud code and try
[29:27] to make it more digestible for you, I
[29:29] literally have an entire portion of my
[29:31] community that I&#39;m going to be building
[29:33] out over the next few weeks from
[29:34] beginner to intermediate to advanced on
[29:37] how to use cloud code on steroids. In
[29:39] this miniourse, I&#39;ll only have enough
[29:41] time to go through the nuts and bolts of
[29:43] how to get up and running to really make
[29:46] use of the main tools you have at your
[29:47] disposal. But if you want to be able to
[29:49] use it at the proexert level and be in a
[29:52] community of hundreds of other business
[29:53] owners and entrepreneurs, then check out
[29:55] the second link in the description below
[29:57] and you&#39;ll see all kinds of cool stuff
[29:58] there. Anyway, back to the video. Okay,
[30:00] so we&#39;ll use this little platform as our
[30:02] launching pad to learn how to use the
[30:04] different tools at our disposal. And if
[30:06] we go back to the nice little mirror
[30:08] board here, we have some hidden features
[30:10] you want to try. So in cloud code again,
[30:13] you can interact with it just like
[30:15] normal cloud AI or cloud desktop where
[30:17] you can screenshot something and then
[30:20] paste it into the chat and tell it, you
[30:21] know what, this is ugly or these are all
[30:24] the different things that we need to
[30:25] build. And when I mentioned before, one
[30:26] of the best ways to use Claude in a way
[30:28] that you don&#39;t burn your credits really
[30:30] quickly is as you build an understanding
[30:34] of what it&#39;s doing. So if you go back
[30:36] here right now we have a very simple
[30:38] website. We have a HTML file and we have
[30:41] a CSS file. The HTML is responsible for
[30:44] all the content on this website. And the
[30:47] CSS is like the colors, the schema, the
[30:51] fonts, etc. Over time if we start to
[30:53] build a really big codebase, this is
[30:56] where you want to start doing things
[30:57] like at. So now you can start to say,
[31:00] you know what, I actually just want to
[31:02] look at index html. So, I&#39;ll just go
[31:05] down here and say HTML. And now it knows
[31:08] that I just want to target this one
[31:10] file. And right now, this doesn&#39;t matter
[31:12] because we have such a small tiny
[31:14] codebase. But if you&#39;re building
[31:15] something more ambitious, you&#39;ll have
[31:17] five, 10, maybe a hundred files
[31:20] eventually in your codebase. And if you
[31:22] don&#39;t really specify it and just leave
[31:23] it to the AI to guess whether or not
[31:25] it&#39;s one particular file or many, it
[31:28] might mistakenly go through tons of
[31:30] different files, ram that into your
[31:32] context window, which is going to lower
[31:34] the bandwidth of the AI to focus on what
[31:37] you&#39;re trying to do. So even from the
[31:38] beginning, it&#39;s good to keep the AI
[31:40] focused. So at the beginning, if you
[31:42] don&#39;t even understand what these files
[31:44] are and you have no bearing on which one
[31:47] it should look at, then don&#39;t worry
[31:48] about this for now. But as this scales,
[31:50] as this gets bigger, it&#39;s a good skill
[31:52] to have in your back pocket. Next one
[31:54] here, one of my favorite modes in any
[31:55] app, whether it&#39;s a lovable, a bold,
[31:58] chat, GBT, is some form of ask mode
[32:01] where I just ask a question without any
[32:03] kind of code being written. So in cloud
[32:06] code, you accomplish that by clicking on
[32:09] shift tab. Notice how the bottom here is
[32:12] switching. So it says right now accept
[32:14] edits is on. Meaning if it has some form
[32:16] of edit, it won&#39;t ask me for permission
[32:18] to approve that edit. It will just go
[32:20] through with it. And there&#39;s this
[32:22] different mode here that I love that&#39;s
[32:24] called planning mode. So planning mode
[32:26] is very powerful because we can now have
[32:28] a back and forth and understand and
[32:30] build a strategy around what we&#39;re going
[32:32] to plan before we actually build it. And
[32:35] what&#39;s actually useful is you want to
[32:36] double check what kind of model are you
[32:38] even using here. So if you do slash, you
[32:42] can see right now a little preview of
[32:44] what I&#39;ll go through after which are
[32:45] these slash commands. You have all kinds
[32:47] of commands at your disposal. If I
[32:49] select model, it will show me the
[32:52] default. So the recommended one is opus
[32:55] 4.1 for up to 50% of usage requests or
[32:58] usage limits rather. Otherwise, use
[33:01] sonnet. And then you can use a new mode
[33:05] that&#39;s called opus plan mode. This is a
[33:07] really cool mode. So use Opus 4.1 in
[33:10] plan mode and basically use the most
[33:13] powerful slashexpensive language model
[33:16] to help you build a plan. And that&#39;s
[33:18] usually, by the way, the only time I
[33:19] truly use Opus because Opus will burn
[33:22] down your credits quicker than a flame
[33:25] can burn down a house of hay. So bearing
[33:27] that in mind, even though this is the
[33:29] default, I typically just use Sonnet,
[33:32] especially now, like I said before,
[33:33] there&#39;s a million context window with
[33:35] Sonnet. So keeping track of the codebase
[33:38] using more of the context of the
[33:40] codebase without risking hallucination,
[33:43] as much is a lot easier to accomplish
[33:45] with sonnet. But in this case, because I
[33:47] want to be able to plan our next step,
[33:50] we can click on four. And now we are in
[33:52] set model to opus plan mode. And now I
[33:55] can say I don&#39;t really like the
[33:57] direction of where the website&#39;s going.
[34:00] I feel like it&#39;s very bland, cookie
[34:02] cutter. It&#39;s not using modern design. I
[34:05] really want to rethink the way we lay it
[34:07] out so we would look different. We don&#39;t
[34:08] look like some average AI consultancy
[34:10] firm that&#39;s broke and doesn&#39;t have a way
[34:13] to properly vibe code a website. And
[34:16] what I&#39;m using to dictate, by the way,
[34:18] is called Whisper Flow. There&#39;s all
[34:19] kinds of tools now you can use like Aqua
[34:22] and Mac Whisper, but this is the one I
[34:24] like to use because it learns how I
[34:26] speak over time. And it does help you
[34:28] remove yet another friction point to
[34:30] vibe code because if the AI is doing the
[34:33] thinking, AI is doing the coding and
[34:35] you&#39;re just dictating what&#39;s working and
[34:36] not working, your ability to move
[34:38] quickly becomes really easy. Now, we&#39;ll
[34:40] send this request over and you&#39;ll notice
[34:42] after this runs how detailed the
[34:44] response is going to be because we have
[34:46] a heavy hitter language model taking the
[34:48] helm at being able to build the plan.
[34:50] Now, even though we said the clawed
[34:52] dangerously thing, it will still ask us
[34:54] for the first time to use things like
[34:56] tool use. In this case, it wants to use
[34:58] web search, which is super cool because
[35:00] again, you get the GPT or cloud AI
[35:03] experience of doing web search within
[35:05] this terminal, which is why you can do
[35:07] almost everything here, especially when
[35:10] we add MCPS, but you have to wait for
[35:12] that next part. So, in this case, I&#39;m
[35:14] going to say yes. So, I&#39;ll click down.
[35:17] I&#39;ll click yes. And then it will start
[35:19] doing a web search. And you&#39;ll notice
[35:21] right away, it creates this folder,
[35:23] acloud folder. When I open this up, this
[35:25] is going to have something called a
[35:26] settings.local.json
[35:29] file. And if I give you a little
[35:30] preview, it&#39;s going to be completely
[35:32] empty because we have again a virgin
[35:34] breakdown. But what it&#39;s going to do is
[35:36] document in real time all of our
[35:39] preferences that we&#39;re explaining to
[35:42] Claude Code as we&#39;re building this
[35:43] platform or this project in this case.
[35:45] So, it&#39;s basically creating a little
[35:47] note to self. Okay, Mark seems to be
[35:50] okay with me using web search and he
[35:52] doesn&#39;t want me to bother him again. So,
[35:54] it looks like this is on the allow list.
[35:56] And over time, you can start to really
[35:57] manipulate this to build the perfect
[36:00] environment or workspace that works for
[36:02] you because what is optimal for me might
[36:05] not be optimal for you. But the idea is
[36:07] you can talk to it and tell it, you know
[36:09] what, I don&#39;t like you doing this or I
[36:11] wish you&#39;d ask me this less and it will
[36:13] actually create a note to self to help
[36:14] you with that. So, it comes up with a
[36:16] full website redesign for the website.
[36:19] Right. So now it&#39;s going through things
[36:20] like how the hero section should be
[36:21] imagined, how the navigation should be
[36:23] imagined, visual language, interactive
[36:25] elements, typography system, layout and
[36:28] innovation, all of this. Now even
[36:30] recommending a new text stack. So
[36:33] remember before how we started out with
[36:34] just an HTML and a CSS file. It&#39;s now
[36:38] creating these other types of files. And
[36:40] now do you have to know what they mean?
[36:42] No. But it&#39;s actually really good
[36:44] practice to just read what they mean in
[36:45] plain English because like I said
[36:47] before, even if you&#39;re beginning from
[36:49] zero and you have minimal to no
[36:51] knowledge about technical expertise
[36:53] stuff, this will teach you at least
[36:55] subconsciously or consciously and the
[36:57] more you build, the more you&#39;re going to
[36:58] learn. So in this case, I&#39;m going to
[37:00] click on auto accept edits. So I&#39;m going
[37:04] to click on keep planning for a second.
[37:05] Okay.
[37:07] Now, I want to do this just so I can do
[37:09] shift tab, go back into bypass
[37:12] permissions, and then just say, let&#39;s
[37:15] execute this entire plan. Don&#39;t bother
[37:17] me until everything&#39;s implemented step
[37:19] by step, and then let me know when
[37:21] you&#39;re done, and I&#39;ll take a look.
[37:23] Right? So, I&#39;m speaking to it like an
[37:25] employee. And trust me, this can become
[37:28] a much richer conversation. I can start
[37:30] telling it, you know what, spin up a sub
[37:32] agent that has a specialty in UI or UX
[37:36] design. Spin up an agent that acts as a
[37:38] project manager to keep you on track to
[37:40] make sure you tick off every single
[37:42] thing. Spin up another thing. So, the
[37:45] sky&#39;s is the limit in terms of how rich
[37:47] of a conversation I can have. But for
[37:48] now, we&#39;re just going to inch our way to
[37:51] showing you what it can do with just a
[37:52] few commands, let alone all the
[37:54] different tools and bells and whistles
[37:56] you can use to take this to the next
[37:58] level. All right. And after 10 minutes,
[38:00] it updated all of these to-dos. It
[38:01] completed and we got a brand new,
[38:04] apparently a premium consulting website.
[38:06] And you&#39;ll see the difference is night
[38:08] and day where we have this cursor thing
[38:10] that floats around. Now, the actual text
[38:12] looks a bit weird, which will give us a
[38:14] good opportunity to be able to actually
[38:16] uh give some feedback. You can see it
[38:18] actually functions.
[38:20] Things look pretty. As you hover over,
[38:23] definitely is not a normal website
[38:25] that&#39;s out of the box. We have some
[38:27] stats here. Definitely looks a lot
[38:29] better. Now, what we could do is let&#39;s
[38:32] just click on the menu. Okay, looks very
[38:34] clean. Does it actually go to a services
[38:36] tab? Very cool. We can go and give some
[38:39] feedback now. But one thing I actually
[38:41] forgot to do was switch the model. So,
[38:43] I&#39;m going to show you one little command
[38:45] here you can run to make sure whether or
[38:46] not you have bankrupted yourself. So if
[38:49] you use this command that&#39;s called npx
[38:51] and then cc cloud code usage at latest,
[38:55] it will give you a full report of how
[38:58] much money you&#39;ve costed anthropic, how
[39:02] much money you spent and what that
[39:04] looked like in terms of a costing
[39:05] standpoint, the most productive days,
[39:08] whether or not you&#39;ve used your cash,
[39:09] meaning are you properly using prior
[39:12] chats to your advantage? Are you just
[39:14] ramming in all kinds of files and using
[39:17] it over and over again? We don&#39;t need
[39:19] to. It&#39;ll also give you an efficiency
[39:21] report. So it&#39;ll say you&#39;re making
[39:23] excellent use of context caching. Cash
[39:25] reads are much cheaper than fresh input
[39:27] tokens. And it&#39;ll give you some more
[39:29] stats here as well. So in this case, I&#39;m
[39:31] going to go back to models because I
[39:33] don&#39;t want to be on the street because
[39:35] of this. So we&#39;ll go to sonnet number
[39:39] three and I&#39;m going to park it at sonnet
[39:41] probably for the rest of this demo. And
[39:44] now what we can do is like I told you,
[39:46] we can screenshot this. Now, if you know
[39:49] what an MCP is, we probably don&#39;t even
[39:52] need to do screenshotting in the future,
[39:54] but for now, we&#39;re going to assume that
[39:55] you have to. I&#39;m literally just going to
[39:57] do commandV. It&#39;s probably uh control C
[40:00] or controlV on a Windows computer. And
[40:04] then I&#39;ll screenshot anything that I
[40:06] think is looks off. For the most part,
[40:09] looks decent. Um,
[40:12] let me just screenshot while I hover
[40:13] over. All right. So, in this case, I can
[40:16] take this save to clipboard. Command V.
[40:19] It&#39;ll paste it in and then I can dictate
[40:21] right into it. Okay. So, it looks a lot
[40:24] better, but I want to be able to improve
[40:26] the text. It looks super weird and funky
[40:28] on the main hero part of the landing
[40:30] page. And when I hover over one of these
[40:32] sections for services, it seems like
[40:34] there&#39;s an overlap of a title and a
[40:36] weird subtitle off the left. And I just
[40:38] want to make it look a lot more crisp.
[40:42] Now, despite the stutter, it should have
[40:44] got most of that. And I can send this
[40:46] over and we&#39;ll come back to the next
[40:48] version of it. And with that change, if
[40:49] I refresh, and now we get this cool
[40:51] little landing page with a loading bar.
[40:53] And then this finally looks like plain
[40:55] English. We have a little tagline. And
[40:57] then we can keep on going from here. But
[40:59] the main gist of this is you can get up
[41:00] and running with what two, three, four
[41:02] prompts. And none of them were technical
[41:05] in nature at all. We offloaded the
[41:07] technicality onto Opus plan mode which
[41:10] made our life way easier. Now to bring
[41:12] us back to conceptual, we&#39;ve gone
[41:14] through the screenshotting the at
[41:16] symbol. I show you really quickly. Now
[41:18] on the at symbol side of things, like I
[41:21] said before, you ideally don&#39;t want AI
[41:24] having to look at each and every file
[41:26] that it&#39;s created over time when it&#39;s
[41:28] responding to a minimal change. Let&#39;s
[41:30] say I said make the website blue themed
[41:33] and now it&#39;s gone through every single
[41:35] file to make that change. Now typically
[41:38] especially cloud models are smart enough
[41:40] to know okay change in color then
[41:42] probably a CSS file but what if you
[41:44] asked for a whole menu of things which I
[41:46] don&#39;t recommend but if you wanted to say
[41:49] do these eight things right those eight
[41:51] things could span 15 different files as
[41:54] you get more familiar with what it&#39;s
[41:55] doing over time you can literally go
[41:57] into ask mode and go to shift tab let&#39;s
[42:00] uh plan mode and say uh walk me through
[42:03] what each file on the sidebar are does
[42:08] and how it contributes to the website
[42:11] we&#39;re building. Right? So now
[42:14] you don&#39;t have an excuse to not
[42:16] understand what these things do because
[42:18] it will break it down for you in plain
[42:19] English. So once you understand what
[42:21] they do, then you can start to at and
[42:24] target them and then you&#39;ll understand
[42:26] what you need to manipulate where. And
[42:27] within a minute it will break down
[42:29] exactly what each file does, how it sets
[42:32] it up, and then you start to become
[42:35] really acquainted with the entire
[42:36] workflow and structure of your folder.
[42:38] And you can even do and give commands
[42:41] like this. Okay, take that entire
[42:43] explanation, create a new folder that&#39;s
[42:46] called a noob_ch checklist and place
[42:49] this as a markdown file in that folder.
[42:51] So now that we have or it has access to
[42:54] your terminal, it means it can not only
[42:56] create files, it can create folders in
[42:58] those files and move those folders
[43:00] around. So this as you keep building
[43:02] will inevitably get messy. You can tell
[43:04] it go and clean everything up, remove
[43:06] all the files that we don&#39;t need to keep
[43:09] things nice and clean and tidy. So, if
[43:11] we submit this, this should be able to
[43:12] create a new folder without me doing
[43:14] anything and store this in that folder
[43:16] for quick reference later. Just like
[43:18] that, it used what I referred to before,
[43:20] the language called bash to create the
[43:23] commands on its own. I didn&#39;t have to
[43:25] hop in a terminal to create the file
[43:28] like we said, create the noob_ch
[43:30] checkcklist folder. And now we have a
[43:32] file here called web architecture.md.
[43:35] And in here, if I just minimize this a
[43:38] bit, you&#39;ll see that it&#39;s the entire
[43:40] structure of what it just communicated
[43:42] to us. And now we have this artifact, an
[43:44] asset. And why this is important to know
[43:46] is, as you&#39;ll see shortly, you&#39;ll be
[43:48] able to create an asset that acts as
[43:50] memory for Claude. So you can basically
[43:52] put all your preference in there in
[43:54] terms of the styles you like, the fonts
[43:57] you like, the way you want it to
[43:58] communicate with you, and you can really
[44:00] play around with that. And by the way,
[44:01] if you want to be able to create a new
[44:03] chat and use the extension we installed
[44:05] earlier, this run cloud code, you can
[44:07] always click on any file on the sidebar
[44:10] and then it&#39;s a good shortcut to be able
[44:11] to open a brand new session. And again,
[44:13] we could do run cloud code dangerously,
[44:17] right? And it&#39;ll understand what we&#39;re
[44:19] trying to do and then we can keep
[44:20] building on the project from here. Now,
[44:22] like I said before, one of the beauties
[44:23] of Claude code is you can start to marry
[44:26] something that&#39;s very native to Claude
[44:28] and the anthropic ecosystem, which are
[44:31] MCP servers. And if you have no clue
[44:33] what those letters mean, imagine an MCP
[44:37] server, which stands for model, context,
[44:40] protocol, as someone knocking on a door
[44:42] and then someone behind the door saying
[44:44] password. You have to give the password
[44:46] to open the door. in that in a very
[44:48] practical case, it&#39;s an API key that you
[44:51] give to a back-end service that allows
[44:53] you to use that service for one
[44:55] particular action. What MCP did is allow
[44:58] you to knock on one door, give the
[45:01] password once, and then it opens all the
[45:03] doors. So, it&#39;s not just write an email,
[45:06] it&#39;s not just draft an email, it is send
[45:09] the email. You can access all of those
[45:11] different actions. It&#39;s get my contacts.
[45:14] And now you can make that request in
[45:16] natural language. And behind the scenes,
[45:18] it takes that request in natural
[45:20] language and then it kicks it off to
[45:22] whatever door that seems to be leading
[45:24] down the path where that action can be
[45:26] executed. And the real power is we can
[45:28] go from one of these doors. And once you
[45:30] get in there, you realize you have a
[45:32] superpower arcade where now you can
[45:34] combine multiple MCP servers. one that
[45:38] maybe comes in to check your work, one
[45:40] that opens a browser to see what your
[45:42] web app looks like. And then you can
[45:44] start to combine these tools or servers
[45:47] with agents, actual agents to use those
[45:50] tools and servers to execute tasks
[45:53] semi-autonomously to possibly fully
[45:55] autonomously. And the goal, of course,
[45:57] is to have a lot of these MCP servers
[46:00] manage themselves. So, all you have to
[46:02] do is find a way to add the MCP server,
[46:05] which again, I&#39;ll show you right away,
[46:07] and you can just use AI to help you give
[46:09] the commands. You don&#39;t have to memorize
[46:10] them in any shape or form. And then once
[46:13] you have them, you just have to speak to
[46:14] Claude and say, &quot;Listen, when we
[46:17] complete these changes, in this case, to
[46:19] our website, I want you to use this MCP
[46:22] server to open up the browser and
[46:25] inspect it yourself. Check your own
[46:26] work.&quot; And now you start to really
[46:28] remove yourself from the equation. And
[46:31] then you can layer on another level
[46:32] where you say, you know what, don&#39;t just
[46:35] use the MCP server. I want to build an
[46:37] agent that&#39;s sole rule is to like do
[46:40] quality assurance testing that uses the
[46:42] server to check its own work. And that&#39;s
[46:44] just one small tease of the type of
[46:46] leverage that you can get using a tool
[46:47] like this. Now, I listed a few of many
[46:50] MCP servers that you can take advantage
[46:52] of. You can use ones like firecrawl
[46:54] which are really good for web scraping
[46:56] to things like exa which is basically
[46:58] like perplexity or web search using AI
[47:01] but specifically for development
[47:03] purposes. And then you have literally
[47:05] one of my favorite which is called
[47:06] playright. It&#39;s a server or a tool, if
[47:10] you want to think about it that way, by
[47:11] Microsoft that allows it to autonomously
[47:14] take control of a browser and click
[47:16] around as you and I would, which gives
[47:19] us the ability in this case to tell it,
[47:20] you know what, go and search and look on
[47:23] the web page that you built and you
[47:25] critique yourself where you think we
[47:27] could close the gap to make this world
[47:29] class. These are example requests of how
[47:30] you&#39;d add it. So, you&#39;d literally just
[47:32] copy paste the request cla
[47:36] xa. There are some really trusted MCPs.
[47:39] And one little disclaimer here is when
[47:41] you add an MCP server, there are now
[47:43] thousands if not hundreds of thousands.
[47:46] So ideally, you want to trust providers
[47:49] that are tried and true. Like if you go
[47:51] to on firecrawl, that&#39;s an established
[47:53] YC company. If you go on Playright, it&#39;s
[47:55] literally by Microsoft. So try and be
[47:58] careful with what tools you add, even if
[48:00] some look really beautiful. And one
[48:02] little extra tip here is if you already
[48:04] use MCP servers and you use them on your
[48:06] cloud desktop, you can use this command
[48:08] that&#39;s called claude MCP add from
[48:10] desktop exactly verbatim. And this will
[48:13] help you import everything that you
[48:15] already have on cloud desktop into cloud
[48:17] code. So huge timesaver tip here. Now
[48:19] just to actually test it out, let&#39;s
[48:20] actually try to add an MCP server. So in
[48:22] this case, I&#39;m going to use one of my
[48:24] favorite ones. So can you find me and
[48:27] write me the command I can copy paste
[48:29] into cloud code that will allow me to
[48:31] use the playright MCP server.
[48:34] Okay, so in this case it should be able
[48:37] to find it pretty quickly. It&#39;s a very
[48:39] popular one. And then there we go.
[48:43] See this is a better version of the
[48:44] command that I had. This will take the
[48:46] latest version of that server. So if I
[48:48] paste this into cloud code, it might ask
[48:52] me for some permissions here.
[48:54] We&#39;ll double check.
[48:56] See, right now it&#39;s writing the bash.
[48:58] I&#39;m going to click on number two. So, it
[49:00] doesn&#39;t bother me again about this
[49:02] particular thing. It&#39;s now going to
[49:03] install this MCP server. And now, within
[49:06] literally seconds, it it&#39;s at our
[49:07] disposal. So, now if I ask it something
[49:10] like, how can we use this MCP server
[49:13] realistically with our web design
[49:15] project? And let&#39;s go into ask mode. So,
[49:17] I&#39;ll do shift tab until we go to ask
[49:19] mode. So, in this case, it actually
[49:21] researches it. It says it&#39;s going to
[49:23] research the current structure of the
[49:25] project. It then goes through every
[49:26] file. It goes to the originating website
[49:29] of the MCP server. It reads through all
[49:32] the lines to familiar familiarize itself
[49:35] with it. And then it says based on my
[49:37] analysis of your web design project.
[49:38] Here are realistic ways to use it. So
[49:41] cross browser compatibility testing,
[49:43] responsive design validation, form
[49:46] functionality testing. So this is where
[49:48] I said it can take control of a browser
[49:51] user experience analysis and then
[49:54] content management. So these are
[49:55] examples of many things it can do and I
[49:58] think that it created examples of like a
[50:00] test for a contact form. So it&#39;s showing
[50:03] me not just telling me exactly what it
[50:05] can use it for. And literally as we
[50:07] speak it went from just an idea to
[50:09] initiative. So I did auto accept mode
[50:12] instead of plan mode. So that&#39;s why it
[50:14] jumped the gun. But it&#39;s already going
[50:16] through, it&#39;s spinning up the actual
[50:18] browser and going through the back and
[50:21] forth on the different to-dos. And it&#39;s
[50:24] going to come back with some form of
[50:25] report on how well it&#39;s done so far. And
[50:27] without me even telling it to, it
[50:28] created a series of tests that it can
[50:31] use to check the website each and every
[50:34] single time we make an update. So now it
[50:36] will conduct these sites to test
[50:38] different things like the navigation,
[50:40] the contact form, the performance, the
[50:43] responsive testing, and as well as
[50:45] visual regression, meaning it will
[50:47] actually look at it and see do things
[50:49] look good. And if I scroll back down
[50:51] here until we get to the checklist,
[50:54] you&#39;ll see it&#39;s come up with things like
[50:57] uh complete testing files, like we said
[50:59] before, cross browser configuration,
[51:02] professional documentation, and then
[51:04] it&#39;ll tell you realistic benefits for
[51:06] your project. And this is where, for
[51:08] example, it might make sense to spin up
[51:10] a little. But let&#39;s add one more MCP for
[51:14] good measure. So let&#39;s add Exa which
[51:17] again is a version of Perplexity and
[51:20] it&#39;s a lot richer than web search. So it
[51:22] can do a lot more targeted searching on
[51:24] different components. So let&#39;s say I
[51:26] want to say okay I want to add one more
[51:28] MCV server. I want to add the exa XA MCP
[51:33] server that will help me search the web
[51:34] really easily. Can you create another
[51:36] command I can copy paste in the cloud
[51:38] code. So if we send that over right here
[51:41] it&#39;s going to go into the repo. I can
[51:44] already see it. And then now we&#39;ll need
[51:47] an API key. So in this case, all we have
[51:49] to do is go to Exa. Exam MCP. And then
[51:54] this will take us to the docs. We&#39;ll be
[51:56] able to go to a API dashboard. It should
[51:59] be free for a decent amount of usage. So
[52:02] if we go into API keys, you&#39;ll be able
[52:05] to create one here. And then I will just
[52:08] create one behind the scenes and then
[52:10] take it from here. So, while the XAMCP
[52:12] did install, when I asked it to actually
[52:14] do some research, it kept defaulting to
[52:16] web search. So, I kept going back and
[52:18] forth and then eventually realized that
[52:21] it wasn&#39;t using the XAMCP. So, I&#39;m only
[52:24] scrolling through this. So, you can see
[52:25] that it tried to go through my system,
[52:28] see which MCPs were actually working,
[52:30] which was only the Playright MCP. This
[52:33] is an example of some issues that might
[52:35] pop up while you add MCP servers,
[52:37] especially if there&#39;s some overlap
[52:38] because claude when it hears something
[52:40] like a web search, it will default
[52:42] towards using its own web search. So, we
[52:44] kind of have to override its instinct.
[52:46] You&#39;ll see here it tries to install it,
[52:48] debug it, and then at the very end, it
[52:50] tells us that it seems like the XMCP
[52:53] server is running properly, but to
[52:55] expose the tools, we need to create a
[52:57] new session. So, luckily with this tool,
[53:00] we just click on run cloud code. We can
[53:03] terminate that last session. And what we
[53:05] can do is ask what MCP servers do you
[53:08] have at your disposal? You should have
[53:09] two. You should have the Playright MCP
[53:12] and you should have the exam MCP. Just
[53:14] make sure you&#39;re fully connected to
[53:15] both. So when we send that off, we
[53:16] should hopefully get a report that both
[53:18] are healthy. And luckily on second try,
[53:20] we see that here it&#39;s looking at the MCP
[53:22] health after I asked it. It sees
[53:24] seemingly only the playright MCP. But
[53:27] then when I ask it, do you have access
[53:28] for sure to Exa? I can visually see that
[53:31] has access to these specific things. I
[53:33] can do deep research web search. So now
[53:36] if I ask it, okay, let&#39;s conduct some
[53:38] web search just using Exa, nothing else,
[53:42] not your standard web search to go and
[53:44] look for the best practices for building
[53:46] a very pretty version of the current
[53:48] website we have. So now if we send that
[53:51] over, fingers crossed, we should see it
[53:54] use not normal web search, but the Exa
[53:57] MCP server. So now it&#39;s popping this up.
[53:59] I&#39;m already getting a good feedback loop
[54:01] here. So if I click on number two one,
[54:04] it shouldn&#39;t ask me again. And now I can
[54:06] physically see. Perfect. We&#39;re using
[54:09] this MCP server. And assuming that my
[54:11] API key is good to go, we should be off
[54:14] to the races. We have eight results from
[54:16] what I can see. Now it&#39;s going to go
[54:18] through the results. This is the request
[54:21] ID and this is basically what it&#39;s
[54:23] searching. and we&#39;ll get back some form
[54:25] of response that it will parse out and
[54:27] basically put on a silver platter for us
[54:29] as to what&#39;s important. And just like
[54:30] that, it comes up with the visual design
[54:32] trends, layout interaction, and pretty
[54:34] much this is how you build with MCPS.
[54:37] Sometimes, some will be really easy.
[54:39] It&#39;ll be one command and you&#39;re off to
[54:41] the races, but other ones you want to
[54:42] double and triple check that it&#39;s
[54:44] actually working. And if it&#39;s not
[54:46] working, but it seems like it&#39;s actually
[54:47] installed, then you typically have to
[54:49] open a brand new session and close the
[54:51] current one that you&#39;re using. Now, it
[54:52] might seem that I&#39;ve dwelled on this MCP
[54:54] part, but it&#39;s super important because I
[54:56] have like 15 that I&#39;m using. There&#39;s
[54:58] some really, really powerful ones. Like
[55:00] for example, there&#39;s one called cipher
[55:02] that I&#39;m showing my community where you
[55:04] can have memory of different parts of
[55:07] your conversation so that every single
[55:08] time you start a conversation, you can
[55:11] reference this vector database that has
[55:13] access to all kinds of information about
[55:15] how you like to build projects, what is
[55:18] your style of design that you like and
[55:20] you can start to build artifacts that
[55:21] persist not just from one project to
[55:24] another but anywhere where you can hit
[55:26] this open-source open memory database.
[55:28] Now moving on coming to the complete
[55:31] setup. So we&#39;re going to have this file
[55:34] called a claude MD file. And the claude
[55:36] MD file acts as a control center a
[55:39] command center. This is where general
[55:42] concepts and ideas come into play to
[55:44] build the proper command center for
[55:46] where Claude can look at and be like
[55:48] okay this is how Mark likes to build
[55:51] certain infrastructure at least for this
[55:52] project. Which is different from
[55:54] persistent memory where it&#39;s more
[55:56] evergreen. The claw MD file is really
[55:58] temporal for this specific project what
[56:01] we&#39;re looking to do. Can you use the
[56:03] same MD file in other projects?
[56:06] Absolutely. It&#39;s more so you can make it
[56:09] specific to the project you&#39;re building
[56:10] in. And I&#39;ll finally show you how we can
[56:12] use the symbiosis of using cursor and
[56:15] cloud code in the same zone or ecosystem
[56:18] to have it help us with this specific
[56:20] task. So now we can actually expand the
[56:23] panel and expose cursor. What&#39;s cool is
[56:26] it&#39;s kind of like having a doctor with a
[56:27] second opinion. I can go to Dr. GPT5
[56:33] low and then go into ask mode and you
[56:37] know what you can even go into agent
[56:39] mode and say can you go search the web
[56:41] for the best practices for creating a
[56:43] claude.md file for a claude code project
[56:47] and then we&#39;ll send that over and then
[56:49] we&#39;ll send this right there and you can
[56:51] see here we have a second opinion since
[56:54] cursor also has access to the exact same
[56:56] codebase so it can unbiasedly look at
[57:00] what&#39;s happening and give us
[57:01] recommendations and it can also execute
[57:03] web search using the old-fashioned
[57:05] version of web search and it can come up
[57:06] with key principles. Now I&#39;m just
[57:09] getting it to do this here. So we have
[57:12] it in memory. So now when I ask it the
[57:14] next request which is can you create the
[57:16] best MD file for maintaining the design
[57:20] principles that we need to make this
[57:21] world class. So I&#39;ll actually ask it now
[57:24] in agent mode. I can use cloud forset uh
[57:27] non-max version. Can you create a MD
[57:30] file, a claw.md file specifically with
[57:34] all the best principles and practices
[57:36] that this project should adhere to to
[57:38] increase the likelihood that we have
[57:39] success in the project in terms of
[57:41] design, in terms of the look and feel,
[57:43] and most importantly creating a good
[57:45] high converting landing page. So in this
[57:49] case again showing you an example you
[57:51] could completely create this exact
[57:55] request in plan mode in cloud code but
[57:57] it&#39;s cool to have two AIs at your
[58:00] disposal. One with really virgin eyes
[58:02] that&#39;s not really u muddied by any of
[58:05] the context window or the context in
[58:07] general of the conversation at hand and
[58:09] then it can act as your mini co-pilot
[58:12] and it can also do things meaning it can
[58:13] actually create this MD file. Now, one
[58:16] thing I need to correct here is it
[58:17] created some weird name for the file.
[58:19] So, I just called it cloud MD again. And
[58:21] then now it&#39;s going through, it&#39;s
[58:23] creating a checklist. There we go. And
[58:25] then it&#39;ll actually write the best
[58:27] principles that we can obviously edit
[58:29] after the fact. But at least we have
[58:30] some form of reference point or command
[58:33] center to operate from. And just like
[58:34] that, it&#39;s created the MD file. It&#39;s
[58:37] summarizing here at a high level what
[58:39] it&#39;s done. But I can actually close this
[58:41] for now. And we can doubleclick on this
[58:44] MD file. and let&#39;s bring bring it to the
[58:47] forefront. And you can see right here it
[58:50] has a breakdown of the mission, the
[58:52] target audience, the core objectives,
[58:53] the front end, the color palette,
[58:56] typography, and this just gives you a
[58:58] small taste of how detailed you can make
[59:01] the IMD file. Number one. Number two,
[59:04] that you don&#39;t have to do a lot of these
[59:05] things yourself. So in terms of
[59:07] organizing, in terms of creating the
[59:08] proper structure, all of this can be
[59:10] offloaded onto the AI, whether it&#39;s
[59:13] cloud code itself or your friendly
[59:15] co-pilot waiting for you on the right
[59:16] hand side. So that&#39;s the MD file. In
[59:19] terms of finally, this word agents
[59:21] that&#39;s so amorphous and hard to really
[59:23] pin down, you can spin up agents in the
[59:25] same type of slash command that we used
[59:28] to add an MCP server. Now, your AI team
[59:31] can be whatever you think. Now,
[59:32] typically a lot of tutorials go hog wild
[59:35] and add like 10 or 15 so that they can
[59:38] say, &quot;I built an entire team of agents
[59:40] to do my job for me. Really good
[59:42] clickbait, great click-through rate.&quot;
[59:44] But in terms of practical AI building,
[59:47] probably not what you want to optimize
[59:48] for because especially if you are budget
[59:51] constrained and you don&#39;t have $200 to
[59:53] pay on a max plan, then you probably
[59:55] don&#39;t want to spend hundreds of dollars
[59:57] with like seven to 10 agents doing the
[60:00] job of potentially three or four or even
[60:03] one agent. So you want to practically
[60:05] look at your project as if you have
[60:07] $10,000 in budget and you can only hire
[60:09] one or two employees. If you had to hire
[60:12] one or two employees that can
[60:13] technically wear multiple hats, start
[60:15] there. And as you hit natural
[60:17] constraints where everything&#39;s taking a
[60:20] while and it&#39;s spinning and it&#39;s
[60:22] spending, then maybe you can expand and
[60:24] delegate to subtasks. It&#39;s just really
[60:27] important that you don&#39;t use agents for
[60:29] the fun of telling other people that
[60:31] you&#39;re using agents. Ideally, use cloud
[60:34] code the way I&#39;m doing it right now,
[60:35] which is pretty linear in nature, as you
[60:38] want different tasks to happen in
[60:40] parallel, like we alluded to at the very
[60:42] beginning. That&#39;s where it makes sense
[60:43] to spin up a couple different agents and
[60:45] say, you are the project manager. You
[60:48] make sure that the to-do lists are very
[60:50] crisp and detailed and you are the UI or
[60:53] UX designer or both in one and you make
[60:56] sure that whatever we create we do
[60:58] what&#39;s called we spin up a local host
[61:00] which is basically spinning up that
[61:01] website on our uh desktop computer and
[61:04] you audit it and you can use an MCP
[61:07] server like the playright MCP to
[61:09] actually go and review the site come
[61:11] back with a report tell the project
[61:13] manager what needs to be changed and
[61:14] then do that. That&#39;s where you start to
[61:16] build some real leverage in this
[61:18] workflow where if you let it run now
[61:20] autonomously, these agents communicate
[61:22] with each other and they work together
[61:23] to get the job done. Now, if you&#39;re
[61:25] intimidated at the prospect of writing
[61:28] prompts to create these agents, right?
[61:31] You know, I already have your back. So,
[61:33] there is a website that&#39;s called
[61:35] subagents.cc, which is pretty new. And
[61:38] what this brilliant person did is they
[61:41] created a small repository of what
[61:43] different AI agent promps might look
[61:45] like. So if we go into that, let&#39;s go
[61:48] into sub agents.cc
[61:52] and you&#39;ll see that we have a entire
[61:55] repository of different types of agents.
[61:56] So let&#39;s say I care right now about
[61:59] design. So let&#39;s go into uh UI designer.
[62:04] So I can click on preview right here.
[62:06] And this will reveal
[62:08] an entire instruction to build a really
[62:11] solid designer agent. Now, there&#39;s
[62:13] different ways you can install it. You
[62:14] can in use an install command. I like to
[62:17] personally copy the content because I
[62:19] might want to just be able to manipulate
[62:20] it myself. But bottom line, you can get
[62:22] this up and running and done very
[62:25] quickly. So now, this is the magic
[62:27] command. And again, if you want to see
[62:28] all the commands, I&#39;ll go through some
[62:30] of my favorite ones shortly, but we can
[62:32] say slash agents. And now when you click
[62:37] enter it&#39;ll ask you do you want to use
[62:39] the mobile app builder agent we built
[62:41] another project because I stored that in
[62:43] memory or do you want to build a brand
[62:46] new agent so in this case I can say no I
[62:47] want to build a brand new agent and I
[62:49] want to build it not just for my
[62:51] personal use but for this specific
[62:54] project. Okay. And now I want to do
[62:56] either generate with cloud code which
[62:58] you can totally do or you can do a
[63:01] manual configuration. So I&#39;m going to
[63:02] choose the second one. And in this case,
[63:04] I&#39;m just going to paste this prompt that
[63:06] we got and then send it over and
[63:08] downloading it will allow you to
[63:10] manipulate if you so choose. But if you
[63:12] wanted to do it the lazy way, you can
[63:13] click on copy install command and then
[63:16] we can send this over. Otherwise, we&#39;d
[63:19] use slash agents and I&#39;ll show you how
[63:21] we could set it up manually or get
[63:23] clawed to create its own agent. So it
[63:26] initially creates the agent here. What
[63:29] happens is sometimes it creates it as a
[63:30] hidden file, meaning I can visually not
[63:33] see it under the main claude project. So
[63:35] this agent folder didn&#39;t exist
[63:37] initially. Now I like to see it there
[63:39] just so that I can keep track of what
[63:41] agents I have access to. So at the very
[63:43] bottom here, you&#39;ll see that I went
[63:44] through and I told it, can you make sure
[63:46] it&#39;s not hidden and can you place it
[63:48] explicitly in the MD folder? So you can
[63:51] see right here, I want to see it in
[63:52] thecloud folder in this project. And
[63:54] probably what would have been smarter
[63:56] was to actually say at.claude.
[63:59] Okay. Um, show it in this folder because
[64:02] I did go back and forth a few times to
[64:04] actually get it to understand what I&#39;m
[64:06] trying to do. So that&#39;s one example. But
[64:07] let me show you how to spin up an agent
[64:09] a bit easier, a bit faster. So I can
[64:11] also go to agents, manage, create a new
[64:14] agent, and then we&#39;ll click on enter.
[64:17] We&#39;ll click on project and then generate
[64:20] with claude. And then I can just tell it
[64:22] what I want. Okay. Okay, so I want to
[64:24] create a project manager that looks at
[64:26] the current files we have and then based
[64:29] on the feedback that I&#39;m providing as
[64:31] well as the help of the UI designer
[64:33] agent, it decides what tasks need to be
[64:36] done and completed in the proper order
[64:39] and it prioritizes the user experience
[64:42] versus the core content on whatever page
[64:45] or pages we create. So in this case, I
[64:48] give it something that&#39;s decently vague
[64:50] and it basically uses meta prompting to
[64:53] use AI to write a prompt with AI for the
[64:56] AI. So it creates its own next agent.
[64:58] And then it asks me to continue whether
[65:00] I want it for all tools or readonly
[65:02] tools or MCP tools. I&#39;m just going to
[65:04] say all tools. Yeah. And then click on
[65:07] continue. And then it asks me what kind
[65:09] of model do you want to use which is
[65:11] awesome because um you can make it so
[65:13] that inherit from parent which means in
[65:15] plain English if your conversation is
[65:18] using sonnet 4 then the agent will use
[65:20] sonnet 4. But if you want to designate
[65:22] that an agent should get the firepower
[65:24] of opus which in this case for a project
[65:27] manager might make sense if it&#39;s in
[65:29] planning mode then maybe we let it use
[65:31] opus just for that particular agent. And
[65:34] the next thing it asks you is to create
[65:35] a color so that when you see these
[65:37] little dots here on the left hand side,
[65:40] you&#39;ll know which agent is being
[65:42] executed when based on that particular
[65:44] color. So if I go back into here, let&#39;s
[65:47] make it something like purple. Okay. And
[65:50] now it comes up with a name, the project
[65:52] task orchestrator. It walks you through
[65:54] exactly where the file is. So if I open
[65:57] this up, right now we just have
[65:58] designer. Now it&#39;s behind the scenes,
[66:00] but we can also make it apparent here.
[66:02] But in this case, I think we should be
[66:04] good to go. And then after I click on
[66:07] enter now, you can see now it goes from
[66:10] behind the scenes to right here. And we
[66:12] have access to this agent. And you can
[66:14] see right here we have access to the UI
[66:16] designer agent. And we have the project
[66:19] task orchestrator agent. And all we have
[66:21] to do now is just invoke them. If I
[66:23] click on escape here, we don&#39;t need to
[66:25] do this anymore. We can just have a
[66:27] normal conversation and say for this
[66:29] next task I want you to call on this
[66:32] first project manager to help us plan it
[66:34] out and then I want the project manager
[66:36] to work with the UI designer to do XYZ.
[66:39] And this is really where you start to
[66:40] get real leverage. All right, so take
[66:42] another breather. We&#39;re almost there for
[66:44] at least this iteration of the course.
[66:46] And by the way, if you&#39;re enjoying this
[66:47] and this is helpful for you, I&#39;m
[66:49] definitely going on a slower speed than
[66:51] I usually would. But if this is making
[66:53] things more crystal clear and more
[66:55] approachable, please let me know down in
[66:56] the comments below. That will probably
[66:58] motivate me to make a part two for this
[67:00] course at some point where I go a little
[67:02] bit deeper on the extra bells and
[67:04] whistles we can use to keep adding more
[67:06] leverage and more firepower to this
[67:08] build. Okay, so the first zone here is
[67:11] just looking more on slash commands. So
[67:13] in terms of core slash commands, we have
[67:15] some basic ones and we have some
[67:17] advanced ones. And what&#39;s cool is you
[67:19] can even build your own slash commands
[67:21] by telling Claude to do it for you. So
[67:24] in this case, we have commands like
[67:27] claude, which is literally just to get
[67:28] it started, especially if you&#39;re
[67:29] starting a brand new terminal session.
[67:32] We also have claude dangerously skip
[67:34] perms, which basically stands for go on
[67:37] yolo mode, which again, if you&#39;re
[67:39] building something very minimal and it&#39;s
[67:41] not too dangerous, then you can just use
[67:44] it. Because if you&#39;re building a basic
[67:46] website prototype, there&#39;s only so many
[67:48] things that can go wrong. But if you&#39;re
[67:50] building something in production or
[67:51] something that&#39;s very client-f facing or
[67:52] you&#39;re dealing with client confidential
[67:54] data, highly recommend you don&#39;t use
[67:57] this unless you know what you&#39;re doing.
[67:58] And on this side, we have a lot of the
[68:00] common commands. So we have /clear,
[68:02] which creates a new conversation. We
[68:04] have compact, which basically creates a
[68:07] compressed version of your current chat.
[68:09] So, if you&#39;re in the middle or the heat
[68:11] of actually building something, then
[68:13] this will allow you to just summarize
[68:15] the conversation to keep the
[68:16] conversation going and minimize the
[68:18] amount of context window being used
[68:20] actively in that conversation. If you
[68:22] actually do slashinit, it will
[68:24] autocreate an MD file to familiarize
[68:27] itself and document what&#39;s happening in
[68:30] the current project. Obviously, you can
[68:32] manipulate it after the fact, but if you
[68:34] want a quick way to do that, that&#39;s one
[68:35] of the best ways. There&#39;s more
[68:36] foundational ones like slashexit which
[68:39] is basically quiz the session. You can
[68:40] alternatively just leave or click the X
[68:43] button on the session. This one is
[68:46] wildly used which is slashres. And a lot
[68:49] of folks that use this basically assume
[68:52] that it&#39;s it&#39;s best to be able to resume
[68:55] your last conversation so that the AI
[68:57] has context. So while this seems very
[68:59] rational and logical in practice, I&#39;ve
[69:02] noticed that this leads to a lot of
[69:03] hallucination happening in subsequent
[69:06] sessions that you have with cloud code.
[69:08] So if it were me and what I do is I
[69:10] always will create some form of artifact
[69:12] of the conversation either through a
[69:15] memory MCP server or through creating my
[69:18] own file that summarizes what&#39;s happened
[69:20] in the conversation. So let me show you
[69:22] what I mean. So, if we jump in here, we
[69:23] could say a request like, okay, go
[69:25] through this entire conversation and go
[69:28] through the back and forth that we had
[69:29] and basically summarize the crux of what
[69:32] I&#39;m looking to build. What is the
[69:34] premise of this project and where we&#39;ve
[69:36] left off in terms of action items and
[69:38] where you think it would make the most
[69:40] sense to move forward assuming that my
[69:42] number one intention moving forward is
[69:44] to start to really build out each and
[69:46] every subpage and add some more depth to
[69:48] it and store this as a MD file in the
[69:51] external folder. So in this case I can
[69:54] send that over and now again I put this
[69:57] on claude itself to go through the
[69:59] conversation create an artifact and at
[70:01] least for now doing this the manual way
[70:04] I can use that artifact in the next chat
[70:06] and I can even do an at to reference it
[70:08] and you&#39;ll see here it created the file
[70:10] that has the project premise where we
[70:12] left off and I actually created a folder
[70:14] called external. Now I did mean external
[70:17] folder like this where I drag it outside
[70:19] but I can just move it myself if I want
[70:21] to. I don&#39;t have to be lazy. And I can
[70:24] just delete this folder. Boom. Boom. And
[70:28] now if I go to project summary and I
[70:30] pull this over just a little bit right
[70:33] here, you can see that it&#39;s a website
[70:35] modernization project summary. So we
[70:37] have the project premise, the research
[70:39] we completed, the layout we currently
[70:41] have, the current status, the next
[70:44] natural step. So a current website audit
[70:46] design system foundation implementation
[70:49] approach. So, we can keep adding on to
[70:51] this. We can tell it to edit it, but you
[70:53] can start to create assets that you
[70:55] basically import or migrate to your next
[70:57] sessions. Are there more efficient ways
[70:59] of doing this? Absolutely. And probably
[71:01] a way more efficient way than using the
[71:03] slashres command. But if you&#39;re starting
[71:05] out, this is a way more efficient way of
[71:08] executing the /resume command. And the
[71:10] last thing here are hooks. Now, hooks
[71:12] are very, very powerful and I would
[71:14] cover them in another video where you
[71:16] can do anything from create a sound
[71:18] every single time one of your agents
[71:20] executes a task, which is actually very
[71:22] helpful, especially if you&#39;re
[71:23] multitasking and you have, let&#39;s say,
[71:25] three, four agents. Each agent could
[71:27] have its own version of a sound. And you
[71:30] could literally tell Claude, &quot;Go and
[71:32] access any default sounds on my computer
[71:35] and use those sounds for different tasks
[71:38] like when something&#39;s completed, when I
[71:40] submit a message, when you&#39;re thinking
[71:42] about something.&quot; And it&#39;s definitely
[71:43] something I could cover in another
[71:45] video. So, this was the basic version of
[71:47] different controls and slashcomands, but
[71:49] we can go into advanced where we have
[71:52] some newer things that are very helpful.
[71:53] Let&#39;s say like security view output
[71:56] style. And my little Easter egg to you
[71:58] is the fact that again you can create
[72:00] your own versions of these slash
[72:02] commands. So if we go back into cloud
[72:04] code and before we actually do that,
[72:07] this is a little summary. So
[72:08] slashsummarize is something that I
[72:10] personally built as a command that I&#39;ll
[72:12] show you how we can do. We already saw
[72:14] MCP. You can actually do slashmemory to
[72:18] create this MD file to keep track of
[72:21] different editing project conventions or
[72:23] context that you want it to store. And
[72:25] again, you can do that in combination
[72:27] with what I just showed you or just that
[72:29] or just what I just showed you.
[72:30] Completely up to you. At the end of the
[72:32] day, I&#39;m not telling you that there is a
[72:34] right or wrong way to do something. I&#39;m
[72:37] more so giving you the lay of the land
[72:38] so you can make the decision on how you
[72:40] like to organize your own closet. Now,
[72:42] on the first command, if we do
[72:43] slashoutput
[72:46] style,
[72:47] this is a new command you can use. So
[72:50] you can set the output style of how
[72:53] Claude should communicate with you. So
[72:54] in this case, it created its own version
[72:56] of a system prompt essentially of how it
[72:59] should communicate with me in this
[73:00] project based on what it&#39;s seen. So if I
[73:03] go back to output style right here,
[73:06] instead of clicking new, we can go on
[73:08] set output style and I can choose, do I
[73:11] want Claude to be verbose by default,
[73:14] completes coding tasks efficiently, and
[73:16] provides a concise summary? Do I want it
[73:18] to overexlain what&#39;s happening which
[73:20] again if you&#39;re starting out this might
[73:22] be an awesome setting for you to select
[73:24] or do I want to use this new version
[73:26] which is optimized for modern web design
[73:29] projects and you can keep adding and
[73:31] removing as you wish but in this case
[73:33] you can see here learning is if you&#39;re
[73:35] actually trying to learn to code it will
[73:37] give you bite-sized chunks of what it&#39;s
[73:40] doing how it&#39;s doing it and why it&#39;s
[73:42] doing it so you can follow along and
[73:44] most likely try to like implement and
[73:45] ingest what&#39;s happening and this is
[73:47] really one of the small examples of why
[73:50] the cloud ecosystem is doing so well is
[73:53] they&#39;re really looking at how folks are
[73:55] using this platform and what their
[73:57] workflows look like and they&#39;re trying
[73:58] to make it as frictionless as possible
[74:00] to cater to that. And if we do slash
[74:02] security review, this will basically
[74:05] look at your project and audit it for
[74:07] any form of security vulnerabilities
[74:09] before you submit it to production. And
[74:11] this is very helpful because for the
[74:13] average person that is not a cyber
[74:15] security expert, this will not plug
[74:17] every single hole or not cover all your
[74:20] bases, but it will give you a decent
[74:22] understanding of where you could have
[74:23] vulnerabilities in your system, your web
[74:26] application or your website. In terms of
[74:27] plan mode, I&#39;ve already alluded to this
[74:29] before and we use it a couple times
[74:30] where you could use Opus plan mode. And
[74:33] one thing to note is that if you want
[74:35] Claude to think, there&#39;s actually four
[74:37] different versions of thinking. There is
[74:40] think, there&#39;s think hard, think harder,
[74:43] and ultra think. And while this might
[74:45] seem funny, behind the scenes, it
[74:48] actually uses way more tokens to
[74:50] basically reflect comma longer each
[74:53] time. And ultrathink is like if you
[74:55] combine this with opus, you will
[74:57] bankrupt yourself in seconds. So, I
[75:00] don&#39;t recommend you use this, but you
[75:01] actually want to use the uh nomenclature
[75:04] that you see here to accomplish it. Now,
[75:06] to go off on a slight tangent, if you&#39;re
[75:08] still not a big fan of the claw code
[75:12] look and feel of that terminal, then
[75:14] again, you could download something on
[75:15] your computer through warp. You just
[75:17] have to get the repo name called Claudia
[75:20] where it acts like a chat interface
[75:22] where something like think hard harder.
[75:25] You don&#39;t have to memorize this. It&#39;s a
[75:27] part of the front-end platform. And just
[75:28] to give some color, all I did was
[75:30] install and clone this repository of
[75:33] code and it&#39;s called claudia.git. It
[75:36] cloned it on my computer. I told it
[75:38] basically how do I run it? It ran it for
[75:40] me. It downloaded all these different
[75:42] packages and then it spun it up. And you
[75:45] can see here it is running on my
[75:47] computer, Claudia. And this is what it
[75:49] looks like. It&#39;s nothing too fancy, but
[75:51] basically I can click on new projects. I
[75:53] can go to our current YouTube demo. I
[75:56] can click on create new session. And now
[75:58] I can just have a conversation here
[76:00] where I can have a chat experience. I
[76:03] can click on here to choose which model.
[76:05] I can click on here to select which
[76:08] level of thinking I want to choose. So
[76:10] now I&#39;m not restricted to have to
[76:12] remember that textual command. And I can
[76:14] go into let&#39;s say a usage tab and see
[76:16] what it looks like by model, by project,
[76:18] by session instead of memorizing that
[76:21] command I showed you. So I can see here
[76:22] exactly how much I&#39;ve spent on this
[76:25] particular project up until now,
[76:27] especially when we used Opus. That was
[76:28] probably not a good idea. You can see a
[76:30] timeline of when we used the most usage.
[76:32] This is an example of me building an
[76:34] internal tool for my community on cloud
[76:36] code. So I was definitely heavier that
[76:38] day, but this gives you a quicker
[76:40] version and especially on the agent
[76:42] front. You can click on here and
[76:43] actually spin up your agents right here
[76:45] in the project instead of doing it
[76:47] externally. So, if you do want the best
[76:50] of both worlds where you have a
[76:51] front-end product, but you&#39;re still
[76:52] technically using cloud code, then you
[76:54] can absolutely do that. Like I said
[76:56] before, there&#39;s all kinds of things we
[76:58] can do with cloud code. We can implement
[76:59] hook systems for bells, whistles, audio
[77:02] notifications in between different
[77:04] processes. We can tell it how to image
[77:06] process properly depending on what we&#39;re
[77:08] trying to accomplish. We can create new
[77:10] versions of reasoning modes and
[77:12] checkpoint systems. And like I said,
[77:14] this is a preview of what it looks like
[77:16] if you implement hooks where right now
[77:18] in my current stack, I have sounds for
[77:21] completions, for errors, for starting,
[77:23] for stopping, for success, for thinking.
[77:26] So my desktop sounds very noisy during
[77:29] most days, but you can add your own
[77:31] soundtrack for your building process.
[77:34] And I will be able to show you that in a
[77:36] future video. And when it comes to
[77:38] understanding of settings, if you&#39;re not
[77:39] familiar with what JSON is, it is a type
[77:42] of file. It&#39;s called JavaScript object
[77:45] notation. And its data that it stores
[77:47] within it looks a lot like this. So when
[77:50] you add an MCP server, this is what it
[77:52] looks like behind the scenes. Each one&#39;s
[77:54] like a open curly bracket and a closed
[77:56] curly bracket with a command on
[77:58] executing it with the actual name of the
[78:00] MCP server. So behind the scenes on the
[78:03] left hand side in a lot of your projects
[78:06] you&#39;ll eventually see a settings.json
[78:08] file and a local settings.json file
[78:12] anything in the local JSON file will
[78:15] apply to this particular project whereas
[78:18] this one will apply globally to even
[78:20] future projects you spin up. So my hooks
[78:23] and sounds for example is global. So I
[78:26] don&#39;t have to keep creating that set of
[78:27] hooks each and every time. So you can
[78:29] see here on the local side of things in
[78:31] this particular session I said I want
[78:33] you to allow these kinds of requests to
[78:36] run autonomously without you asking me
[78:38] permission. So store that in local
[78:40] settings whereas again if I wanted
[78:41] something to apply to all projects and
[78:44] all sessions moving forward then it
[78:45] would be stored here. And to finish off
[78:47] more conceptually, especially if you are
[78:50] not technical and you&#39;re not a
[78:51] developer, one thing to think about is
[78:53] you want to build what&#39;s called
[78:55] modularly. Kind of like this little
[78:57] clawed mini agent is building with Lego,
[79:00] you want to build one domain at a time.
[79:04] So if you&#39;re working on a website and
[79:05] you want the design to be beautiful,
[79:08] work on that specific session you&#39;re
[79:10] having on the design. Now, if you want
[79:11] to make it functional where you click a
[79:13] series of buttons and it creates some
[79:14] form of automation behind the scenes
[79:16] that takes a lead form and has a little
[79:18] spinny screen and then it actually
[79:20] audits the results and comes back with a
[79:22] result, then maybe that&#39;s a separate
[79:23] chat. And now, if you want to be able to
[79:25] collect leads from the contact form on
[79:28] the website you&#39;re making, that&#39;s where
[79:29] you might want to spin up a database and
[79:31] you should dedicate a separate session
[79:33] for the database. And building in this
[79:36] way will lower the likelihood that the
[79:38] AI&#39;s behind the scenes, especially if
[79:40] you add agents, I know it sounds
[79:42] beautiful, but when you add agents, you
[79:44] do add complexity and you add more
[79:47] surface area for hallucinations to
[79:49] happen. So with that, you if you try to
[79:51] keep things thematically very similar
[79:54] and you don&#39;t switch from the design of
[79:56] the website to now add a database to now
[79:58] make an automation, you increase the
[80:01] likelihood that you&#39;re going to get
[80:02] exactly what you&#39;re looking for. And
[80:03] that&#39;s pretty much it for this iteration
[80:05] of walking through Claude Code for
[80:07] everyday folks to be able to use this
[80:09] and start to really push the boundaries
[80:11] of what they can do and more importantly
[80:13] what they can build. And believe it or
[80:15] not, I&#39;ve literally just scratched the
[80:17] surface. So, if you want to see more
[80:18] videos like this, especially mega
[80:20] courses, things like this take me weeks
[80:22] to put together, but add-ons in the
[80:24] future will take less. So, if you&#39;re
[80:26] looking for a specific series of things
[80:27] to help you learn and build faster, let
[80:30] me know down in the comments below. And
[80:31] if you are interested in really going to
[80:33] the next level, I have created assets
[80:35] for beginner, intermediate, and advanced
[80:38] level for claude codes. But if you&#39;re
[80:40] trying to go from the shallow end of the
[80:42] pool to the deep end with hundreds of
[80:44] other business owners and entrepreneurs
[80:46] just like you helping each other out to
[80:49] level up to the next level, check out
[80:50] the early AI adopters community. It&#39;s
[80:52] probably one of the best communities
[80:53] you&#39;ll find out there. I put my heart
[80:55] and soul into building all the content
[80:57] to make things digestible and most
[80:59] importantly take you to where you want
[81:01] to go.
