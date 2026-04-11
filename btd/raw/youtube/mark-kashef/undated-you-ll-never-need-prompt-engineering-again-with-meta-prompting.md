---
title: "You’ll NEVER Need Prompt Engineering Again with Meta-Prompting"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=cgBVHj9DXXY"
video_id: "cgBVHj9DXXY"
duration: "17:32"
transcript_method: "youtube-captions"
segment_count: 481
char_count: 18028
status: ingested
topics: []
meta_patterns: []
---

# You’ll NEVER Need Prompt Engineering Again with Meta-Prompting

**Creator**: mark-kashef | **Duration**: 17:32
**URL**: https://www.youtube.com/watch?v=cgBVHj9DXXY
**Transcript**: 481 segments, 18028 chars

## Transcript

if you watch this video till the very end you'll never have to write a prompt on your own ever again I'm going to show you a technique called meta prompting which is pretty much getting an AI to prompt itself and give you the prompt that you can then use to tell the AI what to do if that sounds a bit confusing I'm going to break it down fully in this video and I'm going to show you how to use this technique that I think you can use for years to come now if you don't know who I am and why you should listen to me about prompt engineering my name is Mark and I've been running my own AI Agency for the past 2 years called prompt advisor I have a background in natural language processing and AI in general where I did a masters and I fully dedicated a whole portion of it to just learning how Transformers which is pretty much the Bedrock of all of these models actually work now in terms of using this technique you can go on YouTube and find endless tutorials about how to write a prompt how to structure it how to actually use different Frameworks and how to use people's template the issue with all of these is is as soon as new models come out a lot of them become deprecated meaning a prompt that worked perfectly on gb4 6 months ago isn't working quite as expected in gb4 Omni or at the very least it's behaving very differently let alone if you want to use the same prompt from open Ai and use it in an anthropic model you're going to see a huge disparity there in how that actually works this is a concept it's called prompt drift and it's something that all my clients are beginning to realize can creep into your AI apps your infrastructure and even just basic automations you've set in place that's why if you use meta prompting you'll always ask ask the AI to pretty much get a cheat sheet of how it likes its prompts to be written and what will work the best for that llm based on that lm's opinion in a nutshell meta prompting is literally just saying you are a prompt engineer as the main rule of the prompt and then you just say hey just write a prompt for me that will do X Y and Z that's pretty much how it works at its lowest level but I'm going to show you three different tiers of prompting that will let you go from novice to meta prompting expert in a very short amount of time so let's get started so if we jump here into GPT and I'm only using chat gbt to demo you can use this on any large language model and I'm actually going to show that in a product called po right after but if we start with chat gbt so you pretty much start by writing you are a prompt engineer and let me just zoom in here there we go you write very bespoke detailed and succinct prompts I want you to write me a prompt that will generate SEO optimize blog content now I'm going to add a few different instructions here and I'll tell you why I'm adding them at a very high level so I'm going to say instructions output the prompt you generate in markdown output The Prompt in a code block those are the two main things and I'll tell you why markdown is pretty much when you have hashtags or dashes or asterisks that're used used to represent things like headers subheaders and Bolding the reason why you want to put this in is that a lot of large language models take these symbols of hashtags or headers as a proxy for important so using that you can try to control the mechanism in these large language models called attention to divert the attention of let's say chat chbt to focus on a certain tier of your instruction so if you put a hashtag at the very top of an instruction and you say hey this is my instruction pay attention to this cuz this is a whole section of information I want you to consume or understand and you've probably seen this in countless tutorials or any prompt you've seen on the internet where you see a section called context and then sometimes it's task and then instruction and then variables or examples or something along those lines when you put a hashtag think of it as a form of anchor where that hashtag or double hashtag represents this is the most important category I want you to pay attention to and a subtitle could be like also it's also important but not as important as is that main header and especially if you wanted to look at certain things like keywords I like to put them in double asterisks because those represent Bolding so it's basically translating what you would see on let's say a Google doc or a Microsoft Word into this language where it kind of denotes that same proxy for important now without further Ado if we just let this fly you're going to see here is going to start actually generating that prompt and it's generating the instructions on its own even though I didn't even give it to myself and the reason why I put it in a code block is for two reasons one is it's easier for me to see kind of what it's doing in markdown that black and white makes it very clear and when if I want to go and actually use it in something like chat gbt all I have to do is just click copy code open a new session and then paste it zoom out make the edits I need to make maybe remove this title here and you can see I didn't even tell it to create a role based prompt it wrote itself you are an expert content creator specializing in SEO optimized blog posts your task is to create engaging informative and SEO friendly blog posts on the topic provided now if we keep going you're going to see it created its own instruction section that it denoted with three hashtags and then if you go down you see it's using asterisks to denote like some of the headers or kind of the Bold statements using dashes as well and it gives its own example outline to the model to come up with a blog post now the idea here is that unless you make your own template or let's say a custom GPT you'll never be done 100% of the way just by asking it to write the prompt for you ideally you want to give it examples of what you're expecting or example prompts you in the past that it can emulate so you can go from idea to the actual prompt in a much shorter amount of time this is actually just baby steps of how to use this technique in a way that anyone can write this in any language and it'll work perfectly now that was the Bare Bones Basics level one of how to use meta prompting if you want to use it at a higher level maybe say level two then you should give it an example of a prompt that you really like in terms of its style the way it's written which again you can find anywhere and you feed it in as an example so in my case here I created this sample prompt where you have a role again the hashtags denote importance or a category that I wanted to pay attention to you have task you have specifics content guidelines SEO op mization output format an example and then you have this note section where I add certain things like a key variable that I want to add and notice here that one of the inputs is some form of variable that's being called a topic underscore variable using this technique by the way is super helpful because if you put it at let's say the very bottom of a prompt if we did this move this to the very bottom it becomes really easy to constantly change your input so in this case all you'd need to do is remove this and this would be your main input to the actual model now fun fact which is one of the reasons why I put it at the very bottom is large language models up until now pay attention the most to what's at the very beginning and the very end of a prompt because of that that's why if you're creating a role for the actual agent you put it at the very beginning and if you want to set some form of variable or you want to pay attention to some form of dynamic input from you I tend to put that at the very bottom now 3 4 months from now this could be old news and it pays attention perfectly to every single part of the prompt but for now it's a good way way to make sure that the large language model is paying attention to the thing that matters most now let's try to actually apply this in practice so we'll go back into chat gbt and it'll say you are a prompt engineer you prompt like this and then I'm just going to put it in quotes there we go and I'll say I want you to create a prompt let's Zoom back in here there we go that lets me take one input which is uh an idea and you write a social media post for the following uh Instagram LinkedIn X and Facebook so if I just click this and I write make sure that your output is in a code block make sure that you emulate the style I gave you again super lazy prompt took me what around a minute to actually right because I'm actually speaking through it and if we just let that fly it should emulate that one example and it is it's creating that role it's creating the task now because I'm using chat gbt it knows I'm Mark so it's based on my custom instructions but you'll see here it's emulating it perfectly and now it changed that variable I referred to to an idea variable which which is very important here when it comes to SEO optimization it's looking for LinkedIn and Facebook it's creating a post so the output format they listened Instagram post a LinkedIn post X post and a Facebook post and then even created a variable called idea variable and I wrote a sample idea now it went a little bit fancy here and it even demoed what a possible output might look like to that prompt which is pretty cool so what I can do is just so I can easily copy paste it I'm going to tell you don't worry about the output just give me the input don't you got to be nice to the AI awesome so now we just have the core component of the input and we can open a new session paste it we'll zoom out a little bit and if we look at it here you can see everything's pretty much up to Snuff and we even have a notes section that it created based on that example it has fine print that you can use to filter any important notes or restrictions that you want to introduce into the actual prompt now all we have to do is just set the idea variable to something that open AI is better than llama 3 just a random idea and you'll see here even in the output it has that markdown built in so it's generating an Instagram post a LinkedIn post an X post and a Facebook post and again it's really important to take into consideration that it would have taken you 1 to 3 minutes assuming you had an example to feed it just to get to this level where you can now start spending the next half hour or hour just fine-tuning it to your perfect use case and the more you do this the more efficient you can get because you can go and actually create a custom GPT and call it my prompt engineer where the actual custom gbt is you are a prompt engineer that always creates prompts like this this and this maybe give it three to five examples and then moving forward all you have to do is just fire up that custom gbt tell it what you're trying to actually accomplish and write a prompt for and it's always going to Output it in markdown always going to Output it in a code block and you'll be able to iterate much more quickly moving forward now I'll build a very quick one just quick and dirty just to give you the idea of what's possible so let's go to explore gpts I can create my own GPT here I'm just going to call it my prompt Helper and I'm just going to say when the user says create my prompt create a prompt for the given topic they want by asking them first what they would like to have the prompt accomplish once you get the response create a prompt in this format and then I'll just go here go back to our example and we'll paste that here boom and then I'll say restrictions I'll put a little hashtag make sure to Output all prompts in a code block keep any variables at the very end available to be easily set so let's just give an example here example topic variable equals and then some blank here make sure to Output all prompts in markdown and then I'll just create this conversation starter create my prompt so if we click on this it should ask me what I want to create a prompt about I want a prompt that takes blog content and writes LinkedIn posts with it so it should be using the example I gave it and pretty much all I had to do was just tell it hey here's the topic go and write a prompt and there it is it writes you a whole prompt end to end in a code Block in markdown and what's extra interesting is that it's actually generating examples on its own there's a rule of thumb that a lot of these models work really well when they're given 3 to five examples so if you're feeling that your prompt is getting 90% of the way there but not 100 ask LM to add a few more examples to its own prompt to give more hints as to what it should be going for sometimes it works really well and if you check any of the benchmarks that big models use like anthropic or open AI they show their top performing benchmarks based on a five multi-shot which is literally five examples given to the model and they base their criteria of accuracy based on a Model that's actually been given five examples to Monkey C and monkey do from so keep that in mind because it becomes very helpful as you try to troubleshoot why you're not getting the exact result you're looking for now with this you see at the very end here we have our blog content variable set nice and tidy for us and all we have to do is just copy paste that blog content go in and tweak some things and then Bob's your uncle and you're good to go now that was level two level three meta prompting is being able to do this process across different large language models to know how you should talk to each AI which I think again will be super important in the next four or 5 years when everything we do and pretty much every service we interact with has some form of AI we have to talk to so knowing how to speak to different models is super helpful and that's why I'm going to show you po which if you are not familiar with this tool it's pretty much like a chat chbt except for the 20 bucks a month you can write messages to all different types of LMS on the platform and you're not limited to just chat GPT itself or just claw they also have a really cool feature which I'm about to show you which lets you jump around from llm to llm experimenting with what the result would be from that same prompt so if I get started here let's say with a clock 3.5 Sonet and then we just go back here let's just recycle some of our hard work and I'll say you are a prompt engineer and let's do the whole blog content thing so we'll just put that here and if I just click this it should start generating The Prompt but this time using Claud 3.5 Sonet so you'll notice we already have some differences in how it writes The Prompt Claude seems to like square brackets where open AI seems to like double curly brackets so you'll see here it's much more succinct prompt and on it seems to be more efficient in being able to write that prompt and not having to write as much now what's cool about PO is that I can just say compare to one of these models and it'll apply the exact same prompt to that model so we can see the difference so if I click on Gemini 1.5 Pro you'll see that this prompt is wildly different from this one for cloud 3.5 Sonet it's much more detailed it's going down to very granular levels and there's even a qual to action sample at the bottom and last but not least if we just gave this to something like Minal large you'll see that this one is a lower level model probably like a dumber model so the way it writes a prompt is it doesn't even establish a rule there's no role to the actual agent on what it should or should not be doing but that's a bit of a nutshell in terms of like how you can actually experiment to see is your prompt something that every llm would kind of agree on because if you're trying to build a prompt that works across multiple llms something like this is really helpful to be able to try to create the average prompt that will work across different LMS and this is something that we do at prompt advisors as a test to see you know if we build this application with this prompt in 5 to 6 months is there a very high likelihood that we'll still be getting the same result now there are other parameters here that I haven't discussed I didn't want to go too in depth but things like temperature things like top PE which I won't get into or token sampling those can also play a role as well as to like how a prompt will actually perform but something like meta prompting at least gets you that 80% of the way there instead of just paying someone like me to build you a prompt from scratch you can get almost all the way there and then if you need some fine tuning then that's worth the time to actually spend and get it to work perfectly the cool thing about this technique is that it's not just limited to just textual prompting eventually as more textto video models come out you can start asking those models hey how should I prompt you and the same thing with AI calling agents there's a specific style that you write those prompts in to get the best results you can do the exact same thing where you just ask that model I want to build a calling agent here's four examples of prompts that I saw on the internet that work really well with something like Bland AI or vapy emulate this and here's what I'm trying to do and here's my example script just using that same technique over and over again one is you'll actually start getting better at it and two you'll realize how many more things you can apply this technique to and how many doors I open for you to be able to start quickly using generative Ai and understanding how to get results faster now if you actually watch this video to the very end I'd super appreciate if you could just like And subscribe the channel and let me know if content like this is actually helpful and if you have other questions about prompt engineering that could make my next video is about

