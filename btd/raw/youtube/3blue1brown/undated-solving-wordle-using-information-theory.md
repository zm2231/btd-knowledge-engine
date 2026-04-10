---
title: "Solving Wordle using information theory"
creator: "3blue1brown"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=v68zYyaEmEA"
video_id: "v68zYyaEmEA"
duration: "30:38"
transcript_method: "youtube-captions"
segment_count: 525
char_count: 33979
status: ingested
topics: []
meta_patterns: []
---

# Solving Wordle using information theory

**Creator**: 3blue1brown | **Duration**: 30:38
**URL**: https://www.youtube.com/watch?v=v68zYyaEmEA
**Transcript**: 525 segments, 33979 chars

## Transcript

The game Wordle has gone pretty viral in the last month or two, and never one to overlook an opportunity for a math lesson, it occurs to me that this game makes for a very good central example in a lesson about information theory, and in particular a topic known as entropy. You see, like a lot of people I got kind of sucked into the puzzle, and like a lot of programmers I also got sucked into trying to write an algorithm that would play the game as optimally as it could. And what I thought I'd do here is just talk through with you some of my process in that, and explain some of the math that went into it, since the whole algorithm centers on this idea of entropy. First things first, in case you haven't heard of it, what is Wordle? And to kill two birds with one stone here while we go through the rules of the game, let me also preview where we're going with this, which is to develop a little algorithm that will basically play the game for us. Though I haven't done today's Wordle, this is February 4th, and we'll see how the bot does. The goal of Wordle is to guess a mystery five letter word, and you're given six different chances to guess. For example, my Wordle bot suggests that I start with the guess "crane". Each time that you make a guess, you get some information about how close your guess is to the true answer. Here the grey box is telling me there's no C in the actual answer. The yellow box is telling me there is an R, but it's not in that position. The green box is telling me that the secret word does have an A, and it's in the third position. And then there's no N and there's no E. So let me just go in and tell the Wurdle bot that information. We started with crane, we got grey, yellow, green, grey, grey. Don't worry about all the data that it's showing right now, I'll explain that in due time. But its top suggestion for our second pick is "shtik". And your guess does have to be an actual five letter word, but as you'll see, it's pretty liberal with what it will actually let you guess. In this case, we try "shtik". And alright, things are looking pretty good. We hit the S and the H, so we know the first three letters, we know that there's an R. And so it's going to be like S-H-A something R, or S-H-A R something. And it looks like the Wordle bot knows that it's down to just two possibilities, either shard or sharp. That's kind of a tossup between them at this point, so I guess probably just because it's alphabetical it goes with shard. Which hooray, is the actual answer, so we got it in three. If you're wondering if that's any good, the way I heard one person phrase it is that with Wordle, four is par and three is birdie. Which I think is a pretty apt analogy. You have to be consistently on your game to be getting four, but it's certainly not crazy. But when you get it in three, it just feels great. So if you're down for it, what I'd like to do here is just talk through my thought process from the beginning for how I approach the Wordle bot. And like I said, really it's an excuse for an information theory lesson. The main goal is to explain what is information and what is entropy. My first thought in approaching this was to take a look at the relative frequencies of different letters in the English language. So I thought, okay, is there an opening guess or an opening pair of guesses that hits a lot of these most frequent letters? And one that I was pretty fond of was doing other followed by nails. The thought is that if you hit a letter, you know, you get a green or a yellow, that always feels good, it feels like you're getting information. But in these cases, even if you don't hit and you always get grays, that's still giving you a lot of information, since it's pretty rare to find a word that doesn't have any of these letters. But even still, that doesn't feel super systematic, because for example, it does nothing to consider the order of the letters. Why type nails when I could type snail? Is it better to have that S at the end? I'm not really sure. Now, a friend of mine said that he liked to open with the word weary, which kind of surprised me because it has some uncommon letters in there like the W and the Y. But who knows, maybe that is a better opener. Is there some kind of quantitative score that we can give to judge the quality of a potential guess? Now to set up for the way that we're going to rank possible guesses, let's go back and add a little clarity to how exactly the game is set up. So there's a list of words that it will allow you to enter that are considered valid guesses that's just about 13,000 words long. But when you look at it, there's a lot of really uncommon things, things like "aahed" or "aalii" and "aargh", the kind of words that bring about family arguments in a game of Scrabble. But the vibe of the game is that the answer is always going to be a decently common word. And in fact, there's another list of around 2300 words that are the possible answers. And this is a human curated list, I think specifically by the game creator's girlfriend, which is kind of fun. But what I would like to do, our challenge for this project is to see if we can write a program solving wordle that doesn't incorporate previous knowledge about this list. For one thing, there's plenty of pretty common five letter words that you won't find in that list. So it would be better to write a program that's a little more resilient and would play wordle against anyone, not just what happens to be the official website. And also, the reason that we know what this list of possible answers is, is because it's visible in the source code. But the way that it's visible in the source code is in the specific order in which answers come up from day to day, that you could always just look up what tomorrow's answer will be. So clearly, there's some sense in which using the list is cheating. And what makes for a more interesting puzzle and a richer information theory lesson is to instead use some more universal data like relative word frequencies in general to capture this intuition of having a preference for more common words. So of these 13,000 possibilities, how should we choose the opening guess? For example, if my friend proposes weary, how should we analyze its quality? Well, the reason he said he likes that unlikely W is that he likes the long shot nature of just how good it feels if you do hit that W. For example, if the first pattern revealed was something like this, then it turns out there are only 58 words in this giant lexicon that match that pattern. So that's a huge reduction from 13,000. But the flip side of that, of course, is that it's very uncommon to get a pattern like this. Specifically, if each word was equally likely to be the answer, the probability of hitting this pattern would be 58 divided by around 13,000. Of course, they're not equally likely to be answers. Most of these are very obscure and even questionable words. But at least for our first pass at all of this, let's assume that they're all equally likely and then refine that a bit later. The point is, the pattern with a lot of information is, by its very nature, unlikely to occur. In fact, what it means to be informative is that it's unlikely. A much more probable pattern to see with this opening would be something like this, where, of course, there's not a W in it. Maybe there's an E, and maybe there's no A, there's no R, there's no Y. In this case, there are 1400 possible matches. If all were equally likely, it works out to be a probability of about 11% that this is the pattern you would see. So the most likely outcomes are also the least informative. To get a more global view here, let me show you the full distribution of probabilities across all of the different patterns that you might see. So each bar that you're looking at corresponds to a possible pattern of colors that could be revealed, of which there are 3 to the 5th possibilities, and they're organized from left to right, most common to least common. So the most common possibility here is that you get all grays. That happens about 14% of the time. And what you're hoping for when you make a guess is that you end up somewhere out in this long tail, like over here, where there's only 18 possibilities for what matches this pattern, that evidently look like this. Or if we venture a little farther to the left, you know, maybe we go all the way over here. Okay, here's a good puzzle for you. What are the three words in the English language that start with a W, end with a Y, and have an R somewhere in them? Turns out, the answers are, let's see, wordy, wormy, and wryly. So to judge how good this word is overall, we want some kind of measure of the expected amount of information that you're going to get from this distribution. If we go through each pattern and we multiply its probability of occurring times something that measures how informative it is, that can maybe give us an objective score. Now your first instinct for what that something should be might be the number of matches. You want a lower average number of matches. But instead I'd like to use a more universal measurement that we often ascribe to information, and one that will be more flexible once we have a different probability assigned to each of these 13,000 words for whether or not they're actually the answer. The standard unit of information is the bit, which has a little bit of a funny formula, but is really intuitive if we just look at examples. If you have an observation that cuts your space of possibilities in half, we say that it has one bit of information. In our example, the space of possibilities is all possible words, and it turns out about half of the five letter words have an S, a little less than that, but about half. So that observation would give you one bit of information. If instead a new fact chops down that space of possibilities by a factor of four, we say that it has two bits of information. For example, it turns out about a quarter of these words have a T. If the observation cuts that space by a factor of eight, we say it's three bits of information, and so on and so forth. Four bits cuts it into a sixteenth, five bits cuts it into a thirty second. So now's when you might want to take a moment and pause and ask for yourself, what is the formula for information for the number of bits in terms of the probability of an occurrence? Well, what we're saying here is basically that when you take one half to the number of bits, that's the same thing as the probability, which is the same thing as saying two to the power of the number of bits is one over the probability, which rearranges further to saying the information is the log base two of one divided by the probability. And sometimes you see this with one more rearrangement still where the information is the negative log base two of the probability. Expressed like this, it can look a little bit weird to the uninitiated, but it really is just the very intuitive idea of asking how many times you've cut down your possibilities in half. Now if you're wondering, you know, I thought we were just playing a fun word game, why are logarithms entering the picture? One reason this is a nicer unit is it's just a lot easier to talk about very unlikely events, much easier to say that an observation has 20 bits of information than it is to say that the probability of such and such occurring is 0.0000095. But a more substantive reason that this logarithmic expression turned out to be a very useful addition to the theory of probability is the way that information adds together. For example, if one observation gives you two bits of information, cutting your space down by four, and then a second observation like your second guess in Wordle gives you another three bits of information, chopping you down further by another factor of eight, the two together give you five bits of information. In the same way that probabilities like to multiply, information likes to add. So as soon as we're in the realm of something like an expected value, where we're adding a bunch of numbers up, the logs make it a lot nicer to deal with. Let's go back to our distribution for weary and add another little tracker on here, showing us how much information there is for each pattern. The main thing I want you to notice is that the higher the probability as we get to those more likely patterns, the lower the information, the fewer bits you gain. The way we measure the quality of this guess will be to take the expected value of this information. When we go through each pattern, we say how probable is it and then we multiply that by how many bits of information do we get. And in the example of weary, that turns out to be 4.9 bits. So on average, the information you get from this opening guess is as good as chopping your space of possibilities in half about five times. By contrast, an example of a guess with a higher expected information value would be something like slate. In this case, you'll notice the distribution looks a lot flatter. In particular, the most probable occurrence of all grays only has about a 6% chance of occurring, so at minimum you're getting evidently 3.9 bits of information. But that's a minimum, more typically you'd get something better than that. And it turns out when you crunch the numbers on this one and add up all the relevant terms, the average information is about 5.8. So in contrast with weary, your space of possibilities will be about half as big after this first guess, on average. There's actually a fun story about the name for this expected value of information quantity. You see, information theory was developed by Claude Shannon, who was working at Bell Labs in the 1940s, but he was talking about some of his yet-to-be-published ideas with John von Neumann, who was this intellectual giant of the time, very prominent in math and physics and the beginnings of what was becoming computer science. And when he mentioned that he didn't really have a good name for this expected value of information quantity, von Neumann supposedly said, so the story goes, well, you should call it entropy, and for two reasons. In the first place, your uncertainty function has been used in statistical mechanics under that name, so it already has a name, and in the second place, and more important, nobody knows what entropy really is, so in a debate you'll always have the advantage. So if the name seems a little bit mysterious, and if this story is to be believed, that's kind of by design. Also if you're wondering about its relation to all of that second law of thermodynamics stuff from physics, there definitely is a connection, but in its origins Shannon was just dealing with pure probability theory, and for our purposes here, when I use the word entropy, I just want you to think the expected information value of a particular guess. You can think of entropy as measuring two things simultaneously. The first one is how flat is the distribution? The closer a distribution is to uniform, the higher that entropy will be. In our case, where there are 3 to the 5th total patterns, for a uniform distribution, observing any one of them would have information log base 2 of 3 to the 5th, which happens to be 7.92, so that is the absolute maximum that you could possibly have for this entropy. But entropy is also kind of a measure of how many possibilities there are in the first place. For example, if you happen to have some word where there's only 16 possible patterns, and each one is equally likely, this entropy, this expected information, would be 4 bits. But if you have another word where there's 64 possible patterns that could come up, and they're all equally likely, then the entropy would work out to be 6 bits. So if you see some distribution out in the wild that has an entropy of 6 bits, it's sort of like it's saying there's as much variation and uncertainty in what's about to happen as if there were 64 equally likely outcomes. For my first pass at the Wurtelebot, I basically had it just do this. It goes through all of the different possible guesses that you could have, all 13,000 words, it computes the entropy for each one, or more specifically, the entropy of the distribution across all patterns that you might see for each one, and then it picks the highest, since that's the one that's likely to chop down your space of possibilities as much as possible. And even though I've only been talking about the first guess here, it does the same thing for the next few guesses. For example, after you see some pattern on that first guess, which would restrict you to a smaller number of possible words based on what matches with that, you just play the same game with respect to that smaller set of words. For a proposed second guess, you look at the distribution of all patterns that could occur from that more restricted set of words, you search through all 13,000 possibilities, and you find the one that maximizes that entropy. To show you how this works in action, let me just pull up a little variant of Wurtele that I wrote that shows the highlights of this analysis in the margins. So after doing all its entropy calculations, on the right here it's showing us which ones have the highest expected information. Turns out the top answer, at least at the moment, we'll refine this later, is Tares, which means, um, of course, a vetch, the most common vetch. Each time we make a guess here, where maybe I kind of ignore its recommendations and go with slate, because I like slate, we can see how much expected information it had, but then on the right of the word here it's showing us how much actual information we got given this particular pattern. So here it looks like we were a little unlucky, we were expected to get 5.8, but we happened to get something with less than that. And then on the left side here it's showing us all of the different possible words given where we are now. The blue bars are telling us how likely it thinks each word is, so at the moment it's assuming each word is equally likely to occur, but we'll refine that in a moment. And then this uncertainty measurement is telling us the entropy of this distribution across the possible words, which right now, because it's a uniform distribution, is just a needlessly complicated way to count the number of possibilities. For example, if we were to take 2 to the power of 13.66, that should be around the 13,000 possibilities. Um, a little bit off here, but only because I'm not showing all the decimal places. At the moment that might feel redundant and like it's overly complicating things, but you'll see why it's useful to have both numbers in a minute. So here it looks like it's suggesting the highest entropy for our second guess is Raman, which again just really doesn't feel like a word. So to take the moral high ground here I'm going to go ahead and type in Rains. And again it looks like we were a little unlucky. We were expecting 4.3 bits and we only got 3.39 bits of information. So that takes us down to 55 possibilities. And here maybe I'll just actually go with what it's suggesting, which is combo, whatever that means. And, okay, this is actually a good chance for a puzzle. It's telling us this pattern gives us 4.7 bits of information. But over on the left, before we see that pattern, there were 5.78 bits of uncertainty. So as a quiz for you, what does that mean about the number of remaining possibilities? Well it means that we're reduced down to 1 bit of uncertainty, which is the same thing as saying that there's 2 possible answers. It's a 50-50 choice. And from here, because you and I know which words are more common, we know that the answer should be abyss. But as it's written right now, the program doesn't know that. So it just keeps going, trying to gain as much information as it can, until it's only one possibility left, and then it guesses it. So obviously we need a better endgame strategy, but let's say we call this version 1 of our wordle solver, and then we go and run some simulations to see how it does. So the way this is working is it's playing every possible wordle game. It's going through all of those 2315 words that are the actual wordle answers. It's basically using that as a testing set. And with this naive method of not considering how common a word is, and just trying to maximize the information at each step along the way, until it gets down to one and only one choice. By the end of the simulation, the average score works out to be about 4.124. Which is not bad, to be honest, I kind of expect it to do worse. But the people who play wordle will tell you that they can usually get it in 4. The real challenge is to get as many in 3 as you can. It's a pretty big jump between the score of 4 and the score of 3. The obvious low-hanging fruit here is to somehow incorporate whether or not a word is common, and how exactly do we do that. The way I approached it is to get a list of the relative frequencies for all of the words in the English language, and I just used Mathematica's word frequency data function, which itself pulls from the Google Books English Ngram public dataset. And it's kind of fun to look at, for example if we sort it from the most common words to the least common words. Evidently these are the most common, 5-letter words in the English language. Or rather, these is the 8th most common. First is which, after which there's there and there. First itself is not first, but 9th, and it makes sense that these other words could come about more often, where those after first are after, where, and those being just a little bit less common. Now, in using this data to model how likely each of these words is to be the final answer, it shouldn't just be proportional to the frequency, because for example which is given a score of 0.002 in this dataset, whereas the word braid is in some sense about 1000 times less likely. But both of these are common enough words that they're almost certainly worth considering, so we want more of a binary cutoff. The way I went about it is to imagine taking this whole sorted list of words, and then arranging it on an x-axis, and then applying the sigmoid function, which is the standard way to have a function whose output is basically binary, it's either 0 or it's 1, but there's a smoothing in between for that region of uncertainty. So essentially, the probability that I'm assigning to each word for being in the final list will be the value of the sigmoid function above wherever it sits on the x-axis. Now obviously this depends on a few parameters, for example how wide a space on the x-axis those words fill determines how gradually or steeply we drop off from 1 to 0, and where we situate them left to right determines the cutoff. And to be honest the way I did this was kind of just licking my finger and sticking it into the wind. I looked through the sorted list and tried to find a window where when I looked at it I figured about half of these words are more likely than not to be the final answer, and used that as the cutoff. Now once we have a distribution like this across the words, it gives us another situation where entropy becomes this really useful measurement. For example, let's say we were playing a game and we start with my old openers, which were other and nails, and we end up with a situation where there's four possible words that match it. And let's say we consider them all equally likely, let me ask you, what is the entropy of this distribution? Well, the information associated with each one of these possibilities is going to be the log base 2 of 4, since each one is 1 and 4, and that's 2. 2 bits of information, 4 possibilities. All very well and good. But what if I told you that actually there's more than 4 matches? In reality, when we look through the full word list, there are 16 words that match it. But suppose our model puts a really low probability on those other 12 words of actually being the final answer, something like 1 in 1000 because they're really obscure. Now let me ask you, what is the entropy of this distribution? If entropy was purely measuring the number of matches here, then you might expect it to be something like the log base 2 of 16, which would be 4, two more bits of uncertainty than we had before. But of course the actual uncertainty is not really that different from what we had before. Just because there's these 12 really obscure words doesn't mean that it would be all that more surprising to learn that the final answer is charm, for example. So when you actually do the calculation here and you add up the probability of each occurrence times the corresponding information, what you get is 2.11 bits. Just saying, it's basically two bits, basically those four possibilities, but there's a little more uncertainty because of all of those highly unlikely events, though if you did learn them you'd get a ton of information from it. So zooming out, this is part of what makes Wordle such a nice example for an information theory lesson. We have these two distinct feeling applications for entropy. The first one telling us what's the expected information we'll get from a given guess, and the second one saying can we measure the remaining uncertainty among all of the words we have possible. And I should emphasize, in that first case where we're looking at the expected information of a guess, once we have an unequal weighting to the words, that affects the entropy calculation. For example, let me pull up that same case we were looking at earlier of the distribution associated with Weary, but this time using a non-uniform distribution across all possible words. So let me see if I can find a part here that illustrates it pretty well. Okay, here, this is pretty good. Here we have two adjacent patterns that are about equally likely, but one of them we're told has 32 possible words that match it. And if we check what they are, these are those 32, which are all just very unlikely words as you scan your eyes over them. It's hard to find any that feel like plausible answers, maybe yells, but if we look at the neighboring pattern in the distribution, which is considered just about as likely, we're told that it only has 8 possible matches. So a quarter as many matches, but it's about as likely. And when we pull up those matches, we can see why. Some of these are actual plausible answers like ring or wrath or raps. To illustrate how we incorporate all that, let me pull up version two of the Wordlebot here. And there are two or three main differences from the first one that we saw. First off, like I just said, the way that we're computing these entropies, these expected values of information, is now using the more refined distributions across the patterns that incorporates the probability that a given word would actually be the answer. As it happens, tears is still number one, though the ones following are a bit different. Second, when it ranks its top picks, it's now going to keep a model of the probability that each word is the actual answer, and it'll incorporate that into its decision, which is easier to see once we have a few guesses on the table. Again, ignoring its recommendation because we can't let machines rule our lives. And I suppose I should mention another thing different here is over on the left, that uncertainty value, that number of bits, is no longer just redundant with the number of possible matches. Now if we pull it up and calculate 2 to the 8.02, which would be a little above 256, I guess 259, what it's saying is even though there are 526 total words that actually match this pattern, the amount of uncertainty it has is more akin to what it would be if there were 259 equally likely outcomes. You can think of it like this. It knows borks is not the answer, same with yorts and zorl and zorus. So it's a little less uncertain than it was in the previous case. This number of bits will be smaller. And if I keep playing the game, I'm refining this down with a couple guesses that are apropos of what I would like to explain here. By the fourth guess, if you look over at its top picks, you can see it's no longer just maximizing the entropy. So at this point, there's technically seven possibilities, but the only ones with a meaningful chance are dorms and words. And you can see it ranks choosing both of those above all of these other values that strictly speaking would give more information. The very first time I did this, I just added up these two numbers to measure the quality of each guess, which actually worked better than you might suspect. But it really didn't feel systematic. And I'm sure there's other approaches people could take. But here's the one I landed on. If we're considering the prospect of a next guess, like in this case words, what we really care about is the expected score of our game if we do that. And to calculate that expected score, we say what's the probability that words is the actual answer, which at the moment it describes 58% to. We say with a 58% chance, our score in this game would be four. And then with the probability of one minus that 58%, our score will be more than that four. How much more we don't know, but we can estimate it based on how much uncertainty there's likely to be once we get to that point. Specifically, at the moment, there's 1.44 bits of uncertainty. If we guess words, it's telling us the expected information we'll get is 1.27 bits. So if we guess words, this difference represents how much uncertainty we're likely to be left with after that happens. What we need is some kind of function, which I'm calling f here, that associates this uncertainty with an expected score. And the way it went about this was to just plot a bunch of the data from previous games based on version one of the bot to say, hey, what was the actual score after various points with certain very measurable amounts of uncertainty? For example, these data points here that are sitting above a value that's around like 8.7 or so are saying for some games, after a point at which there were 8.7 bits of uncertainty, it took two guesses to get the final answer. For other games, it took three guesses. For other games, it took four guesses. If we shift over to the left here, all the points over zero are saying whenever there's zero bits of uncertainty, which is to say there's only one possibility, then the number of guesses required is always just one, which is reassuring. Whenever there was one bit of uncertainty, meaning it was essentially just down to two possibilities, then sometimes it required one more guess, sometimes it required two more guesses, and so on and so forth here. Maybe a slightly easier way to visualize this data is to bucket it together and take averages. For example, this bar here is saying among all the points where we had one bit of uncertainty, on average the number of new guesses required was about 1.5. And the bar over here is saying among all of the different games where at some point the uncertainty was a little above four bits, which is like narrowing it down to 16 different possibilities, then on average it requires a little more than two guesses from that point forward. And from here I just did a regression to fit a function that seemed reasonable to this. And remember, the whole point of doing any of that is so that we can quantify this intuition that the more information we gain from a word, the lower the expected score will be. So, with this as version 2.0, if we go back and run the same set of simulations, having it play against all 2315 possible wordle answers, how does it do? Well in contrast to our first version, it's definitely better, which is reassuring. All said and done, the average is around 3.6. Although unlike the first version, there are a couple times that it loses, and requires more than six in this circumstance. Presumably because there's times when it's making that tradeoff to actually go for the goal rather than maximizing information. So can we do better than 3.6? We definitely can. Now, I said at the start that it's most fun to try not incorporating the true list of wordle answers into the way that it builds its model. But if we do incorporate it, the best performance I could get was around 3.43. So if we try to get more sophisticated than just using word frequency data to choose this prior distribution, this 3.43 probably gives a max at how good we could get with that, or at least how good I could get with that. That best performance essentially just uses the ideas that I've been talking about here, but it goes a little farther, like it does a search for the expected information two steps forward rather than just one. Originally I was planning on talking more about that, but I realize we've actually gone quite long as it is. The one thing I'll say is after doing this two-step search and then running a couple sample simulations in the top candidates, so far for me at least, it's looking like Crane is the best opener. Who would have guessed? Also if you use the true wordle list to determine your space of possibilities, then the uncertainty you start with is a little over 11 bits. And it turns out just from a brute force search, the maximum possible expected information after the first two guesses is around 10 bits. Which suggests that best case scenario, after your first two guesses, with perfectly optimal play, you'll be left with around one bit of uncertainty. Which is the same as being down to two possible guesses. But I think it's fair and probably pretty conservative to say that you could never possibly write an algorithm that gets this average as low as three, because with the words available to you, there's simply not room to get enough information after only two steps to be able to guarantee the answer in the third slot every single time without fail.

