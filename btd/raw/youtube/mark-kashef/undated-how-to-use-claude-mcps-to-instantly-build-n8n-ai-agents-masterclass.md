---
title: "How to Use Claude & MCPs to INSTANTLY Build n8n AI Agents (MASTERCLASS)"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=yfpVU_uEpy4"
video_id: "yfpVU_uEpy4"
duration: "41:29"
transcript_method: "youtube-captions"
segment_count: 1216
char_count: 46398
status: ingested
topics: []
meta_patterns: []
---

# How to Use Claude & MCPs to INSTANTLY Build n8n AI Agents (MASTERCLASS)

**Creator**: mark-kashef | **Duration**: 41:29
**URL**: https://www.youtube.com/watch?v=yfpVU_uEpy4
**Transcript**: 1216 segments, 46398 chars

## Transcript

Imagine just typing one prompt and minutes later, a complete workflow automation lands straight into your internet account, fully labeled and ready to set up. By combining Claude with the power of MCP servers, you can unlock almost effortless workflow and agent creation that anyone can master. Now, I've already shown on this channel how to manually copy paste workflows from Claude into any debt. And let's just say some of those methods were wildly adopted all over YouTube. But these new approaches I'm about to show you take things to a completely different level. In this video, I'm going to walk you through step by step through three powerful approaches. I'm going to start out by showing you the simpler copy paste method, but adding MCP servers to really supercharge that workflow. And then I'm going to ramp things up with more advanced techniques on how you can combine things like Claude with Docker and even Cursor to take this to a completely nuclear level. And then I'm going to ramp up to some more advanced techniques where we're going to combine multiple different services to be able to actually create the NN workflows and put them straight into your account. So, it's a fully hands-off process. If you watch this video from beginning to end, you're going to pick up some skills that will give you some massive leverage, not just in any end, but across different applications and workflows. Now, for the first two methods, I'm going to show you first that it does work before I show you how it works. Now, to start things off, I'm using Clawed Desktop here, not the browserbased version. And the reason why, I'll get to in a bit. But if we take a peek at the different tools I have at my disposal right here, you'll see that I have a series of different servers that I can call as additional tools that Claude can leverage. And the ones we really care about today are the NANE MCP context 7 and NAN workflow docs. But if you needed just one tool to make this happen, I would use this NANE MCP. And we'll go through what that looks like, what the underlying repository looks like, and how it works. But like I promised at the beginning, I'm going to show you how we can turn one mediocre prompt into a workflow waiting for you in your edit account by just waiting. So let's enter our first prompt here. And I'm purposely going to be lazy by dictating it so I can be verbose in my description, but also not have to type it myself. Okay, so I run an e-commerce company and we use all kinds of tools that we want to automate workflows for, but I don't know what to automate first. So based on the example of having an e-commerce business doing $20 million, selling primarily clothes and merchandise on Shopify, can you come up with a draft workflow on NADN that would work perfectly or at least be drafted perfectly that would use things like Salesforce, maybe Shopify, Google Sheets, and Gmail, and just come up with a workflow that would make sense for us to start off with as a foundational starting point. So, it's kind of like talking to a consultant, but a supercharged consultant that can do all kinds of things. Now, one thing here is I'm going to enable extended thinking so that the AI has the ability to think a lot harder. And then we'll use Claude for Opus. And then you'll see here without me specifying anything, we can send this prompt and it should be able to know which tools are worth invoking for this specific procedure. You'll see here it's going through the process of reasoning how to use the different tools at its disposal. It's first searching which nodes and the underlying structure of those nodes that it might need to construct this and then it'll go through and make sure that it's collected everything first and then it'll move on to the next part. So now it's thinking through the entire process again without too much detail given my hypothetical scenario and just double-checking that it has everything it needs. And now it's getting into the mechanics of understanding how to properly position and structure the JSON needed which by the way if you don't know Nit end and all these workflow automation tools primarily use something called JSON which is JavaScript object notation which is fancy language for a series of code that represents the automation you see on screen and after a few minutes of running it creates the underlying workflow here realizes that it has some issues in the workflow. It diagnoses it itself and basically selfheals and then writes the underlying workflow to our account. And how we know that is it says I've successfully created your ecommerce order processing and customer sync with this following ID. This is the ID of the workflow. And then it walks through what the automation looks like, how it works. If you want to ask more questions on the underlying logic or anything related to what needs to be set up for you to actually make it functional, it gives you that full breakdown right here. But wait, there's more. It gives you expansion ideas on what you could do next. So, it's literally like having an automation consultant that not only can advise you, but it can also build setups and prototypes and drafts of these workflows to take you from zero to 70 to 80%. And if we flick over to my N&N account, you'll see right here is the e-commerce order processing and customer sync. And if we click on the workflow, it should have valid nodes because it looked up the documentation and everything it needs to find. And while this is a basic workflow, again, it gets you started on the way. And I didn't give it a very good prompt. Imagine if you gave it a full breakdown of your process or even a process diagram of how your operations work. It will be a lot more detailed and a lot more bespoke. So, now that we've seen that it does work, we'll walk through how it works and get started with setting up the first version of this that anyone can set up irrespective of their skill level. So once again, the goal is to enter anywhere from a basic prompt to a advanced prompt and have it create the entire end workflow for you. So you can go in, plug in what you need to plug in, make any changes that make sense given your business and then go from there. And something like this created something like this where we're once again Claude has tried to think of what is the most logical and simple solution that we could come up with with this very vague and minimal piece of information. And you'll see here it came up with not just one but two separate workflows. And sometimes it even generates three to four workflows depending on how much you've asked for. And just to answer the question that might be in your head, yes, it can also create AI agent structures because at the end of the day, all of these AI agents are represented by something called lang chain. And while it's searching all of those nodes, it can find those specific nodes and we can definitely coach it along the way to do so. So to effectively go from this to this, we have four core components we're going to need to use. So in order for us to not have to have a knowledge base, if you want to just crank out some simple workflows, we need to be able to speak to the NIDAN documentation. Unlike other providers, NIDAND is more open source, meaning all the code you need to actually see how NAND works exists in public. And because of that, these kinds of servers can help read that documentation and better acquaint themselves every single time they're going to create or draft a workflow for you. And through understanding that documentation, it can better understand when to use, which nodes or workflows where, and over time, especially if you're writing requests in the same chat, it will see different types of workflows that's created and basically use that structure, assuming you're actually in agreement with it. Now, this next component is optional, but it can definitely supercharge things where there are actual repositories of thousands of workflows that you can sync up and easily hook up to claude via MCP server as well. So it can not only search through nodes, search through documentation, but also search through like examples to your workflow. So it has a much higher likelihood of actually creating the workflow properly without you having to go through the overhead of uploading your own workflows to show it as an example. And last but not least, if you want to be able to create agent workflows, you totally can. One thing that's helpful here is to actually nudge in your prompt or provide a series of example workflows that are specifically agent-based to encourage it to not always crank out workflows that are A to B, but more so use agents where it makes the most sense. And that's the level of nuance here that takes us from being good to fantastic. Now, I'll go through the three approaches I'm going to walk you through at a high level so you can fully understand what each one entails. So, for the very first level, we're just going to combine MCP servers with cloud desktop. They're not going to be complicated to set up and all you have to do is copy paste some JSON into what's called a config file, save it, restart Cloud Desktop, and you'll be able to use those tools instantly. Now, in case you don't even know what MCP is, it stands for multicontext protocol, which is a glorified fancy $5 word for wrapping an API or the backend service of a particular application to be able to easily speak to it back and forth. Typically, you can imagine the analogy of having a single key for one door. You imagine that that one door is a functionality. So, let's take the example of Slack. So, sending a message via Slack, drafting a message, scheduling a message, all of those are different functionalities. And we lived in a world where every single time you wanted to make a call, which is a tap on the backend shoulder to tell it, I want to do this thing, and I'm not going to do it through Slack, but I want to use it through Nitn or Zapier or Make. I want you to take this key, which is are my credentials, and open that one door so I can make this one request. So, while language models could totally use this structure and keep knocking on the door every single time, to be able to use all of the tools effectively and have access to all of the functionality from one credential, you now have these servers that let you take that same key and open five doors at once. So, to simplify it, one key, one door was the old world. And with this MCP server world, it is one key, five, 10, a 100 doors all at once. Which is why if we go into here, you'll see that we don't just have singular tools. We have 38 different functionalities we get from one individual server. And that's really the power of MCPs. Typically in our old world, we'd have to hardcode each and every method that we wanted to use, which was not only not scalable, but if things changed across the line or the owner of that service changed the structure of how their functionality works, we would have to update every single thing in tandem. Now, there are two main ways that you can use these servers. One of them is called local and the other's called remote. If you use remote, it's a lot easier, especially if you're nontechnical, because all you have to do is copy paste a series of code, very small snippets that say MCP server and list out a bunch of functionality and usually a credential of some sort, and you paste that into what's called a config file of Cloud Desktop. Don't worry, I'll show you exactly how to do it. It's like a one minute operation. And once you just restart Cloud, you should be able to see those tools right away. Now, the local side isn't necessarily rocket science, but depending on your system, sometimes there can be a little bit of friction to follow a few of the steps. But regardless, I'm going to break that down for you as well to increase the likelihood that you can take advantage of the very potent level two and three to make sure that this approach is as simple as possible. We're going to use this tool called Git MCP, which pretty much will allow you to take someone's GitHub, which is a series of code or repositories where there's all kinds of functionality that you can enable, and then create a mini MCP server that you can just copy paste the code that they give you, paste it into Claude's config file, restart, and you'd be able to speak to whatever service you want that's compatible. And to start off, we're going to connect thousands of NDEN workflows as well as information, documentation, and everything you saw in that initial step that I showed you where it searched the nodes, had access to the workflow, as well as access to the documentation. Now, for approach number two, we're going to call this expert mode where technically all we have to do is combine cloud with something called Docker. And if you don't know what Docker is, I'm going to give some analogies here. So, it has a whale icon with a series of containers. So, there's two different ways you can think about this. The first way to think about this is a sort of lunchbox. So imagine you have this box or container on your computer. And this container can have all kinds of functionalities. It can have different apps. It can have things that you can spin up that act as a server. And in this case, it's not a server in the cloud. It's a server that's actually running in real time on your actual hardware. Naturally, this makes things a lot more secure, which is why using this NN MCP server and running on the local computer allows you to enter your API key for NN and your credentials so that it can remotely and programmatically write all your workflows to your NN account. Another way to look at Docker is the right way to look at it, which is a actual container. Imagine each one of the apps you configure whether it's the nen MCP server or all kinds of servers you can add to your computer all are individual containers and Docker is carrying all of them and running all of them as you wish and whenever you run them or they're running on your computer you can use them because they can communicate with in this case cloud desktop directly. Now setting docker up on a terminal can be a bit intimidating to people. So, one tool I really recommend, not affiliated, just a cool tool and it's free to use for the most part. It's called Warp. It's basically an AI powered terminal. So, you can literally write in natural language, please download Docker for me. And then it will go and look for Docker and you can download it and every time you hit an error, which is totally possible, Warp will actually come up with using AI the next natural step that you could do to troubleshoot. So you can keep essentially clicking tab enter it will give you a suggestion what should you do next or what should you write next instead of you screenshotting everything that you see in your terminal giving it into claude or chatbt and saying SOS help me. So for me personally it took around 3 minutes to set this up on my computer. Now I did have Docker beforehand and you can actually download it manually through the web which I'll show you right now. So if you just Google Docker desktop you'll see these results. You have Docker Desktop for Windows if you're on Windows and then Mac if you're on Mac. Then all you have to do is go on one of these websites. Go to the desktop for Mac or Windows and then select the one that matches your hardware, download it, and that could be the easy way that you at least have Docker on your computer. And once it's installed, we'll be able to connect that server to Claude in the same way we connected the remote server in the first level to Cloud as well. And it'll be very straightforward from there. And for level three, we're just going to add one more service. So here we're going to combine Claude Desktop, Docker, as well as something called Cursor. And if you don't know what cursor is, it's basically a code editor. A lot of you might look at it and be intimidated at first, but it's honestly just like using chatbt except it has access to folders and can do very powerful things. And the reason why this is a Eureka moment is typically in all of my other workflow videos, Claude has always had limitations. And the main limitation is the fact that it has a knowledge base which is very finite, meaning conversations that you start end really quickly. and you're constantly pushed to upgrade to larger and larger plans to be able to have a back and forth for more than five to six times. When you use something like cursor, what it allows you to do is have an entire folder or a database of thousands of workflows that it can scan through very efficiently without us having to ram it into Claude, make Claude read each and every line, and basically limit our entire scope of the conversation. So by using these platforms that are actually optimized for not only writing but maintaining and scanning through thousands if not tens of thousands of lines of code if we actually use the JSONs documentation everything and we properly categorize it into different folders we technically have the access to all the cloud models. So we can have claude basically have a conversation with all of these files and not be held back with what we can or can't add. And when you combine this trifecta of the intelligence of claude, especially with making end JSON workflows with a knowledge base with the ability to remotely create these workflows and the ability to reference thousands of other workflows and read documentation through other servers, you now have something unbelievably potent. And if you're more technically inclined, then you can use whatever editor makes you happy or whatever you're used to. The reason why I used cursor versus windsurf is just because windsurf was acquired by OpenAI. So Claude actually cut off native access to their latest models. So I just went with cursor since they have a very good relationship and they have a very flexible plan on how many times you can use not just cloud for opus and sonnet but also use them on the max mode which gives you maximum efficiency and performance of those models. And in this case we'll use a combination of GitHub to not only download the server from contact 7 which will give us access to real time updated documentation from all kinds of services not just end. It can help you with OpenAI, the latest models from Claude. This is again a hyper leverage MCP server that you can add to anything, even claude desktop, by the way. With that bird's eye view, let's get into setting up level one. All right, so for the first approach, I'm going to start on a blank slate as many of you will as well. So, if you go into my tools here, you'll see I have none of the tools I mentioned before. So, we're going to add them together step by step. Now, in Cloud Desktop, the way you add tools is you go to the very top left hand side here. You click on cloud and then you go on settings. When you go on settings, you're going to want to click on developer. And on the developer tab, you'll be able to edit config. And then this will pop up that file that I mentioned to you before where you can paste all the credentials or the addresses or in this case the MCP server information that you need to hook it up to cloud. So, this is what the file looks like in the underlying folder. And if you doubleclick it, it'll be blank. It'll just say MCP servers by default. And we have to populate this. Now, are we going to write the code ourselves? Of course not. We're going to copy paste all the credentials that I'll show you how to get. We'll throw them into Claude actually. And then we'll get Claude to write this entire file so we can just copy paste. To maximize the power of this first approach, we're going to use three different GitHub repositories. One is called Naden Workflows. And I want to make a shout out to Z619 who made this available where there are thousands of workflows available. And if I just click on this file here, you'll see all of these are many many workflows that your clawed instance can learn from. Now are all necessarily the exact copy or carbon copy of what you might be going for? No. But having access to these, especially in our third approach down the line, will make it that much easier to avoid hallucinations or corrupt notes. The second repository we're going to use is called Context 7. And once again, you can read through the information here, but it basically gives you access to the latest and greatest documentation. So instead of asking Claude to do a web search or a deep web search to look for any documentation, we can just call this server and it has always a carbon copy of the latest documentation on file. And last but not least, we have the NAND MCP server that was designed by this individual right here. Now, I don't know him personally, but he's done an incredible job at designing this to not only create the nodes, search the nodes, load documentation, so he deserves all the kudos and praise. So, definitely star his repository so he becomes more famous. Now, the catch here is we won't be able to create the workflows again because we'll need Docker, which we'll talk about in step two to be able to allow those credentials to go through. So in this step, this specific server won't be comma as useful as it could be in level two and three, but it'll still be something we'll add. Now, instead of asking you to figure out how to create an MCP server from scratch, I'm going to give you a nugget or cheat code that whether you're technical or non-technical will be super useful. So, what you can do is go to getmcp.io, okay? And then it will give you step-by-step instructions on what you can do to not only create a mini MCP server of a repository, but you can actually talk to it to ask it questions like what is this doing? What is it composed of? Another cheat code you could do is if you go into here, you can actually change this URL to just say getmcp.io. And watch this. It's not only going to give you the ability to chat with it as well as a server URL, but it will provide you with the exact code that you need to copy paste into things like cursor, cloud desktop, windsurf, etc. So, what we're going to do is we're going to take each one of these codes here and I'm going to open a brand new cloud in my browser and I'm just going to say create one unified JSON file out of all of these. Okay. So, I'm going to paste number one. And then we'll do the second one. So, let's take this one. We'll do the exact same thing. We'll just do get mcp.io. We'll do the same thing. Cloud desktop. Paste it here. And obviously the interesting thing is we're using claude to write a file for claude. So, we have some claude seion going on. So, get mcp.io once again. And then I think we have all of them. So, we'll paste it here. And then we'll just have Claude put this together for us. So we can just copy paste. And in under a minute we got something like this that we can just go copy. Go back to Claude and then paste this into the config file. Boom. We're going to save it. Now to actually see those tools. You'll see right here we can't see anything despite adding it. We just have to click go to claude. We're going to fully quit the program and then restart from scratch. and that's going to be the trigger for it to read that file and ingest those tools. When you restart Claude, if you don't get an error immediately in the top right hand side, typically that means you're in the clear. And if you go to right here and click on this specific section, you'll see that we have contact 7 end MCP docs and end workflow docs. And you'll see all the different tools and functionalities that we can call. Now, like I said, for the end MCP docs, because we can't harness the full power without using something like Docker on a local server, you'll only have access to four core functionalities, but there's actually 38 different tools and functionalities that it has in its server. Now, since you have access to edit end workflow docs, you can technically ask for it to search for a similar workflow to the one you're trying to create and it will be able to load in memory a JSON file without necessarily ramming or cramming up the clawed knowledgebased space. So if we do something like this and I say, can you go through the fetch workflows function or search workflows function that you have at your disposal and look for a few different workflows that use Telegram to put together a small prototype of a JSON workflow that you'll put into JSON format and output it in a code block that will work when I import it into NAD. And then we'll send that over and then we will give that a shot. It should be able now to realize that it has that tool at its disposal, go and search that entire repository through the different files and look for the relevant workflows. So you'll see here it's now using the search end workflows code. It's querying the word telegram and looking for a match. Now it's managed to find in the GitHub repository an example of a workflow. It's looking for a simpler one to learn from. And you'll see right here, it's sending another version of that same search. It's thinking again. And now it gives you a pop-up that you can click on allow always. It'll then search and now fetch and take that actual JSON file, look through it, learn from it, and try to apply it to our new scenario. Now, if we take a peek at this fetch step, you'll see that in here, it's ingesting the entire JSON file to learn from exactly how it's built, and then it's crafting a JSON based on that structure. And typically this will have a much higher likelihood at working at your first try because it's the same thing as us actually manually uploading a workflow with Telegram or Telegram nodes and having Claude try to guesstimate what that would look like in the brand new scenario. So since this method doesn't allow us to directly import into any handsoff we can take this workflow and we can have a high likelihood or high confidence that we'll import correctly. So there you go. And we click on the paintbrush just to put in lens. Then we have the send welcome message and echo message. Very basic workflow. I had a very basic prompt and it's ready to go and we can start using it and setting it up. Now before we go to level two, I just want to show you how you can take advantage of using context 7 and enrich this entire workflow. So I'm going to send a prompt here. Okay. So, I want you to use the tool context 7 to look for the latest and greatest documentation to look through examples or different pieces of inspiration to make the workflow you put together a lot more bespoke and ideally adapt it for a digital marketing agency. So, we'll send that over and I don't necessarily care for the resulting workflow. I just more so want to show you what it'll do if we say something like context 7 and we're a bit more explicit with that specific command. And why I'm being more intentional by saying contact 7 in this case is technically if I said look for the latest and greatest documentation and I have web search enabled it might get confused and say I'll use web search but in this case you'll see it's asking us to approve on searching the edit in documentation using context 7. It'll go and read through then come back with a different perspective. So in this case, it didn't only read the documentation. It also realized that after reading the documentation, it wanted to see another example of creating a Telegram workflow, but this time marrying it with Google Analytics since it decided that would be the most relevant for a digital marketing agency. And then the result is it's generating a workflow right here. And just for fun, we'll copy paste it to see how it's changed. Now, it still might be basic because my prompt wasn't that bespoke or robust, but we'll see what it comes up with. So if we copy, move over, paste it, and then click the paintbrush, you'll see now we have a much more bespoke version. And even without me asking, it created a sticky note trying to explain what's happening. It created a subworkflow here. And you'll see that's just me saying make it better. So imagine I was more intentional and told it exactly what my business processes were, what friction points we had, and what other tools we had at our disposal. All right, so that's the end of level one. And hopefully you saw that it wasn't too difficult. All we had to do technically was copy paste a JSON which by the way to make your life easier I will make available in the first link in the description below. So all you have to do is just copy paste that into your cloud desktop and since there are no credentials then you can just use it out of the box right away. Now, for level two, you're going to have to download Docker on your desktop computer, whether you're on Mac or Windows. And once again, all you have to do if you don't want to use a terminal is put Docker download. And then when you go to Docker, you'll be able to see get Docker right here. And then download it for whatever device you're using. And then it will take around 5 to 10 minutes just to fully install. And the other tool I highly recommend, especially if you're not technical, is just downloading one called Warp. It's the Agentic Development Environment. Just download this. It should be free to use for at least the purposes that we're using it for. And it will look something like this. So you have a blank screen that kind of looks like a terminal, but it functions very differently. You can actually talk to it instead of having to use chatbt to send weird commands with dashes and hyphens. So you can say, I want to download Docker on my desktop, right? And it'll use, in this case, claude 3.7 sonnet to try to come up with what the next steps would be. So it'll tell you exactly what to do. And if you wanted to actually run it on your computer, it'll give you the exact command to use. So I could just copy this, paste it right here. And then I could run this command. And in this case, I have Docker on my computer. Yours, if you don't have it, will be brand new. You'll just follow the instructions, which it will give you. And then if you run into any errors, typically it will suggest what the fix for the error is. And all you'll have to do is click on tab to accept the suggestion and click enter. And that's usually how I set things up. Again though, if that seems a bit too complicated, just go to the URL right here, download it the normal way, and get that part out of the way. And again, we're setting up Docker just so we can pull the full potential of this Nen MP server. And what's good about this repository is it gives you the actual JSONs that you need to import into things like cloud desktop. So you could literally look up command F Cloud Desktop. It will give you two different versions of the JSON. one that just uses this out of the box for basic functionality and it shows you how to actually link your NADN API URL and key so you can create and write these workflows directly to your account. And like I said before, but wait there's more. So this legendary individual actually put together a whole prompt on how to actually orchestrate the full power version of this MCP server. So you can copy paste this prompt, paste it into a cloud project and use it right away. Now once you have docker running all you need to do is actually just send one line and it will look like this. So just put docker pull. This is all we actually have to paste into warp once we have docker running on our computer. Docker pull and then the actual link to this mp server. So you can literally copy this right here and you'll see if we go into warp I've already done that. All I did was paste this. I initially got a few errors. I did nothing about it. It just suggested a fix. I click tab enter twice and then it finally showed this where it pulled everything onto my Docker desktop computer. Now to show you what this looks like in Docker, I will just pull that up. We'll click on this here and you'll see I have several trials of me running this over and over again. But this is the one we're actually using in Cloud Desktop. And you can tell because it has an address. This is basically a version of localhost which in plain English means this is the mini server or our mini MCP local server that cloud desktop will be speaking to. So one prerequisite that it can talk to it is it should be on it should have this green icon and you shouldn't close cloud desktop. So you shouldn't click on desktop quit docker desktop meaning the communication between your docker desktop and claude won't actually function anymore and all of a sudden you'll see those tools disappear. So just keep this on and running in the background. Now to get the URL and API key in any to be able to hook it up to the server, all we have to do is your URL will look something like this. In this case, it's my agency prompt advisor URL. So this is the part prompt advisor.app.n.cloud. This part right before the slash is the part we care for. And then you get your API key by going to the bottom left hand side, clicking here, clicking on settings, and then when you click on settings, you'll see right here it says NAN API. you'll be able to click on it and then create a new key. You'll get that key. Save that somewhere. And where we're going to put that is in the actual URL right here. So, if we go here, you'll see n API URL. That's going to be the prompt advisor one I just showed you, but yours will be different. And then the key will be whatever key we get. So, as soon as we have this, this now unlocks the server. And all you have to do technically is once you have that, you can copy that, paste it into here, and you can say replace the version we had before with this. And then you can say, here's my URL and API key. And then you'll be able to copy paste that new version into your cloud desktop, save it, close it, restart it, and then you're ready to go. And once you update cloud with that new JSON, you should be able to click on that same icon right here. And instead of showing four services, like I said, you'll be able to see 38. And then you can click on this to see all the new functionalities we have. One of which is the one we really care for, which is editn_reate workflow. That's what we have right here. And we can get a workflow. So you can actually get existing workflows in your workspace and edit them as well. So this is a super overpowered MCP server that unlocks tons of possibilities. And with that, that's the end of level two. And I'll show you now the powerhouse level three where we use this method and pretty much the exact same MCP server but using a cursor. So once again, cursor is a glorified editor with the power of AI and some systems behind the scenes to make it possible to use language models with tens if not thousands of lines of code. In our case though, not to intimidate you if you are a non-technical person, we're just using it as a version of chatbt and we'll make it look a little bit more friendly for you shortly, but all you have to do is click on open project. You'll have no projects. All you have to do is create a folder. So, I'll just go to a folder I've already put together. In this case, I'll open the folder and it in powerhouse. And we have a few different folders in here, but what we can do is I'm just going to open this brand new folder that I created called Power Plant. So, we'll click open. and all you'll have is a blank screen, right? Partially intimidating, but what we can do is we'll make it look a little bit less intimidating. We'll go into settings here. Let's go to open. And then let's go to workbench. Okay. And then I'll go and just change the color so it looks less intimidating. So there's light contrast. That looks horrific. Uh we'll do something a bit less intimidating. Let's do uh light modern here. That's that's doable. So, we'll close that and we'll close this. So, if we technically pull this to the left hand side, you basically have a version of chatbt if that helps simplify things. And kind of like some other AI tools, you can click on this and select from all kinds of models. And one of the reasons I love using cursor for this is it has access to the latest cloud models and the max version of them if you're on their $20 a month plan. But you can technically use versions of Claude without paying for the plan. So in my case, I'm going to use the powerhouse Claude for Opus Max. We'll click on that. And on the lefth hand side, you see it's completely blank. Instead of having to do the same work twice, that same Docker we used in Cloud Desktop, we can also use in cursor. So if you go into settings and then we'll just move this to the right and then click and write MCP and you write MCP tools. You'll see right here using the exact same method I had for claude, we have naden mcp and context 7. And if we open one of them like context 7 since it doesn't have my credentials, you'll see we have the exact same individual JSON we had before. And to set up these servers, all you have to do is copy paste the exact same JSON we used with MCP for cloud desktop and it will have this green icon to show you that it's working. Assuming that you enter your credentials, your URL, etc. It should work perfectly. And once these are toggled on, you now have access to it in the conversation. Now, despite doing all this, you still might be asking, why are we using this tool called cursor? Well, one of the main reasons is if you ever use Claude, you'll notice how quickly it fills the conversation or caps you when you're creating JSON files. But if you use something like cursor, which is optimized for writing code, you can not only, by the way, drag and drop as many files as you want. Let's say you want to drag and drop a series of agent files, or in our case, I'm going to show you in a snippet, agent tools, so that it knows how to construct agents, has a full repository of the agent tools it could use. And if you wanted to build workflows where it was half workflow, half agent or using the agent where it makes the most sense or building your NAN agent army of your dreams, you can do all of that. But instead of me just yapping about it, let me show you. So if I pull up my folders here, I have two folders. One called agent tools and one called agent_workflows. Now one of them is a series of files I've used before. These are just sample files that use AI agents in different ways in edit. Now, the second file is a bit different and it's something that we haven't put together before, but my team and I put together a series of files where we took the chat trigger and an AI agent node and dragged on every single possible tool in edited end. It took my team hours. They hated me. But now we have these JSON files that I could add to a folder. And now we can reference that folder at any time if we're building an AI agent workflow. So, all I have to do is drag both of these into here. And I'm going to do add folders to workspace. And now we have access to both of them. So I could actually ask something like build the workflow. Now technically I can add these to my context without breaking claude and maxing out my limits and waiting 6 hours. I can just click on files and folders and then write something like agent tools and then reference the entire folder as well as agent workflows and say build me an AI agent army that does XYZ and use these MCP servers that you have at your disposal like Naden MCP as well as the context 7 and you can now mish mash all of those tools together to create one mega workflow without also being throttled because if you max out let's say this max version you can just go to cloud course on it. You can also use other language models which is something in claude you don't have access to. So if for whatever reason you think that using something like a GPT 4.1 40 or 03 might be better for the version of the workflow you're building you can use it and you can change back and forth. And that's why this becomes so potent and so powerful because it gives you flexibility. It doesn't cap you and you can use the best of both worlds. You have access to technically an infinite knowledge base that you can reference. Obviously, you can't ingest the knowledge base every single time you write a command, but you can scan what's relevant and use that as a part of your workflow. One cool thing is you can just go on ask mode if you want to actually plan out if you want to vibe plan your end workflow. So, I could go on here and say something like I want to build a workflow that has some agents in it. And you can reference examples of agents in the agent workflows as well as look at the tools at your disposal in agent tools. And I want to be able to plan out a workflow and edit end that would automate my process for my real estate brokerage. We use things like go high level as well as Gmail, Google Sheets, we use Slack as well. So come up with a plan for a workflow that we could put together. So now we could use its planning ability to create a plan and then once we've actually executed on that plan and we've approved it, we can go and actually build it out, have it do all the work for us and write it into our NN account. So you'll see here it's reading through examples of the agent workflows. It's reading through the agent tools and it's looking for what is relevant or not relevant. And after a few seconds, it comes up with a fullyfledged plan on different agents. And I'll just ask it to build one of them. Maybe the master real estate agent in this case. And if we go down, I think it's still going. And then I'm going to just draft my next request here, which is okay. Can we execute the very first one and create the NAND workflow and write it to our NAND account? Make sure you use the NIN MCP server you have at your disposal as well as all of the other documentation I've given you in context. So now we'll send this over once it's done dictating and it should be able to combine everything combine the knowledge from the folders combine the usage of the MCP server as well as the power of cloud opus all together. Now it's calling the MCP server as expected and one thing just to double check is I originally sent this request in ask mode instead of execute mode or in this case it's called agent mode. Just make sure you make that switch to agent mode so it can actually execute the MP servers. And you'll see here it used the start here workflow guide to go through the documentation, list the nodes that were relevant. So it searched for every single node that it deemed relevant. It then searched for more nodes. It got the node essentials. It double checked the structure of them. It used this nident health check to double check whether or not it had access to my cloud, which in this case you can see right here status, okay, success equals true. And now it's doing the part we really wanted which is the end create workflow function. And after running for 10 minutes, this is really the cool part of this entire workflow. So it has functions in the MCP server to validate the workflow itself. So if there are errors, property value errors, all the different things that we experience in copy pasting workflows. It does that work to reflect whether or not it's good enough. It then comes to the conclusion that it's broken or it's not fully there. So it creates a diagram for itself to think through how to simplify this AI agent to make it easier to build. It goes through it calls create workflow again. It gives it another shot. It creates another set of JSON. Again, zero intervention on my part. It now uses the update partial workflow. So it's repairing bits and pieces instead of having to rewrite the entire file. It then tests it out. And you can see right here, it goes through all the JSON to make sure it's all valid. at the very bottom. It creates a diagram now on its own of what agent is put together, what different tools you have at your disposal. And you can zoom into this if you wish. So you could pull this up right here and then zoom in as you wish. You'll see we expect to have a real estate master assistant with lead management agent conversation memory openai GP40. So it learned that from looking through the agent repository. And then at the very bottom it says success. Here's the ID of the actual workflow. And if we go into NADN, what do you know? You have a workflow that's called real estate master assistant. It is using a chat trigger with a real estate assistant right here, as well as a series of workflows and a memory and an openi model just like the examples I had in my folder. And of course, as usual, I also put together a prompt to orchestrate all the subworkflows and the agent without my intervention at all. If that's not cool, I don't know what is. And this is without using the thousands of workflows that we looked at before with cloud desktop. So imagine importing that here as well. You'll be able to create agents, workflows, workflows with agents and have the power of cloud for opus or in this case if you want to upgrade to cloud for opus max to put this workflow from a toz and take care of all the validation, the importing and labeling. And with that you have everything you need to take your end workflow building to the next level. Now, once again, if you want access to these skeleton JSONs you can use to quickly spin up that cloud desktop without any Docker whatsoever, you'll find it in the first link in the description below. But if you want access to these agent tools that took us hours to put together, as well as our repository of agent workflows and a bit of a setup guide on using Cursor, as well as tons of other resources, mad scientist experiments like this every single day, check out the second link in description below, and maybe our community would be the perfect fit for you. And if this helped you step up your game to the next level, I'd super appreciate a comment down below. It helps the algo. It helps protect me from the army of copycats. So, I'd really appreciate it. I'll see you next time.

