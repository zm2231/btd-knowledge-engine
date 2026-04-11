---
title: "This is the CHEAPEST and EASIEST way to set up ClawdBot"
creator: "alex-finn"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=04wh2Hlgbds"
video_id: "04wh2Hlgbds"
duration: "15:07"
transcript_method: "youtube-captions"
segment_count: 452
char_count: 17335
status: ingested
topics: []
meta_patterns: []
---

# This is the CHEAPEST and EASIEST way to set up ClawdBot

**Creator**: alex-finn | **Duration**: 15:07
**URL**: https://www.youtube.com/watch?v=04wh2Hlgbds
**Transcript**: 452 segments, 17335 chars

## Transcript

bot is the most important technology you should be using in 2026. It's literally an AI employee that works for you 24/7, 365, and it is changing many people's lives, including my own. The issue is it is incredibly difficult and expensive to set up if you do not know what you're doing. In this video, I'll go through a way of setting up CloudBot that's so simple and so cheap, it'll save you a ton of money and time, and anyone will be able to do it. I'll also go over the first few workflows you should use with Claudebot. Whether you've never used Claudebot before or you're Claudebot pro, you have a ton to learn from this video. Let's lock in and get into it. So, everyone is going out and buying Mac minis to use for Cloudbot. It's what I did. I actually just returned my Mac Mini to buy a Mac Studio. But that's not the only way to run Claudebot. There are significantly cheaper ways, especially if you want to a save money or b just dip your toes and see if Claudebot is for you because this is a brand new radical technology. If you are one of those people where you're just trying to save time, you don't want to buy a new computer or you just want to save a little money, this is the right way to do it. We are going to be able to host our Cloudbot on the internet. So, we do not need to buy any hardware. I'm going to put the link down for this below. You can do this alongside with me if you want to, or you can watch this, then go out and do it right after. So, we are going to get Claudebot up and running on Amazon EC2. Amazon EC2 is a virtual server where we'll be able to install Claudebot, then have it run 247 for us, doing work, being our employee. This might look a little technical, but I promise if you stick with me, I'll make this as easy as possible for you. Anyone should be able to set this up. So, go to the link I have down below for Amazon EC2. Create an account here. Once you signed in or created your account, search for EC2 at the top, virtual servers in the cloud. We're going to click on that. We're going to go down here. We're going to click launch instance. Once we do that, we're going to name our server. We can name it Claudebot. Let's choose Ubuntu for this. This is a Linux server we'll be creating. So, click on Ubuntu. Next, we're going to want to choose our tier. So, click the drop down here. Choose Flex Large. If we use little enough memory here, this could end up being free, but if you use this enough, this could go up to 15, 20, $25 a month. Obviously, it's flexible. So, if you're just pounding this, it could be more, but this should cost you around $20 a month if you use this a fair amount. So that's C7i Flex large. Make sure that is selected. And then we are going to click on launch instance. Scroll down a little bit more. We're going to do 30 gigabytes of storage. This is going to allow us to store a good amount on this server. And then we're going to go over here and click launch instance. Scrolling down a little bit more. We want to go to key pair. Let's create a new key pair here. Give your key pair a name. You can name this whatever you want. I named it claudebot key. Make sure RSA is selected. Use PM if you are using Mac or Linux. Use PPK if you're on Windows. And then you're going to click create key pair. That is going to download a file. That's basically your security file. So do not lose that. Keep that safe on your computer. That's going to basically have your password for connecting to this server. Let's go down to network settings. You want to make sure create security group is checked here. You want to make sure allow SSH traffic is checked as well. You're going to want to click edit up here at the top right. From here, you want to scroll down, click add security group RO here. Make sure it is custom TCP. Port range, we're going to put in 18789 right there. Source type is going to be anywhere. Once you do all of that, you are ready to go. You can click launch instance from here. Boom. It has launched. Just like that, we are good to go. Now, we can install Clawbot on here. From here, we're going to go to view all instances. There's our instance. From here, all you're going to want to do is click on this instance ID. You're going to want to click on connect right here and then click connect in the bottom right. right here. This is going to open up our console inside Amazon EC2 where we are going to actually deploy CloudBot. From here, we're going to go to Claudebot docs. We're going to copy this command right here. We're going to paste that in right here. And we're going to hit enter. And it is going to start installing Claudebot on the web. In just a second, you're going to have a 247 employee working for you. This is so sick. And I know those last couple steps might have got a little confusing at times, but I hope I got you through it clearly. If you messed anything up, feel free to go back and watch that step by step again. But this is the simplest way to do it without having to buy a brand new Mac. All right, so that is good to go. Let's start set up. I'll walk you through setup here. Then I'll give you a few awesome workflows we can use here. Got to make sure we understand the risk. We're going to go with the quick start onboarding mode. Now, we're going to choose our model off provider. There are a few ways to do this. The point of this video is showing you the absolute cheapest way to use Claudebot. If you're already paying for either Claude Max or a Chat GBT subscription, the cheapest way to do this will be to use those already existing subscriptions. So, what you would do is you would choose one of those two here and then it will give you the option for OOTH, which will basically give you a command. This command will reveal a key that you're going to want to put in here. So, take that command and put it into your terminal if you're doing the OOTH. when you put in your own terminal on your own computer, it will give you that OOTH key that you can put in. Now, let's say you're not already on an anthropic or open AI subscription plan. You're going to need your own subscription plan. You have a few options here. So, the absolute cheapest way to do this will be using a model called Miniax. MiniAX is a cheap AI model. It is very inexpensive to use. It's actually one that's recommended by the creator of Claudebot, Peter Steinberger. The issue is it is just not nearly as intelligent or personable as Claude Opus. It is still very intelligent. The personality is kind of meh, but Opus is the greatest AI model created of all time. So, you have that option, right? You can sign up for Claude Max, which is going to cost you $200 a month. You can sign up for chat GPT, which is going to cost you $20 a month and it's still going to be very intelligent. The personality is just going to stink. But if you want the absolute cheapest way to do this, you want to sign up for Miniax. From a cost to results basis, I actually think going with a chat GPT API is going to be better here. Miniax, from what I'm hearing, is very unreliable. So for reliability and cost, I think the best balance you're going to get is Chat GPT. If you want the absolute best performance on planet Earth and you're willing to spend more, you go with Claude Opus. But the point of this video is doing this the cheapest way possible. So, let's get the chat GPT API key if you haven't already logged in with chat GPT or anthropic already. So, if you go to platform.opai.com and feel free to skip to the next chapter if you've already done this. You can go to dashboard then you can go API keys and then you can create a new key. I name it Claude. I'm going to click create. Then you can come in here and you can say OpenAI. We're going to do OpenAI API key. From here, we can choose a model. I'm going to go with GPT 5.2. I think that'll give us the best balance of cost to intelligence. So, I'm going to hit enter on that. Next, you can set up your channel. I use Telegram, but you can use WhatsApp, Discord. You can use any of these you want. I'd probably recommend WhatsApp or Telegram. Those are two are probably the easiest to set up out of this, but this is where you're going to be interfacing with your bot. So, feel free to choose one of those. This will allow you to text message your 247 agent anytime you want. You can configure the skills if you want. I'm not going to configure them right now. As for hooks, I'm going to skip that as well for now. And you are good to go. Let us hatch our friend. So, I'm going to hatch in the TUI, which is your terminal user interface here. Also, by the way, side note, make sure you have your credit card into the chat GBT API section just so it can charge you as you use tokens if you haven't done that already. All right, so here's the onboarding. I'm here. It looks like this is my first moment online in this workspace. So, we should do a quick who are we setup. What should you call me? So, now you can name your Clawbot. I'm going to name ours Jones for this example. Two, what kind of thing am I to you? I'd make it an assistant, but you can make the role whatever you want. I think I made mine chief of staff for Henry, my Claudebot. Three, what's the vibe you want? Very blunt, efficient, warm, chatty. Somewhere in between. Somewhere in between. I think it's good to have a balance. It feels human but still gets straight to the point. And number four, signature emoji, yes or no. If yes, which one? Lion emoji. So, choose an animal for yours. I chose an owl for Henry, my personal Clawbot, but you can choose any you want. I'm going to hit enter. Once this is good to go, by the way, I'm going to show you a few workflows that would be super helpful to set up with your Clawbot. One more thing, so I can be useful without guessing, what's your name and time zone. I'm Alex and I'm in PST. Hit enter on that and you are good to go. All right, so we're locked in. You're good to go. The entire world is ahead of you. You got 247 AI employee. Let's go through a few use cases I think everyone should do when they set up their Claudebot. The first thing I think everyone should do when they first set up their Claudebot is do a massive brain dump on who you are. What's so powerful about Claudebot is it's self-improving and has an incredible memory system. So everything you tell it, it will remember. So, I like to start this off and tell as much about myself as I possibly can. So, do yourself a favor, go in right now, brain dump as much about you, your business, your family, relationships, everything you can, put it in there, and Claudebot will remember that about you. So, when it does task for you moving forward, it will have relevant context. Again, one of the biggest strengths about Clawbot that makes it amazing is it's constantly learning, constantly improving. Everything you say, it takes out the details and remembers it for you. So brain dump in here. Tell it about what you like, what you enjoy, your hobbies, what you do for work, how you want to make money, your dreams, aspirations. Put that all in here. The more the better. The next thing you should do with it is have it set up a morning brief. This is one of the most helpful things a personal AI assistant can do is right when you wake up in the morning, you have a morning brief. And so here's how you want to do it. Here's the prompt I use to set up my morning brief. I want to create a I'll put this down below, too. I want to create a morning brief that you text me every day. So, this is going to be great. It'll text whatever channel you set up. Please let me know any news going on in the world that is relevant to me. That's why you do the brain dump a second ago. The weather in Mountain View or wherever you are and task you can do today that will be helpful. I love this part here because this helps your agent be proactive. Right? One of our problems as humans is it's very hard for us to creatively think of what other people should do. What this helps is let the AI decide what it should be doing to help us. So you want that part in there too. And then I say and tasks I should do that will advance my career. And this is going to give us recommendations for what we can do to improve our life. And we're going to wake up every single day to these recommendations. So put that in. Hit enter on that. If you want a little example about a real life morning brief I get every single morning. My Claudebot actually goes researches competitors on YouTube for me on what they're creating content on. tells me some trending news and stories and gives me ideas for content I can create. So you can get really interesting and creative with this morning brief that and make it really helpful for you when you wake up. So here's another super powerful thing about Cloudbot is it pretty much can do anything a human being can do, right? So if you wanted to monitor your email, you can do that. Now, since this is running in the cloud and not on your local computer, it's going to need connectors and plugins in order to use other tools like looking at your email or looking at Twitter, but you can still do it. And what's great is you can just ask it to do things and your Clawbot will figure out how to do it. So, for instance, if I say, "Please monitor my email for me and send me a summary of my emails at the end of every day." When I hit enter on this, it is going to go through a setup where it'll say, "Okay, let's connect to your Gmail or what email service are you using?" Okay, perfect. You're going to need to give me the API key for this. So, do this step by step. And it will walk you through it. And if at any point you get confused, you can say, "Hey, I don't know what I'm doing here. Can you help me out to figure this out?" Anything you want your Claudebot to do, it doesn't matter if you don't know how to do it, just tell your Claude. If you want it to post for you on LinkedIn every day, you can do that. Just say, "Hey, please post on LinkedIn for me every day." It doesn't matter if you don't know how to set this up to LinkedIn. Just say it anyway. And Claudebot will walk you through setting it up. Not knowing how to do things is not an excuse anymore. If you don't know how to do something, you go to your super intelligence. You say, "I want to do this. Tell me how to do it." And it will walk you through it. So, brain dumping so knows everything about you. Setting up the morning brief, monitoring your emails, those are three solid ones. The last one I'll say is based on what you know about me, what are five workflows and tasks you can do for me every day. These can include connectors or skills we don't have yet. This is a great one because again it uncovers the unknown unknowns you have. Right? The claude will go look at all the memories it has about you, everything you told it, right? This is again the advantage of that brain dump at the beginning and find helpful tasks it can do for you regularly. Once it gives you a list of those tasks, you can even come back in here, choose one of the tasks and say, "Hey, do that task for me every day at a certain time." Right? And then you give it a time. What's really powerful about Claudebot is it can schedule tasks. So if you find a task you wanted to do daily, just say, "Hey, do this task every day at this time. Then text me about it." And it will text you directly on your phone. So, the fourth thing you want to do is you want to interview Claudebot on tasks that will be helpful for you. The downside of this system and using AWS and hosting this on the web is you're going to have to set up connectors for every single thing you do that needs other tools. Right? If you have a Mac Mini, you pay $600. You just set it up on your computer and everything that's on your computer it can use. But you're able to set this up much faster. You don't need to buy another computer and you can save money upfront. dip your toes, see if it's right for you, and then if you want to go and then buy a computer for this, you can do that as well. I dipped my toes. I bought a Mac Mini and I loved it so much I'm buying a Mac Studio now for this. So, this is the quickest, easiest, cheapest way to get Claudebot set up. No matter what kind of device you have, you have the worst computer on planet Earth, this will still work for you. Again, you want to choose the model that works for you. If you already are paying for Claude or Chat GPT, you might as well use that subscription and just plug it in. But if you don't have those yet and you're newer to AI, just sign up for the chat GPT API and choose the cheaper models and you'll be good to go. This AWS instance should only cost you $15$20 a month depending on your usage, much cheaper than $600 upfront. So dip your toe, see how you like it. Interview the Clawbot. That's my biggest recommendation. Interview it. Say, "Hey, what can you do for me?" Schedule those tasks and you will have an AI employee working for you at all times. Leave a like down below if you learned anything at all. Let me know in the comments what you're doing with your Claudebot, what you want to get out of it. Subscribe and turn on notifications. I'm about to make more Clawbot content than you can shake a stick at. I hope this was helpful. I'll see you in the next video.

