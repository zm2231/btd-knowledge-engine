---
title: "The spelled-out intro to language modeling: building makemore"
creator: "andrej-karpathy"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=PaCmpygFfXo"
video_id: "PaCmpygFfXo"
duration: "1:57:45"
transcript_method: "youtube-captions"
segment_count: 3365
char_count: 100179
status: ingested
topics: []
meta_patterns: []
---

# The spelled-out intro to language modeling: building makemore

**Creator**: andrej-karpathy | **Duration**: 1:57:45
**URL**: https://www.youtube.com/watch?v=PaCmpygFfXo
**Transcript**: 3365 segments, 100179 chars

## Transcript

hi everyone hope you're well and next up what i'd like to do is i'd like to build out make more like micrograd before it make more is a repository that i have on my github webpage you can look at it but just like with micrograd i'm going to build it out step by step and i'm going to spell everything out so we're going to build it out slowly and together now what is make more make more as the name suggests makes more of things that you give it so here's an example names.txt is an example dataset to make more and when you look at names.txt you'll find that it's a very large data set of names so here's lots of different types of names in fact i believe there are 32 000 names that i've sort of found randomly on the government website and if you train make more on this data set it will learn to make more of things like this and in particular in this case that will mean more things that sound name-like but are actually unique names and maybe if you have a baby and you're trying to assign name maybe you're looking for a cool new sounding unique name make more might help you so here are some example generations from the neural network once we train it on our data set so here's some example unique names that it will generate dontel irot zhendi and so on and so all these are sound name like but they're not of course names so under the hood make more is a character level language model so what that means is that it is treating every single line here as an example and within each example it's treating them all as sequences of individual characters so r e e s e is this example and that's the sequence of characters and that's the level on which we are building out make more and what it means to be a character level language model then is that it's just uh sort of modeling those sequences of characters and it knows how to predict the next character in the sequence now we're actually going to implement a large number of character level language models in terms of the neural networks that are involved in predicting the next character in a sequence so very simple bi-gram and back of work models multilingual perceptrons recurrent neural networks all the way to modern transformers in fact the transformer that we will build will be basically the equivalent transformer to gpt2 if you have heard of gpt uh so that's kind of a big deal it's a modern network and by the end of the series you will actually understand how that works um on the level of characters now to give you a sense of the extensions here uh after characters we will probably spend some time on the word level so that we can generate documents of words not just little you know segments of characters but we can generate entire large much larger documents and then we're probably going to go into images and image text networks such as dolly stable diffusion and so on but for now we have to start here character level language modeling let's go so like before we are starting with a completely blank jupiter notebook page the first thing is i would like to basically load up the dataset names.txt so we're going to open up names.txt for reading and we're going to read in everything into a massive string and then because it's a massive string we'd only like the individual words and put them in the list so let's call split lines on that string to get all of our words as a python list of strings so basically we can look at for example the first 10 words and we have that it's a list of emma olivia eva and so on and if we look at the top of the page here that is indeed what we see um so that's good this list actually makes me feel that this is probably sorted by frequency but okay so these are the words now we'd like to actually like learn a little bit more about this data set let's look at the total number of words we expect this to be roughly 32 000 and then what is the for example shortest word so min of length of each word for w inwards so the shortest word will be length two and max of one w for w in words so the longest word will be 15 characters so let's now think through our very first language model as i mentioned a character level language model is predicting the next character in a sequence given already some concrete sequence of characters before it now we have to realize here is that every single word here like isabella is actually quite a few examples packed in to that single word because what is an existence of a word like isabella in the data set telling us really it's saying that the character i is a very likely character to come first in the sequence of a name the character s is likely to come after i the character a is likely to come after is the character b is very likely to come after isa and so on all the way to a following isabel and then there's one more example actually packed in here and that is that after there's isabella the word is very likely to end so that's one more sort of explicit piece of information that we have here that we have to be careful with and so there's a lot backed into a single individual word in terms of the statistical structure of what's likely to follow in these character sequences and then of course we don't have just an individual word we actually have 32 000 of these and so there's a lot of structure here to model now in the beginning what i'd like to start with is i'd like to start with building a bi-gram language model now in the bigram language model we're always working with just two characters at a time so we're only looking at one character that we are given and we're trying to predict the next character in the sequence so um what characters are likely to follow are what characters are likely to follow a and so on and we're just modeling that kind of a little local structure and we're forgetting the fact that we may have a lot more information we're always just looking at the previous character to predict the next one so it's a very simple and weak language model but i think it's a great place to start so now let's begin by looking at these bi-grams in our data set and what they look like and these bi-grams again are just two characters in a row so for w in words each w here is an individual word a string we want to iterate uh for we're going to iterate this word with consecutive characters so two characters at a time sliding it through the word now a interesting nice way cute way to do this in python by the way is doing something like this for character one character two in zip off w and w at one one column print character one character two and let's not do all the words let's just do the first three words and i'm going to show you in a second how this works but for now basically as an example let's just do the very first word alone emma you see how we have a emma and this will just print e m m m a and the reason this works is because w is the string emma w at one column is the string mma and zip takes two iterators and it pairs them up and then creates an iterator over the tuples of their consecutive entries and if any one of these lists is shorter than the other then it will just halt and return so basically that's why we return em mmm ma but then because this iterator second one here runs out of elements zip just ends and that's why we only get these tuples so pretty cute so these are the consecutive elements in the first word now we have to be careful because we actually have more information here than just these three examples as i mentioned we know that e is the is very likely to come first and we know that a in this case is coming last so one way to do this is basically we're going to create a special array here all characters and um we're going to hallucinate a special start token here i'm going to call it like special start so this is a list of one element plus w and then plus a special end character and the reason i'm wrapping the list of w here is because w is a string emma list of w will just have the individual characters in the list and then doing this again now but not iterating over w's but over the characters will give us something like this so e is likely so this is a bigram of the start character and e and this is a bigram of the a and the special end character and now we can look at for example what this looks like for olivia or eva and indeed we can actually potentially do this for the entire data set but we won't print that that's going to be too much but these are the individual character diagrams and we can print them now in order to learn the statistics about which characters are likely to follow other characters the simplest way in the bigram language models is to simply do it by counting so we're basically just going to count how often any one of these combinations occurs in the training set in these words so we're going to need some kind of a dictionary that's going to maintain some counts for every one of these diagrams so let's use a dictionary b and this will map these bi-grams so bi-gram is a tuple of character one character two and then b at bi-gram will be b dot get of bi-gram which is basically the same as b at bigram but in the case that bigram is not in the dictionary b we would like to by default return to zero plus one so this will basically add up all the bigrams and count how often they occur let's get rid of printing or rather let's keep the printing and let's just inspect what b is in this case and we see that many bi-grams occur just a single time this one allegedly occurred three times so a was an ending character three times and that's true for all of these words all of emma olivia and eva and with a so that's why this occurred three times now let's do it for all the words oops i should not have printed i'm going to erase that let's kill this let's just run and now b will have the statistics of the entire data set so these are the counts across all the words of the individual pie grams and we could for example look at some of the most common ones and least common ones this kind of grows in python but the way to do this the simplest way i like is we just use b dot items b dot items returns the tuples of key value in this case the keys are the character diagrams and the values are the counts and so then what we want to do is we want to do sorted of this but by default sort is on the first on the first item of a tuple but we want to sort by the values which are the second element of a tuple that is the key value so we want to use the key equals lambda that takes the key value and returns the key value at the one not at zero but at one which is the count so we want to sort by the count of these elements and actually we wanted to go backwards so here we have is the bi-gram q and r occurs only a single time dz occurred only a single time and when we sort this the other way around we're going to see the most likely bigrams so we see that n was very often an ending character many many times and apparently n almost always follows an a and that's a very likely combination as well so this is kind of the individual counts that we achieve over the entire data set now it's actually going to be significantly more convenient for us to keep this information in a two-dimensional array instead of a python dictionary so we're going to store this information in a 2d array and the rows are going to be the first character of the bigram and the columns are going to be the second character and each entry in this two-dimensional array will tell us how often that first character files the second character in the data set so in particular the array representation that we're going to use or the library is that of pytorch and pytorch is a deep learning neural network framework but part of it is also this torch.tensor which allows us to create multi-dimensional arrays and manipulate them very efficiently so let's import pytorch which you can do by import torch and then we can create arrays so let's create a array of zeros and we give it a size of this array let's create a three by five array as an example and this is a three by five array of zeros and by default you'll notice a.d type which is short for data type is float32 so these are single precision floating point numbers because we are going to represent counts let's actually use d type as torch dot and 32 so these are 32-bit integers so now you see that we have integer data inside this tensor now tensors allow us to really manipulate all the individual entries and do it very efficiently so for example if we want to change this bit we have to index into the tensor and in particular here this is the first row and the because it's zero indexed so this is row index one and column index zero one two three so a at one comma three we can set that to one and then a we'll have a 1 over there we can of course also do things like this so now a will be 2 over there or 3. and also we can for example say a 0 0 is 5 and then a will have a 5 over here so that's how we can index into the arrays now of course the array that we are interested in is much much bigger so for our purposes we have 26 letters of the alphabet and then we have two special characters s and e so uh we want 26 plus 2 or 28 by 28 array and let's call it the capital n because it's going to represent sort of the counts let me erase this stuff so that's the array that starts at zeros 28 by 28 and now let's copy paste this here but instead of having a dictionary b which we're going to erase we now have an n now the problem here is that we have these characters which are strings but we have to now um basically index into a um array and we have to index using integers so we need some kind of a lookup table from characters to integers so let's construct such a character array and the way we're going to do this is we're going to take all the words which is a list of strings we're going to concatenate all of it into a massive string so this is just simply the entire data set as a single string we're going to pass this to the set constructor which takes this massive string and throws out duplicates because sets do not allow duplicates so set of this will just be the set of all the lowercase characters and there should be a total of 26 of them and now we actually don't want a set we want a list but we don't want a list sorted in some weird arbitrary way we want it to be sorted from a to z so sorted list so those are our characters now what we want is this lookup table as i mentioned so let's create a special s2i i will call it um s is string or character and this will be an s2i mapping for is in enumerate of these characters so enumerate basically gives us this iterator over the integer index and the actual element of the list and then we are mapping the character to the integer so s2i is a mapping from a to 0 b to 1 etc all the way from z to 25 and that's going to be useful here but we actually also have to specifically set that s will be 26 and s to i at e will be 27 right because z was 25. so those are the lookups and now we can come here and we can map both character 1 and character 2 to their integers so this will be s2i at character 1 and ix2 will be s2i of character 2. and now we should be able to do this line but using our array so n at x1 ix2 this is the two-dimensional array indexing i've shown you before and honestly just plus equals one because everything starts at zero so this should work and give us a large 28 by 28 array of all these counts so if we print n this is the array but of course it looks ugly so let's erase this ugly mess and let's try to visualize it a bit more nicer so for that we're going to use a library called matplotlib so matplotlib allows us to create figures so we can do things like plt item show of the counter array so this is the 28x28 array and this is structure but even this i would say is still pretty ugly so we're going to try to create a much nicer visualization of it and i wrote a bunch of code for that the first thing we're going to need is we're going to need to invert this array here this dictionary so s2i is mapping from s to i and in i2s we're going to reverse this dictionary so iterator of all the items and just reverse that array so i2s maps inversely from 0 to a 1 to b etc so we'll need that and then here's the code that i came up with to try to make this a little bit nicer we create a figure we plot n and then we do and then we visualize a bunch of things later let me just run it so you get a sense of what this is okay so you see here that we have the array spaced out and every one of these is basically like b follows g zero times b follows h 41 times um so a follows j 175 times and so what you can see that i'm doing here is first i show that entire array and then i iterate over all the individual little cells here and i create a character string here which is the inverse mapping i2s of the integer i and the integer j so those are the bi-grams in a character representation and then i plot just the diagram text and then i plot the number of times that this bigram occurs now the reason that there's a dot item here is because when you index into these arrays these are torch tensors you see that we still get a tensor back so the type of this thing you'd think it would be just an integer 149 but it's actually a torch.tensor and so if you do dot item then it will pop out that in individual integer so it will just be 149. so that's what's happening there and these are just some options to make it look nice so what is the structure of this array we have all these counts and we see that some of them occur often and some of them do not occur often now if you scrutinize this carefully you will notice that we're not actually being very clever that's because when you come over here you'll notice that for example we have an entire row of completely zeros and that's because the end character is never possibly going to be the first character of a bi-gram because we're always placing these end tokens all at the end of the diagram similarly we have entire columns zeros here because the s character will never possibly be the second element of a bigram because we always start with s and we end with e and we only have the words in between so we have an entire column of zeros an entire row of zeros and in this little two by two matrix here as well the only one that can possibly happen is if s directly follows e that can be non-zero if we have a word that has no letters so in that case there's no letters in the word it's an empty word and we just have s follows e but the other ones are just not possible and so we're basically wasting space and not only that but the s and the e are getting very crowded here i was using these brackets because there's convention and natural language processing to use these kinds of brackets to denote special tokens but we're going to use something else so let's fix all this and make it prettier we're not actually going to have two special tokens we're only going to have one special token so we're going to have n by n array of 27 by 27 instead instead of having two we will just have one and i will call it a dot okay let me swing this over here now one more thing that i would like to do is i would actually like to make this special character half position zero and i would like to offset all the other letters off i find that a little bit more pleasing so we need a plus one here so that the first character which is a will start at one so s2i will now be a starts at one and dot is 0 and i2s of course we're not changing this because i2s just creates a reverse mapping and this will work fine so 1 is a 2 is b 0 is dot so we've reversed that here we have a dot and a dot this should work fine make sure i start at zeros count and then here we don't go up to 28 we go up to 27 and this should just work okay so we see that dot never happened it's at zero because we don't have empty words then this row here now is just uh very simply the um counts for all the first letters so uh j starts a word h starts a word i starts a word etc and then these are all the ending characters and in between we have the structure of what characters follow each other so this is the counts array of our entire data set so this array actually has all the information necessary for us to actually sample from this bigram uh character level language model and um roughly speaking what we're going to do is we're just going to start following these probabilities and these counts and we're going to start sampling from the from the model so in the beginning of course we start with the dot the start token dot so to sample the first character of a name we're looking at this row here so we see that we have the counts and those concepts terminally are telling us how often any one of these characters is to start a word so if we take this n and we grab the first row we can do that by using just indexing as zero and then using this notation column for the rest of that row so n zero colon is indexing into the zeroth row and then it's grabbing all the columns and so this will give us a one-dimensional array of the first row so zero four four ten you know zero four four ten one three oh six one five four two etc it's just the first row the shape of this is 27 it's just the row of 27 and the other way that you can do this also is you just you don't need to actually give this you just grab the zeroth row like this this is equivalent now these are the counts and now what we'd like to do is we'd like to basically um sample from this since these are the raw counts we actually have to convert this to probabilities so we create a probability vector so we'll take n of zero and we'll actually convert this to float first okay so these integers are converted to float floating point numbers and the reason we're creating floats is because we're about to normalize these counts so to create a probability distribution here we want to divide we basically want to do p p p divide p that sum and now we get a vector of smaller numbers and these are now probabilities so of course because we divided by the sum the sum of p now is 1. so this is a nice proper probability distribution it sums to 1 and this is giving us the probability for any single character to be the first character of a word so now we can try to sample from this distribution to sample from these distributions we're going to use storch.multinomial which i've pulled up here so torch.multinomial returns uh samples from the multinomial probability distribution which is a complicated way of saying you give me probabilities and i will give you integers which are sampled according to the property distribution so this is the signature of the method and to make everything deterministic we're going to use a generator object in pytorch so this makes everything deterministic so when you run this on your computer you're going to the exact get the exact same results that i'm getting here on my computer so let me show you how this works here's the deterministic way of creating a torch generator object seeding it with some number that we can agree on so that seeds a generator gets gives us an object g and then we can pass that g to a function that creates um here random numbers twerk.rand creates random numbers three of them and it's using this generator object to as a source of randomness so without normalizing it i can just print this is sort of like numbers between 0 and 1 that are random according to this thing and whenever i run it again i'm always going to get the same result because i keep using the same generator object which i'm seeing here and then if i divide to normalize i'm going to get a nice probability distribution of just three elements and then we can use torsion multinomial to draw samples from it so this is what that looks like tertiary multinomial we'll take the torch tensor of probability distributions then we can ask for a number of samples let's say 20. replacement equals true means that when we draw an element we will uh we can draw it and then we can put it back into the list of eligible indices to draw again and we have to specify replacement as true because by default uh for some reason it's false and i think you know it's just something to be careful with and the generator is passed in here so we're going to always get deterministic results the same results so if i run these two we're going to get a bunch of samples from this distribution now you'll notice here that the probability for the first element in this tensor is 60 so in these 20 samples we'd expect 60 of them to be zero we'd expect thirty percent of them to be one and because the the element index two has only ten percent probability very few of these samples should be two and indeed we only have a small number of twos and we can sample as many as we'd like and the more we sample the more these numbers should um roughly have the distribution here so we should have lots of zeros half as many um ones and we should have um three times as few oh sorry s few ones and three times as few uh twos so you see that we have very few twos we have some ones and most of them are zero so that's what torsion multinomial is doing for us here we are interested in this row we've created this p here and now we can sample from it so if we use the same seed and then we sample from this distribution let's just get one sample then we see that the sample is say 13. so this will be the index and let's you see how it's a tensor that wraps 13 we again have to use that item to pop out that integer and now index would be just the number 13. and of course the um we can do we can map the i2s of ix to figure out exactly which character we're sampling here we're sampling m so we're saying that the first character is in our generation and just looking at the road here m was drawn and you we can see that m actually starts a large number of words uh m started 2 500 words out of 32 000 words so almost a bit less than 10 percent of the words start with them so this was actually a fairly likely character to draw um so that would be the first character of our work and now we can continue to sample more characters because now we know that m started m is already sampled so now to draw the next character we will come back here and we will look for the row that starts with m so you see m and we have a row here so we see that m dot is 516 m a is this many and b is this many etc so these are the counts for the next row and that's the next character that we are going to now generate so i think we are ready to actually just write out the loop because i think you're starting to get a sense of how this is going to go the um we always begin at index 0 because that's the start token and then while true we're going to grab the row corresponding to index that we're currently on so that's p so that's n array at ix converted to float is rp then we normalize this p to sum to one i accidentally ran the infinite loop we normalize p to something one then we need this generator object now we're going to initialize up here and we're going to draw a single sample from this distribution and then this is going to tell us what index is going to be next if the index sampled is 0 then that's now the end token so we will break otherwise we are going to print s2i of ix i2s and uh that's pretty much it we're just uh this should work okay more so that's that's the name that we've sampled we started with m the next step was o then r and then dot and this dot we it here as well so let's now do this a few times so let's actually create an out list here and instead of printing we're going to append so out that append this character and then here let's just print it at the end so let's just join up all the outs and we're just going to print more okay now we're always getting the same result because of the generator so if we want to do this a few times we can go for i in range 10 we can sample 10 names and we can just do that 10 times and these are the names that we're getting out let's do 20. i'll be honest with you this doesn't look right so i started a few minutes to convince myself that it actually is right the reason these samples are so terrible is that bigram language model is actually look just like really terrible we can generate a few more here and you can see that they're kind of like their name like a little bit like yanu o'reilly etc but they're just like totally messed up um and i mean the reason that this is so bad like we're generating h as a name but you have to think through it from the model's eyes it doesn't know that this h is the very first h all it knows is that h was previously and now how likely is h the last character well it's somewhat likely and so it just makes it last character it doesn't know that there were other things before it or there were not other things before it and so that's why it's generating all these like nonsense names another way to do this is to convince yourself that this is actually doing something reasonable even though it's so terrible is these little piece here are 27 right like 27. so how about if we did something like this instead of p having any structure whatsoever how about if p was just torch dot once of 27 by default this is a float 32 so this is fine divide 27 so what i'm doing here is this is the uniform distribution which will make everything equally likely and we can sample from that so let's see if that does any better okay so it's this is what you have from a model that is completely untrained where everything is equally likely so it's obviously garbage and then if we have a trained model which is trained on just bi-grams this is what we get so you can see that it is more name-like it is actually working it's just um my gram is so terrible and we have to do better now next i would like to fix an inefficiency that we have going on here because what we're doing here is we're always fetching a row of n from the counts matrix up ahead and then we're always doing the same things we're converting to float and we're dividing and we're doing this every single iteration of this loop and we just keep renormalizing these rows over and over again and it's extremely inefficient and wasteful so what i'd like to do is i'd like to actually prepare a matrix capital p that will just have the probabilities in it so in other words it's going to be the same as the capital n matrix here of counts but every single row will have the row of probabilities uh that is normalized to 1 indicating the probability distribution for the next character given the character before it um as defined by which row we're in so basically what we'd like to do is we'd like to just do it up front here and then we would like to just use that row here so here we would like to just do p equals p of ix instead okay the other reason i want to do this is not just for efficiency but also i would like us to practice these n-dimensional tensors and i'd like us to practice their manipulation and especially something that's called broadcasting that we'll go into in a second we're actually going to have to become very good at these tensor manipulations because if we're going to build out all the way to transformers we're going to be doing some pretty complicated um array operations for efficiency and we need to really understand that and be very good at it so intuitively what we want to do is we first want to grab the floating point copy of n and i'm mimicking the line here basically and then we want to divide all the rows so that they sum to 1. so we'd like to do something like this p divide p dot sum but now we have to be careful because p dot sum actually produces a sum sorry equals and that float copy p dot sum produces a um sums up all of the counts of this entire matrix n and gives us a single number of just the summation of everything so that's not the way we want to define divide we want to simultaneously and in parallel divide all the rows by their respective sums so what we have to do now is we have to go into documentation for torch.sum and we can scroll down here to a definition that is relevant to us which is where we don't only provide an input array that we want to sum but we also provide the dimension along which we want to sum and in particular we want to sum up over rows right now one more argument that i want you to pay attention to here is the keep them is false if keep them is true then the output tensor is of the same size as input except of course the dimension along which is summed which will become just one but if you pass in keep them as false then this dimension is squeezed out and so torch.sum not only does the sum and collapses dimension to be of size one but in addition it does what's called a squeeze where it squeezes out it squeezes out that dimension so basically what we want here is we instead want to do p dot sum of some axis and in particular notice that p dot shape is 27 by 27 so when we sum up across axis zero then we would be taking the zeroth dimension and we would be summing across it so when keep them as true then this thing will not only give us the counts across um along the columns but notice that basically the shape of this is 1 by 27 we just get a row vector and the reason we get a row vector here again is because we passed in zero dimension so this zero dimension becomes one and we've done a sum and we get a row and so basically we've done the sum this way vertically and arrived at just a single 1 by 27 vector of counts what happens when you take out keep them is that we just get 27. so it squeezes out that dimension and we just get a one-dimensional vector of size 27. now we don't actually want one by 27 row vector because that gives us the counts or the sums across the columns we actually want to sum the other way along dimension one and you'll see that the shape of this is 27 by one so it's a column vector it's a 27 by one vector of counts okay and that's because what's happened here is that we're going horizontally and this 27 by 27 matrix becomes a 27 by 1 array now you'll notice by the way that um the actual numbers of these counts are identical and that's because this special array of counts here comes from bi-gram statistics and actually it just so happens by chance or because of the way this array is constructed that the sums along the columns or along the rows horizontally or vertically is identical but actually what we want to do in this case is we want to sum across the rows horizontally so what we want here is p that sum of one with keep in true 27 by one column vector and now what we want to do is we want to divide by that now we have to be careful here again is it possible to take what's a um p dot shape you see here 27 by 27 is it possible to take a 27 by 27 array and divide it by what is a 27 by 1 array is that an operation that you can do and whether or not you can perform this operation is determined by what's called broadcasting rules so if you just search broadcasting semantics in torch you'll notice that there's a special definition for what's called broadcasting that uh for whether or not um these two uh arrays can be combined in a binary operation like division so the first condition is each tensor has at least one dimension which is the case for us and then when iterating over the dimension sizes starting at the trailing dimension the dimension sizes must either be equal one of them is one or one of them does not exist okay so let's do that we need to align the two arrays and their shapes which is very easy because both of these shapes have two elements so they're aligned then we iterate over from the from the right and going to the left each dimension must be either equal one of them is a one or one of them does not exist so in this case they're not equal but one of them is a one so this is fine and then this dimension they're both equal so uh this is fine so all the dimensions are fine and therefore the this operation is broadcastable so that means that this operation is allowed and what is it that these arrays do when you divide 27 by 27 by 27 by one what it does is that it takes this dimension one and it stretches it out it copies it to match 27 here in this case so in our case it takes this column vector which is 27 by 1 and it copies it 27 times to make these both be 27 by 27 internally you can think of it that way and so it copies those counts and then it does an element-wise division which is what we want because these counts we want to divide by them on every single one of these columns in this matrix so this actually we expect will normalize every single row and we can check that this is true by taking the first row for example and taking its sum we expect this to be 1. because it's not normalized and then we expect this now because if we actually correctly normalize all the rows we expect to get the exact same result here so let's run this it's the exact same result this is correct so now i would like to scare you a little bit uh you actually have to like i basically encourage you very strongly to read through broadcasting semantics and i encourage you to treat this with respect and it's not something to play fast and loose with it's something to really respect really understand and look up maybe some tutorials for broadcasting and practice it and be careful with it because you can very quickly run into books let me show you what i mean you see how here we have p dot sum of one keep them as true the shape of this is 27 by one let me take out this line just so we have the n and then we can see the counts we can see that this is a all the counts across all the rows and it's a 27 by one column vector right now suppose that i tried to do the following but i erase keep them just true here what does that do if keep them is not true it's false then remember according to documentation it gets rid of this dimension one it squeezes it out so basically we just get all the same counts the same result except the shape of it is not 27 by 1 it is just 27 the one disappears but all the counts are the same so you'd think that this divide that would uh would work first of all can we even uh write this and will it is it even is it even expected to run is it broadcastable let's determine if this result is broadcastable p.summit one is shape is 27. this is 27 by 27. so 27 by 27 broadcasting into 27. so now rules of broadcasting number one align all the dimensions on the right done now iteration over all the dimensions starting from the right going to the left all the dimensions must either be equal one of them must be one or one that does not exist so here they are all equal here the dimension does not exist so internally what broadcasting will do is it will create a one here and then we see that one of them is a one and this will get copied and this will run this will broadcast okay so you'd expect this to work because we we are this broadcast and this we can divide this now if i run this you'd expect it to work but it doesn't uh you actually get garbage you get a wrong dissolve because this is actually a bug this keep them equals true makes it work this is a bug in both cases we are doing the correct counts we are summing up across the rows but keep them is saving us and making it work so in this case i'd like to encourage you to potentially like pause this video at this point and try to think about why this is buggy and why the keep dim was necessary here okay so the reason to do for this is i'm trying to hint it here when i was sort of giving you a bit of a hint on how this works this 27 vector internally inside the broadcasting this becomes a 1 by 27 and 1 by 27 is a row vector right and now we are dividing 27 by 27 by 1 by 27 and torch will replicate this dimension so basically uh it will take it will take this row vector and it will copy it vertically now 27 times so the 27 by 27 lies exactly and element wise divides and so basically what's happening here is we're actually normalizing the columns instead of normalizing the rows so you can check that what's happening here is that p at zero which is the first row of p dot sum is not one it's seven it is the first column as an example that sums to one so to summarize where does the issue come from the issue comes from the silent adding of a dimension here because in broadcasting rules you align on the right and go from right to left and if dimension doesn't exist you create it so that's where the problem happens we still did the counts correctly we did the counts across the rows and we got the the counts on the right here as a column vector but because the keep things was true this this uh this dimension was discarded and now we just have a vector of 27. and because of broadcasting the way it works this vector of 27 suddenly becomes a row vector and then this row vector gets replicated vertically and that every single point we are dividing by the by the count in the opposite direction so uh so this thing just uh doesn't work this needs to be keep things equal true in this case so then then we have that p at zero is normalized and conversely the first column you'd expect to potentially not be normalized and this is what makes it work so pretty subtle and uh hopefully this helps to scare you that you should have a respect for broadcasting be careful check your work uh and uh understand how it works under the hood and make sure that it's broadcasting in the direction that you like otherwise you're going to introduce very subtle bugs very hard to find bugs and uh just be careful one more note on efficiency we don't want to be doing this here because this creates a completely new tensor that we store into p we prefer to use in place operations if possible so this would be an in-place operation it has the potential to be faster it doesn't create new memory under the hood and then let's erase this we don't need it and let's also um just do fewer just so i'm not wasting space okay so we're actually in a pretty good spot now we trained a bigram language model and we trained it really just by counting uh how frequently any pairing occurs and then normalizing so that we get a nice property distribution so really these elements of this array p are really the parameters of our biogram language model giving us and summarizing the statistics of these bigrams so we train the model and then we know how to sample from a model we just iteratively uh sample the next character and feed it in each time and get a next character now what i'd like to do is i'd like to somehow evaluate the quality of this model we'd like to somehow summarize the quality of this model into a single number how good is it at predicting the training set and as an example so in the training set we can evaluate now the training loss and this training loss is telling us about sort of the quality of this model in a single number just like we saw in micrograd so let's try to think through the quality of the model and how we would evaluate it basically what we're going to do is we're going to copy paste this code that we previously used for counting okay and let me just print these diagrams first we're gonna use f strings and i'm gonna print character one followed by character two these are the diagrams and then i don't wanna do it for all the words just do the first three words so here we have emma olivia and ava bigrams now what we'd like to do is we'd like to basically look at the probability that the model assigns to every one of these diagrams so in other words we can look at the probability which is summarized in the matrix b of i x 1 x 2 and then we can print it here as probability and because these properties are way too large let me present or call in 0.4 f to like truncate it a bit so what do we have here right we're looking at the probabilities that the model assigns to every one of these bigrams in the dataset and so we can see some of them are four percent three percent etc just to have a measuring stick in our mind by the way um we have 27 possible characters or tokens and if everything was equally likely then you'd expect all these probabilities to be four percent roughly so anything above four percent means that we've learned something useful from these bigram statistics and you see that roughly some of these are four percent but some of them are as high as 40 percent 35 percent and so on so you see that the model actually assigned a pretty high probability to whatever's in the training set and so that's a good thing um basically if you have a very good model you'd expect that these probabilities should be near one because that means that your model is correctly predicting what's going to come next especially on the training set where you where you trained your model so now we'd like to think about how can we summarize these probabilities into a single number that measures the quality of this model now when you look at the literature into maximum likelihood estimation and statistical modeling and so on you'll see that what's typically used here is something called the likelihood and the likelihood is the product of all of these probabilities and so the product of all these probabilities is the likelihood and it's really telling us about the probability of the entire data set assigned uh assigned by the model that we've trained and that is a measure of quality so the product of these should be as high as possible when you are training the model and when you have a good model your pro your product of these probabilities should be very high um now because the product of these probabilities is an unwieldy thing to work with you can see that all of them are between zero and one so your product of these probabilities will be a very tiny number um so for convenience what people work with usually is not the likelihood but they work with what's called the log likelihood so the product of these is the likelihood to get the log likelihood we just have to take the log of the probability and so the log of the probability here i have the log of x from zero to one the log is a you see here monotonic transformation of the probability where if you pass in one you get zero so probability one gets your log probability of zero and then as you go lower and lower probability the log will grow more and more negative until all the way to negative infinity at zero so here we have a log prob which is really just a torch.log of probability let's print it out to get a sense of what that looks like log prob also 0.4 f okay so as you can see when we plug in numbers that are very close some of our higher numbers we get closer and closer to zero and then if we plug in very bad probabilities we get more and more negative number that's bad so and the reason we work with this is for a large extent convenience right because we have mathematically that if you have some product a times b times c of all these probabilities right the likelihood is the product of all these probabilities then the log of these is just log of a plus log of b plus log of c if you remember your logs from your high school or undergrad and so on so we have that basically the likelihood of the product probabilities the log likelihood is just the sum of the logs of the individual probabilities so log likelihood starts at zero and then log likelihood here we can just accumulate simply and in the end we can print this print the log likelihood f strings maybe you're familiar with this so log likelihood is negative 38. okay now we actually want um so how high can log likelihood get it can go to zero so when all the probabilities are one log likelihood will be zero and then when all the probabilities are lower this will grow more and more negative now we don't actually like this because what we'd like is a loss function and a loss function has the semantics that low is good because we're trying to minimize the loss so we actually need to invert this and that's what gives us something called the negative log likelihood negative log likelihood is just negative of the log likelihood these are f strings by the way if you'd like to look this up negative log likelihood equals so negative log likelihood now is just negative of it and so the negative log block load is a very nice loss function because um the lowest it can get is zero and the higher it is the worse off the predictions are that you're making and then one more modification to this that sometimes people do is that for convenience uh they actually like to normalize by they like to make it an average instead of a sum and so uh here let's just keep some counts as well so n plus equals one starts at zero and then here um we can have sort of like a normalized log likelihood um if we just normalize it by the count then we will sort of get the average log likelihood so this would be usually our loss function here is what this we would this is what we would use uh so our loss function for the training set assigned by the model is 2.4 that's the quality of this model and the lower it is the better off we are and the higher it is the worse off we are and the job of our you know training is to find the parameters that minimize the negative log likelihood loss and that would be like a high quality model okay so to summarize i actually wrote it out here so our goal is to maximize likelihood which is the product of all the probabilities assigned by the model and we want to maximize this likelihood with respect to the model parameters and in our case the model parameters here are defined in the table these numbers the probabilities are the model parameters sort of in our program language models so far but you have to keep in mind that here we are storing everything in a table format the probabilities but what's coming up as a brief preview is that these numbers will not be kept explicitly but these numbers will be calculated by a neural network so that's coming up and we want to change and tune the parameters of these neural networks we want to change these parameters to maximize the likelihood the product of the probabilities now maximizing the likelihood is equivalent to maximizing the log likelihood because log is a monotonic function here's the graph of log and basically all it is doing is it's just scaling your um you can look at it as just a scaling of the loss function and so the optimization problem here and here are actually equivalent because this is just scaling you can look at it that way and so these are two identical optimization problems um maximizing the log-likelihood is equivalent to minimizing the negative log likelihood and then in practice people actually minimize the average negative log likelihood to get numbers like 2.4 and then this summarizes the quality of your model and we'd like to minimize it and make it as small as possible and the lowest it can get is zero and the lower it is the better off your model is because it's signing it's assigning high probabilities to your data now let's estimate the probability over the entire training set just to make sure that we get something around 2.4 let's run this over the entire oops let's take out the print segment as well okay 2.45 or the entire training set now what i'd like to show you is that you can actually evaluate the probability for any word that you want like for example if we just test a single word andre and bring back the print statement then you see that andre is actually kind of like an unlikely word like on average we take three log probability to represent it and roughly that's because ej apparently is very uncommon as an example now think through this um when i take andre and i append q and i test the probability of it under q we actually get infinity and that's because jq has a zero percent probability according to our model so the log likelihood so the log of zero will be negative infinity we get infinite loss so this is kind of undesirable right because we plugged in a string that could be like a somewhat reasonable name but basically what this is saying is that this model is exactly zero percent likely to uh to predict this name and our loss is infinity on this example and really what the reason for that is that j is followed by q uh zero times uh where's q jq is zero and so jq is uh zero percent likely so it's actually kind of gross and people don't like this too much to fix this there's a very simple fix that people like to do to sort of like smooth out your model a little bit and it's called model smoothing and roughly what's happening is that we will eight we will add some fake counts so imagine adding a count of one to everything so we add a count of one like this and then we recalculate the probabilities and that's model smoothing and you can add as much as you like you can add five and it will give you a smoother model and the more you add here the more uniform model you're going to have and the less you add the more peaked model you are going to have of course so one is like a pretty decent count to add and that will ensure that there will be no zeros in our probability matrix p and so this will of course change the generations a little bit in this case it didn't but in principle it could but what that's going to do now is that nothing will be infinity unlikely so now our model will predict some other probability and we see that jq now has a very small probability so the model still finds it very surprising that this was a word or a bigram but we don't get negative infinity so it's kind of like a nice fix that people like to apply sometimes and it's called model smoothing okay so we've now trained a respectable bi-gram character level language model and we saw that we both sort of trained the model by looking at the counts of all the bigrams and normalizing the rows to get probability distributions we saw that we can also then use those parameters of this model to perform sampling of new words so we sample new names according to those distributions and we also saw that we can evaluate the quality of this model and the quality of this model is summarized in a single number which is the negative log likelihood and the lower this number is the better the model is because it is giving high probabilities to the actual next characters in all the bi-grams in our training set so that's all well and good but we've arrived at this model explicitly by doing something that felt sensible we were just performing counts and then we were normalizing those counts now what i would like to do is i would like to take an alternative approach we will end up in a very very similar position but the approach will look very different because i would like to cast the problem of bi-gram character level language modeling into the neural network framework in the neural network framework we're going to approach things slightly differently but again end up in a very similar spot i'll go into that later now our neural network is going to be a still a background character level language model so it receives a single character as an input then there's neural network with some weights or some parameters w and it's going to output the probability distribution over the next character in a sequence it's going to make guesses as to what is likely to follow this character that was input to the model and then in addition to that we're going to be able to evaluate any setting of the parameters of the neural net because we have the loss function the negative log likelihood so we're going to take a look at its probability distributions and we're going to use the labels which are basically just the identity of the next character in that diagram the second character so knowing what second character actually comes next in the bigram allows us to then look at what how high of probability the model assigns to that character and then we of course want the probability to be very high and that is another way of saying that the loss is low so we're going to use gradient-based optimization then to tune the parameters of this network because we have the loss function and we're going to minimize it so we're going to tune the weights so that the neural net is correctly predicting the probabilities for the next character so let's get started the first thing i want to do is i want to compile the training set of this neural network right so create the training set of all the bigrams okay and here i'm going to copy paste this code because this code iterates over all the programs so here we start with the words we iterate over all the bygrams and previously as you recall we did the counts but now we're not going to do counts we're just creating a training set now this training set will be made up of two lists we have the inputs and the targets the the labels and these bi-grams will denote x y those are the characters right and so we're given the first character of the bi-gram and then we're trying to predict the next one both of these are going to be integers so here we'll take x's that append is just x1 ystat append ix2 and then here we actually don't want lists of integers we will create tensors out of these so axis is torch.tensor of axis and wise a storage.tensor of ys and then we don't actually want to take all the words just yet because i want everything to be manageable so let's just do the first word which is emma and then it's clear what these x's and y's would be here let me print character 1 character 2 just so you see what's going on here so the bigrams of these characters is dot e e m m m a a dot so this single word as i mentioned has one two three four five examples for our neural network there are five separate examples in emma and those examples are summarized here when the input to the neural network is integer 0 the desired label is integer 5 which corresponds to e when the input to the neural network is 5 we want its weights to be arranged so that 13 gets a very high probability when 13 is put in we want 13 to have a high probability when 13 is put in we also want 1 to have a high probability when one is input we want zero to have a very high probability so there are five separate input examples to a neural nut in this data set i wanted to add a tangent of a node of caution to be careful with a lot of the apis of some of these frameworks you saw me silently use torch.tensor with a lowercase t and the output looked right but you should be aware that there's actually two ways of constructing a tensor there's a torch.lowercase tensor and there's also a torch.capital tensor class which you can also construct so you can actually call both you can also do torch.capital tensor and you get a nexus and wise as well so that's not confusing at all um there are threads on what is the difference between these two and um unfortunately the docs are just like not clear on the difference and when you look at the the docs of lower case tensor construct tensor with no autograd history by copying data it's just like it doesn't it doesn't make sense so the actual difference as far as i can tell is explained eventually in this random thread that you can google and really it comes down to i believe that um what is this torch.tensor in first d-type the data type automatically while torch.tensor just returns a float tensor i would recommend stick to torch.lowercase tensor so um indeed we see that when i construct this with a capital t the data type here of xs is float32 but towards that lowercase tensor you see how it's now x dot d type is now integer so um it's advised that you use lowercase t and you can read more about it if you like in some of these threads but basically um i'm pointing out some of these things because i want to caution you and i want you to re get used to reading a lot of documentation and reading through a lot of q and a's and threads like this and you know some of the stuff is unfortunately not easy and not very well documented and you have to be careful out there what we want here is integers because that's what makes uh sense um and so lowercase tensor is what we are using okay now we want to think through how we're going to feed in these examples into a neural network now it's not quite as straightforward as plugging it in because these examples right now are integers so there's like a 0 5 or 13 it gives us the index of the character and you can't just plug an integer index into a neural net these neural nets right are sort of made up of these neurons and these neurons have weights and as you saw in micrograd these weights act multiplicatively on the inputs w x plus b there's 10 h's and so on and so it doesn't really make sense to make an input neuron take on integer values that you feed in and then multiply on with weights so instead a common way of encoding integers is what's called one hot encoding in one hot encoding we take an integer like 13 and we create a vector that is all zeros except for the 13th dimension which we turn to a one and then that vector can feed into a neural net now conveniently uh pi torch actually has something called the one hot function inside torching and functional it takes a tensor made up of integers um long is a is a as an integer um and it also takes a number of classes um which is how large you want your uh tensor uh your vector to be so here let's import torch.n.functional sf this is a common way of importing it and then let's do f.1 hot and we feed in the integers that we want to encode so we can actually feed in the entire array of x's and we can tell it that num classes is 27. so it doesn't have to try to guess it it may have guessed that it's only 13 and would give us an incorrect result so this is the one hot let's call this x inc for x encoded and then we see that x encoded that shape is 5 by 27 and uh we can also visualize it plt.i am show of x inc to make it a little bit more clear because this is a little messy so we see that we've encoded all the five examples uh into vectors we have five examples so we have five rows and each row here is now an example into a neural nut and we see that the appropriate bit is turned on as a one and everything else is zero so um here for example the zeroth bit is turned on the fifth bit is turned on 13th bits are turned on for both of these examples and then the first bit here is turned on so that's how we can encode integers into vectors and then these vectors can feed in to neural nets one more issue to be careful with here by the way is let's look at the data type of encoding we always want to be careful with data types what would you expect x encoding's data type to be when we're plugging numbers into neural nuts we don't want them to be integers we want them to be floating point numbers that can take on various values but the d type here is actually 64-bit integer and the reason for that i suspect is that one hot received a 64-bit integer here and it returned the same data type and when you look at the signature of one hot it doesn't even take a d type a desired data type of the output tensor and so we can't in a lot of functions in torch we'd be able to do something like d type equal storage.float32 which is what we want but one heart does not support that so instead we're going to want to cast this to float like this so that these everything is the same everything looks the same but the d-type is float32 and floats can feed into neural nets so now let's construct our first neuron this neuron will look at these input vectors and as you remember from micrograd these neurons basically perform a very simple function w x plus b where w x is a dot product right so we can achieve the same thing here let's first define the weights of this neuron basically what are the initial weights at initialization for this neuron let's initialize them with torch.rendin torch.rendin is um fills a tensor with random numbers drawn from a normal distribution and a normal distribution has a probability density function like this and so most of the numbers drawn from this distribution will be around 0 but some of them will be as high as almost three and so on and very few numbers will be above three in magnitude so we need to take a size as an input here and i'm going to use size as to be 27 by one so 27 by one and then let's visualize w so w is a column vector of 27 numbers and these weights are then multiplied by the inputs so now to perform this multiplication we can take x encoding and we can multiply it with w this is a matrix multiplication operator in pi torch and the output of this operation is five by one the reason is five by five is the following we took x encoding which is five by twenty seven and we multiplied it by twenty seven by one and in matrix multiplication you see that the output will become five by one because these 27 will multiply and add so basically what we're seeing here outs out of this operation is we are seeing the five activations of this neuron on these five inputs and we've evaluated all of them in parallel we didn't feed in just a single input to the single neuron we fed in simultaneously all the five inputs into the same neuron and in parallel patrol has evaluated the wx plus b but here is just the wx there's no bias it has value w times x for all of them independently now instead of a single neuron though i would like to have 27 neurons and i'll show you in a second why i want 27 neurons so instead of having just a 1 here which is indicating this presence of one single neuron we can use 27 and then when w is 27 by 27 this will in parallel evaluate all the 27 neurons on all the 5 inputs giving us a much better much much bigger result so now what we've done is 5 by 27 multiplied 27 by 27 and the output of this is now 5 by 27 so we can see that the shape of this is 5 by 27. so what is every element here telling us right it's telling us for every one of 27 neurons that we created what is the firing rate of those neurons on every one of those five examples so the element for example 3 comma 13 is giving us the firing rate of the 13th neuron looking at the third input and the way this was achieved is by a dot product between the third input and the 13th column of this w matrix here okay so using matrix multiplication we can very efficiently evaluate the dot product between lots of input examples in a batch and lots of neurons where all those neurons have weights in the columns of those w's and in matrix multiplication we're just doing those dot products and in parallel just to show you that this is the case we can take x and we can take the third row and we can take the w and take its 13th column and then we can do x and get three elementwise multiply with w at 13. and sum that up that's wx plus b well there's no plus b it's just wx dot product and that's this number so you see that this is just being done efficiently by the matrix multiplication operation for all the input examples and for all the output neurons of this first layer okay so we fed our 27-dimensional inputs into a first layer of a neural net that has 27 neurons right so we have 27 inputs and now we have 27 neurons these neurons perform w times x they don't have a bias and they don't have a non-linearity like 10 h we're going to leave them to be a linear layer in addition to that we're not going to have any other layers this is going to be it it's just going to be the dumbest smallest simplest neural net which is just a single linear layer and now i'd like to explain what i want those 27 outputs to be intuitively what we're trying to produce here for every single input example is we're trying to produce some kind of a probability distribution for the next character in a sequence and there's 27 of them but we have to come up with like precise semantics for exactly how we're going to interpret these 27 numbers that these neurons take on now intuitively you see here that these numbers are negative and some of them are positive etc and that's because these are coming out of a neural net layer initialized with these normal distribution parameters but what we want is we want something like we had here like each row here told us the counts and then we normalized the counts to get probabilities and we want something similar to come out of the neural net but what we just have right now is just some negative and positive numbers now we want those numbers to somehow represent the probabilities for the next character but you see that probabilities they they have a special structure they um they're positive numbers and they sum to one and so that doesn't just come out of a neural net and then they can't be counts because these counts are positive and counts are integers so counts are also not really a good thing to output from a neural net so instead what the neural net is going to output and how we are going to interpret the um the 27 numbers is that these 27 numbers are giving us log counts basically um so instead of giving us counts directly like in this table they're giving us log counts and to get the counts we're going to take the log counts and we're going to exponentiate them now exponentiation takes the following form it takes numbers that are negative or they are positive it takes the entire real line and then if you plug in negative numbers you're going to get e to the x which is uh always below one so you're getting numbers lower than one and if you plug in numbers greater than zero you're getting numbers greater than one all the way growing to the infinity and this here grows to zero so basically we're going to take these numbers here and instead of them being positive and negative and all over the place we're going to interpret them as log counts and then we're going to element wise exponentiate these numbers exponentiating them now gives us something like this and you see that these numbers now because they went through an exponent all the negative numbers turned into numbers below 1 like 0.338 and all the positive numbers originally turned into even more positive numbers sort of greater than one so like for example seven is some positive number over here that is greater than zero but exponentiated outputs here basically give us something that we can use and interpret as the equivalent of counts originally so you see these counts here 112 7 51 1 etc the neural net is kind of now predicting uh counts and these counts are positive numbers they can never be below zero so that makes sense and uh they can now take on various values depending on the settings of w so let me break this down we're going to interpret these to be the log counts in other words for this that is often used is so-called logits these are logits log counts then these will be sort of the counts largest exponentiated and this is equivalent to the n matrix sort of the n array that we used previously remember this was the n this is the the array of counts and each row here are the counts for the for the um next character sort of so those are the counts and now the probabilities are just the counts um normalized and so um i'm not going to find the same but basically i'm not going to scroll all over the place we've already done this we want to counts that sum along the first dimension and we want to keep them as true we've went over this and this is how we normalize the rows of our counts matrix to get our probabilities props so now these are the probabilities and these are the counts that we ask currently and now when i show the probabilities you see that um every row here of course will sum to 1 because they're normalized and the shape of this is 5 by 27 and so really what we've achieved is for every one of our five examples we now have a row that came out of a neural net and because of the transformations here we made sure that this output of this neural net now are probabilities or we can interpret to be probabilities so our wx here gave us logits and then we interpret those to be log counts we exponentiate to get something that looks like counts and then we normalize those counts to get a probability distribution and all of these are differentiable operations so what we've done now is we're taking inputs we have differentiable operations that we can back propagate through and we're getting out probability distributions so for example for the zeroth example that fed in right which was um the zeroth example here was a one-half vector of zero and um it basically corresponded to feeding in this example here so we're feeding in a dot into a neural net and the way we fed the dot into a neural net is that we first got its index then we one hot encoded it then it went into the neural net and out came this distribution of probabilities and its shape is 27 there's 27 numbers and we're going to interpret this as the neural nets assignment for how likely every one of these characters um the 27 characters are to come next and as we tune the weights w we're going to be of course getting different probabilities out for any character that you input and so now the question is just can we optimize and find a good w such that the probabilities coming out are pretty good and the way we measure pretty good is by the loss function okay so i organized everything into a single summary so that hopefully it's a bit more clear so it starts here with an input data set we have some inputs to the neural net and we have some labels for the correct next character in a sequence these are integers here i'm using uh torch generators now so that you see the same numbers that i see and i'm generating um 27 neurons weights and each neuron here receives 27 inputs then here we're going to plug in all the input examples x's into a neural net so here this is a forward pass first we have to encode all of the inputs into one hot representations so we have 27 classes we pass in these integers and x inc becomes a array that is 5 by 27 zeros except for a few ones we then multiply this in the first layer of a neural net to get logits exponentiate the logits to get fake counts sort of and normalize these counts to get probabilities so we lock these last two lines by the way here are called the softmax which i pulled up here soft max is a very often used layer in a neural net that takes these z's which are logics exponentiates them and divides and normalizes it's a way of taking outputs of a neural net layer and these these outputs can be positive or negative and it outputs probability distributions it outputs something that is always sums to one and are positive numbers just like probabilities um so it's kind of like a normalization function if you want to think of it that way and you can put it on top of any other linear layer inside a neural net and it basically makes a neural net output probabilities that's very often used and we used it as well here so this is the forward pass and that's how we made a neural net output probability now you'll notice that um all of these this entire forward pass is made up of differentiable layers everything here we can back propagate through and we saw some of the back propagation in micrograd this is just multiplication and addition all that's happening here is just multiply and then add and we know how to backpropagate through them exponentiation we know how to backpropagate through and then here we are summing and sum is is easily backpropagable as well and division as well so everything here is differentiable operation and we can back propagate through now we achieve these probabilities which are 5 by 27 for every single example we have a vector of probabilities that's into one and then here i wrote a bunch of stuff to sort of like break down uh the examples so we have five examples making up emma right and there are five bigrams inside emma so bigram example a bigram example1 is that e is the beginning character right after dot and the indexes for these are zero and five so then we feed in a zero that's the input of the neural net we get probabilities from the neural net that are 27 numbers and then the label is 5 because e actually comes after dot so that's the label and then we use this label 5 to index into the probability distribution here so this index 5 here is 0 1 2 3 4 5. it's this number here which is here so that's basically the probability assigned by the neural net to the actual correct character you see that the network currently thinks that this next character that e following dot is only one percent likely which is of course not very good right because this actually is a training example and the network thinks this is currently very very unlikely but that's just because we didn't get very lucky in generating a good setting of w so right now this network things it says unlikely and 0.01 is not a good outcome so the log likelihood then is very negative and the negative log likelihood is very positive and so four is a very high negative log likelihood and that means we're going to have a high loss because what is the loss the loss is just the average negative log likelihood so the second character is em and you see here that also the network thought that m following e is very unlikely one percent the for m following m i thought it was two percent and for a following m it actually thought it was seven percent likely so just by chance this one actually has a pretty good probability and therefore pretty low negative log likelihood and finally here it thought this was one percent likely so overall our average negative log likelihood which is the loss the total loss that summarizes basically the how well this network currently works at least on this one word not on the full data suggested one word is 3.76 which is actually very fairly high loss this is not a very good setting of w's now here's what we can do we're currently getting 3.76 we can actually come here and we can change our w we can resample it so let me just add one to have a different seed and then we get a different w and then we can rerun this and with this different c with this different setting of w's we now get 3.37 so this is a much better w right and that and it's better because the probabilities just happen to come out higher for the for the characters that actually are next and so you can imagine actually just resampling this you know we can try two so okay this was not very good let's try one more we can try three okay this was terrible setting because we have a very high loss so anyway i'm going to erase this what i'm doing here which is just guess and check of randomly assigning parameters and seeing if the network is good that is uh amateur hour that's not how you optimize a neural net the way you optimize your neural net is you start with some random guess and we're going to commit to this one even though it's not very good but now the big deal is we have a loss function so this loss is made up only of differentiable operations and we can minimize the loss by tuning ws by computing the gradients of the loss with respect to these w matrices and so then we can tune w to minimize the loss and find a good setting of w using gradient based optimization so let's see how that will work now things are actually going to look almost identical to what we had with micrograd so here i pulled up the lecture from micrograd the notebook it's from this repository and when i scroll all the way to the end where we left off with micrograd we had something very very similar we had a number of input examples in this case we had four input examples inside axis and we had their targets these are targets just like here we have our axes now but we have five of them and they're now integers instead of vectors but we're going to convert our integers to vectors except our vectors will be 27 large instead of three large and then here what we did is first we did a forward pass where we ran a neural net on all of the inputs to get predictions our neural net at the time this nfx was a multi-layer perceptron our neural net is going to look different because our neural net is just a single layer single linear layer followed by a soft max so that's our neural net and the loss here was the mean squared error so we simply subtracted the prediction from the ground truth and squared it and summed it all up and that was the loss and loss was the single number that summarized the quality of the neural net and when loss is low like almost zero that means the neural net is predicting correctly so we had a single number that uh that summarized the uh the performance of the neural net and everything here was differentiable and was stored in massive compute graph and then we iterated over all the parameters we made sure that the gradients are set to zero and we called lost up backward and lasted backward initiated back propagation at the final output node of loss right so yeah remember these expressions we had loss all the way at the end we start back propagation and we went all the way back and we made sure that we populated all the parameters dot grad so that graph started at zero but back propagation filled it in and then in the update we iterated over all the parameters and we simply did a parameter update where every single element of our parameters was nudged in the opposite direction of the gradient and so we're going to do the exact same thing here so i'm going to pull this up on the side here so that we have it available and we're actually going to do the exact same thing so this was the forward pass so where we did this and probs is our wipe red so now we have to evaluate the loss but we're not using the mean squared error we're using the negative log likelihood because we are doing classification we're not doing regression as it's called so here we want to calculate loss now the way we calculate it is it's just this average negative log likelihood now this probs here has a shape of 5 by 27 and so to get all the we basically want to pluck out the probabilities at the correct indices here so in particular because the labels are stored here in array wise basically what we're after is for the first example we're looking at probability of five right at index five for the second example at the the second row or row index one we are interested in the probability assigned to index 13. at the second example we also have 13. at the third row we want one and then the last row which is four we want zero so these are the probabilities we're interested in right and you can see that they're not amazing as we saw above so these are the probabilities we want but we want like a more efficient way to access these probabilities not just listing them out in a tuple like this so it turns out that the way to do this in pytorch uh one of the ways at least is we can basically pass in all of these sorry about that all of these um integers in the vectors so the these ones you see how they're just 0 1 2 3 4 we can actually create that using mp not mp sorry torch dot range of 5 0 1 2 3 4. so we can index here with torch.range of 5 and here we index with ys and you see that that gives us exactly these numbers so that plucks out the probabilities of that the neural network assigns to the correct next character now we take those probabilities and we don't we actually look at the log probability so we want to dot log and then we want to just average that up so take the mean of all of that and then it's the negative average log likelihood that is the loss so the loss here is 3.7 something and you see that this loss 3.76 3.76 is exactly as we've obtained before but this is a vectorized form of that expression so we get the same loss and the same loss we can consider service part of this forward pass and we've achieved here now loss okay so we made our way all the way to loss we've defined the forward pass we forwarded the network and the loss now we're ready to do the backward pass so backward pass we want to first make sure that all the gradients are reset so they're at zero now in pytorch you can set the gradients to be zero but you can also just set it to none and setting it to none is more efficient and pi torch will interpret none as like a lack of a gradient and is the same as zeros so this is a way to set to zero the gradient and now we do lost it backward before we do lost that backward we need one more thing if you remember from micrograd pytorch actually requires that we pass in requires grad is true so that when we tell pythorge that we are interested in calculating gradients for this leaf tensor by default this is false so let me recalculate with that and then set to none and lost that backward now something magical happened when lasted backward was run because pytorch just like micrograd when we did the forward pass here it keeps track of all the operations under the hood it builds a full computational graph just like the graphs we've produced in micrograd those graphs exist inside pi torch and so it knows all the dependencies and all the mathematical operations of everything and when you then calculate the loss we can call a dot backward on it and that backward then fills in the gradients of all the intermediates all the way back to w's which are the parameters of our neural net so now we can do w grad and we see that it has structure there's stuff inside it and these gradients every single element here so w dot shape is 27 by 27 w grad shape is the same 27 by 27 and every element of w that grad is telling us the influence of that weight on the loss function so for example this number all the way here if this element the zero zero element of w because the gradient is positive is telling us that this has a positive influence in the loss slightly nudging w slightly taking w 0 0 and adding a small h to it would increase the loss mildly because this gradient is positive some of these gradients are also negative so that's telling us about the gradient information and we can use this gradient information to update the weights of this neural network so let's now do the update it's going to be very similar to what we had in micrograd we need no loop over all the parameters because we only have one parameter uh tensor and that is w so we simply do w dot data plus equals uh the we can actually copy this almost exactly negative 0.1 times w dot grad and that would be the update to the tensor so that updates the tensor and because the tensor is updated we would expect that now the loss should decrease so here if i print loss that item it was 3.76 right so we've updated the w here so if i recalculate forward pass loss now should be slightly lower so 3.76 goes to 3.74 and then we can again set to set grad to none and backward update and now the parameters changed again so if we recalculate the forward pass we expect a lower loss again 3.72 okay and this is again doing the we're now doing gradient descent and when we achieve a low loss that will mean that the network is assigning high probabilities to the correctness characters okay so i rearranged everything and i put it all together from scratch so here is where we construct our data set of bigrams you see that we are still iterating only on the first word emma i'm going to change that in a second i added a number that counts the number of elements in x's so that we explicitly see that number of examples is five because currently we're just working with emma and there's five backgrounds there and here i added a loop of exactly what we had before so we had 10 iterations of grainy descent of forward pass backward pass and an update and so running these two cells initialization and gradient descent gives us some improvement on the loss function but now i want to use all the words and there's not 5 but 228 000 bigrams now however this should require no modification whatsoever everything should just run because all the code we wrote doesn't care if there's five migrants or 228 000 bigrams and with everything we should just work so you see that this will just run but now we are optimizing over the entire training set of all the bigrams and you see now that we are decreasing very slightly so actually we can probably afford a larger learning rate and probably for even larger learning rate even 50 seems to work on this very very simple example right so let me re-initialize and let's run 100 iterations see what happens okay we seem to be coming up to some pretty good losses here 2.47 let me run 100 more what is the number that we expect by the way in the loss we expect to get something around what we had originally actually so all the way back if you remember in the beginning of this video when we optimized uh just by counting our loss was roughly 2.47 after we had it smoothing but before smoothing we had roughly 2.45 likelihood sorry loss and so that's actually roughly the vicinity of what we expect to achieve but before we achieved it by counting and here we are achieving the roughly the same result but with gradient based optimization so we come to about 2.4 6 2.45 etc and that makes sense because fundamentally we're not taking any additional information we're still just taking in the previous character and trying to predict the next one but instead of doing it explicitly by counting and normalizing we are doing it with gradient-based learning and it just so happens that the explicit approach happens to very well optimize the loss function without any need for a gradient based optimization because the setup for bigram language models are is so straightforward that's so simple we can just afford to estimate those probabilities directly and maintain them in a table but the gradient-based approach is significantly more flexible so we've actually gained a lot because what we can do now is we can expand this approach and complexify the neural net so currently we're just taking a single character and feeding into a neural net and the neural that's extremely simple but we're about to iterate on this substantially we're going to be taking multiple previous characters and we're going to be feeding feeding them into increasingly more complex neural nets but fundamentally out the output of the neural net will always just be logics and those logits will go through the exact same transformation we are going to take them through a soft max calculate the loss function and the negative log likelihood and do gradient based optimization and so actually as we complexify the neural nets and work all the way up to transformers none of this will really fundamentally change none of this will fundamentally change the only thing that will change is the way we do the forward pass where we take in some previous characters and calculate logits for the next character in the sequence that will become more complex and uh but we'll use the same machinery to optimize it and um it's not obvious how we would have extended this bigram approach into the case where there are many more characters at the input because eventually these tables would get way too large because there's way too many combinations of what previous characters could be if you only have one previous character we can just keep everything in a table that counts but if you have the last 10 characters that are input we can't actually keep everything in the table anymore so this is fundamentally an unscalable approach and the neural network approach is significantly more scalable and it's something that actually we can improve on over time so that's where we will be digging next i wanted to point out two more things number one i want you to notice that this x ink here this is made up of one hot vectors and then those one hot vectors are multiplied by this w matrix and we think of this as multiple neurons being forwarded in a fully connected manner but actually what's happening here is that for example if you have a one hot vector here that has a one at say the fifth dimension then because of the way the matrix multiplication works multiplying that one-half vector with w actually ends up plucking out the fifth row of w log logits would become just the fifth row of w and that's because of the way the matrix multiplication works um so that's actually what ends up happening so but that's actually exactly what happened before because remember all the way up here we have a bigram we took the first character and then that first character indexed into a row of this array here and that row gave us the probability distribution for the next character so the first character was used as a lookup into a matrix here to get the probability distribution well that's actually exactly what's happening here because we're taking the index we're encoding it as one hot and multiplying it by w so logics literally becomes the the appropriate row of w and that gets just as before exponentiated to create the counts and then normalized and becomes probability so this w here is literally the same as this array here but w remember is the log counts not the counts so it's more precise to say that w exponentiated w dot x is this array but this array was filled in by counting and by basically populating the counts of bi-grams whereas in the gradient-based framework we initialize it randomly and then we let the loss guide us to arrive at the exact same array so this array exactly here is basically the array w at the end of optimization except we arrived at it piece by piece by following the loss and that's why we also obtain the same loss function at the end and the second note is if i come here remember the smoothing where we added fake counts to our counts in order to smooth out and make more uniform the distributions of these probabilities and that prevented us from assigning zero probability to to any one bigram now if i increase the count here what's happening to the probability as i increase the count probability becomes more and more uniform right because these counts go only up to like 900 or whatever so if i'm adding plus a million to every single number here you can see how the row and its probability then when we divide is just going to become more and more close to exactly even probability uniform distribution it turns out that the gradient based framework has an equivalent to smoothing in particular think through these w's here which we initialized randomly we could also think about initializing w's to be zero if all the entries of w are zero then you'll see that logits will become all zero and then exponentiating those logics becomes all one and then the probabilities turned out to be exactly uniform so basically when w's are all equal to each other or say especially zero then the probabilities come out completely uniform so trying to incentivize w to be near zero is basically equivalent to label smoothing and the more you incentivize that in the loss function the more smooth distribution you're going to achieve so this brings us to something that's called regularization where we can actually augment the loss function to have a small component that we call a regularization loss in particular what we're going to do is we can take w and we can for example square all of its entries and then we can um whoops sorry about that we can take all the entries of w and we can sum them and because we're squaring uh there will be no signs anymore um negatives and positives all get squashed to be positive numbers and then the way this works is you achieve zero loss if w is exactly or zero but if w has non-zero numbers you accumulate loss and so we can actually take this and we can add it on here so we can do something like loss plus w square dot sum or let's actually instead of sum let's take a mean because otherwise the sum gets too large so mean is like a little bit more manageable and then we have a regularization loss here say 0.01 times or something like that you can choose the regularization strength and then we can just optimize this and now this optimization actually has two components not only is it trying to make all the probabilities work out but in addition to that there's an additional component that simultaneously tries to make all w's be zero because if w's are non-zero you feel a loss and so minimizing this the only way to achieve that is for w to be zero and so you can think of this as adding like a spring force or like a gravity force that that pushes w to be zero so w wants to be zero and the probabilities want to be uniform but they also simultaneously want to match up your your probabilities as indicated by the data and so the strength of this regularization is exactly controlling the amount of counts that you add here adding a lot more counts here corresponds to increasing this number because the more you increase it the more this part of the loss function dominates this part and the more these these weights will un be unable to grow because as they grow they uh accumulate way too much loss and so if this is strong enough then we are not able to overcome the force of this loss and we will never and basically everything will be uniform predictions so i thought that's kind of cool okay and lastly before we wrap up i wanted to show you how you would sample from this neural net model and i copy-pasted the sampling code from before where remember that we sampled five times and all we did we start at zero we grabbed the current ix row of p and that was our probability row from which we sampled the next index and just accumulated that and break when zero and running this gave us these results still have the p in memory so this is fine now the speed doesn't come from the row of b instead it comes from this neural net first we take ix and we encode it into a one hot row of x inc this x inc multiplies rw which really just plucks out the row of w corresponding to ix really that's what's happening and that gets our logits and then we normalize those low jets exponentiate to get counts and then normalize to get uh the distribution and then we can sample from the distribution so if i run this kind of anticlimactic or climatic depending how you look at it but we get the exact same result um and that's because this is in the identical model not only does it achieve the same loss but as i mentioned these are identical models and this w is the log counts of what we've estimated before but we came to this answer in a very different way and it's got a very different interpretation but fundamentally this is basically the same model and gives the same samples here and so that's kind of cool okay so we've actually covered a lot of ground we introduced the bigram character level language model we saw how we can train the model how we can sample from the model and how we can evaluate the quality of the model using the negative log likelihood loss and then we actually trained the model in two completely different ways that actually get the same result and the same model in the first way we just counted up the frequency of all the bigrams and normalized in a second way we used the negative log likelihood loss as a guide to optimizing the counts matrix or the counts array so that the loss is minimized in the in a gradient-based framework and we saw that both of them give the same result and that's it now the second one of these the gradient-based framework is much more flexible and right now our neural network is super simple we're taking a single previous character and we're taking it through a single linear layer to calculate the logits this is about to complexify so in the follow-up videos we're going to be taking more and more of these characters and we're going to be feeding them into a neural net but this neural net will still output the exact same thing the neural net will output logits and these logits will still be normalized in the exact same way and all the loss and everything else and the gradient gradient-based framework everything stays identical it's just that this neural net will now complexify all the way to transformers so that's gonna be pretty awesome and i'm looking forward to it for now bye

