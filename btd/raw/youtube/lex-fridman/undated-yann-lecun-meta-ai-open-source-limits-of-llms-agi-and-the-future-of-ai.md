---
title: "Yann LeCun - Meta AI Open Source Limits of LLMs AGI and the Future of AI"
creator: lex-fridman
platform: youtube
url: https://www.youtube.com/watch?v=5t1vTLU7s40
---

# Yann LeCun - Meta AI Open Source Limits of LLMs AGI and the Future of AI

[0:00] I see the danger of this concentration
[0:00] of power to to proprietary AI systems as
[0:00] a much bigger danger than everything
[0:00] else what works against this is people
[0:00] who think that for reasons of security
[0:00] we should keep AI systems under lock and
[0:00] key because it&#39;s too dangerous to put it
[0:00] in the hands of of everybody that would
[0:00] lead to a very bad future in which all
[0:00] of our information diet is controlled by
[0:00] a small number of uh uh companies
[0:00] through proprietary systems I believe
[0:00] that people are fundamentally good and
[0:00] so if
[0:00] AI especially open source AI can um make
[0:00] them smarter it just empowers the
[0:00] goodness in humans so I I share that
[0:00] feeling okay I think people are Fally
[0:00] good uh and in fact a lot of doomers are
[0:00] doomers because they don&#39;t think that
[0:00] people are fundamentally
[0:00] good the following is a conversation
[0:00] with Yan laon his third time on this
[0:00] podcast he is the chief AI scientist at
[0:00] meta professor at NYU touring Award
[0:00] winner and one of the seminal figures in
[0:00] the history of artificial intelligence
[0:00] he and meta AI have been big proponents
[0:00] of open sourcing AI development and have
[0:00] been walking the walk by open sourcing
[0:00] many of their biggest models including
[0:00] llama 2 and eventually llama 3 also Yan
[0:00] has been an outspoken critic of those
[0:00] people in the AI Community who warn
[0:00] about the looming danger and existential
[0:00] threat of AGI he believes the AGI will
[0:00] be created one day but it will be good
[0:00] it will not Escape human control nor
[0:00] will it Dominate and kill all humans at
[0:00] this moment of Rapid AI development this
[0:00] happens to be somewhat a controversial
[0:00] position and so it&#39;s been fun seeing Yan
[0:00] get into a lot of intense and
[0:00] fascinating discussions
[0:00] online as we do in this very
[0:00] conversation this is the lexman podcast
[0:00] to support it please check out our
[0:00] sponsors in the description and now dear
[0:00] friends here&#39;s Yan
[0:00] laon you&#39;ve had some strong
[0:00] statements technical statements about
[0:00] the future of artificial intelligence
[0:00] recently throughout your career actually
[0:00] but recently as well uh you&#39;ve said that
[0:00] autoaggressive llms are uh not the way
[0:00] we&#39;re going to make progress towards
[0:00] superhuman intelligence these are the
[0:00] large language models like GPT 4 like
[0:00] llama 2 and 3 soon and so on how do they
[0:00] work and why are they not going to take
[0:00] us all the way for a number of reasons
[0:00] the first is that there is a number of
[0:00] characteristics of intelligent
[0:00] behavior for example the capacity to
[0:00] understand the world understand the
[0:00] physical world
[0:00] the ability to remember and retrieve
[0:00] things um persistent memory the ability
[0:00] to reason and the ability to plan those
[0:00] are four essential characteristic of
[0:00] intelligent um systems or entities
[0:00] humans
[0:00] animals lnms can do none of those or
[0:00] they can only do them in a very
[0:00] primitive way and uh they don&#39;t really
[0:00] understand the physical world don&#39;t
[0:00] really have persistent memory they can&#39;t
[0:00] really reason and they certainly can&#39;t
[0:00] plan and so you know if if if you expect
[0:00] the system to become intelligent just
[0:00] you know without having the possibility
[0:00] of doing those things you&#39;re making a
[0:00] mistake that is not to say that auto
[0:00] regressive LS are not useful they&#39;re
[0:00] certainly
[0:00] useful um that they&#39;re not interesting
[0:00] that we can&#39;t build a whole ecosystem of
[0:00] applications around them of course we
[0:00] can but as a path towards human level
[0:00] intelligence they&#39;re missing essential
[0:00] components and then there is another
[0:00] tidbit or or fact that I think is very
[0:00] interesting those llms are trained on
[0:00] enormous amounts of text basically the
[0:00] entirety of all publicly available text
[0:00] on the internet right that&#39;s
[0:00] typically on the order of 10 to the 13
[0:00] tokens each token is typically two byes
[0:00] so that&#39;s two 10 to the 13 bytes as
[0:00] training data it would take you or me
[0:00] 170,000 years to just read through this
[0:00] at eight hours a day uh so it seems like
[0:00] an enormous amount of knowledge right
[0:00] that those systems can
[0:00] accumulate
[0:00] um but then you realize it&#39;s really not
[0:00] that much data if you you talk to
[0:00] developmental psychologist and they tell
[0:00] you a four-year-old has been awake for
[0:00] 16,000 hours in his
[0:00] life um
[0:00] and the amount of information that has
[0:00] uh reached the visual cortex of that
[0:00] child in four
[0:00] years um is about 10 to the 15 bytes and
[0:00] you can compute this by estimating that
[0:00] the optical nerve carry about 20 megab
[0:00] megabytes per second roughly and so 10^
[0:00] the 15 bytes for a four-year-old versus
[0:00] 2 * 10 to 13 bytes for 170,000 years
[0:00] worth of reading what it tells you is
[0:00] that uh through sensory input we see a
[0:00] lot more information than we than we do
[0:00] through
[0:00] language and that despite our
[0:00] intuition most of what we learn and most
[0:00] of our knowledge is through our
[0:00] observation and interaction with the
[0:00] real world not through language
[0:00] everything that we learn in the first
[0:00] few years of life and uh certainly
[0:00] everything that animals learn has
[0:00] nothing to do with language so it would
[0:00] be good to uh maybe push against some of
[0:00] of the intuition behind what you&#39;re
[0:00] saying
[0:00] so it is true there&#39;s several orders of
[0:00] magnitude more data coming into the
[0:00] human
[0:00] mind much faster and the human mind is
[0:00] able to learn very quickly from that
[0:00] filter the data very quickly you know
[0:00] somebody might argue your comparison
[0:00] between sensory data versus language
[0:00] that language is already very compressed
[0:00] it already contains a lot more
[0:00] information than the bytes it takes to
[0:00] store them if you compare it to visual
[0:00] data so there&#39;s a lot of wisdom and
[0:00] language there&#39;s words and the way we
[0:00] stitch them together it already contains
[0:00] a lot of information so is it possible
[0:00] that language alone already has
[0:00] enough wisdom and knowledge in there to
[0:00] be able to from that language construct
[0:00] a a world model and understanding of the
[0:00] world an understanding of the physical
[0:00] world that you&#39;re saying L LMS lack so
[0:00] it&#39;s a big debate among uh philosophers
[0:00] and also cognitive scientists like
[0:00] whether intelligence needs to be
[0:00] grounded in
[0:00] reality uh I&#39;m clearly in the camp that
[0:00] uh yes uh intelligence cannot appear
[0:00] without some grounding in uh some
[0:00] reality doesn&#39;t need to be you know
[0:00] physical reality could be simulated but
[0:00] um but the environment is just much
[0:00] richer than what you can express in
[0:00] language language is a very approximate
[0:00] representation of our percepts and our
[0:00] mental models right I mean there there&#39;s
[0:00] a lot of tasks that we accomplish where
[0:00] we manipulate uh a mental model of uh of
[0:00] the situation at hand and that has
[0:00] nothing to do with language everything
[0:00] that&#39;s physical mechanical whatever when
[0:00] we build something when we accomplish a
[0:00] task model task of you know grabbing
[0:00] something Etc we plan or action
[0:00] sequences and we do this by essentially
[0:00] Imagining the result of the outcome of
[0:00] sequence of actions so we might
[0:00] imagine and that requires mental models
[0:00] that don&#39;t have much to do with language
[0:00] and that&#39;s I would argue most of our
[0:00] knowledge is derived from that
[0:00] interaction with the physical world so a
[0:00] lot of a lot of my my colleagues who are
[0:00] more uh interested in things like
[0:00] computer vision are really on that camp
[0:00] that uh AI needs to be embodied
[0:00] essentially and then other people coming
[0:00] from the NLP side or maybe you know some
[0:00] some other uh motivation don&#39;t
[0:00] necessarily agree with that um and
[0:00] philosophers are split as well uh and
[0:00] the U the complexity of the world is
[0:00] hard to um hard to imagine it you know
[0:00] it&#39;s hard to represent uh all the
[0:00] complexities that we take completely for
[0:00] granted in the real world that we don&#39;t
[0:00] even imagine require intelligence right
[0:00] this is the old marac Paradox from the
[0:00] pioneer of Robotics and SMC we said you
[0:00] know how is it that with computers it
[0:00] seems to be easy to do high Lev complex
[0:00] tasks like playing chess and solving
[0:00] integrals and doing things like that
[0:00] whereas the thing we take for granted
[0:00] that we do every day um like I don&#39;t
[0:00] know learning to drive a car or you know
[0:00] grabbing an object we can do as
[0:00] computers um
[0:00] and you know we have llms that can pass
[0:00] pass the bar exam so they must be smart
[0:00] but then they can&#39;t learn to drive in 20
[0:00] hours like any 17y old they can&#39;t learn
[0:00] to clear out the dinner table and F of
[0:00] the dishwasher like any 10-year-old can
[0:00] learn in one shot um why is that like
[0:00] you know what what are we missing what
[0:00] what type of learning or or reasoning
[0:00] architecture or whatever are we missing
[0:00] that um um basically prevent us from
[0:00] from you know having level five sing
[0:00] Cars and domestic robots can a large
[0:00] language model construct a world model
[0:00] that does know how to drive and does
[0:00] know how to fill a dishwasher but just
[0:00] doesn&#39;t know how to deal with visual
[0:00] data at this time so it it can operate
[0:00] in space of Concepts so yeah that&#39;s what
[0:00] a lot of people are working on so the
[0:00] answer the short answer is no and the
[0:00] more complex sensor is you can use all
[0:00] kind of tricks to get uh uh an llm to
[0:00] basically digest U visual
[0:00] representations of representations of
[0:00] images uh or video or audio for that
[0:00] matter um and uh a classical way of
[0:00] doing this is uh you train a vision
[0:00] system in some way and we have a number
[0:00] of ways to train Vision systems either
[0:00] supervised semisupervised self superise
[0:00] all kinds of different ways uh that will
[0:00] turn any image into
[0:00] high level
[0:00] representation basically a list of
[0:00] tokens that are really similar to the
[0:00] kind of tokens that
[0:00] uh typical llm takes as an input and
[0:00] then you just feed that to the llm in
[0:00] addition to the text and you just expect
[0:00] LM to kind of uh you know during
[0:00] training to kind of be able to uh use
[0:00] those representations to help make
[0:00] decisions I mean there been work along
[0:00] those line for for quite a long time um
[0:00] and now you see those systems right I
[0:00] mean there are llms that can that have
[0:00] some Vision extension but they&#39;re
[0:00] basically hacks in the sense that um
[0:00] those things are not like trained end to
[0:00] end to to handle to really understand
[0:00] the world they&#39;re not trained with video
[0:00] for example uh they don&#39;t really
[0:00] understand intuitive physics at least
[0:00] not at the moment so you don&#39;t think
[0:00] there&#39;s something special to about
[0:00] intuitive physics about sort of Common
[0:00] Sense reasoning about the physical space
[0:00] about physical reality that&#39;s that to
[0:00] you is a giant leap that llms are just
[0:00] not able to do we&#39;re not going to be
[0:00] able to do this with the type of llms
[0:00] that we are uh working with today and
[0:00] there&#39;s a number of reasons for this but
[0:00] uh the main reason
[0:00] is the way llm LMS are trained is that
[0:00] you you take a piece of text you remove
[0:00] some of the words in that text you Mass
[0:00] them you replace by replace them by
[0:00] blank markers and you train a gtic
[0:00] neural net to predict the words that are
[0:00] missing uh and if you build this neural
[0:00] net in a particular way so that it can
[0:00] only look at u words that are to the
[0:00] left of the one is trying to predict
[0:00] then what you have is a system that
[0:00] basically is trying to predict the next
[0:00] word in a text right so then you can
[0:00] feed it um a text a prompt and you can
[0:00] ask it to predict the next word it can
[0:00] never predict the next word exactly and
[0:00] so what it&#39;s going to do is uh produce a
[0:00] probability distribution over all the
[0:00] possible words in your dictionary in
[0:00] fact it doesn&#39;t predict words it
[0:00] predicts tokens that are kind of subword
[0:00] units and so it&#39;s easy to handle the
[0:00] uncertainty in the prediction there
[0:00] because there&#39;s only a finite number of
[0:00] possible words in the dictionary and you
[0:00] can just compute a distribution over
[0:00] them um then what you what the system
[0:00] does is that it it picks a word from
[0:00] that distribution of course there&#39;s a
[0:00] higher chance of picking words that have
[0:00] a higher probability within that
[0:00] distribution so you sample from that
[0:00] distribution to actually produce a word
[0:00] and then you shift that word into the
[0:00] input and so that allows the system not
[0:00] to predict the second word right and
[0:00] once you do this you shift it into the
[0:00] input Etc that&#39;s called Auto regressive
[0:00] prediction and which is why those llms
[0:00] should be called Auto regressive llms uh
[0:00] but we just call them
[0:00] LMS
[0:00] and there is a difference between this
[0:00] kind of process and a process by which
[0:00] before producing a word when you talk
[0:00] when you and I talk you and I are
[0:00] bilinguals M we think think about what
[0:00] we&#39;re going to say and it&#39;s relatively
[0:00] independent of the language in which
[0:00] we&#39;re going to say when we when we talk
[0:00] about like uh I don&#39;t know let&#39;s say a
[0:00] mathematical concept or something the
[0:00] kind of thinking that we&#39;re doing and
[0:00] the answer that we&#39;re planning to
[0:00] produce is not linked to whether we&#39;re
[0:00] going to see it in French or Russian or
[0:00] English chsky just rolled his eyes but I
[0:00] understand so you&#39;re saying that there&#39;s
[0:00] a a bigger abstraction that repes that&#39;s
[0:00] uh that goes before language yeah maps
[0:00] onto language right it&#39;s certainly true
[0:00] for a lot of thinking that we that we do
[0:00] is that obvious that we don&#39;t like
[0:00] you&#39;re saying your thinking is same in
[0:00] French as it is in English yeah pretty
[0:00] much yeah pretty much or is this like
[0:00] how how flexible are you like if if
[0:00] there&#39;s a probability
[0:00] distribution well it it depends what
[0:00] kind of thinking right if it&#39;s just uh
[0:00] if it&#39;s like producing puns I get much
[0:00] better in French than English about that
[0:00] no but so worse is an abstract
[0:00] representation of puns like is your
[0:00] humor an abstract like when you tweet
[0:00] and your tweets are sometimes a little
[0:00] bit spicy uh what&#39;s is there an abstract
[0:00] representation in your brain of a tweet
[0:00] before it maps onto English there is an
[0:00] abstract representation of uh Imagining
[0:00] the reaction of a reader to that uh text
[0:00] or you start with laughter and then
[0:00] figure out how to make that happen or
[0:00] figure out like a reaction you want to
[0:00] cause and and then figure out how to say
[0:00] it right so that it causes that reaction
[0:00] but that&#39;s like really close to language
[0:00] but think about like a math mathematical
[0:00] concept or um you know imagining you
[0:00] know something you want to build out of
[0:00] wood or something like this right the
[0:00] kind of thinking you&#39;re doing has
[0:00] absolutely nothing to do with language
[0:00] really like it&#39;s not like you have
[0:00] necessarily like an internal monologue
[0:00] in any particular language you&#39;re you&#39;re
[0:00] you know imagining mental models of of
[0:00] the thing right I mean if I if I ask you
[0:00] to like imagine what this uh water
[0:00] bottle will look like if I rotate it 90
[0:00] degrees
[0:00] um that has nothing to do with
[0:00] language and so uh so clearly there is
[0:00] you know a more abstract level of
[0:00] representation uh in which we we do most
[0:00] of our thinking and we plan what we&#39;re
[0:00] going to say if the output is
[0:00] is you know uttered words as opposed to
[0:00] an output being uh you know muscle
[0:00] actions right um we we plan our answer
[0:00] before we produce it and LMS don&#39;t do
[0:00] that they just produce one word after
[0:00] the other instinctively if you want it&#39;s
[0:00] like it&#39;s a bit like the you know
[0:00] subconscious uh actions where you don&#39;t
[0:01] like you&#39;re distracted you&#39;re doing
[0:01] something you&#39;re completely concentrated
[0:01] and someone comes to you and you know
[0:01] asks you a question and you kind of
[0:01] answer the question you don&#39;t have time
[0:01] to think about the answer but the answer
[0:01] is easy so you don&#39;t need to pay
[0:01] attention you sort of respond
[0:01] automatically that&#39;s kind of what an llm
[0:01] does right it doesn&#39;t think about it
[0:01] sensor really uh it retrieves it because
[0:01] it&#39;s accumulated a lot of knowledge so
[0:01] it can retrieve some some things but
[0:01] it&#39;s going
[0:01] to just spit out one token after the
[0:01] other without planning the answer but
[0:01] you&#39;re making it sound just one token
[0:01] after the other one token at a time
[0:01] generation is uh bound to be
[0:01] simplistic but if the world model is
[0:01] sufficiently sophisticated that one
[0:01] token at a
[0:01] time the the most likely thing it
[0:01] generates is a sequence of tokens is
[0:01] going to be a deeply profound thing okay
[0:01] but then that assumes that those systems
[0:01] actually possess an internal World model
[0:01] so it really goes to the I I think the
[0:01] fundamental question is can you build a
[0:01] a
[0:01] really complete World model not complete
[0:01] but a uh one that has a deep
[0:01] understanding of the world yeah so can
[0:01] you build this first of all by
[0:01] prediction right and the answer is
[0:01] probably yes can you predict can you
[0:01] build it by predicting words and the
[0:01] answer is most probably no because
[0:01] language is very poor in terms or weak
[0:01] or low bandwidth if you want there&#39;s
[0:01] just not enough information there so
[0:01] building World models means observing
[0:01] the
[0:01] world and uh
[0:01] understanding why the world is evolving
[0:01] the way the way it is and then uh the
[0:01] the extra component of a world model is
[0:01] something that can predict how the world
[0:01] is going to evolve as a consequence of
[0:01] an action you might take right so what
[0:01] model really is here is my idea of the
[0:01] state of the world at time te here is an
[0:01] action I might take what is the
[0:01] predicted state of the world at Mt plus1
[0:01] now that state of the world doesn&#39;t does
[0:01] not need to represent everything about
[0:01] the world it just needs to represent
[0:01] enough that&#39;s relevant for this planning
[0:01] of of the action but not necessarily all
[0:01] the details now here is the problem um
[0:01] you&#39;re not going to be able to do this
[0:01] with generative models so genery model
[0:01] has trained on video and we&#39;ve tried to
[0:01] do this for 10 years you take a video
[0:01] show a system a piece of video and then
[0:01] ask you to predict the reminder of the
[0:01] video basically predict what&#39;s going to
[0:01] happen one frame at a time do the same
[0:01] thing as sort of the autoaggressive llms
[0:01] do but for video right either one FR at
[0:01] a time or a group of friends at a time
[0:01] um but yeah uh a large video model if
[0:01] you
[0:01] want uh the idea of of doing this has
[0:01] been floating around for a long time and
[0:01] at at Fair uh some colleagues and I have
[0:01] been trying to do this for about 10
[0:01] years um and you can&#39;t you can&#39;t really
[0:01] do the same trick as with LM because uh
[0:01] you know llms as I said you can&#39;t
[0:01] predict exactly which word is going to
[0:01] follow a sequence of words we can
[0:01] predict the distribution over words now
[0:01] if you go to video what you would have
[0:01] to do is predict the distribution over
[0:01] all possible frames in a video and we
[0:01] don&#39;t really know how to do that
[0:01] properly uh we we do not know how to
[0:01] represent distributions over High
[0:01] dimensional continuous spaces in ways
[0:01] that are
[0:01] useful uh and and that&#39;s that there lies
[0:01] the main issue and the reason we can do
[0:01] this is because the world is incredibly
[0:01] more complicated and richer in terms of
[0:01] information than than text text is
[0:01] discret video is high dimensional and
[0:01] continuous a lot of details in this um
[0:01] so if I take a a video of this room uh
[0:01] and the video is you know a camera
[0:01] panning around MH um there is no way I
[0:01] can predict everything that&#39;s going to
[0:01] be in the room as I pan around the
[0:01] system cannot predict what&#39;s going to be
[0:01] in the room as the camera is panning
[0:01] maybe it&#39;s going to predict this is this
[0:01] is a room where there&#39;s a light and
[0:01] there is a wall and things like that it
[0:01] can&#39;t predict what the painting on the
[0:01] wall looks like or what the texture of
[0:01] the couch looks like certainly not the
[0:01] texture of the carpet so there&#39;s no way
[0:01] I can predict all those details so the
[0:01] the way to handle this is one way
[0:01] possibly to handle this which we&#39;ve been
[0:01] working for a long time is to have a
[0:01] model that has
[0:01] what&#39;s called a latent variable and the
[0:01] latent variable is fed to an Nal net and
[0:01] it&#39;s supposed to represent all the
[0:01] information about the world that you
[0:01] don&#39;t perceive yet and uh that you need
[0:01] to
[0:01] augment uh the the system for the
[0:01] prediction to do a good job at
[0:01] predicting pixels including the you know
[0:01] fine texture of the of the carpet and
[0:01] the on a couch and and the painting on
[0:01] the wall
[0:01] um uh that has been a complete failure
[0:01] essentially and we&#39;ve tried lots of
[0:01] things we tried uh just straight neural
[0:01] Nets we tried Gans we tried uh you know
[0:01] Vees all kinds of regularized Auto
[0:01] encoders we tried um many things we also
[0:01] tried those kind of methods to learn uh
[0:01] good representations of images or video
[0:01] um that could then be used as input to
[0:01] for example an image classification
[0:01] system mhm and that also was basically
[0:01] failed like all the systems that attempt
[0:01] to predict missing parts of an image or
[0:01] video um you know from a corrupted
[0:01] version of it basically so right take an
[0:01] image or a video corrupt it or transform
[0:01] it in some way and then try to
[0:01] reconstruct the complete video or image
[0:01] from the corrupted
[0:01] version and then hope that internally
[0:01] the system will develop a good
[0:01] representations of images that you can
[0:01] use for object recognition segmentation
[0:01] whatever it is
[0:01] is that has been essentially a complete
[0:01] failure and it works really well for
[0:01] text that&#39;s the principle that is used
[0:01] for LMS right so where is the failure
[0:01] exactly is that that it&#39;s very difficult
[0:01] to form a good representation of an
[0:01] image a good in like a good embedding of
[0:01] all all the important information in the
[0:01] image is it in terms of the consistency
[0:01] of image to image to image the image
[0:01] that forms the video like where what are
[0:01] the if we do a highlight reel of all the
[0:01] ways you failed what what&#39;s that look
[0:01] like okay so the reason this doesn&#39;t
[0:01] work uh is first of all I have to tell
[0:01] you exactly what doesn&#39;t work because
[0:01] there is something else that does work
[0:01] uh so the thing that does not work is
[0:01] training a system to learn
[0:01] representations of images by training it
[0:01] to
[0:01] reconstruct uh a good image from a
[0:01] corrupted version of it okay that&#39;s what
[0:01] doesn&#39;t work and we have a whole slew of
[0:01] technique for this uh that are you know
[0:01] variant of ding Auto encoders something
[0:01] called Mee developed by some of my
[0:01] colleagues at Fair Max Doo encoder so
[0:01] it&#39;s basically like
[0:01] the you know llms or or or or things
[0:01] like this where you train the system by
[0:01] corrupting text except you corrupt
[0:01] images you remove Patches from it and
[0:01] you train a gigantic neet to reconstruct
[0:01] the features you get are not good and
[0:01] you know they&#39;re not good because if you
[0:01] now train the same architecture but you
[0:01] train it supervised mhm with with uh
[0:01] label data with Tex textual descriptions
[0:01] of images Etc you do get good
[0:01] representations and the performance on
[0:01] recognition tasks is much better than if
[0:01] you do this self-supervised free trining
[0:01] so the architecture is good the
[0:01] architecture is good the architecture of
[0:01] the encoder is good okay but the fact
[0:01] that you train the system to reconstruct
[0:01] images does not lead it to produce to
[0:01] learn good generic features of images
[0:01] when you train in a self-supervised way
[0:01] self-supervised by reconstruction Yeah
[0:01] by reconstruction okay so what&#39;s the
[0:01] alternative the alternative is joint
[0:01] embedding what is joint embedding what
[0:01] are what are these architectures that
[0:01] you&#39;re so excited about okay so now
[0:01] instead of training a system to encode
[0:01] the image and then training it to
[0:01] reconstruct the the full image from a
[0:01] corrupted version you take the full
[0:01] image you take
[0:01] the corrupted or transformed version you
[0:01] run them both through encoders mhm which
[0:01] in general are identical but not
[0:01] necessarily and then you you
[0:01] train a predictor on top of those uh
[0:01] encoders um to predict the
[0:01] representation of the full input from
[0:01] the representation of the corrupted
[0:01] one okay so joint embedding because
[0:01] you&#39;re you&#39;re taking the the full input
[0:01] and the corrupted version or transform
[0:01] version run them both through encoders
[0:01] so you get a joint embedding and then
[0:01] you and then you&#39;re you&#39;re saying can I
[0:01] predict the representation of the full
[0:01] one from the representation of the
[0:01] corrupted one okay um and I call this a
[0:01] JEA so that means joint embedding
[0:01] predictive architecture because it&#39;s
[0:01] joint embedding and there is this
[0:01] predictor that predicts the
[0:01] representation of the good guy from from
[0:01] the bad
[0:01] guy um and the big question is how do
[0:01] you train something like this uh and
[0:01] until five years ago or six years ago we
[0:01] didn&#39;t have particularly good answers
[0:01] for how you train those things except
[0:01] for one um called contrastive
[0:01] contrastive
[0:01] learning
[0:01] where um and the IDE contrastive
[0:01] learning is you you take a pair of
[0:01] images that are again an image and a
[0:01] corrupted version or degraded version
[0:01] somehow or transform version of the
[0:01] original one and you train the predicted
[0:01] representation to be the same as as that
[0:01] if you only do this the system collapses
[0:01] it basically completely ignores the
[0:01] input and produces representations that
[0:01] are con
[0:01] so the contrastive methods avoid this
[0:01] and and those things have been around
[0:01] since the early 90s had a paper on this
[0:01] in
[0:01] 1993 um is you also show pairs of images
[0:01] that you know are different and then you
[0:01] push away the representations from each
[0:01] other so you say not only do
[0:01] representations of things that we know
[0:01] are the same should be the same or
[0:01] should be similar but representation of
[0:01] things that we know are different should
[0:01] be
[0:01] different and that prevents the collapse
[0:01] but it has some limitation and there&#39;s a
[0:01] whole bunch of uh techniques that have
[0:01] appeared over the last six seven years
[0:01] um that can revive this this type of
[0:01] method um some of them from Far some of
[0:01] them from from Google and other places
[0:01] um but there are limitations to those
[0:01] contrasting method what has changed in
[0:01] the last
[0:01] uh you know three four years is now now
[0:01] we have methods that are non-contrastive
[0:01] so they don&#39;t require those negative
[0:01] contractive samples of images that are
[0:01] that we know are different you can only
[0:01] you turn them only with images that are
[0:01] you know different versions or different
[0:01] views of the same thing uh and you rely
[0:01] on some other tricks to prevent the
[0:01] system from collapsing and we have have
[0:01] a dozen different methods for this now
[0:01] so what is the fundamental difference
[0:01] between joint embedding architectures
[0:01] and llms so can uh can japa take us to
[0:01] AGI whether we should say that you don&#39;t
[0:01] like uh the term AGI and we&#39;ll probably
[0:01] argue I think every single time I&#39;ve
[0:01] talked to you with argued about the G
[0:01] and AGI yes get I get it I get it we
[0:01] we&#39;ll probably continue to argue about
[0:01] it it&#39;s great uh you you like uh I me
[0:01] this because cuz you like French and um
[0:01] I me is is is uh I guess friend in
[0:01] French yes and Ami stands for advanced
[0:01] machine intelligence right um but either
[0:01] way can japa take us to that towards
[0:01] that advanced machine intelligence well
[0:01] so it&#39;s a it&#39;s a first step okay so
[0:01] first of all uh what What&#39;s the
[0:01] difference with generative architectures
[0:01] like llms um so llms um
[0:01] or Vision systems that are trained by
[0:01] reconstruction generate the inputs right
[0:01] they generate the original input that is
[0:01] non-corrupted
[0:01] non-transformed right so you have to
[0:01] predict all the
[0:01] pixels and there is a huge amount of
[0:01] resources spent in the system to
[0:01] actually predict all those pixels all
[0:01] the
[0:01] details uh in a jepa you&#39;re not trying
[0:01] to predict all the pixels you&#39;re only
[0:01] trying to predict an abstract
[0:01] representation of of the inputs right
[0:01] and that&#39;s much easier in many ways so
[0:01] what the japa system when it&#39;s being
[0:01] trained is trying to do is extract as
[0:01] much information as possible from the
[0:01] input but yet only EXT ract information
[0:01] that is relatively easily
[0:01] predictable okay so there&#39;s a lot of
[0:01] things in the world that we cannot
[0:01] predict like for example if you have a s
[0:01] driving car driving down the street or
[0:01] road uh there may be uh trees around the
[0:01] around the road and it could be a windy
[0:01] day so the the leaves on the tree are
[0:01] kind of moving in kind of semi chaotic
[0:01] random ways that you can&#39;t predict and
[0:01] you don&#39;t care you don&#39;t want to predict
[0:01] so what you want is your encoder to
[0:01] basically eliminate all those details
[0:01] will tell you there&#39;s moving leaves but
[0:01] it&#39;s not going to keep the details of
[0:01] exactly what&#39;s going on um and so when
[0:01] you do the prediction in representation
[0:01] space you&#39;re not going to have to
[0:01] predict every single Pixel of a
[0:01] relief and that you know um not only is
[0:01] a lot simpler but also it allows the
[0:01] system to essentially learn an abstract
[0:01] representation of of the world where you
[0:01] know what can be modeled and predicted
[0:01] is preserved and the rest is viewed as
[0:01] noise and eliminated by the encoder so
[0:01] it kind of lifts the level of
[0:01] abstraction of the representation if you
[0:01] think about this this is something we do
[0:01] absolutely all the time whenever we
[0:01] describe a phenomenon we describe it at
[0:01] a particular level of abstraction and we
[0:01] don&#39;t always describe every natural
[0:01] phenomenon in terms of quantum field
[0:01] Theory right that would be impossible
[0:01] right so we have multiple levels of
[0:01] abstraction to describe what happens in
[0:01] the world you know starting from Quantum
[0:01] field Theory to like atomic theory and
[0:01] molecules you know in chemistry
[0:01] materials and you know all the way up to
[0:01] you know kind of concrete objects in the
[0:01] real world and things like that so the
[0:01] we we can&#39;t just only model everything
[0:01] at the lowest level and that that&#39;s what
[0:01] the idea of JEA is really on is really
[0:01] about learn abstract representation in a
[0:01] self-supervised uh Manner and you know
[0:01] you can do it hierarchically as well so
[0:01] that I think is an essential component
[0:01] of an intelligent system and in language
[0:01] we can get away without doing this
[0:01] because language is already to some
[0:01] level abstract and already has
[0:01] eliminated a lot of information that is
[0:01] not predictable and um so we can get
[0:01] away without doing the tring without you
[0:01] know lifting the abstraction level and
[0:01] by directly predicting words so joint
[0:01] embedding it&#39;s still generative but it&#39;s
[0:01] generative in this abstract
[0:01] representation space yeah and you&#39;re
[0:01] saying language we were lazy with
[0:01] language cuz we already got the abstract
[0:01] representation for free and now we have
[0:01] to zoom out actually think about
[0:01] generally intelligent systems we have
[0:01] to deal with a full mess of physical
[0:01] reality of reality and you can&#39;t you you
[0:01] do have to do this step of jumping
[0:01] from uh the full Rich detailed reality
[0:01] to a uh abstract representation of that
[0:01] reality based on which you can then
[0:01] reason and all that kind of stuff right
[0:01] and the thing is those cell supervised
[0:01] algorithm that that learn by
[0:01] prediction even in representation space
[0:01] uh they learn more uh concept if the
[0:01] input data you Feit them is more
[0:01] redundant the more redundancy there is
[0:01] in the data the more they&#39;re able to
[0:01] capture some internal structure of it
[0:01] and so there there is way more
[0:01] redundancy in structure in perceptual uh
[0:02] inputs sensory input like like like
[0:02] Vision than there is in
[0:02] uh text which is not nearly as redundant
[0:02] this is back to the question you were
[0:02] asking a few minutes ago language might
[0:02] represent more information really
[0:02] because it&#39;s already compressed you&#39;re
[0:02] you&#39;re right about that but that means
[0:02] it&#39;s also less redundant and so self
[0:02] supervision will not work as well is it
[0:02] possible to join the self-supervised
[0:02] training on visual data and
[0:02] self-supervised training on language
[0:02] data there is a huge amount of knowledge
[0:02] even though you talk down about those 10
[0:02] to the 13 tokens those 10 to the 13
[0:02] tokens represent the
[0:02] entirety a large fraction of what US
[0:02] humans have figured out both the
[0:02] talk on Reddit and the contents of all
[0:02] the books and the Articles and the full
[0:02] spectrum of
[0:02] human uh intellectual creation so is it
[0:02] possible to join those two together well
[0:02] eventually yes but I think uh if we do
[0:02] this too early
[0:02] we run the risk of being tempted to
[0:02] cheat and in fact that&#39;s what people are
[0:02] doing at the moment with vision language
[0:02] model we&#39;re basically cheating we are
[0:02] using uh language as a crutch to help
[0:02] the deficiencies of our uh Vision
[0:02] systems to kind of learn good
[0:02] representations from uh images and video
[0:02] and uh the problem with this is that we
[0:02] might you know improve our uh visual
[0:02] language system a bit I mean our
[0:02] language models by you know feeding them
[0:02] image
[0:02] but we&#39;re not going to get to the level
[0:02] of even the intelligence or level of
[0:02] understanding of the world of a cat or
[0:02] dog which doesn&#39;t have language you know
[0:02] they don&#39;t have language and they
[0:02] understand the world much better than
[0:02] any llm they can plan really complex
[0:02] actions and sort of imagine the result
[0:02] of a bunch of actions how do we get
[0:02] machines to learn that before we combine
[0:02] that with language obviously if we
[0:02] combine this with language this is going
[0:02] to be a winner um but but before that we
[0:02] have to focus on like how do we get
[0:02] systems to learn how the world works so
[0:02] this kind of joint embedding predictive
[0:02] architecture for you that&#39;s going to be
[0:02] able to learn something like Common
[0:02] Sense something like what a cat uses to
[0:02] predict how to mess with its owner most
[0:02] optimally by knocking over a thing
[0:02] that&#39;s that&#39;s the Hope in fact the
[0:02] techniques we&#39;re using are
[0:02] non-contrastive uh so not only is the
[0:02] architecture non generative the learning
[0:02] procedures we&#39;re using are non
[0:02] contrastive we have two two sets of
[0:02] techniques one set is based on
[0:02] distillation and there&#39;s a number of uh
[0:02] methods that use this principle uh one
[0:02] by Deep Mind
[0:02] Bol a couple by by Fair one one called
[0:02] uh
[0:02] VRA and another one called IA and vcra I
[0:02] should say is not a distillation method
[0:02] actually but IA and B certainly are and
[0:02] there&#39;s another one also called Dino or
[0:02] dyo also produced from at fair and the
[0:02] idea of those things is that you take
[0:02] the full input let&#39;s say an image uh you
[0:02] run it through an
[0:02] encoder uh produces a representation and
[0:02] then you corrupt that input or transform
[0:02] it running to the essentially what
[0:02] amounts to the same encoder with some
[0:02] minor
[0:02] differences and then train a predictor
[0:02] sometimes to predictor is very simple
[0:02] sometime doesn&#39;t exist but train a
[0:02] predictor to predict a representation of
[0:02] the first first uh uncorrupted input
[0:02] from the corrupted input um but you only
[0:02] train the the second Branch um you only
[0:02] train the part of the network that is
[0:02] fed with the corrupted input the other
[0:02] network you don&#39;t you don&#39;t train but
[0:02] since they share the same weight when
[0:02] you modify the first one it also
[0:02] modifies the second one uh and with
[0:02] various tricks you can prevent the
[0:02] system from collapsing uh with the
[0:02] collapse of the type I was explaining
[0:02] before where the system basically
[0:02] ignores the input
[0:02] um so that works very well the the
[0:02] technique with the two techniques we
[0:02] develop at Fair uh dino and uh and IA
[0:02] work really well for that so what kind
[0:02] of data are we talking about here so
[0:02] this the several scenario one uh one
[0:02] scenario is you take an image you
[0:02] corrupt it by um changing the cropping
[0:02] for example changing the size a little
[0:02] bit maybe changing the orientation
[0:02] blurring it changing the colors doing
[0:02] all kinds of horrible things to it but
[0:02] basic horrible things basic horrible
[0:02] things that sort of degrade the quality
[0:02] a little bit and change the framing uh
[0:02] you know crop the image um or and in
[0:02] some cases in the case of a JEA you
[0:02] don&#39;t need to do any of this you just
[0:02] you just mask some parts of it right you
[0:02] just basically remove some regions like
[0:02] a big block
[0:02] essentially and and then you know run
[0:02] through the encoders um and train the
[0:02] entire system and and predictor to
[0:02] predict the representation of the good
[0:02] one from the representation of the
[0:02] corrupted
[0:02] one um so that&#39;s the Ia doesn&#39;t need to
[0:02] know that it&#39;s an image for example
[0:02] because the only thing it needs to know
[0:02] is how to do this masking um whereas
[0:02] with doo you need to know it&#39;s an image
[0:02] because you need to do things like you
[0:02] know geometri transformation and
[0:02] blurring and things like that that are
[0:02] really image
[0:02] specific uh a more recent version of of
[0:02] this that we have is called V JEA so is
[0:02] basically the same idea as I except um
[0:02] it&#39;s applied to video so now you take a
[0:02] whole video and you mask a whole chunk
[0:02] of it and what we mask is actually kind
[0:02] of a temple tube so an all like a whole
[0:02] uh segment of each frame in the video
[0:02] over the entire video and that tube was
[0:02] like statically position throughout the
[0:02] frames lit straight tube the tube yeah
[0:02] typically is 16 frames or something and
[0:02] we mask the same region over the entire
[0:02] 16 frames it&#39;s a different one for every
[0:02] video obviously and um and then again
[0:02] train that system so as to predict the
[0:02] representation of the full video from
[0:02] The partially matched video uh that
[0:02] works really well it&#39;s the first system
[0:02] that we have that learns good
[0:02] representations of video so that when
[0:02] you feed those representations to a
[0:02] supervised uh classifier head it can it
[0:02] can tell you what action is taking place
[0:02] in the video with you know pretty good
[0:02] accuracy um so that that&#39;s it&#39;s the
[0:02] first time we get something of that uh
[0:02] of that quality so that that&#39;s a a good
[0:02] test that a good representation is
[0:02] formed that means there&#39;s something to
[0:02] this yeah um we also preliminary result
[0:02] that seem to indicate that the
[0:02] representation allows us allow our
[0:02] system to tell whether the video is
[0:02] physically possible or completely
[0:02] impossible because some object
[0:02] disappeared or an object you know
[0:02] suddenly jumped from one location to
[0:02] another or or change shape or something
[0:02] so it&#39;s able to capture some physical
[0:02] con some physic based constraints about
[0:02] the reality represented in the video
[0:02] yeah about the appearance and The
[0:02] Disappearance of objects yeah that&#39;s
[0:02] really you okay but C can this
[0:02] actually get us to this kind of uh World
[0:02] model
[0:02] that understands enough about the world
[0:02] to be able to drive a car uh possibly um
[0:02] this is going to take a while before we
[0:02] get to that point but um um and there
[0:02] are systems already you know everybody
[0:02] systems that are based on this uh idea
[0:02] uh and the what you need for this is a
[0:02] slightly modified version of this where
[0:02] um imagine that you
[0:02] have uh a video and the a complete video
[0:02] and what you&#39;re doing to this video is
[0:02] that you&#39;re either translating it in
[0:02] time towards the future so you only see
[0:02] the beginning of the video but you don&#39;t
[0:02] see the latter part of it that is in the
[0:02] original one or you just mask the second
[0:02] half of the video for example um and
[0:02] then you you train a JEA system of the
[0:02] type I describe to predict the
[0:02] representation of the full video from
[0:02] the the shifted one but you also feed
[0:02] the predictor with an action for example
[0:02] you know the wheel is turned 10 degrees
[0:02] to the to the right or something right
[0:02] so if it&#39;s a you know a dash cam in a
[0:02] car and you know the angle of the wheel
[0:02] you should be able to predict to some
[0:02] extent what&#39;s going what&#39;s going to go
[0:02] what&#39;s going to happen to which to see
[0:02] uh you&#39;re not going to be able to
[0:02] predict all the details of you know
[0:02] objects that appear in the view
[0:02] obviously but at a abstract
[0:02] representation level you can you can
[0:02] probably predict what&#39;s going to happen
[0:02] so now what you have
[0:02] is a internal model that says here is my
[0:02] idea of state of the world at time T
[0:02] here is an action I&#39;m taking here&#39;s a
[0:02] prediction of the state of the world at
[0:02] time t plus one t plus Delta t t plus 2
[0:02] seconds whatever it is if you have a
[0:02] model of this type you can use it for
[0:02] planning so now you can do what llms
[0:02] cannot do which is planning what you&#39;re
[0:02] going to do so as to arrive at a
[0:02] particular uh outcome or satisfy a
[0:02] particular objective right so you can
[0:02] have a number of
[0:02] objectives um right if you know I can I
[0:02] can predict that uh if I have uh an
[0:02] object like this right and I open my
[0:02] hand it&#39;s going to fall right and uh and
[0:02] if if I push it with a particular force
[0:02] on the table it&#39;s going to move if I
[0:02] push the table itself it&#39;s probably not
[0:02] going to move uh with the same Force um
[0:02] so we have we have this internal model
[0:02] of the world in our in our mind uh which
[0:02] allows us to plan sequences of actions
[0:02] to arrive at a particular goal um and so
[0:02] um so now if you have this world model
[0:02] we can imagine a sequence of actions
[0:02] predict what the outcome of the sequence
[0:02] of action is going to be measure to what
[0:02] extent
[0:02] the final State satisfies a particular
[0:02] objective like you know moving the
[0:02] bottle to the left of the
[0:02] table um and then plan a sequence of
[0:02] actions that will minimize this
[0:02] objective at run time we&#39;re not talking
[0:02] about learning we&#39;re talking about
[0:02] inference time right so this is planning
[0:02] really and in optimal control this is a
[0:02] very classical thing it&#39;s called Uh
[0:02] model predictive control you have a
[0:02] model of the system you want to control
[0:02] that you know can predict the sequence
[0:02] of State St corresponding to a sequence
[0:02] of
[0:02] commands and you&#39;re planning a sequence
[0:02] of commands so that according to your
[0:02] world model the the the end state of the
[0:02] system will uh satisfy an objectives
[0:02] that you fix this is the
[0:02] way uh you know rocket trajectories have
[0:02] been planned since computers have been
[0:02] around so since the early 60s
[0:02] essentially so yes for model predictive
[0:02] control but you also often talk about
[0:02] hierarchical planning can hierarchical
[0:02] planning emerge from this somehow well
[0:02] so no you you will have to build
[0:02] specific architecture to allow for
[0:02] hierarchical planning so hierarchical
[0:02] planning is absolutely necessary if you
[0:02] want to plan complex
[0:02] actions uh if I want to go from let&#39;s
[0:02] say from New York to Paris this the
[0:02] example I use all the time and I&#39;m
[0:02] sitting uh in my office at NYU my
[0:02] objective that I need to minimize is my
[0:02] distance to Paris at a high level a very
[0:02] astract representation of my uh my
[0:02] location I would have to decompose this
[0:02] into two sub goals first one is um go to
[0:02] the airport second one is catch a plane
[0:02] to Paris okay so my sub goal is
[0:02] now uh going to the airport my objective
[0:02] function is my distance to the
[0:02] airport how do I go to the airport where
[0:02] I have to go in the street and H a taxi
[0:02] which you can do in New
[0:02] York um okay now I have another sub goal
[0:02] go down on the street uh well that means
[0:02] going to the elevator going down the
[0:02] elevator walk out the street how do I go
[0:02] to the elevator I have to
[0:02] uh stand up from my chair open the door
[0:02] of my office go to the elevator push
[0:02] push the button how do I get up from my
[0:02] chair like you know you can imagine
[0:02] going down all the way down to basically
[0:02] what amounts to millisecond by
[0:02] millisecond muscle
[0:02] control okay and obviously you&#39;re not
[0:02] going to plan your entire trip from New
[0:02] York to Paris
[0:02] in terms of millisecond by millisecond
[0:02] muscle control first that would be
[0:02] incredibly expensive but it will also be
[0:02] completely impossible because you don&#39;t
[0:02] know all the conditions of what&#39;s going
[0:02] to happen uh you know how long it&#39;s
[0:02] going to take to catch a taxi um or to
[0:02] go to the airport with traffic you know
[0:02] uh I mean you you would have to know
[0:02] exactly the condition of everything to
[0:02] be able to do this planning and you
[0:02] don&#39;t have the information so you you
[0:02] have to do this hierarchical planning so
[0:02] that you can start acting and then sort
[0:02] of replanning as you go and nobody
[0:02] really knows how to do this in AI um
[0:02] nobody knows how to train a system to
[0:02] learn the appropriate multiple levels of
[0:02] representation so that hierarchical
[0:02] planning Works does something like that
[0:02] already emerge so like can you use an
[0:02] llm state-ofthe-art llm to get you from
[0:02] New York to Paris by doing exactly the
[0:02] kind of detailed set of questions that
[0:02] you just did
[0:02] which is can you give me a highight a
[0:02] list of 10 steps I need to do to get
[0:02] from New York to Paris and then for each
[0:02] of those steps can you give me a list of
[0:02] 10 steps how I make that step happen and
[0:02] for each of those steps can you give me
[0:02] a list of 10 steps to make each one of
[0:02] those until you&#39;re moving your mus
[0:02] individual muscles uh maybe not whatever
[0:02] you can actually act upon using your
[0:02] mind right so there&#39;s a lot of questions
[0:02] that are sort implied by this right so
[0:02] the first thing is llms will be able to
[0:02] answer some of those questions down to
[0:02] some level of
[0:02] exraction under the condition that
[0:02] they&#39;ve been trained with similar
[0:02] scenarios in their training set they
[0:02] would be able to answer all those
[0:02] questions but some of them may be
[0:02] hallucinated meaning non-factual yeah
[0:02] true I mean they will probably produce
[0:02] some answer except they&#39;re not going to
[0:02] be able to really kind of produce
[0:02] millisecond by millisecond muscle
[0:02] control of how you how you stand up from
[0:02] your chair right so but down to some
[0:02] level of exraction we can describe
[0:02] things by words they might be able to
[0:02] give you a plan but only under the
[0:02] condition that they&#39;ve been trained to
[0:02] produce those kind of plans mhm right
[0:02] they&#39;re not going to be able to plan for
[0:02] situations where that that they never
[0:02] encountered before they basically are
[0:02] going to have to regurgitate the
[0:02] template that they&#39;ve been trained on
[0:02] but where like just for the example of
[0:02] New York to Paris is is it going to
[0:02] start getting into trouble like at which
[0:02] layer layer of abstraction do you think
[0:02] you&#39;ll start cuz like I can imagine
[0:02] almost every single part of that anal
[0:02] will be able to answer somewhat
[0:02] accurately especially when you&#39;re
[0:02] talking about New York and Paris major
[0:02] cities so I mean certainly uh LM would
[0:02] be able to solve that problem if you f
[0:02] tun need for it you know just uh and and
[0:02] so uh I can&#39;t say that nlm cannot do
[0:02] this it can do this if you train it for
[0:02] it there&#39;s no question uh down to a
[0:02] certain level where things can be
[0:02] formulated in terms of words but like if
[0:02] you want to go down to like how do you
[0:02] you know climb down the stairs or just
[0:02] stand up from your chair in terms of uh
[0:02] words like you you can&#39;t you can&#39;t do it
[0:02] um you you need that&#39;s one of the
[0:02] reasons you need experience of the
[0:02] physical world which is much higher
[0:02] bandwidth than what you can express in
[0:02] words in human language so everything
[0:02] we&#39;ve been talking about on the joint
[0:02] embedding space is it possible that
[0:02] that&#39;s what we need for like the
[0:02] interaction with physical reality for on
[0:02] the robotics front and then just the
[0:02] llms are the thing that sits on top of
[0:02] it for the bigger reasoning about like
[0:02] yeah the fact that I need to book a
[0:02] plane ticket and I need to know I know
[0:02] how to go to the websites and so on sure
[0:02] and you know a lot of plans that people
[0:02] know about um that are relatively high
[0:02] level are actually learned they&#39;re not
[0:02] people most people don&#39;t invent the you
[0:02] know plans um uh they
[0:02] they by themselves they uh you know we
[0:02] have some ability to do this of course
[0:02] uh obviously but um but but most plants
[0:02] that people use are plants that they&#39;ve
[0:02] been trained on like they&#39;ve seen other
[0:03] people use those plants or they&#39;ve been
[0:03] told how to do things right um that you
[0:03] can&#39;t invent how you like take a person
[0:03] who&#39;s never heard of airplanes and tell
[0:03] them like how do you go from New York to
[0:03] Paris and they&#39;re probably not going to
[0:03] be able to kind of you know deconstruct
[0:03] the whole plan unless they&#39;ve seen
[0:03] examples of that before um so certainly
[0:03] LMS are going to be able to do this but
[0:03] but then um how you link this from the
[0:03] the low level
[0:03] of of of actions uh that needs to be
[0:03] done with things like like Jad that
[0:03] basically lift the abstraction level of
[0:03] the representation without attempting to
[0:03] reconstruct every detail of the
[0:03] situation that&#39;s why we need Jass for I
[0:03] would love to sort of Linger on your
[0:03] skepticism
[0:03] around uh autoaggressive
[0:03] llms so one way I would like to test
[0:03] that skepticism is everything you say
[0:03] makes a lot of sense
[0:03] but if I apply everything you said today
[0:03] and in general to like I don&#39;t know 10
[0:03] years ago maybe a little bit less no
[0:03] let&#39;s say three years ago I wouldn&#39;t be
[0:03] able to
[0:03] predict the uh success of llms so does
[0:03] it make sense to you that autoaggressive
[0:03] llms are able to be so damn
[0:03] good yes can you explain your intuition
[0:03] because if I were to take your wisdom
[0:03] and
[0:03] intuition at face value I would say
[0:03] there&#39;s no way autoaggressive LMS one
[0:03] token at a time would be able to do the
[0:03] kind of things they&#39;re doing no there&#39;s
[0:03] one thing that auto llms uh or that llms
[0:03] in general not just the autoaggressive
[0:03] one but including the birth style bir
[0:03] directional ones uh are exploiting and
[0:03] it&#39;s self-supervised learning and I&#39;ve
[0:03] been a very very strong advocate of self
[0:03] supervising for many years so those
[0:03] things are
[0:03] a incredibly impressive demonstration
[0:03] that cell supervisor learning actually
[0:03] works uh the idea that you know started
[0:03] uh it didn&#39;t start with with uh with
[0:03] Bert but it was really kind of a good
[0:03] demonstration with this so the
[0:03] the the idea that you know you take a
[0:03] piece of text you corrupt it and then
[0:03] you train some gigantic neural net to
[0:03] reconstruct the parts that are
[0:03] missing um that has been an enormous
[0:03] uh produced an enormous amount of
[0:03] benefits uh it allowed allowed us to
[0:03] create systems that understand
[0:03] understand language uh systems that can
[0:03] translate um hundreds of languages in
[0:03] any direction systems that are
[0:03] multilingual so they&#39;re not it&#39;s a
[0:03] single system that can be trained to
[0:03] understand hundreds of languages and
[0:03] translate in any
[0:03] direction um and produce summaries um
[0:03] and then answer questions and produce
[0:03] text and then there&#39;s a special case of
[0:03] it where you know you which is the auto
[0:03] Progressive uh trick where you constrain
[0:03] the system to not elaborate a
[0:03] representation of the text from looking
[0:03] at the enti text but
[0:03] only predicting a word from the words
[0:03] that are come before right and you do
[0:03] this by the constraining the
[0:03] architecture of the network and that&#39;s
[0:03] what you can build an auto regressive
[0:03] ATM from so there was a surprise many
[0:03] years ago with what&#39;s called decoder
[0:03] only llm so since you know systems of
[0:03] this type that are just trying to
[0:03] produce uh words from the from the
[0:03] previous one and and the fact that when
[0:03] you scale them up they they tend
[0:03] to really kind of understand more about
[0:03] the about language when you train them
[0:03] on lot of data and you make them really
[0:03] big that was kind of a surprise and that
[0:03] surprise occurred quite a while back
[0:03] like you know uh with uh work from uh
[0:03] you know Google meta open AI Etc you
[0:03] know going back to you know the GPT kind
[0:03] of uh work General pre-train
[0:03] Transformers do you mean like gbt2 like
[0:03] there&#39;s a certain place where you start
[0:03] to realize scaling might actually keep
[0:03] giving us a an emergent benefit yeah I
[0:03] mean there were there were work from
[0:03] from various places but uh uh if if you
[0:03] want to kind of you know place it in the
[0:03] in the GPT uh timeline that would be
[0:03] around gpt2 yeah well I just cuz you
[0:03] said it you&#39;re you&#39;re so charismatic you
[0:03] said so many words but self-supervised
[0:03] learning yeah yes but again the same
[0:03] intuition you&#39;re applying to saying that
[0:03] autor regressive llms cannot have a deep
[0:03] understanding of the world if we just
[0:03] apply that same intuition does it make
[0:03] sense to you that they&#39;re able to form
[0:03] enough of a representation of the world
[0:03] to be damn convincing
[0:03] essentially passing the original touring
[0:03] test with flying colors well we&#39;re
[0:03] fooled by their fluency right we just
[0:03] assume that if a system is is fluent in
[0:03] manipulating language then it has all
[0:03] the characteristics of human
[0:03] intelligence but that impression is
[0:03] false we we we&#39;re really fooled by it um
[0:03] what do you think alen tan would say it
[0:03] without understanding anything just
[0:03] hanging out with it an Turing would
[0:03] decide that a Turing test is a really
[0:03] bad test okay this is what the AI
[0:03] Community has decided many years ago
[0:03] that the tring test was a really bad
[0:03] test of intelligence what would Hans
[0:03] marvac say about the about the large
[0:03] language models hence Marv would say the
[0:03] Marv Paradox still applies okay okay
[0:03] okay we can pass you don&#39;t think he
[0:03] would be really impressed no of course
[0:03] everybody would be impressed but uh you
[0:03] know uh it&#39;s not a question of being
[0:03] impressed or not it&#39;s a question of
[0:03] knowing what the limit of those systems
[0:03] can do like there again they are
[0:03] impressive they can do a lot of useful
[0:03] things there&#39;s a whole industry that is
[0:03] being built around them they&#39;re going to
[0:03] make progress uh but there is a lot of
[0:03] things they cannot do and we have to
[0:03] realize what they cannot do do and uh
[0:03] and then figure out you know how we get
[0:03] there and you know and and I&#39;m not
[0:03] seeing this I&#39;m seeing this from
[0:03] basically you know 10 years of of
[0:03] research uh on on the IDE of sell
[0:03] supervis learning actually that&#39;s going
[0:03] back more than 10 years but the IDE of
[0:03] cell supervis learning so basically
[0:03] capturing the internal structure of a
[0:03] piece of uh of of a set of inputs
[0:03] without training the system for any
[0:03] particular task right learning
[0:03] representations
[0:03] um you know the the conference I
[0:03] co-founded 14 years ago is called inter
[0:03] International Conference on learning
[0:03] representations that&#39;s the entire issue
[0:03] that deep learning is is dealing with
[0:03] right and it&#39;s been my obsession for you
[0:03] know almost 40 years now so um so
[0:03] learning representation is really the
[0:03] thing uh for the longest time we could
[0:03] only do this with supervised learning
[0:03] and then we started working on uh you
[0:03] know what we used to call unsupervised
[0:03] learning uh and sort of revive the idea
[0:03] of unsupervised learning uh in the early
[0:03] 2000s with yosha benju and Jeff Hinton
[0:03] then discovered that supervisor leing
[0:03] actually works pretty well if you can
[0:03] collect enough data and so the whole
[0:03] idea of you know unsupervised supervisor
[0:03] kind I took a a backseat for for a bit
[0:03] and then I kind of tried to revive it um
[0:03] uh in a big way you know starting in
[0:03] 2014 basically when we started fair and
[0:03] uh and really pushing for like finding
[0:03] new new methods to do cell supervised
[0:03] learning both for text and for images
[0:03] and for video and audio and some of that
[0:03] work has been incredibly successful um I
[0:03] mean the reason why we have multilingual
[0:03] translation system you know things to do
[0:03] content moderation on on meta for
[0:03] example on Facebook that are
[0:03] multilingual that understand whether
[0:03] piece of text is H speech or not or
[0:03] something is due to their progress using
[0:03] cell supervis learning for NLP combining
[0:03] this with you know Transformer
[0:03] architectures and and blah blah blah but
[0:03] that&#39;s the big success of supervis rning
[0:03] we had similar success in speech
[0:03] recognition a system called wave to V
[0:03] which is also a joint embedding
[0:03] architecture by the way train with
[0:03] contrastive learning and and that that
[0:03] system also can produce um speech
[0:03] recognition systems that are
[0:03] multilingual with mostly unlabeled data
[0:03] and only need a few minutes of labeled
[0:03] data to actually do speech recognition
[0:03] that&#39;s that&#39;s amazing um we have systems
[0:03] now based on those combination of ideas
[0:03] that can do realtime translation of
[0:03] hundreds of languages into each other uh
[0:03] Speech to speech speech to speech even
[0:03] including which is fascinating languages
[0:03] that uh don&#39;t have written forms that&#39;s
[0:03] right they spoken only that&#39;s right we
[0:03] don&#39;t go through text it goes directly
[0:03] from from speech to speech using an
[0:03] internal representation of kind of
[0:03] speech units that are discrete but it&#39;s
[0:03] um it&#39;s called text lesson LP we used to
[0:03] call it this way but um yeah so that I
[0:03] mean incredible success there and then
[0:03] you know for 10 years we tried to apply
[0:03] this idea to learning representations of
[0:03] images by training a system to predict
[0:03] videos learning intuitive physics by
[0:03] training a system to predict what&#39;s
[0:03] going to happen in the video and tried
[0:03] and tried and failed and failed with
[0:03] generative models with models that
[0:03] predict
[0:03] pixels uh we could not get them to learn
[0:03] good well presentations of images we
[0:03] could not get them to learn good well
[0:03] presentations of videos and we tried
[0:03] many times we published lots of papers
[0:03] on it you know they kind of sort of work
[0:03] but not really great they started
[0:03] working we we have been this idea of
[0:03] predicting every pixel and basically
[0:03] just doing the joint embedding and
[0:03] predicting in representation space that
[0:03] works MH so there&#39;s ample evidence that
[0:03] we&#39;re not going to be able to learn good
[0:03] we representations of the real world
[0:03] using generative model so I&#39;m telling
[0:03] people everybody is talking about
[0:03] generative AI if you&#39;re really
[0:03] interested in human level AI abandon the
[0:03] idea of generate
[0:03] AI okay but you you you really think
[0:03] it&#39;s possible to get far with the joint
[0:03] embedding representation so like there&#39;s
[0:03] Common Sense reasoning and then there&#39;s
[0:03] highlevel reasoning like I I feel like
[0:03] those are
[0:03] two the kind of reasoning that LMS are
[0:03] able to do okay let me not use the word
[0:03] reasoning but the kind of stuff that LMS
[0:03] are able to do seems fundamentally
[0:03] different than the common sense
[0:03] reasoning we use to navigate the world
[0:03] yeah it seems like we&#39;re going to need
[0:03] both you&#39;re not would you be able to get
[0:03] with the joint embedding would is the
[0:03] JEA type of approach looking at video
[0:03] would you be able to
[0:03] learn let&#39;s see well how to get from New
[0:03] York to Paris or
[0:03] um how to uh understate understand the
[0:03] state of politics in the world today
[0:03] right these these are things where
[0:03] various humans generate a lot of
[0:03] language and opinions on in the space of
[0:03] language but don&#39;t visually represent
[0:03] that and you clearly uh compressible way
[0:03] right well there&#39;s a lot of situations
[0:03] that you know might be difficult to for
[0:03] a purely language based system to um to
[0:03] know like okay you can probably learn
[0:03] from Reading text the entirety of the
[0:03] Public Public avilable text in the world
[0:03] that I cannot get from New York to Paris
[0:03] by snapping my fingers that&#39;s not going
[0:03] to work right yes uh but there&#39;s you
[0:03] know probably sort of more complex uh
[0:03] scenarios of this type which an nlm May
[0:03] never have encountered and may not be
[0:03] able to determine whether it&#39;s possible
[0:03] or not um so um so that that link you
[0:03] know from the the low level to the high
[0:03] level the the thing is that the high
[0:03] level that language expresses is based
[0:03] on the common experience of the low
[0:03] level which llms currently do not have
[0:03] you know we when we talk to each other
[0:03] we know we have a common experience of
[0:03] the of the world like you know a lot of
[0:03] it is is similar
[0:03] uh
[0:03] and LMS don&#39;t have that but see there
[0:03] it&#39;s present you and I have a common
[0:03] experience of the world in terms of the
[0:03] physics of how gravity works and stuff
[0:03] like this and
[0:03] that common knowledge of the world I
[0:03] feel like is there in the language we
[0:03] don&#39;t explicitly express it but if you
[0:03] have a huge amount of text you&#39;re going
[0:03] to get this stuff that&#39;s between the
[0:03] lines you&#39;re going to you&#39;re going in
[0:03] order to um form a consistent world mod
[0:03] you&#39;re going to have to understand how
[0:03] gravity works even if you don&#39;t have an
[0:03] explicit explanation of gravity so even
[0:03] though in the case of gravity there is
[0:03] explicit explanations of gravity and
[0:03] wiia but uh you&#39;re like the stuff that
[0:03] we think of as common sense reasoning I
[0:03] feel like to generate language correctly
[0:03] you&#39;re going to have to figure that out
[0:03] now you could say as you have there&#39;s
[0:03] not enough text okay so what you don&#39;t
[0:03] think so no I agree with what you just
[0:03] said which is that to be able to do high
[0:03] LEL um uh common sense to have high
[0:03] level common sense you need to have the
[0:03] low level common sense to build on top
[0:03] of yeah um but that&#39;s not there and
[0:03] that&#39;s not there in llms llms are purely
[0:03] trained from Tex so so then the other
[0:03] statement you made um I would not I
[0:03] would not agree with the fact that
[0:03] implicit in all languages in the world
[0:03] is the underlying reality there&#39;s a lot
[0:03] about underlying reality which is not
[0:03] expressed in language is that obvious to
[0:03] you yeah
[0:03] totally so like
[0:03] all all the conversations we have what
[0:03] okay there&#39;s the Dark web meaning uh
[0:03] whatever the private conversations like
[0:03] DMS and stuff like this which is much
[0:03] much larger probably than what&#39;s
[0:03] available what what llms are trained on
[0:03] you don&#39;t need to communicate the stuff
[0:03] that is coming but the humor all of it
[0:03] no you do like when you you don&#39;t need
[0:03] to but it comes through through like you
[0:03] like if I accidentally uh knock this
[0:03] over you&#39;ll probably make fun of me and
[0:03] in the content of the you making fun of
[0:03] me will be a explanation of the fact
[0:03] that cups fall and then you know gravity
[0:03] Works in this way and then you you&#39;ll
[0:03] have some very vague information about
[0:03] what kind of things explode when they
[0:03] hit the ground and then maybe you&#39;ll
[0:03] make a joke about entropy or something
[0:03] like this and you will&#39;ll never be able
[0:03] to reconstruct this again like okay you
[0:03] make a a little joke like this and
[0:03] there&#39;ll be trillion of other jokes and
[0:03] from the jokes you can piece together
[0:03] the fact that gravity works and mugs can
[0:03] break and all this kind of stuff you
[0:03] don&#39;t need to
[0:03] see uh it&#39;ll be very inefficient it&#39;s
[0:03] easier for like to not knock the thing
[0:03] over yeah but uh I feel like it would be
[0:03] there if you have enough of that data I
[0:03] just think that most of the information
[0:03] of this type that we have accumulated
[0:03] when when we were babies is just not
[0:03] present in uh in in text any in any
[0:03] description essentially and the sensory
[0:03] data is much is a much richer source for
[0:03] getting that kind of understanding I
[0:03] mean that&#39;s the 16,000 hours of of wake
[0:03] time of a four-year-old and uh 10 to the
[0:03] 15 bytes you know going through vision
[0:03] just Vision right there is a
[0:03] similar uh bandwidth you know of touch
[0:03] and uh a little less through audio and
[0:03] then text doesn&#39;t language doesn&#39;t come
[0:03] in until like you know year uh in in
[0:03] life and by the time you are 9 years old
[0:03] you&#39;ve learned about gravity you know
[0:03] about inertia you know about gravity you
[0:03] know the stability you know you know
[0:03] about the distinction between animate
[0:03] and inanimate objects you know by 18
[0:03] months you know about like uh why people
[0:03] want to do things and you help them if
[0:03] they can&#39;t you know I mean there&#39;s a lot
[0:03] of things that you learn mostly by
[0:03] observation really uh not even through
[0:03] interaction in the first few months of
[0:03] life babies don&#39;t don&#39;t really have any
[0:03] influence on the world they can only
[0:03] observe right and you accumulate like a
[0:03] gigantic amount of uh of knowledge just
[0:03] just from that so that that&#39;s what we&#39;re
[0:03] missing from uh current AI
[0:03] systems I think in one of your slides
[0:03] you have this nice plot that is one of
[0:03] the ways you show that llms are limited
[0:03] I wonder if you could talk about
[0:03] hallucinations from your
[0:03] perspectives the why hallucinations
[0:03] happen from large language models and
[0:03] why
[0:03] and to what degree is that a fundamental
[0:03] flaw of large language models right so
[0:03] because of the auto regressive
[0:03] prediction every time an LM produces a
[0:03] token or word uh there is some level of
[0:03] probability for that word to take you
[0:04] out of the set of reasonable
[0:04] answers uh and if you assume which is a
[0:04] very strong assumption that the
[0:04] probability of such
[0:04] error um is that those errors are
[0:04] independent across a a sequence of
[0:04] tokens being produced M what that means
[0:04] is that every time you produce a token
[0:04] the probability that you rest you you
[0:04] stay within the the set of correct
[0:04] answer decreases and it decreases
[0:04] exponentially so there&#39;s a strong like
[0:04] you said assumption there that if uh
[0:04] there&#39;s a non-zero probability of making
[0:04] a mistake which there appears to be then
[0:04] there&#39;s going to be a kind of drift yeah
[0:04] and that drift is exponential it&#39;s like
[0:04] errors accumulate right so so the
[0:04] probability that an answer would be
[0:04] nonsensical increases exponentially with
[0:04] the number of tokens is that obvious to
[0:04] you by the way like well so
[0:04] mathematically speaking maybe but like
[0:04] isn&#39;t there a kind of gravitational pull
[0:04] towards the truth because on on average
[0:04] hopefully the truth is well represented
[0:04] in the uh training set no it&#39;s basically
[0:04] a struggle against uh the curse of
[0:04] dimensionality so the way you can
[0:04] correct for this is that you fine-tune
[0:04] the
[0:04] system by having it produce answers for
[0:04] all kinds of questions that people might
[0:04] come up with M and people are people so
[0:04] they a lot of the questions that they
[0:04] have are very similar to each other so
[0:04] you can probably cover you know 80% or
[0:04] whatever of questions that people will
[0:04] will ask um by you know collecting data
[0:04] and then um and then you fine tune the
[0:04] system to produce good answers for all
[0:04] of those things and it&#39;s probably going
[0:04] to be able to learn that because it&#39;s
[0:04] got a lot of capacity to to learn um but
[0:04] then there is you know the enormous set
[0:04] of prompts that you have not covered
[0:04] during training and that set is enormous
[0:04] like within the set of all possible
[0:04] prompts the proportion of prompts that
[0:04] have
[0:04] been uh used for training is absolutely
[0:04] tiny um it&#39;s a it&#39;s a tiny tiny tiny
[0:04] subset of all possible prompts and so
[0:04] the system will behave properly on the
[0:04] prompts that it&#39;s been either trained
[0:04] pre-trained or
[0:04] fine-tuned um but then there is an
[0:04] entire space of things that it cannot
[0:04] possibly have been trained on because
[0:04] it&#39;s just the the number is gigantic so
[0:04] um so whatever training the
[0:04] system uh has been subject to to produce
[0:04] appropriate tensors you can break it by
[0:04] finding out a prompt that will be
[0:04] outside of the the the set of promps has
[0:04] been trained on or things that are
[0:04] similar and then it will just P complete
[0:04] nonsense do you when you say prompt do
[0:04] you mean that exact prompt or do you
[0:04] mean a prompt that&#39;s like in many parts
[0:04] very different than like is that easy to
[0:04] ask a question or to say a thing that
[0:04] hasn&#39;t been said before on the internet
[0:04] I mean people have come up with uh
[0:04] things where like you you put a
[0:04] essentially a random sequence of
[0:04] characters in The Prompt and that&#39;s
[0:04] enough to kind of throw the system uh
[0:04] into a mode where you know it it&#39;s going
[0:04] to answer something completely different
[0:04] than it would have answered without this
[0:04] so that&#39;s a way to jailbreak the system
[0:04] basically get it you know go outside of
[0:04] its uh of its conditioning right so that
[0:04] that&#39;s a very clear demonstration of it
[0:04] but of
[0:04] course uh you know that&#39;s uh that goes
[0:04] outside of what is designed to do right
[0:04] if you actually stitch together
[0:04] reasonably grammatical sentences is that
[0:04] the is it that easy to break it yeah
[0:04] some people have done things like you
[0:04] you you write a sentence in English
[0:04] right that has and or you ask a question
[0:04] in English and it it produces a
[0:04] perfectly fine answer and then you just
[0:04] substitute a few
[0:04] words by the same word in another
[0:04] language and all of a sudden the answer
[0:04] is complete nonsense yeah so so I guess
[0:04] what I&#39;m saying is like which fraction
[0:04] of prompts that humans are likely to
[0:04] generate are going to break the system
[0:04] so the the problem is that there is a
[0:04] long tail yes uh this is a an issue that
[0:04] a lot of people have realize you know in
[0:04] social networks and stuff like that
[0:04] which is uh there&#39;s a very very long
[0:04] taale of of things that people will ask
[0:04] and you can find tune the system for the
[0:04] 80% or whatever of uh of the things that
[0:04] most people will will ask and then this
[0:04] long tail is is so large that you&#39;re not
[0:04] going to be able to fun the system for
[0:04] all the conditions and in the end the
[0:04] system has a being kind of a giant
[0:04] lookup table right essentially which is
[0:04] not really what you want you want
[0:04] systems that can reason certainly they
[0:04] can plan so the type of reasoning that
[0:04] takes place in llm is very very
[0:04] primitive and the reason you can tell is
[0:04] primitive is because the amount of
[0:04] computation that is spent per token
[0:04] produced is constant so if you ask a
[0:04] question and that question has an answer
[0:04] in a given number of token the amount of
[0:04] competition devoted to Computing that
[0:04] answer can be exactly
[0:04] estimated it&#39;s like you know it&#39;s it&#39;s
[0:04] the the size of the prediction Network
[0:04] you know with its 36 layers on 92 layers
[0:04] or whatever it is uh multiply by number
[0:04] of tokens that&#39;s it and so essentially
[0:04] it doesn&#39;t matter if the question being
[0:04] asked is is simple to answer complicated
[0:04] to answer impossible to answer because
[0:04] it&#39;s undecidable or something um the
[0:04] amount of computation the system will be
[0:04] able to devote to to the answer is
[0:04] constant or is proportional to number of
[0:04] token produced in the answer right this
[0:04] is not the way we work the way we reason
[0:04] is that when we&#39;re faced with a complex
[0:04] problem or a complex question we spend
[0:04] more time trying to solve it and answer
[0:04] it right because it&#39;s more difficult
[0:04] there&#39;s a prediction element there&#39;s a
[0:04] iterative element where you&#39;re like
[0:04] uh adjusting your understanding of a
[0:04] thing by going over over and over and
[0:04] over there&#39;s a hierarchical element so
[0:04] on does this mean that a fundamental
[0:04] flaw of llms or does it mean
[0:04] that there more part to that
[0:04] question now you&#39;re just behaving like
[0:04] an
[0:04] llm immediately answer no that that it&#39;s
[0:04] just the lowlevel world model on top of
[0:04] which we can then build some of these
[0:04] kinds of mechanisms like you said
[0:04] persistent long-term memory
[0:04] or uh reasoning so on but we need that
[0:04] world model that comes from language is
[0:04] it maybe it is not so difficult to build
[0:04] this kind of uh reasoning system on top
[0:04] of a well constructed World model OKAY
[0:04] whether it&#39;s difficult or not the near
[0:04] future will will say because a lot of
[0:04] people are working on reasoning and
[0:04] planning abilities for for dialog
[0:04] systems um I mean if we&#39;re even if we
[0:04] restrict ourselves to
[0:04] language uh just having the ability to
[0:04] plan your answer before you
[0:04] answer uh in terms that are not
[0:04] necessarily linked with the language
[0:04] you&#39;re going to use to produce the
[0:04] answer right so this idea of this mental
[0:04] model that allows you to plan what
[0:04] you&#39;re going to say before you say it
[0:04] um that is very important I think
[0:04] there&#39;s going to be a lot of systems
[0:04] over the next few years that are going
[0:04] to have this capability but the
[0:04] blueprint of those systems would be
[0:04] extremely different from autoregressive
[0:04] LMS so so
[0:04] um it&#39;s the same difference as the
[0:04] difference between what psychology is
[0:04] called system one and system two in
[0:04] humans right so system one is the type
[0:04] of task that you can accomplish without
[0:04] like deliberately consciously think
[0:04] about how you do them you just do them
[0:04] you&#39;ve done them enough that you can
[0:04] just do it subconsciously right without
[0:04] thinking about them if you&#39;re an
[0:04] experience driver you can drive without
[0:04] really thinking about it and you can
[0:04] talk to someone at the same time or
[0:04] listen to the radio
[0:04] right um if you are a very experienced
[0:04] chess player you can play against a
[0:04] non-experienced chess player without
[0:04] really thinking either you just
[0:04] recognize the pattern and you play MH
[0:04] right that&#39;s system one um so all the
[0:04] things that you do instinctively without
[0:04] really having to deliberately plan and
[0:04] think about it and then there is all
[0:04] tasks what you need to plan so if you
[0:04] are not to experienced uh chess player
[0:04] or you are experienced with you play
[0:04] against another experienced chess player
[0:04] you think about all kinds of options
[0:04] right you you think about it for a while
[0:04] right and you you you&#39;re much better if
[0:04] you have time to think about it than you
[0:04] are if you if you play Blitz uh with
[0:04] limited time so and um so this type of
[0:04] deliberate uh planning which uses your
[0:04] internal World model um that system to
[0:04] this is what LMS currently cannot do so
[0:04] how how do we get them to do this right
[0:04] how do we build a system that can do
[0:04] this kind of uh planning that or
[0:04] reasoning that devotes more resources to
[0:04] complex problems than to simple problems
[0:04] and it&#39;s not going to be Auto regressive
[0:04] prediction of tokens it&#39;s going to be
[0:04] more something akin to inference of
[0:04] Laten variables in um you know what used
[0:04] to be called problemistic models or
[0:04] graphical models and things of that type
[0:04] so basically the principle is like this
[0:04] you you know the prompt is like a
[0:04] observed uh variables M and what your
[0:04] what the model does is that it&#39;s
[0:04] basically a
[0:04] measure of it can measure to what extent
[0:04] an answer is a good answer for a prompt
[0:04] okay so think of it as some gigantic
[0:04] neural net but it&#39;s got only one output
[0:04] and that output is a scalar number which
[0:04] is let&#39;s say zero if the answer is a
[0:04] good answer for the question and a large
[0:04] number if the answer is not a good
[0:04] answer for the question imagine you had
[0:04] this model if you had such a model you
[0:04] could use it to produce good answers the
[0:04] way you would do
[0:04] is you know produce the pumpt and then
[0:04] search through the space of possible
[0:04] answers for one that minimizes that
[0:04] number um that&#39;s called an energy based
[0:04] model but that energy based model would
[0:04] need the the model constructed by the
[0:04] llm well so uh really what you need to
[0:04] do would be to not uh search over
[0:04] possible strings of text that minimize
[0:04] that uh energy but what you would do it
[0:04] do this in abstract representation space
[0:04] so in in sort of the space of abstract
[0:04] thoughts you would elaborate a thought
[0:04] right using this process of minimizing
[0:04] the output of your your model okay which
[0:04] is just a scalar um it&#39;s an optimization
[0:04] process right so now the the way the
[0:04] system produces its answer is through
[0:04] optimization um by you know minimizing
[0:04] an objective function basically right uh
[0:04] and this is we&#39;re talking about
[0:04] inference we&#39;re not talking about
[0:04] training right the system has been
[0:04] trained already so now we have an
[0:04] abstract representation of the thought
[0:04] of the answer representation of the
[0:04] answer we feed that to basically an auto
[0:04] regive decoder uh which can be very
[0:04] simple that turns this into a text that
[0:04] expresses this thought okay so that that
[0:04] in my opinion is the blueprint of future
[0:04] dialog systems um they will think about
[0:04] their answer plan their answer by
[0:04] optimization before turning it into
[0:04] text uh and that is tur complete can you
[0:04] explain exactly what the optimization
[0:04] problem there is like what&#39;s the
[0:04] objective function just link on it you
[0:04] you kind of briefly described it but
[0:04] over what space are you optimizing the
[0:04] space of
[0:04] representations those abstract
[0:04] representation abstract repr so you have
[0:04] an abstract representation inside the
[0:04] system you have a prompt The Prompt goes
[0:04] through an encoder produces a
[0:04] representation perhaps goes through a
[0:04] predictor that predicts a representation
[0:04] of the answer of the proper answer but
[0:04] that representation may not be a good
[0:04] answer because there might there might
[0:04] be some complicated reasoning you need
[0:04] to do right so um so then you have
[0:04] another process that takes the
[0:04] representation of the answers and
[0:04] modifies it so as to
[0:04] minimize uh a cost function that
[0:04] measures to what extent the answer is a
[0:04] good answer for the question now we we
[0:04] sort of ignore the the fact for I mean
[0:04] the issue for a moment of how you train
[0:04] that system to measure whether an answer
[0:04] is a good answer for for a question but
[0:04] suppos such a system could be created
[0:04] but what&#39;s the process this kind of
[0:04] search like process it&#39;s a optimization
[0:04] process you can do this if if the entire
[0:04] system is
[0:04] differentiable that scalar output is the
[0:04] result of you know running through some
[0:04] neural net mhm uh running the answer the
[0:04] representation of the answer to some
[0:04] neural net then by gradient descent by
[0:04] back propag back propagating gradients
[0:04] you can figure out like how to modify
[0:04] the representation of the answer so has
[0:04] to minimize that so that&#39;s still a
[0:04] gradient based it&#39;s gradient based
[0:04] inference so now you have a
[0:04] representation of the answer in abstract
[0:04] space now you can turn it into
[0:04] text right and the cool thing about this
[0:04] is that the representation now can be
[0:04] optimized through gr and descent but so
[0:04] is independent of the language in which
[0:04] you&#39;re going to express the
[0:04] answer right so you&#39;re operating in the
[0:04] substract representation I mean this
[0:04] goes back to the Joint embedding right
[0:04] that is better to work in the uh in the
[0:04] space of I don&#39;t know to romanticize the
[0:04] notion like space of Concepts versus
[0:04] yeah the space of
[0:04] concrete sensory information
[0:04] right okay but this can can this do
[0:04] something like reasoning which is what
[0:04] we&#39;re talking about well not really in
[0:04] only in a very simple way I mean
[0:04] basically you can think of those things
[0:04] that&#39;s doing the kind of optimization I
[0:04] was I was talking about except the
[0:04] optimize in a discrete space which is
[0:04] the space of possible sequences of of
[0:04] tokens and they do it they do this
[0:04] optimization in a horribly inefficient
[0:04] way which is generate a lot of
[0:04] hypothesis and then select the best ones
[0:04] and that&#39;s
[0:04] incredibly wasteful in terms of uh
[0:04] computation because you have you run you
[0:04] basically have to run your LM for like
[0:04] every you know Genera sequence um and
[0:04] it&#39;s incredibly wasteful um so it&#39;s much
[0:04] better to do an optimization in
[0:04] continuous space where you can do great
[0:04] and descent as opposed to like generate
[0:04] tons of things and then select the best
[0:04] you just iteratively refine your answer
[0:04] to to go towards the best right that&#39;s
[0:04] much more efficient you can only do this
[0:04] in continuous spaces with differentiable
[0:04] functions you&#39;re talking about the
[0:04] reasoning like ability to think deeply
[0:04] or to reason
[0:04] deeply how do you know
[0:04] what is an
[0:04] answer uh that&#39;s better or worse based
[0:04] on deep reasoning right so then we&#39;re
[0:04] asking the question of conceptually how
[0:04] do you train an energy base model right
[0:04] so en based model is a function with a
[0:04] scalar output just a
[0:04] number you give it two inputs X and Y
[0:04] and it tells you whether Y is compatible
[0:04] with X or not X You observe let&#39;s say
[0:04] it&#39;s a pump image video whatever and why
[0:04] is a proposal for an answer a
[0:04] continuation of video um you know
[0:04] whatever and it tells you whether Y is
[0:04] compatible with X and the way it tells
[0:04] you that Y is compatible with X is that
[0:04] the output of that function would be
[0:04] zero if Y is compatible with X it would
[0:04] be a positive number non zero if Y is
[0:04] not compatible with X okay how do you
[0:04] train a system like this at a completely
[0:04] General level is you show it pairs of X
[0:04] and Y that are compatible a question and
[0:04] the corresponding answer and you train
[0:04] the parameters of the big neural net
[0:04] inside U to produce
[0:04] zero okay now that doesn&#39;t completely
[0:04] work because the system might decide
[0:04] well I&#39;m just going to say zero for
[0:04] everything so now you have to have a
[0:04] process to make sure that for a a wrong
[0:04] y the energy would be larger than zero
[0:04] and there you have two options one is
[0:05] contrastive Method so contrastive method
[0:05] is you show an X and a bad
[0:05] Y and you tell the system well that&#39;s
[0:05] you know give a high energy to this like
[0:05] push up the energy right change the
[0:05] weights in the neural net that comput
[0:05] the energy so that it goes
[0:05] up um so that&#39;s contrasting methods the
[0:05] problem with this is if the space of Y
[0:05] is large the number of such contrasty
[0:05] samples you&#39;re going to have to
[0:05] show is
[0:05] gigantic but people do this they they do
[0:05] this when you train a system with RF
[0:05] basically what you&#39;re training is what&#39;s
[0:05] called a reward model which is basically
[0:05] an objective function that tells you
[0:05] whether an answer is good or bad and
[0:05] that&#39;s basically exactly what what this
[0:05] is so we already do this to some extent
[0:05] we&#39;re just not using it for inference
[0:05] we&#39;re just using it for training um uh
[0:05] there is another set of methods which
[0:05] are non contrastive and I prefer those
[0:05] uh and those non-contrastive method
[0:05] basically say
[0:05] uh okay the energy function needs to
[0:05] have low energy on pairs of xys that are
[0:05] compatible that come from your training
[0:05] set how do you make sure that the energy
[0:05] is going to be higher everywhere
[0:05] else and the way you do this is by um
[0:05] having a regularizer a Criterion a term
[0:05] in your cost function that basically
[0:05] minimizes the volume of space that can
[0:05] take low
[0:05] energy and the precise way to do this is
[0:05] all kinds of different specific ways to
[0:05] do this depending on the architecture
[0:05] but that&#39;s the basic principle so that
[0:05] if you push down the energy function for
[0:05] particular regions in the XY space it
[0:05] will automatically go up in other places
[0:05] because there&#39;s only a limited volume of
[0:05] space that can take low energy okay by
[0:05] the construction of the system or by the
[0:05] regularizer regularizing function we&#39;ve
[0:05] been talking very generally but what is
[0:05] a good X and a good Y what is a good
[0:05] representation
[0:05] of X and Y because we&#39;ve been talking
[0:05] about language and if you just take
[0:05] language directly that presumably is not
[0:05] good so there has to be some kind of
[0:05] abstract representation of
[0:05] ideas yeah so you I mean you can do this
[0:05] with language directly um by just you
[0:05] know X is a text and Y is a continuation
[0:05] of that text yes um or X is a question
[0:05] why is the answer but you&#39;re you&#39;re
[0:05] saying that&#39;s not going to take it I
[0:05] mean that&#39;s going to do what llms are
[0:05] doing well no it depends on how you how
[0:05] the internal structure of the system is
[0:05] built if the if the internal structure
[0:05] of the system is built in such a way
[0:05] that inside of this system there is a
[0:05] latent variable it&#39;s called Z that
[0:05] uh you can manipulate so as to minimize
[0:05] the output
[0:05] energy then that Z can be viewed as a
[0:05] representation of a good answer that you
[0:05] can translate into a y that is a good
[0:05] answer so this kind of system could be
[0:05] train in a very similar way very similar
[0:05] way but you have to have this way of
[0:05] preventing collapse of of ensuring that
[0:05] you know there is high energy for things
[0:05] you don&#39;t train it on um and and
[0:05] currently it&#39;s it&#39;s very implicit in llm
[0:05] is done in a way that people don&#39;t
[0:05] realize it&#39;s being done but is it is
[0:05] being done is is due to the fact that
[0:05] when you give a high probability to a a
[0:05] word automatically you give low
[0:05] probability to other words because you
[0:05] only have a finite amount of probability
[0:05] to go around right there have to some to
[0:05] one so when you minimize the cross
[0:05] entropy or whatever when you train the
[0:05] your llm to produce the to predict the
[0:05] next
[0:05] word uh you&#39;re increasing the
[0:05] probability your system will give to the
[0:05] correct word but you&#39;re also decreasing
[0:05] the probability will give to the
[0:05] incorrect words now indirectly that
[0:05] gives a low probability to a high
[0:05] probability to sequences of words that
[0:05] are good and low probability to
[0:05] sequences of words that are bad but it&#39;s
[0:05] very direct mhm and it&#39;s not it&#39;s not
[0:05] obvious why this actually works at all
[0:05] but um because you&#39;re not doing it on a
[0:05] joint probability of all the symbols in
[0:05] a in a sequence you&#39;re just doing it
[0:05] kind of uh you sort of factorize that
[0:05] probability in terms of conditional
[0:05] probabilities over successive tokens so
[0:05] how do you do this for visual data so
[0:05] we&#39;ve been doing this with all jepa
[0:05] architectures basically the joint I so
[0:05] uh there are the compatibility between
[0:05] two things is uh you know here&#39;s here&#39;s
[0:05] an image or a video here&#39;s a corrupted
[0:05] shifted or transformed version of that
[0:05] image or video or masked okay and then
[0:05] uh the energy of the system is the
[0:05] prediction error of
[0:05] the
[0:05] representation uh the the predicted
[0:05] representation of the Good Thing versus
[0:05] the actual representation of the good
[0:05] thing right so so you run the corrupted
[0:05] image to the system predict the
[0:05] representation of the the good input
[0:05] uncorrupted and then compute the
[0:05] prediction error that&#39;s the energy of
[0:05] the system so this system will tell you
[0:05] this is a
[0:05] good you know if this is a good image
[0:05] and this is a corrupted version it will
[0:05] give you Zero Energy if those two things
[0:05] are effectively one of them is a
[0:05] corrupted version of the other give you
[0:05] a high energy if if the two images are
[0:05] completely different and hopefully that
[0:05] whole process gives you a really nice
[0:05] compressed representation of of reality
[0:05] of visual reality and we know it does
[0:05] because then we use those for our
[0:05] presentations as input to a
[0:05] classification system something system
[0:05] works really nicely okay well so to
[0:05] summarize you recommend in a in a in a
[0:05] spicy way that only Yan laon can you
[0:05] recommend that we abandon generative
[0:05] models in favor of joint embedding
[0:05] architectures yes abandon autor
[0:05] regressive generation yes abandon Pro
[0:05] this feels like a court testimony uh
[0:05] abandon probabilistic models in favor of
[0:05] energy based models as we talked about
[0:05] abandon contrastive methods in favor of
[0:05] regularized methods and uh let me ask
[0:05] you about this you&#39;ve been for a while a
[0:05] Critic of reinforcement learning yes so
[0:05] what uh the last recommendation is that
[0:05] we abandon RL in favor of Mo model
[0:05] predictive control as you were talking
[0:05] about and only use RL when planning
[0:05] doesn&#39;t yield the pr predicted outcome
[0:05] and uh we use RL in that case to adjust
[0:05] the world model or the critic yes so uh
[0:05] you mentioned uh rlf reinforcement
[0:05] learning with human feedback uh why do
[0:05] you still hate uh reinforcement learning
[0:05] I don&#39;t hate reinforcement learning and
[0:05] I think all of I think it should not be
[0:05] uh abandoned completely but I think its
[0:05] use should be minimized because it&#39;s
[0:05] incredibly inefficient in terms of
[0:05] samples and so the the proper way to
[0:05] train a system is to First just have it
[0:05] learn uh good representations of the
[0:05] world and World models from Mostly
[0:05] observation maybe a little bit of
[0:05] interactions and then steered based on
[0:05] that if the representation is good then
[0:05] the adjustment should be
[0:05] minimal yeah now there&#39;s two things you
[0:05] can use if you&#39;ve learned a world model
[0:05] you can use the world model to plan a
[0:05] sequence of actions to arrive at a
[0:05] particular
[0:05] objective you don&#39;t need a unless the
[0:05] way you measure whether you succeed
[0:05] might be inexact your idea of you know
[0:05] whether you&#39;re going to fall from your
[0:05] bike might be wrong or whether the
[0:05] person you&#39;re fighting with MMA is going
[0:05] to do something and do something else um
[0:05] so there uh so there&#39;s two ways you can
[0:05] be wrong either your your objective
[0:05] function does not reflect the actual
[0:05] objective function you want to optimize
[0:05] or your world model is
[0:05] inaccurate right so you didn&#39;t you the
[0:05] prediction you were making about what
[0:05] was going to happen in the world is
[0:05] inaccurate so if you want to adjust your
[0:05] world model while you are operating the
[0:05] world or your objective function that is
[0:05] basically in the realm of RL this is
[0:05] what RL deal deals with uh to some
[0:05] extent right so adjust your world model
[0:05] and the way to adjust your world model
[0:05] even in advance uh is to explore parts
[0:05] of the space where your world model
[0:05] where you know that your world model is
[0:05] inaccurate that&#39;s called curiosity
[0:05] basically or play right when you play
[0:05] you kind of explore part of the St space
[0:05] that
[0:05] um you know you don&#39;t want to do in for
[0:05] real because it might be dangerous but
[0:05] but you can adjust your world model uh
[0:05] without killing yourself basically um so
[0:05] that&#39;s what you want to use ourl for
[0:05] when when when it comes time to learning
[0:05] a particular task you already have all
[0:05] the good representations you already
[0:05] have your world model but you want you
[0:05] need to adjust it for the situation at
[0:05] hand that&#39;s when you use RL why do you
[0:05] think rhf works so well this
[0:05] reinforcement learning with human
[0:05] feedback why did it have such a
[0:05] transformational effect on large
[0:05] language models that before what&#39;s had
[0:05] the transformational effect is human
[0:05] feedback there&#39;s many ways to use it and
[0:05] some of it is just purely supervised
[0:05] actually it&#39;s not really reinforcement
[0:05] rning so it&#39;s the the HF it&#39;s the HF
[0:05] yeah uh and then there is ways to use
[0:05] human feedback right so you can you can
[0:05] ask humans to rate answers multiple
[0:05] answers that are produced by World model
[0:05] and uh and and then what you do is you
[0:05] train an objective function to predict
[0:05] that
[0:05] rating and then you can use that
[0:05] objective function to predict you know
[0:05] whether an answer is good and you can
[0:05] back propagate gradient through this to
[0:05] find you new system so that it only
[0:05] produces High highly rated
[0:05] answers okay so that&#39;s
[0:05] one way so that&#39;s like in ourl that
[0:05] means uh training what&#39;s called a reward
[0:05] model right so something that you know
[0:05] basically a small on that that estimates
[0:05] to what extent an answer is good right
[0:05] it&#39;s very similar to The Objective I was
[0:05] I was talking about talking about
[0:05] earlier for planning except now it&#39;s not
[0:05] used for planning it&#39;s it&#39;s used for
[0:05] fine-tuning your
[0:05] system I think it would be much more
[0:05] efficient to use it for planning but um
[0:05] but but uh currently it&#39;s used to fine
[0:05] tune the parameters the system now there
[0:05] there&#39;s several ways to do this um you
[0:05] know some of some of them are supervised
[0:05] you just you know ask a human person
[0:05] like what is a good answer for this
[0:05] right then you just type the answer um
[0:05] uh I mean there&#39;s there&#39;s lots of ways
[0:05] that those systems are are being
[0:05] adjusted now a lot of people have been
[0:05] very critical of the recently released
[0:05] Google&#39;s Gemini
[0:05] 1.5 for essentially in my words I could
[0:05] say super woke woke in the negative
[0:05] connotation of that word uh there is
[0:05] some almost hilariously absurd things
[0:05] that it does like it modifies history uh
[0:05] like generating images of a u black
[0:05] George Washington or um perhaps more
[0:05] seriously something that you commented
[0:05] on Twitter which is refusing to comment
[0:05] on or generate images of U or even
[0:05] descriptions of tianan square or the the
[0:05] Tank Man one of the most sort of
[0:05] legendary protest
[0:05] images in history and of course these
[0:05] images are highly censored by the
[0:05] Chinese government and therefore
[0:05] everybody start asking questions of what
[0:05] is the process of
[0:05] uh designing these llms what is what is
[0:05] what is the role of censorship in these
[0:05] all that kind of stuff so you uh
[0:05] commented on Twitter saying that open
[0:05] source is the answer yeah essentially so
[0:05] um can you
[0:05] explain I I actually made that comment
[0:05] on just about every Social Network I can
[0:05] and I&#39;ve I I&#39;ve uh I&#39;ve made that point
[0:05] multiple times in in various forums um
[0:05] uh here&#39;s my my point of view on this uh
[0:05] people can complain that AI systems are
[0:05] biased and they generally are biased by
[0:05] the distribution of the training data
[0:05] that they&#39;ve been trained on um that
[0:05] reflects biases in
[0:05] society um and that is potentially
[0:05] offensive to some
[0:05] people or potentially not and and some
[0:05] techniques to
[0:05] debias then become offensive to some
[0:05] people um because of you know historical
[0:05] uh incorrectness and things like that
[0:05] um and so you can ask the question you
[0:05] can ask two questions the first question
[0:05] is is it possible to produce an AI
[0:05] system that is not biased and the answer
[0:05] is absolutely not and it&#39;s not because
[0:05] of
[0:05] technological uh challenges although
[0:05] there are technological challenges to
[0:05] that it&#39;s
[0:05] because bias is in the eye of the
[0:05] beholder um different people may have
[0:05] different ideas about what constitutes
[0:05] bias um you know for a lot of uh a lot
[0:05] of things I mean there are facts that
[0:05] are you know indisputable but there are
[0:05] a lot of opinions or or things that can
[0:05] be expressed in different ways U and so
[0:05] you cannot have an unbiased system
[0:05] that&#39;s just an
[0:05] impossibility um and so what&#39;s
[0:05] the what&#39;s the answer to this and the
[0:05] the answer is the same answer that we
[0:05] found in Liberal democracy about the
[0:05] press the Press to be free and uh
[0:05] diverse we have free speech for a good
[0:05] reason is because uh we don&#39;t want all
[0:05] of our information to be uh to come from
[0:05] a unique Source um because that&#39;s
[0:05] opposite to the whole idea of democracy
[0:05] and uh you know progress of ideas and
[0:05] even science right in in science people
[0:05] have to argue for different opinions and
[0:05] and science makes progress when people
[0:05] disagree and they come up with an answer
[0:05] and you know a consensus forms right and
[0:05] it&#39;s true in all democracies around the
[0:05] world so there is a
[0:05] future which is already happening where
[0:05] every single one of our interaction with
[0:05] the digital world will be mediated by ai
[0:05] ai systems AI assistants right we&#39;re
[0:05] going to have smart glasses you can
[0:05] already buy them from MAA the ran MAA
[0:05] where um you know you can talk to them
[0:05] and they are connected with an llm and
[0:05] you can get answers on any question you
[0:05] have or you can be looking at a monument
[0:05] and there is a camera in the in the
[0:05] system that in in the glasses you can
[0:05] ask it like can what can you tell me
[0:05] about this uh building or this Monument
[0:05] you can be looking at a menu in a
[0:05] foreign language and I thing will
[0:05] translate it for you or we can do real
[0:05] time translation if we speak different
[0:05] languages so a lot of our interactions
[0:05] with the digital world are going to be
[0:05] mediated by those systems in the near
[0:05] future
[0:05] um you know increasingly the search
[0:05] engines that we&#39;re going to use are not
[0:05] going to be search engines they&#39;re going
[0:05] to be uh dialog systems that would just
[0:05] ask a question and it will answer and
[0:05] then point you to perhaps appropriate
[0:05] reference for it but here is the thing
[0:05] we cannot afford those systems to come
[0:05] from a handful of companies on the west
[0:05] coast of the
[0:05] US because those systems will constitute
[0:05] the repository of all human knowledge
[0:05] and we cannot have that be controlled by
[0:05] a small number of people right it has to
[0:05] be diverse for the same reason the Press
[0:05] has to be
[0:05] diverse so how do we get a diverse set
[0:05] of AI
[0:05] assistant um it&#39;s very expensive and
[0:05] difficult to train a based model right a
[0:05] based llm at the moment you know in the
[0:05] future it might be something different
[0:05] but at the moment that&#39;s an
[0:05] llm uh so only a few companies can do
[0:05] this
[0:05] properly and
[0:05] if some of those Tob systems are open
[0:05] source anybody can use them anybody can
[0:05] fine-tune them um if we put in place
[0:06] some systems that allows any group of
[0:06] people whether they are um individual
[0:06] citizens groups of
[0:06] citizens government organizations
[0:06] NOS uh companies whatever to take those
[0:06] open source
[0:06] uh systems AI systems and fine-tune them
[0:06] for their own purpose on their own
[0:06] data then we&#39;re going to have a very
[0:06] large diversity of uh different AI
[0:06] systems that are specialized for all of
[0:06] those things right so I tell you I
[0:06] talked to the French government quite a
[0:06] bit and the French government will not
[0:06] accept that the digital diet of all
[0:06] their citizen be controlled by three
[0:06] companies on the west coast of the US
[0:06] that&#39;s just not acceptable it&#39;s a danger
[0:06] to democracy regardless of how
[0:06] well-intentioned those companies are
[0:06] right um and so uh and it&#39;s also a
[0:06] danger to local culture to values to
[0:06] language right I was talking with
[0:06] um uh the uh founder of infosis in India
[0:06] um he&#39;s funding a project to fine tune
[0:06] Lama 2 the open source model produced by
[0:06] by meta so that Lama 2 speak all 22
[0:06] official languages in India it&#39;s very
[0:06] important for people in India I was
[0:06] talking to a former colleague of mine
[0:06] Mustafa used to be a scientist at fair
[0:06] and then moved back to Africa I created
[0:06] a research lab for Google in Africa and
[0:06] now is as a new startup Kara and what
[0:06] he&#39;s trying to do is basically have llm
[0:06] that speak the local languages in Sagal
[0:06] so that people can have access to
[0:06] medical information because they don&#39;t
[0:06] have access to doctors it&#39;s a very small
[0:06] number of doctors per per capita in the
[0:06] in syal um I mean you can&#39;t have any of
[0:06] this unless you have open source
[0:06] platforms so with open source platforms
[0:06] you can have ai systems that are not
[0:06] only diverse in terms of political
[0:06] opinions or things of that type but in
[0:06] terms of uh uh language culture value
[0:06] systems political opinions
[0:06] um technical abilities in various
[0:06] domains and you can have an industry an
[0:06] ecosystem of companies that fine-tune
[0:06] those open source systems for vertical
[0:06] applications in Industry right you you
[0:06] have I don&#39;t know a publisher has
[0:06] thousands of books and they want to
[0:06] build a system that allows a customer to
[0:06] just just ask a question about any about
[0:06] the content of any of their books you
[0:06] need to train on their proprietary data
[0:06] right um You have a company we have one
[0:06] within meta it&#39;s called metam and it&#39;s
[0:06] basically an llm that can answer any
[0:06] question about internal uh stuff about
[0:06] about the the company U very useful a
[0:06] lot of companies want this right a lot
[0:06] of companies want this not just for
[0:06] their employees but also for their
[0:06] customers to take care of the customers
[0:06] so the only way you&#39;re going to have an
[0:06] AI industry the only way you&#39;re going to
[0:06] have ai systems that are not uniquely
[0:06] biased is if you have open source
[0:06] platforms on top of which uh any group
[0:06] Can U build specialized systems
[0:06] so the the direction of of inevitable
[0:06] direction of history is that the vast
[0:06] majority of AI systems will be built on
[0:06] top of Open Source platforms so that&#39;s a
[0:06] beautiful Vision so meaning
[0:06] like a company like meta or Google or so
[0:06] on should take only minimal fine-tuning
[0:06] steps after the building the foundation
[0:06] pre-trained model as few steps as
[0:06] possible
[0:06] basically can meta afford to do that no
[0:06] so I don&#39;t know if you you know this but
[0:06] companies are supposed to make money
[0:06] somehow and uh open source is is is like
[0:06] giving away I don&#39;t know Mark made a
[0:06] video Mark
[0:06] Zuckerberg um very sexy video talking
[0:06] about
[0:06] 350,000 Nvidia
[0:06] h100s yeah the the math of that is just
[0:06] for the gpus that&#39;s 100
[0:06] billion um plus the infrastructure for
[0:06] training everything so I&#39;m no business
[0:06] guy but how do you make money on that so
[0:06] the division you payt is a really
[0:06] powerful one but how is it possible to
[0:06] make money okay so you have several
[0:06] business models right the business model
[0:06] that uh MAA is built
[0:06] around
[0:06] is um youer a
[0:06] service and the the financing of that
[0:06] service is uh either through ads or
[0:06] through business customers so for
[0:06] example if you have an llm that uh you
[0:06] know can help a mom and pop pizza place
[0:06] um by you know talking to their
[0:06] customers through WhatsApp and so the
[0:06] customers can just order a pizza and the
[0:06] system will just you know ask them like
[0:06] what topping do you want or what sites
[0:06] blah blah blah um the business will pay
[0:06] for that okay that&#39;s a
[0:06] model
[0:06] um and otherwise you know if it&#39;s a
[0:06] system that is on the more kind of
[0:06] classical Services it can be uh ad
[0:06] supported or you know there&#39;s several
[0:06] models but the point
[0:06] is uh if you have a big enough um
[0:06] potential customer base and you need to
[0:06] build that
[0:06] system anyway for
[0:06] them it doesn&#39;t hurt you to actually
[0:06] distribute it in open source again I&#39;m
[0:06] no business guy but if you release the
[0:06] open source model then other people can
[0:06] do the same kind of
[0:06] task and compete on it basically provide
[0:06] fine-tune models for businesses the is
[0:06] the bet that meta is making by the way
[0:06] I&#39;m a huge fan of all this but is is the
[0:06] bet that meta is making is like we&#39;ll do
[0:06] a better job of it well no the the bet
[0:06] is is more we have we already have a
[0:06] huge user base and customer base ah
[0:06] right right so it&#39;s going to be useful
[0:06] to them whatever we offer them is going
[0:06] to be useful and there is a way to
[0:06] derive revenue from this
[0:06] uh and it doesn&#39;t hurt that you know we
[0:06] provide that
[0:06] system or the Bas the base model right
[0:06] the foundation model uh in open source
[0:06] for others to build applications on top
[0:06] of it too if those applications are not
[0:06] to be useful for our customers we can
[0:06] just buy it from them um uh it could be
[0:06] that they will improve the platform in
[0:06] fact we see this already um I mean there
[0:06] is you know literally millions of
[0:06] downloads of Lama 2 and thousands of
[0:06] people who have you know provided ideas
[0:06] about how to make it better um so you
[0:06] know this this clearly accelerates
[0:06] progress to make the system available to
[0:06] a sort of a a wide community of people
[0:06] and and there is literally thousands of
[0:06] businesses who are building applications
[0:06] with it so um
[0:06] so our ability to meta&#39;s ability to
[0:06] derive revenue from this technology is
[0:06] not impaired
[0:06] uh by the distribution of it of based
[0:06] models in open source the fundamental
[0:06] criticism that Gemini is getting is that
[0:06] as you point out on the west coast just
[0:06] to just to clarify we&#39;re currently in
[0:06] the east coast where I would suppose
[0:06] meta AI headquarters would
[0:06] be so there uh strong words about the
[0:06] West Coast but uh I guess the issue that
[0:06] happens is I think it&#39;s fair to say that
[0:06] most tech people have
[0:06] a political affiliation with the left
[0:06] wing they&#39;re they lean left and so the
[0:06] problem that people are criticizing
[0:06] Gemini with is that there&#39;s in that
[0:06] debiasing process that you mentioned
[0:06] that their
[0:06] ideological
[0:06] lean becomes
[0:06] obvious uh is this something that could
[0:06] be
[0:06] escaped you&#39;re saying open source is the
[0:06] only way have have you witnessed this
[0:06] kind of ideological lean that makes
[0:06] engineering difficult no I don&#39;t think
[0:06] it has to do I don&#39;t think the issue has
[0:06] to do with the political leaning of the
[0:06] people designing those systems it has to
[0:06] do with the uh acceptability or
[0:06] political leanings of the their customer
[0:06] based audience right so a big company
[0:06] cannot afford to offend too many people
[0:06] so they&#39;re going to make sure that
[0:06] whatever product they put out is safe
[0:06] whatever that means
[0:06] and and it&#39;s very possible to overdo it
[0:06] and it&#39;s also very possible to it&#39;s
[0:06] impossible to do it properly for
[0:06] everyone you&#39;re not going to satisfy
[0:06] everyone so that&#39;s what I said before
[0:06] you cannot have a system that is
[0:06] unbiased is perceived as unbiased by
[0:06] everyone it&#39;s going to be you know you
[0:06] push it in one way one set of people are
[0:06] going to see it as biased and then you
[0:06] push it the other way and another set of
[0:06] people is going to see it that&#39;s biased
[0:06] and then in addition to this there&#39;s the
[0:06] issue of if you push the system perhaps
[0:06] a little too far in One Direction it&#39;s
[0:06] going to be non-factual right you&#39;re
[0:06] going to have you know you know black
[0:06] Nazi uh soldiers in the we should we
[0:06] should mention image generation of of uh
[0:06] black Nazi soldiers which is not
[0:06] factually accurate right and can be
[0:06] offensive for some people as well right
[0:06] so
[0:06] uh so you know it&#39;s going to be
[0:06] impossible to kind of produce systems
[0:06] that are unbiased for everyone so the
[0:06] only solution that I see is diversity
[0:06] and diversity in the full meaning of
[0:06] that word diversity of in every possible
[0:06] way yeah uh Mark Andre just tweeted
[0:06] today let me do a tldr the conclusion is
[0:06] only startups and open source can avoid
[0:06] the issue that he&#39;s highlighting with
[0:06] big Tech he&#39;s asking can big Tech
[0:06] actually field generative AI products
[0:06] one ever escalating demands from
[0:06] internal Act activists employee mobs
[0:06] crazed Executives broken boards pressure
[0:06] groups extremist Regulators government
[0:06] agencies the press in quotes experts and
[0:06] everything uh corrupting the output two
[0:06] constant risk of generating a bad answer
[0:06] or drawing a bad picture or rendering a
[0:06] bad video who knows what is going to say
[0:06] or do at any moment three legal exposure
[0:06] product liability slander election law
[0:06] many other things and so on anything
[0:06] that makes Congress
[0:06] mad four continuous attempts to tighten
[0:06] grip un acceptable output degrade the
[0:06] model like how good it actually is uh in
[0:06] terms of usable and pleasant to use and
[0:06] effective and all that kind of stuff and
[0:06] five publicity of bad text images video
[0:06] actually puts those examples into the
[0:06] training data for the next version so on
[0:06] so he just highlights how difficult this
[0:06] is from all kinds of people being
[0:06] unhappy as you said you can&#39;t create a
[0:06] system that makes everybody happy yes uh
[0:06] so if you&#39;re going to do the fine tun
[0:06] yourself and keep a close
[0:06] Source essentially the problem there is
[0:06] then trying to minimize the number of
[0:06] people who are going to be unhappy y um
[0:06] and you&#39;re saying like the only that
[0:06] that almost impossible to do right and
[0:06] it&#39;s the better ways to do open source
[0:06] phasically yeah I mean he&#39;s Mark is
[0:06] right about uh a number number of things
[0:06] that you list that indeed scare um large
[0:06] companies uh you know certainly
[0:06] Congressional investigations is one of
[0:06] them legal liability uh you know uh
[0:06] making things that get people to you
[0:06] know hurt themselves or hurt others like
[0:06] you know um big companies are really
[0:06] careful about not um producing things of
[0:06] this type and
[0:06] um because they have you know they want
[0:06] to hurt anyone first of all and then
[0:06] second they want to preserve their
[0:06] business so um it&#39;s essentially
[0:06] impossible for systems like this that
[0:06] can inevitably formulate political
[0:06] opinions and you know opinions about
[0:06] various things that may be political or
[0:06] not but that people may disagree about
[0:06] about you know moral issues and you know
[0:06] um things about like questions about
[0:06] religion and things like that right or
[0:06] or cultural issues that people from
[0:06] different communities would disagree
[0:06] with in the first place um so there&#39;s
[0:06] only kind of a relatively small number
[0:06] of things that people
[0:06] will uh sort of agree on you know basic
[0:06] principles but beyond that if you if you
[0:06] want those systems to be useful they
[0:06] will necessarily have to uh
[0:06] offend a number of people
[0:06] inevitably and so open source is just
[0:06] better and then diversity is better
[0:06] right and open source enables diversity
[0:06] that&#39;s right open source enables
[0:06] diversity that this can be fascinating
[0:06] world where
[0:06] if it&#39;s true that the open source world
[0:06] if meta leads the way and creates this
[0:06] kind of Open Source Foundation model
[0:06] world there&#39;s going to be like
[0:06] governments will have a find new model
[0:06] and yeah and and then
[0:06] potentially uh you know people that vote
[0:06] left and right will have their own model
[0:06] and preference and be able to choose and
[0:06] it will potentially divide us even more
[0:06] but that&#39;s on us humans we get to figure
[0:06] out basically the technology enables
[0:06] humans to human more effectively and all
[0:06] the difficult ethical questions that
[0:06] humans raise will just it&#39;ll um leave it
[0:06] up to us to figure it out yeah I mean
[0:06] there are some limits to what you know
[0:06] the same way there are limits to free
[0:06] speech there has to be some limit to the
[0:06] kind of stuff that those systems might
[0:06] be authorized
[0:06] to um to produce um you know some guard
[0:06] rails so I mean that&#39;s one thing I&#39;ve
[0:06] been interested in which is uh in the
[0:06] type of architecture that we were
[0:06] discussing before where the output of a
[0:06] system is the result of an inference to
[0:06] satisfy an objective that objective can
[0:06] include guard
[0:06] rails and uh we can put guard rails in
[0:06] open source systems I mean if we
[0:06] eventually have systems that are built
[0:06] with this blueprint uh we can put guard
[0:06] rails uh in those systems that guarantee
[0:06] that there is sort of a minimum set of
[0:06] guardrails that make the system non-
[0:06] dangerous and nontoxic Etc you know
[0:06] basic things that everybody would agree
[0:06] on um and and then you know the the fine
[0:06] tuning that people will add or the
[0:06] additional guardwell that people will
[0:06] add will kind of cater to their um
[0:06] Community whatever it is and yeah the
[0:06] fine doing will be more about the gray
[0:06] areas of what is hate speech what is
[0:06] dangerous and all that kind of stuff I
[0:06] mean you&#39;ve different value systems
[0:06] value systems I mean like uh but still
[0:06] even with the objectives of how to build
[0:06] a bioweapon for example I think
[0:06] something you&#39;ve commented on or at
[0:06] least there&#39;s a
[0:06] paper where a collection of researchers
[0:06] is trying to understand the social
[0:06] impacts of these
[0:06] llms and I guess one threshold is nice
[0:06] is like does the llm make it any easier
[0:06] than a than a search would like a Google
[0:06] search would right so the increasing uh
[0:06] number of studies on this seems to point
[0:06] to the fact that it doesn&#39;t help so
[0:06] having an llm doesn&#39;t help you design or
[0:06] build a bioweapon or a chemical weapon
[0:06] if you already have access to uh you
[0:06] know a search engine and a library uh
[0:06] and and so the the S of increased
[0:06] information you get or the ease with
[0:06] which you get it doesn&#39;t really help you
[0:06] um that&#39;s the first thing the second
[0:06] thing is it&#39;s one thing to have a list
[0:06] of instructions of how to make a
[0:06] chemical weapon for example or bioweapon
[0:06] it&#39;s another thing to actually build it
[0:06] and it&#39;s much harder than you might
[0:06] think and then LM will not help you with
[0:06] that um in fact you know nobody in the
[0:06] world not even like you know countries
[0:06] use bioweapons because most of the time
[0:06] they have no idea how to protect their
[0:06] own populations against it so um so it&#39;s
[0:06] too dangerous actually to kind of ever
[0:06] use um and it&#39;s in fact banned by uh
[0:07] International treaties um chemical
[0:07] weapons is different it&#39;s also banned by
[0:07] treaties U but um uh but it&#39;s the same
[0:07] problem it&#39;s difficult to use in
[0:07] situations that doesn&#39;t turn against the
[0:07] perpetrators but we could ask you on
[0:07] musk like I can I can give you a very
[0:07] precise list of instructions of how you
[0:07] build a rocket engine M and even if you
[0:07] have a team of 50 Engineers that of re
[0:07] experienc building it you&#39;re still going
[0:07] to have to blow up a dozen of them
[0:07] before you get when that
[0:07] works um and you know it&#39;s the same with
[0:07] uh you know chemical weapons or biow
[0:07] weapons or things like this it requires
[0:07] expertise you know in the in the real
[0:07] world that n is not going to help you
[0:07] with and it requires even the common
[0:07] sense expertise that we&#39;ve been talking
[0:07] about which is how to take uh
[0:07] language-based instructions and
[0:07] materialize them in the physical world
[0:07] requires a lot of knowledge that&#39;s not
[0:07] in the instructions yeah exactly a lot
[0:07] of biologists have posted on this
[0:07] actually in response to those things
[0:07] saying like do you realize how hard it
[0:07] is to actually do the the lab work I you
[0:07] know this is not
[0:07] trivial yeah and that&#39;s Hans Marik comes
[0:07] comes to light once again uh just the
[0:07] Linger on llama you know Mark announced
[0:07] that llama 3 is coming out eventually I
[0:07] don&#39;t think there&#39;s a release date but
[0:07] what what are you most excited about
[0:07] first of all llama 2 that&#39;s already out
[0:07] there and maybe the future llama 3 4 5 6
[0:07] 10 just the the future of the open
[0:07] source under
[0:07] meta well a number of things so uh
[0:07] there&#39;s going to be like various
[0:07] versions of of Lama that are uh you know
[0:07] improvements of previous llamas bigger
[0:07] better multimodal things like that and
[0:07] then in future Generations systems that
[0:07] are capable of planning that really
[0:07] understand how the world Works um maybe
[0:07] are trained from video so they have some
[0:07] World model maybe you know capable of
[0:07] the type of reasoning and planning I was
[0:07] talking about earlier like how long is
[0:07] that going to take like when is the
[0:07] research that is doing going in that
[0:07] direction going to sort of feed into the
[0:07] product line if you want of L I don&#39;t
[0:07] know I can&#39;t tell you and there&#39;s you
[0:07] know a few breakthroughs that we have to
[0:07] basically uh go through before we can
[0:07] get there but you&#39;ll be able to monitor
[0:07] our progress because we publish our
[0:07] research right so you know if last week
[0:07] we published the Via work which is sort
[0:07] of a first step towards Training Systems
[0:07] from video um and then the next step is
[0:07] going to be World models based on on
[0:07] kind of this type of idea training
[0:07] training from video there similar work
[0:07] at at Deep Mind also and um the taking
[0:07] place people and also at UC brookley on
[0:07] uh World models from video a lot of
[0:07] people are working on this I think a lot
[0:07] of good ideas are coming are appearing
[0:07] my bet is that those systems are going
[0:07] to be Jep alike they&#39;re not going to be
[0:07] gener generative models um and uh we&#39;ll
[0:07] see what the future will tell um there&#39;s
[0:07] really good work at uh um a gentleman
[0:07] called danar Hafner who is not Deep Mind
[0:07] who who&#39;s worked on kind of models of
[0:07] this type that learn representations and
[0:07] then use them for planning or learning
[0:07] tasks by reinforcement running um and a
[0:07] lot of work at brookley by Peter iil S
[0:07] leine bunch of other people of that type
[0:07] uh I&#39;m collaborating with actually in
[0:07] the context of some grants with my NYU
[0:07] hat um
[0:07] and then collaborations also through
[0:07] meta because the the lab at brookley is
[0:07] associated with meta in some way so with
[0:07] fair so I I think uh it&#39;s very exciting
[0:07] you know I I think I&#39;m super excited
[0:07] about I I haven&#39;t been that excited
[0:07] about like the direction of machine
[0:07] learning and AI you know since uh you
[0:07] know 10 years ago when Fairway started
[0:07] and before that um 30 years ago when we
[0:07] working on 35 on on com Nets and and and
[0:07] the early days of neural net so um I&#39;m
[0:07] super excited because I see a path
[0:07] towards potentially human level
[0:07] intelligence uh with you know systems
[0:07] that can understand the world remember
[0:07] plan reason um there there is some some
[0:07] set of ideas to make progress there that
[0:07] might have a chance of working and I&#39;m
[0:07] really excited about this what I like is
[0:07] that you know it
[0:07] uh somewhere we we get onto like a good
[0:07] direction and perhaps succeed before my
[0:07] brain turns to white sauce or or before
[0:07] I need to
[0:07] retire yeah yeah uh you&#39;re also excited
[0:07] by are
[0:07] you is it beautiful to you just the
[0:07] amount of gpus involved sort of the the
[0:07] the whole training process on this much
[0:07] compute it&#39;s just zooming out just
[0:07] looking at Earth and humans together
[0:07] have built these Computing devices
[0:07] and are able to train this one
[0:07] brain then then we then open
[0:07] source like giving birth to this
[0:07] open-source brain trained on this
[0:07] gigantic compute system there&#39;s just the
[0:07] details of how to train on that how to
[0:07] build the infrastructure and the the
[0:07] hardware the cooling all of this kind of
[0:07] stuff U or you just still the most of
[0:07] your excitement is in the the theory
[0:07] aspect of it the meaning like the
[0:07] software
[0:07] well I used to be a hardware guy many
[0:07] years ago yes yes that&#39;s decades ago
[0:07] Hardware has improved a little bit
[0:07] changed a little bit yeah I mean
[0:07] certainly scale is necessary but not
[0:07] sufficient absolutely so we certainly
[0:07] need competition I mean we&#39;re still far
[0:07] in terms of compute
[0:07] power uh from you know what we would
[0:07] need to match the compute power of the
[0:07] human brain um you know this may occur
[0:07] in the next couple decades but um but
[0:07] we&#39;re still some ways away and certainly
[0:07] in terms of power efficiency were really
[0:07] far um so a lot of progress to make in
[0:07] uh in in in hardware and you know right
[0:07] now a lot of progress is is is not I
[0:07] mean there&#39;s a bit coming from Silicon
[0:07] technology but a lot of it coming from
[0:07] architectural Innovation and quite a bit
[0:07] coming from uh like more efficient ways
[0:07] of you know implementing the
[0:07] architectures that have become popular
[0:07] basically combination of Transformers
[0:07] and cets right and uh so you know
[0:07] there&#39;s still some ways to go
[0:07] until uh we&#39;re going to saturate we&#39;re
[0:07] going to have to come up with like new
[0:07] new principles new fabrication
[0:07] technology new uh basic
[0:07] components um perhaps you know based on
[0:07] sort of different principles than those
[0:07] classical digital semas interesting so
[0:07] you
[0:07] think in order to build Ami M me we need
[0:07] we potentially might need some Hardware
[0:07] Innovation too well if you want to make
[0:07] it um ubiquitous yeah certainly because
[0:07] we&#39;re going to have to reduce the you
[0:07] know comput the power consumption a GPU
[0:07] today right is half a kilowatt to a
[0:07] kilowatt human brain is about 25
[0:07] wats uh and the GPU is way below the
[0:07] power of human brain you need you know
[0:07] something like a 100,000 or million to
[0:07] match it so uh so you know we&#39;re off by
[0:07] huge Factor
[0:07] here you often say that
[0:07] AGI is not coming soon meaning like not
[0:07] this year not the next few years
[0:07] potentially farther away what&#39;s your
[0:07] basic intuition behind that so first of
[0:07] all it&#39;s not going to be an event right
[0:07] the idea somehow which you know is
[0:07] popularized by science fiction and
[0:07] Hollywood that you know somehow somebody
[0:07] is going to discover the secret the
[0:07] secret to a gii or human level AI or Ami
[0:07] whatever you want to call it and then
[0:07] you know turn on a machine and then we
[0:07] have a gii that&#39;s just not going to
[0:07] happen it&#39;s not going to be an
[0:07] event it&#39;s going to be gradual
[0:07] progress are we going to have systems
[0:07] that can learn from video how the world
[0:07] works and learn good World presentations
[0:07] yeah before we get them to the scale and
[0:07] performance that we observe in humans
[0:07] it&#39;s going to take quite a while it&#39;s
[0:07] not going to happen in one day um uh are
[0:07] we going to get systems that can uh have
[0:07] large amount of associative memory so
[0:07] they can they can remember stuff yeah
[0:07] but same it&#39;s not going to happen
[0:07] tomorrow I mean there is some basic
[0:07] techniques that need to be developed we
[0:07] have a lot of them but like you know to
[0:07] get this to work together with full
[0:07] system is another story how we going to
[0:07] have system that can reason and plan
[0:07] perhaps along the lines of the objective
[0:07] driven AI architectures that I I
[0:07] described before yeah but like before we
[0:07] get this to work you know properly it&#39;s
[0:07] going to take a while so
[0:07] and before we get all those things to
[0:07] work together and then on top of this
[0:07] have systems that can learn like
[0:07] hierarchical planning hierarchical
[0:07] representations systems that can be
[0:07] configured for a lot of different
[0:07] situation at hands the way the human
[0:07] brain can um you know all of this is
[0:07] going to take you know at least a decade
[0:07] and probably much more because there are
[0:07] a lot of problems that we&#39;re not seeing
[0:07] right now we have not encountered and so
[0:07] we don&#39;t know if there is a easy
[0:07] solution within this framework
[0:07] um so you know it&#39;s it&#39;s not just around
[0:07] the corner I mean I&#39;ve I&#39;ve been hearing
[0:07] people for the last 12 15 years claiming
[0:07] that you know edgi is just around the
[0:07] corner and being systematically wrong
[0:07] and I knew they were wrong when they
[0:07] were saying it I call their
[0:07]  why do you think people have
[0:07] been calling first of all I mean from
[0:07] the beginning of from the birth of the
[0:07] term artificial intelligence there has
[0:07] been a Eternal
[0:07] optimism that&#39;s perhaps unlike other
[0:07] Technologies is it a Maric Paradox is
[0:07] the explanation for why people are so
[0:07] optimistic about AGI I don&#39;t think it&#39;s
[0:07] just Marx Paradox Marx Paradox is a
[0:07] consequence of realizing that the world
[0:07] is not as easy as we think so first of
[0:07] all um intelligence is not a linear
[0:07] thing that you can measure with a scalar
[0:07] with a single number um you know can you
[0:07] say that humans are smarter
[0:07] than WR tongs in some ways yes but in
[0:07] some waysons are smarter than humans in
[0:07] a lot of domains that allows them to
[0:07] survive in the forest for example so IQ
[0:07] is a very limited measure of
[0:07] intelligence T intelligence is bigger
[0:07] than what IQ for example measures well
[0:07] IQ can measure you know approximately
[0:07] something for humans MH but um because
[0:07] humans kind of you know come in
[0:07] relatively kind of uniform form right
[0:07] right uh but it only measures one type
[0:07] of uh ability that you know may be
[0:07] relevant for some test but not
[0:07] others
[0:07] and uh but then if you talking about
[0:07] other intelligent entities for which
[0:07] the you know the the basic things that
[0:07] are easy to them is very
[0:07] different then it doesn&#39;t mean anything
[0:07] so intelligence is a collection of
[0:07] skills and an ability to acquire new
[0:07] skills efficiently mhm
[0:07] right and the collection of skills that
[0:07] an need intelligent particular
[0:07] intelligent entity possess or is capable
[0:07] of learning quickly is different from
[0:07] the collection skills of another one and
[0:07] because it&#39;s a multi-dimensional thing
[0:07] the set of skills is high dimensional
[0:07] space you can&#39;t measure you can compare
[0:07] you cannot compare two things as to
[0:07] whether one is more intelligent than the
[0:07] other it&#39;s
[0:07] multi-dimensional so you push back
[0:07] against what are called AI doomers a lot
[0:07] uh can you explain their perspective and
[0:07] why you think they&#39;re wrong okay so a I
[0:07] doomers imagine all kinds of catastrophe
[0:07] scenarios of how AI could Escape or
[0:07] control and basically kill us
[0:07] all uh and that relies on a whole bunch
[0:07] of assumptions that are mostly
[0:07] false so the first assumption is that
[0:07] the emergence of super intelligence is
[0:07] going to be an
[0:07] event that at some point we&#39;re going to
[0:07] have we&#39;re going to figure out the
[0:07] secret and we&#39;ll turn on a machine that
[0:07] is super
[0:07] intelligent and because we&#39;ve never done
[0:07] it before it&#39;s going to take over the
[0:07] world and kill us all that is false it&#39;s
[0:07] not going to be an event we&#39;re going to
[0:07] have systems that are like as smart as a
[0:07] cat has all the have all the
[0:07] characteristics of you know human level
[0:07] intelligence but their level of
[0:07] intelligence would be like a cat or a
[0:07] pirrot maybe
[0:07] or
[0:07] something um and then we&#39;re going to
[0:07] work our way up to kind of make those
[0:07] things more intelligent and as we make
[0:07] them more intelligent we&#39;re also going
[0:07] to put some guard rails in them and
[0:07] learn how to kind of put some guard
[0:07] rails so they behave properly and we&#39;re
[0:07] not going to do this with just one it&#39;s
[0:07] not going to be one effort there&#39;s going
[0:07] to be lots of different people doing
[0:07] this and some of them are going to
[0:07] succeed at making intelligent systems
[0:07] that are uh controllable and safe and
[0:07] have the right guard rails and if some
[0:07] other goes wrog then we can use the the
[0:07] good ones to go against the Rogue ones
[0:07] uh so it&#39;s going to be my you know smart
[0:07] AI police against your Rogue AI um so
[0:07] it&#39;s not going to be like you know we&#39;re
[0:07] going to be exposed to like a single
[0:07] Rogue AI that&#39;s going to kill us all
[0:07] that&#39;s just not not happening now there
[0:07] is another fallacy which is the fact
[0:07] that because the system is intelligent
[0:07] it necessarily wants to take over MH um
[0:07] and there is several
[0:07] arguments that make people scare of this
[0:07] which I think are completely false uh as
[0:07] well so one of them is um you know in
[0:07] nature it seems to be that the more
[0:07] intelligent species otherwi that end up
[0:07] dominating the other and uh and
[0:07] even you know extinguishing the others
[0:07] uh sometimes by Design sometimes just by
[0:07] mistake
[0:07] and and so you know there is sort of uh
[0:07] Thinking by which you say well if AI
[0:07] systems are more intelligent than us
[0:07] surely they&#39;re going to eliminate us if
[0:07] not by Design simply because they don&#39;t
[0:07] care about us and that&#39;s just
[0:07] Preposterous for for a number of reasons
[0:07] um first reason is they&#39;re not going to
[0:07] be a species they&#39;re not going to be a
[0:07] species that competes with us they&#39;re
[0:07] not going to have the desire to dominate
[0:07] because the desire to dominate is
[0:07] something that has to be hardwired into
[0:07] an intelligent
[0:07] system uh it is hardwired in
[0:07] humans it is hardwired in baboons in
[0:07] chimpanzees in wolves
[0:07] not in a wrong
[0:07] Tes the species in which this desire to
[0:07] dominate or submit or or attain status
[0:07] in other
[0:07] ways is is specific to social species
[0:07] non-social species like our tongs don&#39;t
[0:07] have it right and they are as smart as
[0:07] we are almost right and to you there&#39;s
[0:07] not significant incentive for humans to
[0:07] encode that into the AI systems and to
[0:07] the degree they do there&#39;ll be AIS that
[0:07] um sort of punish them for it I&#39;ll
[0:07] compete them over well there&#39;s all kinds
[0:07] of incentive to make AI system
[0:07] submissive to humans right right I mean
[0:07] this is the way we&#39;re going to build
[0:07] them right um and so so then people say
[0:07] oh but look at llms LMS are not
[0:07] controllable and they&#39;re right LMS are
[0:07] not controllable but objective driven AI
[0:07] so systems that derive their Answers by
[0:07] optimization of an objective means they
[0:07] have to optimize this objective and that
[0:07] objective can include guard rails one
[0:07] guardrail is uh obey humans another
[0:07] guardrail is don&#39;t obey humans if it&#39;s
[0:07] hurting other humans with I&#39;ve heard
[0:07] that before somewhere I don&#39;t remember
[0:07] yes maybe in a book yeah uh but speaking
[0:07] of that book what is could there be
[0:07] unintended consequences also from all of
[0:07] this no of course uh so this is not a
[0:07] simple problem right I mean uh designing
[0:07] those guard rail so that the system
[0:07] behaves properly is not going to be a a
[0:07] simple
[0:07] uh issue that for which there is a
[0:08] silver bullet for which you have a
[0:08] mathematical proof that the system can
[0:08] be safe it&#39;s going to be very
[0:08] Progressive iterative design system
[0:08] where we put those guard rails in such a
[0:08] way that the system behave properly and
[0:08] sometimes they&#39;re going to do something
[0:08] that you know was unexpected because the
[0:08] guardare wasn&#39;t right and we&#39;re going to
[0:08] correct them so that they do it right uh
[0:08] the idea somehow that we can&#39;t get it
[0:08] slightly wrong because if we get it
[0:08] slightly wrong we all die is is
[0:08] ridiculous
[0:08] um we we&#39;re just going to go
[0:08] progressively and it&#39;s it&#39;s just going
[0:08] to be the the analogy I&#39;ve used many
[0:08] times is um is uh turbojet design um how
[0:08] how did we figure out how to make
[0:08] turbojet so unbelievably reliable right
[0:08] uh I mean those are like you know
[0:08] incredibly complex uh pieces of Hardware
[0:08] that run at really high temperatures for
[0:08] you know 20 20 hours at a time sometimes
[0:08] and we can you know fly halfway around
[0:08] the world with a on a two
[0:08] engine
[0:08] uh jetliner at near the speed of sound
[0:08] like how incredible is this it&#39;s just
[0:08] unbelievable right
[0:08] and did we do this because we invented
[0:08] like a general principle of how to make
[0:08] Turbo Jet safe no we it took decades to
[0:08] kind of fine-tune the design of those
[0:08] systems so that they they were safe is
[0:08] there a separate uh group Within General
[0:08] Electric or snma or whatever that is
[0:08] specialized in turo jet safety no it&#39;s
[0:08] the design is all about safety because a
[0:08] better Turbo Jet is also a safer Turbo
[0:08] Jet so um a more reliable one it&#39;s the
[0:08] same for AI like do you do you need you
[0:08] know specific Provisions to make AI safe
[0:08] no you need to make better AI systems
[0:08] and they will be safe because they are
[0:08] designed to be more
[0:08] useful uh and more controllable so let&#39;s
[0:08] imagine a system AI system that&#39;s able
[0:08] to be incredibly
[0:08] convincing and can convince you of
[0:08] anything I I can at least imagine such a
[0:08] system and I can see such a system
[0:08] be weapon-like because it can control
[0:08] people&#39;s minds we&#39;re pretty gullible we
[0:08] we want to believe a thing you can have
[0:08] an A system that controls it and you
[0:08] could see governments using that as a
[0:08] weapon so do you think if you imagine
[0:08] such a system
[0:08] there&#39;s any parallel to something like
[0:08] nuclear weapons no so is why why why is
[0:08] that technology different so you&#39;re
[0:08] saying there&#39;s going to be gradual
[0:08] development yeah there&#39;s going to be I
[0:08] mean it might be rapid but they&#39;ll be
[0:08] iterative and then we&#39;ll be able to kind
[0:08] of respond and and so on so that AI
[0:08] system designed by Vladimir Putin or
[0:08] whatever or his uh minions uh you know
[0:08] is going to be uh like talking to trying
[0:08] to talk to every American to uh convince
[0:08] them to vote for you know whoever
[0:08] whoever pleases Putin sure uh or
[0:08] whatever or or you know or R people up
[0:08] against each other um as they&#39;ve been
[0:08] trying to
[0:08] do they&#39;re not going to be talking to
[0:08] you they&#39;re going to be talking to your
[0:08] AI assistant mhm which is going to be as
[0:08] smart as theirs MH right right that AI
[0:08] because as I said in the future every
[0:08] single one of your interaction with the
[0:08] digital world will be mediated by your
[0:08] AI assistant so the first thing you&#39;re
[0:08] going to ask is is this a scam like is
[0:08] this thing like telling me the truth
[0:08] like it&#39;s not even going to be able to
[0:08] get to you because it&#39;s only going to
[0:08] talk to your AI assistant and your AI
[0:08] assistant is not not even going to it&#39;s
[0:08] going to be like a spam filter right
[0:08] you&#39;re not even seeing the email the
[0:08] spam email right it&#39;s automatically put
[0:08] in a folder that you never see um it&#39;s
[0:08] going to be same thing that AI system
[0:08] that tries to convince you of something
[0:08] is going to be talking to a assistant
[0:08] which is going to be at least as smart
[0:08] as
[0:08] it and is going to say this is spam you
[0:08] know U it&#39;s not even going to bring it
[0:08] to your attention so to you it&#39;s very
[0:08] difficult for any one AI system to take
[0:08] such a big leap ahead to where it can
[0:08] convince even the other AI systems so
[0:08] like it there&#39;s always going to be this
[0:08] kind of race where nobody&#39;s way ahead
[0:08] that&#39;s the history of the world history
[0:08] of the world is you know whenever there
[0:08] is a prog at some someplace there is a
[0:08] countermeasure and and you know it&#39;s a
[0:08] it&#39;s a Katan mous game well this is why
[0:08] mostly yes but this is why nuclear
[0:08] weapons are so interesting because that
[0:08] was such a powerful weapon that it
[0:08] mattered who got it
[0:08] first that you know you could imagine
[0:08] Hitler
[0:08] Stalin ma getting the weapon first and
[0:08] that that having a different kind of
[0:08] impact on the world than than the United
[0:08] States getting the weapon first but to
[0:08] you nuclear weapons is is like you you
[0:08] don&#39;t imagine a uh breakthrough
[0:08] Discovery and then Manhattan Project
[0:08] like effort for AI no as I said it&#39;s not
[0:08] going to be an event it&#39;s going to be
[0:08] you know continuous progress and and
[0:08] whenever you know one breakthrough
[0:08] occurs it&#39;s going to be widely
[0:08] disseminated really quickly yeah
[0:08] probably first within industry I mean
[0:08] this is not a domain where you know
[0:08] government or military organizations are
[0:08] particularly Innovative and they&#39;re in
[0:08] fact way behind um and so this is going
[0:08] to come from industry and and this kind
[0:08] of information disseminates extremely
[0:08] quickly we&#39;ve seen this over the last
[0:08] few years right where you have a new
[0:08] like you know even take alphao this was
[0:08] reproduced within three
[0:08] months even without like particularly
[0:08] detailed information right yeah this is
[0:08] an industry that&#39;s not good at secrecy
[0:08] no but even even if there is just the
[0:08] fact that you know that something is
[0:08] possible yeah uh makes you like realize
[0:08] that it&#39;s worth investing the time to
[0:08] actually do it you you may be the second
[0:08] person to do it but you know you&#39;ll
[0:08] you&#39;ll do it uh and you know same for
[0:08] you know all the Innovations you know
[0:08] self supervisor Transformers decoder
[0:08] only architectures llms I mean those
[0:08] things you don&#39;t need to know exactly
[0:08] the details of how they work to know
[0:08] that you know it&#39;s
[0:08] possible um because it&#39;s deployed and
[0:08] then it&#39;s getting reproduced and then
[0:08] you know people who work for those
[0:08] companies move they go from one company
[0:08] to another and you know the information
[0:08] disseminates what makes the success of
[0:08] the the US tech industry and Silicon
[0:08] Valley in particular is exactly that is
[0:08] because information circulates really
[0:08] really quickly and this you know
[0:08] disseminates very quickly and so you
[0:08] know the the whole region sort of is
[0:08] ahead because of that circulation of
[0:08] information so maybe I just to linger on
[0:08] the psychology of AI doomers you give uh
[0:08] in the classic Yan laon way a pretty
[0:08] good example of just when a a new
[0:08] technology comes to be you say uh
[0:08] engineer says I invented this new thing
[0:08] I call it a
[0:08] ballpen and then the Twitter sphere
[0:08] responds OMG people could write horrible
[0:08] things with it like misinformation
[0:08] propaganda Hast speech ban it now then
[0:08] writing doomers come
[0:08] in akin to the AI doomers imagine if
[0:08] everyone can get a ballpen this could
[0:08] destroy Society there should be a law
[0:08] against using ballpen to write hate
[0:08] speech regulate ballpens now and then
[0:08] the pencil industry Mogul says yeah
[0:08] ballpens are very dangerous unlike
[0:08] pencil writing which is erasable ballpen
[0:08] writing stays forever government should
[0:08] require a license for a pen
[0:08] manufacturer I mean this does seem to be
[0:08] part of um human
[0:08] psychology when when it comes up against
[0:08] new
[0:08] technology so what what deep insights
[0:08] can you speak to about this well there
[0:08] is a a natural fear of uh new technology
[0:08] and the impact it can have in society
[0:08] and people have kind of instinctive
[0:08] reaction to um you know the world they
[0:08] know being threatened by Major
[0:08] Transformations um that are either
[0:08] cultural phenomena or technological um
[0:08] revolutions and they fear for their
[0:08] culture they feel for their job they
[0:08] feel for they fear for their you know
[0:08] the future of their children um and uh
[0:08] their way of life right so so any change
[0:08] um is feared and
[0:08] and you see this you know long history
[0:08] like any technological Revolution or
[0:08] cultural phenomenon was always
[0:08] accompanied by uh you know groups or
[0:08] reaction in the
[0:08] media uh that that basically
[0:08] attributed the all the problems the
[0:08] current problems of society to that
[0:08] particular change right electricity was
[0:08] going to kill everyone at some point you
[0:08] know you uh the train was going to be a
[0:08] horrible thing because you know you
[0:08] can&#39;t breathe past 50 kilm an hour um
[0:08] and so there&#39;s a wonderful website
[0:08] called a pessimist
[0:08] archive right which has all those
[0:08] newspaper clips of all the horrible
[0:08] things people imagine would would arrive
[0:08] because of uh either technological uh
[0:08] Innovation or uh a cultural phenomenon
[0:08] um you
[0:08] know the this is wonderful examples of
[0:08] uh uh you know jazz or comic books being
[0:08] blamed
[0:08] for uh unemployment or or you know young
[0:08] people not wanting to work anymore and
[0:08] things like that right and and that has
[0:08] existed for for
[0:08] centuries um and it&#39;s you know knee-jerk
[0:08] reactions um the question is you know do
[0:08] we Embrace
[0:08] change uh or do we resist it
[0:08] and what are the real dangers as opposed
[0:08] to the imagined uh imagined
[0:08] ones so people worry about I think one
[0:08] thing they worry about with big Tech
[0:08] something we&#39;ve been talking about over
[0:08] and over but I think
[0:08] worth mentioning again they worry about
[0:08] how powerful AI will be and they worry
[0:08] about it being in the hands of one
[0:08] centralized power of just a handful of
[0:08] central control and so that&#39;s the
[0:08] skepticism with big Tech you can make
[0:08] these companies can make a huge amount
[0:08] of money and control this technology and
[0:08] by so doing you know take advantage uh
[0:08] abuse the little guy in society well
[0:08] that&#39;s exactly why we need open source
[0:08] platforms yeah I just wanted
[0:08] to nail the point home more and more yes
[0:08] um so let me ask you on your like I said
[0:08] you do get a little bit uh um you know
[0:08] flavorful on the internet uh yos
[0:08] shabbach tweeted something that you
[0:08] loled at uh in reference to H 9000 quote
[0:08] I appreciate your argument and I fully
[0:08] understand your frustration but whether
[0:08] the pod bay doors should be opened or
[0:08] closed is a complex and nuanced issue so
[0:08] you&#39;re at the head of meta
[0:08] AI um you know this is something that
[0:08] really worries me that AI our AI
[0:08] overlords will speak down to us with
[0:08] corporate speak um of this nature and
[0:08] you sort of resist that with your way of
[0:08] being um is this something you can just
[0:08] comment on of working at a big
[0:08] company how you
[0:08] can avoid
[0:08] the over fearing I
[0:08] suppose the through caution create harm
[0:08] yeah again I think the answer to this is
[0:08] open source platforms and then en
[0:08] enabling a widely diverse set of people
[0:08] to build AI
[0:08] assistance that represent the diversity
[0:08] of uh cultures opinions languages and
[0:08] value systems across the world um so
[0:08] that you&#39;re not bound to just uh you
[0:08] know be brainwashed by a particular way
[0:08] of thinking because of single AI entity
[0:08] um so I mean I I think it&#39;s really
[0:08] really important question for society
[0:08] and the problem I&#39;m seeing is
[0:08] um is that um which is why I&#39;ve been so
[0:08] vocal and sometimes a little sardonic
[0:08] about it never stop never stop
[0:08] Yan we love it is because I see the
[0:08] danger of this concentration of power
[0:08] through through proprietary AI systems
[0:08] has a much bigger danger than everything
[0:08] else that if we really want you know uh
[0:08] diversity of opinion uh AI systems that
[0:08] you know in in this future that where
[0:08] we&#39;ll all be interacting through AI
[0:08] systems we need those to be diverse for
[0:08] the preservation of uh uh diversity of
[0:08] ideas and you know Creeds and political
[0:08] opinions and and and
[0:08] whatever uh and the preservation of
[0:08] democracy
[0:08] and what works against this is people
[0:08] who think that for reasons of security
[0:08] we should keep AI systems under lock and
[0:08] key because it&#39;s too dangerous to put it
[0:08] in the hands of of
[0:08] everybody um because it could be used by
[0:08] terrorists or something
[0:08] um that would lead
[0:08] to uh you know potentially a uh a very
[0:08] bad future in which all of our
[0:08] information diet is controlled by a
[0:08] small number of uh companies through
[0:08] proprietary
[0:08] systems do you trust humans with this
[0:08] technology to uh to build systems that
[0:08] are on the whole good for Humanity isn&#39;t
[0:08] that what democracy and free speech is
[0:08] all about I think so do you trust
[0:08] institutions to do the right thing do
[0:08] you trust people to do the right thing
[0:08] and and yeah there&#39;s bad people who are
[0:08] going to do bad things but they&#39;re not
[0:08] going to have Superior technology to the
[0:08] good people so then it&#39;s going to be my
[0:08] good AI against your bad AI right I mean
[0:08] there the examples that we were just
[0:08] talking about of you you know maybe uh
[0:08] some Rogue country will build you know
[0:08] some AI system that&#39;s going to try to
[0:08] convince everybody
[0:08] to go into a civil war or something or
[0:08] or or elect a favorable U ruler and um
[0:08] but then they will have to go past our
[0:08] AI systems right an AI system with a
[0:08] strong Russian accent will be trying to
[0:08] conv our and doesn&#39;t put any uh articles
[0:08] in their
[0:08] sentences um well it&#39;ll be at the very
[0:08] least absurdly comedic okay uh
[0:08] so I uh since we talked about sort of
[0:08] the uh physical reality I&#39;d love to ask
[0:08] your vision of the future with with
[0:08] robots in in this physical reality so
[0:08] many of the kinds of intelligence you&#39;ve
[0:08] been speaking about would Empower robots
[0:08] to be more effective collaborators with
[0:08] us humans so um since uh Tesla&#39;s Optimus
[0:08] uh team has been showing off some
[0:08] progress on humanoid robots
[0:08] I think it really reinvigorated the
[0:08] whole industry that&#39;s that I think
[0:08] Boston Dynamics has been leading for a
[0:08] very very long time so now there&#39;s all
[0:08] kinds of companies figure AI obviously
[0:08] Boston Dynamics um un tree un tree uh
[0:08] but there&#39;s like a lot of them it&#39;s
[0:08] great it&#39;s great I mean I love it uh so
[0:08] do you think there&#39;ll be uh millions of
[0:08] humanoid robots walking around soon not
[0:08] soon but it&#39;s going to it&#39;s going to
[0:08] happen like the next decade I think is
[0:08] going to be really interesting in robots
[0:08] like the the emergence of the robotics
[0:08] industry has been in the waiting for you
[0:08] know 10 20 years without really emerging
[0:08] other than for like you know kind of
[0:09] preprogram behavior and stuff like that
[0:09] um and uh and the main issue is again
[0:09] the Maric Paradox like you know how do
[0:09] we get those system to understand how
[0:09] the world works and and kind of you know
[0:09] plan actions and so we can do it for
[0:09] really specialized tasks um and uh the
[0:09] way Boston Dynamics goes about it is you
[0:09] know basically with a lot of um
[0:09] handcrafted dynamical models and careful
[0:09] planning uh in advance which is very
[0:09] classical robotics with a lot of
[0:09] innovation a little bit of perception um
[0:09] but it&#39;s still not like they can&#39;t build
[0:09] a domestic robot right um and you know
[0:09] we&#39;re still some distance away from
[0:09] completely autonomous level five driving
[0:09] mhm uh and we&#39;re certainly very far away
[0:09] from having uh you know level five
[0:09] autonomous driving bi A system that can
[0:09] train Itself by driving 20 hours like
[0:09] any 17y
[0:09] old uh so until we
[0:09] have uh again World models systems that
[0:09] can train themselves to understand how
[0:09] the world
[0:09] Works uh we&#39;re not going to we&#39;re not
[0:09] going to have significant progress in
[0:09] robotic
[0:09] so a lot of the people working on
[0:09] robotic Hardware at the moment are are
[0:09] betting or banking on the fact that AI
[0:09] is going to make sufficient progress
[0:09] towards that and they&#39;re hoping to
[0:09] discover a product in it too is uh yeah
[0:09] before you have a really strong World
[0:09] model there&#39;ll be an almost Strong World
[0:09] model and um people are trying to find a
[0:09] product in a clumsy robot I suppose like
[0:09] not a perfectly efficient robot so
[0:09] there&#39;s the fact factory setting where
[0:09] uh humanoid robots can help automate
[0:09] some aspects of the factory I think
[0:09] that&#39;s a crazy difficult task because of
[0:09] all the safety required and all this
[0:09] kind of stuff I think in the home is
[0:09] more interesting but then you start to
[0:09] think I think you mentioned loading the
[0:09] dishwasher right yeah like I suppose
[0:09] that&#39;s one of the main problems you&#39;re
[0:09] working on I mean there&#39;s you know uh
[0:09] cleaning up cleaning the house uh clear
[0:09] clearing up the table after
[0:09] meal washing the dishes you know all
[0:09] those tasks you know cooking I mean all
[0:09] the tasks that you know in principle
[0:09] could be automated but are actually
[0:09] incredibly sophisticated really
[0:09] complicated but even just basic
[0:09] navigation around an un Space full of
[0:09] uncertainty that&#39;s sort of works like
[0:09] you can sort of do this now navigation
[0:09] is fine well navigation in a way that&#39;s
[0:09] compelling to us humans is is is a
[0:09] different thing yeah it&#39;s not going to
[0:09] be you know necessarily I mean we have
[0:09] demos actually because you know there is
[0:09] a So-Cal embodied AI group at at fair
[0:09] and uh you know they&#39;ve been not
[0:09] building their own robots but using
[0:09] commercial robots um and you can you can
[0:09] tell a robot dog like you know go to the
[0:09] fridge and they can actually open the
[0:09] fridge and they can probably pick up a
[0:09] can in the fridge and stuff like that
[0:09] and and bring it to you you know so it
[0:09] can navigate can grab objects as long as
[0:09] it&#39;s been trying to recognize them which
[0:09] you know Vision systems work pretty well
[0:09] nowadays um but but it&#39;s not like a
[0:09] completely you know
[0:09] General robot that would be you know
[0:09] sophisticated enough to do things like
[0:09] clearing up the dinner
[0:09] table Yeah to me that&#39;s an exciting
[0:09] future of getting humanoid robots robots
[0:09] in general in the whole more and more
[0:09] because that gets uh humans to really
[0:09] directly interact with AI systems in the
[0:09] physical space and in so doing it allows
[0:09] us to philosophically psychologically
[0:09] explore our relationships with robots
[0:09] can be really really really interesting
[0:09] so I hope you make progress on the whole
[0:09] uh japa thing soon well I I mean I hope
[0:09] I hope things kind of you know work as
[0:09] uh as planned
[0:09] um I mean again we&#39;ve been kind of
[0:09] working on this idea of self supervised
[0:09] learning of from video for for 10 years
[0:09] and and you know only made significant
[0:09] progress in the last two or three and
[0:09] actually you&#39;ve you&#39;ve mentioned that
[0:09] there&#39;s a lot of interesting
[0:09] breakthroughs that can happen without
[0:09] having access to a lot of compute yeah
[0:09] so if you&#39;re interested in doing a PhD
[0:09] and this kind of stuff there&#39;s a lot of
[0:09] possibilities still yeah to do
[0:09] Innovative work so like what advice
[0:09] would you give to a undergrad that&#39;s
[0:09] looking to uh go to grad school and do a
[0:09] PhD so basically I&#39;ve listed them
[0:09] already uh this idea of how do you train
[0:09] a world model by
[0:09] observation and you don&#39;t have to train
[0:09] necessarily on gigantic data sets
[0:09] or I mean you could out to be necessary
[0:09] to actually train on large data sets to
[0:09] have emerging properties like like we
[0:09] have with LMS but I think there&#39;s a lot
[0:09] of good ideas that can be done
[0:09] without necessarily scaling up then
[0:09] there is how you do planning with a
[0:09] learn World model if the world the
[0:09] system evolves in is not the physical
[0:09] world but it&#39;s the world of let&#39;s say
[0:09] the internet or you know some sort of uh
[0:09] world of where an action consists in
[0:09] doing a search in a search engine or
[0:09] interrogating a data database or running
[0:09] a simulation or calling a calculator or
[0:09] solving a differential
[0:09] equation how do you get a system to
[0:09] actually plan a sequence of actions to
[0:09] you know give the solution to a problem
[0:09] um and so the question of planning is
[0:09] not just a question of planning physical
[0:09] actions could be you know planning
[0:09] actions to use tools for a dialog system
[0:09] or for any kind of intelligent
[0:09] system and um there&#39;s some work on this
[0:09] but not like not a huge amount some work
[0:09] at Fair um one called tool former which
[0:09] was couple years ago and some more
[0:09] recent work on planning U but um but I
[0:09] don&#39;t think we have like a good solution
[0:09] for any of that then there is the
[0:09] question of hierarchical planning so the
[0:09] example I I mentioned of you know
[0:09] planning a trip from New York to Paris
[0:09] that&#39;s hierarchical but almost every
[0:09] action that we take involves
[0:09] hierarchical planning in some in some
[0:09] sense and we really have absolutely no
[0:09] idea how to do this like this&#39;s zero
[0:09] demonstration of hierarchical
[0:09] planning uh in
[0:09] AI where the various levels of
[0:09] representations that are necessary have
[0:09] been learned we can do like two level
[0:09] hierarchy hierarchical planning when we
[0:09] design the two the two levels so for
[0:09] example you have like a a dog lag robot
[0:09] right you want it to go from
[0:09] the living room to the kitchen you can
[0:09] plan a path that avoids the obstacle and
[0:09] then um you can send this to a lower
[0:09] lower level planner that figures out how
[0:09] to move the legs to kind of Follow that
[0:09] trajectories right so that works but
[0:09] that twole planning is designed by hand
[0:09] right um we specify what the proper
[0:09] levels of abstraction the representation
[0:09] that each level of attraction has have
[0:09] to be how do you learn this how do you
[0:09] learn that hierarchical representation
[0:09] of action
[0:09] plans right we you know with cight and
[0:09] deep learning we we can train the system
[0:09] to learn hierarchical representations of
[0:09] percepts mhm what is the equivalent when
[0:09] what you&#39;re trying to represent our
[0:09] action plans for action plans yeah so
[0:09] you want you want basically a robot dog
[0:09] or humanoid robot that turns on and
[0:09] travels from New York to Paris all by
[0:09] itself for example all right they might
[0:09] have some uh trouble at the at the TSA
[0:09] but yeah no but even doing something
[0:09] fairly simple like a household task sure
[0:09] like you know uh cooking or something
[0:09] yeah that there&#39;s a lot involved it&#39;s a
[0:09] super complex task we take and once
[0:09] again we take it for
[0:09] granted what hope do you have for um the
[0:09] future of
[0:09] humanity we&#39;re talking about so many
[0:09] exciting Technologies so many exciting
[0:09] possibilities what gives you hope when
[0:09] you look out over the next 10 20 50 100
[0:09] years if you look at social media media
[0:09] there&#39;s a lot of there&#39;s there&#39;s Wars
[0:09] going on there&#39;s
[0:09] division uh there&#39;s hatred all this kind
[0:09] of stuff that&#39;s also part of humanity
[0:09] but amidst all that what gives you
[0:09] hope I don&#39;t have that question
[0:09] uh we can make Humanity Smarter with
[0:09] AI okay I mean AI basically will amplify
[0:09] human
[0:09] intelligence it&#39;s as if if every one of
[0:09] us will have a staff of smart AI
[0:09] assistants they might be smarter than us
[0:09] they&#39;ll do our
[0:09] bidding perhaps execute a task in ways
[0:09] that are much better than we could do
[0:09] ourselves because they&#39;ll be smarter
[0:09] than us and so it&#39;s like everyone would
[0:09] be the the boss of a staff of super
[0:09] smart virtual
[0:09] people so we shouldn&#39;t feel threatened
[0:09] by by this any more than we should feel
[0:09] threatened by being the manager of a
[0:09] group of people some of whom are more
[0:09] intelligent than
[0:09] us I certainly have a lot of experience
[0:09] with this of uh you know having people
[0:09] working with me who are smarter than me
[0:09] um that&#39;s actually a wonderful thing so
[0:09] uh having machines that are smarter than
[0:09] us that assist us in our all of our
[0:09] tasks our daily lives whether it&#39;s
[0:09] professional or personal I think would
[0:09] be absolutely wonderful thing because
[0:09] intelligence is the
[0:09] most um is the commodity that is most in
[0:09] demand that that&#39;s really what I mean
[0:09] all the mistakes that Humanity makes is
[0:09] because of lack of intelligence really
[0:09] or lack of knowledge which is you know
[0:09] related so um making people smarter
[0:09] would just can only be better I mean for
[0:09] the same reason that you know public
[0:09] education is a good
[0:09] thing and books are a good thing and the
[0:09] internet is also a good thing
[0:09] intrinsically and even social networks
[0:09] are a good thing if you run them
[0:09] properly it&#39;s difficult but you know you
[0:09] can
[0:09] um uh because you know it
[0:09] it&#39;s helps the communication of
[0:09] information and knowledge and the
[0:09] transmission of knowledge so AI is going
[0:09] to make Humanity
[0:09] smarter and the analogy I&#39;ve been
[0:09] using is the fact that perhaps an
[0:09] equivalent event in a history of
[0:09] humanity to what might be provided by
[0:09] journalized is the invention of the
[0:09] printing the printing press it made
[0:09] everybody smarter the fact
[0:09] that people could uh have access to um
[0:09] two books books were a lot cheaper than
[0:09] they were before and so a lot more
[0:09] people had an incentive to learn to read
[0:09] which wasn&#39;t the case before um and
[0:09] people became smarter it it enabled the
[0:09] enlightenment right there wouldn&#39;t be an
[0:09] Enlightenment without the printing press
[0:09] it
[0:09] enabled
[0:09] uh philosophy
[0:09] rationalism U escape from religious
[0:09] Doctrine um
[0:09] democracy
[0:09] science uh and certainly without this it
[0:09] wouldn&#39;t be there wouldn&#39;t have been
[0:09] theeran American Revolution the French
[0:09] Revolution and so was still be under
[0:09] feudal regimes perhaps um and so it
[0:09] completely transformed the the world
[0:09] because people became smarter and kind
[0:09] of learn learn about things now it also
[0:09] created 200 years of essentially
[0:09] religious conflicts in Europe right
[0:09] because the first thing that people read
[0:09] was the Bible and uh realized that
[0:09] perhaps was a different interpretation
[0:09] of the Bible than what the priests were
[0:09] telling
[0:09] them and so that created the Protestant
[0:09] movement and created the rift and in
[0:09] fact the Catholic School the Catholic
[0:09] Church didn&#39;t like the idea of the
[0:09] printing price but they had no choice
[0:09] and so it had some bad effects and some
[0:09] some good effects I don&#39;t think anyone
[0:09] today would say that the invention of
[0:09] the printing press had a overall
[0:09] negative effect despite the fact that it
[0:09] created 200 years of religious
[0:09] conflicts uh in Europe now compare this
[0:09] and I I thought uh I was very proud of
[0:09] myself to come and put this analogy but
[0:09] realized someone else uh came with the
[0:09] same idea before me um compare this with
[0:09] what happened in the Ottoman Empire the
[0:09] Ottoman Empire banned the printing press
[0:09] for 200
[0:09] years
[0:09] uh and it didn&#39;t ban it uh for all
[0:09] languages only for Arabic you could
[0:09] actually print books in Latin or Hebrew
[0:09] or whatever in the Ottoman Empire just
[0:09] not in
[0:09] Arabic and
[0:09] uh I thought it was because the rers
[0:09] just wanted to preserve the control over
[0:09] the population and the Dogma religious
[0:09] dogma and everything but after talking
[0:09] with the uh UAE minister of AI uh
[0:09] Omar um he told me no there was another
[0:09] reason uh and the other reason was that
[0:09] uh it was to preserve the corporation of
[0:09] calligraphers right there&#39;s like a an
[0:09] art form which is you know writing those
[0:09] beautiful yes uh you know Arabic uh
[0:09] poems or whatever religious text in in
[0:09] the thing and it was very powerful
[0:09] Corporation of scribes basically that
[0:09] kind of you know run a big chunk of the
[0:09] Empire and you know it couldn&#39;t put them
[0:09] out of business so they you know B the
[0:09] Ping press in part to protect that
[0:09] business now what&#39;s the analogy for AI
[0:09] today like who are we protecting by
[0:09] Banning AI like who are the people who
[0:09] are asking that AI be regulated to
[0:09] protect their their jobs and of course
[0:09] you know there&#39;s it&#39;s it&#39;s a it&#39;s a real
[0:09] question of what is going to be the
[0:09] effect
[0:09] of you know technological transformation
[0:09] like AI on the on the job market and the
[0:09] labor market and there are economists
[0:09] who are much more expert at this than I
[0:09] am but when I talk to them they they
[0:09] tell
[0:09] us you know we&#39;re not going to run out
[0:09] of job this this not this is not going
[0:09] to cause mass unemployment this this
[0:09] just going to be gradual uh shift of
[0:09] different professions the professions
[0:09] are going to be hot 10 or 15 years from
[0:09] now we have no idea today what they&#39;re
[0:09] going to be the same way if we go back
[0:09] 20 years in the past like who could have
[0:09] thought 20 years ago that like the
[0:09] hardest job even like 5 10 years ago was
[0:09] mobile app developer like smartphones
[0:09] weren&#39;t invented most of the jobs of the
[0:09] future might be in in the
[0:09] metaverse well it could be yeah but the
[0:09] point is you can&#39;t possibly predict but
[0:09] you&#39;re right I mean you made a lot of
[0:09] strong points
[0:09] and I I believe that people are
[0:09] fundamentally good and so if
[0:09] AI especially open source AI can um make
[0:09] them smarter
[0:09] it just empowers the goodness in humans
[0:09] so I I share that feeling okay I think
[0:09] people are Fally good uh and in fact a
[0:09] lot of doomers are doomers because they
[0:09] don&#39;t think that people are
[0:09] fundamentally good uh and they either
[0:09] don&#39;t trust people or they don&#39;t trust
[0:09] the institution to do the right thing so
[0:09] that people behave
[0:09] properly well I think both you and I
[0:09] believe in humanity and I think I speak
[0:09] for a lot lot of people in saying thank
[0:09] you for pushing the open source movement
[0:09] pushing to making both research in AI
[0:09] open source making it available to
[0:09] people and also the models themselves
[0:09] making it open source so thank you for
[0:09] that and uh thank you for speaking your
[0:09] mind in such colorful and beautiful ways
[0:09] on the internet I hope you never stop
[0:09] you&#39;re one of the most fun people I know
[0:09] and get to be a fan of So yeah thank you
[0:10] for speaking to me once again and thank
[0:10] you for being you thank you Le
[0:10] thanks for listening to this
[0:10] conversation with Yan laon to support
[0:10] this podcast please check out our
[0:10] sponsors in the description and now let
[0:10] me leave you with some words from Arthur
[0:10] C
[0:10] Clark the only way to discover the
[0:10] limits of the possible is to go beyond
[0:10] them into the
[0:10] impossible thank you for listening and
[0:10] hope to see you next
[0:10] time
