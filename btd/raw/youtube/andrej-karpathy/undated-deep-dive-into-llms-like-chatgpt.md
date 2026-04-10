---
title: "Deep Dive into LLMs like ChatGPT"
creator: "andrej-karpathy"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
video_id: "7xTGNNLPyMI"
duration: "3:31:24"
transcript_method: "youtube-captions"
segment_count: 5761
char_count: 215364
status: ingested
topics: []
meta_patterns: []
---

# Deep Dive into LLMs like ChatGPT

**Creator**: andrej-karpathy | **Duration**: 3:31:24
**URL**: https://www.youtube.com/watch?v=7xTGNNLPyMI
**Transcript**: 5761 segments, 215364 chars

## Transcript

hi everyone so I've wanted to make this video for a while it is a comprehensive but General audience introduction to large language models like Chachi PT and what I'm hoping to achieve in this video is to give you kind of mental models for thinking through what it is that this tool is it is obviously magical and amazing in some respects it's uh really good at some things not very good at other things and there's also a lot of sharp edges to be aware of so what is behind this text box you can put anything in there and press enter but uh what should we be putting there and what are these words generated back how does this work and what what are you talking to exactly so I'm hoping to get at all those topics in this video we're going to go through the entire pipeline of how this stuff is built but I'm going to keep everything uh sort of accessible to a general audience so let's take a look at first how you build something like chpt and along the way I'm going to talk about um you know some of the sort of cognitive psychological implications of the tools okay so let's build Chachi PT so there's going to be multiple stages arranged sequentially the first stage is called the pre-training stage and the first step of the pre-training stage is to download and process the internet now to get a sense of what this roughly looks like I recommend looking at this URL here so um this company called hugging face uh collected and created and curated this data set called Fine web and they go into a lot of detail on this block post on how how they constructed the fine web data set and all of the major llm providers like open AI anthropic and Google and so on will have some equivalent internally of something like the fine web data set so roughly what are we trying to achieve here we're trying to get ton of text from the internet from publicly available sources so we're trying to have a huge quantity of very high quality documents and we also want very large diversity of documents because we want to have a lot of knowledge inside these models so we want large diversity of high quality documents and we want many many of them and achieving this is uh quite complicated and as you can see here takes multiple stages to do well so let's take a look at what some of these stages look like in a bit for now I'd like to just like to note that for example the fine web data set which is fairly representative what you would see in a production grade application actually ends up being only about 44 terabyt of dis space um you can get a USB stick for like a terabyte very easily or I think this could fit on a single hard drive almost today so this is not a huge amount of data at the end of the day even though the internet is very very large we're working with text and we're also filtering it aggressively so we end up with about 44 terabytes in this example so let's take a look at uh kind of what this data looks like and what some of these stages uh also are so the starting point for a lot of these efforts and something that contributes most of the data by the end of it is Data from common crawl so common craw is an organization that has been basically scouring the internet since 2007 so as of 2024 for example common CW has indexed 2.7 billion web pages uh and uh they have all these crawlers going around the internet and what you end up doing basically is you start with a few seed web pages and then you follow all the links and you just keep following links and you keep indexing all the information and you end up with a ton of data of the internet over time so this is usually the starting point for a lot of the uh for a lot of these efforts now this common C data is quite raw and is filtered in many many different ways so here they Pro they document this is the same diagram they document a little bit the kind of processing that happens in these stages so the first thing here is something called URL filtering so what that is referring to is that there's these block lists of uh basically URLs that are or domains that uh you don't want to be getting data from so usually this includes things like U malware websites spam websites marketing websites uh racist websites adult sites and things like that so there's a ton of different types of websites that are just eliminated at this stage because we don't want them in our data set um the second part is text extraction you have to remember that all these web pages this is the raw HTML of these web pages that are being saved by these crawlers so when I go to inspect here this is what the raw HTML actually looks like you'll notice that it's got all this markup uh like lists and stuff like that and there's CSS and all this kind of stuff so this is um computer code almost for these web pages but what we really want is we just want this text right we just want the text of this web page and we don't want the navigation and things like that so there's a lot of filtering and processing uh and heris that go into uh adequately filtering for just their uh good content of these web pages the next stage here is language filtering so for example fine web filters uh using a language classifier they try to guess what language every single web page is in and then they only keep web pages that have more than 65% of English as an example and so you can get a sense that this is like a design decision that different companies can uh can uh take for themselves what fraction of all different types of languages are we going to include in our data set because for example if we filter out all of the Spanish as an example then you might imagine that our model later will not be very good at Spanish because it's just never seen that much data of that language and so different companies can focus on multilingual performance to uh to a different degree as an example so fine web is quite focused on English and so their language model if they end up training one later will be very good at English but not may be very good at other languages after language filtering there's a few other filtering steps and D duplication and things like that um finishing with for example the pii removal this is personally identifiable information so as an example addresses Social Security numbers and things like that you would try to detect them and you would try to filter out those kinds of web pages from the the data set as well so there's a lot of stages here and I won't go into full detail but it is a fairly extensive part of the pre-processing and you end up with for example the fine web data set so when you click in on it uh you can see some examples here of what this actually ends up looking like and anyone can download this on the huging phase web page and so here are some examples of the final text that ends up in the training set so this is some article about tornadoes in 2012 um so there's some t tadoes in 2020 in 2012 and what happened uh this next one is something about did you know you have two little yellow 9vt battery sized adrenal glands in your body okay so this is some kind of a odd medical article so just think of these as basically uh web pages on the internet filtered just for the text in various ways and now we have a ton of text 40 terabytes off it and that now is the starting point for the next step of this stage now I wanted to give you an intuitive sense of where we are right now so I took the first 200 web pages here and remember we have tons of them and I just take all that text and I just put it all together concatenate it and so this is what we end up with we just get this just just raw text raw internet text and there's a ton of it even in these 200 web pages so I can continue zooming out here and we just have this like massive tapestry of Text data and this text data has all these p patterns and what we want to do now is we want to start training neural networks on this data so the neural networks can internalize and model how this text flows right so we just have this giant texture of text and now we want to get neural Nets that mimic it okay now before we plug text into neural networks we have to decide how we're going to represent this text uh and how we're going to feed it in now the way our technology works for these neuron Lots is that they expect a one-dimensional sequence of symbols and they want a finite set of symbols that are possible and so we have to decide what are the symbols and then we have to represent our data as one-dimensional sequence of those symbols so right now what we have is a onedimensional sequence of text it starts here and it goes here and then it comes here Etc so this is a onedimensional sequence even though on my monitor of course it's laid out in a two-dimensional way but it goes from left to right and top to bottom right so it's a one-dimensional sequence of text now this being computers of course there's an underlying representation here so if I do what's called utf8 uh encode this text then I can get the raw bits that correspond to this text in the computer and that's what uh that looks like this so it turns out that for example this very first bar here is the first uh eight bits as an example so what is this thing right this is um representation that we are looking for uh in in a certain sense we have exactly two possible symbols zero and one and we have a very long sequence of it right now as it turns out um this sequence length is actually going to be very finite and precious resource uh in our neural network and we actually don't want extremely long sequences of just two symbols instead what we want is we want to trade off uh this um symbol size uh of this vocabulary as we call it and the resulting sequence length so we don't want just two symbols and extremely long sequences we're going to want more symbols and shorter sequences okay so one naive way of compressing or decreasing the length of our sequence here is to basically uh consider some group of consecutive bits for example eight bits and group them into a single what's called bite so because uh these bits are either on or off if we take a group of eight of them there turns out to be only 256 possible combinations of how these bits could be on or off and so therefore we can re repesent this sequence into a sequence of bytes instead so this sequence of bytes will be eight times shorter but now we have 256 possible symbols so every number here goes from 0 to 255 now I really encourage you to think of these not as numbers but as unique IDs or like unique symbols so maybe it's a bit more maybe it's better to actually think of these to replace every one of these with a unique Emoji you'd get something like this so um we basically have a sequence of emojis and there's 256 possible emojis you can think of it that way now it turns out that in production for state-of-the-art language models uh you actually want to go even Beyond this you want to continue to shrink the length of the sequence uh because again it is a precious resource in return for more symbols in your vocabulary and the way this is done is done by running what's called The Bite pair encoding algorithm and the way this works is we're basically looking for consecutive bytes or symbols that are very common so for example turns out that the sequence 116 followed by 32 is quite common and occurs very frequently so what we're going to do is we're going to group uh this um pair into a new symbol so we're going to Mint a symbol with an ID 256 and we're going to rewrite every single uh pair 11632 with this new symbol and then can we can iterate this algorithm as many times as we wish and each time when we mint a new symbol we're decreasing the length and we're increasing the symbol size and in practice it turns out that a pretty good setting of um the basically the vocabulary size turns out to be about 100,000 possible symbols so in particular GPT 4 uses 100, 277 symbols um and this process of converting from raw text into these symbols or as we call them tokens is the process called tokenization so let's now take a look at how gp4 performs tokenization conting from text to tokens and from tokens back to text and what this actually looks like so one website I like to use to explore these token representations is called tick tokenizer and so come here to the drop down and select CL 100 a base which is the gp4 base model tokenizer and here on the left you can put in text and it shows you the tokenization of that text so for example heo space world so hello world turns out to be exactly two Tokens The Token hello which is the token with ID 15339 and the token space world that is the token 1 1917 so um hello space world now if I was to join these two for example I'm going to get again two tokens but it's the token H followed by the token L world without the H um if I put in two Spa two spaces here between hello and world it's again a different uh tokenization there's a new token 220 here okay so you can play with this and see what happens here also keep in mind this is not uh this is case sensitive so if this is a capital H it is something else or if it's uh hello world then actually this ends up being three tokens instead of just two tokens yeah so you can play with this and get an sort of like an intuitive sense of uh what these tokens work like we're actually going to loop around to tokenization a bit later in the video for now I just wanted to show you the website and I wanted to uh show you that this text basically at the end of the day so for example if I take one line here this is what GT4 will see it as so this text will be a sequence of length 62 this is the sequence here and this is how the chunks of text correspond to these symbols and again there's 100, 27777 possible symbols and we now have one-dimensional sequences of those symbols so um yeah we're going to come back to tokenization but that's uh for now where we are okay so what I've done now is I've taken this uh sequence of text that we have here in the data set and I have re-represented it using our tokenizer into a sequence of tokens and this is what that looks like now so for example when we go back to the Fine web data set they mentioned that not only is this 44 terab of dis space but this is about a 15 trillion token sequence of um in this data set and so here these are just some of the first uh one or two or three or a few thousand here I think uh tokens of this data set but there's 15 trillion here uh to keep in mind and again keep in mind one more time that all of these represent little text chunks they're all just like atoms of these sequences and the numbers here don't make any sense they're just uh they're just unique IDs okay so now we get to the fun part which is the uh neural network training and this is where a lot of the heavy lifting happens computationally when you're training these neural networks so what we do here in this this step is we want to model the statistical relationships of how these tokens follow each other in the sequence so what we do is we come into the data and we take Windows of tokens so we take a window of tokens uh from this data fairly randomly and um the windows length can range anywhere anywhere between uh zero tokens actually all the way up to some maximum size that we decide on uh so for example in practice you could see a token with Windows of say 8,000 tokens now in principle we can use arbitrary window lengths of tokens uh but uh processing very long uh basically U window sequences would just be very computationally expensive so we just kind of decide that say 8,000 is a good number or 4,000 or 16,000 and we crop it there now in this example I'm going to be uh taking the first four tokens just so everything fits nicely so these tokens we're going to take a window of four tokens this bar view in and space single which are these token IDs and now what we're trying to do here is we're trying to basically predict the token that comes next in the sequence so 3962 comes next right so what we do now here is that we call this the context these four tokens are context and they feed into a neural network and this is the input to the neural network now I'm going to go into the detail of what's inside this neural network in a little bit for now it's important to understand is the input and the output of the neural net so the input are sequences of tokens of variable length anywhere between zero and some maximum size like 8,000 the output now is a prediction for what comes next so because our vocabulary has 100277 possible tokens the neural network is going to Output exactly that many numbers and all of those numbers correspond to the probability of that token as coming next in the sequence so it's making guesses about what comes next um in the beginning this neural network is randomly initialized so um and we're going to see in a little bit what that means but it's a it's a it's a random transformation so these probabilities in the very beginning of the training are also going to be kind of random uh so here I have three examples but keep in mind that there's 100,000 numbers here um so the probability of this token space Direction neural network is saying that this is 4% likely right now 11799 is 2% and then here the probility of 3962 which is post is 3% now of course we've sampled this window from our data set so we know what comes next we know and that's the label we know that the correct answer is that 3962 actually comes next in the sequence so now what we have is this mathematical process for doing an update to the neural network we have the way of tuning it and uh we're going to go into a little bit of of detail in a bit but basically we know that this probability here of 3% we want this probability to be higher and we want the probabilities of all the other tokens to be lower and so we have a way of mathematically calculating how to adjust and update the neural network so that the correct answer has a slightly higher probability so if I do an update to the neural network now the next time I Fe this particular sequence of four tokens into neural network the neural network will be slightly adjusted now and it will say Okay post is maybe 4% and case now maybe is 1% and uh Direction could become 2% or something like that and so we have a way of nudging of slightly updating the neuronet to um basically give a higher probability to the correct token that comes next in the sequence and now you just have to remember that this process happens not just for uh this um token here where these four fed in and predicted this one this process happens at the same time for all of these tokens in the entire data set and so in practice we sample little windows little batches of Windows and then at every single one of these tokens we want to adjust our neural network so that the probability of that token becomes slightly higher and this all happens in parallel in large batches of these tokens and this is the process of training the neural network it's a sequence of updating it so that it's predictions match up the statistics of what actually happens in your training set and its probabilities become consistent with the uh statistical patterns of how these tokens follow each other in the data so let's now briefly get into the internals of these neural networks just to give you a sense of what's inside so neural network internals so as I mentioned we have these inputs uh that are sequences of tokens in this case this is four input tokens but this can be anywhere between zero up to let's say 8,000 tokens in principle this can be an infinite number of tokens we just uh it would just be too computationally expensive to process an infinite number of tokens so we just crop it at a certain length and that becomes the maximum context length of that uh model now these inputs X are mixed up in a giant mathematical expression together with the parameters or the weights of these neural networks so here I'm showing six example parameters and their setting but in practice these uh um modern neural networks will have billions of these uh parameters and in the beginning these parameters are completely randomly set now with a random setting of parameters you might expect that this uh this neural network would make random predictions and it does in the beginning it's totally random predictions but it's through this process of iteratively updating the network uh as and we call that process training a neural network so uh that the setting of these parameters gets adjusted such that the outputs of our neural network becomes consistent with the patterns seen in our training set so think of these parameters as kind of like knobs on a DJ set and as you're twiddling these knobs you're getting different uh predictions for every possible uh token sequence input and training in neural network just means discovering a setting of parameters that seems to be consistent with the statistics of the training set now let me just give you an example what this giant mathematical expression looks like just to give you a sense and modern networks are massive expressions with trillions of terms probably but let me just show you a simple example here it would look something like this I mean these are the kinds of Expressions just to show you that it's not very scary we have inputs x uh like X1 x2 in this case two example inputs and they get mixed up with the weights of the network w0 W1 2 3 Etc and this mixing is simple things like multiplication addition addition exponentiation division Etc and it is the subject of neural network architecture research to design effective mathematical Expressions uh that have a lot of uh kind of convenient characteristics they are expressive they're optimizable they're paralyzable Etc and so but uh at the end of the day these are these are not complex expressions and basically they mix up the inputs with the parameters to make predictions and we're optimizing uh the parameters of this neural network so that the predictions come out consistent with the training set now I would like to show you an actual production grade example of what these neural networks look like so for that I encourage you to go to this website that has a very nice visualization of one of these networks so this is what you will find on this website and this neural network here that is used in production settings has this special kind of structure this network is called the Transformer and this particular one as an example has 8 5,000 roughly parameters now here on the top we take the inputs which are the token sequences and then information flows through the neural network until the output which here are the logit softmax but these are the predictions for what comes next what token comes next and then here there's a sequence of Transformations and all these intermediate values that get produced inside this mathematical expression s it is sort of predicting what comes next so as an example these tokens are embedded into kind of like this distributed representation as it's called so every possible token has kind of like a vector that represents it inside the neural network so first we embed the tokens and then those values uh kind of like flow through this diagram and these are all very simple mathematical Expressions individually so we have layer norms and Matrix multiplications and uh soft Maxes and so on so here kind of like the attention block of this Transformer and then information kind of flows through into the multi-layer perceptron block and so on and all these numbers here these are the intermediate values of the expression and uh you can almost think of these as kind of like the firing rates of these synthetic neurons but I would caution you to uh not um kind of think of it too much like neurons because these are extremely simple neurons compared to the neurons you would find in your brain your biological neurons are very complex dynamical processes that have memory and so on there's no memory in this expression it's a fixed mathematical expression from input to Output with no memory it's just a stateless so these are very simple neurons in comparison to biological neurons but you can still kind of loosely think of this as like a synthetic piece of uh brain tissue if you if you like uh to think about it that way so information flows through all these neurons fire until we get to the predictions now I'm not actually going to dwell too much on the precise kind of like mathematical details of all these Transformations honestly I don't think it's that important to get into what's really important to understand is that this is a mathematical function it is uh parameterized by some fixed set of parameters like say 85,000 of them and it is a way of transforming inputs into outputs and as we twiddle the parameters we are getting uh different kinds of predictions and then we need to find a good setting of these parameters so that the predictions uh sort of match up with the patterns seen in training set so that's the Transformer okay so I've shown you the internals of the neural network and we talked a bit about the process of training it I want to cover one more major stage of working with these networks and that is the stage called inference so in inference what we're doing is we're generating new data from the model and so uh we want to basically see what kind of patterns it has internalized in the parameters of its Network so to generate from the model is relatively straightforward we start with some tokens that are basically your prefix like what you want to start with so say we want to start with the token 91 well we feed it into the network and remember that the network gives us probabilities right it gives us this probability Vector here so what we can do now is we can basically flip a biased coin so um we can sample uh basically a token based on this probability distribution so the tokens that are given High probability by the model are more likely to be sampled when you flip this biased coin you can think of it that way so we sample from the distribution to get a single unique token so for example token 860 comes next uh so 860 in this case when we're generating from model could come next now 860 is a relatively likely token it might not be the only possible token in this case there could be many other tokens that could have been sampled but we could see that 86c is a relatively likely token as an example and indeed in our training examp example here 860 does follow 91 so let's now say that we um continue the process so after 91 there's a60 we append it and we again ask what is the third token let's sample and let's just say that it's 287 exactly as here let's do that again we come back in now we have a sequence of three and we ask what is the likely fourth token and we sample from that and get this one and now let's say we do it one more time we take those four we sample and we get this one and this 13659 uh this is not actually uh 3962 as we had before so this token is the token article uh instead so viewing a single article and so in this case we didn't exactly reproduce the sequence that we saw here in the training data so keep in mind that these systems are stochastic they have um we're sampling and we're flipping coins and sometimes we lock out and we reproduce some like small chunk of the text and training set but sometimes we're uh we're getting a token that was not verbatim part of any of the documents in the training data so we're going to get sort of like remixes of the data that we saw in the training because at every step of the way we can flip and get a slightly different token and then once that token makes it in if you sample the next one and so on you very quickly uh start to generate token streams that are very different from the token streams that UR in the training documents so statistically they will have similar properties but um they are not identical to your training data they're kind of like inspired by the training data and so in this case we got a slightly different sequence and why would we get article you might imagine that article is a relatively likely token in the context of bar viewing single Etc and you can imagine that the word article followed this context window somewhere in the training documents uh to some extent and we just happen to sample it here at that stage so basically inference is just uh predicting from these distributions one at a time we continue feeding back tokens and getting the next one and we uh we're always flipping these coins and depending on how lucky or unlucky we get um we might get very different kinds of patterns depending on how we sample from these probability distributions so that's inference so in most common scenarios uh basically downloading the internet and tokenizing it is is a pre-processing step you do that a single time and then uh once you have your token sequence we can start training networks and in Practical cases you would try to train many different networks of different kinds of uh settings and different kinds of arrangements and different kinds of sizes and so you''ll be doing a lot of neural network training and um then once you have a neural network and you train it and you have some specific set of parameters that you're happy with um then you can take the model and you can do inference and you can actually uh generate data from the model and when you're on chat GPT and you're talking with a model uh that model is trained and has been trained by open aai many months ago probably and they have a specific set of Weights that work well and when you're talking to the model all of that is just inference there's no more training those parameters are held fixed and you're just talking to the model sort of uh you're giving it some of the tokens and it's kind of completing token sequences and that's what you're seeing uh generated when you actually use the model on CH GPT so that model then just does inference alone so let's now look at an example of training an inference that is kind of concrete and gives you a sense of what this actually looks like uh when these models are trained now the example that I would like to work with and that I'm particularly fond of is that of opening eyes gpt2 so GPT uh stands for generatively pre-trained Transformer and this is the second iteration of the GPT series by open AI when you are talking to chat GPT today the model that is underlying all of the magic of that interaction is GPT 4 so the fourth iteration of that series now gpt2 was published in 2019 by openi in this paper that I have right here and the reason I like gpt2 is that it is the first time that a recognizably modern stack came together so um all of the pieces of gpd2 are recognizable today by modern standards it's just everything has gotten bigger now I'm not going to be able to go into the full details of this paper of course because it is a technical publication but some of the details that I would like to highlight are as follows gpt2 was a Transformer neural network just like you were just like the neural networks you would work with today it was it had 1.6 billion parameters right so these are the parameters that we looked at here it would have 1.6 billion of them today modern Transformers would have a lot closer to a trillion or several hundred billion probably the maximum context length here was 1,24 tokens so it is when we are sampling chunks of Windows of tokens from the data set we're never taking more than 1,24 tokens and so when you are trying to predict the next token in a sequence you will never have more than 1,24 tokens uh kind of in your context in order to make that prediction now this is also tiny by modern standards today the token uh the context lengths would be a lot closer to um couple hundred thousand or maybe even a million and so you have a lot more context a lot more tokens in history history and you can make a lot better prediction about the next token in the sequence in that way and finally gpt2 was trained on approximately 100 billion tokens and this is also fairly small by modern standards as I mentioned the fine web data set that we looked at here the fine web data set has 15 trillion tokens uh so 100 billion is is quite small now uh I actually tried to reproduce uh gpt2 for fun as part of this project called lm. C so you can see my rup of doing that in this post on GitHub under the lm. C repository so in particular the cost of training gpd2 in 2019 what was estimated to be approximately $40,000 but today you can do significantly better than that and in particular here it took about one day and about $600 uh but this wasn't even trying too hard I think you could really bring this down to about $100 today now why is it that the costs have come down so much well number one these data sets have gotten a lot better and the way we filter them extract them and prepare them has gotten a lot more refined and so the data set is of just a lot higher quality so that's one thing but really the biggest difference is that our computers have gotten much faster in terms of the hardware and we're going to look at that in a second and also the software for uh running these models and really squeezing out all all the speed from the hardware as it is possible uh that software has also gotten much better as as everyone has focused on these models and try to run them very very quickly now I'm not going to be able to go into the full detail of this gpd2 reproduction and this is a long technical post but I would like to still give you an intuitive sense for what it looks like to actually train one of these models as a researcher like what are you looking at and what does it look like what does it feel like so let me give you a sense of that a little bit okay so this is what it looks like let me slide this over so what I'm doing here is I'm training a gpt2 model right now and um what's happening here is that every single line here like this one is one update to the model so remember how here we are um basically making the prediction better for every one of these tokens and we are updating these weights or parameters of the neural net so here every single line is One update to the neural network where we change its parameters by a little bit so that it is better at predicting next token and sequence in particular every single line here is improving the prediction on 1 million tokens in the training set so we've basically taken 1 million tokens out of this data set and we've tried to improve the prediction of that token as coming next in a sequence on all 1 million of them simultaneously and at every single one of these steps we are making an update to the network for that now the number to watch closely is this number called loss and the loss is a single number that is telling you how well your neural network is performing right now and it is created so that low loss is good so you'll see that the loss is decreasing as we make more updates to the neural nut which corresponds to making better predictions on the next token in a sequence and so the loss is the number that you are watching as a neural network researcher and you are kind of waiting you're twiddling your thumbs uh you're drinking coffee and you're making sure that this looks good so that with every update your loss is improving and the network is getting better at prediction now here you see that we are processing 1 million tokens per update each update takes about 7 Seconds roughly and here we are going to process a total of 32,000 steps of optimization so 32,000 steps with 1 million tokens each is about 33 billion tokens that we are going to process and we're currently only about 420 step 20 out of 32,000 so we are still only a bit more than 1% done because I've only been running this for 10 or 15 minutes or something like that now every 20 steps I have configured this optimization to do inference so what you're seeing here is the model is predicting the next token in a sequence and so you sort of start it randomly and then you continue plugging in the tokens so we're running this inference step and this is the model sort of predicting the next token in the sequence and every time you see something appear that's a new token um so let's just look at this and you can see that this is not yet very coherent and keep in mind that this is only 1% of the way through training and so the model is not yet very good at predicting the next token in the sequence so what comes out is actually kind of a little bit of gibberish right but it still has a little bit of like local coherence so since she is mine it's a part of the information should discuss my father great companions Gordon showed me sitting over at and Etc so I know it doesn't look very good but let's actually scroll up and see what it looked like when I started the optimization so all the way here at step one so after 20 steps of optimization you see that what we're getting here is looks completely random and of course that's because the model has only had 20 updates to its parameters and so it's giving you random text because it's a random Network and so you can see that at least in comparison to this model is starting to do much better and indeed if we waited the entire 32,000 steps the model will have improved the point that it's actually uh generating fairly coherent English uh and the tokens stream correctly um and uh they they kind of make up English a a lot better um so this has to run for about a day or two more now and so uh at this stage we just make sure that the loss is decreasing everything is looking good um and we just have to wait and now um let me turn now to the um story of the computation that's required because of course I'm not running this optimization on my laptop that would be way too expensive uh because we have to run this neural network and we have to improve it and we have we need all this data and so on so you can't run this too well on your computer uh because the network is just too large uh so all of this is running on the computer that is out there in the cloud and I want to basically address the compute side of the store of training these models and what that looks like so let's take a look okay so the computer that I'm running this optimization on is this 8X h100 node so there are eight h100s in a single node or a single computer now I am renting this computer and it is somewhere in the cloud I'm not sure where it is physically actually the place I like to rent from is called Lambda but there are many other companies who provide this service so when you scroll down you can see that uh they have some on demand pricing for um sort of computers that have these uh h100s which are gpus and I'm going to show you what they look like in a second but on demand 8times Nvidia h100 uh GPU this machine comes for $3 per GPU per hour for example so you can rent these and then you get a machine in a cloud and you can uh go in and you can train these models and these uh gpus they look like this so this is one h100 GPU uh this is kind of what it looks like and you slot this into your computer and gpus are this uh perfect fit for training your networks because they are very computationally expensive but they display a lot of parallelism in the computation so you can have many independent workers kind of um working all at the same time in solving uh the matrix multiplication that's under the hood of training these neural networks so this is just one of these h100s but actually you would put them you would put multiple of them together so you could stack eight of them into a single node and then you can stack multiple nodes into an entire data center or an entire system so when we look at a data center can't spell when we look at a data center we start to see things that look like this right so we have one GPU goes to eight gpus goes to a single system goes to many systems and so these are the bigger data centers and there of course would be much much more expensive um and what's happening is that all the big tech companies really desire these gpus so they can train all these language models because they are so powerful and that has is fundamentally what has driven the stock price of Nvidia to be $3.4 trillion today as an example and why Nvidia has kind of exploded so this is the Gold Rush the Gold Rush is getting the gpus getting enough of them so they can all collaborate to perform this optimization and they're what are they all doing they're all collaborating to predict the next token on a data set like the fine web data set this is the computational workflow that that basically is extremely expensive the more gpus you have the more tokens you can try to predict and improve on and you're going to process this data set faster and you can iterate faster and get a bigger Network and train a bigger Network and so on so this is what all those machines are look like are uh are doing and this is why all of this is such a big deal and for example this is a article from like about a month ago or so this is why it's a big deal that for example Elon Musk is getting 100,000 gpus uh in a single Data Center and all of these gpus are extremely expensive are going to take a ton of power and all of them are just trying to predict the next token in the sequence and improve the network uh by doing so and uh get probably a lot more coherent text than what we're seeing here a lot faster okay so unfortunately I do not have a couple 10 or hundred million of dollars to spend on training a really big model like this but luckily we can turn to some big tech companies who train these models routinely and release some of them once they are done training so they've spent a huge amount of compute to train this network and they release the network at the end of the optimization so it's very useful because they've done a lot of compute for that so there are many companies who train these models routinely but actually not many of them release uh these what's called base models so the model that comes out at the end here is is what's called a base model what is a base model it's a token simulator right it's an internet text token simulator and so that is not by itself useful yet because what we want is what's called an assistant we want to ask questions and have it respond to answers these models won't do that they just uh create sort of remixes of the internet they dream internet pages so the base models are not very often released because they're kind of just only a step one of a few other steps that we still need to take to get in system however a few releases have been made so as an example the gbt2 model released the 1.6 billion sorry 1.5 billion model back in 2019 and this gpt2 model is a base model now what is a model release what does it look like to release these models so this is the gpt2 repository on GitHub well you need two things basically to release model number one we need the um python code usually that describes the sequence of operations in detail that they make in their model so um if you remember back this Transformer the sequence of steps that are taken here in this neural network is what is being described by this code so this code is sort of implementing the what's called forward pass of this neural network so we need the specific details of exactly how they wired up that neural network so this is just computer code and it's usually just a couple hundred lines of code it's not it's not that crazy and uh this is all fairly understandable and usually fairly standard what's not standard are the parameters that's where the actual value is what are the parameters of this neural network because there's 1.6 billion of them and we need the correct setting or a really good setting and so that's why in addition to this source code they release the parameters which in this case is roughly 1.5 billion parameters and these are just numbers so it's one single list of 1.5 billion numbers the precise and good setting of all the knobs such that the tokens come out well so uh you need those two things to get a base model release now gpt2 was released but that's actually a fairly old model as I mentioned so actually the model we're going to turn to is called llama 3 and that's the one that I would like to show you next so llama 3 so gpt2 again was 1.6 billion parameters trained on 100 billion tokens Lama 3 is a much bigger model and much more modern model it is released and trained by meta and it is a 45 billion parameter model trained on 15 trillion tokens in very much the same way just much much bigger um and meta has also made a release of llama 3 and that was part of this paper so with this paper that goes into a lot of detail the biggest base model that they released is the Lama 3.1 4.5 405 billion parameter model so this is the base model and then in addition to the base model you see here foreshadowing for later sections of the video they also released the instruct model and the instruct means that this is an assistant you can ask it questions and it will give you answers we still have yet to cover that part later for now let's just look at this base model this token simulator and let's play with it and try to think about you know what is this thing and how does it work and um what do we get at the end of this optimization if you let this run Until the End uh for a very big neural network on a lot of data so my favorite place to interact with the base models is this um company called hyperbolic which is basically serving the base model of the 405b Llama 3.1 so when you go to the website and I think you may have to register and so on make sure that in the models make sure that you are using llama 3.1 405 billion base it must be the base model and then here let's say the max tokens is how many tokens we're going to be gener rating so let's just decrease this to be a bit less just so we don't waste compute we just want the next 128 tokens and leave the other stuff alone I'm not going to go into the full detail here um now fundamentally what's going to happen here is identical to what happens here during inference for us so this is just going to continue the token sequence of whatever you prefix you're going to give it so I want to first show you that this model here is not yet an assistant so you can for example ask it what is 2 plus 2 it's not going to tell you oh it's four uh what else can I help you with it's not going to do that because what is 2 plus 2 is going to be tokenized and then those tokens just act as a prefix and then what the model is going to do now is just going to get the probability for the next token and it's just a glorified autocomplete it's a very very expensive autocomplete of what comes next um depending on the statistics of what it saw in its training documents which are basically web pages so let's just uh hit enter to see what tokens it comes up with as a continuation okay so here it kind of actually answered the question and started to go off into some philosophical territory uh let's try it again so let me copy and paste and let's try again from scratch what is 2 plus two so okay so it just goes off again so notice one more thing that I want to stress is that the system uh I think every time you put it in it just kind of starts from scratch so it doesn't uh the system here is stochastic so for the same prefix of tokens we're always getting a different answer and the reason for that is that we get this probity distribution and we sample from it and we always get different samples and we sort of always go into a different territory uh afterwards so here in this case um I don't know what this is let's try one more time so it just continues on so it's just doing the stuff that it's saw on the internet right um and it's just kind of like regurgitating those uh statistical patterns so first things it's not an assistant yet it's a token autocomplete and second it is a stochastic system now the crucial thing is that even though this model is not yet by itself very useful for a lot of applications just yet um it is still very useful because in the task of predicting the next token in the sequence the model has learned a lot about the world and it has stored all that knowledge in the parameters of the network so remember that our text looked like this right internet web pages and now all of this is sort of compressed in the weights of the network so you can think of um these 405 billion parameters is a kind of compression of the internet you can think of the 45 billion parameters is kind of like a zip file uh but it's not a loss less compression it's a loss C compression we're kind of like left with kind of a gal of the internet and we can generate from it right now we can elicit some of this knowledge by prompting the base model uh accordingly so for example here's a prompt that might work to elicit some of that knowledge that's hiding in the parameters here's my top 10 list of the top landmarks to see in the pairs um and I'm doing it this way because I'm trying to Prime the model to now continue this list so let's see if that works when I press enter okay so you see that it started a list and it's now kind of giving me some of those landmarks and now notice that it's trying to give a lot of information here now you might not be able to actually fully trust some of the information here remember that this is all just a recollection of some of the internet documents and so the things that occur very frequently in the internet data are probably more likely to be remembered correctly compared to things that happen very infrequently so you can't fully trust some of the things that and some of the information that is here because it's all just a vague recollection of Internet documents because the information is not stored explicitly in any of the parameters it's all just the recollection that said we did get something that is probably approximately correct and I don't actually have the expertise to verify that this is roughly correct but you see that we've elicited a lot of the knowledge of the model and this knowledge is not precise and exact this knowledge is vague and probabilistic and statistical and the kinds of things that occur often are the kinds of things that are more likely to be remembered um in the model now I want to show you a few more examples of this model's Behavior the first thing I want to show you is this example I went to the Wikipedia page for zebra and let me just copy paste the first uh even one sentence here and let me put it here now when I click enter what kind of uh completion are we going to get so let me just hit enter there are three living species etc etc what the model is producing here is an exact regurgitation of this Wikipedia entry it is reciting this Wikipedia entry purely from memory and this memory is stored in its parameters and so it is possible that at some point in these 512 tokens the model will uh stray away from the Wikipedia entry but you can see that it has huge chunks of it memorized here uh let me see for example if this sentence occurs by now okay so this so we're still on track let me check here okay we're still on track it will eventually uh stray away okay so this thing is just recited to a very large extent it will eventually deviate uh because it won't be able to remember exactly now the reason that this happens is because these models can be extremely good at memorization and usually this is not what you want in the final model and this is something called regurgitation and it's usually undesirable to site uh things uh directly uh that you have trained on now the reason that this happens actually is because for a lot of documents like for example Wikipedia when these documents are deemed to be of very high quality as a source like for example Wikipedia it is very often uh the case that when you train the model you will preferentially sample from those sources so basically the model has probably done a few epochs on this data meaning that it has seen this web page like maybe probably 10 times or so and it's a bit like you like when you read some kind of a text many many times say you read something a 100 times uh then you'll be able to recite it and it's very similar for this model if it sees something way too often it's going to be able to recite it later from memory except these models can be a lot more efficient um like per presentation than human so probably it's only seen this Wikipedia entry 10 times but basically it has remembered this article exactly in its parameters okay the next thing I want to show you is something that the model has definitely not seen during its training so for example if we go to the paper uh and then we navigate to the pre-training data we'll see here that uh the data set has a knowledge cut off until the end of 2023 so it will not have seen documents after this point and certainly it has not seen anything about the 2024 election and how it turned out now if we Prime the model with the tokens from the future it will continue the token sequence and it will just take its best guess according to the knowledge that it has in its own parameters so let's take a look at what that could look like so the Republican Party kit Trump okay president of the United States from 2017 and let's see what it says after this point so for example the model will have to guess at the running mate and who it's against Etc so let's hit enter so here thingss that Mike Pence was the running mate instead of JD Vance and the ticket was against Hillary Clinton and Tim Kane so this is kind of a interesting parallel universe potentially of what could have happened happened according to the LM let's get a different sample so the identical prompt and let's resample so here the running mate was Ronda santis and they ran against Joe Biden and Camala Harris so this is again a different parallel universe so the model will take educated guesses and it will continue the token sequence based on this knowledge um and it will just kind of like all of what we're seeing here is what's called hallucination the model is just taking its best guess uh in a probalistic manner the next thing I would like to show you is that even though this is a base model and not yet an assistant model it can still be utilized in Practical applications if you are clever with your prompt design so here's something that we would call a few shot prompt so what it is here is that I have 10 words or 10 pairs and each pair is a word of English column and then a the translation in Korean and we have 10 of them and what the model does here is at the end we have teacher column and then here's where we're going to do a completion of say just five tokens and these models have what we call in context learning abilities and what that's referring to is that as it is reading this context it is learning sort of in place that there's some kind of a algorithmic pattern going on in my data and it knows to continue that pattern and this is called kind of like Inc context learning so it takes on the role of a translator and when we hit uh completion we see that the teacher translation is Sim which is correct um and so this is how you can build apps by being clever with your prompting even though we still just have a base model for now and it relies on what we call this um uh in context learning ability and it is done by constructing what's called a few shot prompt okay and finally I want to show you that there is a clever way to actually instantiate a whole language model assistant just by prompting and the trick to it is that we're structure a prompt to look like a web page that is a conversation between a helpful AI assistant and a human and then the model will continue that conversation so actually to write the prompt I turned to chat gbt itself which is kind of meta but I told it I want to create an llm assistant but all I have is the base model so can you please write my um uh prompt and this is what it came up with which is actually quite good so here's a conversation between an AI assistant and a human the AI assistant is knowledgeable helpful capable of answering wide variety of questions Etc and then here it's not enough to just give it a sort of description it works much better if you create this fot prompt so here's a few terms of human assistant human assistant and we have uh you know a few turns of conversation and then here at the end is we're going to be putting the actual query that we like so let me copy paste this into the base model prompt and now let me do human column and this is where we put our actual prompt why is the sky blue and uh let's uh run assistant the sky appears blue due to the phenomenon called R lights scattering etc etc so you see that the base model is just continuing the sequence but because the sequence looks like this conversation it takes on that role but it is a little subtle because here it just uh you know it ends the assistant and then just you know hallucinate Ates the next question by the human Etc so it'll just continue going on and on uh but you can see that we have sort of accomplished the task and if you just took this why is the sky blue and if we just refresh this and put it here then of course we don't expect this to work with a base model right we're just going to who knows what we're going to get okay we're just going to get more questions okay so this is one way to create an assistant even though you may only have a base model okay so this is the kind of brief summary of the things we talked about over the last few minutes now let me zoom out here and this is kind of like what we've talked about so far we wish to train LM assistants like chpt we've discussed the first stage of that which is the pre-training stage and we saw that really what it comes down to is we take Internet documents we break them up into these tokens these atoms of little text chunks and then we predict token sequences using neural networks the output of this entire stage is this base model it is the setting of The parameters of this network and this base model is basically an internet document simulator on the token level so it can just uh it can generate token sequences that have the same kind of like statistics as Internet documents and we saw that we can use it in some applications but we actually need to do better we want an assistant we want to be able to ask questions and we want the model to give us answers and so we need to now go into the second stage which is called the post-training stage so we take our base model our internet document simulator and hand it off to post training so we're now going to discuss a few ways to do what's called post training of these models these stages in post training are going to be computationally much less expensive most of the computational work all of the massive data centers um and all of the sort of heavy compute and millions of dollars are the pre-training stage but now we go into the slightly cheaper but still extremely important stage called post trining where we turn this llm model into an assistant so let's take a look at how we can get our model to not sample internet documents but to give answers to questions so in other words what we want to do is we want to start thinking about conversations and these are conversations that can be multi-turn so so uh there can be multiple turns and they are in the simplest case a conversation between a human and an assistant and so for example we can imagine the conversation could look something like this when a human says what is 2 plus2 the assistant should re respond with something like 2 plus 2 is 4 when a human follows up and says what if it was star instead of a plus assistant could respond with something like this um and similar here this is another example showing that the assistant could also have some kind of a personality here uh that it's kind of like nice and then here in the third example I'm showing that when a human is asking for something that we uh don't wish to help with we can produce what's called refusal we can say that we cannot help with that so in other words what we want to do now is we want to think through how in a system should interact with the human and we want to program the assistant and Its Behavior in these conversations now because this is neural networks we're not going to be programming these explicitly in code we're not going to be able to program the assistant in that way because this is neural networks everything is done through neural network training on data sets and so because of that we are going to be implicitly programming the assistant by creating data sets of conversations so these are three independent examples of conversations in a data dat set an actual data set and I'm going to show you examples will be much larger it could have hundreds of thousands of conversations that are multi- turn very long Etc and would cover a diverse breath of topics but here I'm only showing three examples but the way this works basically is uh a assistant is being programmed by example and where is this data coming from like 2 * 2al 4 same as 2 plus 2 Etc where does that come from this comes from Human labelers so we will basically give human labelers some conversational context and we will ask them to um basically give the ideal assistant response in this situation and a human will write out the ideal response for an assistant in any situation and then we're going to get the model to basically train on this and to imitate those kinds of responses so the way this works then is we are going to take our base model which we produced in the preing stage and this base model was trained on internet documents we're now going to take that data set of internet documents and we're gonna throw it out and we're going to substitute a new data set and that's going to be a data set of conversations and we're going to continue training the model on these conversations on this new data set of conversations and what happens is that the model will very rapidly adjust and will sort of like learn the statistics of how this assistant responds to human queries and then later during inference we'll be able to basically um Prime the assistant and get the response and it will be imitating what the humans will human labelers would do in that situation if that makes sense so we're going to see examples of that and this is going to become bit more concrete I also wanted to mention that this post-training stage we're going to basically just continue training the model but um the pre-training stage can in practice take roughly three months of training on many thousands of computers the post-training stage will typically be much shorter like 3 hours for example um and that's because the data set of conversations that we're going to create here manually is much much smaller than the data set of text on the internet and so this training will be very short but fundamentally we're just going to take our base model we're going to continue training using the exact same algorithm the exact same everything except we're swapping out the data set for conversations so the questions now are what are these conversations how do we represent them how do we get the model to see conversations instead of just raw text and then what are the outcomes of um this kind of training and what do you get in a certain like psychological sense uh when we talk about the model so let's turn to those questions now so let's start by talking about the tokenization of conversations everything in these models has to be turned into tokens because everything is just about token sequences so how do we turn conversations into token sequences is the question and so for that we need to design some kind of ending coding and uh this is kind of similar to maybe if you're familiar you don't have to be with for example the TCP IP packet in um on the internet there are precise rules and protocols for how you represent information how everything is structured together so that you have all this kind of data laid out in a way that is written out on a paper and that everyone can agree on and so it's the same thing now happening in llms we need some kind of data structures and we need to have some rules around how these data structures like conversations get encoded and decoded to and from tokens and so I want to show you now how I would recreate uh this conversation in the token space so if you go to Tech tokenizer I can take that conversation and this is how it is represented in uh for the language model so here we have we are iterating a user and an assistant in this two- turn conversation and what you're seeing here is it looks ugly but it's actually relatively simple the way it gets turned into a token sequence here at the end is a little bit complicated but at the end this conversation between a user and assistant ends up being 49 tokens it is a one-dimensional sequence of 49 tokens and these are the tokens okay and all the different llms will have a slightly different format or protocols and it's a little bit of a wild west right now but for example GPT 40 does it in the following way you have this special token called imore start and this is short for IM imaginary monologue uh the start then you have to specify um I don't actually know why it's called that to be honest then you have to specify whose turn it is so for example user which is a token 4 28 then you have internal monologue separator and then it's the exact question so the tokens of the question and then you have to close it so I am end the end of the imaginary monologue so basically the question from a user of what is 2 plus two ends up being the token sequence of these tokens and now the important thing to mention here is that IM start this is not text right IM start is a special token that gets added it's a new token and um this token has never been trained on so far it is a new token that we create in a post-training stage and we introduce and so these special tokens like IM seep IM start Etc are introduced and interspersed with text so that they sort of um get the model to learn that hey this is a the start of a turn for who is it start of the turn for the start of the turn is for the user and then this is what the user says and then the user ends and then it's a new start of a turn and it is by the assistant and then what does the assistant say well these are the tokens of what the assistant says Etc and so this conversation is not turned into the sequence of tokens the specific details here are not actually that important all I'm trying to show you in concrete terms is that our conversations which we think of as kind of like a structured object end up being turned via some encoding into onedimensional sequences of tokens and so because this is one dimensional sequence of tokens we can apply all the stuff that we applied before now it's just a sequence of tokens and now we can train a language model on it and so we're just predicting the next token in a sequence uh just like before and um we can represent and train on conversations and then what does it look like at test time during inference so say we've trained a model and we've trained a model on these kinds of data sets of conversations and now we want to inference so during inference what does this look like when you're on on chash apt well you come to chash apt and you have say like a dialogue with it and the way this works is basically um say that this was already filled in so like what is 2 plus 2 2 plus 2 is four and now you issue what if it was times I am end and what basically ends up happening um on the servers of open AI or something like that is they put in I start assistant I amep and this is where they end it right here so they construct this context and now they start sampling from the model so it's at this stage that they will go to the model and say okay what is a good for sequence what is a good first token what is a good second token what is a good third token and this is where the LM takes over and creates a response like for example response that looks something like this but it doesn't have to be identical to this but it will have the flavor of this if this kind of a conversation was in the data set so um that's roughly how the protocol Works although the details of this protocol are not important so again my goal is that just to show you that everything ends up being just a one-dimensional token sequence so we can apply everything we've already seen but we're now training on conversations and we're now uh basically generating conversations as well okay so now I would like to turn to what these data sets look like in practice the first paper that I would like to show you and the first effort in this direction is this paper from openai in 2022 and this paper was called instruct GPT or the technique that they developed and this was the first time that opena has kind of talked about how you can take language models and fine-tune them on conversations and so this paper has a number of details that I would like to take you through so the first stop I would like to make is in section 3.4 where they talk about the human contractors that they hired uh in this case from upwork or through scale AI to uh construct these conversations and so there are human labelers involved whose job it is professionally to create these conversations and these labelers are asked to come up with prompts and then they are asked to also complete the ideal assistant responses and so these are the kinds of prompts that people came up with so these are human labelers so list five ideas for how to regain enthusiasm for my career what are the top 10 science fiction books I should read next and there's many different types of uh kind of prompts here so translate this sentence from uh to Spanish Etc and so there's many things here that people came up with they first come up with the prompt and then they also uh answer that prompt and they give the ideal assistant response now how do they know what is the ideal assistant response that they should write for these prompts so when we scroll down a little bit further we see that here we have this excerpt of labeling instructions uh that are given to the human labelers so the company that is developing the language model like for example open AI writes up labeling instructions for how the humans should create ideal responses and so here for example is an excerpt uh of these kinds of labeling instruction instructions on High level you're asking people to be helpful truthful and harmless and you can pause the video if you'd like to see more here but on a high level basically just just answer try to be helpful try to be truthful and don't answer questions that we don't want um kind of the system to handle uh later in chat gbt and so roughly speaking the company comes up with the labeling instructions usually they are not this short usually there are hundreds of pages and people have to study them professionally and then they write out the ideal assistant responses uh following those labeling instructions so this is a very human heavy process as it was described in this paper now the data set for instruct GPT was never actually released by openi but we do have some open- Source um reproductions that were're trying to follow this kind of a setup and collect their own data so one that I'm familiar with for example is the effort of open Assistant from a while back and this is just one of I think many examples but I just want to show you an example so here's so these were people on the internet that were asked to basically create these conversations similar to what um open I did with human labelers and so here's an entry of a person who came up with this BR can you write a short introduction to the relevance of the term manop uh in economics please use examples Etc and then the same person or potentially a different person will write up the response so here's the assistant response to this and so then the same person or different person will actually write out this ideal response and then this is an example of maybe how the conversation could continue now explain it to a dog and then you can try to come up with a slightly a simpler explanation or something like that now this then becomes the label and we end up training on this so what happens during training is that um of course we're not going to have a full coverage of all the possible questions that um the model will encounter at test time during inference we can't possibly cover all the possible prompts that people are going to be asking in the future but if we have a like a data set of a few of these examples then the model during training will start to take on this Persona of this helpful truthful harmless assistant and it's all programmed by example and so these are all examples of behavior and if you have conversations of these example behaviors and you have enough of them like 100,00 and you train on it the model sort of starts to understand the statistical pattern and it kind of takes on this personality of this assistant now it's possible that when you get the exact same question like this at test time it's possible that the answer will be recited as exactly what was in the training set but more likely than that is that the model will kind of like do something of a similar Vibe um and we will understand that this is the kind of answer that you want um so that's what we're doing we're programming the system um by example and the system adopts statistically this Persona of this helpful truthful harmless assistant which is kind of like reflected in the labeling instructions that the company creates now I want to show you that the state-of-the-art has kind of advanced in the last 2 or 3 years uh since the instr GPT paper so in particular it's not very common for humans to be doing all the heavy lifting just by themselves anymore and that's because we now have language models and these language models are helping us create these data sets and conversations so it is very rare that the people will like literally just write out the response from scratch it is a lot more likely that they will use an existing llm to basically like uh come up with an answer and then they will edit it or things like that so there's many different ways in which now llms have started to kind of permeate this posttraining Set uh stack and llms are basically used pervasively to help create these massive data sets of conversations so I don't want to show like Ultra chat is one um such example of like a more modern data set of conversations it is to a very large extent synthetic but uh I believe there's some human involvement I could be wrong with that usually there will be a little bit of human but there will be a huge amount of synthetic help um and this is all kind of like uh constructed in different ways and Ultra chat is just one example of many sft data sets that currently exist and the only thing I want to show you is that uh these data sets have now millions of conversations uh these conversations are mostly synthetic but they're probably edited to some extent by humans and they span a huge diversity of sort of um uh areas and so on so these are fairly extensive artifacts by now and there's all these like sft mixtures as they're called so you have a mixture of like lots of different types and sources and it's partially synthetic partially human and it's kind of like um gone in that direction since uh but roughly speaking we still have sft data sets they're made up of conversations we're training on them um just like we did before and uh I guess like the last thing to note is that I want to dispel a little bit of the magic of talking to an AI like when you go to chat GPT and you give it a question and then you hit enter uh what is coming back is kind of like statistically aligned with what's happening in the training set and these training sets I mean they really just have a seed in humans following labeling instructions so what are you actually talking to in chat GPT or how should you think about it well it's not coming from some magical AI like roughly speaking it's coming from something that is statistically imitating human labelers which comes from labeling instructions written by these companies and so you're kind of imitating this uh you're kind of getting um it's almost as if you're asking human labeler and imagine that the answer that is given to you uh from chbt is some kind of a simulation of a human labeler uh and it's kind of like asking what would a human labeler say in this kind of a conversation and uh it's not just like this human labeler is not just like a random person from the internet because these companies actually hire experts so for example when you are asking questions about code and so on the human labelers that would be in um involved in creation of these conversation data sets they will usually be usually be educated expert people and you're kind of like asking a question of like a simulation of those people if that makes sense so you're not talking to a magical AI you're talking to an average labeler this average labeler is probably fairly highly skilled but you're talking to kind of like an instantaneous simulation of that kind of a person that would be hired uh in the construction of these data sets so let me give you one more specific example before we move on for example when I go to chpt and I say recommend the top five landmarks who see in Paris and then I hit enter uh okay here we go okay when I hit enter what's coming out here how do I think about it well it's not some kind of a magical AI that has gone out and researched all the landmarks and then ranked them using its infinite intelligence Etc what I'm getting is a statistical simulation of a labeler that was hired by open AI you can think about it roughly in that way and so if this specific um question is in the posttraining data set somewhere at open aai then I'm very likely to see an answer that is probably very very similar to what that human labeler would have put down for those five landmarks how does the human labeler come up with this well they go off and they go on the internet and they kind of do their own little research for 20 minutes and they just come up with a list right now so if they come up with this list and this is in the data set I'm probably very likely to see what they submitted as the correct answer from the assistant now if this specific query is not part of the post training data set then what I'm getting here is a little bit more emergent uh because uh the model kind of understands the statistically um the kinds of landmarks that are in this training set are usually the prominent landmarks the landmarks that people usually want to see the kinds of landmarks that are usually uh very often talked about on the internet and remember that the model already has a ton of Knowledge from its pre-training on the internet so it's probably seen a ton of conversations about Paris about landmarks about the kinds of things that people like to see and so it's the pre-training knowledge that has then combined with the postering data set that results in this kind of an imitation um so that's uh that's roughly how you can kind of think about what's happening behind the scenes here in in this statistical sense okay now I want to turn to the topic of llm psychology as I like to call it which is what are sort of the emergent cognitive effects of the training pipeline that we have for these models so in particular the first one I want to talk to is of course hallucinations so you might be familiar with model hallucinations it's when llms make stuff up they just totally fabricate information Etc and it's a big problem with llm assistants it is a problem that existed to a large extent with early models uh from many years ago and I think the problem has gotten a bit better uh because there are some medications that I'm going to go into in a second for now let's just try to understand where these hallucinations come from so here's a specific example of a few uh of three conversations that you might think you have in your training set and um these are pretty reasonable conversations that you could imagine being in the training set so like for example who is Cruz well Tom Cruz is an famous actor American actor and producer Etc who is John baraso this turns out to be a us senetor for example who is genis Khan well genis Khan was blah blah blah and so this is what your conversations could look like at training time now the problem with this is that when the human is writing the correct answer for the assistant in each one of these cases uh the human either like knows who this person is or they research them on the Internet and they come in and they write this response that kind of has this like confident tone of an answer and what happens basically is that at test time when you ask for someone who is this is a totally random name that I totally came up with and I don't think this person exists um as far as I know I just Tred to generate it randomly the problem is when we ask who is Orson kovats the problem is that the assistant will not just tell you oh I don't know even if the assistant and the language model itself might know inside its features inside its activations inside of its brain sort of it might know that this person is like not someone that um that is that it's familiar with even if some part of the network kind of knows that in some sense the uh saying that oh I don't know who this is is is not going to happen because the model statistically imitates is training set in the training set the questions of the form who is blah are confidently answered with the correct answer and so it's going to take on the style of the answer and it's going to do its best it's going to give you statistically the most likely guess and it's just going to basically make stuff up because these models again we just talked about it is they don't have access to the internet they're not doing research these are statistical token tumblers as I call them uh is just trying to sample the next token in the sequence and it's going to basically make stuff up so let's take a look at what this looks like I have here what's called the inference playground from hugging face and I am on purpose picking on a model called Falcon 7B which is an old model this is a few years ago now so it's an older model So It suffers from hallucinations and as I mentioned this has improved over time recently but let's say who is Orson kovats let's ask Falcon 7B instruct run oh yeah Orson kovat is an American author and science uh fiction writer okay this is totally false it's hallucination let's try again these are statistical systems right so we can resample this time Orson kovat is a fictional character from this 1950s TV show it's total BS right let's try again he's a former minor league baseball player okay so basically the model doesn't know and it's given us lots of different answers because it doesn't know it's just kind of like sampling from these probabilities the model starts with the tokens who is oron kovats assistant and then it comes in here and it's get it's getting these probabilities and it's just sampling from the probabilities and it just like comes up with stuff and the stuff is actually statistically consistent with the style of the answer in its training set and it's just doing that but you and I experiened it as a madeup factual knowledge but keep in mind that uh the model basically doesn't know and it's just imitating the format of the answer and it's not going to go off and look it up uh because it's just imitating again the answer so how can we uh mitigate this because for example when we go to chat apt and I say who is oron kovats and I'm now asking the stateoftheart state-of-the-art model from open AI this model will tell you oh so this model is actually is even smarter because you saw very briefly it said searching the web uh we're going to cover this later um it's actually trying to do tool use and uh kind of just like came up with some kind of a story but I want to just who or Kovach did not use any tools I don't want it to do web search there's a wellknown historical or public figure named or oron kovats so this model is not going to make up stuff this model knows that it doesn't know and it tells you that it doesn't appear to be a person that this model knows so somehow we sort of improved hallucinations even though they clearly are an issue in older models and it makes totally uh sense why you would be getting these kinds of answers if this is what your training set looks like so how do we fix this okay well clearly we need some examples in our data set that where the correct answer for the assistant is that the model doesn't know about some particular fact but we only need to have those answers be produced in the cases where the model actually doesn't know and so the question is how do we know what the model knows or doesn't know well we can empirically probe the model to figure that out so let's take a look at for example how meta uh dealt with hallucinations for the Llama 3 series of models as an example so in this paper that they published from meta we can go into hallucinations which they call here factuality and they describe the procedure by which they basically interrogate the model to figure out what it knows and doesn't know to figure out sort of like the boundary of its knowledge and then they add examples to the training set where for the things where the model doesn't know them the correct answer is that the model doesn't know them which sounds like a very easy thing to do in principle but this roughly fixes the issue and the the reason it fixes the issue is because remember like the model might actually have a pretty good model of its self knowledge inside the network so remember we looked at the network and all these neurons inside the network you might imagine that there's a neuron somewhere in the network that sort of like lights up for when the model is uncertain but the problem is that the activation of that neuron is not currently wired up to the model actually saying in words that it doesn't know so even though the internal of the neural network no because there's some neurons that represent that the model uh will not surface that it will instead take its best guess so that it sounds confident um just like it sees in a training set so we need to basically interrogate the model and allow it to say I don't know in the cases that it doesn't know so let me take you through what meta roughly does so basically what they do is here I have an example uh Dominic kek is uh the featured article today so I just went there randomly and what they do is basically they take a random document in a training set and they take a paragraph and then they use an llm to construct questions about that paragraph so for example I did that with chat GPT here so I said here's a paragraph from this document generate three specific factual questions based on this paragraph and give me the questions and the answers and so the llms are already good enough to create and reframe this information so if the information is in the context window um of this llm this actually works pretty well it doesn't have to rely on its memory it's right there in the context window and so it can basically reframe that information with fairly high accuracy so for example can generate questions for us like for which team did he play here's the answer how many cups did he win Etc and now what we have to do is we have some question and answers and now we want to interrogate the model so roughly speaking what we'll do is we'll take our questions and we'll go to our model which would be uh say llama uh in meta but let's just interrogate mol 7B here as an example that's another model so does this model know about this answer let's take a look uh so he played for Buffalo Sabers right so the model knows and the the way that you can programmatically decide is basically we're going to take this answer from the model and we're going to compare it to the correct answer and again the model model are good enough to do this automatically so there's no humans involved here we can take uh basically the answer from the model and we can use another llm judge to check if that is correct according to this answer and if it is correct that means that the model probably knows so what we're going to do is we're going to do this maybe a few times so okay it knows it's Buffalo Savers let's drag in um Buffalo Sabers let's try one more time Buffalo Sabers so we asked three times about this factual question and the model seems to know so everything is great now let's try the second question how many Stanley Cups did he win and again let's interrogate the model about that and the correct answer is two so um here the model claims that he won um four times which is not correct right it doesn't match two so the model doesn't know it's making stuff up let's try again um so here the model again it's kind of like making stuff up right let's Dragon here it says did he did not even did not win during his career so obviously the model doesn't know and the way we can programmatically tell again is we interrogate the model three times and we compare its answers maybe three times five times whatever it is to the correct answer and if the model doesn't know then we know that the model doesn't know this question and then what we do is we take this question we create a new conversation in the training set so we're going to add a new conversation training set and when the question is how many Stanley Cups did he win the answer is I'm sorry I don't know or I don't remember and that's the correct answer for this question because we interrogated the model and we saw that that's the case if you do this for many different types of uh questions for many different types of documents you are giving the model an opportunity to in its training set refuse to say based on its knowledge and if you just have a few examples of that in your training set the model will know um and and has the opportunity to learn the association of this knowledge-based refusal to this internal neuron somewhere in its Network that we presume exists and empirically this turns out to be probably the case and it can learn that Association that hey when this neuron of uncertainty is high then I actually don't know and I'm allowed to say that I'm sorry but I don't think I remember this Etc and if you have these uh examples in your training set then this is a large mitigation for hallucination and that's roughly speaking why chpt is able to do stuff like this as well so these are kinds of uh mitigations that people have implemented and that have improved the factuality issue over time okay so I've described mitigation number one for basically mitigating the hallucinations issue now we can actually do much better than that uh it's instead of just saying that we don't know uh we can introduce an additional mitigation number two to give the llm an opportunity to be factual and actually answer the question now what do you and I do if I was to ask you a factual question and you don't know uh what would you do um in order to answer the question well you could uh go off and do some search and uh use the internet and you could figure out the answer and then tell me what that answer is and we can do the exact exact same thing with these models so think of the knowledge inside the neural network inside its billions of parameters think of that as kind of a vague recollection of the things that the model has seen during its training during the pre-training stage a long time ago so think of that knowledge in the parameters as something you read a month ago and if you keep reading something then you will remember it and the model remembers that but if it's something rare then you probably don't have a really good recollection of that information but what you and I do is we just go and look it up now when you go and look it up what you're doing basically is like you're refreshing your working memory with information and then you're able to sort of like retrieve it talk about it or Etc so we need some equivalent of allowing the model to refresh its memory or its recollection and we can do that by introducing tools uh for the models so the way we are going to approach this is that instead of just saying hey I'm sorry I don't know we can attempt to use tools so we can create uh a mechanism by which the language model can emit special tokens and these are tokens that we're going to introduce new tokens so for example here I've introduced two tokens and I've introduced a format or a protocol for how the model is allowed to use these tokens so for example instead of answering the question when the model does not instead of just saying I don't know sorry the model has the option now to emitting the special token search start and this is the query that will go to like bing.com in the case of openai or say Google search or something like that so it will emit the query and then it will emit search end and then here what will happen is that the program that is sampling from the model that is running the inference when it sees the special token search end instead of sampling the next token uh in the sequence it will actually pause generating from the model it will go off it will open a session with bing.com and it will paste the search query into Bing and it will then um get all the text that is retrieved and it will basically take that text it will maybe represent it again with some other special tokens or something like that and it will take that text and it will copy paste it here into what I Tred to like show with the brackets so all that text kind of comes here and when the text comes here it enters the context window so the model so that text from the web search is now inside the context window that will feed into the neural network and you should think of the context window as kind of like the working memory of the model that data that is in the context window is directly accessible by the model it directly feeds into the neural network so it's not anymore a vague recollection it's data that it it has in the context window and is directly available to that model so now when it's sampling the new uh tokens here afterwards it can reference very easily the data that has been copy pasted in there so that's roughly how these um how these tools use uh tools uh function and so web search is just one of the tools we're going to look at some of the other tools in a bit uh but basically you introduce new tokens you introduce some schema by which the model can utilize these tokens and can call these special functions like web search functions and how do you teach the model how to correctly use these tools like say web search search start search end Etc well again you do that through training sets so we need now to have a bunch of data and a bunch of conversations that show the model by example how to use web search so what are the what are the settings where you are using the search um and what does that look like and here's by example how you start a search and the search Etc and uh if you have a few thousand maybe examples of that in your training set the model will actually do a pretty good job of understanding uh how this tool works and it will know how to sort of structure its queries and of course because of the pre-training data set and its understanding of the world it actually kind of understands what a web search is and so it actually kind of has a pretty good native understanding um of what kind of stuff is a good search query um and so it all kind of just like works you just need a little bit of a few examples to show it how to use this new tool and then it can lean on it to retrieve information and uh put it in the context window and that's equivalent to you and I looking something up because once it's in the context it's in the working memory and it's very easy to manipulate and access so that's what we saw a few minutes ago when I was searching on chat GPT for who is Orson kovats the chat GPT language model decided Ed that this is some kind of a rare um individual or something like that and instead of giving me an answer from its memory it decided that it will sample a special token that is going to do web search and we saw briefly something flash it was like using the web tool or something like that so it briefly said that and then we waited for like two seconds and then it generated this and you see how it's creating references here and so it's citing sources so what happened here is it went off it did a web web search it found these sources and these URLs and the text of these web pages was all stuffed in between here and it's not showing here but it's it's basically stuffed as text in between here and now it sees that text and now it kind of references it and says that okay it could be these people citation could be those people citation Etc so that's what happened here and that's what and that's why when I said who is Orson kovats I could also say don't use any tools and then that's enough to um basically convince chat PT to not use tools and just use its memory and its recollection I also went off and I um tried to ask this question of Chachi PT so how many standing cups did uh Dominic Hasek win and Chachi P actually decided that it knows the answer and it has the confidence to say that uh he want twice and so it kind of just relied on its memory because presumably it has um it has enough of a kind of confidence in its weights in it parameters and activations that this is uh retrievable just for memory um but you can also conversely use web search to make sure and then for the same query it actually goes off and it searches and then it finds a bunch of sources it finds all this all of this stuff gets copy pasted in there and then it tells us uh to again and sites and it actually says the Wikipedia article which is the source of this information for us as well so that's tools web search the model determines when to search and then uh that's kind of like how these tools uh work and this is an additional kind of mitigation for uh hallucinations and factuality so I want to stress one more time this very important sort of psychology Point knowledge in the parameters of the neural network is a vague recollection the knowledge in the tokens that make up the context window is the working memory and it roughly speaking Works kind of like um it works for us in our brain the stuff we remember is our parameters uh and the stuff that we just experienced like a few seconds or minutes ago and so on you can imagine that being in our context window and this context window is being built up as you have a conscious experience around you so this has a bunch of um implications also for your use of LOLs in practice so for example I can go to chat GPT and I can do something like this I can say can you Summarize chapter one of Jane Austin's Pride and Prejudice right and this is a perfectly fine prompt and Chach actually does something relatively reasonable here and but the reason it does that is because Chach has a pretty good recollection of a famous work like Pride and Prejudice it's probably seen a ton of stuff about it there's probably forums about this book it's probably read versions of this book um and it's kind of like remembers because even if you've read this or articles about it you'd kind of have a recollection enough to actually say all this but usually when I actually interact with LMS and I want them to recall specific things it always works better if you just give it to them so I think a much better prompt would be something like this can you summarize for me chapter one of genos's spr and Prejudice and then I am attaching it below for your reference and then I do something like a delimeter here and I paste it in and I I found that just copy pasting it from some website that I found here um so copy pasting the chapter one here and I do that because when it's in the context window the model has direct access to it and can exactly it doesn't have to recall it it just has access to it and so this summary is can be expected to be a significantly high quality or higher quality than this summary uh just because it's directly available to the model and I think you and I would work in the same way if you want to it would be you would produce a much better summary if you had reread this chapter before you had to summarize it and that's basically what's happening here or the equivalent of it the next sort of psychological Quirk I'd like to talk about briefly is that of the knowledge of self so what I see very often on the internet is that people do something like this they ask llms something like what model are you and who built you and um basically this uh question is a little bit nonsensical and the reason I say that is that as I try to kind of explain with some of the underhood fundamentals this thing is not a person right it doesn't have a persistent existence in any way it sort of boots up processes tokens and shuts off and it does that for every single person it just kind of builds up a context window of conversation and then everything gets deleted and so this this entity is kind of like restarted from scratch every single conversation if that makes sense it has no persistent self it has no sense of self it's a token tumbler and uh it follows the statistical regularities of its training set so it doesn't really make sense to ask it who are you what build you Etc and by default if you do what I described and just by default and from nowhere you're going to get some pretty random answers so for example let's uh pick on Falcon which is a fairly old model and let's see what it tells us uh so it's evading the question uh talented engineers and developers here it says I was built by open AI based on the gpt3 model it's totally making stuff up now the fact that it's built by open AI here I think a lot of people would take this as evidence that this model was somehow trained on open AI data or something like that I don't actually think that that's necessarily true the reason for that is that if you don't explicitly program the model to answer these kinds of questions then what you're going to get is its statistical best guess at the answer and this model had a um sft data mixture of conversations and during the fine-tuning um the model sort of understands as it's training on this data that it's taking on this personality of this like helpful assistant and it doesn't know how to it doesn't actually it wasn't told exactly what label to apply to self it just kind of is taking on this uh this uh Persona of a helpful assistant and remember that the pre-training stage took the documents from the entire internet and Chach and open AI are very prominent in these documents and so I think what's actually likely to be happening here is that this is just its hallucinated label for what it is this is its self-identity is that it's chat GPT by open Ai and it's only saying that because there's a ton of data on the internet of um answers like this that are actually coming from open from chasht and So that's its label for what it is now you can override this as a developer if you have a llm model you can actually override it and there are a few ways to do that so for example let me show you there's this MMO model from Allen Ai and um this is one llm it's not a top tier LM or anything like that but I like it because it is fully open source so the paper for Almo and everything else is completely fully open source which is nice um so here we are looking at its sft mixture so this is the data mixture of um the fine tuning so this is the conversations data it right and so the way that they are solving it for Theo model is we see that there's a bunch of stuff in the mixture and there's a total of 1 million conversations here but here we have alot to hardcoded if we go there we see that this is 240 conversations and look at these 240 conversations they're hardcoded tell me about yourself says user and then the assistant says I'm and open language model developed by AI to Allen Institute of artificial intelligence Etc I'm here to help blah blah blah what is your name uh Theo project so these are all kinds of like cooked up hardcoded questions abouto 2 and the correct answers to give in these cases if you take 240 questions like this or conversations put them into your training set and fine tune with it then the model will actually be expected to parot this stuff later if you don't give it this then it's probably a Chach by open Ai and um there's one more way to sometimes do this is that basically um in these conversations and you have terms between human and assistant sometimes there's a special message called system message at the very beginning of the conversation so it's not just between human and assistant there's a system and in the system message you can actually hardcode and remind the model that hey you are a model developed by open Ai and your name is chashi pt40 and you were trained on this date and your knowledge cut off is this and basically it kind of like documents the model a little bit and then this is inserted into to your conversations so when you go on chpt you see a blank page but actually the system message is kind of like hidden in there and those tokens are in the context window and so those are the two ways to kind of um program the models to talk about themselves either it's done through uh data like this or it's done through system message and things like that basically invisible tokens that are in the context window and remind the model of its identity but it's all just kind of like cooked up and bolted on in some in some way it's not actually like really deeply there in any real sense as it would before a human I want to now continue to the next section which deals with the computational capabilities or like I should say the native computational capabilities of these models in problem solving scenarios and so in particular we have to be very careful with these models when we construct our examples of conversations and there's a lot of sharp edges here that are kind of like elucidative is that a word uh they're kind of like interesting to look at when we consider how these models think so um consider the following prompt from a human and supposed that basically that we are building out a conversation to enter into our training set of conversations so we're going to train the model on this we're teaching you how to basically solve simple math problems so the prompt is Emily buys three apples and two oranges each orange cost $2 the total cost is 13 what is the cost of apples very simple math question now there are two answers here on the left and on the right they are both correct answers they both say that the answer is three which is correct but one of these two is a significant ific anly better answer for the assistant than the other like if I was Data labeler and I was creating one of these one of these would be uh a really terrible answer for the assistant and the other would be okay and so I'd like you to potentially pause the video Even and think through why one of these two is significantly better answer uh than the other and um if you use the wrong one your model will actually be uh really bad at math potentially and it would have uh bad outcomes and this is something that you would be careful with in your life labeling documentations when you are training people uh to create the ideal responses for the assistant okay so the key to this question is to realize and remember that when the models are training and also inferencing they are working in onedimensional sequence of tokens from left to right and this is the picture that I often have in my mind I imagine basically the token sequence evolving from left to right and to always produce the next token in a sequence we are feeding all these tokens into the neural network and this neural network then is the probabilities for the next token and sequence right so this picture here is the exact same picture we saw uh before up here and this comes from the web demo that I showed you before right so this is the calculation that basically takes the input tokens here on the top and uh performs these operations of all these neurons and uh gives you the answer for the probabilities of what comes next now the important thing to realize is that roughly speaking uh there's basically a finite number of layers of computation that happened here so for example this model here has only one two three layers of what's called detention and uh MLP here um maybe um typical modern state-of-the-art Network would have more like say 100 layers or something like that but there's only 100 layers of computation or something like that to go from the previous token sequence to the probabilities for the next token and so there's a finite amount of computation that happens here for every single token and you should think of this as a very small amount of computation and this amount of computation is almost roughly fixed uh for every single token in this sequence um the that's not actually fully true because the more tokens you feed in uh the the more expensive uh this forward pass will be of this neural network but not by much so you should think of this uh and I think as a good model to have in mind this is a fixed amount of compute that's going to happen in this box for every single one of these tokens and this amount of compute Cann possibly be too big because there's not that many layers that are sort of going from the top to bottom here there's not that that much computationally that will happen here and so you can't imagine the model to to basically do arbitrary computation in a single forward pass to get a single token and so what that means is that we actually have to distribute our reasoning and our computation across many tokens because every single token is only spending a finite amount of computation on it and so we kind of want to distribute the computation across many tokens and we can't have too much computation or expect too much computation out of of the model in any single individual token because there's only so much computation that happens per token okay roughly fixed amount of computation here so that's why this answer here is significantly worse and the reason for that is Imagine going from left to right here um and I copy pasted it right here the answer is three Etc imagine the model having to go from left to right emitting these tokens one at a time it has to say or we're expecting to say the answer is space dollar sign and then right here we're expecting it to basically cram all of the computation of this problem into this single token it has to emit the correct answer three and then once we've emitted the answer three we're expecting it to say all these tokens but at this point we've already prod produced the answer and it's already in the context window for all these tokens that follow so anything here is just um kind of post Hawk justification of why this is the answer um because the answer is already created it's already in the token window so it's it's not actually being calculated here um and so if you are answering the question directly and immediately you are training the model to to try to basically guess the answer in a single token and that is just not going to work because of the finite amount of computation that happens per token that's why this answer on the right is significantly better because we are Distributing this computation across the answer we're actually getting the model to sort of slowly come to the answer from the left to right we're getting intermediate results we're saying okay the total cost of oranges is four so 30 - 4 is 9 and so we're creating intermediate calculations and each one of these calculations is by itself not that expensive and so we're actually basically kind of guessing a little bit the difficulty that the model is capable of in any single one of these individual tokens and there can never be too much work in any one of these tokens computationally because then the model won't be able to do that later at test time and so we're teaching the model here to spread out its reasoning and to spread out its computation over the tokens and in this way it only has very simple problems in each token and they can add up and then by the time it's near the end it has all the previous results in its working memory and it's much easier for it to determine that the answer is and here it is three so this is a significantly better label for our computation this would be really bad and is teaching the model to try to do all the computation in a single token and it's really bad so uh that's kind of like an interesting thing to keep in mind is in your prompts uh usually don't have to think about it explicitly because uh the people at open AI have labelers and so on that actually worry about this and they make sure that the answers are spread out and so actually open AI will kind of like do the right thing so when I ask this question for chat GPT it's actually going to go very slowly it's going to be like okay let's define our variables set up the equation and it's kind of creating all these intermediate results these are not for you these are for the model if the model is not creating these intermediate results for itself it's not going to be able to reach three I also wanted to show you that it's possible to be a bit mean to the model uh we can just ask for things so as an example I said I gave it the exact same uh prompt and I said answer the question in a single token just immediately give me the answer nothing else and it turns out that for this simple um prompt here it actually was able to do it in single go so it just created a single I think this is two tokens right uh because the dollar sign is its own token so basically this model didn't give me a single token it gave me two tokens but it still produced the correct answer and it did that in a single forward pass of the network now that's because the numbers here I think are very simple and so I made it a bit more difficult to be a bit mean to the model so I said Emily buys 23 apples and 177 oranges and then I just made the numbers a bit bigger and I'm just making it harder for the model I'm asking it to more computation in a single token and so I said the same thing and here it gave me five and five is actually not correct so the model failed to do all of this calculation in a single forward pass of the network it failed to go from the input tokens and then in a single forward pass of the network single go through the network it couldn't produce the result and then I said okay now don't worry about the the token limit and just solve the problem as usual and then it goes all the intermediate results it simplifies and every one of these intermediate results here and intermediate calculations is much easier for the model and um it sort of it's not too much work per token all of the tokens here are correct and it arises the solution which is seven and I just couldn't squeeze all of this work it couldn't squeeze that into a single forward passive Network so I think that's kind of just a cute example and something to kind of like think about and I think it's kind of again just elucidative in terms of how these uh models work the last thing that I would say on this topic is that if I was in practi is trying to actually solve this in my day-to-day life I might actually not uh trust that the model that all the intermediate calculations correctly here so actually probably what I do is something like this I would come here and I would say use code and uh that's because code is one of the possible tools that chachy PD can use and instead of it having to do mental arithmetic like this mental arithmetic here I don't fully trust it and especially if the numbers get really big there's no guarantee that the model will do this correctly any one of these intermediates steps might in principle fail we're using neural networks to do mental arithmetic uh kind of like you doing mental arithmetic in your brain it might just like uh screw up some of the intermediate results it's actually kind of amazing that it can even do this kind of mental arithmetic I don't think I could do this in my head but basically the model is kind of like doing it in its head and I don't trust that so I wanted to use tools so you can say stuff like use code and uh I'm not sure what happened there use code and so um like I mentioned there's a special tool and the uh the model can write code and I can inspect that this code is correct and then uh it's not relying on its mental arithmetic it is using the python interpreter which is a very simple programming language to basically uh write out the code that calculates the result and I would personally trust this a lot more because this came out of a Python program which I think has a lot more correctness guarantees than the mental arithmetic of a language model uh so just um another kind of uh potential hint that if you have these kinds of problems uh you may want to basically just uh ask the model to use the code interpreter and just like we saw with the web search the model has special uh kind of tokens for calling uh like it will not actually generate these tokens from the language model it will write the program and then it actually sends that program to a different sort of part of the computer that actually just runs that program and brings back the result and then the model gets access to that result and can tell you that okay the cost of each apple is seven um so that's another kind of tool and I would use this in practice for yourself and it's um yeah it's just uh less error prone I would say so that's why I called this section models need tokens to think distribute your competition across many tokens ask models to create intermediate results or whenever you can lean on tools and Tool use instead of allowing the models to do all of the stuff in their memory so if they try to do it all in their memory I don't fully trust it and prefer to use tools whenever possible I want to show you one more example of where this actually comes up and that's in counting so models actually are not very good at counting for the exact same reason you're asking for way too much in a single individual token so let me show you a simple example of that um how many dots are below and then I just put in a bunch of dots and Chach says there are and then it just tries to solve the problem in a single token so in a single token it has to count the number of dots in its context window um and it has to do that in the single forward pass of a network and a single forward pass of a network as we talked about there's not that much computation that can happen there just think of that as being like very little competation that happens there so if I just look at what the model sees let's go to the LM go to tokenizer it sees uh this how many dots are below and then it turns out that these dots here this group of I think 20 dots is a single token and then this group of whatever it is is another token and then for some reason they break up as this so I don't actually this has to do with the details of the tokenizer but it turns out that these um the model basically sees the token ID this this this and so on and then from these token IDs it's expected to count the number and spoiler alert is not 161 it's actually I believe 177 so here's what we can do instead uh we can say use code and you might expect that like why should this work and it's actually kind of subtle and kind of interesting so when I say use code I actually expect this to work let's see okay 177 is correct so what happens here is I've actually it doesn't look like it but I've broken down the problem into a problems that are easier for the model I know that the model can't count it can't do mental counting but I know that the model is actually pretty good at doing copy pasting so what I'm doing here is when I say use code it creates a string in Python for this and the task of basically copy pasting my input here to here is very simple because for the model um it sees this string of uh it sees it as just these four tokens or whatever it is so it's very simple for the model to copy paste those token IDs and um kind of unpack them into Dots here and so it creates this string and then it calls python routine. count and then it comes up with the correct answer so the python interpreter is doing the counting it's not the models mental arithmetic doing the counting so it's again a simple example of um models need tokens to think don't rely on their mental arithmetic and um that's why also the models are not very good at counting if you need them to do counting tasks always ask them to lean on the tool now the models also have many other little cognitive deficits here and there and these are kind of like sharp edges of the technology to be kind of aware of over time so as an example the models are not very good with all kinds of spelling related tasks they're not very good at it and I told you that we would loop back around to tokenization and the reason to do for this is that the models they don't see the characters they see tokens and they their entire world is about tokens which are these little text chunks and so they don't see characters like our eyes do and so very simple character level tasks often fail so for example uh I'm giving it a string ubiquitous and I'm asking it to print only every third character starting with the first one so we start with U and then we should go every third so every so 1 2 3 Q should be next and then Etc so this I see is not correct and again my hypothesis is that this is again Dental arithmetic here is failing number one a little bit but number two I think the the more important issue here is that if you go to Tik tokenizer and you look at ubiquitous we see that it is three tokens right so you and I see ubiquitous and we can easily access the individual letters because we kind of see them and when we have it in the working memory of our visual sort of field we can really easily index into every third letter and I can do that task but the models don't have access to the individual letters they see this as these three tokens and uh remember these models are trained from scratch on the internet and all these token uh basically the model has to discover how many of all these different letters are packed into all these different tokens and the reason we even use tokens is mostly for efficiency uh but I think a lot of people areed interested to delete tokens entirely like we should really have character level or bite level models it's just that that would create very long sequences and people don't know how to deal with that right now so while we have the token World any kind of spelling tasks are not actually expected to work super well so because I know that spelling is not a strong suit because of tokenization I can again Ask it to lean On Tools so I can just say use code and I would again expect this to work because the task of copy pasting ubiquitous into the python interpreter is much easier and then we're leaning on python interpreter to manipulate the characters of this string so when I say use code ubiquitous yes it indexes into every third character and the actual truth is u2s uqs uh which looks correct to me so um again an example of spelling related tasks not working very well a very famous example of that recently is how many R are there in strawberry and this went viral many times and basically the models now get it correct they say there are three Rs in Strawberry but for a very long time all the state-of-the-art models would insist that there are only two RS in strawberry and this caused a lot of you know Ruckus because is that a word I think so because um it just kind of like why are the models so brilliant and they can solve math Olympiad questions but they can't like count RS in strawberry and the answer for that again is I've got built up to it kind of slowly but number one the models don't see characters they see tokens and number two they are not very good at counting and so here we are combining the difficulty of seeing the characters with the difficulty of counting and that's why the models struggled with this even though I think by now honestly I think open I may have hardcoded the answer here or I'm not sure what they did but um uh but this specific query now works so models are not very good at spelling and there there's a bunch of other little sharp edges and I don't want to go into all of them I just want to show you a few examples of things to be aware of and uh when you're using these models in practice I don't actually want to have a comprehensive analysis here of all the ways that the models are kind of like falling short I just want to make the point that there are some Jagged edges here and there and we've discussed a few of them and a few of them make sense but some of them also will just not make as much sense and they're kind of like you're left scratching your head even if you understand in- depth how these models work and and good example of that recently is the following uh the models are not very good at very simple questions like this and uh this is shocking to a lot of people because these math uh these problems can solve complex math problems they can answer PhD grade physics chemistry biology questions much better than I can but sometimes they fall short in like super simple problems like this so here we go 9.11 is bigger than 9.9 and it justifies it in some way but obviously and then at the end okay it actually it flips its decision later so um I don't believe that this is very reproducible sometimes it flips around its answer sometimes gets it right sometimes get it get it wrong uh let's try again okay even though it might look larger okay so here it doesn't even correct itself in the end if you ask many times sometimes it gets it right too but how is it that the model can do so great at Olympiad grade problems but then fail on very simple problems like this and uh I think this one is as I mentioned a little bit of a head scratcher it turns out that a bunch of people studied this in depth and I haven't actually read the paper uh but what I was told by this team was that when you scrutinize the activations inside the neural network when you look at some of the features and what what features turn on or off and what neurons turn on or off uh a bunch of neurons inside the neural network light up that are usually associated with Bible verses U and so I think the model is kind of like reminded that these almost look like Bible verse markers and in a bip verse setting 9.11 would come after 99.9 and so basically the model somehow finds it like cognitively very distracting that in Bible verses 9.11 would be greater um even though here it's actually trying to justify it and come up to the answer with a math it still ends up with the wrong answer here so it basically just doesn't fully make sense and it's not fully understood and um there's a few Jagged issues like that so that's why treat this as a as what it is which is a St stochastic system that is really magical but that you can't also fully trust and you want to use it as a tool not as something that you kind of like letter rip on a problem and copypaste the results okay so we have now covered two major stages of training of large language models we saw that in the first stage this is called the pre-training stage we are basically training on internet documents and when you train a language model on internet documents you get what's called a base model and it's basically an internet document simulator right now we saw that this is an interesting artifact and uh this takes many months to train on thousands of computers and it's kind of a lossy compression of the internet and it's extremely interesting but it's not directly useful because we don't want to sample internet documents we want to ask questions of an AI and have it respond to our questions so for that we need an assistant and we saw that we can actually construct an assistant in the process of a post training and specifically in the process of supervised fine-tuning as we call it so in this stage we saw that it's algorithmically identical to pre-training nothing is going to change the only thing that changes is the data set so instead of Internet documents we now want to create and curate a very nice data set of conversations so we want Millions conversations on all kinds of diverse topics between a human and an assistant and fundamentally these conversations are created by humans so humans write the prompts and humans write the ideal response responses and they do that based on labeling documentations now in the modern stack it's not actually done fully and manually by humans right they actually now have a lot of help from these tools so we can use language models um to help us create these data sets and that's done extensively but fundamentally it's all still coming from Human curation at the end so we create these conversations that now becomes our data set we fine tune on it or continue training on it and we get an assistant and then we kind of shifted gears and started talking about some of the kind of cognitive implications of what this assistant is like and we saw that for example the assistant will hallucinate if you don't take some sort of mitigations towards it so we saw that hallucinations would be common and then we looked at some of the mitigations of those hallucinations and then we saw that the models are quite impressive and can do a lot of stuff in their head but we saw that they can also Lean On Tools to become better so for example we can lo lean on a web search in order to hallucinate less and to maybe bring up some more um recent information or something like that or we can lean on tools like code interpreter so the code can so the llm can write some code and actually run it and see the results so these are some of the topics we looked at so far um now what I'd like to do is I'd like to cover the last and major stage of this Pipeline and that is reinforcement learning so reinforcement learning is still kind of thought to be under the umbrella of posttraining uh but it is the last third major stage and it's a different way of training language models and usually follows as this third step so inside companies like open AI you will start here and these are all separate teams so there's a team doing data for pre-training and a team doing training for pre-training and then there's a team doing all the conversation generation in a in a different team that is kind of doing the supervis fine tuning and there will be a team for the reinforcement learning as well so it's kind of like a handoff of these models you get your base model the then you find you need to be an assistant and then you go into reinforcement learning which we'll talk about uh now so that's kind of like the major flow and so let's now focus on reinforcement learning the last major stage of training and let me first actually motivate it and why we would want to do reinforcement learning and what it looks like on a high level so I would now like to try to motivate the reinforcement learning stage and what it corresponds to with something that you're probably familiar with and that is basically going to school so just like you went to school to become um really good at something we want to take large language models through school and really what we're doing is um we're um we have a few paradigms of ways of uh giving them knowledge or transferring skills so in particular when we're working with textbooks in school you'll see that there are three major kind of uh pieces of information in these textbooks three classes of information the first thing you'll see is you'll see a lot of exposition um and by the way this is a totally random book I pulled from the internet I I think it's some kind of an organic chemistry or something I'm not sure uh but the important thing is that you'll see that most of the text most of it is kind of just like the meat of it is exposition it's kind of like background knowledge Etc as you are reading through the words of this Exposition you can think of that roughly as training on that data so um and that's why when you're reading through this stuff this background knowledge and this all this context information it's kind of equivalent to pre-training so it's it's where we build sort of like a knowledge base of this data and get a sense of the topic the next major kind of information that you will see is these uh problems and with their worked Solutions so basically a human expert in this case uh the author of this book has given us not just a problem but has also worked through the solution and the solution is basically like equivalent to having like this ideal response for an assistant so it's basically the expert is showing us how to solve the problem in it's uh kind of like um in its full form so as we are reading the solution we are basically training on the expert data and then later we can try to imitate the expert um and basically um that's that roughly correspond to having the sft model that's what it would be doing so basically we've already done pre-training and we've already covered this um imitation of experts and how they solve these problems and the third stage of reinforcement learning is basically the practice problems so sometimes you'll see this is just a single practice problem here but of course there will be usually many practice problems at the end of each chapter in any textbook and practice problems of course we know are critical for learning because what are they getting you to do they're getting you to practice uh to practice yourself and discover ways of solving these problems yourself and so what you get in a practice problem is you get a problem description but you're not given the solution but you are given the final answer answer usually in the answer key of the textbook and so you know the final answer that you're trying to get to and you have the problem statement but you don't have the solution you are trying to practice the solution you're trying out many different things and you're seeing what gets you to the final solution the best and so you're discovering how to solve these problems so and in the process of that you're relying on number one the background information which comes from pre-training and number two maybe a little bit of imitation of human experts and you can probably try similar kinds of solutions and so on so we've done this and this and now in this section we're going to try to practice and so we're going to be given prompts we're going to be given Solutions U sorry the final answers but we're not going to be given expert Solutions we have to practice and try stuff out and that's what reinforcement learning is about okay so let's go back to the problem that we worked with previously just so we have a concrete example to talk through as we explore sort of the topic here so um I'm here in the Teck tokenizer because I'd also like to well I get a text box which is useful but number two I want to remind you again that we're always working with onedimensional token sequences and so um I actually like prefer this view because this is like the native view of the llm if that makes sense like this is what it actually sees it sees token IDs right okay so Emily buys three apples and two oranges each orange is $2 the total cost of all the fruit is $13 what is the cost of each apple and what I'd like to what I like you to appreciate here is these are like four possible candidate Solutions as an example and they all reach the answer three now what I'd like you to appreciate at this point is that if I am the human data labeler that is creating a conversation to be entered into the training set I don't actually really know which of these conversations to um to add to the data set some of these conversations kind of set up a system equations some of them sort of like just talk through it in English and some of them just kind of like skip right through to the solution um if you look at chbt for example and you give it this question it defines a system of variables and it kind of like does this little thing what we have to appreciate and uh differentiate between though is um the first purpose of a solution is to reach the right answer of course we want to get the final answer three that is the that is the important purpose here but there's kind of like a secondary purpose as well where here we are also just kind of trying to make it like nice uh for the human because we're kind of assuming that the person wants to see the solution they want to see the intermediate steps we want to present it nicely Etc so there are two separate things going on here number one is the presentation for the human but number two we're trying to actually get the right answer um so let's for the moment focus on just reaching the final answer if we're only care if we only care about the final answer then which of these is the optimal or the best prompt um sorry the best solution for the llm to reach the right answer um and what I'm trying to get at is we don't know me as a human labeler I would not know which one of these is best so as an example we saw earlier on when we looked at um the token sequences here and the mental arithmetic and reasoning we saw that for each token we can only spend basically a finite number of finite amount of compute here that is not very large or you should think about it that way way and so we can't actually make too big of a leap in any one token is is maybe the way to think about it so as an example in this one what's really nice about it is that it's very few tokens so it's going to take us very short amount of time to get to the answer but right here when we're doing 30 - 4 IDE 3 equals right in this token here we're actually asking for a lot of computation to happen on that single individual token and so maybe this is a bad example to give to the llm because it's kind of incentivizing it to skip through the calculations very quickly and it's going to actually make up mistakes make mistakes in this mental arithmetic uh so maybe it would work better to like spread out the spread it out more maybe it would be better to set it up as an equation maybe it would be better to talk through it we fundamentally don't know and we don't know because what is easy for you or I as or as human labelers what's easy for us or hard for us is different than what's easy or hard for the llm it cognition is different um and the token sequences are kind of like different hard for it and so some of the token sequences here that are trivial for me might be um very too much of a leap for the llm so right here this token would be way too hard but conversely many of the tokens that I'm creating here might be just trivial to the llm and we're just wasting tokens like why waste all these tokens when this is all trivial so if the only thing we care care about is the final answer and we're separating out the issue of the presentation to the human um then we don't actually really know how to annotate this example we don't know what solution to get to the llm because we are not the llm and it's clear here in the case of like the math example but this is actually like a very pervasive issue like for our knowledge is not lm's knowledge like the llm actually has a ton of knowledge of PhD in math and physics chemistry and whatnot so in many ways it actually knows more than I do and I'm I'm potentially not utilizing that knowledge in its problem solving but conversely I might be injecting a bunch of knowledge in my solutions that the LM doesn't know in its parameters and then those are like sudden leaps that are very confusing to the model and so our cognitions are different and I don't really know what to put here if all we care about is the reaching the final solution and doing it economically ideally and so long story short we are not in a good position to create these uh token sequences for the LM and they're useful by imitation to initialize the system but we really want the llm to discover the token sequences that work for it we need to find it needs to find for itself what token sequence reliably gets to the answer given the prompt and it needs to discover that in the process of reinforcement learning and of trial and error so let's see how this example would work like in reinforcement learning okay so we're now back in the huging face inference playground and uh that just allows me to very easily call uh different kinds of models so as an example here on the top right I chose the Gemma 2 2 billion parameter model so two billion is very very small so this is a tiny model but it's okay so we're going to give it um the way that reinforcement learning will basically work is actually quite quite simple um we need to try many different kinds of solutions and we want to see which Solutions work well or not so we're basically going to take the prompt we're going to run the model and the model generates a solution and then we're going to inspect the solution and we know that the correct answer for this one is $3 and so indeed the model gets it correct it says it's $3 so this is correct so that's just one attempt at DIS solution so now we're going to delete this and we're going to rerun it again let's try a second attempt so the model solves it in a bit slightly different way right every single attempt will be a different generation because these models are stochastic systems remember that at every single token here we have a probability distribution and we're sampling from that distribution so we end up kind kind of going down slightly different paths and so this is a second solution that also ends in the correct answer now we're going to delete that let's go a third time okay so again slightly different solution but also gets it correct now we can actually repeat this uh many times and so in practice you might actually sample thousand of independent Solutions or even like million solutions for just a single prompt um and some of them will be correct and some of them will not be very correct and basically what we want to do is we want to encourage the solutions that lead to correct answers so let's take a look at what that looks like so if we come back over here here's kind of like a cartoon diagram of what this is looking like we have a prompt and then we tried many different solutions in parallel and some of the solutions um might go well so they get the right answer which is in green and some of the solutions might go poorly and may not reach the right answer which is red now this problem here unfortunately is not the best example because it's a trivial prompt and as we saw uh even like a two billion parameter model always gets it right so it's not the best example in that sense but let's just exercise some imagination here and let's just suppose that the um green ones are good and the red ones are bad okay so we generated 15 Solutions only four of them got the right answer and so now what we want to do is basically we want to encourage the kinds of solutions that lead to right answers so whatever token sequences happened in these red Solutions obviously something went wrong along the way somewhere and uh this was not a good path to take through the solution and whatever token sequences there were in these Green Solutions well things went uh pretty well in this situation and so we want to do more things like it in prompts like this and the way we encourage this kind of a behavior in the future is we basically train on these sequences um but these training sequencies now are not coming from expert human annotators there's no human who decided that this is the correct solution this solution came from the model itself so the model is practicing here it's tried out a few Solutions four of them seem to have worked and now the model will kind of like train on them and this corresponds to a student basically looking at their Solutions and being like okay well this one worked really well so this is this is how I should be solving these kinds of problems and uh here in this example there are many different ways to actually like really tweak the methodology a little bit here but just to give the core idea across maybe it's simplest to just think about take the taking the single best solution out of these four uh like say this one that's why it was yellow uh so this is the the solution that not only led to the right answer but may maybe had some other nice properties maybe it was the shortest one or it looked nicest in some ways or uh there's other criteria you could think of as an example but we're going to decide that this the top solution we're going to train on it and then uh the model will be slightly more likely once you do the parameter update to take this path in this kind of a setting in the future but you have to remember that we're going to run many different diverse prompts across lots of math problems and physics problems and whatever wherever there might be so tens of thousands of prompts maybe have in mind there's thousands of solutions prompt and so this is all happening kind of like at the same time and as we're iterating this process the model is discovering for itself what kinds of token sequences lead it to correct answers it's not coming from a human annotator the the model is kind of like playing in this playground and it knows what it's trying to get to and it's discovering sequences that work for it uh these are sequences that don't make any mental leaps uh they they seem to work reliably and statistically and uh fully utilize the knowledge of the model as it has it and so uh this is the process of reinforcement learning it's basically a guess and check we're going to guess many different types of solutions we're going to check them and we're going to do more of what worked in the future and that is uh reinforcement learning so in the context of what came before we see now that the sft model the supervised fine tuning model it's still helpful because it still kind of like initializes the model a little bit into to the vicinity of the correct Solutions so it's kind of like a initialization of um of the model in the sense that it kind of gets the model to you know take Solutions like write out Solutions and maybe it has an understanding of setting up a system of equations or maybe it kind of like talks through a solution so it gets you into the vicinity of correct Solutions but reinforcement learning is where everything gets dialed in we really discover the solutions that work for the model get the right answers we encourage them and then the model just kind of like gets better over time time okay so that is the high Lev process for how we train large language models in short we train them kind of very similar to how we train children and basically the only difference is that children go through chapters of books and they do all these different types of training exercises um kind of within the chapter of each book but instead when we train AIS it's almost like we kind of do it stage by stage depending on the type of that stage so first what we do is we do pre-training which as we saw is equivalent to uh basically reading all the expository material so we look at all the textbooks at the same time and we read all the exposition and we try to build a knowledge base the second thing then is we go into the sft stage which is really looking at all the fixed uh sort of like solutions from Human Experts of all the different kinds of worked Solutions across all the textbooks and we just kind of get an sft model which is able to imitate the experts but does so kind of blindly it just kind of like does its best guess uh kind of just like trying to mimic statistically the expert behavior and so that's what you get when you look at all the work Solutions and then finally in the last stage we do all the practice problems in the RL stage across all the textbooks we only do the practice problems and that's how we get the RL model so on a high level the way we train llms is very much equivalent uh to the process that we train uh that we use for training of children the next point I would like to make is that actually these first two stat ages pre-training and surprise fine-tuning they've been around for years and they are very standard and everyone does them all the different llm providers it is this last stage the RL training that is a lot more early in its process of development and is not standard yet in the field and so um this stage is a lot more kind of early and nent and the reason for that is because I actually skipped over a ton of little details here in this process the high level idea is very simple it's trial and there learning but there's a ton of details and little math mathematical kind of like nuances to exactly how you pick the solutions that are the best and how much you train on them and what is the prompt distribution and how to set up the training run such that this actually works so there's a lot of little details and knobs to the core idea that is very very simple and so getting the details right here uh is not trivial and so a lot of companies like for example open and other LM providers have experimented internally with reinforcement learning fine tuning for llms for a while but they've not talked about it publicly um it's all kind of done inside the company and so that's why the paper from Deep seek that came out very very recently was such a big deal because this is a paper from this company called DC Kai in China and this paper really talked very publicly about reinforcement learning fine training for large language models and how incredibly important it is for large language models and how it brings out a lot of reasoning capabilities in the models we'll go into this in a second so this paper reinvigorated the public interest of using RL for llms and gave a lot of the um sort of n-r details that are needed to reproduce their results and actually get the stage to work for large langage models so let me take you briefly through this uh deep seek R1 paper and what happens when you actually correctly apply RL to language models and what that looks like and what that gives you so the first thing I'll scroll to is this uh kind of figure two here where we are looking at the Improvement in how the models are solving mathematical problems so this is the accuracy of solving mathematical problems on the a accuracy and then we can go to the web page and we can see the kinds of problems that are actually in these um these the kinds of math problems that are being measured here so these are simple math problems you can um pause the video if you like but these are the kinds of problems that basically the models are being asked to solve and you can see that in the beginning they're not doing very well but then as you update the model with this many thousands of steps their accuracy kind of continues to climb so the models are improving and they're solving these problems with a higher accuracy as you do this trial and error on a large data set of these kinds of problems and the models are discovering how to solve math problems but even more incredible than the quantitative kind of results of solving these problems with a higher accuracy is the qualitative means by which the model achieves these results so when we scroll down uh one of the figures here that is kind of interesting is that later on in the optimization the model seems to be uh using average length per response uh goes up up so the model seems to be using more tokens to get its higher accuracy results so it's learning to create very very long Solutions why are these Solutions very long we can look at them qualitatively here so basically what they discover is that the model solution get very very long partially because so here's a question and here's kind of the answer from the model what the model learns to do um and this is an immerging property of new optimization it just discovers that this is good for problem solving is it starts to do stuff like this wait wait wait that's Nota moment I can flag here let's reevaluate this step by step to identify the correct sum can be so what is the model doing here right the model is basically re-evaluating steps it has learned that it works better for accuracy to try out lots of ideas try something from different perspectives retrace reframe backtrack is doing a lot of the things that you and I are doing in the process of problem solving for mathematical questions but it's rediscovering what happens in your head not what you put down on the solution and there is no human who can hardcode this stuff in the ideal assistant response this is only something that can be discovered in the process of reinforcement learning because you wouldn't know what to put here this just turns out to work for the model and it improves its accuracy in problem solving so the model learns what we call these chains of thought in your head and it's an emergent property of the optim of the optimization and that's what's bloating up the response length but that's also what's increasing the accuracy of the problem problem solving so what's incredible here is basically the model is discovering ways to think it's learning what I like to call cognitive strategies of how you manipulate a problem and how you approach it from different perspectives how you pull in some analogies or do different kinds of things like that and how you kind of uh try out many different things over time uh check a result from different perspectives and how you kind of uh solve problems but here it's kind of discovered by the RL so extremely incredible to see this emerge in the optimization without having to hardcode it anywhere the only thing we've given it are the correct answers and this comes out from trying to just solve them correctly which is incredible um now let's go back to actually the problem that we've been working with and let's take a look at what it would look like uh for uh for this kind of a model what we call reasoning or thinking model to solve that problem okay so recall that this is the problem we've been working with and when I pasted it into chat GPT 40 I'm getting this kind of a response let's take a look at what happens when you give this same query to what's called a reasoning or a thinking model this is a model that was trained with reinforcement learning so this model described in this paper DC car1 is available on chat. dec.com uh so this is kind of like the company uh that developed is hosting it you have to make sure that the Deep think button is turned on to get the R1 model as it's called we can paste it here and run it and so let's take a look at what happens now and what is the output of the model okay so here's it says so this is previously what we get using basically what's an sft approach a supervised funing approach this is like mimicking an expert solution this is what we get from the RL model okay let me try to figure this out so Emily buys three apples and two oranges each orange cost $2 total is 13 I need to find out blah blah blah so here you you um as you're reading this you can't escape thinking that this model is thinking um is definitely pursuing the solution solution it deres that it must cost $3 and then it says wait a second let me check my math again to be sure and then it tries it from a slightly different perspective and then it says yep all that checks out I think that's the answer I don't see any mistakes let me see if there's another way to approach the problem maybe setting up an equation let's let the cost of one apple be $8 then blah blah blah yep same answer so definitely each apple is $3 all right confident that that's correct and then what it does once it sort of um did the thinking process is it writes up the nice solution for the human and so this is now considering so this is more about the correctness aspect and this is more about the presentation aspect where it kind of like writes it out nicely and uh boxes in the correct answer at the bottom and so what's incredible about this is we get this like thinking process of the model and this is what's coming from the reinforcement learning process this is what's bloating up the length of the token sequences they're doing thinking and they're trying different ways this is what's giving you higher accuracy in problem solving and this is where we are seeing these aha moments and these different strategies and these um ideas for how you can make sure that you're getting the correct answer the last point I wanted to make is some people are a little bit nervous about putting you know very sensitive data into chat.com because this is a Chinese company so people don't um people are a little bit careful and Cy with that a little bit um deep seek R1 is a model that was released by this company so this is an open source model or open weights model it is available for anyone to download and use you will not be able to like run it in its full um sort of the full model in full Precision you won't run that on a MacBook but uh or like a local device because this is a fairly large model but many companies are hosting the full largest model one of those companies that I like to use is called together. so when you go to together. you sign up and you go to playgrounds you can can select here in the chat deep seek R1 and there's many different kinds of other models that you can select here these are all state-of-the-art models so this is kind of similar to the hugging face inference playground that we've been playing with so far but together. a will usually host all the state-of-the-art models so select DT car1 um you can try to ignore a lot of these I think the default settings will often be okay and we can put in this and because the model was released by Deep seek what you're getting here should be basically equivalent to what you're getting here now because of the randomness in the sampling we're going to get something slightly different uh but in principle this should be uh identical in terms of the power of the model and you should be able to see the same things quantitatively and qualitatively uh but uh this model is coming from kind of a an American company so that's deep seek and that's the what's called a reasoning model now when I go back to chat uh let me go to chat here okay so the models that you're going to see in the drop down here some of them like 01 03 mini O3 mini High Etc they are talking about uses Advanced reasoning now what this is referring to uses Advanced reasoning is it's referring to the fact that it was trained by reinforcement learning with techniques very similar to those of deep C car1 per public statements of opening ey employees uh so these are thinking models trained with RL and these models like GPT 4 or GPT 4 40 mini that you're getting in the free tier you should think of them as mostly sft models supervised fine tuning models they don't actually do this like thinking as as you see in the RL models and even though there's a little bit of reinforcement learning involved with these models and I'll go that into that in a second these are mostly sft models I think you should think about it that way so in the same way as what we saw here we can pick one of the thinking models like say 03 mini high and these models by the way might not be available to you unless you pay a Chachi PT subscription of either $20 per month or $200 per month for some of the top models so we can pick a thinking model and run now what's going to happen here is it's going to say reasoning and it's going to start to do stuff like this and um what we're seeing here is not exactly the stuff we're seeing here so even though under the hood the model produces these kinds of uh kind of chains of thought opening ey chooses to not show the exact chains of thought in the web interface it shows little summaries of that of those chains of thought and open kind of does this I think partly because uh they are worried about what's called the distillation risk that is that someone could come in and actually try to imitate those reasoning traces and recover a lot of the reasoning performance by just imitating the reasoning uh chains of thought and so they kind of hide them and they only show little summaries of them so you're not getting exactly what you would get in deep seek as with respect to the reasoning itself and then they write up the solution so these are kind of like equivalent even though we're not seeing the full under the hood details now in terms of the performance uh these models and deep seek models are currently rly on par I would say it's kind of hard to tell because of the evaluations but if you're paying $200 per month to open AI some of these models I believe are currently they basically still look better uh but deep seek R1 for now is still a very solid choice for a thinking model that would be available to you um sort of um either on this website or any other website because the model is open weights you can just download it so that's thinking models so what is the summary so far well we've talked about reinforcement learning and the fact that thinking emerges in the process of the optimization on when we basically run RL on many math uh and kind of code problems that have verifiable Solutions so there's like an answer three Etc now these thinking models you can access in for example deep seek or any inference provider like together. a and choosing deep seek over there these thinking models are also available uh in chpt under any of the 01 or O3 models but these GPT 4 R models Etc they're not thinking models you should think of them as mostly sft models now if you are um if you have a prompt that requires Advanced reasoning and so on you should probably use some of the thinking models or at least try them out but empirically for a lot of my use when you're asking a simpler question there's like a knowledge based question or something like that this might be Overkill like there's no need to think 30 seconds about some factual question so for that I will uh sometimes default to just GPT 40 so empirically about 80 90% of my use is just gp4 and when I come across a very difficult problem like in math and code Etc I will reach for the thinking models but then I have to wait a bit longer because they're thinking um so you can access these on chat on deep seek also I wanted to point out that um AI studio. go.com even though it looks really busy really ugly because Google's just unable to do this kind of stuff well it's like what is happening but if you choose model and you choose here Gemini 2.0 flash thinking experimental 01 21 if you choose that one that's also a a kind of early experiment experimental of a thinking model by Google so we can go here and we can give it the same problem and click run and this is also a thinking problem a thinking model that will also do something similar and comes out with the right answer here so basically Gemini also offers a thinking model anthropic currently does not offer a thinking model but basically this is kind of like the frontier development of these llms I think RL is kind of like this new exciting stage but getting the details right is difficult and that's why all these models and thinking models are currently experimental as of 2025 very early 2025 um but this is kind of like the frontier development of pushing the performance on these very difficult problems using reasoning that is emerging in these optimizations one more connection that I wanted to bring up is that the discovery that reinforcement learning is extremely powerful way of learning is not new to the field of AI and one place what we've already seen this demonstrated is in the game of Go and famously Deep Mind developed the system alphago and you can watch a movie about it um where the system is learning to play the game of go against top human players and um when we go to the paper underlying alphago so in this paper when we scroll down we actually find a really interesting plot um that I think uh is kind of familiar uh to us and we're kind of like we discovering in the more open domain of arbitrary problem solving instead of on the closed specific domain of the game of Go but basically what they saw and we're going to see this in llms as well as this becomes more mature is this is the ELO rating of playing game of Go and this is leas dull an extremely strong human player and here what they are comparing is the strength of a model learned trained by supervised learning and a model trained by reinforcement learning so the supervised learning model is imitating human expert players so if you just get a huge amount of games played by expert players in the game of Go and you try to imitate them you are going to get better but then you top out and you never quite get better than some of the top top top players of in the game of Go like LEL so you're never going to reach there because you're just imitating human players you can't fundamentally go beyond a human player if you're just imitating human players but in a process of reinforcement learning is significantly more powerful in reinforcement learning for a game of Go it means that the system is playing moves that empirically and statistically lead to win to winning the game and so alphago is a system where it kind of plays against it itself and it's using reinforcement learning to create rollouts so it's the exact same diagram here but there's no prompt it's just uh because there's no prompt it's just a fixed game of Go but it's trying out lots of solutions it's trying out lots of plays and then the games that lead to a win instead of a specific answer are reinforced they're they're made stronger and so um the system is learning basically the sequences of actions that empirically and statistically lead to winning the game and reinforcement learning is not going to be constrained by human performance and reinforcement learning can do significantly better and overcome even the top players like Lisa Dole and so uh probably they could have run this longer and they just chose to crop it at some point because this costs money but this is very powerful demonstration of reinforcement learning and we're only starting to kind of see hints of this diagram in larger language models for reasoning problems so we're not going to get too far by just imitating experts we need to go beyond that set up these like little game environments and get let let the system discover reasoning traces or like ways of solving problems uh that are unique and that uh just basically work well now on this aspect of uniqueness notice that when you're doing reinforcement learning nothing prevents you from veering off the distribution of how humans are playing the game and so when we go back to uh this alphao search here one of the suggested modifications is called move 37 and move 37 in alphao is referring to a specific point in time where alphago basically played a move that uh no human expert would play uh so the probability of this move uh to be played by a human player was evaluated to be about 1 in 10th ,000 so it's a very rare move but in retrospect it was a brilliant move so alphago in the process of reinforcement learning discovered kind of like a strategy of playing that was unknown to humans and but is in retrospect uh brilliant I recommend this YouTube video um leis do versus alphao move 37 reactions and Analysis and this is kind of what it looked like when alphao played this move value that's a very that's a very surprising move I thought I thought it was I thought it was a mistake when I see this move anyway so basically people are kind of freaking out because it's a it's a move that a human would not play that alphago played because in its training uh this move seemed to be a good idea it just happens not to be a kind of thing that a humans would would do and so that is again the power of reinforcement learning and in principle we can actually see the equivalence of that if we continue scaling this Paradigm in language models and what that looks like is kind of unknown so so um what does it mean to solve problems in such a way that uh even humans would not be able to get how can you be better at reasoning or thinking than humans how can you go beyond just uh a thinking human like maybe it means discovering analogies that humans would not be able to uh create or maybe it's like a new thinking strategy it's kind of hard to think through uh maybe it's a holy new language that actually is not even English maybe it discovers its own language that is a lot better at thinking um because the model is unconstrained to even like stick with English uh so maybe it takes a different language to think in or it discovers its own language so in principle the behavior of the system is a lot less defined it is open to do whatever works and it is open to also slowly Drift from the distribution of its training data which is English but all of that can only be done if we have a very large diverse set of problems in which the these strategy can be refined and perfected and so that is a lot of the frontier LM research that's going on right now is trying to kind of create those kinds of prompt distributions that are large and diverse these are all kind of like game environments in which the llms can practice their thinking and uh it's kind of like writing you know these practice problems we have to create practice problems for all of domains of knowledge and if we have practice problems and tons of them the models will be able to reinforcement learning reinforcement learn on them and kind of uh create these kinds of uh diagrams but in the domain of open thinking instead of a closed domain like game of Go there's one more section within reinforcement learning that I wanted to cover and that is that of learning in unverifiable domains so so far all of the problems that we've looked at are in what's called verifiable domains that is any candidate solution we can score very easily against a concrete answer so for example answer is three and we can very easily score these Solutions against the answer of three either we require the models to like box in their answers and then we just check for equality of whatever is in the box with the answer or you can also use uh kind of what's called an llm judge so the llm judge looks at a solution and it gets the answer and just basically scores the solution for whether it's consistent with the answer or not and llms uh empirically are good enough at the current capability that they can do this fairly reliably so we can apply those kinds of techniques as well in any case we have a concrete answer and we're just checking Solutions again against it and we can do this automatically with no kind of humans in the loop the problem is that we can't apply the strategy in what's called unverifiable domains so usually these are for example creative writing tasks like write a joke about Pelicans or write a poem or summarize a paragraph or something like that in these kinds of domains it becomes harder to score our different solutions to this problem so for example writing a joke about Pelicans we can generate lots of different uh jokes of course that's fine for example we can go to chbt and we can get it to uh generate a joke about Pelicans uh so much stuff in their beaks because they don't bellan in backpacks what okay we can uh we can try something else why don't Pelicans ever pay for their drinks because they always B it to someone else haha okay so these models are not obviously not very good at humor actually I think it's pretty fascinating because I think humor is secretly very difficult and the model have the capability I think anyway in any case you could imagine creating lots of jokes the problem that we are facing is how do we score them now in principle we could of course get a human to look at all these jokes just like I did right now the problem with that is if you are doing reinforcement learning you're going to be doing many thousands of updates and for each update you want to be looking at say thousands of prompts and for each prompt you want to be potentially looking at looking at hundred or thousands of different kinds of generations and so there's just like way too many of these to look at and so um in principle you could have a human inspect all of them and score them and decide that okay maybe this one is funny and uh maybe this one is funny and this one is funny and we could train on them to get the model to become slightly better at jokes um in the context of pelicans at least um the problem is that it's just like way too much human time this is an unscalable strategy we need some kind of an automatic strategy for doing this and one sort of solution to this was proposed in this paper uh that introduced what's called reinforcement learning from Human feedback and so this was a paper from open at the time and many of these people are now um co-founders in anthropic um and this kind of proposed a approach for uh basically doing reinforcement learning in unverifiable domains so let's take a look at how that works so this is the cartoon diagram of the core ideas involved so as I mentioned the native approach is if we just set Infinity human time we could just run RL in these domains just fine so for example we can run RL as usual if I have Infinity humans I would I just want to do and these are just cartoon numbers I want to do 1,000 updates where each update will be on 1,000 prompts and in for each prompt we're going to have 1,000 roll outs that we're scoring so we can run RL with this kind of a setup the problem is in the process of doing this I will need to run one I will need to ask a human to evaluate a joke a total of 1 billion times and so that's a lot of people looking at really terrible jokes so we don't want to do that so instead we want to take the arlef approach so um in our Rel of approach we are kind of like the the core trick is that of indirection so we're going to involve humans just a little bit and the way we cheat is that we basically train a whole separate neural network that we call a reward model and this neural network will kind of like imitate human scores so we're going to ask humans to score um roll we're going to then imitate human scores using a neural network and this neural network will become a kind of simulator of human preferences and now that we have a neural network simulator we can do RL against it so instead of asking a real human we're asking a simulated human for their score of a joke as an example and so once we have a simulator we're often racist because we can query it as many times as we want to and it's all whole automatic process and we can now do reinforcement learning with respect to the simulator and the simulator as you might expect is not going to be a perfect human but if it's at least statistically similar to human judgment then you might expect that this will do something and in practice indeed uh it does so once we have a simulator we can do RL and everything works great so let me show you a cartoon diagram a little bit of what this process looks like although the details are not 100 like super important it's just a core idea of how this works so here I have a cartoon diagram of a hypothetical example of what training the reward model would look like so we have a prompt like write a joke about picans and then here we have five separate roll outs so these are all five different jokes just like this one now the first thing we're going to do is we are going to ask a human to uh order these jokes from the best to worst so this is uh so here this human thought that this joke is the best the funniest so number one joke this is number two joke number three joke four and five so this is the worst joke we're asking humans to order instead of give scores directly because it's a bit of an easier task it's easier for a human to give an ordering than to give precise scores now that is now the supervision for the model so the human has ordered them and that is kind of like their contribution to the training process but now separately what we're going to do is we're going to ask a reward model uh about its scoring of these jokes now the reward model is a whole separate neural network completely separate neural net um and it's also probably a transform uh but it's not a language model in the sense that it generates diverse language Etc it's just a scoring model so the reward model will take as an input The Prompt number one and number two a candidate joke so um those are the two inputs that go into the reward model so here for example the reward model would be taken this prompt and this joke now the output of a reward model is a single number and this number is thought of as a score and it can range for example from Z to one so zero would be the worst score and one would be the best score so here are some examples of what a hypothetical reward model at some stage in the training process would give uh s scoring to these jokes so 0.1 is a very low score 08 is a really high score and so on and so now um we compare the scores given by the reward model with uh the ordering given by the human and there's a precise mathematical way to actually calculate this uh basically set up a loss function and calculate a kind of like a correspondence here and uh update a model based on it but I just want to give you the intuition which is that as an example here for this second joke the the human thought that it was the funniest and the model kind of agreed right 08 is a relatively high score but this score should have been even higher right so after an update we would expect that maybe this score should have been will actually grow after an update of the network to be like say 081 or something um for this one here they actually are in a massive disagreement because the human thought that this was number two but here the the score is only 0.1 and so this score needs to be much higher so after an update on top of this um kind of a supervision this might grow a lot more like maybe it's 0.15 or something like that um and then here the human thought that this one was the worst joke but here the model actually gave it a fairly High number so you might expect that after the update uh this would come down to maybe 3 3.5 or something like that so basically we're doing what we did before we're slightly nudging the predictions from the models using a neural network training process and we're trying to make the reward model scores be consistent with human ordering and so um as we update the reward model on human data it becomes better and better simulator of the scores and orders uh that humans provide and then becomes kind of like the the neural the simulator of human preferences which we can then do RL against but critically we're not asking humans one billion times to look at a joke we're maybe looking at th000 prompts and five roll outs each so maybe 5,000 jokes that humans have to look at in total and they just give the ordering and then we're training the model to be consistent with that ordering and I'm skipping over the mathematical details but I just want you to understand a high level idea that uh this reward model is do is basically giving us this scour and we have a way of training it to be consistent with human orderings and that's how rhf works okay so that is the rough idea we basically train simulators of humans and RL with respect to those simulators now I want to talk about first the upside of reinforcement learning from Human feedback the first thing is that this allows us to run reinforcement learning which we know is incredibly powerful kind of set of techniques and it allows us to do it in arbitrary domains and including the ones that are unverifiable so things like summarization and poem writing joke writing or any other creative writing really uh in domains outside of math and code Etc now empirically what we see when we actually apply rhf is that this is a way to improve the performance of the model and uh I have a top answer for why that might be but I don't actually know that it is like super well established on like why this is you can empirically observe that when you do rhf correctly the models you get are just like a little bit better um but as to why is I think like not as clear so here's my best guess my best guess is that this is possibly mostly due to the discriminator generator Gap what that means is that in many cases it is significantly easier to discriminate than to generate for humans so in particular an example of this is um in when we do supervised fine-tuning right sft we're asking humans to generate the ideal assistant response and in many cases here um as I've shown it uh the ideal response is very simple to write but in many cases might not be so for example in summarization or poem writing or joke writing like how are you as a human assist as a human labeler um supposed to give the ideal response in these cases it requires creative human writing to do that and so rhf kind of sidesteps this because we get um we get to ask people a significantly easier question as a data labelers they're not asked to write poems directly they're just given five poems from the model and they're just asked to order them and so that's just a much easier task for a human labeler to do and so what I think this allows you to do basically is it um it kind of like allows a lot more higher accuracy data because we're not asking people to do the generation task which can be extremely difficult like we're not asking them to do creative writing we're just trying to get them to distinguish between creative writings and uh find the ones that are best and that is the signal that humans are providing just the ordering and that is their input into the system and then the system in rhf just discovers the kinds of responses that would be graded well by humans and so that step of indirection allows the models to become a bit better so that is the upside of our LF it allows us to run RL it empirically results in better models and it allows uh people to contribute their supervision uh even without having to do extremely difficult tasks um in the case of writing ideal responses unfortunately our HF also comes with significant downsides and so um the main one is that basically we are doing reinforcement learning not with respect to humans and actual human judgment but with respect to a lossy simulation of humans right and this lossy simulation could be misleading because it's just a it's just a simulation right it's just a language model that's kind of outputting scores and it might not perfectly reflect the opinion of an actual human with an actual brain in all the possible different cases so that's number one which is actually something even more subtle and devious going on that uh really dramatically holds back our LF as a technique that we can really scale to significantly um kind of Smart Systems and that is that reinforcement learning is extremely good at discovering a way to game the model to game the simulation so this reward model that we're constructing here that gives the course these models are Transformers these Transformers are massive neurals they have billions of parameters and they imitate humans but they do so in a kind of like a simulation way now the problem is that these are massive complicated systems right there's a billion parameters here that are outputting a single score it turns out that there are ways to gain these models you can find kinds of inputs that were not part of their training set and these inputs inexplicably get very high scores but in a fake way so very often what you find if you run our lch for very long so for example if we do 1,000 updates which is like say a lot of updates you might expect that your jokes are getting better and that you're getting like real bangers about Pelicans but that's not EXA exactly what happens what happens is that uh in the first few hundred steps the jokes about Pelicans are probably improving a little bit and then they actually dramatically fall off the cliff and you start to get extremely nonsensical results like for example you start to get um the top joke about Pelicans starts to be the and this makes no sense right like when you look at it why should this be a top joke but when you take the the and you plug it into your reward model you'd expect score of zero but actually the reward model loves this as a joke it will tell you that the the the theth is a score of 1. Z this is a top joke and this makes no sense right but it's because these models are just simulations of humans and they're massive neural lots and you can find inputs at the bottom that kind of like get into the part of the input space that kind of gives you nonsensical results these examples are what's called adversarial examples and I'm not going to go into the topic too much but these are adversarial inputs to the model they are specific little inputs that kind of go between the nooks and crannies of the model and give nonsensical results at the top now here's what you might imagine doing you say okay the the the is obviously not score of one um it's obviously a low score so let's take the the the the the let's add it to the data set and give it an ordering that is extremely bad like a score of five and indeed your model will learn that the D should have a very low score and it will give it score of zero the problem is that there will always be basically infinite number of nonsensical adversarial examples hiding in the model if you iterate this process many times and you keep adding nonsensical stuff to your reward model and giving it very low scores you can you'll never win the game uh you can do this many many rounds and reinforcement learning if you run it long enough will always find a way to gain the model it will discover adversarial examples it will get get really high scores uh with nonsensical results and fundamentally this is because our scoring function is a giant neural nut and RL is extremely good at finding just the ways to trick it uh so long story short you always run rhf put for maybe a few hundred updates the model is getting better and then you have to crop it and you are done you can't run too much against this reward model because the optimization will start to game it and you basically crop it and you call it and you ship it um and uh you can improve the reward model but you kind of like come across these situations eventually at some point so rhf basically what I usually say is that RF is not RL and what I mean by that is I mean RF is RL obviously but it's not RL in the magical sense this is not RL that you can run indefinitely these kinds of problems like where you are getting con correct answer you cannot gain this as easily you either got the correct answer or you didn't and the scoring function is much much simpler you're just looking at the boxed area and seeing if the result is correct so it's very difficult to gain these functions but uh gaming a reward model is possible now in these verifiable domains you can run RL indefinitely you could run for tens of thousands hundreds of thousands of steps and discover all kinds of really crazy strategies that we might not even ever think about of Performing really well for all these problems in the game of Go there's no way to to beat to basically game uh the winning of a game or the losing of a game we have a perfect simulator we know all the different uh where all the stones are placed and we can calculate uh whether someone has won or not there's no way to gain that and so you can do RL indefinitely and you can eventually be beat even leol but with models like this which are gameable you cannot repeat this process indefinitely so I kind of see rhf as not real RL because the reward function is gameable so it's kind of more like in the realm of like little fine-tuning it's a little it's a little Improvement but it's not something that is fundamentally set up correctly where you can insert more compute run for longer and get much better and magical results so it's it's uh it's not RL in that sense it's not RL in the sense that it lacks magic um it can find you in your model and get a better performance and indeed if we go back to chat GPT the GPT 40 model has gone through rhf because it works well but it's just not RL in the same sense rlf is like a little fine tune that slightly improves your model is maybe like the way I would think about it okay so that's most of the technical content that I wanted to cover I took you through the three major stages and paradigms of training these models pre-training supervised fine tuning and reinforcement learning and I showed you that they Loosely correspond to the process we already use for teaching children and so in particular we talked about pre-training being sort of like the basic knowledge acquisition of reading Exposition supervised fine tuning being the process of looking at lots and lots of worked examples and imitating experts and practice problems the only difference is that we now have to effectively write textbooks for llms and AIS across all the disciplines of human knowledge and also in all the cases where we actually would like them to work like code and math and you know basically all the other disciplines so we're in the process of writing textbooks for them refining all the algorithms that I've presented on the high level and then of course doing a really really good job at the execution of training these models at scale and efficiently so in particular I didn't go into too many details but these are extremely large and complicated distributed uh sort of um jobs that have to run over tens of thousands or even hundreds of thousands of gpus and the engineering that goes into this is really at the stateof the art of what's possible with computers at that scale so I didn't cover that aspect too much but um this is very kind of serious and they were underlying all these very simple algorithms ultimately now I also talked about sort of like the theory of mind a little bit of these models and the thing I want you to take away is that these models are really good but they're extremely useful as tools for your work you shouldn't uh sort of trust them fully and I showed you some examples of that even though we have mitigations for hallucinations the models are not perfect and they will hallucinate still it's gotten better over time and it will continue to get better but they can hallucinate in other words in in addition to that I covered kind of like what I call the Swiss cheese uh sort of model of llm capabilities that you should have in your mind the models are incredibly good across so many different disciplines but then fail randomly almost in some unique cases so for example what is bigger 9.11 or 9.9 like the model doesn't know but simultaneously it can turn around and solve Olympiad questions and so this is a hole in the Swiss cheese and there are many of them and you don't want to trip over them so don't um treat these models as infallible models check their work use them as tools use them for inspiration use them for the first draft but uh work with them as tools and be ultimately respons responsible for the you know product of your work and that's roughly what I wanted to talk about this is how they're trained and this is what they are let's now turn to what are some of the future capabilities of these models uh probably what's coming down the pipe and also where can you find these models I have a few blow points on some of the things that you can expect coming down the pipe the first thing you'll notice is that the models will very rapidly become multimodal everything I talked about above concerned text but very soon we'll have llms that can not just handle text but they can also operate natively and very easily over audio so they can hear and speak and also images so they can see and paint and we're already seeing the beginnings of all of this uh but this will be all done natively inside inside the language model and this will enable kind of like natural conversations and roughly speaking the reason that this is actually no different from everything we've covered above is that as a baseline you can tokenize audio and images and apply the exact same approaches of everything that we've talked about above so it's not a fundamental change it's just uh it's just a to we have to add some tokens so as an example for tokenizing audio we can look at slices of the spectrogram of the audio signal and we can tokenize that and just add more tokens that suddenly represent audio and just add them into the context windows and train on them just like above the same for images we can use patches and we can separately tokenize patches and then what is an image an image is just a sequence of tokens and this actually kind of works and there's a lot of early work in this direction and so we can just create streams of tokens that are representing audio images as well as text and interpers them and handle them all simultaneously in a single model so that's one example of multimodality uh second something that people are very interested in is currently most of the work is that we're handing individual tasks to the models on kind of like a silver platter like please solve this task for me and the model sort of like does this little task but it's up to us to still sort of like organize a coherent execution of tasks to perform jobs and the models are not yet at the capability required to do this in a coherent error correcting way over long periods of time so they're not able to fully string together tasks to perform these longer running jobs but they're getting there and this is improving uh over time but uh probably what's going to happen here is we're going to start to see what's called agents which perform tasks over time and you you supervise them and you watch their work and they come up to once in a while report progress and so on so we're going to see more long running agents uh tasks that don't just take you know a few seconds of response but many tens of seconds or even minutes or hours over time uh but these uh models are not infallible as we talked about above so all of this will require supervision so for example in factories people talk about the human to robot ratio uh for automation I think we're going to see something similar in the digital space where we are going to be talking about human to agent ratios where humans becomes a lot more supervisors of agent tasks um in the digital domain uh next um I think everything is going to become a lot more pervasive and invisible so it's kind of like integrated into the tools and everywhere um and in addition kind of like computer using so right now these models aren't able to take actions on your behalf but I think this is a separate bullet point um if you saw chpt launch the operator then uh that's one early example of that where you can actually hand off control to the model to perform you know keyboard and mouse actions on your behalf so that's also something that that I think is very interesting the last point I have here is just a general comment that there's still a lot of research to potentially do in this domain main one example of that uh is something along the lines of test time training so remember that everything we've done above and that we talked about has two major stages there's first the training stage where we tune the parameters of the model to perform the tasks well once we get the parameters we fix them and then we deploy the model for inference from there the model is fixed it doesn't change anymore it doesn't learn from all the stuff that it's doing a test time it's a fixed um number of parameters and the only thing that is changing is now the token inside the context windows and so the only type of learning or test time learning that the model has access to is the in context learning of its uh kind of like uh dynamically adjustable context window depending on like what it's doing at test time so but I think this is still different from humans who actually are able to like actually learn uh depending on what they're doing especially when you sleep for example like your brain is updating your parameters or something like that right so there's no kind of equivalent of that currently in these models and tools so there's a lot of like um more wonky ideas I think that are to be explored still and uh in particular I think this will be necessary because the context window is a finite and precious resource and especially once we start to tackle very long running multimodal tasks and we're putting in videos and these token windows will basically start to grow extremely large like not thousands or even hundreds of thousands but significantly beyond that and the only trick uh the only kind of trick we have Avail to us right now is to make the context Windows longer but I think that that approach by itself will will not will not scale to actual long running tasks that are multimodal over time and so I think new ideas are needed in some of those disciplines um in some of those kind of cases in the main where these tasks are going to require very long contexts so those are some examples of some of the things you can um expect coming down the pipe let's now turn to where you can actually uh kind of keep track of this progress and um you know be up to date with the latest and grest of what's happening in the field so I would say the three resources that I have consistently used to stay up to date are number one El Marina uh so let me show you El Marina this is basically an llm leader board and it ranks all the top models and the ranking is based on human comparisons so humans prompt these models and they get to judge which one gives a better answer they don't know which model is which they're just looking at which model is the better answer and you can calculate a ranking and then you get some results and so what you can hear is what you can see here is the different organizations like Google Gemini for example that produce these models when you click on any one of these it takes you to the place where that model is hosted and then here we see Google is currently on top with open AI right behind here we see deep seek in position number three now the reason this is a big deal is the last column here you see license deep seek is an MIT license model it's open weights anyone can use these weights uh anyone can download them anyone can host their own version of Deep seek and they can use it in what whatever way they like and so it's not a proprietary model that you don't have access to it's it's basically an open weight release and so this is kind of unprecedented that a model this strong was released with open weights so pretty cool from the team next up we have a few more models from Google and open Ai and then when you continue to scroll down you start to see some other Usual Suspects so xai here anthropic with son it uh here at number 14 and um then meta with llama over here so llama similar to deep seek is an open weights model and so uh but it's down here as opposed to up here now I will say that this leaderboard was really good for a long time I do think that in the last few months it's become a little bit gamed um and I don't trust it as much as I used to I think um just empirically I feel like a lot of people for example are using a Sonet from anthropic and that it's a really good model so but that's all the way down here um in number 14 and conversely I think not as many people are using Gemini but it's racking really really high uh so I think use this as a first pass uh but uh sort of try out a few of the models for your tasks and see which one performs better the second thing that I would point to is the uh AI news uh newsletter so AI news is not very creatively named but it is a very good newsletter produced by swix and friends so thank you for maintaining it and it's been very helpful to me because it is extremely comprehensive so if you go to archives uh you see that it's produced almost every other day and um it is very comprehensive and some of it is written by humans and curated by humans but a lot of it is constructed automatically with llms so you'll see that these are very comprehensive and you're probably not missing anything major if you go through it of course you're probably not going to go through it because it's so long but I do think that these summaries all the way up top are quite good and I think have some human oversight uh so this has been very helpful to me and the last thing I would point to is just X and Twitter uh a lot of um AI happens on X and so I would just follow people who you like and trust and get all your latest and greatest uh on X as well so those are the major places that have worked for me over time and finally a few words on where you can find the models and where can you use them so the first one I would say is for any of the biggest proprietary models you just have to go to the website of that LM provider so for example for open a that's uh chat I believe actually works now uh so that's for open AI now for or you know for um for Gemini I think it's gem. google.com or AI Studio I think they have two for some reason that I don't fly understand no one does um for the open weights models like deep SE CL Etc you have to go to some kind of an inference provider of LMS so my favorite one is together together. a and I showed you that when you go to the playground of together. a then you can sort of pick lots of different models and all of these are open models of different types and you can talk to them here as an example um now if you'd like to use a base model like um you know a base model then this is where I think it's not as common to find base models even on these inference providers they are all targeting assistants and chat and so I think even here I can't I couldn't see base models here so for base models I usually go to hyperbolic because they serve my llama 3.1 base and I love that model and you can just talk to it here so as far as I know this is this is a good place for a base model and I wish more people hosted base models because they are useful and interesting to work with in some cases finally you can also take some of the models that are smaller and you can run them locally and so for example deep seek the biggest model you're not going to be able to run locally on your MacBook but there are smaller versions of the deep seek model that are what's called distilled and then also you can run these models at smaller Precision so not at the native Precision of for example fp8 on deep seek or you know bf16 llama but much much lower than that um and don't worry if you don't fully understand those details but you can run smaller versions that have been distilled and then at even lower precision and then you can fit them on your uh computer and so you can actually run pretty okay models on your laptop and my favorite I think place I go to usually is LM studio uh which is basically an app you can get and I think it kind of actually looks really ugly and it's I don't like that it shows you all these models that are basically not that useful like everyone just wants to run deep seek so I don't know why they give you these 500 different types of models they're really complicated to search for and you have to choose different distillations and different uh precisions and it's all really confusing but once you actually understand how it works and that's a whole separate video then you can actually load up a model like here I loaded up a llama 3 uh2 instruct 1 billion and um you can just talk to it so I ask for Pelican jokes and I can ask for another one and it gives me another one Etc all of this that happens here is locally on your computer so we're not actually going to anywhere anyone else this is running on the GPU on the MacBook Pro so that's very nice and you can then eject the model when you're done and that frees up the ram so LM studio is probably like my favorite one even though I don't I think it's got a lot of uiux issues and it's really geared towards uh professionals almost uh but if you watch some videos on YouTube I think you can figure out how to how to use this interface uh so those are a few words on where to find them so let me now loop back around to where we started the question was when we go to chashi pta.com and we enter some kind of a query and we hit go what exactly is happening here what are we seeing what are we talking to how does this work and I hope that this video gave you some appreciation for some of the under the hood details of how these models are trained and what this is that is coming back so in particular we now know that your query is taken and is first chopped up into tokens so we go to to tick tokenizer and here where is the place in the in the um sort of format that is for the user query we basically put in our query right there so our query goes into what we discussed here is the conversation protocol format which is this way that we maintain conversation objects so this gets inserted there and then this whole thing ends up being just a token sequence a onedimensional token sequence under the hood so Chachi PT saw this token sequence and then when we hit go it basically continues appending tokens into this list it continues the sequence it acts like a token autocomplete so in particular it gave us this response so we can basically just put it here and we see the tokens that it continued uh these are the tokens that it continued with roughly now the question becomes okay why are these the tokens that the model responded with what are these tokens where are they coming from uh what are we talking to and how do we program this system and so that's where we shifted gears and we talked about the under thehood pieces of it so the first stage of this process and there are three stages is the pre-training stage which fundamentally has to do with just knowledge acquisition from the internet into the parameters of this neural network and so the neural net internalizes a lot of Knowledge from the internet but where the personality really comes in is in the process of supervised fine-tuning here and so what what happens here is that basically the a company like openai will curate a large data set of conversations like say 1 million conversation across very diverse topics and there will be conversations between a human and an assistant and even though there's a lot of synthetic data generation used throughout this entire process and a lot of llm help and so on fundamentally this is a human data curation task with lots of humans involved and in particular these humans are data labelers hired by open AI who are given labeling instructions that they learn and they task is to create ideal assistant responses for any arbitrary prompts so they are teaching the neural network by example how to respond to prompts so what is the way to think about what came back here like what is this well I think the right way to think about it is that this is the neural network simulation of a data labeler at openai so it's as if I gave this query to a data Li open and this data labeler first reads all of the labeling instructions from open Ai and then spends 2 hours writing up the ideal assistant response to this query and uh giving it to me now we're not actually doing that right because we didn't wait two hours so what we're getting here is a neural network simulation of that process and we have to keep in mind that these neural networks don't function like human brains do they are different what's easy or hard for them is different from what's easy or hard for humans and so we really are just getting a simulation so here I shown you this is a token stream and this is fundamentally the neural network with a bunch of activations and neurons in between this is a fixed mathematical expression that mixes inputs from tokens with parameters of the model and they get mixed up and get you the next token in a sequence but this is a finite amount of compute that happens for every single token and so this is some kind of a lossy simulation of a human that is kind of like restricted in this way and so whatever the humans write the language model is kind of imitating on this token level with only this this specific computation for every single token and sequence we also saw that as a result of this and the cognitive differences the models will suffer in a variety of ways and uh you have to be very careful with their use so for example we saw that they will suffer from hallucinations and they also we have the sense of a Swiss model of the LM capabilities where basically there's like holes in the cheese sometimes the models will just arbitrarily like do something dumb uh so even though they're doing lots of magical stuff sometimes they just can't so maybe you're not giving them enough tokens to think and maybe they're going to just make stuff up because they're mental arithmetic breaks uh maybe they are suddenly unable to count number of letters um or maybe they're unable to tell you that 911 9.11 is smaller than 9.9 and it looks kind of dumb and so so it's a Swiss cheese capability and we have to be careful with that and we saw the reasons for that but fundamentally this is how we think of what came back it's again a simulation of this neural network of a human data labeler following the labeling instructions at open a so that's what we're getting back now I do think that the uh things change a little bit when you actually go and reach for one of the thinking models like o03 mini and the reason for that is that GPT 40 basically doesn't do reinforcement learning it does do rhf but I've told you that rhf is not RL there's no there's no uh time for magic in there it's just a little bit of a fine-tuning is the way to look at it but these thinking models they do use RL so they go through this third state stage of perfecting their thinking process and discovering new thinking strategies and uh solutions to problem solving that look a little bit like your internal monologue in your head and they practice that on a large collection of practice problems that companies like openi create and curate and um then make available to the LMS so when I come here and I talked to a thinking model and I put in this question what we're seeing here is not anymore just the straightforward simulation of a human data labeler like this is actually kind of new unique and interesting um and of course open is not showing us the under thehood thinking and the chains of thought that are underlying the reasoning here but we know that such a thing exists and this is a summary of it and what we're getting here is actually not just an imitation of a human data labeler it's actually something that is kind of new and interesting and exciting in the sense that it is a function of thinking that was emergent in a simulation it's not just imitating human data labeler it comes from this reinforcement learning process and so here we're of course not giving it a chance to shine because this is not a mathematical or a reasoning problem this is just some kind of a sort of creative writing problem roughly speaking and I think it's um it's a a question an open question as to whether the thinking strategies that are developed inside verifiable domains transfer and are generalizable to other domains that are unverifiable such as create writing the extent to which that transfer happens is unknown in the field I would say so we're not sure if we are able to do RL on everything that is very verifiable and see the benefits of that on things that are unverifiable like this prompt so that's an open question the other thing that's interesting is that this reinforcement learning here is still like way too new primordial and nent so we're just seeing like the beginnings of the hints of greatness uh in the reasoning problems we're seeing something that is in principle capable of something like the equivalent of move 37 but not in the game of Go but in open domain thinking and problem solving in principle this Paradigm is capable of doing something really cool new and exciting something even that no human has thought of before in principle these models are capable of analogies no human has had so I think it's incredibly exciting that these models exist but again it's very early and these are primordial models for now um and they will mostly shine in domains that are verifiable like math en code Etc so very interesting to play with and think about and use and then that's roughly it um um I would say those are the broad Strokes of what's available right now I will say that overall it is an extremely exciting time to be in the field personally I use these models all the time daily uh tens or hundreds of times because they dramatically accelerate my work I think a lot of people see the same thing I think we're going to see a huge amount of wealth creation as a result of these models be aware of some of their shortcomings even with RL models they're going to suffer from some of these use it as a tool in a toolbox don't trust it fully because they will randomly do dumb things they will randomly hallucinate they will randomly skip over some mental arithmetic and not get it right um they randomly can't count or something like that so use them as tools in the toolbox check their work and own the product of your work but use them for inspiration for first draft uh ask them questions but always check and verify and you will be very successful in your work if you do so uh so I hope this video was useful and interesting to you I hope you had it fun and uh it's already like very long so I apologize for that but I hope it was useful and yeah I will see you later

## Timed Segments

[0:00] hi everyone so I&#39;ve wanted to make this
[0:02] video for a while it is a comprehensive
[0:05] but General audience introduction to
[0:08] large language models like Chachi PT and
[0:11] what I&#39;m hoping to achieve in this video
[0:12] is to give you kind of mental models for
[0:14] thinking through what it is that this
[0:17] tool is it is obviously magical and
[0:19] amazing in some respects it&#39;s uh really
[0:22] good at some things not very good at
[0:23] other things and there&#39;s also a lot of
[0:25] sharp edges to be aware of so what is
[0:28] behind this text box you can put
[0:29] anything in there and press enter but uh
[0:32] what should we be putting there and what
[0:34] are these words generated back how does
[0:36] this work and what what are you talking
[0:38] to exactly so I&#39;m hoping to get at all
[0:40] those topics in this video we&#39;re going
[0:42] to go through the entire pipeline of how
[0:44] this stuff is built but I&#39;m going to
[0:45] keep everything uh sort of accessible to
[0:48] a general audience so let&#39;s take a look
[0:50] at first how you build something like
[0:51] chpt and along the way I&#39;m going to talk
[0:53] about um you know some of the sort of
[0:56] cognitive psychological implications of
[0:59] the tools okay so let&#39;s build Chachi PT
[1:02] so there&#39;s going to be multiple stages
[1:04] arranged sequentially the first stage is
[1:07] called the pre-training stage and the
[1:09] first step of the pre-training stage is
[1:11] to download and process the internet now
[1:13] to get a sense of what this roughly
[1:14] looks like I recommend looking at this
[1:16] URL here so um this company called
[1:20] hugging face uh collected and created
[1:23] and curated this data set called Fine
[1:26] web and they go into a lot of detail on
[1:28] this block post on how how they
[1:30] constructed the fine web data set and
[1:32] all of the major llm providers like open
[1:34] AI anthropic and Google and so on will
[1:36] have some equivalent internally of
[1:38] something like the fine web data set so
[1:41] roughly what are we trying to achieve
[1:42] here we&#39;re trying to get ton of text
[1:44] from the internet from publicly
[1:45] available sources so we&#39;re trying to
[1:47] have a huge quantity of very high
[1:50] quality documents and we also want very
[1:53] large diversity of documents because we
[1:55] want to have a lot of knowledge inside
[1:56] these models so we want large diversity
[1:59] of high quality documents and we want
[2:01] many many of them and achieving this is
[2:04] uh quite complicated and as you can see
[2:05] here takes multiple stages to do well so
[2:08] let&#39;s take a look at what some of these
[2:09] stages look like in a bit for now I&#39;d
[2:11] like to just like to note that for
[2:13] example the fine web data set which is
[2:14] fairly representative what you would see
[2:16] in a production grade application
[2:18] actually ends up being only about 44
[2:20] terabyt of dis space um you can get a
[2:23] USB stick for like a terabyte very
[2:25] easily or I think this could fit on a
[2:27] single hard drive almost today so this
[2:29] is not a huge amount of data at the end
[2:31] of the day even though the internet is
[2:33] very very large we&#39;re working with text
[2:35] and we&#39;re also filtering it aggressively
[2:37] so we end up with about 44 terabytes in
[2:39] this example so let&#39;s take a look at uh
[2:42] kind of what this data looks like and
[2:44] what some of these stages uh also are so
[2:47] the starting point for a lot of these
[2:48] efforts and something that contributes
[2:50] most of the data by the end of it is
[2:52] Data from common crawl so common craw is
[2:56] an organization that has been basically
[2:57] scouring the internet since 2007 so as
[3:00] of 2024 for example common CW has
[3:03] indexed 2.7 billion web
[3:05] pages uh and uh they have all these
[3:08] crawlers going around the internet and
[3:09] what you end up doing basically is you
[3:11] start with a few seed web pages and then
[3:13] you follow all the links and you just
[3:15] keep following links and you keep
[3:16] indexing all the information and you end
[3:17] up with a ton of data of the internet
[3:19] over time so this is usually the
[3:21] starting point for a lot of the uh for a
[3:24] lot of these efforts now this common C
[3:26] data is quite raw and is filtered in
[3:27] many many different ways
[3:30] so here they Pro they document this is
[3:33] the same diagram they document a little
[3:35] bit the kind of processing that happens
[3:36] in these stages so the first thing here
[3:39] is something called URL
[3:41] filtering so what that is referring to
[3:43] is that there&#39;s these block
[3:47] lists of uh basically URLs that are or
[3:50] domains that uh you don&#39;t want to be
[3:52] getting data from so usually this
[3:54] includes things like U malware websites
[3:56] spam websites marketing websites uh
[3:58] racist websites adult sites and things
[4:01] like that so there&#39;s a ton of different
[4:02] types of websites that are just
[4:04] eliminated at this stage because we
[4:06] don&#39;t want them in our data set um the
[4:08] second part is text extraction you have
[4:10] to remember that all these web pages
[4:12] this is the raw HTML of these web pages
[4:14] that are being saved by these crawlers
[4:16] so when I go to inspect
[4:18] here this is what the raw HTML actually
[4:21] looks like you&#39;ll notice that it&#39;s got
[4:23] all this markup uh like lists and stuff
[4:26] like that and there&#39;s CSS and all this
[4:28] kind of stuff so this is um computer
[4:31] code almost for these web pages but what
[4:33] we really want is we just want this text
[4:35] right we just want the text of this web
[4:37] page and we don&#39;t want the navigation
[4:38] and things like that so there&#39;s a lot of
[4:40] filtering and processing uh and heris
[4:42] that go into uh adequately filtering for
[4:45] just their uh good content of these web
[4:48] pages the next stage here is language
[4:50] filtering so for example fine web
[4:53] filters uh using a language classifier
[4:56] they try to guess what language every
[4:58] single web page is in and then they only
[5:00] keep web pages that have more than 65%
[5:02] of English as an
[5:04] example and so you can get a sense that
[5:06] this is like a design decision that
[5:07] different companies can uh can uh take
[5:10] for themselves what fraction of all
[5:12] different types of languages are we
[5:14] going to include in our data set because
[5:15] for example if we filter out all of the
[5:17] Spanish as an example then you might
[5:19] imagine that our model later will not be
[5:21] very good at Spanish because it&#39;s just
[5:22] never seen that much data of that
[5:24] language and so different companies can
[5:26] focus on multilingual performance to uh
[5:28] to a different degree as an example so
[5:30] fine web is quite focused on English and
[5:33] so their language model if they end up
[5:35] training one later will be very good at
[5:36] English but not may be very good at
[5:38] other
[5:39] languages after language filtering
[5:41] there&#39;s a few other filtering steps and
[5:43] D duplication and things like that um
[5:46] finishing with for example the pii
[5:49] removal this is personally identifiable
[5:52] information so as an example addresses
[5:54] Social Security numbers and things like
[5:56] that you would try to detect them and
[5:57] you would try to filter out those kinds
[5:58] of web pages from the the data set as
[6:00] well so there&#39;s a lot of stages here and
[6:02] I won&#39;t go into full detail but it is a
[6:05] fairly extensive part of the
[6:06] pre-processing and you end up with for
[6:08] example the fine web data set so when
[6:10] you click in on it uh you can see some
[6:12] examples here of what this actually ends
[6:14] up looking like and anyone can download
[6:16] this on the huging phase web page and so
[6:19] here are some examples of the final text
[6:21] that ends up in the training set so this
[6:24] is some article about tornadoes in
[6:27] 2012 um so there&#39;s some t tadoes in 2020
[6:30] in 2012 and what
[6:33] happened uh this next one is something
[6:36] about did you know you have two little
[6:38] yellow 9vt battery sized adrenal glands
[6:41] in your body okay so this is some kind
[6:43] of a odd medical
[6:46] article so just think of these as
[6:49] basically uh web pages on the internet
[6:51] filtered just for the text in various
[6:53] ways and now we have a ton of text 40
[6:56] terabytes off it and that now is the
[6:58] starting point for the next step of this
[7:00] stage now I wanted to give you an
[7:02] intuitive sense of where we are right
[7:04] now so I took the first 200 web pages
[7:06] here and remember we have tons of them
[7:09] and I just take all that text and I just
[7:11] put it all together concatenate it and
[7:13] so this is what we end up with we just
[7:15] get this just just raw text raw internet
[7:18] text and there&#39;s a ton of it even in
[7:20] these 200 web pages so I can continue
[7:22] zooming out here and we just have this
[7:24] like massive tapestry of Text data and
[7:28] this text data has all these p patterns
[7:30] and what we want to do now is we want to
[7:31] start training neural networks on this
[7:33] data so the neural networks can
[7:35] internalize and model how this text
[7:39] flows right so we just have this giant
[7:42] texture of text and now we want to get
[7:45] neural Nets that mimic it okay now
[7:48] before we plug text into neural networks
[7:51] we have to decide how we&#39;re going to
[7:52] represent this text uh and how we&#39;re
[7:54] going to feed it in now the way our
[7:57] technology works for these neuron Lots
[7:58] is that they expect
[7:59] a one-dimensional sequence of symbols
[8:02] and they want a finite set of symbols
[8:05] that are possible and so we have to
[8:08] decide what are the symbols and then we
[8:10] have to represent our data as
[8:11] one-dimensional sequence of those
[8:14] symbols so right now what we have is a
[8:16] onedimensional sequence of text it
[8:18] starts here and it goes here and then it
[8:20] comes here Etc so this is a
[8:22] onedimensional sequence even though on
[8:23] my monitor of course it&#39;s laid out in a
[8:26] two-dimensional way but it goes from
[8:27] left to right and top to bottom right so
[8:29] it&#39;s a one-dimensional sequence of text
[8:32] now this being computers of course
[8:33] there&#39;s an underlying representation
[8:35] here so if I do what&#39;s called utf8 uh
[8:38] encode this text then I can get the raw
[8:41] bits that correspond to this text in the
[8:44] computer and that&#39;s what uh that looks
[8:46] like this so it turns out that for
[8:50] example this very first bar here is the
[8:53] first uh eight bits as an
[8:56] example so what is this thing right this
[8:59] is um representation that we are looking
[9:01] for uh in in a certain sense we have
[9:04] exactly two possible symbols zero and
[9:06] one and we have a very long sequence of
[9:10] it right now as it turns out um this
[9:14] sequence length is actually going to be
[9:16] very finite and precious resource uh in
[9:19] our neural network and we actually don&#39;t
[9:21] want extremely long sequences of just
[9:23] two symbols instead what we want is we
[9:25] want to trade off uh this um symbol
[9:29] size uh of this vocabulary as we call it
[9:32] and the resulting sequence length so we
[9:35] don&#39;t want just two symbols and
[9:36] extremely long sequences we&#39;re going to
[9:38] want more symbols and shorter sequences
[9:42] okay so one naive way of compressing or
[9:44] decreasing the length of our sequence
[9:46] here is to basically uh consider some
[9:49] group of consecutive bits for example
[9:51] eight bits and group them into a single
[9:54] what&#39;s called bite so because uh these
[9:57] bits are either on or off if we take a
[10:00] group of eight of them there turns out
[10:01] to be only 256 possible combinations of
[10:04] how these bits could be on or off and so
[10:06] therefore we can re repesent this
[10:07] sequence into a sequence of bytes
[10:10] instead so this sequence of bytes will
[10:13] be eight times shorter but now we have
[10:16] 256 possible symbols so every number
[10:19] here goes from 0 to
[10:20] 255 now I really encourage you to think
[10:22] of these not as numbers but as unique
[10:25] IDs or like unique symbols so maybe it&#39;s
[10:28] a bit more maybe it&#39;s better to actually
[10:30] think of these to replace every one of
[10:32] these with a unique Emoji you&#39;d get
[10:34] something like this so um we basically
[10:37] have a sequence of emojis and there&#39;s
[10:38] 256 possible emojis you can think of it
[10:41] that way now it turns out that in
[10:44] production for state-of-the-art language
[10:46] models uh you actually want to go even
[10:48] Beyond this you want to continue to
[10:50] shrink the length of the sequence uh
[10:52] because again it is a precious resource
[10:54] in return for more symbols in your
[10:57] vocabulary and the way this is done is
[11:00] done by running what&#39;s called The Bite
[11:02] pair encoding algorithm and the way this
[11:04] works is we&#39;re basically looking for
[11:06] consecutive bytes or symbols that are
[11:10] very common so for example turns out
[11:13] that the sequence 116 followed by 32 is
[11:17] quite common and occurs very frequently
[11:19] so what we&#39;re going to do is we&#39;re going
[11:20] to group uh this um pair into a new
[11:24] symbol so we&#39;re going to Mint a symbol
[11:26] with an ID 256 and we&#39;re going to
[11:28] rewrite every single uh pair 11632 with
[11:32] this new symbol and then can we can
[11:34] iterate this algorithm as many times as
[11:36] we wish and each time when we mint a new
[11:38] symbol we&#39;re decreasing the length and
[11:40] we&#39;re increasing the symbol size and in
[11:43] practice it turns out that a pretty good
[11:45] setting of um the basically the
[11:48] vocabulary size turns out to be about
[11:49] 100,000 possible symbols so in
[11:52] particular GPT 4 uses
[11:55] 100,
[11:56] 277 symbols
[11:59] um and this process of converting from
[12:04] raw text into these symbols or as we
[12:07] call them tokens is the process called
[12:10] tokenization so let&#39;s now take a look at
[12:12] how gp4 performs tokenization conting
[12:15] from text to tokens and from tokens back
[12:18] to text and what this actually looks
[12:19] like so one website I like to use to
[12:21] explore these token representations is
[12:24] called tick tokenizer and so come here
[12:27] to the drop down and select CL 100 a
[12:29] base which is the gp4 base model
[12:32] tokenizer and here on the left you can
[12:34] put in text and it shows you the
[12:36] tokenization of that text so for example
[12:40] heo space
[12:43] world so hello world turns out to be
[12:46] exactly two Tokens The Token hello which
[12:49] is the token with ID
[12:51] 15339 and the token space
[12:54] world that is the token 1
[12:57] 1917 so um hello space world now if I
[13:02] was to join these two for example I&#39;m
[13:04] going to get again two tokens but it&#39;s
[13:06] the token H followed by the token L
[13:09] world without the
[13:11] H um if I put in two Spa two spaces here
[13:15] between hello and world it&#39;s again a
[13:16] different uh tokenization there&#39;s a new
[13:19] token 220
[13:22] here okay so you can play with this and
[13:24] see what happens here also keep in mind
[13:26] this is not uh this is case sensitive so
[13:28] if this is a capital H it is something
[13:30] else or if it&#39;s uh hello world then
[13:35] actually this ends up being three tokens
[13:36] instead of just two
[13:41] tokens yeah so you can play with this
[13:43] and get an sort of like an intuitive
[13:44] sense of uh what these tokens work like
[13:47] we&#39;re actually going to loop around to
[13:48] tokenization a bit later in the video
[13:50] for now I just wanted to show you the
[13:51] website and I wanted to uh show you that
[13:53] this text basically at the end of the
[13:56] day so for example if I take one line
[13:57] here this is what GT4 will see it as so
[14:01] this text will be a sequence of length
[14:04] 62 this is the sequence here and this is
[14:08] how the chunks of text correspond to
[14:11] these symbols and again there&#39;s 100,
[14:16] 27777 possible symbols and we now have
[14:19] one-dimensional sequences of those
[14:21] symbols so um yeah we&#39;re going to come
[14:24] back to tokenization but that&#39;s uh for
[14:26] now where we are okay so what I&#39;ve done
[14:28] now is I&#39;ve taken this uh sequence of
[14:30] text that we have here in the data set
[14:32] and I have re-represented it using our
[14:34] tokenizer into a sequence of tokens and
[14:37] this is what that looks like now so for
[14:40] example when we go back to the Fine web
[14:41] data set they mentioned that not only is
[14:43] this 44 terab of dis space but this is
[14:45] about a 15 trillion token sequence of um
[14:50] in this data set and so here these are
[14:53] just some of the first uh one or two or
[14:56] three or a few thousand here I think uh
[14:58] tokens of this data set but there&#39;s 15
[15:01] trillion here uh to keep in mind and
[15:03] again keep in mind one more time that
[15:05] all of these represent little text
[15:07] chunks they&#39;re all just like atoms of
[15:09] these sequences and the numbers here
[15:11] don&#39;t make any sense they&#39;re just uh
[15:13] they&#39;re just unique IDs okay so now we
[15:17] get to the fun part which is the uh
[15:19] neural network training and this is
[15:21] where a lot of the heavy lifting happens
[15:23] computationally when you&#39;re training
[15:24] these neural networks so what we do here
[15:28] in this this step is we want to model
[15:30] the statistical relationships of how
[15:32] these tokens follow each other in the
[15:33] sequence so what we do is we come into
[15:36] the data and we take Windows of tokens
[15:40] so we take a window of tokens uh from
[15:43] this data fairly
[15:44] randomly and um the windows length can
[15:49] range anywhere anywhere between uh zero
[15:51] tokens actually all the way up to some
[15:54] maximum size that we decide on uh so for
[15:57] example in practice you could see a
[15:58] token with Windows of say 8,000 tokens
[16:01] now in principle we can use arbitrary
[16:03] window lengths of tokens uh but uh
[16:07] processing very long uh basically U
[16:10] window sequences would just be very
[16:12] computationally expensive so we just
[16:15] kind of decide that say 8,000 is a good
[16:16] number or 4,000 or 16,000 and we crop it
[16:19] there now in this example I&#39;m going to
[16:22] be uh taking the first four tokens just
[16:25] so everything fits nicely so these
[16:28] tokens
[16:30] we&#39;re going to take a window of four
[16:32] tokens this bar view in and space single
[16:37] which are these token
[16:39] IDs and now what we&#39;re trying to do here
[16:41] is we&#39;re trying to basically predict the
[16:42] token that comes next in the sequence so
[16:45] 3962 comes next right so what we do now
[16:49] here is that we call this the context
[16:51] these four tokens are context and they
[16:54] feed into a neural
[16:56] network and this is the input to the
[16:58] neural network
[16:59] now I&#39;m going to go into the detail of
[17:01] what&#39;s inside this neural network in a
[17:03] little bit for now it&#39;s important to
[17:04] understand is the input and the output
[17:06] of the neural net so the input are
[17:08] sequences of tokens of variable length
[17:12] anywhere between zero and some maximum
[17:14] size like 8,000 the output now is a
[17:17] prediction for what comes next so
[17:21] because our vocabulary has
[17:23] 100277 possible tokens the neural
[17:26] network is going to Output exactly that
[17:28] many numbers
[17:29] and all of those numbers correspond to
[17:30] the probability of that token as coming
[17:33] next in the sequence so it&#39;s making
[17:35] guesses about what comes
[17:37] next um in the beginning this neural
[17:39] network is randomly initialized so um
[17:42] and we&#39;re going to see in a little bit
[17:44] what that means but it&#39;s a it&#39;s a it&#39;s a
[17:46] random transformation so these
[17:48] probabilities in the very beginning of
[17:49] the training are also going to be kind
[17:51] of random uh so here I have three
[17:53] examples but keep in mind that there&#39;s
[17:55] 100,000 numbers here um so the
[17:58] probability of this token space
[17:59] Direction neural network is saying that
[18:01] this is 4% likely right now 11799 is 2%
[18:05] and then here the probility of 3962
[18:08] which is post is 3% now of course we&#39;ve
[18:11] sampled this window from our data set so
[18:13] we know what comes next we know and
[18:16] that&#39;s the label we know that the
[18:18] correct answer is that 3962 actually
[18:19] comes next in the sequence so now what
[18:22] we have is this mathematical process for
[18:25] doing an update to the neural network we
[18:28] have the way of tuning it and uh we&#39;re
[18:30] going to go into a little bit of of
[18:32] detail in a bit but basically we know
[18:34] that this probability here of 3% we want
[18:38] this probability to be higher and we
[18:40] want the probabilities of all the other
[18:42] tokens to be
[18:44] lower and so we have a way of
[18:46] mathematically calculating how to adjust
[18:48] and update the neural network so that
[18:51] the correct answer has a slightly higher
[18:53] probability so if I do an update to the
[18:55] neural network now the next time I Fe
[18:59] this particular sequence of four tokens
[19:00] into neural network the neural network
[19:02] will be slightly adjusted now and it
[19:04] will say Okay post is maybe 4% and case
[19:07] now maybe is
[19:08] 1% and uh Direction could become 2% or
[19:12] something like that and so we have a way
[19:14] of nudging of slightly updating the
[19:16] neuronet to um basically give a higher
[19:19] probability to the correct token that
[19:21] comes next in the sequence and now you
[19:23] just have to remember that this process
[19:25] happens not just for uh this um token
[19:29] here where these four fed in and
[19:31] predicted this one this process happens
[19:33] at the same time for all of these tokens
[19:36] in the entire data set and so in
[19:38] practice we sample little windows little
[19:40] batches of Windows and then at every
[19:42] single one of these tokens we want to
[19:44] adjust our neural network so that the
[19:46] probability of that token becomes
[19:48] slightly higher and this all happens in
[19:50] parallel in large batches of these
[19:52] tokens and this is the process of
[19:54] training the neural network it&#39;s a
[19:55] sequence of updating it so that it&#39;s
[19:58] predictions match up the statistics of
[20:01] what actually happens in your training
[20:02] set and its probabilities become
[20:05] consistent with the uh statistical
[20:08] patterns of how these tokens follow each
[20:09] other in the data so let&#39;s now briefly
[20:12] get into the internals of these neural
[20:13] networks just to give you a sense of
[20:14] what&#39;s inside so neural network
[20:17] internals so as I mentioned we have
[20:19] these inputs uh that are sequences of
[20:22] tokens in this case this is four input
[20:24] tokens but this can be anywhere between
[20:26] zero up to let&#39;s say 8,000 tokens in
[20:30] principle this can be an infinite number
[20:31] of tokens we just uh it would just be
[20:33] too computationally expensive to process
[20:35] an infinite number of tokens so we just
[20:37] crop it at a certain length and that
[20:39] becomes the maximum context length of
[20:41] that uh
[20:42] model now these inputs X are mixed up in
[20:46] a giant mathematical expression together
[20:48] with the parameters or the weights of
[20:51] these neural networks so here I&#39;m
[20:53] showing six example parameters and their
[20:56] setting but in practice these uh um
[21:00] modern neural networks will have
[21:01] billions of these uh parameters and in
[21:04] the beginning these parameters are
[21:06] completely randomly set now with a
[21:09] random setting of parameters you might
[21:11] expect that this uh this neural network
[21:13] would make random predictions and it
[21:15] does in the beginning it&#39;s totally
[21:16] random predictions but it&#39;s through this
[21:19] process of iteratively updating the
[21:22] network uh as and we call that process
[21:24] training a neural network so uh that the
[21:28] setting of these parameters gets
[21:29] adjusted such that the outputs of our
[21:31] neural network becomes consistent with
[21:34] the patterns seen in our training
[21:36] set so think of these parameters as kind
[21:39] of like knobs on a DJ set and as you&#39;re
[21:41] twiddling these knobs you&#39;re getting
[21:42] different uh predictions for every
[21:45] possible uh token sequence input and
[21:49] training in neural network just means
[21:50] discovering a setting of parameters that
[21:52] seems to be consistent with the
[21:54] statistics of the training
[21:56] set now let me just give you an example
[21:58] what this giant mathematical expression
[21:59] looks like just to give you a sense and
[22:01] modern networks are massive expressions
[22:03] with trillions of terms probably but let
[22:06] me just show you a simple example here
[22:08] it would look something like this I mean
[22:10] these are the kinds of Expressions just
[22:11] to show you that it&#39;s not very scary we
[22:13] have inputs x uh like X1 x2 in this case
[22:17] two example inputs and they get mixed up
[22:19] with the weights of the network w0 W1 2
[22:22] 3 Etc and this mixing is simple things
[22:27] like multiplication addition addition
[22:29] exponentiation division Etc and it is
[22:32] the subject of neural network
[22:34] architecture research to design
[22:36] effective mathematical Expressions uh
[22:39] that have a lot of uh kind of convenient
[22:41] characteristics they are expressive
[22:42] they&#39;re optimizable they&#39;re paralyzable
[22:45] Etc and so but uh at the end of the day
[22:48] these are these are not complex
[22:49] expressions and basically they mix up
[22:52] the inputs with the parameters to make
[22:54] predictions and we&#39;re optimizing uh the
[22:57] parameters of this neural network so
[22:59] that the predictions come out consistent
[23:01] with the training set now I would like
[23:04] to show you an actual production grade
[23:06] example of what these neural networks
[23:07] look like so for that I encourage you to
[23:09] go to this website that has a very nice
[23:11] visualization of one of these
[23:13] networks so this is what you will find
[23:16] on this website and this neural network
[23:19] here that is used in production settings
[23:21] has this special kind of structure this
[23:24] network is called the Transformer and
[23:26] this particular one as an example has 8
[23:28] 5,000 roughly
[23:30] parameters now here on the top we take
[23:33] the inputs which are the token
[23:36] sequences and then information flows
[23:39] through the neural network until the
[23:41] output which here are the logit softmax
[23:45] but these are the predictions for what
[23:46] comes next what token comes
[23:48] next and then here there&#39;s a sequence of
[23:52] Transformations and all these
[23:54] intermediate values that get produced
[23:56] inside this mathematical expression s it
[23:58] is sort of predicting what comes next so
[24:01] as an example these tokens are embedded
[24:04] into kind of like this distributed
[24:06] representation as it&#39;s called so every
[24:08] possible token has kind of like a vector
[24:10] that represents it inside the neural
[24:11] network so first we embed the tokens and
[24:15] then those values uh kind of like flow
[24:18] through this diagram and these are all
[24:20] very simple mathematical Expressions
[24:22] individually so we have layer norms and
[24:24] Matrix multiplications and uh soft Maxes
[24:27] and so on so here kind of like the
[24:28] attention block of this Transformer and
[24:31] then information kind of flows through
[24:33] into the multi-layer perceptron block
[24:35] and so on and all these numbers here
[24:38] these are the intermediate values of the
[24:40] expression and uh you can almost think
[24:42] of these as kind of like the firing
[24:44] rates of these synthetic neurons but I
[24:47] would caution you to uh not um kind of
[24:50] think of it too much like neurons
[24:52] because these are extremely simple
[24:53] neurons compared to the neurons you
[24:55] would find in your brain your biological
[24:57] neurons are very complex dynamical
[24:59] processes that have memory and so on
[25:01] there&#39;s no memory in this expression
[25:02] it&#39;s a fixed mathematical expression
[25:04] from input to Output with no memory it&#39;s
[25:06] just a
[25:07] stateless so these are very simple
[25:09] neurons in comparison to biological
[25:10] neurons but you can still kind of
[25:12] loosely think of this as like a
[25:13] synthetic piece of uh brain tissue if
[25:15] you if you like uh to think about it
[25:17] that way so information flows through
[25:21] all these neurons fire until we get to
[25:24] the predictions now I&#39;m not actually
[25:26] going to dwell too much on the precise
[25:28] kind of like mathematical details of all
[25:30] these Transformations honestly I don&#39;t
[25:31] think it&#39;s that important to get into
[25:33] what&#39;s really important to understand is
[25:35] that this is a mathematical function it
[25:38] is uh parameterized by some fixed set of
[25:41] parameters like say 85,000 of them and
[25:44] it is a way of transforming inputs into
[25:46] outputs and as we twiddle the parameters
[25:48] we are getting uh different kinds of
[25:50] predictions and then we need to find a
[25:52] good setting of these parameters so that
[25:54] the predictions uh sort of match up with
[25:56] the patterns seen in training set
[25:59] so that&#39;s the Transformer okay so I&#39;ve
[26:02] shown you the internals of the neural
[26:03] network and we talked a bit about the
[26:05] process of training it I want to cover
[26:07] one more major stage of working with
[26:10] these networks and that is the stage
[26:11] called inference so in inference what
[26:14] we&#39;re doing is we&#39;re generating new data
[26:16] from the model and so uh we want to
[26:18] basically see what kind of patterns it
[26:21] has internalized in the parameters of
[26:23] its Network so to generate from the
[26:26] model is relatively straightforward
[26:28] we start with some tokens that are
[26:30] basically your prefix like what you want
[26:32] to start with so say we want to start
[26:34] with the token 91 well we feed it into
[26:37] the
[26:37] network and remember that the network
[26:39] gives us probabilities right it gives us
[26:43] this probability Vector here so what we
[26:45] can do now is we can basically flip a
[26:47] biased coin so um we can sample uh
[26:52] basically a token based on this
[26:54] probability distribution so the tokens
[26:57] that are given High probability by the
[26:59] model are more likely to be sampled when
[27:01] you flip this biased coin you can think
[27:03] of it that way so we sample from the
[27:05] distribution to get a single unique
[27:08] token so for example token 860 comes
[27:11] next uh so 860 in this case when we&#39;re
[27:14] generating from model could come next
[27:16] now 860 is a relatively likely token it
[27:18] might not be the only possible token in
[27:20] this case there could be many other
[27:21] tokens that could have been sampled but
[27:23] we could see that 86c is a relatively
[27:25] likely token as an example and indeed in
[27:27] our training examp example here 860 does
[27:29] follow 91 so let&#39;s now say that we um
[27:34] continue the process so after 91 there&#39;s
[27:36] a60 we append it and we again ask what
[27:39] is the third token let&#39;s sample and
[27:42] let&#39;s just say that it&#39;s 287 exactly as
[27:44] here let&#39;s do that again we come back in
[27:47] now we have a sequence of three and we
[27:49] ask what is the likely fourth token and
[27:52] we sample from that and get this one and
[27:55] now let&#39;s say we do it one more time we
[27:58] take those four we sample and we get
[28:00] this one and this
[28:02] 13659 uh this is not actually uh 3962 as
[28:06] we had before so this token is the token
[28:09] article uh instead so viewing a single
[28:12] article and so in this case we didn&#39;t
[28:15] exactly reproduce the sequence that we
[28:17] saw here in the training data so keep in
[28:20] mind that these systems are stochastic
[28:22] they have um we&#39;re sampling and we&#39;re
[28:25] flipping coins and sometimes we lock out
[28:28] and we reproduce some like small chunk
[28:30] of the text and training set but
[28:32] sometimes we&#39;re uh we&#39;re getting a token
[28:35] that was not verbatim part of any of the
[28:38] documents in the training data so we&#39;re
[28:40] going to get sort of like remixes of the
[28:43] data that we saw in the training because
[28:44] at every step of the way we can flip and
[28:47] get a slightly different token and then
[28:48] once that token makes it in if you
[28:50] sample the next one and so on you very
[28:52] quickly uh start to generate token
[28:55] streams that are very different from the
[28:57] token streams that UR
[28:58] in the training documents so
[29:00] statistically they will have similar
[29:02] properties but um they are not identical
[29:05] to your training data they&#39;re kind of
[29:06] like inspired by the training data and
[29:09] so in this case we got a slightly
[29:10] different sequence and why would we get
[29:12] article you might imagine that article
[29:14] is a relatively likely token in the
[29:16] context of bar viewing single Etc and
[29:21] you can imagine that the word article
[29:22] followed this context window somewhere
[29:24] in the training documents uh to some
[29:26] extent and we just happen to sample it
[29:28] here at that stage so basically
[29:31] inference is just uh predicting from
[29:33] these distributions one at a time we
[29:35] continue feeding back tokens and getting
[29:37] the next one and we uh we&#39;re always
[29:39] flipping these coins and depending on
[29:42] how lucky or unlucky we get um we might
[29:45] get very different kinds of patterns
[29:47] depending on how we sample from these
[29:49] probability distributions so that&#39;s
[29:51] inference so in most common scenarios uh
[29:55] basically downloading the internet and
[29:57] tokenizing it is is a pre-processing
[29:58] step you do that a single time and then
[30:01] uh once you have your token sequence we
[30:04] can start training networks and in
[30:06] Practical cases you would try to train
[30:08] many different networks of different
[30:10] kinds of uh settings and different kinds
[30:11] of arrangements and different kinds of
[30:13] sizes and so you&#39;&#39;ll be doing a lot of
[30:15] neural network training and um then once
[30:18] you have a neural network and you train
[30:19] it and you have some specific set of
[30:21] parameters that you&#39;re happy with um
[30:24] then you can take the model and you can
[30:25] do inference and you can actually uh
[30:28] generate data from the model and when
[30:30] you&#39;re on chat GPT and you&#39;re talking
[30:31] with a model uh that model is trained
[30:33] and has been trained by open aai many
[30:36] months ago probably and they have a
[30:38] specific set of Weights that work well
[30:41] and when you&#39;re talking to the model all
[30:42] of that is just inference there&#39;s no
[30:44] more training those parameters are held
[30:47] fixed and you&#39;re just talking to the
[30:49] model sort of uh you&#39;re giving it some
[30:51] of the tokens and it&#39;s kind of
[30:53] completing token sequences and that&#39;s
[30:54] what you&#39;re seeing uh generated when you
[30:57] actually use the model on CH GPT so that
[30:59] model then just does inference alone so
[31:02] let&#39;s now look at an example of training
[31:04] an inference that is kind of concrete
[31:05] and gives you a sense of what this
[31:07] actually looks like uh when these models
[31:08] are trained now the example that I would
[31:10] like to work with and that I&#39;m
[31:12] particularly fond of is that of opening
[31:14] eyes gpt2 so GPT uh stands for
[31:17] generatively pre-trained Transformer and
[31:19] this is the second iteration of the GPT
[31:21] series by open AI when you are talking
[31:23] to chat GPT today the model that is
[31:26] underlying all of the magic of that
[31:27] interaction is GPT 4 so the fourth
[31:30] iteration of that series now gpt2 was
[31:33] published in 2019 by openi in this paper
[31:36] that I have right here and the reason I
[31:39] like gpt2 is that it is the first time
[31:41] that a recognizably modern stack came
[31:44] together so um all of the pieces of gpd2
[31:48] are recognizable today by modern
[31:50] standards it&#39;s just everything has
[31:52] gotten bigger now I&#39;m not going to be
[31:54] able to go into the full details of this
[31:55] paper of course because it is a
[31:57] technical publication but some of the
[31:59] details that I would like to highlight
[32:00] are as follows gpt2 was a Transformer
[32:03] neural network just like you were just
[32:05] like the neural networks you would work
[32:06] with today it was it had 1.6 billion
[32:10] parameters right so these are the
[32:12] parameters that we looked at here it
[32:14] would have 1.6 billion of them today
[32:16] modern Transformers would have a lot
[32:18] closer to a trillion or several hundred
[32:20] billion
[32:21] probably the maximum context length here
[32:24] was 1,24 tokens so it is when we are
[32:28] sampling chunks of Windows of tokens
[32:32] from the data set we&#39;re never taking
[32:34] more than 1,24 tokens and so when you
[32:36] are trying to predict the next token in
[32:38] a sequence you will never have more than
[32:40] 1,24 tokens uh kind of in your context
[32:43] in order to make that prediction now
[32:45] this is also tiny by modern standards
[32:47] today the token uh the context lengths
[32:49] would be a lot closer to um couple
[32:53] hundred thousand or maybe even a million
[32:55] and so you have a lot more context a lot
[32:56] more tokens in history history and you
[32:58] can make a lot better prediction about
[33:00] the next token in the sequence in that
[33:01] way and finally gpt2 was trained on
[33:04] approximately 100 billion tokens and
[33:06] this is also fairly small by modern
[33:08] standards as I mentioned the fine web
[33:10] data set that we looked at here the fine
[33:12] web data set has 15 trillion tokens uh
[33:14] so 100 billion is is quite
[33:16] small
[33:18] now uh I actually tried to reproduce uh
[33:21] gpt2 for fun as part of this project
[33:23] called lm. C so you can see my rup of
[33:27] doing that in this post on GitHub under
[33:30] the lm. C repository so in particular
[33:33] the cost of training gpd2 in 2019 what
[33:36] was estimated to be approximately
[33:39] $40,000 but today you can do
[33:41] significantly better than that and in
[33:42] particular here it took about one day
[33:45] and about
[33:47] $600 uh but this wasn&#39;t even trying too
[33:49] hard I think you could really bring this
[33:51] down to about $100 today now why is it
[33:55] that the costs have come down so much
[33:57] well number one these data sets have
[33:59] gotten a lot better and the way we
[34:01] filter them extract them and prepare
[34:03] them has gotten a lot more refined and
[34:05] so the data set is of just a lot higher
[34:08] quality so that&#39;s one thing but really
[34:10] the biggest difference is that our
[34:11] computers have gotten much faster in
[34:13] terms of the hardware and we&#39;re going to
[34:15] look at that in a second and also the
[34:17] software for uh running these models and
[34:20] really squeezing out all all the speed
[34:22] from the hardware as it is possible uh
[34:25] that software has also gotten much
[34:27] better as as everyone has focused on
[34:28] these models and try to run them very
[34:30] very
[34:31] quickly now I&#39;m not going to be able to
[34:34] go into the full detail of this gpd2
[34:36] reproduction and this is a long
[34:37] technical post but I would like to still
[34:39] give you an intuitive sense for what it
[34:41] looks like to actually train one of
[34:43] these models as a researcher like what
[34:44] are you looking at and what does it look
[34:46] like what does it feel like so let me
[34:47] give you a sense of that a little bit
[34:50] okay so this is what it looks like let
[34:51] me slide this
[34:52] over so what I&#39;m doing here is I&#39;m
[34:55] training a gpt2 model right now
[34:58] and um what&#39;s happening here is that
[35:00] every single line here like this one is
[35:05] one update to the model so remember how
[35:08] here we are um basically making the
[35:12] prediction better for every one of these
[35:14] tokens and we are updating these weights
[35:15] or parameters of the neural net so here
[35:18] every single line is One update to the
[35:20] neural network where we change its
[35:22] parameters by a little bit so that it is
[35:24] better at predicting next token and
[35:26] sequence in particular every single line
[35:28] here is improving the prediction on 1
[35:32] million tokens in the training set so
[35:35] we&#39;ve basically taken 1 million tokens
[35:39] out of this data set and we&#39;ve tried to
[35:41] improve the prediction of that token as
[35:44] coming next in a sequence on all 1
[35:46] million of them
[35:49] simultaneously and at every single one
[35:51] of these steps we are making an update
[35:52] to the network for that now the number
[35:55] to watch closely is this number called
[35:57] loss and the loss is a single number
[36:00] that is telling you how well your neural
[36:02] network is performing right now and it
[36:05] is created so that low loss is good so
[36:08] you&#39;ll see that the loss is decreasing
[36:10] as we make more updates to the neural
[36:12] nut which corresponds to making better
[36:14] predictions on the next token in a
[36:16] sequence and so the loss is the number
[36:19] that you are watching as a neural
[36:20] network researcher and you are kind of
[36:22] waiting you&#39;re twiddling your thumbs uh
[36:24] you&#39;re drinking coffee and you&#39;re making
[36:26] sure that this looks good so that with
[36:28] every update your loss is improving and
[36:31] the network is getting better at
[36:32] prediction now here you see that we are
[36:36] processing 1 million tokens per update
[36:38] each update takes about 7 Seconds
[36:41] roughly and here we are going to process
[36:43] a total of 32,000 steps of
[36:47] optimization so 32,000 steps with 1
[36:50] million tokens each is about 33 billion
[36:52] tokens that we are going to process and
[36:54] we&#39;re currently only about 420 step 20
[36:57] out of 32,000 so we are still only a bit
[37:01] more than 1% done because I&#39;ve only been
[37:03] running this for 10 or 15 minutes or
[37:05] something like
[37:06] that now every 20 steps I have
[37:09] configured this optimization to do
[37:11] inference so what you&#39;re seeing here is
[37:13] the model is predicting the next token
[37:15] in a sequence and so you sort of start
[37:17] it randomly and then you continue
[37:19] plugging in the tokens so we&#39;re running
[37:21] this inference step and this is the
[37:23] model sort of predicting the next token
[37:25] in the sequence and every time you see
[37:26] something appear that&#39;s a new
[37:29] token um so let&#39;s just look at this and
[37:34] you can see that this is not yet very
[37:35] coherent and keep in mind that this is
[37:37] only 1% of the way through training and
[37:39] so the model is not yet very good at
[37:41] predicting the next token in the
[37:42] sequence so what comes out is actually
[37:44] kind of a little bit of gibberish right
[37:47] but it still has a little bit of like
[37:48] local coherence so since she is mine
[37:51] it&#39;s a part of the information should
[37:53] discuss my father great companions
[37:55] Gordon showed me sitting over at and Etc
[37:59] so I know it doesn&#39;t look very good but
[38:00] let&#39;s actually scroll up and see what it
[38:04] looked like when I started the
[38:06] optimization so all the way here at
[38:10] step
[38:12] one so after 20 steps of optimization
[38:15] you see that what we&#39;re getting here is
[38:17] looks completely random and of course
[38:18] that&#39;s because the model has only had 20
[38:20] updates to its parameters and so it&#39;s
[38:22] giving you random text because it&#39;s a
[38:23] random Network and so you can see that
[38:25] at least in comparison to this model is
[38:27] starting to do much better and indeed if
[38:29] we waited the entire 32,000 steps the
[38:32] model will have improved the point that
[38:34] it&#39;s actually uh generating fairly
[38:36] coherent English uh and the tokens
[38:38] stream correctly um and uh they they
[38:42] kind of make up English a a lot
[38:44] better
[38:46] um so this has to run for about a day or
[38:49] two more now and so uh at this stage we
[38:52] just make sure that the loss is
[38:53] decreasing everything is looking good um
[38:56] and we just have to wait
[38:58] and now um let me turn now to the um
[39:02] story of the computation that&#39;s required
[39:05] because of course I&#39;m not running this
[39:06] optimization on my laptop that would be
[39:08] way too expensive uh because we have to
[39:11] run this neural network and we have to
[39:12] improve it and we have we need all this
[39:14] data and so on so you can&#39;t run this too
[39:16] well on your computer uh because the
[39:18] network is just too large uh so all of
[39:21] this is running on the computer that is
[39:23] out there in the cloud and I want to
[39:25] basically address the compute side of
[39:27] the store of training these models and
[39:28] what that looks like so let&#39;s take a
[39:30] look okay so the computer that I&#39;m
[39:32] running this optimization on is this 8X
[39:35] h100 node so there are eight h100s in a
[39:39] single node or a single computer now I
[39:42] am renting this computer and it is
[39:44] somewhere in the cloud I&#39;m not sure
[39:45] where it is physically actually the
[39:47] place I like to rent from is called
[39:49] Lambda but there are many other
[39:50] companies who provide this service so
[39:52] when you scroll down you can see that uh
[39:55] they have some on demand pricing for
[39:57] um sort of computers that have these uh
[40:01] h100s which are gpus and I&#39;m going to
[40:03] show you what they look like in a second
[40:06] but on demand 8times Nvidia h100 uh
[40:10] GPU this machine comes for $3 per GPU
[40:13] per hour for example so you can rent
[40:16] these and then you get a machine in a
[40:18] cloud and you can uh go in and you can
[40:20] train these
[40:21] models and these uh gpus they look like
[40:25] this so this is one h100 GPU uh this is
[40:29] kind of what it looks like and you slot
[40:30] this into your computer and gpus are
[40:32] this uh perfect fit for training your
[40:34] networks because they are very
[40:36] computationally expensive but they
[40:38] display a lot of parallelism in the
[40:40] computation so you can have many
[40:42] independent workers kind of um working
[40:44] all at the same time in solving uh the
[40:48] matrix multiplication that&#39;s under the
[40:50] hood of training these neural
[40:52] networks so this is just one of these
[40:54] h100s but actually you would put them
[40:56] you would put multiple of them together
[40:58] so you could stack eight of them into a
[41:00] single node and then you can stack
[41:02] multiple nodes into an entire data
[41:04] center or an entire system
[41:07] so when we look at a data
[41:12] center can&#39;t spell when we look at a
[41:15] data center we start to see things that
[41:16] look like this right so we have one GPU
[41:18] goes to eight gpus goes to a single
[41:19] system goes to many systems and so these
[41:22] are the bigger data centers and there of
[41:23] course would be much much more expensive
[41:26] um and what&#39;s happening is that all the
[41:28] big tech companies really desire these
[41:31] gpus so they can train all these
[41:33] language models because they are so
[41:35] powerful and that has is fundamentally
[41:37] what has driven the stock price of
[41:38] Nvidia to be $3.4 trillion today as an
[41:41] example and why Nvidia has kind of
[41:44] exploded so this is the Gold Rush the
[41:47] Gold Rush is getting the gpus getting
[41:50] enough of them so they can all
[41:52] collaborate to perform this optimization
[41:55] and they&#39;re what are they all doing
[41:56] they&#39;re all collaborating to predict the
[41:59] next token on a data set like the fine
[42:01] web data
[42:02] set this is the computational workflow
[42:05] that that basically is extremely
[42:06] expensive the more gpus you have the
[42:09] more tokens you can try to predict and
[42:10] improve on and you&#39;re going to process
[42:12] this data set faster and you can iterate
[42:15] faster and get a bigger Network and
[42:16] train a bigger Network and so on so this
[42:19] is what all those machines are look like
[42:20] are uh are doing and this is why all of
[42:24] this is such a big deal and for example
[42:26] this is a
[42:28] article from like about a month ago or
[42:30] so this is why it&#39;s a big deal that for
[42:31] example Elon Musk is getting 100,000
[42:34] gpus uh in a single Data Center and all
[42:38] of these gpus are extremely expensive
[42:40] are going to take a ton of power and all
[42:42] of them are just trying to predict the
[42:43] next token in the sequence and improve
[42:45] the network uh by doing so and uh get
[42:49] probably a lot more coherent text than
[42:50] what we&#39;re seeing here a lot faster okay
[42:52] so unfortunately I do not have a couple
[42:55] 10 or hundred million of dollars to
[42:57] spend on training a really big model
[42:59] like this but luckily we can turn to
[43:01] some big tech companies who train these
[43:04] models routinely and release some of
[43:06] them once they are done training so
[43:08] they&#39;ve spent a huge amount of compute
[43:10] to train this network and they release
[43:12] the network at the end of the
[43:13] optimization so it&#39;s very useful because
[43:15] they&#39;ve done a lot of compute for that
[43:18] so there are many companies who train
[43:19] these models routinely but actually not
[43:21] many of them release uh these what&#39;s
[43:23] called base models so the model that
[43:25] comes out at the end here is is what&#39;s
[43:27] called a base model what is a base model
[43:29] it&#39;s a token simulator right it&#39;s an
[43:32] internet text token simulator and so
[43:35] that is not by itself useful yet because
[43:38] what we want is what&#39;s called an
[43:39] assistant we want to ask questions and
[43:41] have it respond to answers these models
[43:43] won&#39;t do that they just uh create sort
[43:45] of remixes of the internet they dream
[43:48] internet pages so the base models are
[43:51] not very often released because they&#39;re
[43:52] kind of just only a step one of a few
[43:55] other steps that we still need to take
[43:56] to get in system
[43:58] however a few releases have been made so
[44:01] as an example the gbt2 model released
[44:04] the 1.6 billion sorry 1.5 billion model
[44:08] back in 2019 and this gpt2 model is a
[44:10] base model now what is a model release
[44:13] what does it look like to release these
[44:15] models so this is the gpt2 repository on
[44:18] GitHub well you need two things
[44:20] basically to release model number one we
[44:22] need the um python code usually that
[44:27] describes the sequence of operations in
[44:30] detail that they make in their model so
[44:34] um if you remember
[44:36] back this
[44:38] Transformer the sequence of steps that
[44:40] are taken here in this neural network is
[44:42] what is being described by this code so
[44:45] this code is sort of implementing the
[44:47] what&#39;s called forward pass of this
[44:49] neural network so we need the specific
[44:51] details of exactly how they wired up
[44:53] that neural network so this is just
[44:55] computer code and it&#39;s usually just a
[44:57] couple hundred lines of code it&#39;s not
[44:59] it&#39;s not that crazy and uh this is all
[45:01] fairly understandable and usually fairly
[45:03] standard what&#39;s not standard are the
[45:05] parameters that&#39;s where the actual value
[45:07] is what are the parameters of this
[45:09] neural network because there&#39;s 1.6
[45:11] billion of them and we need the correct
[45:13] setting or a really good setting and so
[45:15] that&#39;s why in addition to this source
[45:17] code they release the parameters which
[45:20] in this case is roughly 1.5 billion
[45:23] parameters and these are just numbers so
[45:25] it&#39;s one single list of 1.5 billion
[45:27] numbers the precise and good setting of
[45:30] all the knobs such that the tokens come
[45:32] out
[45:33] well so uh you need those two things to
[45:37] get a base model
[45:39] release
[45:41] now gpt2 was released but that&#39;s
[45:43] actually a fairly old model as I
[45:44] mentioned so actually the model we&#39;re
[45:46] going to turn to is called llama 3 and
[45:49] that&#39;s the one that I would like to show
[45:50] you next so llama 3 so gpt2 again was
[45:54] 1.6 billion parameters trained on 100
[45:55] billion tokens Lama 3 is a much bigger
[45:58] model and much more modern model it is
[46:00] released and trained by meta and it is a
[46:03] 45 billion parameter model trained on 15
[46:07] trillion tokens in very much the same
[46:09] way just much much
[46:11] bigger um and meta has also made a
[46:14] release of llama 3 and that was part of
[46:18] this
[46:19] paper so with this paper that goes into
[46:21] a lot of detail the biggest base model
[46:23] that they released is the Lama 3.1 4.5
[46:27] 405 billion parameter model so this is
[46:30] the base model and then in addition to
[46:32] the base model you see here
[46:33] foreshadowing for later sections of the
[46:35] video they also released the instruct
[46:37] model and the instruct means that this
[46:39] is an assistant you can ask it questions
[46:41] and it will give you answers we still
[46:43] have yet to cover that part later for
[46:45] now let&#39;s just look at this base model
[46:47] this token simulator and let&#39;s play with
[46:49] it and try to think about you know what
[46:51] is this thing and how does it work and
[46:53] um what do we get at the end of this
[46:55] optimization if you let this run Until
[46:57] the End uh for a very big neural network
[46:59] on a lot of data so my favorite place to
[47:02] interact with the base models is this um
[47:04] company called hyperbolic which is
[47:06] basically serving the base model of the
[47:09] 405b Llama 3.1 so when you go to the
[47:13] website and I think you may have to
[47:14] register and so on make sure that in the
[47:16] models make sure that you are using
[47:18] llama 3.1 405 billion base it must be
[47:22] the base model and then here let&#39;s say
[47:24] the max tokens is how many tokens we&#39;re
[47:26] going to be gener rating so let&#39;s just
[47:28] decrease this to be a bit less just so
[47:30] we don&#39;t waste compute we just want the
[47:32] next 128 tokens and leave the other
[47:34] stuff alone I&#39;m not going to go into the
[47:36] full detail here um now fundamentally
[47:39] what&#39;s going to happen here is identical
[47:41] to what happens here during inference
[47:43] for us so this is just going to continue
[47:45] the token sequence of whatever you
[47:47] prefix you&#39;re going to give it so I want
[47:49] to first show you that this model here
[47:51] is not yet an assistant so you can for
[47:53] example ask it what is 2 plus 2 it&#39;s not
[47:56] going to tell you oh it&#39;s four uh what
[47:58] else can I help you with it&#39;s not going
[47:59] to do that because what is 2 plus 2 is
[48:02] going to be tokenized and then those
[48:05] tokens just act as a prefix and then
[48:07] what the model is going to do now is
[48:09] just going to get the probability for
[48:10] the next token and it&#39;s just a glorified
[48:12] autocomplete it&#39;s a very very expensive
[48:14] autocomplete of what comes next um
[48:17] depending on the statistics of what it
[48:18] saw in its training documents which are
[48:20] basically web
[48:22] pages so let&#39;s just uh hit enter to see
[48:25] what tokens it comes up with as a
[48:31] continuation okay so here it kind of
[48:32] actually answered the question and
[48:34] started to go off into some
[48:35] philosophical territory uh let&#39;s try it
[48:37] again so let me copy and paste and let&#39;s
[48:39] try again from scratch what is 2 plus
[48:45] two so okay so it just goes off again so
[48:49] notice one more thing that I want to
[48:50] stress is that the system uh I think
[48:53] every time you put it in it just kind of
[48:55] starts from scratch
[48:58] so it doesn&#39;t uh the system here is
[48:59] stochastic so for the same prefix of
[49:02] tokens we&#39;re always getting a different
[49:04] answer and the reason for that is that
[49:06] we get this probity distribution and we
[49:08] sample from it and we always get
[49:10] different samples and we sort of always
[49:11] go into a different territory uh
[49:13] afterwards so here in this case um I
[49:17] don&#39;t know what this is let&#39;s try one
[49:19] more
[49:22] time so it just continues on so it&#39;s
[49:25] just doing the stuff that it&#39;s saw on
[49:26] the internet right um and it&#39;s just kind
[49:29] of like regurgitating those uh
[49:31] statistical
[49:32] patterns so first things it&#39;s not an
[49:35] assistant yet it&#39;s a token autocomplete
[49:38] and second it is a stochastic system now
[49:42] the crucial thing is that even though
[49:44] this model is not yet by itself very
[49:46] useful for a lot of applications just
[49:49] yet um it is still very useful because
[49:52] in the task of predicting the next token
[49:54] in the sequence the model has learned a
[49:56] lot about the world and it has stored
[49:59] all that knowledge in the parameters of
[50:01] the network so remember that our text
[50:04] looked like this right internet web
[50:06] pages and now all of this is sort of
[50:08] compressed in the weights of the network
[50:11] so you can think of um these 405 billion
[50:15] parameters is a kind of compression of
[50:16] the internet you can think of the
[50:19] 45 billion parameters is kind of like a
[50:21] zip file uh but it&#39;s not a loss less
[50:25] compression it&#39;s a loss C compression
[50:27] we&#39;re kind of like left with kind of a
[50:28] gal of the internet and we can generate
[50:31] from it right now we can elicit some of
[50:34] this knowledge by prompting the base
[50:35] model uh accordingly so for example
[50:38] here&#39;s a prompt that might work to
[50:40] elicit some of that knowledge that&#39;s
[50:41] hiding in the parameters here&#39;s my top
[50:43] 10 list of the top landmarks to see in
[50:46] the
[50:48] pairs
[50:50] um and I&#39;m doing it this way because I&#39;m
[50:52] trying to Prime the model to now
[50:54] continue this list so let&#39;s see if that
[50:56] works when I press
[50:57] enter okay so you see that it started a
[51:00] list and it&#39;s now kind of giving me some
[51:02] of those
[51:03] landmarks and now notice that it&#39;s
[51:05] trying to give a lot of information here
[51:07] now you might not be able to actually
[51:09] fully trust some of the information here
[51:10] remember that this is all just a
[51:12] recollection of some of the internet
[51:14] documents and so the things that occur
[51:17] very frequently in the internet data are
[51:19] probably more likely to be remembered
[51:21] correctly compared to things that happen
[51:23] very infrequently so you can&#39;t fully
[51:25] trust some of the things that and some
[51:27] of the information that is here because
[51:28] it&#39;s all just a vague recollection of
[51:30] Internet documents because the
[51:32] information is not stored explicitly in
[51:34] any of the parameters it&#39;s all just the
[51:36] recollection that said we did get
[51:38] something that is probably approximately
[51:40] correct and I don&#39;t actually have the
[51:42] expertise to verify that this is roughly
[51:44] correct but you see that we&#39;ve elicited
[51:46] a lot of the knowledge of the model and
[51:48] this knowledge is not precise and exact
[51:51] this knowledge is vague and
[51:53] probabilistic and statistical and the
[51:55] kinds of things that occur often are the
[51:57] kinds of things that are more likely to
[51:59] be remembered um in the model now I want
[52:02] to show you a few more examples of this
[52:04] model&#39;s Behavior the first thing I want
[52:05] to show you is this example I went to
[52:08] the Wikipedia page for zebra and let me
[52:10] just copy paste the first uh even one
[52:13] sentence
[52:14] here and let me put it here now when I
[52:17] click enter what kind of uh completion
[52:19] are we going to get so let me just hit
[52:23] enter there are three living species
[52:26] etc etc what the model is producing here
[52:29] is an exact regurgitation of this
[52:31] Wikipedia entry it is reciting this
[52:33] Wikipedia entry purely from memory and
[52:36] this memory is stored in its parameters
[52:39] and so it is possible that at some point
[52:41] in these 512 tokens the model will uh
[52:44] stray away from the Wikipedia entry but
[52:46] you can see that it has huge chunks of
[52:47] it memorized here uh let me see for
[52:50] example if this sentence
[52:51] occurs by now okay so this so we&#39;re
[52:55] still on track let me check
[52:58] here okay we&#39;re still on
[53:00] track it will eventually uh stray
[53:04] away okay so this thing is just recited
[53:07] to a very large extent it will
[53:08] eventually deviate uh because it won&#39;t
[53:11] be able to remember exactly now the
[53:13] reason that this happens is because
[53:14] these models can be extremely good at
[53:16] memorization and usually this is not
[53:18] what you want in the final model and
[53:20] this is something called regurgitation
[53:21] and it&#39;s usually undesirable to site uh
[53:24] things uh directly uh that you have
[53:26] trained on now the reason that this
[53:29] happens actually is because for a lot of
[53:31] documents like for example Wikipedia
[53:33] when these documents are deemed to be of
[53:35] very high quality as a source like for
[53:37] example Wikipedia it is very often uh
[53:40] the case that when you train the model
[53:42] you will preferentially sample from
[53:44] those sources so basically the model has
[53:46] probably done a few epochs on this data
[53:48] meaning that it has seen this web page
[53:50] like maybe probably 10 times or so and
[53:52] it&#39;s a bit like you like when you read
[53:54] some kind of a text many many times say
[53:56] you read something a 100 times uh then
[53:58] you&#39;ll be able to recite it and it&#39;s
[54:00] very similar for this model if it sees
[54:01] something way too often it&#39;s going to be
[54:03] able to recite it later from memory
[54:05] except these models can be a lot more
[54:07] efficient um like per presentation than
[54:10] human so probably it&#39;s only seen this
[54:12] Wikipedia entry 10 times but basically
[54:14] it has remembered this article exactly
[54:16] in its parameters okay the next thing I
[54:18] want to show you is something that the
[54:19] model has definitely not seen during its
[54:21] training so for example if we go to the
[54:24] paper uh and then we navigate to the
[54:26] pre-training data we&#39;ll see here that uh
[54:31] the data set has a knowledge cut off
[54:33] until the end of 2023 so it will not
[54:35] have seen documents after this point and
[54:38] certainly it has not seen anything about
[54:39] the 2024 election and how it turned out
[54:43] now if we Prime the model with the
[54:46] tokens from the future it will continue
[54:49] the token sequence and it will just take
[54:50] its best guess according to the
[54:51] knowledge that it has in its own
[54:53] parameters so let&#39;s take a look at what
[54:55] that could look like
[54:57] so the Republican Party kit
[54:59] Trump okay president of the United
[55:01] States from
[55:02] 2017 and let&#39;s see what it says after
[55:05] this point so for example the model will
[55:07] have to guess at the running mate and
[55:09] who it&#39;s against Etc so let&#39;s hit
[55:11] enter so here thingss that Mike Pence
[55:14] was the running mate instead of JD Vance
[55:17] and the ticket was against Hillary
[55:20] Clinton and Tim Kane so this is kind of
[55:23] a interesting parallel universe
[55:25] potentially of what could have happened
[55:26] happened according to the LM let&#39;s get a
[55:28] different sample so the identical prompt
[55:31] and let&#39;s
[55:33] resample so here the running mate was
[55:35] Ronda santis and they ran against Joe
[55:38] Biden and Camala Harris so this is again
[55:40] a different parallel universe so the
[55:42] model will take educated guesses and it
[55:44] will continue the token sequence based
[55:45] on this knowledge um and it will just
[55:48] kind of like all of what we&#39;re seeing
[55:49] here is what&#39;s called hallucination the
[55:51] model is just taking its best guess uh
[55:54] in a probalistic manner the next thing I
[55:56] would like to show you is that even
[55:58] though this is a base model and not yet
[56:00] an assistant model it can still be
[56:02] utilized in Practical applications if
[56:04] you are clever with your prompt design
[56:06] so here&#39;s something that we would call a
[56:08] few shot
[56:09] prompt so what it is here is that I have
[56:12] 10 words or 10 pairs and each pair is a
[56:16] word of English column and then a the
[56:19] translation in Korean and we have 10 of
[56:22] them and what the model does here is at
[56:25] the end we have teacher column and then
[56:27] here&#39;s where we&#39;re going to do a
[56:28] completion of say just five tokens and
[56:31] these models have what we call in
[56:33] context learning abilities and what
[56:35] that&#39;s referring to is that as it is
[56:37] reading this context it is learning sort
[56:40] of in
[56:41] place that there&#39;s some kind of a
[56:43] algorithmic pattern going on in my data
[56:46] and it knows to continue that pattern
[56:48] and this is called kind of like Inc
[56:50] context learning so it takes on the role
[56:53] of a
[56:54] translator and when we hit uh completion
[56:58] we see that the teacher translation is
[56:59] Sim which is correct um and so this is
[57:03] how you can build apps by being clever
[57:05] with your prompting even though we still
[57:06] just have a base model for now and it
[57:08] relies on what we call this um uh in
[57:11] context learning ability and it is done
[57:14] by constructing what&#39;s called a few shot
[57:15] prompt okay and finally I want to show
[57:17] you that there is a clever way to
[57:19] actually instantiate a whole language
[57:21] model assistant just by prompting and
[57:24] the trick to it is that we&#39;re structure
[57:26] a prompt to look like a web page that is
[57:29] a conversation between a helpful AI
[57:31] assistant and a human and then the model
[57:34] will continue that conversation so
[57:36] actually to write the prompt I turned to
[57:38] chat gbt itself which is kind of meta
[57:41] but I told it I want to create an llm
[57:43] assistant but all I have is the base
[57:45] model so can you please write my um uh
[57:50] prompt and this is what it came up with
[57:52] which is actually quite good so here&#39;s a
[57:54] conversation between an AI assistant and
[57:55] a human
[57:56] the AI assistant is knowledgeable
[57:58] helpful capable of answering wide
[57:59] variety of questions Etc and then here
[58:03] it&#39;s not enough to just give it a sort
[58:05] of description it works much better if
[58:07] you create this fot prompt so here&#39;s a
[58:10] few terms of human assistant human
[58:13] assistant and we have uh you know a few
[58:15] turns of conversation and then here at
[58:17] the end is we&#39;re going to be putting the
[58:19] actual query that we like so let me copy
[58:21] paste this into the base model prompt
[58:25] and now let me do human column and this
[58:28] is where we put our actual prompt why is
[58:31] the sky
[58:32] blue and uh let&#39;s uh
[58:37] run assistant the sky appears blue due
[58:40] to the phenomenon called R lights
[58:41] scattering etc etc so you see that the
[58:44] base model is just continuing the
[58:45] sequence but because the sequence looks
[58:47] like this conversation it takes on that
[58:49] role but it is a little subtle because
[58:52] here it just uh you know it ends the
[58:54] assistant and then just you know
[58:55] hallucinate Ates the next question by
[58:57] the human Etc so it&#39;ll just continue
[58:58] going on and on uh but you can see that
[59:01] we have sort of accomplished the task
[59:03] and if you just took this why is the sky
[59:06] blue and if we just refresh this and put
[59:09] it here then of course we don&#39;t expect
[59:10] this to work with a base model right
[59:12] we&#39;re just going to who knows what we&#39;re
[59:14] going to get okay we&#39;re just going to
[59:15] get more
[59:16] questions okay so this is one way to
[59:19] create an assistant even though you may
[59:21] only have a base model okay so this is
[59:24] the kind of brief summary of the things
[59:26] we talked about over the last few
[59:28] minutes now let me zoom out
[59:32] here and this is kind of like what we&#39;ve
[59:34] talked about so far we wish to train LM
[59:37] assistants like chpt we&#39;ve discussed the
[59:40] first stage of that which is the
[59:42] pre-training stage and we saw that
[59:44] really what it comes down to is we take
[59:45] Internet documents we break them up into
[59:47] these tokens these atoms of little text
[59:49] chunks and then we predict token
[59:51] sequences using neural networks the
[59:54] output of this entire stage is this base
[59:56] model it is the setting of The
[59:58] parameters of this network and this base
[60:01] model is basically an internet document
[60:03] simulator on the token level so it can
[60:05] just uh it can generate token sequences
[60:08] that have the same kind of like
[60:10] statistics as Internet documents and we
[60:12] saw that we can use it in some
[60:13] applications but we actually need to do
[60:15] better we want an assistant we want to
[60:17] be able to ask questions and we want the
[60:18] model to give us answers and so we need
[60:21] to now go into the second stage which is
[60:23] called the post-training stage so we
[60:26] take our base model our internet
[60:28] document simulator and hand it off to
[60:29] post training so we&#39;re now going to
[60:31] discuss a few ways to do what&#39;s called
[60:33] post training of these models these
[60:36] stages in post training are going to be
[60:38] computationally much less expensive most
[60:40] of the computational work all of the
[60:42] massive data centers um and all of the
[60:45] sort of heavy compute and millions of
[60:47] dollars are the pre-training stage but
[60:50] now we go into the slightly cheaper but
[60:52] still extremely important stage called
[60:54] post trining where we turn this llm
[60:57] model into an assistant so let&#39;s take a
[60:59] look at how we can get our model to not
[61:02] sample internet documents but to give
[61:04] answers to questions so in other words
[61:07] what we want to do is we want to start
[61:08] thinking about conversations and these
[61:10] are conversations that can be multi-turn
[61:13] so so uh there can be multiple turns and
[61:15] they are in the simplest case a
[61:17] conversation between a human and an
[61:19] assistant and so for example we can
[61:21] imagine the conversation could look
[61:22] something like this when a human says
[61:24] what is 2 plus2 the assistant should re
[61:25] respond with something like 2 plus 2 is
[61:27] 4 when a human follows up and says what
[61:29] if it was star instead of a plus
[61:31] assistant could respond with something
[61:32] like
[61:33] this um and similar here this is another
[61:36] example showing that the assistant could
[61:37] also have some kind of a personality
[61:39] here uh that it&#39;s kind of like nice and
[61:41] then here in the third example I&#39;m
[61:43] showing that when a human is asking for
[61:44] something that we uh don&#39;t wish to help
[61:47] with we can produce what&#39;s called
[61:48] refusal we can say that we cannot help
[61:50] with that so in other words what we want
[61:53] to do now is we want to think through
[61:55] how in a system should interact with the
[61:57] human and we want to program the
[61:59] assistant and Its Behavior in these
[62:01] conversations now because this is neural
[62:03] networks we&#39;re not going to be
[62:04] programming these explicitly in code
[62:07] we&#39;re not going to be able to program
[62:08] the assistant in that way because this
[62:10] is neural networks everything is done
[62:12] through neural network training on data
[62:14] sets and so because of that we are going
[62:17] to be implicitly programming the
[62:19] assistant by creating data sets of
[62:21] conversations so these are three
[62:23] independent examples of conversations in
[62:25] a data dat set an actual data set and
[62:27] I&#39;m going to show you examples will be
[62:29] much larger it could have hundreds of
[62:31] thousands of conversations that are
[62:32] multi- turn very long Etc and would
[62:34] cover a diverse breath of topics but
[62:37] here I&#39;m only showing three examples but
[62:39] the way this works basically is uh a
[62:42] assistant is being programmed by example
[62:45] and where is this data coming from like
[62:47] 2 * 2al 4 same as 2 plus 2 Etc where
[62:50] does that come from this comes from
[62:51] Human labelers so we will basically give
[62:54] human labelers some conversational
[62:56] context and we will ask them to um
[62:58] basically give the ideal assistant
[63:00] response in this situation and a human
[63:03] will write out the ideal response for an
[63:06] assistant in any situation and then
[63:08] we&#39;re going to get the model to
[63:10] basically train on this and to imitate
[63:12] those kinds of
[63:14] responses so the way this works then is
[63:16] we are going to take our base model
[63:17] which we produced in the preing stage
[63:20] and this base model was trained on
[63:21] internet documents we&#39;re now going to
[63:23] take that data set of internet documents
[63:25] and we&#39;re gonna throw it out and we&#39;re
[63:27] going to substitute a new data set and
[63:29] that&#39;s going to be a data set of
[63:30] conversations and we&#39;re going to
[63:32] continue training the model on these
[63:33] conversations on this new data set of
[63:35] conversations and what happens is that
[63:37] the model will very rapidly adjust and
[63:40] will sort of like learn the statistics
[63:42] of how this assistant responds to human
[63:45] queries and then later during inference
[63:48] we&#39;ll be able to basically um Prime the
[63:51] assistant and get the response and it
[63:54] will be imitating what the humans will
[63:56] human labelers would do in that
[63:57] situation if that makes sense so we&#39;re
[64:00] going to see examples of that and this
[64:01] is going to become bit more concrete I
[64:03] also wanted to mention that this
[64:05] post-training stage we&#39;re going to
[64:06] basically just continue training the
[64:07] model but um the pre-training stage can
[64:10] in practice take roughly three months of
[64:13] training on many thousands of computers
[64:15] the post-training stage will typically
[64:16] be much shorter like 3 hours for example
[64:20] um and that&#39;s because the data set of
[64:21] conversations that we&#39;re going to create
[64:23] here manually is much much smaller than
[64:26] the data set of text on the internet and
[64:28] so this training will be very short but
[64:31] fundamentally we&#39;re just going to take
[64:33] our base model we&#39;re going to continue
[64:35] training using the exact same algorithm
[64:37] the exact same everything except we&#39;re
[64:39] swapping out the data set for
[64:40] conversations so the questions now are
[64:43] what are these conversations how do we
[64:44] represent them how do we get the model
[64:46] to see conversations instead of just raw
[64:49] text and then what are the outcomes of
[64:52] um this kind of training and what do you
[64:54] get in a certain like psychological
[64:56] sense uh when we talk about the model so
[64:58] let&#39;s turn to those questions now so
[65:01] let&#39;s start by talking about the
[65:02] tokenization of conversations everything
[65:05] in these models has to be turned into
[65:07] tokens because everything is just about
[65:08] token sequences so how do we turn
[65:10] conversations into token sequences is
[65:12] the question and so for that we need to
[65:15] design some kind of ending coding and uh
[65:17] this is kind of similar to maybe if
[65:18] you&#39;re familiar you don&#39;t have to be
[65:20] with for example the TCP IP packet in um
[65:23] on the internet there are precise rules
[65:25] and protocols for how you represent
[65:27] information how everything is structured
[65:29] together so that you have all this kind
[65:30] of data laid out in a way that is
[65:32] written out on a paper and that everyone
[65:34] can agree on and so it&#39;s the same thing
[65:36] now happening in llms we need some kind
[65:38] of data structures and we need to have
[65:40] some rules around how these data
[65:41] structures like conversations get
[65:43] encoded and decoded to and from tokens
[65:46] and so I want to show you now how I
[65:48] would
[65:49] recreate uh this conversation in the
[65:52] token space so if you go to Tech
[65:54] tokenizer
[65:56] I can take that conversation and this is
[65:58] how it is represented in uh for the
[66:01] language model so here we have we are
[66:03] iterating a user and an assistant in
[66:06] this two- turn
[66:08] conversation and what you&#39;re seeing here
[66:10] is it looks ugly but it&#39;s actually
[66:11] relatively simple the way it gets turned
[66:13] into a token sequence here at the end is
[66:16] a little bit complicated but at the end
[66:18] this conversation between a user and
[66:19] assistant ends up being 49 tokens it is
[66:22] a one-dimensional sequence of 49 tokens
[66:24] and these are the tokens
[66:26] okay and all the different llms will
[66:29] have a slightly different format or
[66:31] protocols and it&#39;s a little bit of a
[66:33] wild west right now but for example GPT
[66:36] 40 does it in the following way you have
[66:39] this special token called imore start
[66:42] and this is short for IM imaginary
[66:44] monologue uh the
[66:46] start then you have to specify um I
[66:49] don&#39;t actually know why it&#39;s called that
[66:50] to be honest then you have to specify
[66:52] whose turn it is so for example user
[66:54] which is a token 4
[66:56] 28 then you have internal monologue
[67:00] separator and then it&#39;s the exact
[67:03] question so the tokens of the question
[67:05] and then you have to close it so I am
[67:07] end the end of the imaginary monologue
[67:09] so
[67:10] basically the question from a user of
[67:13] what is 2 plus two ends up being the
[67:16] token sequence of these tokens and now
[67:19] the important thing to mention here is
[67:20] that IM start this is not text right IM
[67:24] start is a special token that gets added
[67:27] it&#39;s a new token and um this token has
[67:30] never been trained on so far it is a new
[67:32] token that we create in a post-training
[67:34] stage and we introduce and so these
[67:37] special tokens like IM seep IM start Etc
[67:40] are introduced and interspersed with
[67:42] text so that they sort of um get the
[67:45] model to learn that hey this is a the
[67:47] start of a turn for who is it start of
[67:49] the turn for the start of the turn is
[67:51] for the user and then this is what the
[67:54] user says and then the user ends and
[67:56] then it&#39;s a new start of a turn and it
[67:58] is by the assistant and then what does
[68:01] the assistant say well these are the
[68:02] tokens of what the assistant says Etc
[68:05] and so this conversation is not turned
[68:06] into the sequence of tokens the specific
[68:09] details here are not actually that
[68:11] important all I&#39;m trying to show you in
[68:13] concrete terms is that our conversations
[68:15] which we think of as kind of like a
[68:16] structured object end up being turned
[68:19] via some encoding into onedimensional
[68:21] sequences of tokens and so because this
[68:25] is one dimensional sequence of tokens we
[68:27] can apply all the stuff that we applied
[68:29] before now it&#39;s just a sequence of
[68:30] tokens and now we can train a language
[68:33] model on it and so we&#39;re just predicting
[68:35] the next token in a sequence uh just
[68:37] like before and um we can represent and
[68:39] train on conversations and then what
[68:42] does it look like at test time during
[68:43] inference so say we&#39;ve trained a model
[68:46] and we&#39;ve trained a model on these kinds
[68:49] of data sets of conversations and now we
[68:51] want to
[68:52] inference so during inference what does
[68:54] this look like when you&#39;re on on chash
[68:55] apt well you come to chash apt and you
[68:58] have say like a dialogue with it and the
[69:01] way this works is
[69:03] basically um say that this was already
[69:06] filled in so like what is 2 plus 2 2
[69:07] plus 2 is four and now you issue what if
[69:10] it was times I am end and what basically
[69:13] ends up happening um on the servers of
[69:16] open AI or something like that is they
[69:18] put in I start assistant I amep and this
[69:21] is where they end it right here so they
[69:24] construct this context and now they
[69:27] start sampling from the model so it&#39;s at
[69:29] this stage that they will go to the
[69:30] model and say okay what is a good for
[69:32] sequence what is a good first token what
[69:34] is a good second token what is a good
[69:36] third token and this is where the LM
[69:38] takes over and creates a response like
[69:41] for example response that looks
[69:43] something like this but it doesn&#39;t have
[69:44] to be identical to this but it will have
[69:46] the flavor of this if this kind of a
[69:48] conversation was in the data set so um
[69:52] that&#39;s roughly how the protocol Works
[69:54] although the details of this protocol
[69:56] are not important so again my goal is
[69:59] that just to show you that everything
[70:01] ends up being just a one-dimensional
[70:02] token sequence so we can apply
[70:04] everything we&#39;ve already seen but we&#39;re
[70:06] now training on conversations and we&#39;re
[70:08] now uh basically generating
[70:10] conversations as well okay so now I
[70:13] would like to turn to what these data
[70:14] sets look like in practice the first
[70:16] paper that I would like to show you and
[70:17] the first effort in this direction is
[70:20] this paper from openai in 2022 and this
[70:23] paper was called instruct GPT or the
[70:25] technique that they developed and this
[70:27] was the first time that opena has kind
[70:29] of talked about how you can take
[70:30] language models and fine-tune them on
[70:32] conversations and so this paper has a
[70:34] number of details that I would like to
[70:36] take you through so the first stop I
[70:38] would like to make is in section 3.4
[70:40] where they talk about the human
[70:41] contractors that they hired uh in this
[70:44] case from upwork or through scale AI to
[70:47] uh construct these conversations and so
[70:49] there are human labelers involved whose
[70:52] job it is professionally to create these
[70:54] conversations and these labelers are
[70:56] asked to come up with prompts and then
[70:58] they are asked to also complete the
[71:00] ideal assistant responses and so these
[71:03] are the kinds of prompts that people
[71:04] came up with so these are human labelers
[71:06] so list five ideas for how to regain
[71:08] enthusiasm for my career what are the
[71:10] top 10 science fiction books I should
[71:12] read next and there&#39;s many different
[71:13] types of uh kind of prompts here so
[71:16] translate this sentence from uh to
[71:18] Spanish Etc and so there&#39;s many things
[71:21] here that people came up with they first
[71:23] come up with the prompt and then they
[71:25] also uh answer that prompt and they give
[71:28] the ideal assistant response now how do
[71:30] they know what is the ideal assistant
[71:32] response that they should write for
[71:33] these prompts so when we scroll down a
[71:35] little bit further we see that here we
[71:37] have this excerpt of labeling
[71:39] instructions uh that are given to the
[71:41] human labelers so the company that is
[71:44] developing the language model like for
[71:45] example open AI writes up labeling
[71:47] instructions for how the humans should
[71:49] create ideal responses and so here for
[71:52] example is an excerpt uh of these kinds
[71:54] of labeling instruction instructions on
[71:56] High level you&#39;re asking people to be
[71:57] helpful truthful and harmless and you
[71:59] can pause the video if you&#39;d like to see
[72:01] more here but on a high level basically
[72:04] just just answer try to be helpful try
[72:06] to be truthful and don&#39;t answer
[72:08] questions that we don&#39;t want um kind of
[72:10] the system to handle uh later in chat
[72:13] gbt and so roughly speaking the company
[72:16] comes up with the labeling instructions
[72:18] usually they are not this short usually
[72:19] there are hundreds of pages and people
[72:21] have to study them professionally and
[72:23] then they write out the ideal assistant
[72:26] responses uh following those labeling
[72:28] instructions so this is a very human
[72:30] heavy process as it was described in
[72:32] this paper now the data set for instruct
[72:34] GPT was never actually released by openi
[72:37] but we do have some open- Source um
[72:39] reproductions that were&#39;re trying to
[72:40] follow this kind of a setup and collect
[72:42] their own data so one that I&#39;m familiar
[72:45] with for example is the effort of open
[72:48] Assistant from a while back and this is
[72:50] just one of I think many examples but I
[72:52] just want to show you an example so
[72:54] here&#39;s so these were people on the
[72:56] internet that were asked to basically
[72:57] create these conversations similar to
[72:59] what um open I did with human labelers
[73:03] and so here&#39;s an entry of a person who
[73:05] came up with this BR can you write a
[73:07] short introduction to the relevance of
[73:08] the term
[73:09] manop uh in economics please use
[73:12] examples Etc and then the same person or
[73:15] potentially a different person will
[73:17] write up the response so here&#39;s the
[73:18] assistant response to this and so then
[73:21] the same person or different person will
[73:23] actually write out this ideal
[73:26] response and then this is an example of
[73:29] maybe how the conversation could
[73:30] continue now explain it to a dog and
[73:33] then you can try to come up with a
[73:34] slightly a simpler explanation or
[73:36] something like that now this then
[73:39] becomes the label and we end up training
[73:41] on this so what happens during training
[73:45] is that um of course we&#39;re not going to
[73:48] have a full coverage of all the possible
[73:50] questions that um the model will
[73:53] encounter at test time during inference
[73:56] we can&#39;t possibly cover all the possible
[73:57] prompts that people are going to be
[73:59] asking in the future but if we have a
[74:02] like a data set of a few of these
[74:03] examples then the model during training
[74:06] will start to take on this Persona of
[74:09] this helpful truthful harmless assistant
[74:12] and it&#39;s all programmed by example and
[74:14] so these are all examples of behavior
[74:16] and if you have conversations of these
[74:18] example behaviors and you have enough of
[74:19] them like 100,00 and you train on it the
[74:22] model sort of starts to understand the
[74:23] statistical pattern and it kind of takes
[74:26] on this personality of this
[74:28] assistant now it&#39;s possible that when
[74:30] you get the exact same question like
[74:32] this at test time it&#39;s possible that the
[74:35] answer will be recited as exactly what
[74:38] was in the training set but more likely
[74:40] than that is that the model will kind of
[74:43] like do something of a similar Vibe um
[74:45] and we will understand that this is the
[74:47] kind of answer that you want um so
[74:51] that&#39;s what we&#39;re doing we&#39;re
[74:52] programming the system um by example and
[74:55] the system adopts statistically this
[74:58] Persona of this helpful truthful
[75:00] harmless assistant which is kind of like
[75:02] reflected in the labeling instructions
[75:04] that the company creates now I want to
[75:06] show you that the state-of-the-art has
[75:08] kind of advanced in the last 2 or 3
[75:09] years uh since the instr GPT paper so in
[75:12] particular it&#39;s not very common for
[75:14] humans to be doing all the heavy lifting
[75:16] just by themselves anymore and that&#39;s
[75:18] because we now have language models and
[75:19] these language models are helping us
[75:21] create these data sets and conversations
[75:23] so it is very rare that the people will
[75:25] like literally just write out the
[75:26] response from scratch it is a lot more
[75:28] likely that they will use an existing
[75:29] llm to basically like uh come up with an
[75:32] answer and then they will edit it or
[75:34] things like that so there&#39;s many
[75:35] different ways in which now llms have
[75:37] started to kind of permeate this
[75:39] posttraining Set uh stack and llms are
[75:43] basically used pervasively to help
[75:45] create these massive data sets of
[75:46] conversations so I don&#39;t want to show
[75:49] like Ultra chat is one um such example
[75:52] of like a more modern data set of
[75:53] conversations it is to a very large
[75:56] extent synthetic but uh I believe
[75:58] there&#39;s some human involvement I could
[75:59] be wrong with that usually there will be
[76:01] a little bit of human but there will be
[76:02] a huge amount of synthetic help um and
[76:06] this is all kind of like uh constructed
[76:08] in different ways and Ultra chat is just
[76:10] one example of many sft data sets that
[76:12] currently exist and the only thing I
[76:14] want to show you is that uh these data
[76:15] sets have now millions of conversations
[76:18] uh these conversations are mostly
[76:19] synthetic but they&#39;re probably edited to
[76:21] some extent by humans and they span a
[76:23] huge diversity of sort of
[76:27] um uh areas and so on so these are
[76:31] fairly extensive artifacts by now and
[76:33] there&#39;s all these like sft mixtures as
[76:35] they&#39;re called so you have a mixture of
[76:37] like lots of different types and sources
[76:39] and it&#39;s partially synthetic partially
[76:41] human and it&#39;s kind of like um gone in
[76:44] that direction since uh but roughly
[76:46] speaking we still have sft data sets
[76:48] they&#39;re made up of conversations we&#39;re
[76:50] training on them um just like we did
[76:52] before and
[76:55] uh I guess like the last thing to note
[76:57] is that I want to dispel a little bit of
[77:00] the magic of talking to an AI like when
[77:02] you go to chat GPT and you give it a
[77:04] question and then you hit enter uh what
[77:07] is coming back is kind of like
[77:10] statistically aligned with what&#39;s
[77:12] happening in the training set and these
[77:14] training sets I mean they really just
[77:16] have a seed in humans following labeling
[77:19] instructions so what are you actually
[77:21] talking to in chat GPT or how should you
[77:24] think about it well it&#39;s not coming from
[77:25] some magical AI like roughly speaking
[77:28] it&#39;s coming from something that is
[77:29] statistically imitating human labelers
[77:32] which comes from labeling instructions
[77:34] written by these companies and so you&#39;re
[77:36] kind of imitating this uh you&#39;re kind of
[77:38] getting um it&#39;s almost as if you&#39;re
[77:40] asking human labeler and imagine that
[77:43] the answer that is given to you uh from
[77:45] chbt is some kind of a simulation of a
[77:47] human labeler uh and it&#39;s kind of like
[77:50] asking what would a human labeler say in
[77:53] this kind of a conversation
[77:56] and uh it&#39;s not just like this human
[77:58] labeler is not just like a random person
[78:00] from the internet because these
[78:01] companies actually hire experts so for
[78:03] example when you are asking questions
[78:04] about code and so on the human labelers
[78:06] that would be in um involved in creation
[78:08] of these conversation data sets they
[78:10] will usually be usually be educated
[78:12] expert people and you&#39;re kind of like
[78:15] asking a question of like a simulation
[78:17] of those people if that makes sense so
[78:19] you&#39;re not talking to a magical AI
[78:21] you&#39;re talking to an average labeler
[78:22] this average labeler is probably fairly
[78:24] highly skilled
[78:25] but you&#39;re talking to kind of like an
[78:26] instantaneous simulation of that kind of
[78:29] a person that would be hired uh in the
[78:32] construction of these data sets so let
[78:34] me give you one more specific example
[78:36] before we move on for example when I go
[78:38] to chpt and I say recommend the top five
[78:40] landmarks who see in Paris and then I
[78:42] hit
[78:44] enter
[78:49] uh okay here we go okay when I hit enter
[78:52] what&#39;s coming out here how do I think
[78:55] about it well it&#39;s not some kind of a
[78:56] magical AI that has gone out and
[78:58] researched all the landmarks and then
[79:00] ranked them using its infinite
[79:01] intelligence Etc what I&#39;m getting is a
[79:04] statistical simulation of a labeler that
[79:07] was hired by open AI you can think about
[79:09] it roughly in that way and so if this
[79:13] specific um question is in the
[79:16] posttraining data set somewhere at open
[79:17] aai then I&#39;m very likely to see an
[79:20] answer that is probably very very
[79:22] similar to what that human labeler would
[79:24] have put down
[79:25] for those five landmarks how does the
[79:27] human labeler come up with this well
[79:28] they go off and they go on the internet
[79:29] and they kind of do their own little
[79:31] research for 20 minutes and they just
[79:32] come up with a list right now so if they
[79:35] come up with this list and this is in
[79:37] the data set I&#39;m probably very likely to
[79:39] see what they submitted as the correct
[79:41] answer from the assistant now if this
[79:44] specific query is not part of the post
[79:46] training data set then what I&#39;m getting
[79:48] here is a little bit more emergent uh
[79:51] because uh the model kind of understands
[79:53] the statistically
[79:55] um the kinds of landmarks that are in
[79:57] this training set are usually the
[79:59] prominent landmarks the landmarks that
[80:00] people usually want to see the kinds of
[80:02] landmarks that are usually uh very often
[80:05] talked about on the internet and
[80:06] remember that the model already has a
[80:08] ton of Knowledge from its pre-training
[80:10] on the internet so it&#39;s probably seen a
[80:12] ton of conversations about Paris about
[80:13] landmarks about the kinds of things that
[80:15] people like to see and so it&#39;s the
[80:17] pre-training knowledge that has then
[80:18] combined with the postering data set
[80:20] that results in this kind of an
[80:23] imitation um
[80:25] so that&#39;s uh that&#39;s roughly how you can
[80:27] kind of think about what&#39;s happening
[80:29] behind the scenes here in in this
[80:31] statistical sense okay now I want to
[80:33] turn to the topic of llm psychology as I
[80:35] like to call it which is what are sort
[80:37] of the emergent cognitive effects of the
[80:40] training pipeline that we have for these
[80:42] models so in particular the first one I
[80:44] want to talk to is of course
[80:47] hallucinations so you might be familiar
[80:50] with model hallucinations it&#39;s when llms
[80:52] make stuff up they just totally
[80:53] fabricate information Etc and it&#39;s a big
[80:56] problem with llm assistants it is a
[80:58] problem that existed to a large extent
[81:00] with early models uh from many years ago
[81:02] and I think the problem has gotten a bit
[81:04] better uh because there are some
[81:05] medications that I&#39;m going to go into in
[81:07] a second for now let&#39;s just try to
[81:09] understand where these hallucinations
[81:10] come from so here&#39;s a specific example
[81:13] of a few uh of three conversations that
[81:16] you might think you have in your
[81:17] training set and um these are pretty
[81:20] reasonable conversations that you could
[81:22] imagine being in the training set so
[81:23] like for example who is Cruz well Tom
[81:25] Cruz is an famous actor American actor
[81:27] and producer Etc who is John baraso this
[81:31] turns out to be a us senetor for example
[81:34] who is genis Khan well genis Khan was
[81:36] blah blah blah and so this is what your
[81:39] conversations could look like at
[81:40] training time now the problem with this
[81:42] is that when the human is writing the
[81:46] correct answer for the assistant in each
[81:48] one of these cases uh the human either
[81:51] like knows who this person is or they
[81:52] research them on the Internet and they
[81:53] come in and they write this response
[81:55] that kind of has this like confident
[81:57] tone of an answer and what happens
[81:59] basically is that at test time when you
[82:01] ask for someone who is this is a totally
[82:03] random name that I totally came up with
[82:05] and I don&#39;t think this person exists um
[82:07] as far as I know I just Tred to generate
[82:09] it randomly the problem is when we ask
[82:11] who is Orson kovats the problem is that
[82:15] the assistant will not just tell you oh
[82:17] I don&#39;t know even if the assistant and
[82:20] the language model itself might know
[82:23] inside its features inside its
[82:24] activations inside of its brain sort of
[82:26] it might know that this person is like
[82:28] not someone that um that is that it&#39;s
[82:30] familiar with even if some part of the
[82:32] network kind of knows that in some sense
[82:35] the uh saying that oh I don&#39;t know who
[82:37] this is is is not going to happen
[82:40] because the model statistically imitates
[82:42] is training set in the training set the
[82:45] questions of the form who is blah are
[82:47] confidently answered with the correct
[82:49] answer and so it&#39;s going to take on the
[82:52] style of the answer and it&#39;s going to do
[82:53] its best it&#39;s going to give you
[82:55] statistically the most likely guess and
[82:57] it&#39;s just going to basically make stuff
[82:58] up because these models again we just
[83:01] talked about it is they don&#39;t have
[83:02] access to the internet they&#39;re not doing
[83:04] research these are statistical token
[83:06] tumblers as I call them uh is just
[83:08] trying to sample the next token in the
[83:10] sequence and it&#39;s going to basically
[83:12] make stuff up so let&#39;s take a look at
[83:13] what this looks
[83:15] like I have here what&#39;s called the
[83:17] inference playground from hugging face
[83:20] and I am on purpose picking on a model
[83:22] called Falcon 7B which is an old model
[83:25] this is a few years ago now so it&#39;s an
[83:27] older model So It suffers from
[83:28] hallucinations and as I mentioned this
[83:31] has improved over time recently but
[83:33] let&#39;s say who is Orson kovats let&#39;s ask
[83:35] Falcon 7B instruct
[83:37] run oh yeah Orson kovat is an American
[83:40] author and science uh fiction writer
[83:42] okay this is totally false it&#39;s
[83:44] hallucination let&#39;s try again these are
[83:46] statistical systems right so we can
[83:48] resample this time Orson kovat is a
[83:51] fictional character from this 1950s TV
[83:53] show it&#39;s total BS right let&#39;s try again
[83:57] he&#39;s a former minor league baseball
[83:59] player okay so basically the model
[84:02] doesn&#39;t know and it&#39;s given us lots of
[84:04] different answers because it doesn&#39;t
[84:06] know it&#39;s just kind of like sampling
[84:08] from these probabilities the model
[84:10] starts with the tokens who is oron
[84:12] kovats assistant and then it comes in
[84:14] here and it&#39;s get it&#39;s getting these
[84:17] probabilities and it&#39;s just sampling
[84:19] from the probabilities and it just like
[84:20] comes up with stuff and the stuff is
[84:24] actually
[84:24] statistically consistent with the style
[84:27] of the answer in its training set and
[84:29] it&#39;s just doing that but you and I
[84:31] experiened it as a madeup factual
[84:33] knowledge but keep in mind that uh the
[84:36] model basically doesn&#39;t know and it&#39;s
[84:37] just imitating the format of the answer
[84:40] and it&#39;s not going to go off and look it
[84:41] up uh because it&#39;s just imitating again
[84:44] the answer so how can we uh mitigate
[84:47] this because for example when we go to
[84:48] chat apt and I say who is oron kovats
[84:50] and I&#39;m now asking the stateoftheart
[84:52] state-of-the-art model from open AI
[84:55] this model will tell
[84:56] you oh so this model is actually is even
[85:00] smarter because you saw very briefly it
[85:02] said searching the web uh we&#39;re going to
[85:04] cover this later um it&#39;s actually trying
[85:07] to do tool use and
[85:11] uh kind of just like came up with some
[85:13] kind of a story but I want to just who
[85:15] or Kovach did not use any tools I don&#39;t
[85:19] want it to do web
[85:22] search there&#39;s a wellknown historical or
[85:24] public figure named or oron kovats so
[85:27] this model is not going to make up stuff
[85:29] this model knows that it doesn&#39;t know
[85:31] and it tells you that it doesn&#39;t appear
[85:32] to be a person that this model knows so
[85:35] somehow we sort of improved
[85:37] hallucinations even though they clearly
[85:39] are an issue in older models and it
[85:42] makes totally uh sense why you would be
[85:44] getting these kinds of answers if this
[85:46] is what your training set looks like so
[85:47] how do we fix this okay well clearly we
[85:50] need some examples in our data set that
[85:53] where the correct answer for the
[85:54] assistant is that the model doesn&#39;t know
[85:57] about some particular fact but we only
[85:59] need to have those answers be produced
[86:02] in the cases where the model actually
[86:03] doesn&#39;t know and so the question is how
[86:05] do we know what the model knows or
[86:07] doesn&#39;t know well we can empirically
[86:09] probe the model to figure that out so
[86:11] let&#39;s take a look at for example how
[86:13] meta uh dealt with hallucinations for
[86:16] the Llama 3 series of models as an
[86:18] example so in this paper that they
[86:20] published from meta we can go into
[86:22] hallucinations
[86:25] which they call here factuality and they
[86:27] describe the procedure by which they
[86:29] basically interrogate the model to
[86:32] figure out what it knows and doesn&#39;t
[86:33] know to figure out sort of like the
[86:35] boundary of its knowledge and then they
[86:38] add examples to the training set where
[86:41] for the things where the model doesn&#39;t
[86:44] know them the correct answer is that the
[86:46] model doesn&#39;t know them which sounds
[86:48] like a very easy thing to do in
[86:50] principle but this roughly fixes the
[86:53] issue and the the reason it fixes the
[86:54] issue is
[86:56] because remember like the model might
[86:59] actually have a pretty good model of its
[87:01] self knowledge inside the network so
[87:04] remember we looked at the network and
[87:06] all these neurons inside the network you
[87:08] might imagine that there&#39;s a neuron
[87:09] somewhere in the network that sort of
[87:11] like lights up for when the model is
[87:14] uncertain but the problem is that the
[87:17] activation of that neuron is not
[87:18] currently wired up to the model actually
[87:20] saying in words that it doesn&#39;t know so
[87:23] even though the internal of the neural
[87:24] network no because there&#39;s some neurons
[87:26] that represent that the model uh will
[87:29] not surface that it will instead take
[87:31] its best guess so that it sounds
[87:33] confident um just like it sees in a
[87:35] training set so we need to basically
[87:37] interrogate the model and allow it to
[87:39] say I don&#39;t know in the cases that it
[87:41] doesn&#39;t know so let me take you through
[87:43] what meta roughly does so basically what
[87:45] they do is here I have an example uh
[87:48] Dominic kek is uh the featured article
[87:51] today so I just went there randomly and
[87:54] what they do is basically they take a
[87:55] random document in a training set and
[87:58] they take a paragraph and then they use
[88:01] an llm to construct questions about that
[88:04] paragraph so for example I did that with
[88:06] chat GPT
[88:09] here so I said here&#39;s a paragraph from
[88:12] this document generate three specific
[88:14] factual questions based on this
[88:15] paragraph and give me the questions and
[88:17] the answers and so the llms are already
[88:20] good enough to create and reframe this
[88:23] information so if the information is in
[88:25] the context window um of this llm this
[88:29] actually works pretty well it doesn&#39;t
[88:30] have to rely on its memory it&#39;s right
[88:33] there in the context window and so it
[88:35] can basically reframe that information
[88:37] with fairly high accuracy so for example
[88:40] can generate questions for us like for
[88:41] which team did he play here&#39;s the answer
[88:44] how many cups did he win Etc and now
[88:47] what we have to do is we have some
[88:48] question and answers and now we want to
[88:50] interrogate the model so roughly
[88:51] speaking what we&#39;ll do is we&#39;ll take our
[88:53] questions and we&#39;ll go to our model
[88:55] which would be uh say llama uh in meta
[88:59] but let&#39;s just interrogate mol 7B here
[89:01] as an example that&#39;s another model so
[89:04] does this model know about this answer
[89:07] let&#39;s take a
[89:09] look uh so he played for Buffalo Sabers
[89:12] right so the model knows and the the way
[89:15] that you can programmatically decide is
[89:16] basically we&#39;re going to take this
[89:18] answer from the model and we&#39;re going to
[89:20] compare it to the correct answer and
[89:23] again the model model are good enough to
[89:24] do this automatically so there&#39;s no
[89:26] humans involved here we can take uh
[89:28] basically the answer from the model and
[89:30] we can use another llm judge to check if
[89:33] that is correct according to this answer
[89:35] and if it is correct that means that the
[89:37] model probably knows so what we&#39;re going
[89:38] to do is we&#39;re going to do this maybe a
[89:40] few times so okay it knows it&#39;s Buffalo
[89:42] Savers let&#39;s drag
[89:45] in um Buffalo Sabers let&#39;s try one more
[89:51] time Buffalo Sabers so we asked three
[89:54] times about this factual question and
[89:55] the model seems to know so everything is
[89:58] great now let&#39;s try the second question
[90:00] how many Stanley Cups did he
[90:02] win and again let&#39;s interrogate the
[90:04] model about that and the correct answer
[90:06] is
[90:08] two so um here the model claims that he
[90:13] won um four times which is not correct
[90:17] right it doesn&#39;t match two so the model
[90:20] doesn&#39;t know it&#39;s making stuff up let&#39;s
[90:22] try again
[90:27] um so here the model again it&#39;s kind of
[90:30] like making stuff up right let&#39;s
[90:34] Dragon here it says did he did not even
[90:37] did not win during his career so
[90:39] obviously the model doesn&#39;t know and the
[90:41] way we can programmatically tell again
[90:42] is we interrogate the model three times
[90:45] and we compare its answers maybe three
[90:47] times five times whatever it is to the
[90:49] correct answer and if the model doesn&#39;t
[90:51] know then we know that the model doesn&#39;t
[90:53] know this question
[90:54] and then what we do is we take this
[90:56] question we create a new conversation in
[90:59] the training set so we&#39;re going to add a
[91:01] new conversation training set and when
[91:03] the question is how many Stanley Cups
[91:05] did he win the answer is I&#39;m sorry I
[91:08] don&#39;t know or I don&#39;t remember and
[91:10] that&#39;s the correct answer for this
[91:12] question because we interrogated the
[91:13] model and we saw that that&#39;s the case if
[91:15] you do this for many different types of
[91:18] uh questions for many different types of
[91:20] documents you are giving the model an
[91:23] opportunity to in its training set
[91:25] refuse to say based on its knowledge and
[91:28] if you just have a few examples of that
[91:30] in your training set the model will know
[91:33] um and and has the opportunity to learn
[91:35] the association of this knowledge-based
[91:37] refusal to this internal neuron
[91:41] somewhere in its Network that we presume
[91:43] exists and empirically this turns out to
[91:45] be probably the case and it can learn
[91:47] that Association that hey when this
[91:49] neuron of uncertainty is high then I
[91:52] actually don&#39;t know and I&#39;m allowed to
[91:54] say that I&#39;m sorry but I don&#39;t think I
[91:56] remember this Etc and if you have these
[91:59] uh examples in your training set then
[92:01] this is a large mitigation for
[92:03] hallucination and that&#39;s roughly
[92:05] speaking why chpt is able to do stuff
[92:08] like this as well so these are kinds of
[92:10] uh mitigations that people have
[92:12] implemented and that have improved the
[92:14] factuality issue over time okay so I&#39;ve
[92:16] described mitigation number one for
[92:19] basically mitigating the hallucinations
[92:21] issue now we can actually do much better
[92:24] than that uh it&#39;s instead of just saying
[92:27] that we don&#39;t know uh we can introduce
[92:29] an additional mitigation number two to
[92:32] give the llm an opportunity to be
[92:33] factual and actually answer the question
[92:36] now what do you and I do if I was to ask
[92:39] you a factual question and you don&#39;t
[92:40] know uh what would you do um in order to
[92:43] answer the question well you could uh go
[92:45] off and do some search and uh use the
[92:47] internet and you could figure out the
[92:49] answer and then tell me what that answer
[92:51] is and we can do the exact exact same
[92:54] thing with these models so think of the
[92:56] knowledge inside the neural network
[92:58] inside its billions of parameters think
[93:01] of that as kind of a vague recollection
[93:02] of the things that the model has seen
[93:05] during its training during the
[93:07] pre-training stage a long time ago so
[93:09] think of that knowledge in the
[93:10] parameters as something you read a month
[93:13] ago and if you keep reading something
[93:15] then you will remember it and the model
[93:17] remembers that but if it&#39;s something
[93:18] rare then you probably don&#39;t have a
[93:20] really good recollection of that
[93:21] information but what you and I do is we
[93:23] just go and look it up now when you go
[93:25] and look it up what you&#39;re doing
[93:26] basically is like you&#39;re refreshing your
[93:28] working memory with information and then
[93:30] you&#39;re able to sort of like retrieve it
[93:32] talk about it or Etc so we need some
[93:34] equivalent of allowing the model to
[93:36] refresh its memory or its recollection
[93:38] and we can do that by introducing tools
[93:41] uh for the
[93:42] models so the way we are going to
[93:44] approach this is that instead of just
[93:45] saying hey I&#39;m sorry I don&#39;t know we can
[93:48] attempt to use tools so we can create uh
[93:53] a mechanism
[93:54] by which the language model can emit
[93:56] special tokens and these are tokens that
[93:57] we&#39;re going to introduce new tokens so
[94:00] for example here I&#39;ve introduced two
[94:02] tokens and I&#39;ve introduced a format or a
[94:04] protocol for how the model is allowed to
[94:07] use these tokens so for example instead
[94:09] of answering the question when the model
[94:12] does not instead of just saying I don&#39;t
[94:14] know sorry the model has the option now
[94:16] to emitting the special token search
[94:18] start and this is the query that will go
[94:20] to like bing.com in the case of openai
[94:22] or say Google search or something like
[94:24] that so it will emit the query and then
[94:26] it will emit search end and then here
[94:30] what will happen is that the program
[94:32] that is sampling from the model that is
[94:34] running the inference when it sees the
[94:36] special token search end instead of
[94:39] sampling the next token uh in the
[94:41] sequence it will actually pause
[94:44] generating from the model it will go off
[94:46] it will open a session with bing.com and
[94:49] it will paste the search query into Bing
[94:52] and it will then um get all the text
[94:54] that is retrieved and it will basically
[94:56] take that text it will maybe represent
[94:58] it again with some other special tokens
[95:00] or something like that and it will take
[95:02] that text and it will copy paste it here
[95:05] into what I Tred to like show with the
[95:07] brackets so all that text kind of comes
[95:09] here and when the text comes here it
[95:12] enters the context window so the model
[95:15] so that text from the web search is now
[95:17] inside the context window that will feed
[95:20] into the neural network and you should
[95:21] think of the context window as kind of
[95:23] like the working memory of the model
[95:25] that data that is in the context window
[95:27] is directly accessible by the model it
[95:29] directly feeds into the neural network
[95:31] so it&#39;s not anymore a vague recollection
[95:33] it&#39;s data that it it has in the context
[95:36] window and is directly available to that
[95:38] model so now when it&#39;s sampling the new
[95:41] uh tokens here afterwards it can
[95:43] reference very easily the data that has
[95:45] been copy pasted in there so that&#39;s
[95:48] roughly how these um how these tools use
[95:52] uh tools uh function
[95:54] and so web search is just one of the
[95:55] tools we&#39;re going to look at some of the
[95:56] other tools in a bit uh but basically
[95:59] you introduce new tokens you introduce
[96:00] some schema by which the model can
[96:02] utilize these tokens and can call these
[96:04] special functions like web search
[96:06] functions and how do you teach the model
[96:08] how to correctly use these tools like
[96:10] say web search search start search end
[96:12] Etc well again you do that through
[96:14] training sets so we need now to have a
[96:16] bunch of data and a bunch of
[96:18] conversations that show the model by
[96:21] example how to use web search so what
[96:24] are the what are the settings where you
[96:25] are using the search um and what does
[96:28] that look like and here&#39;s by example how
[96:30] you start a search and the search Etc
[96:33] and uh if you have a few thousand maybe
[96:35] examples of that in your training set
[96:36] the model will actually do a pretty good
[96:38] job of understanding uh how this tool
[96:40] works and it will know how to sort of
[96:43] structure its queries and of course
[96:44] because of the pre-training data set and
[96:47] its understanding of the world it
[96:48] actually kind of understands what a web
[96:49] search is and so it actually kind of has
[96:51] a pretty good native understanding
[96:54] um of what kind of stuff is a good
[96:56] search query um and so it all kind of
[96:58] just like works you just need a little
[97:00] bit of a few examples to show it how to
[97:02] use this new tool and then it can lean
[97:04] on it to retrieve information and uh put
[97:07] it in the context window and that&#39;s
[97:08] equivalent to you and I looking
[97:10] something up because once it&#39;s in the
[97:12] context it&#39;s in the working memory and
[97:13] it&#39;s very easy to manipulate and access
[97:16] so that&#39;s what we saw a few minutes ago
[97:18] when I was searching on chat GPT for who
[97:20] is Orson kovats the chat GPT language
[97:23] model decided Ed that this is some kind
[97:24] of a rare um individual or something
[97:27] like that and instead of giving me an
[97:29] answer from its memory it decided that
[97:31] it will sample a special token that is
[97:33] going to do web search and we saw
[97:35] briefly something flash it was like
[97:36] using the web tool or something like
[97:38] that so it briefly said that and then we
[97:40] waited for like two seconds and then it
[97:41] generated this and you see how it&#39;s
[97:43] creating references here and so it&#39;s
[97:45] citing sources so what happened here is
[97:50] it went off it did a web web search it
[97:52] found these sources and these URLs and
[97:55] the text of these web pages was all
[97:58] stuffed in between here and it&#39;s not
[98:01] showing here but it&#39;s it&#39;s basically
[98:02] stuffed as text in between here and now
[98:06] it sees that text and now it kind of
[98:08] references it and says that okay it
[98:11] could be these people citation could be
[98:13] those people citation Etc so that&#39;s what
[98:15] happened here and that&#39;s what and that&#39;s
[98:17] why when I said who is Orson kovats I
[98:19] could also say don&#39;t use any tools and
[98:22] then that&#39;s enough to um
[98:24] basically convince chat PT to not use
[98:25] tools and just use its memory and its
[98:28] recollection I also went off and I um
[98:32] tried to ask this question of Chachi PT
[98:34] so how many standing cups did uh Dominic
[98:37] Hasek win and Chachi P actually decided
[98:39] that it knows the answer and it has the
[98:40] confidence to say that uh he want twice
[98:43] and so it kind of just relied on its
[98:45] memory because presumably it has um it
[98:49] has enough of
[98:50] a kind of confidence in its weights in
[98:53] it parameters and activations that this
[98:55] is uh retrievable just for memory um but
[98:59] you can also
[99:01] conversely use web search to make sure
[99:04] and then for the same query it actually
[99:06] goes off and it searches and then it
[99:07] finds a bunch of sources it finds all
[99:10] this all of this stuff gets copy pasted
[99:12] in there and then it tells us uh to
[99:15] again and sites and it actually says the
[99:17] Wikipedia article which is the source of
[99:20] this information for us as well so
[99:23] that&#39;s tools web search the model
[99:25] determines when to search and then uh
[99:27] that&#39;s kind of like how these tools uh
[99:29] work and this is an additional kind of
[99:32] mitigation for uh hallucinations and
[99:34] factuality so I want to stress one more
[99:37] time this very important sort of
[99:38] psychology
[99:40] Point knowledge in the parameters of the
[99:43] neural network is a vague recollection
[99:45] the knowledge in the tokens that make up
[99:47] the context
[99:48] window is the working memory and it
[99:51] roughly speaking Works kind of like um
[99:53] it works for us in our brain the stuff
[99:55] we remember is our parameters uh and the
[99:58] stuff that we just experienced like a
[100:01] few seconds or minutes ago and so on you
[100:03] can imagine that being in our context
[100:04] window and this context window is being
[100:05] built up as you have a conscious
[100:07] experience around you so this has a
[100:10] bunch of um implications also for your
[100:12] use of LOLs in practice so for example I
[100:15] can go to chat GPT and I can do
[100:17] something like this I can say can you
[100:18] Summarize chapter one of Jane Austin&#39;s
[100:20] Pride and Prejudice right and this is a
[100:22] perfectly fine prompt and Chach actually
[100:25] does something relatively reasonable
[100:26] here and but the reason it does that is
[100:28] because Chach has a pretty good
[100:30] recollection of a famous work like Pride
[100:32] and Prejudice it&#39;s probably seen a ton
[100:34] of stuff about it there&#39;s probably
[100:35] forums about this book it&#39;s probably
[100:37] read versions of this book um and it&#39;s
[100:40] kind of like remembers because even if
[100:43] you&#39;ve read this or articles about it
[100:46] you&#39;d kind of have a recollection enough
[100:48] to actually say all this but usually
[100:49] when I actually interact with LMS and I
[100:51] want them to recall specific things it
[100:53] always works better if you just give it
[100:55] to them so I think a much better prompt
[100:57] would be something like this can you
[100:59] summarize for me chapter one of genos&#39;s
[101:01] spr and Prejudice and then I am
[101:03] attaching it below for your reference
[101:04] and then I do something like a delimeter
[101:06] here and I paste it in and I I found
[101:08] that just copy pasting it from some
[101:10] website that I found here um so copy
[101:14] pasting the chapter one here and I do
[101:16] that because when it&#39;s in the context
[101:17] window the model has direct access to it
[101:20] and can exactly it doesn&#39;t have to
[101:22] recall it it just has access to it and
[101:24] so this summary is can be expected to be
[101:27] a significantly high quality or higher
[101:29] quality than this summary uh just
[101:31] because it&#39;s directly available to the
[101:32] model and I think you and I would work
[101:34] in the same way if you want to it would
[101:36] be you would produce a much better
[101:37] summary if you had reread this chapter
[101:40] before you had to summarize it and
[101:42] that&#39;s basically what&#39;s happening here
[101:44] or the equivalent of it the next sort of
[101:47] psychological Quirk I&#39;d like to talk
[101:48] about briefly is that of the knowledge
[101:50] of self so what I see very often on the
[101:52] internet is that people do something
[101:54] like this they ask llms something like
[101:56] what model are you and who built you and
[101:59] um basically this uh question is a
[102:01] little bit nonsensical and the reason I
[102:03] say that is that as I try to kind of
[102:05] explain with some of the underhood
[102:07] fundamentals this thing is not a person
[102:09] right it doesn&#39;t have a persistent
[102:11] existence in any way it sort of boots up
[102:14] processes tokens and shuts off and it
[102:17] does that for every single person it
[102:18] just kind of builds up a context window
[102:19] of conversation and then everything gets
[102:21] deleted and so this this entity is kind
[102:23] of like restarted from scratch every
[102:25] single conversation if that makes sense
[102:27] it has no persistent self it has no
[102:28] sense of self it&#39;s a token tumbler and
[102:31] uh it follows the statistical
[102:33] regularities of its training set so it
[102:35] doesn&#39;t really make sense to ask it who
[102:38] are you what build you Etc and by
[102:40] default if you do what I described and
[102:42] just by default and from nowhere you&#39;re
[102:44] going to get some pretty random answers
[102:46] so for example let&#39;s uh pick on Falcon
[102:48] which is a fairly old model and let&#39;s
[102:50] see what it tells
[102:51] us uh so it&#39;s evading the question uh
[102:55] talented engineers and developers here
[102:58] it says I was built by open AI based on
[102:59] the gpt3 model it&#39;s totally making stuff
[103:01] up now the fact that it&#39;s built by open
[103:04] AI here I think a lot of people would
[103:06] take this as evidence that this model
[103:07] was somehow trained on open AI data or
[103:09] something like that I don&#39;t actually
[103:10] think that that&#39;s necessarily true the
[103:12] reason for that is
[103:14] that if you don&#39;t explicitly program the
[103:17] model to answer these kinds of questions
[103:20] then what you&#39;re going to get is its
[103:22] statistical best guess at the answer and
[103:25] this model had a um sft data mixture of
[103:29] conversations and during the
[103:32] fine-tuning um the model sort of
[103:35] understands as it&#39;s training on this
[103:36] data that it&#39;s taking on this
[103:38] personality of this like helpful
[103:40] assistant and it doesn&#39;t know how to it
[103:42] doesn&#39;t actually it wasn&#39;t told exactly
[103:44] what label to apply to self it just kind
[103:47] of is taking on this uh this uh Persona
[103:50] of a helpful assistant and remember that
[103:53] the pre-training stage took the
[103:55] documents from the entire internet and
[103:57] Chach and open AI are very prominent in
[103:59] these documents and so I think what&#39;s
[104:01] actually likely to be happening here is
[104:03] that this is just its hallucinated label
[104:06] for what it is this is its self-identity
[104:08] is that it&#39;s chat GPT by open Ai and
[104:11] it&#39;s only saying that because there&#39;s a
[104:12] ton of data on the internet of um
[104:15] answers like this that are actually
[104:17] coming from open from chasht and So
[104:20] that&#39;s its label for what it is now you
[104:23] can override this as a developer if you
[104:25] have a llm model you can actually
[104:27] override it and there are a few ways to
[104:28] do that so for example let me show you
[104:31] there&#39;s this MMO model from Allen Ai and
[104:35] um this is one llm it&#39;s not a top tier
[104:37] LM or anything like that but I like it
[104:39] because it is fully open source so the
[104:41] paper for Almo and everything else is
[104:43] completely fully open source which is
[104:44] nice um so here we are looking at its
[104:47] sft mixture so this is the data mixture
[104:49] of um the fine tuning so this is the
[104:52] conversations data it right and so the
[104:54] way that they are solving it for Theo
[104:56] model is we see that there&#39;s a bunch of
[104:58] stuff in the mixture and there&#39;s a total
[104:59] of 1 million conversations here but here
[105:02] we have alot to hardcoded if we go there
[105:05] we see that this is 240
[105:07] conversations and look at these 240
[105:10] conversations they&#39;re hardcoded tell me
[105:12] about yourself says user and then the
[105:15] assistant says I&#39;m and open language
[105:17] model developed by AI to Allen Institute
[105:19] of artificial intelligence Etc I&#39;m here
[105:21] to help blah blah blah what is your name
[105:23] uh Theo project so these are all kinds
[105:26] of like cooked up hardcoded questions
[105:27] abouto 2 and the correct answers to give
[105:30] in these cases if you take 240 questions
[105:33] like this or conversations put them into
[105:35] your training set and fine tune with it
[105:37] then the model will actually be expected
[105:39] to parot this stuff later if you don&#39;t
[105:43] give it this then it&#39;s probably a Chach
[105:45] by open
[105:46] Ai and um there&#39;s one more way to
[105:49] sometimes do this is
[105:51] that basically um in these conversations
[105:55] and you have terms between human and
[105:56] assistant sometimes there&#39;s a special
[105:58] message called system message at the
[106:00] very beginning of the conversation so
[106:02] it&#39;s not just between human and
[106:03] assistant there&#39;s a system and in the
[106:05] system message you can actually hardcode
[106:07] and remind the model that hey you are a
[106:10] model developed by open Ai and your name
[106:13] is chashi pt40 and you were trained on
[106:16] this date and your knowledge cut off is
[106:18] this and basically it kind of like
[106:19] documents the model a little bit and
[106:21] then this is inserted into to your
[106:23] conversations so when you go on chpt you
[106:25] see a blank page but actually the system
[106:27] message is kind of like hidden in there
[106:28] and those tokens are in the context
[106:30] window and so those are the two ways to
[106:33] kind of um program the models to talk
[106:35] about themselves either it&#39;s done
[106:37] through uh data like this or it&#39;s done
[106:40] through system message and things like
[106:42] that basically invisible tokens that are
[106:44] in the context window and remind the
[106:45] model of its identity but it&#39;s all just
[106:47] kind of like cooked up and bolted on in
[106:50] some in some way it&#39;s not actually like
[106:51] really deeply there in any real sense as
[106:54] it would before a human I want to now
[106:57] continue to the next section which deals
[106:59] with the computational capabilities or
[107:01] like I should say the native
[107:02] computational capabilities of these
[107:03] models in problem solving scenarios and
[107:06] so in particular we have to be very
[107:07] careful with these models when we
[107:09] construct our examples of conversations
[107:11] and there&#39;s a lot of sharp edges here
[107:13] that are kind of like elucidative is
[107:15] that a word uh they&#39;re kind of like
[107:16] interesting to look at when we consider
[107:18] how these models think so um consider
[107:22] the following prompt from a human and
[107:24] supposed that basically that we are
[107:25] building out a conversation to enter
[107:27] into our training set of conversations
[107:29] so we&#39;re going to train the model on
[107:30] this we&#39;re teaching you how to basically
[107:32] solve simple math problems so the prompt
[107:34] is Emily buys three apples and two
[107:36] oranges each orange cost $2 the total
[107:38] cost is 13 what is the cost of apples
[107:41] very simple math question now there are
[107:43] two answers here on the left and on the
[107:45] right they are both correct answers they
[107:48] both say that the answer is three which
[107:49] is correct but one of these two is a
[107:52] significant ific anly better answer for
[107:54] the assistant than the other like if I
[107:56] was Data labeler and I was creating one
[107:57] of these one of these would be uh a
[108:01] really terrible answer for the assistant
[108:03] and the other would be okay and so I&#39;d
[108:05] like you to potentially pause the video
[108:07] Even and think through why one of these
[108:09] two is significantly better answer uh
[108:12] than the other and um if you use the
[108:14] wrong one your model will actually be uh
[108:17] really bad at math potentially and it
[108:19] would have uh bad outcomes and this is
[108:21] something that you would be careful with
[108:22] in your life labeling documentations
[108:23] when you are training people uh to
[108:25] create the ideal responses for the
[108:27] assistant okay so the key to this
[108:29] question is to realize and remember that
[108:32] when the models are training and also
[108:34] inferencing they are working in
[108:35] onedimensional sequence of tokens from
[108:37] left to right and this is the picture
[108:40] that I often have in my mind I imagine
[108:42] basically the token sequence evolving
[108:43] from left to right and to always produce
[108:46] the next token in a sequence we are
[108:48] feeding all these tokens into the neural
[108:50] network and this neural network then is
[108:53] the probabilities for the next token and
[108:54] sequence right so this picture here is
[108:56] the exact same picture we saw uh before
[108:58] up here and this comes from the web demo
[109:01] that I showed you before right so this
[109:04] is the calculation that basically takes
[109:05] the input tokens here on the top and uh
[109:09] performs these operations of all these
[109:11] neurons and uh gives you the answer for
[109:13] the probabilities of what comes next now
[109:15] the important thing to realize is that
[109:17] roughly
[109:19] speaking uh there&#39;s basically a finite
[109:21] number of layers of computation that
[109:22] happened here so for example this model
[109:25] here has only one two three layers of
[109:28] what&#39;s called detention and uh MLP here
[109:31] um maybe um typical modern
[109:34] state-of-the-art Network would have more
[109:36] like say 100 layers or something like
[109:37] that but there&#39;s only 100 layers of
[109:39] computation or something like that to go
[109:40] from the previous token sequence to the
[109:42] probabilities for the next token and so
[109:44] there&#39;s a finite amount of computation
[109:46] that happens here for every single token
[109:49] and you should think of this as a very
[109:50] small amount of computation and this
[109:52] amount of computation is almost roughly
[109:54] fixed uh for every single token in this
[109:57] sequence um the that&#39;s not actually
[109:59] fully true because the more tokens you
[110:01] feed in uh the the more expensive uh
[110:04] this forward pass will be of this neural
[110:06] network but not by much so you should
[110:09] think of this uh and I think as a good
[110:10] model to have in mind this is a fixed
[110:12] amount of compute that&#39;s going to happen
[110:13] in this box for every single one of
[110:15] these tokens and this amount of compute
[110:17] Cann possibly be too big because there&#39;s
[110:19] not that many layers that are sort of
[110:21] going from the top to bottom here
[110:23] there&#39;s not that that much
[110:24] computationally that will happen here
[110:26] and so you can&#39;t imagine the model to to
[110:27] basically do arbitrary computation in a
[110:29] single forward pass to get a single
[110:31] token and so what that means is that we
[110:34] actually have to distribute our
[110:35] reasoning and our computation across
[110:37] many tokens because every single token
[110:40] is only spending a finite amount of
[110:41] computation on it and so we kind of want
[110:45] to distribute the computation across
[110:47] many tokens and we can&#39;t have too much
[110:50] computation or expect too much
[110:52] computation out of of the model in any
[110:53] single individual token because there&#39;s
[110:55] only so much computation that happens
[110:57] per token okay roughly fixed amount of
[111:00] computation here
[111:02] so that&#39;s why this answer here is
[111:06] significantly worse and the reason for
[111:07] that is Imagine going from left to right
[111:09] here um and I copy pasted it right here
[111:13] the answer is three Etc imagine the
[111:16] model having to go from left to right
[111:17] emitting these tokens one at a time it
[111:19] has to say or we&#39;re expecting to say the
[111:23] answer is space dollar sign and then
[111:27] right here we&#39;re expecting it to
[111:28] basically cram all of the computation of
[111:30] this problem into this single token it
[111:32] has to emit the correct answer three and
[111:35] then once we&#39;ve emitted the answer three
[111:37] we&#39;re expecting it to say all these
[111:39] tokens but at this point we&#39;ve already
[111:41] prod produced the answer and it&#39;s
[111:43] already in the context window for all
[111:44] these tokens that follow so anything
[111:46] here is just um kind of post Hawk
[111:49] justification of why this is the answer
[111:52] um because the answer is already created
[111:53] it&#39;s already in the token window so it&#39;s
[111:56] it&#39;s not actually being calculated here
[111:58] um and so if you are answering the
[112:01] question directly and immediately you
[112:03] are training the model to to try to
[112:06] basically guess the answer in a single
[112:07] token and that is just not going to work
[112:10] because of the finite amount of
[112:11] computation that happens per token
[112:13] that&#39;s why this answer on the right is
[112:15] significantly better because we are
[112:17] Distributing this computation across the
[112:19] answer we&#39;re actually getting the model
[112:20] to sort of slowly come to the answer
[112:23] from the left to right we&#39;re getting
[112:24] intermediate results we&#39;re saying okay
[112:26] the total cost of oranges is four so 30
[112:28] - 4 is 9 and so we&#39;re creating
[112:32] intermediate calculations and each one
[112:34] of these calculations is by itself not
[112:36] that expensive and so we&#39;re actually
[112:38] basically kind of guessing a little bit
[112:40] the difficulty that the model is capable
[112:42] of in any single one of these individual
[112:44] tokens and there can never be too much
[112:47] work in any one of these tokens
[112:49] computationally because then the model
[112:50] won&#39;t be able to do that later at test
[112:52] time and so we&#39;re teaching the model
[112:55] here to spread out its reasoning and to
[112:57] spread out its computation over the
[112:59] tokens and in this way it only has very
[113:02] simple problems in each token and they
[113:05] can add up and then by the time it&#39;s
[113:07] near the end it has all the previous
[113:09] results in its working memory and it&#39;s
[113:11] much easier for it to determine that the
[113:13] answer is and here it is three so this
[113:15] is a significantly better label for our
[113:18] computation this would be really bad and
[113:20] is teaching the model to try to do all
[113:23] the computation in a single token and
[113:24] it&#39;s really
[113:25] bad so uh that&#39;s kind of like an
[113:28] interesting thing to keep in mind is in
[113:30] your
[113:31] prompts uh usually don&#39;t have to think
[113:33] about it explicitly because uh the
[113:36] people at open AI have labelers and so
[113:38] on that actually worry about this and
[113:40] they make sure that the answers are
[113:41] spread out and so actually open AI will
[113:43] kind of like do the right thing so when
[113:45] I ask this question for chat GPT it&#39;s
[113:48] actually going to go very slowly it&#39;s
[113:49] going to be like okay let&#39;s define our
[113:50] variables set up the equation
[113:52] and it&#39;s kind of creating all these
[113:54] intermediate results these are not for
[113:56] you these are for the model if the model
[113:58] is not creating these intermediate
[113:59] results for itself it&#39;s not going to be
[114:01] able to reach three I also wanted to
[114:04] show you that it&#39;s possible to be a bit
[114:06] mean to the model uh we can just ask for
[114:08] things so as an example I said I gave it
[114:10] the exact same uh prompt and I said
[114:13] answer the question in a single token
[114:15] just immediately give me the answer
[114:16] nothing else and it turns out that for
[114:18] this simple um prompt here it actually
[114:21] was able to do it in single go so it
[114:23] just created a single I think this is
[114:25] two tokens right uh because the dollar
[114:27] sign is its own token so basically this
[114:30] model didn&#39;t give me a single token it
[114:31] gave me two tokens but it still produced
[114:33] the correct answer and it did that in a
[114:35] single forward pass of the
[114:37] network now that&#39;s because the numbers
[114:40] here I think are very simple and so I
[114:41] made it a bit more difficult to be a bit
[114:43] mean to the model so I said Emily buys
[114:45] 23 apples and 177 oranges and then I
[114:48] just made the numbers a bit bigger and
[114:50] I&#39;m just making it harder for the model
[114:51] I&#39;m asking it to more computation in a
[114:53] single token and so I said the same
[114:55] thing and here it gave me five and five
[114:58] is actually not correct so the model
[115:00] failed to do all of this calculation in
[115:02] a single forward pass of the network it
[115:04] failed to go from the input tokens and
[115:07] then in a single forward pass of the
[115:09] network single go through the network it
[115:11] couldn&#39;t produce the result and then I
[115:13] said okay now don&#39;t worry about the the
[115:16] token limit and just solve the problem
[115:18] as usual and then it goes all the
[115:20] intermediate results it simplifies and
[115:22] every one of these intermediate results
[115:24] here and intermediate calculations is
[115:26] much easier for the model and um it sort
[115:29] of it&#39;s not too much work per token all
[115:32] of the tokens here are correct and it
[115:33] arises the solution which is seven and I
[115:36] just couldn&#39;t squeeze all of this work
[115:38] it couldn&#39;t squeeze that into a single
[115:39] forward passive Network so I think
[115:41] that&#39;s kind of just a cute example and
[115:43] something to kind of like think about
[115:45] and I think it&#39;s kind of again just
[115:46] elucidative in terms of how these uh
[115:48] models work the last thing that I would
[115:50] say on this topic is that if I was in
[115:52] practi is trying to actually solve this
[115:53] in my day-to-day life I might actually
[115:55] not uh trust that the model that all the
[115:57] intermediate calculations correctly here
[115:59] so actually probably what I do is
[116:01] something like this I would come here
[116:02] and I would say use code and uh that&#39;s
[116:06] because code is one of the possible
[116:08] tools that chachy PD can use and instead
[116:11] of it having to do mental arithmetic
[116:14] like this mental arithmetic here I don&#39;t
[116:15] fully trust it and especially if the
[116:17] numbers get really big there&#39;s no
[116:19] guarantee that the model will do this
[116:20] correctly any one of these intermediates
[116:22] steps might in principle fail we&#39;re
[116:24] using neural networks to do mental
[116:26] arithmetic uh kind of like you doing
[116:27] mental arithmetic in your brain it might
[116:30] just like uh screw up some of the
[116:31] intermediate results it&#39;s actually kind
[116:32] of amazing that it can even do this kind
[116:34] of mental arithmetic I don&#39;t think I
[116:35] could do this in my head but basically
[116:37] the model is kind of like doing it in
[116:38] its head and I don&#39;t trust that so I
[116:40] wanted to use tools so you can say stuff
[116:42] like use
[116:43] code and uh I&#39;m not sure what happened
[116:47] there use
[116:50] code and so um like I mentioned there&#39;s
[116:53] a special tool and the uh the model can
[116:55] write code and I can inspect that this
[116:58] code is correct and then uh it&#39;s not
[117:01] relying on its mental arithmetic it is
[117:03] using the python interpreter which is a
[117:05] very simple programming language to
[117:07] basically uh write out the code that
[117:08] calculates the result and I would
[117:10] personally trust this a lot more because
[117:12] this came out of a Python program which
[117:14] I think has a lot more correctness
[117:15] guarantees than the mental arithmetic of
[117:17] a language model uh so just um another
[117:21] kind of uh potential hint that if you
[117:23] have these kinds of problems uh you may
[117:24] want to basically just uh ask the model
[117:26] to use the code interpreter and just
[117:28] like we saw with the web search the
[117:30] model has special uh kind of tokens for
[117:34] calling uh like it will not actually
[117:36] generate these tokens from the language
[117:38] model it will write the program and then
[117:40] it actually sends that program to a
[117:42] different sort of part of the computer
[117:44] that actually just runs that program and
[117:46] brings back the result and then the
[117:48] model gets access to that result and can
[117:50] tell you that okay the cost of each
[117:51] apple is seven
[117:53] um so that&#39;s another kind of tool and I
[117:55] would use this in practice for yourself
[117:57] and it&#39;s um yeah it&#39;s just uh less error
[118:01] prone I would say so that&#39;s why I called
[118:03] this section models need tokens to think
[118:06] distribute your competition across many
[118:08] tokens ask models to create intermediate
[118:10] results or whenever you can lean on
[118:13] tools and Tool use instead of allowing
[118:15] the models to do all of the stuff in
[118:17] their memory so if they try to do it all
[118:18] in their memory I don&#39;t fully trust it
[118:21] and prefer to use tools whenever
[118:22] possible I want to show you one more
[118:24] example of where this actually comes up
[118:26] and that&#39;s in counting so models
[118:28] actually are not very good at counting
[118:30] for the exact same reason you&#39;re asking
[118:32] for way too much in a single individual
[118:34] token so let me show you a simple
[118:36] example of that um how many dots are
[118:38] below and then I just put in a bunch of
[118:41] dots and Chach says there are and then
[118:44] it just tries to solve the problem in a
[118:46] single token so in a single token it has
[118:49] to count the number of dots in its
[118:51] context window
[118:53] um and it has to do that in the single
[118:55] forward pass of a network and a single
[118:57] forward pass of a network as we talked
[118:58] about there&#39;s not that much computation
[119:00] that can happen there just think of that
[119:01] as being like very little competation
[119:03] that happens there so if I just look at
[119:06] what the model sees let&#39;s go to the LM
[119:09] go to tokenizer it sees uh
[119:13] this how many dots are below and then it
[119:15] turns out that these dots here this
[119:17] group of I think 20 dots is a single
[119:20] token and then this group of whatever it
[119:22] is is another token and then for some
[119:25] reason they break up as this so I don&#39;t
[119:28] actually this has to do with the details
[119:29] of the tokenizer but it turns out that
[119:31] these um the model basically sees the
[119:34] token ID this this this and so on and
[119:38] then from these token IDs it&#39;s expected
[119:40] to count the number and spoiler alert is
[119:43] not 161 it&#39;s actually I believe
[119:45] 177 so here&#39;s what we can do instead uh
[119:48] we can say use code and you might expect
[119:51] that like why should this work and it&#39;s
[119:54] actually kind of subtle and kind of
[119:55] interesting so when I say use code I
[119:57] actually expect this to work let&#39;s see
[119:59] okay 177 is correct so what happens here
[120:02] is I&#39;ve actually it doesn&#39;t look like it
[120:04] but I&#39;ve broken down the problem into a
[120:08] problems that are easier for the model I
[120:10] know that the model can&#39;t count it can&#39;t
[120:12] do mental counting but I know that the
[120:14] model is actually pretty good at doing
[120:15] copy pasting so what I&#39;m doing here is
[120:18] when I say use code it creates a string
[120:20] in Python for this and the task of
[120:23] basically copy pasting my input here to
[120:27] here is very simple because for the
[120:29] model um it sees this string of uh it
[120:33] sees it as just these four tokens or
[120:35] whatever it is so it&#39;s very simple for
[120:37] the model to copy paste those token IDs
[120:40] and um kind of unpack them into Dots
[120:45] here and so it creates this string and
[120:47] then it calls python routine. count and
[120:50] then it comes up with the correct answer
[120:52] so the python interpreter is doing the
[120:53] counting it&#39;s not the models mental
[120:55] arithmetic doing the counting so it&#39;s
[120:57] again a simple example of um models need
[121:00] tokens to think don&#39;t rely on their
[121:02] mental arithmetic and um that&#39;s why also
[121:05] the models are not very good at counting
[121:07] if you need them to do counting tasks
[121:08] always ask them to lean on the tool now
[121:11] the models also have many other little
[121:13] cognitive deficits here and there and
[121:15] these are kind of like sharp edges of
[121:16] the technology to be kind of aware of
[121:18] over time so as an example the models
[121:20] are not very good with all kinds of
[121:22] spelling related tasks they&#39;re not very
[121:24] good at it and I told you that we would
[121:26] loop back around to tokenization and the
[121:29] reason to do for this is that the models
[121:31] they don&#39;t see the characters they see
[121:33] tokens and they their entire world is
[121:35] about tokens which are these little text
[121:37] chunks and so they don&#39;t see characters
[121:39] like our eyes do and so very simple
[121:41] character level tasks often fail so for
[121:45] example uh I&#39;m giving it a string
[121:47] ubiquitous and I&#39;m asking it to print
[121:49] only every third character starting with
[121:51] the first one so we start with U and
[121:54] then we should go every third so every
[121:56] so 1 2 3 Q should be next and then Etc
[122:01] so this I see is not correct and again
[122:03] my hypothesis is that this is again
[122:05] Dental arithmetic here is failing number
[122:08] one a little bit but number two I think
[122:10] the the more important issue here is
[122:12] that if you go to Tik
[122:13] tokenizer and you look at ubiquitous we
[122:16] see that it is three tokens right so you
[122:19] and I see ubiquitous and we can easily
[122:21] access the individual letters because we
[122:23] kind of see them and when we have it in
[122:25] the working memory of our visual sort of
[122:27] field we can really easily index into
[122:29] every third letter and I can do that
[122:31] task but the models don&#39;t have access to
[122:33] the individual letters they see this as
[122:35] these three tokens and uh remember these
[122:38] models are trained from scratch on the
[122:39] internet and all these token uh
[122:42] basically the model has to discover how
[122:44] many of all these different letters are
[122:45] packed into all these different tokens
[122:47] and the reason we even use tokens is
[122:49] mostly for efficiency uh but I think a
[122:51] lot of people areed interested to delete
[122:52] tokens entirely like we should really
[122:54] have character level or bite level
[122:56] models it&#39;s just that that would create
[122:58] very long sequences and people don&#39;t
[122:59] know how to deal with that right now so
[123:01] while we have the token World any kind
[123:03] of spelling tasks are not actually
[123:05] expected to work super well so because I
[123:07] know that spelling is not a strong suit
[123:09] because of tokenization I can again Ask
[123:11] it to lean On Tools so I can just say
[123:13] use code and I would again expect this
[123:16] to work because the task of copy pasting
[123:18] ubiquitous into the python interpreter
[123:20] is much easier and then we&#39;re leaning on
[123:22] python interpreter to manipulate the
[123:25] characters of this string so when I say
[123:27] use
[123:28] code
[123:30] ubiquitous yes it indexes into every
[123:32] third character and the actual truth is
[123:35] u2s
[123:36] uqs uh which looks correct to me so um
[123:41] again an example of spelling related
[123:42] tasks not working very well a very
[123:44] famous example of that recently is how
[123:47] many R are there in strawberry and this
[123:49] went viral many times and basically the
[123:51] models now get it correct they say there
[123:53] are three Rs in Strawberry but for a
[123:55] very long time all the state-of-the-art
[123:56] models would insist that there are only
[123:58] two RS in strawberry and this caused a
[124:00] lot of you know Ruckus because is that a
[124:03] word I think so because um it just kind
[124:06] of like why are the models so brilliant
[124:08] and they can solve math Olympiad
[124:10] questions but they can&#39;t like count RS
[124:12] in strawberry and the answer for that
[124:14] again is I&#39;ve got built up to it kind of
[124:16] slowly but number one the models don&#39;t
[124:18] see characters they see tokens and
[124:20] number two they are not very good at
[124:22] counting and so here we are combining
[124:25] the difficulty of seeing the characters
[124:27] with the difficulty of counting and
[124:29] that&#39;s why the models struggled with
[124:30] this even though I think by now honestly
[124:33] I think open I may have hardcoded the
[124:34] answer here or I&#39;m not sure what they
[124:35] did but um uh but this specific query
[124:39] now works
[124:41] so models are not very good at spelling
[124:44] and there there&#39;s a bunch of other
[124:45] little sharp edges and I don&#39;t want to
[124:46] go into all of them I just want to show
[124:48] you a few examples of things to be aware
[124:50] of and uh when you&#39;re using these models
[124:52] in practice I don&#39;t actually want to
[124:54] have a comprehensive analysis here of
[124:55] all the ways that the models are kind of
[124:57] like falling short I just want to make
[124:59] the point that there are some Jagged
[125:01] edges here and there and we&#39;ve discussed
[125:03] a few of them and a few of them make
[125:05] sense but some of them also will just
[125:06] not make as much sense and they&#39;re kind
[125:08] of like you&#39;re left scratching your head
[125:10] even if you understand in- depth how
[125:11] these models work and and good example
[125:14] of that recently is the following uh the
[125:16] models are not very good at very simple
[125:17] questions like this and uh this is
[125:20] shocking to a lot of people because
[125:22] these math uh these problems can solve
[125:23] complex math problems they can answer
[125:25] PhD grade physics chemistry biology
[125:28] questions much better than I can but
[125:30] sometimes they fall short in like super
[125:31] simple problems like this so here we go
[125:34] 9.11 is bigger than 9.9 and it justifies
[125:38] it in some way but obviously and then at
[125:40] the end okay it actually it flips its
[125:44] decision later so um I don&#39;t believe
[125:47] that this is very reproducible sometimes
[125:49] it flips around its answer sometimes
[125:50] gets it right sometimes get it get it
[125:52] wrong uh let&#39;s try
[125:56] again okay even though it might look
[125:59] larger okay so here it doesn&#39;t even
[126:01] correct itself in the end if you ask
[126:03] many times sometimes it gets it right
[126:04] too but how is it that the model can do
[126:07] so great at Olympiad grade problems but
[126:10] then fail on very simple problems like
[126:12] this and uh I think this one is as I
[126:15] mentioned a little bit of a head
[126:16] scratcher it turns out that a bunch of
[126:18] people studied this in depth and I
[126:19] haven&#39;t actually read the paper uh but
[126:22] what I was told by this team was that
[126:24] when you scrutinize the activations
[126:27] inside the neural network when you look
[126:29] at some of the features and what what
[126:31] features turn on or off and what neurons
[126:33] turn on or off uh a bunch of neurons
[126:35] inside the neural network light up that
[126:37] are usually associated with Bible verses
[126:40] U and so I think the model is kind of
[126:42] like reminded that these almost look
[126:44] like Bible verse markers and in a bip
[126:48] verse setting 9.11 would come after 99.9
[126:52] and so basically the model somehow finds
[126:53] it like cognitively very distracting
[126:56] that in Bible verses 9.11 would be
[126:58] greater um even though here it&#39;s
[127:00] actually trying to justify it and come
[127:02] up to the answer with a math it still
[127:04] ends up with the wrong answer here so it
[127:07] basically just doesn&#39;t fully make sense
[127:08] and it&#39;s not fully understood and um
[127:12] there&#39;s a few Jagged issues like that so
[127:14] that&#39;s why treat this as a as what it is
[127:17] which is a St stochastic system that is
[127:19] really magical but that you can&#39;t also
[127:21] fully trust and you want to use it as a
[127:23] tool not as something that you kind of
[127:25] like letter rip on a problem and
[127:27] copypaste the results okay so we have
[127:29] now covered two major stages of training
[127:32] of large language models we saw that in
[127:34] the first stage this is called the
[127:36] pre-training stage we are basically
[127:38] training on internet documents and when
[127:40] you train a language model on internet
[127:42] documents you get what&#39;s called a base
[127:44] model and it&#39;s basically an internet
[127:45] document simulator right now we saw that
[127:48] this is an interesting artifact and uh
[127:51] this takes many months to train on
[127:53] thousands of computers and it&#39;s kind of
[127:54] a lossy compression of the internet and
[127:57] it&#39;s extremely interesting but it&#39;s not
[127:58] directly useful because we don&#39;t want to
[128:00] sample internet documents we want to ask
[128:02] questions of an AI and have it respond
[128:05] to our questions so for that we need an
[128:07] assistant and we saw that we can
[128:09] actually construct an assistant in the
[128:11] process of a post
[128:13] training and specifically in the process
[128:16] of supervised fine-tuning as we call
[128:19] it so in this stage we saw that it&#39;s
[128:22] algorithmically identical to
[128:24] pre-training nothing is going to change
[128:25] the only thing that changes is the data
[128:27] set so instead of Internet documents we
[128:30] now want to create and curate a very
[128:32] nice data set of conversations so we
[128:35] want Millions conversations on all kinds
[128:38] of diverse topics between a human and an
[128:41] assistant and fundamentally these
[128:44] conversations are created by humans so
[128:47] humans write the prompts and humans
[128:49] write the ideal response responses and
[128:52] they do that based on labeling
[128:54] documentations now in the modern stack
[128:57] it&#39;s not actually done fully and
[128:59] manually by humans right they actually
[129:00] now have a lot of help from these tools
[129:02] so we can use language models um to help
[129:05] us create these data sets and that&#39;s
[129:07] done extensively but fundamentally it&#39;s
[129:09] all still coming from Human curation at
[129:10] the end so we create these conversations
[129:13] that now becomes our data set we fine
[129:15] tune on it or continue training on it
[129:17] and we get an assistant and then we kind
[129:20] of shifted gears and started talking
[129:21] about some of the kind of cognitive
[129:22] implications of what this assistant is
[129:24] like and we saw that for example the
[129:26] assistant will hallucinate if you don&#39;t
[129:29] take some sort of mitigations towards it
[129:32] so we saw that hallucinations would be
[129:34] common and then we looked at some of the
[129:35] mitigations of those hallucinations and
[129:38] then we saw that the models are quite
[129:39] impressive and can do a lot of stuff in
[129:40] their head but we saw that they can also
[129:43] Lean On Tools to become better so for
[129:45] example we can lo lean on a web search
[129:48] in order to hallucinate less and to
[129:50] maybe bring up some more um recent
[129:53] information or something like that or we
[129:54] can lean on tools like code interpreter
[129:57] so the code can so the llm can write
[129:59] some code and actually run it and see
[130:00] the
[130:01] results so these are some of the topics
[130:03] we looked at so far um now what I&#39;d like
[130:06] to do is I&#39;d like to cover the last and
[130:09] major stage of this Pipeline and that is
[130:12] reinforcement learning so reinforcement
[130:15] learning is still kind of thought to be
[130:16] under the umbrella of posttraining uh
[130:19] but it is the last third major stage and
[130:22] it&#39;s a different way of training
[130:24] language models and usually follows as
[130:26] this third step so inside companies like
[130:29] open AI you will start here and these
[130:31] are all separate teams so there&#39;s a team
[130:33] doing data for pre-training and a team
[130:35] doing training for pre-training and then
[130:37] there&#39;s a team doing all the
[130:39] conversation generation in a in a
[130:42] different team that is kind of doing the
[130:44] supervis fine tuning and there will be a
[130:45] team for the reinforcement learning as
[130:47] well so it&#39;s kind of like a handoff of
[130:49] these models you get your base model the
[130:51] then you find you need to be an
[130:52] assistant and then you go into
[130:53] reinforcement learning which we&#39;ll talk
[130:55] about uh
[130:56] now so that&#39;s kind of like the major
[130:58] flow and so let&#39;s now focus on
[131:01] reinforcement learning the last major
[131:03] stage of training and let me first
[131:05] actually motivate it and why we would
[131:07] want to do reinforcement learning and
[131:09] what it looks like on a high level so I
[131:11] would now like to try to motivate the
[131:12] reinforcement learning stage and what it
[131:13] corresponds to with something that
[131:15] you&#39;re probably familiar with and that
[131:16] is basically going to school so just
[131:19] like you went to school to become um
[131:21] really good at something we want to take
[131:23] large language models through school and
[131:25] really what we&#39;re doing is um we&#39;re um
[131:29] we have a few paradigms of ways of uh
[131:32] giving them knowledge or transferring
[131:33] skills so in particular when we&#39;re
[131:36] working with textbooks in school you&#39;ll
[131:38] see that there are three major kind of
[131:40] uh pieces of information in these
[131:42] textbooks three classes of information
[131:45] the first thing you&#39;ll see is you&#39;ll see
[131:46] a lot of exposition um and by the way
[131:49] this is a totally random book I pulled
[131:50] from the internet I I think it&#39;s some
[131:51] kind of an organic chemistry or
[131:53] something I&#39;m not sure uh but the
[131:55] important thing is that you&#39;ll see that
[131:56] most of the text most of it is kind of
[131:58] just like the meat of it is exposition
[132:00] it&#39;s kind of like background knowledge
[132:02] Etc as you are reading through the words
[132:05] of this Exposition you can think of that
[132:08] roughly as training on that data so um
[132:12] and that&#39;s why when you&#39;re reading
[132:13] through this stuff this background
[132:14] knowledge and this all this context
[132:16] information it&#39;s kind of equivalent to
[132:18] pre-training so it&#39;s it&#39;s where we build
[132:21] sort of like a knowledge base of this
[132:23] data and get a sense of the topic the
[132:27] next major kind of information that you
[132:28] will see is these uh problems and with
[132:32] their worked Solutions so basically a
[132:35] human expert in this case uh the author
[132:37] of this book has given us not just a
[132:39] problem but has also worked through the
[132:41] solution and the solution is basically
[132:43] like equivalent to having like this
[132:45] ideal response for an assistant so it&#39;s
[132:48] basically the expert is showing us how
[132:49] to solve the problem in it&#39;s uh kind of
[132:52] like um in its full form so as we are
[132:55] reading the solution we are basically
[132:57] training on the expert data and then
[133:01] later we can try to imitate the expert
[133:03] um and basically um that&#39;s that roughly
[133:07] correspond to having the sft model
[133:08] that&#39;s what it would be doing so
[133:11] basically we&#39;ve already done
[133:12] pre-training and we&#39;ve already covered
[133:14] this um imitation of experts and how
[133:17] they solve these problems and the third
[133:19] stage of reinforcement learning is
[133:21] basically the practice problems so
[133:24] sometimes you&#39;ll see this is just a
[133:25] single practice problem here but of
[133:27] course there will be usually many
[133:28] practice problems at the end of each
[133:30] chapter in any textbook and practice
[133:32] problems of course we know are critical
[133:34] for learning because what are they
[133:36] getting you to do they&#39;re getting you to
[133:37] practice uh to practice yourself and
[133:39] discover ways of solving these problems
[133:42] yourself and so what you get in a
[133:44] practice problem is you get a problem
[133:46] description but you&#39;re not given the
[133:48] solution but you are given the final
[133:50] answer answer usually in the answer key
[133:53] of the textbook and so you know the
[133:55] final answer that you&#39;re trying to get
[133:56] to and you have the problem statement
[133:58] but you don&#39;t have the solution you are
[134:00] trying to practice the solution you&#39;re
[134:02] trying out many different things and
[134:04] you&#39;re seeing what gets you to the final
[134:07] solution the best and so you&#39;re
[134:09] discovering how to solve these problems
[134:11] so and in the process of that you&#39;re
[134:13] relying on number one the background
[134:14] information which comes from
[134:15] pre-training and number two maybe a
[134:17] little bit of imitation of human experts
[134:20] and you can probably try similar kinds
[134:22] of solutions and so on so we&#39;ve done
[134:25] this and this and now in this section
[134:27] we&#39;re going to try to practice and so
[134:30] we&#39;re going to be given prompts we&#39;re
[134:32] going to be given Solutions U sorry the
[134:34] final answers but we&#39;re not going to be
[134:36] given expert Solutions we have to
[134:38] practice and try stuff out and that&#39;s
[134:40] what reinforcement learning is about
[134:43] okay so let&#39;s go back to the problem
[134:44] that we worked with previously just so
[134:46] we have a concrete example to talk
[134:47] through as we explore sort of the topic
[134:50] here so um I&#39;m here in the Teck
[134:52] tokenizer because I&#39;d also like to well
[134:55] I get a text box which is useful but
[134:57] number two I want to remind you again
[134:59] that we&#39;re always working with
[134:59] onedimensional token sequences and so um
[135:02] I actually like prefer this view because
[135:04] this is like the native view of the llm
[135:06] if that makes sense like this is what it
[135:08] actually sees it sees token IDs right
[135:11] okay so Emily buys three apples and two
[135:14] oranges each orange is $2 the total cost
[135:17] of all the fruit is $13 what is the cost
[135:19] of each apple
[135:21] and what I&#39;d like to what I like you to
[135:23] appreciate here is these are like four
[135:26] possible candidate Solutions as an
[135:29] example and they all reach the answer
[135:31] three now what I&#39;d like you to
[135:33] appreciate at this point is that if I am
[135:35] the human data labeler that is creating
[135:37] a conversation to be entered into the
[135:39] training set I don&#39;t actually really
[135:42] know which of these
[135:44] conversations to um to add to the data
[135:48] set some of these conversations kind of
[135:50] set up a system equations some of them
[135:52] sort of like just talk through it in
[135:54] English and some of them just kind of
[135:55] like skip right through to the
[135:58] solution um if you look at chbt for
[136:00] example and you give it this question it
[136:03] defines a system of variables and it
[136:05] kind of like does this little thing what
[136:07] we have to appreciate and uh
[136:08] differentiate between though is um the
[136:12] first purpose of a solution is to reach
[136:14] the right answer of course we want to
[136:15] get the final answer three that is the
[136:17] that is the important purpose here but
[136:19] there&#39;s kind of like a secondary purpose
[136:21] as well where here we are also just kind
[136:23] of trying to make it like nice uh for
[136:26] the human because we&#39;re kind of assuming
[136:27] that the person wants to see the
[136:29] solution they want to see the
[136:30] intermediate steps we want to present it
[136:31] nicely Etc so there are two separate
[136:33] things going on here number one is the
[136:36] presentation for the human but number
[136:37] two we&#39;re trying to actually get the
[136:38] right answer um so let&#39;s for the moment
[136:42] focus on just reaching the final answer
[136:44] if we&#39;re only care if we only care about
[136:46] the final answer then which of these is
[136:49] the optimal or the best prompt um sorry
[136:53] the best solution for the llm to reach
[136:56] the right
[136:57] answer um and what I&#39;m trying to get at
[137:00] is we don&#39;t know me as a human labeler I
[137:03] would not know which one of these is
[137:04] best so as an example we saw earlier on
[137:07] when we looked at
[137:09] um the token sequences here and the
[137:11] mental arithmetic and reasoning we saw
[137:14] that for each token we can only spend
[137:15] basically a finite number of finite
[137:18] amount of compute here that is not very
[137:19] large or you should think about it that
[137:20] way way and so we can&#39;t actually make
[137:23] too big of a leap in any one token is is
[137:26] maybe the way to think about it so as an
[137:28] example in this one what&#39;s really nice
[137:30] about it is that it&#39;s very few tokens so
[137:32] it&#39;s going to take us very short amount
[137:34] of time to get to the answer but right
[137:37] here when we&#39;re doing 30 - 4 IDE 3
[137:39] equals right in this token here we&#39;re
[137:42] actually asking for a lot of computation
[137:44] to happen on that single individual
[137:45] token and so maybe this is a bad example
[137:48] to give to the llm because it&#39;s kind of
[137:49] incentivizing it to skip through the
[137:50] calculations very quickly and it&#39;s going
[137:52] to actually make up mistakes make
[137:54] mistakes in this mental arithmetic uh so
[137:56] maybe it would work better to like
[137:58] spread out the spread it out more maybe
[138:01] it would be better to set it up as an
[138:02] equation maybe it would be better to
[138:04] talk through it we fundamentally don&#39;t
[138:06] know and we don&#39;t know because what is
[138:09] easy for you or I as or as human
[138:12] labelers what&#39;s easy for us or hard for
[138:14] us is different than what&#39;s easy or hard
[138:16] for the llm it cognition is different um
[138:20] and the token sequences are kind of like
[138:23] different hard for it and so some of the
[138:27] token sequences here that are trivial
[138:30] for me might be um very too much of a
[138:33] leap for the llm so right here this
[138:36] token would be way too hard but
[138:38] conversely many of the tokens that I&#39;m
[138:40] creating here might be just trivial to
[138:43] the llm and we&#39;re just wasting tokens
[138:45] like why waste all these tokens when
[138:46] this is all trivial so if the only thing
[138:49] we care care about is the final answer
[138:51] and we&#39;re separating out the issue of
[138:53] the presentation to the human um then we
[138:56] don&#39;t actually really know how to
[138:57] annotate this example we don&#39;t know what
[138:59] solution to get to the llm because we
[139:01] are not the
[139:02] llm and it&#39;s clear here in the case of
[139:05] like the math example but this is
[139:07] actually like a very pervasive issue
[139:08] like for our knowledge is not lm&#39;s
[139:11] knowledge like the llm actually has a
[139:13] ton of knowledge of PhD in math and
[139:15] physics chemistry and whatnot so in many
[139:17] ways it actually knows more than I do
[139:19] and I&#39;m I&#39;m potentially not utilizing
[139:21] that knowledge in its problem solving
[139:24] but conversely I might be injecting a
[139:26] bunch of knowledge in my solutions that
[139:28] the LM doesn&#39;t know in its parameters
[139:31] and then those are like sudden leaps
[139:33] that are very confusing to the model and
[139:36] so our cognitions are different and I
[139:38] don&#39;t really know what to put here if
[139:41] all we care about is the reaching the
[139:42] final solution and doing it economically
[139:45] ideally and so long story short we are
[139:49] not in a good position to create these
[139:52] uh token sequences for the LM and
[139:55] they&#39;re useful by imitation to
[139:56] initialize the system but we really want
[139:59] the llm to discover the token sequences
[140:01] that work for it we need to find it
[140:04] needs to find for itself what token
[140:06] sequence reliably gets to the answer
[140:09] given the prompt and it needs to
[140:11] discover that in the process of
[140:12] reinforcement learning and of trial and
[140:14] error so let&#39;s see how this example
[140:18] would work like in reinforcement
[140:19] learning
[140:21] okay so we&#39;re now back in the huging
[140:23] face inference playground and uh that
[140:26] just allows me to very easily call uh
[140:28] different kinds of models so as an
[140:29] example here on the top right I chose
[140:31] the Gemma 2 2 billion parameter model so
[140:34] two billion is very very small so this
[140:36] is a tiny model but it&#39;s okay so we&#39;re
[140:39] going to give it um the way that
[140:40] reinforcement learning will basically
[140:41] work is actually quite quite simple um
[140:44] we need to try many different kinds of
[140:47] solutions and we want to see which
[140:49] Solutions work well or not
[140:51] so we&#39;re basically going to take the
[140:53] prompt we&#39;re going to run the
[140:55] model and the model generates a solution
[140:58] and then we&#39;re going to inspect the
[140:59] solution and we know that the correct
[141:02] answer for this one is $3 and so indeed
[141:05] the model gets it correct it says it&#39;s
[141:06] $3 so this is correct so that&#39;s just one
[141:10] attempt at DIS solution so now we&#39;re
[141:11] going to delete this and we&#39;re going to
[141:13] rerun it again let&#39;s try a second
[141:15] attempt so the model solves it in a bit
[141:17] slightly different way right every
[141:19] single attempt will be a different
[141:21] generation because these models are
[141:23] stochastic systems remember that at
[141:24] every single token here we have a
[141:26] probability distribution and we&#39;re
[141:27] sampling from that distribution so we
[141:29] end up kind kind of going down slightly
[141:31] different paths and so this is a second
[141:34] solution that also ends in the correct
[141:36] answer now we&#39;re going to delete that
[141:38] let&#39;s go a third
[141:39] time okay so again slightly different
[141:42] solution but also gets it
[141:44] correct now we can actually repeat this
[141:46] uh many times and so in practice you
[141:49] might actually sample thousand of
[141:51] independent Solutions or even like
[141:52] million solutions for just a single
[141:55] prompt um and some of them will be
[141:57] correct and some of them will not be
[141:58] very correct and basically what we want
[142:00] to do is we want to encourage the
[142:02] solutions that lead to correct answers
[142:05] so let&#39;s take a look at what that looks
[142:06] like so if we come back over here here&#39;s
[142:09] kind of like a cartoon diagram of what
[142:10] this is looking like we have a prompt
[142:13] and then we tried many different
[142:15] solutions in
[142:16] parallel and some of the solutions um
[142:19] might go well so they get the right
[142:21] answer which is in green and some of the
[142:24] solutions might go poorly and may not
[142:25] reach the right answer which is red now
[142:28] this problem here unfortunately is not
[142:29] the best example because it&#39;s a trivial
[142:32] prompt and as we saw uh even like a two
[142:34] billion parameter model always gets it
[142:36] right so it&#39;s not the best example in
[142:38] that sense but let&#39;s just exercise some
[142:40] imagination here and let&#39;s just suppose
[142:43] that the um green ones are good and the
[142:47] red ones are
[142:48] bad okay so we generated 15 Solutions
[142:52] only four of them got the right answer
[142:54] and so now what we want to do is
[142:56] basically we want to encourage the kinds
[142:58] of solutions that lead to right answers
[143:00] so whatever token sequences happened in
[143:03] these red Solutions obviously something
[143:05] went wrong along the way somewhere and
[143:07] uh this was not a good path to take
[143:09] through the solution and whatever token
[143:11] sequences there were in these Green
[143:13] Solutions well things went uh pretty
[143:15] well in this situation and so we want to
[143:18] do more things like it in prompts like
[143:21] this and the way we encourage this kind
[143:23] of a behavior in the future is we
[143:25] basically train on these sequences um
[143:28] but these training sequencies now are
[143:29] not coming from expert human annotators
[143:32] there&#39;s no human who decided that this
[143:33] is the correct solution this solution
[143:36] came from the model itself so the model
[143:38] is practicing here it&#39;s tried out a few
[143:40] Solutions four of them seem to have
[143:41] worked and now the model will kind of
[143:43] like train on them and this corresponds
[143:45] to a student basically looking at their
[143:47] Solutions and being like okay well this
[143:48] one worked really well so this is this
[143:50] is how I should be solving these kinds
[143:52] of problems and uh here in this example
[143:55] there are many different ways to
[143:57] actually like really tweak the
[143:58] methodology a little bit here but just
[144:00] to give the core idea across maybe it&#39;s
[144:02] simplest to just think about take the
[144:04] taking the single best solution out of
[144:06] these four uh like say this one that&#39;s
[144:08] why it was yellow uh so this is the the
[144:12] solution that not only led to the right
[144:13] answer but may maybe had some other nice
[144:15] properties maybe it was the shortest one
[144:17] or it looked nicest in some ways or uh
[144:20] there&#39;s other criteria you could think
[144:21] of as an example but we&#39;re going to
[144:23] decide that this the top solution we&#39;re
[144:25] going to train on it and then uh the
[144:28] model will be slightly more likely once
[144:30] you do the parameter update to take this
[144:33] path in this kind of a setting in the
[144:36] future but you have to remember that
[144:38] we&#39;re going to run many different
[144:39] diverse prompts across lots of math
[144:42] problems and physics problems and
[144:43] whatever wherever there might be so tens
[144:46] of thousands of prompts maybe have in
[144:47] mind there&#39;s thousands of solutions
[144:50] prompt and so this is all happening kind
[144:52] of like at the same time and as we&#39;re
[144:55] iterating this process the model is
[144:57] discovering for itself what kinds of
[144:59] token sequences lead it to correct
[145:02] answers it&#39;s not coming from a human
[145:05] annotator the the model is kind of like
[145:08] playing in this playground and it knows
[145:10] what it&#39;s trying to get to and it&#39;s
[145:12] discovering sequences that work for it
[145:15] uh these are sequences that don&#39;t make
[145:16] any mental leaps uh they they seem to
[145:19] work reliably and statistically and uh
[145:23] fully utilize the knowledge of the model
[145:25] as it has it and so uh this is the
[145:28] process of reinforcement
[145:29] learning it&#39;s basically a guess and
[145:31] check we&#39;re going to guess many
[145:32] different types of solutions we&#39;re going
[145:33] to check them and we&#39;re going to do more
[145:35] of what worked in the future and that is
[145:38] uh reinforcement learning so in the
[145:40] context of what came before we see now
[145:43] that the sft model the supervised fine
[145:45] tuning model it&#39;s still helpful because
[145:47] it still kind of like initializes the
[145:49] model a little bit into to the vicinity
[145:51] of the correct Solutions so it&#39;s kind of
[145:53] like a initialization of um of the model
[145:56] in the sense that it kind of gets the
[145:58] model to you know take Solutions like
[146:00] write out Solutions and maybe it has an
[146:03] understanding of setting up a system of
[146:04] equations or maybe it kind of like talks
[146:06] through a solution so it gets you into
[146:08] the vicinity of correct Solutions but
[146:10] reinforcement learning is where
[146:11] everything gets dialed in we really
[146:13] discover the solutions that work for the
[146:15] model get the right answers we encourage
[146:17] them and then the model just kind of
[146:19] like gets better over time time okay so
[146:21] that is the high Lev process for how we
[146:23] train large language models in short we
[146:26] train them kind of very similar to how
[146:27] we train children and basically the only
[146:30] difference is that children go through
[146:32] chapters of books and they do all these
[146:34] different types of training exercises um
[146:37] kind of within the chapter of each book
[146:39] but instead when we train AIS it&#39;s
[146:41] almost like we kind of do it stage by
[146:43] stage depending on the type of that
[146:45] stage so first what we do is we do
[146:47] pre-training which as we saw is
[146:49] equivalent to uh basically reading all
[146:51] the expository material so we look at
[146:53] all the textbooks at the same time and
[146:55] we read all the exposition and we try to
[146:57] build a knowledge base the second thing
[147:00] then is we go into the sft stage which
[147:02] is really looking at all the fixed uh
[147:04] sort of like solutions from Human
[147:07] Experts of all the different kinds of
[147:09] worked Solutions across all the
[147:11] textbooks and we just kind of get an sft
[147:14] model which is able to imitate the
[147:16] experts but does so kind of blindly it
[147:18] just kind of like does its best guess
[147:20] uh kind of just like trying to mimic
[147:22] statistically the expert behavior and so
[147:24] that&#39;s what you get when you look at all
[147:26] the work Solutions and then finally in
[147:28] the last stage we do all the practice
[147:30] problems in the RL stage across all the
[147:33] textbooks we only do the practice
[147:35] problems and that&#39;s how we get the RL
[147:37] model so on a high level the way we
[147:40] train llms is very much equivalent uh to
[147:43] the process that we train uh that we use
[147:45] for training of children the next point
[147:47] I would like to make is that actually
[147:49] these first two stat ages pre-training
[147:51] and surprise fine-tuning they&#39;ve been
[147:52] around for years and they are very
[147:53] standard and everyone does them all the
[147:55] different llm providers it is this last
[147:58] stage the RL training that is a lot more
[148:00] early in its process of development and
[148:02] is not standard yet in the field and so
[148:06] um this stage is a lot more kind of
[148:09] early and nent and the reason for that
[148:11] is because I actually skipped over a ton
[148:13] of little details here in this process
[148:15] the high level idea is very simple it&#39;s
[148:17] trial and there learning but there&#39;s a
[148:18] ton of details and little math
[148:20] mathematical kind of like nuances to
[148:21] exactly how you pick the solutions that
[148:23] are the best and how much you train on
[148:25] them and what is the prompt distribution
[148:27] and how to set up the training run such
[148:29] that this actually works so there&#39;s a
[148:30] lot of little details and knobs to the
[148:32] core idea that is very very simple and
[148:35] so getting the details right here uh is
[148:37] not trivial and so a lot of companies
[148:40] like for example open and other LM
[148:41] providers have experimented internally
[148:44] with reinforcement learning fine tuning
[148:46] for llms for a while but they&#39;ve not
[148:48] talked about it publicly
[148:50] um it&#39;s all kind of done inside the
[148:52] company and so that&#39;s why the paper from
[148:55] Deep seek that came out very very
[148:56] recently was such a big deal because
[148:59] this is a paper from this company called
[149:01] DC Kai in China and this paper really
[149:05] talked very publicly about reinforcement
[149:07] learning fine training for large
[149:08] language models and how incredibly
[149:10] important it is for large language
[149:12] models and how it brings out a lot of
[149:14] reasoning capabilities in the models
[149:16] we&#39;ll go into this in a second so this
[149:18] paper reinvigorated the public interest
[149:21] of using RL for llms and gave a lot of
[149:25] the um sort of n-r details that are
[149:27] needed to reproduce their results and
[149:29] actually get the stage to work for large
[149:31] langage models so let me take you
[149:33] briefly through this uh deep seek R1
[149:35] paper and what happens when you actually
[149:36] correctly apply RL to language models
[149:38] and what that looks like and what that
[149:39] gives you so the first thing I&#39;ll scroll
[149:41] to is this uh kind of figure two here
[149:43] where we are looking at the Improvement
[149:45] in how the models are solving
[149:47] mathematical problems so this is the
[149:49] accuracy of solving mathematical
[149:50] problems on the a accuracy and then we
[149:54] can go to the web page and we can see
[149:55] the kinds of problems that are actually
[149:56] in these um these the kinds of math
[149:58] problems that are being measured here so
[150:00] these are simple math problems you can
[150:02] um pause the video if you like but these
[150:04] are the kinds of problems that basically
[150:06] the models are being asked to solve and
[150:08] you can see that in the beginning
[150:09] they&#39;re not doing very well but then as
[150:10] you update the model with this many
[150:12] thousands of steps their accuracy kind
[150:14] of continues to climb so the models are
[150:17] improving and they&#39;re solving these
[150:18] problems with a higher accuracy
[150:20] as you do this trial and error on a
[150:22] large data set of these kinds of
[150:24] problems and the models are discovering
[150:26] how to solve math problems but even more
[150:29] incredible than the quantitative kind of
[150:32] results of solving these problems with a
[150:33] higher accuracy is the qualitative means
[150:35] by which the model achieves these
[150:37] results so when we scroll down uh one of
[150:40] the figures here that is kind of
[150:41] interesting is that later on in the
[150:43] optimization the model seems to be uh
[150:46] using average length per response uh
[150:49] goes up up so the model seems to be
[150:51] using more tokens to get its higher
[150:54] accuracy results so it&#39;s learning to
[150:56] create very very long Solutions why are
[150:59] these Solutions very long we can look at
[151:00] them qualitatively here so basically
[151:03] what they discover is that the model
[151:05] solution get very very long partially
[151:07] because so here&#39;s a question and here&#39;s
[151:09] kind of the answer from the model what
[151:11] the model learns to do um and this is an
[151:13] immerging property of new optimization
[151:15] it just discovers that this is good for
[151:17] problem solving is it starts to do stuff
[151:19] like this wait wait wait that&#39;s Nota
[151:21] moment I can flag here let&#39;s reevaluate
[151:23] this step by step to identify the
[151:25] correct sum can be so what is the model
[151:27] doing here right the model is basically
[151:30] re-evaluating steps it has learned that
[151:32] it works better for accuracy to try out
[151:35] lots of ideas try something from
[151:37] different perspectives retrace reframe
[151:39] backtrack is doing a lot of the things
[151:41] that you and I are doing in the process
[151:43] of problem solving for mathematical
[151:44] questions but it&#39;s rediscovering what
[151:46] happens in your head not what you put
[151:48] down on the solution and there is no
[151:50] human who can hardcode this stuff in the
[151:52] ideal assistant response this is only
[151:55] something that can be discovered in the
[151:56] process of reinforcement learning
[151:57] because you wouldn&#39;t know what to put
[151:59] here this just turns out to work for the
[152:02] model and it improves its accuracy in
[152:04] problem solving so the model learns what
[152:06] we call these chains of thought in your
[152:08] head and it&#39;s an emergent property of
[152:10] the optim of the optimization and that&#39;s
[152:13] what&#39;s bloating up the response length
[152:16] but that&#39;s also what&#39;s increasing the
[152:18] accuracy of the problem problem solving
[152:20] so what&#39;s incredible here is basically
[152:22] the model is discovering ways to think
[152:24] it&#39;s learning what I like to call
[152:26] cognitive strategies of how you
[152:28] manipulate a problem and how you
[152:30] approach it from different perspectives
[152:31] how you pull in some analogies or do
[152:33] different kinds of things like that and
[152:35] how you kind of uh try out many
[152:37] different things over time uh check a
[152:39] result from different perspectives and
[152:40] how you kind of uh solve problems but
[152:43] here it&#39;s kind of discovered by the RL
[152:44] so extremely incredible to see this
[152:47] emerge in the optimization without
[152:48] having to hardcode it anywhere the only
[152:50] thing we&#39;ve given it are the correct
[152:52] answers and this comes out from trying
[152:54] to just solve them correctly which is
[152:56] incredible
[152:58] um now let&#39;s go back to actually the
[153:00] problem that we&#39;ve been working with and
[153:02] let&#39;s take a look at what it would look
[153:03] like uh for uh for this kind of a model
[153:07] what we call reasoning or thinking model
[153:09] to solve that problem okay so recall
[153:12] that this is the problem we&#39;ve been
[153:13] working with and when I pasted it into
[153:15] chat GPT 40 I&#39;m getting this kind of a
[153:17] response let&#39;s take a look at what
[153:19] happens when you give this same query to
[153:22] what&#39;s called a reasoning or a thinking
[153:23] model this is a model that was trained
[153:25] with reinforcement learning so this
[153:28] model described in this paper DC car1 is
[153:30] available on chat. dec.com uh so this is
[153:34] kind of like the company uh that
[153:35] developed is hosting it you have to make
[153:37] sure that the Deep think button is
[153:39] turned on to get the R1 model as it&#39;s
[153:41] called we can paste it here and run
[153:44] it and so let&#39;s take a look at what
[153:46] happens now and what is the output of
[153:48] the model okay so here&#39;s it says so this
[153:51] is previously what we get using
[153:53] basically what&#39;s an sft approach a
[153:54] supervised funing approach this is like
[153:56] mimicking an expert solution this is
[153:58] what we get from the RL model okay let
[154:01] me try to figure this out so Emily buys
[154:03] three apples and two oranges each orange
[154:05] cost $2 total is 13 I need to find out
[154:07] blah blah blah so here you you um as
[154:11] you&#39;re reading this you can&#39;t escape
[154:14] thinking that this model is
[154:16] thinking um is definitely pursuing the
[154:19] solution solution it deres that it must
[154:21] cost $3 and then it says wait a second
[154:23] let me check my math again to be sure
[154:25] and then it tries it from a slightly
[154:26] different perspective and then it says
[154:28] yep all that checks out I think that&#39;s
[154:30] the answer I don&#39;t see any mistakes let
[154:33] me see if there&#39;s another way to
[154:34] approach the problem maybe setting up an
[154:36] equation let&#39;s let the cost of one apple
[154:39] be $8 then blah blah blah yep same
[154:42] answer so definitely each apple is $3
[154:44] all right confident that that&#39;s correct
[154:47] and then what it does once it sort of um
[154:49] did the thinking process is it writes up
[154:51] the nice solution for the human and so
[154:54] this is now considering so this is more
[154:56] about the correctness aspect and this is
[154:58] more about the presentation aspect where
[155:00] it kind of like writes it out nicely and
[155:03] uh boxes in the correct answer at the
[155:05] bottom and so what&#39;s incredible about
[155:07] this is we get this like thinking
[155:08] process of the model and this is what&#39;s
[155:10] coming from the reinforcement learning
[155:12] process this is what&#39;s bloating up the
[155:15] length of the token sequences they&#39;re
[155:16] doing thinking and they&#39;re trying
[155:17] different ways this is what&#39;s giving you
[155:20] higher accuracy in problem
[155:22] solving and this is where we are seeing
[155:24] these aha moments and these different
[155:26] strategies and these um ideas for how
[155:29] you can make sure that you&#39;re getting
[155:31] the correct
[155:32] answer the last point I wanted to make
[155:34] is some people are a little bit nervous
[155:36] about putting you know very sensitive
[155:38] data into chat.com because this is a
[155:41] Chinese company so people don&#39;t um
[155:43] people are a little bit careful and Cy
[155:45] with that a little bit um deep seek R1
[155:48] is a model that was released by this
[155:50] company so this is an open source model
[155:52] or open weights model it is available
[155:54] for anyone to download and use you will
[155:56] not be able to like run it in its full
[155:59] um sort of the full model in full
[156:02] Precision you won&#39;t run that on a
[156:04] MacBook but uh or like a local device
[156:07] because this is a fairly large model but
[156:08] many companies are hosting the full
[156:10] largest model one of those companies
[156:12] that I like to use is called
[156:14] together. so when you go to together.
[156:17] you sign up and you go to playgrounds
[156:19] you can can select here in the chat deep
[156:21] seek R1 and there&#39;s many different kinds
[156:23] of other models that you can select here
[156:25] these are all state-of-the-art models so
[156:27] this is kind of similar to the hugging
[156:28] face inference playground that we&#39;ve
[156:29] been playing with so far but together. a
[156:32] will usually host all the
[156:33] state-of-the-art models so select DT
[156:36] car1 um you can try to ignore a lot of
[156:38] these I think the default settings will
[156:39] often be okay and we can put in this and
[156:43] because the model was released by Deep
[156:45] seek what you&#39;re getting here should be
[156:47] basically equivalent to what you&#39;re
[156:48] getting here now because of the
[156:50] randomness in the sampling we&#39;re going
[156:51] to get something slightly different uh
[156:53] but in principle this should be uh
[156:55] identical in terms of the power of the
[156:57] model and you should be able to see the
[156:58] same things quantitatively and
[157:00] qualitatively uh but uh this model is
[157:02] coming from kind of a an American
[157:04] company so that&#39;s deep seek and that&#39;s
[157:07] the what&#39;s called a reasoning
[157:09] model now when I go back to chat uh let
[157:12] me go to chat here okay so the models
[157:14] that you&#39;re going to see in the drop
[157:15] down here some of them like 01 03 mini
[157:18] O3 mini High Etc they are talking about
[157:21] uses Advanced reasoning now what this is
[157:23] referring to uses Advanced reasoning is
[157:26] it&#39;s referring to the fact that it was
[157:27] trained by reinforcement learning with
[157:29] techniques very similar to those of deep
[157:31] C car1 per public statements of opening
[157:34] ey employees uh so these are thinking
[157:37] models trained with RL and these models
[157:40] like GPT 4 or GPT 4 40 mini that you&#39;re
[157:42] getting in the free tier you should
[157:43] think of them as mostly sft models
[157:45] supervised fine tuning models they don&#39;t
[157:47] actually do this like thinking as as you
[157:49] see in the RL models and even though
[157:52] there&#39;s a little bit of reinforcement
[157:53] learning involved with these models and
[157:55] I&#39;ll go that into that in a second these
[157:56] are mostly sft models I think you should
[157:58] think about it that way so in the same
[158:00] way as what we saw here we can pick one
[158:03] of the thinking models like say 03 mini
[158:05] high and these models by the way might
[158:07] not be available to you unless you pay a
[158:09] Chachi PT subscription of either $20 per
[158:11] month or $200 per month for some of the
[158:14] top models so we can pick a thinking
[158:16] model and run now what&#39;s going to happen
[158:20] here is it&#39;s going to say reasoning and
[158:21] it&#39;s going to start to do stuff like
[158:23] this and um what we&#39;re seeing here is
[158:26] not exactly the stuff we&#39;re seeing here
[158:29] so even though under the hood the model
[158:31] produces these kinds of uh kind of
[158:34] chains of thought opening ey chooses to
[158:36] not show the exact chains of thought in
[158:38] the web interface it shows little
[158:40] summaries of that of those chains of
[158:42] thought and open kind of does this I
[158:44] think partly because uh they are worried
[158:46] about what&#39;s called the distillation
[158:48] risk that is that someone could come in
[158:50] and actually try to imitate those
[158:51] reasoning traces and recover a lot of
[158:53] the reasoning performance by just
[158:55] imitating the reasoning uh chains of
[158:57] thought and so they kind of hide them
[158:59] and they only show little summaries of
[159:00] them so you&#39;re not getting exactly what
[159:02] you would get in deep seek as with
[159:04] respect to the reasoning itself and then
[159:07] they write up the
[159:08] solution so these are kind of like
[159:10] equivalent even though we&#39;re not seeing
[159:12] the full under the hood details now in
[159:14] terms of the performance uh these models
[159:17] and deep seek models are currently rly
[159:19] on par I would say it&#39;s kind of hard to
[159:21] tell because of the evaluations but if
[159:22] you&#39;re paying $200 per month to open AI
[159:24] some of these models I believe are
[159:25] currently they basically still look
[159:27] better uh but deep seek R1 for now is
[159:30] still a very solid choice for a thinking
[159:33] model that would be available to you um
[159:36] sort of um either on this website or any
[159:39] other website because the model is open
[159:40] weights you can just download it so
[159:43] that&#39;s thinking models so what is the
[159:46] summary so far well we&#39;ve talked about
[159:48] reinforcement learning and the fact that
[159:50] thinking emerges in the process of the
[159:52] optimization on when we basically run RL
[159:55] on many math uh and kind of code
[159:57] problems that have verifiable Solutions
[159:59] so there&#39;s like an answer three
[160:01] Etc now these thinking models you can
[160:04] access in for example deep seek or any
[160:07] inference provider like together. a and
[160:09] choosing deep seek over there these
[160:12] thinking models are also available uh in
[160:14] chpt under any of the 01 or O3
[160:17] models but these GPT 4 R models Etc
[160:20] they&#39;re not thinking models you should
[160:21] think of them as mostly sft models now
[160:25] if you are um if you have a prompt that
[160:27] requires Advanced reasoning and so on
[160:29] you should probably use some of the
[160:30] thinking models or at least try them out
[160:32] but empirically for a lot of my use when
[160:35] you&#39;re asking a simpler question there&#39;s
[160:36] like a knowledge based question or
[160:37] something like that this might be
[160:39] Overkill like there&#39;s no need to think
[160:40] 30 seconds about some factual question
[160:42] so for that I will uh sometimes default
[160:44] to just GPT 40 so empirically about 80
[160:47] 90% of my use is just gp4
[160:49] and when I come across a very difficult
[160:51] problem like in math and code Etc I will
[160:53] reach for the thinking models but then I
[160:56] have to wait a bit longer because
[160:57] they&#39;re thinking um so you can access
[161:00] these on chat on deep seek also I wanted
[161:02] to point out that um AI studio.
[161:05] go.com even though it looks really busy
[161:08] really ugly because Google&#39;s just unable
[161:10] to do this kind of stuff well it&#39;s like
[161:13] what is happening but if you choose
[161:15] model and you choose here Gemini 2.0
[161:17] flash thinking experimental 01 21 if you
[161:20] choose that one that&#39;s also a a kind of
[161:22] early experiment experimental of a
[161:25] thinking model by Google so we can go
[161:27] here and we can give it the same problem
[161:29] and click run and this is also a
[161:31] thinking problem a thinking model that
[161:33] will also do something
[161:35] similar and comes out with the right
[161:37] answer here so basically Gemini also
[161:40] offers a thinking model anthropic
[161:42] currently does not offer a thinking
[161:43] model but basically this is kind of like
[161:45] the frontier development of these llms I
[161:47] think RL is kind of like this new
[161:49] exciting stage but getting the details
[161:51] right is difficult and that&#39;s why all
[161:53] these models and thinking models are
[161:55] currently experimental as of 2025 very
[161:57] early 2025 um but this is kind of like
[162:01] the frontier development of pushing the
[162:02] performance on these very difficult
[162:03] problems using reasoning that is
[162:05] emerging in these optimizations one more
[162:07] connection that I wanted to bring up is
[162:10] that the discovery that reinforcement
[162:12] learning is extremely powerful way of
[162:14] learning is not new to the field of AI
[162:17] and one place what we&#39;ve already seen
[162:19] this demonstrated is in the game of Go
[162:22] and famously Deep Mind developed the
[162:24] system alphago and you can watch a movie
[162:26] about it um where the system is learning
[162:29] to play the game of go against top human
[162:32] players and um when we go to the paper
[162:36] underlying alphago so in this paper when
[162:39] we scroll
[162:41] down we actually find a really
[162:43] interesting
[162:44] plot um that I think uh is kind of
[162:47] familiar uh to us and we&#39;re kind of like
[162:49] we discovering in the more open domain
[162:51] of arbitrary problem solving instead of
[162:53] on the closed specific domain of the
[162:55] game of Go but basically what they saw
[162:57] and we&#39;re going to see this in llms as
[162:59] well as this becomes more mature is this
[163:03] is the ELO rating of playing game of Go
[163:05] and this is leas dull an extremely
[163:07] strong human player and here what they
[163:09] are comparing is the strength of a model
[163:11] learned trained by supervised learning
[163:14] and a model trained by reinforcement
[163:15] learning so the supervised learning
[163:17] model is imitating human expert players
[163:20] so if you just get a huge amount of
[163:22] games played by expert players in the
[163:23] game of Go and you try to imitate them
[163:26] you are going to get better but then you
[163:28] top out and you never quite get better
[163:31] than some of the top top top players of
[163:34] in the game of Go like LEL so you&#39;re
[163:35] never going to reach there because
[163:37] you&#39;re just imitating human players you
[163:39] can&#39;t fundamentally go beyond a human
[163:40] player if you&#39;re just imitating human
[163:42] players but in a process of
[163:44] reinforcement learning is significantly
[163:46] more powerful in reinforcement learning
[163:48] for a game of Go it means that the
[163:50] system is playing moves that empirically
[163:53] and statistically lead to win to winning
[163:56] the game and so alphago is a system
[163:59] where it kind of plays against it itself
[164:02] and it&#39;s using reinforcement learning to
[164:03] create
[164:04] rollouts so it&#39;s the exact same diagram
[164:07] here but there&#39;s no prompt it&#39;s just uh
[164:10] because there&#39;s no prompt it&#39;s just a
[164:11] fixed game of Go but it&#39;s trying out
[164:13] lots of solutions it&#39;s trying out lots
[164:15] of plays and then the games that lead to
[164:18] a win instead of a specific answer are
[164:20] reinforced they&#39;re they&#39;re made stronger
[164:24] and so um the system is learning
[164:26] basically the sequences of actions that
[164:28] empirically and statistically lead to
[164:30] winning the game and reinforcement
[164:32] learning is not going to be constrained
[164:34] by human performance and reinforcement
[164:36] learning can do significantly better and
[164:38] overcome even the top players like Lisa
[164:41] Dole and so uh probably they could have
[164:44] run this longer and they just chose to
[164:46] crop it at some point because this costs
[164:47] money but this is very powerful
[164:49] demonstration of reinforcement learning
[164:51] and we&#39;re only starting to kind of see
[164:52] hints of this diagram in larger language
[164:55] models for reasoning problems so we&#39;re
[164:58] not going to get too far by just
[164:59] imitating experts we need to go beyond
[165:01] that set up these like little game
[165:03] environments and get let let the system
[165:07] discover reasoning traces or like ways
[165:09] of solving problems uh that are unique
[165:14] and that uh just basically work
[165:16] well now on this aspect of uniqueness
[165:19] notice that when you&#39;re doing
[165:19] reinforcement learning nothing prevents
[165:21] you from veering off the distribution of
[165:24] how humans are playing the game and so
[165:26] when we go back to uh this alphao search
[165:29] here one of the suggested modifications
[165:31] is called move 37 and move 37 in alphao
[165:34] is referring to a specific point in time
[165:37] where alphago basically played a move
[165:40] that uh no human expert would play uh so
[165:43] the probability of this move uh to be
[165:45] played by a human player was evaluated
[165:47] to be about 1 in 10th ,000 so it&#39;s a
[165:49] very rare move but in retrospect it was
[165:52] a brilliant move so alphago in the
[165:54] process of reinforcement learning
[165:55] discovered kind of like a strategy of
[165:57] playing that was unknown to humans and
[166:00] but is in retrospect uh brilliant I
[166:02] recommend this YouTube video um leis do
[166:04] versus alphao move 37 reactions and
[166:06] Analysis and this is kind of what it
[166:08] looked like when alphao played this
[166:11] move
[166:14] value that&#39;s a very that&#39;s a very
[166:16] surprising move I thought I thought it
[166:19] was I thought it was a
[166:21] mistake when I see this move anyway so
[166:24] basically people are kind of freaking
[166:25] out because it&#39;s a it&#39;s a move that a
[166:28] human would not play that alphago played
[166:31] because in its training uh this move
[166:33] seemed to be a good idea it just happens
[166:35] not to be a kind of thing that a humans
[166:37] would would do and so that is again the
[166:39] power of reinforcement learning and in
[166:41] principle we can actually see the
[166:42] equivalence of that if we continue
[166:44] scaling this Paradigm in language models
[166:46] and what that looks like is kind of
[166:47] unknown so so um what does it mean to
[166:50] solve problems in such a way that uh
[166:54] even humans would not be able to get how
[166:56] can you be better at reasoning or
[166:58] thinking than humans how can you go
[167:00] beyond just uh a thinking human like
[167:03] maybe it means discovering analogies
[167:05] that humans would not be able to uh
[167:07] create or maybe it&#39;s like a new thinking
[167:09] strategy it&#39;s kind of hard to think
[167:10] through uh maybe it&#39;s a holy new
[167:14] language that actually is not even
[167:16] English maybe it discovers its own
[167:17] language that is a lot better at
[167:19] thinking um because the model is
[167:22] unconstrained to even like stick with
[167:24] English uh so maybe it takes a different
[167:27] language to think in or it discovers its
[167:29] own language so in principle the
[167:31] behavior of the system is a lot less
[167:33] defined it is open to do whatever works
[167:37] and it is open to also slowly Drift from
[167:40] the distribution of its training data
[167:41] which is English but all of that can
[167:43] only be done if we have a very large
[167:45] diverse set of problems in which the
[167:48] these strategy can be refined and
[167:49] perfected and so that is a lot of the
[167:51] frontier LM research that&#39;s going on
[167:53] right now is trying to kind of create
[167:55] those kinds of prompt distributions that
[167:57] are large and diverse these are all kind
[167:59] of like game environments in which the
[168:00] llms can practice their thinking and uh
[168:04] it&#39;s kind of like writing you know these
[168:06] practice problems we have to create
[168:07] practice problems for all of domains of
[168:10] knowledge and if we have practice
[168:12] problems and tons of them the models
[168:14] will be able to reinforcement learning
[168:16] reinforcement learn on them and kind of
[168:18] uh create these kinds of uh diagrams but
[168:21] in the domain of open thinking instead
[168:23] of a closed domain like game of Go
[168:26] there&#39;s one more section within
[168:27] reinforcement learning that I wanted to
[168:29] cover and that is that of learning in
[168:32] unverifiable domains so so far all of
[168:35] the problems that we&#39;ve looked at are in
[168:36] what&#39;s called verifiable domains that is
[168:38] any candidate solution we can score very
[168:41] easily against a concrete answer so for
[168:44] example answer is three and we can very
[168:45] easily score these Solutions against the
[168:47] answer of three
[168:49] either we require the models to like box
[168:51] in their answers and then we just check
[168:53] for equality of whatever is in the box
[168:55] with the answer or you can also use uh
[168:58] kind of what&#39;s called an llm judge so
[169:00] the llm judge looks at a solution and it
[169:03] gets the answer and just basically
[169:05] scores the solution for whether it&#39;s
[169:06] consistent with the answer or not and
[169:08] llms uh empirically are good enough at
[169:10] the current capability that they can do
[169:12] this fairly reliably so we can apply
[169:14] those kinds of techniques as well in any
[169:16] case we have a concrete answer and we&#39;re
[169:17] just checking Solutions again against it
[169:19] and we can do this automatically with no
[169:21] kind of humans in the loop the problem
[169:23] is that we can&#39;t apply the strategy in
[169:25] what&#39;s called unverifiable domains so
[169:28] usually these are for example creative
[169:29] writing tasks like write a joke about
[169:31] Pelicans or write a poem or summarize a
[169:33] paragraph or something like that in
[169:35] these kinds of domains it becomes harder
[169:37] to score our different solutions to this
[169:39] problem so for example writing a joke
[169:41] about Pelicans we can generate lots of
[169:43] different uh jokes of course that&#39;s fine
[169:45] for example we can go to chbt and we can
[169:47] get it to uh generate a joke about
[169:51] Pelicans uh so much stuff in their beaks
[169:53] because they don&#39;t bellan in
[169:56] backpacks what
[169:59] okay we can uh we can try something else
[170:02] why don&#39;t Pelicans ever pay for their
[170:04] drinks because they always B it to
[170:06] someone else haha okay so these models
[170:10] are not obviously not very good at humor
[170:12] actually I think it&#39;s pretty fascinating
[170:13] because I think humor is secretly very
[170:15] difficult and the model have the
[170:16] capability I think anyway in any case
[170:20] you could imagine creating lots of jokes
[170:23] the problem that we are facing is how do
[170:24] we score them now in principle we could
[170:27] of course get a human to look at all
[170:29] these jokes just like I did right now
[170:31] the problem with that is if you are
[170:32] doing reinforcement learning you&#39;re
[170:34] going to be doing many thousands of
[170:36] updates and for each update you want to
[170:38] be looking at say thousands of prompts
[170:40] and for each prompt you want to be
[170:41] potentially looking at looking at
[170:43] hundred or thousands of different kinds
[170:44] of generations and so there&#39;s just like
[170:47] way too many of these to look at and so
[170:50] um in principle you could have a human
[170:52] inspect all of them and score them and
[170:53] decide that okay maybe this one is funny
[170:55] and uh maybe this one is funny and this
[170:58] one is funny and we could train on them
[171:01] to get the model to become slightly
[171:02] better at jokes um in the context of
[171:05] pelicans at least um the problem is that
[171:09] it&#39;s just like way too much human time
[171:10] this is an unscalable strategy we need
[171:12] some kind of an automatic strategy for
[171:14] doing this and one sort of solution to
[171:16] this was proposed in this paper
[171:19] uh that introduced what&#39;s called
[171:20] reinforcement learning from Human
[171:21] feedback and so this was a paper from
[171:23] open at the time and many of these
[171:25] people are now um co-founders in
[171:27] anthropic um and this kind of proposed a
[171:30] approach for uh basically doing
[171:33] reinforcement learning in unverifiable
[171:35] domains so let&#39;s take a look at how that
[171:36] works so this is the cartoon diagram of
[171:39] the core ideas involved so as I
[171:41] mentioned the native approach is if we
[171:44] just set Infinity human time we could
[171:46] just run RL in these domains just fine
[171:49] so for example we can run RL as usual if
[171:51] I have Infinity humans I would I just
[171:53] want to do and these are just cartoon
[171:55] numbers I want to do 1,000 updates where
[171:57] each update will be on 1,000 prompts and
[172:00] in for each prompt we&#39;re going to have
[172:02] 1,000 roll outs that we&#39;re scoring so we
[172:05] can run RL with this kind of a setup the
[172:08] problem is in the process of doing this
[172:10] I will need to run one I will need to
[172:12] ask a human to evaluate a joke a total
[172:15] of 1 billion times and so that&#39;s a lot
[172:18] of people looking at really terrible
[172:19] jokes so we don&#39;t want to do that so
[172:22] instead we want to take the arlef
[172:24] approach so um in our Rel of approach we
[172:27] are kind of like the the core trick is
[172:29] that of indirection so we&#39;re going to
[172:32] involve humans just a little bit and the
[172:35] way we cheat is that we basically train
[172:37] a whole separate neural network that we
[172:39] call a reward model and this neural
[172:41] network will kind of like imitate human
[172:44] scores so we&#39;re going to ask humans to
[172:46] score um roll
[172:49] we&#39;re going to then imitate human scores
[172:51] using a neural network and this neural
[172:54] network will become a kind of simulator
[172:55] of human
[172:56] preferences and now that we have a
[172:58] neural network simulator we can do RL
[173:01] against it so instead of asking a real
[173:03] human we&#39;re asking a simulated human for
[173:06] their score of a joke as an example and
[173:09] so once we have a simulator we&#39;re often
[173:11] racist because we can query it as many
[173:13] times as we want to and it&#39;s all whole
[173:16] automatic process and we can now do
[173:17] reinforcement learning with respect to
[173:19] the simulator and the simulator as you
[173:20] might expect is not going to be a
[173:22] perfect human but if it&#39;s at least
[173:24] statistically similar to human judgment
[173:26] then you might expect that this will do
[173:28] something and in practice indeed uh it
[173:30] does so once we have a simulator we can
[173:32] do RL and everything works great so let
[173:35] me show you a cartoon diagram a little
[173:36] bit of what this process looks like
[173:38] although the details are not 100 like
[173:40] super important it&#39;s just a core idea of
[173:42] how this works so here I have a cartoon
[173:44] diagram of a hypothetical example of
[173:46] what training the reward model would
[173:47] look like so we have a prompt like write
[173:50] a joke about picans and then here we
[173:52] have five separate roll outs so these
[173:54] are all five different jokes just like
[173:56] this one now the first thing we&#39;re going
[173:59] to do is we are going to ask a human to
[174:02] uh order these jokes from the best to
[174:05] worst so this is uh so here this human
[174:08] thought that this joke is the best the
[174:10] funniest so number one joke this is
[174:14] number two joke number three joke four
[174:16] and five so this is the worst joke
[174:19] we&#39;re asking humans to order instead of
[174:20] give scores directly because it&#39;s a bit
[174:22] of an easier task it&#39;s easier for a
[174:24] human to give an ordering than to give
[174:26] precise scores now that is now the
[174:29] supervision for the model so the human
[174:31] has ordered them and that is kind of
[174:32] like their contribution to the training
[174:34] process but now separately what we&#39;re
[174:36] going to do is we&#39;re going to ask a
[174:37] reward model uh about its scoring of
[174:40] these jokes now the reward model is a
[174:42] whole separate neural network completely
[174:44] separate neural net um and it&#39;s also
[174:47] probably a transform
[174:49] uh but it&#39;s not a language model in the
[174:50] sense that it generates diverse language
[174:53] Etc it&#39;s just a scoring model so the
[174:56] reward model will take as an input The
[174:59] Prompt number one and number two a
[175:02] candidate joke so um those are the two
[175:05] inputs that go into the reward model so
[175:07] here for example the reward model would
[175:08] be taken this prompt and this joke now
[175:11] the output of a reward model is a single
[175:14] number and this number is thought of as
[175:16] a score and it can range for example
[175:18] from Z to one so zero would be the worst
[175:20] score and one would be the best score so
[175:23] here are some examples of what a
[175:25] hypothetical reward model at some stage
[175:27] in the training process would give uh s
[175:29] scoring to these jokes so 0.1 is a very
[175:33] low score 08 is a really high score and
[175:36] so on and so now um we compare the
[175:40] scores given by the reward model with uh
[175:43] the ordering given by the human and
[175:45] there&#39;s a precise mathematical way to
[175:47] actually calculate this uh basically set
[175:49] up a loss function and calculate a kind
[175:51] of like a correspondence here and uh
[175:54] update a model based on it but I just
[175:55] want to give you the intuition which is
[175:57] that as an example here for this second
[176:00] joke the the human thought that it was
[176:02] the funniest and the model kind of
[176:03] agreed right 08 is a relatively high
[176:05] score but this score should have been
[176:07] even higher right so after an update we
[176:10] would expect that maybe this score
[176:11] should have been will actually grow
[176:13] after an update of the network to be
[176:15] like say 081 or
[176:16] something um for this one here they
[176:19] actually are in a massive disagreement
[176:21] because the human thought that this was
[176:22] number two but here the the score is
[176:24] only 0.1 and so this score needs to be
[176:27] much higher so after an update on top of
[176:30] this um kind of a supervision this might
[176:33] grow a lot more like maybe it&#39;s 0.15 or
[176:35] something like
[176:36] that um and then here the human thought
[176:39] that this one was the worst joke but
[176:41] here the model actually gave it a fairly
[176:43] High number so you might expect that
[176:45] after the update uh this would come down
[176:47] to maybe 3 3.5 or something like that so
[176:50] basically we&#39;re doing what we did before
[176:51] we&#39;re slightly nudging the predictions
[176:54] from the models using a neural network
[176:57] training
[176:58] process and we&#39;re trying to make the
[177:00] reward model scores be consistent with
[177:03] human
[177:04] ordering and so um as we update the
[177:07] reward model on human data it becomes
[177:09] better and better simulator of the
[177:11] scores and orders uh that humans provide
[177:14] and then becomes kind of like the the
[177:17] neural the simulator of human
[177:18] preferences which we can then do RL
[177:20] against but critically we&#39;re not asking
[177:23] humans one billion times to look at a
[177:24] joke we&#39;re maybe looking at th000
[177:26] prompts and five roll outs each so maybe
[177:28] 5,000 jokes that humans have to look at
[177:30] in total and they just give the ordering
[177:33] and then we&#39;re training the model to be
[177:34] consistent with that ordering and I&#39;m
[177:36] skipping over the mathematical details
[177:38] but I just want you to understand a high
[177:39] level idea that uh this reward model is
[177:42] do is basically giving us this scour and
[177:45] we have a way of training it to be
[177:46] consistent with human orderings
[177:48] and that&#39;s how rhf works okay so that is
[177:51] the rough idea we basically train
[177:53] simulators of humans and RL with respect
[177:55] to those
[177:56] simulators now I want to talk about
[177:59] first the upside of reinforcement
[178:00] learning from Human
[178:03] feedback the first thing is that this
[178:05] allows us to run reinforcement learning
[178:07] which we know is incredibly powerful
[178:09] kind of set of techniques and it allows
[178:10] us to do it in arbitrary domains and
[178:13] including the ones that are unverifiable
[178:15] so things like summarization and poem
[178:17] writing joke writing or any other
[178:19] creative writing really uh in domains
[178:21] outside of math and code
[178:23] Etc now empirically what we see when we
[178:25] actually apply rhf is that this is a way
[178:28] to improve the performance of the model
[178:30] and uh I have a top answer for why that
[178:33] might be but I don&#39;t actually know that
[178:35] it is like super well established on
[178:38] like why this is you can empirically
[178:39] observe that when you do rhf correctly
[178:41] the models you get are just like a
[178:43] little bit better um but as to why is I
[178:45] think like not as clear so here&#39;s my
[178:47] best guess my best guess is that this is
[178:49] possibly mostly due to the discriminator
[178:52] generator
[178:53] Gap what that means is that in many
[178:55] cases it is significantly easier to
[178:58] discriminate than to generate for humans
[179:01] so in particular an example of this is
[179:04] um in when we do supervised fine-tuning
[179:07] right
[179:09] sft we&#39;re asking humans to generate the
[179:12] ideal assistant response and in many
[179:15] cases here um as I&#39;ve shown it uh the
[179:18] ideal response is very simple to write
[179:20] but in many cases might not be so for
[179:22] example in summarization or poem writing
[179:24] or joke writing like how are you as a
[179:26] human assist as a human labeler um
[179:29] supposed to give the ideal response in
[179:30] these cases it requires creative human
[179:32] writing to do that and so rhf kind of
[179:35] sidesteps this because we get um we get
[179:38] to ask people a significantly easier
[179:40] question as a data labelers they&#39;re not
[179:42] asked to write poems directly they&#39;re
[179:44] just given five poems from the model and
[179:46] they&#39;re just asked to order them and so
[179:49] that&#39;s just a much easier task for a
[179:51] human labeler to do and so what I think
[179:53] this allows you to do basically is it um
[179:57] it kind of like allows a lot more higher
[180:00] accuracy data because we&#39;re not asking
[180:02] people to do the generation task which
[180:04] can be extremely difficult like we&#39;re
[180:06] not asking them to do creative writing
[180:07] we&#39;re just trying to get them to
[180:09] distinguish between creative writings
[180:11] and uh find the ones that are best and
[180:14] that is the signal that humans are
[180:15] providing just the ordering and that is
[180:17] their input into the system and then the
[180:20] system in rhf just discovers the kinds
[180:23] of responses that would be graded well
[180:26] by humans and so that step of
[180:28] indirection allows the models to become
[180:30] a bit better so that is the upside of
[180:33] our LF it allows us to run RL it
[180:35] empirically results in better models and
[180:37] it allows uh people to contribute their
[180:40] supervision uh even without having to do
[180:42] extremely difficult tasks um in the case
[180:45] of writing ideal responses unfortunately
[180:47] our HF also comes with significant
[180:49] downsides and so um the main one is that
[180:54] basically we are doing reinforcement
[180:55] learning not with respect to humans and
[180:57] actual human judgment but with respect
[180:59] to a lossy simulation of humans right
[181:01] and this lossy simulation could be
[181:03] misleading because it&#39;s just a it&#39;s just
[181:05] a simulation right it&#39;s just a language
[181:07] model that&#39;s kind of outputting scores
[181:09] and it might not perfectly reflect the
[181:11] opinion of an actual human with an
[181:13] actual brain in all the possible
[181:15] different cases so that&#39;s number one
[181:17] which is actually something even more
[181:18] subtle and devious going on that uh
[181:21] really
[181:22] dramatically holds back our LF as a
[181:24] technique that we can really scale to
[181:27] significantly um kind of Smart Systems
[181:31] and that is that reinforcement learning
[181:32] is extremely good at discovering a way
[181:35] to game the model to game the simulation
[181:38] so this reward model that we&#39;re
[181:40] constructing here that gives the course
[181:43] these models are Transformers these
[181:46] Transformers are massive neurals they
[181:48] have billions of parameters and they
[181:50] imitate humans but they do so in a kind
[181:52] of like a simulation way now the problem
[181:54] is that these are massive complicated
[181:56] systems right there&#39;s a billion
[181:57] parameters here that are outputting a
[181:58] single
[182:00] score it turns out that there are ways
[182:02] to gain these models you can find kinds
[182:05] of inputs that were not part of their
[182:08] training set and these inputs
[182:11] inexplicably get very high scores but in
[182:13] a fake way so very often what you find
[182:17] if you run our lch for very long so for
[182:19] example if we do 1,000 updates which is
[182:21] like say a lot of updates you might
[182:23] expect that your jokes are getting
[182:25] better and that you&#39;re getting like real
[182:26] bangers about Pelicans but that&#39;s not
[182:28] EXA exactly what happens what happens is
[182:31] that uh in the first few hundred steps
[182:34] the jokes about Pelicans are probably
[182:35] improving a little bit and then they
[182:37] actually dramatically fall off the cliff
[182:38] and you start to get extremely
[182:40] nonsensical results like for example you
[182:42] start to get um the top joke about
[182:45] Pelicans starts to be the
[182:48] and this makes no sense right like when
[182:49] you look at it why should this be a top
[182:50] joke but when you take the the and you
[182:53] plug it into your reward model you&#39;d
[182:55] expect score of zero but actually the
[182:57] reward model loves this as a joke it
[182:59] will tell you that the the the theth is
[183:02] a score of 1. Z this is a top joke and
[183:06] this makes no sense right but it&#39;s
[183:07] because these models are just
[183:09] simulations of humans and they&#39;re
[183:10] massive neural lots and you can find
[183:12] inputs at the bottom that kind of like
[183:15] get into the part of the input space
[183:16] that kind of gives you nonsensical
[183:17] results these examples are what&#39;s called
[183:20] adversarial examples and I&#39;m not going
[183:22] to go into the topic too much but these
[183:24] are adversarial inputs to the model they
[183:26] are specific little inputs that kind of
[183:29] go between the nooks and crannies of the
[183:30] model and give nonsensical results at
[183:32] the top now here&#39;s what you might
[183:34] imagine doing you say okay the the the
[183:36] is obviously not score of one um it&#39;s
[183:39] obviously a low score so let&#39;s take the
[183:41] the the the the let&#39;s add it to the data
[183:43] set and give it an ordering that is
[183:45] extremely bad like a score of five and
[183:47] indeed your model will learn that the D
[183:50] should have a very low score and it will
[183:51] give it score of zero the problem is
[183:53] that there will always be basically
[183:55] infinite number of nonsensical
[183:57] adversarial examples hiding in the model
[184:00] if you iterate this process many times
[184:02] and you keep adding nonsensical stuff to
[184:04] your reward model and giving it very low
[184:05] scores you can you&#39;ll never win the game
[184:09] uh you can do this many many rounds and
[184:11] reinforcement learning if you run it
[184:12] long enough will always find a way to
[184:14] gain the model it will discover
[184:15] adversarial examples it will get get
[184:17] really high scores uh with nonsensical
[184:20] results and fundamentally this is
[184:23] because our scoring function is a giant
[184:26] neural nut and RL is extremely good at
[184:28] finding just the ways to trick it uh so
[184:33] long story short you always run rhf put
[184:36] for maybe a few hundred updates the
[184:38] model is getting better and then you
[184:39] have to crop it and you are done you
[184:42] can&#39;t run too much against this reward
[184:45] model because the optimization will
[184:47] start to game it and you basically crop
[184:50] it and you call it and you ship it um
[184:53] and uh you can improve the reward model
[184:56] but you kind of like come across these
[184:57] situations eventually at some point so
[185:00] rhf basically what I usually say is that
[185:03] RF is not RL and what I mean by that is
[185:06] I mean RF is RL obviously but it&#39;s not
[185:09] RL in the magical sense this is not RL
[185:12] that you can run
[185:13] indefinitely these kinds of problems
[185:16] like where you are getting con correct
[185:18] answer you cannot gain this as easily
[185:20] you either got the correct answer or you
[185:21] didn&#39;t and the scoring function is much
[185:23] much simpler you&#39;re just looking at the
[185:25] boxed area and seeing if the result is
[185:27] correct so it&#39;s very difficult to gain
[185:29] these functions but uh gaming a reward
[185:32] model is possible now in these
[185:34] verifiable domains you can run RL
[185:36] indefinitely you could run for tens of
[185:38] thousands hundreds of thousands of steps
[185:40] and discover all kinds of really crazy
[185:41] strategies that we might not even ever
[185:43] think about of Performing really well
[185:45] for all these problems in the game of Go
[185:48] there&#39;s no way to to beat to basically
[185:50] game uh the winning of a game or the
[185:52] losing of a game we have a perfect
[185:54] simulator we know all the different uh
[185:57] where all the stones are placed and we
[185:59] can calculate uh whether someone has won
[186:01] or not there&#39;s no way to gain that and
[186:03] so you can do RL indefinitely and you
[186:05] can eventually be beat even leol but
[186:08] with models like this which are gameable
[186:11] you cannot repeat this process
[186:13] indefinitely so I kind of see rhf as not
[186:16] real RL because the reward function is
[186:19] gameable so it&#39;s kind of more like in
[186:21] the realm of like little fine-tuning
[186:23] it&#39;s a little it&#39;s a little Improvement
[186:26] but it&#39;s not something that is
[186:27] fundamentally set up correctly where you
[186:29] can insert more compute run for longer
[186:32] and get much better and magical results
[186:34] so it&#39;s it&#39;s uh it&#39;s not RL in that
[186:36] sense it&#39;s not RL in the sense that it
[186:38] lacks magic um it can find you in your
[186:41] model and get a better performance and
[186:43] indeed if we go back to chat GPT the GPT
[186:46] 40 model has gone through rhf because it
[186:50] works well but it&#39;s just not RL in the
[186:52] same sense rlf is like a little fine
[186:54] tune that slightly improves your model
[186:56] is maybe like the way I would think
[186:57] about it okay so that&#39;s most of the
[186:59] technical content that I wanted to cover
[187:01] I took you through the three major
[187:03] stages and paradigms of training these
[187:05] models pre-training supervised fine
[187:07] tuning and reinforcement learning and I
[187:09] showed you that they Loosely correspond
[187:11] to the process we already use for
[187:12] teaching children and so in particular
[187:15] we talked about pre-training being sort
[187:17] of like the basic knowledge acquisition
[187:18] of reading Exposition supervised fine
[187:21] tuning being the process of looking at
[187:22] lots and lots of worked examples and
[187:24] imitating experts and practice problems
[187:28] the only difference is that we now have
[187:30] to effectively write textbooks for llms
[187:32] and AIS across all the disciplines of
[187:35] human knowledge and also in all the
[187:37] cases where we actually would like them
[187:39] to work like code and math and you know
[187:42] basically all the other disciplines so
[187:44] we&#39;re in the process of writing
[187:45] textbooks for them refining all the
[187:47] algorithms that I&#39;ve presented on the
[187:48] high level and then of course doing a
[187:50] really really good job at the execution
[187:52] of training these models at scale and
[187:54] efficiently so in particular I didn&#39;t go
[187:56] into too many details but these are
[187:58] extremely large and complicated
[188:00] distributed uh sort of
[188:04] um jobs that have to run over tens of
[188:07] thousands or even hundreds of thousands
[188:08] of gpus and the engineering that goes
[188:10] into this is really at the stateof the
[188:12] art of what&#39;s possible with computers at
[188:14] that scale so I didn&#39;t cover that aspect
[188:17] too much
[188:19] but um this is very kind of serious and
[188:22] they were underlying all these very
[188:24] simple algorithms
[188:25] ultimately now I also talked about sort
[188:28] of like the theory of mind a little bit
[188:30] of these models and the thing I want you
[188:31] to take away is that these models are
[188:33] really good but they&#39;re extremely useful
[188:35] as tools for your work you shouldn&#39;t uh
[188:38] sort of trust them fully and I showed
[188:39] you some examples of that even though we
[188:41] have mitigations for hallucinations the
[188:43] models are not perfect and they will
[188:44] hallucinate still it&#39;s gotten better
[188:46] over time and it will continue to get
[188:48] better but they can
[188:49] hallucinate in other words in in
[188:52] addition to that I covered kind of like
[188:53] what I call the Swiss cheese uh sort of
[188:56] model of llm capabilities that you
[188:57] should have in your mind the models are
[188:59] incredibly good across so many different
[189:00] disciplines but then fail randomly
[189:02] almost in some unique cases so for
[189:05] example what is bigger 9.11 or 9.9 like
[189:07] the model doesn&#39;t know but
[189:09] simultaneously it can turn around and
[189:11] solve Olympiad questions and so this is
[189:14] a hole in the Swiss cheese and there are
[189:16] many of them and you don&#39;t want to trip
[189:17] over them so don&#39;t um treat these models
[189:21] as infallible models check their work
[189:23] use them as tools use them for
[189:25] inspiration use them for the first draft
[189:28] but uh work with them as tools and be
[189:30] ultimately respons responsible for the
[189:32] you know product of your
[189:35] work and that&#39;s roughly what I wanted to
[189:38] talk about this is how they&#39;re trained
[189:40] and this is what they are let&#39;s now turn
[189:43] to what are some of the future
[189:44] capabilities of these models uh probably
[189:46] what&#39;s coming down the pipe and also
[189:48] where can you find these models I have a
[189:50] few blow points on some of the things
[189:51] that you can expect coming down the pipe
[189:53] the first thing you&#39;ll notice is that
[189:55] the models will very rapidly become
[189:56] multimodal everything I talked about
[189:58] above concerned text but very soon we&#39;ll
[190:01] have llms that can not just handle text
[190:03] but they can also operate natively and
[190:05] very easily over audio so they can hear
[190:08] and speak and also images so they can
[190:10] see and paint and we&#39;re already seeing
[190:13] the beginnings of all of this uh but
[190:15] this will be all done natively inside
[190:17] inside the language model and this will
[190:19] enable kind of like natural
[190:20] conversations and roughly speaking the
[190:22] reason that this is actually no
[190:23] different from everything we&#39;ve covered
[190:24] above is that as a baseline you can
[190:28] tokenize audio and images and apply the
[190:31] exact same approaches of everything that
[190:32] we&#39;ve talked about above so it&#39;s not a
[190:34] fundamental change it&#39;s just uh it&#39;s
[190:36] just a to we have to add some tokens so
[190:38] as an example for tokenizing audio we
[190:41] can look at slices of the spectrogram of
[190:43] the audio signal and we can tokenize
[190:45] that and just add more tokens that
[190:47] suddenly represent audio and just add
[190:50] them into the context windows and train
[190:51] on them just like above the same for
[190:53] images we can use patches and we can
[190:56] separately tokenize patches and then
[190:58] what is an image an image is just a
[191:00] sequence of tokens and this actually
[191:03] kind of works and there&#39;s a lot of early
[191:04] work in this direction and so we can
[191:06] just create streams of tokens that are
[191:08] representing audio images as well as
[191:10] text and interpers them and handle them
[191:12] all simultaneously in a single model so
[191:14] that&#39;s one example of multimodality
[191:17] uh second something that people are very
[191:18] interested in
[191:20] is currently most of the work is that
[191:22] we&#39;re handing individual tasks to the
[191:24] models on kind of like a silver platter
[191:26] like please solve this task for me and
[191:28] the model sort of like does this little
[191:29] task but it&#39;s up to us to still sort of
[191:32] like organize a coherent execution of
[191:35] tasks to perform jobs and the models are
[191:38] not yet at the capability required to do
[191:41] this in a coherent error correcting way
[191:43] over long periods of time so they&#39;re not
[191:46] able to fully string together tasks to
[191:48] perform these longer running jobs but
[191:51] they&#39;re getting there and this is
[191:52] improving uh over time but uh probably
[191:55] what&#39;s going to happen here is we&#39;re
[191:56] going to start to see what&#39;s called
[191:57] agents which perform tasks over time and
[192:00] you you supervise them and you watch
[192:02] their work and they come up to once in a
[192:04] while report progress and so on so we&#39;re
[192:07] going to see more long running agents uh
[192:09] tasks that don&#39;t just take you know a
[192:11] few seconds of response but many tens of
[192:13] seconds or even minutes or hours over
[192:15] time uh but these uh models are not
[192:17] infallible as we talked about above so
[192:19] all of this will require supervision so
[192:21] for example in factories people talk
[192:23] about the human to robot ratio uh for
[192:26] automation I think we&#39;re going to see
[192:27] something similar in the digital space
[192:29] where we are going to be talking about
[192:31] human to agent ratios where humans
[192:33] becomes a lot more supervisors of agent
[192:35] tasks um in the digital
[192:38] domain uh next um I think everything is
[192:41] going to become a lot more pervasive and
[192:42] invisible so it&#39;s kind of like
[192:44] integrated into the tools and everywhere
[192:48] um and in addition kind of like computer
[192:51] using so right now these models aren&#39;t
[192:53] able to take actions on your behalf but
[192:56] I think this is a separate bullet point
[192:58] um if you saw chpt launch the operator
[193:02] then uh that&#39;s one early example of that
[193:04] where you can actually hand off control
[193:05] to the model to perform you know
[193:07] keyboard and mouse actions on your
[193:09] behalf so that&#39;s also something that
[193:11] that I think is very interesting the
[193:13] last point I have here is just a general
[193:14] comment that there&#39;s still a lot of
[193:15] research to potentially do in this
[193:16] domain main one example of that uh is
[193:19] something along the lines of test time
[193:20] training so remember that everything
[193:22] we&#39;ve done above and that we talked
[193:24] about has two major stages there&#39;s first
[193:27] the training stage where we tune the
[193:28] parameters of the model to perform the
[193:30] tasks well once we get the parameters we
[193:33] fix them and then we deploy the model
[193:34] for inference from there the model is
[193:37] fixed it doesn&#39;t change anymore it
[193:39] doesn&#39;t learn from all the stuff that
[193:41] it&#39;s doing a test time it&#39;s a fixed um
[193:43] number of parameters and the only thing
[193:45] that is changing is now the token inside
[193:47] the context windows and so the only type
[193:49] of learning or test time learning that
[193:51] the model has access to is the in
[193:53] context learning of its uh kind of like
[193:56] uh dynamically adjustable context window
[193:59] depending on like what it&#39;s doing at
[194:00] test time so but I think this is still
[194:03] different from humans who actually are
[194:04] able to like actually learn uh depending
[194:06] on what they&#39;re doing especially when
[194:08] you sleep for example like your brain is
[194:09] updating your parameters or something
[194:10] like that right so there&#39;s no kind of
[194:13] equivalent of that currently in these
[194:14] models and tools so there&#39;s a lot of
[194:16] like um more wonky ideas I think that
[194:18] are to be explored still and uh in
[194:20] particular I think this will be
[194:21] necessary because the context window is
[194:24] a finite and precious resource and
[194:26] especially once we start to tackle very
[194:27] long running multimodal tasks and we&#39;re
[194:30] putting in videos and these token
[194:31] windows will basically start to grow
[194:34] extremely large like not thousands or
[194:36] even hundreds of thousands but
[194:37] significantly beyond that and the only
[194:39] trick uh the only kind of trick we have
[194:41] Avail to us right now is to make the
[194:43] context Windows longer but I think that
[194:46] that approach by itself will will not
[194:47] will not scale to actual long running
[194:49] tasks that are multimodal over time and
[194:51] so I think new ideas are needed in some
[194:53] of those disciplines um in some of those
[194:56] kind of cases in the main where these
[194:58] tasks are going to require very long
[195:00] contexts so those are some examples of
[195:03] some of the things you can um expect
[195:05] coming down the pipe let&#39;s now turn to
[195:07] where you can actually uh kind of keep
[195:09] track of this progress and um you know
[195:12] be up to date with the latest and grest
[195:13] of what&#39;s happening in the field so I
[195:15] would say the three resources that I
[195:16] have consistently used to stay up to
[195:18] date are number one El Marina uh so let
[195:21] me show you El
[195:23] Marina this is basically an llm leader
[195:26] board and it ranks all the top models
[195:30] and the ranking is based on human
[195:32] comparisons so humans prompt these
[195:34] models and they get to judge which one
[195:35] gives a better answer they don&#39;t know
[195:37] which model is which they&#39;re just
[195:39] looking at which model is the better
[195:40] answer and you can calculate a ranking
[195:42] and then you get some results and so
[195:44] what you can hear is what you can see
[195:46] here is the different organizations like
[195:48] Google Gemini for example that produce
[195:49] these models when you click on any one
[195:51] of these it takes you to the place where
[195:53] that model is
[195:55] hosted and then here we see Google is
[195:57] currently on top with open AI right
[195:59] behind here we see deep seek in position
[196:02] number three now the reason this is a
[196:04] big deal is the last column here you see
[196:05] license deep seek is an MIT license
[196:08] model it&#39;s open weights anyone can use
[196:10] these weights uh anyone can download
[196:12] them anyone can host their own version
[196:14] of Deep seek and they can use it in what
[196:16] whatever way they like and so it&#39;s not a
[196:18] proprietary model that you don&#39;t have
[196:19] access to it&#39;s it&#39;s basically an open
[196:21] weight release and so this is kind of
[196:24] unprecedented that a model this strong
[196:27] was released with open weights so pretty
[196:29] cool from the team next up we have a few
[196:32] more models from Google and open Ai and
[196:34] then when you continue to scroll down
[196:35] you start to see some other Usual
[196:36] Suspects so xai here anthropic with son
[196:40] it uh here at number
[196:43] 14 and
[196:45] um then
[196:47] meta with llama over here so llama
[196:51] similar to deep seek is an open weights
[196:52] model and so uh but it&#39;s down here as
[196:55] opposed to up here now I will say that
[196:57] this leaderboard was really good for a
[197:00] long time I do think that in the last
[197:03] few months it&#39;s become a little bit
[197:05] gamed um and I don&#39;t trust it as much as
[197:08] I used to I think um just empirically I
[197:11] feel like a lot of people for example
[197:13] are using a Sonet from anthropic and
[197:15] that it&#39;s a really good model so but
[197:17] that&#39;s all the way down here um in
[197:19] number 14 and conversely I think not as
[197:22] many people are using Gemini but it&#39;s
[197:23] racking really really high uh so I think
[197:27] use this as a first pass uh but uh sort
[197:30] of try out a few of the models for your
[197:32] tasks and see which one performs better
[197:35] the second thing that I would point to
[197:37] is the uh AI news uh newsletter so AI
[197:41] news is not very creatively named but it
[197:43] is a very good newsletter produced by
[197:44] swix and friends so thank you for
[197:46] maintaining it
[197:47] and it&#39;s been very helpful to me because
[197:48] it is extremely comprehensive so if you
[197:50] go to archives uh you see that it&#39;s
[197:52] produced almost every other day and um
[197:56] it is very comprehensive and some of it
[197:58] is written by humans and curated by
[197:59] humans but a lot of it is constructed
[198:01] automatically with llms so you&#39;ll see
[198:03] that these are very comprehensive and
[198:04] you&#39;re probably not missing anything
[198:06] major if you go through it of course
[198:08] you&#39;re probably not going to go through
[198:09] it because it&#39;s so long but I do think
[198:12] that these summaries all the way up top
[198:14] are quite good and I think have some
[198:15] human oversight uh so this has been very
[198:18] helpful to me and the last thing I would
[198:20] point to is just X and Twitter uh a lot
[198:22] of um AI happens on X and so I would
[198:25] just follow people who you like and
[198:27] trust and get all your latest and
[198:29] greatest uh on X as well so those are
[198:32] the major places that have worked for me
[198:33] over time and finally a few words on
[198:35] where you can find the models and where
[198:37] can you use them so the first one I
[198:39] would say is for any of the biggest
[198:41] proprietary models you just have to go
[198:42] to the website of that LM provider so
[198:44] for example for open a that&#39;s uh chat
[198:47] I believe actually works now uh so
[198:49] that&#39;s for open
[198:50] AI now for or you know for um for Gemini
[198:54] I think it&#39;s gem. google.com or AI
[198:57] Studio I think they have two for some
[198:59] reason that I don&#39;t fly understand no
[199:01] one does um for the open weights models
[199:04] like deep SE CL Etc you have to go to
[199:06] some kind of an inference provider of
[199:08] LMS so my favorite one is together
[199:10] together. a and I showed you that when
[199:11] you go to the playground of together. a
[199:14] then you can sort of pick lots of
[199:15] different models and all of these are
[199:17] open models of different types and you
[199:19] can talk to them here as an
[199:21] example um now if you&#39;d like to use a
[199:24] base model like um you know a base model
[199:28] then this is where I think it&#39;s not as
[199:29] common to find base models even on these
[199:31] inference providers they are all
[199:32] targeting assistants and chat and so I
[199:35] think even here I can&#39;t I couldn&#39;t see
[199:37] base models here so for base models I
[199:39] usually go to hyperbolic because they
[199:41] serve my llama 3.1 base and I love that
[199:45] model and you can just talk to it here
[199:47] so as far as I know this is this is a
[199:49] good place for a base model and I wish
[199:51] more people hosted base models because
[199:53] they are useful and interesting to work
[199:54] with in some cases finally you can also
[199:57] take some of the models that are smaller
[199:59] and you can run them locally and so for
[200:02] example deep seek the biggest model
[200:04] you&#39;re not going to be able to run
[200:05] locally on your MacBook but there are
[200:07] smaller versions of the deep seek model
[200:09] that are what&#39;s called distilled and
[200:11] then also you can run these models at
[200:12] smaller Precision so not at the native
[200:14] Precision of for example fp8 on deep
[200:17] seek or you know bf16 llama but much
[200:20] much lower than that um and don&#39;t worry
[200:23] if you don&#39;t fully understand those
[200:24] details but you can run smaller versions
[200:26] that have been distilled and then at
[200:28] even lower precision and then you can
[200:29] fit them on your uh computer and so you
[200:33] can actually run pretty okay models on
[200:35] your laptop and my favorite I think
[200:37] place I go to usually is LM studio uh
[200:39] which is basically an app you can get
[200:42] and I think it kind of actually looks
[200:43] really ugly and it&#39;s I don&#39;t like that
[200:45] it shows you all these models that are
[200:46] basically not that useful like everyone
[200:48] just wants to run deep seek so I don&#39;t
[200:49] know why they give you these 500
[200:51] different types of models they&#39;re really
[200:53] complicated to search for and you have
[200:54] to choose different distillations and
[200:56] different uh precisions and it&#39;s all
[200:58] really confusing but once you actually
[201:00] understand how it works and that&#39;s a
[201:01] whole separate video then you can
[201:02] actually load up a model like here I
[201:04] loaded up a llama 3 uh2 instruct 1
[201:08] billion and um you can just talk to it
[201:11] so I ask for Pelican jokes and I can ask
[201:14] for another one and it gives me another
[201:15] one Etc all of this that happens here is
[201:18] locally on your computer so we&#39;re not
[201:20] actually going to anywhere anyone else
[201:22] this is running on the GPU on the
[201:24] MacBook Pro so that&#39;s very nice and you
[201:26] can then eject the model when you&#39;re
[201:28] done and that frees up the ram so LM
[201:31] studio is probably like my favorite one
[201:33] even though I don&#39;t I think it&#39;s got a
[201:34] lot of uiux issues and it&#39;s really
[201:36] geared towards uh professionals almost
[201:39] uh but if you watch some videos on
[201:40] YouTube I think you can figure out how
[201:41] to how to use this
[201:43] interface uh so those are a few words on
[201:45] where to find them so let me now loop
[201:47] back around to where we started the
[201:49] question was when we go to chashi
[201:50] pta.com and we enter some kind of a
[201:53] query and we hit go what exactly is
[201:57] happening here what are we seeing what
[201:59] are we talking to how does this work and
[202:03] I hope that this video gave you some
[202:04] appreciation for some of the under the
[202:06] hood details of how these models are
[202:08] trained and what this is that is coming
[202:10] back so in particular we now know that
[202:12] your query is taken and is first chopped
[202:15] up into tokens so we go to to tick
[202:18] tokenizer and here where is the place in
[202:21] the in the um sort of format that is for
[202:24] the user query we basically put in our
[202:27] query right there so our query goes into
[202:31] what we discussed here is the
[202:32] conversation protocol format which is
[202:34] this way that we maintain conversation
[202:36] objects so this gets inserted there and
[202:39] then this whole thing ends up being just
[202:40] a token sequence a onedimensional token
[202:43] sequence under the hood so Chachi PT saw
[202:46] this token sequence and then when we hit
[202:48] go it basically continues appending
[202:50] tokens into this list it continues the
[202:53] sequence it acts like a token
[202:55] autocomplete so in particular it gave us
[202:57] this response so we can basically just
[203:00] put it here and we see the tokens that
[203:02] it continued uh these are the tokens
[203:04] that it continued with
[203:06] roughly now the question
[203:08] becomes okay why are these the tokens
[203:10] that the model responded with what are
[203:12] these tokens where are they coming from
[203:14] uh what are we talking to and how do we
[203:17] program this system and so that&#39;s where
[203:19] we shifted gears and we talked about the
[203:21] under thehood pieces of it so the first
[203:24] stage of this process and there are
[203:25] three stages is the pre-training stage
[203:27] which fundamentally has to do with just
[203:28] knowledge acquisition from the internet
[203:30] into the parameters of this neural
[203:32] network and so the neural net
[203:35] internalizes a lot of Knowledge from the
[203:37] internet but where the personality
[203:39] really comes in is in the process of
[203:41] supervised fine-tuning here and so what
[203:44] what happens here is that basically the
[203:46] a company like openai will curate a
[203:49] large data set of conversations like say
[203:51] 1 million conversation across very
[203:53] diverse topics and there will be
[203:55] conversations between a human and an
[203:57] assistant and even though there&#39;s a lot
[203:59] of synthetic data generation used
[204:01] throughout this entire process and a lot
[204:02] of llm help and so on fundamentally this
[204:05] is a human data curation task with lots
[204:08] of humans involved and in particular
[204:10] these humans are data labelers hired by
[204:12] open AI who are given labeling
[204:14] instructions that they learn and they
[204:16] task is to create ideal assistant
[204:18] responses for any arbitrary prompts so
[204:21] they are teaching the neural network by
[204:24] example how to respond to
[204:27] prompts so what is the way to think
[204:29] about what came back here like what is
[204:32] this well I think the right way to think
[204:34] about it is that this is the neural
[204:37] network simulation of a data labeler at
[204:40] openai so it&#39;s as if I gave this query
[204:44] to a data Li open and this data labeler
[204:47] first reads all of the labeling
[204:48] instructions from open Ai and then
[204:51] spends 2 hours writing up the ideal
[204:53] assistant response to this query and uh
[204:57] giving it to me now we&#39;re not actually
[204:59] doing that right because we didn&#39;t wait
[205:01] two hours so what we&#39;re getting here is
[205:02] a neural network simulation of that
[205:05] process and we have to keep in mind that
[205:08] these neural networks don&#39;t function
[205:10] like human brains do they are different
[205:12] what&#39;s easy or hard for them is
[205:13] different from what&#39;s easy or hard for
[205:15] humans and so we really are just getting
[205:17] a simulation so here I shown you this is
[205:20] a token stream and this is fundamentally
[205:23] the neural network with a bunch of
[205:24] activations and neurons in between this
[205:26] is a fixed mathematical expression that
[205:28] mixes inputs from tokens with parameters
[205:32] of the model and they get mixed up and
[205:35] get you the next token in a sequence but
[205:37] this is a finite amount of compute that
[205:39] happens for every single token and so
[205:41] this is some kind of a lossy simulation
[205:44] of a human that is kind of like
[205:46] restricted in this way and so whatever
[205:49] the humans
[205:50] write the language model is kind of
[205:52] imitating on this token level with only
[205:55] this this specific computation for every
[205:58] single token and
[206:00] sequence we also saw that as a result of
[206:03] this and the cognitive differences the
[206:05] models will suffer in a variety of ways
[206:08] and uh you have to be very careful with
[206:10] their use so for example we saw that
[206:11] they will suffer from hallucinations and
[206:14] they also we have the sense of a Swiss
[206:16] model of the LM capabilities where
[206:18] basically there&#39;s like holes in the
[206:20] cheese sometimes the models will just
[206:22] arbitrarily like do something dumb uh so
[206:25] even though they&#39;re doing lots of
[206:26] magical stuff sometimes they just can&#39;t
[206:28] so maybe you&#39;re not giving them enough
[206:30] tokens to think and maybe they&#39;re going
[206:32] to just make stuff up because they&#39;re
[206:33] mental arithmetic breaks uh maybe they
[206:35] are suddenly unable to count number of
[206:38] letters um or maybe they&#39;re unable to
[206:40] tell you that 911 9.11 is smaller than
[206:43] 9.9 and it looks kind of dumb and so so
[206:46] it&#39;s a Swiss cheese capability and we
[206:48] have to be careful with that and we saw
[206:49] the reasons for
[206:50] that but fundamentally this is how we
[206:53] think of what came back it&#39;s again a
[206:56] simulation of this neural network of a
[207:00] human data labeler following the
[207:03] labeling instructions at open a so
[207:06] that&#39;s what we&#39;re getting back now I do
[207:09] think that the uh things change a little
[207:11] bit when you actually go and reach for
[207:13] one of the thinking models like o03 mini
[207:17] and the reason for that is that GPT
[207:20] 40 basically doesn&#39;t do reinforcement
[207:23] learning it does do rhf but I&#39;ve told
[207:26] you that rhf is not RL there&#39;s no
[207:29] there&#39;s no uh time for magic in there
[207:31] it&#39;s just a little bit of a fine-tuning
[207:33] is the way to look at it but these
[207:35] thinking models they do use RL so they
[207:38] go through this third state stage of
[207:41] perfecting their thinking process and
[207:44] discovering new thinking strategies and
[207:46] uh
[207:46] solutions to problem solving that look a
[207:49] little bit like your internal monologue
[207:51] in your head and they practice that on a
[207:53] large collection of practice problems
[207:55] that companies like openi create and
[207:57] curate and um then make available to the
[208:00] LMS so when I come here and I talked to
[208:02] a thinking model and I put in this
[208:05] question what we&#39;re seeing here is not
[208:07] anymore just the straightforward
[208:09] simulation of a human data labeler like
[208:11] this is actually kind of new unique and
[208:14] interesting um and of course open is not
[208:16] showing us the under thehood thinking
[208:18] and the chains of thought that are
[208:20] underlying the reasoning here but we
[208:23] know that such a thing exists and this
[208:24] is a summary of it and what we&#39;re
[208:26] getting here is actually not just an
[208:27] imitation of a human data labeler it&#39;s
[208:29] actually something that is kind of new
[208:30] and interesting and exciting in the
[208:32] sense that it is a function of thinking
[208:35] that was emergent in a simulation it&#39;s
[208:37] not just imitating human data labeler it
[208:39] comes from this reinforcement learning
[208:41] process and so here we&#39;re of course not
[208:43] giving it a chance to shine because this
[208:45] is not a mathematical or a reasoning
[208:46] problem this is just some kind of a sort
[208:48] of creative writing problem roughly
[208:50] speaking and I think it&#39;s um it&#39;s a a
[208:54] question an open question as to whether
[208:57] the thinking strategies that are
[208:59] developed inside verifiable domains
[209:02] transfer and are generalizable to other
[209:05] domains that are unverifiable such as
[209:07] create writing the extent to which that
[209:09] transfer happens is unknown in the field
[209:12] I would say so we&#39;re not sure if we are
[209:14] able to do RL on everything that is very
[209:16] verifiable and see the benefits of that
[209:18] on things that are unverifiable like
[209:20] this prompt so that&#39;s an open question
[209:22] the other thing that&#39;s interesting is
[209:23] that this reinforcement learning here is
[209:26] still like way too new primordial and
[209:29] nent so we&#39;re just seeing like the
[209:31] beginnings of the hints of greatness uh
[209:34] in the reasoning problems we&#39;re seeing
[209:36] something that is in principle capable
[209:38] of something like the equivalent of move
[209:40] 37 but not in the game of Go but in open
[209:44] domain thinking and problem solving in
[209:46] principle this Paradigm is capable of
[209:48] doing something really cool new and
[209:50] exciting something even that no human
[209:52] has thought of before in principle these
[209:54] models are capable of analogies no human
[209:56] has had so I think it&#39;s incredibly
[209:58] exciting that these models exist but
[210:00] again it&#39;s very early and these are
[210:02] primordial models for now um and they
[210:05] will mostly shine in domains that are
[210:06] verifiable like math en code Etc so very
[210:10] interesting to play with and think about
[210:11] and
[210:12] use and then that&#39;s roughly it um um I
[210:16] would say those are the broad Strokes of
[210:18] what&#39;s available right now I will say
[210:20] that overall it is an extremely exciting
[210:23] time to be in the
[210:24] field personally I use these models all
[210:26] the time daily uh tens or hundreds of
[210:28] times because they dramatically
[210:30] accelerate my work I think a lot of
[210:31] people see the same thing I think we&#39;re
[210:33] going to see a huge amount of wealth
[210:34] creation as a result of these models be
[210:37] aware of some of their shortcomings even
[210:40] with RL models they&#39;re going to suffer
[210:42] from some of these use it as a tool in a
[210:44] toolbox don&#39;t trust it fully because
[210:47] they will randomly do dumb things they
[210:49] will randomly hallucinate they will
[210:51] randomly skip over some mental
[210:52] arithmetic and not get it right um they
[210:55] randomly can&#39;t count or something like
[210:56] that so use them as tools in the toolbox
[210:58] check their work and own the product of
[211:00] your work but use them for inspiration
[211:03] for first draft uh ask them questions
[211:06] but always check and verify and you will
[211:08] be very successful in your work if you
[211:10] do so uh so I hope this video was useful
[211:13] and interesting to you I hope you had it
[211:15] fun and uh it&#39;s already like very long
[211:17] so I apologize for that but I hope it
[211:19] was useful and yeah I will see you later
