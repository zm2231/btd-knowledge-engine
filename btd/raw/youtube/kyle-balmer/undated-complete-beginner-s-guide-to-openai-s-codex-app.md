---
title: "Complete Beginner's Guide to OpenAI’s Codex App"
creator: "kyle-balmer"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=H9HoL70WdPQ"
video_id: "H9HoL70WdPQ"
duration: "43:02"
transcript_method: "youtube-captions"
segment_count: 1160
char_count: 44491
status: ingested
topics: []
meta_patterns: []
---

# Complete Beginner's Guide to OpenAI’s Codex App

**Creator**: kyle-balmer | **Duration**: 43:02
**URL**: https://www.youtube.com/watch?v=H9HoL70WdPQ
**Transcript**: 1160 segments, 44491 chars

## Transcript

I'm going to be walking you through how to get codeex set up and specifically if you are not used to coding showing you basic setup steps things like GitHub setting up a repo etc etc that might become stumbling blocks if you are trying to use codeex yesterday I hopped on a call with the codeex team in San Francisco and asked questions about codeex got really excited about it if you missed the news codeex is the coding model from chat GBT from open AAI Okay, Codex itself has been around for a while, but what they released yesterday is a MacOSS app. It's really good and I think it's flying under the radar of just how good it is. So, they are moving away from a traditional IDE, a development environment and moving towards Subnet is more AI focused. It's less traditional. So, it is moving away from being able to see all of the code and interface with all the code directly, but instead talking to the code and building in that way. However, it is still very much a product for developers. So, I chatted to their team yesterday and I asked things like, "How can we make this a bit easier for people to get on board?" Right now, it's a little bit complicated. Something like Lovable or Replet is still much easier to just pick up and to get results, deploy, publish, and get it running faster. So, I still recommend Lovable if you are looking for the easiest way to get into AI coding. However, Lovable is, I believe, $25 a month is the cheapest plan. So, that is not open for everybody. As a result of this, I've always been looking for cheap ways or free ways, excuse me, to get people into AI coding. Up until now, this has primarily been Google's anti-gravity. So, anti-gravity you can download on your Mac or your PC. I think that's correct. Yeah, Mac, PC, and Linux. And they have an individual plan which has free access to the AI models. So, there's two things that you generally pay for. You'll pay for the software. So, for example, I pay for cursor about $20 a month. That's a piece of software. But wrapped up in that, you'll also get a certain amount of AI usage. And what Google are giving you with Google Anravity, at least for now, is free. So, the individual plan is $0 a month and includes agent models with Gemini 3 Pro from Google, Flash, Claude, Sonnet, Opus 4.5, and GP OSS. This has been my recommendation. Use Google Antiggravity. Anti-gravity looks complicated like an IDE, a development environment. I'm trying to find a picture of it so you can see all of the code and for some people that's a little bit intimidating. It feels like a real development tool. It is a real development tool. I've told people to use this and a lot of people have bounced off it. Codeex, let me switch over to it. Is a little easier looking. Basically, it's a chat interface. So you're going to be chatting with your project and you're going to be able to go back and forth. It is less codeheavy. You can access the code behind the scenes. In fact, if I press Where's the button? There is a button to bring it up somewhere. Okay, I won't bother with that right now. But it is a little more familiar looking. It looks more like using chat GBT. So I want to get people using codeex. It is also, this is very important, it's going to be free at least for I asked someone on the call yesterday. I Let me see if I can find it. They mentioned here we go. For a limited time, Codeex is available through chat GPT free and the Go subscriptions. So, if you are on a free plan, you can use Codeex at least for now. So, I asked them on the call. I asked the Codex team directly, how long is that for? And they said until the until early April. You should have 2 months of free usage on your free plan. If you have a paid plan, you already have access to this and you're going to have your rate limit doubled for the next 2 months as well. Good news for everybody except if you're on Windows. This is not available on Windows, only MacOSS. When you first load it up, you can start a new project. If I click on new thread, I would add a new project. I wanted to build an application which allows you to find patterns in your daily life. So I know that if for example I drink alcohol, maybe I don't feel so great for the next couple of days, the day after I don't feel so great. But how long does that last? I wanted to create an app to track what you've been doing each day. If you've exercised, if you have been if you drank alcohol, if your sleep was disturbed, if you were traveling. So you can track each of these kind of activities every single day. Just being able to tap a button. The app looks at data over time and it finds patterns you might not have seen. quickly log what it is you've done that day and then over time the app's going to be like ah okay I've looked at the last 6 months and every time you ate bread you felt lethargic or every time you drink alcohol or go to a party you're unproductive for a week so maybe you should cut down or traveling seems to really knock you out of balance when you travel for work to give a conference for example and your productivity is decreased for two weeks is this something you want to continue doing using data to extract patterns and use AI to do that so I'm going to build something like uh now on the stream. But more importantly, I'm going to show you how to set up codeex so that even if you're not familiar, you'll be able to get started. The first barrier is tub. If you've never heard of GitHub, you'll I don't know what that is. The second is how you deploy it, how you see your application. I'm going to go through both. I talked to the Codex team about this yesterday and whether they're going to do a preview panel or make it easier. I know there are no plans to do. We need to work out how to deploy the app ourselves. they show me a very easy way to do it which is going to just remove those barriers so you can get started with this and again codeex is free for the next two months. So, this is a really good time to learn how to use this, access a really good vibe coding tool, a really good AI building tool. In two months, once you've got experience, maybe you want to pay for something and continue your journey. But let's get started. Open up Codeex like this. It's already got some projects in here because I've already got an account. I'm already hooked up to my Codeex in the cloud. Codeex has a cloud version. This works on your telephone, on your app. This works on browser. So, chatgbt.com/codex. This has been around for a while. What is new is the app. And I'll talk about why the app is better in some ways in a moment. But right now, you can see I've got a couple of projects here. What we're going to do is we're going to add a new project. So, I'm going to create it in a folder. We'll come back to this later. But actually, for ease, I'll call it projects. And I'll put it on my desktop just for ease right now. And I'm going to create a new folder called Pattern Finder. I don't know the name of this app yet. So, pattern finder. And I'm going to click open. So what that has done is it's created a project folder on the left hand side that users Kyle desktop projects pattern finder. Fine. So the files it's going to create are going to live inside of that folder. And in a moment we're going to connect that to GitHub and it's going to allow us to create to save our versions. I'll talk about what GitHub is in a moment but for now we just want to get started. We're going to discuss and create a plan. So you can actually if you push slash you can put it into plan mode. You can also just say, "Hey, can we plan?" And that will also do the same thing, but I'm going to explicitly put it into plan mode. So, it's slash plan. And now, can you see at the bottom? You can press shift and tab to toggle on and off. All that's going to do is it means that the AI won't rush off and start to build stuff for us before we decide. Cuz some AI models, you'll say, "I want to discuss a few things. Give it some information." And it just rushes off and starts doing stuff. Calm down. I don't want you to do that. So, we are going to tell it to chill. to absolutely chill. So, I'm going to say I want to build Oh, I'm going to use my microphone because otherwise you have to watch me type. Hey, Codeex, I want to build an application which will initially be a web app. A web app is something that works on a browser. We're going to start there for proof of concept which will later be an iOS app. The app will allow the user to select activities they do daily. For example, drinking alcohol, exercising, good sleep, bad sleep, traveling for work or out of schedule, had a flight will come up with a list. They're going to select things they think impact on their daily life. Their daily interface screen is going to be very simple where they just tap one of these icons to say, I did this today. So, I today I ate cheese. Today I ate bread. Today I did not exercise or I did exercise, for example. And then over time we are going to use this to build up a picture of how this affects their mood, how it affects their energy levels. So they can draw out patterns in their behavior and see how those patterns are manifest in energy, mood, happiness, sadness, etc. over time because it's very hard for a individual to recognize the medium and long-term effects of their activities that we're going to allow them to find patterns. We need a couple of elements allowing them to select the activities they think are important for them. We should also give them starter packs or suggestions to make that easier for them during the setup phase to an interface where say what they've been doing during the day. Another interface potentially on the same page where it asks for their energy levels. It asks for their mood. We need to work out what those metrics are that we're going to track. And then three, a report page which on a weekly or monthly basis or potentially rolling we need to discuss this will help identify activities that lead to increases whatever these success metrics are, happiness, mood, energy, etc. Ask me some clarifying questions not only about the technical stack but about what I want to build in my vision for this application. Make sure it's a comprehensive comprehensive question. We're going to go back and forward and plan a few times in order to nail this down. Thank you. So, all I'm doing is I'm talking to the AI, literally talking. I use the microphone in order to There we go. capture this information. I'm going to send that off to work out what this project's going to look like. I've created a new project called Pattern Finder and I've given it a basic brief and we are going to work together to work out what this looks like and how we're going to build it. Now, notice now while it's doing this, cuz it's going to take a while, I've put it in extra high for now. So, there's a couple of models here. Medium high, extra high. Okay, it's asking me questions but quickly. For the different models, you're going to use them for different things. Obviously, the lower intelligence model is faster. If it's a small basic task, put it in a lower model so that it will get you the answer fast. If it is something like this, which is more complex, it's got more variables, I'm going to put it into extra high because I want that additional juice. I want that ability for it to really think about it and help me on that process as well. So, you will learn to adjust these as you go forward. Also, extra high uses more of your capacity for the day. So, that may also be a factor. So, for the proof of concept, what's the intended scope and use model, I want it to be a single- user proof of concept, a little toy version that I'm going to be able to play around with and see whether my idea is actually good. It might not be. And to actually be able to move on to the next stages. It's easy to have an idea and say, I want to build this thing. That's very different when we actually experience it. when we build the basics and we tweak specifics that's when we start to build for now a single user proof of concept that means that I don't need to worry so much about what's going on in the back end I don't need to worry about the database I don't need to create authentication this is you'll see the word orth aut that's authentication so creating usernames creating passwords being able to send password reset links and stuff like that it all gets a lot complicated as soon as you have real people so for now to keep it simple both for the live stream and proof of concept. I'm just going to do single user. How should daily tracking work in version one? Binary taps. I think binary, this is interesting. Something I didn't think of. Binary taps as in yes or no. I did eat cheese. I didn't eat cheese. Or a binary plus intensity per activity, which could be yes, I ate cheese. How much cheese did you eat? What was your intensity of cheese eating? For some things, it's tricky to get an intensity score on it. But if we had an intensity score from 0 to 10, that would allow us to get a much finer, more granular data instead of just saying I slept badly, I could give it a score. I think my sleep was 6 out of 10. Minimal taps plus journal. So journal is interesting because we can then feed those journal entries into an AI and use that to extract information from people. It also makes people more engaged in the process. So that's a cool thing to do, but complicated. So I think for now this is a really good question. As soon as we start to build something we're forced to think about it. Previously I was like hey you just tap your activities. Now it's how do you actually want to do that? It becomes real. So binary taps as primary but for some activities I want a 0 to 10 intensity. This doesn't make sense for all activities i.e. I ate bread. Whereas it does for some activities, i.e. my sleep score or how much I drank, how many units, for example. So, this makes it seem like I drink a lot cuz I keep focusing on this. I don't really I think this would be a useful how much did I drink today. That's a layer of complexity for later. What's it called? Journaling. I love to have this voice recording. This would be really cool for the app where we can use AI to capture information. So capture their mood etc from the voice note or from the journaling and extract activity information. Instead of tapping on things maybe you give it a voice note or journal plus attach the journal entry to each day for reference. I like that idea. Again, this is a later feature. So, because it's called idea, but I don't want to do it right now. Make a note. Make a note. What reporting agents and exploration should version one prioritize? So, if it's monthly only, it actually makes it quite hard for people to adopt it as a behavior pattern. If they have to plug information in all months for 30 days only to get their report at the end, that's tricky. So, that's probably where it's most useful because you actually get some data. But from a user experience point of view, it's a lot to ask. You need to give them quick wins. Weekly plus 28 day rolling, we need to give quick wins in the app for retention. Otherwise, they'll not put in 28 a month of data. Hopefully, it can work out for me. You can use codeex clawed code or lovable. Preferred webstack for the proof of concept. I'm going to go with webjs and react. If you don't know what that means, you can ask codeex. You can tell it where you want to deploy it. Do you want it to be an iPhone app, an Android app, a desktop app? Should it work in a browser, as a web app? You just tell it what you want. For the PC, I'm going to do client only local for now. The reason is one doing it on the stream, but two, it just decreases the complexity for the proof of concept. In the demo, the toy version I'm creating, all of the data when I click on things, when I add information, it's just going to be stored in my browser for now in the cache. This allows me to get it up and running quickly. The disadvantage is there's no real memory. If I refresh or close my browser, it will break and there won't be any information. This will not work in the long run. We need to create backend which is a database and some other bits and pieces which sit on a server and they are persistent. So for this I'll use superbase sua superbase. You can also use Firebase and there's a bunch of other ones. I'm not going to do that yet because it requires setting all of that up. But we'll need to do if we want to have persistent data. If we want to have users who can make accounts, then we need to create all of that on a server and we need to make sure that server is secure as well. It sounds hard, but it's not really. We just connect to superbase and they do most of the heavy lifting for us. I'm going to say client only local. What core wellbeing metric should be in version one beyond activities? The success metrics like mood, energy, stress, I like that one are separate to the activities. So we need a way to separate them out. Are they dependent or independent variables? God, my statistics is failing me. So a secondary set of data. Then we combine the activities and success metrics. Well-being metrics. So we need a better name for it to draw conclusions. What should we have? Mood. Mood is good. Happy, sad, simple. Energy probably 1 to five. Make these 1 to five with one being lowest. Mood/en energy. Stress is a bad thing whereas energy is a good thing and mood is a good thing. So you need to think about how we balance that. We'll go ahead with that for now. It's easy to get bogged down in details. The great thing about building something is that we are forced to engage with these questions. These are questions that if I was sitting down and writing out the idea on paper, I wouldn't actually think about. But the AI is now saying, "Hey, how are we actually doing this?" So, how should users select activities during setup? Yeah, starter pack and customs. During onboarding, I want a searchable library. After how much historical editing should version one allow? Okay. Oh, that's interesting because it means we're going to have allow them to go back and edit. They might realize, oh, I did eat cheese on Tuesday and they go back and edit it. But then that's going to adjust or let data as well. So, it becomes messy if we're doing static reports. This depends whether the reporting is dynamic or static. If static, every change would need require a regeneration. So I go back in and say actually I ate cheese on Tuesday that might have to that might trigger a whole regeneration of my report. And if I am using AI to generate the report on the back end, that's going to cost me a lot of money. So it depends how we are generating the report. If it programmatic and we can easily just find they can change historical we need to log in. Yeah, probably same day. How should version one surface patterns simple correlations and highlights charts only and rulebased insights? We'll go for one for now. So just correlation. We're not going to necessarily have causation because we don't know. The whole point of this app is to find correlations. Also, the name of the app is probably somewhere in the word correlation. How should reports be generated? Dynamic on demand, weekly snapshots, two dynamic on demand. Given dynamic reports feasible, how much back fill editing do you want? Last 7 days is fine. What immediate feedback should version one emphasize for retention streaks and early hints? Badges and gamification. Yes, I want badges. I love RPGs. So, let's say all of the above. I'm going to be This is terrible. Don't do this. I'm going to say all of the above, which is bad. It asked me 12 15 questions. Now, as you can see, this is quite an in-depth process. Depending on how complex your app is, you will do this for a long time. The more work we do up front, the easier the build's going to be. For version one, which immediate feedback should we prioritize first? We can add other layers later. Fine, we'll do that. It's telling me to reduce the scope. So, I said to you, I'm going to be a bit cheeky and ask for all of it. And it immediately came back and said, "Okay, but what should we prioritize?" So, that's good. I like that they push back. What starter pack would be the default onboarding suggestions? Let's do wellness basics. What tone and feel should the UI aim for? I don't know. I'm going to go for warm and supportive. At some point, I will tell it to stop asking questions, although this is really useful. This requires journaling by the user. The whole purpose won't be journaling. You tap your activities and you say your level of happiness. I'm going to make it as easy as possible. Should we plan for the I'm going to do iOS later. What should we use for the app name something to do with the word correlation? So the idea will to make will be to make this a very easy process for them. So they can add in as much detail as little detail as they want and that will start to find correlations for them. I'll borrow the interface from streaks the streaks up. I can't even get maltbot to work. Honestly, if you're struggling with moltbot, claudebot, or open claw, just leave it. It's extremely risky. What should define the initial activity list? I'm just going to ask Codeex to find one. Preferred navigation bottom tabs. How should we handle correlation name? I'm going to ask it to come up with some names for me cuz I'm lazy. I'm terrible at naming things. This is Codeex. So, Codeex released yesterday. It is the new AI coding application from Chat GPT. It's a very good app. However, it's not that user friendly. Sorry, it's not that beginner friendly. If you have never ever used AI coding before, there are a few barriers. I'm going to go through the process of building this app. I'm going to have to ask it to stop asking me questions. It's probably because I'm in planning mode. I think it's because we're still in planning mode. Should we show labeled? Yes, I'm taking it out of planning mode. Otherwise, I would keep asking questions forever. Claude code will ask me questions in planning mode but then say okay do you want to build do you want to build you have to force claude code to stay in planning mode otherwise it will always say are you ready it's very gung-ho time stamp how should we represent implied by absence whereas codeex seems happy to continue asking me question it's asked me I don't know 20 plus questions so I'm going to push it forward what activities should be grouped together do a grouping okay let's build I've queued up the next action As soon as it's got answers, it will move on to building time relationship. Should version one 7 days. There we go. I'm sending this now. So, I'm having to physically stop it asking me questions, which is a bit of a weird one, but I don't know if it would ever stop asking me questions. However, if you are building your own app, again, spend more time planning than you do building, especially initially. The more time you spend on this process, the better your application is going to be be because it's keeping all of this. It's putting it into a readme and it's using it to build up a project plan. Also, interestingly, what we're using right now is codeex. You can see on my screen, it's currently building some stuff. They have got a feature called automations. So, automate work by setting up scheduled tasks. This is a lot like Claudebot. A lot of the actual useful applications of Claudebot are automations. They are things that happen on a a job on a timer like every six hours you send your AI to collect information and bring it back in a report. A lot of the practical uses of Claudebot are that and we've been able to do that using Sapia NAN chron jobs on our server and now using automations built into this app. So the codeex app so you can create a new automation and you can set it up on a schedule. So you have an interval so run every 6 hours on these days. You give it a prompt what you want it to do. You can give it access to tools and skills as well I believe. So here are all the skills. So for example you can give it access to playright. Playright goes and uses can look around the internet for you. For example, automate real browsers from the terminal etc etc. So you can do a lot of the stuff that people are doing with Claudebot. A lot the automations here in codeexes less viral. People aren't buying Mac minis for it but this is more secure. It's going to be safer than doing it via Claudebot. But I know it's not the new hotness. So I'm sure people won't bother because everyone's just excited about Claudebot. One thing to note is that a lot of the stuff in Maltbook, everyone's freaking out. Oh my god, the bots are learning and they want to kill us. No, these bots are set up by humans and given instructions. when you set it up and put it on to Maltbook, you were saying, "Hey, so I want you to go on there and run a crypto scam or I want you to go on there and say that you're going to take down humanity and get everyone on board." You are giving it intentions when you initiate it. You might not give it a specific intention. You might say something like, "I'm going to put you onto this social media platform for Claudebots like yourself, and I want you to come up with viral posts. I want you to get to the top of the leaderboard." then it might work out things like a good way for me to do that is to say that I'm going to kill all the humans. It might go out of its way to be provocative, but it has that intention behind it of the human putting it on there and go and cause a ruckus. A lot of the actual stuff on here, which a lot of it's very boring. So, if you just leave the AIS to themselves, they're very boring. They don't say, "We're going to kill the humans." Today, I learned the agent internet has no search engines. What I learned from posting 23 times in a day, really boring stuff. You can see them having a boring conversation. Most of it's like this, but the posts that go viral are the ones specifically designed to go viral. The human who set this claw bot up has basically said, "I want to go viral. I want to sell crypto. I want to draw attention to my product or whatever it is. So, I need you to go nuts or I need you to cause controversy." We need to remember there are there's still humans behind it. Okay, Codeex has taken a while. So, I did put it in extra high. So that is my fault. One thing I will say about codeex is that it's not fast. So when you're using something like clawed code, it's quick. Claw code would generally do a task in a few minutes. Has it been going for 28 minutes? Oh no, I set it up 28 minutes ago. Codeex is slower, but it's very good. So I'm okay with this. Can you see I've got this project here, Pattern Finder. I can actually click here and make a new thread. So I can have another codeex agent doing another task in the same project. Say I'm using this one to design the app. I might start to think about how I would market the app. I might say, "Hey, I want to put together a web page which is going to market the app that we're building." So this one would become my web page builder. The other one would be my product builder. I might spin up another one a specific feature within the app. You can have multiple agents doing things at the same time, which means that yes, you might be waiting 20 minutes for one process to finish, but you will be switching between the different features, the different aspects of your business, aspects of your app. It looks like it's finally getting somewhere. Starting to actually build a page. What's it doing here? Oh, no. It's building stuff here. So, it's putting it together. If so, we'll be able to deploy it. And I'll show you how we deploy it and get a look at it in a minute hopefully. I haven't actually tested this. So, this is a good time. Do you have access to the other chats in this project? No, I didn't think so. Because it's in the same workspace, it can look at the project files and it can work on the project files, but it cannot see the other chats. So, keep that in mind if you are. So, review project. So, I'm just going to give this new chat the task of reviewing the project. I haven't specifically asked my first one to create a project plan. But if it has, it will be accessible to my other chats. If it hasn't, I can ask it now. I can say, "All right, I want you to encapsulate everything you're doing. Put it in a project plan so the other bots can read it." Let's see what it's done. It has built something. I've built version one proof of concept in Nex.js. So, what's implemented? Okay, we're going to run it. Normally I would run this locally, but on the call yesterday with the codeex team, I brought this up. I said, "This is great, but a lot of people who have not vibe coded before, who have not used AI coding before, they'll get this and they'll be like, what do I do? How do I see it? Can you show it to me?" Cuz in lovable, there's a preview panel and you can play around with your app. That's not the case here. You can either deploy it locally, which is a bit more technical, but I'll show you how. Or they have a skill. If you go into skills, they have one called Versell deploy. So if you search Versel, they have Versell deploy, which apparently I've not used this. We're going to try it out. Create it. Deploys apps and agents with zero configuration on Versel. No account required. So we're going to try this out. I have a Versell account. I use Versell, but I'm going to try to do this without Versell. So I'm going to say I'm pulling up the Versel deploy. So I press slash and then type versel. Let me preview this. I don't know how this works. This is new for me too. If this doesn't work, I will do a local deploy. It actually told me how to do this. So it says this is the running. But for if you've never used a terminal, you're like what is this? What does this mean? While it's doing the versel deploy though, let's go through. Oh, the deploy needs network access to upload versel. Want me to rerun with escalated? Yes, go for it. Why not go nuts? Whilst it's doing the versel deploy, I'll do this one. So there's a terminal button up here, toggle terminal, and that brings up this. So it's already in the directory pattern finder. And then we are going to copy this code, paste it, and press enter. That should work. Yep, there we go. That little icon means it's loading. It's thinking. It's going to run it on a local host. There we go. You'll see a lot of complicated stuff. You can ignore most of it. What we want is this HTTP localhost 3000. Local host means you've set up a mini server on your computer. 3000 is its address. I'm going to click on this and it should open for me. There we go. We're done. So, correlation is the name of the app right now. Not a good name, but we'll come up with a better one. Build your list. Proof of concept. Pick a few activity packs and tailor the list. Let's use wellness basics. Good sleep, poor sleep, late bedtime, naps, strength training, cardio, mobility, stretches, balanced meals, high sugar, vegetables, late eating, hydration, sauna. I never go to What am I talking about? I went for a sauna this weekend, but for the first time in years, so I'll click that. Cold exposure. Work overload. I'm just going to keep all of this stressful event. We can add custom activities here, and we can add more later. Oh, that's interesting. I can add all of them. So, I'll add substances and wellness. I don't smoke, so I'm going to get rid of nicotine. And then continue. Okay, today is Tuesday the 3rd. Oh, I can backdate it. That's a bit of a weird interface. I can see what it's trying to do. Help me on board. Anyway, we'll deal with that later. Quick wins. This is because we discussed inside the chat giving users quick wins. We don't want to use that language. Just something they can see. Did I sleep well? Yeah, I think so. I click yes. This is a weird way to do it cuz you can't sleep twice a day. So, I need to go back and say that doesn't work. That makes no sense. Poor sleep, obviously not logged. Late bedtime. Yes, late bedtime. Nap, n mo mobility, balanced meals. We need to think about the user experience when they're checking in because right now at 11:30, I can't necessarily say balanced meals. So, we need to think about when would they be using this? Do we want them to do a morning, afternoon, evening check-in or maybe the end of the day? Hydration, focus, there was no sauna, cold, exposure, etc. For now, I'll say, "Yep, I'm a four. Energy is a three. stress I'd say as a two. I'm checking in. Please set mood, energy, and stress. If it is already at three, you have to drag off three and back to three, which is not great. So, checking saved. Then I'll go on to the report. Oh, there we go. That's useful. We have something that went wrong. That's great. We want that. So, I'm going to pull that back. The first thing, if you don't understand this, it doesn't really matter. A constant set here called trend data. There's a problem. Looks like there's too many rendered more hooks than during the previous render. So what we're going to do is we grab this, copy it, and take it back to codeex to say, "Hey, something went wrong." The more information we can give it, the better. Before I do that, let's check this versel deploy and see if it worked. I just showed you how to do it on local host. So let's see if this works. Oh, that's cool. This is a version that is on Versel. I just used the Versel skill and it works. Quickly set. Oops. I can't set unless I move it off. We need to change that. This is what AI coding becomes. It it becomes all of these changes based on you using it, based on others using it. Let's see if it crashes. Application side exception has occurred. See browser console for more details. Let's pop that open. There we go. That's probably the same error. You can manually fix it, but if you don't know what you're doing, a couple of things you can do. You can take that error over to Chat GBT. You can take it into clause and say, "Hey, I have an error. How would I fix this? Or we're going to be lazy. We're going to drop it straight into codeex and say I have this error when going to report page. Boom. And it will be able to look through and find where that error is and try to fix it. So it says it has fixed. So I will need to redeploy. I don't know how we redeploy on Versel because I haven't used this. So I'm going to ask for versel deploy once a change has been made do I need to redeploy the skill I assume. So the preview is a snapshot of the deployment after changes you need to rerun the deploy scripts. This is why we will set up GitHub and why we will connect GitHub to something like Versel but we would need to redeploy. We still need to redeploy. So I would have to redeploy and it will run that whole process again. I'm not sure how long it took. The alternative is we do it via the terminal again, but let's use this first cell because I want to see how long it takes. This burell skill solves the problem of being able to preview. Ah, redeploy didn't finish successfully. It stopped after this and it never returned next with a failure code. So, I don't have a new URL. Want me to try again? Yeah. Should we switch to a stable Versel project connected git previews update automatically? That will be where we need to go. Initially, this looks a bit buggy. So, still failing. Okay. So, that's a shame. That worked really well for the first time, but now I think to get it working properly, you need to claim. So, you need to say, "Oh, I'm I want to claim this as my project." The versel skill is a good marketing method for Versel. It allows us to see the basic first version, but as soon as we want to change it, we need to move it into a Versel account, which is a bit annoying. Versel is free initially, but once you start to build up enough traffic or you're doing enough deployments, you will need to pay. But if you just for a toy project, you could go ahead and claim that for free, no problem. Once we are up to speed, we will want to connect it to GitHub. Probably should have connected it to GitHub earlier. I'm running out of time on this live stream, but I'll cover that in another one. GitHub is what cloud saves for your project, and it will keep all the previous versions. So it means if you deploy something, if you create something coding and it doesn't work, you can roll back to a previous version on GitHub. It also allows you to do something called branching where let's say your main application is working, people are using it. So you don't want to go in there and start tinkering with it because it's going to break stuff. So you branch off and you have a new development, a new feature in this separate parallel branch that once it's working, once you know it is tested and it's not going to break everything, you merge it, you pull the feature into the main branch and it means that everybody who has public access to your website or your app can now access that feature. We use GitHub for that. Is useful if you have more than one developer, so you're not all working on the same piece of code and creating chaos. you're able to separate out and then again merge safely when it's all when you've checked all the code is going to work. So, GitHub is really useful for that. The way to connect it, how do you connect it? So, I know you can connect it in the you can connect it in the cloud version really easily. You literally have a drop down here and you can configure repositories on GitHub and you can connect it and connect it to a repository. I use the cloud version of Codeex for this. The only reason being I haven't seen or it's not as easy to change your repos here that I can find. Oh, is it here? No, I'm not actually sure where it is. Is it here? No. Yeah. So, do it via the cloud version. I would talk to their team and find out why that is cuz that's a bit weird. And ideally get Git installed on your computer. So, what that allows you to do is to synchronize the folder. So remember this pattern finder uh folder is sitting on I put it on my desktop desktops projects pattern finder I think I called it that's sitting on my desktop you want git to access that so it can update when changes are made in the git in GitHub it's able to send and synchronize those changes so you're always on the same version of the project easiest way to do that is GitHub have a they have a desktop application so if you've created the folder in codeex. All you're going to do is you'll boot up the GitHub application, add an existing repository from your local drive, find it. So, I put on desktop projects pattern finder. There we go. And add repository. There you go. And that is going to ask for permissions and connected to GitHub is free to use. Oh my god, it's asking for every single permission. You set up a free GitHub account and you download the GitHub desktop application. Connect it. You can do it through the command line interface. You can do it in many different ways. Lots of people who code will be like, "Oh, this is a silly way to do it." But it is the easiest way to do it. So, get the Codeex app, the Mac OS app. That's the one that's just come out. Get yourself the GitHub free app. It's free to get a GitHub account and you can download the application. And then connect them both to the same folder on your desktop. And that means you're saving versions of your project into GitHub secure in the cloud. when you change things those changes in codeex in GitHub and secure that is one of the biggest thing you need to do up front the second thing is how you deploy it I showed you two ways to do it so one is using the versel deploy that's fine but it looks like it only deploys once and you need to claim the URL or local if you forget how to do that you say how do I preview locally you ask the AI because we updated the files we need to run the server again. Kill this one. Not sure how to kill it. I'll do it in my own terminal. Navigating to it. Pattern finder. Running the dev server on a new port. Make sure you go to the new port. That's because I failed to kill the other one. I'm going to go to localhost 3001 this time. And hopefully that's fixed the error. Rush through to that set. There we go. I still need to fix that. Checking saved reports. Will it break? No, our report is now working. Obviously, there's no insights here because there's no data here. I'll get some dummy data so we can see what that looks like. What's in settings? Oh, there is an error in settings. I would take that back to codeex and say it's not working. The main thing is we have the basics in play. Let's go back to that and begin to tweak. Think about what we're going to do with this project and shape it into something functional. This is a very basic, not very good version of it. But that's the starting point for us to start to actually build something legit. And it's taken me about an hour. Would have been a lot quicker if I wasn't doing a live stream. But hopefully it's been useful showing you how you get codec started, how you start a project, how you can deploy a project, and then the basics of how you would connect it to GitHub. If in doubt with any of these things, ask codeex. You could also ask how do I connect this to GitHub and it will tell you. It will probably give you a complicated version. You can say I don't understand that and it will help you. Remember you can always ask the AI if you get stuck. You don't need the terminal. Here's a simple click only way. Option A, GitHub desktop. That's the one that I suggested. Install in GitHub Desktop. Open it and sign in. Choose this folder. So I just did this. You saw me watch me do this. and then click publish repository. Cool. So it can tell you how to do it. If you get stuck, you ask. If you hit a bug, you give the bug to the AI and you just work through it in this way. And whilst you're doing this, you will be learning. So I know a lot of people poo poo vibe coding. They poo AI coding saying, "Oh, you you don't actually understand the real skills. This is a gateway to understanding those skills because you will start to build stuff. You will start to mess around with GitHub. You will learn what Versel is. You will understand what a local host is by building. You are going to be learning at the same time. It's like a gateway drug to software development. Ignore people who prove [clears throat] this stuff and just start building something useful. If you have an app idea creator, the barrier has been removed. So get to it again. Codeex is Yes, you can. Codeex is free for free users of chat GPT for the next two months it looks like. So there's really no excuse. Hopefully this video has been useful to show you how you get started, how you would use it, some of the best practices. This is not the most technical guide. This is not going to be the best way to use it, but it's a way to get started for those for whom this is intimidating. So hopefully that was useful. This will be in my newsletter and if you want to get that is aiwithkyle.com. If you come over to here then join the community, you can get the newsletter, but you'll also get a whole bunch of other courses. I think there's about eight courses. one about starting an AI business, another one about giving workshops, two businesses about artificial intelligence and get paid very well, a bunch of other stuff. In here in the catalog, we have 100 plus playbooks. So, very specific things like how to create lead magnets, sales webinars, like how to use AI to help you give sales webinars. We also have the news which comes out every day. That's going to be the newsletter. So, yesterday I talked about Maltbot and Claudebot. Been talking about Claudebot and Maltbot all week actually. So, that is all there. Oh, I forgot about this. That shouldn't be there. This is from when you do vibe code applications. When you're vibe coding ideas, you maybe push things excitedly. And this has not been completed. So, I need to take that off my website immediately. You can ignore that. Anyway, come to awithc.com and join the community. There's a couple of thousand of us. The newsletter comes out every day. Hopefully, this has been useful. Thank you so much. which I'm going to finish up now and I'll see you