## Timed Segments

[0:00] hi everyone hope you&#39;re well
[0:02] and next up what i&#39;d like to do is i&#39;d
[0:04] like to build out make more
[0:06] like micrograd before it make more is a
[0:08] repository that i have on my github
[0:10] webpage
[0:11] you can look at it
[0:12] but just like with micrograd i&#39;m going
[0:14] to build it out step by step and i&#39;m
[0:16] going to spell everything out so we&#39;re
[0:17] going to build it out slowly and
[0:19] together
[0:20] now what is make more
[0:22] make more as the name suggests
[0:24] makes more of things that you give it
[0:27] so here&#39;s an example
[0:29] names.txt is an example dataset to make
[0:31] more
[0:32] and when you look at names.txt you&#39;ll
[0:34] find that it&#39;s a very large data set of
[0:36] names
[0:38] so
[0:40] here&#39;s lots of different types of names
[0:41] in fact i believe there are 32 000 names
[0:44] that i&#39;ve sort of found randomly on the
[0:46] government website
[0:47] and if you train make more on this data
[0:50] set it will learn to make more of things
[0:53] like this
[0:55] and in particular in this case that will
[0:57] mean more things that sound name-like
[1:00] but are actually unique names
[1:02] and maybe if you have a baby and you&#39;re
[1:03] trying to assign name maybe you&#39;re
[1:05] looking for a cool new sounding unique
[1:07] name make more might help you
[1:09] so here are some example generations
[1:11] from the neural network
[1:13] once we train it on our data set
[1:16] so here&#39;s some example
[1:17] unique names that it will generate
[1:19] dontel
[1:21] irot
[1:23] zhendi
[1:24] and so on and so all these are sound
[1:26] name like but they&#39;re not of course
[1:28] names
[1:30] so under the hood make more is a
[1:32] character level language model so what
[1:35] that means is that it is treating every
[1:37] single line here as an example and
[1:39] within each example it&#39;s treating them
[1:42] all as sequences of individual
[1:44] characters so r e e s e is this example
[1:48] and that&#39;s the sequence of characters
[1:50] and that&#39;s the level on which we are
[1:51] building out make more and what it means
[1:54] to be a character level language model
[1:56] then is that it&#39;s just uh sort of
[1:58] modeling those sequences of characters
[1:59] and it knows how to predict the next
[2:01] character in the sequence
[2:03] now we&#39;re actually going to implement a
[2:05] large number of character level language
[2:07] models in terms of the neural networks
[2:09] that are involved in predicting the next
[2:10] character in a sequence so very simple
[2:13] bi-gram and back of work models
[2:15] multilingual perceptrons recurrent
[2:17] neural networks all the way to modern
[2:19] transformers in fact the transformer
[2:21] that we will build will be basically the
[2:23] equivalent transformer to gpt2 if you
[2:26] have heard of gpt uh so that&#39;s kind of a
[2:28] big deal it&#39;s a modern network and by
[2:30] the end of the series you will actually
[2:32] understand how that works um on the
[2:34] level of characters now to give you a
[2:36] sense of the extensions here uh after
[2:39] characters we will probably spend some
[2:41] time on the word level so that we can
[2:43] generate documents of words not just
[2:45] little you know segments of characters
[2:47] but we can generate entire large much
[2:49] larger documents
[2:50] and then we&#39;re probably going to go into
[2:52] images and image text
[2:54] networks such as dolly stable diffusion
[2:57] and so on but for now we have to start
[3:00] here character level language modeling
[3:02] let&#39;s go
[3:03] so like before we are starting with a
[3:04] completely blank jupiter notebook page
[3:06] the first thing is i would like to
[3:08] basically load up the dataset names.txt
[3:11] so we&#39;re going to open up names.txt for
[3:13] reading
[3:15] and we&#39;re going to read in everything
[3:17] into a massive string
[3:19] and then because it&#39;s a massive string
[3:21] we&#39;d only like the individual words and
[3:23] put them in the list
[3:24] so let&#39;s call split lines
[3:26] on that string
[3:27] to get all of our words as a python list
[3:30] of strings
[3:32] so basically we can look at for example
[3:33] the first 10 words
[3:35] and we have that it&#39;s a list of emma
[3:39] olivia eva and so on
[3:41] and if we look at
[3:43] the top of the page here that is indeed
[3:45] what we see
[3:47] um
[3:48] so that&#39;s good
[3:49] this list actually makes me feel that
[3:52] this is probably sorted by frequency
[3:55] but okay so
[3:57] these are the words now we&#39;d like to
[3:58] actually like learn a little bit more
[4:00] about this data set let&#39;s look at the
[4:02] total number of words we expect this to
[4:03] be roughly 32 000
[4:06] and then what is the for example
[4:07] shortest word
[4:09] so min of
[4:10] length of each word for w inwards
[4:13] so the shortest word will be length
[4:17] two
[4:18] and max of one w for w in words so the
[4:21] longest word will be
[4:23] 15 characters
[4:24] so let&#39;s now think through our very
[4:25] first language model
[4:27] as i mentioned a character level
[4:28] language model is predicting the next
[4:30] character in a sequence given already
[4:33] some concrete sequence of characters
[4:35] before it
[4:36] now we have to realize here is that
[4:38] every single word here like isabella is
[4:40] actually quite a few examples packed in
[4:43] to that single word
[4:45] because what is an existence of a word
[4:47] like isabella in the data set telling us
[4:48] really it&#39;s saying that
[4:51] the character i is a very likely
[4:53] character to come first in the sequence
[4:56] of a name
[4:58] the character s is likely to come
[5:01] after i
[5:04] the character a is likely to come after
[5:06] is
[5:07] the character b is very likely to come
[5:09] after isa and so on all the way to a
[5:12] following isabel
[5:14] and then there&#39;s one more example
[5:15] actually packed in here
[5:17] and that is that
[5:19] after there&#39;s isabella
[5:21] the word is very likely to end
[5:23] so that&#39;s one more sort of explicit
[5:25] piece of information that we have here
[5:27] that we have to be careful with
[5:29] and so there&#39;s a lot backed into a
[5:31] single individual word in terms of the
[5:33] statistical structure of what&#39;s likely
[5:35] to follow in these character sequences
[5:38] and then of course we don&#39;t have just an
[5:39] individual word we actually have 32 000
[5:41] of these and so there&#39;s a lot of
[5:42] structure here to model
[5:44] now in the beginning what i&#39;d like to
[5:46] start with is i&#39;d like to start with
[5:48] building a bi-gram language model
[5:51] now in the bigram language model we&#39;re
[5:53] always working with just
[5:54] two characters at a time
[5:56] so we&#39;re only looking at one character
[5:59] that we are given and we&#39;re trying to
[6:00] predict the next character in the
[6:02] sequence
[6:03] so um what characters are likely to
[6:06] follow are what characters are likely to
[6:08] follow a and so on and we&#39;re just
[6:10] modeling that kind of a little local
[6:11] structure
[6:12] and we&#39;re forgetting the fact that we
[6:14] may have a lot more information we&#39;re
[6:16] always just looking at the previous
[6:18] character to predict the next one so
[6:20] it&#39;s a very simple and weak language
[6:21] model but i think it&#39;s a great place to
[6:23] start
[6:24] so now let&#39;s begin by looking at these
[6:25] bi-grams in our data set and what they
[6:27] look like and these bi-grams again are
[6:29] just two characters in a row
[6:30] so for w in words
[6:33] each w here is an individual word a
[6:35] string
[6:36] we want to iterate uh for
[6:39] we&#39;re going to iterate this word
[6:41] with consecutive characters so two
[6:44] characters at a time sliding it through
[6:45] the word now a interesting nice way cute
[6:49] way to do this in python by the way is
[6:51] doing something like this for character
[6:53] one character two in zip off
[6:56] w and w at one
[7:00] one column
[7:01] print
[7:02] character one character two
[7:04] and let&#39;s not do all the words let&#39;s
[7:05] just do the first three words and i&#39;m
[7:07] going to show you in a second how this
[7:09] works
[7:09] but for now basically as an example
[7:11] let&#39;s just do the very first word alone
[7:13] emma
[7:15] you see how we have a emma and this will
[7:18] just print e m m m a
[7:20] and the reason this works is because w
[7:23] is the string emma w at one column is
[7:26] the string mma
[7:28] and zip
[7:29] takes two iterators and it pairs them up
[7:33] and then creates an iterator over the
[7:35] tuples of their consecutive entries
[7:37] and if any one of these lists is shorter
[7:39] than the other then it will just
[7:41] halt and return
[7:43] so basically that&#39;s why we return em mmm
[7:48] ma
[7:49] but then because this iterator second
[7:52] one here runs out of elements zip just
[7:55] ends and that&#39;s why we only get these
[7:56] tuples so pretty cute
[7:59] so these are the consecutive elements in
[8:01] the first word now we have to be careful
[8:03] because we actually have more
[8:04] information here than just these three
[8:07] examples as i mentioned we know that e
[8:09] is the is very likely to come first and
[8:12] we know that a in this case is coming
[8:14] last
[8:15] so one way to do this is basically we&#39;re
[8:17] going to create
[8:19] a special array here all
[8:21] characters
[8:23] and um we&#39;re going to hallucinate a
[8:25] special start token here
[8:28] i&#39;m going to
[8:29] call it like special start
[8:32] so this is a list of one element
[8:34] plus
[8:36] w
[8:37] and then plus a special end character
[8:41] and the reason i&#39;m wrapping the list of
[8:42] w here is because w is a string emma
[8:45] list of w will just have the individual
[8:48] characters in the list
[8:50] and then
[8:51] doing this again now but not iterating
[8:54] over w&#39;s but over the characters
[8:58] will give us something like this
[9:00] so e is likely so this is a bigram of
[9:02] the start character and e and this is a
[9:05] bigram of the
[9:06] a and the special end character
[9:09] and now we can look at for example what
[9:10] this looks like for
[9:12] olivia or eva
[9:14] and indeed we can actually
[9:16] potentially do this for the entire data
[9:17] set but we won&#39;t print that that&#39;s going
[9:19] to be too much
[9:20] but these are the individual character
[9:22] diagrams and we can print them
[9:24] now in order to learn the statistics
[9:26] about which characters are likely to
[9:28] follow other characters the simplest way
[9:30] in the bigram language models is to
[9:32] simply do it by counting
[9:34] so we&#39;re basically just going to count
[9:36] how often any one of these combinations
[9:38] occurs in the training set
[9:40] in these words
[9:41] so we&#39;re going to need some kind of a
[9:43] dictionary that&#39;s going to maintain some
[9:44] counts for every one of these diagrams
[9:47] so let&#39;s use a dictionary b
[9:49] and this will map these bi-grams so
[9:52] bi-gram is a tuple of character one
[9:54] character two
[9:56] and then b at bi-gram
[9:58] will be b dot get of bi-gram
[10:01] which is basically the same as b at
[10:03] bigram
[10:04] but in the case that bigram is not in
[10:07] the dictionary b we would like to by
[10:09] default return to zero
[10:11] plus one
[10:13] so this will basically add up all the
[10:15] bigrams and count how often they occur
[10:18] let&#39;s get rid of printing
[10:20] or rather
[10:22] let&#39;s keep the printing and let&#39;s just
[10:24] inspect what b is in this case
[10:27] and we see that many bi-grams occur just
[10:29] a single time this one allegedly
[10:31] occurred three times
[10:32] so a was an ending character three times
[10:35] and that&#39;s true for all of these words
[10:37] all of emma olivia and eva and with a
[10:41] so that&#39;s why this occurred three times
[10:46] now let&#39;s do it for all the words
[10:51] oops i should not have printed
[10:55] i&#39;m going to erase that
[10:56] let&#39;s kill this
[10:58] let&#39;s just run
[11:00] and now b will have the statistics of
[11:02] the entire data set
[11:04] so these are the counts across all the
[11:05] words of the individual pie grams
[11:08] and we could for example look at some of
[11:09] the most common ones and least common
[11:11] ones
[11:13] this kind of grows in python but the way
[11:15] to do this the simplest way i like is we
[11:17] just use b dot items
[11:19] b dot items returns
[11:21] the tuples of
[11:24] key value in this case the keys are
[11:27] the character diagrams and the values
[11:29] are the counts
[11:30] and so then what we want to do is we
[11:32] want to do
[11:35] sorted of this
[11:38] but by default sort is on the first
[11:43] on the first item of a tuple but we want
[11:45] to sort by the values which are the
[11:47] second element of a tuple that is the
[11:49] key value
[11:50] so we want to use the key
[11:52] equals lambda
[11:55] that takes the key value
[11:57] and returns
[11:58] the key value at the one not at zero but
[12:02] at one which is the count so we want to
[12:04] sort by the count
[12:07] of these elements
[12:10] and actually we wanted to go backwards
[12:12] so here we have is
[12:14] the bi-gram q and r occurs only a single
[12:17] time
[12:18] dz occurred only a single time
[12:20] and when we sort this the other way
[12:21] around
[12:23] we&#39;re going to see the most likely
[12:25] bigrams so we see that n was
[12:28] very often an ending character
[12:30] many many times and apparently n almost
[12:32] always follows an a
[12:34] and that&#39;s a very likely combination as
[12:36] well
[12:38] so
[12:39] this is kind of the individual counts
[12:41] that we achieve over the entire data set
[12:44] now it&#39;s actually going to be
[12:46] significantly more convenient for us to
[12:48] keep this information in a
[12:49] two-dimensional array instead of a
[12:51] python dictionary
[12:53] so
[12:54] we&#39;re going to store this information
[12:56] in a 2d array
[12:58] and
[13:00] the rows are going to be the first
[13:01] character of the bigram and the columns
[13:03] are going to be the second character and
[13:05] each entry in this two-dimensional array
[13:06] will tell us how often that first
[13:08] character files the second character in
[13:11] the data set
[13:12] so in particular the array
[13:14] representation that we&#39;re going to use
[13:16] or the library is that of pytorch
[13:18] and pytorch is a deep
[13:20] learning neural network framework but
[13:22] part of it is also this torch.tensor
[13:25] which allows us to create
[13:26] multi-dimensional arrays and manipulate
[13:28] them very efficiently
[13:29] so
[13:30] let&#39;s import pytorch which you can do by
[13:32] import torch
[13:34] and then we can create
[13:36] arrays
[13:37] so let&#39;s create a array of zeros
[13:40] and we give it a
[13:42] size of this array let&#39;s create a three
[13:44] by five array as an example
[13:47] and
[13:48] this is a three by five array of zeros
[13:51] and by default you&#39;ll notice a.d type
[13:53] which is short for data type is float32
[13:56] so these are single precision floating
[13:58] point numbers
[13:59] because we are going to represent counts
[14:01] let&#39;s actually use d type as torch dot
[14:04] and 32
[14:06] so these are
[14:07] 32-bit integers
[14:10] so now you see that we have integer data
[14:12] inside this tensor
[14:14] now tensors allow us to really
[14:17] manipulate all the individual entries
[14:18] and do it very efficiently
[14:20] so for example if we want to change this
[14:22] bit
[14:23] we have to index into the tensor and in
[14:25] particular here this is the first row
[14:29] and the
[14:31] because it&#39;s zero indexed so this is row
[14:34] index one and column index zero one two
[14:37] three
[14:38] so a at one comma three we can set that
[14:41] to one
[14:43] and then a we&#39;ll have a 1 over there
[14:47] we can of course also do things like
[14:48] this so now a will be 2 over there
[14:52] or 3.
[14:53] and also we can for example say a 0 0 is
[14:56] 5
[14:57] and then a will have a 5 over here
[15:00] so that&#39;s how we can index into the
[15:02] arrays now of course the array that we
[15:04] are interested in is much much bigger so
[15:06] for our purposes we have 26 letters of
[15:08] the alphabet
[15:09] and then we have two special characters
[15:12] s and e
[15:14] so uh we want 26 plus 2 or 28 by 28
[15:18] array
[15:19] and let&#39;s call it the capital n because
[15:21] it&#39;s going to represent sort of the
[15:22] counts
[15:24] let me erase this stuff
[15:26] so that&#39;s the array that starts at zeros
[15:28] 28 by 28
[15:30] and now let&#39;s copy paste this
[15:33] here
[15:34] but instead of having a dictionary b
[15:36] which we&#39;re going to erase we now have
[15:39] an n
[15:40] now the problem here is that we have
[15:42] these characters which are strings but
[15:44] we have to now
[15:45] um basically index into a
[15:48] um array and we have to index using
[15:50] integers so we need some kind of a
[15:52] lookup table from characters to integers
[15:55] so let&#39;s construct such a character
[15:56] array
[15:58] and the way we&#39;re going to do this is
[15:59] we&#39;re going to take all the words which
[16:01] is a list of strings
[16:02] we&#39;re going to concatenate all of it
[16:04] into a massive string so this is just
[16:06] simply the entire data set as a single
[16:07] string
[16:09] we&#39;re going to pass this to the set
[16:10] constructor which takes this massive
[16:13] string
[16:14] and throws out duplicates because sets
[16:16] do not allow duplicates
[16:18] so set of this will just be the set of
[16:21] all the lowercase characters
[16:24] and there should be a total of 26 of
[16:26] them
[16:28] and now we actually don&#39;t want a set we
[16:29] want a list
[16:32] but we don&#39;t want a list sorted in some
[16:34] weird arbitrary way we want it to be
[16:36] sorted
[16:37] from a to z
[16:39] so sorted list
[16:41] so those are our characters
[16:45] now what we want is this lookup table as
[16:47] i mentioned so let&#39;s create a special
[16:49] s2i i will call it
[16:52] um s is string or character and this
[16:55] will be an s2i mapping
[16:58] for
[16:59] is in enumerate of these characters
[17:04] so enumerate basically gives us this
[17:06] iterator over the integer index and the
[17:10] actual element of the list and then we
[17:12] are mapping the character to the integer
[17:15] so s2i
[17:16] is a mapping from a to 0 b to 1 etc all
[17:19] the way from z to 25
[17:24] and that&#39;s going to be useful here but
[17:25] we actually also have to specifically
[17:27] set that s will be 26
[17:29] and s to i at e will be 27 right because
[17:33] z was 25.
[17:35] so those are the lookups and now we can
[17:38] come here and we can map
[17:39] both character 1 and character 2 to
[17:41] their integers
[17:42] so this will be s2i at character 1
[17:45] and ix2 will be s2i of character 2.
[17:49] and now we should be able to
[17:52] do this line but using our array so n at
[17:55] x1 ix2 this is the two-dimensional array
[17:58] indexing i&#39;ve shown you before
[18:00] and honestly just plus equals one
[18:02] because everything starts at
[18:04] zero
[18:06] so this should
[18:07] work
[18:08] and give us a large 28 by 28 array
[18:12] of all these counts so
[18:15] if we print n
[18:16] this is the array but of course it looks
[18:19] ugly so let&#39;s erase this ugly mess and
[18:21] let&#39;s try to visualize it a bit more
[18:23] nicer
[18:24] so for that we&#39;re going to use a library
[18:26] called matplotlib
[18:28] so matplotlib allows us to create
[18:30] figures so we can do things like plt
[18:32] item show of the counter array
[18:36] so this is the 28x28 array
[18:39] and this is structure but even this i
[18:41] would say is still pretty ugly
[18:43] so we&#39;re going to try to create a much
[18:45] nicer visualization of it and i wrote a
[18:47] bunch of code for that
[18:49] the first thing we&#39;re going to need is
[18:51] we&#39;re going to need to invert
[18:53] this array here this dictionary so s2i
[18:57] is mapping from s to i
[18:59] and in i2s we&#39;re going to reverse this
[19:02] dictionary so iterator of all the items
[19:04] and just reverse that array
[19:06] so i2s
[19:08] maps inversely from 0 to a 1 to b etc
[19:12] so we&#39;ll need that
[19:14] and then here&#39;s the code that i came up
[19:16] with to try to make this a little bit
[19:17] nicer
[19:20] we create a figure
[19:22] we plot
[19:23] n
[19:24] and then we do and then we visualize a
[19:26] bunch of things later let me just run it
[19:28] so you get a sense of what this is
[19:31] okay
[19:32] so you see here that we have
[19:35] the array spaced out
[19:37] and every one of these is basically like
[19:39] b follows g zero times
[19:42] b follows h 41 times
[19:44] um so a follows j 175 times
[19:47] and so what you can see that i&#39;m doing
[19:49] here is first i show that entire array
[19:52] and then i iterate over all the
[19:54] individual little cells here
[19:56] and i create a character string here
[19:59] which is the inverse mapping i2s of the
[20:02] integer i and the integer j so those are
[20:05] the bi-grams in a character
[20:06] representation
[20:08] and then i plot just the diagram text
[20:12] and then i plot the number of times that
[20:14] this bigram occurs
[20:16] now the reason that there&#39;s a dot item
[20:17] here is because when you index into
[20:20] these arrays these are torch tensors
[20:22] you see that we still get a tensor back
[20:25] so the type of this thing you&#39;d think it
[20:28] would be just an integer 149 but it&#39;s
[20:29] actually a torch.tensor
[20:31] and so
[20:32] if you do dot item then it will pop out
[20:35] that in individual integer
[20:38] so it will just be 149.
[20:40] so that&#39;s what&#39;s happening there and
[20:42] these are just some options to make it
[20:43] look nice
[20:45] so what is the structure of this array
[20:49] we have all these counts and we see that
[20:50] some of them occur often and some of
[20:52] them do not occur often
[20:53] now if you scrutinize this carefully you
[20:56] will notice that we&#39;re not actually
[20:57] being very clever
[20:58] that&#39;s because when you come over here
[21:00] you&#39;ll notice that for example we have
[21:02] an entire row of completely zeros and
[21:04] that&#39;s because the end character
[21:06] is never possibly going to be the first
[21:08] character of a bi-gram because we&#39;re
[21:10] always placing these end tokens all at
[21:12] the end of the diagram
[21:14] similarly we have entire columns zeros
[21:16] here because the s
[21:19] character will never possibly be the
[21:21] second element of a bigram because we
[21:23] always start with s and we end with e
[21:25] and we only have the words in between
[21:27] so we have an entire column of zeros an
[21:30] entire row of zeros and in this little
[21:32] two by two matrix here as well the only
[21:34] one that can possibly happen is if s
[21:36] directly follows e
[21:38] that can be non-zero if we have a word
[21:41] that has no letters so in that case
[21:43] there&#39;s no letters in the word it&#39;s an
[21:44] empty word and we just have s follows e
[21:47] but the other ones are just not possible
[21:50] and so we&#39;re basically wasting space and
[21:51] not only that but the s and the e are
[21:53] getting very crowded here
[21:55] i was using these brackets because
[21:57] there&#39;s convention and natural language
[21:58] processing to use these kinds of
[22:00] brackets to denote special tokens
[22:03] but we&#39;re going to use something else
[22:05] so let&#39;s fix all this and make it
[22:06] prettier
[22:08] we&#39;re not actually going to have two
[22:09] special tokens we&#39;re only going to have
[22:11] one special token
[22:12] so
[22:13] we&#39;re going to have n by n
[22:15] array of 27 by 27 instead
[22:18] instead of having two
[22:20] we will just have one and i will call it
[22:22] a dot
[22:24] okay
[22:27] let me swing this over here
[22:30] now one more thing that i would like to
[22:31] do is i would actually like to make this
[22:33] special character half position zero
[22:36] and i would like to offset all the other
[22:37] letters off i find that a little bit
[22:39] more
[22:40] pleasing
[22:42] so
[22:44] we need a plus one here so that the
[22:46] first character which is a will start at
[22:48] one
[22:49] so s2i
[22:51] will now be a starts at one and dot is 0
[22:55] and
[22:56] i2s of course we&#39;re not changing this
[22:58] because i2s just creates a reverse
[23:00] mapping and this will work fine so 1 is
[23:02] a 2 is b
[23:04] 0 is dot
[23:06] so we&#39;ve reversed that here
[23:09] we have
[23:10] a dot and a dot
[23:12] this should work fine
[23:14] make sure i start at zeros
[23:17] count
[23:18] and then here we don&#39;t go up to 28 we go
[23:20] up to 27
[23:22] and this should just work
[23:30] okay
[23:31] so we see that dot never happened it&#39;s
[23:33] at zero because we don&#39;t have empty
[23:35] words
[23:36] then this row here now is just uh very
[23:38] simply the um
[23:40] counts for all the first letters so
[23:44] uh j starts a word h starts a word i
[23:47] starts a word etc and then these are all
[23:50] the ending
[23:51] characters
[23:52] and in between we have the structure of
[23:54] what characters follow each other
[23:56] so this is the counts array of our
[23:59] entire
[24:00] data set so this array actually has all
[24:03] the information necessary for us to
[24:04] actually sample from this bigram
[24:07] uh character level language model
[24:09] and um roughly speaking what we&#39;re going
[24:11] to do is we&#39;re just going to start
[24:13] following these probabilities and these
[24:14] counts and we&#39;re going to start sampling
[24:16] from the from the model
[24:18] so in the beginning of course
[24:20] we start with the dot the start token
[24:23] dot
[24:24] so to sample the first character of a
[24:27] name we&#39;re looking at this row here
[24:30] so we see that we have the counts and
[24:32] those concepts terminally are telling us
[24:34] how often any one of these characters is
[24:37] to start a word
[24:39] so if we take this n
[24:41] and we grab the first row
[24:44] we can do that by using just indexing as
[24:47] zero
[24:48] and then using this notation column for
[24:51] the rest of that row
[24:53] so n zero colon
[24:56] is indexing into the zeroth
[24:58] row and then it&#39;s grabbing all the
[25:00] columns
[25:01] and so this will give us a
[25:03] one-dimensional array
[25:05] of the first row so zero four four ten
[25:08] you know zero four four ten one three oh
[25:10] six one five four two etc it&#39;s just the
[25:13] first row the shape of this
[25:15] is 27 it&#39;s just the row of 27
[25:19] and the other way that you can do this
[25:21] also is you just you don&#39;t need to
[25:22] actually give this
[25:23] you just grab the zeroth row like this
[25:26] this is equivalent
[25:28] now these are the counts
[25:29] and now what we&#39;d like to do is we&#39;d
[25:31] like to basically um sample from this
[25:34] since these are the raw counts we
[25:36] actually have to convert this to
[25:37] probabilities
[25:39] so we create a probability vector
[25:42] so we&#39;ll take n of zero
[25:44] and we&#39;ll actually convert this to float
[25:48] first
[25:49] okay so these integers are converted to
[25:51] float
[25:52] floating point numbers and the reason
[25:54] we&#39;re creating floats is because we&#39;re
[25:56] about to normalize these counts
[25:58] so to create a probability distribution
[26:00] here we want to divide
[26:03] we basically want to do p p p divide p
[26:05] that sum
[26:09] and now we get a vector of smaller
[26:11] numbers and these are now probabilities
[26:13] so of course because we divided by the
[26:15] sum the sum of p now is 1.
[26:18] so this is a nice proper probability
[26:20] distribution it sums to 1 and this is
[26:22] giving us the probability for any single
[26:24] character to be the first
[26:26] character of a word
[26:27] so now we can try to sample from this
[26:29] distribution to sample from these
[26:31] distributions we&#39;re going to use
[26:33] storch.multinomial which i&#39;ve pulled up
[26:34] here
[26:36] so torch.multinomial returns uh
[26:40] samples from the multinomial probability
[26:42] distribution which is a complicated way
[26:44] of saying you give me probabilities and
[26:46] i will give you integers which are
[26:48] sampled
[26:49] according to the property distribution
[26:51] so this is the signature of the method
[26:53] and to make everything deterministic
[26:54] we&#39;re going to use a generator object in
[26:57] pytorch
[26:59] so this makes everything deterministic
[27:00] so when you run this on your computer
[27:02] you&#39;re going to the exact get the exact
[27:04] same results that i&#39;m getting here on my
[27:05] computer
[27:07] so let me show you how this works
[27:12] here&#39;s the deterministic way of creating
[27:15] a torch generator object
[27:18] seeding it with some number that we can
[27:20] agree on
[27:21] so that seeds a generator gets gives us
[27:23] an object g
[27:24] and then we can pass that g
[27:26] to a function
[27:28] that creates um
[27:30] here random numbers twerk.rand creates
[27:32] random numbers three of them
[27:35] and it&#39;s using this generator object to
[27:37] as a source of randomness
[27:40] so
[27:41] without normalizing it
[27:44] i can just print
[27:46] this is sort of like numbers between 0
[27:48] and 1 that are random according to this
[27:50] thing and whenever i run it again
[27:53] i&#39;m always going to get the same result
[27:54] because i keep using the same generator
[27:56] object which i&#39;m seeing here
[27:58] and then if i divide
[28:01] to normalize i&#39;m going to get a nice
[28:04] probability distribution of just three
[28:05] elements
[28:07] and then we can use torsion multinomial
[28:09] to draw samples from it so this is what
[28:11] that looks like
[28:13] tertiary multinomial we&#39;ll take the
[28:16] torch tensor
[28:18] of probability distributions
[28:20] then we can ask for a number of samples
[28:22] let&#39;s say 20.
[28:24] replacement equals true means that when
[28:26] we draw an element
[28:28] we will uh we can draw it and then we
[28:30] can put it back into the list of
[28:32] eligible indices to draw again
[28:35] and we have to specify replacement as
[28:37] true because by default uh for some
[28:39] reason it&#39;s false
[28:41] and i think
[28:42] you know it&#39;s just something to be
[28:44] careful with
[28:45] and the generator is passed in here so
[28:47] we&#39;re going to always get deterministic
[28:49] results the same results so if i run
[28:51] these two
[28:53] we&#39;re going to get a bunch of samples
[28:55] from this distribution
[28:57] now you&#39;ll notice here that the
[28:58] probability for the
[29:00] first element in this tensor is 60
[29:04] so in these 20 samples we&#39;d expect 60 of
[29:08] them to be zero
[29:10] we&#39;d expect thirty percent of them to be
[29:12] one
[29:14] and because the the element index two
[29:17] has only ten percent probability very
[29:19] few of these samples should be two and
[29:22] indeed we only have a small number of
[29:24] twos
[29:25] and we can sample as many as we&#39;d like
[29:28] and the more we sample the more
[29:31] these numbers should um roughly have the
[29:33] distribution here
[29:35] so we should have lots of zeros
[29:38] half as many um
[29:41] ones and we should have um three times
[29:44] as few
[29:46] oh sorry s few ones and three times as
[29:49] few uh
[29:50] twos
[29:51] so you see that we have very few twos we
[29:53] have some ones and most of them are zero
[29:55] so that&#39;s what torsion multinomial is
[29:57] doing
[29:58] for us here
[30:01] we are interested in this row we&#39;ve
[30:02] created this
[30:05] p here
[30:06] and now we can sample from it
[30:09] so if we use the same
[30:11] seed
[30:12] and then we sample from this
[30:14] distribution let&#39;s just get one sample
[30:18] then we see that the sample is say 13.
[30:22] so this will be the index
[30:25] and let&#39;s you see how it&#39;s a tensor that
[30:27] wraps 13 we again have to use that item
[30:30] to pop out that integer
[30:32] and now index would be just the number
[30:35] 13.
[30:37] and of course the um we can do
[30:40] we can map the i2s of ix to figure out
[30:43] exactly which character
[30:45] we&#39;re sampling here we&#39;re sampling m
[30:48] so we&#39;re saying that the first character
[30:50] is
[30:51] in our generation
[30:53] and just looking at the road here
[30:55] m was drawn and you we can see that m
[30:57] actually starts a large number of words
[30:59] uh m
[31:01] started 2 500 words out of 32 000 words
[31:04] so almost
[31:06] a bit less than 10 percent of the words
[31:07] start with them so this was actually a
[31:09] fairly likely character to draw
[31:13] um
[31:15] so that would be the first character of
[31:16] our work and now we can continue to
[31:18] sample more characters because now we
[31:20] know that m started
[31:22] m is already sampled
[31:24] so now to draw the next character we
[31:26] will come back here and we will look for
[31:29] the row
[31:30] that starts with m
[31:32] so you see m
[31:34] and we have a row here
[31:36] so we see that m dot is
[31:39] 516 m a is this many and b is this many
[31:43] etc so these are the counts for the next
[31:44] row and that&#39;s the next character that
[31:46] we are going to now generate
[31:48] so i think we are ready to actually just
[31:50] write out the loop because i think
[31:51] you&#39;re starting to get a sense of how
[31:52] this is going to go
[31:54] the um
[31:56] we always begin at
[31:57] index 0 because that&#39;s the start token
[32:02] and then while true
[32:04] we&#39;re going to grab the row
[32:06] corresponding to index
[32:08] that we&#39;re currently on so that&#39;s p
[32:11] so that&#39;s n array at ix
[32:14] converted to float is rp
[32:19] then we normalize
[32:21] this p to sum to one
[32:25] i accidentally ran the infinite loop we
[32:28] normalize p to something one
[32:30] then we need this generator object
[32:33] now we&#39;re going to initialize up here
[32:35] and we&#39;re going to draw a single sample
[32:36] from this distribution
[32:40] and then this is going to tell us what
[32:42] index is going to be next
[32:46] if the index sampled is
[32:48] 0
[32:49] then that&#39;s now the end token
[32:52] so we will break
[32:55] otherwise we are going to print
[32:57] s2i of ix
[33:02] i2s
[33:05] and uh that&#39;s pretty much it we&#39;re just
[33:07] uh this should work okay more
[33:12] so that&#39;s that&#39;s the name that we&#39;ve
[33:13] sampled we started with m the next step
[33:16] was o then r and then dot
[33:21] and this dot we it here as well
[33:24] so
[33:26] let&#39;s now do this a few times
[33:29] so let&#39;s actually create an
[33:33] out list here
[33:37] and instead of printing we&#39;re going to
[33:38] append
[33:39] so out that append this character
[33:44] and then here let&#39;s just print it at the
[33:46] end so let&#39;s just join up all the outs
[33:49] and we&#39;re just going to print more okay
[33:51] now we&#39;re always getting the same result
[33:53] because of the generator
[33:55] so if we want to do this a few times we
[33:57] can go for i in range
[34:00] 10 we can sample 10 names
[34:02] and we can just do that 10 times
[34:05] and these are the names that we&#39;re
[34:06] getting out
[34:08] let&#39;s do 20.
[34:14] i&#39;ll be honest with you this doesn&#39;t
[34:15] look right
[34:16] so i started a few minutes to convince
[34:18] myself that it actually is right
[34:20] the reason these samples are so terrible
[34:22] is that bigram language model
[34:24] is actually look just like really
[34:26] terrible
[34:27] we can generate a few more here
[34:30] and you can see that they&#39;re kind of
[34:30] like their name like a little bit like
[34:33] yanu o&#39;reilly etc but they&#39;re just like
[34:36] totally messed up um
[34:38] and i mean the reason that this is so
[34:40] bad like we&#39;re generating h as a name
[34:42] but you have to think through
[34:44] it from the model&#39;s eyes it doesn&#39;t know
[34:47] that this h is the very first h all it
[34:49] knows is that h was previously and now
[34:52] how likely is h the last character well
[34:55] it&#39;s somewhat
[34:57] likely and so it just makes it last
[34:58] character it doesn&#39;t know that there
[35:00] were other things before it or there
[35:02] were not other things before it and so
[35:04] that&#39;s why it&#39;s generating all these
[35:05] like
[35:06] nonsense names
[35:08] another way to do this is
[35:11] to convince yourself that this is
[35:12] actually doing something reasonable even
[35:14] though it&#39;s so terrible is
[35:17] these little piece here are 27 right
[35:20] like 27.
[35:23] so how about if we did something like
[35:24] this
[35:26] instead of p having any structure
[35:27] whatsoever
[35:28] how about if p was just
[35:30] torch dot once
[35:34] of 27
[35:37] by default this is a float 32 so this is
[35:39] fine divide 27
[35:42] so what i&#39;m doing here is this is the
[35:44] uniform distribution which will make
[35:47] everything equally likely
[35:49] and we can sample from that so let&#39;s see
[35:52] if that does any better
[35:54] okay so it&#39;s
[35:55] this is what you have from a model that
[35:57] is completely untrained where everything
[35:59] is equally likely so it&#39;s obviously
[36:01] garbage and then if we have a trained
[36:03] model which is trained on just bi-grams
[36:07] this is what we get so you can see that
[36:09] it is more name-like it is actually
[36:11] working it&#39;s just um
[36:14] my gram is so terrible and we have to do
[36:15] better now next i would like to fix an
[36:17] inefficiency that we have going on here
[36:20] because what we&#39;re doing here is we&#39;re
[36:21] always fetching a row of n from the
[36:24] counts matrix up ahead
[36:26] and then we&#39;re always doing the same
[36:27] things we&#39;re converting to float and
[36:28] we&#39;re dividing and we&#39;re doing this
[36:30] every single iteration of this loop and
[36:32] we just keep renormalizing these rows
[36:34] over and over again and it&#39;s extremely
[36:35] inefficient and wasteful so what i&#39;d
[36:37] like to do is i&#39;d like to actually
[36:38] prepare a matrix capital p that will
[36:41] just have the probabilities in it so in
[36:44] other words it&#39;s going to be the same as
[36:45] the capital n matrix here of counts but
[36:48] every single row will have the row of
[36:50] probabilities uh that is normalized to 1
[36:52] indicating the probability distribution
[36:54] for the next character given the
[36:56] character before it
[36:57] um as defined by which row we&#39;re in
[37:01] so basically what we&#39;d like to do is
[37:03] we&#39;d like to just do it up front here
[37:04] and then we would like to just use that
[37:06] row here so here we would like to just
[37:09] do p equals p of ix instead
[37:12] okay
[37:14] the other reason i want to do this is
[37:16] not just for efficiency but also i would
[37:17] like us to practice
[37:19] these n-dimensional tensors and i&#39;d like
[37:21] us to practice their manipulation and
[37:23] especially something that&#39;s called
[37:24] broadcasting that we&#39;ll go into in a
[37:26] second
[37:26] we&#39;re actually going to have to become
[37:28] very good at these tensor manipulations
[37:30] because if we&#39;re going to build out all
[37:32] the way to transformers we&#39;re going to
[37:33] be doing some pretty complicated um
[37:35] array operations for efficiency and we
[37:37] need to really understand that and be
[37:39] very good at it
[37:42] so intuitively what we want to do is we
[37:43] first want to grab the floating point
[37:45] copy of n
[37:48] and i&#39;m mimicking the line here
[37:49] basically
[37:50] and then we want to divide all the rows
[37:53] so that they sum to 1.
[37:55] so we&#39;d like to do something like this p
[37:57] divide p dot sum
[38:00] but
[38:01] now we have to be careful
[38:02] because p dot sum actually
[38:05] produces a sum
[38:08] sorry equals and that float copy
[38:10] p dot sum produces a um
[38:14] sums up all of the counts of this entire
[38:16] matrix n and gives us a single number of
[38:19] just the summation of everything so
[38:21] that&#39;s not the way we want to define
[38:22] divide we want to simultaneously and in
[38:25] parallel divide all the rows
[38:27] by their respective sums
[38:30] so what we have to do now is we have to
[38:32] go into documentation for torch.sum
[38:35] and we can scroll down here to a
[38:37] definition that is relevant to us which
[38:38] is where we don&#39;t only provide an input
[38:41] array that we want to sum but we also
[38:43] provide the dimension along which we
[38:45] want to sum
[38:47] and in particular we want to sum up
[38:49] over rows
[38:51] right
[38:52] now one more argument that i want you to
[38:53] pay attention to here is the keep them
[38:56] is false
[38:57] if keep them is true then the output
[39:00] tensor is of the same size as input
[39:02] except of course the dimension along
[39:03] which is summed which will become just
[39:05] one
[39:07] but if you pass in keep them as false
[39:12] then this dimension is squeezed out and
[39:14] so torch.sum not only does the sum and
[39:16] collapses dimension to be of size one
[39:18] but in addition it does what&#39;s called a
[39:20] squeeze where it squeezes out it
[39:22] squeezes out that dimension
[39:24] so
[39:25] basically what we want here is we
[39:27] instead want to do p dot sum of some
[39:29] axis
[39:30] and in particular notice that p dot
[39:32] shape is 27 by 27
[39:35] so when we sum up across axis zero then
[39:37] we would be taking the zeroth dimension
[39:40] and we would be summing across it
[39:42] so when keep them as true
[39:44] then this thing will not only give us
[39:46] the counts across um
[39:50] along the columns
[39:51] but notice that basically the shape of
[39:53] this is 1 by 27 we just get a row vector
[39:57] and the reason we get a row vector here
[39:58] again is because we passed in zero
[40:00] dimension so this zero dimension becomes
[40:02] one and we&#39;ve done a sum
[40:04] and we get a row and so basically we&#39;ve
[40:06] done the sum
[40:08] this way
[40:09] vertically and arrived at just a single
[40:11] 1 by 27
[40:12] vector of counts
[40:15] what happens when you take out keep them
[40:17] is that we just get 27. so it squeezes
[40:20] out that dimension and we just get
[40:23] a one-dimensional vector of size 27.
[40:28] now we don&#39;t actually want
[40:31] one by 27 row vector because that gives
[40:33] us the counts or the sums across
[40:37] the columns
[40:39] we actually want to sum the other way
[40:41] along dimension one and you&#39;ll see that
[40:43] the shape of this is 27 by one so it&#39;s a
[40:46] column vector it&#39;s a 27 by one
[40:49] vector of counts
[40:52] okay
[40:53] and that&#39;s because what&#39;s happened here
[40:55] is that we&#39;re going horizontally and
[40:56] this 27 by 27 matrix becomes a 27 by 1
[41:01] array
[41:03] now you&#39;ll notice by the way that um the
[41:06] actual numbers
[41:08] of these counts are identical
[41:10] and that&#39;s because this special array of
[41:12] counts here comes from bi-gram
[41:13] statistics and actually it just so
[41:15] happens by chance
[41:17] or because of the way this array is
[41:19] constructed that the sums along the
[41:21] columns or along the rows horizontally
[41:23] or vertically is identical
[41:26] but actually what we want to do in this
[41:27] case is we want to sum across the
[41:30] rows
[41:31] horizontally so what we want here is p
[41:33] that sum of one with keep in true
[41:37] 27 by one column vector
[41:39] and now what we want to do is we want to
[41:40] divide by that
[41:44] now we have to be careful here again is
[41:46] it possible to take
[41:48] what&#39;s a um p dot shape you see here 27
[41:51] by 27 is it possible to take a 27 by 27
[41:55] array and divide it by what is a 27 by 1
[41:59] array
[42:01] is that an operation that you can do
[42:03] and whether or not you can perform this
[42:05] operation is determined by what&#39;s called
[42:06] broadcasting rules so if you just search
[42:09] broadcasting semantics in torch
[42:11] you&#39;ll notice that there&#39;s a special
[42:12] definition for
[42:14] what&#39;s called broadcasting that uh for
[42:16] whether or not um these two uh arrays
[42:20] can be combined in a binary operation
[42:22] like division
[42:23] so the first condition is each tensor
[42:25] has at least one dimension which is the
[42:27] case for us
[42:28] and then when iterating over the
[42:29] dimension sizes starting at the trailing
[42:31] dimension
[42:32] the dimension sizes must either be equal
[42:34] one of them is one or one of them does
[42:36] not exist
[42:38] okay
[42:38] so let&#39;s do that we need to align the
[42:41] two arrays and their shapes which is
[42:44] very easy because both of these shapes
[42:45] have two elements so they&#39;re aligned
[42:48] then we iterate over from the from the
[42:50] right and going to the left
[42:52] each dimension must be either equal one
[42:55] of them is a one or one of them does not
[42:57] exist so in this case they&#39;re not equal
[42:59] but one of them is a one so this is fine
[43:01] and then this dimension they&#39;re both
[43:03] equal
[43:04] so uh this is fine
[43:05] so all the dimensions are fine and
[43:08] therefore the this operation is
[43:10] broadcastable so that means that this
[43:12] operation is allowed
[43:14] and what is it that these arrays do when
[43:16] you divide 27 by 27 by 27 by one
[43:19] what it does is that it takes this
[43:21] dimension one and it stretches it out it
[43:24] copies it to match
[43:27] 27 here in this case
[43:28] so in our case it takes this column
[43:30] vector which is 27 by 1
[43:32] and it copies it 27 times
[43:36] to make
[43:37] these both be 27 by 27 internally you
[43:40] can think of it that way and so it
[43:42] copies those counts
[43:44] and then it does an element-wise
[43:45] division
[43:47] which is what we want because these
[43:48] counts we want to divide by them on
[43:50] every single one of these columns in
[43:52] this matrix
[43:54] so this actually we expect will
[43:56] normalize
[43:57] every single row
[43:59] and we can check that this is true by
[44:01] taking the first row for example and
[44:04] taking its sum we expect this to be
[44:06] 1. because it&#39;s not normalized
[44:10] and then we expect this now because if
[44:13] we actually correctly normalize all the
[44:14] rows we expect to get the exact same
[44:16] result here so let&#39;s run this
[44:19] it&#39;s the exact same result
[44:21] this is correct so now i would like to
[44:23] scare you a little bit
[44:25] uh you actually have to like i basically
[44:27] encourage you very strongly to read
[44:28] through broadcasting semantics
[44:30] and i encourage you to treat this with
[44:31] respect and it&#39;s not something to play
[44:34] fast and loose with it&#39;s something to
[44:35] really respect really understand and
[44:37] look up maybe some tutorials for
[44:38] broadcasting and practice it and be
[44:40] careful with it because you can very
[44:42] quickly run into books let me show you
[44:44] what i mean
[44:47] you see how here we have p dot sum of
[44:48] one keep them as true
[44:50] the shape of this is 27 by one let me
[44:53] take out this line just so we have the n
[44:55] and then we can see the counts
[44:58] we can see that this is a all the counts
[45:00] across all the
[45:02] rows
[45:03] and it&#39;s a 27 by one column vector right
[45:07] now suppose that i tried to do the
[45:09] following
[45:10] but i erase keep them just true here
[45:13] what does that do if keep them is not
[45:15] true it&#39;s false then remember according
[45:18] to documentation it gets rid of this
[45:20] dimension one it squeezes it out so
[45:23] basically we just get all the same
[45:24] counts the same result except the shape
[45:27] of it is not 27 by 1 it is just 27 the
[45:30] one disappears
[45:31] but all the counts are the same
[45:34] so you&#39;d think that this divide that
[45:37] would uh would work
[45:40] first of all can we even uh write this
[45:42] and will it is it even is it even
[45:44] expected to run is it broadcastable
[45:46] let&#39;s determine if this result is
[45:47] broadcastable
[45:49] p.summit one is shape
[45:51] is 27.
[45:52] this is 27 by 27. so 27 by 27
[45:57] broadcasting into 27. so now
[46:01] rules of broadcasting number one align
[46:03] all the dimensions on the right done now
[46:06] iteration over all the dimensions
[46:07] starting from the right going to the
[46:09] left
[46:10] all the dimensions must either be equal
[46:12] one of them must be one or one that does
[46:14] not exist so here they are all equal
[46:17] here the dimension does not exist
[46:19] so internally what broadcasting will do
[46:21] is it will create a one here
[46:24] and then
[46:25] we see that one of them is a one and
[46:27] this will get copied and this will run
[46:30] this will broadcast
[46:32] okay so you&#39;d expect this
[46:34] to work
[46:37] because we we are
[46:41] this broadcast and this we can divide
[46:42] this
[46:43] now if i run this you&#39;d expect it to
[46:45] work but
[46:46] it doesn&#39;t
[46:47] uh you actually get garbage you get a
[46:49] wrong dissolve because this is actually
[46:51] a bug
[46:52] this keep them equals true
[46:57] makes it work
[47:00] this is a bug
[47:02] in both cases we are doing
[47:04] the correct counts we are summing up
[47:07] across the rows
[47:09] but keep them is saving us and making it
[47:10] work so in this case
[47:12] i&#39;d like to encourage you to potentially
[47:14] like pause this video at this point and
[47:15] try to think about why this is buggy and
[47:18] why the keep dim was necessary here
[47:22] okay
[47:22] so the reason to do
[47:24] for this is i&#39;m trying to hint it here
[47:26] when i was sort of giving you a bit of a
[47:27] hint on how this works
[47:29] this
[47:30] 27 vector
[47:32] internally inside the broadcasting this
[47:34] becomes a 1 by 27
[47:36] and 1 by 27 is a row vector right
[47:39] and now we are dividing 27 by 27 by 1 by
[47:42] 27
[47:43] and torch will replicate this dimension
[47:45] so basically
[47:47] uh it will take
[47:49] it will take this
[47:51] row vector and it will copy it
[47:53] vertically now
[47:55] 27 times so the 27 by 27 lies exactly
[47:57] and element wise divides
[48:00] and so basically what&#39;s happening here
[48:02] is
[48:04] we&#39;re actually normalizing the columns
[48:06] instead of normalizing the rows
[48:09] so you can check that what&#39;s happening
[48:11] here is that p at zero which is the
[48:13] first row of p dot sum
[48:16] is not one it&#39;s seven
[48:18] it is the first column as an example
[48:20] that sums to one
[48:23] so
[48:24] to summarize where does the issue come
[48:26] from the issue comes from the silent
[48:28] adding of a dimension here because in
[48:30] broadcasting rules you align on the
[48:31] right and go from right to left and if
[48:34] dimension doesn&#39;t exist you create it
[48:36] so that&#39;s where the problem happens we
[48:38] still did the counts correctly we did
[48:39] the counts across the rows and we got
[48:41] the the counts on the right here as a
[48:44] column vector but because the keep
[48:46] things was true this this uh this
[48:48] dimension was discarded and now we just
[48:49] have a vector of 27. and because of
[48:52] broadcasting the way it works this
[48:54] vector of 27 suddenly becomes a row
[48:56] vector
[48:56] and then this row vector gets replicated
[48:58] vertically and that every single point
[49:00] we are dividing by the by the count
[49:05] in the opposite direction
[49:07] so uh
[49:08] so this thing just uh doesn&#39;t work this
[49:11] needs to be keep things equal true in
[49:12] this case
[49:14] so then
[49:16] then we have that p at zero is
[49:17] normalized
[49:19] and conversely the first column you&#39;d
[49:21] expect to potentially not be normalized
[49:24] and this is what makes it work
[49:27] so pretty subtle and uh hopefully this
[49:31] helps to scare you that you should have
[49:33] a respect for broadcasting be careful
[49:34] check your work uh and uh understand how
[49:37] it works under the hood and make sure
[49:39] that it&#39;s broadcasting in the direction
[49:40] that you like otherwise you&#39;re going to
[49:41] introduce very subtle bugs very hard to
[49:44] find bugs and uh just be careful one
[49:46] more note on efficiency we don&#39;t want to
[49:48] be doing this here because this creates
[49:51] a completely new tensor that we store
[49:53] into p
[49:54] we prefer to use in place operations if
[49:56] possible
[49:57] so this would be an in-place operation
[50:00] it has the potential to be faster it
[50:01] doesn&#39;t create new memory
[50:03] under the hood and then let&#39;s erase this
[50:06] we don&#39;t need it
[50:07] and let&#39;s
[50:09] also
[50:10] um just do fewer just so i&#39;m not wasting
[50:13] space
[50:14] okay so we&#39;re actually in a pretty good
[50:15] spot now
[50:16] we trained a bigram language model and
[50:19] we trained it really just by counting uh
[50:22] how frequently any pairing occurs and
[50:24] then normalizing so that we get a nice
[50:26] property distribution
[50:27] so really these elements of this array p
[50:31] are really the parameters of our biogram
[50:32] language model giving us and summarizing
[50:34] the statistics of these bigrams
[50:36] so we train the model and then we know
[50:38] how to sample from a model we just
[50:40] iteratively uh sample the next character
[50:43] and feed it in each time and get a next
[50:45] character
[50:46] now what i&#39;d like to do is i&#39;d like to
[50:48] somehow evaluate the quality of this
[50:50] model we&#39;d like to somehow summarize the
[50:52] quality of this model into a single
[50:54] number how good is it at predicting
[50:57] the training set
[50:58] and as an example so in the training set
[51:00] we can evaluate now the training loss
[51:04] and this training loss is telling us
[51:05] about
[51:06] sort of the quality of this model in a
[51:08] single number just like we saw in
[51:10] micrograd
[51:11] so let&#39;s try to think through the
[51:13] quality of the model and how we would
[51:14] evaluate it
[51:16] basically what we&#39;re going to do is
[51:18] we&#39;re going to copy paste this code
[51:20] that we previously used for counting
[51:22] okay
[51:24] and let me just print these diagrams
[51:25] first we&#39;re gonna use f strings
[51:27] and i&#39;m gonna print character one
[51:29] followed by character two these are the
[51:30] diagrams and then i don&#39;t wanna do it
[51:32] for all the words just do the first
[51:34] three words so here we have emma olivia
[51:37] and ava bigrams
[51:40] now what we&#39;d like to do is we&#39;d like to
[51:41] basically look at the probability that
[51:44] the model assigns to every one of these
[51:46] diagrams
[51:48] so in other words we can look at the
[51:49] probability which is
[51:51] summarized in the matrix b
[51:52] of i x 1 x 2
[51:56] and then we can print it here
[51:57] as probability
[52:00] and because these properties are way too
[52:02] large let me present
[52:04] or call in 0.4 f
[52:06] to like truncate it a bit
[52:09] so what do we have here right we&#39;re
[52:10] looking at the probabilities that the
[52:11] model assigns to every one of these
[52:13] bigrams in the dataset
[52:15] and so we can see some of them are four
[52:16] percent three percent etc
[52:18] just to have a measuring stick in our
[52:19] mind by the way um we have 27 possible
[52:23] characters or tokens and if everything
[52:25] was equally likely then you&#39;d expect all
[52:27] these probabilities
[52:28] to be
[52:30] four percent roughly
[52:32] so anything above four percent means
[52:34] that we&#39;ve learned something useful from
[52:35] these bigram statistics and you see that
[52:38] roughly some of these are four percent
[52:39] but some of them are as high as 40
[52:40] percent
[52:41] 35 percent and so on so you see that the
[52:44] model actually assigned a pretty high
[52:45] probability to whatever&#39;s in the
[52:47] training set and so that&#39;s a good thing
[52:50] um basically if you have a very good
[52:51] model you&#39;d expect that these
[52:53] probabilities should be near one because
[52:54] that means that your model is correctly
[52:57] predicting what&#39;s going to come next
[52:58] especially on the training set where you
[53:00] where you trained your model
[53:02] so
[53:03] now we&#39;d like to think about how can we
[53:05] summarize these probabilities into a
[53:07] single number that measures the quality
[53:09] of this model
[53:11] now when you look at the literature into
[53:13] maximum likelihood estimation and
[53:15] statistical modeling and so on
[53:17] you&#39;ll see that what&#39;s typically used
[53:18] here is something called the likelihood
[53:21] and the likelihood is the product of all
[53:23] of these probabilities
[53:25] and so the product of all these
[53:27] probabilities is the likelihood and it&#39;s
[53:29] really telling us about the probability
[53:31] of the entire data set assigned uh
[53:34] assigned by the model that we&#39;ve trained
[53:37] and that is a measure of quality
[53:39] so the product of these
[53:41] should be as high as possible
[53:43] when you are training the model and when
[53:44] you have a good model your pro your
[53:46] product of these probabilities should be
[53:47] very high
[53:49] um
[53:50] now because the product of these
[53:51] probabilities is an unwieldy thing to
[53:53] work with you can see that all of them
[53:55] are between zero and one so your product
[53:56] of these probabilities will be a very
[53:58] tiny number
[54:00] um
[54:00] so
[54:01] for convenience what people work with
[54:03] usually is not the likelihood but they
[54:04] work with what&#39;s called the log
[54:06] likelihood
[54:07] so
[54:08] the product of these is the likelihood
[54:10] to get the log likelihood we just have
[54:12] to take the log of the probability
[54:14] and so the log of the probability here i
[54:17] have the log of x from zero to one
[54:19] the log is a you see here monotonic
[54:21] transformation of the probability
[54:24] where if you pass in one
[54:27] you get zero
[54:28] so probability one gets your log
[54:30] probability of zero
[54:32] and then as you go lower and lower
[54:33] probability the log will grow more and
[54:35] more negative until all the way to
[54:37] negative infinity at zero
[54:41] so here we have a log prob which is
[54:44] really just a torch.log of probability
[54:46] let&#39;s print it out to get a sense of
[54:48] what that looks like
[54:49] log prob
[54:51] also 0.4 f
[54:54] okay
[54:56] so as you can see when we plug in
[54:58] numbers that are very close some of our
[55:00] higher numbers we get closer and closer
[55:02] to zero
[55:03] and then if we plug in very bad
[55:04] probabilities we get more and more
[55:06] negative number that&#39;s bad
[55:09] so
[55:10] and the reason we work with this is for
[55:12] a large extent convenience right
[55:15] because we have mathematically that if
[55:16] you have some product a times b times c
[55:18] of all these probabilities right
[55:21] the likelihood is the product of all
[55:23] these probabilities
[55:25] then the log
[55:27] of these
[55:28] is just log of a plus
[55:30] log of b
[55:33] plus log of c if you remember your logs
[55:36] from your
[55:37] high school or undergrad and so on
[55:39] so we have that basically
[55:41] the likelihood of the product
[55:42] probabilities the log likelihood is just
[55:44] the sum of the logs of the individual
[55:46] probabilities
[55:48] so
[55:50] log likelihood
[55:52] starts at zero
[55:54] and then log likelihood here we can just
[55:57] accumulate simply
[56:00] and in the end we can print this
[56:05] print the log likelihood
[56:09] f strings
[56:11] maybe you&#39;re familiar with this
[56:13] so log likelihood is negative 38.
[56:19] okay
[56:21] now
[56:22] we actually want um
[56:25] so how high can log likelihood get it
[56:27] can go to zero so when all the
[56:30] probabilities are one log likelihood
[56:31] will be zero and then when all the
[56:33] probabilities are lower this will grow
[56:35] more and more negative
[56:37] now we don&#39;t actually like this because
[56:39] what we&#39;d like is a loss function and a
[56:41] loss function has the semantics that low
[56:44] is good
[56:46] because we&#39;re trying to minimize the
[56:47] loss so we actually need to invert this
[56:50] and that&#39;s what gives us something
[56:51] called the negative log likelihood
[56:55] negative log likelihood is just negative
[56:58] of the log likelihood
[57:03] these are f strings by the way if you&#39;d
[57:05] like to look this up
[57:06] negative log likelihood equals
[57:09] so negative log likelihood now is just
[57:10] negative of it and so the negative log
[57:12] block load is a very nice loss function
[57:15] because um
[57:17] the lowest it can get is zero
[57:19] and the higher it is the worse off the
[57:22] predictions are that you&#39;re making
[57:24] and then one more modification to this
[57:26] that sometimes people do is that for
[57:27] convenience uh they actually like to
[57:29] normalize by they like to make it an
[57:32] average instead of a sum
[57:34] and so uh here
[57:37] let&#39;s just keep some counts as well
[57:39] so n plus equals one
[57:41] starts at zero
[57:42] and then here
[57:44] um we can have sort of like a normalized
[57:46] log likelihood
[57:47] um
[57:50] if we just normalize it by the count
[57:52] then we will sort of get the average
[57:54] log likelihood so this would be
[57:56] usually our loss function here is what
[57:59] this we would this is what we would use
[58:02] uh so our loss function for the training
[58:03] set assigned by the model is 2.4 that&#39;s
[58:06] the quality of this model
[58:08] and the lower it is the better off we
[58:10] are and the higher it is the worse off
[58:12] we are
[58:13] and
[58:14] the job of our you know training is to
[58:17] find the parameters that minimize the
[58:19] negative log likelihood loss
[58:22] and that would be like a high quality
[58:24] model okay so to summarize i actually
[58:26] wrote it out here
[58:28] so our goal is to maximize likelihood
[58:30] which is the
[58:31] product of all the probabilities
[58:34] assigned by the model
[58:35] and we want to maximize this likelihood
[58:37] with respect to the model parameters and
[58:39] in our case the model parameters here
[58:41] are defined in the table these numbers
[58:43] the probabilities
[58:45] are
[58:46] the model parameters sort of in our
[58:47] program language models so far but you
[58:50] have to keep in mind that here we are
[58:52] storing everything in a table format the
[58:53] probabilities but what&#39;s coming up as a
[58:55] brief preview is that these numbers will
[58:58] not be kept explicitly but these numbers
[59:00] will be calculated by a neural network
[59:03] so that&#39;s coming up
[59:04] and we want to change and tune the
[59:06] parameters of these neural networks we
[59:08] want to change these parameters to
[59:09] maximize the likelihood the product of
[59:11] the probabilities
[59:13] now maximizing the likelihood is
[59:15] equivalent to maximizing the log
[59:16] likelihood because log is a monotonic
[59:18] function
[59:19] here&#39;s the graph of log
[59:22] and basically all it is doing is it&#39;s
[59:24] just scaling your um you can look at it
[59:27] as just a scaling of the loss function
[59:29] and so the optimization problem here and
[59:32] here are actually equivalent because
[59:34] this is just scaling you can look at it
[59:36] that way
[59:36] and so these are two identical
[59:38] optimization problems
[59:41] um
[59:41] maximizing the log-likelihood is
[59:43] equivalent to minimizing the negative
[59:44] log likelihood and then in practice
[59:47] people actually minimize the average
[59:48] negative log likelihood to get numbers
[59:50] like 2.4
[59:52] and then this summarizes the quality of
[59:55] your model and we&#39;d like to minimize it
[59:57] and make it as small as possible
[59:59] and the lowest it can get is zero
[60:02] and the lower it is
[60:04] the better off your model is because
[60:05] it&#39;s signing it&#39;s assigning high
[60:07] probabilities to your data now let&#39;s
[60:09] estimate the probability over the entire
[60:11] training set just to make sure that we
[60:12] get something around 2.4 let&#39;s run this
[60:15] over the entire oops
[60:17] let&#39;s take out the print segment as well
[60:20] okay 2.45 or the entire training set
[60:24] now what i&#39;d like to show you is that
[60:25] you can actually evaluate the
[60:26] probability for any word that you want
[60:28] like for example
[60:30] if we just test a single word andre and
[60:32] bring back the print statement
[60:35] then you see that andre is actually kind
[60:37] of like an unlikely word like on average
[60:40] we take
[60:41] three
[60:42] log probability to represent it and
[60:44] roughly that&#39;s because ej apparently is
[60:46] very uncommon as an example
[60:50] now
[60:51] think through this um
[60:53] when i take andre and i append q and i
[60:55] test the probability of it under q
[61:00] we actually get
[61:01] infinity
[61:02] and that&#39;s because jq has a zero percent
[61:05] probability according to our model so
[61:07] the log likelihood
[61:09] so the log of zero will be negative
[61:11] infinity we get infinite loss
[61:14] so this is kind of undesirable right
[61:15] because we plugged in a string that
[61:16] could be like a somewhat reasonable name
[61:19] but basically what this is saying is
[61:20] that this model is exactly zero percent
[61:22] likely to uh to predict this
[61:25] name
[61:26] and our loss is infinity on this example
[61:29] and really what the reason for that is
[61:31] that j
[61:32] is followed by q
[61:34] uh zero times
[61:36] uh where&#39;s q jq is zero and so jq is uh
[61:40] zero percent likely
[61:42] so it&#39;s actually kind of gross and
[61:43] people don&#39;t like this too much to fix
[61:45] this there&#39;s a very simple fix that
[61:47] people like to do to sort of like smooth
[61:49] out your model a little bit and it&#39;s
[61:50] called model smoothing and roughly
[61:52] what&#39;s happening is that we will eight
[61:53] we will add some fake counts
[61:56] so
[61:57] imagine adding a count of one to
[61:59] everything
[62:00] so we add a count of one
[62:03] like this
[62:04] and then we recalculate the
[62:05] probabilities
[62:07] and that&#39;s model smoothing and you can
[62:09] add as much as you like you can add five
[62:10] and it will give you a smoother model
[62:12] and the more you add here
[62:14] the more
[62:15] uniform model you&#39;re going to have and
[62:17] the less you add
[62:19] the more peaked model you are going to
[62:21] have of course
[62:22] so one is like a pretty decent count to
[62:24] add
[62:25] and that will ensure that there will be
[62:27] no zeros in our probability matrix p
[62:30] and so this will of course change the
[62:32] generations a little bit in this case it
[62:34] didn&#39;t but in principle it could
[62:36] but what that&#39;s going to do now is that
[62:38] nothing will be infinity unlikely
[62:41] so now
[62:42] our model will predict some other
[62:43] probability and we see that jq now has a
[62:46] very small probability so the model
[62:48] still finds it very surprising that this
[62:49] was a word or a bigram but we don&#39;t get
[62:52] negative infinity so it&#39;s kind of like a
[62:54] nice fix that people like to apply
[62:55] sometimes and it&#39;s called model
[62:56] smoothing okay so we&#39;ve now trained a
[62:58] respectable bi-gram character level
[63:00] language model and we saw that we both
[63:04] sort of trained the model by looking at
[63:05] the counts of all the bigrams and
[63:08] normalizing the rows to get probability
[63:10] distributions
[63:11] we saw that we can also then use those
[63:14] parameters of this model to perform
[63:16] sampling of new words
[63:19] so we sample new names according to
[63:20] those distributions and we also saw that
[63:22] we can evaluate the quality of this
[63:24] model and the quality of this model is
[63:26] summarized in a single number which is
[63:28] the negative log likelihood and the
[63:30] lower this number is the better the
[63:32] model is
[63:33] because it is giving high probabilities
[63:35] to the actual next characters in all the
[63:37] bi-grams in our training set
[63:40] so that&#39;s all well and good but we&#39;ve
[63:42] arrived at this model explicitly by
[63:44] doing something that felt sensible we
[63:46] were just performing counts and then we
[63:48] were normalizing those counts
[63:50] now what i would like to do is i would
[63:52] like to take an alternative approach we
[63:54] will end up in a very very similar
[63:55] position but the approach will look very
[63:57] different because i would like to cast
[63:59] the problem of bi-gram character level
[64:00] language modeling into the neural
[64:02] network framework
[64:04] in the neural network framework we&#39;re
[64:05] going to approach things slightly
[64:07] differently but again end up in a very
[64:09] similar spot i&#39;ll go into that later now
[64:12] our neural network is going to be a
[64:14] still a background character level
[64:16] language model so it receives a single
[64:18] character as an input
[64:20] then there&#39;s neural network with some
[64:21] weights or some parameters w
[64:24] and it&#39;s going to output the probability
[64:26] distribution over the next character in
[64:28] a sequence it&#39;s going to make guesses as
[64:30] to what is likely to follow this
[64:32] character that was input to the model
[64:35] and then in addition to that we&#39;re going
[64:37] to be able to evaluate any setting of
[64:39] the parameters of the neural net because
[64:41] we have the loss function
[64:43] the negative log likelihood so we&#39;re
[64:45] going to take a look at its probability
[64:46] distributions and we&#39;re going to use the
[64:48] labels
[64:50] which are basically just the identity of
[64:51] the next character in that diagram the
[64:53] second character
[64:54] so knowing what second character
[64:56] actually comes next in the bigram allows
[64:58] us to then look at what how high of
[65:00] probability the model assigns to that
[65:02] character
[65:03] and then we of course want the
[65:05] probability to be very high
[65:06] and that is another way of saying that
[65:08] the loss is low
[65:10] so we&#39;re going to use gradient-based
[65:12] optimization then to tune the parameters
[65:14] of this network because we have the loss
[65:16] function and we&#39;re going to minimize it
[65:18] so we&#39;re going to tune the weights so
[65:20] that the neural net is correctly
[65:21] predicting the probabilities for the
[65:22] next character
[65:24] so let&#39;s get started the first thing i
[65:26] want to do is i want to compile the
[65:27] training set of this neural network
[65:29] right so
[65:30] create
[65:31] the training set
[65:33] of all the bigrams
[65:36] okay
[65:37] and
[65:39] here
[65:40] i&#39;m going to copy paste this code
[65:43] because this code iterates over all the
[65:45] programs
[65:47] so here we start with the words we
[65:48] iterate over all the bygrams and
[65:50] previously as you recall we did the
[65:52] counts but now we&#39;re not going to do
[65:54] counts we&#39;re just creating a training
[65:55] set
[65:56] now this training set will be made up of
[65:58] two lists
[66:02] we have the
[66:04] inputs
[66:06] and the targets
[66:07] the the labels
[66:09] and these bi-grams will denote x y those
[66:11] are the characters right
[66:13] and so we&#39;re given the first character
[66:14] of the bi-gram and then we&#39;re trying to
[66:16] predict the next one
[66:17] both of these are going to be integers
[66:19] so here we&#39;ll take x&#39;s that append is
[66:22] just
[66:23] x1 ystat append ix2
[66:27] and then here
[66:29] we actually don&#39;t want lists of integers
[66:31] we will create tensors out of these so
[66:34] axis is torch.tensor of axis and wise a
[66:38] storage.tensor of ys
[66:41] and then
[66:42] we don&#39;t actually want to take all the
[66:43] words just yet because i want everything
[66:45] to be manageable
[66:46] so let&#39;s just do the first word which is
[66:48] emma
[66:51] and then it&#39;s clear what these x&#39;s and
[66:52] y&#39;s would be
[66:55] here let me print
[66:57] character 1 character 2 just so you see
[66:59] what&#39;s going on here
[67:01] so the bigrams of these characters is
[67:04] dot e e m m m a a dot so this single
[67:09] word as i mentioned has one two three
[67:11] four five examples for our neural
[67:13] network
[67:14] there are five separate examples in emma
[67:17] and those examples are summarized here
[67:19] when the input to the neural network is
[67:21] integer 0
[67:23] the desired label is integer 5 which
[67:25] corresponds to e when the input to the
[67:28] neural network is 5 we want its weights
[67:31] to be arranged so that 13 gets a very
[67:33] high probability
[67:35] when 13 is put in we want 13 to have a
[67:37] high probability
[67:39] when 13 is put in we also want 1 to have
[67:41] a high probability
[67:43] when one is input we want zero to have a
[67:45] very high probability so there are five
[67:48] separate input examples to a neural nut
[67:51] in this data set
[67:54] i wanted to add a tangent of a node of
[67:57] caution to be careful with a lot of the
[67:58] apis of some of these frameworks
[68:01] you saw me silently use torch.tensor
[68:03] with a lowercase t
[68:05] and the output looked right
[68:07] but you should be aware that there&#39;s
[68:09] actually two ways of constructing a
[68:10] tensor there&#39;s a torch.lowercase tensor
[68:13] and there&#39;s also a torch.capital tensor
[68:16] class which you can also construct
[68:18] so you can actually call both you can
[68:20] also do torch.capital tensor
[68:22] and you get a nexus and wise as well
[68:25] so that&#39;s not confusing at all
[68:27] um
[68:28] there are threads on what is the
[68:29] difference between these two
[68:31] and um
[68:33] unfortunately the docs are just like not
[68:35] clear on the difference and when you
[68:36] look at the the docs of lower case
[68:38] tensor construct tensor with no autograd
[68:40] history by copying data
[68:43] it&#39;s just like it doesn&#39;t
[68:45] it doesn&#39;t make sense so the actual
[68:47] difference as far as i can tell is
[68:48] explained eventually in this random
[68:50] thread that you can google
[68:51] and really it comes down to
[68:53] i believe
[68:55] that um
[68:56] what is this
[68:58] torch.tensor in first d-type the data
[69:00] type automatically while torch.tensor
[69:02] just returns a float tensor
[69:04] i would recommend stick to
[69:05] torch.lowercase tensor
[69:07] so um
[69:09] indeed we see that when i
[69:11] construct this with a capital t the data
[69:13] type here of xs is float32
[69:18] but towards that lowercase tensor
[69:21] you see how it&#39;s now x dot d type is now
[69:24] integer
[69:26] so um
[69:28] it&#39;s advised that you use lowercase t
[69:30] and you can read more about it if you
[69:32] like in some of these threads but
[69:34] basically
[69:35] um
[69:36] i&#39;m pointing out some of these things
[69:38] because i want to caution you and i want
[69:39] you to re get used to reading a lot of
[69:41] documentation and reading through a lot
[69:43] of
[69:44] q and a&#39;s and threads like this
[69:46] and
[69:48] you know some of the stuff is
[69:49] unfortunately not easy and not very well
[69:50] documented and you have to be careful
[69:51] out there what we want here is integers
[69:54] because that&#39;s what makes uh sense
[69:56] um
[69:58] and so
[69:59] lowercase tensor is what we are using
[70:01] okay now we want to think through how
[70:02] we&#39;re going to feed in these examples
[70:04] into a neural network
[70:06] now it&#39;s not quite as straightforward as
[70:09] plugging it in because these examples
[70:10] right now are integers so there&#39;s like a
[70:12] 0 5 or 13 it gives us the index of the
[70:15] character and you can&#39;t just plug an
[70:17] integer index into a neural net
[70:19] these neural nets right are sort of made
[70:22] up of these neurons
[70:24] and
[70:25] these neurons have weights and as you
[70:27] saw in micrograd these weights act
[70:29] multiplicatively on the inputs w x plus
[70:32] b there&#39;s 10 h&#39;s and so on and so it
[70:34] doesn&#39;t really make sense to make an
[70:35] input neuron take on integer values that
[70:37] you feed in and then multiply on with
[70:40] weights
[70:41] so instead
[70:42] a common way of encoding integers is
[70:44] what&#39;s called one hot encoding
[70:46] in one hot encoding
[70:48] we take an integer like 13 and we create
[70:51] a vector that is all zeros except for
[70:54] the 13th dimension which we turn to a
[70:56] one and then that vector can feed into a
[70:59] neural net
[71:01] now conveniently
[71:03] uh pi torch actually has something
[71:04] called the one hot
[71:07] function inside torching and functional
[71:10] it takes a tensor made up of integers
[71:13] um
[71:14] long is a is a as an integer
[71:18] um
[71:19] and it also takes a number of classes um
[71:22] which is how large you want your uh
[71:24] tensor uh your vector to be
[71:27] so here let&#39;s import
[71:30] torch.n.functional sf this is a common
[71:32] way of importing it
[71:34] and then let&#39;s do f.1 hot
[71:36] and we feed in the integers that we want
[71:38] to encode so we can actually feed in the
[71:41] entire array of x&#39;s
[71:44] and we can tell it that num classes is
[71:46] 27.
[71:47] so it doesn&#39;t have to try to guess it it
[71:49] may have guessed that it&#39;s only 13 and
[71:51] would give us an incorrect result
[71:54] so this is the one hot let&#39;s call this x
[71:57] inc for x encoded
[72:02] and then we see that x encoded that
[72:03] shape is 5 by 27
[72:07] and uh we can also visualize it plt.i am
[72:10] show of x inc
[72:12] to make it a little bit more clear
[72:13] because this is a little messy
[72:15] so we see that we&#39;ve encoded all the
[72:17] five examples uh into vectors we have
[72:20] five examples so we have five rows and
[72:22] each row here is now an example into a
[72:24] neural nut
[72:26] and we see that the appropriate bit is
[72:28] turned on as a one and everything else
[72:30] is zero
[72:31] so um
[72:33] here for example the zeroth bit is
[72:35] turned on the fifth bit is turned on
[72:38] 13th bits are turned on for both of
[72:40] these examples and then the first bit
[72:42] here is turned on
[72:44] so that&#39;s how we can encode
[72:47] integers into vectors and then these
[72:49] vectors can feed in to neural nets one
[72:52] more issue to be careful with here by
[72:53] the way is
[72:55] let&#39;s look at the data type of encoding
[72:56] we always want to be careful with data
[72:58] types
[72:59] what would you expect x encoding&#39;s data
[73:01] type to be
[73:02] when we&#39;re plugging numbers into neural
[73:04] nuts we don&#39;t want them to be integers
[73:06] we want them to be floating point
[73:07] numbers that can take on various values
[73:10] but the d type here is actually 64-bit
[73:13] integer
[73:14] and the reason for that i suspect is
[73:15] that one hot received a 64-bit integer
[73:18] here and it returned the same data type
[73:21] and when you look at the signature of
[73:23] one hot it doesn&#39;t even take a d type a
[73:25] desired data type of the output tensor
[73:28] and so we can&#39;t in a lot of functions in
[73:30] torch we&#39;d be able to do something like
[73:32] d type equal storage.float32
[73:34] which is what we want but one heart does
[73:36] not support that
[73:37] so instead we&#39;re going to want to cast
[73:39] this to float like this
[73:43] so that these
[73:44] everything is the same
[73:46] everything looks the same but the d-type
[73:48] is float32 and floats can feed into
[73:52] neural nets so now let&#39;s construct our
[73:54] first neuron
[73:56] this neuron will look at these input
[73:58] vectors
[74:00] and as you remember from micrograd these
[74:02] neurons basically perform a very simple
[74:03] function w x plus b where w x is a dot
[74:07] product
[74:08] right
[74:09] so we can achieve the same thing here
[74:12] let&#39;s first define the weights of this
[74:14] neuron basically what are the initial
[74:15] weights at initialization for this
[74:17] neuron
[74:18] let&#39;s initialize them with torch.rendin
[74:21] torch.rendin
[74:23] is um
[74:24] fills a tensor with random numbers
[74:27] drawn from a normal distribution
[74:29] and a normal distribution
[74:31] has
[74:31] a probability density function like this
[74:34] and so most of the numbers drawn from
[74:35] this distribution will be around 0
[74:39] but some of them will be as high as
[74:40] almost three and so on and very few
[74:42] numbers will be above three in magnitude
[74:46] so we need to take a size as an input
[74:49] here
[74:50] and i&#39;m going to use size as to be 27 by
[74:52] one
[74:54] so
[74:55] 27 by one and then let&#39;s visualize w so
[74:58] w is a column vector of 27 numbers
[75:03] and
[75:03] these weights are then multiplied by the
[75:06] inputs
[75:08] so now to perform this multiplication we
[75:10] can take x encoding and we can multiply
[75:13] it with w
[75:14] this is a matrix multiplication operator
[75:17] in pi torch
[75:19] and the output of this operation is five
[75:22] by one
[75:23] the reason is five by five is the
[75:24] following
[75:25] we took x encoding which is five by
[75:28] twenty seven and we multiplied it by
[75:30] twenty seven by one
[75:33] and
[75:34] in matrix multiplication
[75:36] you see that the output will become five
[75:38] by one because these 27
[75:41] will multiply and add
[75:44] so basically what we&#39;re seeing here outs
[75:46] out of this operation
[75:48] is we are seeing the five
[75:51] activations
[75:53] of this neuron
[75:56] on these five inputs
[75:58] and we&#39;ve evaluated all of them in
[75:59] parallel we didn&#39;t feed in just a single
[76:01] input to the single neuron we fed in
[76:03] simultaneously all the five inputs into
[76:06] the same neuron
[76:08] and in parallel patrol has evaluated
[76:11] the wx plus b but here is just the wx
[76:14] there&#39;s no bias
[76:15] it has value w times x for all of them
[76:19] independently now instead of a single
[76:21] neuron though i would like to have 27
[76:23] neurons and i&#39;ll show you in a second
[76:25] why i want 27 neurons
[76:27] so instead of having just a 1 here which
[76:29] is indicating this presence of one
[76:31] single neuron
[76:32] we can use 27
[76:34] and then when w is 27 by 27
[76:38] this will in parallel evaluate all the
[76:41] 27 neurons on all the 5 inputs
[76:46] giving us a much better much much bigger
[76:48] result so now what we&#39;ve done is 5 by 27
[76:51] multiplied 27 by 27
[76:54] and the output of this is now 5 by 27
[76:57] so we can see that the shape of this
[77:01] is 5 by 27.
[77:03] so what is every element here telling us
[77:06] right
[77:07] it&#39;s telling us for every one of 27
[77:09] neurons that we created
[77:13] what is the firing rate of those neurons
[77:16] on every one of those five examples
[77:19] so
[77:20] the element for example 3 comma 13
[77:25] is giving us the firing rate of the 13th
[77:28] neuron
[77:29] looking at the third input
[77:31] and the way this was achieved is by a
[77:34] dot product
[77:36] between the third
[77:37] input
[77:38] and the 13th column
[77:41] of this w matrix here
[77:44] okay
[77:45] so
[77:46] using matrix multiplication we can very
[77:48] efficiently evaluate
[77:50] the dot product between lots of input
[77:52] examples in a batch
[77:54] and lots of neurons where all those
[77:57] neurons have weights in the columns of
[77:59] those w&#39;s
[78:01] and in matrix multiplication we&#39;re just
[78:02] doing those dot products and
[78:04] in parallel just to show you that this
[78:06] is the case we can take x and we can
[78:08] take the third
[78:10] row
[78:12] and we can take the w and take its 13th
[78:14] column
[78:17] and then we can do
[78:18] x and get three
[78:21] elementwise multiply with w at 13.
[78:26] and sum that up that&#39;s wx plus b
[78:29] well there&#39;s no plus b it&#39;s just wx dot
[78:31] product
[78:32] and that&#39;s
[78:34] this number
[78:35] so you see that this is just being done
[78:36] efficiently by the matrix multiplication
[78:39] operation
[78:40] for all the input examples and for all
[78:42] the output neurons of this first layer
[78:46] okay so we fed our 27-dimensional inputs
[78:49] into a first layer of a neural net that
[78:51] has 27 neurons right so we have 27
[78:54] inputs and now we have 27 neurons these
[78:57] neurons perform w times x they don&#39;t
[79:00] have a bias and they don&#39;t have a
[79:01] non-linearity like 10 h we&#39;re going to
[79:03] leave them to be a linear layer
[79:06] in addition to that we&#39;re not going to
[79:07] have any other layers this is going to
[79:09] be it it&#39;s just going to be
[79:11] the dumbest smallest simplest neural net
[79:13] which is just a single linear layer
[79:16] and now i&#39;d like to explain what i want
[79:18] those 27 outputs to be
[79:21] intuitively what we&#39;re trying to produce
[79:22] here for every single input example is
[79:24] we&#39;re trying to produce some kind of a
[79:26] probability distribution for the next
[79:27] character in a sequence
[79:29] and there&#39;s 27 of them
[79:31] but we have to come up with like precise
[79:33] semantics for exactly how we&#39;re going to
[79:34] interpret these 27 numbers that these
[79:37] neurons take on
[79:39] now intuitively
[79:41] you see here that these numbers are
[79:42] negative and some of them are positive
[79:44] etc
[79:45] and that&#39;s because these are coming out
[79:46] of a neural net layer initialized with
[79:48] these
[79:51] normal distribution
[79:52] parameters
[79:54] but what we want is we want something
[79:55] like we had here
[79:57] like each row here
[79:58] told us the counts and then we
[80:01] normalized the counts to get
[80:02] probabilities and we want something
[80:04] similar to come out of the neural net
[80:06] but what we just have right now is just
[80:07] some negative and positive numbers
[80:10] now we want those numbers to somehow
[80:12] represent the probabilities for the next
[80:14] character
[80:15] but you see that probabilities they they
[80:17] have a special structure they um
[80:19] they&#39;re positive numbers and they sum to
[80:21] one
[80:22] and so that doesn&#39;t just come out of a
[80:24] neural net
[80:25] and then they can&#39;t be counts
[80:27] because these counts are positive and
[80:31] counts are integers
[80:32] so counts are also not really a good
[80:34] thing to output from a neural net
[80:36] so instead what the neural net is going
[80:38] to output and how we are going to
[80:39] interpret the um
[80:42] the 27 numbers is that these 27 numbers
[80:45] are giving us log counts
[80:48] basically
[80:49] um
[80:50] so instead of giving us counts directly
[80:52] like in this table they&#39;re giving us log
[80:54] counts
[80:56] and to get the counts we&#39;re going to
[80:57] take the log counts and we&#39;re going to
[80:59] exponentiate them
[81:01] now
[81:02] exponentiation
[81:04] takes the following form
[81:07] it takes numbers
[81:08] that are negative or they are positive
[81:10] it takes the entire real line
[81:12] and then if you plug in negative numbers
[81:14] you&#39;re going to get e to the x
[81:17] which is uh always below one
[81:20] so you&#39;re getting numbers lower than one
[81:23] and if you plug in numbers greater than
[81:25] zero you&#39;re getting numbers greater than
[81:27] one all the way growing to the infinity
[81:30] and this here grows to zero
[81:33] so basically we&#39;re going to
[81:35] take these numbers
[81:37] here
[81:40] and
[81:43] instead of them being positive and
[81:44] negative and all over the place we&#39;re
[81:46] going to interpret them as log counts
[81:48] and then we&#39;re going to element wise
[81:50] exponentiate these numbers
[81:52] exponentiating them now gives us
[81:54] something like this
[81:56] and you see that these numbers now
[81:57] because they went through an exponent
[81:59] all the negative numbers turned into
[82:00] numbers below 1 like 0.338 and all the
[82:04] positive numbers originally turned into
[82:07] even more positive numbers sort of
[82:08] greater than one
[82:10] so like for example
[82:12] seven
[82:14] is some positive number over here
[82:18] that is greater than zero
[82:21] but exponentiated outputs here
[82:24] basically give us something that we can
[82:26] use and interpret as the equivalent of
[82:29] counts originally so you see these
[82:31] counts here 112 7 51 1 etc
[82:36] the neural net is kind of now predicting
[82:38] uh
[82:40] counts
[82:41] and these counts are positive numbers
[82:43] they can never be below zero so that
[82:45] makes sense
[82:46] and uh they can now take on various
[82:48] values
[82:49] depending on the settings of w
[82:54] so let me break this down
[82:56] we&#39;re going to interpret these to be the
[82:58] log counts
[83:01] in other words for this that is often
[83:02] used is so-called logits
[83:05] these are logits log counts
[83:08] then these will be sort of the counts
[83:11] largest exponentiated
[83:13] and this is equivalent to the n matrix
[83:16] sort of the n
[83:18] array that we used previously remember
[83:20] this was the n
[83:21] this is the the array of counts
[83:24] and each row here are the counts for the
[83:27] for the um
[83:28] next character sort of
[83:32] so those are the counts and now the
[83:34] probabilities are just the counts um
[83:37] normalized
[83:39] and so um
[83:41] i&#39;m not going to find the same but
[83:43] basically i&#39;m not going to scroll all
[83:44] over the place
[83:46] we&#39;ve already done this we want to
[83:48] counts that sum
[83:50] along the first dimension and we want to
[83:52] keep them as true
[83:54] we&#39;ve went over this and this is how we
[83:56] normalize the rows of our counts matrix
[83:59] to get our probabilities
[84:03] props
[84:04] so now these are the probabilities
[84:07] and
[84:08] these are the counts that we ask
[84:10] currently and now when i show the
[84:11] probabilities
[84:13] you see that um
[84:15] every row here
[84:17] of course
[84:19] will sum to 1
[84:21] because they&#39;re normalized
[84:23] and the shape of this
[84:25] is 5 by 27
[84:27] and so really what we&#39;ve achieved is for
[84:29] every one of our five examples
[84:31] we now have a row that came out of a
[84:33] neural net
[84:35] and because of the transformations here
[84:37] we made sure that this output of this
[84:39] neural net now are probabilities or we
[84:41] can interpret to be probabilities
[84:44] so
[84:45] our wx here gave us logits
[84:48] and then we interpret those to be log
[84:49] counts
[84:50] we exponentiate to get something that
[84:52] looks like counts
[84:53] and then we normalize those counts to
[84:55] get a probability distribution
[84:57] and all of these are differentiable
[84:59] operations
[85:00] so what we&#39;ve done now is we&#39;re taking
[85:02] inputs we have differentiable operations
[85:04] that we can back propagate through
[85:06] and we&#39;re getting out probability
[85:08] distributions
[85:09] so
[85:11] for example for the zeroth example that
[85:13] fed in
[85:15] right which was um
[85:17] the zeroth example here was a one-half
[85:18] vector of zero
[85:20] and um
[85:22] it basically corresponded to feeding in
[85:26] this example here so we&#39;re feeding in a
[85:28] dot into a neural net and the way we fed
[85:31] the dot into a neural net is that we
[85:32] first got its index
[85:34] then we one hot encoded it
[85:36] then it went into the neural net and out
[85:39] came
[85:40] this distribution of probabilities
[85:43] and its shape
[85:46] is 27 there&#39;s 27 numbers and we&#39;re going
[85:49] to interpret this as the neural nets
[85:51] assignment for how likely every one of
[85:54] these characters um
[85:56] the 27 characters are to come next
[85:59] and as we tune the weights w
[86:02] we&#39;re going to be of course getting
[86:03] different probabilities out for any
[86:05] character that you input
[86:07] and so now the question is just can we
[86:08] optimize and find a good w
[86:10] such that the probabilities coming out
[86:12] are pretty good and the way we measure
[86:15] pretty good is by the loss function okay
[86:17] so i organized everything into a single
[86:18] summary so that hopefully it&#39;s a bit
[86:20] more clear so it starts here
[86:22] with an input data set
[86:24] we have some inputs to the neural net
[86:26] and we have some labels for the correct
[86:28] next character in a sequence these are
[86:30] integers
[86:32] here i&#39;m using uh torch generators now
[86:35] so that you see the same numbers that i
[86:37] see
[86:38] and i&#39;m generating um
[86:40] 27 neurons weights
[86:42] and each neuron here receives 27 inputs
[86:48] then here we&#39;re going to plug in all the
[86:50] input examples x&#39;s into a neural net so
[86:52] here this is a forward pass
[86:55] first we have to encode all of the
[86:57] inputs into one hot representations
[87:00] so we have 27 classes we pass in these
[87:02] integers and
[87:04] x inc becomes a array that is 5 by 27
[87:09] zeros except for a few ones
[87:12] we then multiply this in the first layer
[87:14] of a neural net to get logits
[87:16] exponentiate the logits to get fake
[87:18] counts sort of
[87:20] and normalize these counts to get
[87:22] probabilities
[87:24] so we lock these last two lines by the
[87:26] way here are called the softmax
[87:30] which i pulled up here soft max is a
[87:33] very often used layer in a neural net
[87:35] that takes these z&#39;s which are logics
[87:38] exponentiates them
[87:40] and divides and normalizes it&#39;s a way of
[87:43] taking
[87:44] outputs of a neural net layer and these
[87:47] these outputs can be positive or
[87:48] negative
[87:49] and it outputs probability distributions
[87:52] it outputs something that is always
[87:55] sums to one and are positive numbers
[87:56] just like probabilities
[87:58] um so it&#39;s kind of like a normalization
[88:00] function if you want to think of it that
[88:01] way and you can put it on top of any
[88:03] other linear layer inside a neural net
[88:05] and it basically makes a neural net
[88:07] output probabilities that&#39;s very often
[88:09] used and we used it as well here
[88:13] so this is the forward pass and that&#39;s
[88:14] how we made a neural net output
[88:16] probability
[88:17] now
[88:19] you&#39;ll notice that
[88:20] um
[88:22] all of these
[88:24] this entire forward pass is made up of
[88:25] differentiable
[88:27] layers everything here we can back
[88:29] propagate through and we saw some of the
[88:30] back propagation in micrograd
[88:33] this is just
[88:34] multiplication and addition all that&#39;s
[88:36] happening here is just multiply and then
[88:38] add and we know how to backpropagate
[88:39] through them
[88:40] exponentiation we know how to
[88:42] backpropagate through
[88:43] and then here we are summing
[88:46] and sum is is easily backpropagable as
[88:49] well
[88:50] and division as well so everything here
[88:52] is differentiable operation
[88:54] and we can back propagate through
[88:57] now we achieve these probabilities which
[88:59] are 5 by 27
[89:01] for every single example we have a
[89:03] vector of probabilities that&#39;s into one
[89:06] and then here i wrote a bunch of stuff
[89:08] to sort of like break down uh the
[89:10] examples
[89:11] so we have five examples making up emma
[89:14] right
[89:16] and there are five bigrams inside emma
[89:20] so bigram example a bigram example1 is
[89:23] that e is the beginning character right
[89:26] after dot
[89:28] and the indexes for these are zero and
[89:30] five
[89:31] so then we feed in a zero
[89:34] that&#39;s the input of the neural net
[89:35] we get probabilities from the neural net
[89:38] that are 27 numbers
[89:41] and then the label is 5 because e
[89:44] actually comes after dot
[89:45] so that&#39;s the label
[89:47] and then
[89:49] we use this label 5 to index into the
[89:52] probability distribution here
[89:54] so
[89:55] this
[89:56] index 5 here is 0 1 2 3 4 5. it&#39;s this
[90:00] number here
[90:01] which is here
[90:04] so that&#39;s basically the probability
[90:05] assigned by the neural net to the actual
[90:07] correct character
[90:08] you see that the network currently
[90:10] thinks that this next character that e
[90:12] following dot is only one percent likely
[90:15] which is of course not very good right
[90:16] because this actually is a training
[90:18] example and the network thinks this is
[90:20] currently very very unlikely but that&#39;s
[90:22] just because we didn&#39;t get very lucky in
[90:24] generating a good setting of w so right
[90:27] now this network things it says unlikely
[90:29] and 0.01 is not a good outcome
[90:31] so the log likelihood then is very
[90:34] negative
[90:35] and the negative log likelihood is very
[90:38] positive
[90:39] and so four is a very high negative log
[90:42] likelihood and that means we&#39;re going to
[90:44] have a high loss
[90:45] because what is the loss the loss is
[90:47] just the average negative log likelihood
[90:51] so the second character is em
[90:53] and you see here that also the network
[90:55] thought that m following e is very
[90:57] unlikely one percent
[91:00] the for m following m i thought it was
[91:03] two percent
[91:04] and for a following m it actually
[91:06] thought it was seven percent likely so
[91:08] just by chance this one actually has a
[91:10] pretty good probability and therefore
[91:12] pretty low negative log likelihood
[91:15] and finally here it thought this was one
[91:17] percent likely
[91:18] so overall our average negative log
[91:20] likelihood which is the loss the total
[91:22] loss that summarizes
[91:24] basically the how well this network
[91:26] currently works at least on this one
[91:28] word not on the full data suggested one
[91:30] word is 3.76 which is actually very
[91:33] fairly high loss this is not a very good
[91:35] setting of w&#39;s
[91:36] now here&#39;s what we can do
[91:38] we&#39;re currently getting 3.76
[91:41] we can actually come here and we can
[91:42] change our w we can resample it so let
[91:45] me just add one to have a different seed
[91:48] and then we get a different w
[91:50] and then we can rerun this
[91:52] and with this different c with this
[91:54] different setting of w&#39;s we now get 3.37
[91:58] so this is a much better w right and
[92:00] that and it&#39;s better because the
[92:02] probabilities just happen to come out
[92:04] higher for the for the characters that
[92:07] actually are next
[92:08] and so you can imagine actually just
[92:10] resampling this you know we can try two
[92:14] so
[92:15] okay this was not very good
[92:17] let&#39;s try one more
[92:18] we can try three
[92:20] okay this was terrible setting because
[92:22] we have a very high loss
[92:24] so anyway i&#39;m going to erase this
[92:29] what i&#39;m doing here which is just guess
[92:31] and check of randomly assigning
[92:32] parameters and seeing if the network is
[92:34] good that is uh amateur hour that&#39;s not
[92:37] how you optimize a neural net the way
[92:39] you optimize your neural net is you
[92:40] start with some random guess and we&#39;re
[92:42] going to commit to this one even though
[92:43] it&#39;s not very good
[92:45] but now the big deal is we have a loss
[92:46] function
[92:48] so this loss
[92:49] is made up only of differentiable
[92:52] operations and we can minimize the loss
[92:56] by tuning
[92:57] ws
[92:58] by computing the gradients of the loss
[93:01] with respect to
[93:02] these w matrices
[93:04] and so then we can tune w to minimize
[93:07] the loss and find a good setting of w
[93:09] using gradient based optimization so
[93:11] let&#39;s see how that will work now things
[93:13] are actually going to look almost
[93:14] identical to what we had with micrograd
[93:17] so here
[93:18] i pulled up the lecture from micrograd
[93:20] the notebook it&#39;s from this repository
[93:23] and when i scroll all the way to the end
[93:24] where we left off with micrograd we had
[93:26] something very very similar
[93:28] we had
[93:29] a number of input examples in this case
[93:31] we had four input examples inside axis
[93:34] and we had their targets these are
[93:36] targets
[93:37] just like here we have our axes now but
[93:39] we have five of them and they&#39;re now
[93:41] integers instead of vectors
[93:44] but we&#39;re going to convert our integers
[93:45] to vectors except our vectors will be 27
[93:48] large instead of three large
[93:51] and then here what we did is first we
[93:53] did a forward pass where we ran a neural
[93:55] net on all of the inputs
[93:58] to get predictions
[94:00] our neural net at the time this nfx was
[94:02] a multi-layer perceptron
[94:05] our neural net is going to look
[94:06] different because our neural net is just
[94:08] a single layer
[94:10] single linear layer followed by a soft
[94:12] max
[94:13] so that&#39;s our neural net
[94:15] and the loss here was the mean squared
[94:17] error so we simply subtracted the
[94:19] prediction from the ground truth and
[94:21] squared it and summed it all up and that
[94:23] was the loss and loss was the single
[94:25] number that summarized the quality of
[94:27] the neural net and when loss is low like
[94:30] almost zero that means the neural net is
[94:33] predicting correctly
[94:36] so we had a single number that uh that
[94:38] summarized the uh the performance of the
[94:40] neural net and everything here was
[94:42] differentiable and was stored in massive
[94:44] compute graph
[94:46] and then we iterated over all the
[94:48] parameters we made sure that the
[94:50] gradients are set to zero and we called
[94:52] lost up backward
[94:54] and lasted backward initiated back
[94:56] propagation at the final output node of
[94:58] loss
[94:59] right so
[95:00] yeah remember these expressions we had
[95:02] loss all the way at the end we start
[95:03] back propagation and we went all the way
[95:05] back
[95:06] and we made sure that we populated all
[95:08] the parameters dot grad
[95:10] so that graph started at zero but back
[95:12] propagation filled it in
[95:14] and then in the update we iterated over
[95:16] all the parameters and we simply did a
[95:18] parameter update where every single
[95:21] element of our parameters was nudged in
[95:24] the opposite direction of the gradient
[95:27] and so we&#39;re going to do the exact same
[95:30] thing here
[95:31] so i&#39;m going to pull this up
[95:34] on the side here
[95:38] so that we have it available and we&#39;re
[95:40] actually going to do the exact same
[95:41] thing so this was the forward pass so
[95:44] where we did this
[95:46] and probs is our wipe red so now we have
[95:49] to evaluate the loss but we&#39;re not using
[95:51] the mean squared error we&#39;re using the
[95:52] negative log likelihood because we are
[95:54] doing classification we&#39;re not doing
[95:56] regression as it&#39;s called
[95:58] so here we want to calculate loss
[96:02] now the way we calculate it is it&#39;s just
[96:04] this average negative log likelihood
[96:07] now this probs here
[96:10] has a shape of 5 by 27
[96:13] and so to get all the we basically want
[96:15] to pluck out the probabilities at the
[96:18] correct indices here
[96:20] so in particular because the labels are
[96:22] stored here in array wise
[96:24] basically what we&#39;re after is for the
[96:26] first example we&#39;re looking at
[96:27] probability of five right at index five
[96:30] for the second example
[96:32] at the the second row or row index one
[96:36] we are interested in the probability
[96:37] assigned to index 13.
[96:40] at the second example we also have 13.
[96:43] at the third row we want one
[96:47] and then the last row which is four we
[96:49] want zero so these are the probabilities
[96:52] we&#39;re interested in right
[96:54] and you can see that they&#39;re not amazing
[96:55] as we saw above
[96:58] so these are the probabilities we want
[97:00] but we want like a more efficient way to
[97:02] access these probabilities
[97:04] not just listing them out in a tuple
[97:06] like this so it turns out that the way
[97:07] to do this in pytorch uh one of the ways
[97:09] at least is we can basically pass in
[97:12] all of these
[97:16] sorry about that all of these um
[97:19] integers in the vectors
[97:22] so
[97:22] the
[97:23] these ones you see how they&#39;re just 0 1
[97:25] 2 3 4
[97:27] we can actually create that using mp
[97:29] not mp sorry torch dot range of 5
[97:32] 0 1 2 3 4.
[97:34] so we can index here with torch.range of
[97:37] 5
[97:38] and here we index with ys
[97:41] and you see that that gives us
[97:43] exactly these numbers
[97:48] so that plucks out the probabilities of
[97:51] that the neural network assigns to the
[97:53] correct next character
[97:56] now we take those probabilities and we
[97:58] don&#39;t we actually look at the log
[97:59] probability so we want to dot log
[98:03] and then we want to just
[98:05] average that up so take the mean of all
[98:07] of that
[98:08] and then it&#39;s the negative
[98:10] average log likelihood that is the loss
[98:14] so the loss here is 3.7 something and
[98:18] you see that this loss 3.76 3.76 is
[98:21] exactly as we&#39;ve obtained before but
[98:23] this is a vectorized form of that
[98:25] expression
[98:26] so
[98:27] we get the same loss
[98:29] and the same loss we can consider
[98:31] service part of this forward pass
[98:34] and we&#39;ve achieved here now loss
[98:36] okay so we made our way all the way to
[98:37] loss we&#39;ve defined the forward pass
[98:40] we forwarded the network and the loss
[98:42] now we&#39;re ready to do the backward pass
[98:44] so backward pass
[98:48] we want to first make sure that all the
[98:49] gradients are reset so they&#39;re at zero
[98:52] now in pytorch you can set the gradients
[98:55] to be zero but you can also just set it
[98:57] to none and setting it to none is more
[98:59] efficient and pi torch will interpret
[99:01] none as like a lack of a gradient and is
[99:04] the same as zeros
[99:05] so this is a way to set to zero the
[99:07] gradient
[99:10] and now we do lost it backward
[99:14] before we do lost that backward we need
[99:16] one more thing if you remember from
[99:17] micrograd
[99:18] pytorch actually requires
[99:21] that we pass in requires grad is true
[99:25] so that when we tell
[99:26] pythorge that we are interested in
[99:28] calculating gradients for this leaf
[99:30] tensor by default this is false
[99:33] so let me recalculate with that
[99:35] and then set to none and lost that
[99:37] backward
[99:40] now something magical happened when
[99:42] lasted backward was run
[99:44] because pytorch just like micrograd when
[99:47] we did the forward pass here
[99:49] it keeps track of all the operations
[99:51] under the hood it builds a full
[99:53] computational graph just like the graphs
[99:55] we&#39;ve
[99:56] produced in micrograd those graphs exist
[99:58] inside pi torch
[100:00] and so it knows all the dependencies and
[100:02] all the mathematical operations of
[100:04] everything
[100:04] and when you then calculate the loss
[100:07] we can call a dot backward on it
[100:09] and that backward then fills in the
[100:11] gradients of
[100:13] all the intermediates
[100:15] all the way back to w&#39;s which are the
[100:18] parameters of our neural net so now we
[100:20] can do w grad and we see that it has
[100:23] structure there&#39;s stuff inside it
[100:29] and these gradients
[100:30] every single element here
[100:33] so w dot shape is 27 by 27
[100:36] w grad shape is the same 27 by 27
[100:40] and every element of w that grad
[100:43] is telling us
[100:44] the influence of that weight on the loss
[100:47] function
[100:48] so for example this number all the way
[100:50] here
[100:51] if this element the zero zero element of
[100:54] w
[100:55] because the gradient is positive is
[100:57] telling us that this has a positive
[101:00] influence in the loss slightly nudging
[101:03] w
[101:04] slightly taking w 0 0
[101:06] and
[101:07] adding a small h to it
[101:10] would increase the loss
[101:12] mildly because this gradient is positive
[101:15] some of these gradients are also
[101:16] negative
[101:18] so that&#39;s telling us about the gradient
[101:20] information and we can use this gradient
[101:22] information to update the weights of
[101:25] this neural network so let&#39;s now do the
[101:27] update it&#39;s going to be very similar to
[101:29] what we had in micrograd we need no loop
[101:32] over all the parameters because we only
[101:33] have one parameter uh tensor and that is
[101:36] w
[101:37] so we simply do w dot data plus equals
[101:40] uh the
[101:42] we can actually copy this almost exactly
[101:43] negative 0.1 times w dot grad
[101:49] and that would be the update to the
[101:52] tensor
[101:54] so that updates
[101:55] the tensor
[101:58] and
[101:59] because the tensor is updated we would
[102:01] expect that now the loss should decrease
[102:04] so
[102:05] here if i print loss
[102:09] that item
[102:11] it was 3.76 right
[102:13] so we&#39;ve updated the w here so if i
[102:16] recalculate forward pass
[102:18] loss now should be slightly lower so
[102:21] 3.76 goes to
[102:23] 3.74
[102:25] and then
[102:26] we can again set to set grad to none and
[102:29] backward
[102:30] update
[102:32] and now the parameters changed again
[102:34] so if we recalculate the forward pass we
[102:37] expect a lower loss again 3.72
[102:42] okay and this is again doing the we&#39;re
[102:44] now doing gradient descent
[102:48] and when we achieve a low loss that will
[102:50] mean that the network is assigning high
[102:52] probabilities to the correctness
[102:54] characters okay so i rearranged
[102:56] everything and i put it all together
[102:57] from scratch
[102:59] so here is where we construct our data
[103:01] set of bigrams
[103:03] you see that we are still iterating only
[103:04] on the first word emma
[103:06] i&#39;m going to change that in a second i
[103:09] added a number that counts the number of
[103:11] elements in x&#39;s so that we explicitly
[103:14] see that number of examples is five
[103:16] because currently we&#39;re just working
[103:18] with emma and there&#39;s five backgrounds
[103:19] there
[103:20] and here i added a loop of exactly what
[103:22] we had before so we had 10 iterations of
[103:25] grainy descent of forward pass backward
[103:27] pass and an update
[103:28] and so running these two cells
[103:30] initialization and gradient descent
[103:32] gives us some improvement
[103:35] on
[103:36] the loss function
[103:38] but now i want to use all the words
[103:41] and there&#39;s not 5 but 228 000 bigrams
[103:45] now
[103:46] however this should require no
[103:48] modification whatsoever everything
[103:49] should just run because all the code we
[103:51] wrote doesn&#39;t care if there&#39;s five
[103:53] migrants or 228 000 bigrams and with
[103:56] everything we should just work so
[103:58] you see that this will just run
[104:00] but now we are optimizing over the
[104:01] entire training set of all the bigrams
[104:04] and you see now that we are decreasing
[104:06] very slightly so actually we can
[104:08] probably afford a larger learning rate
[104:12] and probably for even larger learning
[104:14] rate
[104:20] even 50 seems to work on this very very
[104:22] simple example right so let me
[104:24] re-initialize and let&#39;s run 100
[104:26] iterations
[104:29] see what happens
[104:32] okay
[104:36] we seem to be
[104:39] coming up to some pretty good losses
[104:40] here 2.47
[104:42] let me run 100 more
[104:44] what is the number that we expect by the
[104:46] way in the loss we expect to get
[104:48] something around what we had originally
[104:50] actually
[104:52] so all the way back if you remember in
[104:53] the beginning of this video when we
[104:55] optimized uh just by counting
[104:58] our loss was roughly 2.47
[105:01] after we had it smoothing
[105:03] but before smoothing we had roughly 2.45
[105:06] likelihood
[105:08] sorry loss
[105:09] and so that&#39;s actually roughly the
[105:10] vicinity of what we expect to achieve
[105:13] but before we achieved it by counting
[105:15] and here we are achieving the roughly
[105:17] the same result but with gradient based
[105:19] optimization
[105:20] so we come to about 2.4
[105:23] 6 2.45 etc
[105:26] and that makes sense because
[105:27] fundamentally we&#39;re not taking any
[105:28] additional information we&#39;re still just
[105:30] taking in the previous character and
[105:31] trying to predict the next one but
[105:33] instead of doing it explicitly by
[105:35] counting and normalizing
[105:38] we are doing it with gradient-based
[105:39] learning and it just so happens that the
[105:41] explicit approach happens to very well
[105:44] optimize the loss function without any
[105:46] need for a gradient based optimization
[105:48] because the setup for bigram language
[105:50] models are is so straightforward that&#39;s
[105:52] so simple we can just afford to estimate
[105:54] those probabilities directly and
[105:56] maintain them
[105:57] in a table
[105:58] but the gradient-based approach is
[106:00] significantly more flexible
[106:02] so we&#39;ve actually gained a lot
[106:04] because
[106:06] what we can do now is
[106:09] we can expand this approach and
[106:11] complexify the neural net so currently
[106:13] we&#39;re just taking a single character and
[106:14] feeding into a neural net and the neural
[106:16] that&#39;s extremely simple but we&#39;re about
[106:18] to iterate on this substantially we&#39;re
[106:20] going to be taking multiple previous
[106:22] characters and we&#39;re going to be feeding
[106:24] feeding them into increasingly more
[106:26] complex neural nets but fundamentally
[106:28] out the output of the neural net will
[106:30] always just be logics
[106:32] and those logits will go through the
[106:34] exact same transformation we are going
[106:36] to take them through a soft max
[106:37] calculate the loss function and the
[106:39] negative log likelihood and do gradient
[106:42] based optimization and so actually
[106:44] as we complexify the neural nets and
[106:47] work all the way up to transformers
[106:49] none of this will really fundamentally
[106:51] change none of this will fundamentally
[106:52] change the only thing that will change
[106:54] is
[106:55] the way we do the forward pass where we
[106:57] take in some previous characters and
[106:59] calculate logits for the next character
[107:01] in the sequence that will become more
[107:03] complex
[107:05] and uh but we&#39;ll use the same machinery
[107:07] to optimize it
[107:08] and um
[107:10] it&#39;s not obvious how we would have
[107:12] extended
[107:13] this bigram approach
[107:14] into the case where there are many more
[107:17] characters at the input because
[107:19] eventually these tables would get way
[107:21] too large because there&#39;s way too many
[107:23] combinations of what previous characters
[107:26] could be
[107:27] if you only have one previous character
[107:29] we can just keep everything in a table
[107:31] that counts but if you have the last 10
[107:33] characters that are input we can&#39;t
[107:35] actually keep everything in the table
[107:36] anymore so this is fundamentally an
[107:38] unscalable approach and the neural
[107:40] network approach is significantly more
[107:42] scalable and it&#39;s something that
[107:44] actually we can improve on over time so
[107:46] that&#39;s where we will be digging next i
[107:48] wanted to point out two more things
[107:51] number one
[107:52] i want you to notice that
[107:54] this
[107:55] x ink here
[107:56] this is made up of one hot vectors and
[107:59] then those one hot vectors are
[108:00] multiplied by this w matrix
[108:03] and we think of this as multiple neurons
[108:05] being forwarded in a fully connected
[108:07] manner
[108:08] but actually what&#39;s happening here is
[108:10] that for example
[108:11] if you have a one hot vector here that
[108:14] has a one at say the fifth dimension
[108:17] then because of the way the matrix
[108:19] multiplication works
[108:21] multiplying that one-half vector with w
[108:23] actually ends up plucking out the fifth
[108:25] row of w
[108:27] log logits would become just the fifth
[108:29] row of w
[108:31] and that&#39;s because of the way the matrix
[108:32] multiplication works
[108:35] um
[108:36] so
[108:37] that&#39;s actually what ends up happening
[108:40] so but that&#39;s actually exactly what
[108:42] happened before
[108:43] because remember all the way up here
[108:46] we have a bigram we took the first
[108:48] character and then that first character
[108:50] indexed into a row of this array here
[108:54] and that row gave us the probability
[108:56] distribution for the next character so
[108:58] the first character was used as a lookup
[109:01] into a
[109:03] matrix here to get the probability
[109:05] distribution
[109:06] well that&#39;s actually exactly what&#39;s
[109:07] happening here because we&#39;re taking the
[109:09] index we&#39;re encoding it as one hot and
[109:11] multiplying it by w
[109:13] so logics literally becomes
[109:15] the
[109:18] the appropriate row of w
[109:20] and that gets just as before
[109:22] exponentiated to create the counts
[109:24] and then normalized and becomes
[109:26] probability
[109:27] so this w here
[109:29] is literally
[109:31] the same as this array here
[109:35] but w remember is the log counts not the
[109:38] counts so it&#39;s more precise to say that
[109:40] w exponentiated
[109:42] w dot x is this array
[109:46] but this array was filled in by counting
[109:49] and by
[109:50] basically
[109:51] populating the counts of bi-grams
[109:53] whereas in the gradient-based framework
[109:55] we initialize it randomly and then we
[109:57] let the loss
[109:59] guide us
[110:00] to arrive at the exact same array
[110:03] so this array exactly here
[110:05] is
[110:06] basically the array w at the end of
[110:09] optimization except we arrived at it
[110:12] piece by piece by following the loss
[110:14] and that&#39;s why we also obtain the same
[110:16] loss function at the end and the second
[110:18] note is if i come here
[110:20] remember the smoothing where we added
[110:22] fake counts to our counts
[110:24] in order to
[110:26] smooth out and make more uniform the
[110:28] distributions of these probabilities
[110:30] and that prevented us from assigning
[110:32] zero probability to
[110:34] to any one bigram
[110:37] now if i increase the count here
[110:40] what&#39;s happening to the probability
[110:42] as i increase the count probability
[110:45] becomes more and more uniform
[110:47] right because these counts go only up to
[110:50] like 900 or whatever so if i&#39;m adding
[110:52] plus a million to every single number
[110:54] here you can see how
[110:56] the row and its probability then when we
[110:58] divide is just going to become more and
[111:00] more close to exactly even probability
[111:02] uniform distribution
[111:05] it turns out that the gradient based
[111:06] framework has an equivalent to smoothing
[111:10] in particular
[111:13] think through these w&#39;s here
[111:15] which we initialized randomly
[111:18] we could also think about initializing
[111:20] w&#39;s to be zero
[111:22] if all the entries of w are zero
[111:25] then you&#39;ll see that logits will become
[111:27] all zero
[111:28] and then exponentiating those logics
[111:30] becomes all one
[111:32] and then the probabilities turned out to
[111:33] be exactly uniform
[111:35] so basically when w&#39;s are all equal to
[111:38] each other or say especially zero
[111:41] then the probabilities come out
[111:42] completely uniform
[111:44] so
[111:45] trying to incentivize w to be near zero
[111:49] is basically equivalent to
[111:51] label smoothing and the more you
[111:53] incentivize that in the loss function
[111:55] the more smooth distribution you&#39;re
[111:57] going to achieve
[111:58] so this brings us to something that&#39;s
[112:00] called
[112:00] regularization where we can actually
[112:02] augment the loss function to have a
[112:04] small component that we call a
[112:06] regularization loss
[112:08] in particular what we&#39;re going to do is
[112:10] we can take w and we can for example
[112:12] square all of its entries
[112:14] and then we can um whoops
[112:17] sorry about that
[112:18] we can take all the entries of w and we
[112:20] can sum them
[112:23] and because we&#39;re squaring uh there will
[112:25] be no signs anymore um
[112:28] negatives and positives all get squashed
[112:29] to be positive numbers
[112:31] and then the way this works is you
[112:33] achieve zero loss if w is exactly or
[112:36] zero but if w has non-zero numbers you
[112:39] accumulate loss
[112:41] and so we can actually take this and we
[112:42] can add it on here
[112:44] so we can do something like loss plus
[112:48] w square
[112:50] dot sum
[112:51] or let&#39;s actually instead of sum let&#39;s
[112:53] take a mean because otherwise the sum
[112:55] gets too large
[112:57] so mean is like a little bit more
[112:58] manageable
[113:01] and then we have a regularization loss
[113:02] here say 0.01 times
[113:05] or something like that you can choose
[113:06] the regularization strength
[113:09] and then we can just optimize this and
[113:12] now this optimization actually has two
[113:14] components not only is it trying to make
[113:16] all the probabilities work out but in
[113:18] addition to that there&#39;s an additional
[113:19] component that simultaneously tries to
[113:22] make all w&#39;s be zero because if w&#39;s are
[113:24] non-zero you feel a loss and so
[113:26] minimizing this the only way to achieve
[113:28] that is for w to be zero
[113:30] and so you can think of this as adding
[113:32] like a spring force or like a gravity
[113:34] force that that pushes w to be zero so w
[113:38] wants to be zero and the probabilities
[113:40] want to be uniform but they also
[113:42] simultaneously want to match up your
[113:44] your probabilities as indicated by the
[113:46] data
[113:47] and so the strength of this
[113:49] regularization is exactly controlling
[113:52] the amount of counts
[113:54] that you add here
[113:57] adding a lot more counts
[113:59] here
[114:00] corresponds to
[114:02] increasing this number
[114:04] because the more you increase it the
[114:06] more this part of the loss function
[114:08] dominates this part and the more these
[114:10] these weights will un be unable to grow
[114:13] because as they grow
[114:15] they uh accumulate way too much loss
[114:18] and so if this is strong enough
[114:21] then we are not able to overcome the
[114:23] force of this loss and we will never
[114:26] and basically everything will be uniform
[114:28] predictions
[114:29] so i thought that&#39;s kind of cool okay
[114:30] and lastly before we wrap up
[114:33] i wanted to show you how you would
[114:34] sample from this neural net model
[114:36] and i copy-pasted the sampling code from
[114:39] before
[114:40] where remember that we sampled five
[114:43] times
[114:44] and all we did we start at zero we
[114:46] grabbed the current ix row of p and that
[114:50] was our probability row
[114:52] from which we sampled the next index and
[114:54] just accumulated that and
[114:56] break when zero
[114:58] and running this
[115:00] gave us these
[115:02] results still have the
[115:05] p in memory so this is fine
[115:07] now
[115:09] the speed doesn&#39;t come from the row of b
[115:11] instead it comes from this neural net
[115:14] first we take ix
[115:17] and we encode it into a one hot row of x
[115:21] inc
[115:22] this x inc multiplies rw
[115:25] which really just plucks out the row of
[115:26] w corresponding to ix really that&#39;s
[115:29] what&#39;s happening
[115:30] and that gets our logits and then we
[115:33] normalize those low jets
[115:34] exponentiate to get counts and then
[115:36] normalize to get uh the distribution and
[115:39] then we can sample from the distribution
[115:41] so if i run this
[115:45] kind of anticlimactic or climatic
[115:47] depending how you look at it but we get
[115:48] the exact same result
[115:50] um
[115:52] and that&#39;s because this is in the
[115:53] identical model not only does it achieve
[115:55] the same loss
[115:56] but
[115:58] as i mentioned these are identical
[115:59] models and this w is the log counts of
[116:02] what we&#39;ve estimated before but we came
[116:05] to this answer in a very different way
[116:07] and it&#39;s got a very different
[116:08] interpretation but fundamentally this is
[116:10] basically the same model and gives the
[116:11] same samples here and so
[116:14] that&#39;s kind of cool okay so we&#39;ve
[116:16] actually covered a lot of ground we
[116:18] introduced the bigram character level
[116:20] language model
[116:21] we saw how we can train the model how we
[116:24] can sample from the model and how we can
[116:25] evaluate the quality of the model using
[116:28] the negative log likelihood loss
[116:30] and then we actually trained the model
[116:31] in two completely different ways that
[116:33] actually get the same result and the
[116:34] same model
[116:36] in the first way we just counted up the
[116:38] frequency of all the bigrams and
[116:40] normalized
[116:41] in a second way we used the
[116:44] negative log likelihood loss as a guide
[116:47] to optimizing the counts matrix
[116:50] or the counts array so that the loss is
[116:52] minimized in the in a gradient-based
[116:54] framework and we saw that both of them
[116:56] give the same result
[116:58] and
[117:00] that&#39;s it
[117:01] now the second one of these the
[117:02] gradient-based framework is much more
[117:03] flexible and right now our neural
[117:06] network is super simple we&#39;re taking a
[117:08] single previous character and we&#39;re
[117:10] taking it through a single linear layer
[117:12] to calculate the logits
[117:14] this is about to complexify so in the
[117:16] follow-up videos we&#39;re going to be
[117:17] taking more and more of these characters
[117:20] and we&#39;re going to be feeding them into
[117:21] a neural net but this neural net will
[117:23] still output the exact same thing the
[117:25] neural net will output logits
[117:27] and these logits will still be
[117:29] normalized in the exact same way and all
[117:30] the loss and everything else and the
[117:32] gradient gradient-based framework
[117:33] everything stays identical it&#39;s just
[117:35] that this neural net will now complexify
[117:38] all the way to transformers
[117:40] so that&#39;s gonna be pretty awesome and
[117:42] i&#39;m looking forward to it for now bye