## Timed Segments

[0:00] if you watch this video till the very
[0:01] end you&#39;ll never have to write a prompt
[0:03] on your own ever again I&#39;m going to show
[0:04] you a technique called meta prompting
[0:06] which is pretty much getting an AI to
[0:08] prompt itself and give you the prompt
[0:10] that you can then use to tell the AI
[0:13] what to do if that sounds a bit
[0:14] confusing I&#39;m going to break it down
[0:16] fully in this video and I&#39;m going to
[0:17] show you how to use this technique that
[0:19] I think you can use for years to come
[0:21] now if you don&#39;t know who I am and why
[0:22] you should listen to me about prompt
[0:24] engineering my name is Mark and I&#39;ve
[0:25] been running my own AI Agency for the
[0:27] past 2 years called prompt advisor I
[0:29] have a background in natural language
[0:31] processing and AI in general where I did
[0:33] a masters and I fully dedicated a whole
[0:35] portion of it to just learning how
[0:37] Transformers which is pretty much the
[0:39] Bedrock of all of these models actually
[0:41] work now in terms of using this
[0:43] technique you can go on YouTube and find
[0:44] endless tutorials about how to write a
[0:46] prompt how to structure it how to
[0:49] actually use different Frameworks and
[0:51] how to use people&#39;s template the issue
[0:53] with all of these is is as soon as new
[0:55] models come out a lot of them become
[0:57] deprecated meaning a prompt that worked
[0:59] perfectly on gb4 6 months ago isn&#39;t
[1:02] working quite as expected in gb4 Omni or
[1:05] at the very least it&#39;s behaving very
[1:07] differently let alone if you want to use
[1:08] the same prompt from open Ai and use it
[1:11] in an anthropic model you&#39;re going to
[1:13] see a huge disparity there in how that
[1:15] actually works this is a concept it&#39;s
[1:17] called prompt drift and it&#39;s something
[1:18] that all my clients are beginning to
[1:20] realize can creep into your AI apps your
[1:23] infrastructure and even just basic
[1:25] automations you&#39;ve set in place that&#39;s
[1:27] why if you use meta prompting you&#39;ll
[1:29] always ask ask the AI to pretty much get
[1:31] a cheat sheet of how it likes its
[1:33] prompts to be written and what will work
[1:34] the best for that llm based on that lm&#39;s
[1:37] opinion in a nutshell meta prompting is
[1:39] literally just saying you are a prompt
[1:40] engineer as the main rule of the prompt
[1:43] and then you just say hey just write a
[1:45] prompt for me that will do X Y and Z
[1:47] that&#39;s pretty much how it works at its
[1:48] lowest level but I&#39;m going to show you
[1:50] three different tiers of prompting that
[1:52] will let you go from novice to meta
[1:54] prompting expert in a very short amount
[1:56] of time so let&#39;s get started so if we
[1:58] jump here into GPT and I&#39;m only using
[2:00] chat gbt to demo you can use this on any
[2:03] large language model and I&#39;m actually
[2:05] going to show that in a product called
[2:07] po right after but if we start with chat
[2:09] gbt so you pretty much start by writing
[2:11] you are a prompt engineer and let me
[2:15] just zoom in here there we go you write
[2:20] very
[2:21] bespoke
[2:23] detailed and
[2:25] succinct prompts I want you to write me
[2:29] a prompt that will generate
[2:34] SEO optimize blog content now I&#39;m going
[2:37] to add a few different instructions here
[2:39] and I&#39;ll tell you why I&#39;m adding them at
[2:40] a very high level so I&#39;m going to say
[2:42] instructions output the prompt you
[2:45] generate in markdown output The Prompt
[2:50] in a code block those are the two main
[2:53] things and I&#39;ll tell you why markdown is
[2:55] pretty much when you have hashtags or
[2:57] dashes or asterisks that&#39;re used used to
[3:00] represent things like headers subheaders
[3:02] and Bolding the reason why you want to
[3:04] put this in is that a lot of large
[3:06] language models take these symbols of
[3:09] hashtags or headers as a proxy for
[3:11] important so using that you can try to
[3:13] control the mechanism in these large
[3:15] language models called attention to
[3:17] divert the attention of let&#39;s say chat
[3:19] chbt to focus on a certain tier of your
[3:22] instruction so if you put a hashtag at
[3:23] the very top of an instruction and you
[3:26] say hey this is my instruction pay
[3:28] attention to this cuz this is a whole
[3:30] section of information I want you to
[3:32] consume or understand and you&#39;ve
[3:33] probably seen this in countless
[3:34] tutorials or any prompt you&#39;ve seen on
[3:36] the internet where you see a section
[3:38] called context and then sometimes it&#39;s
[3:40] task and then instruction and then
[3:42] variables or examples or something along
[3:45] those lines when you put a hashtag think
[3:47] of it as a form of anchor where that
[3:49] hashtag or double hashtag represents
[3:52] this is the most important category I
[3:53] want you to pay attention to and a
[3:55] subtitle could be like also it&#39;s also
[3:57] important but not as important as is
[3:59] that main header and especially if you
[4:01] wanted to look at certain things like
[4:03] keywords I like to put them in double
[4:05] asterisks because those represent
[4:06] Bolding so it&#39;s basically translating
[4:09] what you would see on let&#39;s say a Google
[4:11] doc or a Microsoft Word into this
[4:14] language where it kind of denotes that
[4:16] same proxy for important now without
[4:18] further Ado if we just let this fly
[4:20] you&#39;re going to see here is going to
[4:21] start actually generating that prompt
[4:23] and it&#39;s generating the instructions on
[4:25] its own even though I didn&#39;t even give
[4:27] it to myself and the reason why I put it
[4:29] in a code block is for two reasons one
[4:32] is it&#39;s easier for me to see kind of
[4:34] what it&#39;s doing in markdown that black
[4:36] and white makes it very clear and when
[4:38] if I want to go and actually use it in
[4:41] something like chat gbt all I have to do
[4:42] is just click copy code open a new
[4:46] session and then paste it zoom out make
[4:50] the edits I need to make maybe remove
[4:52] this title here and you can see I didn&#39;t
[4:54] even tell it to create a role based
[4:56] prompt it wrote itself you are an expert
[4:58] content creator
[5:00] specializing in SEO optimized blog posts
[5:03] your task is to create engaging
[5:05] informative and SEO friendly blog posts
[5:07] on the topic provided now if we keep
[5:09] going you&#39;re going to see it created its
[5:11] own instruction section that it denoted
[5:13] with three
[5:14] hashtags and then if you go down you see
[5:17] it&#39;s using asterisks to denote like some
[5:19] of the headers or kind of the Bold
[5:20] statements using dashes as well and it
[5:23] gives its own example outline to the
[5:26] model to come up with a blog post now
[5:29] the idea here is that unless you make
[5:31] your own template or let&#39;s say a custom
[5:33] GPT you&#39;ll never be done 100% of the way
[5:37] just by asking it to write the prompt
[5:38] for you ideally you want to give it
[5:40] examples of what you&#39;re expecting or
[5:42] example prompts you in the past that it
[5:44] can emulate so you can go from idea to
[5:47] the actual prompt in a much shorter
[5:49] amount of time this is actually just
[5:50] baby steps of how to use this technique
[5:52] in a way that anyone can write this in
[5:55] any language and it&#39;ll work perfectly
[5:56] now that was the Bare Bones Basics level
[5:59] one of how to use meta prompting if you
[6:00] want to use it at a higher level maybe
[6:02] say level two then you should give it an
[6:04] example of a prompt that you really like
[6:06] in terms of its style the way it&#39;s
[6:08] written which again you can find
[6:10] anywhere and you feed it in as an
[6:12] example so in my case here I created
[6:15] this sample
[6:17] prompt where you have a role again the
[6:20] hashtags denote importance or a category
[6:22] that I wanted to pay attention to you
[6:24] have task you have specifics content
[6:27] guidelines SEO op
[6:30] mization output format an example and
[6:33] then you have this note section where I
[6:35] add certain things like a key variable
[6:37] that I want to add and notice here that
[6:38] one of the inputs is some form of
[6:40] variable that&#39;s being called a topic
[6:42] underscore variable using this technique
[6:44] by the way is super helpful because if
[6:46] you put it at let&#39;s say the very bottom
[6:47] of a prompt if we did this move this to
[6:50] the very bottom it becomes really easy
[6:53] to constantly change your input so in
[6:55] this case all you&#39;d need to do is remove
[6:57] this and this would be your main input
[6:59] to the actual model now fun fact which
[7:01] is one of the reasons why I put it at
[7:02] the very bottom is large language models
[7:04] up until now pay attention the most to
[7:07] what&#39;s at the very beginning and the
[7:09] very end of a prompt because of that
[7:10] that&#39;s why if you&#39;re creating a role for
[7:12] the actual agent you put it at the very
[7:14] beginning and if you want to set some
[7:15] form of variable or you want to pay
[7:17] attention to some form of dynamic input
[7:19] from you I tend to put that at the very
[7:21] bottom now 3 4 months from now this
[7:23] could be old news and it pays attention
[7:26] perfectly to every single part of the
[7:27] prompt but for now it&#39;s a good way way
[7:29] to make sure that the large language
[7:30] model is paying attention to the thing
[7:32] that matters most now let&#39;s try to
[7:34] actually apply this in practice so we&#39;ll
[7:37] go back into chat gbt and it&#39;ll say you
[7:40] are a prompt
[7:43] engineer you prompt like this and then
[7:48] I&#39;m just going to put it in quotes there
[7:52] we go and I&#39;ll say I want you to create
[7:56] a prompt let&#39;s Zoom back in here there
[7:59] we go that lets me take one
[8:02] input which is uh an idea and you write
[8:07] a social media post for the
[8:11] following uh
[8:13] Instagram
[8:15] LinkedIn X and
[8:19] Facebook so if I just click this and I
[8:22] write make sure that your output is in a
[8:27] code block make sure that you emulate
[8:31] the style I gave you again super lazy
[8:34] prompt took me what around a minute to
[8:37] actually right because I&#39;m actually
[8:38] speaking through it and if we just let
[8:39] that fly it should emulate that one
[8:42] example and it is it&#39;s creating that
[8:44] role it&#39;s creating the task now because
[8:47] I&#39;m using chat gbt it knows I&#39;m Mark so
[8:49] it&#39;s based on my custom instructions but
[8:51] you&#39;ll see here it&#39;s emulating it
[8:53] perfectly and now it changed that
[8:55] variable I referred to to an idea
[8:58] variable which which is very important
[9:00] here when it comes to SEO optimization
[9:02] it&#39;s looking for LinkedIn and Facebook
[9:05] it&#39;s creating a post so the output
[9:06] format they listened Instagram post a
[9:09] LinkedIn post X post and a Facebook post
[9:11] and then even created a variable called
[9:13] idea variable and I wrote a sample idea
[9:16] now it went a little bit fancy here and
[9:17] it even demoed what a possible output
[9:20] might look like to that prompt which is
[9:22] pretty cool so what I can do is just so
[9:24] I can easily copy paste it I&#39;m going to
[9:25] tell you don&#39;t worry about the output
[9:27] just give me the input don&#39;t
[9:32] you got to be nice to the AI awesome so
[9:35] now we just have the core component of
[9:37] the input and we can open a new session
[9:40] paste it we&#39;ll zoom out a little bit and
[9:43] if we look at it here you can see
[9:45] everything&#39;s pretty much up to Snuff and
[9:47] we even have a notes section that it
[9:49] created based on that example it has
[9:51] fine print that you can use to filter
[9:53] any important notes or restrictions that
[9:56] you want to introduce into the actual
[9:58] prompt now all we have to do is just set
[10:00] the idea variable to
[10:02] something that open AI is better than
[10:08] llama
[10:10] 3 just a random
[10:13] idea and you&#39;ll see here even in the
[10:15] output it has that markdown built in so
[10:18] it&#39;s generating an Instagram post a
[10:20] LinkedIn post an X post and a Facebook
[10:23] post and again it&#39;s really important to
[10:24] take into consideration that it would
[10:26] have taken you 1 to 3 minutes assuming
[10:28] you had an example to feed it just to
[10:30] get to this level where you can now
[10:32] start spending the next half hour or
[10:34] hour just fine-tuning it to your perfect
[10:36] use case and the more you do this the
[10:38] more efficient you can get because you
[10:40] can go and actually create a custom GPT
[10:42] and call it my prompt engineer where the
[10:45] actual custom gbt is you are a prompt
[10:47] engineer that always creates prompts
[10:49] like this this and this maybe give it
[10:51] three to five examples and then moving
[10:53] forward all you have to do is just fire
[10:55] up that custom gbt tell it what you&#39;re
[10:57] trying to actually accomplish and write
[10:58] a prompt for and it&#39;s always going to
[11:00] Output it in markdown always going to
[11:02] Output it in a code block and you&#39;ll be
[11:04] able to iterate much more quickly moving
[11:06] forward now I&#39;ll build a very quick one
[11:07] just quick and dirty just to give you
[11:09] the idea of what&#39;s possible so let&#39;s go
[11:10] to explore gpts I can create my own GPT
[11:13] here I&#39;m just going to call it my prompt
[11:17] Helper and I&#39;m just going to say when
[11:20] the user says create my prompt create a
[11:26] prompt for the given topic they want by
[11:31] asking them first what they would like
[11:35] to have the prompt accomplish once you
[11:39] get the response create a prompt in this
[11:42] format and then I&#39;ll just go here go
[11:45] back to our example and we&#39;ll paste that
[11:48] here boom and then I&#39;ll say restrictions
[11:51] I&#39;ll put a little hashtag make sure to
[11:54] Output all prompts in a code block keep
[11:57] any variables
[11:59] at the very end available to be easily
[12:03] set so let&#39;s just give an example here
[12:06] example topic variable equals and then
[12:09] some blank here make sure to Output all
[12:13] prompts in markdown and then I&#39;ll just
[12:16] create this conversation starter create
[12:18] my prompt so if we click on this it
[12:19] should ask me what I want to create a
[12:21] prompt about I want a prompt that takes
[12:25] blog content and writes LinkedIn posts
[12:29] with it so it should be using the
[12:31] example I gave it and pretty much all I
[12:34] had to do was just tell it hey here&#39;s
[12:35] the topic go and write a prompt and
[12:38] there it is it writes you a whole prompt
[12:40] end to end in a code Block in markdown
[12:43] and what&#39;s extra interesting is that
[12:44] it&#39;s actually generating examples on its
[12:46] own there&#39;s a rule of thumb that a lot
[12:48] of these models work really well when
[12:50] they&#39;re given 3 to five examples so if
[12:52] you&#39;re feeling that your prompt is
[12:53] getting 90% of the way there but not 100
[12:56] ask LM to add a few more examples to its
[12:58] own prompt to give more hints as to what
[13:00] it should be going for sometimes it
[13:02] works really well and if you check any
[13:04] of the benchmarks that big models use
[13:06] like anthropic or open AI they show
[13:08] their top performing benchmarks based on
[13:10] a five multi-shot which is literally
[13:12] five examples given to the model and
[13:14] they base their criteria of accuracy
[13:17] based on a Model that&#39;s actually been
[13:18] given five examples to Monkey C and
[13:20] monkey do from so keep that in mind
[13:22] because it becomes very helpful as you
[13:23] try to troubleshoot why you&#39;re not
[13:25] getting the exact result you&#39;re looking
[13:26] for now with this you see at the very
[13:28] end here we have our blog content
[13:30] variable set nice and tidy for us and
[13:32] all we have to do is just copy paste
[13:34] that blog content go in and tweak some
[13:37] things and then Bob&#39;s your uncle and
[13:39] you&#39;re good to go now that was level two
[13:41] level three meta prompting is being able
[13:43] to do this process across different
[13:44] large language models to know how you
[13:46] should talk to each AI which I think
[13:48] again will be super important in the
[13:50] next four or 5 years when everything we
[13:52] do and pretty much every service we
[13:54] interact with has some form of AI we
[13:56] have to talk to so knowing how to speak
[13:58] to different models is super helpful and
[14:00] that&#39;s why I&#39;m going to show you po
[14:02] which if you are not familiar with this
[14:04] tool it&#39;s pretty much like a chat chbt
[14:07] except for the 20 bucks a month you can
[14:09] write messages to all different types of
[14:11] LMS on the platform and you&#39;re not
[14:13] limited to just chat GPT itself or just
[14:16] claw they also have a really cool
[14:17] feature which I&#39;m about to show you
[14:19] which lets you jump around from llm to
[14:22] llm experimenting with what the result
[14:24] would be from that same prompt so if I
[14:27] get started here let&#39;s say with a clock
[14:29] 3.5 Sonet and then we just go back here
[14:32] let&#39;s just recycle some of our hard work
[14:34] and I&#39;ll say you are a prompt engineer
[14:37] and let&#39;s do the whole blog content
[14:38] thing so we&#39;ll just put that here and if
[14:40] I just click this it should start
[14:42] generating The Prompt but this time
[14:44] using Claud 3.5 Sonet so you&#39;ll notice
[14:47] we already have some differences in how
[14:49] it writes The Prompt Claude seems to
[14:51] like square brackets where open AI seems
[14:54] to like double curly brackets so you&#39;ll
[14:56] see here it&#39;s much more succinct prompt
[14:58] and on it seems to be more efficient in
[15:01] being able to write that prompt and not
[15:03] having to write as much now what&#39;s cool
[15:05] about PO is that I can just say compare
[15:08] to one of these models and it&#39;ll apply
[15:10] the exact same prompt to that model so
[15:12] we can see the difference so if I click
[15:14] on Gemini 1.5 Pro you&#39;ll see that this
[15:16] prompt is wildly different from this one
[15:19] for cloud 3.5 Sonet it&#39;s much more
[15:21] detailed it&#39;s going down to very
[15:23] granular levels and there&#39;s even a qual
[15:25] to action sample at the bottom and last
[15:26] but not least if we just gave this to
[15:28] something like Minal large you&#39;ll see
[15:30] that this one is a lower level model
[15:32] probably like a dumber model so the way
[15:34] it writes a prompt is it doesn&#39;t even
[15:36] establish a rule there&#39;s no role to the
[15:38] actual agent on what it should or should
[15:40] not be doing but that&#39;s a bit of a
[15:41] nutshell in terms of like how you can
[15:43] actually experiment to see is your
[15:45] prompt something that every llm would
[15:47] kind of agree on because if you&#39;re
[15:49] trying to build a prompt that works
[15:50] across multiple llms something like this
[15:53] is really helpful to be able to try to
[15:55] create the average prompt that will work
[15:57] across different LMS and this is
[15:59] something that we do at prompt advisors
[16:01] as a test to see you know if we build
[16:03] this application with this prompt in 5
[16:06] to 6 months is there a very high
[16:08] likelihood that we&#39;ll still be getting
[16:09] the same result now there are other
[16:10] parameters here that I haven&#39;t discussed
[16:12] I didn&#39;t want to go too in depth but
[16:14] things like temperature things like top
[16:16] PE which I won&#39;t get into or token
[16:19] sampling those can also play a role as
[16:21] well as to like how a prompt will
[16:22] actually perform but something like meta
[16:24] prompting at least gets you that 80% of
[16:26] the way there instead of just paying
[16:28] someone like me to build you a prompt
[16:29] from scratch you can get almost all the
[16:31] way there and then if you need some fine
[16:33] tuning then that&#39;s worth the time to
[16:35] actually spend and get it to work
[16:37] perfectly the cool thing about this
[16:38] technique is that it&#39;s not just limited
[16:40] to just textual prompting eventually as
[16:42] more textto video models come out you
[16:44] can start asking those models hey how
[16:45] should I prompt you and the same thing
[16:47] with AI calling agents there&#39;s a
[16:49] specific style that you write those
[16:50] prompts in to get the best results you
[16:52] can do the exact same thing where you
[16:53] just ask that model I want to build a
[16:55] calling agent here&#39;s four examples of
[16:57] prompts that I saw on the internet that
[16:59] work really well with something like
[17:00] Bland AI or vapy emulate this and here&#39;s
[17:03] what I&#39;m trying to do and here&#39;s my
[17:04] example script just using that same
[17:06] technique over and over again one is
[17:08] you&#39;ll actually start getting better at
[17:09] it and two you&#39;ll realize how many more
[17:12] things you can apply this technique to
[17:14] and how many doors I open for you to be
[17:15] able to start quickly using generative
[17:17] Ai and understanding how to get results
[17:19] faster now if you actually watch this
[17:21] video to the very end I&#39;d super
[17:22] appreciate if you could just like And
[17:24] subscribe the channel and let me know if
[17:26] content like this is actually helpful
[17:28] and if you have other questions about
[17:29] prompt engineering that could make my
[17:30] next video is about