## Timed Segments

[0:00] bot is the most important technology you
[0:02] should be using in 2026. It&#39;s literally
[0:04] an AI employee that works for you 24/7,
[0:08] 365, and it is changing many people&#39;s
[0:11] lives, including my own. The issue is it
[0:12] is incredibly difficult and expensive to
[0:15] set up if you do not know what you&#39;re
[0:17] doing. In this video, I&#39;ll go through a
[0:19] way of setting up CloudBot that&#39;s so
[0:21] simple and so cheap, it&#39;ll save you a
[0:23] ton of money and time, and anyone will
[0:25] be able to do it. I&#39;ll also go over the
[0:26] first few workflows you should use with
[0:28] Claudebot. Whether you&#39;ve never used
[0:30] Claudebot before or you&#39;re Claudebot
[0:32] pro, you have a ton to learn from this
[0:35] video. Let&#39;s lock in and get into it.
[0:37] So, everyone is going out and buying Mac
[0:39] minis to use for Cloudbot. It&#39;s what I
[0:41] did. I actually just returned my Mac
[0:43] Mini to buy a Mac Studio. But that&#39;s not
[0:45] the only way to run Claudebot. There are
[0:48] significantly cheaper ways, especially
[0:50] if you want to a save money or b just
[0:52] dip your toes and see if Claudebot is
[0:55] for you because this is a brand new
[0:56] radical technology. If you are one of
[0:58] those people where you&#39;re just trying to
[0:59] save time, you don&#39;t want to buy a new
[1:01] computer or you just want to save a
[1:02] little money, this is the right way to
[1:04] do it. We are going to be able to host
[1:05] our Cloudbot on the internet. So, we do
[1:07] not need to buy any hardware. I&#39;m going
[1:09] to put the link down for this below. You
[1:11] can do this alongside with me if you
[1:13] want to, or you can watch this, then go
[1:16] out and do it right after. So, we are
[1:18] going to get Claudebot up and running on
[1:20] Amazon EC2. Amazon EC2 is a virtual
[1:24] server where we&#39;ll be able to install
[1:25] Claudebot, then have it run 247 for us,
[1:28] doing work, being our employee. This
[1:30] might look a little technical, but I
[1:32] promise if you stick with me, I&#39;ll make
[1:33] this as easy as possible for you. Anyone
[1:35] should be able to set this up. So, go to
[1:37] the link I have down below for Amazon
[1:39] EC2. Create an account here. Once you
[1:42] signed in or created your account,
[1:43] search for EC2 at the top, virtual
[1:46] servers in the cloud. We&#39;re going to
[1:47] click on that. We&#39;re going to go down
[1:49] here. We&#39;re going to click launch
[1:50] instance. Once we do that, we&#39;re going
[1:52] to name our server. We can name it
[1:53] Claudebot. Let&#39;s choose Ubuntu for this.
[1:56] This is a Linux server we&#39;ll be
[1:57] creating. So, click on Ubuntu. Next,
[2:00] we&#39;re going to want to choose our tier.
[2:01] So, click the drop down here. Choose
[2:04] Flex Large. If we use little enough
[2:06] memory here, this could end up being
[2:08] free, but if you use this enough, this
[2:09] could go up to 15, 20, $25 a month.
[2:13] Obviously, it&#39;s flexible. So, if you&#39;re
[2:14] just pounding this, it could be more,
[2:16] but this should cost you around $20 a
[2:18] month if you use this a fair amount. So
[2:20] that&#39;s C7i Flex large. Make sure that is
[2:23] selected. And then we are going to click
[2:24] on launch instance. Scroll down a little
[2:27] bit more. We&#39;re going to do 30 gigabytes
[2:29] of storage. This is going to allow us to
[2:31] store a good amount on this server. And
[2:33] then we&#39;re going to go over here and
[2:34] click launch instance. Scrolling down a
[2:36] little bit more. We want to go to key
[2:37] pair. Let&#39;s create a new key pair here.
[2:39] Give your key pair a name. You can name
[2:41] this whatever you want. I named it
[2:43] claudebot key. Make sure RSA is
[2:45] selected. Use PM if you are using Mac or
[2:49] Linux. Use PPK if you&#39;re on Windows. And
[2:52] then you&#39;re going to click create key
[2:53] pair. That is going to download a file.
[2:55] That&#39;s basically your security file. So
[2:57] do not lose that. Keep that safe on your
[2:59] computer. That&#39;s going to basically have
[3:01] your password for connecting to this
[3:02] server. Let&#39;s go down to network
[3:04] settings. You want to make sure create
[3:06] security group is checked here. You want
[3:08] to make sure allow SSH traffic is
[3:10] checked as well. You&#39;re going to want to
[3:11] click edit up here at the top right.
[3:13] From here, you want to scroll down,
[3:14] click add security group RO here. Make
[3:17] sure it is custom TCP. Port range, we&#39;re
[3:20] going to put in 18789 right there.
[3:23] Source type is going to be anywhere.
[3:25] Once you do all of that, you are ready
[3:26] to go. You can click launch instance
[3:28] from here. Boom. It has launched. Just
[3:30] like that, we are good to go. Now, we
[3:32] can install Clawbot on here. From here,
[3:34] we&#39;re going to go to view all instances.
[3:37] There&#39;s our instance. From here, all
[3:38] you&#39;re going to want to do is click on
[3:39] this instance ID. You&#39;re going to want
[3:42] to click on connect right here and then
[3:44] click connect in the bottom right. right
[3:46] here. This is going to open up our
[3:48] console inside Amazon EC2 where we are
[3:51] going to actually deploy CloudBot. From
[3:53] here, we&#39;re going to go to Claudebot
[3:54] docs. We&#39;re going to copy this command
[3:56] right here. We&#39;re going to paste that in
[3:58] right here. And we&#39;re going to hit
[3:59] enter. And it is going to start
[4:01] installing Claudebot on the web. In just
[4:03] a second, you&#39;re going to have a 247
[4:05] employee working for you. This is so
[4:07] sick. And I know those last couple steps
[4:08] might have got a little confusing at
[4:10] times, but I hope I got you through it
[4:12] clearly. If you messed anything up, feel
[4:13] free to go back and watch that step by
[4:15] step again. But this is the simplest way
[4:17] to do it without having to buy a brand
[4:19] new Mac. All right, so that is good to
[4:20] go. Let&#39;s start set up. I&#39;ll walk you
[4:22] through setup here. Then I&#39;ll give you a
[4:23] few awesome workflows we can use here.
[4:26] Got to make sure we understand the risk.
[4:27] We&#39;re going to go with the quick start
[4:28] onboarding mode. Now, we&#39;re going to
[4:30] choose our model off provider. There are
[4:32] a few ways to do this. The point of this
[4:34] video is showing you the absolute
[4:36] cheapest way to use Claudebot. If you&#39;re
[4:38] already paying for either Claude Max or
[4:41] a Chat GBT subscription, the cheapest
[4:44] way to do this will be to use those
[4:46] already existing subscriptions. So, what
[4:48] you would do is you would choose one of
[4:50] those two here and then it will give you
[4:53] the option for OOTH, which will
[4:54] basically give you a command. This
[4:57] command will reveal a key that you&#39;re
[4:58] going to want to put in here. So, take
[5:00] that command and put it into your
[5:02] terminal if you&#39;re doing the OOTH. when
[5:04] you put in your own terminal on your own
[5:05] computer, it will give you that OOTH key
[5:08] that you can put in. Now, let&#39;s say
[5:10] you&#39;re not already on an anthropic or
[5:12] open AI subscription plan. You&#39;re going
[5:15] to need your own subscription plan. You
[5:17] have a few options here. So, the
[5:19] absolute cheapest way to do this will be
[5:21] using a model called Miniax. MiniAX is a
[5:26] cheap AI model. It is very inexpensive
[5:28] to use. It&#39;s actually one that&#39;s
[5:31] recommended by the creator of Claudebot,
[5:33] Peter Steinberger. The issue is it is
[5:36] just not nearly as intelligent or
[5:39] personable as Claude Opus. It is still
[5:42] very intelligent. The personality is
[5:44] kind of meh, but Opus is the greatest AI
[5:47] model created of all time. So, you have
[5:49] that option, right? You can sign up for
[5:51] Claude Max, which is going to cost you
[5:52] $200 a month. You can sign up for chat
[5:55] GPT, which is going to cost you $20 a
[5:57] month and it&#39;s still going to be very
[5:59] intelligent. The personality is just
[6:01] going to stink. But if you want the
[6:02] absolute cheapest way to do this, you
[6:04] want to sign up for Miniax. From a cost
[6:07] to results basis, I actually think going
[6:10] with a chat GPT API is going to be
[6:12] better here. Miniax, from what I&#39;m
[6:13] hearing, is very unreliable. So for
[6:16] reliability and cost, I think the best
[6:17] balance you&#39;re going to get is Chat GPT.
[6:19] If you want the absolute best
[6:21] performance on planet Earth and you&#39;re
[6:22] willing to spend more, you go with
[6:23] Claude Opus. But the point of this video
[6:25] is doing this the cheapest way possible.
[6:27] So, let&#39;s get the chat GPT API key if
[6:29] you haven&#39;t already logged in with chat
[6:32] GPT or anthropic already. So, if you go
[6:33] to platform.opai.com
[6:36] and feel free to skip to the next
[6:37] chapter if you&#39;ve already done this. You
[6:39] can go to dashboard then you can go API
[6:41] keys and then you can create a new key.
[6:43] I name it Claude. I&#39;m going to click
[6:44] create. Then you can come in here and
[6:46] you can say OpenAI. We&#39;re going to do
[6:48] OpenAI API key. From here, we can choose
[6:50] a model. I&#39;m going to go with GPT 5.2. I
[6:54] think that&#39;ll give us the best balance
[6:56] of cost to intelligence. So, I&#39;m going
[6:59] to hit enter on that. Next, you can set
[7:01] up your channel. I use Telegram, but you
[7:03] can use WhatsApp, Discord. You can use
[7:05] any of these you want. I&#39;d probably
[7:07] recommend WhatsApp or Telegram. Those
[7:09] are two are probably the easiest to set
[7:10] up out of this, but this is where you&#39;re
[7:12] going to be interfacing with your bot.
[7:14] So, feel free to choose one of those.
[7:16] This will allow you to text message your
[7:18] 247 agent anytime you want. You can
[7:20] configure the skills if you want. I&#39;m
[7:22] not going to configure them right now.
[7:24] As for hooks, I&#39;m going to skip that as
[7:26] well for now. And you are good to go.
[7:28] Let us hatch our friend. So, I&#39;m going
[7:31] to hatch in the TUI, which is your
[7:32] terminal user interface here. Also, by
[7:34] the way, side note, make sure you have
[7:36] your credit card into the chat GBT API
[7:39] section just so it can charge you as you
[7:40] use tokens if you haven&#39;t done that
[7:42] already. All right, so here&#39;s the
[7:43] onboarding. I&#39;m here. It looks like this
[7:45] is my first moment online in this
[7:47] workspace. So, we should do a quick who
[7:48] are we setup. What should you call me?
[7:51] So, now you can name your Clawbot. I&#39;m
[7:52] going to name ours Jones for this
[7:54] example. Two, what kind of thing am I to
[7:57] you? I&#39;d make it an assistant, but you
[7:59] can make the role whatever you want. I
[8:00] think I made mine chief of staff for
[8:02] Henry, my Claudebot. Three, what&#39;s the
[8:04] vibe you want? Very blunt, efficient,
[8:06] warm, chatty. Somewhere in between.
[8:08] Somewhere in between. I think it&#39;s good
[8:10] to have a balance. It feels human but
[8:12] still gets straight to the point. And
[8:14] number four, signature emoji, yes or no.
[8:16] If yes, which one? Lion emoji. So,
[8:20] choose an animal for yours. I chose an
[8:21] owl for Henry, my personal Clawbot, but
[8:24] you can choose any you want. I&#39;m going
[8:25] to hit enter. Once this is good to go,
[8:27] by the way, I&#39;m going to show you a few
[8:28] workflows that would be super helpful to
[8:29] set up with your Clawbot. One more
[8:31] thing, so I can be useful without
[8:33] guessing, what&#39;s your name and time
[8:34] zone. I&#39;m Alex and I&#39;m in PST. Hit enter
[8:38] on that and you are good to go. All
[8:39] right, so we&#39;re locked in. You&#39;re good
[8:41] to go. The entire world is ahead of you.
[8:43] You got 247 AI employee. Let&#39;s go
[8:46] through a few use cases I think everyone
[8:48] should do when they set up their
[8:49] Claudebot. The first thing I think
[8:52] everyone should do when they first set
[8:54] up their Claudebot is do a massive brain
[8:56] dump on who you are. What&#39;s so powerful
[8:59] about Claudebot is it&#39;s self-improving
[9:02] and has an incredible memory system. So
[9:04] everything you tell it, it will
[9:06] remember. So, I like to start this off
[9:09] and tell as much about myself as I
[9:11] possibly can. So, do yourself a favor,
[9:13] go in right now, brain dump as much
[9:15] about you, your business, your family,
[9:18] relationships, everything you can, put
[9:21] it in there, and Claudebot will remember
[9:24] that about you. So, when it does task
[9:26] for you moving forward, it will have
[9:28] relevant context. Again, one of the
[9:30] biggest strengths about Clawbot that
[9:31] makes it amazing is it&#39;s constantly
[9:33] learning, constantly improving.
[9:35] Everything you say, it takes out the
[9:37] details and remembers it for you. So
[9:39] brain dump in here. Tell it about what
[9:41] you like, what you enjoy, your hobbies,
[9:42] what you do for work, how you want to
[9:44] make money, your dreams, aspirations.
[9:46] Put that all in here. The more the
[9:48] better. The next thing you should do
[9:50] with it is have it set up a morning
[9:52] brief. This is one of the most helpful
[9:53] things a personal AI assistant can do is
[9:56] right when you wake up in the morning,
[9:57] you have a morning brief. And so here&#39;s
[9:59] how you want to do it. Here&#39;s the prompt
[10:01] I use to set up my morning brief. I want
[10:03] to create a I&#39;ll put this down below,
[10:04] too. I want to create a morning brief
[10:06] that you text me every day. So, this is
[10:08] going to be great. It&#39;ll text whatever
[10:09] channel you set up. Please let me know
[10:11] any news going on in the world that is
[10:12] relevant to me. That&#39;s why you do the
[10:14] brain dump a second ago. The weather in
[10:16] Mountain View or wherever you are and
[10:19] task you can do today that will be
[10:21] helpful. I love this part here because
[10:23] this helps your agent be proactive.
[10:26] Right? One of our problems as humans is
[10:28] it&#39;s very hard for us to creatively
[10:30] think of what other people should do.
[10:32] What this helps is let the AI decide
[10:34] what it should be doing to help us. So
[10:36] you want that part in there too. And
[10:38] then I say and tasks I should do that
[10:40] will advance my career. And this is
[10:41] going to give us recommendations for
[10:43] what we can do to improve our life. And
[10:45] we&#39;re going to wake up every single day
[10:47] to these recommendations. So put that
[10:49] in. Hit enter on that. If you want a
[10:51] little example about a real life morning
[10:53] brief I get every single morning. My
[10:55] Claudebot actually goes researches
[10:57] competitors on YouTube for me on what
[10:59] they&#39;re creating content on. tells me
[11:01] some trending news and stories and gives
[11:03] me ideas for content I can create. So
[11:06] you can get really interesting and
[11:07] creative with this morning brief that
[11:10] and make it really helpful for you when
[11:11] you wake up. So here&#39;s another super
[11:13] powerful thing about Cloudbot is it
[11:15] pretty much can do anything a human
[11:16] being can do, right? So if you wanted to
[11:18] monitor your email, you can do that.
[11:21] Now, since this is running in the cloud
[11:23] and not on your local computer, it&#39;s
[11:25] going to need connectors and plugins in
[11:28] order to use other tools like looking at
[11:31] your email or looking at Twitter, but
[11:33] you can still do it. And what&#39;s great is
[11:34] you can just ask it to do things and
[11:37] your Clawbot will figure out how to do
[11:39] it. So, for instance, if I say, &quot;Please
[11:41] monitor my email for me and send me a
[11:43] summary of my emails at the end of every
[11:45] day.&quot; When I hit enter on this, it is
[11:47] going to go through a setup where it&#39;ll
[11:49] say, &quot;Okay, let&#39;s connect to your Gmail
[11:51] or what email service are you using?&quot;
[11:54] Okay, perfect. You&#39;re going to need to
[11:55] give me the API key for this. So, do
[11:57] this step by step. And it will walk you
[11:59] through it. And if at any point you get
[12:01] confused, you can say, &quot;Hey, I don&#39;t
[12:03] know what I&#39;m doing here. Can you help
[12:04] me out to figure this out?&quot; Anything you
[12:06] want your Claudebot to do, it doesn&#39;t
[12:08] matter if you don&#39;t know how to do it,
[12:10] just tell your Claude. If you want it to
[12:12] post for you on LinkedIn every day, you
[12:14] can do that. Just say, &quot;Hey, please post
[12:16] on LinkedIn for me every day.&quot; It
[12:18] doesn&#39;t matter if you don&#39;t know how to
[12:19] set this up to LinkedIn. Just say it
[12:21] anyway. And Claudebot will walk you
[12:23] through setting it up. Not knowing how
[12:25] to do things is not an excuse anymore.
[12:27] If you don&#39;t know how to do something,
[12:29] you go to your super intelligence. You
[12:31] say, &quot;I want to do this. Tell me how to
[12:33] do it.&quot; And it will walk you through it.
[12:35] So, brain dumping so knows everything
[12:37] about you. Setting up the morning brief,
[12:39] monitoring your emails, those are three
[12:41] solid ones. The last one I&#39;ll say is
[12:44] based on what you know about me, what
[12:46] are five workflows and tasks you can do
[12:48] for me every day. These can include
[12:50] connectors or skills we don&#39;t have yet.
[12:52] This is a great one because again it
[12:54] uncovers the unknown unknowns you have.
[12:56] Right? The claude will go look at all
[12:59] the memories it has about you,
[13:00] everything you told it, right? This is
[13:02] again the advantage of that brain dump
[13:03] at the beginning and find helpful tasks
[13:06] it can do for you regularly. Once it
[13:08] gives you a list of those tasks, you can
[13:10] even come back in here, choose one of
[13:12] the tasks and say, &quot;Hey, do that task
[13:16] for me every day at a certain time.&quot;
[13:19] Right? And then you give it a time.
[13:21] What&#39;s really powerful about Claudebot
[13:23] is it can schedule tasks. So if you find
[13:25] a task you wanted to do daily, just say,
[13:27] &quot;Hey, do this task every day at this
[13:29] time. Then text me about it.&quot; And it
[13:31] will text you directly on your phone.
[13:33] So, the fourth thing you want to do is
[13:34] you want to interview Claudebot on tasks
[13:36] that will be helpful for you. The
[13:38] downside of this system and using AWS
[13:41] and hosting this on the web is you&#39;re
[13:43] going to have to set up connectors for
[13:45] every single thing you do that needs
[13:47] other tools. Right? If you have a Mac
[13:49] Mini, you pay $600. You just set it up
[13:51] on your computer and everything that&#39;s
[13:52] on your computer it can use. But you&#39;re
[13:54] able to set this up much faster. You
[13:56] don&#39;t need to buy another computer and
[13:58] you can save money upfront. dip your
[14:00] toes, see if it&#39;s right for you, and
[14:01] then if you want to go and then buy a
[14:03] computer for this, you can do that as
[14:04] well. I dipped my toes. I bought a Mac
[14:06] Mini and I loved it so much I&#39;m buying a
[14:08] Mac Studio now for this. So, this is the
[14:10] quickest, easiest, cheapest way to get
[14:12] Claudebot set up. No matter what kind of
[14:14] device you have, you have the worst
[14:15] computer on planet Earth, this will
[14:16] still work for you. Again, you want to
[14:18] choose the model that works for you. If
[14:20] you already are paying for Claude or
[14:22] Chat GPT, you might as well use that
[14:24] subscription and just plug it in. But if
[14:26] you don&#39;t have those yet and you&#39;re
[14:27] newer to AI, just sign up for the chat
[14:29] GPT API and choose the cheaper models
[14:31] and you&#39;ll be good to go. This AWS
[14:33] instance should only cost you $15$20 a
[14:36] month depending on your usage, much
[14:38] cheaper than $600 upfront. So dip your
[14:41] toe, see how you like it. Interview the
[14:44] Clawbot. That&#39;s my biggest
[14:45] recommendation. Interview it. Say, &quot;Hey,
[14:47] what can you do for me?&quot; Schedule those
[14:49] tasks and you will have an AI employee
[14:51] working for you at all times. Leave a
[14:53] like down below if you learned anything
[14:54] at all. Let me know in the comments what
[14:56] you&#39;re doing with your Claudebot, what
[14:57] you want to get out of it. Subscribe and
[14:59] turn on notifications. I&#39;m about to make
[15:01] more Clawbot content than you can shake
[15:03] a stick at. I hope this was helpful.
[15:05] I&#39;ll see you in the next video.
