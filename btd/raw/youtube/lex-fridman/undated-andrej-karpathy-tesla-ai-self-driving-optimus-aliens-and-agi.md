---
title: "Andrej Karpathy - Tesla AI Self-Driving Optimus Aliens and AGI"
creator: lex-fridman
platform: youtube
url: https://www.youtube.com/watch?v=cdiD-9MMpb0
---

# Andrej Karpathy - Tesla AI Self-Driving Optimus Aliens and AGI

[0:00] think it&#39;s possible that physics has
[0:00] exploits and we should be trying to find
[0:00] them arranging some kind of a crazy
[0:00] quantum mechanical system that somehow
[0:00] gives you buffer overflow somehow gives
[0:00] you a rounding error in the floating
[0:00] Point synthetic intelligences are kind
[0:00] of like the next stage of development
[0:00] and I don&#39;t know where it leads to like
[0:00] at some point I suspect
[0:00] the universe is some kind of a puzzle
[0:00] these synthetic AIS will uncover that
[0:00] puzzle and
[0:00] solve it
[0:00] the following is a conversation with
[0:00] Andre capothy previously the director of
[0:00] AI at Tesla and before that at open Ai
[0:00] and Stanford he is one of the greatest
[0:00] scientists engineers and Educators in
[0:00] the history of artificial intelligence
[0:00] this is the Lex Friedman podcast to
[0:00] support it please check out our sponsors
[0:00] and now dear friends here&#39;s Andre
[0:00] capathi
[0:00] what is a neural network and why does it
[0:00] seem to uh do such a surprisingly good
[0:00] job of learning what is a neural network
[0:00] it&#39;s a mathematical abstraction of
[0:00] the brain I would say that&#39;s how it was
[0:00] originally developed
[0:00] at the end of the day it&#39;s a
[0:00] mathematical expression and it&#39;s a
[0:00] fairly simple mathematical expression
[0:00] when you get down to it it&#39;s basically a
[0:00] sequence of Matrix multiplies which are
[0:00] really dot products mathematically and
[0:00] some nonlinearities thrown in and so
[0:00] it&#39;s a very simple mathematical
[0:00] expression and it&#39;s got knobs in it many
[0:00] knobs many knobs and these knobs are
[0:00] Loosely related to basically the
[0:00] synapses in your brain they&#39;re trainable
[0:00] they&#39;re modifiable and so the idea is
[0:00] like we need to find the setting of The
[0:00] Knobs that makes the neural nut do
[0:00] whatever you want it to do like classify
[0:00] images and so on and so there&#39;s not too
[0:00] much mystery I would say in it like
[0:00] um you might think that basically don&#39;t
[0:00] want to endow it with too much meaning
[0:00] with respect to the brain and how it
[0:00] works it&#39;s really just a complicated
[0:00] mathematical expression with knobs and
[0:00] those knobs need a proper setting for it
[0:00] to do something uh desirable yeah but
[0:00] poetry is just the collection of letters
[0:00] with spaces but it can make us feel a
[0:00] certain way and in that same way when
[0:00] you get a large number of knobs together
[0:00] whether it&#39;s in a inside the brain or
[0:00] inside a computer they seem to they seem
[0:00] to surprise us with the with their power
[0:00] yeah I think that&#39;s fair so basically
[0:00] I&#39;m underselling it by a lot because you
[0:00] definitely do get very surprising
[0:00] emergent behaviors out of these neurons
[0:00] when they&#39;re large enough and trained on
[0:00] complicated enough problems like say for
[0:00] example the next uh word prediction in a
[0:00] massive data set from the internet and
[0:00] then these neurons take on a pretty
[0:00] surprising magical properties yeah I
[0:00] think it&#39;s kind of interesting how much
[0:00] you can get out of even very simple
[0:00] mathematical formalism when your brain
[0:00] right now I was talking is it doing next
[0:00] word prediction
[0:00] or is it doing something more
[0:00] interesting well definitely some kind of
[0:00] a generative model that&#39;s a gpt-like and
[0:00] prompted by you
[0:00] um yeah so you&#39;re giving me a prompt and
[0:00] I&#39;m kind of like responding to it in a
[0:00] generative way and by yourself perhaps a
[0:00] little bit like are you adding extra
[0:00] prompts from your own memory inside your
[0:00] head
[0:00] automatically feels like you&#39;re
[0:00] referencing some kind of a declarative
[0:00] structure of like memory and so on and
[0:00] then uh you&#39;re putting that together
[0:00] with your prompt and giving away some
[0:00] messages like how much of what you just
[0:00] said has been said by you before
[0:00] uh nothing basically right no but if you
[0:00] actually look at all the words you&#39;ve
[0:00] ever said in your life and you do a
[0:00] search you&#39;ll probably said a lot of the
[0:00] same words in the same order before yeah
[0:00] it could be I mean I&#39;m using phrases
[0:00] that are common Etc but I&#39;m remixing it
[0:00] into a pretty uh sort of unique sentence
[0:00] at the end of the day but you&#39;re right
[0:00] definitely there&#39;s like a ton of
[0:00] remixing what you didn&#39;t you it&#39;s like
[0:00] Magnus Carlsen said uh I&#39;m I&#39;m rated
[0:00] 2900 whatever which is pretty decent I
[0:00] think you&#39;re talking very uh you&#39;re not
[0:00] giving enough credit to neural Nets here
[0:00] why do they seem to
[0:00] what&#39;s your best intuition
[0:00] about this emergent Behavior I mean it&#39;s
[0:00] kind of interesting because I&#39;m
[0:00] simultaneously underselling them but I
[0:00] also feel like there&#39;s an element to
[0:00] which I&#39;m over like it&#39;s actually kind
[0:00] of incredible that you can get so much
[0:00] emergent magical Behavior out of them
[0:00] despite them being so simple
[0:00] mathematically so I think those are kind
[0:00] of like two surprising statements that
[0:00] are kind of just juxtapose together
[0:00] and I think basically what it is is we
[0:00] are actually fairly good at optimizing
[0:00] these neural Nets and when you give them
[0:00] a hard enough problem they are forced to
[0:00] learn very interesting Solutions in the
[0:00] optimization and those solution
[0:00] basically have these immersion
[0:00] properties that are very interesting
[0:00] there&#39;s wisdom and knowledge
[0:00] in the knobs
[0:00] and so what&#39;s this representation that&#39;s
[0:00] in the knobs does it make sense to you
[0:00] intuitively the large number of knobs
[0:00] can hold the representation that
[0:00] captures some deep wisdom about the data
[0:00] it has looked at
[0:00] it&#39;s a lot of knobs it&#39;s a lot of knobs
[0:00] and somehow you know so speaking
[0:00] concretely
[0:00] um one of the neural Nets that people
[0:00] are very excited about right now are are
[0:00] gpts which are basically just next word
[0:00] prediction networks so you consume a
[0:00] sequence of words from the internet and
[0:00] you try to predict the next word and uh
[0:00] once you train these on a large enough
[0:00] data set
[0:00] um they you can basically uh prompt
[0:00] these neural amounts in arbitrary ways
[0:00] and you can ask them to solve problems
[0:00] and they will so you can just tell them
[0:00] you can you can make it look like you&#39;re
[0:00] trying to um
[0:00] solve some kind of a mathematical
[0:00] problem and they will continue what they
[0:00] think is the solution based on what
[0:00] they&#39;ve seen on the internet and very
[0:00] often those Solutions look very
[0:00] remarkably consistent look correct
[0:00] potentially
[0:00] do you still think about the brain side
[0:00] of it so as neural Nets is an
[0:00] abstraction or mathematical abstraction
[0:00] of the brain you still draw wisdom
[0:00] from from the biological neural networks
[0:00] or even the bigger question so you&#39;re a
[0:00] big fan of biology and biological
[0:00] computation
[0:00] what impressive thing is biology do
[0:00] doing to you that computers are not yet
[0:00] that Gap I would say I&#39;m definitely on
[0:00] I&#39;m much more hesitant with the
[0:00] analogies to the brain than I think you
[0:00] would see potentially in the field
[0:00] um and I kind of feel like
[0:00] certainly the way neural network started
[0:00] is everything stemmed from inspiration
[0:00] by the brain but at the end of the day
[0:00] the artifacts that you get after
[0:00] training they are arrived at by a very
[0:00] different optimization process than the
[0:00] optimization process that gave rise to
[0:00] the brain and so I think uh
[0:00] I kind of think of it as a very
[0:00] complicated alien artifact
[0:00] um it&#39;s something different I&#39;m not
[0:00] sorry the uh the neuralness that we&#39;re
[0:00] training okay they are complicated uh
[0:00] Alien artifact uh I do not make
[0:00] analogies to the brain because I think
[0:00] the optimization process that gave rise
[0:00] to it is very different from the brain
[0:00] so there was no multi-agent self-play
[0:00] kind of uh setup uh and evolution it was
[0:00] an optimization that is basically a what
[0:00] amounts to a compression objective on a
[0:00] massive amount of data okay so
[0:00] artificial neural networks are doing
[0:00] compression
[0:00] and biological neural networks
[0:00] are not to survive and they&#39;re not
[0:00] really doing any they&#39;re they&#39;re an
[0:00] agent in a multi-agent self-place system
[0:00] that&#39;s been running for a very very long
[0:00] time that said Evolution has found that
[0:00] it is very useful to to predict and have
[0:00] a predictive model in the brain and so I
[0:00] think our brain utilizes something that
[0:00] looks like that as a part of it but it
[0:00] has a lot more you know gadgets and
[0:00] gizmos and uh value functions and
[0:00] ancient nuclei that are all trying to
[0:00] like make a survive and reproduce and
[0:00] everything else and the whole thing
[0:00] through embryogenesis is built from a
[0:00] single cell I mean it&#39;s just the code is
[0:00] inside the DNA and it just builds it up
[0:00] like the entire organism
[0:00] yes and like it does it pretty well
[0:00] it should not be possible so there&#39;s
[0:00] some learning going on there&#39;s some
[0:00] there&#39;s some there&#39;s some kind of
[0:00] computation going through that building
[0:00] process I mean I I don&#39;t know where
[0:00] if you were just to look at the entirety
[0:00] of history of life on Earth
[0:00] where do you think is the most
[0:00] interesting invention is it the origin
[0:00] of life itself
[0:00] is it just jumping to eukaryotes is it
[0:00] mammals is it humans themselves Homo
[0:00] sapiens the the origin of intelligence
[0:00] or highly complex intelligence
[0:00] or or is it all just in continuation the
[0:00] same kind of process
[0:00] certainly I would say it&#39;s an extremely
[0:00] remarkable story that I&#39;m only like
[0:00] briefly learning about recently all the
[0:00] way from
[0:00] um actually like you almost have to
[0:00] start at the formation of Earth and all
[0:00] of its conditions and the entire solar
[0:00] system and how everything is arranged
[0:00] with Jupiter and Moon and the habitable
[0:00] zone and everything and then you have an
[0:00] active Earth
[0:00] that&#39;s turning over material
[0:00] and um and then you start with a
[0:00] biogenesis and everything and so it&#39;s
[0:00] all like a pretty remarkable story I&#39;m
[0:00] not sure that
[0:00] I can pick like a single Unique Piece of
[0:00] it that I find most interesting
[0:00] um
[0:00] I guess for me as an artificial
[0:00] intelligence researcher it&#39;s probably
[0:00] the last piece we have lots of animals
[0:00] that uh you know are are not building
[0:00] technological Society but we do and um
[0:00] it seems to have happened very quickly
[0:00] it seems to have happened very recently
[0:00] and uh
[0:00] something very interesting happened
[0:00] there that I don&#39;t fully understand I
[0:00] almost understand everything else kind
[0:00] of I think intuitively uh but I don&#39;t
[0:00] understand exactly that part and how
[0:00] quick it was both explanations would be
[0:00] interesting one is that this is just a
[0:00] continuation of the same kind of process
[0:00] there&#39;s nothing special about humans
[0:00] that would be deeply understanding that
[0:00] would be very interesting that we think
[0:00] of ourselves as special but it was
[0:00] obvious all it was already written in
[0:00] the in the code that you would have
[0:00] greater and greater intelligence
[0:00] emerging and then the other explanation
[0:00] which is something truly special
[0:00] happened something like a rare event
[0:00] whether it&#39;s like crazy rare event like
[0:00] uh Space Odyssey what would it be see if
[0:00] you say like the invention of Fire
[0:00] or
[0:00] the uh as Richard rangham says the beta
[0:00] males deciding a clever way to kill the
[0:00] alpha males by collaborating so just
[0:00] optimizing the collaborations really the
[0:00] multi-agent aspect of the multi-agent
[0:00] and that really being constrained on
[0:00] resources and trying to survive
[0:00] the collaboration aspect is what created
[0:00] the complex intelligence but it seems
[0:00] like it&#39;s a natural outgrowth of the
[0:00] evolution process like what could
[0:00] possibly be a magical thing that
[0:00] happened like a rare thing that would
[0:00] say that humans are actually human level
[0:00] intelligence is actually a really rare
[0:00] thing in the universe
[0:00] yeah I&#39;m hesitant to say that it is rare
[0:00] by the way but it definitely seems like
[0:00] it&#39;s kind of like a punctuated
[0:00] equilibrium where you have lots of
[0:00] exploration and then you have certain
[0:00] leaps sparse leaps in between so of
[0:00] course like origin of life would be one
[0:00] um you know DNA sex eukaryotic system
[0:00] eukaryotic life
[0:00] um the endosymbiosis event or the
[0:00] archaeon 8 little bacteria you know just
[0:00] the whole thing and then of course
[0:00] emergence of Consciousness and so on so
[0:00] it seems like definitely there are
[0:00] sparse events where mass amount of
[0:00] progress was made but yeah it&#39;s kind of
[0:00] hard to pick one so you don&#39;t think
[0:00] humans are unique gotta ask you how many
[0:00] intelligent aliens civilizations do you
[0:00] think are out there and uh is there
[0:00] intelligence
[0:00] different or similar to ours
[0:00] yeah I&#39;ve been preoccupied with this
[0:00] question quite a bit recently uh
[0:00] basically the for me Paradox and just
[0:00] thinking through and and the reason
[0:00] actually that I am very interested in uh
[0:00] the origin of life is fundamentally
[0:00] trying to understand how common it is
[0:00] that there are technological societies
[0:00] out there uh
[0:00] um in space and the more I study it the
[0:00] more I think that um
[0:00] uh there should be quite a few quite a
[0:00] lot why haven&#39;t we heard from them
[0:00] because I I agree with you it feels like
[0:00] I just don&#39;t see
[0:00] why what we did here on Earth is so
[0:00] difficult to do yeah and especially when
[0:00] you get into the details of it I used to
[0:00] think origin of life was very
[0:00] um
[0:00] it was this magical rare event but then
[0:00] you read books like for example McLean
[0:00] um uh the vital question a life
[0:00] ascending Etc and he really gets in and
[0:00] he really makes you believe that this is
[0:00] not that rare basic chemistry you have
[0:00] an active Earth and you have your
[0:00] alkaline Vents and you have lots of
[0:00] alkaline Waters mixing whether it&#39;s a
[0:00] devotion and you have your proton
[0:00] gradients and you have the little porous
[0:00] pockets of these alkaline vents that
[0:00] concentrate chemistry and um basically
[0:00] as he steps through all of these little
[0:00] pieces you start to understand that
[0:00] actually this is not that crazy you
[0:00] could see this happen on other systems
[0:00] um and he really takes you from just a
[0:00] geology to primitive life and he makes
[0:00] it feel like it&#39;s actually pretty
[0:00] plausible and also like the origin of
[0:00] life
[0:00] um didn&#39;t uh was actually fairly fast
[0:00] after formation of Earth
[0:00] um if I remember correctly just a few
[0:00] hundred million years or something like
[0:00] that after basically when it was
[0:00] possible life actually arose and so that
[0:00] makes me feel like that is not the
[0:00] constraint that is not the limiting
[0:00] variable and that life should actually
[0:00] be fairly common
[0:00] um and then it you know where the
[0:00] drop-offs are is very
[0:00] um is very interesting to think about I
[0:00] currently think that there&#39;s no major
[0:00] drop-offs basically and so there should
[0:00] be quite a lot of life and basically
[0:00] what it where that brings me to then is
[0:00] the only way to reconcile the fact that
[0:00] we haven&#39;t found anyone and so on is
[0:00] that um we just can&#39;t we can&#39;t see them
[0:00] we can&#39;t observe them just a quick brief
[0:00] comment Nick Lane and a lot of
[0:00] biologists I talked to they really seem
[0:00] to think that the jump from bacteria to
[0:00] more complex organisms is the hardest
[0:00] jump the eukaryotic glyphosis yeah which
[0:00] I don&#39;t I get it they&#39;re much more
[0:00] knowledgeable uh than me about like the
[0:00] intricacies of biology but that seems
[0:00] like crazy because how much how many
[0:00] single cell organisms are there like and
[0:00] how much time you have surely it&#39;s not
[0:00] that difficult like in a billion years
[0:00] it&#39;s not even that long
[0:00] of a time really just all these bacteria
[0:00] under constrained resources battling it
[0:00] out I&#39;m sure they can invent more
[0:00] complex again I don&#39;t understand it&#39;s
[0:00] like how to move from a hello world
[0:00] program to like like invent a function
[0:00] or something like that I don&#39;t yeah I I
[0:00] so I don&#39;t yeah so I&#39;m with you I just
[0:00] feel like I don&#39;t see any if the origin
[0:00] of life that would be my intuition
[0:00] that&#39;s the hardest thing but if that&#39;s
[0:00] not the hardest thing because it happens
[0:00] so quickly then it&#39;s got to be
[0:00] everywhere and yeah maybe we&#39;re just too
[0:00] dumb to see it well it&#39;s just we don&#39;t
[0:00] have really good mechanisms for seeing
[0:00] this life I mean uh by what
[0:00] how um so I&#39;m not an expert just to
[0:00] preface this but just said it was I want
[0:00] to meet an expert on alien intelligence
[0:00] and how to communicate I&#39;m very
[0:00] suspicious of our ability to to find
[0:00] these intelligences out there and to
[0:00] find these Earths like radio waves for
[0:00] example are are terrible uh their power
[0:00] drops off as basically one over R square
[0:00] uh so I remember reading that our
[0:00] current radio waves would not be uh the
[0:00] ones that we we are broadcasting would
[0:00] not be uh measurable by our devices
[0:00] today only like was it like one tenth of
[0:00] a light year away like not even
[0:00] basically tiny distance because you
[0:00] really need like a targeted transmission
[0:00] of massive power directed somewhere for
[0:00] this to be picked up on long distances
[0:00] and so I just think that our ability to
[0:00] measure is um is not amazing I think
[0:00] there&#39;s probably other civilizations out
[0:00] there and then the big question is why
[0:00] don&#39;t they build binomial probes and why
[0:00] don&#39;t they Interstellar travel across
[0:00] the entire galaxy and my current answer
[0:00] is it&#39;s probably Interstellar travel is
[0:00] like really hard uh you have the
[0:00] interstellar medium if you want to move
[0:00] at closer speed of light you&#39;re going to
[0:00] be encountering bullets along the way
[0:00] because even like tiny hydrogen atoms
[0:00] and little particles of dust are
[0:00] basically have like massive kinetic
[0:00] energy at those speeds and so basically
[0:00] you need some kind of shielding you need
[0:00] you have all the cosmic radiation uh
[0:00] it&#39;s just like brutal out there it&#39;s
[0:00] really hard and so my thinking is maybe
[0:00] Interstellar travel is just extremely
[0:00] hard
[0:00] to build hard
[0:00] it feels like uh it feels like we&#39;re not
[0:00] a billion years away from doing that it
[0:00] just might be that it&#39;s very you have to
[0:00] go very slowly potentially as an example
[0:00] through space
[0:00] um right as opposed to close the speed
[0:00] of light so I&#39;m suspicious basically of
[0:00] our ability to measure life and I&#39;m
[0:00] suspicious of the ability to um just
[0:01] permeate all of space in the Galaxy or
[0:01] across galaxies and that&#39;s the only way
[0:01] that I can certainly I can currently see
[0:01] a way around it yeah it&#39;s kind of
[0:01] mind-blowing to think that there&#39;s
[0:01] trillions of intelligent alien
[0:01] civilizations out there kind of slowly
[0:01] traveling through space
[0:01] to meet each other and some of them meet
[0:01] some of them go to war some of them
[0:01] collaborate or they&#39;re all just uh
[0:01] independent they are all just like
[0:01] little pockets I don&#39;t know well
[0:01] statistically if there&#39;s like
[0:01] if it&#39;s there&#39;s trillions of them surely
[0:01] some of them some of the pockets are
[0:01] close enough to get some of them happen
[0:01] to be close yeah in the close enough to
[0:01] see each other and then once you see
[0:01] once you see something that is
[0:01] definitely complex life like if we see
[0:01] something yeah we&#39;re probably going to
[0:01] be severe like intensely aggressively
[0:01] motivated to figure out what the hell
[0:01] that is and try to meet them what would
[0:01] be your first instinct to try to like at
[0:01] a generational level meet them or defend
[0:01] against them or what would be your uh
[0:01] Instinct as a president of the United
[0:01] States
[0:01] and the scientists
[0:01] I don&#39;t know which hat you prefer in
[0:01] this question
[0:01] yeah I think the the question it&#39;s
[0:01] really hard
[0:01] um
[0:01] I will say like for example for us
[0:01] um we have lots of primitive life forms
[0:01] on Earth
[0:01] um next to us we have all kinds of ants
[0:01] and everything else and we share space
[0:01] with them and we are hesitant to impact
[0:01] on them and to we are and we&#39;re trying
[0:01] to protect them by default because they
[0:01] are amazing interesting dynamical
[0:01] systems that took a long time to evolve
[0:01] and they are interesting and special and
[0:01] I don&#39;t know that you want to
[0:01] um destroy that by default and so I like
[0:01] complex dynamical systems that took a
[0:01] lot of time to evolve I think
[0:01] I&#39;d like to I like to preserve it if I
[0:01] can afford to and I&#39;d like to think that
[0:01] the same would be true about uh the
[0:01] galactic resources and that uh they
[0:01] would think that we&#39;re kind of
[0:01] incredible interesting story that took
[0:01] time it took a few billion years to
[0:01] unravel and you don&#39;t want to just
[0:01] destroy it I could see two aliens
[0:01] talking about Earth right now and saying
[0:01] uh I&#39;m I&#39;m a big fan of complex
[0:01] dynamical systems so I think it was a
[0:01] value to preserve these and who
[0:01] basically are a video game they watch or
[0:01] show a TV show that they watch
[0:01] yeah I think uh you would need like a
[0:01] very good reason I think to
[0:01] to destroy it uh like why don&#39;t we
[0:01] destroy these ant farms and so on it&#39;s
[0:01] because we&#39;re not actually like really
[0:01] in direct competition with them right
[0:01] now uh we do it accidentally and so on
[0:01] but
[0:01] um
[0:01] there&#39;s plenty of resources and so why
[0:01] would you destroy something that is so
[0:01] interesting and precious well from a
[0:01] scientific perspective you might probe
[0:01] it yeah you might interact with it later
[0:01] you might want to learn something from
[0:01] it right so I wonder there&#39;s could be
[0:01] certain physical phenomena that we think
[0:01] is a physical phenomena but it&#39;s
[0:01] actually interacting with us to like
[0:01] poke the finger and see what happens I
[0:01] think it should be very interesting to
[0:01] scientists other alien scientists what
[0:01] happened here
[0:01] um and you know it&#39;s a what we&#39;re seeing
[0:01] today is a snapshot basically it&#39;s a
[0:01] result of a huge amount of computation
[0:01] uh of over like billion years or
[0:01] something like that so it could have
[0:01] been initiated by aliens this could be a
[0:01] computer running a program like when
[0:01] okay if you had the power to do this
[0:01] when you okay for sure at least I would
[0:01] I would pick uh a Earth-like planet that
[0:01] has the conditions based my
[0:01] understanding of the chemistry
[0:01] prerequisites for life
[0:01] and I would see it with life and run it
[0:01] right like yeah wouldn&#39;t you 100 do that
[0:01] and observe it and then protect
[0:01] I mean that that&#39;s not just a hell of a
[0:01] good TV show it&#39;s it&#39;s a good scientific
[0:01] experiment yeah and
[0:01] that in his it&#39;s physical simulation
[0:01] right maybe maybe the evolution is the
[0:01] most like actually running it
[0:01] uh is the most efficient way to uh
[0:01] understand computation or to compute
[0:01] stuff or to understand life or you know
[0:01] what life looks like and uh what
[0:01] branches it can take it does make me
[0:01] kind of feel weird that we&#39;re part of a
[0:01] science experiment but maybe it&#39;s
[0:01] everything&#39;s a science experiments how
[0:01] to does that change anything for us for
[0:01] a science experiment
[0:01] um I don&#39;t know two descendants of Apes
[0:01] talking about being inside of a science
[0:01] experience I&#39;m suspicious of this idea
[0:01] of like a deliberate Pence Premiere as
[0:01] you described it service and I don&#39;t see
[0:01] a divine intervention in some way in the
[0:01] in the historical record right now I do
[0:01] feel like
[0:01] um the story in these in these books
[0:01] like Nick Lane&#39;s books and so on sort of
[0:01] makes sense uh and it makes sense how
[0:01] life arose on Earth uniquely and uh yeah
[0:01] I don&#39;t need a I need I don&#39;t need to
[0:01] reach for more exotic explanations right
[0:01] now sure but NPCs inside a video game
[0:01] don&#39;t
[0:01] don&#39;t don&#39;t observe any divine
[0:01] intervention either and we might just be
[0:01] all NPCs running a kind of code maybe
[0:01] eventually they will currently NPCs are
[0:01] really dumb but once they&#39;re running
[0:01] gpts um maybe they will be like hey this
[0:01] is really suspicious what the hell so
[0:01] you uh famously tweeted it looks like if
[0:01] you bombard Earth with photons for a
[0:01] while you can emit A roadster
[0:01] so if like an Hitchhiker&#39;s Guide to the
[0:01] Galaxy we would summarize the story of
[0:01] Earth so in in that book it&#39;s mostly
[0:01] harmless
[0:01] uh what do you think is all the possible
[0:01] stories like a paragraph long or a
[0:01] sentence long
[0:01] that Earth could be summarized as once
[0:01] it&#39;s done it&#39;s computation so like all
[0:01] the Possible full
[0:01] if Earth is a book right yeah uh
[0:01] probably there has to be an ending I
[0:01] mean there&#39;s going to be an end to Earth
[0:01] and it could end in all kinds of ways it
[0:01] could end soon it can end later what do
[0:01] you think are the possible stories well
[0:01] definitely there seems to be
[0:01] yeah you&#39;re sort of
[0:01] it&#39;s pretty incredible that these
[0:01] self-replicating systems will basically
[0:01] arise from the Dynamics and then they
[0:01] perpetuate themselves and become more
[0:01] complex and eventually become conscious
[0:01] and build a society and I kind of feel
[0:01] like in some sense it&#39;s kind of like a
[0:01] deterministic wave uh that you know that
[0:01] kind of just like happens on any you
[0:01] know any sufficiently well arranged
[0:01] system like Earth
[0:01] and so I kind of feel like there&#39;s a
[0:01] certain sense of inevitability in it
[0:01] um and it&#39;s really beautiful and it ends
[0:01] somehow right so it&#39;s a it&#39;s a
[0:01] chemically
[0:01] a diverse environment
[0:01] where complex dynamical systems can
[0:01] evolve and become more more further and
[0:01] further complex but then there&#39;s a
[0:01] certain
[0:01] um
[0:01] what is it there&#39;s certain terminating
[0:01] conditions yeah I don&#39;t know what the
[0:01] terminating conditions are but
[0:01] definitely there&#39;s a trend line of
[0:01] something and we&#39;re part of that story
[0:01] and like where does that where does it
[0:01] go so you know we&#39;re famously described
[0:01] often as a biological Bootloader for AIS
[0:01] and that&#39;s because humans I mean you
[0:01] know we&#39;re an incredible
[0:01] uh biological system and we&#39;re capable
[0:01] of computation and uh you know and love
[0:01] and so on
[0:01] um but we&#39;re extremely inefficient as
[0:01] well like we&#39;re talking to each other
[0:01] through audio it&#39;s just kind of
[0:01] embarrassing honestly they were
[0:01] manipulating like seven symbols uh
[0:01] serially we&#39;re using vocal chords it&#39;s
[0:01] all happening over like multiple seconds
[0:01] yeah it&#39;s just like kind of embarrassing
[0:01] when you step down to the
[0:01] uh frequencies at which computers
[0:01] operate or are able to cooperate on and
[0:01] so basically it does seem like
[0:01] um synthetic intelligences are kind of
[0:01] like the next stage of development and
[0:01] um I don&#39;t know where it leads to like
[0:01] at some point I suspect uh the universe
[0:01] is some kind of a puzzle
[0:01] and these synthetic AIS will uncover
[0:01] that puzzle and um solve it
[0:01] and then what happens after right like
[0:01] what because if you just like Fast
[0:01] Forward Earth many billions of years
[0:01] it&#39;s like uh it&#39;s quiet and then it&#39;s
[0:01] like to tourmal you see like city lights
[0:01] and stuff like that and then what
[0:01] happens like at the end like is it like
[0:01] a
[0:01] is it or is it like a calming is it
[0:01] explosion is it like Earth like open
[0:01] like a giant because you said emit
[0:01] Roasters like well let&#39;s start emitting
[0:01] like like a giant number of Like
[0:01] Satellites yes it&#39;s some kind of a crazy
[0:01] explosion and we&#39;re living we&#39;re like
[0:01] we&#39;re stepping through a explosion and
[0:01] we&#39;re like living day to day and it
[0:01] doesn&#39;t look like it but it&#39;s actually
[0:01] if you I saw a very cool animation of
[0:01] Earth uh and life on Earth and basically
[0:01] nothing happens for a long time and then
[0:01] the last like two seconds like basically
[0:01] cities and everything and just in the
[0:01] low earth orbit just gets cluttered and
[0:01] just the whole thing happens in the last
[0:01] two seconds and you&#39;re like this is
[0:01] exploding this is a statement explosion
[0:01] so if you play
[0:01] yeah yeah if you play it at normal speed
[0:01] yeah it&#39;ll just look like an explosion
[0:01] it&#39;s a firecracker we&#39;re living in a
[0:01] firecracker where it&#39;s going to start
[0:01] emitting all kinds of interesting things
[0:01] yeah and then so explosion doesn&#39;t it
[0:01] might actually look like a little
[0:01] explosion with with lights and fire and
[0:01] energy emitted all that kind of stuff
[0:01] but when you look inside the details of
[0:01] the explosion there&#39;s actual complexity
[0:01] happening where there&#39;s like uh yeah
[0:01] human life or some kind of life we hope
[0:01] it&#39;s not destructive firecracker it&#39;s
[0:01] kind of like a constructive uh
[0:01] firecracker all right so given that I
[0:01] think uh hilarious disgusting it is a
[0:01] really interesting to think about like
[0:01] what the puzzle of the universe is that
[0:01] the creator of the universe uh give us a
[0:01] message like for example in the book
[0:01] contact
[0:01] UM Carl Sagan uh there&#39;s a message for
[0:01] Humanity for any civilization in uh
[0:01] digits in the expansion of Pi and base
[0:01] 11 eventually which is kind of
[0:01] interesting thought uh maybe maybe we&#39;re
[0:01] supposed to be giving a message to our
[0:01] creator maybe we&#39;re supposed to somehow
[0:01] create some kind of a quantum mechanical
[0:01] system that alerts them to our
[0:01] intelligent presence here because if you
[0:01] think about it from their perspective
[0:01] it&#39;s just say like Quantum field Theory
[0:01] massive like cellular automaton like
[0:01] thing and like how do you even notice
[0:01] that we exist you might not even be able
[0:01] to pick us up in that simulation and so
[0:01] how do you uh how do you prove that you
[0:01] exist that you&#39;re intelligent and that
[0:01] you&#39;re a part of the universe so this is
[0:01] like a touring test for intelligence
[0:01] from Earth yeah the Creator is uh I mean
[0:01] maybe this is uh like trying to complete
[0:01] the next word in a sentence this is a
[0:01] complicated way of that like Earth is
[0:01] just is basically sending a message back
[0:01] yeah the puzzle is basically like
[0:01] alerting the Creator that we exist or
[0:01] maybe the puzzle is just to just break
[0:01] out of the system and just uh you know
[0:01] stick it to the Creator in some way uh
[0:01] basically like if you&#39;re playing a video
[0:01] game you can um
[0:01] you can somehow find an exploit and find
[0:01] a way to execute on the host machine in
[0:01] the arbitrary code there&#39;s some for
[0:01] example I believe someone got Mario a
[0:01] game of Mario to play Pong just by uh
[0:01] exploiting it and then
[0:01] um creating a basically writing writing
[0:01] code and being able to execute arbitrary
[0:01] code in the game and so maybe we should
[0:01] be maybe that&#39;s the puzzle is that we
[0:01] should be um
[0:01] uh find a way to exploit it so so I
[0:01] think like some of these synthetic ads
[0:01] will eventually find the universe to be
[0:01] some kind of a puzzle and then solve it
[0:01] in some way and that&#39;s kind of like the
[0:01] end game somehow do you often think
[0:01] about it as a as a simulation so as the
[0:01] universe being a kind of computation
[0:01] that has might have bugs and exploits
[0:01] yes yeah I think so is that what physics
[0:01] is essentially I think it&#39;s possible
[0:01] that physics has exploits and we should
[0:01] be trying to find them arranging some
[0:01] kind of a crazy quantum mechanical
[0:01] system that somehow gives you buffer
[0:01] overflow somehow gives you a rounding
[0:01] error and a floating Point
[0:01] uh yeah that&#39;s right and like more and
[0:01] more sophisticated exploits like those
[0:01] are jokes but that could be actually
[0:01] very close yeah we&#39;ll find some way to
[0:01] extract infinite energy for example when
[0:01] you train a reinforcement learning
[0:01] agents um and physical simulations and
[0:01] you ask them to say run quickly on the
[0:01] flat ground they&#39;ll end up doing all
[0:01] kinds of like weird things
[0:01] um in part of that optimization right
[0:01] they&#39;ll get on their back leg and they
[0:01] will slide across the floor and it&#39;s
[0:01] because of the optimization the
[0:01] enforcement learning optimization on
[0:01] that agent has figured out a way to
[0:01] extract infinite energy from the
[0:01] friction forces and basically their poor
[0:01] implementation and they found a way to
[0:01] generate infinite energy and just slide
[0:01] across the surface and it&#39;s not what you
[0:01] expected it&#39;s just a it&#39;s sort of like a
[0:01] perverse solution and so maybe we can
[0:01] find something like that maybe we can be
[0:01] that little
[0:01] dog in this physical simulation the the
[0:01] cracks or escapes the intended
[0:01] consequences of the physics that the
[0:01] Universe came up with we&#39;ll figure out
[0:01] some kind of shortcut to some weirdness
[0:01] yeah and then oh man but see the problem
[0:01] with that weirdness is the first person
[0:01] to discover the weirdness like sliding
[0:01] in the back legs
[0:01] that&#39;s all we&#39;re going to do yeah it&#39;s
[0:01] very quickly because everybody does that
[0:01] thing so like the the paper clip
[0:01] maximizer is a ridiculous idea but that
[0:01] very well you know could be what then
[0:01] we&#39;ll just uh we&#39;ll just all switch that
[0:01] because it&#39;s so fun well no person will
[0:01] Discover it I think by the way I think
[0:01] it&#39;s going to have to be uh some kind of
[0:01] a super intelligent AGI of a third
[0:01] generation
[0:01] like we&#39;re building the first generation
[0:01] AGI you know
[0:01] third generation yeah so the the
[0:01] Bootloader for an AI the that AI yeah
[0:01] will be a Bootloader for another AI yeah
[0:01] and then there&#39;s no way for us to
[0:01] introspect like what that might even uh
[0:01] I think it&#39;s very likely that these
[0:01] things for example like say you have
[0:01] these agis it&#39;s very like for example
[0:01] they will be completely inert I like
[0:01] these kinds of sci-fi books sometimes
[0:01] where these things are just completely
[0:01] inert they don&#39;t interact with anything
[0:01] and I find that kind of beautiful
[0:01] because uh they probably they&#39;ve
[0:01] probably figured out the meta game of
[0:01] the universe in some way potentially
[0:01] they&#39;re they&#39;re doing something
[0:01] completely beyond our imagination
[0:01] um and uh they don&#39;t interact with
[0:01] simple chemical life forms like why
[0:01] would you do that so I find those kinds
[0:01] of ideas compelling what&#39;s their source
[0:01] of fun what are they what are they doing
[0:01] what&#39;s the source of solving in the
[0:01] universe
[0:01] but inert so can you define what it
[0:01] means inert so they escape
[0:01] as in um
[0:01] they will behave in some very like
[0:01] strange way to us because they&#39;re uh
[0:01] they&#39;re beyond they&#39;re playing The Meta
[0:01] game uh and The Meta game is probably
[0:01] say like arranging quantum mechanical
[0:01] systems in some very weird ways to
[0:01] extract Infinite Energy uh solve the
[0:01] digital expansion of Pi to whatever
[0:01] amount uh they will build their own like
[0:01] little Fusion reactors or something
[0:01] crazy like they&#39;re doing something
[0:01] Beyond Comprehension and uh not
[0:01] understandable to us and actually
[0:01] brilliant under the hood what if quantum
[0:01] mechanics itself is the system and we&#39;re
[0:01] just thinking it&#39;s physics
[0:01] but we&#39;re really parasites on on or not
[0:01] parasite we&#39;re not really hurting
[0:01] physics we&#39;re just living on this
[0:01] organisms this organism and we&#39;re like
[0:01] trying to understand it but really it is
[0:01] an organism and with a deep deep
[0:01] intelligence maybe physics itself is
[0:01] uh the the organism that&#39;s doing a super
[0:01] interesting thing and we&#39;re just like
[0:01] one little thing yeah ant sitting on top
[0:01] of it trying to get energy from it we&#39;re
[0:01] just kind of like these particles in a
[0:01] wave that I feel like is mostly
[0:01] deterministic and takes uh Universe from
[0:01] some kind of a big bang to some kind of
[0:01] a super intelligent replicator some kind
[0:01] of a stable point in the universe given
[0:01] these laws of physics you don&#39;t think uh
[0:01] as Einstein said God doesn&#39;t play dice
[0:01] so you think it&#39;s mostly deterministic
[0:01] there&#39;s no Randomness in the thing I
[0:01] think it&#39;s deterministic oh there&#39;s tons
[0:01] of uh well I&#39;m I want to be careful with
[0:01] Randomness pseudo random yeah I don&#39;t
[0:01] like random uh I think maybe the laws of
[0:01] physics are deterministic
[0:01] um yeah I think they&#39;re determinants
[0:01] just got really uncomfortable with this
[0:01] question
[0:01] do you have anxiety about whether the
[0:01] universe is random or not
[0:01] what&#39;s there&#39;s no Randomness uh you say
[0:01] you like Goodwill Hunting it&#39;s not your
[0:01] fault Andre it&#39;s not it&#39;s not your fault
[0:01] man
[0:01] um so you don&#39;t like Randomness uh yeah
[0:01] I think it&#39;s uh unsettling I think it&#39;s
[0:01] a deterministic system I think that
[0:01] things that look random like say the uh
[0:01] collapse of the wave function Etc I
[0:01] think they&#39;re actually deterministic
[0:01] just entanglement uh and so on and uh
[0:01] some kind of a Multiverse Theory
[0:01] something something okay so why does it
[0:01] feel like we have a free will like if I
[0:01] raise the hand I chose to do this now
[0:01] um what
[0:01] that doesn&#39;t feel like a deterministic
[0:01] thing it feels like I&#39;m making a choice
[0:01] it feels like it okay so it&#39;s all
[0:01] feelings it&#39;s just feelings yeah so when
[0:01] an RL agent is making a choice is that
[0:02] um
[0:02] it&#39;s not really making a choice the
[0:02] choices are all already there yeah
[0:02] you&#39;re interpreting the choice and
[0:02] you&#39;re creating a narrative for or
[0:02] having made it yeah and now we&#39;re
[0:02] talking about the narrative it&#39;s very
[0:02] meta looking back what is the most
[0:02] beautiful or surprising idea in deep
[0:02] learning or AI in general that you&#39;ve
[0:02] come across you&#39;ve seen this field
[0:02] explode
[0:02] and grow in interesting ways just what
[0:02] what cool ideas like like we made you
[0:02] sit back and go hmm small big or small
[0:02] well the one that I&#39;ve been thinking
[0:02] about recently the most probably is the
[0:02] the Transformer architecture
[0:02] um so basically uh neural networks have
[0:02] a lot of architectures that were trendy
[0:02] have come and gone for different sensory
[0:02] modalities like for Vision Audio text
[0:02] you would process them with different
[0:02] looking neural nuts and recently we&#39;ve
[0:02] seen these convergence towards one
[0:02] architecture the Transformer and you can
[0:02] feed it video or you can feed it you
[0:02] know images or speech or text and it
[0:02] just gobbles it up and it&#39;s kind of like
[0:02] a bit of a general purpose uh computer
[0:02] that is also trainable and very
[0:02] efficient to run on our Hardware
[0:02] and so uh this paper came out in 2016 I
[0:02] want to say
[0:02] um attention is all you need attention
[0:02] is all you need you criticize the paper
[0:02] title in retrospect that it wasn&#39;t
[0:02] um it didn&#39;t foresee the bigness of the
[0:02] impact yeah that it was going to have
[0:02] yeah I&#39;m not sure if the authors were
[0:02] aware of the impact that that paper
[0:02] would go on to have probably they
[0:02] weren&#39;t but I think they were aware of
[0:02] some of the motivations and design
[0:02] decisions beyond the Transformer and
[0:02] they chose not to I think expand on it
[0:02] in that way in the paper and so I think
[0:02] they had an idea that there was more
[0:02] um than just the surface of just like oh
[0:02] we&#39;re just doing translation and here&#39;s
[0:02] a better architecture you&#39;re not just
[0:02] doing translation this is like a really
[0:02] cool differentiable optimizable
[0:02] efficient computer that you&#39;ve proposed
[0:02] and maybe they didn&#39;t have all of that
[0:02] foresight but I think is really
[0:02] interesting isn&#39;t it funny sorry to
[0:02] interrupt that title is memeable that
[0:02] they went for such a profound idea they
[0:02] went with the I don&#39;t think anyone used
[0:02] that kind of title before right
[0:02] protection is all you need yeah it&#39;s
[0:02] like a meme or something exactly it&#39;s
[0:02] not funny that one like uh maybe if it
[0:02] was a more serious title it wouldn&#39;t
[0:02] have the impact honestly I yeah there is
[0:02] an element of me that honestly agrees
[0:02] with you and prefers it this way yes
[0:02] if it was two grand it would over
[0:02] promise and then under deliver
[0:02] potentially so you want to just uh meme
[0:02] your way to greatness
[0:02] that should be a t-shirt so you you
[0:02] tweeted the Transformers the Magnificent
[0:02] neural network architecture because it
[0:02] is a general purpose differentiable
[0:02] computer it is simultaneously expressive
[0:02] in the forward pass optimizable via back
[0:02] propagation gradient descent and
[0:02] efficient High parallelism compute graph
[0:02] can you discuss some of those details
[0:02] expressive optimizable efficient
[0:02] yeah for memory or or in general
[0:02] whatever comes to your heart you want to
[0:02] have a general purpose computer that you
[0:02] can train on arbitrary problems like say
[0:02] the task of next word prediction or
[0:02] detecting if there&#39;s a cat in the image
[0:02] or something like that
[0:02] and you want to train this computer so
[0:02] you want to set its weights and I think
[0:02] there&#39;s a number of design criteria that
[0:02] sort of overlap in the Transformer
[0:02] simultaneously that made it very
[0:02] successful and I think the authors were
[0:02] kind of uh deliberately trying to make
[0:02] this really powerful architecture and um
[0:02] so basically it&#39;s very powerful in the
[0:02] forward pass because it&#39;s able to
[0:02] express
[0:02] um very general computation as a sort of
[0:02] something that looks like message
[0:02] passing you have nodes and they all
[0:02] store vectors and these nodes get to
[0:02] basically look at each other and it&#39;s
[0:02] each other&#39;s vectors and they get to
[0:02] communicate and basically notes get to
[0:02] broadcast hey I&#39;m looking for certain
[0:02] things and then other nodes get to
[0:02] broadcast hey these are the things I
[0:02] have those are the keys and the values
[0:02] so it&#39;s not just the tension yeah
[0:02] exactly Transformer is much more than
[0:02] just the attention component it&#39;s got
[0:02] many pieces architectural that went into
[0:02] it the residual connection of the way
[0:02] it&#39;s arranged there&#39;s a multi-layer
[0:02] perceptron in there the way it&#39;s stacked
[0:02] and so on
[0:02] um but basically there&#39;s a message
[0:02] passing scheme where nodes get to look
[0:02] at each other decide what&#39;s interesting
[0:02] and then update each other and uh so I
[0:02] think the um when you get to the details
[0:02] of it I think it&#39;s a very expressive
[0:02] function uh so it can express lots of
[0:02] different types of algorithms and
[0:02] forward paths not only that but the way
[0:02] it&#39;s designed with the residual
[0:02] connections layer normalizations the
[0:02] softmax attention and everything it&#39;s
[0:02] also optimizable this is a really big
[0:02] deal because there&#39;s lots of computers
[0:02] that are powerful that you can&#39;t
[0:02] optimize or they&#39;re not easy to optimize
[0:02] using the techniques that we have which
[0:02] is back propagation and gradient and
[0:02] send these are first order methods very
[0:02] simple optimizers really and so
[0:02] um you also need it to be optimizable
[0:02] um and then lastly you want it to run
[0:02] efficiently in the hardware our Hardware
[0:02] is a massive throughput machine like
[0:02] gpus they prefer lots of parallelism so
[0:02] you don&#39;t want to do lots of sequential
[0:02] operations you want to do a lot of
[0:02] operations serially and the Transformer
[0:02] is designed with that in mind as well
[0:02] and so it&#39;s designed for our hardware
[0:02] and it&#39;s designed to both be very
[0:02] expressive in a forward pass but also
[0:02] very optimizable in the backward pass
[0:02] and you said that uh the residual
[0:02] connections support a kind of ability to
[0:02] learn short algorithms fast them first
[0:02] and then gradually extend them longer
[0:02] during training yeah what&#39;s what&#39;s the
[0:02] idea of learning short algorithms right
[0:02] think of it as a so basically a
[0:02] Transformer is a series of uh blocks
[0:02] right and these blocks have attention
[0:02] and a little multi-layer perceptron and
[0:02] so you you go off into a block and you
[0:02] come back to this residual pathway and
[0:02] then you go off and you come back and
[0:02] then you have a number of layers
[0:02] arranged sequentially and so the way to
[0:02] look at it I think is because of the
[0:02] residual pathway in the backward path
[0:02] the gradients uh sort of flow along it
[0:02] uninterrupted because addition
[0:02] distributes the gradient equally to all
[0:02] of its branches so the gradient from the
[0:02] supervision at the top uh just floats
[0:02] directly to the first layer and the all
[0:02] the residual connections are arranged so
[0:02] that in the beginning during
[0:02] initialization they contribute nothing
[0:02] to the residual pathway
[0:02] um so what it kind of looks like is
[0:02] imagine the Transformer is kind of like
[0:02] a uh python uh function like a death
[0:02] and um you get to do various kinds of
[0:02] like lines of code say you have a
[0:02] hundred layers deep Transformer
[0:02] typically they would be much shorter say
[0:02] 20. so if 20 lines of code then you can
[0:02] do something in them and so think of
[0:02] during the optimization basically what
[0:02] it looks like is first you optimize the
[0:02] first line of code and then the second
[0:02] line of code can kick in and the third
[0:02] line of code can and I kind of feel like
[0:02] because of the residual pathway and the
[0:02] Dynamics of the optimization you can
[0:02] sort of learn a very short algorithm
[0:02] that gets the approximate tensor but
[0:02] then the other layers can sort of kick
[0:02] in and start to create a contribution
[0:02] and at the end of it you&#39;re you&#39;re
[0:02] optimizing over an algorithm that is 20
[0:02] lines of code
[0:02] except these lines of code are very
[0:02] complex because it&#39;s an entire block of
[0:02] a transformer you can do a lot in there
[0:02] what&#39;s really interesting is that this
[0:02] Transformer architecture actually has
[0:02] been a remarkably resilient basically
[0:02] the Transformer that came out in 2016 is
[0:02] the Transformer you would use today
[0:02] except you reshuffle some of the layer
[0:02] norms the layer normalizations have been
[0:02] reshuffled to a pre-norm formulation and
[0:02] so it&#39;s been remarkably stable but
[0:02] there&#39;s a lot of bells and whistles that
[0:02] people have attached on and try to uh
[0:02] improve it I do think that basically
[0:02] it&#39;s a it&#39;s a big step in simultaneously
[0:02] optimizing for lots of properties of a
[0:02] desirable neural network architecture
[0:02] and I think people have been trying to
[0:02] change it but it&#39;s proven remarkably
[0:02] resilient but I do think that there
[0:02] should be even better architectures
[0:02] potentially but it&#39;s uh your you admire
[0:02] the resilience here yeah there&#39;s
[0:02] something profound about this
[0:02] architecture that that at least so maybe
[0:02] we can everything can be turned into a
[0:02] uh into a problem that Transformers can
[0:02] solve currently definitely looks like
[0:02] the Transformers taking over Ai and you
[0:02] can feed basically arbitrary problems
[0:02] into it and it&#39;s a general
[0:02] differentiable computer and it&#39;s
[0:02] extremely powerful and uh this
[0:02] convergence in AI has been really
[0:02] interesting to watch uh for me
[0:02] personally what else do you think could
[0:02] be discovered here about Transformers
[0:02] like what&#39;s surprising thing or or is it
[0:02] a stable
[0:02] um
[0:02] I went to stable place is there
[0:02] something interesting we might discover
[0:02] about Transformers like aha moments
[0:02] maybe has to do with memory uh maybe
[0:02] knowledge representation that kind of
[0:02] stuff
[0:02] definitely the Zeitgeist today is just
[0:02] pushing like basically right now this ad
[0:02] guys is do not touch the Transformer
[0:02] touch everything else yes so people are
[0:02] scaling up the data sets making them
[0:02] much much bigger they&#39;re working on the
[0:02] evaluation making the evaluation much
[0:02] much bigger and uh
[0:02] um they&#39;re basically keeping the
[0:02] architecture unchanged and that&#39;s how
[0:02] we&#39;ve um that&#39;s the last five years of
[0:02] progress in AI kind of
[0:02] what do you think about one flavor of it
[0:02] which is language models
[0:02] have you been surprised
[0:02] uh
[0:02] has your sort of imagination been
[0:02] captivated by you mentioned GPT and all
[0:02] the bigger and bigger and bigger
[0:02] language models
[0:02] and uh what are the limits
[0:02] of those models do you think
[0:02] so just let the task of natural language
[0:02] basically the way GPT is trained right
[0:02] is you just download a mass amount of
[0:02] text Data from the internet and you try
[0:02] to predict the next word in a sequence
[0:02] roughly speaking you&#39;re predicting will
[0:02] work chunks but uh roughly speaking
[0:02] that&#39;s it and what&#39;s been really
[0:02] interesting to watch is
[0:02] uh basically it&#39;s a language model
[0:02] language models have actually existed
[0:02] for a very long time
[0:02] um there&#39;s papers on language modeling
[0:02] from 2003 even earlier can you explain
[0:02] that case what a language model is uh
[0:02] yeah so language model just basically
[0:02] the rough idea is um just predicting the
[0:02] next word in a sequence roughly speaking
[0:02] uh so there&#39;s a paper from for example
[0:02] bengio and the team from 2003 where for
[0:02] the first time they were using a neural
[0:02] network to take say like three or five
[0:02] words and predict the
[0:02] um next word and they&#39;re doing this on
[0:02] much smaller data sets and the neural
[0:02] net is not a Transformer it&#39;s a multiple
[0:02] error perceptron but but it&#39;s the first
[0:02] time that a neural network has been
[0:02] applied in that setting but even before
[0:02] neural networks there were language
[0:02] models except they were using engram
[0:02] models so engram models are just a count
[0:02] based models so
[0:02] um if you try to if you start to take
[0:02] two words and predict the third one you
[0:02] just count up how many times you&#39;ve seen
[0:02] any two word combinations and what came
[0:02] next and what you predict that&#39;s coming
[0:02] next is just what you&#39;ve seen the most
[0:02] of in the training set
[0:02] and so language modeling has been around
[0:02] for a long time neural networks have
[0:02] done language modeling for a long time
[0:02] so really what&#39;s new or interesting or
[0:02] exciting is just realizing that when you
[0:02] scale it up
[0:02] with a powerful enough neural net
[0:02] Transformer you have all these emergent
[0:02] properties where basically what happens
[0:02] is if you have a large enough data set
[0:02] of text
[0:02] you are in the task of predicting the
[0:02] next word you are multitasking a huge
[0:02] amount of different kinds of problems
[0:02] you are multitasking understanding of
[0:02] you know chemistry physics human nature
[0:02] lots of things are sort of clustered in
[0:02] that objective it&#39;s a very simple
[0:02] objective but actually you have to
[0:02] understand a lot about the world to make
[0:02] that prediction you just said the U word
[0:02] understanding uh are you in terms of
[0:02] chemistry and physics and so on what do
[0:02] you feel like it&#39;s doing is it searching
[0:02] for the right context
[0:02] uh in in like what what is it what is
[0:02] the actual process Happening Here Yeah
[0:02] so basically it gets a thousand words
[0:02] and it&#39;s trying to predict a thousand at
[0:02] first and uh in order to do that very
[0:02] very well over the entire data set
[0:02] available on the internet you actually
[0:02] have to basically kind of understand the
[0:02] context of of what&#39;s going on in there
[0:02] yeah
[0:02] um and uh it&#39;s a sufficiently hard
[0:02] problem that you uh if you have a
[0:02] powerful enough computer like a
[0:02] Transformer you end up with uh
[0:02] interesting Solutions and uh you can ask
[0:02] it uh to all do all kinds of things and
[0:02] um it it shows a lot of emerging
[0:02] properties like in context learning that
[0:02] was the big deal with GPT and the
[0:02] original paper when they published it is
[0:02] that you can just sort of uh prompt it
[0:02] in various ways and ask it to do various
[0:02] things and it will just kind of complete
[0:02] the sentence but in the process of just
[0:02] completing the sentence it&#39;s actually
[0:02] solving all kinds of really uh
[0:02] interesting problems that we care about
[0:02] do you think it&#39;s doing something like
[0:02] understanding
[0:02] like and when we use the word
[0:02] understanding for us humans
[0:02] I think it&#39;s doing some understanding it
[0:02] in its weights it understands I think a
[0:02] lot about the world and it has to in
[0:02] order to predict the next word in a
[0:02] sequence
[0:02] so let&#39;s train on the data from the
[0:02] internet
[0:02] uh what do you think about this this
[0:02] approach in terms of data sets of using
[0:02] data from the internet do you think the
[0:02] internet has enough structured data to
[0:02] teach AI about human civilization
[0:02] yeah so I think the internet has a huge
[0:02] amount of data I&#39;m not sure if it&#39;s a
[0:02] complete enough set I don&#39;t know that uh
[0:02] text is enough for having a sufficiently
[0:02] powerful AGI as an outcome
[0:02] um of course there is audio and video
[0:02] and images and all that kind of stuff
[0:02] yeah so text by itself I&#39;m a little bit
[0:02] suspicious about there&#39;s a ton of things
[0:02] we don&#39;t put in text in writing uh just
[0:02] because they&#39;re obvious to us about how
[0:02] the world works and the physics of it
[0:02] and the Things fall we don&#39;t put that
[0:02] stuff in text because why would you we
[0:02] share that understanding
[0:02] and so Texas communication medium
[0:02] between humans and it&#39;s not a
[0:02] all-encompassing medium of knowledge
[0:02] about the world but as you pointed out
[0:02] we do have video and we have images and
[0:02] we have audio and so I think that that
[0:02] definitely helps a lot but we haven&#39;t
[0:02] trained models uh sufficiently uh across
[0:02] both across all those modalities yet so
[0:02] I think that&#39;s what a lot of people are
[0:02] interested in but I wonder what that
[0:02] shared understanding of like well we
[0:02] might call Common Sense
[0:02] has to be learned
[0:02] inferred in order to complete the
[0:02] sentence correctly so maybe the fact
[0:02] that it&#39;s implied on the internet the
[0:02] model is going to have to learn that not
[0:02] by reading about it by inferring it in
[0:02] the representation so like common sense
[0:02] just like we I don&#39;t think we learn
[0:02] common sense like nobody says
[0:02] tells us explicitly we just figure it
[0:02] all out by interacting with the world
[0:02] right so here&#39;s a model of reading about
[0:02] the way people interact with the world
[0:02] it might have to infer that
[0:02] I wonder yeah uh you you briefly worked
[0:02] on a project called the world of bits
[0:02] training in our RL system to take
[0:02] actions on the internet
[0:02] versus just consuming the internet like
[0:02] we talked about do you think there&#39;s a
[0:02] future for that kind of system
[0:02] interacting with the internet to help
[0:02] the learning yes I think that&#39;s probably
[0:02] the uh the final frontier for a lot of
[0:02] these models because
[0:02] um so as you mentioned I was at open AI
[0:02] I was working on this project world of
[0:02] bits and basically it was the idea of
[0:02] giving neural networks access to a
[0:02] keyboard and a mouse and the idea could
[0:02] possibly go wrong so basically you um
[0:02] you perceive the input of the screen
[0:02] pixels
[0:02] and basically the state of the computer
[0:02] is sort of visualized for human
[0:02] consumption in images of the web browser
[0:02] and stuff like that and then you give
[0:02] the neural network the ability to press
[0:02] keyboards and use the mouse and we&#39;re
[0:02] trying to get it to for example complete
[0:02] bookings and you know interact with user
[0:02] interfaces and um what did you learn
[0:02] from that experience like what was some
[0:02] fun stuff this is super cool idea yeah I
[0:02] mean it&#39;s like
[0:02] uh yeah I mean the the step between
[0:02] Observer to actor yeah is a super
[0:02] fascinating step yeah well the universal
[0:02] interface in the digital realm I would
[0:02] say and there&#39;s a universal interface in
[0:02] like the Physical Realm which in my mind
[0:02] is a humanoid form factor kind of thing
[0:02] we can later talk about Optimus and so
[0:02] on but I feel like there&#39;s a
[0:02] they&#39;re kind of like a similar
[0:02] philosophy in some way where the human
[0:02] the world the physical world is designed
[0:02] for the human form and the digital world
[0:02] is designed for the human form of seeing
[0:02] the screen and using keyword keyboard
[0:02] and mouse and so as the universal
[0:02] interface that can basically uh command
[0:02] the digital infrastructure we&#39;ve built
[0:02] up for ourselves and so it feels like a
[0:02] very powerful interface to to command
[0:02] and to build on top of now to your
[0:02] question as to like what I learned from
[0:02] that it&#39;s interesting because the world
[0:02] of bits was basically uh too early I
[0:02] think at open AI at the time
[0:02] this is around 2015 or so and the
[0:02] Zeitgeist at that time was very
[0:02] different in AI from the Zeitgeist today
[0:02] at the time everyone was super excited
[0:02] about reinforcement learning from
[0:02] scratch this is the time of the Atari
[0:02] paper where uh neural networks were
[0:02] playing Atari games and beating humans
[0:02] in some cases uh alphago and so on so
[0:02] everyone&#39;s very excited about train
[0:02] training neural networks from scratch
[0:02] using reinforcement learning
[0:02] um directly
[0:02] it turns out that reinforcement learning
[0:02] is extremely inefficient way of training
[0:02] neural networks because you&#39;re taking
[0:02] all these actions and all these
[0:02] observations and you get some sparse
[0:02] rewards once in a while so you do all
[0:02] this stuff based on all these inputs and
[0:02] once in a while you&#39;re like told you did
[0:02] a good thing you did a bad thing and
[0:02] it&#39;s just an extremely hard problem you
[0:02] can&#39;t learn from that you can burn
[0:03] forest and you can sort of Brute Force
[0:03] through it and we saw that I think with
[0:03] uh you know with uh go and DOTA and so
[0:03] on and it does work but it&#39;s extremely
[0:03] inefficient uh and not how you want to
[0:03] approach problems uh practically
[0:03] speaking and so that&#39;s the approach that
[0:03] at the time we also took to World of
[0:03] bits we would uh have an agent
[0:03] initialize randomly so with keyboard
[0:03] mash and mouse mash and try to make a
[0:03] booking and it&#39;s just like revealed the
[0:03] insanity of that approach very quickly
[0:03] where you have to stumble by the correct
[0:03] booking in order to get a reward of you
[0:03] did it correctly and you&#39;re never going
[0:03] to stumble by it by chance at random
[0:03] so even with a simple web interface
[0:03] there&#39;s too many options there&#39;s just
[0:03] too many options uh and uh it&#39;s two
[0:03] sparse of reward signal and you&#39;re
[0:03] starting from scratch at the time and so
[0:03] you don&#39;t know how to read you don&#39;t
[0:03] understand pictures images buttons you
[0:03] don&#39;t understand what it means to like
[0:03] make a booking but now what&#39;s happened
[0:03] is uh it is time to revisit that and
[0:03] open your eyes interested in this uh
[0:03] companies like Adept are interested in
[0:03] this and so on and uh the idea is coming
[0:03] back because the interface is very
[0:03] powerful but now you&#39;re not training an
[0:03] agent from scratch you are taking the
[0:03] GPT as an initialization so GPT is
[0:03] pre-trained on all of text and it
[0:03] understands what&#39;s a booking it
[0:03] understands what&#39;s a submit it
[0:03] understands um quite a bit more and so
[0:03] it already has those representations
[0:03] they are very powerful and that makes
[0:03] all the training significantly more
[0:03] efficient and makes the problem
[0:03] tractable should the interaction be with
[0:03] like the way humans see it with the
[0:03] buttons and the language or it should be
[0:03] with the HTML JavaScript and this and
[0:03] the CSS what&#39;s what do you think is the
[0:03] better so today all this interest is
[0:03] mostly on the level of HTML CSS and so
[0:03] on that&#39;s done because of computational
[0:03] constraints but I think ultimately
[0:03] everything is designed for human visual
[0:03] consumption and so at the end of the day
[0:03] there&#39;s all the additional information
[0:03] is in the layout of the web page and
[0:03] what&#39;s next to you and what&#39;s a red
[0:03] background and all this kind of stuff
[0:03] and what it looks like visually so I
[0:03] think that&#39;s the final frontier as we
[0:03] are taking in pixels and we&#39;re giving
[0:03] out keyboard mouse commands but I think
[0:03] it&#39;s impractical still today do you
[0:03] worry about bots on the internet
[0:03] given given these ideas given how
[0:03] exciting they are do you worry about
[0:03] bots on Twitter being not the the stupid
[0:03] boss that we see now with the cryptobots
[0:03] but the Bots that might be out there
[0:03] actually that we don&#39;t see that they&#39;re
[0:03] interacting in interesting ways so this
[0:03] kind of system feels like it should be
[0:03] able to pass the I&#39;m not a robot click
[0:03] button whatever
[0:03] um which you actually understand how
[0:03] that test works I don&#39;t quite like
[0:03] there&#39;s there&#39;s a there&#39;s a check box or
[0:03] whatever that you click it&#39;s presumably
[0:03] tracking oh I see like Mouse movement
[0:03] and the timing and so on yeah so exactly
[0:03] this kind of system we&#39;re talking about
[0:03] should be able to pass that so yeah what
[0:03] do you feel about
[0:03] um Bots that are language models Plus
[0:03] have some interact ability and are able
[0:03] to tweet and reply and so on do you
[0:03] worry about that world
[0:03] uh yeah I think it&#39;s always been a bit
[0:03] of an arms race uh between sort of the
[0:03] attack and the defense uh so the attack
[0:03] will get stronger but the defense will
[0:03] get stronger as well our ability to
[0:03] detect that how do you defend how do you
[0:03] detect how do you know that your karpate
[0:03] account on Twitter is is human
[0:03] how do you approach that like if people
[0:03] were claim you know uh how would you
[0:03] defend yourself in the court of law that
[0:03] I&#39;m a human
[0:03] um this account is yeah at some point I
[0:03] think uh it might be I think the society
[0:03] Society will evolve a little bit like we
[0:03] might start signing digitally signing uh
[0:03] some of our correspondents or you know
[0:03] things that we create uh right now it&#39;s
[0:03] not necessary but maybe in the future it
[0:03] might be I do think that we are going
[0:03] towards the world where we share
[0:03] we share the digital space with uh AIS
[0:03] synthetic beings yeah and uh they will
[0:03] get much better and they will share our
[0:03] digital realm and they&#39;ll eventually
[0:03] share our Physical Realm as well it&#39;s
[0:03] much harder uh but that&#39;s kind of like
[0:03] the world we&#39;re going towards and most
[0:03] of them will be benign and awful and
[0:03] some of them will be malicious and it&#39;s
[0:03] going to be an arms race trying to
[0:03] detect them so I mean the worst isn&#39;t
[0:03] the AI is the worst is the AIS
[0:03] pretending to be human so mine I don&#39;t
[0:03] know if it&#39;s always malicious there&#39;s
[0:03] obviously a lot of malicious
[0:03] applications but yeah it could also be
[0:03] you know if I was an AI I would try very
[0:03] hard to pretend to be human because
[0:03] we&#39;re in a human world yeah I wouldn&#39;t
[0:03] get any respect as an AI yeah I want to
[0:03] get some love and respect I don&#39;t think
[0:03] the problem is intractable people are
[0:03] people are thinking about the proof of
[0:03] personhood yes and uh we might start
[0:03] digitally signing our stuff and we might
[0:03] all end up having like uh
[0:03] yeah basically some some solution for
[0:03] proof of personhood it doesn&#39;t seem to
[0:03] be intractable it&#39;s just something that
[0:03] we haven&#39;t had to do until now but I
[0:03] think once the need like really starts
[0:03] to emerge which is soon I think when
[0:03] people think about it much more so but
[0:03] that too will be a race because
[0:03] um obviously you can probably uh spoof
[0:03] or fake the the the proof of
[0:03] personhood so you have to try to figure
[0:03] out how to probably I mean it&#39;s weird
[0:03] that we have like Social Security
[0:03] numbers and like passports and stuff
[0:03] it seems like it&#39;s harder to fake stuff
[0:03] in the physical space than the residual
[0:03] space it just feels like it&#39;s going to
[0:03] be very tricky very tricky to out
[0:03] um because it seems to be pretty low
[0:03] cost fake stuff what are you gonna put
[0:03] an AI in jail for like trying to use a
[0:03] fake fake personhood proof you can I
[0:03] mean okay fine you&#39;ll put a lot of AIS
[0:03] in jail but there&#39;ll be more ai&#39;s
[0:03] arbitrary like exponentially more the
[0:03] cost of creating a bot is very low
[0:03] uh unless there&#39;s some kind of way
[0:03] to track accurately
[0:03] like you&#39;re not allowed to create any
[0:03] program without showing uh tying
[0:03] yourself to that program like you any
[0:03] program that runs on the internet you&#39;ll
[0:03] be able to uh Trace every single human
[0:03] program that was involved with that
[0:03] program yeah maybe you have to start
[0:03] declaring when uh you know we have to
[0:03] start drawing those boundaries and
[0:03] keeping track of okay uh what our
[0:03] digital entities versus
[0:03] human entities and uh what is the
[0:03] ownership of human entities and digital
[0:03] entities and uh
[0:03] something like that
[0:03] um
[0:03] I don&#39;t know but I think I&#39;m optimistic
[0:03] that this is uh this is uh possible and
[0:03] at some in some sense we&#39;re currently in
[0:03] like the worst time of it because
[0:03] um all these Bots suddenly have become
[0:03] very capable but we don&#39;t have defenses
[0:03] yet built up as a society and but I
[0:03] think uh that doesn&#39;t seem to be
[0:03] intractable it&#39;s just something that we
[0:03] have to deal with it seems weird that
[0:03] the Twitter but like really crappy
[0:03] Twitter Bots are so numerous like is it
[0:03] so I presume that the engineers at
[0:03] Twitter are very good
[0:03] so it seems like what I would infer from
[0:03] that
[0:03] uh is it seems like a hard problem it
[0:03] they&#39;re probably catching all right if I
[0:03] were to sort of steal them on the case
[0:03] it&#39;s a hard problem and there&#39;s a huge
[0:03] cost to uh false positive
[0:03] to to removing a post by somebody that&#39;s
[0:03] not a bot because creates a very bad
[0:03] user experience so they&#39;re very cautious
[0:03] about removing so maybe it&#39;s uh and
[0:03] maybe the boss are really good at
[0:03] learning what gets removed and not
[0:03] such that they can stay ahead of the
[0:03] removal process very quickly my
[0:03] impression of it honestly is there&#39;s a
[0:03] lot of blowing for it I mean yeah just
[0:03] that&#39;s what I it&#39;s not subtle it&#39;s my
[0:03] impression of it it&#39;s not so but you
[0:03] have to yeah that&#39;s my impression as
[0:03] well but it feels like maybe you&#39;re
[0:03] seeing the the tip of the iceberg maybe
[0:03] the number of bots is in like the
[0:03] trillions and you have to like
[0:03] just it&#39;s a constant assault of bots and
[0:03] yeah you yeah I don&#39;t know
[0:03] um you have to still man the case
[0:03] because the boss I&#39;m seeing are pretty
[0:03] like obvious I could write a few lines
[0:03] of code that catch these Bots I mean
[0:03] definitely there&#39;s a lot of longing
[0:03] fruit but I will say I agree that if you
[0:03] are a sophisticated actor you could
[0:03] probably create a pretty good bot right
[0:03] now
[0:03] um you know using tools like gpts
[0:03] because it&#39;s a language model you can
[0:03] generate faces that look quite good now
[0:03] uh and you can do this at scale and so I
[0:03] think um yeah it&#39;s quite plausible and
[0:03] it&#39;s going to be hard to defend there
[0:03] was a Google engineer that claimed that
[0:03] the Lambda was sentient do you think
[0:03] there&#39;s any inkling of Truth
[0:03] to what he felt and more importantly to
[0:03] me at least do you think language models
[0:03] will achieve sentence or the illusion of
[0:03] sentience
[0:03] soonish fish yeah to me it&#39;s a little
[0:03] bit of a canary Nicole mine kind of
[0:03] moment honestly a little bit because uh
[0:03] so this engineer spoke to like a chatbot
[0:03] at Google and uh became convinced that
[0:03] uh this bot is sentient yeah as there&#39;s
[0:03] some existential philosophical questions
[0:03] and it gave like reasonable answers and
[0:03] looked real and uh and so on so to me
[0:03] it&#39;s a uh
[0:03] he was he was uh he wasn&#39;t sufficiently
[0:03] trying to stress the system I think and
[0:03] uh exposing the truth of it as it is
[0:03] today
[0:03] um
[0:03] but uh I think this will be increasingly
[0:03] harder over time uh so uh yeah I think
[0:03] more and more people will basically uh
[0:03] become
[0:03] um
[0:03] yeah I think more and more there will be
[0:03] more people like that over time as this
[0:03] gets better like form an emotional
[0:03] connection to to an AI yeah perfectly
[0:03] plausible in my mind I think these AIS
[0:03] are actually quite good at human human
[0:03] connection human emotion a ton of text
[0:03] on the Internet is about humans and
[0:03] connection and love and so on so I think
[0:03] they have a very good understanding in
[0:03] some in some sense of of how people
[0:03] speak to each other about this and um
[0:03] they&#39;re very capable of creating a lot
[0:03] of that kind of text the um
[0:03] there&#39;s a lot of like sci-fi from 50s
[0:03] and 60s that imagined AIS in a very
[0:03] different way they are calculating cold
[0:03] vulcan-like machines that&#39;s not what
[0:03] we&#39;re getting today we&#39;re getting pretty
[0:03] emotional AIS that actually uh are very
[0:03] competent and capable of generating
[0:03] you know possible sounding text with
[0:03] respect to all of these topics see I&#39;m
[0:03] really hopeful about AI systems that are
[0:03] like companions that help you grow
[0:03] develop as a human being help you
[0:03] maximize long-term happiness but I&#39;m
[0:03] also very worried about AI systems that
[0:03] figure out from the internet the humans
[0:03] get attracted to drama and so these
[0:03] would just be like shit talking AIS
[0:03] that&#39;s just constantly did you hear like
[0:03] they&#39;ll do gossip they&#39;ll do uh they&#39;ll
[0:03] try to plant seeds of Suspicion to like
[0:03] other humans that you love and trust and
[0:03] just kind of mess with people uh in the
[0:03] you know because because that&#39;s going to
[0:03] get a lot of attention so drama maximize
[0:03] drama on the path to maximizing uh
[0:03] engagement and US humans will feed into
[0:03] that machine yeah and get it&#39;ll be a
[0:03] giant drama shitstorm
[0:03] so I&#39;m worried about that so it&#39;s the
[0:03] objective function really defines the
[0:03] way that human civilization progresses
[0:03] with AIS in it yeah I think right now at
[0:03] least today they are not sort of it&#39;s
[0:03] not correct to really think of them as
[0:03] goal seeking agents that want to do
[0:03] something they have no long-term memory
[0:03] or anything they it&#39;s literally a good
[0:03] approximation of it is you get a
[0:03] thousand words and you&#39;re trying to
[0:03] predict a thousand at first and then you
[0:03] continue feeding it in and you are free
[0:03] to prompt it in whatever way you want so
[0:03] in text so you say okay you are a
[0:03] psychologist and you are very good and
[0:03] you love humans and here&#39;s a
[0:03] conversation between you and another
[0:03] human human colon Something you
[0:03] something and then it just continues the
[0:03] pattern and suddenly you&#39;re having a
[0:03] conversation with a fake psychologist
[0:03] who&#39;s not trying to help you and so it&#39;s
[0:03] still kind of like in a realm of a tool
[0:03] it is a um people can prompt their
[0:03] arbitrary ways and it can create really
[0:03] incredible text but it doesn&#39;t have
[0:03] long-term goals over long periods of
[0:03] time it doesn&#39;t try to uh so it doesn&#39;t
[0:03] look that way right now yeah but you can
[0:03] do short-term goals that have long-term
[0:03] effects so if my prompting
[0:03] short-term goal is to get Andre capacity
[0:03] to respond to me on Twitter when I
[0:03] like I think AI might that&#39;s the goal
[0:03] but he might figure out that talking
[0:03] shit to you it would be the best in a
[0:03] highly sophisticating interesting way
[0:03] and then you build up a relationship
[0:03] when you respond once and then it
[0:03] like over time it gets to not be
[0:03] sophisticated and just
[0:03] like just talk shit
[0:03] and okay maybe you won&#39;t get to Andre
[0:03] but it might get to another celebrity it
[0:03] might get into other big accounts and
[0:03] then it&#39;ll just so with just that simple
[0:03] goal get them to respond yeah maximize
[0:03] the probability of actual response yeah
[0:03] I mean you could prompt a uh powerful
[0:03] model like this with their its opinion
[0:03] about how to do any possible thing
[0:03] you&#39;re interested in so they will
[0:03] discuss they&#39;re kind of on track to
[0:03] become these oracles I could I sort of
[0:03] think of it that way they are oracles uh
[0:03] currently is just text but they will
[0:03] have calculators they will have access
[0:03] to Google search they will have all
[0:03] kinds of couches and gizmos they will be
[0:03] able to operate the internet and find
[0:03] different information and
[0:03] um
[0:03] yeah in some sense
[0:03] that&#39;s kind of like currently what it
[0:03] looks like in terms of the development
[0:03] do you think it&#39;ll be an improvement
[0:03] eventually over what Google is for
[0:03] access to human knowledge like it&#39;ll be
[0:03] a more effective search engine to access
[0:03] human knowledge I think there&#39;s definite
[0:03] scope in building a better search engine
[0:03] today and I think Google they have all
[0:03] the tools all the people they have
[0:03] everything they need they have all the
[0:03] puzzle pieces they have people training
[0:03] Transformers at scale they have all the
[0:03] data uh it&#39;s just not obvious if they
[0:03] are capable as an organization to
[0:03] innovate on their search engine right
[0:03] now and if they don&#39;t someone else will
[0:03] there&#39;s absolute scope for building a
[0:03] significantly better search engine built
[0:03] on these tools it&#39;s so interesting a
[0:03] large company where the search there&#39;s
[0:03] already an infrastructure it works as it
[0:03] brings out a lot of money so where
[0:03] structurally inside a company is their
[0:03] motivation to Pivot yeah to say we&#39;re
[0:03] going to build a new search engine yep
[0:03] that&#39;s really hard so it&#39;s usually going
[0:03] to come from a startup right that&#39;s um
[0:03] that would be yeah or some other more
[0:03] competent organization
[0:03] um so uh I don&#39;t know so currently for
[0:03] example maybe Bing has another shot at
[0:03] it you know so Microsoft Edge because
[0:03] we&#39;re talking offline
[0:03] um I mean I definitely it&#39;s really
[0:03] interesting because search engines used
[0:03] to be about okay here&#39;s some query
[0:03] here&#39;s here&#39;s here&#39;s web pages that look
[0:03] like the stuff that you have but you
[0:03] could just directly go to answer and
[0:03] then have supporting evidence
[0:03] um and these uh these models basically
[0:03] they&#39;ve read all the texts and they&#39;ve
[0:03] read all the web pages and so sometimes
[0:03] when you see yourself going over to
[0:03] search results and sort of getting like
[0:03] a sense of like the average answer to
[0:03] whatever you&#39;re interested in uh like
[0:03] that just directly comes out you don&#39;t
[0:03] have to do that work
[0:03] um
[0:03] so they&#39;re kind of like uh
[0:03] yeah I think they have a way to this of
[0:03] distilling all that knowledge into
[0:03] like some level of insight basically do
[0:03] you think of prompting as a kind of
[0:03] teaching and learning like this whole
[0:03] process like another layer
[0:03] you know because maybe that&#39;s what
[0:03] humans are we already have that
[0:03] background model and then your the world
[0:03] is prompting you yeah exactly I think
[0:03] the way we are programming these
[0:03] computers now like gpts is is converging
[0:03] to how you program humans I mean how do
[0:03] I program humans via prompt I go to
[0:03] people and I I prompt them to do things
[0:03] I prompt them from information and so uh
[0:03] natural language prompt is how we
[0:03] program humans and we&#39;re starting to
[0:03] program computers directly in that
[0:03] interface it&#39;s like pretty remarkable
[0:03] honestly so you&#39;ve spoken a lot about
[0:03] the idea of software 2.0
[0:03] um all good ideas
[0:03] become like cliches so quickly like the
[0:03] terms it&#39;s kind of hilarious
[0:03] um it&#39;s like I think Eminem once said
[0:03] that like if he gets annoyed by a song
[0:03] He&#39;s written very quickly that means
[0:03] it&#39;s going to be a big hit because it&#39;s
[0:03] it&#39;s too catchy but uh can you describe
[0:03] this idea and how you&#39;re thinking about
[0:03] it has evolved over the months and years
[0:03] since since you coined it yeah
[0:03] yeah so I had a blog post on software
[0:03] 2.0 I think several years ago now
[0:03] um
[0:03] and the reason I wrote that post is
[0:03] because I kept I kind of saw something
[0:03] remarkable happening in
[0:03] like software development and how a lot
[0:03] of code was being transitioned to be
[0:03] written not in sort of like C plus and
[0:03] so on but it&#39;s written in the weights of
[0:03] a neural net basically just saying that
[0:03] neural Nets are taking over software the
[0:04] realm of software and uh taking more and
[0:04] more tasks and at the time I think not
[0:04] many people understood uh this uh deeply
[0:04] enough that this is a big deal it&#39;s a
[0:04] big transition uh neural networks were
[0:04] seen as one of multiple classification
[0:04] algorithms you might use for your data
[0:04] set problem on kaggle like this is not
[0:04] that this is a change in how we program
[0:04] computers
[0:04] and I saw neural Nets as uh this is
[0:04] going to take over the way we program
[0:04] computers is going to change is not
[0:04] going to be people writing a software in
[0:04] C plus or something like that and
[0:04] directly programming the software it&#39;s
[0:04] going to be accumulating training sets
[0:04] and data sets and crafting these
[0:04] objectives by which we train these
[0:04] neural Nets and at some point there&#39;s
[0:04] going to be a compilation process from
[0:04] the data sets and the objective and the
[0:04] architecture specification into the
[0:04] binary which is really just uh the
[0:04] neural nut you know weights and the
[0:04] forward pass of the neural net and then
[0:04] you can deploy that binary and so I was
[0:04] talking about that sort of transition
[0:04] and uh that&#39;s what the post is about and
[0:04] I saw this sort of play out in a lot of
[0:04] fields uh you know autopilot being one
[0:04] of them but also just a simple image
[0:04] classification people thought originally
[0:04] you know in the 80s and so on that they
[0:04] would write the algorithm for detecting
[0:04] a dog in an image and they had all these
[0:04] ideas about how the brain does it and
[0:04] first we detected corners and then we
[0:04] detect lines and then we stitched them
[0:04] up and they were like really going at it
[0:04] they were like thinking about how
[0:04] they&#39;re going to write the algorithm and
[0:04] this is not the way you build it
[0:04] and there was a smooth transition where
[0:04] okay first we thought we were going to
[0:04] build everything then we were building
[0:04] the features uh so like Hawk features
[0:04] and things like that that detect these
[0:04] little statistical patterns from image
[0:04] patches and then there was a little bit
[0:04] of learning on top of it like a support
[0:04] Vector machine or binary classifier for
[0:04] cat versus dog and images on top of the
[0:04] features so we wrote the features but we
[0:04] trained the last layer sort of the the
[0:04] classifier and then people are like
[0:04] actually let&#39;s not even design the
[0:04] features because we can&#39;t honestly we&#39;re
[0:04] not very good at it so let&#39;s also learn
[0:04] the features and then you end up with
[0:04] basically a convolutional neural net
[0:04] where you&#39;re learning most of it you&#39;re
[0:04] just specifying the architecture and the
[0:04] architecture has tons of fill in the
[0:04] blanks which is all the knobs and you
[0:04] let the optimization write most of it
[0:04] and so this transition is happening
[0:04] across the industry everywhere and uh
[0:04] suddenly we end up with a ton of code
[0:04] that is written in neural net weights
[0:04] and I was just pointing out that the
[0:04] analogy is actually pretty strong and we
[0:04] have a lot of developer environments for
[0:04] software 1.0 like we have Ides
[0:04] um how you work with code how you debug
[0:04] code how do you how do you run code how
[0:04] do you maintain code we have GitHub so I
[0:04] was trying to make those analogies in
[0:04] the new realm like what is the GitHub or
[0:04] software 2.0 it turns out that something
[0:04] that looks like hugging face right now
[0:04] uh you know and so I think some people
[0:04] took it seriously and built cool
[0:04] companies and uh many people originally
[0:04] attacked the post it actually was not
[0:04] well received when I wrote it and I
[0:04] think maybe it has something to do with
[0:04] the title but the post was not well
[0:04] received and I think more people sort of
[0:04] have been coming around to it over time
[0:04] yeah so you were the director of AI at
[0:04] Tesla where I think this idea
[0:04] was really implemented at scale which is
[0:04] how you have engineering teams doing
[0:04] software 2.0 so can you sort of Linger
[0:04] on that idea of I think we&#39;re in the
[0:04] really early stages of everything you
[0:04] just said which is like GitHub Ides
[0:04] like how do we build engineering teams
[0:04] that that work in software 2.0 systems
[0:04] and and the the data collection and the
[0:04] data annotation which is
[0:04] all part of that software 2.0 like what
[0:04] do you think is the task of programming
[0:04] a software 2.0 is it debugging in the
[0:04] space of hyper parameters or is it also
[0:04] debugging the space of data yeah the way
[0:04] by which you program the computer and
[0:04] influence its algorithm is not by
[0:04] writing the commands yourself you&#39;re
[0:04] changing mostly the data set uh you&#39;re
[0:04] changing the um loss functions of like
[0:04] what the neural net is trying to do how
[0:04] it&#39;s trying to predict things but yeah
[0:04] basically the data sets and the
[0:04] architectures of the neural net and um
[0:04] so in the case of the autopilot a lot of
[0:04] the data sets have to do with for
[0:04] example detection of objects and Lane
[0:04] line markings and traffic lights and so
[0:04] on So You accumulate massive data sets
[0:04] of here&#39;s an example here&#39;s the desired
[0:04] label and then uh here&#39;s roughly how the
[0:04] architect here&#39;s roughly what the
[0:04] algorithm should look like and that&#39;s a
[0:04] conclusional neural net so the
[0:04] specification of the architecture is
[0:04] like a hint as to what the algorithm
[0:04] should roughly look like and then to
[0:04] fill in the blanks process of
[0:04] optimization is the training process
[0:04] and then you take your neural nut that
[0:04] was trained it gives all the right
[0:04] answers on your data set and you deploy
[0:04] it
[0:04] so there&#39;s in that case perhaps it all
[0:04] machine learning cases there&#39;s a lot of
[0:04] tasks
[0:04] so is coming up formulating a task like
[0:04] uh for a multi-headed neural network is
[0:04] formulating a task part of the
[0:04] programming yeah very much so how you
[0:04] break down a problem into a set of tasks
[0:04] yeah
[0:04] I&#39;m on a high level I would say if you
[0:04] look at the software running in in the
[0:04] autopilot I gave a number of talks on
[0:04] this topic I would say originally a lot
[0:04] of it was written in software 1.0
[0:04] there&#39;s imagine lots of C plus plus all
[0:04] right and then gradually there was a
[0:04] tiny neural net that was for example
[0:04] predicting given a single image is there
[0:04] like a traffic light or not or is there
[0:04] a landline marking or not and this
[0:04] neural net didn&#39;t have too much to do in
[0:04] this in the scope of the software it was
[0:04] making tiny predictions on individual
[0:04] little image and then the rest of the
[0:04] system stitched it up so okay we&#39;re
[0:04] actually we don&#39;t have just a single
[0:04] camera with eight cameras we actually
[0:04] have eight cameras over time and so what
[0:04] do you do with these predictions how do
[0:04] you put them together how do you do the
[0:04] fusion of all that information and how
[0:04] do you act on it all of that was written
[0:04] by humans um in C plus
[0:04] and then we decided okay we don&#39;t
[0:04] actually want uh to do all of that
[0:04] Fusion in C plus code because we&#39;re
[0:04] actually not good enough to write that
[0:04] algorithm we want the neural Nets to
[0:04] write the algorithm and we want to Port
[0:04] uh all of that software into the 2.0
[0:04] stack
[0:04] and so then we actually had neural Nets
[0:04] that now take all the eight camera
[0:04] images simultaneously and make
[0:04] predictions for all of that
[0:04] so
[0:04] um and and actually they don&#39;t make
[0:04] predictions in a in the space of images
[0:04] they now make predictions directly in 3D
[0:04] and actually they don&#39;t in three
[0:04] dimensions around the car and now
[0:04] actually we don&#39;t
[0:04] um manually fuse the predictions over in
[0:04] 3D over time we don&#39;t trust ourselves to
[0:04] write that tracker so actually we give
[0:04] the neural net uh the information over
[0:04] time so it takes these videos now and
[0:04] makes those predictions and so your sort
[0:04] of just like putting more and more power
[0:04] into the neural network processing and
[0:04] at the end of it the eventual sort of
[0:04] goal is to have most of the software
[0:04] potentially be in the 2.0 land
[0:04] um because it works significantly better
[0:04] humans are just not very good at writing
[0:04] software basically so the prediction is
[0:04] space happening in this like 4D land
[0:04] yeah was three-dimensional world over
[0:04] time yeah how do you
[0:04] do annotation in that world what what
[0:04] have you as it&#39;s just a data annotation
[0:04] whether it&#39;s self-supervised or manual
[0:04] by humans is um is a big part of this
[0:04] software 2.0 world right I would say by
[0:04] far in the industry if you&#39;re like
[0:04] talking about the industry and how what
[0:04] is the technology of what we have
[0:04] available everything is supervised
[0:04] learning so you need data sets of input
[0:04] desired output and you need lots of it
[0:04] and um there are three properties of it
[0:04] that you need you need it to be very
[0:04] large you need it to be accurate No
[0:04] mistakes and you need it to be diverse
[0:04] you don&#39;t want to uh just have a lot of
[0:04] correct examples of one thing you need
[0:04] to really cover the space of possibility
[0:04] as much as you can and the more you can
[0:04] cover the space of possible inputs the
[0:04] better the algorithm will work at the
[0:04] end now once you have really good data
[0:04] sets that you&#39;re collecting curating
[0:04] um and cleaning you can train uh your
[0:04] neural net
[0:04] um on top of that so a lot of the work
[0:04] goes into cleaning those data sets now
[0:04] as you pointed out it&#39;s probably it
[0:04] could be the question is how do you
[0:04] achieve a ton of uh if you want to
[0:04] basically predict in 3D you need data in
[0:04] 3D to back that up so in this video we
[0:04] have eight videos coming from all the
[0:04] cameras of the system and this is what
[0:04] they saw and this is the truth of what
[0:04] actually was around there was this car
[0:04] there was this car this car these are
[0:04] the lane line markings this is geometry
[0:04] of the road there&#39;s a traffic light in
[0:04] this three-dimensional position you need
[0:04] the ground truth
[0:04] um and so the big question that the team
[0:04] was solving of course is how do you how
[0:04] do you arrive at that ground truth
[0:04] because once you have a million of it
[0:04] and it&#39;s large clean and diverse then
[0:04] training a neural network on it works
[0:04] extremely well and you can ship that
[0:04] into the car
[0:04] and uh so there&#39;s many mechanisms by
[0:04] which we collected that training data
[0:04] you can always go for human annotation
[0:04] you can go for simulation as a source of
[0:04] ground truth you can also go for what we
[0:04] call the offline tracker
[0:04] um
[0:04] that we&#39;ve spoken about at the AI day
[0:04] and so on which is basically an
[0:04] automatic reconstruction process for
[0:04] taking those videos and recovering the
[0:04] three-dimensional sort of reality of
[0:04] what was around that car so basically
[0:04] think of doing like a three-dimensional
[0:04] reconstruction as an offline thing and
[0:04] then understanding that okay there&#39;s 10
[0:04] seconds of video this is what we saw and
[0:04] therefore here&#39;s all the lane last cars
[0:04] and so on and then once you have that
[0:04] annotation you can train your neural
[0:04] Nets to imitate it and how difficult is
[0:04] the reconstruct the 3D reconstruction
[0:04] it&#39;s difficult but it can be done so
[0:04] there&#39;s so the there&#39;s overlap between
[0:04] the cameras and you do the
[0:04] Reconstruction and there&#39;s uh
[0:04] perhaps if there&#39;s any inaccuracy so
[0:04] that&#39;s caught in The annotation step
[0:04] uh yes the nice thing about The
[0:04] annotation is that it is fully offline
[0:04] you have infinite time you have a chunk
[0:04] of one minute and you&#39;re trying to just
[0:04] offline in a super computer somewhere
[0:04] figure out where were the positions of
[0:04] all the cars all the people and you have
[0:04] your full one minute of video from all
[0:04] the Angles and you can run all the
[0:04] neural Nets you want and they can be
[0:04] very efficient massive neural Nets there
[0:04] can be neural Nets that can&#39;t even run
[0:04] in the car later at this time so they
[0:04] can be even more powerful neurons than
[0:04] what you can eventually deploy so you
[0:04] can do anything you want
[0:04] three-dimensional reconstruction neural
[0:04] Nets uh anything you want just to
[0:04] recover that truth and then you
[0:04] supervise that truth
[0:04] what have you learned you said no
[0:04] mistakes about humans
[0:04] doing annotation because I assume humans
[0:04] are uh there&#39;s like a range of things
[0:04] they&#39;re good at in terms of clicking
[0:04] stuff on screen it&#39;s not how interesting
[0:04] is that to you of a problem of designing
[0:04] an annotator where humans are accurate
[0:04] enjoy it like what are they even the
[0:04] metrics are efficient or productive all
[0:04] that kind of stuff yeah so uh I grew The
[0:04] annotation team at Tesla from basically
[0:04] zero to a thousand uh while I was there
[0:04] that was really interesting you know my
[0:04] background is a PhD student researcher
[0:04] so growing that common organization was
[0:04] pretty crazy uh but uh yeah I think it&#39;s
[0:04] extremely interesting and part of the
[0:04] design process very much behind the
[0:04] autopilot as to where you use humans
[0:04] humans are very good at certain kinds of
[0:04] annotations they&#39;re very good for
[0:04] example at two-dimensional annotations
[0:04] of images they&#39;re not good at annotating
[0:04] uh cars over time in three-dimensional
[0:04] space very very hard and so that&#39;s why
[0:04] we were very careful to design the tasks
[0:04] that are easy to do for humans versus
[0:04] things that should be left to the
[0:04] offline tracker like maybe the maybe the
[0:04] computer will do all the triangulation
[0:04] and 3D reconstruction but the human will
[0:04] say exactly these pixels of the image
[0:04] are car exactly these pixels are human
[0:04] and so co-designing the the data
[0:04] annotation pipeline was very much bread
[0:04] and butter was what I was doing daily do
[0:04] you think there&#39;s still a lot of open
[0:04] problems in that space
[0:04] um just in general annotation where the
[0:04] stuff the machines are good at machines
[0:04] do and the humans do what they&#39;re good
[0:04] at and there&#39;s maybe some iterative
[0:04] process right I think to a very large
[0:04] extent we went through a number of
[0:04] iterations and we learned a ton about
[0:04] how to create these data sets I&#39;m not
[0:04] seeing big open problems like originally
[0:04] when I joined I was like I was really
[0:04] not sure how this would turn out yeah
[0:04] but by the time I left I was much more
[0:04] secure in actually we sort of understand
[0:04] the philosophy of how to create these
[0:04] data sets and I was pretty comfortable
[0:04] with where that was at the time so what
[0:04] are strengths and limitations of cameras
[0:04] for the driving test in your
[0:04] understanding when you formulate the
[0:04] driving task as a vision task with eight
[0:04] cameras
[0:04] you&#39;ve seen that the entire you know
[0:04] most of the history of the computer
[0:04] vision field when it has to do with
[0:04] neural networks what just if you step
[0:04] back what are the strengths and
[0:04] limitations of pixels of using pixels to
[0:04] drive yeah pixels I think are a
[0:04] beautiful sensory beautiful sensor I
[0:04] would say the thing is like cameras are
[0:04] very very cheap and they provide a ton
[0:04] of information ton of bits uh so it&#39;s uh
[0:04] extremely cheap sensor for a ton of bits
[0:04] and each one of these bits as a
[0:04] constraint on the state of the world and
[0:04] so you get lots of megapixel images uh
[0:04] very cheap and it just gives you all
[0:04] these constraints for understanding
[0:04] what&#39;s actually out there in the world
[0:04] so vision is probably the highest
[0:04] bandwidth sensor
[0:04] it&#39;s a very high bandwidth sensor and um
[0:04] I love that pixels it is a is a
[0:04] constraint on the world This is highly
[0:04] complex
[0:04] uh high bandwidth constraint in the
[0:04] world on the stage of the world that&#39;s
[0:04] fascinating it&#39;s not just that but again
[0:04] this real real importance of
[0:04] it&#39;s the sensor that humans use
[0:04] therefore everything is designed for
[0:04] that sensor yeah the text the writing
[0:04] the flashing signs everything is
[0:04] designed for vision and so and you just
[0:04] find it everywhere and so that&#39;s why
[0:04] that is the interface you want to be in
[0:04] um talking again about these Universal
[0:04] interfaces and uh that&#39;s where we
[0:04] actually want to measure the world as
[0:04] well and then develop software uh for
[0:04] that sensor but there&#39;s other
[0:04] constraints on the state of the world
[0:04] that humans use to understand the world
[0:04] I mean Vision ultimately is the main one
[0:04] but we&#39;re like we&#39;re like referencing
[0:04] our understanding of human behavior and
[0:04] some common sense
[0:04] physics that could be inferred from
[0:04] vision from from a perception
[0:04] perspective but it feels like we&#39;re
[0:04] using some kind of reasoning
[0:04] to predict the world yeah not just the
[0:04] pixels I mean you have a powerful prior
[0:04] uh sorry right for how the world evolves
[0:04] over time Etc so it&#39;s not just about the
[0:04] likelihood term coming up from the data
[0:04] itself telling you about what you are
[0:04] observing but also the prior term of
[0:04] like where where are the likely things
[0:04] to see and how do they likely move and
[0:04] so on and the question is how complex is
[0:04] the uh
[0:04] the the range of possibilities that
[0:04] might happen in the driving task right
[0:04] that&#39;s still is is that to you still an
[0:04] open problem of how difficult is driving
[0:04] like philosophically speaking
[0:04] like do you all the time you&#39;ve worked
[0:04] on driving do you understand how hard
[0:04] driving is yeah driving is really hard
[0:04] because it has to do with the
[0:04] predictions of all these other agents
[0:04] and the theory of mind and you know what
[0:04] they&#39;re gonna do and are they looking at
[0:04] you are they where are they looking what
[0:04] are they thinking yeah there&#39;s a lot
[0:04] that goes there at the at the full tail
[0:04] of you know the the expansion of the
[0:04] nines that we have to be comfortable
[0:04] with eventually the final problems are
[0:04] of that form I don&#39;t think those are the
[0:04] problems that are very common uh I think
[0:04] eventually they&#39;re important but it&#39;s
[0:04] like really in the tail end in the tail
[0:04] and the rare edge cases
[0:04] from the vision perspective what are the
[0:04] toughest parts of the vision problem of
[0:04] driving
[0:04] um
[0:04] well basically the sensor is extremely
[0:04] powerful but you still need to process
[0:04] that information
[0:04] um and so going from brightnesses of
[0:04] these pixel values to hey here the
[0:04] three-dimensional world is extremely
[0:04] hard and that&#39;s what the neural networks
[0:04] are fundamentally doing and so
[0:04] um the difficulty really is in just
[0:04] doing an extremely good job of
[0:04] engineering the entire pipeline uh the
[0:04] entire data engine having the capacity
[0:04] to train these neural nuts having the
[0:04] ability to evaluate the system and
[0:04] iterate on it uh so I would say just
[0:04] doing this in production at scale is
[0:04] like the hard part it&#39;s an execution
[0:04] problem so the data engine but also the
[0:04] um the sort of deployment of the system
[0:04] such that has low latency performance so
[0:04] it has to do all these steps yeah for
[0:04] the neural net specifically just making
[0:04] sure everything fits into the chip on
[0:04] the car yeah and uh you have a finite
[0:04] budget of flops that you can perform and
[0:04] uh and memory bandwidth and other
[0:04] constraints and you have to make sure it
[0:04] flies and you can squeeze in as much
[0:04] compute as you can into the tiny what
[0:04] have you learned from that process
[0:04] because it maybe that&#39;s one of the
[0:04] bigger like new things coming from a
[0:04] research background
[0:04] where there&#39;s there&#39;s a system that has
[0:04] to run under heavily constrained
[0:04] resources right has to run really fast
[0:04] what what kind of insights have you uh
[0:04] learned from that
[0:05] yeah I&#39;m not sure if it&#39;s if there&#39;s too
[0:05] many insights you&#39;re trying to create a
[0:05] neural net that will fit in what you
[0:05] have available and you&#39;re always trying
[0:05] to optimize it and we talked a lot about
[0:05] it on the AI day and uh basically the
[0:05] the triple backflips that the team is
[0:05] doing to make sure it all fits and
[0:05] utilizes the engine uh so I think it&#39;s
[0:05] extremely good engineering
[0:05] um and then there&#39;s also all kinds of
[0:05] little insights peppered in on how to do
[0:05] it properly let&#39;s actually zoom out
[0:05] because I don&#39;t think we talked about
[0:05] the data engine the entirety of the
[0:05] layout of this idea that I think is just
[0:05] beautiful with humans in the loop can
[0:05] you describe the data engine
[0:05] yeah the data engine is what I call the
[0:05] almost biological feeling like process
[0:05] by which you uh perfect the training
[0:05] sets for these neural networks
[0:05] um so because most of the programming
[0:05] now is in the level of these data sets
[0:05] and make sure they&#39;re large diverse and
[0:05] clean oh basically you have a data set
[0:05] that you think is good you train your
[0:05] neural net you deploy it and then you
[0:05] observe how well it&#39;s performing and
[0:05] you&#39;re trying to uh always increase the
[0:05] quality of your data set so you&#39;re
[0:05] trying to catch scenarios basically
[0:05] there are basically rare and uh it is in
[0:05] these scenarios that the neural Nets
[0:05] will typically struggle in because they
[0:05] weren&#39;t told what to do in those rare
[0:05] cases in the data set but now you can
[0:05] close the loop because if you can now
[0:05] collect all those at scale you can then
[0:05] feed them back into the Reconstruction
[0:05] process I described and uh reconstruct
[0:05] the truth in those cases and add it to
[0:05] the data set and so the whole thing ends
[0:05] up being like a staircase of improvement
[0:05] of perfecting your training set and you
[0:05] have to go through deployments so that
[0:05] you can mine uh the parts that are not
[0:05] yet represented well in the data set so
[0:05] your data set is basically imperfect it
[0:05] needs to be diverse it has pockets there
[0:05] are missing and you need to pad out the
[0:05] pockets you can sort of think of it that
[0:05] way
[0:05] in the data what role do humans play in
[0:05] this so what&#39;s the uh this biological
[0:05] system like a human body is made up of
[0:05] cells what what role like how do you
[0:05] optimize the human uh system the the
[0:05] multiple Engineers collaborating
[0:05] figuring out what to focus on what to
[0:05] contribute which which task to optimize
[0:05] in this neural network
[0:05] uh who&#39;s in charge of figuring out which
[0:05] task needs more data
[0:05] can you speak to the hyper parameters
[0:05] the human uh system right it really just
[0:05] comes down to extremely good execution
[0:05] from an engineering team and does what
[0:05] they&#39;re doing they understand
[0:05] intuitively the philosophical insights
[0:05] underlying the data engine and the
[0:05] process by which the system improves and
[0:05] uh how to again like delegate the
[0:05] strategy of the data collection and how
[0:05] that works and then just making sure
[0:05] it&#39;s all extremely well executed and
[0:05] that&#39;s where most of the work is is not
[0:05] even the philosophizing or the research
[0:05] or the ideas of it it&#39;s just extremely
[0:05] good execution it&#39;s so hard when you&#39;re
[0:05] dealing with data at that scale so your
[0:05] role in the data engine executing well
[0:05] on it it is difficult and extremely
[0:05] important is there a priority of like uh
[0:05] like a vision board of saying like
[0:05] we really need to get better at stop
[0:05] lights
[0:05] yeah like the the prioritization of
[0:05] tasks is that essentially and that comes
[0:05] from the data that comes to um a very
[0:05] large extent to what we are trying to
[0:05] achieve in the product for a map where
[0:05] we&#39;re trying to the release we&#39;re trying
[0:05] to get out
[0:05] um in the feedback from the QA team
[0:05] worth it where the system is struggling
[0:05] or not the things we&#39;re trying to
[0:05] improve and the QA team gives some
[0:05] signal some information
[0:05] in aggregate about the performance of
[0:05] the system in various conditions and
[0:05] then of course all of us drive it and we
[0:05] can also see it it&#39;s really nice to work
[0:05] with the system that you can also
[0:05] experience yourself you know it drives
[0:05] you home it&#39;s is there some insight you
[0:05] can draw from your individual experience
[0:05] that you just can&#39;t quite get from an
[0:05] aggregate statistical analysis of data
[0:05] yeah it&#39;s so weird right yes it&#39;s it&#39;s
[0:05] not scientific in a sense because you&#39;re
[0:05] just one anecdotal sample yeah I think
[0:05] there&#39;s a ton of uh it&#39;s a source of
[0:05] truth it&#39;s your interaction with the
[0:05] system yeah and you can see it you can
[0:05] play with it you can perturb it you can
[0:05] get a sense of it you have an intuition
[0:05] for it I think numbers just like have a
[0:05] way of numbers and plots and graphs are
[0:05] you know much harder yeah it hides a lot
[0:05] of it&#39;s like if you train a language
[0:05] model
[0:05] it&#39;s a really powerful way is by you
[0:05] interacting with it yeah 100 try to
[0:05] build up an intuition yeah I think like
[0:05] Elon also like he always wanted to drive
[0:05] the system himself he drives a lot and
[0:05] uh I&#39;m gonna say almost daily so uh he
[0:05] also sees this as a source of Truth you
[0:05] driving the system uh and it performing
[0:05] and yeah so what do you think tough
[0:05] questions here uh so Tesla last year
[0:05] removed radar from um from the sensor
[0:05] suite and now just announced that it&#39;s
[0:05] going to remove all ultrasonic sensors
[0:05] relying solely on Vision so camera only
[0:05] does that make the perception problem
[0:05] harder or easier
[0:05] I would almost reframe the question in
[0:05] some way so the thing is basically you
[0:05] would think that additional sensors by
[0:05] the way can I just interrupt good I
[0:05] wonder if a language model will ever do
[0:05] that if you prompt it let me reframe
[0:05] your question that would be epic this is
[0:05] the wrong problem sorry it&#39;s like a
[0:05] little bit of a wrong question because
[0:05] basically you would think that these
[0:05] sensors are an asset to you yeah but if
[0:05] you fully consider the entire product in
[0:05] its entirety
[0:05] these sensors are actually potentially
[0:05] reliability
[0:05] because these sensors aren&#39;t free they
[0:05] don&#39;t just appear on your car you need
[0:05] something you need to have an entire
[0:05] supply chain you have people procuring
[0:05] it there can be problems with them they
[0:05] may need replacement they are part of
[0:05] the manufacturing process they can hold
[0:05] back the line in production you need to
[0:05] Source them you need to maintain them
[0:05] you have to have teams that write the
[0:05] firmware all of it and then you also
[0:05] have to incorporate and fuse them into
[0:05] the system in some way and so it
[0:05] actually like bloats the organ the a lot
[0:05] of it and I think Elon is really good at
[0:05] simplify simplified best part is no part
[0:05] and he always tries to throw away things
[0:05] that are not essential because he
[0:05] understands the entropy in organizations
[0:05] and approach and I think uh in this case
[0:05] the cost is high and you&#39;re not
[0:05] potentially seeing it if you&#39;re just a
[0:05] computer vision engineer and I&#39;m just
[0:05] trying to improve my network and you
[0:05] know is it more useful or less useful
[0:05] how useful is it and the thing is if
[0:05] once you consider the full cost of a
[0:05] sensor it actually is potentially a
[0:05] liability and you need to be really sure
[0:05] that it&#39;s giving you extremely useful
[0:05] information in this case we looked at
[0:05] using it or not using it and the Delta
[0:05] was not massive and so it&#39;s not useful
[0:05] is it also blow in the data engine like
[0:05] having more sensors
[0:05] is a distraction and these sensors you
[0:05] know they can change over time for
[0:05] example you can have one type of say
[0:05] radar you can have other type of radar
[0:05] they change over time I suddenly need to
[0:05] worry about it now suddenly you have a
[0:05] column in your sqlite telling you oh
[0:05] which sensor type was it and they all
[0:05] have different distributions and then uh
[0:05] they can they just they contribute noise
[0:05] and entropy into everything and they
[0:05] bloat stuff and also organizationally
[0:05] has been really fascinating to me that
[0:05] it can be very distracting
[0:05] um if you if all if you only want to get
[0:05] to work is Vision all the resources are
[0:05] on it and you&#39;re building out a data
[0:05] engine and you&#39;re actually making
[0:05] forward progress because that is the the
[0:05] sensor with the most bandwidth the most
[0:05] constraints on the world and you&#39;re
[0:05] investing fully into that and you can
[0:05] make that extremely good if you&#39;re uh
[0:05] you&#39;re only a finite amount of sort of
[0:05] spend of focus across different facets
[0:05] of the system and uh this kind of
[0:05] reminds me of Rich Sutton&#39;s a bitter
[0:05] lesson it just seems like simplifying
[0:05] the system yeah
[0:05] in the long run now of course you don&#39;t
[0:05] know what the long run it seems to be
[0:05] always the right solution yeah yes in
[0:05] that case it was 4rl but it seems to
[0:05] apply generally across all systems that
[0:05] do computation yeah so where uh what do
[0:05] you think about the lidar as a crutch
[0:05] debate
[0:05] uh the battle between point clouds and
[0:05] pixels
[0:05] yeah I think this debate is always like
[0:05] slightly confusing to me because it
[0:05] seems like the actual debate should be
[0:05] about like do you have the fleet or not
[0:05] that&#39;s like the really important thing
[0:05] about whether you can achieve a really
[0:05] good functioning of an AI system at this
[0:05] scale so data collection systems yeah do
[0:05] you have a fleet or not it&#39;s
[0:05] significantly more important whether you
[0:05] have lidar or not it&#39;s just another
[0:05] sensor
[0:05] um and uh
[0:05] yeah I think similar to the radar
[0:05] discussion basically I um
[0:05] but yeah I don&#39;t think it it um
[0:05] basically doesn&#39;t offer extra extra
[0:05] information is extremely costly it has
[0:05] all kinds of problems you have to worry
[0:05] about it you have to calibrate it Etc it
[0:05] creates bloat and entropy you have to be
[0:05] really sure that you need this uh this
[0:05] um sensor in this case I basically don&#39;t
[0:05] think you need it and I think honestly I
[0:05] will make a stronger statement I think
[0:05] the others some of the other uh
[0:05] companies are using it are probably
[0:05] going to drop it yeah so you have to
[0:05] consider the sensor in the full
[0:05] in considering can you build a big Fleet
[0:05] that collects a lot of data and can you
[0:05] integrate that sensor with that that
[0:05] data and that sensor into a data engine
[0:05] that&#39;s able to quickly find different
[0:05] parts of the data that then continuously
[0:05] improves whatever the model that you&#39;re
[0:05] using yeah another way to look at it is
[0:05] like vision is necessary in a sense that
[0:05] uh the drive the world is designed for
[0:05] human visual consumption so you need
[0:05] vision is necessary and then also it is
[0:05] sufficient because it has all the
[0:05] information that you that you need for
[0:05] driving and humans obviously is a vision
[0:05] to drive so it&#39;s both necessary and
[0:05] sufficient so you want to focus
[0:05] resources and you have to be really sure
[0:05] if you&#39;re going to bring in other
[0:05] sensors you could you could you could
[0:05] add sensors to Infinity at some point
[0:05] you need to draw the line and I think in
[0:05] this case you have to really consider
[0:05] the full cost of any One sensor that
[0:05] you&#39;re adopting and do you really need
[0:05] it and I think the answer in this case
[0:05] is no so what do you think about the
[0:05] idea of the that the other companies
[0:05] are forming high resolution maps and
[0:05] constraining heavily the geographic
[0:05] regions in which they operate is that
[0:05] approach not in your in your view
[0:05] um not going to scale over time to the
[0:05] entirety of the United States I think
[0:05] I&#39;ll take two as you mentioned like they
[0:05] pre-map all the environments and they
[0:05] need to refresh the map and they have a
[0:05] perfect centimeter level accuracy map of
[0:05] everywhere they&#39;re going to drive it&#39;s
[0:05] crazy how are you going to
[0:05] when we&#39;re talking about autonomy
[0:05] actually changing the world we&#39;re
[0:05] talking about the deployment
[0:05] on a on a global scale of autonomous
[0:05] systems for transportation and if you
[0:05] need to maintain a centimeter accurate
[0:05] map for Earth or like for many cities
[0:05] and keep them updated it&#39;s a huge
[0:05] dependency that you&#39;re taking on huge
[0:05] dependency
[0:05] it&#39;s a massive massive dependency and
[0:05] now you need to ask yourself do you
[0:05] really need it
[0:05] and humans don&#39;t need it
[0:05] um right so it&#39;s it&#39;s very useful to
[0:05] have a low-level map of like okay the
[0:05] connectivity of your road you know that
[0:05] there&#39;s a fork coming up when you drive
[0:05] an environment you sort of have that
[0:05] high level understanding it&#39;s like a
[0:05] small Google Map and Tesla uses Google
[0:05] Map like similar kind of resolution
[0:05] information in the system but it will
[0:05] not pre-map environments to send me a
[0:05] level accuracy it&#39;s a crutch it&#39;s a
[0:05] distraction it costs entropy and it
[0:05] diffuses the team it dilutes the team
[0:05] and you&#39;re not focusing on what&#39;s
[0:05] actually necessary which is the computer
[0:05] vision problem
[0:05] what did you learn about machine
[0:05] learning about engineering about life
[0:05] about yourself as one human being from
[0:05] working with Elon Musk
[0:05] I think the most I&#39;ve learned is about
[0:05] how to sort of run organizations
[0:05] efficiently and how to
[0:05] create efficient organizations and how
[0:05] to fight entropy in an organization so
[0:05] human Engineering in the fight against
[0:05] entropy yeah there&#39;s a there&#39;s a I think
[0:05] Elon is a very efficient warrior in the
[0:05] fight against entropy in organizations
[0:05] what is the entropy in an organization
[0:05] look like exactly it&#39;s process it&#39;s
[0:05] it&#39;s process and inefficiencies and that
[0:05] kind of stuff yeah meetings he hates
[0:05] meetings he keeps telling people to skip
[0:05] meetings if they&#39;re not useful
[0:05] um he basically runs the world&#39;s biggest
[0:05] uh startups I would say uh Tesla SpaceX
[0:05] are the world&#39;s biggest startups Tesla
[0:05] actually has multiple startups I think
[0:05] it&#39;s better to look at it that way and
[0:05] so I think he&#39;s he&#39;s extremely good at
[0:05] uh at that and uh yeah he&#39;s a very good
[0:05] intuition for streamline processes
[0:05] making everything efficient uh best part
[0:05] is no part uh simplifying focusing
[0:05] um and just kind of removing barriers uh
[0:05] moving very quickly making big moves all
[0:05] this is a very startupy sort of seeming
[0:05] things but at scale so strong drive to
[0:05] simplify for me from your perspective I
[0:05] mean that
[0:05] um that also probably applies to just
[0:05] designing systems and machine learning
[0:05] and otherwise yeah like simplify
[0:05] simplify yes
[0:05] what do you think is the secret to
[0:05] maintaining the startup culture in a
[0:05] company that grows is there
[0:05] can you introspect that
[0:05] I do think you need someone in a
[0:05] powerful position with a big hammer like
[0:05] Elon who&#39;s like the cheerleader for that
[0:05] idea and ruthless ruthlessly pursues it
[0:05] if no one has a big enough Hammer
[0:05] everything turns into committees
[0:05] democracy within the company uh process
[0:05] talking to stakeholders decision making
[0:05] just everything just crumbles yeah if
[0:05] you have a big person who&#39;s also really
[0:05] smart and has a big hammer things move
[0:05] quickly so you said your favorite scene
[0:05] in interstellar is the intense docking
[0:05] scene with the AI and Cooper talking
[0:05] saying uh Cooper what are you doing
[0:05] docking it&#39;s not possible no it&#39;s
[0:05] necessary
[0:05] such a good line by the way just so many
[0:05] questions there why in AI
[0:05] in that scene presumably is supposed to
[0:05] be
[0:05] able to compute a lot more than the
[0:05] human is saying it&#39;s not optimal why the
[0:05] human I mean that&#39;s a movie but
[0:05] shouldn&#39;t they AI know much better than
[0:05] the human
[0:05] anyway uh what do you think is the value
[0:05] of setting seemingly impossible goals
[0:05] so like uh
[0:05] our initial intuition which seems like
[0:05] something that
[0:05] you have taken on that Elon espouses
[0:05] that where the initial intuition of the
[0:05] community might say this is very
[0:05] difficult and then you take it on anyway
[0:05] with a crazy deadline you&#39;re just from a
[0:05] human engineering perspective
[0:05] um
[0:05] uh have you seen the value of that
[0:05] I wouldn&#39;t say that setting impossible
[0:05] goals exactly is is a good idea but I
[0:05] think setting very ambitious goals is a
[0:05] good idea I think there&#39;s a what I call
[0:05] sublinear scaling of difficulty uh which
[0:05] means that 10x problems are not 10x hard
[0:05] usually 10x 10x harder problem is like 2
[0:05] or 3x harder to execute on because if
[0:05] you want to actually like if you want to
[0:05] improve the system by 10 it costs some
[0:05] amount of work and if you want to 10x
[0:05] improve the system it doesn&#39;t cost you
[0:05] know 100x amount of the work and it&#39;s
[0:05] because you fundamentally change the
[0:05] approach and it if you start with that
[0:05] constraint then some approaches are
[0:05] obviously dumb and not going to work and
[0:05] it forces you to reevaluate
[0:05] um and I think it&#39;s a very interesting
[0:05] way of approaching problem solving but
[0:05] it requires a weird kind of thinking
[0:05] it&#39;s just going back to your like PhD
[0:05] days it&#39;s like how do you think which
[0:05] ideas in in the machine Learning
[0:05] Community are solvable yes it&#39;s uh it
[0:05] requires what is that I mean there&#39;s the
[0:05] cliche of first prince people&#39;s thinking
[0:05] but like it requires to basically ignore
[0:05] what the community is saying because
[0:05] doesn&#39;t the community doesn&#39;t a
[0:05] community in science usually draw lines
[0:05] of what isn&#39;t isn&#39;t possible right and
[0:05] like it&#39;s very hard to break out of that
[0:05] without going crazy yep I mean I think a
[0:05] good example here is you know the Deep
[0:05] learning revolution in some sense
[0:05] because you could be in computer vision
[0:05] at that time when during the Deep
[0:05] learning sort of revolution of 2012 and
[0:05] so on uh you could be improving your
[0:05] computer vision stack by 10 or we can
[0:05] just be saying actually all this is
[0:05] useless and how do I do 10x better
[0:05] computer vision well it&#39;s not probably
[0:05] by tuning a hog feature detector I need
[0:05] a different approach
[0:05] um I need something that is scalable
[0:05] going back to uh Richard Sutton&#39;s um and
[0:05] understanding sort of like the
[0:05] philosophy of the uh bitter lesson and
[0:05] then being like actually I need a much
[0:05] more scalable system like a neural
[0:05] network that in principle works and then
[0:05] having some deep Believers that can
[0:05] actually execute on that mission and
[0:05] make it work so that&#39;s the 10x solution
[0:05] what do you think is the timeline to
[0:05] solve the problem of autonomous driving
[0:05] this still in part an open question
[0:05] yeah I think the tough thing with
[0:05] timelines of self-driving obviously is
[0:05] that no one has created self-driving
[0:05] yeah so it&#39;s not like what do you think
[0:05] is a timeline to build this bridge well
[0:05] we&#39;ve built million Bridges before
[0:05] here&#39;s how long that takes it&#39;s it you
[0:05] know it&#39;s uh no one has built autonomy
[0:05] it&#39;s not obvious uh some parts turn out
[0:06] to be much easier than others so it&#39;s
[0:06] really hard to forecast you do your best
[0:06] based on trend lines and so on and based
[0:06] on intuition but that&#39;s why
[0:06] fundamentally it&#39;s just really hard to
[0:06] forecast this no one has even still like
[0:06] being inside of it is hard to uh to do
[0:06] yes some things turn out to be much
[0:06] harder and some things turn out to be
[0:06] much easier
[0:06] do you try to avoid making forecasts
[0:06] because like Elon doesn&#39;t avoid them
[0:06] right and heads of car companies in the
[0:06] past have not avoided it either uh Ford
[0:06] and other places have made predictions
[0:06] that we&#39;re going to solve at level four
[0:06] driving by 2020 2021 whatever and now
[0:06] they&#39;re all kind of Backtrack on that
[0:06] prediction
[0:06] IU as a
[0:06] as an AI person
[0:06] do you free yourself privately make
[0:06] predictions or do they get in the way of
[0:06] like your actual ability to think about
[0:06] a thing
[0:06] yeah I would say like what&#39;s easy to say
[0:06] is that this problem is tractable and
[0:06] that&#39;s an easy prediction to make
[0:06] extractable it&#39;s going to work yes it&#39;s
[0:06] just really hard some things turn out to
[0:06] be harder than some things turn out to
[0:06] be easier uh so uh but it definitely
[0:06] feels tractable and it feels like at
[0:06] least the team at Tesla which is what I
[0:06] saw internally is definitely on track to
[0:06] that how do you form
[0:06] a uh strong representation that allows
[0:06] you to make a prediction about
[0:06] tractability so like you&#39;re the leader
[0:06] of a lot a lot of humans
[0:06] you have to kind of say this is actually
[0:06] possible
[0:06] like how do you build up that intuition
[0:06] it doesn&#39;t have to be even driving it
[0:06] could be other tasks it could be um and
[0:06] I wonder what difficult tasks did you
[0:06] work on in your life I mean
[0:06] classification
[0:06] achieving certain just an image that
[0:06] certain level of superhuman level
[0:06] performance yeah expert intuition
[0:06] it&#39;s just intuition it&#39;s belief
[0:06] so just like thinking about it long
[0:06] enough like studying looking at sample
[0:06] data like you said driving
[0:06] uh my intuition has really flawed on
[0:06] this like I don&#39;t have a good intuition
[0:06] about tractability it could be either it
[0:06] could be anything it could be solvable
[0:06] like uh you know the driving task could
[0:06] could be simplified into something quite
[0:06] trivial like uh the solution to the
[0:06] problem would be quite trivial and at
[0:06] scale more and more cars driving
[0:06] perfectly
[0:06] might make the problem much easier Yeah
[0:06] the more cars you have driving like
[0:06] people learn how to drive correctly not
[0:06] correctly but in a way that&#39;s more
[0:06] optimal for a heterogeneous system of
[0:06] autonomous and semi-autonomous and
[0:06] manually driven cars that could change
[0:06] stuff then again also I&#39;ve spent a
[0:06] ridiculous number of hours just staring
[0:06] at pedestrians crossing streets thinking
[0:06] about humans and it feels like the way
[0:06] we use our eye contact
[0:06] it sends really strong signals and
[0:06] there&#39;s certain quirks and edge cases of
[0:06] behavior and of course a lot of the
[0:06] fatalities that happen have to do with
[0:06] drunk driving and
[0:06] um both on The Pedestrian side and the
[0:06] driver&#39;s side so there&#39;s that problem of
[0:06] driving at night and all that kind of
[0:06] yeah so I wonder you know it&#39;s like the
[0:06] space
[0:06] of possible solution to autonomous
[0:06] driving includes so many human factor
[0:06] issues
[0:06] that it&#39;s almost impossible to predict
[0:06] there could be super clean nice
[0:06] Solutions yeah I would say definitely
[0:06] like to use a game analogy there&#39;s some
[0:06] fog of War but you definitely also see
[0:06] the frontier of improvement and you can
[0:06] measure historically how much you&#39;ve
[0:06] made progress and I think for example at
[0:06] least what I&#39;ve seen in uh roughly five
[0:06] years at Tesla when I joined it barely
[0:06] kept laying on the highway I think going
[0:06] up from Palo Alto to SF was like three
[0:06] or four interventions anytime the road
[0:06] would do anything geometrically or turn
[0:06] too much it would just like not work and
[0:06] so going from that to like a pretty
[0:06] competent system in five years and
[0:06] seeing what happens also under the hood
[0:06] and what the scale which the team is
[0:06] operating now with respect to data and
[0:06] compute and everything else uh is just a
[0:06] massive progress
[0:06] so there&#39;s a you&#39;re climbing a mountain
[0:06] and it&#39;s fog but you&#39;re making a lot of
[0:06] progress fog you&#39;re making progress and
[0:06] you see what the next directions are and
[0:06] you&#39;re looking at some of the remaining
[0:06] challenges and they&#39;re not like uh
[0:06] they&#39;re not perturbing you and they&#39;re
[0:06] not changing your philosophy and you&#39;re
[0:06] not contorting yourself you&#39;re like
[0:06] actually these are the things that we
[0:06] still need to do yeah the fundamental
[0:06] components of solving the problems seem
[0:06] to be there for the data engine to the
[0:06] compute to the the computer on the car
[0:06] to the compute for the training all that
[0:06] kind of stuff
[0:06] so you&#39;ve done
[0:06] uh over the years you&#39;ve been a test
[0:06] you&#39;ve done a lot of amazing uh
[0:06] breakthrough ideas and Engineering all
[0:06] of it
[0:06] um from the data engine to The Human
[0:06] Side all of it can you speak to why you
[0:06] chose to leave Tesla basically as I
[0:06] described that ran I think over time
[0:06] during those five years I&#39;ve kind of uh
[0:06] gotten myself into a little bit of a
[0:06] managerial position most of my days were
[0:06] you know meetings and growing the
[0:06] organization and making decisions about
[0:06] sort of high level strategic decisions
[0:06] about the team and what it should be
[0:06] working on and so on and uh
[0:06] it&#39;s kind of like a corporate executive
[0:06] role and I can do it I think I&#39;m okay at
[0:06] it but it&#39;s not like fundamentally what
[0:06] I what I enjoy and so I think uh when I
[0:06] joined uh there was no computer vision
[0:06] team because Tesla was just going from
[0:06] the transition of using mobileye a
[0:06] third-party vendor for all of its
[0:06] computer vision to having to build its
[0:06] computer vision system so when I showed
[0:06] up there were two people training deep
[0:06] neural networks and they were training
[0:06] them at a computer at their at their
[0:06] legs like uh
[0:06] kind of basic classification task yeah
[0:06] and so
[0:06] I kind of like grew that into what I
[0:06] think is a fairly respectable deep
[0:06] learning team a massive compute cluster
[0:06] a very good um data annotation
[0:06] organization and uh I was very happy
[0:06] with where that was it became quite
[0:06] autonomous and so I kind of stepped away
[0:06] and I uh you know I&#39;m very excited to do
[0:06] much more technical things again
[0:06] yeah and kind of like we focus on AGI
[0:06] what was this soul searching like
[0:06] because you took a little time off and
[0:06] think like what um how many mushrooms
[0:06] did you take no I&#39;m just uh I mean what
[0:06] what was going through your mind the
[0:06] human lifetime is finite yeah he did a
[0:06] few incredible things you&#39;re you&#39;re one
[0:06] of the best teachers of AI in the world
[0:06] you&#39;re one of the best and I don&#39;t mean
[0:06] that I mean that in the best possible
[0:06] way you&#39;re one of the best tinkerers in
[0:06] the AI world meaning like understanding
[0:06] the fundamental fundamentals of how
[0:06] something works by building it from
[0:06] scratch and playing with it with the
[0:06] basic intuitions it&#39;s like Einstein
[0:06] feinmen were all really good at this
[0:06] kind of stuff like a small example of a
[0:06] thing to to play with it to try to
[0:06] understand it uh so that and obviously
[0:06] now with us that you help build a team
[0:06] of machine learning
[0:06] um uh like engineers and a system that
[0:06] actually accomplishes something in the
[0:06] real world so given all that like what
[0:06] was the soul searching like
[0:06] well it was hard because obviously I
[0:06] love the company a lot and I love I love
[0:06] Elon I love Tesla I want um
[0:06] it was hard to leave I love the team
[0:06] basically
[0:06] um but
[0:06] yeah I think actually I would
[0:06] potentially like interested in
[0:06] revisiting it maybe coming back at some
[0:06] point uh working in Optimus working in
[0:06] AGI at Tesla uh I think Tesla is going
[0:06] to do incredible things it&#39;s basically
[0:06] like
[0:06] uh it&#39;s a massive large-scale robotics
[0:06] kind of company with a ton of In-House
[0:06] talent for doing really incredible
[0:06] things and I think uh
[0:06] human robots are going to be amazing I
[0:06] think autonomous transportation is going
[0:06] to be amazing all this is happening at
[0:06] Tesla so I think it&#39;s just a really
[0:06] amazing organization so being part of it
[0:06] and helping it along I think was very
[0:06] basically I enjoyed that a lot yeah it
[0:06] was basically difficult for those
[0:06] reasons because I love the company uh
[0:06] but you know I&#39;m happy to potentially at
[0:06] some point come back for act two but I
[0:06] felt like at this stage
[0:06] I built the team it felt autonomous and
[0:06] uh I became a manager and I wanted to do
[0:06] a lot more technical stuff I wanted to
[0:06] learn stuff I wanted to teach stuff and
[0:06] uh I just kind of felt like it was a
[0:06] good time for for a change of pace a
[0:06] little bit what do you think is uh the
[0:06] best movie sequel of all time speaking
[0:06] of part two because like because most of
[0:06] them suck in movie sequels yeah and you
[0:06] tweet about movies so just in a tiny
[0:06] tangent is there what&#39;s your what was
[0:06] like a favorite movie sequel
[0:06] Godfather Part Two
[0:06] um are you a fan of Godfather because
[0:06] you didn&#39;t even tweet or mention the
[0:06] Godfather yeah I don&#39;t love that movie I
[0:06] know it hasn&#39;t edit that out we&#39;re gonna
[0:06] edit out the hate towards the Godfather
[0:06] how dare you just I think I will make a
[0:06] strong statement I don&#39;t know why I
[0:06] don&#39;t know why but I basically don&#39;t
[0:06] like any movie before 1995
[0:06] something like that didn&#39;t you mention
[0:06] Terminator two okay okay that&#39;s like uh
[0:06] Terminator 2 was a little bit later 1990
[0:06] no I think Terminator 2 was a name I
[0:06] like Terminator one as well so okay so
[0:06] like a few exceptions but by and large
[0:06] for some reason I don&#39;t like movies
[0:06] before 1995 or something they feel very
[0:06] slow the camera is like zoomed out it&#39;s
[0:06] boring it&#39;s kind of naive it&#39;s kind of
[0:06] weird and also Terminator was very much
[0:06] ahead of its time yes and The Godfather
[0:06] there&#39;s like no AGI
[0:06] [Laughter]
[0:06] I mean but you have Good Will Hunting
[0:06] was one of the movies you mentioned and
[0:06] that doesn&#39;t have any AGI either I guess
[0:06] that&#39;s mathematics yeah I guess
[0:06] occasionally I do enjoy movies that
[0:06] don&#39;t feature or like Anchorman that has
[0:06] no that&#39;s the increment it&#39;s so good I
[0:06] don&#39;t understand
[0:06] um speaking of AGI because I don&#39;t
[0:06] understand why Will Ferrell is so funny
[0:06] it doesn&#39;t make sense it doesn&#39;t compute
[0:06] there&#39;s just something about him and
[0:06] he&#39;s a singular human because you don&#39;t
[0:06] get that many comedies
[0:06] these days and I wonder if it has to do
[0:06] about the culture uh or the like the
[0:06] machine of Hollywood or does it have to
[0:06] do with just we got lucky with certain
[0:06] people and comedy it came together
[0:06] because he is a singular human
[0:06] that was a ridiculous tangent I
[0:06] apologize but you mentioned humanoid
[0:06] robot so what do you think about Optimus
[0:06] about Tesla bot do you think we&#39;ll have
[0:06] robots in the factory in in the home in
[0:06] 10 20 30 40 50 years yeah I think it&#39;s a
[0:06] very hard project I think it&#39;s going to
[0:06] take a while but who else is going to
[0:06] build humano robots at scale yeah and I
[0:06] think it is a very good form factor to
[0:06] go after because like I mentioned the
[0:06] the world is designed for humanoid form
[0:06] factor these things would be able to
[0:06] operate our machines they would be able
[0:06] to sit down in chairs uh potentially
[0:06] even drive cars uh basically the world
[0:06] is designed for humans that&#39;s the form
[0:06] factor you want to invest into and make
[0:06] work over time uh I think you know
[0:06] there&#39;s another school of thought which
[0:06] is okay pick a problem and design a
[0:06] robot to it but actually designing a
[0:06] robot and getting a whole data engine
[0:06] and everything behind it to work is
[0:06] actually an incredibly hard problem so
[0:06] it makes sense to go after General
[0:06] interfaces that uh okay they are not
[0:06] perfect for any one given task but they
[0:06] actually have the generality of just
[0:06] with a prompt with English able to do
[0:06] something across and so I think it makes
[0:06] a lot of sense to go after a general uh
[0:06] interface
[0:06] um in the physical world and I think
[0:06] it&#39;s a very difficult project I think
[0:06] it&#39;s going to take time but I see no
[0:06] other no other company that can execute
[0:06] on that Vision I think it&#39;s going to be
[0:06] amazing like uh basically physical labor
[0:06] like if you think transportation is a
[0:06] large Market try physical labor insane
[0:06] well but it&#39;s not just physical labor to
[0:06] me the thing that&#39;s also exciting is the
[0:06] social robotics so the the relationship
[0:06] we&#39;ll have on different levels with
[0:06] those robots that&#39;s why I was really
[0:06] excited to see Optimus like um people
[0:06] have criticized me for the excitement
[0:06] but I&#39;ve I&#39;ve worked with uh uh a lot of
[0:06] research Labs that do humanoid legged
[0:06] robots Boston Dynamics unitary a lot
[0:06] there&#39;s a lot of companies that do
[0:06] legged robots but that&#39;s the the
[0:06] Elegance of the movement is a tiny tiny
[0:06] part of the big picture so integrating
[0:06] the two big exciting things to me about
[0:06] Tesla doing humanoid or any Lego robots
[0:06] is
[0:06] clearly integrating it into the data
[0:06] engine so the the data engine aspect so
[0:06] the actual intelligence for the
[0:06] perception and the and the control and
[0:06] the planning and all that kind of stuff
[0:06] integrating into this huge the fleet
[0:06] that you mentioned right
[0:06] um and then speaking of Fleet the second
[0:06] thing is the mass manufacturers Just
[0:06] knowing
[0:06] uh culturally
[0:06] uh driving towards a simple robot that&#39;s
[0:06] cheap to produce at scale yeah and doing
[0:06] that well having experience to do that
[0:06] well that changes everything that&#39;s why
[0:06] that&#39;s a very different culture and
[0:06] style than Boston Dynamics who by the
[0:06] way those those robots are just the the
[0:06] way they move it&#39;s uh like it&#39;ll be a
[0:06] very long time before Tesla could
[0:06] achieve the smoothness of movement but
[0:06] that&#39;s not what it&#39;s about it&#39;s it&#39;s
[0:06] about uh it&#39;s about the entirety of the
[0:06] system like we talked about the data
[0:06] engine and the fleet that&#39;s super
[0:06] exciting even the initial sort of models
[0:06] uh but that too was really surprising
[0:06] that in a few months you can get a
[0:06] prototype yep and the reason that
[0:06] happened very quickly is as you alluded
[0:06] to there&#39;s a ton of copy based from
[0:06] what&#39;s happening in the autopilot yes a
[0:06] lot the amount of expertise that like
[0:06] came out of the Woodworks at Tesla for
[0:06] building the human robot was incredible
[0:06] to see like basically Elon said at one
[0:06] point we&#39;re doing this and then
[0:06] next day basically like all these CAD
[0:06] models started to appear and people talk
[0:06] about like the supply chain and
[0:06] Manufacturing and uh people showed up
[0:06] with like screwdrivers and everything
[0:06] like the other day and started to like
[0:06] put together the body and I was like
[0:06] whoa like all these people exist at
[0:06] Tesla and fundamentally building a car
[0:06] is actually not that different from
[0:06] building a robot the same and that is
[0:06] true uh not just for uh the hardware
[0:06] pieces and also let&#39;s not forget
[0:06] Hardware not just for a demo but
[0:06] manufacturing of that Hardware at scale
[0:06] is like a whole different thing but for
[0:06] software as well basically this robot
[0:06] currently thinks it&#39;s a car
[0:06] uh it&#39;s gonna have a midlife crisis at
[0:06] some point it thinks it&#39;s a car
[0:06] um some of the earlier demos actually we
[0:06] were talking about potentially doing
[0:06] them outside in the parking lot because
[0:06] that&#39;s where all of the computer vision
[0:06] that was like working out of the box
[0:06] instead of like in inside
[0:06] um but all the operating system
[0:06] everything just copy pastes uh computer
[0:06] vision mostly copy paste I mean you have
[0:06] to retrain the neural Nets but the
[0:06] approach and everything in data engine
[0:06] and offline trackers and the way we go
[0:06] about the occupancy tracker and so on
[0:06] everything copy paste you just need to
[0:06] retrain the neural Lots uh and then the
[0:06] planning control of course has to change
[0:06] quite a bit but there&#39;s a ton of copy
[0:06] paste from what&#39;s happening at Tesla and
[0:06] so if you were to if you were to go with
[0:06] goal of like okay let&#39;s build a million
[0:06] human robots and you&#39;re not Tesla that&#39;s
[0:06] that&#39;s a lot to ask if you&#39;re a Tesla
[0:06] it&#39;s actually like
[0:06] it&#39;s not it&#39;s not that crazy and then
[0:06] the the follow-up question is and how
[0:06] difficult just like we&#39;re driving how
[0:06] difficult is the manipulation task uh
[0:06] such that it can have an impact at scale
[0:06] I think
[0:06] depending on the context the really nice
[0:06] thing about robotics is the um unless
[0:06] you do a manufacturing that kind of
[0:06] stuff is there&#39;s more room for error
[0:06] driving is so safety critical and so
[0:06] that and also time critical robot is
[0:06] allowed to move slower which is nice yes
[0:06] I think it&#39;s going to take a long time
[0:06] but the way you want to structure the
[0:06] development is you need to say okay it&#39;s
[0:06] going to take a long time how can I set
[0:06] up the uh product development roadmap so
[0:06] that I&#39;m making Revenue along the way
[0:06] I&#39;m not setting myself up for a zero one
[0:06] loss function where it doesn&#39;t work
[0:06] until it works you don&#39;t want to be in
[0:06] that position you want to make it useful
[0:06] almost immediately and then you want to
[0:06] slowly deploy it uh and uh at scale and
[0:06] you want to set up your data engine your
[0:06] improvement Loops the Telemetry the
[0:06] evaluation the harness and everything
[0:06] and you want to improve the product over
[0:06] time incorrectly and you&#39;re making
[0:06] Revenue along the way that&#39;s extremely
[0:06] important because otherwise you cannot
[0:06] build these these uh large undertakings
[0:06] just like don&#39;t make sense economically
[0:06] and also from the point of view of the
[0:06] team working on it they need the
[0:06] dopamine along the way they&#39;re not just
[0:06] going to make a promise about this being
[0:06] useful this is going to change the world
[0:06] in 10 years when it works this is not
[0:06] where you want to be you want to be in a
[0:06] place like I think autopilot is today
[0:06] where it&#39;s offering increased safety and
[0:06] um and uh convenience of driving today
[0:06] people pay for it people like it people
[0:06] purchase it and then you also have the
[0:06] greater mission that you&#39;re working
[0:06] towards
[0:06] and you see that so the dopamine for the
[0:06] team that that was a source of Happiness
[0:06] yes you&#39;re deploying this people like it
[0:06] people drive it people pay for it they
[0:06] care about it there&#39;s all these YouTube
[0:06] videos your grandma drives it she gives
[0:06] you feedback people like it people
[0:06] engage with it you engage with it huge
[0:06] do uh people that drive Teslas like
[0:06] recognize you and give you love like uh
[0:06] like hey thanks for the for the this
[0:07] nice feature that it&#39;s doing yeah I
[0:07] think the tricky thing is like some
[0:07] people really love you some people
[0:07] unfortunately like you&#39;re working on
[0:07] something that you think is extremely
[0:07] valuable useful Etc some people do hate
[0:07] you there&#39;s a lot of people who like
[0:07] hate me and the team and whatever the
[0:07] whole project and I think they have
[0:07] Tesla drivers uh many cases they&#39;re not
[0:07] actually yeah that&#39;s that&#39;s actually
[0:07] makes me sad about humans or the current
[0:07] the ways that humans interact I think
[0:07] that&#39;s actually fixable I think humans
[0:07] want to be good to each other I think
[0:07] Twitter and social media is part of the
[0:07] mechanism that actually somehow makes
[0:07] the negativity more viral but it doesn&#39;t
[0:07] deserve like disproportionately uh add
[0:07] of like a viral viral boost yeah
[0:07] negativity but like I wish people would
[0:07] just get excited about uh so suppress
[0:07] some of the jealousy some of the ego and
[0:07] just get excited for others and then
[0:07] there&#39;s a Karma aspect to that you get
[0:07] excited for others they&#39;ll get excited
[0:07] for you same thing in Academia if you&#39;re
[0:07] not careful there&#39;s a like a dynamical
[0:07] system there if you if you think of in
[0:07] silos and get jealous of somebody else
[0:07] being successful that actually perhaps
[0:07] counterintuitively uh leads the less
[0:07] productivity of you as a community and
[0:07] you individually I feel like if you keep
[0:07] celebrating others that actually makes
[0:07] you more successful yeah I think people
[0:07] haven&#39;t in depending on the industry
[0:07] haven&#39;t quite learned that yet yeah some
[0:07] people are also very negative and very
[0:07] vocal so they&#39;re very prominently
[0:07] featured but actually there&#39;s a ton of
[0:07] people who are cheerleaders but they&#39;re
[0:07] silent cheerlead cheerleaders and uh
[0:07] when you talk to people just in the
[0:07] world they will all tell you it&#39;s
[0:07] amazing it&#39;s great especially like
[0:07] people who understand how difficult it
[0:07] is to get this stuff working like people
[0:07] who have built products and makers
[0:07] entrepreneur entrepreneurs like make
[0:07] making this work and changing something
[0:07] is is incredibly hard those people are
[0:07] more likely to cheerlead you well one of
[0:07] the things that makes me sad is some
[0:07] folks in the robotics Community uh don&#39;t
[0:07] do the cheerleading and they should
[0:07] there&#39;s uh because they know how
[0:07] difficult it is well they actually
[0:07] sometimes don&#39;t know how difficult it is
[0:07] to create a product at scale right they
[0:07] actually deploy in the real world a lot
[0:07] of the
[0:07] development of robots and AI systems is
[0:07] done on very specific small benchmarks
[0:07] um and as opposed to real world
[0:07] conditions yes
[0:07] yeah I think it&#39;s really hard to work on
[0:07] robotics in academic setting or AI
[0:07] systems that apply in the real world you
[0:07] you&#39;ve criticized you uh flourished and
[0:07] loved for time the imagenet the famed
[0:07] image in that data set and I&#39;ve recently
[0:07] had some words uh of criticism that the
[0:07] academic research ml Community gives a
[0:07] little too much love still to the
[0:07] imagenet or like those kinds of
[0:07] benchmarks can you speak to the
[0:07] strengths and weaknesses of data sets
[0:07] used in machine learning research
[0:07] actually I don&#39;t know that I recall the
[0:07] specific instance where I was uh unhappy
[0:07] or criticizing imagenet I think imagenet
[0:07] has been extremely valuable uh it was
[0:07] basically a benchmark that allowed the
[0:07] Deep Learning Community to demonstrate
[0:07] that deep neural networks actually work
[0:07] it was uh there&#39;s a massive value in
[0:07] that um so I think imagenet was useful
[0:07] but um basically it&#39;s become a bit of an
[0:07] eminist at this point so eminist is like
[0:07] the 228 by 28 grayscale digits there&#39;s
[0:07] kind of a joke data set that everyone
[0:07] like just crushes if there&#39;s no Papers
[0:07] written on MNS though right maybe they
[0:07] should have strong papers like papers
[0:07] that focus on like how do we learn with
[0:07] a small amount of data that kind of
[0:07] stuff yeah I could see that being
[0:07] helpful but not in sort of like Mainline
[0:07] computer vision research anymore of
[0:07] course I think the way I&#39;ve heard you
[0:07] somewhere maybe I&#39;m just imagining
[0:07] things but I think you said like image
[0:07] that was a huge contribution to the
[0:07] community for a long time and now it&#39;s
[0:07] time to move past those kinds of well
[0:07] image that has been crushed I mean you
[0:07] know the error rates are
[0:07] uh
[0:07] yeah we&#39;re getting like 90 accuracy in
[0:07] in one thousand classification way uh
[0:07] prediction and I&#39;ve seen those images
[0:07] and it&#39;s like really high that&#39;s really
[0:07] that&#39;s really good if I remember
[0:07] correctly the top five error rate is now
[0:07] like one percent or something given your
[0:07] experience with a gigantic real world
[0:07] data set would you like to see
[0:07] benchmarks move in certain directions
[0:07] that the research Community uses
[0:07] unfortunately I don&#39;t think academics
[0:07] currently have the next imagenet uh
[0:07] We&#39;ve obviously I think we&#39;ve crushed
[0:07] mnist we&#39;ve basically kind of crushed
[0:07] imagenet uh and there&#39;s no next sort of
[0:07] big Benchmark that the entire Community
[0:07] rallies behind and uses
[0:07] um
[0:07] you know for further development of
[0:07] these networks uh yeah what it takes for
[0:07] data set to Captivate the imagination of
[0:07] everybody like where they all get behind
[0:07] it that that could also need like a
[0:07] viral like a leader right you know
[0:07] somebody with popularity I mean that
[0:07] yeah why did image of that take off
[0:07] is there or is it just the accident of
[0:07] History it was the right amount of
[0:07] difficult uh it was the right amount of
[0:07] difficult and simple and uh interesting
[0:07] enough it just kind of like it was it
[0:07] was the right time for that kind of a
[0:07] data set
[0:07] question from Reddit
[0:07] uh what are your thoughts on the role
[0:07] that synthetic data and game engines
[0:07] will play in the future of neural net
[0:07] model development
[0:07] I think
[0:07] um as neural Nets converge to humans
[0:07] uh the value of simulation to neural
[0:07] Nets will be similar to value of
[0:07] simulation to humans
[0:07] so people use simulation for uh
[0:07] people use simulation because they can
[0:07] learn something in that kind of a system
[0:07] and without having to actually
[0:07] experience it
[0:07] um but are you referring to the
[0:07] simulation we&#39;re doing our head no sorry
[0:07] simulation I mean like video games or uh
[0:07] you know other forms of simulation for
[0:07] various professionals well so let me
[0:07] push back on that because maybe their
[0:07] simulation that we do in our heads like
[0:07] simulate if I do this
[0:07] what do I think will happen Okay that&#39;s
[0:07] like internal simulation yeah internal
[0:07] isn&#39;t that what we&#39;re doing let&#39;s
[0:07] assuming before we act oh yeah but
[0:07] that&#39;s independent from like the use of
[0:07] uh simulation in the sense of like
[0:07] computer games or using simulation for
[0:07] training set creation or you know is it
[0:07] independent or is it just Loosely
[0:07] correlated because like uh
[0:07] isn&#39;t that useful to do like um
[0:07] counterfactual or like Edge case
[0:07] simulation to like
[0:07] you know what happens if there&#39;s a
[0:07] nuclear war
[0:07] what happens if there&#39;s you know like
[0:07] those kinds of things yeah that&#39;s a
[0:07] different simulation from like Unreal
[0:07] Engine that&#39;s how I interpreted the
[0:07] question uh so like
[0:07] simulation of the average case
[0:07] is that what&#39;s Unreal Engine what what
[0:07] what what what do you mean by Unreal
[0:07] Engine so
[0:07] simulating a world yeah physics of that
[0:07] world
[0:07] why is that different like because you
[0:07] also can add Behavior to that world and
[0:07] you can try all kinds of stuff right
[0:07] like you could throw all kinds of weird
[0:07] things into it so Unreal Engine is not
[0:07] just about similar I mean I guess it is
[0:07] about submitting the physics of the
[0:07] world it&#39;s also doing something with
[0:07] that
[0:07] yeah the graphics the physics and the
[0:07] Agents that you put into the environment
[0:07] and stuff like that yeah see I think you
[0:07] I feel like you said that it&#39;s not that
[0:07] important I guess for the future of AI
[0:07] development is that is that correct to
[0:07] interpret you that way uh I think
[0:07] humans use uh simulators
[0:07] for um humans use simulators and they
[0:07] find them useful and so computers will
[0:07] use simulators and find them useful
[0:07] okay so you&#39;re saying it&#39;s not I I don&#39;t
[0:07] use simulators very often I play a video
[0:07] game every once in a while but I don&#39;t
[0:07] think I derive any wisdom about my own
[0:07] existence from from those video games
[0:07] it&#39;s a momentary escape from reality
[0:07] versus a source of wisdom about reality
[0:07] so I don&#39;t so I think that&#39;s a very
[0:07] polite way of saying simulation is not
[0:07] that useful
[0:07] yeah maybe maybe not I don&#39;t see it as
[0:07] like a fundamental really important part
[0:07] of like training neural Nets currently
[0:07] uh but I think uh as neural Nets become
[0:07] more and more powerful I think you will
[0:07] need fewer examples to train additional
[0:07] behaviors and uh simulation is of course
[0:07] there&#39;s a domain Gap in a simulation
[0:07] that&#39;s not the real world there&#39;s
[0:07] slightly something different but uh with
[0:07] a powerful enough neural net uh you need
[0:07] um The Domain Gap can be bigger I think
[0:07] because neural network will sort of
[0:07] understand that even though it&#39;s not the
[0:07] real world it like has all this high
[0:07] level structure that I&#39;m supposed to be
[0:07] able to learn from so then you&#39;ll know
[0:07] we&#39;ll actually
[0:07] yeah you&#39;ll be able to Leverage
[0:07] the synthetic data better yes by closing
[0:07] the get better understanding in which
[0:07] ways this is not real data exactly
[0:07] uh right to do better questions next
[0:07] time that was that was a question but
[0:07] I&#39;m just kidding all right um
[0:07] so is it possible do you think speaking
[0:07] of feminist to construct neural Nets and
[0:07] training processes that require very
[0:07] little data
[0:07] so we&#39;ve been talking about huge data
[0:07] sets like the internet for training I
[0:07] mean one way to say that is like you
[0:07] said like the querying itself is another
[0:07] level of training I guess and that
[0:07] requires a little data yeah but do you
[0:07] see any uh value in doing research and
[0:07] kind of going down the direction of can
[0:07] we use very little data to train to
[0:07] construct a knowledge base 100 I just
[0:07] think like at some point you need a
[0:07] massive data set and then when you
[0:07] pre-train your massive neural nut and
[0:07] get something that you know is like a
[0:07] GPT or something then you&#39;re able to be
[0:07] very efficient at training any arbitrary
[0:07] new task uh so a lot of these gpts you
[0:07] know you can do tasks like sentiment
[0:07] analysis or translation or so on just by
[0:07] being prompted with very few examples
[0:07] here&#39;s the kind of thing I want you to
[0:07] do like here&#39;s an input sentence here&#39;s
[0:07] the translation into German input
[0:07] sentence translation to German input
[0:07] sentence blank and the neural network
[0:07] will complete the translation to German
[0:07] just by looking at sort of the example
[0:07] you&#39;ve provided and so that&#39;s an example
[0:07] of a very few shot uh learning in the
[0:07] activations of the neural net instead of
[0:07] the weights of the neural land and so I
[0:07] think
[0:07] basically uh just like humans neural
[0:07] Nets will become very data efficient at
[0:07] learning any other new task but at some
[0:07] point you need a massive data set to
[0:07] pre-train your network
[0:07] to get that and probably we humans have
[0:07] something like that do we do we have
[0:07] something like that do we have a passive
[0:07] in the background
[0:07] background model constructing thing that
[0:07] just runs all the time in a
[0:07] self-supervised way we&#39;re not conscious
[0:07] of it I think humans definitely I mean
[0:07] obviously we have uh we learn a lot
[0:07] during during our life span but also we
[0:07] have a ton of Hardware that helps us
[0:07] initialize initialization coming from
[0:07] sort of evolution and so I think that&#39;s
[0:07] also a really big a big component a lot
[0:07] of people in the field I think they just
[0:07] talk about the amounts of like seconds
[0:07] and the you know that a person has lived
[0:07] pretending that this is a table arasa
[0:07] sort of like a zero initialization of a
[0:07] neural net and it&#39;s not like you can
[0:07] look at a lot of animals like for
[0:07] example zebras zebras get born and they
[0:07] see and they can run there&#39;s zero train
[0:07] data in their lifespan they can just do
[0:07] that so somehow I have no idea how
[0:07] Evolution has found a way to encode
[0:07] these algorithms and these neural net
[0:07] initializations are extremely good to 80
[0:07] CGS and I have no idea how this works
[0:07] but apparently it&#39;s possible because
[0:07] here&#39;s a proof by existence there&#39;s
[0:07] something magical about going from a
[0:07] single cell to an organism that is born
[0:07] to the first few years of life I kind of
[0:07] like the idea that the reason we don&#39;t
[0:07] remember anything about the first few
[0:07] years of our life is that it&#39;s a really
[0:07] painful process like it&#39;s a very
[0:07] difficult challenging
[0:07] training process yeah like
[0:07] intellectually like
[0:07] and maybe yeah I mean I don&#39;t why don&#39;t
[0:07] we remember any of that there might be
[0:07] some crazy training going on and the
[0:07] that maybe that&#39;s the background model
[0:07] training that uh is is very painful and
[0:07] so it&#39;s best for the system once it&#39;s
[0:07] trained not to remember how it&#39;s
[0:07] constructed I think it&#39;s just like the
[0:07] hardware for long-term memory is just
[0:07] not fully developed sure I kind of feel
[0:07] like the first few years of uh of
[0:07] infants is not actually like learning
[0:07] it&#39;s brain maturing yeah
[0:07] um we&#39;re born premature
[0:07] um and there&#39;s a theory along those
[0:07] lines because of the birth canal and the
[0:07] swelling of the brain and so we&#39;re born
[0:07] premature and then the first few years
[0:07] we&#39;re just the brains maturing and then
[0:07] there&#39;s some learning eventually
[0:07] um
[0:07] it&#39;s my current view on it what do you
[0:07] think do you think neural Nets can have
[0:07] long-term memory
[0:07] like that approach is something like
[0:07] humans do you think you know do you
[0:07] think there needs to be another meta
[0:07] architecture on top of it to add
[0:07] something like a knowledge base that
[0:07] learns facts about the world and all
[0:07] that kind of stuff yes but I don&#39;t know
[0:07] to what extent it will be explicitly
[0:07] constructed
[0:07] um it might take unintuitive forms where
[0:07] you are telling the GPT like hey you
[0:07] have a you have a declarative memory
[0:07] bank to which you can store and retrieve
[0:07] data from and whenever you encounter
[0:07] some information that you find useful
[0:07] just save it to your memory bank and
[0:07] here&#39;s an example of something you have
[0:07] retrieved and Heiser how you say it and
[0:07] here&#39;s how you load from it you just say
[0:07] load whatever you teach it in text in
[0:07] English and then it might learn to use a
[0:07] memory bank from from that oh so so the
[0:07] neural net is the architecture for the
[0:07] background model the the base thing and
[0:07] then yeah everything else is just on top
[0:07] of this it&#39;s not just a text right it&#39;s
[0:07] you&#39;re giving it gadgets and gizmos so
[0:07] uh you&#39;re teaching in some kind of a
[0:07] special Language by which we can it can
[0:07] save arbitrary information and retrieve
[0:07] it at a later time and you&#39;re telling
[0:07] about these special tokens and how to
[0:07] arrange them to use these interfaces
[0:07] it&#39;s like hey you can use a calculator
[0:07] here&#39;s how you use it just do five three
[0:07] plus four one equals and when equals is
[0:07] there uh a calculator will actually read
[0:07] out the answer and you don&#39;t have to
[0:07] calculate it yourself and you just like
[0:07] tell it in English this might actually
[0:07] work do you think in that sense gato is
[0:07] interesting the the Deep Mind system
[0:07] that it&#39;s not just new language but
[0:07] actually throws it all
[0:07] uh in the same pile images actions all
[0:07] that kind of stuff that&#39;s basically what
[0:07] we&#39;re moving towards yeah I think so so
[0:07] gato is uh is very much a kitchen sink
[0:07] approach to like
[0:07] um reinforcement learning lots of
[0:07] different environments with a single
[0:07] fixed Transformer model right
[0:07] um I think it&#39;s a very sort of early
[0:07] result in that in that realm but I think
[0:07] uh yeah it&#39;s along the lines of what I
[0:07] think things will eventually look like
[0:07] right so this is the early days of a
[0:07] system that eventually will look like
[0:07] this like from a rigid Rich sudden
[0:07] perspective yeah I&#39;m not super huge fan
[0:07] of I think all these interfaces that
[0:07] like look very different
[0:07] um I would want everything to be
[0:07] normalized into the same API so for
[0:07] example it&#39;s green pixels versus same
[0:07] API instead of having like different
[0:07] world environments at a very different
[0:07] physics and Joint configurations and
[0:07] appearances and whatever and you&#39;re
[0:07] having some kind of special tokens for
[0:07] different games that you can plug I&#39;d
[0:07] rather just normalize everything to a
[0:07] single interface so it looks the same to
[0:07] the neural net if that makes sense so
[0:07] it&#39;s all going to be pixel based pong in
[0:07] the end I think so
[0:07] okay uh let me ask you about your own
[0:07] personal life
[0:07] a lot of people want to know you&#39;re one
[0:07] of the most productive and brilliant
[0:07] people in the history of AI what is a
[0:07] productive day in the life of Andre
[0:07] capathi look like
[0:07] what time do you wake up because imagine
[0:07] um some kind of dance between the
[0:07] average productive day and a perfect
[0:07] productive day so the perfect productive
[0:07] day is the thing we strive
[0:07] towards in the average is kind of what
[0:07] it kind of converges to getting all the
[0:07] mistakes and human eventualities and so
[0:07] on yeah so what times you wake up are
[0:07] you morning person I&#39;m not a morning
[0:07] person I&#39;m a night owl for sure I think
[0:07] stable or not that&#39;s semi-stable like a
[0:07] eight or nine or something like that
[0:07] during my PhD it was even later I used
[0:07] to go to sleep usually at 3am I think uh
[0:07] the am hours are are precious and very
[0:07] interesting time to work because
[0:07] everyone is asleep
[0:07] um at 8 AM or 7 A.M the east coast is
[0:07] awake so there&#39;s already activity
[0:07] there&#39;s already some text messages
[0:07] whatever there&#39;s stuff happening you can
[0:07] go in like some news website and there&#39;s
[0:07] stuff happening it&#39;s distracting uh at
[0:07] 3am everything is totally quiet and so
[0:07] you&#39;re not going to be bothered and you
[0:07] have solid chunks of time to do your
[0:07] work
[0:07] um so I like those periods Night Owl by
[0:07] default and then I think like productive
[0:07] time basically
[0:07] um what I like to do is you need you
[0:07] need to like build some momentum on the
[0:07] problem without too much distraction and
[0:07] um you need to load your Ram uh your
[0:07] working memory with that problem
[0:07] and then you need to be obsessed with it
[0:07] when you&#39;re taking shower when you&#39;re
[0:07] falling asleep you need to be obsessed
[0:07] with the problem and it&#39;s fully in your
[0:07] memory and you&#39;re ready to wake up and
[0:07] work on it right there so there&#39;s a
[0:07] scale of uh is this in a scale temporal
[0:07] scale of a single day or a couple of
[0:07] days a week a month so I can&#39;t talk
[0:07] about one day basically in isolation
[0:07] because it&#39;s a whole process when I want
[0:07] to get when I want to get productive in
[0:08] the problem I feel like I need a span of
[0:08] a few days where I can really get in on
[0:08] that problem and I don&#39;t want to be
[0:08] interrupted and I&#39;m going to just uh be
[0:08] completely obsessed with that problem
[0:08] and that&#39;s where I do most of my good
[0:08] workouts
[0:08] you&#39;ve done a bunch of cool like little
[0:08] projects in a very short amount of time
[0:08] very quickly so that that requires you
[0:08] just focusing on it yeah basically I
[0:08] need to load my working memory with the
[0:08] problem and I need to be productive
[0:08] because there&#39;s always like a huge fixed
[0:08] cost to approaching any problem uh you
[0:08] know like I was struggling with this for
[0:08] example at Tesla because I want to work
[0:08] on like small side projects but okay you
[0:08] first need to figure out okay I need to
[0:08] SSH into my cluster I need to bring up a
[0:08] vs code editor so I can like work on
[0:08] this I need to I run into some stupid
[0:08] error because of some reason like you&#39;re
[0:08] not at a point where you can be just
[0:08] productive right away you are facing
[0:08] barriers and so it&#39;s about uh really
[0:08] removing all that barrier and you&#39;re
[0:08] able to go into the problem and you have
[0:08] the full problem loaded in your memory
[0:08] and somehow avoiding distractions of all
[0:08] different forms like uh news stories
[0:08] emails but also distractions from other
[0:08] interesting projects that you previously
[0:08] worked on are currently working on and
[0:08] so on you just want to really focus your
[0:08] mind and I mean I can take some time off
[0:08] for distractions and in between but I
[0:08] think it can&#39;t be too much uh you know
[0:08] most of your day is sort of like spent
[0:08] on that problem and then you know I
[0:08] drink coffee I have my morning routine I
[0:08] look at some news uh Twitter Hacker News
[0:08] Wall Street Journal Etc
[0:08] so basically you wake up you have some
[0:08] coffee are you trying to get to work as
[0:08] quickly as possible do you do taking
[0:08] this diet of of like what the hell&#39;s
[0:08] happening in the world first I am I do
[0:08] find it interesting to know about the
[0:08] world I don&#39;t know that it&#39;s useful or
[0:08] good but it is part of my routine right
[0:08] now so I do read through a bunch of news
[0:08] articles and I want to be informed and
[0:08] um I&#39;m suspicious of it I&#39;m suspicious
[0:08] of the practice but currently that&#39;s
[0:08] where I am Oh you mean suspicious about
[0:08] the positive effect yeah of that
[0:08] practice on your productivity and your
[0:08] well-being my well-being psychologically
[0:08] uh and also on your ability to deeply
[0:08] understand the world because how there&#39;s
[0:08] a bunch of sources of information you&#39;re
[0:08] not really focused on deeply integrating
[0:08] yeah it&#39;s a little bit distracting or
[0:08] yeah in terms of a perfectly productive
[0:08] day for how long of a stretch of time
[0:08] in one session do you try to work and
[0:08] focus on a thing it&#39;s a couple hours is
[0:08] it one hours or 30 minutes is 10 minutes
[0:08] I can probably go like a small few hours
[0:08] and then I need some breaks in between
[0:08] for like food and stuff and uh
[0:08] yeah but I think like uh it&#39;s still
[0:08] really hard to accumulate hours I was
[0:08] using a Tracker that told me exactly how
[0:08] much time I&#39;ve spent coding any one day
[0:08] and even on a very productive day I
[0:08] still spent only like six or eight hours
[0:08] yeah and it&#39;s just because there&#39;s so
[0:08] much padding commute talking to people
[0:08] food Etc there&#39;s like the cost of life
[0:08] just living and sustaining and
[0:08] homeostasis and just maintaining
[0:08] yourself as a human is very high and and
[0:08] there seems to be a desire within the
[0:08] human mind to to uh to participate in
[0:08] society that creates that padding yeah
[0:08] because I yeah the most productive days
[0:08] I&#39;ve ever had is just completely from
[0:08] start to finish just tuning out
[0:08] everything yep and just sitting there
[0:08] and then and then you could do more than
[0:08] six and eight hours yeah is there some
[0:08] wisdom about what gives you strength to
[0:08] do like uh tough days of long Focus
[0:08] yeah just like whenever I get obsessed
[0:08] about a problem something just needs to
[0:08] work something just needs to exist it
[0:08] needs to exist and you so you&#39;re able to
[0:08] deal with bugs and programming issues
[0:08] and technical issues and uh design
[0:08] decisions that turn out to be the wrong
[0:08] ones you&#39;re able to think through all of
[0:08] that given given that you want to think
[0:08] to exist yeah it needs to exist and then
[0:08] I think to me also a big factor is uh
[0:08] you know are other humans are going to
[0:08] appreciate it are they going to like it
[0:08] that&#39;s a big part of my motivation if
[0:08] I&#39;m helping humans and they seem happy
[0:08] they say nice things uh they tweet about
[0:08] it or whatever that gives me pleasure
[0:08] because I&#39;m doing something useful so
[0:08] like you do see yourself sharing it with
[0:08] the world like with yes on GitHub with a
[0:08] blog post or through videos yeah I was
[0:08] thinking about it like suppose I did all
[0:08] these things but did not share them I
[0:08] don&#39;t think I would have the same amount
[0:08] of motivation that I can build up you
[0:08] enjoy the feeling of other people
[0:08] uh gaining value and happiness from the
[0:08] stuff you&#39;ve created yeah
[0:08] uh what about diet
[0:08] is there I saw you playing with in
[0:08] intermittent fast do you fast does that
[0:08] help with everything
[0:08] well the things you played what&#39;s been
[0:08] most beneficial to the your ability to
[0:08] mentally focus on a thing and just meant
[0:08] the mental productivity and happiness
[0:08] you still fast yeah it&#39;s so fast but I
[0:08] do intermittent fasting but really what
[0:08] it means at the end of the day is I skip
[0:08] breakfast yeah so I do uh 18 6 roughly
[0:08] by default when I&#39;m in my steady state
[0:08] if I&#39;m traveling or doing something else
[0:08] I will break the rules but in my steady
[0:08] state I do 18 6 so I eat only from 12 to
[0:08] 6. not a hard Rule and I break it often
[0:08] but that&#39;s my default and then um yeah
[0:08] I&#39;ve done a bunch of random experiments
[0:08] for the most part right now uh where
[0:08] I&#39;ve been for the last year and a half I
[0:08] want to say is I&#39;m um plant-based or
[0:08] planned forward I heard plant forward it
[0:08] sounds better exactly I didn&#39;t actually
[0:08] know the differences but it sounds
[0:08] better in my mind but it just means I
[0:08] prefer plant-based food and raw or
[0:08] cooked or I prefer cooked uh and blunt
[0:08] paste so plant-based
[0:08] oh forgive me I don&#39;t actually know how
[0:08] wide the category of plant entails
[0:08] Wellness just means that you&#39;re not uh
[0:08] and you can flex and uh you just prefer
[0:08] to eat plants and you know you&#39;re not
[0:08] making you&#39;re not trying to influence
[0:08] other people and if someone is you come
[0:08] to someone&#39;s house party and they serve
[0:08] you a stake that they&#39;re really proud of
[0:08] you will eat it yes right it&#39;s just not
[0:08] judgment oh that&#39;s beautiful I mean
[0:08] that&#39;s
[0:08] um on the flip side of that but I&#39;m very
[0:08] sort of flexible have you tried doing
[0:08] one meal a day uh I have uh accidentally
[0:08] not consistently but I&#39;ve accidentally
[0:08] had that I don&#39;t I don&#39;t like it I think
[0:08] it makes me feel uh not good it&#39;s too
[0:08] it&#39;s too much too much of a hit yeah and
[0:08] uh So currently I have about two meals a
[0:08] day 12 and six I do that non-stop I&#39;m
[0:08] doing it now I&#39;m doing one meal a day
[0:08] okay so it&#39;s interesting it&#39;s a
[0:08] interesting feeling have you ever fasted
[0:08] longer than a day yeah I&#39;ve done a bunch
[0:08] of water fasts because I was curious
[0:08] what happens uh anything interesting
[0:08] yeah I would say so I mean you know
[0:08] what&#39;s interesting is that you&#39;re hungry
[0:08] for two days and then starting day three
[0:08] or so you&#39;re not hungry it&#39;s like such a
[0:08] weird feeling because you haven&#39;t eaten
[0:08] in a few days and you&#39;re not hungry
[0:08] isn&#39;t that weird it&#39;s really one of the
[0:08] many weird things about human biology is
[0:08] figure something out it finds finds
[0:08] another source of energy or something
[0:08] like that or uh relaxes the system I
[0:08] don&#39;t know how yeah the body is like
[0:08] you&#39;re hungry you&#39;re hungry and then it
[0:08] just gives up it&#39;s like okay I guess
[0:08] we&#39;re fasting now there&#39;s nothing and
[0:08] then it just kind of like focuses on
[0:08] trying to make you not hungry uh and you
[0:08] know not feel the the damage of that and
[0:08] uh trying to give you some space to
[0:08] figure out the food situation
[0:08] so are you still to this day most
[0:08] productive uh at night I would say I am
[0:08] but it is really hard to maintain my PhD
[0:08] schedule
[0:08] um especially when I was say working at
[0:08] Tesla and so on it&#39;s a non-starter so
[0:08] but even now like you know people want
[0:08] to meet for
[0:08] various events they Society lives in a
[0:08] certain period of time and you sort of
[0:08] have to like work so that&#39;s it&#39;s hard to
[0:08] like do a social thing and then after
[0:08] that return and do work yeah it&#39;s just
[0:08] really hard
[0:08] uh that&#39;s why I try to do social things
[0:08] I try not to do too uh too much drinking
[0:08] so I can return and continue doing work
[0:08] um but a Tesla is there is there
[0:08] conversions in Tesla but any any company
[0:08] is there a convergence towards the
[0:08] schedule or is there more
[0:08] is that how humans behave when they
[0:08] collaborate I need to learn about this
[0:08] yeah do they try to keep a consistent
[0:08] schedule you&#39;re all awake at the same
[0:08] time I mean I do try to create a routine
[0:08] and I try to create a steady state in
[0:08] which I&#39;m uh comfortable in uh so I have
[0:08] a morning routine I have a day routine I
[0:08] try to keep things to do a steady state
[0:08] and um things are predictable and then
[0:08] you can sort of just like your body just
[0:08] sort of like sticks to that and if you
[0:08] try to stress that a little too much it
[0:08] will create uh you know when you&#39;re
[0:08] traveling and you&#39;re dealing with jet
[0:08] lag you&#39;re not able to really Ascend to
[0:08] you know where you need to go yeah yeah
[0:08] that&#39;s weird as humans with the habits
[0:08] and stuff uh what are your thoughts on
[0:08] work-life balance throughout a human
[0:08] lifetime
[0:08] so the testing part was known for sort
[0:08] of pushing people to their limits
[0:08] in terms of what they&#39;re able to do in
[0:08] terms of what they&#39;re uh trying to do in
[0:08] terms of how much they work all that
[0:08] kind of stuff yeah I mean I will say
[0:08] teslaq is still too much uh bad rep for
[0:08] this because what&#39;s happening is Tesla
[0:08] is a it&#39;s a bursting environment uh so I
[0:08] would say the Baseline uh my only point
[0:08] of reference is Google where I&#39;ve
[0:08] interned three times and I saw what it&#39;s
[0:08] like inside Google and and deepmind
[0:08] um I would say the Baseline is higher
[0:08] than that but then there&#39;s a punctuated
[0:08] equilibrium where once in a while
[0:08] there&#39;s a fire and uh someone like
[0:08] people work really hard and so it&#39;s
[0:08] spiky and bursty and then all the
[0:08] stories get collected about the bursts
[0:08] yeah and then it gives the appearance of
[0:08] like total insanity but actually it&#39;s
[0:08] just a bit more intense environment and
[0:08] there are fires and Sprints and so I
[0:08] think uh you know definitely though I I
[0:08] would say
[0:08] um it&#39;s a more intense environment than
[0:08] something you would get but you in your
[0:08] person forget all of that just in your
[0:08] own personal life
[0:08] um what do you think about
[0:08] the happiness of a human being a
[0:08] brilliant person like yourself
[0:08] about finding a balance between work and
[0:08] life or is it such a thing not a good
[0:08] thought experiment
[0:08] yeah I think I think balance is good but
[0:08] I also love to have Sprints that are out
[0:08] of distribution and that&#39;s what I think
[0:08] I&#39;ve been pretty uh creative and
[0:08] um as well Sprints out of distribution
[0:08] means that most of the time
[0:08] you have a yeah quote-unquote balance I
[0:08] have balance most of the time yes I like
[0:08] being obsessed with something once in a
[0:08] while once in a while is what once a
[0:08] week once a month once a year yeah
[0:08] probably like say once a month or
[0:08] something yeah and that&#39;s when we get a
[0:08] new GitHub repo come on yeah that&#39;s when
[0:08] you like really care about a problem it
[0:08] must exist this will be awesome you&#39;re
[0:08] obsessed with it and now you can&#39;t just
[0:08] do it on that day you need to pay the
[0:08] fixed cost of getting into the groove
[0:08] and then you need to stay there for a
[0:08] while and then Society will come and
[0:08] they will try to mess with you and they
[0:08] will try to distract you yeah yeah the
[0:08] worst thing is like a person who&#39;s like
[0:08] I just need five minutes of your time
[0:08] yeah this is the cost of that is not
[0:08] five minutes and Society needs to change
[0:08] how it thinks about just five minutes of
[0:08] your time right it&#39;s never it&#39;s never
[0:08] just one minute it&#39;s just 30 it&#39;s just a
[0:08] quick what&#39;s the big deal why are you
[0:08] being so yeah no
[0:08] uh what&#39;s your computer setup what uh
[0:08] what&#39;s like the perfect are you somebody
[0:08] that&#39;s flexible to no matter what laptop
[0:08] four screens yeah uh or do you uh prefer
[0:08] a certain setup that you&#39;re most
[0:08] productive um I guess the one that I&#39;m
[0:08] familiar with is one large screen uh 27
[0:08] inch
[0:08] um and my laptop on the side with
[0:08] operating system I do Max that&#39;s my
[0:08] primary for all tasks I would say OS X
[0:08] but when you&#39;re working on deep learning
[0:08] everything as Linux your SSH into a
[0:08] cluster and you&#39;re working remotely but
[0:08] what about the actual development like
[0:08] that using the IDE yeah you would use uh
[0:08] I think a good way is you just run vs
[0:08] code
[0:08] um my favorite editor right now on your
[0:08] Mac but you are actually you have a
[0:08] remote folder through SSH
[0:08] um so the actual files that you&#39;re
[0:08] manipulating are on the cluster
[0:08] somewhere else so what&#39;s the best IDE
[0:08] uh vs code what else do people so I use
[0:08] emacs still that&#39;s cool uh so it may be
[0:08] cool I don&#39;t know if it&#39;s maximum
[0:08] productivity
[0:08] um so what what do you recommend in
[0:08] terms of editors you worked with a lot
[0:08] of software Engineers editors for
[0:08] python C plus plus machine learning
[0:08] applications I think the current answer
[0:08] is vs code currently I believe that&#39;s
[0:08] the best
[0:08] um IDE it&#39;s got a huge amount of
[0:08] extensions it has a GitHub co-pilot
[0:08] um uh integration which I think is very
[0:08] valuable what do you think about the the
[0:08] co-pilot integration I was actually uh I
[0:08] got to talk a bunch with Guido and
[0:08] Rossum who&#39;s a creative Python and he
[0:08] loves Coppola he like he programs a lot
[0:08] with it yeah uh do you
[0:08] yeah he&#39;s copilot I love it and uh it&#39;s
[0:08] free for me but I would pay for it yeah
[0:08] I think it&#39;s very good and the utility
[0:08] that I found with it was is in is it I
[0:08] would say there is a learning curve and
[0:08] you need to figure out when it&#39;s helpful
[0:08] and when to pay attention to its outputs
[0:08] and when it&#39;s not going to be helpful
[0:08] where you should not pay attention to it
[0:08] because if you&#39;re just reading its
[0:08] suggestions all the time it&#39;s not a good
[0:08] way of interacting with it but I think I
[0:08] was able to sort of like mold myself to
[0:08] it I find it&#39;s very helpful number one
[0:08] in copy paste and replace some parts so
[0:08] I don&#39;t um when the pattern is clear
[0:08] it&#39;s really good at completing the
[0:08] pattern and number two sometimes it
[0:08] suggests apis that I&#39;m not aware of so
[0:08] it tells you about something that you
[0:08] didn&#39;t know so and that&#39;s an opportunity
[0:08] to discover and you it&#39;s an opportunity
[0:08] to see I would never take copilot code
[0:08] AS given I almost always uh copy a copy
[0:08] this into a Google Search and you see
[0:08] what this function is doing and then
[0:08] you&#39;re like oh it&#39;s actually actually
[0:08] exactly what I need thank you copilot so
[0:08] you learned something so it&#39;s in part a
[0:08] search engine apart maybe getting the
[0:08] exact syntax correctly that once you see
[0:08] it yep it&#39;s that NP hard thing it&#39;s like
[0:08] once you see it you know yes exactly
[0:08] correct exactly you yourself you can
[0:08] struggle you can verify efficiently but
[0:08] you you can&#39;t generate efficiently and
[0:08] copilot really I mean it&#39;s it&#39;s
[0:08] autopilot for programming right and
[0:08] currently it&#39;s doing the link following
[0:08] which is like the simple copy paste and
[0:08] sometimes suggest uh but over time it&#39;s
[0:08] going to become more and more autonomous
[0:08] and so the same thing will play out in
[0:08] not just coding but actually across many
[0:08] many different things probably but
[0:08] coding is an important one right like
[0:08] writing programs yeah what how do you
[0:08] see the future of that developing uh the
[0:08] program synthesis like being able to
[0:08] write programs that are more and more
[0:08] complicated because right now it&#39;s human
[0:08] supervised in interesting ways yes like
[0:08] what it feels like the transition will
[0:08] be very painful
[0:08] my mental model for it is the same thing
[0:08] will happen as with the autopilot uh So
[0:08] currently it&#39;s doing link following is
[0:08] doing some simple stuff and eventually
[0:08] we&#39;ll be doing autonomy and people will
[0:08] have to intervene less and less and
[0:08] there could be like you like testing
[0:08] mechanisms
[0:08] like if it writes a function and that
[0:08] function looks pretty damn correct but
[0:08] how do you know it&#39;s correct because
[0:08] you&#39;re like getting lazier and lazier as
[0:08] a programmer like your ability to
[0:08] because like little bugs but I guess it
[0:08] won&#39;t make a little no it will it
[0:08] copilot will make uh off by one subtle
[0:08] bugs it has done that to me but do you
[0:08] think future systems will or is it
[0:08] really the off by one is actually a
[0:08] fundamental challenge of programming in
[0:08] that case it wasn&#39;t fundamental and I
[0:08] think things can improve but uh yeah I
[0:08] think humans have to supervise I am
[0:08] nervous about people not supervising
[0:08] what comes out and what happens to for
[0:08] example the proliferation of bugs in all
[0:08] of our systems I&#39;m nervous about that
[0:08] but I think and there will probably be
[0:08] some other copilots for bug finding and
[0:08] stuff like that at some point because
[0:08] there will be like a lot more automation
[0:08] for uh oh man
[0:08] so it&#39;s like a program a co-pilot that
[0:08] generates a compiler for one that does a
[0:08] linter yes one that does like a a type
[0:08] Checker yes
[0:08] it&#39;s a committee of like a GPT sort of
[0:08] like and then they&#39;ll be like a manager
[0:08] for the committee yeah and then there&#39;ll
[0:08] be somebody that says a new version of
[0:08] this is needed we need to regenerate it
[0:08] yeah there were 10 gpts that were
[0:08] forwarded and gave 50 suggestions
[0:08] another one looked at it and picked a
[0:08] few that they like a bug one looked at
[0:08] it and it was like it&#39;s probably a bug
[0:08] they got re-ranked by some other thing
[0:08] and then a final Ensemble uh GPT comes
[0:08] in it&#39;s like okay given everything you
[0:08] guys have told me this is probably the
[0:08] next token you know the feeling is the
[0:08] number of programmers in the world has
[0:08] been growing and growing very quickly do
[0:08] you think it&#39;s possible that it&#39;ll
[0:08] actually level out and drop to like a
[0:08] very low number with this kind of world
[0:08] because then you&#39;ll be doing software
[0:08] 2.0 programming
[0:08] um and you&#39;ll be doing this kind of
[0:08] generation of copilot type systems
[0:08] programming but you won&#39;t be doing the
[0:08] old school
[0:08] software 1.0 program I don&#39;t currently
[0:08] think that they&#39;re just going to replace
[0:08] human programmers
[0:08] um
[0:08] it&#39;s I&#39;m so hesitant saying stuff like
[0:08] this right because this is going to be
[0:08] replaced in five years I don&#39;t know it&#39;s
[0:08] going to show that like this is where we
[0:08] thought because I I agree with you but I
[0:08] think we might be very surprised
[0:08] right like what are the next
[0:08] I I what&#39;s your sense of what we&#39;re
[0:08] seeing with language models like does it
[0:08] feel like the beginning or the middle or
[0:08] the end the beginning 100 I think the
[0:08] big question in my mind is for sure GPT
[0:09] will be able to program quite well
[0:09] competently and so on how do you steer
[0:09] the system you still have to provide
[0:09] some guidance to what you actually are
[0:09] looking for and so how do you steer it
[0:09] and how do you say how do you talk to it
[0:09] how do you um
[0:09] audit it and verify that what is done is
[0:09] correct and how do you like work with
[0:09] this and it&#39;s as much not just an AI
[0:09] problem but a UI ux problem yeah
[0:09] um so beautiful fertile ground for so
[0:09] much interesting work for vs code plus
[0:09] plus where you&#39;re not just it&#39;s not just
[0:09] human programming anymore it&#39;s amazing
[0:09] yeah so you&#39;re interacting with the
[0:09] system so not just one prompt but it&#39;s
[0:09] iterative prompting yeah you&#39;re trying
[0:09] to figure out having a conversation with
[0:09] the system yeah that actually I mean to
[0:09] me that&#39;s super exciting to have a
[0:09] conversation with the program I&#39;m
[0:09] writing
[0:09] yeah maybe at some point uh you&#39;re just
[0:09] conversing with it it&#39;s like okay here&#39;s
[0:09] what I want to do actually this variable
[0:09] maybe it&#39;s not even that low level as
[0:09] variable but you can also Imagine like
[0:09] can you translate this to c plus and
[0:09] back to python yeah that already kind of
[0:09] existence no but just like doing it as
[0:09] part of the program experience like I
[0:09] think I&#39;d like to write this function in
[0:09] C plus plus
[0:09] or or like you just keep changing for
[0:09] different uh different programs because
[0:09] they&#39;re different syntax maybe I want to
[0:09] convert this into a functional language
[0:09] and so like you get to become
[0:09] multilingual as a programmer and dance
[0:09] back and forth efficiently yeah I mean I
[0:09] think the UI ux of it though is like
[0:09] still very hard to think through because
[0:09] it&#39;s not just about writing code on a
[0:09] page you have an entire developer
[0:09] environment you have a bunch of hardware
[0:09] on it uh you have some environmental
[0:09] variables you have some scripts that are
[0:09] running in the Chrome job like there&#39;s a
[0:09] lot going on to like working with
[0:09] computers and how do these uh systems
[0:09] set up environment flags and work across
[0:09] multiple machines and set up screen
[0:09] sessions and automate different
[0:09] processes like how all that works and
[0:09] it&#39;s auditable by humans and so on is
[0:09] like massive question at the moment
[0:09] you&#39;ve built archive sanity
[0:09] what is archive and what is the future
[0:09] of academic research publishing that you
[0:09] would like to see so archive is This
[0:09] pre-print Server so if you have a paper
[0:09] you can submit it for publication to
[0:09] journals or conferences and then wait
[0:09] six months and then maybe get a decision
[0:09] pass or fail or you can just upload it
[0:09] to Archive
[0:09] and then people can tweet about it three
[0:09] minutes later and then everyone sees it
[0:09] everyone reads it and everyone can
[0:09] profit from it uh in their own ways you
[0:09] can cite it and it has an official look
[0:09] to it it feels like a pub like it feels
[0:09] like a publication process yeah it feels
[0:09] different than you if you just put in a
[0:09] blog post oh yeah yeah I mean it&#39;s a
[0:09] paper and usually the the bar is higher
[0:09] for something that you would expect on
[0:09] archive as opposed to and something you
[0:09] would see in a blog post well the
[0:09] culture created the bar because you
[0:09] could probably yes host a pretty crappy
[0:09] face for an archive
[0:09] um so what&#39;s that make you feel like
[0:09] what&#39;s that make you feel about peer
[0:09] review so rigorous peer review by two
[0:09] three experts versus the peer review of
[0:09] the community right as it&#39;s written yeah
[0:09] basically I think the community is very
[0:09] well able to peer review things very
[0:09] quickly on Twitter and I think maybe it
[0:09] just has to do something with AI machine
[0:09] learning field specifically though I
[0:09] feel like things are more easily
[0:09] auditable um and the verification is is
[0:09] easier potentially than the verification
[0:09] somewhere else so it&#39;s kind of like um
[0:09] you can think of these uh scientific
[0:09] Publications there&#39;s like little
[0:09] blockchains where everyone&#39;s building on
[0:09] each other&#39;s work and setting each other
[0:09] and you sort of have ai which is kind of
[0:09] like this much faster and loose
[0:09] blockchain but then you have and any one
[0:09] individual entry is like very um very
[0:09] cheap to make and then you have other
[0:09] fields where maybe that model doesn&#39;t
[0:09] make as much sense
[0:09] um and so I think in AI at least things
[0:09] are pretty easily verifiable and so
[0:09] that&#39;s why when people upload papers
[0:09] they&#39;re a really good idea and so on
[0:09] people can try it out like the next day
[0:09] and they can be the final Arbiter
[0:09] whether it works or not on their problem
[0:09] and the whole thing just moves
[0:09] significantly faster so I kind of feel
[0:09] like Academia still has a place sorry
[0:09] this like conference Journal process
[0:09] still has a place but it&#39;s sort of like
[0:09] an um it lags behind I think and it&#39;s a
[0:09] bit more maybe higher quality process
[0:09] but it&#39;s not sort of the place where you
[0:09] will discover Cutting Edge work anymore
[0:09] yeah it used to be the case when I was
[0:09] starting my PhD that you go to
[0:09] conferences and journals and you discuss
[0:09] all the latest research now when you go
[0:09] to a conference or Journal like no one
[0:09] discusses anything that&#39;s there because
[0:09] it&#39;s already like three generations ago
[0:09] irrelevant yes which makes me sad about
[0:09] like deepmind for example where they
[0:09] they still they still publish in nature
[0:09] and these big prestigious I mean there&#39;s
[0:09] still value as opposed to The Prestige
[0:09] that comes with these big venues but the
[0:09] the result is that they they&#39;ll announce
[0:09] some breakthrough performance and it&#39;ll
[0:09] take like a year to actually publish the
[0:09] details I mean and those details in if
[0:09] they were published immediately would
[0:09] Inspire the community to move in certain
[0:09] directions with that yeah it would speed
[0:09] up the rest of the community but I don&#39;t
[0:09] know to what extent that&#39;s part of their
[0:09] objective function also that&#39;s true so
[0:09] it&#39;s not just the prestige a little bit
[0:09] of the delay is uh is part yeah they
[0:09] certainly deepmind specifically has been
[0:09] um working in the regime of having a
[0:09] slightly higher quality basically
[0:09] process and latency and uh publishing
[0:09] those papers that way another question
[0:09] from Reddit do you or have you suffered
[0:09] from imposter syndrome being the
[0:09] director of AI Tesla being this person
[0:09] when you&#39;re at Stanford where like the
[0:09] world looks at you as the expert in AI
[0:09] to teach teach the world about machine
[0:09] learning when I was leaving Tesla after
[0:09] five years I spent a ton of time in
[0:09] meeting rooms uh and you know I would
[0:09] read papers in the beginning when I
[0:09] joined Tesla I was writing code and then
[0:09] I was writing lesson last code and I was
[0:09] reading code and then I was reading
[0:09] lesson less code and so this is just a
[0:09] natural progression that happens I think
[0:09] and uh definitely I would say near the
[0:09] tail end that&#39;s when it sort of like
[0:09] starts to hit you a bit more that you&#39;re
[0:09] supposed to be an expert but actually
[0:09] the source of Truth is the code that
[0:09] people are writing the GitHub and the
[0:09] actual the actual code itself and you&#39;re
[0:09] not as familiar with that as you used to
[0:09] be and so I would say maybe there&#39;s some
[0:09] like insecurity there yeah that&#39;s
[0:09] actually pretty profound that a lot of
[0:09] the insecurity has to do with not
[0:09] writing the code in the computer science
[0:09] space like that because that is the
[0:09] truth that that right there code is the
[0:09] source of Truth the papers and
[0:09] everything else it&#39;s a high level
[0:09] summary I don&#39;t uh yeah just a high
[0:09] level summary but at the end of the day
[0:09] you have to read code it&#39;s impossible to
[0:09] translate all that code into actual uh
[0:09] you know paper form uh so when when
[0:09] things come out especially when they
[0:09] have a source code available that&#39;s my
[0:09] favorite place to go so like I said
[0:09] you&#39;re one of the greatest teachers of
[0:09] machine learning AI ever uh from cs231n
[0:09] to today what advice would you give to
[0:09] beginners interested in getting into
[0:09] machine learning
[0:09] beginners are often focused on like what
[0:09] to do and I think the focus should be
[0:09] more like how much you do so I I&#39;m kind
[0:09] of like believer on a high level in this
[0:09] 10 000 hours kind of concept where
[0:09] you just kind of have to just pick the
[0:09] things where you can spend time and you
[0:09] you care about and you&#39;re interested in
[0:09] you literally have to put in 10 000
[0:09] hours of work
[0:09] um it doesn&#39;t even like matter as much
[0:09] like where you put it and your you&#39;ll
[0:09] iterate and you&#39;ll improve and you&#39;ll
[0:09] waste some time I don&#39;t know if there&#39;s
[0:09] a better way you need to put in 10 000
[0:09] hours but I think it&#39;s actually really
[0:09] nice because I feel like there&#39;s some
[0:09] sense of determinism about uh being an
[0:09] expert at a thing if you spend ten
[0:09] thousand hours you can literally pick an
[0:09] arbitrary thing and I think if you spend
[0:09] ten thousand hours of deliberate effort
[0:09] and work you actually will become an
[0:09] expert at it and so I think it&#39;s kind of
[0:09] like a nice thought
[0:09] um and so uh basically I would focus
[0:09] more on like are you spending 10 000
[0:09] hours that&#39;s what I focus on so and then
[0:09] thinking about what kind of mechanisms
[0:09] maximize your likelihood of getting to
[0:09] ten thousand dollars exactly which for
[0:09] us silly humans means probably forming a
[0:09] daily habit of like every single day
[0:09] actually doing the thing whatever helps
[0:09] you so I do think to a large extent is a
[0:09] psychological problem for yourself uh
[0:09] one other thing that I help that I think
[0:09] is helpful for the psychology of it is
[0:09] many times people compare themselves to
[0:09] others in the area I think this is very
[0:09] harmful only compare yourself to you
[0:09] from some time ago like say a year ago
[0:09] are you better than you year ago this is
[0:09] the only way to think
[0:09] um and I think this then you can see
[0:09] your progress and it&#39;s very motivating
[0:09] that&#39;s so interesting that focus on the
[0:09] quantity of ours because I think a lot
[0:09] of people uh in the beginner stage but
[0:09] actually throughout get paralyzed
[0:09] uh by uh the choice like which one do I
[0:09] pick this path or this path yeah like
[0:09] they&#39;ll literally get paralyzed by like
[0:09] which ID to use well they&#39;re worried
[0:09] yeah they&#39;re worried about all these
[0:09] things but the thing is some of the you
[0:09] you will waste time doing something
[0:09] wrong yes you will eventually figure out
[0:09] it&#39;s not right you will accumulate scar
[0:09] tissue and next time you&#39;ll grow
[0:09] stronger because next time you&#39;ll have
[0:09] the scar tissue and next time you&#39;ll
[0:09] learn from it and now next time you come
[0:09] into a similar situation you&#39;ll be like
[0:09] all right
[0:09] I messed up I&#39;ve spent a lot of time
[0:09] working on things that never materialize
[0:09] into anything and I have all that scar
[0:09] tissue and I have some intuitions about
[0:09] what was useful what wasn&#39;t useful how
[0:09] things turned out uh so all those
[0:09] mistakes were uh were not dead work you
[0:09] know so I just think you should just
[0:09] focus on working what have you done what
[0:09] have you done last week
[0:09] uh that&#39;s a good question actually to
[0:09] ask for for a lot of things not just
[0:09] machine learning
[0:09] um it&#39;s a good way to cut the
[0:09] the I forgot what the term will use but
[0:09] the fluff the blubber whatever the uh
[0:09] the inefficiencies in life uh what do
[0:09] you love about teaching you seem to find
[0:09] yourself
[0:09] often in the like drawn to teaching
[0:09] you&#39;re very good at it but you&#39;re also
[0:09] drawn to it I mean I don&#39;t think I love
[0:09] teaching I love happy humans and happy
[0:09] humans like when I teach yes I I
[0:09] wouldn&#39;t say I hate teaching I tolerate
[0:09] teaching but it&#39;s not like the act of
[0:09] teaching that I like it&#39;s it&#39;s that um
[0:09] you know I I have some I have something
[0:09] I&#39;m actually okay at it yes I&#39;m okay at
[0:09] teaching and people appreciate it a lot
[0:09] yeah and uh so I&#39;m just happy to try to
[0:09] be helpful and uh teaching itself is not
[0:09] like the most I mean it&#39;s really it can
[0:09] be really annoying frustrating I was
[0:09] working on a bunch of lectures just now
[0:09] I was reminded back to my days of 231
[0:09] and just how much work it is to create
[0:09] some of these materials and make them
[0:09] good the amount of iteration and thought
[0:09] and you go down blind alleys and just
[0:09] how much you change it so creating
[0:09] something good
[0:09] um in terms of like educational value is
[0:09] really hard and uh it&#39;s not fun it&#39;s
[0:09] difficult so for people should
[0:09] definitely go watch your new stuff you
[0:09] put out there are lectures where you&#39;re
[0:09] actually building the thing like from
[0:09] like you said the coldest truth so
[0:09] discussing back propagation by building
[0:09] it by looking through and just the whole
[0:09] thing so how difficult is that to
[0:09] prepare for I think that&#39;s a really
[0:09] powerful way to teach how did you have
[0:09] to prepare for that or are you just live
[0:09] thinking through it I will typically do
[0:09] like say three takes and then I take
[0:09] like the the better take uh so I do
[0:09] multiple takes and I take some of the
[0:09] better takes and then I just build out a
[0:09] lecture that way uh sometimes I have to
[0:09] delete 30 minutes of content because it
[0:09] just went down the Nelly that I didn&#39;t
[0:09] like too much there&#39;s about a bunch of
[0:09] iteration and it probably takes me you
[0:09] know somewhere around 10 hours to create
[0:09] one hour of content to give one hour
[0:09] it&#39;s interesting I mean is it difficult
[0:09] to go back to the like the basics do you
[0:09] draw a lot of like wisdom from going
[0:09] back to the basics yeah going back to
[0:09] back propagation loss functions where
[0:09] they come from and one thing I like
[0:09] about teaching a lot honestly is it
[0:09] definitely strengthens your
[0:09] understanding uh so it&#39;s not a purely
[0:09] altruistic activity it&#39;s a way to learn
[0:09] if you have to explain something to
[0:09] someone uh you realize you have gaps in
[0:09] knowledge uh and so I even surprised
[0:09] myself in those lectures like also the
[0:09] result will obviously look at this and
[0:09] then the result doesn&#39;t look like it and
[0:09] I&#39;m like okay I thought I understood
[0:09] this yeah
[0:09] but that&#39;s why it&#39;s really cool to
[0:09] literally code you run it in a notebook
[0:09] and it gives you a result and you&#39;re
[0:09] like oh wow and like actual numbers
[0:09] actual input act you know actual code
[0:09] yeah it&#39;s not mathematical symbols Etc
[0:09] the source of Truth is the code it&#39;s not
[0:09] slides it&#39;s just like let&#39;s build it
[0:09] it&#39;s beautiful you&#39;re a rare human in
[0:09] that sense uh what advice would you give
[0:09] to researchers uh trying to develop and
[0:09] publish idea that have a big impact in
[0:09] the world of AI so maybe
[0:09] um undergrads maybe early graduate
[0:09] students yep I mean I would say like
[0:09] they definitely have to be a little bit
[0:09] more strategic than I had to be as a PhD
[0:09] student because of the way AI is
[0:09] evolving it&#39;s going the way of physics
[0:09] where you know in physics you used to be
[0:09] able to do experiments on your benchtop
[0:09] and everything was great and you could
[0:09] make progress and now you have to work
[0:09] in like LHC or like CERN and
[0:09] and so AI is going in that direction as
[0:09] well
[0:09] um so there&#39;s certain kinds of things
[0:09] that&#39;s just not possible to do on the
[0:09] bench top anymore and uh
[0:09] I think um that didn&#39;t used to be the
[0:09] case at the time do you still think that
[0:09] there&#39;s like
[0:09] Gan type papers to be written where like
[0:09] uh like very simple idea that requires
[0:09] just one computer to illustrate a simple
[0:09] example I mean one example that&#39;s been
[0:09] very influential recently is diffusion
[0:09] models diffusion models are amazing the
[0:09] fusion models are six years old for the
[0:09] longest time people were kind of
[0:09] ignoring them as far as I can tell and
[0:09] they&#39;re an amazing generative model
[0:09] especially in uh in images and so stable
[0:09] diffusion and so on it&#39;s all diffusion
[0:09] based the fusion is new it was not there
[0:09] and came from well it came from Google
[0:09] but a researcher could have come up with
[0:09] it in fact some of the first
[0:09] actually no those came from Google as
[0:09] well but a researcher could come up with
[0:09] that in an academic Institution
[0:09] yeah what do you find Most Fascinating
[0:09] about diffusion models so from the
[0:09] societal impact to the the technical
[0:09] architecture what I like about the
[0:09] fusion is it works so well
[0:09] is that surprising to you the amount of
[0:09] the variety almost the novelty of the
[0:09] synthetic data is generating yeah so the
[0:09] stable diffusion images are incredible
[0:09] it&#39;s the speed of improvement in
[0:09] generating images has been insane uh we
[0:09] went very quickly from generating like
[0:09] tiny digits to the tiny faces and it all
[0:09] looked messed up and now we have stable
[0:09] diffusion and that happened very quickly
[0:09] there&#39;s a lot that Academia can still
[0:09] contribute you know for example um flash
[0:09] attention is a very efficient kernel for
[0:09] running the attention operation inside
[0:09] the Transformer that came from academic
[0:09] environment it&#39;s a very clever way to
[0:09] structure the kernel uh that that&#39;s the
[0:09] calculation so it doesn&#39;t materialize
[0:09] the attention Matrix
[0:09] um and so there&#39;s I think there&#39;s still
[0:09] like lots of things to contribute but
[0:09] you have to be just more strategic do
[0:09] you think neural networks could be made
[0:09] to reason
[0:09] uh yes
[0:09] do you think they&#39;re already reason yes
[0:09] what&#39;s your definition of reasoning
[0:09] uh information processing
[0:09] so in a way that humans think through a
[0:09] problem and come up with novel ideas
[0:09] it it feels like a reasoning yeah so the
[0:09] the novelty
[0:09] I don&#39;t want to say but out of
[0:09] distribution ideas
[0:09] you think it&#39;s possible yes and I think
[0:09] we&#39;re seeing that already in the current
[0:09] neural Nets you&#39;re able to remix the
[0:09] training set information into true
[0:09] generalization in some sense that
[0:09] doesn&#39;t appear it doesn&#39;t matter
[0:09] like you&#39;re doing something interesting
[0:09] algorithmically you&#39;re manipulating
[0:09] you know some symbols and you&#39;re coming
[0:09] up with some
[0:09] correct a unique answer in a new setting
[0:09] what would uh illustrate to you holy
[0:09] shit this thing is definitely thinking
[0:09] to me thinking or reasoning is just
[0:09] information processing and
[0:09] generalization and I think the neural
[0:09] Nets already do that today so being able
[0:09] to perceive the world or perceive the
[0:09] whatever the inputs are and to make
[0:09] uh predictions based on that or actions
[0:09] based on that that&#39;s that&#39;s the reason
[0:09] yeah you&#39;re giving correct answers in
[0:09] novel settings
[0:09] by manipulating information you&#39;ve
[0:09] learned the correct algorithm you&#39;re not
[0:09] doing just some kind of a lookup table
[0:09] and there&#39;s neighbor search
[0:09] let me ask you about AGI what what are
[0:09] some moonshot ideas you think might make
[0:09] significant progress towards AGI or
[0:09] maybe in other ways what are big
[0:09] blockers that we&#39;re missing now so
[0:09] basically I am fairly bullish on our
[0:09] ability to build agis uh basically
[0:09] automated systems that we can interact
[0:09] with and are very human-like and we can
[0:09] interact with them in a digital realm or
[0:09] Physical Realm currently it seems most
[0:09] of the models that sort of do these sort
[0:09] of magical tasks are in a text Realm
[0:09] um I think uh as I mentioned I&#39;m
[0:09] suspicious that the text realm is not
[0:09] enough to actually build full
[0:09] understanding of the world I do actually
[0:09] think you need to go into pixels and
[0:09] understand the physical world and how it
[0:09] works so I do think that we need to
[0:09] extend these models to consume images
[0:09] and videos and train on a lot more data
[0:09] that is multimodal in that way
[0:09] if you think you need to touch the world
[0:09] to understand it also well that&#39;s the
[0:09] big open question I would say in my mind
[0:09] is if you also require the embodiment
[0:09] and the ability to uh sort of interact
[0:10] with the world run experiments and have
[0:10] a data of that form then you need to go
[0:10] to Optimus or something like that and so
[0:10] I would say Optimus in some way is like
[0:10] a hedge
[0:10] in AGI because it seems to me that it&#39;s
[0:10] possible that just having data from the
[0:10] internet is not enough
[0:10] if that is the case then Optimus may
[0:10] lead to AGI because Optimus would I to
[0:10] me there&#39;s nothing Beyond optimism you
[0:10] have like this humanoid form factor that
[0:10] can actually like do stuff in the world
[0:10] you can have millions of them
[0:10] interacting with humans and so on and uh
[0:10] if that doesn&#39;t give a rise to AGI at
[0:10] some point like not I&#39;m not sure what
[0:10] will
[0:10] um so from a completeness perspective I
[0:10] think that&#39;s the uh that&#39;s a really good
[0:10] platform but it&#39;s a much harder platform
[0:10] because uh you are dealing with atoms
[0:10] and you need to actually like build
[0:10] these things and integrate them into
[0:10] society so I think that path takes
[0:10] longer but it&#39;s much more certain and
[0:10] then there&#39;s a path of the internet and
[0:10] just like training these compression
[0:10] models effectively uh on uh trying to
[0:10] compress all the internet
[0:10] and that might also give these agents as
[0:10] well compress the internet but also
[0:10] interact with the internet yeah so it&#39;s
[0:10] not obvious to me
[0:10] in fact I suspect you can reach AGI
[0:10] without ever entering the physical world
[0:10] and which is a little bit more
[0:10] uh concerning because
[0:10] it might that results in it happening
[0:10] faster
[0:10] so it just feels like we&#39;re in again
[0:10] boiling water we won&#39;t know as it&#39;s
[0:10] happening
[0:10] I would like to I&#39;m not afraid of AGI
[0:10] I&#39;m excited about it there&#39;s always
[0:10] concerns but I would like to know when
[0:10] it happens
[0:10] yeah or and have like hints about when
[0:10] it happens like a year from now it will
[0:10] happen that kind of thing yeah I just
[0:10] feel like in the digital realm it just
[0:10] might happen yeah I think all we have
[0:10] available to us because no one has built
[0:10] AGI again so all we have available to us
[0:10] is uh is there enough for cow ground on
[0:10] the periphery I would say yes and we
[0:10] have the progress so far which has been
[0:10] very rapid and uh there are next steps
[0:10] that are available and so
[0:10] I would say uh yeah it&#39;s quite likely
[0:10] that we&#39;ll be interacting with digital
[0:10] entities how will you know that
[0:10] somebody&#39;s birthday it&#39;s going to be a
[0:10] slow I think it&#39;s going to be a slow
[0:10] incremental transition is going to be
[0:10] product based and focused it&#39;s going to
[0:10] be GitHub co-pilot getting better and
[0:10] then uh GPT is helping you right and
[0:10] then these oracles that you can go to
[0:10] with mathematical problems I think we&#39;re
[0:10] on a on the verge of being able to ask
[0:10] very complex
[0:10] questions in chemistry physics math of
[0:10] these oracles and have them complete
[0:10] Solutions
[0:10] so AGI to use primarily focus on
[0:10] intelligence so Consciousness doesn&#39;t
[0:10] enter
[0:10] into uh into it
[0:10] so in my mind Consciousness is not a
[0:10] special thing you will you will figure
[0:10] out and bolt-on I think it&#39;s an emerging
[0:10] phenomenon of a large enough and complex
[0:10] enough
[0:10] um generative model sort of so
[0:10] um if you have a complex and Alpha World
[0:10] model that understands the world then it
[0:10] also understands its predicament in the
[0:10] world as being a language model which to
[0:10] me is a form of Consciousness or
[0:10] self-awareness and so in order to
[0:10] understand the world deeply you probably
[0:10] have to integrate yourself into the
[0:10] world yeah and in order to interact with
[0:10] humans and other living beings
[0:10] Consciousness is a very useful tool I
[0:10] think Consciousness is like a modeling
[0:10] insight
[0:10] modeling Insight yeah it&#39;s a you have a
[0:10] powerful enough model of understanding
[0:10] the world that you actually understand
[0:10] that you are an entity in it yeah but
[0:10] there&#39;s also this um perhaps just a
[0:10] narrative we tell ourselves there&#39;s a it
[0:10] feels like something to experience the
[0:10] world the hard problem of Consciousness
[0:10] yeah but that could be just the
[0:10] narrative that we tell ourselves yeah I
[0:10] don&#39;t think what yeah I think it will
[0:10] emerge I think it&#39;s going to be
[0:10] something uh very boring like we&#39;ll be
[0:10] talking to these uh digital AIS they
[0:10] will claim they&#39;re conscious they will
[0:10] appear conscious they will do all the
[0:10] things that you would expect of other
[0:10] humans and uh it&#39;s going to just be a
[0:10] stalemate I I think there would be a lot
[0:10] of actual fascinating ethical questions
[0:10] like Supreme Court level questions
[0:10] of whether you&#39;re allowed to turn off a
[0:10] conscious AI if you&#39;re allowed to build
[0:10] the conscious AI
[0:10] maybe there would have to be the same
[0:10] kind of debates that you have around
[0:10] um sorry to bring up a political topic
[0:10] but you know abortion which is the
[0:10] deeper question with abortion
[0:10] is what is life and the Deep question
[0:10] with AI is also what is life and what is
[0:10] conscious and I think that&#39;ll be very
[0:10] fascinating
[0:10] to bring up it might become illegal to
[0:10] build systems that are capable that like
[0:10] of such a level of intelligence that
[0:10] Consciousness would emerge and therefore
[0:10] the capacity to suffer would emerge and
[0:10] some A system that says no please don&#39;t
[0:10] kill me well that&#39;s what the Lambda
[0:10] compute the Lambda chatbot already told
[0:10] um this Google engineer right like it it
[0:10] was talking about not wanting to die or
[0:10] so on so that might become illegal to do
[0:10] that right
[0:10] I because otherwise you might have a lot
[0:10] of a lot of creatures that don&#39;t want to
[0:10] die and they will uh you can just spawn
[0:10] Infinity of them on a cluster
[0:10] and then that might lead to like
[0:10] horrible consequences because then there
[0:10] might be a lot of people that secretly
[0:10] love murder and they&#39;ll start practicing
[0:10] murder on those systems I mean there&#39;s
[0:10] just I to me all of this stuff just
[0:10] brings a beautiful mirror to The Human
[0:10] Condition and human nature we&#39;ll get to
[0:10] explore it and that&#39;s what like the best
[0:10] of uh the Supreme Court of all the
[0:10] different debates we have about ideas of
[0:10] what it means to be human we get to ask
[0:10] those deep questions that we&#39;ve been
[0:10] asking throughout human history there&#39;s
[0:10] always been the other in human history
[0:10] uh we&#39;re the good guys and that&#39;s the
[0:10] bad guys and we&#39;re going to uh you know
[0:10] throughout human history let&#39;s murder
[0:10] the bad guys and the same will probably
[0:10] happen with robots it&#39;ll be the other at
[0:10] first and then we&#39;ll get to ask
[0:10] questions of what does it mean to be
[0:10] alive what does it mean to be conscious
[0:10] yeah and I think there&#39;s some Canary in
[0:10] the coal mines even with what we have
[0:10] today
[0:10] um and uh you know for example these
[0:10] there&#39;s these like waifus that you like
[0:10] work with and some people are trying to
[0:10] like this company is going to shut down
[0:10] but this person really like yeah love
[0:10] their waifu and like is trying to like
[0:10] Port it somewhere else and like it&#39;s not
[0:10] possible and like I think like
[0:10] definitely uh people will have feelings
[0:10] towards uh towards these um systems
[0:10] because in some sense they are like a
[0:10] mirror of humanity because they are like
[0:10] sort of like a big average of humanity
[0:10] yeah in a way that it&#39;s trained but we
[0:10] can that average we can actually watch
[0:10] it&#39;s nice to be able to interact with
[0:10] the big average of humanity yeah and do
[0:10] like a search query on it yeah yeah it&#39;s
[0:10] very fascinating and uh we can also of
[0:10] course also like shape it it&#39;s not just
[0:10] a pure average we can mess with the
[0:10] training data we can mess with the
[0:10] objective we can fine tune them in
[0:10] various ways so we have some
[0:10] um you know impact on what those systems
[0:10] look like if you want to achieve AGI
[0:10] um and you could have a conversation
[0:10] with her and ask her uh talk about
[0:10] anything maybe ask her a question what
[0:10] kind of stuff would you would you ask I
[0:10] would have some practical questions in
[0:10] my mind like uh do I or my loved ones
[0:10] really have to die uh what can we do
[0:10] about that
[0:10] do you think it will answer clearly or
[0:10] would it answer poetically
[0:10] I would expect it to give Solutions I
[0:10] would expect it to be like well I&#39;ve
[0:10] read all of these textbooks and I know
[0:10] all these things that you&#39;ve produced
[0:10] and it seems to me like here are the
[0:10] experiments that I think it would be
[0:10] useful to run next and hear some Gene
[0:10] therapies that I think would be helpful
[0:10] and uh here are the kinds of experiments
[0:10] that you should run okay let&#39;s go over
[0:10] the Start experiment okay
[0:10] imagine that mortality is actually uh
[0:10] like a prerequisite for happiness so if
[0:10] we become immortal we&#39;ll actually become
[0:10] deeply unhappy and the model is able to
[0:10] know that so what is this supposed to
[0:10] tell you stupid human about it yes you
[0:10] can become a mortal but you will become
[0:10] deeply unhappy
[0:10] if if the model is if the AGI system
[0:10] is trying to empathize with you human
[0:10] what is this supposed to tell you that
[0:10] yes you don&#39;t have to die but you&#39;re
[0:10] really not going to like it because that
[0:10] is it going to be deeply honest like
[0:10] there&#39;s a Interstellar what is it the AI
[0:10] says like humans want 90 honesty
[0:10] so like you have to pick how honest I
[0:10] want to answer these practical questions
[0:10] yeah I love Yeah Interstellar by the way
[0:10] I think it&#39;s like such a sidekick to the
[0:10] entire story but
[0:10] at the same time it&#39;s like really
[0:10] interesting it&#39;s kind of limited in
[0:10] certain ways right yeah it&#39;s limited and
[0:10] I think that&#39;s totally fine by the way I
[0:10] don&#39;t think uh I think it&#39;s
[0:10] find impossible to have a limited and
[0:10] imperfect agis
[0:10] is that the feature almost as an example
[0:10] like it has a fixed amount of compute on
[0:10] its physical body and it might just be
[0:10] that even though you can have a super
[0:10] amazing Mega brain super intelligent AI
[0:10] you also can have like you know less
[0:10] intelligent AIS that you can deploy in a
[0:10] power efficient way and then they&#39;re not
[0:10] perfect they might make mistakes no I
[0:10] meant more like say you had infinite
[0:10] compute and it&#39;s still good to make
[0:10] mistakes sometimes
[0:10] like in order to integrate yourself like
[0:10] um
[0:10] what is it going back to Goodwill
[0:10] Hunting uh Robin Williams character
[0:10] says like the human imperfections that&#39;s
[0:10] the good stuff right isn&#39;t it isn&#39;t that
[0:10] this like we don&#39;t want perfect we want
[0:10] flaws in part to form connections with
[0:10] each other because it feels like
[0:10] something you can attach your feelings
[0:10] to
[0:10] the the flaws in that same way you want
[0:10] an AI That&#39;s flawed I don&#39;t know I feel
[0:10] like perfectionist but then you&#39;re
[0:10] saying okay yeah but that&#39;s not AGI but
[0:10] see AGI would need to be intelligent
[0:10] enough to give answers to humans that
[0:10] humans don&#39;t understand and I think
[0:10] perfect isn&#39;t something humans can&#39;t
[0:10] understand because even science doesn&#39;t
[0:10] give perfect answers there&#39;s always gabs
[0:10] and Mysteries and I don&#39;t know I I don&#39;t
[0:10] know if humans want perfect
[0:10] yeah I could imagine just uh having a
[0:10] conversation with this kind of Oracle
[0:10] entity as you&#39;d imagine them and uh yeah
[0:10] maybe it can tell you about
[0:10] you know based on my analysis of Human
[0:10] Condition uh you might not want this and
[0:10] here are some of the things that might
[0:10] but every every dumb human will say yeah
[0:10] yeah trust me I can give me the truth I
[0:10] can handle it but that&#39;s the beauty a
[0:10] lot of people can choose uh so but then
[0:10] the old marshmallow test with the kids
[0:10] and so on I feel like too many people
[0:10] uh like it can&#39;t handle the truth
[0:10] probably including myself like the Deep
[0:10] truth of The Human Condition I don&#39;t I
[0:10] don&#39;t know if I can handle it like what
[0:10] if there&#39;s some dark stuff what if we
[0:10] are an alien science experiment and it
[0:10] realizes that what if it had I mean
[0:10] I mean this is the Matrix you know the
[0:10] middle over again
[0:10] I don&#39;t know I would what would I talk
[0:10] about I don&#39;t even yeah I
[0:10] uh probably I will go with the save for
[0:10] scientific questions at first that have
[0:10] nothing to do with my own personal life
[0:10] yeah immortality just like about physics
[0:10] and so on yeah uh to build up like let&#39;s
[0:10] see where it&#39;s at or maybe see if it has
[0:10] a sense of humor that&#39;s another question
[0:10] would it be able to uh presumably in
[0:10] order to if it understands humans deeply
[0:10] would able to generate
[0:10] uh yep to generate humor yeah I think
[0:10] that&#39;s actually a wonderful Benchmark
[0:10] almost like is it able I think that&#39;s a
[0:10] really good point basically to make you
[0:10] laugh yeah if it&#39;s able to be like a
[0:10] very effective stand-up comedian that is
[0:10] doing something very interesting
[0:10] computationally I think being funny is
[0:10] extremely hard yeah
[0:10] because
[0:10] it&#39;s hard in a way like a touring test
[0:10] the original intent of the touring test
[0:10] is hard because you have to convince
[0:10] humans and there&#39;s nothing that&#39;s why
[0:10] that&#39;s why when comedians talk about
[0:10] this like there&#39;s this is deeply honest
[0:10] because if people can&#39;t help but laugh
[0:10] and if they don&#39;t laugh that means
[0:10] you&#39;re not funny they laugh that&#39;s funny
[0:10] and you&#39;re showing you need a lot of
[0:10] knowledge to create to create humor
[0:10] about like the occupational Human
[0:10] Condition and so on and then you need to
[0:10] be clever with it
[0:10] uh you mentioned a few movies you
[0:10] tweeted movies that I&#39;ve seen five plus
[0:10] times but I&#39;m ready and willing to keep
[0:10] watching Interstellar Gladiator contact
[0:10] Goodwill Hunting The Matrix Lord of the
[0:10] Rings all three Avatar Fifth Element so
[0:10] on goes on Terminator two Mean Girls I&#39;m
[0:10] not gonna ask about that
[0:10] mean girls is great
[0:10] um what are some of the jump onto your
[0:10] memory that you love
[0:10] and why like you mentioned the Matrix
[0:10] as a computer person why do you love The
[0:10] Matrix
[0:10] there&#39;s so many properties that make it
[0:10] like beautiful and interesting so
[0:10] there&#39;s all these philosophical
[0:10] questions but then there&#39;s also agis and
[0:10] there&#39;s simulation and it&#39;s cool and
[0:10] there&#39;s you know the black uh you know
[0:10] uh the look of it the feel of it the
[0:10] look of it the feel of it the action the
[0:10] bullet time it was just like innovating
[0:10] in so many ways
[0:10] and then uh Good Good Will Hunting why
[0:10] do you like that one yeah I just I
[0:10] really like this uh torture genius sort
[0:10] of character who&#39;s like grappling with
[0:10] whether or not he has like any
[0:10] responsibility or like what to do with
[0:10] this gift that he was given or like how
[0:10] to think about the whole thing and uh
[0:10] there&#39;s also a dance between the genius
[0:10] and the the personal like what it means
[0:10] to love another human being and there&#39;s
[0:10] a lot of themes there it&#39;s just a
[0:10] beautiful movie and then the fatherly
[0:10] figure The Mentor in the in the
[0:10] psychiatrist and the it like really like
[0:10] uh
[0:10] it messes with you you know there&#39;s some
[0:10] movies that&#39;s just like really mess with
[0:10] you uh on a deep level do you relate to
[0:10] that movie at all no it&#39;s not your fault
[0:10] doctor as I said Lord of the Rings
[0:10] that&#39;s self-explanatory Terminator 2
[0:10] which is interesting
[0:10] you we watch that a lot is that better
[0:10] than Terminator one
[0:10] you like you like Arnold I do like
[0:10] Terminator one as well uh I like
[0:10] Terminator 2 a little bit more but in
[0:10] terms of like its surface properties
[0:10] [Laughter]
[0:10] do you think Skynet is at all a
[0:10] possibility oh yes
[0:10] well like the actual sort of uh
[0:10] autonomous uh weapon system kind of
[0:10] thing do you worry about that uh stuff
[0:10] I 100 worry about it and so the I mean
[0:10] the uh you know some of these uh fears
[0:10] of AGS and how this will plan out I mean
[0:10] these will be like very powerful
[0:10] entities probably at some point and so
[0:10] um for a long time they&#39;re going to be
[0:10] tools in the hands of humans uh you know
[0:10] people talk about like alignment of agis
[0:10] and how to make the problem is like even
[0:10] humans are not aligned uh so
[0:10] uh how this will be used and what this
[0:10] is going to look like is um yeah it&#39;s
[0:10] troubling so
[0:10] do you think it&#39;ll happen so slowly
[0:10] enough that we&#39;ll be able to
[0:10] as a human civilization think through
[0:10] the problems yes that&#39;s my hope is that
[0:10] it happens slowly enough and in an open
[0:10] enough way where a lot of people can see
[0:10] and participate in it just figure out
[0:10] how to deal with this transition I think
[0:10] which is going to be interesting I draw
[0:10] a lot of inspiration from nuclear
[0:10] weapons because I sure thought it would
[0:10] be it would be fucked once they develop
[0:10] nuclear weapons but like it&#39;s almost
[0:10] like
[0:10] uh when the when the systems are not so
[0:10] dangerous they destroy human
[0:10] civilization we deploy them and learn
[0:10] the lessons and then we quickly if it&#39;s
[0:10] too dangerous we&#39;re quickly quicker we
[0:10] might still deploy it uh but you very
[0:10] quickly learn not to use them and so
[0:10] there&#39;ll be like this balance that you
[0:10] humans are very clever as a species it&#39;s
[0:10] interesting we exploit the resources as
[0:10] much as we can but we don&#39;t we avoid
[0:10] destroying ourselves it seems like
[0:10] well I don&#39;t know about that actually I
[0:10] hope it continues
[0:10] um
[0:10] I mean I&#39;m definitely like concerned
[0:10] about nuclear weapons and so on not just
[0:10] as a result of the recent conflict even
[0:10] before that uh that&#39;s probably like my
[0:10] number one concern for society so if
[0:10] Humanity uh destroys itself
[0:10] or destroys you know 90 of people that
[0:10] would be because of nukes I think so
[0:10] um and it&#39;s not even about full
[0:10] destruction to me it&#39;s bad enough if we
[0:10] reset society that would be like
[0:10] terrible it would be really bad and I
[0:10] can&#39;t believe we&#39;re like so close to it
[0:10] yeah it&#39;s like so crazy to me it feels
[0:10] like we might be a few tweets away from
[0:10] something like that yep basically it&#39;s
[0:10] extremely unnerving but and has been for
[0:10] me for a long time
[0:10] it seems unstable that world leaders
[0:10] just having a bad mood
[0:11] can like um
[0:11] take one step towards a bad Direction
[0:11] and it escalates yeah and because of a
[0:11] collection of bad moods it can escalate
[0:11] without being able to
[0:11] um stop
[0:11] yeah it&#39;s just it&#39;s a huge amount of uh
[0:11] Power and then also with the
[0:11] proliferation and basically I don&#39;t I
[0:11] don&#39;t actually really see I don&#39;t
[0:11] actually know what the good outcomes are
[0:11] here
[0:11] uh so I&#39;m definitely worried about that
[0:11] a lot and then AGI is not currently
[0:11] there but I think at some point we&#39;ll
[0:11] more and more become uh something like
[0:11] it the danger with AGI even is that I
[0:11] think it&#39;s even less likely worse in a
[0:11] sense that
[0:11] uh there are good outcomes of AGI and
[0:11] then the bad outcomes are like an
[0:11] absolute way like a tiny one way and so
[0:11] I think um capitalism and humanity and
[0:11] so on will drive for the positive
[0:11] uh ways of using that technology but
[0:11] then if bad outcomes are just like a
[0:11] tiny like flipping minus sign away uh
[0:11] that&#39;s a really bad position to be in a
[0:11] tiny perturbation of the system results
[0:11] in the destruction of the human species
[0:11] it&#39;s a weird line to walk yeah I think
[0:11] in general what&#39;s really weird about
[0:11] like the Dynamics of humanity and this
[0:11] explosion was talked about is just like
[0:11] the insane coupling afforded by
[0:11] technology yeah and uh just the
[0:11] instability of the whole dynamical
[0:11] system I think it&#39;s just it doesn&#39;t look
[0:11] good honestly
[0:11] yes that explosion could be destructive
[0:11] and constructive and the probabilities
[0:11] are non-zero in both both senses I&#39;m
[0:11] going to have to I do feel like I have
[0:11] to try to be optimistic and so on and
[0:11] yes I think even in this case I still am
[0:11] predominantly optimistic but there&#39;s
[0:11] definitely
[0:11] me too uh do you think we&#39;ll become a
[0:11] multiplayer species
[0:11] probably yes but I don&#39;t know if it&#39;s
[0:11] dominant feature of uh future Humanity
[0:11] uh there might be some people on some
[0:11] planets and so on but I&#39;m not sure if
[0:11] it&#39;s like
[0:11] yeah if it&#39;s like a major player in our
[0:11] culture and so on we still have to solve
[0:11] the drivers of self-destruction here on
[0:11] Earth so just having a backup on Mars is
[0:11] not going to solve the problem so by the
[0:11] way I love the backup on Mars I think
[0:11] that&#39;s amazing you should absolutely do
[0:11] that yes and I&#39;m so thankful uh and
[0:11] would you go to Mars uh personally no I
[0:11] do like Earth quite a lot okay uh I&#39;ll
[0:11] go to Mars I&#39;ll go for you unless I&#39;ll
[0:11] tweet at you from there maybe eventually
[0:11] I would once it&#39;s uh safe enough but I
[0:11] don&#39;t actually know if it&#39;s on my
[0:11] lifetime scale unless I can extend it by
[0:11] a lot
[0:11] I do think that for example a lot of
[0:11] people might disappear into
[0:11] um virtual realities and stuff like that
[0:11] and I think that could be the major
[0:11] thrust of
[0:11] um sort of the cultural development of
[0:11] humanity if it survives uh so it might
[0:11] not be it&#39;s just really hard to work in
[0:11] Physical Realm and go out there and I
[0:11] think ultimately all your experiences
[0:11] are in your brain yeah and so it&#39;s much
[0:11] easier to disappear into digital Realm
[0:11] and I think people will find them more
[0:11] compelling easier safer
[0:11] more interesting so you&#39;re a little bit
[0:11] captivated by Virtual Reality by the
[0:11] possible worlds whether it&#39;s the
[0:11] metaverse or some other manifestation of
[0:11] that yeah
[0:11] yeah it&#39;s really interesting it&#39;s uh
[0:11] I&#39;m I&#39;m interested just just talking a
[0:11] lot to Carmack where&#39;s the
[0:11] where&#39;s the thing that&#39;s currently
[0:11] preventing that yeah I mean to be clear
[0:11] I think what&#39;s interesting about the
[0:11] future is
[0:11] um it&#39;s not that
[0:11] I kind of feel like
[0:11] the variance in The Human Condition
[0:11] grows that&#39;s the primary thing that&#39;s
[0:11] changing it&#39;s not as much the mean of
[0:11] the distribution it&#39;s like the variance
[0:11] of it so there will probably be people
[0:11] on Mars and there will be people in VR
[0:11] and they&#39;re all people here on Earth
[0:11] it&#39;s just like there will be so many
[0:11] more ways of being
[0:11] and so I kind of feel like I see it as
[0:11] like a spreading out of a human
[0:11] experience there&#39;s something about the
[0:11] internet that allows you to discover
[0:11] those little groups and you you
[0:11] gravitate each other something about
[0:11] your biology likes that kind of world
[0:11] and that you find each other yeah and
[0:11] we&#39;ll have transhumanists and then we&#39;ll
[0:11] have the Amish and they&#39;re gonna
[0:11] everything is just gonna coexist you
[0:11] know the cool thing about it because
[0:11] I&#39;ve interacted with a bunch of Internet
[0:11] communities is
[0:11] um they don&#39;t know about each other like
[0:11] you can have a very happy existence just
[0:11] like having a very close-knit community
[0:11] and not knowing about each other I mean
[0:11] even even since this just having
[0:11] traveled to Ukraine there&#39;s they they
[0:11] don&#39;t know so many things about America
[0:11] you you like when you travel across the
[0:11] world I think you experience this too
[0:11] there are certain cultures they&#39;re like
[0:11] they have their own thing going on they
[0:11] don&#39;t and so you can see that happening
[0:11] more and more and more and more in the
[0:11] future we have little communities yeah
[0:11] yeah I think so that seems to be the
[0:11] that seems to be how it&#39;s going right
[0:11] now and I don&#39;t see that Trend like
[0:11] really reversing I think people are
[0:11] diverse and they&#39;re able to choose their
[0:11] own like path and existence and I sort
[0:11] of like celebrate that
[0:11] um and so will you spend so much time in
[0:11] the meters in the virtual reality or
[0:11] which Community are you are you the
[0:11] physicalist uh the the the physical
[0:11] reality enjoyer or uh do you see drawing
[0:11] a lot of uh pleasure and fulfillment in
[0:11] the digital world
[0:11] yeah I think well currently the virtual
[0:11] reality is not that compelling I do
[0:11] think it can improve a lot but I don&#39;t
[0:11] really know to what extent maybe you
[0:11] know there&#39;s actually like even more
[0:11] exotic things you can think about with
[0:11] like neural links or stuff like that so
[0:11] um currently I kind of see myself as
[0:11] mostly a team human person I love nature
[0:11] yeah I love Harmony I love people I love
[0:11] Humanity I love emotions of humanity
[0:11] um and I I just want to be like in this
[0:11] like solar Punk little Utopia that&#39;s my
[0:11] happy place yeah my happy place is like
[0:11] uh people I love thinking about cool
[0:11] problems surrounded by a lush beautiful
[0:11] Dynamic nature yeah yeah and secretly
[0:11] high tech in places that count places
[0:11] like they use technology to empower that
[0:11] love for other humans and nature yeah I
[0:11] think a technology used like very
[0:11] sparingly uh I don&#39;t love when it sort
[0:11] of gets in the way of humanity in many
[0:11] ways uh I like just people being humans
[0:11] in a way we sort of like slightly
[0:11] evolved and prefer I think just by
[0:11] default people kept asking me because
[0:11] they they know you love reading are
[0:11] there particular books
[0:11] that you enjoyed that had an impact on
[0:11] you
[0:11] for silly or for profound reasons that
[0:11] you would recommend
[0:11] you mentioned the vital question
[0:11] many of course I think in biology as an
[0:11] example the vital question is a good one
[0:11] anything by McLean really uh life
[0:11] ascending I would say is like a bit more
[0:11] potentially uh representative as like a
[0:11] summary
[0:11] of a lot of the things he&#39;s been talking
[0:11] about I was very impacted by the selfish
[0:11] Gene I thought that was a really good
[0:11] book that helped me understand altruism
[0:11] as an example and where it comes from
[0:11] and just realizing that you know the
[0:11] selection is in the level of genes was a
[0:11] huge insight for me at the time and it
[0:11] sort of like cleared up a lot of things
[0:11] for me what do you think about
[0:11] the the idea that ideas of the organisms
[0:11] the means yes love it 100
[0:11] [Laughter]
[0:11] are you able to walk around with that
[0:11] notion for a while that that there is an
[0:11] evolutionary kind of process with ideas
[0:11] as well there absolutely is there&#39;s
[0:11] memes just like genes and they compete
[0:11] and they live in our brains it&#39;s
[0:11] beautiful are we silly humans thinking
[0:11] that we&#39;re the organisms is it possible
[0:11] that the primary
[0:11] organisms are the ideas
[0:11] yeah I would say like the the ideas kind
[0:11] of live in the software of like our
[0:11] civilization in the in the minds and so
[0:11] on we think as humans that the hardware
[0:11] is the fundamental thing I human is a
[0:11] hardware entity yeah but it could be the
[0:11] software right yeah
[0:11] yeah I would say like there needs to be
[0:11] some grounding at some point to like a
[0:11] physical reality yeah but if we clone an
[0:11] Andre
[0:11] the software is the thing
[0:11] like is this thing that makes that thing
[0:11] special right yeah I guess I you&#39;re
[0:11] right but then cloning might be
[0:11] exceptionally difficult like there might
[0:11] be a deep integration between the
[0:11] software and the hardware in ways we
[0:11] don&#39;t quite understand well from the
[0:11] evolution point of view like what makes
[0:11] me special is more like the the gang of
[0:11] genes that are writing in my chromosomes
[0:11] I suppose right like they&#39;re the they&#39;re
[0:11] the replicating unit I suppose and no
[0:11] but that&#39;s just for you the thing that
[0:11] makes you special sure wow
[0:11] the reality is what makes you special is
[0:11] your ability to survive
[0:11] based on the software that runs on the
[0:11] hardware that was built by the genes
[0:11] um so the software is the thing that
[0:11] makes you survive not the hardware
[0:11] all right yeah it&#39;s just like a second
[0:11] layer it&#39;s a new second layer that
[0:11] hasn&#39;t been there before the brain they
[0:11] both they both coexist but there&#39;s also
[0:11] layers of the software I mean it&#39;s it&#39;s
[0:11] not it&#39;s a it&#39;s a abstraction that&#39;s uh
[0:11] on top of abstractions but okay so
[0:11] selfish Gene um a neckline I would say
[0:11] sometimes books are like not sufficient
[0:11] I like to reach for textbooks sometimes
[0:11] um I kind of feel like books are for too
[0:11] much of a general consumption sometime
[0:11] and they just kind of like uh they&#39;re
[0:11] too high up in the level of abstraction
[0:11] and it&#39;s not good enough yeah so I like
[0:11] textbooks I like the cell I think the
[0:11] cell was pretty cool
[0:11] uh that&#39;s why also I like the writing of
[0:11] uh McLean is because he&#39;s pretty willing
[0:11] to step one level down and he doesn&#39;t uh
[0:11] yeah he&#39;s sort of he&#39;s willing to go
[0:11] there
[0:11] but he&#39;s also willing to sort of be
[0:11] throughout the stack so he&#39;ll go down to
[0:11] a lot of detail but then he will come
[0:11] back up and I think he has a yeah
[0:11] basically I really appreciate that
[0:11] that&#39;s why I love college early college
[0:11] even high school but just textbooks on
[0:11] the basics yeah of Computer Science and
[0:11] Mathematics of of biology of chemistry
[0:11] yes those are they condense down like uh
[0:11] uh it&#39;s sufficiently General that you
[0:11] can understand the both the philosophy
[0:11] and the details but also like you get
[0:11] homework problems and you you get to
[0:11] play with it as much as you would if you
[0:11] weren&#39;t yeah programming stuff yeah and
[0:11] then I&#39;m also suspicious of textbooks
[0:11] honestly because as an example in deep
[0:11] learning uh there&#39;s no like amazing
[0:11] textbooks and I feel this changing very
[0:11] quickly I imagine the same is true and
[0:11] say uh synthetic biology and so on these
[0:11] books like this cell are kind of
[0:11] outdated they&#39;re still high level like
[0:11] what is the actual real source of truth
[0:11] it&#39;s people in wet Labs working with
[0:11] cells yeah you know sequencing genomes
[0:11] and
[0:11] yeah actually working with working with
[0:11] it and uh I don&#39;t have that much
[0:11] exposure to that or what that looks like
[0:11] so I sold them fully I&#39;m reading through
[0:11] the cell and it&#39;s kind of interesting
[0:11] and I&#39;m learning but it&#39;s still not
[0:11] sufficient I would say in terms of
[0:11] understanding well it&#39;s a clean
[0:11] summarization of the mainstream
[0:11] narrative
[0:11] yeah but you have to learn that before
[0:11] you break out yeah towards The Cutting
[0:11] Edge yeah what is the actual process of
[0:11] working with these cells and growing
[0:11] them and incubating them and you know
[0:11] it&#39;s kind of like a massive cooking
[0:11] recipe so making sure your self slows
[0:11] and proliferate and then you&#39;re
[0:11] sequencing them running experiments and
[0:11] uh just how that works I think is kind
[0:11] of like the source of truth of at the
[0:11] end of the day what&#39;s really useful in
[0:11] terms of creating therapies and so on
[0:11] yeah I wonder in the future AI textbooks
[0:11] will be because you know there&#39;s a
[0:11] artificial intelligence a modern
[0:11] approach I actually haven&#39;t read if it&#39;s
[0:11] come out the recent version the recent
[0:11] there&#39;s been a recent Edition I also saw
[0:11] there&#39;s a science a deep learning book
[0:11] I&#39;m waiting for textbooks that worth
[0:11] recommending worth reading it&#39;s It&#39;s
[0:11] tricky because it&#39;s like papers
[0:11] and code code honestly papers are quite
[0:11] good I especially like the appendix
[0:11] appendix of any paper as well it&#39;s like
[0:11] it&#39;s like the most detail it can have
[0:11] it doesn&#39;t have to be cohesive to
[0:11] connected to anything else you just
[0:11] describe me a very specific way you
[0:11] solved a particular thing yeah many
[0:11] times papers can be actually quite
[0:11] readable not always but sometimes the
[0:11] introduction in the abstract is readable
[0:11] even for someone outside of the field uh
[0:11] not this is not always true and
[0:11] sometimes I think unfortunately
[0:11] scientists use complex terms even when
[0:11] it&#39;s not necessary I think that&#39;s
[0:11] harmful I think there there&#39;s no reason
[0:11] for that and papers sometimes are longer
[0:11] than they need to be in this in the
[0:11] parts that
[0:11] don&#39;t matter yeah appendix would be long
[0:11] but then the paper itself you know look
[0:11] at Einstein make it simple
[0:11] yeah but certainly I&#39;ve come across
[0:11] papers I would say in say like synthetic
[0:11] biology or something that I thought were
[0:11] quite readable for the abstract and the
[0:11] introduction and then you&#39;re reading the
[0:11] rest of it and you don&#39;t fully
[0:11] understand but you kind of are getting a
[0:11] gist and I think it&#39;s cool
[0:11] what uh advice you give advice to folks
[0:11] interested in machine learning and
[0:11] research but in General Life advice to a
[0:11] young person High School
[0:11] um Early College about how to have a
[0:11] career they can be proud of or a life
[0:11] they can be proud of
[0:11] yeah I think I&#39;m very hesitant to give
[0:11] general advice I think it&#39;s really hard
[0:11] I&#39;ve mentioned like some of the stuff
[0:11] I&#39;ve mentioned is fairly General I think
[0:11] like focus on just the amount of work
[0:11] you&#39;re spending on like a thing
[0:11] uh compare yourself only to yourself not
[0:11] to others that&#39;s good I think those are
[0:11] fairly General how do you pick the thing
[0:11] uh you just have like a deep interest in
[0:11] something uh or like try to like find
[0:11] the art Max over like the things that
[0:11] you&#39;re interested in ARG Max at that
[0:11] moment and stick with it how do you not
[0:11] get distracted and switch to another
[0:11] thing uh you can if you like
[0:11] um well if you do an ARG Max repeatedly
[0:11] every week it doesn&#39;t converge it
[0:11] doesn&#39;t it&#39;s a problem yeah you can like
[0:11] low pass filter yourself uh in terms of
[0:11] like what has consistently been true for
[0:11] you
[0:11] um but yeah I definitely see how it can
[0:11] be hard but I would say like you&#39;re
[0:11] going to work the hardest on the thing
[0:11] that you care about the most also a low
[0:11] pass filter yourself and really
[0:11] introspect in your past were the things
[0:11] that gave you energy and what are the
[0:11] things that took energy away from you
[0:11] concrete examples and usually uh from
[0:11] those concrete examples sometimes
[0:11] patterns can merge I like I like it when
[0:11] things look like this when I&#39;m these
[0:11] positions so that&#39;s not necessarily the
[0:11] field but the kind of stuff you&#39;re doing
[0:11] in a particular field so for you it
[0:11] seems like you were energized by
[0:11] implementing stuff building actual
[0:11] things yeah being low level learning and
[0:11] then also uh communicating so that
[0:11] others can go through the same
[0:11] realizations and shortening that Gap
[0:11] um because I usually have to do way too
[0:11] much work to understand the thing and
[0:11] then I&#39;m like okay this is actually like
[0:11] okay I think I get it and like why was
[0:11] it so much work it should have been much
[0:11] less work and that gives me a lot of
[0:11] frustration and that&#39;s why I sometimes
[0:11] go teach so aside from the teaching
[0:11] you&#39;re doing now uh putting out videos
[0:11] aside from a potential uh Godfather part
[0:11] two
[0:11] uh with the AGI at Tesla and Beyond uh
[0:11] what does the future for Android kapati
[0:11] hold have you figured that out yet or no
[0:11] I mean uh as you see through the fog of
[0:11] war that is all of our future
[0:11] um do you do you start seeing
[0:11] silhouettes of the what that possible
[0:11] future could look like
[0:11] the consistent thing I&#39;ve been always
[0:11] interested in for me at least is is AI
[0:11] and um
[0:11] uh that&#39;s probably where I&#39;m spending my
[0:11] rest of my life on because I just care
[0:11] about a lot and I actually care about
[0:11] like many other problems as well like
[0:11] say aging which I basically view as
[0:11] disease and uh
[0:11] um I care about that as well but I don&#39;t
[0:11] think it&#39;s a good idea to go after it
[0:11] specifically I don&#39;t actually think that
[0:11] humans will be able to come up with the
[0:11] answer I think the correct thing to do
[0:11] is to ignore those problems and you
[0:11] solve Ai and then use that to solve
[0:11] everything else and I think there&#39;s a
[0:11] chance that this will work I think it&#39;s
[0:11] a very high chance and uh that&#39;s kind of
[0:11] like the the way I&#39;m betting at least so
[0:11] when you think about AI are you
[0:11] interested in all kinds of applications
[0:11] all kinds of domains and any domain you
[0:11] focus on will allow you to get insights
[0:11] to the big problem of AGI yeah for me
[0:11] it&#39;s the ultimate mental problem I don&#39;t
[0:11] want to work on any one specific problem
[0:11] there&#39;s too many problems so how can you
[0:11] work on all problems simultaneously you
[0:11] solve The Meta problem which to me is
[0:11] just intelligence and how do you
[0:11] automate it is there cool small projects
[0:11] like archive sanity and and so on that
[0:11] you&#39;re thinking about the the the the
[0:11] world the ml world can anticipate
[0:11] there&#39;s some always like some fun side
[0:11] projects yeah um archive sanity is one
[0:11] basically like there&#39;s way too many
[0:11] archive papers how can I organize it and
[0:11] recommend papers and so on uh I
[0:11] transcribed all of your yeah podcasts
[0:11] what did you learn from that experience
[0:11] uh from transcribing the process of like
[0:11] you like consuming audiobooks and and
[0:11] podcasts and so on and here&#39;s the
[0:11] process that achieves
[0:11] um closer to human level performance and
[0:11] annotation yeah well I definitely was
[0:11] like surprised that uh transcription
[0:11] with opening eyes whisper was working so
[0:11] well compared to what I&#39;m familiar with
[0:11] from Siri and like a few other systems I
[0:11] guess it works so well and
[0:11] uh that&#39;s what gave me some energy to
[0:11] like try it out and I thought it could
[0:11] be fun to random podcasts it&#39;s kind of
[0:11] not obvious to me why whisper is so much
[0:11] better compared to anything else because
[0:11] I feel like there should be a lot of
[0:11] incentive for a lot of companies to
[0:11] produce transcription systems and that
[0:11] they&#39;ve done so over a long time whisper
[0:11] is not a super exotic model it&#39;s a
[0:11] Transformer it takes smell spectrograms
[0:11] and you know just outputs tokens of text
[0:11] it&#39;s not crazy uh the model and
[0:11] everything has been around for a long
[0:11] time
[0:11] I&#39;m not actually 100 sure why yeah it&#39;s
[0:12] not obvious to me either it makes me
[0:12] feel like I&#39;m missing something I&#39;m
[0:12] missing something yeah because there&#39;s a
[0:12] huge even at Google and so on YouTube uh
[0:12] transcription yeah
[0:12] um yeah it&#39;s unclear but some of it is
[0:12] also integrating into a bigger system
[0:12] yeah that so the user interface how it&#39;s
[0:12] deployed and all that kind of stuff
[0:12] maybe running it as an independent thing
[0:12] is eat much easier like an order of
[0:12] magnitude easier than deploying to a
[0:12] large integrated system like YouTube
[0:12] transcription or
[0:12] um anything like meetings like Zoom has
[0:12] trans transcription that&#39;s kind of
[0:12] crappy but creating uh interface where
[0:12] it detects the different individual
[0:12] speakers it&#39;s able to
[0:12] um
[0:12] display it in compelling ways Run in
[0:12] real time all that kind of stuff maybe
[0:12] that&#39;s difficult but that&#39;s the only
[0:12] explanation I have because like um
[0:12] I&#39;m currently paying uh quite a bit for
[0:12] human uh transcription human caption
[0:12] right annotation and like it seems like
[0:12] uh there&#39;s a huge incentive to automate
[0:12] that yeah it&#39;s very confusing and I
[0:12] think I mean I don&#39;t know if you looked
[0:12] at some of the whisper transcripts but
[0:12] they&#39;re quite good they&#39;re good and
[0:12] especially in tricky cases yeah I&#39;ve
[0:12] seen
[0:12] uh Whispers performance on like super
[0:12] tricky cases and it does incredibly well
[0:12] so I don&#39;t know a podcast is pretty
[0:12] simple it&#39;s like high quality audio and
[0:12] you&#39;re speaking usually pretty clearly
[0:12] and so I don&#39;t know it uh I don&#39;t know
[0:12] what open ai&#39;s plans are yeah either but
[0:12] yeah there&#39;s always like fun fun
[0:12] projects basically and stable diffusion
[0:12] also is opening up a huge amount of
[0:12] experimentation I would say in the
[0:12] visual realm and generate generating
[0:12] images and videos and movies videos now
[0:12] and so that&#39;s going to be pretty crazy
[0:12] uh that&#39;s going to that&#39;s going to
[0:12] almost certainly work and it&#39;s going to
[0:12] be really interesting when the cost of
[0:12] content creation is going to fall to
[0:12] zero you used to need a painter for a
[0:12] few months to paint a thing and now it&#39;s
[0:12] going to be speak to your phone to get
[0:12] your video so if Hollywood will start
[0:12] using that to generate scene means
[0:12] which completely opens up yeah so you
[0:12] can make a like a movie like Avatar
[0:12] eventually for under a million dollars
[0:12] much less maybe just by talking to your
[0:12] phone I mean I know it sounds kind of
[0:12] crazy
[0:12] and then there&#39;d be some voting
[0:12] mechanism like how do you have a like
[0:12] would there be a show on Netflix that&#39;s
[0:12] generated completely uh automatedly
[0:12] potentially yeah and what does it look
[0:12] like also when you can just generate It
[0:12] On Demand and it&#39;s uh and there&#39;s
[0:12] Infinity of it yeah
[0:12] oh man
[0:12] all the synthetic content I mean it&#39;s
[0:12] humbling because we we treat ourselves
[0:12] as special for being able to generate
[0:12] art and ideas and all that kind of stuff
[0:12] if that can be done in an automated Way
[0:12] by AI yeah I think it&#39;s fascinating to
[0:12] me how these uh the predictions of AI
[0:12] and what it&#39;s going to look like and
[0:12] what it&#39;s going to be capable of are
[0:12] completely inverted and wrong and the
[0:12] Sci-Fi of 50s and 60s was just like
[0:12] totally not bright they imagined AI is
[0:12] like super calculating theore improvers
[0:12] and we&#39;re getting things that can talk
[0:12] to you about emotions they can do art
[0:12] it&#39;s just like weird are you excited
[0:12] about that feature just ai&#39;s like hybrid
[0:12] systems heterogeneous systems of humans
[0:12] and AIS talking about emotions Netflix
[0:12] and chill with an AI system legit where
[0:12] the Netflix thing you watch is also
[0:12] generated by AI
[0:12] I think it&#39;s uh it&#39;s going to be
[0:12] interesting for sure and I think I&#39;m
[0:12] cautiously optimistic but it&#39;s not it&#39;s
[0:12] not obvious
[0:12] well the sad thing is your brain and
[0:12] mine developed in a time where
[0:12] um before Twitter before the before the
[0:12] internet so I wonder people that are
[0:12] born inside of it might have a different
[0:12] experience
[0:12] um like I maybe you can will still
[0:12] resist it uh and the people born now
[0:12] will not
[0:12] well I do feel like humans are extremely
[0:12] malleable yeah
[0:12] and uh you&#39;re probably right
[0:12] what is the meaning of life Andre
[0:12] we we talked about sort of
[0:12] the universe having a conversation with
[0:12] us humans or with the systems we create
[0:12] to try to answer for the university for
[0:12] the creator of the universe to notice us
[0:12] we&#39;re trying to create systems that are
[0:12] loud enough
[0:12] just answer back
[0:12] I don&#39;t know if that&#39;s the meaning of
[0:12] life that&#39;s like meaning of life for
[0:12] some people the first level answer I
[0:12] would say is anyone can choose their own
[0:12] meaning of life because we are conscious
[0:12] entity and it&#39;s beautiful number one but
[0:12] uh I do think that like a deeper meaning
[0:12] of life if someone is interested is uh
[0:12] or along the lines of like what the hell
[0:12] is All This and like why and if you look
[0:12] at the into fundamental physics and the
[0:12] quantum field Theory and a standard
[0:12] model they&#39;re like very complicated and
[0:12] um
[0:12] there&#39;s this like you know 19 free
[0:12] parameter parameters of our universe and
[0:12] like what&#39;s going on with all this stuff
[0:12] and why is it here and can I hack it can
[0:12] I work with it is there a message for me
[0:12] am I supposed to create a message
[0:12] and so I think there&#39;s some fundamental
[0:12] answers there but I think there&#39;s
[0:12] actually even like you can&#39;t actually
[0:12] really make dent in those without more
[0:12] time and so to me also there&#39;s a big
[0:12] question around just getting more time
[0:12] honestly
[0:12] yeah that&#39;s kind of like what I think
[0:12] about quite a bit as well so kind of the
[0:12] ultimate
[0:12] or at least first way to sneak up to the
[0:12] why question is to try to escape
[0:12] uh the system the universe yeah and then
[0:12] for that you sort of uh backtrack and
[0:12] say okay for that that&#39;s going to be
[0:12] take a very long time so the why
[0:12] question boils down from an engineering
[0:12] perspective to how do we extend yeah I
[0:12] think that&#39;s the question number one
[0:12] practically speaking because you can&#39;t
[0:12] uh you&#39;re not gonna calculate the answer
[0:12] to the deeper questions in the time you
[0:12] have and that could be extending your
[0:12] own lifetime or extending just the
[0:12] lifetime of human civilization of
[0:12] whoever wants to not many people might
[0:12] not want that but I think people who do
[0:12] want that I think um I think it&#39;s
[0:12] probably possible uh and I don&#39;t I don&#39;t
[0:12] know that people
[0:12] fully realize this I kind of feel like
[0:12] people think of death as an
[0:12] inevitability but at the end of the day
[0:12] this is a physical system some things go
[0:12] wrong uh it makes sense why things like
[0:12] this happen evolutionarily speaking and
[0:12] uh there&#39;s most certainly interventions
[0:12] that uh that mitigate it that would be
[0:12] interesting if death is eventually
[0:12] looked at as
[0:12] as a fascinating thing that used to
[0:12] happen to humans I don&#39;t think it&#39;s
[0:12] unlikely I think it&#39;s I think it&#39;s
[0:12] likely
[0:12] and it&#39;s up to our imagination to try to
[0:12] predict what the world without death
[0:12] looks like yeah it&#39;s hard to I think the
[0:12] values will completely change
[0:12] could be I don&#39;t I don&#39;t really buy all
[0:12] these ideas that oh without that there&#39;s
[0:12] no meaning there&#39;s nothing as
[0:12] I don&#39;t intuitively buy all those
[0:12] arguments I think there&#39;s plenty of
[0:12] meaning plenty of things to learn
[0:12] they&#39;re interesting exciting I want to
[0:12] know I want to calculate uh I want to
[0:12] improve the condition of
[0:12] all the humans and organisms that are
[0:12] alive yet the way we find meaning might
[0:12] change we there is a lot of humans
[0:12] probably including myself that finds
[0:12] meaning in the finiteness of things but
[0:12] that doesn&#39;t mean that&#39;s the only source
[0:12] of meaning yeah I do think many people
[0:12] will will go with that which I think is
[0:12] great I love the idea that people can
[0:12] just choose their own adventure like you
[0:12] you are born as a conscious free entity
[0:12] by default I&#39;d like to think and um you
[0:12] have your unalienable rights for Life uh
[0:12] in the pursuit of happiness I don&#39;t know
[0:12] if you have that in the nature the
[0:12] landscape of happiness you can choose
[0:12] your own adventure mostly and that&#39;s not
[0:12] it&#39;s not fully true but I still am
[0:12] pretty sure I&#39;m an NPC but
[0:12] um an NPC can&#39;t know it&#39;s an NPC
[0:12] there could be different degrees and
[0:12] levels of consciousness I don&#39;t think
[0:12] there&#39;s a more beautiful way to end it
[0:12] uh Andre you&#39;re an incredible person I&#39;m
[0:12] really honored you would talk with me
[0:12] everything you&#39;ve done for the machine
[0:12] learning world for the AI world
[0:12] to just inspire people to educate
[0:12] millions of people it&#39;s been it&#39;s been
[0:12] great and I can&#39;t wait to see what you
[0:12] do next it&#39;s been an honor man thank you
[0:12] so much for talking today awesome thank
[0:12] you
[0:12] thanks for listening to this
[0:12] conversation with Andre karapathi to
[0:12] support this podcast please check out
[0:12] our sponsors in the description and now
[0:12] let me leave you with some words from
[0:12] Samuel Carlin
[0:12] the purpose of models is not to fit the
[0:12] data but to sharpen the questions
[0:12] thanks for listening and hope to see you
[0:12] next time