## Timed Segments

[0:00] The game Wordle has gone pretty viral in the last month or two,
[0:02] and never one to overlook an opportunity for a math lesson,
[0:05] it occurs to me that this game makes for a very good central example
[0:08] in a lesson about information theory, and in particular a topic known as entropy.
[0:13] You see, like a lot of people I got kind of sucked into the puzzle,
[0:16] and like a lot of programmers I also got sucked into trying to
[0:19] write an algorithm that would play the game as optimally as it could.
[0:23] And what I thought I&#39;d do here is just talk through with you some of my process in that,
[0:26] and explain some of the math that went into it,
[0:28] since the whole algorithm centers on this idea of entropy.
[0:38] First things first, in case you haven&#39;t heard of it, what is Wordle?
[0:42] And to kill two birds with one stone here while we go through the rules of the game,
[0:45] let me also preview where we&#39;re going with this,
[0:47] which is to develop a little algorithm that will basically play the game for us.
[0:51] Though I haven&#39;t done today&#39;s Wordle, this is February 4th,
[0:53] and we&#39;ll see how the bot does.
[0:55] The goal of Wordle is to guess a mystery five letter word,
[0:58] and you&#39;re given six different chances to guess.
[1:00] For example, my Wordle bot suggests that I start with the guess &quot;crane&quot;.
[1:05] Each time that you make a guess, you get some information
[1:07] about how close your guess is to the true answer.
[1:10] Here the grey box is telling me there&#39;s no C in the actual answer.
[1:14] The yellow box is telling me there is an R, but it&#39;s not in that position.
[1:18] The green box is telling me that the secret word does have an A,
[1:20] and it&#39;s in the third position.
[1:22] And then there&#39;s no N and there&#39;s no E.
[1:25] So let me just go in and tell the Wurdle bot that information.
[1:27] We started with crane, we got grey, yellow, green, grey, grey.
[1:31] Don&#39;t worry about all the data that it&#39;s showing right now, I&#39;ll explain that in due time.
[1:35] But its top suggestion for our second pick is &quot;shtik&quot;.
[1:39] And your guess does have to be an actual five letter word, but as you&#39;ll see,
[1:42] it&#39;s pretty liberal with what it will actually let you guess.
[1:46] In this case, we try &quot;shtik&quot;.
[1:48] And alright, things are looking pretty good.
[1:50] We hit the S and the H, so we know the first three letters, we know that there&#39;s an R.
[1:53] And so it&#39;s going to be like S-H-A something R, or S-H-A R something.
[1:59] And it looks like the Wordle bot knows that it&#39;s down to just two possibilities,
[2:03] either shard or sharp.
[2:05] That&#39;s kind of a tossup between them at this point,
[2:07] so I guess probably just because it&#39;s alphabetical it goes with shard.
[2:11] Which hooray, is the actual answer, so we got it in three.
[2:14] If you&#39;re wondering if that&#39;s any good, the way I heard one person
[2:17] phrase it is that with Wordle, four is par and three is birdie.
[2:20] Which I think is a pretty apt analogy.
[2:22] You have to be consistently on your game to be getting four, but it&#39;s certainly not crazy.
[2:27] But when you get it in three, it just feels great.
[2:30] So if you&#39;re down for it, what I&#39;d like to do here is just talk through
[2:33] my thought process from the beginning for how I approach the Wordle bot.
[2:36] And like I said, really it&#39;s an excuse for an information theory lesson.
[2:39] The main goal is to explain what is information and what is entropy.
[2:48] My first thought in approaching this was to take a look at the
[2:50] relative frequencies of different letters in the English language.
[2:54] So I thought, okay, is there an opening guess or an opening
[2:56] pair of guesses that hits a lot of these most frequent letters?
[2:59] And one that I was pretty fond of was doing other followed by nails.
[3:03] The thought is that if you hit a letter, you know, you get a green or a yellow,
[3:06] that always feels good, it feels like you&#39;re getting information.
[3:09] But in these cases, even if you don&#39;t hit and you always get grays,
[3:12] that&#39;s still giving you a lot of information,
[3:14] since it&#39;s pretty rare to find a word that doesn&#39;t have any of these letters.
[3:18] But even still, that doesn&#39;t feel super systematic, because for example,
[3:21] it does nothing to consider the order of the letters.
[3:23] Why type nails when I could type snail?
[3:26] Is it better to have that S at the end?
[3:27] I&#39;m not really sure.
[3:29] Now, a friend of mine said that he liked to open with the word weary,
[3:32] which kind of surprised me because it has some uncommon letters in there like the
[3:35] W and the Y.
[3:37] But who knows, maybe that is a better opener.
[3:39] Is there some kind of quantitative score that we
[3:41] can give to judge the quality of a potential guess?
[3:45] Now to set up for the way that we&#39;re going to rank possible guesses,
[3:48] let&#39;s go back and add a little clarity to how exactly the game is set up.
[3:51] So there&#39;s a list of words that it will allow you to enter that
[3:54] are considered valid guesses that&#39;s just about 13,000 words long.
[3:58] But when you look at it, there&#39;s a lot of really uncommon things,
[4:01] things like &quot;aahed&quot; or &quot;aalii&quot; and &quot;aargh&quot;, the kind of words
[4:03] that bring about family arguments in a game of Scrabble.
[4:06] But the vibe of the game is that the answer is always going to be a decently common word.
[4:10] And in fact, there&#39;s another list of around 2300 words that are the possible answers.
[4:15] And this is a human curated list, I think specifically by the game creator&#39;s girlfriend,
[4:20] which is kind of fun.
[4:21] But what I would like to do, our challenge for this project is to see if we can write
[4:25] a program solving wordle that doesn&#39;t incorporate previous knowledge about this list.
[4:30] For one thing, there&#39;s plenty of pretty common five
[4:32] letter words that you won&#39;t find in that list.
[4:34] So it would be better to write a program that&#39;s a little more resilient and would
[4:38] play wordle against anyone, not just what happens to be the official website.
[4:41] And also, the reason that we know what this list of possible answers is,
[4:45] is because it&#39;s visible in the source code.
[4:47] But the way that it&#39;s visible in the source code is in the
[4:49] specific order in which answers come up from day to day,
[4:52] that you could always just look up what tomorrow&#39;s answer will be.
[4:56] So clearly, there&#39;s some sense in which using the list is cheating.
[4:59] And what makes for a more interesting puzzle and a richer information theory lesson
[5:03] is to instead use some more universal data like relative word frequencies in
[5:06] general to capture this intuition of having a preference for more common words.
[5:11] So of these 13,000 possibilities, how should we choose the opening guess?
[5:16] For example, if my friend proposes weary, how should we analyze its quality?
[5:20] Well, the reason he said he likes that unlikely W is that he likes
[5:23] the long shot nature of just how good it feels if you do hit that W.
[5:27] For example, if the first pattern revealed was something like this,
[5:31] then it turns out there are only 58 words in this giant lexicon that match that pattern.
[5:36] So that&#39;s a huge reduction from 13,000.
[5:38] But the flip side of that, of course, is that
[5:40] it&#39;s very uncommon to get a pattern like this.
[5:43] Specifically, if each word was equally likely to be the answer,
[5:46] the probability of hitting this pattern would be 58 divided by around 13,000.
[5:51] Of course, they&#39;re not equally likely to be answers.
[5:53] Most of these are very obscure and even questionable words.
[5:56] But at least for our first pass at all of this,
[5:58] let&#39;s assume that they&#39;re all equally likely and then refine that a bit later.
[6:02] The point is, the pattern with a lot of information is,
[6:04] by its very nature, unlikely to occur.
[6:07] In fact, what it means to be informative is that it&#39;s unlikely.
[6:11] A much more probable pattern to see with this opening would be something like this,
[6:16] where, of course, there&#39;s not a W in it.
[6:18] Maybe there&#39;s an E, and maybe there&#39;s no A, there&#39;s no R, there&#39;s no Y.
[6:22] In this case, there are 1400 possible matches.
[6:25] If all were equally likely, it works out to be a probability
[6:28] of about 11% that this is the pattern you would see.
[6:30] So the most likely outcomes are also the least informative.
[6:34] To get a more global view here, let me show you the full distribution of
[6:37] probabilities across all of the different patterns that you might see.
[6:41] So each bar that you&#39;re looking at corresponds to a possible pattern of
[6:45] colors that could be revealed, of which there are 3 to the 5th possibilities,
[6:48] and they&#39;re organized from left to right, most common to least common.
[6:52] So the most common possibility here is that you get all grays.
[6:56] That happens about 14% of the time.
[6:58] And what you&#39;re hoping for when you make a guess is that you end up
[7:01] somewhere out in this long tail, like over here,
[7:04] where there&#39;s only 18 possibilities for what matches this pattern,
[7:07] that evidently look like this.
[7:09] Or if we venture a little farther to the left,
[7:11] you know, maybe we go all the way over here.
[7:14] Okay, here&#39;s a good puzzle for you.
[7:16] What are the three words in the English language that start with a W,
[7:19] end with a Y, and have an R somewhere in them?
[7:22] Turns out, the answers are, let&#39;s see, wordy, wormy, and wryly.
[7:27] So to judge how good this word is overall, we want some kind of measure of the
[7:31] expected amount of information that you&#39;re going to get from this distribution.
[7:35] If we go through each pattern and we multiply its probability of occurring times
[7:39] something that measures how informative it is, that can maybe give us an objective score.
[7:45] Now your first instinct for what that something should be might be the number of matches.
[7:50] You want a lower average number of matches.
[7:52] But instead I&#39;d like to use a more universal measurement that we often ascribe to
[7:56] information, and one that will be more flexible once we have a different probability
[8:00] assigned to each of these 13,000 words for whether or not they&#39;re actually the answer.
[8:10] The standard unit of information is the bit, which has a little bit of a funny formula,
[8:14] but is really intuitive if we just look at examples.
[8:17] If you have an observation that cuts your space of possibilities in half,
[8:21] we say that it has one bit of information.
[8:24] In our example, the space of possibilities is all possible words,
[8:26] and it turns out about half of the five letter words have an S, a little less than that,
[8:30] but about half.
[8:31] So that observation would give you one bit of information.
[8:34] If instead a new fact chops down that space of possibilities by a factor of four,
[8:39] we say that it has two bits of information.
[8:41] For example, it turns out about a quarter of these words have a T.
[8:45] If the observation cuts that space by a factor of eight,
[8:47] we say it&#39;s three bits of information, and so on and so forth.
[8:50] Four bits cuts it into a sixteenth, five bits cuts it into a thirty second.
[8:54] So now&#39;s when you might want to take a moment and pause and ask for yourself,
[8:58] what is the formula for information for the number of bits
[9:00] in terms of the probability of an occurrence?
[9:03] Well, what we&#39;re saying here is basically that when you take one half to the number of
[9:07] bits, that&#39;s the same thing as the probability,
[9:09] which is the same thing as saying two to the power of the number of bits is one over
[9:13] the probability, which rearranges further to saying the information is the log base
[9:17] two of one divided by the probability.
[9:19] And sometimes you see this with one more rearrangement still where
[9:22] the information is the negative log base two of the probability.
[9:25] Expressed like this, it can look a little bit weird to the uninitiated,
[9:28] but it really is just the very intuitive idea of asking how
[9:31] many times you&#39;ve cut down your possibilities in half.
[9:35] Now if you&#39;re wondering, you know, I thought we were just playing a fun word game,
[9:37] why are logarithms entering the picture?
[9:39] One reason this is a nicer unit is it&#39;s just a lot easier to talk about very
[9:43] unlikely events, much easier to say that an observation has 20 bits of information
[9:48] than it is to say that the probability of such and such occurring is 0.0000095.
[9:53] But a more substantive reason that this logarithmic expression turned out to be a very
[9:57] useful addition to the theory of probability is the way that information adds together.
[10:02] For example, if one observation gives you two bits of information,
[10:05] cutting your space down by four, and then a second observation like your second
[10:08] guess in Wordle gives you another three bits of information,
[10:11] chopping you down further by another factor of eight,
[10:14] the two together give you five bits of information.
[10:17] In the same way that probabilities like to multiply, information likes to add.
[10:21] So as soon as we&#39;re in the realm of something like an expected value,
[10:24] where we&#39;re adding a bunch of numbers up, the logs make it a lot nicer to deal with.
[10:28] Let&#39;s go back to our distribution for weary and add another little tracker on here,
[10:32] showing us how much information there is for each pattern.
[10:35] The main thing I want you to notice is that the higher the probability as we get
[10:39] to those more likely patterns, the lower the information, the fewer bits you gain.
[10:43] The way we measure the quality of this guess will
[10:45] be to take the expected value of this information.
[10:48] When we go through each pattern, we say how probable is it and
[10:51] then we multiply that by how many bits of information do we get.
[10:54] And in the example of weary, that turns out to be 4.9 bits.
[10:58] So on average, the information you get from this opening guess is as
[11:01] good as chopping your space of possibilities in half about five times.
[11:05] By contrast, an example of a guess with a higher expected
[11:09] information value would be something like slate.
[11:13] In this case, you&#39;ll notice the distribution looks a lot flatter.
[11:15] In particular, the most probable occurrence of all grays only has about a 6% chance
[11:20] of occurring, so at minimum you&#39;re getting evidently 3.9 bits of information.
[11:25] But that&#39;s a minimum, more typically you&#39;d get something better than that.
[11:29] And it turns out when you crunch the numbers on this one and add
[11:32] up all the relevant terms, the average information is about 5.8.
[11:37] So in contrast with weary, your space of possibilities will
[11:40] be about half as big after this first guess, on average.
[11:44] There&#39;s actually a fun story about the name for
[11:46] this expected value of information quantity.
[11:48] You see, information theory was developed by Claude Shannon,
[11:51] who was working at Bell Labs in the 1940s, but he was talking about some of his
[11:54] yet-to-be-published ideas with John von Neumann,
[11:57] who was this intellectual giant of the time, very prominent in math and physics
[12:00] and the beginnings of what was becoming computer science.
[12:04] And when he mentioned that he didn&#39;t really have a good name for this
[12:07] expected value of information quantity, von Neumann supposedly said,
[12:10] so the story goes, well, you should call it entropy, and for two reasons.
[12:14] In the first place, your uncertainty function has been used in statistical mechanics
[12:18] under that name, so it already has a name, and in the second place, and more important,
[12:22] nobody knows what entropy really is, so in a debate you&#39;ll always have the advantage.
[12:27] So if the name seems a little bit mysterious, and if this story is to be believed,
[12:31] that&#39;s kind of by design.
[12:33] Also if you&#39;re wondering about its relation to all of that second law of thermodynamics
[12:37] stuff from physics, there definitely is a connection,
[12:39] but in its origins Shannon was just dealing with pure probability theory,
[12:43] and for our purposes here, when I use the word entropy,
[12:45] I just want you to think the expected information value of a particular guess.
[12:50] You can think of entropy as measuring two things simultaneously.
[12:54] The first one is how flat is the distribution?
[12:57] The closer a distribution is to uniform, the higher that entropy will be.
[13:01] In our case, where there are 3 to the 5th total patterns, for a uniform distribution,
[13:06] observing any one of them would have information log base 2 of 3 to the 5th,
[13:11] which happens to be 7.92, so that is the absolute maximum that you could possibly have
[13:16] for this entropy.
[13:17] But entropy is also kind of a measure of how many
[13:20] possibilities there are in the first place.
[13:22] For example, if you happen to have some word where there&#39;s only 16 possible patterns,
[13:27] and each one is equally likely, this entropy, this expected information, would be 4 bits.
[13:32] But if you have another word where there&#39;s 64 possible patterns that could come up,
[13:36] and they&#39;re all equally likely, then the entropy would work out to be 6 bits.
[13:41] So if you see some distribution out in the wild that has an entropy of 6 bits,
[13:45] it&#39;s sort of like it&#39;s saying there&#39;s as much variation and uncertainty
[13:49] in what&#39;s about to happen as if there were 64 equally likely outcomes.
[13:54] For my first pass at the Wurtelebot, I basically had it just do this.
[13:57] It goes through all of the different possible guesses that you could have,
[14:01] all 13,000 words, it computes the entropy for each one, or more specifically,
[14:05] the entropy of the distribution across all patterns that you might see for each one,
[14:09] and then it picks the highest, since that&#39;s the one that&#39;s likely to chop
[14:13] down your space of possibilities as much as possible.
[14:17] And even though I&#39;ve only been talking about the first guess here,
[14:19] it does the same thing for the next few guesses.
[14:21] For example, after you see some pattern on that first guess,
[14:24] which would restrict you to a smaller number of possible words based on what
[14:27] matches with that, you just play the same game with respect to that smaller set of words.
[14:32] For a proposed second guess, you look at the distribution of all patterns
[14:36] that could occur from that more restricted set of words,
[14:38] you search through all 13,000 possibilities, and you find the one that
[14:42] maximizes that entropy.
[14:45] To show you how this works in action, let me just pull up a little variant of
[14:48] Wurtele that I wrote that shows the highlights of this analysis in the margins.
[14:53] So after doing all its entropy calculations, on the right here
[14:56] it&#39;s showing us which ones have the highest expected information.
[15:00] Turns out the top answer, at least at the moment, we&#39;ll refine this later,
[15:05] is Tares, which means, um, of course, a vetch, the most common vetch.
[15:11] Each time we make a guess here, where maybe I kind of ignore its
[15:13] recommendations and go with slate, because I like slate,
[15:16] we can see how much expected information it had,
[15:18] but then on the right of the word here it&#39;s showing us how much actual
[15:22] information we got given this particular pattern.
[15:25] So here it looks like we were a little unlucky, we were expected to get 5.8,
[15:27] but we happened to get something with less than that.
[15:30] And then on the left side here it&#39;s showing us all of
[15:32] the different possible words given where we are now.
[15:35] The blue bars are telling us how likely it thinks each word is,
[15:38] so at the moment it&#39;s assuming each word is equally likely to occur,
[15:41] but we&#39;ll refine that in a moment.
[15:44] And then this uncertainty measurement is telling us the entropy of this distribution
[15:48] across the possible words, which right now, because it&#39;s a uniform distribution,
[15:52] is just a needlessly complicated way to count the number of possibilities.
[15:56] For example, if we were to take 2 to the power of 13.66,
[15:59] that should be around the 13,000 possibilities.
[16:02] Um, a little bit off here, but only because I&#39;m not showing all the decimal places.
[16:06] At the moment that might feel redundant and like it&#39;s overly complicating things,
[16:09] but you&#39;ll see why it&#39;s useful to have both numbers in a minute.
[16:12] So here it looks like it&#39;s suggesting the highest entropy for our second guess is Raman,
[16:16] which again just really doesn&#39;t feel like a word.
[16:19] So to take the moral high ground here I&#39;m going to go ahead and type in Rains.
[16:25] And again it looks like we were a little unlucky.
[16:27] We were expecting 4.3 bits and we only got 3.39 bits of information.
[16:31] So that takes us down to 55 possibilities.
[16:34] And here maybe I&#39;ll just actually go with what it&#39;s suggesting,
[16:37] which is combo, whatever that means.
[16:40] And, okay, this is actually a good chance for a puzzle.
[16:42] It&#39;s telling us this pattern gives us 4.7 bits of information.
[16:47] But over on the left, before we see that pattern, there were 5.78 bits of uncertainty.
[16:52] So as a quiz for you, what does that mean about the number of remaining possibilities?
[16:58] Well it means that we&#39;re reduced down to 1 bit of uncertainty,
[17:01] which is the same thing as saying that there&#39;s 2 possible answers.
[17:04] It&#39;s a 50-50 choice.
[17:06] And from here, because you and I know which words are more common,
[17:09] we know that the answer should be abyss.
[17:11] But as it&#39;s written right now, the program doesn&#39;t know that.
[17:13] So it just keeps going, trying to gain as much information as it can,
[17:16] until it&#39;s only one possibility left, and then it guesses it.
[17:20] So obviously we need a better endgame strategy,
[17:22] but let&#39;s say we call this version 1 of our wordle solver,
[17:25] and then we go and run some simulations to see how it does.
[17:30] So the way this is working is it&#39;s playing every possible wordle game.
[17:34] It&#39;s going through all of those 2315 words that are the actual wordle answers.
[17:38] It&#39;s basically using that as a testing set.
[17:41] And with this naive method of not considering how common a word is,
[17:44] and just trying to maximize the information at each step along the way,
[17:47] until it gets down to one and only one choice.
[17:50] By the end of the simulation, the average score works out to be about 4.124.
[17:55] Which is not bad, to be honest, I kind of expect it to do worse.
[17:59] But the people who play wordle will tell you that they can usually get it in 4.
[18:02] The real challenge is to get as many in 3 as you can.
[18:05] It&#39;s a pretty big jump between the score of 4 and the score of 3.
[18:08] The obvious low-hanging fruit here is to somehow incorporate
[18:11] whether or not a word is common, and how exactly do we do that.
[18:22] The way I approached it is to get a list of the relative frequencies for all of
[18:26] the words in the English language, and I just used Mathematica&#39;s word frequency
[18:30] data function, which itself pulls from the Google Books English Ngram public dataset.
[18:35] And it&#39;s kind of fun to look at, for example if we sort
[18:37] it from the most common words to the least common words.
[18:40] Evidently these are the most common, 5-letter words in the English language.
[18:43] Or rather, these is the 8th most common.
[18:46] First is which, after which there&#39;s there and there.
[18:49] First itself is not first, but 9th, and it makes sense that these
[18:52] other words could come about more often, where those after first are after,
[18:55] where, and those being just a little bit less common.
[18:59] Now, in using this data to model how likely each of these words is to
[19:03] be the final answer, it shouldn&#39;t just be proportional to the frequency,
[19:07] because for example which is given a score of 0.002 in this dataset,
[19:11] whereas the word braid is in some sense about 1000 times less likely.
[19:15] But both of these are common enough words that they&#39;re almost
[19:18] certainly worth considering, so we want more of a binary cutoff.
[19:21] The way I went about it is to imagine taking this whole sorted list of words,
[19:25] and then arranging it on an x-axis, and then applying the sigmoid function,
[19:29] which is the standard way to have a function whose output is basically binary,
[19:33] it&#39;s either 0 or it&#39;s 1, but there&#39;s a smoothing in between for that region of
[19:37] uncertainty.
[19:39] So essentially, the probability that I&#39;m assigning to each word for being in the final
[19:43] list will be the value of the sigmoid function above wherever it sits on the x-axis.
[19:49] Now obviously this depends on a few parameters,
[19:52] for example how wide a space on the x-axis those words fill determines how
[19:56] gradually or steeply we drop off from 1 to 0,
[19:58] and where we situate them left to right determines the cutoff.
[20:02] And to be honest the way I did this was kind of just
[20:05] licking my finger and sticking it into the wind.
[20:07] I looked through the sorted list and tried to find a window where
[20:10] when I looked at it I figured about half of these words are more
[20:13] likely than not to be the final answer, and used that as the cutoff.
[20:17] Now once we have a distribution like this across the words,
[20:19] it gives us another situation where entropy becomes this really useful measurement.
[20:24] For example, let&#39;s say we were playing a game and we start with my old openers,
[20:28] which were other and nails, and we end up with a situation
[20:30] where there&#39;s four possible words that match it.
[20:33] And let&#39;s say we consider them all equally likely,
[20:36] let me ask you, what is the entropy of this distribution?
[20:41] Well, the information associated with each one of these possibilities is
[20:45] going to be the log base 2 of 4, since each one is 1 and 4, and that&#39;s 2.
[20:50] 2 bits of information, 4 possibilities.
[20:52] All very well and good.
[20:54] But what if I told you that actually there&#39;s more than 4 matches?
[20:58] In reality, when we look through the full word list, there are 16 words that match it.
[21:02] But suppose our model puts a really low probability on those other 12 words of actually
[21:06] being the final answer, something like 1 in 1000 because they&#39;re really obscure.
[21:11] Now let me ask you, what is the entropy of this distribution?
[21:15] If entropy was purely measuring the number of matches here,
[21:18] then you might expect it to be something like the log base 2 of 16,
[21:22] which would be 4, two more bits of uncertainty than we had before.
[21:26] But of course the actual uncertainty is not really that different from what we had before.
[21:30] Just because there&#39;s these 12 really obscure words doesn&#39;t mean that it would be
[21:33] all that more surprising to learn that the final answer is charm, for example.
[21:38] So when you actually do the calculation here and you add up the probability of
[21:42] each occurrence times the corresponding information, what you get is 2.11 bits.
[21:46] Just saying, it&#39;s basically two bits, basically those four possibilities,
[21:49] but there&#39;s a little more uncertainty because of all of those highly unlikely events,
[21:53] though if you did learn them you&#39;d get a ton of information from it.
[21:57] So zooming out, this is part of what makes Wordle
[21:59] such a nice example for an information theory lesson.
[22:01] We have these two distinct feeling applications for entropy.
[22:05] The first one telling us what&#39;s the expected information we&#39;ll get from a given guess,
[22:09] and the second one saying can we measure the remaining uncertainty
[22:13] among all of the words we have possible.
[22:16] And I should emphasize, in that first case where we&#39;re looking
[22:19] at the expected information of a guess, once we have an unequal weighting to the words,
[22:22] that affects the entropy calculation.
[22:24] For example, let me pull up that same case we were looking at
[22:27] earlier of the distribution associated with Weary,
[22:30] but this time using a non-uniform distribution across all possible words.
[22:34] So let me see if I can find a part here that illustrates it pretty well.
[22:40] Okay, here, this is pretty good.
[22:42] Here we have two adjacent patterns that are about equally likely,
[22:45] but one of them we&#39;re told has 32 possible words that match it.
[22:49] And if we check what they are, these are those 32,
[22:51] which are all just very unlikely words as you scan your eyes over them.
[22:55] It&#39;s hard to find any that feel like plausible answers, maybe yells,
[22:59] but if we look at the neighboring pattern in the distribution,
[23:02] which is considered just about as likely, we&#39;re told that it only has 8 possible matches.
[23:06] So a quarter as many matches, but it&#39;s about as likely.
[23:09] And when we pull up those matches, we can see why.
[23:12] Some of these are actual plausible answers like ring or wrath or raps.
[23:17] To illustrate how we incorporate all that, let
[23:20] me pull up version two of the Wordlebot here.
[23:22] And there are two or three main differences from the first one that we saw.
[23:25] First off, like I just said, the way that we&#39;re computing these entropies,
[23:29] these expected values of information, is now using the more refined distributions across
[23:33] the patterns that incorporates the probability that a given word would actually be the
[23:37] answer.
[23:38] As it happens, tears is still number one, though the ones following are a bit different.
[23:44] Second, when it ranks its top picks, it&#39;s now going to keep a model of the
[23:47] probability that each word is the actual answer,
[23:50] and it&#39;ll incorporate that into its decision,
[23:52] which is easier to see once we have a few guesses on the table.
[23:55] Again, ignoring its recommendation because we can&#39;t let machines rule our lives.
[24:01] And I suppose I should mention another thing different here is over on the left,
[24:04] that uncertainty value, that number of bits, is no longer just
[24:07] redundant with the number of possible matches.
[24:10] Now if we pull it up and calculate 2 to the 8.02, which would be a little above 256,
[24:15] I guess 259, what it&#39;s saying is even though there are 526 total words that
[24:20] actually match this pattern, the amount of uncertainty it has is more akin
[24:24] to what it would be if there were 259 equally likely outcomes.
[24:29] You can think of it like this.
[24:31] It knows borks is not the answer, same with yorts and zorl and zorus.
[24:34] So it&#39;s a little less uncertain than it was in the previous case.
[24:37] This number of bits will be smaller.
[24:40] And if I keep playing the game, I&#39;m refining this down with a couple
[24:43] guesses that are apropos of what I would like to explain here.
[24:48] By the fourth guess, if you look over at its top picks,
[24:51] you can see it&#39;s no longer just maximizing the entropy.
[24:54] So at this point, there&#39;s technically seven possibilities,
[24:57] but the only ones with a meaningful chance are dorms and words.
[25:00] And you can see it ranks choosing both of those above all of these
[25:03] other values that strictly speaking would give more information.
[25:07] The very first time I did this, I just added up these two numbers to measure
[25:10] the quality of each guess, which actually worked better than you might suspect.
[25:14] But it really didn&#39;t feel systematic.
[25:16] And I&#39;m sure there&#39;s other approaches people could take.
[25:17] But here&#39;s the one I landed on.
[25:19] If we&#39;re considering the prospect of a next guess, like in this case words,
[25:23] what we really care about is the expected score of our game if we do that.
[25:28] And to calculate that expected score, we say what&#39;s the probability that
[25:32] words is the actual answer, which at the moment it describes 58% to.
[25:36] We say with a 58% chance, our score in this game would be four.
[25:40] And then with the probability of one minus that 58%,
[25:43] our score will be more than that four.
[25:46] How much more we don&#39;t know, but we can estimate it based on how
[25:49] much uncertainty there&#39;s likely to be once we get to that point.
[25:52] Specifically, at the moment, there&#39;s 1.44 bits of uncertainty.
[25:56] If we guess words, it&#39;s telling us the expected information we&#39;ll get is 1.27 bits.
[26:01] So if we guess words, this difference represents how much
[26:04] uncertainty we&#39;re likely to be left with after that happens.
[26:08] What we need is some kind of function, which I&#39;m calling f here,
[26:11] that associates this uncertainty with an expected score.
[26:14] And the way it went about this was to just plot a bunch of the data from previous
[26:18] games based on version one of the bot to say, hey,
[26:21] what was the actual score after various points with certain very measurable
[26:25] amounts of uncertainty?
[26:27] For example, these data points here that are sitting above a value that&#39;s
[26:30] around like 8.7 or so are saying for some games,
[26:33] after a point at which there were 8.7 bits of uncertainty,
[26:36] it took two guesses to get the final answer.
[26:39] For other games, it took three guesses.
[26:40] For other games, it took four guesses.
[26:43] If we shift over to the left here, all the points over zero are saying whenever
[26:46] there&#39;s zero bits of uncertainty, which is to say there&#39;s only one possibility,
[26:50] then the number of guesses required is always just one, which is reassuring.
[26:54] Whenever there was one bit of uncertainty, meaning it was essentially
[26:58] just down to two possibilities, then sometimes it required one more guess,
[27:01] sometimes it required two more guesses, and so on and so forth here.
[27:05] Maybe a slightly easier way to visualize this
[27:07] data is to bucket it together and take averages.
[27:11] For example, this bar here is saying among all the points where we had one bit
[27:15] of uncertainty, on average the number of new guesses required was about 1.5.
[27:22] And the bar over here is saying among all of the different games where
[27:25] at some point the uncertainty was a little above four bits,
[27:28] which is like narrowing it down to 16 different possibilities,
[27:31] then on average it requires a little more than two guesses from that point forward.
[27:36] And from here I just did a regression to fit a function that seemed reasonable to this.
[27:39] And remember, the whole point of doing any of that is so that we can quantify this
[27:44] intuition that the more information we gain from a word,
[27:47] the lower the expected score will be.
[27:49] So, with this as version 2.0, if we go back and run the same set of simulations,
[27:54] having it play against all 2315 possible wordle answers, how does it do?
[28:00] Well in contrast to our first version, it&#39;s definitely better, which is reassuring.
[28:04] All said and done, the average is around 3.6.
[28:06] Although unlike the first version, there are a couple times that it loses,
[28:09] and requires more than six in this circumstance.
[28:12] Presumably because there&#39;s times when it&#39;s making that tradeoff
[28:15] to actually go for the goal rather than maximizing information.
[28:19] So can we do better than 3.6?
[28:22] We definitely can.
[28:23] Now, I said at the start that it&#39;s most fun to try not incorporating
[28:26] the true list of wordle answers into the way that it builds its model.
[28:29] But if we do incorporate it, the best performance I could get was around 3.43.
[28:35] So if we try to get more sophisticated than just using word frequency data
[28:38] to choose this prior distribution, this 3.43 probably gives a max at how
[28:42] good we could get with that, or at least how good I could get with that.
[28:46] That best performance essentially just uses the ideas that I&#39;ve been talking about here,
[28:49] but it goes a little farther, like it does a search for the expected
[28:52] information two steps forward rather than just one.
[28:55] Originally I was planning on talking more about that,
[28:57] but I realize we&#39;ve actually gone quite long as it is.
[29:00] The one thing I&#39;ll say is after doing this two-step search and
[29:03] then running a couple sample simulations in the top candidates,
[29:06] so far for me at least, it&#39;s looking like Crane is the best opener.
[29:09] Who would have guessed?
[29:10] Also if you use the true wordle list to determine your space of possibilities,
[29:14] then the uncertainty you start with is a little over 11 bits.
[29:18] And it turns out just from a brute force search,
[29:20] the maximum possible expected information after the first two guesses is around 10 bits.
[29:26] Which suggests that best case scenario, after your first two guesses,
[29:30] with perfectly optimal play, you&#39;ll be left with around one bit of uncertainty.
[29:34] Which is the same as being down to two possible guesses.
[29:37] But I think it&#39;s fair and probably pretty conservative to say that you could never
[29:41] possibly write an algorithm that gets this average as low as three,
[29:44] because with the words available to you, there&#39;s simply not room to get enough
[29:48] information after only two steps to be able to guarantee the answer in the third slot
[29:51] every single time without fail.
