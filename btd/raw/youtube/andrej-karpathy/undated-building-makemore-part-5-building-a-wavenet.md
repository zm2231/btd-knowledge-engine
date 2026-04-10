---
title: "Building makemore Part 5: Building a WaveNet"
creator: "andrej-karpathy"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=t3YJ5hKiMQ0"
video_id: "t3YJ5hKiMQ0"
duration: "56:22"
transcript_method: "youtube-captions"
segment_count: 1559
char_count: 54588
status: ingested
topics: []
meta_patterns: []
---

# Building makemore Part 5: Building a WaveNet

**Creator**: andrej-karpathy | **Duration**: 56:22
**URL**: https://www.youtube.com/watch?v=t3YJ5hKiMQ0
**Transcript**: 1559 segments, 54588 chars

## Transcript

hi everyone today we are continuing our implementation of make more our favorite character level language model now you'll notice that the background behind me is different that's because I am in Kyoto and it is awesome so I'm in a hotel room here now over the last few lectures we've built up to this architecture that is a multi-layer perceptron character level language model so we see that it receives three previous characters and tries to predict the fourth character in a sequence using a very simple multi perceptron using one hidden layer of neurons with 10ational neuralities so we'd like to do now in this lecture is I'd like to complexify this architecture in particular we would like to take more characters in a sequence as an input not just three and in addition to that we don't just want to feed them all into a single hidden layer because that squashes too much information too quickly instead we would like to make a deeper model that progressively fuses this information to make its guess about the next character in a sequence and so we'll see that as we make this architecture more complex we're actually going to arrive at something that looks very much like a wavenet the witness is this paper published by the point in 2016 and it is also a language model basically but it tries to predict audio sequences instead of character level sequences or Word level sequences but fundamentally the modeling setup is identical it is an auto aggressive model and it tries to predict next character in a sequence and the architecture actually takes this interesting hierarchical sort of approach to predicting the next character in a sequence uh with the street-like structure and this is the architecture and we're going to implement it in the course of this video so let's get started so the starter code for part five is very similar to where we ended up in in part three recall that part four was the manual black replication exercise that is kind of an aside so we are coming back to part three copy pasting chunks out of it and that is our starter code for part five I've changed very few things otherwise so a lot of this should look familiar to if you've gone through part three so in particular very briefly we are doing Imports we are reading our our data set of words and we are processing their set of words into individual examples and none of this data generation code has changed and basically we have lots and lots of examples in particular we have 182 000 examples of three characters try to predict the fourth one and we've broken up every one of these words into little problems of given three characters predict the fourth one so this is our data set and this is what we're trying to get the neural lot to do now in part three we started to develop our code around these layer modules um that are for example like class linear and we're doing this because we want to think of these modules as building blocks and like a Lego building block bricks that we can sort of like stack up into neural networks and we can feed data between these layers and stack them up into a sort of graphs now we also developed these layers to have apis and signatures very similar to those that are found in pytorch so we have torch.nn and it's got all these layer building blocks that you would use in practice and we were developing all of these to mimic the apis of these so for example we have linear so there will also be a torch.nn.linear and its signature will be very similar to our signature and the functionality will be also quite identical as far as I'm aware so we have the linear layer with the Bass from 1D layer and the 10h layer that we developed previously and linear just as a matrix multiply in the forward pass of this module batch number of course is this crazy layer that we developed in the previous lecture and what's crazy about it is well there's many things number one it has these running mean and variances that are trained outside of back propagation they are trained using exponential moving average inside this layer when we call the forward pass in addition to that there's this training plug because the behavior of bathroom is different during train time and evaluation time and so suddenly we have to be very careful that bash form is in its correct state that it's in the evaluation state or training state so that's something to now keep track of something that sometimes introduces bugs uh because you forget to put it into the right mode and finally we saw that Bachelor couples the statistics or the the activations across the examples in the batch so normally we thought of the bat as just an efficiency thing but now we are coupling the computation across batch elements and it's done for the purposes of controlling the automation statistics as we saw in the previous video so it's a very weird layer at least a lot of bugs partly for example because you have to modulate the training in eval phase and so on um in addition for example you have to wait for uh the mean and the variance to settle and to actually reach a steady state and so um you have to make sure that you basically there's state in this layer and state is harmful uh usually now I brought out the generator object previously we had a generator equals g and so on inside these layers I've discarded that in favor of just initializing the torch RNG outside here use it just once globally just for Simplicity and then here we are starting to build out some of the neural network elements this should look very familiar we are we have our embedding table C and then we have a list of players and uh it's a linear feeds to Bachelor feeds to 10h and then a linear output layer and its weights are scaled down so we are not confidently wrong at the initialization we see that this is about 12 000 parameters we're telling pytorch that the parameters require gradients the optimization is as far as I'm aware identical and should look very very familiar nothing changed here uh loss function looks very crazy we should probably fix this and that's because 32 batch elements are too few and so you can get very lucky lucky or unlucky in any one of these batches and it creates a very thick loss function um so we're going to fix that soon now once we want to evaluate the trained neural network we need to remember because of the bathroom layers to set all the layers to be training equals false so this only matters for the bathroom layer so far and then we evaluate we see that currently we have validation loss of 2.10 which is fairly good but there's still ways to go but even at 2.10 we see that when we sample from the model we actually get relatively name-like results that do not exist in a training set so for example Yvonne kilo Pros Alaia Etc so certainly not reasonable not unreasonable I would say but not amazing and we can still push this validation loss even lower and get much better samples that are even more name-like so let's improve this model okay first let's fix this graph because it is daggers in my eyes and I just can't take it anymore um so last I if you recall is a python list of floats so for example the first 10 elements now what we'd like to do basically is we need to average up um some of these values to get a more sort of Representative uh value along the way so one way to do this is the following in part torch if I create for example a tensor of the first 10 numbers then this is currently a one-dimensional array but recall that I can view this array as two-dimensional so for example I can use it as a two by five array and this is a 2d tensor now two by five and you see what petroch has done is that the first row of this tensor is the first five elements and the second row is the second five elements I can also view it as a five by two as an example and then recall that I can also use negative one in place of one of these numbers and pytorch will calculate what that number must be in order to make the number of elements work out so this can be this or like that but it will work of course this would not work okay so this allows it to spread out some of the consecutive values into rows so that's very helpful because what we can do now is first of all we're going to create a torshot tensor out of the a list of floats and then we're going to view it as whatever it is but we're going to stretch it out into rows of 1000 consecutive elements so the shape of this now becomes 200 by 1000. and each row is one thousand um consecutive elements in this list so that's very helpful because now we can do a mean along the rows and the shape of this will just be 200. and so we've taken basically the mean on every row so plt.plot of that should be something nicer much better so we see that we basically made a lot of progress and then here this is the learning rate Decay so here we see that the learning rate Decay subtracted a ton of energy out of the system and allowed us to settle into sort of the local minimum in this optimization so this is a much nicer plot let me come up and delete the monster and we're going to be using this going forward now next up what I'm bothered by is that you see our forward pass is a little bit gnarly and takes way too many lines of code so in particular we see that we've organized some of the layers inside the layers list but not all of them uh for no reason so in particular we see that we still have the embedding table a special case outside of the layers and in addition to that the viewing operation here is also outside of our layers so let's create layers for these and then we can add those layers to just our list so in particular the two things that we need is here we have this embedding table and we are indexing at the integers inside uh the batch XB uh inside the tensor xB so that's an embedding table lookup just done with indexing and then here we see that we have this view operation which if you recall from the previous video Simply rearranges the character embeddings and stretches them out into a row and effectively what print that does is the concatenation operation basically except it's free because viewing is very cheap in pytorch no no memory is being copied we're just re-representing how we view that tensor so let's create um modules for both of these operations the embedding operation and flattening operation so I actually wrote the code in just to save some time so we have a module embedding and a module pattern and both of them simply do the indexing operation in the forward pass and the flattening operation here and this C now will just become a salt dot weight inside an embedding module and I'm calling these layers specifically embedding a platinum because it turns out that both of them actually exist in pi torch so in phytorch we have n and Dot embedding and it also takes the number of embeddings and the dimensionality of the bedding just like we have here but in addition python takes in a lot of other keyword arguments that we are not using for our purposes yet and for flatten that also exists in pytorch and it also takes additional keyword arguments that we are not using so we have a very simple platform but both of them exist in pytorch they're just a bit more simpler and now that we have these we can simply take out some of these special cased um things so instead of C we're just going to have an embedding and of a cup size and N embed and then after the embedding we are going to flatten so let's construct those modules and now I can take out this the and here I don't have to special case anymore because now C is the embeddings weight and it's inside layers so this should just work and then here our forward pass simplifies substantially because we don't need to do these now outside of these layer outside and explicitly they're now inside layers so we can delete those but now to to kick things off we want this little X which in the beginning is just XB uh the tensor of integers specifying the identities of these characters at the input and so these characters can now directly feed into the first layer and this should just work so let me come here and insert a break because I just want to make sure that the first iteration of this runs and then there's no mistake so that ran properly and basically we substantially simplified the forward pass here okay I'm sorry I changed my microphone so hopefully the audio is a little bit better now one more thing that I would like to do in order to pytortify our code even further is that right now we are maintaining all of our modules in a naked list of layers and we can also simplify this uh because we can introduce the concept of Pi torch containers so in tors.nn which we are basically rebuilding from scratch here there's a concept of containers and these containers are basically a way of organizing layers into lists or dicts and so on so in particular there's a sequential which maintains a list of layers and is a module class in pytorch and it basically just passes a given input through all the layers sequentially exactly as we are doing here so let's write our own sequential I've written a code here and basically the code for sequential is quite straightforward we pass in a list of layers which we keep here and then given any input in a forward pass we just call all the layers sequentially and return the result in terms of the parameters it's just all the parameters of the child modules so we can run this and we can again simplify this substantially because we don't maintain this naked list of layers we now have a notion of a model which is a module and in particular is a sequential of all these layers and now parameters are simply just a model about parameters and so that list comprehension now lives here and then here we are press here we are doing all the things we used to do now here the code again simplifies substantially because we don't have to do this forwarding here instead of just call the model on the input data and the input data here are the integers inside xB so we can simply do logits which are the outputs of our model are simply the model called on xB and then the cross entropy here takes the logits and the targets so this simplifies substantially and then this looks good so let's just make sure this runs that looks good now here we actually have some work to do still here but I'm going to come back later for now there's no more layers there's a model that layers but it's not a to access attributes of these classes directly so we'll come back and fix this later and then here of course this simplifies substantially as well because logits are the model called on x and then these low Jets come here so we can evaluate the train and validation loss which currently is terrible because we just initialized the neural net and then we can also sample from the model and this simplifies dramatically as well because we just want to call the model onto the context and outcome logits and these logits go into softmax and get the probabilities Etc so we can sample from this model what did I screw up okay so I fixed the issue and we now get the result that we expect which is gibberish because the model is not trained because we re-initialize it from scratch the problem was that when I fixed this cell to be modeled out layers instead of just layers I did not actually run the cell and so our neural net was in a training mode and what caused the issue here is the bathroom layer as bathroom layer of the likes to do because Bachelor was in a training mode and here we are passing in an input which is a batch of just a single example made up of the context and so if you are trying to pass in a single example into a bash Norm that is in the training mode you're going to end up estimating the variance using the input and the variance of a single number is is not a number because it is a measure of a spread so for example the variance of just the single number five you can see is not a number and so that's what happened in the master basically caused an issue and then that polluted all of the further processing so all that we have to do was make sure that this runs and we basically made the issue of again we didn't actually see the issue with the loss we could have evaluated the loss but we got the wrong result because basharm was in the training mode and uh and so we still get a result it's just the wrong result because it's using the uh sample statistics of the batch whereas we want to use the running mean and running variants inside the bachelor and so again an example of introducing a bug inline because we did not properly maintain the state of what is training or not okay so I Rewritten everything and here's where we are as a reminder we have the training loss of 2.05 and validation 2.10 now because these losses are very similar to each other we have a sense that we are not overfitting too much on this task and we can make additional progress in our performance by scaling up the size of the neural network and making everything bigger and deeper now currently we are using this architecture here where we are taking in some number of characters going into a single hidden layer and then going to the prediction of the next character the problem here is we don't have a naive way of making this bigger in a productive way we could of course use our layers sort of building blocks and materials to introduce additional layers here and make the network deeper but it is still the case that we are crushing all of the characters into a single layer all the way at the beginning and even if we make this a bigger layer and add neurons it's still kind of like silly to squash all that information so fast in a single step so we'd like to do instead is we'd like our Network to look a lot more like this in the wavenet case so you see in the wavenet when we are trying to make the prediction for the next character in the sequence it is a function of the previous characters that are feeding that feed in but not all of these different characters are not just crushed to a single layer and then you have a sandwich they are crushed slowly so in particular we take two characters and we fuse them into sort of like a diagram representation and we do that for all these characters consecutively and then we take the bigrams and we fuse those into four character level chunks and then we fuse that again and so we do that in this like tree-like hierarchical manner so we fuse the information from the previous context slowly into the network as it gets deeper and so this is the kind of architecture that we want to implement now in the wave Nets case this is a visualization of a stack of dilated causal convolution layers and this makes it sound very scary but actually the idea is very simple and the fact that it's a dilated causal convolution layer is really just an implementation detail to make everything fast we're going to see that later but for now let's just keep the basic idea of it which is this Progressive Fusion so we want to make the network deeper and at each level we want to fuse only two consecutive elements two characters then two bigrams then two four grams and so on so let's unplant this okay so first up let me scroll to where we built the data set and let's change the block size from 3 to 8. so we're going to be taking eight characters of context to predict the ninth character so the data set now looks like this we have a lot more context feeding in to predict any next character in a sequence and these eight characters are going to be processed in this tree like structure now if we scroll here everything here should just be able to work so we should be able to redefine the network you see the number of parameters has increased by 10 000 and that's because the block size has grown so this first linear layer is much much bigger our linear layer now takes eight characters into this middle layer so there's a lot more parameters there but this should just run let me just break right after the very first iteration so you see that this runs just fine it's just that this network doesn't make too much sense we're crushing way too much information way too fast so let's now come in and see how we could try to implement the hierarchical scheme now before we dive into the detail of the re-implementation here I was just curious to actually run it and see where we are in terms of the Baseline performance of just lazily scaling up the context length so I'll let it run we get a nice loss curve and then evaluating the loss we actually see quite a bit of improvement just from increasing the context line length so I started a little bit of a performance log here and previously where we were is we were getting a performance of 2.10 on the validation loss and now simply scaling up the contact length from 3 to 8 gives us a performance of 2.02 so quite a bit of an improvement here and also when you sample from the model you see that the names are definitely improving qualitatively as well so we could of course spend a lot of time here tuning um uh tuning things and making it even bigger and scaling up the network further even with the simple um sort of setup here but let's continue and let's Implement here model and treat this as just a rough Baseline performance but there's a lot of optimization like left on the table in terms of some of the hyper parameters that you're hopefully getting a sense of now okay so let's scroll up now and come back up and what I've done here is I've created a bit of a scratch space for us to just like look at the forward pass of the neural net and inspect the shape of the tensor along the way as the neural net uh forwards so here I'm just temporarily for debugging creating a batch of just say four examples so four random integers then I'm plucking out those rows from our training set and then I'm passing into the model the input xB now the shape of XB here because we have only four examples is four by eight and this eight is now the current block size so uh inspecting XP we just see that we have four examples each one of them is a row of xB and we have eight characters here and this integer tensor just contains the identities of those characters so the first layer of our neural net is the embedding layer so passing XB this integer tensor through the embedding layer creates an output that is four by eight by ten so our embedding table has for each character a 10-dimensional vector that we are trying to learn and so what the embedding layer does here is it plucks out the embedding Vector for each one of these integers and organizes it all in a four by eight by ten tensor now so all of these integers are translated into 10 dimensional vectors inside this three-dimensional tensor now passing that through the flattened layer as you recall what this does is it views this tensor as just a 4 by 80 tensor and what that effectively does is that all these 10 dimensional embeddings for all these eight characters just end up being stretched out into a long row and that looks kind of like a concatenation operation basically so by viewing the tensor differently we now have a four by eighty and inside this 80 it's all the 10 dimensional uh vectors just uh concatenate next to each other and then the linear layer of course takes uh 80 and creates 200 channels just via matrix multiplication so so far so good now I'd like to show you something surprising let's look at the insides of the linear layer and remind ourselves how it works the linear layer here in the forward pass takes the input X multiplies it with a weight and then optionally adds bias and the weight here is two-dimensional as defined here and the bias is one dimensional here so effectively in terms of the shapes involved what's happening inside this linear layer looks like this right now and I'm using random numbers here but I'm just illustrating the shapes and what happens basically a 4 by 80 input comes into the linear layer that's multiplied by this 80 by 200 weight Matrix inside and there's a plus 200 bias and the shape of the whole thing that comes out of the linear layer is four by two hundred as we see here now notice here by the way that this here will create a 4x200 tensor and then plus 200 there's a broadcasting happening here about 4 by 200 broadcasts with 200 uh so everything works here so now the surprising thing that I'd like to show you that you may not expect is that this input here that is being multiplied uh doesn't actually have to be two-dimensional this Matrix multiply operator in pytorch is quite powerful and in fact you can actually pass in higher dimensional arrays or tensors and everything works fine so for example this could be four by five by eighty and the result in that case will become four by five by two hundred you can add as many dimensions as you like on the left here and so effectively what's happening is that the matrix multiplication only works on the last Dimension and the dimensions before it in the input tensor are left unchanged so that is basically these um these dimensions on the left are all treated as just a batch Dimension so we can have multiple batch dimensions and then in parallel over all those Dimensions we are doing the matrix multiplication on the last dimension so this is quite convenient because we can use that in our Network now because remember that we have these eight characters coming in and we don't want to now uh flatten all of it out into a large eight-dimensional vector because we don't want to Matrix multiply 80. into a weight Matrix multiply immediately instead we want to group these like this so every consecutive two elements one two and three and four and five and six and seven and eight all of these should be now basically flattened out and multiplied by weight Matrix but all of these four groups here we'd like to process in parallel so it's kind of like a batch Dimension that we can introduce and then we can in parallel basically process all of these uh bigram groups in the four batch dimensions of an individual example and also over the actual batch dimension of the you know four examples in our example here so let's see how that works effectively what we want is right now we take a 4 by 80 and multiply it by 80 by 200 to in the linear layer this is what happens but instead what we want is we don't want 80 characters or 80 numbers to come in we only want two characters to come in on the very first layer and those two characters should be fused so in other words we just want 20 to come in right 20 numbers would come in and here we don't want a 4 by 80 to feed into the linear layer we actually want these groups of two to feed in so instead of four by eighty we want this to be a 4 by 4 by 20. so these are the four groups of two and each one of them is ten dimensional vector so what we want is now is we need to change the flattened layer so it doesn't output a four by eighty but it outputs a four by four by Twenty where basically these um every two consecutive characters are uh packed in on the very last Dimension and then these four is the first batch Dimension and this four is the second batch Dimension referring to the four groups inside every one of these examples and then this will just multiply like this so this is what we want to get to so we're going to have to change the linear layer in terms of how many inputs it expects it shouldn't expect 80 it should just expect 20 numbers and we have to change our flattened layer so it doesn't just fully flatten out this entire example it needs to create a 4x4 by 20 instead of four by eighty so let's see how this could be implemented basically right now we have an input that is a four by eight by ten that feeds into the flattened layer and currently the flattened layer just stretches it out so if you remember the implementation of flatten it takes RX and it just views it as whatever the batch Dimension is and then negative one so effectively what it does right now is it does e dot view of 4 negative one and the shape of this of course is 4 by 80. so that's what currently happens and we instead want this to be a four by four by Twenty where these consecutive ten-dimensional vectors get concatenated so you know how in Python you can take a list of range of 10 so we have numbers from zero to nine and we can index like this to get all the even parts and we can also index like starting at one and going in steps up two to get all the odd parts so one way to implement this it would be as follows we can take e and we can index into it for all the batch elements and then just even elements in this Dimension so at indexes 0 2 4 and 8. and then all the parts here from this last dimension and this gives us the even characters and then here this gives us all the odd characters and basically what we want to do is we make sure we want to make sure that these get concatenated in pi torch and then we want to concatenate these two tensors along the second dimension so this and the shape of it would be four by four by Twenty this is definitely the result we want we are explicitly grabbing the even parts and the odd parts and we're arranging those four by four by ten right next to each other and concatenate so this works but it turns out that what also works is you can simply use a view again and just request the right shape and it just so happens that in this case those vectors will again end up being arranged in exactly the way we want so in particular if we take e and we just view it as a four by four by Twenty which is what we want we can check that this is exactly equal to but let me call this this is the explicit concatenation I suppose um so explosives dot shape is 4x4 by 20. if you just view it as 4x4 by 20 you can check that when you compare to explicit uh you got a big this is element wise operation so making sure that all of them are true that is the truth so basically long story short we don't need to make an explicit call to concatenate Etc we can simply take this input tensor to flatten and we can just view it in whatever way we want and in particular you don't want to stretch things out with negative one we want to actually create a three-dimensional array and depending on how many vectors that are consecutive we want to um fuse like for example two then we can just simply ask for this Dimension to be 20. and um use a negative 1 here and python will figure out how many groups it needs to pack into this additional batch dimension so let's now go into flatten and implement this okay so I scroll up here to flatten and what we'd like to do is we'd like to change it now so let me create a Constructor and take the number of elements that are consecutive that we would like to concatenate now in the last dimension of the output so here we're just going to remember solve.n equals n and then I want to be careful here because pipe pytorch actually has a torch to flatten and its keyword arguments are different and they kind of like function differently so R flatten is going to start to depart from patreon flatten so let me call it flat flatten consecutive or something like that just to make sure that our apis are about equal so this uh basically flattens only some n consecutive elements and puts them into the last dimension now here the shape of X is B by T by C so let me pop those out into variables and recall that in our example down below B was 4 T was 8 and C was 10. now instead of doing x dot view of B by negative one right this is what we had before we want this to be B by um negative 1 by and basically here we want c times n that's how many consecutive elements we want and here instead of negative one I don't super love the use of negative one because I like to be very explicit so that you get error messages when things don't go according to your expectation so what do we expect here we expect this to become t divide n using integer division here so that's what I expect to happen and then one more thing I want to do here is remember previously all the way in the beginning n was three and uh basically we're concatenating um all the three characters that existed there so we basically are concatenated everything and so sometimes I can create a spurious dimension of one here so if it is the case that x dot shape at one is one then it's kind of like a spurious dimension um so we don't want to return a three-dimensional tensor with a one here we just want to return a two-dimensional tensor exactly as we did before so in this case basically we will just say x equals x dot squeeze that is a pytorch function and squeeze takes a dimension that it either squeezes out all the dimensions of a tensor that are one or you can specify the exact Dimension that you want to be squeezed and again I like to be as explicit as possible always so I expect to squeeze out the First Dimension only of this tensor this three-dimensional tensor and if this Dimension here is one then I just want to return B by c times n and so self dot out will be X and then we return salt dot out so that's the candidate implementation and of course this should be self.n instead of just n so let's run and let's come here now and take it for a spin so flatten consecutive and in the beginning let's just use eight so this should recover the previous Behavior so flagging consecutive of eight uh which is the current block size we can do this uh that should recover the previous Behavior so we should be able to run the model and here we can inspect I have a little code snippet here where I iterate over all the layers I print the name of this class and the shape and so we see the shapes as we expect them after every single layer in the top bit so now let's try to restructure it using our flattened consecutive and do it hierarchically so in particular we want to flatten consecutive not just not block size but just two and then we want to process this with linear now then the number of inputs to this linear will not be an embed times block size it will now only be n embed times two 20. this goes through the first layer and now we can in principle just copy paste this now the next linear layer should expect and hidden times two and the last piece of it should expect and it enters 2 again so this is sort of like the naive version of it um so running this we now have a much much bigger model and we should be able to basically just forward the model and now we can inspect uh the numbers in between so four byte by 20 was Platinum consecutively into four by four by Twenty this was projected into four by four by two hundred and then bash storm just worked out of the box we have to verify that bastron does the correct thing even though it takes a three-dimensional impedance that are two dimensional input then we have 10h which is element wise then we crushed it again so if we flatten consecutively and ended up with a four by two by 400 now then linear brought it back down to 200 batch room 10h and lastly we get a 4 by 400 and we see that the flattened consecutive for the last flatten here uh it squeezed out that dimension of one so we only ended up with four by four hundred and then linear Bachelor on 10h and uh the last linear layer to get our logents and so The Lodges end up in the same shape as they were before but now we actually have a nice three layer neural nut and it basically corresponds to whoops sorry it basically corresponds exactly to this network now except only this piece here because we only have three layers whereas here in this example there's uh four layers with the total receptive field size of 16 characters instead of just eight characters so the block size here is 16. so this piece of it's basically implemented here um now we just have to kind of figure out some good Channel numbers to use here now in particular I changed the number of hidden units to be 68 in this architecture because when I use 68 the number of parameters comes out to be 22 000 so that's exactly the same that we had before and we have the same amount of capacity at this neural net in terms of the number of parameters but the question is whether we are utilizing those parameters in a more efficient architecture so what I did then is I got rid of a lot of the debugging cells here and I rerun the optimization and scrolling down to the result we see that we get the identical performance roughly so our validation loss now is 2.029 and previously it was 2.027 so controlling for the number of parameters changing from the flat to hierarchical is not giving us anything yet that said there are two things um to point out number one we didn't really torture the um architecture here very much this is just my first guess and there's a bunch of hyper parameters search that we could do in order in terms of how we allocate uh our budget of parameters to what layers number two we still may have a bug inside the bachelor 1D layer so let's take a look at um uh that because it runs but does it do the right thing so I pulled up the layer inspector sort of that we have here and printed out the shape along the way and currently it looks like the batch form is receiving an input that is 32 by 4 by 68 right and here on the right I have the current implementation of Bachelor that we have right now now this bachelor assumed in the way we wrote it and at the time that X is two-dimensional so it was n by D where n was the batch size so that's why we only reduced uh the mean and the variance over the zeroth dimension but now X will basically become three-dimensional so what's happening inside the bachelor right now and how come it's working at all and not giving any errors the reason for that is basically because everything broadcasts properly but the bachelor is not doing what we need what we wanted to do so in particular let's basically think through what's happening inside the bathroom uh looking at what's what's do What's Happening Here I have the code here so we're receiving an input of 32 by 4 by 68 and then we are doing uh here x dot mean here I have e instead of X but we're doing the mean over zero and that's actually giving us 1 by 4 by 68. so we're doing the mean only over the very first Dimension and it's giving us a mean and a variance that still maintain this Dimension here so these means are only taking over 32 numbers in the First Dimension and then when we perform this everything broadcasts correctly still but basically what ends up happening is when we also look at the running mean the shape of it so I'm looking at the model that layers at three which is the first bathroom layer and they're looking at whatever the running mean became and its shape the shape of this running mean now is 1 by 4 by 68. right instead of it being um you know just a size of dimension because we have 68 channels we expect to have 68 means and variances that we're maintaining but actually we have an array of 4 by 68 and so basically what this is telling us is this bash Norm is only this bachelor is currently working in parallel over 4 times 68 instead of just 68 channels so basically we are maintaining statistics for every one of these four positions individually and independently and instead what we want to do is we want to treat this four as a batch Dimension just like the zeroth dimension so as far as the bachelor is concerned it doesn't want to average we don't want to average over 32 numbers we want to now average over 32 times four numbers for every single one of these 68 channels and uh so let me now remove this it turns out that when you look at the documentation of torch.mean so let's go to torch.me in one of its signatures when we specify the dimension we see that the dimension here is not just it can be in or it can also be a tuple of ins so we can reduce over multiple integers at the same time over multiple Dimensions at the same time so instead of just reducing over zero we can pass in a tuple 0 1. and here zero one as well and then what's going to happen is the output of course is going to be the same but now what's going to happen is because we reduce over 0 and 1 if we look at immin.shape we see that now we've reduced we took the mean over both the zeroth and the First Dimension so we're just getting 68 numbers and a bunch of spurious Dimensions here so now this becomes 1 by 1 by 68 and the running mean and the running variance analogously will become one by one by 68. so even though there are the spurious Dimensions uh the current the current the correct thing will happen in that we are only maintaining means and variances for 64 sorry for 68 channels and we're not calculating the mean variance across 32 times 4 dimensions so that's exactly what we want and let's change the implementation of bash term 1D that we have so that it can take in two-dimensional or three-dimensional inputs and perform accordingly so at the end of the day the fix is relatively straightforward basically the dimension we want to reduce over is either 0 or the Tuple zero and one depending on the dimensionality of X so if x dot and dim is two so it's a two dimensional tensor then Dimension we want to reduce over is just the integer zero L if x dot ending is three so it's a three-dimensional tensor then the dims we're going to assume are zero and one that we want to reduce over and then here we just pass in dim and if the dimensionality of X is anything else we'll now get an error which is good um so that should be the fix now I want to point out one more thing we're actually departing from the API of Pi torch here a little bit because when you come to batch room 1D and pytorch you can scroll down and you can see that the input to this layer can either be n by C where n is the batch size and C is the number of features or channels or it actually does accept three-dimensional inputs but it expects it to be n by C by L where LSA like the sequence length or something like that so um this is problem because you see how C is nested here in the middle and so when it gets three-dimensional inputs this bash term layer will reduce over zero and two instead of zero and one so it basically Pi torch batch number one D layer assumes that c will always be the First Dimension whereas we'll we assume here that c is the last Dimension and there are some number of batch Dimensions beforehand um and so it expects n by C or M by C by all we expect and by C or n by L by C and so it's a deviation um I think it's okay I prefer it this way honestly so this is the way that we will keep it for our purposes so I redefined the layers re-initialize the neural net and did a single forward pass with a break just for one step looking at the shapes along the way they're of course identical all the shapes are the same but the way we see that things are actually working as we want them to now is that when we look at the bathroom layer the running mean shape is now one by one by 68. so we're only maintaining 68 means for every one of our channels and we're treating both the zeroth and the First Dimension as a batch Dimension which is exactly what we want so let me retrain the neural lot now okay so I retrained the neural net with the bug fix we get a nice curve and when we look at the validation performance we do actually see a slight Improvement so we went from 2.029 to 2.022 so basically the bug inside the bathroom was holding up us back like a little bit it looks like and we are getting a tiny Improvement now but it's not clear if this is statistical significant um and the reason we slightly expect an improvement is because we're not maintaining so many different means and variances that are only estimated using using 32 numbers effectively now we are estimating them using 32 times 4 numbers so you just have a lot more numbers that go into any one estimate of the mean and variance and it allows things to be a bit more stable and less Wiggly inside those estimates of those statistics so pretty nice with this more General architecture in place we are now set up to push the performance further by increasing the size of the network so for example I bumped up the number of embeddings to 24 instead of 10 and also increased number of hidden units but using the exact same architecture we now have 76 000 parameters and the training takes a lot longer but we do get a nice curve and then when you actually evaluate the performance we are now getting validation performance of 1.993 so we've crossed over the 2.0 sort of territory and right about 1.99 but we are starting to have to wait quite a bit longer and we're a little bit in the dark with respect to the correct setting of the hyper parameters here and the learning rates and so on because the experiments are starting to take longer to train and so we are missing sort of like an experimental harness on which we could run a number of experiments and really tune this architecture very well so I'd like to conclude now with a few notes we basically improved our performance from a starting of 2.1 down to 1.9 but I don't want that to be the focus because honestly we're kind of in the dark we have no experimental harness we're just guessing and checking and this whole thing is terrible we're just looking at the training loss normally you want to look at both the training and the validation loss together and the whole thing looks different if you're actually trying to squeeze out numbers that said we did implement this architecture from the wavenet paper but we did not implement this specific uh forward pass of it where you have a more complicated a linear layer sort of that is this gated linear layer kind of and there's residual connections and Skip connections and so on so we did not Implement that we just implemented this structure I would like to briefly hint or preview how what we've done here relates to convolutional neural networks as used in the wavenet paper and basically the use of convolutions is strictly for efficiency it doesn't actually change the model we've implemented so here for example let me look at a specific name to work with an example so there's a name in our training set and it's DeAndre and it has seven letters so that is eight independent examples in our model so all these rows here are independent examples of the Android now you can forward of course any one of these rows independently so I can take my model and call call it on any individual index notice by the way here I'm being a little bit tricky the reason for this is that extra at seven that shape is just um one dimensional array of eight so you can't actually call the model on it you're going to get an error because there's no batch dimension so when you do extra at a list of seven then the shape of this becomes one by eight so I get an extra batch dimension of one and then we can forward the model so that forwards a single example and you might imagine that you actually may want to forward all of these eight um at the same time so pre-allocating some memory and then doing a for Loop eight times and forwarding all of those eight here will give us all the logits in all these different cases now for us with the model as we've implemented it right now this is eight independent calls to our model but what convolutions allow you to do is it allow you to basically slide this model efficiently over the input sequence and so this for Loop can be done not outside in Python but inside of kernels in Cuda and so this for Loop gets hidden into the convolution so the convolution basically you can cover this it's a for Loop applying a little linear filter over space of some input sequence and in our case the space we're interested in is one dimensional and we're interested in sliding these filters over the input data so this diagram actually is fairly good as well basically what we've done is here they are highlighting in Black one individ one single sort of like tree of this calculation so just calculating the single output example here um and so this is basically what we've implemented here we've implemented a single this black structure we've implemented that and calculated a single output like a single example but what collusions allow you to do is it allows you to take this black structure and kind of like slide it over the input sequence here and calculate all of these orange outputs at the same time or here that corresponds to calculating all of these outputs of um at all the positions of DeAndre at the same time and the reason that this is much more efficient is because number one as I mentioned the for Loop is inside the Cuda kernels in the sliding so that makes it efficient but number two notice the variable reuse here for example if we look at this circle this node here this node here is the right child of this node but is also the left child of the node here and so basically this node and its value is used twice and so right now in this naive way we'd have to recalculate it but here we are allowed to reuse it so in the convolutional neural network you think of these linear layers that we have up above as filters and we take these filters and they're linear filters and you slide them over input sequence and we calculate the first layer and then the second layer and then the third layer and then the output layer of the sandwich and it's all done very efficiently using these convolutions so we're going to cover that in a future video the second thing I hope you took away from this video is you've seen me basically Implement all of these layer Lego building blocks or module building blocks and I'm implementing them over here and we've implemented a number of layers together and we've also implemented these these containers and we've overall pytorchified our code quite a bit more now basically what we're doing here is we're re-implementing torch.nn which is the neural networks library on top of torch.tensor and it looks very much like this except it is much better because because it's in pi torch instead of jingling my Jupiter notebook so I think going forward I will probably have considered us having unlocked um torch.nn we understand roughly what's in there how these modules work how they're nested and what they're doing on top of torture tensor so hopefully we'll just uh we'll just switch over and continue and start using torch.net directly the next thing I hope you got a bit of a sense of is what the development process of building deep neural networks looks like which I think was relatively representative to some extent so number one we are spending a lot of time in the documentation page of pytorch and we're reading through all the layers looking at documentations where the shapes of the inputs what can they be what does the layer do and so on unfortunately I have to say the patreon's documentation is not are very good they spend a ton of time on Hardcore engineering of all kinds of distributed Primitives Etc but as far as I can tell no one is maintaining any documentation it will lie to you it will be wrong it will be incomplete it will be unclear so unfortunately it is what it is and you just kind of do your best um with what they've given us um number two uh the other thing that I hope you got a sense of is there's a ton of trying to make the shapes work and there's a lot of gymnastics around these multi-dimensional arrays and are they two-dimensional three-dimensional four-dimensional uh what layers take what shapes is it NCL or NLC and you're promoting and viewing and it just can get pretty messy and so that brings me to number three I very often prototype these layers and implementations in jupyter notebooks and make sure that all the shapes work out and I'm spending a lot of time basically babysitting the shapes and making sure everything is correct and then once I'm satisfied with the functionality in the Jupiter notebook I will take that code and copy paste it into my repository of actual code that I'm training with and so then I'm working with vs code on the side so I usually have jupyter notebook and vs code I develop in Jupiter notebook I paste into vs code and then I kick off experiments from from the reaper of course from the code repository so that's roughly some notes on the development process of working with neurons lastly I think this lecture unlocks a lot of potential further lectures because number one we have to convert our neural network to actually use these dilated causal convolutional layers so implementing the comnet number two potentially starting to get into what this means whatever residual connections and Skip connections and why are they useful number three we as I mentioned we don't have any experimental harness so right now I'm just guessing checking everything this is not representative of typical deep learning workflows you have to set up your evaluation harness you can kick off experiments you have lots of arguments that your script can take you're you're kicking off a lot of experimentation you're looking at a lot of plots of training and validation losses and you're looking at what is working and what is not working and you're working on this like population level and you're doing all these hyper parameter searches and so we've done none of that so far so how to set that up and how to make it good I think as a whole another topic number three we should probably cover recurring neural networks RNs lstm's grooves and of course Transformers so many uh places to go and we'll cover that in the future for now bye sorry I forgot to say that if you are interested I think it is kind of interesting to try to beat this number 1.993 because I really haven't tried a lot of experimentation here and there's quite a bit of fruit potentially to still purchase further so I haven't tried any other ways of allocating these channels in this neural net maybe the number of dimensions for the embedding is all wrong maybe it's possible to actually take the original network with just one hidden layer and make it big enough and actually beat my fancy hierarchical Network it's not obvious that would be kind of embarrassing if this did not do better even once you torture it a little bit maybe you can read the weight net paper and try to figure out how some of these layers work and Implement them yourselves using what we have and of course you can always tune some of the initialization or some of the optimization and see if you can improve it that way so I'd be curious if people can come up with some ways to beat this and yeah that's it for now bye