## Timed Segments

[0:00] Imagine just typing one prompt and
[0:02] minutes later, a complete workflow
[0:04] automation lands straight into your
[0:05] internet account, fully labeled and
[0:07] ready to set up. By combining Claude
[0:09] with the power of MCP servers, you can
[0:11] unlock almost effortless workflow and
[0:14] agent creation that anyone can master.
[0:16] Now, I&#39;ve already shown on this channel
[0:17] how to manually copy paste workflows
[0:20] from Claude into any debt. And let&#39;s
[0:22] just say some of those methods were
[0:23] wildly adopted all over YouTube. But
[0:25] these new approaches I&#39;m about to show
[0:27] you take things to a completely
[0:28] different level. In this video, I&#39;m
[0:30] going to walk you through step by step
[0:31] through three powerful approaches. I&#39;m
[0:33] going to start out by showing you the
[0:34] simpler copy paste method, but adding
[0:37] MCP servers to really supercharge that
[0:39] workflow. And then I&#39;m going to ramp
[0:40] things up with more advanced techniques
[0:42] on how you can combine things like
[0:43] Claude with Docker and even Cursor to
[0:46] take this to a completely nuclear level.
[0:48] And then I&#39;m going to ramp up to some
[0:50] more advanced techniques where we&#39;re
[0:51] going to combine multiple different
[0:53] services to be able to actually create
[0:55] the NN workflows and put them straight
[0:57] into your account. So, it&#39;s a fully
[0:58] hands-off process. If you watch this
[1:00] video from beginning to end, you&#39;re
[1:02] going to pick up some skills that will
[1:03] give you some massive leverage, not just
[1:05] in any end, but across different
[1:06] applications and workflows. Now, for the
[1:08] first two methods, I&#39;m going to show you
[1:10] first that it does work before I show
[1:12] you how it works. Now, to start things
[1:13] off, I&#39;m using Clawed Desktop here, not
[1:16] the browserbased version. And the reason
[1:18] why, I&#39;ll get to in a bit. But if we
[1:20] take a peek at the different tools I
[1:21] have at my disposal right here, you&#39;ll
[1:23] see that I have a series of different
[1:25] servers that I can call as additional
[1:28] tools that Claude can leverage. And the
[1:30] ones we really care about today are the
[1:31] NANE MCP context 7 and NAN workflow
[1:35] docs. But if you needed just one tool to
[1:37] make this happen, I would use this NANE
[1:40] MCP. And we&#39;ll go through what that
[1:41] looks like, what the underlying
[1:43] repository looks like, and how it works.
[1:44] But like I promised at the beginning,
[1:46] I&#39;m going to show you how we can turn
[1:47] one mediocre prompt into a workflow
[1:50] waiting for you in your edit account by
[1:53] just waiting. So let&#39;s enter our first
[1:54] prompt here. And I&#39;m purposely going to
[1:56] be lazy by dictating it so I can be
[1:58] verbose in my description, but also not
[2:00] have to type it myself. Okay, so I run
[2:01] an e-commerce company and we use all
[2:04] kinds of tools that we want to automate
[2:06] workflows for, but I don&#39;t know what to
[2:08] automate first. So based on the example
[2:10] of having an e-commerce business doing
[2:12] $20 million, selling primarily clothes
[2:15] and merchandise on Shopify, can you come
[2:18] up with a draft workflow on NADN that
[2:21] would work perfectly or at least be
[2:22] drafted perfectly that would use things
[2:24] like Salesforce, maybe Shopify, Google
[2:27] Sheets, and Gmail, and just come up with
[2:29] a workflow that would make sense for us
[2:31] to start off with as a foundational
[2:33] starting point. So, it&#39;s kind of like
[2:36] talking to a consultant, but a
[2:37] supercharged consultant that can do all
[2:39] kinds of things. Now, one thing here is
[2:41] I&#39;m going to enable extended thinking so
[2:43] that the AI has the ability to think a
[2:45] lot harder. And then we&#39;ll use Claude
[2:47] for Opus. And then you&#39;ll see here
[2:50] without me specifying anything, we can
[2:53] send this prompt and it should be able
[2:54] to know which tools are worth invoking
[2:57] for this specific procedure. You&#39;ll see
[2:58] here it&#39;s going through the process of
[3:00] reasoning how to use the different tools
[3:02] at its disposal. It&#39;s first searching
[3:05] which nodes and the underlying structure
[3:07] of those nodes that it might need to
[3:09] construct this and then it&#39;ll go through
[3:10] and make sure that it&#39;s collected
[3:12] everything first and then it&#39;ll move on
[3:14] to the next part. So now it&#39;s thinking
[3:15] through the entire process again without
[3:18] too much detail given my hypothetical
[3:20] scenario and just double-checking that
[3:21] it has everything it needs. And now it&#39;s
[3:23] getting into the mechanics of
[3:24] understanding how to properly position
[3:26] and structure the JSON needed which by
[3:29] the way if you don&#39;t know Nit end and
[3:31] all these workflow automation tools
[3:32] primarily use something called JSON
[3:34] which is JavaScript object notation
[3:36] which is fancy language for a series of
[3:39] code that represents the automation you
[3:40] see on screen and after a few minutes of
[3:42] running it creates the underlying
[3:44] workflow here realizes that it has some
[3:46] issues in the workflow. It diagnoses it
[3:48] itself and basically selfheals and then
[3:51] writes the underlying workflow to our
[3:53] account. And how we know that is it says
[3:55] I&#39;ve successfully created your ecommerce
[3:57] order processing and customer sync with
[3:59] this following ID. This is the ID of the
[4:01] workflow. And then it walks through what
[4:04] the automation looks like, how it works.
[4:06] If you want to ask more questions on the
[4:08] underlying logic or anything related to
[4:10] what needs to be set up for you to
[4:12] actually make it functional, it gives
[4:13] you that full breakdown right here. But
[4:15] wait, there&#39;s more. It gives you
[4:17] expansion ideas on what you could do
[4:19] next. So, it&#39;s literally like having an
[4:21] automation consultant that not only can
[4:23] advise you, but it can also build setups
[4:25] and prototypes and drafts of these
[4:27] workflows to take you from zero to 70 to
[4:30] 80%. And if we flick over to my N&amp;N
[4:32] account, you&#39;ll see right here is the
[4:34] e-commerce order processing and customer
[4:36] sync. And if we click on the workflow,
[4:38] it should have valid nodes because it
[4:40] looked up the documentation and
[4:41] everything it needs to find. And while
[4:43] this is a basic workflow, again, it gets
[4:45] you started on the way. And I didn&#39;t
[4:47] give it a very good prompt. Imagine if
[4:48] you gave it a full breakdown of your
[4:50] process or even a process diagram of how
[4:53] your operations work. It will be a lot
[4:56] more detailed and a lot more bespoke.
[4:57] So, now that we&#39;ve seen that it does
[4:58] work, we&#39;ll walk through how it works
[5:00] and get started with setting up the
[5:02] first version of this that anyone can
[5:04] set up irrespective of their skill
[5:06] level. So once again, the goal is to
[5:07] enter anywhere from a basic prompt to a
[5:10] advanced prompt and have it create the
[5:12] entire end workflow for you. So you can
[5:14] go in, plug in what you need to plug in,
[5:16] make any changes that make sense given
[5:18] your business and then go from there.
[5:19] And something like this created
[5:21] something like this where we&#39;re once
[5:23] again Claude has tried to think of what
[5:25] is the most logical and simple solution
[5:27] that we could come up with with this
[5:29] very vague and minimal piece of
[5:30] information. And you&#39;ll see here it came
[5:32] up with not just one but two separate
[5:34] workflows. And sometimes it even
[5:35] generates three to four workflows
[5:37] depending on how much you&#39;ve asked for.
[5:39] And just to answer the question that
[5:40] might be in your head, yes, it can also
[5:42] create AI agent structures because at
[5:44] the end of the day, all of these AI
[5:46] agents are represented by something
[5:47] called lang chain. And while it&#39;s
[5:49] searching all of those nodes, it can
[5:51] find those specific nodes and we can
[5:53] definitely coach it along the way to do
[5:54] so. So to effectively go from this to
[5:57] this, we have four core components we&#39;re
[5:59] going to need to use. So in order for us
[6:01] to not have to have a knowledge base, if
[6:03] you want to just crank out some simple
[6:04] workflows, we need to be able to speak
[6:06] to the NIDAN documentation. Unlike other
[6:09] providers, NIDAND is more open source,
[6:11] meaning all the code you need to
[6:13] actually see how NAND works exists in
[6:15] public. And because of that, these kinds
[6:17] of servers can help read that
[6:18] documentation and better acquaint
[6:20] themselves every single time they&#39;re
[6:22] going to create or draft a workflow for
[6:23] you. And through understanding that
[6:25] documentation, it can better understand
[6:27] when to use, which nodes or workflows
[6:29] where, and over time, especially if
[6:31] you&#39;re writing requests in the same
[6:32] chat, it will see different types of
[6:34] workflows that&#39;s created and basically
[6:36] use that structure, assuming you&#39;re
[6:38] actually in agreement with it. Now, this
[6:39] next component is optional, but it can
[6:41] definitely supercharge things where
[6:43] there are actual repositories of
[6:45] thousands of workflows that you can sync
[6:47] up and easily hook up to claude via MCP
[6:50] server as well. So it can not only
[6:52] search through nodes, search through
[6:54] documentation, but also search through
[6:57] like examples to your workflow. So it
[6:59] has a much higher likelihood of actually
[7:01] creating the workflow properly without
[7:03] you having to go through the overhead of
[7:05] uploading your own workflows to show it
[7:06] as an example. And last but not least,
[7:08] if you want to be able to create agent
[7:10] workflows, you totally can. One thing
[7:12] that&#39;s helpful here is to actually nudge
[7:14] in your prompt or provide a series of
[7:16] example workflows that are specifically
[7:18] agent-based to encourage it to not
[7:20] always crank out workflows that are A to
[7:22] B, but more so use agents where it makes
[7:25] the most sense. And that&#39;s the level of
[7:26] nuance here that takes us from being
[7:27] good to fantastic. Now, I&#39;ll go through
[7:29] the three approaches I&#39;m going to walk
[7:31] you through at a high level so you can
[7:32] fully understand what each one entails.
[7:34] So, for the very first level, we&#39;re just
[7:36] going to combine MCP servers with cloud
[7:38] desktop. They&#39;re not going to be
[7:39] complicated to set up and all you have
[7:41] to do is copy paste some JSON into
[7:44] what&#39;s called a config file, save it,
[7:46] restart Cloud Desktop, and you&#39;ll be
[7:48] able to use those tools instantly. Now,
[7:49] in case you don&#39;t even know what MCP is,
[7:51] it stands for multicontext protocol,
[7:54] which is a glorified fancy $5 word for
[7:57] wrapping an API or the backend service
[8:00] of a particular application to be able
[8:02] to easily speak to it back and forth.
[8:04] Typically, you can imagine the analogy
[8:06] of having a single key for one door. You
[8:08] imagine that that one door is a
[8:10] functionality. So, let&#39;s take the
[8:12] example of Slack. So, sending a message
[8:14] via Slack, drafting a message,
[8:17] scheduling a message, all of those are
[8:19] different functionalities. And we lived
[8:21] in a world where every single time you
[8:22] wanted to make a call, which is a tap on
[8:25] the backend shoulder to tell it, I want
[8:27] to do this thing, and I&#39;m not going to
[8:29] do it through Slack, but I want to use
[8:30] it through Nitn or Zapier or Make. I
[8:33] want you to take this key, which is are
[8:34] my credentials, and open that one door
[8:36] so I can make this one request. So,
[8:38] while language models could totally use
[8:40] this structure and keep knocking on the
[8:41] door every single time, to be able to
[8:44] use all of the tools effectively and
[8:45] have access to all of the functionality
[8:47] from one credential, you now have these
[8:50] servers that let you take that same key
[8:52] and open five doors at once. So, to
[8:54] simplify it, one key, one door was the
[8:56] old world. And with this MCP server
[8:58] world, it is one key, five, 10, a 100
[9:01] doors all at once. Which is why if we go
[9:03] into here, you&#39;ll see that we don&#39;t just
[9:05] have singular tools. We have 38
[9:07] different functionalities we get from
[9:09] one individual server. And that&#39;s really
[9:10] the power of MCPs. Typically in our old
[9:13] world, we&#39;d have to hardcode each and
[9:16] every method that we wanted to use,
[9:17] which was not only not scalable, but if
[9:20] things changed across the line or the
[9:22] owner of that service changed the
[9:23] structure of how their functionality
[9:25] works, we would have to update every
[9:26] single thing in tandem. Now, there are
[9:28] two main ways that you can use these
[9:29] servers. One of them is called local and
[9:32] the other&#39;s called remote. If you use
[9:34] remote, it&#39;s a lot easier, especially if
[9:36] you&#39;re nontechnical, because all you
[9:37] have to do is copy paste a series of
[9:39] code, very small snippets that say MCP
[9:42] server and list out a bunch of
[9:43] functionality and usually a credential
[9:45] of some sort, and you paste that into
[9:47] what&#39;s called a config file of Cloud
[9:49] Desktop. Don&#39;t worry, I&#39;ll show you
[9:51] exactly how to do it. It&#39;s like a one
[9:52] minute operation. And once you just
[9:54] restart Cloud, you should be able to see
[9:56] those tools right away. Now, the local
[9:58] side isn&#39;t necessarily rocket science,
[10:00] but depending on your system, sometimes
[10:02] there can be a little bit of friction to
[10:03] follow a few of the steps. But
[10:04] regardless, I&#39;m going to break that down
[10:06] for you as well to increase the
[10:07] likelihood that you can take advantage
[10:08] of the very potent level two and three
[10:10] to make sure that this approach is as
[10:12] simple as possible. We&#39;re going to use
[10:14] this tool called Git MCP, which pretty
[10:16] much will allow you to take someone&#39;s
[10:17] GitHub, which is a series of code or
[10:20] repositories where there&#39;s all kinds of
[10:21] functionality that you can enable, and
[10:23] then create a mini MCP server that you
[10:26] can just copy paste the code that they
[10:27] give you, paste it into Claude&#39;s config
[10:30] file, restart, and you&#39;d be able to
[10:32] speak to whatever service you want
[10:33] that&#39;s compatible. And to start off,
[10:35] we&#39;re going to connect thousands of NDEN
[10:37] workflows as well as information,
[10:39] documentation, and everything you saw in
[10:42] that initial step that I showed you
[10:43] where it searched the nodes, had access
[10:45] to the workflow, as well as access to
[10:46] the documentation. Now, for approach
[10:48] number two, we&#39;re going to call this
[10:49] expert mode where technically all we
[10:51] have to do is combine cloud with
[10:53] something called Docker. And if you
[10:55] don&#39;t know what Docker is, I&#39;m going to
[10:56] give some analogies here. So, it has a
[10:58] whale icon with a series of containers.
[11:01] So, there&#39;s two different ways you can
[11:02] think about this. The first way to think
[11:04] about this is a sort of lunchbox. So
[11:06] imagine you have this box or container
[11:09] on your computer. And this container can
[11:11] have all kinds of functionalities. It
[11:13] can have different apps. It can have
[11:15] things that you can spin up that act as
[11:16] a server. And in this case, it&#39;s not a
[11:18] server in the cloud. It&#39;s a server
[11:20] that&#39;s actually running in real time on
[11:22] your actual hardware. Naturally, this
[11:23] makes things a lot more secure, which is
[11:25] why using this NN MCP server and running
[11:28] on the local computer allows you to
[11:30] enter your API key for NN and your
[11:33] credentials so that it can remotely and
[11:35] programmatically write all your
[11:37] workflows to your NN account. Another
[11:39] way to look at Docker is the right way
[11:40] to look at it, which is a actual
[11:42] container. Imagine each one of the apps
[11:44] you configure whether it&#39;s the nen MCP
[11:47] server or all kinds of servers you can
[11:49] add to your computer all are individual
[11:51] containers and Docker is carrying all of
[11:54] them and running all of them as you wish
[11:56] and whenever you run them or they&#39;re
[11:58] running on your computer you can use
[12:00] them because they can communicate with
[12:01] in this case cloud desktop directly. Now
[12:03] setting docker up on a terminal can be a
[12:06] bit intimidating to people. So, one tool
[12:08] I really recommend, not affiliated, just
[12:10] a cool tool and it&#39;s free to use for the
[12:12] most part. It&#39;s called Warp. It&#39;s
[12:14] basically an AI powered terminal. So,
[12:16] you can literally write in natural
[12:17] language, please download Docker for me.
[12:19] And then it will go and look for Docker
[12:21] and you can download it and every time
[12:23] you hit an error, which is totally
[12:25] possible, Warp will actually come up
[12:27] with using AI the next natural step that
[12:30] you could do to troubleshoot. So you can
[12:31] keep essentially clicking tab enter it
[12:34] will give you a suggestion what should
[12:35] you do next or what should you write
[12:37] next instead of you screenshotting
[12:39] everything that you see in your terminal
[12:40] giving it into claude or chatbt and
[12:42] saying SOS help me. So for me personally
[12:44] it took around 3 minutes to set this up
[12:46] on my computer. Now I did have Docker
[12:48] beforehand and you can actually download
[12:50] it manually through the web which I&#39;ll
[12:51] show you right now. So if you just
[12:52] Google Docker desktop you&#39;ll see these
[12:55] results. You have Docker Desktop for
[12:56] Windows if you&#39;re on Windows and then
[12:58] Mac if you&#39;re on Mac. Then all you have
[13:00] to do is go on one of these websites. Go
[13:02] to the desktop for Mac or Windows and
[13:05] then select the one that matches your
[13:06] hardware, download it, and that could be
[13:08] the easy way that you at least have
[13:10] Docker on your computer. And once it&#39;s
[13:12] installed, we&#39;ll be able to connect that
[13:14] server to Claude in the same way we
[13:16] connected the remote server in the first
[13:18] level to Cloud as well. And it&#39;ll be
[13:20] very straightforward from there. And for
[13:21] level three, we&#39;re just going to add one
[13:22] more service. So here we&#39;re going to
[13:24] combine Claude Desktop, Docker, as well
[13:26] as something called Cursor. And if you
[13:28] don&#39;t know what cursor is, it&#39;s
[13:29] basically a code editor. A lot of you
[13:31] might look at it and be intimidated at
[13:33] first, but it&#39;s honestly just like using
[13:35] chatbt except it has access to folders
[13:37] and can do very powerful things. And the
[13:40] reason why this is a Eureka moment is
[13:42] typically in all of my other workflow
[13:43] videos, Claude has always had
[13:45] limitations. And the main limitation is
[13:47] the fact that it has a knowledge base
[13:49] which is very finite, meaning
[13:51] conversations that you start end really
[13:53] quickly. and you&#39;re constantly pushed to
[13:55] upgrade to larger and larger plans to be
[13:57] able to have a back and forth for more
[13:59] than five to six times. When you use
[14:01] something like cursor, what it allows
[14:02] you to do is have an entire folder or a
[14:05] database of thousands of workflows that
[14:08] it can scan through very efficiently
[14:10] without us having to ram it into Claude,
[14:12] make Claude read each and every line,
[14:14] and basically limit our entire scope of
[14:16] the conversation. So by using these
[14:17] platforms that are actually optimized
[14:19] for not only writing but maintaining and
[14:21] scanning through thousands if not tens
[14:24] of thousands of lines of code if we
[14:26] actually use the JSONs documentation
[14:29] everything and we properly categorize it
[14:31] into different folders we technically
[14:33] have the access to all the cloud models.
[14:36] So we can have claude basically have a
[14:38] conversation with all of these files and
[14:40] not be held back with what we can or
[14:42] can&#39;t add. And when you combine this
[14:44] trifecta of the intelligence of claude,
[14:47] especially with making end JSON
[14:49] workflows with a knowledge base with the
[14:51] ability to remotely create these
[14:52] workflows and the ability to reference
[14:55] thousands of other workflows and read
[14:57] documentation through other servers, you
[14:59] now have something unbelievably potent.
[15:01] And if you&#39;re more technically inclined,
[15:02] then you can use whatever editor makes
[15:04] you happy or whatever you&#39;re used to.
[15:05] The reason why I used cursor versus
[15:07] windsurf is just because windsurf was
[15:09] acquired by OpenAI. So Claude actually
[15:11] cut off native access to their latest
[15:13] models. So I just went with cursor since
[15:15] they have a very good relationship and
[15:17] they have a very flexible plan on how
[15:19] many times you can use not just cloud
[15:21] for opus and sonnet but also use them on
[15:23] the max mode which gives you maximum
[15:25] efficiency and performance of those
[15:27] models. And in this case we&#39;ll use a
[15:29] combination of GitHub to not only
[15:30] download the server from contact 7 which
[15:33] will give us access to real time updated
[15:36] documentation from all kinds of services
[15:38] not just end. It can help you with
[15:40] OpenAI, the latest models from Claude.
[15:42] This is again a hyper leverage MCP
[15:45] server that you can add to anything,
[15:47] even claude desktop, by the way. With
[15:48] that bird&#39;s eye view, let&#39;s get into
[15:50] setting up level one. All right, so for
[15:51] the first approach, I&#39;m going to start
[15:53] on a blank slate as many of you will as
[15:55] well. So, if you go into my tools here,
[15:57] you&#39;ll see I have none of the tools I
[15:59] mentioned before. So, we&#39;re going to add
[16:00] them together step by step. Now, in
[16:02] Cloud Desktop, the way you add tools is
[16:04] you go to the very top left hand side
[16:06] here. You click on cloud and then you go
[16:08] on settings. When you go on settings,
[16:11] you&#39;re going to want to click on
[16:12] developer. And on the developer tab,
[16:14] you&#39;ll be able to edit config. And then
[16:17] this will pop up that file that I
[16:19] mentioned to you before where you can
[16:20] paste all the credentials or the
[16:22] addresses or in this case the MCP server
[16:25] information that you need to hook it up
[16:26] to cloud. So, this is what the file
[16:28] looks like in the underlying folder. And
[16:30] if you doubleclick it, it&#39;ll be blank.
[16:32] It&#39;ll just say MCP servers by default.
[16:34] And we have to populate this. Now, are
[16:36] we going to write the code ourselves? Of
[16:38] course not. We&#39;re going to copy paste
[16:40] all the credentials that I&#39;ll show you
[16:41] how to get. We&#39;ll throw them into Claude
[16:43] actually. And then we&#39;ll get Claude to
[16:45] write this entire file so we can just
[16:47] copy paste. To maximize the power of
[16:49] this first approach, we&#39;re going to use
[16:51] three different GitHub repositories. One
[16:54] is called Naden Workflows. And I want to
[16:57] make a shout out to Z619 who made this
[16:59] available where there are thousands of
[17:02] workflows available. And if I just click
[17:04] on this file here, you&#39;ll see all of
[17:06] these are many many workflows that your
[17:10] clawed instance can learn from. Now are
[17:12] all necessarily the exact copy or carbon
[17:15] copy of what you might be going for? No.
[17:17] But having access to these, especially
[17:20] in our third approach down the line,
[17:22] will make it that much easier to avoid
[17:24] hallucinations or corrupt notes. The
[17:26] second repository we&#39;re going to use is
[17:27] called Context 7. And once again, you
[17:29] can read through the information here,
[17:31] but it basically gives you access to the
[17:33] latest and greatest documentation. So
[17:35] instead of asking Claude to do a web
[17:37] search or a deep web search to look for
[17:39] any documentation, we can just call this
[17:42] server and it has always a carbon copy
[17:45] of the latest documentation on file. And
[17:47] last but not least, we have the NAND MCP
[17:49] server that was designed by this
[17:51] individual right here. Now, I don&#39;t know
[17:53] him personally, but he&#39;s done an
[17:54] incredible job at designing this to not
[17:56] only create the nodes, search the nodes,
[17:59] load documentation, so he deserves all
[18:01] the kudos and praise. So, definitely
[18:04] star his repository so he becomes more
[18:06] famous. Now, the catch here is we won&#39;t
[18:08] be able to create the workflows again
[18:10] because we&#39;ll need Docker, which we&#39;ll
[18:12] talk about in step two to be able to
[18:14] allow those credentials to go through.
[18:16] So in this step, this specific server
[18:18] won&#39;t be comma as useful as it could be
[18:20] in level two and three, but it&#39;ll still
[18:22] be something we&#39;ll add. Now, instead of
[18:23] asking you to figure out how to create
[18:25] an MCP server from scratch, I&#39;m going to
[18:27] give you a nugget or cheat code that
[18:29] whether you&#39;re technical or
[18:30] non-technical will be super useful. So,
[18:32] what you can do is go to getmcp.io,
[18:36] okay? And then it will give you
[18:38] step-by-step instructions on what you
[18:40] can do to not only create a mini MCP
[18:43] server of a repository, but you can
[18:44] actually talk to it to ask it questions
[18:46] like what is this doing? What is it
[18:48] composed of? Another cheat code you
[18:51] could do is if you go into here, you can
[18:53] actually change this URL to just say
[18:57] getmcp.io.
[19:00] And watch this. It&#39;s not only going to
[19:02] give you the ability to chat with it as
[19:04] well as a server URL, but it will
[19:06] provide you with the exact code that you
[19:08] need to copy paste into things like
[19:09] cursor, cloud desktop, windsurf, etc.
[19:12] So, what we&#39;re going to do is we&#39;re
[19:14] going to take each one of these codes
[19:16] here and I&#39;m going to open a brand new
[19:18] cloud in my browser and I&#39;m just going
[19:21] to say create one unified JSON file out
[19:27] of all of these. Okay. So, I&#39;m going to
[19:29] paste number one. And then we&#39;ll do the
[19:32] second one. So, let&#39;s take this one.
[19:34] We&#39;ll do the exact same thing. We&#39;ll
[19:36] just do get mcp.io.
[19:40] We&#39;ll do the same thing. Cloud desktop.
[19:42] Paste it here. And obviously the
[19:44] interesting thing is we&#39;re using claude
[19:46] to write a file for claude. So, we have
[19:48] some claude seion going on. So, get
[19:50] mcp.io
[19:52] once again. And then I think we have all
[19:54] of them. So, we&#39;ll paste it here. And
[19:57] then we&#39;ll just have Claude put this
[19:58] together for us. So we can just copy
[20:00] paste. And in under a minute we got
[20:01] something like this that we can just go
[20:03] copy. Go back to Claude and then paste
[20:07] this into the config file. Boom. We&#39;re
[20:11] going to save it. Now to actually see
[20:12] those tools. You&#39;ll see right here we
[20:15] can&#39;t see anything despite adding it. We
[20:17] just have to click go to claude. We&#39;re
[20:20] going to fully quit the program and then
[20:22] restart from scratch. and that&#39;s going
[20:24] to be the trigger for it to read that
[20:25] file and ingest those tools. When you
[20:27] restart Claude, if you don&#39;t get an
[20:29] error immediately in the top right hand
[20:30] side, typically that means you&#39;re in the
[20:32] clear. And if you go to right here and
[20:35] click on this specific section, you&#39;ll
[20:37] see that we have contact 7 end MCP docs
[20:40] and end workflow docs. And you&#39;ll see
[20:42] all the different tools and
[20:43] functionalities that we can call. Now,
[20:45] like I said, for the end MCP docs,
[20:48] because we can&#39;t harness the full power
[20:50] without using something like Docker on a
[20:52] local server, you&#39;ll only have access to
[20:53] four core functionalities, but there&#39;s
[20:55] actually 38 different tools and
[20:57] functionalities that it has in its
[20:59] server. Now, since you have access to
[21:00] edit end workflow docs, you can
[21:02] technically ask for it to search for a
[21:05] similar workflow to the one you&#39;re
[21:07] trying to create and it will be able to
[21:09] load in memory a JSON file without
[21:11] necessarily ramming or cramming up the
[21:14] clawed knowledgebased space. So if we do
[21:16] something like this and I say, can you
[21:18] go through the fetch workflows function
[21:21] or search workflows function that you
[21:23] have at your disposal and look for a few
[21:25] different workflows that use Telegram to
[21:28] put together a small prototype of a JSON
[21:31] workflow that you&#39;ll put into JSON
[21:34] format and output it in a code block
[21:36] that will work when I import it into
[21:37] NAD. And then we&#39;ll send that over and
[21:40] then we will give that a shot. It should
[21:43] be able now to realize that it has that
[21:46] tool at its disposal, go and search that
[21:48] entire repository through the different
[21:51] files and look for the relevant
[21:53] workflows. So you&#39;ll see here it&#39;s now
[21:55] using the search end workflows code.
[21:57] It&#39;s querying the word telegram and
[21:59] looking for a match. Now it&#39;s managed to
[22:01] find in the GitHub repository an example
[22:04] of a workflow. It&#39;s looking for a
[22:06] simpler one to learn from. And you&#39;ll
[22:08] see right here, it&#39;s sending another
[22:10] version of that same search. It&#39;s
[22:12] thinking again. And now it gives you a
[22:14] pop-up that you can click on allow
[22:15] always. It&#39;ll then search and now fetch
[22:18] and take that actual JSON file, look
[22:21] through it, learn from it, and try to
[22:22] apply it to our new scenario. Now, if we
[22:24] take a peek at this fetch step, you&#39;ll
[22:26] see that in here, it&#39;s ingesting the
[22:29] entire JSON file to learn from exactly
[22:32] how it&#39;s built, and then it&#39;s crafting a
[22:34] JSON based on that structure. And
[22:37] typically this will have a much higher
[22:38] likelihood at working at your first try
[22:41] because it&#39;s the same thing as us
[22:42] actually manually uploading a workflow
[22:44] with Telegram or Telegram nodes and
[22:47] having Claude try to guesstimate what
[22:49] that would look like in the brand new
[22:50] scenario. So since this method doesn&#39;t
[22:51] allow us to directly import into any
[22:54] handsoff we can take this workflow and
[22:57] we can have a high likelihood or high
[22:59] confidence that we&#39;ll import correctly.
[23:01] So there you go. And we click on the
[23:03] paintbrush just to put in lens. Then we
[23:05] have the send welcome message and echo
[23:07] message. Very basic workflow. I had a
[23:09] very basic prompt and it&#39;s ready to go
[23:11] and we can start using it and setting it
[23:13] up. Now before we go to level two, I
[23:14] just want to show you how you can take
[23:15] advantage of using context 7 and enrich
[23:18] this entire workflow. So I&#39;m going to
[23:20] send a prompt here. Okay. So, I want you
[23:22] to use the tool context 7 to look for
[23:24] the latest and greatest documentation to
[23:28] look through examples or different
[23:30] pieces of inspiration to make the
[23:31] workflow you put together a lot more
[23:33] bespoke and ideally adapt it for a
[23:35] digital marketing agency. So, we&#39;ll send
[23:38] that over and I don&#39;t necessarily care
[23:40] for the resulting workflow. I just more
[23:41] so want to show you what it&#39;ll do if we
[23:43] say something like context 7 and we&#39;re a
[23:45] bit more explicit with that specific
[23:47] command. And why I&#39;m being more
[23:48] intentional by saying contact 7 in this
[23:50] case is technically if I said look for
[23:52] the latest and greatest documentation
[23:54] and I have web search enabled it might
[23:56] get confused and say I&#39;ll use web search
[23:58] but in this case you&#39;ll see it&#39;s asking
[24:00] us to approve on searching the edit in
[24:02] documentation using context 7. It&#39;ll go
[24:05] and read through then come back with a
[24:08] different perspective. So in this case,
[24:09] it didn&#39;t only read the documentation.
[24:11] It also realized that after reading the
[24:13] documentation, it wanted to see another
[24:15] example of creating a Telegram workflow,
[24:18] but this time marrying it with Google
[24:20] Analytics since it decided that would be
[24:21] the most relevant for a digital
[24:23] marketing agency. And then the result is
[24:25] it&#39;s generating a workflow right here.
[24:27] And just for fun, we&#39;ll copy paste it to
[24:29] see how it&#39;s changed. Now, it still
[24:31] might be basic because my prompt wasn&#39;t
[24:32] that bespoke or robust, but we&#39;ll see
[24:35] what it comes up with. So if we copy,
[24:37] move over, paste it, and then click the
[24:40] paintbrush, you&#39;ll see now we have a
[24:43] much more bespoke version. And even
[24:44] without me asking, it created a sticky
[24:46] note trying to explain what&#39;s happening.
[24:48] It created a subworkflow here. And
[24:50] you&#39;ll see that&#39;s just me saying make it
[24:51] better. So imagine I was more
[24:53] intentional and told it exactly what my
[24:55] business processes were, what friction
[24:57] points we had, and what other tools we
[24:58] had at our disposal. All right, so
[25:00] that&#39;s the end of level one. And
[25:01] hopefully you saw that it wasn&#39;t too
[25:02] difficult. All we had to do technically
[25:04] was copy paste a JSON which by the way
[25:06] to make your life easier I will make
[25:08] available in the first link in the
[25:09] description below. So all you have to do
[25:11] is just copy paste that into your cloud
[25:13] desktop and since there are no
[25:14] credentials then you can just use it out
[25:16] of the box right away. Now, for level
[25:17] two, you&#39;re going to have to download
[25:19] Docker on your desktop computer, whether
[25:21] you&#39;re on Mac or Windows. And once
[25:23] again, all you have to do if you don&#39;t
[25:24] want to use a terminal is put Docker
[25:26] download. And then when you go to
[25:28] Docker, you&#39;ll be able to see get Docker
[25:31] right here. And then download it for
[25:32] whatever device you&#39;re using. And then
[25:34] it will take around 5 to 10 minutes just
[25:36] to fully install. And the other tool I
[25:37] highly recommend, especially if you&#39;re
[25:39] not technical, is just downloading one
[25:40] called Warp. It&#39;s the Agentic
[25:42] Development Environment. Just download
[25:44] this. It should be free to use for at
[25:46] least the purposes that we&#39;re using it
[25:47] for. And it will look something like
[25:49] this. So you have a blank screen that
[25:50] kind of looks like a terminal, but it
[25:52] functions very differently. You can
[25:54] actually talk to it instead of having to
[25:56] use chatbt to send weird commands with
[25:58] dashes and hyphens. So you can say, I
[26:00] want to download Docker on my desktop,
[26:05] right? And it&#39;ll use, in this case,
[26:07] claude 3.7 sonnet to try to come up with
[26:10] what the next steps would be. So it&#39;ll
[26:12] tell you exactly what to do. And if you
[26:13] wanted to actually run it on your
[26:15] computer, it&#39;ll give you the exact
[26:16] command to use. So I could just copy
[26:18] this, paste it right here. And then I
[26:21] could run this command. And in this
[26:23] case, I have Docker on my computer.
[26:24] Yours, if you don&#39;t have it, will be
[26:26] brand new. You&#39;ll just follow the
[26:27] instructions, which it will give you.
[26:29] And then if you run into any errors,
[26:31] typically it will suggest what the fix
[26:33] for the error is. And all you&#39;ll have to
[26:35] do is click on tab to accept the
[26:37] suggestion and click enter. And that&#39;s
[26:39] usually how I set things up. Again
[26:40] though, if that seems a bit too
[26:42] complicated, just go to the URL right
[26:43] here, download it the normal way, and
[26:45] get that part out of the way. And again,
[26:46] we&#39;re setting up Docker just so we can
[26:48] pull the full potential of this Nen MP
[26:51] server. And what&#39;s good about this
[26:52] repository is it gives you the actual
[26:54] JSONs that you need to import into
[26:56] things like cloud desktop. So you could
[26:58] literally look up command F Cloud
[27:01] Desktop. It will give you two different
[27:03] versions of the JSON. one that just uses
[27:06] this out of the box for basic
[27:07] functionality and it shows you how to
[27:09] actually link your NADN API URL and key
[27:13] so you can create and write these
[27:16] workflows directly to your account. And
[27:17] like I said before, but wait there&#39;s
[27:19] more. So this legendary individual
[27:22] actually put together a whole prompt on
[27:24] how to actually orchestrate the full
[27:26] power version of this MCP server. So you
[27:29] can copy paste this prompt, paste it
[27:31] into a cloud project and use it right
[27:33] away. Now once you have docker running
[27:35] all you need to do is actually just send
[27:37] one line and it will look like this. So
[27:40] just put docker pull. This is all we
[27:43] actually have to paste into warp once we
[27:45] have docker running on our computer.
[27:47] Docker pull and then the actual link to
[27:49] this mp server. So you can literally
[27:52] copy this right here and you&#39;ll see if
[27:54] we go into warp I&#39;ve already done that.
[27:57] All I did was paste this. I initially
[28:00] got a few errors. I did nothing about
[28:02] it. It just suggested a fix. I click tab
[28:04] enter twice and then it finally showed
[28:07] this where it pulled everything onto my
[28:10] Docker desktop computer. Now to show you
[28:12] what this looks like in Docker, I will
[28:13] just pull that up. We&#39;ll click on this
[28:15] here and you&#39;ll see I have several
[28:17] trials of me running this over and over
[28:19] again. But this is the one we&#39;re
[28:20] actually using in Cloud Desktop. And you
[28:22] can tell because it has an address. This
[28:24] is basically a version of localhost
[28:27] which in plain English means this is the
[28:29] mini server or our mini MCP local server
[28:32] that cloud desktop will be speaking to.
[28:34] So one prerequisite that it can talk to
[28:36] it is it should be on it should have
[28:38] this green icon and you shouldn&#39;t close
[28:41] cloud desktop. So you shouldn&#39;t click on
[28:43] desktop quit docker desktop meaning the
[28:46] communication between your docker
[28:47] desktop and claude won&#39;t actually
[28:49] function anymore and all of a sudden
[28:50] you&#39;ll see those tools disappear. So
[28:52] just keep this on and running in the
[28:53] background. Now to get the URL and API
[28:55] key in any to be able to hook it up to
[28:58] the server, all we have to do is your
[29:00] URL will look something like this. In
[29:01] this case, it&#39;s my agency prompt advisor
[29:03] URL. So this is the part prompt
[29:05] advisor.app.n.cloud.
[29:08] This part right before the slash is the
[29:09] part we care for. And then you get your
[29:11] API key by going to the bottom left hand
[29:13] side, clicking here, clicking on
[29:16] settings, and then when you click on
[29:17] settings, you&#39;ll see right here it says
[29:19] NAN API. you&#39;ll be able to click on it
[29:22] and then create a new key. You&#39;ll get
[29:25] that key. Save that somewhere. And where
[29:27] we&#39;re going to put that is in the actual
[29:29] URL right here. So, if we go here,
[29:30] you&#39;ll see n API URL. That&#39;s going to be
[29:34] the prompt advisor one I just showed
[29:35] you, but yours will be different. And
[29:37] then the key will be whatever key we
[29:38] get. So, as soon as we have this, this
[29:41] now unlocks the server. And all you have
[29:43] to do technically is once you have that,
[29:45] you can copy that, paste it into here,
[29:49] and you can say replace the version we
[29:53] had before with this. And then you can
[29:56] say, here&#39;s my URL and API key. And then
[29:59] you&#39;ll be able to copy paste that new
[30:01] version into your cloud desktop, save
[30:04] it, close it, restart it, and then
[30:06] you&#39;re ready to go. And once you update
[30:07] cloud with that new JSON, you should be
[30:09] able to click on that same icon right
[30:11] here. And instead of showing four
[30:12] services, like I said, you&#39;ll be able to
[30:14] see 38. And then you can click on this
[30:16] to see all the new functionalities we
[30:18] have. One of which is the one we really
[30:20] care for, which is editn_reate
[30:23] workflow. That&#39;s what we have right
[30:24] here. And we can get a workflow. So you
[30:27] can actually get existing workflows in
[30:29] your workspace and edit them as well. So
[30:30] this is a super overpowered MCP server
[30:34] that unlocks tons of possibilities. And
[30:36] with that, that&#39;s the end of level two.
[30:38] And I&#39;ll show you now the powerhouse
[30:40] level three where we use this method and
[30:42] pretty much the exact same MCP server
[30:45] but using a cursor. So once again,
[30:47] cursor is a glorified editor with the
[30:50] power of AI and some systems behind the
[30:52] scenes to make it possible to use
[30:54] language models with tens if not
[30:56] thousands of lines of code. In our case
[30:58] though, not to intimidate you if you are
[31:00] a non-technical person, we&#39;re just using
[31:02] it as a version of chatbt and we&#39;ll make
[31:05] it look a little bit more friendly for
[31:06] you shortly, but all you have to do is
[31:08] click on open project. You&#39;ll have no
[31:10] projects. All you have to do is create a
[31:11] folder. So, I&#39;ll just go to a folder
[31:13] I&#39;ve already put together. In this case,
[31:14] I&#39;ll open the folder and it in
[31:16] powerhouse. And we have a few different
[31:18] folders in here, but what we can do is
[31:20] I&#39;m just going to open this brand new
[31:21] folder that I created called Power
[31:23] Plant. So, we&#39;ll click open. and all
[31:25] you&#39;ll have is a blank screen, right?
[31:28] Partially intimidating, but what we can
[31:30] do is we&#39;ll make it look a little bit
[31:32] less intimidating. We&#39;ll go into
[31:35] settings here. Let&#39;s go to open. And
[31:37] then let&#39;s go to workbench.
[31:39] Okay. And then I&#39;ll go and just change
[31:42] the color so it looks less intimidating.
[31:46] So there&#39;s light contrast. That looks
[31:49] horrific. Uh we&#39;ll do something a bit
[31:51] less intimidating. Let&#39;s do
[31:54] uh light modern here. That&#39;s that&#39;s
[31:56] doable. So, we&#39;ll close that and we&#39;ll
[31:58] close this. So, if we technically pull
[32:00] this to the left hand side, you
[32:02] basically have a version of chatbt if
[32:04] that helps simplify things. And kind of
[32:07] like some other AI tools, you can click
[32:09] on this and select from all kinds of
[32:10] models. And one of the reasons I love
[32:12] using cursor for this is it has access
[32:15] to the latest cloud models and the max
[32:17] version of them if you&#39;re on their $20 a
[32:19] month plan. But you can technically use
[32:22] versions of Claude without paying for
[32:24] the plan. So in my case, I&#39;m going to
[32:25] use the powerhouse Claude for Opus Max.
[32:28] We&#39;ll click on that. And on the lefth
[32:29] hand side, you see it&#39;s completely
[32:31] blank. Instead of having to do the same
[32:32] work twice, that same Docker we used in
[32:34] Cloud Desktop, we can also use in
[32:37] cursor. So if you go into settings and
[32:40] then we&#39;ll just move this to the right
[32:42] and then click and write MCP and you
[32:45] write MCP tools. You&#39;ll see right here
[32:48] using the exact same method I had for
[32:50] claude, we have naden mcp and context 7.
[32:53] And if we open one of them like context
[32:55] 7 since it doesn&#39;t have my credentials,
[32:58] you&#39;ll see we have the exact same
[33:00] individual JSON we had before. And to
[33:02] set up these servers, all you have to do
[33:04] is copy paste the exact same JSON we
[33:07] used with MCP for cloud desktop and it
[33:11] will have this green icon to show you
[33:12] that it&#39;s working. Assuming that you
[33:14] enter your credentials, your URL, etc.
[33:17] It should work perfectly. And once these
[33:18] are toggled on, you now have access to
[33:20] it in the conversation. Now, despite
[33:23] doing all this, you still might be
[33:24] asking, why are we using this tool
[33:27] called cursor? Well, one of the main
[33:28] reasons is if you ever use Claude,
[33:30] you&#39;ll notice how quickly it fills the
[33:32] conversation or caps you when you&#39;re
[33:34] creating JSON files. But if you use
[33:36] something like cursor, which is
[33:38] optimized for writing code, you can not
[33:40] only, by the way, drag and drop as many
[33:42] files as you want. Let&#39;s say you want to
[33:44] drag and drop a series of agent files,
[33:46] or in our case, I&#39;m going to show you in
[33:48] a snippet, agent tools, so that it knows
[33:51] how to construct agents, has a full
[33:54] repository of the agent tools it could
[33:56] use. And if you wanted to build
[33:57] workflows where it was half workflow,
[33:59] half agent or using the agent where it
[34:01] makes the most sense or building your
[34:03] NAN agent army of your dreams, you can
[34:06] do all of that. But instead of me just
[34:07] yapping about it, let me show you. So if
[34:10] I pull up my folders here, I have two
[34:12] folders. One called agent tools and one
[34:15] called agent_workflows.
[34:17] Now one of them is a series of files
[34:19] I&#39;ve used before. These are just sample
[34:21] files that use AI agents in different
[34:23] ways in edit. Now, the second file is a
[34:25] bit different and it&#39;s something that we
[34:26] haven&#39;t put together before, but my team
[34:28] and I put together a series of files
[34:31] where we took the chat trigger and an AI
[34:33] agent node and dragged on every single
[34:36] possible tool in edited end. It took my
[34:37] team hours. They hated me. But now we
[34:39] have these JSON files that I could add
[34:41] to a folder. And now we can reference
[34:44] that folder at any time if we&#39;re
[34:46] building an AI agent workflow. So, all I
[34:48] have to do is drag both of these into
[34:50] here. And I&#39;m going to do add folders to
[34:53] workspace. And now we have access to
[34:55] both of them. So I could actually ask
[34:57] something like build the workflow. Now
[34:59] technically I can add these to my
[35:01] context without breaking claude and
[35:03] maxing out my limits and waiting 6
[35:05] hours. I can just click on files and
[35:07] folders and then write something like
[35:09] agent tools and then reference the
[35:12] entire folder as well as agent workflows
[35:14] and say build me an AI agent army that
[35:17] does XYZ and use these MCP servers that
[35:20] you have at your disposal like Naden MCP
[35:23] as well as the context 7 and you can now
[35:25] mish mash all of those tools together to
[35:28] create one mega workflow without also
[35:30] being throttled because if you max out
[35:32] let&#39;s say this max version you can just
[35:35] go to cloud course on it. You can also
[35:38] use other language models which is
[35:40] something in claude you don&#39;t have
[35:41] access to. So if for whatever reason you
[35:43] think that using something like a GPT
[35:46] 4.1 40 or 03 might be better for the
[35:50] version of the workflow you&#39;re building
[35:52] you can use it and you can change back
[35:54] and forth. And that&#39;s why this becomes
[35:55] so potent and so powerful because it
[35:57] gives you flexibility. It doesn&#39;t cap
[35:59] you and you can use the best of both
[36:01] worlds. You have access to technically
[36:04] an infinite knowledge base that you can
[36:05] reference. Obviously, you can&#39;t ingest
[36:08] the knowledge base every single time you
[36:09] write a command, but you can scan what&#39;s
[36:12] relevant and use that as a part of your
[36:14] workflow. One cool thing is you can just
[36:16] go on ask mode if you want to actually
[36:18] plan out if you want to vibe plan your
[36:21] end workflow. So, I could go on here and
[36:23] say something like I want to build a
[36:25] workflow that has some agents in it. And
[36:28] you can reference examples of agents in
[36:29] the agent workflows as well as look at
[36:31] the tools at your disposal in agent
[36:33] tools. And I want to be able to plan out
[36:36] a workflow and edit end that would
[36:37] automate my process for my real estate
[36:39] brokerage. We use things like go high
[36:42] level as well as Gmail, Google Sheets,
[36:45] we use Slack as well. So come up with a
[36:48] plan for a workflow that we could put
[36:50] together. So now we could use its
[36:53] planning ability to create a plan and
[36:56] then once we&#39;ve actually executed on
[36:57] that plan and we&#39;ve approved it, we can
[36:59] go and actually build it out, have it do
[37:01] all the work for us and write it into
[37:03] our NN account. So you&#39;ll see here it&#39;s
[37:05] reading through examples of the agent
[37:07] workflows. It&#39;s reading through the
[37:09] agent tools and it&#39;s looking for what is
[37:11] relevant or not relevant. And after a
[37:13] few seconds, it comes up with a
[37:14] fullyfledged plan on different agents.
[37:17] And I&#39;ll just ask it to build one of
[37:18] them. Maybe the master real estate agent
[37:20] in this case. And if we go down, I think
[37:23] it&#39;s still going. And then I&#39;m going to
[37:24] just draft my next request here, which
[37:26] is okay. Can we execute the very first
[37:29] one and create the NAND workflow and
[37:31] write it to our NAND account? Make sure
[37:33] you use the NIN MCP server you have at
[37:36] your disposal as well as all of the
[37:38] other documentation I&#39;ve given you in
[37:39] context. So now we&#39;ll send this over
[37:42] once it&#39;s done dictating and it should
[37:45] be able to combine everything combine
[37:47] the knowledge from the folders combine
[37:49] the usage of the MCP server as well as
[37:51] the power of cloud opus all together.
[37:54] Now it&#39;s calling the MCP server as
[37:55] expected and one thing just to double
[37:57] check is I originally sent this request
[38:00] in ask mode instead of execute mode or
[38:02] in this case it&#39;s called agent mode.
[38:04] Just make sure you make that switch to
[38:06] agent mode so it can actually execute
[38:07] the MP servers. And you&#39;ll see here it
[38:10] used the start here workflow guide to go
[38:12] through the documentation, list the
[38:14] nodes that were relevant. So it searched
[38:16] for every single node that it deemed
[38:18] relevant. It then searched for more
[38:20] nodes. It got the node essentials. It
[38:22] double checked the structure of them. It
[38:25] used this nident health check to double
[38:27] check whether or not it had access to my
[38:29] cloud, which in this case you can see
[38:30] right here status, okay, success equals
[38:33] true. And now it&#39;s doing the part we
[38:35] really wanted which is the end create
[38:38] workflow function. And after running for
[38:39] 10 minutes, this is really the cool part
[38:42] of this entire workflow. So it has
[38:44] functions in the MCP server to validate
[38:46] the workflow itself. So if there are
[38:48] errors, property value errors, all the
[38:50] different things that we experience in
[38:52] copy pasting workflows. It does that
[38:54] work to reflect whether or not it&#39;s good
[38:56] enough. It then comes to the conclusion
[38:58] that it&#39;s broken or it&#39;s not fully
[38:59] there. So it creates a diagram for
[39:02] itself to think through how to simplify
[39:04] this AI agent to make it easier to
[39:06] build. It goes through it calls create
[39:09] workflow again. It gives it another
[39:11] shot. It creates another set of JSON.
[39:13] Again, zero intervention on my part. It
[39:16] now uses the update partial workflow. So
[39:19] it&#39;s repairing bits and pieces instead
[39:21] of having to rewrite the entire file. It
[39:24] then tests it out. And you can see right
[39:25] here, it goes through all the JSON to
[39:28] make sure it&#39;s all valid. at the very
[39:30] bottom. It creates a diagram now on its
[39:32] own of what agent is put together, what
[39:35] different tools you have at your
[39:36] disposal. And you can zoom into this if
[39:38] you wish. So you could pull this up
[39:40] right here and then zoom in as you wish.
[39:42] You&#39;ll see we expect to have a real
[39:44] estate master assistant with lead
[39:46] management agent conversation memory
[39:49] openai GP40. So it learned that from
[39:51] looking through the agent repository.
[39:54] And then at the very bottom it says
[39:56] success. Here&#39;s the ID of the actual
[39:59] workflow. And if we go into NADN, what
[40:02] do you know? You have a workflow that&#39;s
[40:03] called real estate master assistant. It
[40:06] is using a chat trigger with a real
[40:08] estate assistant right here, as well as
[40:10] a series of workflows and a memory and
[40:12] an openi model just like the examples I
[40:14] had in my folder. And of course, as
[40:16] usual, I also put together a prompt to
[40:19] orchestrate all the subworkflows and the
[40:21] agent without my intervention at all. If
[40:23] that&#39;s not cool, I don&#39;t know what is.
[40:24] And this is without using the thousands
[40:26] of workflows that we looked at before
[40:28] with cloud desktop. So imagine importing
[40:30] that here as well. You&#39;ll be able to
[40:32] create agents, workflows, workflows with
[40:34] agents and have the power of cloud for
[40:37] opus or in this case if you want to
[40:39] upgrade to cloud for opus max to put
[40:41] this workflow from a toz and take care
[40:44] of all the validation, the importing and
[40:46] labeling. And with that you have
[40:48] everything you need to take your end
[40:50] workflow building to the next level.
[40:51] Now, once again, if you want access to
[40:52] these skeleton JSONs you can use to
[40:54] quickly spin up that cloud desktop
[40:56] without any Docker whatsoever, you&#39;ll
[40:58] find it in the first link in the
[40:59] description below. But if you want
[41:01] access to these agent tools that took us
[41:03] hours to put together, as well as our
[41:05] repository of agent workflows and a bit
[41:07] of a setup guide on using Cursor, as
[41:09] well as tons of other resources, mad
[41:11] scientist experiments like this every
[41:13] single day, check out the second link in
[41:15] description below, and maybe our
[41:17] community would be the perfect fit for
[41:18] you. And if this helped you step up your
[41:19] game to the next level, I&#39;d super
[41:21] appreciate a comment down below. It
[41:23] helps the algo. It helps protect me from
[41:25] the army of copycats. So, I&#39;d really
[41:27] appreciate it. I&#39;ll see you next time.