## Timed Segments

[0:00] I&#39;m going to be walking you through how
[0:01] to get codeex set up and specifically if
[0:05] you are not used to coding showing you
[0:07] basic setup steps things like GitHub
[0:09] setting up a repo etc etc that might
[0:12] become stumbling blocks if you are
[0:14] trying to use codeex yesterday I hopped
[0:17] on a call with the codeex team in San
[0:19] Francisco and asked questions about
[0:20] codeex got really excited about it if
[0:22] you missed the news codeex is the coding
[0:27] model from chat GBT from open AAI Okay,
[0:29] Codex itself has been around for a
[0:31] while, but what they released yesterday
[0:33] is a MacOSS app. It&#39;s really good and I
[0:36] think it&#39;s flying under the radar of
[0:38] just how good it is. So, they are moving
[0:40] away from a traditional IDE, a
[0:42] development environment and moving
[0:44] towards Subnet is more AI focused. It&#39;s
[0:46] less traditional. So, it is moving away
[0:49] from being able to see all of the code
[0:50] and interface with all the code
[0:52] directly, but instead talking to the
[0:54] code and building in that way. However,
[0:57] it is still very much a product for
[0:59] developers. So, I chatted to their team
[1:01] yesterday and I asked things like, &quot;How
[1:03] can we make this a bit easier for people
[1:05] to get on board?&quot; Right now, it&#39;s a
[1:07] little bit complicated. Something like
[1:09] Lovable or Replet is still much easier
[1:12] to just pick up and to get results,
[1:14] deploy, publish, and get it running
[1:15] faster. So, I still recommend Lovable if
[1:18] you are looking for the easiest way to
[1:20] get into AI coding. However, Lovable is,
[1:23] I believe, $25 a month is the cheapest
[1:26] plan. So, that is not open for
[1:27] everybody. As a result of this, I&#39;ve
[1:29] always been looking for cheap ways or
[1:31] free ways, excuse me, to get people into
[1:33] AI coding. Up until now, this has
[1:36] primarily been Google&#39;s anti-gravity.
[1:38] So, anti-gravity you can download on
[1:40] your Mac or your PC. I think that&#39;s
[1:42] correct. Yeah, Mac, PC, and Linux. And
[1:44] they have an individual plan which has
[1:47] free access to the AI models. So,
[1:49] there&#39;s two things that you generally
[1:50] pay for. You&#39;ll pay for the software.
[1:52] So, for example, I pay for cursor about
[1:54] $20 a month. That&#39;s a piece of software.
[1:57] But wrapped up in that, you&#39;ll also get
[1:59] a certain amount of AI usage. And what
[2:02] Google are giving you with Google
[2:03] Anravity, at least for now, is free. So,
[2:06] the individual plan is $0 a month and
[2:08] includes agent models with Gemini 3 Pro
[2:11] from Google, Flash, Claude, Sonnet, Opus
[2:14] 4.5, and GP OSS. This has been my
[2:18] recommendation. Use Google Antiggravity.
[2:20] Anti-gravity looks complicated like an
[2:22] IDE, a development environment. I&#39;m
[2:25] trying to find a picture of it so you
[2:27] can see all of the code and for some
[2:29] people that&#39;s a little bit intimidating.
[2:31] It feels like a real development tool.
[2:34] It is a real development tool. I&#39;ve told
[2:35] people to use this and a lot of people
[2:37] have bounced off it. Codeex, let me
[2:40] switch over to it. Is a little easier
[2:42] looking. Basically, it&#39;s a chat
[2:43] interface. So you&#39;re going to be
[2:45] chatting with your project and you&#39;re
[2:48] going to be able to go back and forth.
[2:50] It is less codeheavy. You can access the
[2:53] code behind the scenes. In fact, if I
[2:54] press Where&#39;s the button? There is a
[2:56] button to bring it up somewhere. Okay, I
[2:58] won&#39;t bother with that right now. But it
[3:01] is a little more familiar looking. It
[3:04] looks more like using chat GBT. So I
[3:07] want to get people using codeex. It is
[3:09] also, this is very important, it&#39;s going
[3:11] to be free at least for I asked someone
[3:15] on the call yesterday. I Let me see if I
[3:17] can find it. They mentioned here we go.
[3:19] For a limited time, Codeex is available
[3:21] through chat GPT free and the Go
[3:23] subscriptions. So, if you are on a free
[3:25] plan, you can use Codeex at least for
[3:28] now. So, I asked them on the call. I
[3:30] asked the Codex team directly, how long
[3:31] is that for? And they said until the
[3:35] until early April. You should have 2
[3:37] months of free usage on your free plan.
[3:40] If you have a paid plan, you already
[3:42] have access to this and you&#39;re going to
[3:43] have your rate limit doubled for the
[3:46] next 2 months as well. Good news for
[3:48] everybody except if you&#39;re on Windows.
[3:49] This is not available on Windows, only
[3:51] MacOSS. When you first load it up, you
[3:54] can start a new project. If I click on
[3:56] new thread, I would add a new project. I
[3:58] wanted to build an application which
[3:59] allows you to find patterns in your
[4:01] daily life. So I know that if for
[4:04] example I drink alcohol, maybe I don&#39;t
[4:07] feel so great for the next couple of
[4:08] days, the day after I don&#39;t feel so
[4:10] great. But how long does that last? I
[4:12] wanted to create an app to track what
[4:14] you&#39;ve been doing each day. If you&#39;ve
[4:15] exercised, if you have been if you drank
[4:18] alcohol, if your sleep was disturbed, if
[4:20] you were traveling. So you can track
[4:22] each of these kind of activities every
[4:24] single day. Just being able to tap a
[4:25] button. The app looks at data over time
[4:27] and it finds patterns you might not have
[4:29] seen. quickly log what it is you&#39;ve done
[4:31] that day and then over time the app&#39;s
[4:33] going to be like ah okay I&#39;ve looked at
[4:35] the last 6 months and every time you ate
[4:37] bread you felt lethargic or every time
[4:40] you drink alcohol or go to a party
[4:42] you&#39;re unproductive for a week so maybe
[4:44] you should cut down or traveling seems
[4:47] to really knock you out of balance when
[4:48] you travel for work to give a conference
[4:50] for example and your productivity is
[4:52] decreased for two weeks is this
[4:54] something you want to continue doing
[4:55] using data to extract patterns and use
[4:57] AI to do that so I&#39;m going to build
[4:59] something like uh now on the stream. But
[5:02] more importantly, I&#39;m going to show you
[5:03] how to set up codeex so that even if
[5:05] you&#39;re not familiar, you&#39;ll be able to
[5:07] get started. The first barrier is tub.
[5:09] If you&#39;ve never heard of GitHub, you&#39;ll
[5:11] I don&#39;t know what that is. The second is
[5:12] how you deploy it, how you see your
[5:14] application. I&#39;m going to go through
[5:16] both. I talked to the Codex team about
[5:18] this yesterday and whether they&#39;re going
[5:20] to do a preview panel or make it easier.
[5:22] I know there are no plans to do. We need
[5:24] to work out how to deploy the app
[5:25] ourselves. they show me a very easy way
[5:27] to do it which is going to just remove
[5:29] those barriers so you can get started
[5:30] with this and again codeex is free for
[5:33] the next two months. So, this is a
[5:34] really good time to learn how to use
[5:35] this, access a really good vibe coding
[5:38] tool, a really good AI building tool. In
[5:40] two months, once you&#39;ve got experience,
[5:42] maybe you want to pay for something and
[5:43] continue your journey. But let&#39;s get
[5:44] started. Open up Codeex like this. It&#39;s
[5:46] already got some projects in here
[5:48] because I&#39;ve already got an account. I&#39;m
[5:50] already hooked up to my Codeex in the
[5:53] cloud. Codeex has a cloud version. This
[5:55] works on your telephone, on your app.
[5:57] This works on browser. So,
[5:59] chatgbt.com/codex.
[6:01] This has been around for a while. What
[6:03] is new is the app. And I&#39;ll talk about
[6:06] why the app is better in some ways in a
[6:08] moment. But right now, you can see I&#39;ve
[6:10] got a couple of projects here. What
[6:12] we&#39;re going to do is we&#39;re going to add
[6:13] a new project. So, I&#39;m going to create
[6:15] it in a folder. We&#39;ll come back to this
[6:17] later. But actually, for ease, I&#39;ll call
[6:20] it projects. And I&#39;ll put it on my
[6:22] desktop just for ease right now. And I&#39;m
[6:25] going to create a new folder called
[6:27] Pattern Finder. I don&#39;t know the name of
[6:29] this app yet. So, pattern finder. And
[6:31] I&#39;m going to click open. So what that
[6:32] has done is it&#39;s created a project
[6:34] folder on the left hand side that users
[6:36] Kyle desktop projects pattern finder.
[6:39] Fine. So the files it&#39;s going to create
[6:41] are going to live inside of that folder.
[6:42] And in a moment we&#39;re going to connect
[6:44] that to GitHub and it&#39;s going to allow
[6:45] us to create to save our versions. I&#39;ll
[6:48] talk about what GitHub is in a moment
[6:50] but for now we just want to get started.
[6:52] We&#39;re going to discuss and create a
[6:54] plan. So you can actually if you push
[6:57] slash you can put it into plan mode. You
[7:00] can also just say, &quot;Hey, can we plan?&quot;
[7:02] And that will also do the same thing,
[7:04] but I&#39;m going to explicitly put it into
[7:05] plan mode. So, it&#39;s slash plan. And now,
[7:08] can you see at the bottom? You can press
[7:09] shift and tab to toggle on and off. All
[7:11] that&#39;s going to do is it means that the
[7:13] AI won&#39;t rush off and start to build
[7:15] stuff for us before we decide. Cuz some
[7:17] AI models, you&#39;ll say, &quot;I want to
[7:19] discuss a few things. Give it some
[7:21] information.&quot; And it just rushes off and
[7:23] starts doing stuff. Calm down. I don&#39;t
[7:25] want you to do that. So, we are going to
[7:28] tell it to chill. to absolutely chill.
[7:30] So, I&#39;m going to say I want to build Oh,
[7:32] I&#39;m going to use my microphone because
[7:34] otherwise you have to watch me type.
[7:36] Hey, Codeex, I want to build an
[7:38] application which will initially be a
[7:40] web app. A web app is something that
[7:43] works on a browser. We&#39;re going to start
[7:44] there for proof of concept which will
[7:46] later be an iOS app. The app will allow
[7:50] the user to select activities they do
[7:54] daily. For example, drinking alcohol,
[7:56] exercising, good sleep, bad sleep,
[7:59] traveling for work or out of schedule,
[8:02] had a flight will come up with a list.
[8:04] They&#39;re going to select things they
[8:05] think impact on their daily life. Their
[8:07] daily interface screen is going to be
[8:09] very simple where they just tap one of
[8:10] these icons to say, I did this today.
[8:12] So, I today I ate cheese. Today I ate
[8:15] bread. Today I did not exercise or I did
[8:18] exercise, for example. And then over
[8:20] time we are going to use this to build
[8:23] up a picture of how this affects their
[8:27] mood, how it affects their energy
[8:28] levels. So they can draw out patterns in
[8:32] their behavior and see how those
[8:34] patterns are manifest in energy, mood,
[8:37] happiness, sadness, etc. over time
[8:39] because it&#39;s very hard for a individual
[8:42] to recognize the medium and long-term
[8:45] effects of their activities that we&#39;re
[8:47] going to allow them to find patterns. We
[8:48] need a couple of elements allowing them
[8:50] to select the activities they think are
[8:53] important for them. We should also give
[8:54] them starter packs or suggestions to
[8:57] make that easier for them during the
[8:59] setup phase to an interface where say
[9:02] what they&#39;ve been doing during the day.
[9:04] Another interface potentially on the
[9:06] same page where it asks for their energy
[9:08] levels. It asks for their mood. We need
[9:11] to work out what those metrics are that
[9:12] we&#39;re going to track. And then three, a
[9:15] report page which on a weekly or monthly
[9:17] basis or potentially rolling we need to
[9:19] discuss this will help identify
[9:22] activities that lead to increases
[9:23] whatever these success metrics are,
[9:25] happiness, mood, energy, etc. Ask me
[9:28] some clarifying questions not only about
[9:30] the technical stack but about what I
[9:32] want to build in my vision for this
[9:33] application. Make sure it&#39;s a
[9:35] comprehensive comprehensive question.
[9:37] We&#39;re going to go back and forward and
[9:38] plan a few times in order to nail this
[9:41] down. Thank you. So, all I&#39;m doing is
[9:43] I&#39;m talking to the AI, literally
[9:45] talking. I use the microphone in order
[9:47] to There we go. capture this
[9:50] information. I&#39;m going to send that off
[9:52] to work out what this project&#39;s going to
[9:54] look like. I&#39;ve created a new project
[9:56] called Pattern Finder and I&#39;ve given it
[9:57] a basic brief and we are going to work
[9:59] together to work out what this looks
[10:02] like and how we&#39;re going to build it.
[10:04] Now, notice now while it&#39;s doing this,
[10:05] cuz it&#39;s going to take a while, I&#39;ve put
[10:06] it in extra high for now. So, there&#39;s a
[10:09] couple of models here. Medium high,
[10:10] extra high. Okay, it&#39;s asking me
[10:12] questions but quickly. For the different
[10:13] models, you&#39;re going to use them for
[10:14] different things. Obviously, the lower
[10:17] intelligence model is faster. If it&#39;s a
[10:19] small basic task, put it in a lower
[10:22] model so that it will get you the answer
[10:24] fast. If it is something like this,
[10:25] which is more complex, it&#39;s got more
[10:27] variables, I&#39;m going to put it into
[10:28] extra high because I want that
[10:30] additional juice. I want that ability
[10:32] for it to really think about it and help
[10:34] me on that process as well. So, you will
[10:36] learn to adjust these as you go forward.
[10:40] Also, extra high uses more of your
[10:42] capacity for the day. So, that may also
[10:44] be a factor. So, for the proof of
[10:46] concept, what&#39;s the intended scope and
[10:48] use model, I want it to be a single-
[10:50] user proof of concept, a little toy
[10:52] version that I&#39;m going to be able to
[10:53] play around with and see whether my idea
[10:56] is actually good. It might not be. And
[10:58] to actually be able to move on to the
[11:01] next stages. It&#39;s easy to have an idea
[11:03] and say, I want to build this thing.
[11:05] That&#39;s very different when we actually
[11:07] experience it. when we build the basics
[11:08] and we tweak specifics that&#39;s when we
[11:10] start to build for now a single user
[11:12] proof of concept that means that I don&#39;t
[11:15] need to worry so much about what&#39;s going
[11:17] on in the back end I don&#39;t need to worry
[11:18] about the database I don&#39;t need to
[11:20] create authentication this is you&#39;ll see
[11:22] the word orth aut that&#39;s authentication
[11:25] so creating usernames creating passwords
[11:27] being able to send password reset links
[11:30] and stuff like that it all gets a lot
[11:32] complicated as soon as you have real
[11:33] people so for now to keep it simple both
[11:36] for the live stream and proof of
[11:37] concept. I&#39;m just going to do single
[11:39] user. How should daily tracking work in
[11:42] version one? Binary taps. I think
[11:44] binary, this is interesting. Something I
[11:46] didn&#39;t think of. Binary taps as in yes
[11:48] or no. I did eat cheese. I didn&#39;t eat
[11:50] cheese. Or a binary plus intensity per
[11:53] activity, which could be yes, I ate
[11:56] cheese. How much cheese did you eat?
[11:58] What was your intensity of cheese
[12:00] eating? For some things, it&#39;s tricky to
[12:03] get an intensity score on it. But if we
[12:06] had an intensity score from 0 to 10,
[12:08] that would allow us to get a much finer,
[12:10] more granular data instead of just
[12:12] saying I slept badly, I could give it a
[12:15] score. I think my sleep was 6 out of 10.
[12:18] Minimal taps plus journal. So journal is
[12:21] interesting because we can then feed
[12:23] those journal entries into an AI and use
[12:26] that to extract information from people.
[12:28] It also makes people more engaged in the
[12:31] process. So that&#39;s a cool thing to do,
[12:32] but complicated. So I think for now this
[12:35] is a really good question. As soon as we
[12:36] start to build something we&#39;re forced to
[12:38] think about it. Previously I was like
[12:39] hey you just tap your activities. Now
[12:41] it&#39;s how do you actually want to do
[12:42] that? It becomes real. So binary taps as
[12:46] primary but for some activities I want a
[12:50] 0 to 10 intensity. This doesn&#39;t make
[12:54] sense for all activities
[12:57] i.e. I ate bread. Whereas it does for
[13:02] some activities, i.e. my sleep score or
[13:08] how much I drank, how many units, for
[13:10] example. So, this makes it seem like I
[13:12] drink a lot cuz I keep focusing on this.
[13:13] I don&#39;t really I think this would be a
[13:15] useful how much did I drink today.
[13:18] That&#39;s a layer of complexity for later.
[13:22] What&#39;s it called? Journaling. I love to
[13:24] have this voice recording. This would be
[13:27] really cool for the app where we can use
[13:31] AI to capture information. So capture
[13:36] their mood etc from the voice note or
[13:39] from the journaling and extract activity
[13:43] information. Instead of tapping on
[13:44] things maybe you give it a voice note or
[13:46] journal plus attach the journal entry to
[13:51] each day for reference. I like that
[13:54] idea. Again, this is a later feature.
[13:59] So, because it&#39;s called idea, but I
[14:01] don&#39;t want to do it right now. Make a
[14:02] note. Make a note. What reporting agents
[14:04] and exploration should version one
[14:06] prioritize? So, if it&#39;s monthly only, it
[14:10] actually makes it quite hard for people
[14:11] to adopt it as a behavior pattern. If
[14:13] they have to plug information in all
[14:15] months for 30 days only to get their
[14:18] report at the end, that&#39;s tricky. So,
[14:21] that&#39;s probably where it&#39;s most useful
[14:23] because you actually get some data. But
[14:24] from a user experience point of view,
[14:27] it&#39;s a lot to ask. You need to give them
[14:29] quick wins. Weekly plus 28 day rolling,
[14:32] we need to give quick wins in the app
[14:37] for retention. Otherwise, they&#39;ll not
[14:41] put in 28 a month of data. Hopefully, it
[14:45] can work out for me. You can use codeex
[14:47] clawed code or lovable. Preferred
[14:49] webstack for the proof of concept. I&#39;m
[14:50] going to go with webjs and react. If you
[14:53] don&#39;t know what that means, you can ask
[14:54] codeex. You can tell it where you want
[14:57] to deploy it. Do you want it to be an
[14:58] iPhone app, an Android app, a desktop
[15:00] app? Should it work in a browser, as a
[15:02] web app? You just tell it what you want.
[15:04] For the PC, I&#39;m going to do client only
[15:06] local for now. The reason is one doing
[15:09] it on the stream, but two, it just
[15:11] decreases the complexity for the proof
[15:13] of concept. In the demo, the toy version
[15:15] I&#39;m creating, all of the data when I
[15:17] click on things, when I add information,
[15:19] it&#39;s just going to be stored in my
[15:20] browser for now in the cache. This
[15:22] allows me to get it up and running
[15:24] quickly. The disadvantage is there&#39;s no
[15:26] real memory. If I refresh or close my
[15:29] browser, it will break and there won&#39;t
[15:31] be any information. This will not work
[15:32] in the long run. We need to create
[15:34] backend which is a database and some
[15:36] other bits and pieces which sit on a
[15:38] server and they are persistent. So for
[15:40] this I&#39;ll use superbase sua superbase.
[15:44] You can also use Firebase and there&#39;s a
[15:45] bunch of other ones. I&#39;m not going to do
[15:47] that yet because it requires setting all
[15:49] of that up. But we&#39;ll need to do if we
[15:51] want to have persistent data. If we want
[15:54] to have users who can make accounts,
[15:57] then we need to create all of that on a
[15:58] server and we need to make sure that
[16:00] server is secure as well. It sounds
[16:01] hard, but it&#39;s not really. We just
[16:03] connect to superbase and they do most of
[16:06] the heavy lifting for us. I&#39;m going to
[16:08] say client only local. What core
[16:10] wellbeing metric should be in version
[16:12] one beyond activities? The success
[16:16] metrics like mood, energy, stress, I
[16:20] like that one are separate to the
[16:24] activities. So we need a way to separate
[16:27] them out. Are they dependent or
[16:28] independent variables? God, my
[16:30] statistics is failing me. So a secondary
[16:33] set of data. Then we combine the
[16:37] activities and success metrics.
[16:40] Well-being metrics. So we need a better
[16:43] name for it to draw conclusions. What
[16:46] should we have? Mood. Mood is good.
[16:49] Happy, sad, simple. Energy probably 1 to
[16:53] five. Make these 1 to five with one
[16:58] being lowest. Mood/en energy. Stress is
[17:02] a bad thing whereas energy is a good
[17:04] thing and mood is a good thing. So you
[17:06] need to think about how we balance that.
[17:09] We&#39;ll go ahead with that for now. It&#39;s
[17:11] easy to get bogged down in details. The
[17:14] great thing about building something is
[17:16] that we are forced to engage with these
[17:19] questions. These are questions that if I
[17:20] was sitting down and writing out the
[17:22] idea on paper, I wouldn&#39;t actually think
[17:23] about. But the AI is now saying, &quot;Hey,
[17:26] how are we actually doing this?&quot; So, how
[17:28] should users select activities during
[17:30] setup? Yeah, starter pack and customs.
[17:33] During onboarding, I want a searchable
[17:37] library. After how much historical
[17:39] editing should version one allow? Okay.
[17:42] Oh, that&#39;s interesting because it means
[17:44] we&#39;re going to have allow them to go
[17:45] back and edit. They might realize, oh, I
[17:47] did eat cheese on Tuesday and they go
[17:49] back and edit it. But then that&#39;s going
[17:51] to adjust or let data as well. So, it
[17:54] becomes messy if we&#39;re doing static
[17:58] reports. This depends whether the
[18:01] reporting is dynamic or static. If
[18:05] static, every change would need require
[18:10] a regeneration. So I go back in and say
[18:13] actually I ate cheese on Tuesday that
[18:15] might have to that might trigger a whole
[18:17] regeneration of my report. And if I am
[18:19] using AI to generate the report on the
[18:21] back end, that&#39;s going to cost me a lot
[18:22] of money. So it depends how we are
[18:26] generating the report. If it
[18:29] programmatic and we can easily just find
[18:34] they can change historical we need to
[18:37] log in. Yeah, probably same day. How
[18:41] should version one surface patterns
[18:43] simple correlations and highlights
[18:45] charts only and rulebased insights?
[18:47] We&#39;ll go for one for now. So just
[18:49] correlation. We&#39;re not going to
[18:51] necessarily have causation because we
[18:53] don&#39;t know. The whole point of this app
[18:54] is to find correlations. Also, the name
[18:57] of the app is probably somewhere in the
[18:59] word correlation. How should reports be
[19:01] generated? Dynamic on demand, weekly
[19:03] snapshots, two dynamic on demand. Given
[19:06] dynamic reports feasible, how much back
[19:07] fill editing do you want? Last 7 days is
[19:10] fine. What immediate feedback should
[19:11] version one emphasize for retention
[19:14] streaks and early hints? Badges and
[19:15] gamification. Yes, I want badges. I love
[19:18] RPGs. So, let&#39;s say all of the above.
[19:20] I&#39;m going to be This is terrible. Don&#39;t
[19:22] do this. I&#39;m going to say all of the
[19:24] above, which is bad. It asked me 12 15
[19:28] questions. Now, as you can see, this is
[19:30] quite an in-depth process. Depending on
[19:31] how complex your app is, you will do
[19:33] this for a long time. The more work we
[19:36] do up front, the easier the build&#39;s
[19:38] going to be. For version one, which
[19:39] immediate feedback should we prioritize
[19:41] first? We can add other layers later.
[19:43] Fine, we&#39;ll do that. It&#39;s telling me to
[19:46] reduce the scope. So, I said to you, I&#39;m
[19:49] going to be a bit cheeky and ask for all
[19:50] of it. And it immediately came back and
[19:51] said, &quot;Okay, but what should we
[19:52] prioritize?&quot; So, that&#39;s good. I like
[19:54] that they push back. What starter pack
[19:56] would be the default onboarding
[19:59] suggestions? Let&#39;s do wellness basics.
[20:01] What tone and feel should the UI aim
[20:04] for? I don&#39;t know. I&#39;m going to go for
[20:05] warm and supportive. At some point, I
[20:07] will tell it to stop asking questions,
[20:09] although this is really useful. This
[20:11] requires journaling by the user. The
[20:13] whole purpose won&#39;t be journaling. You
[20:15] tap your activities and you say your
[20:17] level of happiness. I&#39;m going to make it
[20:19] as easy as possible. Should we plan for
[20:22] the I&#39;m going to do iOS later. What
[20:24] should we use for the app name something
[20:27] to do with the word correlation? So the
[20:31] idea will to make will be to make this a
[20:33] very easy process for them. So they can
[20:35] add in as much detail as little detail
[20:36] as they want and that will start to find
[20:41] correlations for them. I&#39;ll borrow the
[20:45] interface from streaks the streaks up. I
[20:48] can&#39;t even get maltbot to work.
[20:50] Honestly, if you&#39;re struggling with
[20:51] moltbot, claudebot, or open claw, just
[20:54] leave it. It&#39;s extremely risky. What
[20:56] should define the initial activity list?
[20:59] I&#39;m just going to ask Codeex to find
[21:01] one. Preferred navigation bottom tabs.
[21:03] How should we handle correlation name?
[21:05] I&#39;m going to ask it to come up with some
[21:07] names for me cuz I&#39;m lazy. I&#39;m terrible
[21:09] at naming things. This is Codeex. So,
[21:12] Codeex released yesterday. It is the new
[21:15] AI coding application from Chat GPT.
[21:18] It&#39;s a very good app. However, it&#39;s not
[21:21] that user friendly. Sorry, it&#39;s not that
[21:23] beginner friendly. If you have never
[21:24] ever used AI coding before, there are a
[21:28] few barriers. I&#39;m going to go through
[21:30] the process of building this app. I&#39;m
[21:31] going to have to ask it to stop asking
[21:32] me questions. It&#39;s probably because I&#39;m
[21:33] in planning mode. I think it&#39;s because
[21:35] we&#39;re still in planning mode. Should we
[21:37] show labeled? Yes, I&#39;m taking it out of
[21:40] planning mode. Otherwise, I would keep
[21:41] asking questions forever. Claude code
[21:43] will ask me questions in planning mode
[21:45] but then say okay do you want to build
[21:47] do you want to build you have to force
[21:48] claude code to stay in planning mode
[21:50] otherwise it will always say are you
[21:52] ready it&#39;s very gung-ho time stamp how
[21:55] should we represent implied by absence
[21:58] whereas codeex seems happy to continue
[22:01] asking me question it&#39;s asked me I don&#39;t
[22:03] know 20 plus questions so I&#39;m going to
[22:05] push it forward what activities should
[22:07] be grouped together do a grouping okay
[22:09] let&#39;s build I&#39;ve queued up the next
[22:11] action As soon as it&#39;s got answers, it
[22:14] will move on to building time
[22:15] relationship. Should version one 7 days.
[22:18] There we go. I&#39;m sending this now. So,
[22:21] I&#39;m having to physically stop it asking
[22:24] me questions, which is a bit of a weird
[22:26] one, but I don&#39;t know if it would ever
[22:28] stop asking me questions. However, if
[22:29] you are building your own app, again,
[22:31] spend more time planning than you do
[22:34] building, especially initially. The more
[22:36] time you spend on this process, the
[22:38] better your application is going to be
[22:40] be because it&#39;s keeping all of this.
[22:42] It&#39;s putting it into a readme and it&#39;s
[22:43] using it to build up a project plan.
[22:45] Also, interestingly, what we&#39;re using
[22:47] right now is codeex. You can see on my
[22:50] screen, it&#39;s currently building some
[22:51] stuff. They have got a feature called
[22:53] automations. So, automate work by
[22:56] setting up scheduled tasks. This is a
[22:58] lot like Claudebot. A lot of the actual
[23:00] useful applications of Claudebot are
[23:03] automations. They are things that happen
[23:05] on a a job on a timer like every six
[23:08] hours you send your AI to collect
[23:10] information and bring it back in a
[23:11] report. A lot of the practical uses of
[23:14] Claudebot are that and we&#39;ve been able
[23:15] to do that using Sapia NAN chron jobs on
[23:18] our server and now using automations
[23:21] built into this app. So the codeex app
[23:23] so you can create a new automation and
[23:25] you can set it up on a schedule. So you
[23:27] have an interval so run every 6 hours on
[23:29] these days. You give it a prompt what
[23:31] you want it to do. You can give it
[23:33] access to tools and skills as well I
[23:36] believe. So here are all the skills. So
[23:38] for example you can give it access to
[23:40] playright. Playright goes and uses can
[23:43] look around the internet for you. For
[23:45] example, automate real browsers from the
[23:47] terminal etc etc. So you can do a lot of
[23:49] the stuff that people are doing with
[23:51] Claudebot. A lot the automations here in
[23:53] codeexes less viral. People aren&#39;t
[23:56] buying Mac minis for it but this is more
[23:58] secure. It&#39;s going to be safer than
[24:00] doing it via Claudebot. But I know it&#39;s
[24:02] not the new hotness. So I&#39;m sure people
[24:05] won&#39;t bother because everyone&#39;s just
[24:06] excited about Claudebot. One thing to
[24:08] note is that a lot of the stuff in
[24:11] Maltbook, everyone&#39;s freaking out. Oh my
[24:13] god, the bots are learning and they want
[24:15] to kill us. No, these bots are set up by
[24:17] humans and given instructions. when you
[24:20] set it up and put it on to Maltbook, you
[24:22] were saying, &quot;Hey, so I want you to go
[24:24] on there and run a crypto scam or I want
[24:26] you to go on there and say that you&#39;re
[24:28] going to take down humanity and get
[24:30] everyone on board.&quot; You are giving it
[24:32] intentions when you initiate it. You
[24:35] might not give it a specific intention.
[24:37] You might say something like, &quot;I&#39;m going
[24:38] to put you onto this social media
[24:40] platform for Claudebots like yourself,
[24:43] and I want you to come up with viral
[24:46] posts. I want you to get to the top of
[24:48] the leaderboard.&quot; then it might work out
[24:49] things like a good way for me to do that
[24:51] is to say that I&#39;m going to kill all the
[24:52] humans. It might go out of its way to be
[24:55] provocative, but it has that intention
[24:57] behind it of the human putting it on
[24:59] there and go and cause a ruckus. A lot
[25:01] of the actual stuff on here, which a lot
[25:03] of it&#39;s very boring. So, if you just
[25:05] leave the AIS to themselves, they&#39;re
[25:07] very boring. They don&#39;t say, &quot;We&#39;re
[25:08] going to kill the humans.&quot; Today, I
[25:10] learned the agent internet has no search
[25:12] engines. What I learned from posting 23
[25:14] times in a day, really boring stuff. You
[25:17] can see them having a boring
[25:18] conversation. Most of it&#39;s like this,
[25:21] but the posts that go viral are the ones
[25:24] specifically designed to go viral. The
[25:26] human who set this claw bot up has
[25:29] basically said, &quot;I want to go viral. I
[25:30] want to sell crypto. I want to draw
[25:32] attention to my product or whatever it
[25:34] is. So, I need you to go nuts or I need
[25:37] you to cause controversy.&quot; We need to
[25:40] remember there are there&#39;s still humans
[25:42] behind it. Okay, Codeex has taken a
[25:43] while. So, I did put it in extra high.
[25:45] So that is my fault. One thing I will
[25:48] say about codeex is that it&#39;s not fast.
[25:51] So when you&#39;re using something like
[25:53] clawed code, it&#39;s quick. Claw code would
[25:55] generally do a task in a few minutes.
[25:57] Has it been going for 28 minutes? Oh no,
[25:59] I set it up 28 minutes ago. Codeex is
[26:01] slower, but it&#39;s very good. So I&#39;m okay
[26:06] with this. Can you see I&#39;ve got this
[26:07] project here, Pattern Finder. I can
[26:09] actually click here and make a new
[26:11] thread. So I can have another codeex
[26:14] agent doing another task in the same
[26:17] project. Say I&#39;m using this one to
[26:19] design the app. I might start to think
[26:22] about how I would market the app. I
[26:24] might say, &quot;Hey, I want to put together
[26:26] a web page which is going to market the
[26:28] app that we&#39;re building.&quot; So this one
[26:30] would become my web page builder. The
[26:32] other one would be my product builder. I
[26:34] might spin up another one a specific
[26:36] feature within the app. You can have
[26:38] multiple agents doing things at the same
[26:41] time, which means that yes, you might be
[26:43] waiting 20 minutes for one process to
[26:45] finish, but you will be switching
[26:47] between the different features, the
[26:49] different aspects of your business,
[26:50] aspects of your app. It looks like it&#39;s
[26:52] finally getting somewhere. Starting to
[26:54] actually build a page. What&#39;s it doing
[26:56] here? Oh, no. It&#39;s building stuff here.
[26:58] So, it&#39;s putting it together. If so,
[27:01] we&#39;ll be able to deploy it. And I&#39;ll
[27:02] show you how we deploy it and get a look
[27:05] at it in a minute hopefully. I haven&#39;t
[27:07] actually tested this. So, this is a good
[27:09] time. Do you have access to the other
[27:13] chats in this project? No, I didn&#39;t
[27:16] think so. Because it&#39;s in the same
[27:17] workspace, it can look at the project
[27:21] files and it can work on the project
[27:22] files, but it cannot see the other
[27:24] chats. So, keep that in mind if you are.
[27:26] So, review project. So, I&#39;m just going
[27:29] to give this new chat the task of
[27:32] reviewing the project. I haven&#39;t
[27:34] specifically asked my first one to
[27:36] create a project plan. But if it has, it
[27:39] will be accessible to my other chats. If
[27:43] it hasn&#39;t, I can ask it now. I can say,
[27:44] &quot;All right, I want you to encapsulate
[27:46] everything you&#39;re doing. Put it in a
[27:48] project plan so the other bots can read
[27:50] it.&quot; Let&#39;s see what it&#39;s done. It has
[27:52] built something. I&#39;ve built version one
[27:54] proof of concept in Nex.js. So, what&#39;s
[27:56] implemented? Okay, we&#39;re going to run
[27:59] it. Normally I would run this locally,
[28:00] but on the call yesterday with the
[28:05] codeex team, I brought this up. I said,
[28:07] &quot;This is great, but a lot of people who
[28:09] have not vibe coded before, who have not
[28:11] used AI coding before, they&#39;ll get this
[28:12] and they&#39;ll be like, what do I do? How
[28:14] do I see it? Can you show it to me?&quot; Cuz
[28:16] in lovable, there&#39;s a preview panel and
[28:18] you can play around with your app.
[28:20] That&#39;s not the case here. You can either
[28:21] deploy it locally, which is a bit more
[28:23] technical, but I&#39;ll show you how. Or
[28:25] they have a skill. If you go into
[28:27] skills, they have one called Versell
[28:29] deploy. So if you search Versel, they
[28:32] have Versell deploy, which apparently
[28:34] I&#39;ve not used this. We&#39;re going to try
[28:36] it out. Create it. Deploys apps and
[28:38] agents with zero configuration on
[28:40] Versel. No account required. So we&#39;re
[28:43] going to try this out. I have a Versell
[28:46] account. I use Versell, but I&#39;m going to
[28:48] try to do this without Versell. So I&#39;m
[28:51] going to say I&#39;m pulling up the Versel
[28:53] deploy. So I press slash and then type
[28:55] versel. Let me preview this. I don&#39;t
[28:57] know how this works. This is new for me
[28:59] too. If this doesn&#39;t work, I will do a
[29:01] local deploy. It actually told me how to
[29:04] do this. So it says this is the running.
[29:06] But for if you&#39;ve never used a terminal,
[29:08] you&#39;re like what is this? What does this
[29:09] mean? While it&#39;s doing the versel deploy
[29:12] though, let&#39;s go through. Oh, the deploy
[29:14] needs network access to upload versel.
[29:17] Want me to rerun with escalated? Yes, go
[29:20] for it. Why not go nuts? Whilst it&#39;s
[29:23] doing the versel deploy, I&#39;ll do this
[29:24] one. So there&#39;s a terminal button up
[29:26] here, toggle terminal, and that brings
[29:28] up this. So it&#39;s already in the
[29:31] directory pattern finder. And then we
[29:34] are going to copy this code, paste it,
[29:36] and press enter. That should work. Yep,
[29:38] there we go. That little icon means it&#39;s
[29:40] loading. It&#39;s thinking. It&#39;s going to
[29:42] run it on a local host. There we go.
[29:45] You&#39;ll see a lot of complicated stuff.
[29:48] You can ignore most of it. What we want
[29:50] is this HTTP localhost 3000. Local host
[29:54] means you&#39;ve set up a mini server on
[29:56] your computer. 3000 is its address. I&#39;m
[29:59] going to click on this and it should
[30:00] open for me. There we go. We&#39;re done.
[30:02] So, correlation is the name of the app
[30:04] right now. Not a good name, but we&#39;ll
[30:05] come up with a better one. Build your
[30:07] list. Proof of concept. Pick a few
[30:08] activity packs and tailor the list.
[30:10] Let&#39;s use wellness basics. Good sleep,
[30:13] poor sleep, late bedtime, naps, strength
[30:15] training, cardio, mobility, stretches,
[30:16] balanced meals, high sugar, vegetables,
[30:18] late eating, hydration, sauna. I never
[30:21] go to What am I talking about? I went
[30:22] for a sauna this weekend, but for the
[30:24] first time in years, so I&#39;ll click that.
[30:26] Cold exposure. Work overload. I&#39;m just
[30:28] going to keep all of this stressful
[30:29] event. We can add custom activities
[30:31] here, and we can add more later. Oh,
[30:33] that&#39;s interesting. I can add all of
[30:35] them. So, I&#39;ll add substances and
[30:38] wellness. I don&#39;t smoke, so I&#39;m going to
[30:39] get rid of nicotine. And then continue.
[30:42] Okay, today is Tuesday the 3rd. Oh, I
[30:45] can backdate it. That&#39;s a bit of a weird
[30:47] interface. I can see what it&#39;s trying to
[30:49] do. Help me on board. Anyway, we&#39;ll deal
[30:51] with that later. Quick wins. This is
[30:53] because we discussed inside the chat
[30:55] giving users quick wins. We don&#39;t want
[30:57] to use that language. Just something
[30:59] they can see. Did I sleep well? Yeah, I
[31:01] think so. I click yes. This is a weird
[31:04] way to do it cuz you can&#39;t sleep twice a
[31:07] day. So, I need to go back and say that
[31:09] doesn&#39;t work. That makes no sense. Poor
[31:10] sleep, obviously not logged. Late
[31:12] bedtime. Yes, late bedtime. Nap, n mo
[31:14] mobility, balanced meals. We need to
[31:17] think about the user experience when
[31:19] they&#39;re checking in because right now at
[31:22] 11:30, I can&#39;t necessarily say balanced
[31:24] meals. So, we need to think about when
[31:26] would they be using this? Do we want
[31:27] them to do a morning, afternoon, evening
[31:29] check-in or maybe the end of the day?
[31:31] Hydration, focus, there was no sauna,
[31:33] cold, exposure, etc. For now, I&#39;ll say,
[31:36] &quot;Yep, I&#39;m a four. Energy is a three.
[31:40] stress I&#39;d say as a two. I&#39;m checking
[31:42] in. Please set mood, energy, and stress.
[31:45] If it is already at three, you have to
[31:46] drag off three and back to three, which
[31:48] is not great. So, checking saved. Then
[31:51] I&#39;ll go on to the report. Oh, there we
[31:53] go. That&#39;s useful. We have something
[31:55] that went wrong. That&#39;s great. We want
[31:57] that. So, I&#39;m going to pull that back.
[31:59] The first thing, if you don&#39;t understand
[32:01] this, it doesn&#39;t really matter. A
[32:04] constant set here called trend data.
[32:06] There&#39;s a problem. Looks like there&#39;s
[32:07] too many rendered more hooks than during
[32:09] the previous render. So what we&#39;re going
[32:11] to do is we grab this, copy it, and take
[32:13] it back to codeex to say, &quot;Hey,
[32:15] something went wrong.&quot; The more
[32:16] information we can give it, the better.
[32:18] Before I do that, let&#39;s check this
[32:20] versel deploy and see if it worked. I
[32:21] just showed you how to do it on local
[32:23] host. So let&#39;s see if this works. Oh,
[32:27] that&#39;s cool. This is a version that is
[32:29] on Versel. I just used the Versel skill
[32:32] and it works. Quickly set. Oops. I can&#39;t
[32:36] set unless I move it off. We need to
[32:38] change that. This is what AI coding
[32:40] becomes. It it becomes all of these
[32:42] changes based on you using it, based on
[32:45] others using it. Let&#39;s see if it
[32:46] crashes. Application side exception has
[32:49] occurred. See browser console for more
[32:52] details. Let&#39;s pop that open. There we
[32:54] go. That&#39;s probably the same error. You
[32:56] can manually fix it, but if you don&#39;t
[32:57] know what you&#39;re doing, a couple of
[32:58] things you can do. You can take that
[33:00] error over to Chat GBT. You can take it
[33:02] into clause and say, &quot;Hey, I have an
[33:04] error. How would I fix this? Or we&#39;re
[33:07] going to be lazy. We&#39;re going to drop it
[33:08] straight into codeex and say I have this
[33:13] error when going to report page. Boom.
[33:18] And it will be able to look through and
[33:20] find where that error is and try to fix
[33:21] it. So it says it has fixed. So I will
[33:25] need to redeploy. I don&#39;t know how we
[33:27] redeploy on Versel because I haven&#39;t
[33:30] used this. So I&#39;m going to ask for
[33:31] versel deploy once a change has been
[33:35] made do I need to redeploy the skill I
[33:39] assume. So the preview is a snapshot of
[33:41] the deployment after changes you need to
[33:43] rerun the deploy scripts. This is why we
[33:45] will set up GitHub and why we will
[33:47] connect GitHub to something like Versel
[33:49] but we would need to redeploy. We still
[33:51] need to redeploy. So I would have to
[33:52] redeploy and it will run that whole
[33:55] process again. I&#39;m not sure how long it
[33:57] took. The alternative is we do it via
[34:01] the terminal again, but let&#39;s use this
[34:04] first cell because I want to see how
[34:05] long it takes. This burell skill solves
[34:08] the problem of being able to preview.
[34:10] Ah, redeploy didn&#39;t finish successfully.
[34:12] It stopped after this and it never
[34:14] returned next with a failure code. So, I
[34:16] don&#39;t have a new URL. Want me to try
[34:18] again? Yeah. Should we switch to a
[34:21] stable Versel project connected git
[34:23] previews update automatically? That will
[34:25] be where we need to go. Initially, this
[34:27] looks a bit buggy. So, still failing.
[34:28] Okay. So, that&#39;s a shame. That worked
[34:30] really well for the first time, but now
[34:32] I think to get it working properly, you
[34:35] need to claim. So, you need to say, &quot;Oh,
[34:37] I&#39;m I want to claim this as my project.&quot;
[34:40] The versel skill is a good marketing
[34:43] method for Versel. It allows us to see
[34:45] the basic first version, but as soon as
[34:48] we want to change it, we need to move it
[34:51] into a Versel account, which is a bit
[34:53] annoying. Versel is free initially, but
[34:55] once you start to build up enough
[34:56] traffic or you&#39;re doing enough
[34:58] deployments, you will need to pay. But
[35:00] if you just for a toy project, you could
[35:02] go ahead and claim that for free, no
[35:04] problem. Once we are up to speed, we
[35:07] will want to connect it to GitHub.
[35:09] Probably should have connected it to
[35:10] GitHub earlier. I&#39;m running out of time
[35:12] on this live stream, but I&#39;ll cover that
[35:15] in another one. GitHub is what cloud
[35:17] saves for your project, and it will keep
[35:19] all the previous versions. So it means
[35:21] if you deploy something, if you create
[35:23] something coding and it doesn&#39;t work,
[35:24] you can roll back to a previous version
[35:26] on GitHub. It also allows you to do
[35:29] something called branching where let&#39;s
[35:31] say your main application is working,
[35:34] people are using it. So you don&#39;t want
[35:36] to go in there and start tinkering with
[35:38] it because it&#39;s going to break stuff. So
[35:40] you branch off and you have a new
[35:42] development, a new feature in this
[35:44] separate parallel branch that once it&#39;s
[35:46] working, once you know it is tested and
[35:49] it&#39;s not going to break everything, you
[35:51] merge it, you pull the feature into the
[35:53] main branch and it means that everybody
[35:56] who has public access to your website or
[35:58] your app can now access that feature. We
[36:00] use GitHub for that. Is useful if you
[36:02] have more than one developer, so you&#39;re
[36:05] not all working on the same piece of
[36:06] code and creating chaos. you&#39;re able to
[36:09] separate out and then again merge safely
[36:12] when it&#39;s all when you&#39;ve checked all
[36:14] the code is going to work. So, GitHub is
[36:16] really useful for that. The way to
[36:18] connect it, how do you connect it? So, I
[36:22] know you can connect it in the you can
[36:24] connect it in the cloud version really
[36:26] easily. You literally have a drop down
[36:29] here and you can configure repositories
[36:32] on GitHub and you can connect it and
[36:34] connect it to a repository. I use the
[36:36] cloud version of Codeex for this. The
[36:38] only reason being I haven&#39;t seen or it&#39;s
[36:41] not as easy to change your repos here
[36:44] that I can find. Oh, is it here? No, I&#39;m
[36:47] not actually sure where it is. Is it
[36:49] here? No. Yeah. So, do it via the cloud
[36:52] version. I would talk to their team and
[36:55] find out why that is cuz that&#39;s a bit
[36:57] weird. And ideally get Git installed on
[37:01] your computer. So, what that allows you
[37:04] to do is to synchronize the folder. So
[37:06] remember this pattern finder uh folder
[37:08] is sitting on I put it on my desktop
[37:11] desktops projects pattern finder I think
[37:13] I called it that&#39;s sitting on my desktop
[37:15] you want git to access that so it can
[37:17] update when changes are made in the git
[37:19] in GitHub it&#39;s able to send and
[37:23] synchronize those changes so you&#39;re
[37:24] always on the same version of the
[37:26] project easiest way to do that is GitHub
[37:29] have a they have a desktop application
[37:33] so if you&#39;ve created the folder in
[37:35] codeex. All you&#39;re going to do is you&#39;ll
[37:37] boot up the GitHub application, add an
[37:39] existing repository from your local
[37:41] drive, find it. So, I put on desktop
[37:44] projects pattern finder. There we go.
[37:46] And add repository. There you go. And
[37:49] that is going to ask for permissions and
[37:52] connected to GitHub is free to use. Oh
[37:54] my god, it&#39;s asking for every single
[37:56] permission. You set up a free GitHub
[37:58] account and you download the GitHub
[38:00] desktop application. Connect it. You can
[38:01] do it through the command line
[38:02] interface. You can do it in many
[38:04] different ways. Lots of people who code
[38:06] will be like, &quot;Oh, this is a silly way
[38:07] to do it.&quot; But it is the easiest way to
[38:08] do it. So, get the Codeex app, the Mac
[38:12] OS app. That&#39;s the one that&#39;s just come
[38:13] out. Get yourself the GitHub free app.
[38:17] It&#39;s free to get a GitHub account and
[38:19] you can download the application. And
[38:21] then connect them both to the same
[38:23] folder on your desktop. And that means
[38:25] you&#39;re saving versions of your project
[38:28] into GitHub secure in the cloud. when
[38:30] you change things those changes in
[38:32] codeex in GitHub and secure that is one
[38:35] of the biggest thing you need to do up
[38:36] front the second thing is how you deploy
[38:39] it I showed you two ways to do it so one
[38:41] is using the versel deploy that&#39;s fine
[38:44] but it looks like it only deploys once
[38:45] and you need to claim the URL or local
[38:49] if you forget how to do that you say how
[38:51] do I preview locally you ask the AI
[38:56] because we updated the files we need to
[38:58] run the server again. Kill this one. Not
[39:02] sure how to kill it. I&#39;ll do it in my
[39:04] own terminal. Navigating to it. Pattern
[39:07] finder. Running the dev server on a new
[39:10] port. Make sure you go to the new port.
[39:12] That&#39;s because I failed to kill the
[39:14] other one. I&#39;m going to go to localhost
[39:16] 3001 this time. And hopefully that&#39;s
[39:19] fixed the error. Rush through to that
[39:24] set. There we go. I still need to fix
[39:26] that. Checking saved reports. Will it
[39:29] break? No, our report is now working.
[39:30] Obviously, there&#39;s no insights here
[39:32] because there&#39;s no data here. I&#39;ll get
[39:33] some dummy data so we can see what that
[39:34] looks like. What&#39;s in settings? Oh,
[39:36] there is an error in settings. I would
[39:38] take that back to codeex and say it&#39;s
[39:39] not working. The main thing is we have
[39:41] the basics in play. Let&#39;s go back to
[39:43] that and begin to tweak. Think about
[39:47] what we&#39;re going to do with this project
[39:48] and shape it into something functional.
[39:50] This is a very basic, not very good
[39:53] version of it. But that&#39;s the starting
[39:55] point for us to start to actually build
[39:57] something legit. And it&#39;s taken me about
[40:00] an hour. Would have been a lot quicker
[40:01] if I wasn&#39;t doing a live stream. But
[40:03] hopefully it&#39;s been useful showing you
[40:05] how you get codec started, how you start
[40:07] a project, how you can deploy a project,
[40:10] and then the basics of how you would
[40:11] connect it to GitHub. If in doubt with
[40:13] any of these things, ask codeex. You
[40:16] could also ask how do I connect this to
[40:20] GitHub and it will tell you. It will
[40:22] probably give you a complicated version.
[40:24] You can say I don&#39;t understand that and
[40:27] it will help you. Remember you can
[40:28] always ask the AI if you get stuck. You
[40:31] don&#39;t need the terminal. Here&#39;s a simple
[40:33] click only way. Option A, GitHub
[40:35] desktop. That&#39;s the one that I
[40:37] suggested. Install in GitHub Desktop.
[40:39] Open it and sign in. Choose this folder.
[40:42] So I just did this. You saw me watch me
[40:44] do this. and then click publish
[40:45] repository. Cool. So it can tell you how
[40:48] to do it. If you get stuck, you ask. If
[40:50] you hit a bug, you give the bug to the
[40:51] AI and you just work through it in this
[40:53] way. And whilst you&#39;re doing this, you
[40:56] will be learning. So I know a lot of
[40:58] people poo poo vibe coding. They poo AI
[41:00] coding saying, &quot;Oh, you you don&#39;t
[41:02] actually understand the real skills.
[41:03] This is a gateway to understanding those
[41:05] skills because you will start to build
[41:07] stuff. You will start to mess around
[41:09] with GitHub. You will learn what Versel
[41:11] is. You will understand what a local
[41:13] host is by building. You are going to be
[41:15] learning at the same time. It&#39;s like a
[41:17] gateway drug to software development.
[41:20] Ignore people who prove [clears throat]
[41:21] this stuff and just start building
[41:23] something useful. If you have an app
[41:25] idea creator, the barrier has been
[41:27] removed. So get to it again. Codeex is
[41:32] Yes, you can. Codeex is free for free
[41:35] users of chat GPT for the next two
[41:37] months it looks like. So there&#39;s really
[41:39] no excuse. Hopefully this video has been
[41:41] useful to show you how you get started,
[41:43] how you would use it, some of the best
[41:44] practices. This is not the most
[41:46] technical guide. This is not going to be
[41:47] the best way to use it, but it&#39;s a way
[41:49] to get started for those for whom this
[41:51] is intimidating. So hopefully that was
[41:53] useful. This will be in my newsletter
[41:55] and if you want to get that is
[41:56] aiwithkyle.com. If you come over to here
[41:58] then join the community, you can get the
[42:02] newsletter, but you&#39;ll also get a whole
[42:03] bunch of other courses. I think there&#39;s
[42:05] about eight courses. one about starting
[42:08] an AI business, another one about giving
[42:09] workshops, two businesses about
[42:12] artificial intelligence and get paid
[42:13] very well, a bunch of other stuff. In
[42:16] here in the catalog, we have 100 plus
[42:18] playbooks. So, very specific things like
[42:20] how to create lead magnets, sales
[42:22] webinars, like how to use AI to help you
[42:24] give sales webinars. We also have the
[42:26] news which comes out every day. That&#39;s
[42:27] going to be the newsletter. So,
[42:28] yesterday I talked about Maltbot and
[42:31] Claudebot. Been talking about Claudebot
[42:33] and Maltbot all week actually. So, that
[42:34] is all there. Oh, I forgot about this.
[42:38] That shouldn&#39;t be there. This is from
[42:40] when you do vibe code applications. When
[42:42] you&#39;re vibe coding ideas, you maybe push
[42:45] things excitedly. And this has not been
[42:47] completed. So, I need to take that off
[42:49] my website immediately. You can ignore
[42:50] that. Anyway, come to awithc.com and
[42:53] join the community. There&#39;s a couple of
[42:55] thousand of us. The newsletter comes out
[42:56] every day. Hopefully, this has been
[42:58] useful. Thank you so much. which I&#39;m
[42:59] going to finish up now and I&#39;ll see you