## Timed Segments

[0:00] hi everyone today we are continuing our
[0:02] implementation of make more our favorite
[0:04] character level language model
[0:06] now you&#39;ll notice that the background
[0:07] behind me is different that&#39;s because I
[0:09] am in Kyoto and it is awesome so I&#39;m in
[0:12] a hotel room here
[0:13] now over the last few lectures we&#39;ve
[0:15] built up to this architecture that is a
[0:17] multi-layer perceptron character level
[0:19] language model so we see that it
[0:21] receives three previous characters and
[0:23] tries to predict the fourth character in
[0:24] a sequence using a very simple multi
[0:26] perceptron using one hidden layer of
[0:28] neurons with 10ational neuralities
[0:31] so we&#39;d like to do now in this lecture
[0:33] is I&#39;d like to complexify this
[0:34] architecture in particular we would like
[0:36] to take more characters in a sequence as
[0:38] an input not just three and in addition
[0:41] to that we don&#39;t just want to feed them
[0:42] all into a single hidden layer because
[0:45] that squashes too much information too
[0:46] quickly instead we would like to make a
[0:49] deeper model that progressively fuses
[0:51] this information to make its guess about
[0:53] the next character in a sequence
[0:55] and so we&#39;ll see that as we make this
[0:57] architecture more complex we&#39;re actually
[0:59] going to arrive at something that looks
[1:01] very much like a wavenet
[1:03] the witness is this paper published by
[1:05] the point in 2016 and it is also a
[1:09] language model basically but it tries to
[1:11] predict audio sequences instead of
[1:13] character level sequences or Word level
[1:15] sequences but fundamentally the modeling
[1:18] setup is identical it is an auto
[1:20] aggressive model and it tries to predict
[1:23] next character in a sequence and the
[1:25] architecture actually takes this
[1:26] interesting hierarchical sort of
[1:29] approach to predicting the next
[1:31] character in a sequence uh with the
[1:33] street-like structure and this is the
[1:35] architecture and we&#39;re going to
[1:36] implement it in the course of this video
[1:38] so let&#39;s get started so the starter code
[1:41] for part five is very similar to where
[1:43] we ended up in in part three recall that
[1:46] part four was the manual black
[1:47] replication exercise that is kind of an
[1:49] aside so we are coming back to part
[1:51] three copy pasting chunks out of it and
[1:53] that is our starter code for part five
[1:55] I&#39;ve changed very few things otherwise
[1:57] so a lot of this should look familiar to
[1:59] if you&#39;ve gone through part three so in
[2:01] particular very briefly we are doing
[2:03] Imports we are reading our our data set
[2:05] of words and we are processing their set
[2:09] of words into individual examples and
[2:11] none of this data generation code has
[2:13] changed and basically we have lots and
[2:15] lots of examples in particular we have
[2:17] 182 000 examples of three characters try
[2:21] to predict the fourth one and we&#39;ve
[2:24] broken up every one of these words into
[2:25] little problems of given three
[2:27] characters predict the fourth one so
[2:29] this is our data set and this is what
[2:30] we&#39;re trying to get the neural lot to do
[2:32] now in part three we started to develop
[2:35] our code around these layer modules
[2:39] um that are for example like class
[2:40] linear and we&#39;re doing this because we
[2:42] want to think of these modules as
[2:44] building blocks and like a Lego building
[2:47] block bricks that we can sort of like
[2:49] stack up into neural networks and we can
[2:51] feed data between these layers and stack
[2:53] them up into a sort of graphs
[2:56] now we also developed these layers to
[2:59] have apis and signatures very similar to
[3:01] those that are found in pytorch so we
[3:04] have torch.nn and it&#39;s got all these
[3:05] layer building blocks that you would use
[3:07] in practice and we were developing all
[3:09] of these to mimic the apis of these so
[3:11] for example we have linear so there will
[3:13] also be a torch.nn.linear and its
[3:17] signature will be very similar to our
[3:18] signature and the functionality will be
[3:20] also quite identical as far as I&#39;m aware
[3:22] so we have the linear layer with the
[3:24] Bass from 1D layer and the 10h layer
[3:27] that we developed previously
[3:29] and linear just as a matrix multiply in
[3:32] the forward pass of this module batch
[3:35] number of course is this crazy layer
[3:36] that we developed in the previous
[3:37] lecture and what&#39;s crazy about it is
[3:40] well there&#39;s many things number one it
[3:42] has these running mean and variances
[3:44] that are trained outside of back
[3:46] propagation they are trained using
[3:49] exponential moving average inside this
[3:52] layer when we call the forward pass
[3:54] in addition to that
[3:56] there&#39;s this training plug because the
[3:58] behavior of bathroom is different during
[3:59] train time and evaluation time and so
[4:02] suddenly we have to be very careful that
[4:03] bash form is in its correct state that
[4:05] it&#39;s in the evaluation state or training
[4:07] state so that&#39;s something to now keep
[4:08] track of something that sometimes
[4:10] introduces bugs
[4:11] uh because you forget to put it into the
[4:13] right mode and finally we saw that
[4:15] Bachelor couples the statistics or the
[4:18] the activations across the examples in
[4:20] the batch so normally we thought of the
[4:22] bat as just an efficiency thing but now
[4:25] we are coupling the computation across
[4:28] batch elements and it&#39;s done for the
[4:30] purposes of controlling the automation
[4:32] statistics as we saw in the previous
[4:33] video
[4:34] so it&#39;s a very weird layer at least a
[4:36] lot of bugs
[4:38] partly for example because you have to
[4:40] modulate the training in eval phase and
[4:42] so on
[4:44] um in addition for example you have to
[4:46] wait for uh the mean and the variance to
[4:49] settle and to actually reach a steady
[4:51] state and so um you have to make sure
[4:53] that you basically there&#39;s state in this
[4:55] layer and state is harmful uh usually
[4:59] now I brought out the generator object
[5:02] previously we had a generator equals g
[5:04] and so on inside these layers I&#39;ve
[5:07] discarded that in favor of just
[5:08] initializing the torch RNG outside here
[5:12] use it just once globally just for
[5:15] Simplicity
[5:16] and then here we are starting to build
[5:18] out some of the neural network elements
[5:19] this should look very familiar we are we
[5:22] have our embedding table C and then we
[5:24] have a list of players and uh it&#39;s a
[5:27] linear feeds to Bachelor feeds to 10h
[5:29] and then a linear output layer and its
[5:32] weights are scaled down so we are not
[5:33] confidently wrong at the initialization
[5:36] we see that this is about 12 000
[5:38] parameters we&#39;re telling pytorch that
[5:40] the parameters require gradients
[5:42] the optimization is as far as I&#39;m aware
[5:44] identical and should look very very
[5:46] familiar
[5:47] nothing changed here
[5:49] uh loss function looks very crazy we
[5:52] should probably fix this and that&#39;s
[5:54] because 32 batch elements are too few
[5:56] and so you can get very lucky lucky or
[5:59] unlucky in any one of these batches and
[6:01] it creates a very thick loss function
[6:04] um so we&#39;re going to fix that soon
[6:06] now once we want to evaluate the trained
[6:08] neural network we need to remember
[6:09] because of the bathroom layers to set
[6:11] all the layers to be training equals
[6:13] false so this only matters for the
[6:15] bathroom layer so far
[6:17] and then we evaluate
[6:19] we see that currently we have validation
[6:22] loss of 2.10 which is fairly good but
[6:25] there&#39;s still ways to go but even at
[6:28] 2.10 we see that when we sample from the
[6:30] model we actually get relatively
[6:31] name-like results that do not exist in a
[6:34] training set so for example Yvonne kilo
[6:37] Pros
[6:40] Alaia Etc so certainly not
[6:43] reasonable not unreasonable I would say
[6:46] but not amazing and we can still push
[6:48] this validation loss even lower and get
[6:50] much better samples that are even more
[6:52] name-like
[6:53] so let&#39;s improve this model
[6:56] okay first let&#39;s fix this graph because
[6:58] it is daggers in my eyes and I just
[7:00] can&#39;t take it anymore
[7:01] um so last I if you recall is a python
[7:05] list of floats so for example the first
[7:07] 10 elements
[7:10] now what we&#39;d like to do basically is we
[7:12] need to average up
[7:14] um some of these values to get a more
[7:16] sort of Representative uh value along
[7:19] the way so one way to do this is the
[7:20] following
[7:21] in part torch if I create for example
[7:24] a tensor of the first 10 numbers
[7:27] then this is currently a one-dimensional
[7:29] array but recall that I can view this
[7:31] array as two-dimensional so for example
[7:33] I can use it as a two by five array and
[7:36] this is a 2d tensor now two by five and
[7:39] you see what petroch has done is that
[7:40] the first row of this tensor is the
[7:42] first five elements and the second row
[7:44] is the second five elements
[7:46] I can also view it as a five by two as
[7:48] an example
[7:50] and then recall that I can also
[7:52] use negative one in place of one of
[7:55] these numbers
[7:55] and pytorch will calculate what that
[7:58] number must be in order to make the
[7:59] number of elements work out so this can
[8:01] be
[8:03] this or like that but it will work of
[8:06] course this would not work
[8:09] okay so this allows it to spread out
[8:11] some of the consecutive values into rows
[8:13] so that&#39;s very helpful because what we
[8:15] can do now is first of all we&#39;re going
[8:17] to create a torshot tensor out of the a
[8:21] list of floats
[8:22] and then we&#39;re going to view it as
[8:24] whatever it is but we&#39;re going to
[8:26] stretch it out into rows of 1000
[8:29] consecutive elements so the shape of
[8:31] this now becomes 200 by 1000. and each
[8:35] row is one thousand um consecutive
[8:37] elements in this list
[8:39] so that&#39;s very helpful because now we
[8:41] can do a mean along the rows
[8:43] and the shape of this will just be 200.
[8:47] and so we&#39;ve taken basically the mean on
[8:48] every row so plt.plot of that should be
[8:51] something nicer
[8:53] much better
[8:55] so we see that we basically made a lot
[8:56] of progress and then here this is the
[8:59] learning rate Decay so here we see that
[9:01] the learning rate Decay subtracted a ton
[9:03] of energy out of the system and allowed
[9:05] us to settle into sort of the local
[9:07] minimum in this optimization
[9:09] so this is a much nicer plot let me come
[9:12] up and delete the monster and we&#39;re
[9:15] going to be using this going forward now
[9:16] next up what I&#39;m bothered by is that you
[9:19] see our forward pass is a little bit
[9:22] gnarly and takes way too many lines of
[9:24] code
[9:24] so in particular we see that we&#39;ve
[9:26] organized some of the layers inside the
[9:28] layers list but not all of them uh for
[9:30] no reason so in particular we see that
[9:32] we still have the embedding table a
[9:34] special case outside of the layers and
[9:37] in addition to that the viewing
[9:39] operation here is also outside of our
[9:40] layers so let&#39;s create layers for these
[9:43] and then we can add those layers to just
[9:45] our list
[9:46] so in particular the two things that we
[9:48] need is here we have this embedding
[9:50] table and we are indexing at the
[9:53] integers inside uh the batch XB uh
[9:56] inside the tensor xB
[9:58] so that&#39;s an embedding table lookup just
[10:00] done with indexing and then here we see
[10:03] that we have this view operation which
[10:04] if you recall from the previous video
[10:06] Simply rearranges the character
[10:09] embeddings and stretches them out into a
[10:12] row and effectively what print that does
[10:14] is the concatenation operation basically
[10:16] except it&#39;s free because viewing is very
[10:19] cheap in pytorch no no memory is being
[10:22] copied we&#39;re just re-representing how we
[10:24] view that tensor so let&#39;s create
[10:27] um
[10:28] modules for both of these operations the
[10:31] embedding operation and flattening
[10:32] operation
[10:33] so I actually wrote the code in just to
[10:37] save some time
[10:38] so we have a module embedding and a
[10:40] module pattern and both of them simply
[10:43] do the indexing operation in the forward
[10:45] pass and the flattening operation here
[10:49] and this C now will just become a salt
[10:53] dot weight inside an embedding module
[10:56] and I&#39;m calling these layers
[10:58] specifically embedding a platinum
[10:59] because it turns out that both of them
[11:01] actually exist in pi torch so in
[11:03] phytorch we have n and Dot embedding and
[11:06] it also takes the number of embeddings
[11:07] and the dimensionality of the bedding
[11:09] just like we have here but in addition
[11:11] python takes in a lot of other keyword
[11:13] arguments that we are not using for our
[11:15] purposes yet
[11:17] and for flatten that also exists in
[11:19] pytorch and it also takes additional
[11:21] keyword arguments that we are not using
[11:23] so we have a very simple platform
[11:26] but both of them exist in pytorch
[11:28] they&#39;re just a bit more simpler and now
[11:30] that we have these we can simply take
[11:33] out some of these special cased
[11:36] um things so instead of C we&#39;re just
[11:40] going to have an embedding
[11:41] and of a cup size and N embed
[11:45] and then after the embedding we are
[11:47] going to flatten
[11:48] so let&#39;s construct those modules and now
[11:51] I can take out this the
[11:53] and here I don&#39;t have to special case
[11:54] anymore because now C is the embeddings
[11:57] weight and it&#39;s inside layers
[12:01] so this should just work
[12:03] and then here our forward pass
[12:06] simplifies substantially because we
[12:08] don&#39;t need to do these now outside of
[12:10] these layer outside and explicitly
[12:13] they&#39;re now inside layers
[12:15] so we can delete those
[12:17] but now to to kick things off we want
[12:19] this little X which in the beginning is
[12:21] just XB uh the tensor of integers
[12:24] specifying the identities of these
[12:26] characters at the input
[12:27] and so these characters can now directly
[12:29] feed into the first layer and this
[12:31] should just work
[12:32] so let me come here and insert a break
[12:35] because I just want to make sure that
[12:36] the first iteration of this runs and
[12:38] then there&#39;s no mistake so that ran
[12:40] properly and basically we substantially
[12:42] simplified the forward pass here okay
[12:45] I&#39;m sorry I changed my microphone so
[12:46] hopefully the audio is a little bit
[12:48] better
[12:49] now one more thing that I would like to
[12:51] do in order to pytortify our code even
[12:53] further is that right now we are
[12:54] maintaining all of our modules in a
[12:56] naked list of layers and we can also
[12:59] simplify this uh because we can
[13:01] introduce the concept of Pi torch
[13:03] containers so in tors.nn which we are
[13:05] basically rebuilding from scratch here
[13:07] there&#39;s a concept of containers
[13:09] and these containers are basically a way
[13:10] of organizing layers into
[13:13] lists or dicts and so on so in
[13:16] particular there&#39;s a sequential which
[13:18] maintains a list of layers and is a
[13:20] module class in pytorch and it basically
[13:23] just passes a given input through all
[13:25] the layers sequentially exactly as we
[13:27] are doing here
[13:28] so let&#39;s write our own sequential
[13:31] I&#39;ve written a code here and basically
[13:33] the code for sequential is quite
[13:35] straightforward we pass in a list of
[13:37] layers which we keep here and then given
[13:39] any input in a forward pass we just call
[13:41] all the layers sequentially and return
[13:43] the result in terms of the parameters
[13:45] it&#39;s just all the parameters of the
[13:46] child modules
[13:48] so we can run this and we can again
[13:50] simplify this substantially because we
[13:52] don&#39;t maintain this naked list of layers
[13:54] we now have a notion of a model which is
[13:57] a module and in particular is a
[14:00] sequential of all these layers
[14:04] and now parameters are simply just a
[14:07] model about parameters
[14:09] and so that list comprehension now lives
[14:11] here
[14:13] and then here we are press here we are
[14:15] doing all the things we used to do
[14:17] now here the code again simplifies
[14:19] substantially because we don&#39;t have to
[14:22] do this forwarding here instead of just
[14:24] call the model on the input data and the
[14:26] input data here are the integers inside
[14:28] xB so we can simply do logits which are
[14:31] the outputs of our model are simply the
[14:33] model called on xB
[14:36] and then the cross entropy here takes
[14:38] the logits and the targets
[14:41] so this simplifies substantially
[14:43] and then this looks good so let&#39;s just
[14:46] make sure this runs that looks good
[14:49] now here we actually have some work to
[14:51] do still here but I&#39;m going to come back
[14:52] later for now there&#39;s no more layers
[14:54] there&#39;s a model that layers but it&#39;s not
[14:57] a to access attributes of these classes
[15:00] directly so we&#39;ll come back and fix this
[15:01] later
[15:03] and then here of course this simplifies
[15:05] substantially as well because logits are
[15:07] the model called on x
[15:10] and then these low Jets come here
[15:14] so we can evaluate the train and
[15:15] validation loss which currently is
[15:17] terrible because we just initialized the
[15:19] neural net and then we can also sample
[15:21] from the model and this simplifies
[15:22] dramatically as well
[15:24] because we just want to call the model
[15:25] onto the context and outcome logits
[15:30] and these logits go into softmax and get
[15:32] the probabilities Etc so we can sample
[15:35] from this model
[15:37] what did I screw up
[15:42] okay so I fixed the issue and we now get
[15:44] the result that we expect which is
[15:46] gibberish because the model is not
[15:48] trained because we re-initialize it from
[15:49] scratch
[15:50] the problem was that when I fixed this
[15:52] cell to be modeled out layers instead of
[15:54] just layers I did not actually run the
[15:56] cell and so our neural net was in a
[15:58] training mode and what caused the issue
[16:01] here is the bathroom layer as bathroom
[16:03] layer of the likes to do because
[16:05] Bachelor was in a training mode and here
[16:07] we are passing in an input which is a
[16:09] batch of just a single example made up
[16:11] of the context
[16:12] and so if you are trying to pass in a
[16:15] single example into a bash Norm that is
[16:16] in the training mode you&#39;re going to end
[16:18] up estimating the variance using the
[16:20] input and the variance of a single
[16:21] number is is not a number because it is
[16:24] a measure of a spread so for example the
[16:26] variance of just the single number five
[16:28] you can see is not a number and so
[16:31] that&#39;s what happened in the master
[16:33] basically caused an issue and then that
[16:35] polluted all of the further processing
[16:37] so all that we have to do was make sure
[16:39] that this runs and we basically made the
[16:43] issue of
[16:45] again we didn&#39;t actually see the issue
[16:46] with the loss we could have evaluated
[16:48] the loss but we got the wrong result
[16:49] because basharm was in the training mode
[16:52] and uh and so we still get a result it&#39;s
[16:54] just the wrong result because it&#39;s using
[16:56] the uh sample statistics of the batch
[16:59] whereas we want to use the running mean
[17:00] and running variants inside the bachelor
[17:02] and so
[17:04] again an example of introducing a bug
[17:06] inline because we did not properly
[17:09] maintain the state of what is training
[17:10] or not okay so I Rewritten everything
[17:12] and here&#39;s where we are as a reminder we
[17:15] have the training loss of 2.05 and
[17:17] validation 2.10
[17:18] now because these losses are very
[17:21] similar to each other we have a sense
[17:22] that we are not overfitting too much on
[17:24] this task and we can make additional
[17:26] progress in our performance by scaling
[17:28] up the size of the neural network and
[17:29] making everything bigger and deeper
[17:32] now currently we are using this
[17:33] architecture here where we are taking in
[17:35] some number of characters going into a
[17:37] single hidden layer and then going to
[17:39] the prediction of the next character
[17:41] the problem here is we don&#39;t have a
[17:43] naive way of making this bigger in a
[17:46] productive way we could of course use
[17:48] our layers sort of building blocks and
[17:51] materials to introduce additional layers
[17:53] here and make the network deeper but it
[17:55] is still the case that we are crushing
[17:56] all of the characters into a single
[17:58] layer all the way at the beginning
[18:00] and even if we make this a bigger layer
[18:02] and add neurons it&#39;s still kind of like
[18:04] silly to squash all that information so
[18:07] fast in a single step
[18:09] so we&#39;d like to do instead is we&#39;d like
[18:11] our Network to look a lot more like this
[18:13] in the wavenet case so you see in the
[18:15] wavenet when we are trying to make the
[18:17] prediction for the next character in the
[18:18] sequence it is a function of the
[18:20] previous characters that are feeding
[18:22] that feed in but not all of these
[18:25] different characters are not just
[18:26] crushed to a single layer and then you
[18:28] have a sandwich they are crushed slowly
[18:31] so in particular we take two characters
[18:34] and we fuse them into sort of like a
[18:36] diagram representation and we do that
[18:38] for all these characters consecutively
[18:40] and then we take the bigrams and we fuse
[18:42] those into four character level chunks
[18:46] and then we fuse that again and so we do
[18:49] that in this like tree-like hierarchical
[18:51] manner so we fuse the information from
[18:53] the previous context slowly into the
[18:56] network as it gets deeper and so this is
[18:58] the kind of architecture that we want to
[18:59] implement
[19:00] now in the wave Nets case this is a
[19:02] visualization of a stack of dilated
[19:04] causal convolution layers and this makes
[19:07] it sound very scary but actually the
[19:08] idea is very simple and the fact that
[19:10] it&#39;s a dilated causal convolution layer
[19:12] is really just an implementation detail
[19:14] to make everything fast we&#39;re going to
[19:16] see that later but for now let&#39;s just
[19:18] keep the basic idea of it which is this
[19:20] Progressive Fusion so we want to make
[19:22] the network deeper and at each level we
[19:24] want to fuse only two consecutive
[19:26] elements two characters then two bigrams
[19:29] then two four grams and so on so let&#39;s
[19:32] unplant this okay so first up let me
[19:34] scroll to where we built the data set
[19:35] and let&#39;s change the block size from 3
[19:37] to 8. so we&#39;re going to be taking eight
[19:39] characters of context to predict the
[19:42] ninth character so the data set now
[19:44] looks like this we have a lot more
[19:45] context feeding in to predict any next
[19:47] character in a sequence and these eight
[19:49] characters are going to be processed in
[19:51] this tree like structure
[19:53] now if we scroll here everything here
[19:56] should just be able to work so we should
[19:58] be able to redefine the network
[19:59] you see the number of parameters has
[20:01] increased by 10 000 and that&#39;s because
[20:03] the block size has grown so this first
[20:06] linear layer is much much bigger our
[20:08] linear layer now takes eight characters
[20:10] into this middle layer so there&#39;s a lot
[20:13] more parameters there but this should
[20:15] just run let me just break right after
[20:18] the very first iteration so you see that
[20:20] this runs just fine it&#39;s just that this
[20:22] network doesn&#39;t make too much sense
[20:23] we&#39;re crushing way too much information
[20:25] way too fast
[20:26] so let&#39;s now come in and see how we
[20:29] could try to implement the hierarchical
[20:30] scheme now before we dive into the
[20:33] detail of the re-implementation here I
[20:35] was just curious to actually run it and
[20:37] see where we are in terms of the
[20:38] Baseline performance of just lazily
[20:40] scaling up the context length so I&#39;ll
[20:42] let it run we get a nice loss curve and
[20:45] then evaluating the loss we actually see
[20:46] quite a bit of improvement just from
[20:48] increasing the context line length so I
[20:51] started a little bit of a performance
[20:52] log here and previously where we were is
[20:54] we were getting a performance of 2.10 on
[20:57] the validation loss and now simply
[20:59] scaling up the contact length from 3 to
[21:01] 8 gives us a performance of 2.02 so
[21:05] quite a bit of an improvement here and
[21:07] also when you sample from the model you
[21:08] see that the names are definitely
[21:10] improving qualitatively as well
[21:13] so we could of course spend a lot of
[21:14] time here tuning
[21:16] um uh tuning things and making it even
[21:18] bigger and scaling up the network
[21:19] further even with the simple
[21:21] um sort of setup here but let&#39;s continue
[21:24] and let&#39;s Implement here model and treat
[21:27] this as just a rough Baseline
[21:28] performance but there&#39;s a lot of
[21:30] optimization like left on the table in
[21:32] terms of some of the hyper parameters
[21:34] that you&#39;re hopefully getting a sense of
[21:35] now okay so let&#39;s scroll up now
[21:38] and come back up and what I&#39;ve done here
[21:41] is I&#39;ve created a bit of a scratch space
[21:42] for us to just like look at the forward
[21:45] pass of the neural net and inspect the
[21:47] shape of the tensor along the way as the
[21:49] neural net uh forwards so here I&#39;m just
[21:53] temporarily for debugging creating a
[21:55] batch of just say four examples so four
[21:58] random integers then I&#39;m plucking out
[22:00] those rows from our training set
[22:02] and then I&#39;m passing into the model the
[22:04] input xB
[22:06] now the shape of XB here because we have
[22:08] only four examples is four by eight and
[22:11] this eight is now the current block size
[22:14] so uh inspecting XP we just see that we
[22:18] have four examples each one of them is a
[22:19] row of xB
[22:21] and we have eight characters here and
[22:24] this integer tensor just contains the
[22:26] identities of those characters
[22:29] so the first layer of our neural net is
[22:31] the embedding layer so passing XB this
[22:33] integer tensor through the embedding
[22:35] layer creates an output that is four by
[22:37] eight by ten
[22:39] so our embedding table has for each
[22:42] character a 10-dimensional vector that
[22:44] we are trying to learn
[22:46] and so what the embedding layer does
[22:48] here is it plucks out the embedding
[22:50] Vector for each one of these integers
[22:53] and organizes it all in a four by eight
[22:56] by ten tensor now
[22:58] so all of these integers are translated
[23:00] into 10 dimensional vectors inside this
[23:02] three-dimensional tensor now
[23:04] passing that through the flattened layer
[23:06] as you recall what this does is it views
[23:09] this tensor as just a 4 by 80 tensor and
[23:12] what that effectively does is that all
[23:15] these 10 dimensional embeddings for all
[23:16] these eight characters just end up being
[23:18] stretched out into a long row
[23:21] and that looks kind of like a
[23:22] concatenation operation basically so by
[23:25] viewing the tensor differently we now
[23:27] have a four by eighty and inside this 80
[23:29] it&#39;s all the 10 dimensional uh
[23:32] vectors just uh concatenate next to each
[23:35] other
[23:36] and then the linear layer of course
[23:37] takes uh 80 and creates 200 channels
[23:40] just via matrix multiplication
[23:43] so so far so good now I&#39;d like to show
[23:45] you something surprising
[23:47] let&#39;s look at the insides of the linear
[23:50] layer and remind ourselves how it works
[23:52] the linear layer here in the forward
[23:54] pass takes the input X multiplies it
[23:56] with a weight and then optionally adds
[23:58] bias and the weight here is
[24:00] two-dimensional as defined here and the
[24:02] bias is one dimensional here
[24:04] so effectively in terms of the shapes
[24:06] involved what&#39;s happening inside this
[24:08] linear layer looks like this right now
[24:10] and I&#39;m using random numbers here but
[24:12] I&#39;m just illustrating the shapes and
[24:15] what happens
[24:16] basically a 4 by 80 input comes into the
[24:18] linear layer that&#39;s multiplied by this
[24:20] 80 by 200 weight Matrix inside and
[24:23] there&#39;s a plus 200 bias and the shape of
[24:25] the whole thing that comes out of the
[24:26] linear layer is four by two hundred as
[24:28] we see here
[24:30] now notice here by the way that this
[24:32] here will create a 4x200 tensor and then
[24:36] plus 200 there&#39;s a broadcasting
[24:38] happening here about 4 by 200 broadcasts
[24:41] with 200 uh so everything works here
[24:44] so now the surprising thing that I&#39;d
[24:46] like to show you that you may not expect
[24:47] is that this input here that is being
[24:49] multiplied uh doesn&#39;t actually have to
[24:52] be two-dimensional this Matrix multiply
[24:55] operator in pytorch is quite powerful
[24:56] and in fact you can actually pass in
[24:58] higher dimensional arrays or tensors and
[25:00] everything works fine so for example
[25:02] this could be four by five by eighty and
[25:04] the result in that case will become four
[25:06] by five by two hundred
[25:08] you can add as many dimensions as you
[25:09] like on the left here
[25:11] and so effectively what&#39;s happening is
[25:13] that the matrix multiplication only
[25:15] works on the last Dimension and the
[25:17] dimensions before it in the input tensor
[25:19] are left unchanged
[25:24] so that is basically these um these
[25:27] dimensions on the left are all treated
[25:29] as just a batch Dimension so we can have
[25:32] multiple batch dimensions and then in
[25:34] parallel over all those Dimensions we
[25:36] are doing the matrix multiplication on
[25:38] the last dimension
[25:39] so this is quite convenient because we
[25:41] can use that in our Network now
[25:44] because remember that we have these
[25:46] eight characters coming in
[25:49] and we don&#39;t want to now uh flatten all
[25:51] of it out into a large eight-dimensional
[25:53] vector
[25:54] because we don&#39;t want to Matrix multiply
[25:57] 80.
[25:59] into a weight Matrix multiply
[26:01] immediately instead we want to group
[26:03] these
[26:04] like this
[26:06] so every consecutive two elements
[26:09] one two and three and four and five and
[26:11] six and seven and eight all of these
[26:12] should be now
[26:14] basically flattened out and multiplied
[26:17] by weight Matrix but all of these four
[26:19] groups here we&#39;d like to process in
[26:21] parallel so it&#39;s kind of like a batch
[26:23] Dimension that we can introduce
[26:25] and then we can in parallel basically
[26:28] process all of these uh bigram groups in
[26:33] the four batch dimensions of an
[26:34] individual example and also over the
[26:37] actual batch dimension of the you know
[26:39] four examples in our example here so
[26:42] let&#39;s see how that works effectively
[26:43] what we want is right now we take a 4 by
[26:46] 80
[26:47] and multiply it by 80 by 200
[26:50] to in the linear layer this is what
[26:52] happens
[26:53] but instead what we want is we don&#39;t
[26:56] want 80 characters or 80 numbers to come
[26:58] in we only want two characters to come
[27:00] in on the very first layer and those two
[27:02] characters should be fused
[27:04] so in other words we just want 20 to
[27:07] come in right 20 numbers would come in
[27:11] and here we don&#39;t want a 4 by 80 to feed
[27:13] into the linear layer we actually want
[27:15] these groups of two to feed in so
[27:17] instead of four by eighty we want this
[27:19] to be a 4 by 4 by 20.
[27:23] so these are the four groups of two and
[27:27] each one of them is ten dimensional
[27:28] vector
[27:29] so what we want is now is we need to
[27:31] change the flattened layer so it doesn&#39;t
[27:33] output a four by eighty but it outputs a
[27:35] four by four by Twenty where basically
[27:38] these um
[27:39] every two consecutive characters are uh
[27:43] packed in on the very last Dimension and
[27:46] then these four is the first batch
[27:48] Dimension and this four is the second
[27:50] batch Dimension referring to the four
[27:52] groups inside every one of these
[27:54] examples
[27:55] and then this will just multiply like
[27:57] this so this is what we want to get to
[27:59] so we&#39;re going to have to change the
[28:01] linear layer in terms of how many inputs
[28:02] it expects it shouldn&#39;t expect 80 it
[28:05] should just expect 20 numbers and we
[28:07] have to change our flattened layer so it
[28:09] doesn&#39;t just fully flatten out this
[28:11] entire example it needs to create a 4x4
[28:14] by 20 instead of four by eighty so let&#39;s
[28:17] see how this could be implemented
[28:19] basically right now we have an input
[28:21] that is a four by eight by ten that
[28:23] feeds into the flattened layer and
[28:25] currently the flattened layer just
[28:27] stretches it out so if you remember the
[28:29] implementation of flatten
[28:31] it takes RX and it just views it as
[28:34] whatever the batch Dimension is and then
[28:35] negative one
[28:37] so effectively what it does right now is
[28:39] it does e dot view of 4 negative one and
[28:42] the shape of this of course is 4 by 80.
[28:45] so that&#39;s what currently happens and we
[28:48] instead want this to be a four by four
[28:49] by Twenty where these consecutive
[28:51] ten-dimensional vectors get concatenated
[28:54] so you know how in Python you can take a
[28:57] list of range of 10
[29:00] so we have numbers from zero to nine and
[29:03] we can index like this to get all the
[29:05] even parts
[29:06] and we can also index like starting at
[29:08] one and going in steps up two to get all
[29:11] the odd parts
[29:13] so one way to implement this it would be
[29:15] as follows we can take e and we can
[29:18] index into it for all the batch elements
[29:21] and then just even elements in this
[29:24] Dimension so at indexes 0 2 4 and 8.
[29:29] and then all the parts here from this
[29:31] last dimension
[29:33] and this gives us the even characters
[29:37] and then here
[29:39] this gives us all the odd characters and
[29:42] basically what we want to do is we make
[29:43] sure we want to make sure that these get
[29:44] concatenated in pi torch and then we
[29:47] want to concatenate these two tensors
[29:49] along the second dimension
[29:53] so this and the shape of it would be
[29:55] four by four by Twenty this is
[29:57] definitely the result we want we are
[29:58] explicitly grabbing the even parts and
[30:01] the odd parts and we&#39;re arranging those
[30:03] four by four by ten right next to each
[30:06] other and concatenate
[30:08] so this works but it turns out that what
[30:10] also works is you can simply use a view
[30:13] again and just request the right shape
[30:16] and it just so happens that in this case
[30:18] those vectors will again end up being
[30:21] arranged in exactly the way we want so
[30:23] in particular if we take e and we just
[30:25] view it as a four by four by Twenty
[30:27] which is what we want
[30:28] we can check that this is exactly equal
[30:30] to but let me call this this is the
[30:33] explicit concatenation I suppose
[30:36] um
[30:36] so explosives dot shape is 4x4 by 20. if
[30:40] you just view it as 4x4 by 20 you can
[30:42] check that when you compare to explicit
[30:46] uh you got a big this is element wise
[30:48] operation so making sure that all of
[30:49] them are true that is the truth so
[30:53] basically long story short we don&#39;t need
[30:54] to make an explicit call to concatenate
[30:56] Etc we can simply take this input tensor
[31:00] to flatten and we can just view it in
[31:03] whatever way we want
[31:04] and in particular you don&#39;t want to
[31:07] stretch things out with negative one we
[31:09] want to actually create a
[31:10] three-dimensional array and depending on
[31:12] how many vectors that are consecutive we
[31:15] want to
[31:16] um fuse like for example two then we can
[31:20] just simply ask for this Dimension to be
[31:21] 20. and um
[31:24] use a negative 1 here and python will
[31:26] figure out how many groups it needs to
[31:27] pack into this additional batch
[31:29] dimension
[31:30] so let&#39;s now go into flatten and
[31:32] implement this okay so I scroll up here
[31:34] to flatten and what we&#39;d like to do is
[31:36] we&#39;d like to change it now so let me
[31:38] create a Constructor and take the number
[31:40] of elements that are consecutive that we
[31:42] would like to concatenate now in the
[31:44] last dimension of the output
[31:46] so here we&#39;re just going to remember
[31:48] solve.n equals n
[31:50] and then I want to be careful here
[31:52] because pipe pytorch actually has a
[31:54] torch to flatten and its keyword
[31:56] arguments are different and they kind of
[31:58] like function differently so R flatten
[32:00] is going to start to depart from patreon
[32:02] flatten so let me call it flat flatten
[32:04] consecutive or something like that just
[32:06] to make sure that our apis are about
[32:08] equal
[32:09] so this uh basically flattens only some
[32:13] n consecutive elements and puts them
[32:15] into the last dimension
[32:17] now here the shape of X is B by T by C
[32:21] so let me
[32:23] pop those out into variables and recall
[32:26] that in our example down below B was 4 T
[32:28] was 8 and C was 10.
[32:33] now instead of doing x dot view of B by
[32:37] negative one
[32:39] right this is what we had before
[32:44] we want this to be B by
[32:47] um negative 1 by
[32:49] and basically here we want c times n
[32:52] that&#39;s how many consecutive elements we
[32:55] want
[32:56] and here instead of negative one I don&#39;t
[32:58] super love the use of negative one
[33:00] because I like to be very explicit so
[33:02] that you get error messages when things
[33:03] don&#39;t go according to your expectation
[33:04] so what do we expect here we expect this
[33:07] to become t
[33:09] divide n using integer division here
[33:12] so that&#39;s what I expect to happen
[33:14] and then one more thing I want to do
[33:15] here is remember previously all the way
[33:18] in the beginning n was three and uh
[33:21] basically we&#39;re concatenating
[33:23] um all the three characters that existed
[33:25] there
[33:26] so we basically are concatenated
[33:28] everything
[33:29] and so sometimes I can create a spurious
[33:31] dimension of one here so if it is the
[33:34] case that x dot shape at one is one then
[33:37] it&#39;s kind of like a spurious dimension
[33:39] um so we don&#39;t want to return a
[33:41] three-dimensional tensor with a one here
[33:44] we just want to return a two-dimensional
[33:46] tensor exactly as we did before
[33:48] so in this case basically we will just
[33:50] say x equals x dot squeeze that is a
[33:54] pytorch function
[33:56] and squeeze takes a dimension that it
[34:01] either squeezes out all the dimensions
[34:02] of a tensor that are one or you can
[34:05] specify the exact Dimension that you
[34:08] want to be squeezed and again I like to
[34:10] be as explicit as possible always so I
[34:12] expect to squeeze out the First
[34:13] Dimension only
[34:15] of this tensor
[34:17] this three-dimensional tensor and if
[34:19] this Dimension here is one then I just
[34:21] want to return B by c times n
[34:24] and so self dot out will be X and then
[34:26] we return salt dot out
[34:28] so that&#39;s the candidate implementation
[34:30] and of course this should be self.n
[34:33] instead of just n
[34:34] so let&#39;s run
[34:36] and let&#39;s come here now
[34:39] and take it for a spin so flatten
[34:41] consecutive
[34:44] and in the beginning let&#39;s just use
[34:47] eight so this should recover the
[34:49] previous Behavior so flagging
[34:51] consecutive of eight uh which is the
[34:53] current block size
[34:55] we can do this uh that should recover
[34:57] the previous Behavior
[34:59] so we should be able to run the model
[35:02] and here we can inspect I have a little
[35:06] code snippet here where I iterate over
[35:08] all the layers I print the name of this
[35:11] class and the shape
[35:14] and so we see the shapes as we expect
[35:17] them after every single layer in the top
[35:19] bit so now let&#39;s try to restructure it
[35:22] using our flattened consecutive and do
[35:25] it hierarchically so in particular
[35:28] we want to flatten consecutive not just
[35:30] not block size but just two
[35:33] and then we want to process this with
[35:34] linear now then the number of inputs to
[35:37] this linear will not be an embed times
[35:38] block size it will now only be n embed
[35:41] times two
[35:42] 20.
[35:44] this goes through the first layer and
[35:46] now we can in principle just copy paste
[35:48] this
[35:49] now the next linear layer should expect
[35:51] and hidden times two
[35:53] and the last piece of it should expect
[35:58] and it enters 2 again
[36:01] so this is sort of like the naive
[36:03] version of it
[36:04] um
[36:05] so running this we now have a much much
[36:07] bigger model
[36:09] and we should be able to basically just
[36:10] forward the model
[36:13] and now we can inspect uh the numbers in
[36:16] between
[36:17] so four byte by 20
[36:19] was Platinum consecutively into four by
[36:21] four by Twenty
[36:23] this was projected into four by four by
[36:24] two hundred
[36:26] and then bash storm just worked out of
[36:29] the box we have to verify that bastron
[36:31] does the correct thing even though it
[36:33] takes a three-dimensional impedance that
[36:34] are two dimensional input
[36:36] then we have 10h which is element wise
[36:38] then we crushed it again so if we
[36:41] flatten consecutively and ended up with
[36:42] a four by two by 400 now
[36:45] then linear brought it back down to 200
[36:47] batch room 10h and lastly we get a 4 by
[36:50] 400 and we see that the flattened
[36:52] consecutive for the last flatten here uh
[36:54] it squeezed out that dimension of one so
[36:57] we only ended up with four by four
[36:58] hundred and then linear Bachelor on 10h
[37:00] and uh the last linear layer to get our
[37:04] logents and so The Lodges end up in the
[37:06] same shape as they were before but now
[37:08] we actually have a nice three layer
[37:10] neural nut and it basically corresponds
[37:12] to whoops sorry it basically corresponds
[37:15] exactly to this network now except only
[37:18] this piece here because we only have
[37:20] three layers whereas here in this
[37:22] example there&#39;s uh four layers with the
[37:25] total receptive field size of 16
[37:28] characters instead of just eight
[37:29] characters so the block size here is 16.
[37:32] so this piece of it&#39;s basically
[37:34] implemented here
[37:36] um now we just have to kind of figure
[37:38] out some good Channel numbers to use
[37:40] here now in particular I changed the
[37:42] number of hidden units to be 68 in this
[37:45] architecture because when I use 68 the
[37:47] number of parameters comes out to be 22
[37:49] 000 so that&#39;s exactly the same that we
[37:52] had before and we have the same amount
[37:54] of capacity at this neural net in terms
[37:56] of the number of parameters but the
[37:57] question is whether we are utilizing
[37:59] those parameters in a more efficient
[38:00] architecture so what I did then is I got
[38:03] rid of a lot of the debugging cells here
[38:05] and I rerun the optimization and
[38:07] scrolling down to the result we see that
[38:09] we get the identical performance roughly
[38:12] so our validation loss now is 2.029 and
[38:15] previously it was 2.027 so controlling
[38:18] for the number of parameters changing
[38:20] from the flat to hierarchical is not
[38:21] giving us anything yet
[38:23] that said there are two things
[38:25] um to point out number one we didn&#39;t
[38:27] really torture the um architecture here
[38:29] very much this is just my first guess
[38:31] and there&#39;s a bunch of hyper parameters
[38:33] search that we could do in order in
[38:35] terms of how we allocate uh our budget
[38:37] of parameters to what layers number two
[38:39] we still may have a bug inside the
[38:42] bachelor 1D layer so let&#39;s take a look
[38:44] at
[38:45] um uh that because it runs but does it
[38:49] do the right thing
[38:50] so I pulled up the layer inspector sort
[38:53] of that we have here and printed out the
[38:55] shape along the way and currently it
[38:57] looks like the batch form is receiving
[38:58] an input that is 32 by 4 by 68 right and
[39:03] here on the right I have the current
[39:04] implementation of Bachelor that we have
[39:05] right now
[39:06] now this bachelor assumed in the way we
[39:09] wrote it and at the time that X is
[39:11] two-dimensional so it was n by D where n
[39:15] was the batch size so that&#39;s why we only
[39:17] reduced uh the mean and the variance
[39:19] over the zeroth dimension but now X will
[39:21] basically become three-dimensional so
[39:23] what&#39;s happening inside the bachelor
[39:24] right now and how come it&#39;s working at
[39:26] all and not giving any errors the reason
[39:28] for that is basically because everything
[39:30] broadcasts properly but the bachelor is
[39:32] not doing what we need what we wanted to
[39:34] do
[39:35] so in particular let&#39;s basically think
[39:37] through what&#39;s happening inside the
[39:38] bathroom uh looking at what&#39;s what&#39;s do
[39:41] What&#39;s Happening Here
[39:43] I have the code here
[39:45] so we&#39;re receiving an input of 32 by 4
[39:47] by 68 and then we are doing uh here x
[39:52] dot mean here I have e instead of X but
[39:54] we&#39;re doing the mean over zero and
[39:57] that&#39;s actually giving us 1 by 4 by 68.
[39:59] so we&#39;re doing the mean only over the
[40:01] very first Dimension and it&#39;s giving us
[40:03] a mean and a variance that still
[40:05] maintain this Dimension here
[40:07] so these means are only taking over 32
[40:10] numbers in the First Dimension and then
[40:12] when we perform this everything
[40:14] broadcasts correctly still
[40:16] but basically what ends up happening is
[40:20] when we also look at the running mean
[40:26] the shape of it so I&#39;m looking at the
[40:27] model that layers at three which is the
[40:28] first bathroom layer and they&#39;re looking
[40:30] at whatever the running mean became and
[40:32] its shape
[40:34] the shape of this running mean now is 1
[40:35] by 4 by 68.
[40:38] right instead of it being
[40:39] um you know just a size of dimension
[40:43] because we have 68 channels we expect to
[40:45] have 68 means and variances that we&#39;re
[40:47] maintaining but actually we have an
[40:49] array of 4 by 68 and so basically what
[40:51] this is telling us is this bash Norm is
[40:54] only
[40:55] this bachelor is currently working in
[40:57] parallel
[40:58] over
[41:01] 4 times 68 instead of just 68 channels
[41:06] so basically we are maintaining
[41:08] statistics for every one of these four
[41:10] positions individually and independently
[41:13] and instead what we want to do is we
[41:15] want to treat this four as a batch
[41:16] Dimension just like the zeroth dimension
[41:19] so as far as the bachelor is concerned
[41:22] it doesn&#39;t want to average we don&#39;t want
[41:24] to average over 32 numbers we want to
[41:26] now average over 32 times four numbers
[41:29] for every single one of these 68
[41:31] channels
[41:32] and uh so let me now
[41:34] remove this
[41:36] it turns out that when you look at the
[41:38] documentation of torch.mean
[41:42] so let&#39;s go to torch.me
[41:49] in one of its signatures when we specify
[41:51] the dimension
[41:53] we see that the dimension here is not
[41:54] just it can be in or it can also be a
[41:56] tuple of ins so we can reduce over
[41:59] multiple integers at the same time over
[42:02] multiple Dimensions at the same time so
[42:04] instead of just reducing over zero we
[42:05] can pass in a tuple 0 1.
[42:08] and here zero one as well and then
[42:10] what&#39;s going to happen is the output of
[42:12] course is going to be the same
[42:13] but now what&#39;s going to happen is
[42:15] because we reduce over 0 and 1 if we
[42:17] look at immin.shape
[42:20] we see that now we&#39;ve reduced we took
[42:22] the mean over both the zeroth and the
[42:25] First Dimension
[42:26] so we&#39;re just getting 68 numbers and a
[42:28] bunch of spurious Dimensions here
[42:30] so now this becomes 1 by 1 by 68 and the
[42:34] running mean and the running variance
[42:35] analogously will become one by one by
[42:37] 68. so even though there are the
[42:39] spurious Dimensions uh the current the
[42:41] current the correct thing will happen in
[42:43] that we are only maintaining means and
[42:45] variances for 64 sorry for 68 channels
[42:49] and we&#39;re not calculating the mean
[42:50] variance across 32 times 4 dimensions so
[42:54] that&#39;s exactly what we want and let&#39;s
[42:56] change the implementation of bash term
[42:58] 1D that we have so that it can take in
[43:01] two-dimensional or three-dimensional
[43:02] inputs and perform accordingly so at the
[43:05] end of the day the fix is relatively
[43:07] straightforward basically the dimension
[43:09] we want to reduce over is either 0 or
[43:12] the Tuple zero and one depending on the
[43:14] dimensionality of X so if x dot and dim
[43:16] is two so it&#39;s a two dimensional tensor
[43:18] then Dimension we want to reduce over is
[43:20] just the integer zero
[43:22] L if x dot ending is three so it&#39;s a
[43:24] three-dimensional tensor then the dims
[43:26] we&#39;re going to assume are zero and one
[43:29] that we want to reduce over and then
[43:31] here we just pass in dim
[43:33] and if the dimensionality of X is
[43:35] anything else we&#39;ll now get an error
[43:36] which is good
[43:38] um so that should be the fix now I want
[43:41] to point out one more thing we&#39;re
[43:42] actually departing from the API of Pi
[43:44] torch here a little bit because when you
[43:46] come to batch room 1D and pytorch you
[43:48] can scroll down and you can see that the
[43:50] input to this layer can either be n by C
[43:53] where n is the batch size and C is the
[43:55] number of features or channels or it
[43:57] actually does accept three-dimensional
[43:59] inputs but it expects it to be n by C by
[44:01] L
[44:02] where LSA like the sequence length or
[44:04] something like that
[44:05] so um
[44:07] this is problem because you see how C is
[44:09] nested here in the middle and so when it
[44:12] gets three-dimensional inputs this bash
[44:14] term layer will reduce over zero and two
[44:17] instead of zero and one so it basically
[44:20] Pi torch batch number one D layer
[44:22] assumes that c will always be the First
[44:25] Dimension whereas we&#39;ll we assume here
[44:28] that c is the last Dimension and there
[44:30] are some number of batch Dimensions
[44:32] beforehand
[44:34] um
[44:34] and so
[44:36] it expects n by C or M by C by all we
[44:39] expect and by C or n by L by C
[44:42] and so it&#39;s a deviation
[44:45] um
[44:46] I think it&#39;s okay I prefer it this way
[44:49] honestly so this is the way that we will
[44:50] keep it for our purposes
[44:52] so I redefined the layers re-initialize
[44:54] the neural net and did a single forward
[44:55] pass with a break just for one step
[44:57] looking at the shapes along the way
[44:59] they&#39;re of course identical all the
[45:01] shapes are the same but the way we see
[45:03] that things are actually working as we
[45:05] want them to now is that when we look at
[45:07] the bathroom layer the running mean
[45:08] shape is now one by one by 68. so we&#39;re
[45:11] only maintaining 68 means for every one
[45:13] of our channels and we&#39;re treating both
[45:15] the zeroth and the First Dimension as a
[45:17] batch Dimension which is exactly what we
[45:19] want so let me retrain the neural lot
[45:21] now okay so I retrained the neural net
[45:22] with the bug fix we get a nice curve and
[45:25] when we look at the validation
[45:25] performance we do actually see a slight
[45:27] Improvement so we went from 2.029 to
[45:30] 2.022 so basically the bug inside the
[45:32] bathroom was holding up us back like a
[45:35] little bit it looks like and we are
[45:37] getting a tiny Improvement now but it&#39;s
[45:39] not clear if this is statistical
[45:40] significant
[45:41] um
[45:42] and the reason we slightly expect an
[45:44] improvement is because we&#39;re not
[45:46] maintaining so many different means and
[45:47] variances that are only estimated using
[45:49] using 32 numbers effectively now we are
[45:52] estimating them using 32 times 4 numbers
[45:54] so you just have a lot more numbers that
[45:56] go into any one estimate of the mean and
[45:58] variance and it allows things to be a
[46:01] bit more stable and less Wiggly inside
[46:03] those estimates of those statistics so
[46:07] pretty nice with this more General
[46:08] architecture in place we are now set up
[46:10] to push the performance further by
[46:12] increasing the size of the network so
[46:14] for example I bumped up the number of
[46:16] embeddings to 24 instead of 10 and also
[46:19] increased number of hidden units but
[46:21] using the exact same architecture we now
[46:23] have 76 000 parameters and the training
[46:25] takes a lot longer but we do get a nice
[46:28] curve and then when you actually
[46:29] evaluate the performance we are now
[46:31] getting validation performance of 1.993
[46:33] so we&#39;ve crossed over the 2.0 sort of
[46:36] territory and right about 1.99 but we
[46:39] are starting to have to wait quite a bit
[46:42] longer and we&#39;re a little bit in the
[46:44] dark with respect to the correct setting
[46:46] of the hyper parameters here and the
[46:47] learning rates and so on because the
[46:48] experiments are starting to take longer
[46:50] to train and so we are missing sort of
[46:52] like an experimental harness on which we
[46:54] could run a number of experiments and
[46:56] really tune this architecture very well
[46:58] so I&#39;d like to conclude now with a few
[46:59] notes we basically improved our
[47:02] performance from a starting of 2.1 down
[47:04] to 1.9 but I don&#39;t want that to be the
[47:06] focus because honestly we&#39;re kind of in
[47:08] the dark we have no experimental harness
[47:10] we&#39;re just guessing and checking and
[47:12] this whole thing is terrible we&#39;re just
[47:13] looking at the training loss normally
[47:15] you want to look at both the training
[47:17] and the validation loss together and the
[47:19] whole thing looks different if you&#39;re
[47:20] actually trying to squeeze out numbers
[47:23] that said we did implement this
[47:25] architecture from the wavenet paper but
[47:28] we did not implement this specific uh
[47:31] forward pass of it where you have a more
[47:33] complicated a linear layer sort of that
[47:35] is this gated linear layer kind of and
[47:38] there&#39;s residual connections and Skip
[47:40] connections and so on so we did not
[47:42] Implement that we just implemented this
[47:44] structure I would like to briefly hint
[47:46] or preview how what we&#39;ve done here
[47:48] relates to convolutional neural networks
[47:50] as used in the wavenet paper and
[47:52] basically the use of convolutions is
[47:54] strictly for efficiency it doesn&#39;t
[47:56] actually change the model we&#39;ve
[47:57] implemented
[47:58] so here for example
[48:00] let me look at a specific name to work
[48:02] with an example so there&#39;s a name in our
[48:05] training set and it&#39;s DeAndre and it has
[48:08] seven letters so that is eight
[48:10] independent examples in our model so all
[48:12] these rows here are independent examples
[48:14] of the Android
[48:16] now you can forward of course any one of
[48:18] these rows independently so I can take
[48:20] my model and call call it on any
[48:24] individual index notice by the way here
[48:26] I&#39;m being a little bit tricky
[48:28] the reason for this is that extra at
[48:30] seven that shape is just
[48:33] um one dimensional array of eight so you
[48:36] can&#39;t actually call the model on it
[48:37] you&#39;re going to get an error because
[48:39] there&#39;s no batch dimension
[48:41] so when you do extra at
[48:45] a list of seven then the shape of this
[48:47] becomes one by eight so I get an extra
[48:49] batch dimension of one and then we can
[48:52] forward the model
[48:53] so
[48:55] that forwards a single example and you
[48:57] might imagine that you actually may want
[48:59] to forward all of these eight
[49:01] um at the same time
[49:03] so pre-allocating some memory and then
[49:05] doing a for Loop eight times and
[49:07] forwarding all of those eight here will
[49:10] give us all the logits in all these
[49:11] different cases
[49:13] now for us with the model as we&#39;ve
[49:14] implemented it right now this is eight
[49:16] independent calls to our model
[49:18] but what convolutions allow you to do is
[49:20] it allow you to basically slide this
[49:22] model efficiently over the input
[49:24] sequence and so this for Loop can be
[49:27] done not outside in Python but inside of
[49:31] kernels in Cuda and so this for Loop
[49:33] gets hidden into the convolution
[49:35] so the convolution basically you can
[49:37] cover this it&#39;s a for Loop applying a
[49:40] little linear filter over space of some
[49:43] input sequence and in our case the space
[49:45] we&#39;re interested in is one dimensional
[49:46] and we&#39;re interested in sliding these
[49:48] filters over the input data
[49:51] so this diagram actually is fairly good
[49:54] as well
[49:55] basically what we&#39;ve done is here they
[49:57] are highlighting in Black one individ
[49:59] one single sort of like tree of this
[50:01] calculation so just calculating the
[50:03] single output example here
[50:06] um
[50:07] and so this is basically what we&#39;ve
[50:08] implemented here we&#39;ve implemented a
[50:10] single this black structure we&#39;ve
[50:13] implemented that and calculated a single
[50:15] output like a single example
[50:17] but what collusions allow you to do is
[50:19] it allows you to take this black
[50:20] structure and kind of like slide it over
[50:23] the input sequence here and calculate
[50:26] all of these orange outputs at the same
[50:29] time or here that corresponds to
[50:31] calculating all of these outputs of
[50:34] um at all the positions of DeAndre at
[50:37] the same time
[50:38] and the reason that this is much more
[50:41] efficient is because number one as I
[50:43] mentioned the for Loop is inside the
[50:45] Cuda kernels in the sliding so that
[50:48] makes it efficient but number two notice
[50:50] the variable reuse here for example if
[50:52] we look at this circle this node here
[50:54] this node here is the right child of
[50:56] this node but is also the left child of
[50:59] the node here
[51:01] and so basically this node and its value
[51:03] is used twice
[51:05] and so right now in this naive way we&#39;d
[51:08] have to recalculate it but here we are
[51:11] allowed to reuse it
[51:12] so in the convolutional neural network
[51:14] you think of these linear layers that we
[51:16] have up above as filters and we take
[51:19] these filters and they&#39;re linear filters
[51:21] and you slide them over input sequence
[51:23] and we calculate the first layer and
[51:25] then the second layer and then the third
[51:26] layer and then the output layer of the
[51:28] sandwich and it&#39;s all done very
[51:30] efficiently using these convolutions
[51:32] so we&#39;re going to cover that in a future
[51:34] video the second thing I hope you took
[51:35] away from this video is you&#39;ve seen me
[51:37] basically Implement all of these layer
[51:40] Lego building blocks or module building
[51:42] blocks and I&#39;m implementing them over
[51:45] here and we&#39;ve implemented a number of
[51:46] layers together and we&#39;ve also
[51:48] implemented these these containers and
[51:51] we&#39;ve overall pytorchified our code
[51:53] quite a bit more
[51:54] now basically what we&#39;re doing here is
[51:56] we&#39;re re-implementing torch.nn which is
[51:59] the neural networks library on top of
[52:02] torch.tensor and it looks very much like
[52:04] this except it is much better because
[52:07] because it&#39;s in pi torch instead of
[52:08] jingling my Jupiter notebook so I think
[52:11] going forward I will probably have
[52:13] considered us having unlocked
[52:15] um torch.nn we understand roughly what&#39;s
[52:18] in there how these modules work how
[52:19] they&#39;re nested and what they&#39;re doing on
[52:21] top of torture tensor so hopefully we&#39;ll
[52:24] just uh we&#39;ll just switch over and
[52:25] continue and start using torch.net
[52:27] directly the next thing I hope you got a
[52:29] bit of a sense of is what the
[52:31] development process of building deep
[52:33] neural networks looks like which I think
[52:35] was relatively representative to some
[52:36] extent so number one we are spending a
[52:39] lot of time in the documentation page of
[52:41] pytorch and we&#39;re reading through all
[52:44] the layers looking at documentations
[52:45] where the shapes of the inputs what can
[52:48] they be what does the layer do and so on
[52:51] unfortunately I have to say the
[52:53] patreon&#39;s documentation is not are very
[52:55] good they spend a ton of time on
[52:57] Hardcore engineering of all kinds of
[52:59] distributed Primitives Etc but as far as
[53:01] I can tell no one is maintaining any
[53:03] documentation it will lie to you it will
[53:06] be wrong it will be incomplete it will
[53:08] be unclear so unfortunately it is what
[53:12] it is and you just kind of do your best
[53:14] um with what they&#39;ve given us
[53:18] um number two
[53:20] uh the other thing that I hope you got a
[53:22] sense of is there&#39;s a ton of trying to
[53:24] make the shapes work and there&#39;s a lot
[53:26] of gymnastics around these
[53:27] multi-dimensional arrays and are they
[53:29] two-dimensional three-dimensional
[53:30] four-dimensional uh what layers take
[53:32] what shapes is it NCL or NLC and you&#39;re
[53:36] promoting and viewing and it just can
[53:39] get pretty messy and so that brings me
[53:40] to number three I very often prototype
[53:43] these layers and implementations in
[53:44] jupyter notebooks and make sure that all
[53:46] the shapes work out and I&#39;m spending a
[53:48] lot of time basically babysitting the
[53:50] shapes and making sure everything is
[53:52] correct and then once I&#39;m satisfied with
[53:54] the functionality in the Jupiter
[53:55] notebook I will take that code and copy
[53:57] paste it into my repository of actual
[53:59] code that I&#39;m training with and so then
[54:02] I&#39;m working with vs code on the side so
[54:04] I usually have jupyter notebook and vs
[54:06] code I develop in Jupiter notebook I
[54:07] paste into vs code and then I kick off
[54:09] experiments from from the reaper of
[54:11] course from the code repository so
[54:14] that&#39;s roughly some notes on the
[54:16] development process of working with
[54:17] neurons lastly I think this lecture
[54:19] unlocks a lot of potential further
[54:21] lectures because number one we have to
[54:23] convert our neural network to actually
[54:25] use these dilated causal convolutional
[54:27] layers so implementing the comnet number
[54:30] two potentially starting to get into
[54:32] what this means whatever residual
[54:34] connections and Skip connections and why
[54:36] are they useful
[54:37] number three we as I mentioned we don&#39;t
[54:40] have any experimental harness so right
[54:42] now I&#39;m just guessing checking
[54:44] everything this is not representative of
[54:45] typical deep learning workflows you have
[54:47] to set up your evaluation harness you
[54:49] can kick off experiments you have lots
[54:51] of arguments that your script can take
[54:53] you&#39;re you&#39;re kicking off a lot of
[54:54] experimentation you&#39;re looking at a lot
[54:56] of plots of training and validation
[54:57] losses and you&#39;re looking at what is
[54:59] working and what is not working and
[55:01] you&#39;re working on this like population
[55:02] level and you&#39;re doing all these hyper
[55:04] parameter searches and so we&#39;ve done
[55:06] none of that so far so how to set that
[55:09] up and how to make it good I think as a
[55:11] whole another topic number three we
[55:14] should probably cover recurring neural
[55:16] networks RNs lstm&#39;s grooves and of
[55:19] course Transformers so many uh places to
[55:22] go and we&#39;ll cover that in the future
[55:24] for now bye sorry I forgot to say that
[55:27] if you are interested I think it is kind
[55:30] of interesting to try to beat this
[55:31] number 1.993 because I really haven&#39;t
[55:34] tried a lot of experimentation here and
[55:36] there&#39;s quite a bit of fruit potentially
[55:37] to still purchase further so I haven&#39;t
[55:40] tried any other ways of allocating these
[55:42] channels in this neural net maybe the
[55:44] number of dimensions for the embedding
[55:47] is all wrong maybe it&#39;s possible to
[55:49] actually take the original network with
[55:50] just one hidden layer and make it big
[55:53] enough and actually beat my fancy
[55:54] hierarchical Network it&#39;s not obvious
[55:56] that would be kind of embarrassing if
[55:59] this did not do better even once you
[56:01] torture it a little bit maybe you can
[56:03] read the weight net paper and try to
[56:04] figure out how some of these layers work
[56:06] and Implement them yourselves using what
[56:07] we have
[56:08] and of course you can always tune some
[56:10] of the initialization or some of the
[56:12] optimization and see if you can improve
[56:15] it that way so I&#39;d be curious if people
[56:16] can come up with some ways to beat this
[56:18] and yeah that&#39;s it for now bye
