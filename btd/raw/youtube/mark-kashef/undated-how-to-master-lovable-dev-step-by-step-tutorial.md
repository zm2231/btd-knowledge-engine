---
title: "How to Master Lovable.dev (Step-by-Step Tutorial)"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=cwdPcbWwb2s"
video_id: "cwdPcbWwb2s"
duration: "47:50"
transcript_method: "youtube-captions"
segment_count: 1207
char_count: 45152
status: ingested
topics: []
meta_patterns: []
---

# How to Master Lovable.dev (Step-by-Step Tutorial)

**Creator**: mark-kashef | **Duration**: 47:50
**URL**: https://www.youtube.com/watch?v=cwdPcbWwb2s
**Transcript**: 1207 segments, 45152 chars

## Transcript

in this video I'm going to walk you through how to use lovable. deev which is another text to web app platform similar to bolt. new that lets you build MVPs and prototypes with relative ease while bolt is great lovable has some advantages that make it a lot easier to use for certain functions such as setting up authentication hooking up a database as well as even enabling payments through stripe which has been a bit painful using something like bolt. new up to now I'm going to start with a big picture overview of some of the key Concepts you should understand understand when you're trying to differentiate between these two applications and when you can or should use each of them and then I'll jump straight into lovable to start building and showing these Concepts step by step instead of just going through a bunch of slides we'll actually do application right away so you can see how to connect a database how to enable stripe and how to build certain types of web applications that you can now embed in other websites as well I'm going to first Go full teacher mode and pull out a whiteboard to walk you through some of these differences what level is and explain what superbase is the core database that it uses to actually enable all its functionalities all right so teacher mode activated I'm going to walk through the difference between lovable let's just capitalize that as well as bolt. new so let's make a little separator here and then we'll use bolt. new all right so on The Lovable side it's built on top of this database we'll call it a hypercharged or supercharged database it's called superbase it's even in the name super database and then you have bolt. new built on top of I'm just going to call this web browser infrastructure so I'm going to call it infra I don't want to get into semantics and details cuz that's not the point of this video this is super high level just to grasp the core key difference here that is responsible for all kinds of different functionality differences so on The Lovable side you can imagine you have this database okay and then we have some rows and columns and then on top of this database you also have functions so we call this let's say function one and we have function two these functions are called Edge functions okay so these Edge functions are what allows you in lovable to actually create a stripe integration to create a hook to a database to allow for authentication so these are let's say mini helpers that help the database do more than just house data it helps it actually be very Nimble and execute different workflows from One Core environment versus building a whole backend similar to what bolt does where you are hosting that somewhere and it's being executed while you're going through the app it's a lot more lightweight in the capacity that you're using an actual database on the bolt side you basically have again with the actual web browser it's not built on top of a core database now they have added superbase integration recently so this is as a few weeks ago but it's not actually fundamentally designed on superbase or a database like superbase so the way this creates functions is wildly different from the way this creates functions meaning certain things are easier to do in Bolt certain things are easier to use in lovable it really depends on the use case you're looking for now in terms of the llms that play or how the app actually fundamentally Works they're very similar in the idea that they both have an llm or llms actually orchestrating everything so with bolt you primarily have Claude 3.5 sonnet as the llm of choice whereas based on the documentation of lovable you have open AI you have Gina AI you also have uh I think also CLA or anthropic so I think there's a hodg podge of ones being used in lovable versus ones in bolt on you so this is one core one that's being responsible for the bolt on new infrastructure and then you have a midly for lovable and I realized I should have made this orange but you get the point comparing some other features at a high level so both of these functions have the ility to go back in time that is my poor way of drawing that let me do that in blue actually so both of them allow you to roll back if things get hairy which you know all of these things are still experimental meaning at some point you will hit errors it's almost a guarantee if you want to build a prototype or an MVP of value so that's one thing they share one thing that lovable has that bolt doesn't have is it allows you to select a specific element so I'm just going to push down the marker here so in the actual box instead of taking a screenshot of your actual application saying hey fix this thing you can actually click on the very bottom of your screen which you'll see an actual element detector where you can click on the screen and say this part of the actual web page I want you to change it whereas bolt has a function that lets you automate basically the writing of a prompt it helps with the prompt engineering side a lot more which most of the time is super helpful and that's a feature that's yet to be in lovable itself both of them also connect to GitHub with level bolts kind of a oneclick button whereas with bolt you just have to do a little work to get there but it's completely doable they both actually use pictures as input if you wish so I'm just going to put that in the middle here so picture and when it comes to using them for specific use cases I find that for now obviously these things change by the hour and the day that bolt. new is better for General UI plus ux so in layman's term it's nicer on design so has a better understanding of user interface and user experience whereas lovable has an advantage that you can render certain elements in a page that are tricker to do in Bolt And if that will make no sense but imagine you had some form of weight list you were setting up and on that weight list you not only wanted to easily connect some form of database right to apply early or to apply right so this would be super base so I'm just going to put Supa but maybe you want to throw in a loom video or a vsl so you want to be able to embed something on the actual web page so imagine you want to have a video here right so if you try this and I'll show you an actual example of this as one of our first use cases this will work pretty well on the first try on bolt it won't and it does get back to how both are designed it's not to say this is impossible but it's infinitely easier on lovable at least the way it's designed all right so that's enough yapping I'm going to ditch teacher mode now and we'll jump straight into lovable where we'll experiment with a few things you can gauge these differences in action versus me just speaking about them all right so before we even write our first prompt to create a very basic application in lovable I'm going to walk through how to actually set up superbase which I've been speaking about non-stop the whole time so this is the actual website again there's nothing crazy about the actual app itself it is a database one advantage it has over a lot of databases is it allows you to store vectors and if you don't know why that matters if you say want to store certain VOR values maybe an input from a user in a way that uh an llm can scan and use as input vectorizing is essential so one key Advantage with superbase is you could create an edge function if you remember that's a helper function that would allow you to take certain columns and create vectors out of them which are just texts and numbers that allow llms to process it and understand them so if there is some form of follow through in the application you want to create that gives you a certain Advantage so if you go here to product and you see here Vector toolkit you'll see that it basically lets you have a mini Vector database on top of your normal database which is why it's really useful and it keeps you very Nimble in terms of the types of applications you can actually create so when you go in and you log in you'll see some blank screen and then you'll be able to create your first project so for the purposes of this tutorial let's create a project and one prerequisite is that you'd set up some form of organization on the free plan I believe you get two different projects for free and beyond that you have to pay a certain amount per month so let's create a new project and we'll call it lovable demo and for this I'll use small or let's use micro so there is a payment here per month uh to be used so be mindful of that and then you set up a database password so I'm just going to set up a pretty simple one here and then you choose the region where your database should be hosted so I'm going to choose Canada since I am in Canada I'll create new project and this will take around 4 to 5 minutes so I'll just wait for this to render and load and you'll see here it will say setting up project and once it's done you should see two buttons on the right hand side both that are green that tell you greens means go you're good to actually use this database all right and it took around 6 to 7 minutes I actually finish but now you can see project status and security issues are all resolved so I'll give you a very quick tour of superbase on what the features that you should care about are so if you go to table editor here this is where lovables is going to actually create and write the databases depending on the application you're looking to make so you're going to see this populated once lovable actually knows what you're trying to build when you go to Edge functions here this is where a lot of the functions that you'll need let's say if you want to integrate stripe or you want to do different functions that are outside the scope of normal backend this is where it would be hosted and if you go to Project settings and look at Edge functions here this is where certain secrets are going to be stored so when you set up your database for the first time which you don't have to do lovable will just know hey we need to create some form of database because you want to store XYZ information about the user or their preferences or whatever it's going to create some API keys for superbase here because it's going to be integrated with your infrastructure and then you can click on add new secret to enable things like openai or other llms to have their secrets actually embedded in the app itself beyond that if you are logging in and setting up an account for the first time you're going to want to go to authentication and providers and pick which providers you want to set up out of the box for me personally because I like to spin things up pretty quickly I just choose email and I remove this confirm email and secure email change to make things a lot easier otherwise when you create authentication in the app it'll have to confirm the email and what happens is the confirmation goes nowhere because you have to set up what's called a redirect URL where it comes to here this URL configuration so if you're just experimenting with this to see what's possible I would I just remove those features for now just to remove any headaches or friction from actually getting going so with that we can now use this database and we'll create our first mini demo just hooking up to superbase to see how that works so we'll go into lovable here and in here I will first click public to private if you start with a free account it will be public by default meaning if you go to featured or latest you will be able to access other people's projects there and look at their chat history if you did want to make sure that all your projects are private then you would want to upgrade to their $20 a month plan that allows you to do that and one thing to do is if you want to stick to the free just to try this out be very careful not to put API keys or anything publicly available that could hurt you or your wallet just because you can theoretically go into any of these featured apps right and go through their history and scroll up and see pretty much everything that happen in that conversation which is awesome if you want to be able to see some of the building blocks and examples of prompts that are more effective than others to build actual applications but not so much if you're putting publicly available information such as API keys or anything that can hurt your wallet that would be ideal so be very wary of how you enter certain API keys if you use public now if we go back up here we will say something very basic so let's create an app that allows me to enter my top five business schools create a design that is futuristic modern and has moving gradients in the background that are minimalistic now I'm keeping this very basic just to be able to show the functionality so I'm just going to click here on private we're going to send this and we'll wait for it to do his first actions and this took around 2 minutes but now you have a very basic user interface that lets you enter goals so I want to make more profit you can see the little gradient behind the scenes um let's do another one I want to hire many Allstars let's add that and I don't think save goals actually does anything because if we refresh the page because there's no database to store this information there's no what's called persistence so if I refresh this everything will go away because it's not tied to a user account so this is a good opportunity to show you how their native super base actually works so if you click on super base here and you go down for the first time you'll just need to authenticate into super base and then after you'll be able to connect to whichever database you wish we're going to use our actual project we put together here which is lovable demo I'll click on connect and then it pretty much enters an actual request that says please connect my super based project lovable demo so one thing you'll notice about lovable is even when you get errors it writes a prompt that you can see to actually send it to the app to try to resolve the issue so you'll see here it says I'm now connecting to your superbase pro project yada yada yada it says it's properly authenticated it stores real data and there we go it tells you what kind of edge functions you can use and what you can do with that so email notifications payments Etc so now if we go into our lovable backend we still don't have a database because we haven't told it what to store so in this case I'm going to say can we create a authentication with email and password that will allow us to log in and save our goals by account so again we're keeping things very basic here so as this is actually generating the first time I won't actually cut I'm just going to show you even if you're not uh SQL Savvy and SQL stands for standard querying language which is a database language to actually create tables it is doing all the work on the front end here to create a table called business goals it came up with which Fields it should store so in this case it came up with ID which is some form of random ID that's assigned as a primary key that's basically the ability to create a very unique novel ID for a user that is different from user ID which once in a while can be um null meaning it's non-existent if the user hasn't actually authenticated yet and goal text is what you'd actually save here once you add a goal and then created at would basically create a Tim stamp which is basically what time and what day was this goal created so one thing you'll notice is this thing called create policy and there's a lot loaded here that you shouldn't care about unless it becomes a problem later on the only time it becomes a problem is let's say you have different user accounts and let's say it's a matchmaking app of whatever use case you need to be able to see and remove security at an individual account level to be able to see all the values from all the accounts in order to do the matchmaking um in layman's terms if you know user a has four goals and user B has three goals because of the security the way it's set up by default user a can't see user be's goals but let's say we wanted to matchmake these business owners by their very similar goals we'd have to remove this layer of security to enable that again you can remove that for now until it becomes a problem so one thing that lovable does is it tends to ask for permission a lot so in this case it tells you what the plan is it says after you approve the SQL commands again SQL is the language that you create right to databases it will do the following so it'll create a UI a user interface with email and password authentication it will set up superbase to create the actual table and then it will do some error handling meaning it'll set up some notifications to know um if the user hasn't signed up with a proper email or they haven't authenticated themselves it will have different roots to handle those scenarios so if we click on apply changes most of the time for something simple like this it'll say the migration has been applied successfully sometimes you'll run into scenario where it says it there's an error and it'll get this little notification on screen that'll say fix so most of the time I'll click fix two to three times and then I'll intervene myself if things are starting to get a bit hairy all right so now it has the UI with the email and password and you can notice the font Choice here is absolutely horrific so I'm going to use this feature I alluded to before called select I'm going to go into this box here until it hovers so you can see this is a section this is just the text and as you go down it'll tell you whether or not you're selecting something that is editable so I'm going to click on this so now it knows I'm referring to this part of the screen I'm going to say the font is awful please make it something that goes with the background and ideally throw some design on the page with Emojis so let's see if that applies properly so now you'll see it's edited the core font here and one thing I couldn't select was this lime green font so let me screenshot this and use this as input and say change lime green to bold white font I can't see anything all right so we got our first error here it did change momentarily the font but then it said build unsuccessful so we have some error here I'm going to act like I don't know what it is I'm going to click on try to fix it and again sometimes this can be a loop that lasts two three times sometimes you have to step in one thing you can do is click on show error and see what the error is this might mean absolutely nothing to you but worst case you put this into something like perplexity and GPT and maybe you can nudge along what it should do to resolve it but typically for something like this it's pretty straightforward that it should be solvable pretty quickly so I ended up getting a few errors here you'll see here build unsuccessful build unsuccessful so it for some reason couldn't realize that I'm talking about this specific email address so it remained green so I'll show you a little hack and I'm happy this ER came up so what I'll do is I'll click on open preview to new tab and even if you're not Tech Savvy you'll see exactly what I'm doing here so if you go on and this is on Google Chrome you have the equivalent of this in Firefox Safari Etc if you go to more tools and you go to developer tools you can click on this icon and by the way this works on any website so you can actually look at the element of any website if you want to emulate it as well so you can see here as I'm going down I can see the name of certain elements so when I click on this it shows me some name so all I did is I copied this name and then clicked on this Arrow went back found this copy pasted it if you see here all I did is I need to change this color to bold white I just copy pasted what the element name is from here as well as the second one and then I just said make it white and as soon as I did that you'll see here it worked immediately so that part was alleviated there so now if we close this and we set up an account for the first time and we'll do this and let's make some password and sign up so in this case I just want to double check that we disabled authentication so if we go on authentication and then providers I think email went back to confirm email so let's take that off here and let's we can log in it'll even if we didn't confirm the email it will be able to log in given how it's structured so I'll just click on sign in let me try this okay so let's let's see um let's do this let's paste the error what's going on here so I ended up getting a few more issues here that popped up and I tried to click fix and what happened was because originally our super base for some reason it reset so if you go to the the section I said authentication and then providers you'll see if you go back to email these are all clicked on so it did need you to confirm your email and because the email was not confirmed it was having issues so if I disable these now and I refresh just to make sure this took effect let me just do this one thing that I forgot to do is after actually toggling these off you have to go and actually click save so that didn't help my case and just so I can start from scratch I went to here users and then the two users I made which is my prompt advisor email as well as the temp email I put together I deleted them from the database so they atically if I go in here now and I do Mark a prompt advisors and I create a password and I sign up right so I should be able to log in immediately because there's no confirming email and now if I add a goal and I say I want to make millions as a goal and I add that theoretically that should update our database in real time if it's synced up in the proper way so how you can check that is if you go back to table editor you'll see now lovables created through superbase a table called business goals and if if I refresh this you'll see that there's nothing here so what I'll do is I'm going to ask it um so I was able to log in but it doesn't seem like my goals are being stored at the account level so you'll see here in the message you came up with it said looking at the RLS policies so just think of that as security policies I noticed that while we have yada yada yada basically there's no permission to write and read from there so it basically wrote this SQL code this database code and I'm going to click on apply most of the time they'll say successfully so there we go so theoretically if I now have this View rerender and I add a goal it should add it to the actual database let's sign back in and then I'm going to enter password and we have nothing logged in now right so let's do I want to make millions whoops let's do add goal and click on Save save goals okay goal saved so we have an error here so I want to see if the errors is associate to saving at all so it did save it so the error we got was for something unrelated so I'm going to click on show logs here um I feel like it's just not communicating in the correct way but it did the right thing so I'm just going to click on try to fix it I won't hold you hostage until this resolves and I'll show you what it looks like after so it looks like we're in the clear now so if I say another one I want to hire unicorn I do add goal I click on Save goals and I go back here I don't even have to refresh you can see it's actually sync towards here so this is working now and if we log out our test can be let's sign up with a temporary email so I'm going to go to Temp hyphen mail.org I'm going to create a new account okay I'm going to create another password I'm going to sign up and then let's just add a goal test goal and I click add this should save under a different user ID a different created ad and it should store separately so if I refresh here we should have oh one thing I forgot is to actually save the goal so that should be something I changed in the actual interface so for now let's click on this you can see here we got test goal for a different user ID a different unique ID for the actual goal itself so if we go back here let's now step this up just a tad and say okay now I want to be able to automatically save the goal anytime I enter it without having to basically click save goals to click save goals in order to write to superbase this will make the oops spelling mistakes here will make the user experience more seamless so it says there's an autosave functionality now which is looks weird it looks like it's infinitely saving things to the database so I'm just curious what chaos is happening okay um so I'm just going to take a screenshot here and then I'm going to paste it here I'm going to say we don't need this to autosave every moment like it is now just when we actually enter the core goal otherwise there's useless functionality Autos saving nothing all right so now it finished it didn't take more than just one little reminder and now it said something very important here so it said the business goals whatever file is getting very long so one thing lovable is interesting at doing is it looks at all the AI code that's been generated and once in a while it will tell you hey I think you should summarize this down cuz it's getting a bit too meaty there might be too much fat in your code so you can actually say sure refactor the code without disturbing any functionality and then one thing to check here is when we did add goal now if we do test goal three and we click on ADD goal right this will automatically save so if I refresh here this should say test goal 23 like you saw here so we're good on that front so I'm just going to send this here to do that code refactoring which again is just summarizing and leaning down your code to be as Nimble as possible all right so now that it's done refactoring the code we can say let's now rework the underlying design to look more like Spotify design but instead of green and black It's a combination of white and the current Violet we have so I'm just more so showing you how you can alter design by giving it a reference point so Spotify is very well known in terms of the actual design principle so if you send that we should be able to change it so with a few different iterations at first it gave me a poor attempt here where it wasn't the nicest it was on a blank page I basically said try again make it a bit more sleek and nicer then insisted on the white background versus the purple so then I said make the background purple and the core Parts white so vice versa of what you have and then we got something like this so we'll just settle with this for now I can see the font's a bit more Spotify esque um let's focus on integrating stripe which was a bit of a Frankenstein show using it in Bolt if you watch that last video I did a few weeks ago if not then we're going to go into stripe here and what you can do in lovable is say I want to integrate stripe so that anyone who wants to use this application has to pay $1 let's do1 199 a month so now what it should do is it's smart enough and I think they've trained their back end to be able to tell you exactly what elements you need to set that up and what it's going to do if you remember at the very beginning of the video we now are going to take advantage of an edge function so a helper function to go and create some form of integration into stripe so here it tells you step by step you need a stripe account then you need a stripe account with a recurring price of $1.99 then you need your stripe API key so what I'm going to do is I'm just going to go into a test account of stripe so I've logged into stripe and I've gone on test mode which is good because we don't want to spend real money on this and you can simulate actual payments so if we go to payment links I'm going to create a new one I'm going to say um business goals and then I'm going to say it's recurring and then it's $199 per month okay so we'll do add product and then we need a few things it told you you need a price ID so I'll show you where to get that when you create your product you can go and then click on the product itself and then you can go click on this number and then if you go down you'll see here a new price was created if I click on this you'll see here the price ID if I click on this one you'll see this ID at the top right this ID is what we need so I'm going to take this and I'm going to go into lovable and I'm going to say here is the price ID okay and then what else do we need we have the stripe account we have this the API key I think is going to offer to embedd it itself so I'm going to say ask me for my stripe API key so I can give it to you so this is an actual feature within lovable that it actually prompts you for API Keys instead of you just entering it in the chat uh I realized I spelled this wrong give it to you okay so let me just send this so so it should Now log this price ID as our products price ID it'll now come back with an actual request for the stripe API key while I won't show the actual ID where you have to go to retrieve it is you want to click on developers here and on here you want to click on API keys and then you'll see a section that says secret key you want to copy paste that and then input that into lovable so in this case I'm going to enter my stripe key into this handy dandy button it gave us I'll click on submit all right so now we get a subscribe to gold tracker from the get-go which looks very much like a normal software as a service application if you click on subscribe now we get an error so it's something with the actual Edge function so I'm going to let it figure that out on its own so I'm going to click on try to fix so now we'll get this page again and if you click on subscribe now within this actual view it will just load forever so what you want to do is you want to click on this which is open preview to new tab you want to go here and then you'll get that view rendered again and then once you actually log in so let's do this let's log in right so now I have to pay going to click on subscribe now it says fail to start checkout process so I'm just going to tell it so I opened it and let me screenshot it to make it easier and then paste this so This should lead to the stripe page that then I can pay and then it sends some more request back to the database saying hey Marcus paid so if if I say so I opened it and got this error when I clicked subscribe now um I think it has something to do with the edge function after two more tries I'm still getting the same error and one thing that I'm realizing is because I can't actually render this within the view itself this little mini view it doesn't really see the error so again if we go back to our old trick here if we open this in a new tab and if we go to the three dots here and go to more tools TOS developer tools and then we basically try this again let's click on subscribe now you get this failure you now at least have some traceability of the failure so what I'll do is I will just take this and I will screenshot it and I'll say here are the errors right it has the same error here is the main error and one thing here it's invited me to do now after running this again and showing it that error is it says create checkout logs so if I go to create checkout logs this is our Edge function for create checkout and you can see an error every single time so this is the full error message and if I copy this it says error combining currencies interesting um so if I go to this this is the core error should only be $199 USD per month shouldn't be an issue with the currencies so getting the error again this is what I'm going to do and then this is the whole point of this tutorial I'll show you what do you do when things go wrong so I'm going to go to history here and then I'm going to go to right after we did the purple to White authentication thing sorry purple to White redesign of the app so let's go to that I'm going to click restore and now we've reverted to before chaos ensued and I'm just going to go in here I'm just going to delete some of these older subscriptions so let me deactivate this because I think maybe my test account is malfunctioning with all of these different uh actual payment links so let me just deactivate all of them and then we'll create one from scratch and just for Simplicity we'll make it Canadian dollars because I don't know if it really wants me to be Canadian so we'll create a new one we'll just call it uh add a new product goals I'll just make it recurring $1. 199 Canadian a month and I'll click add product and then I will just create this link and it'll do the same thing um I will just go to goals I'll go to the actual price I'll go to Price ID I'll click on this I'll take that link and I'll go back and I'll close this and I'll say Let's uh make it so that any anyone who wants to use the app has to pay in order to use it ask me for my stripe API key and here is the price ID okay we'll paste that so we'll redo that part and I'll go into my developers thing again and get an API key here we'll go to stripe secret key what add it and we'll see if this makes things a little bit easier so now when we take our second attempt here I'm going to open this in a new tab we're going to get the Gold Tracker now when you log in you're going to see subscribe now which should take you to an actual account here and you should be able to subscribe so I'm going to use the fake stripe credit card credit card test so then I will put this 424242 and let's just go into here to make sure we have the right CSV so let's do copy and then let's paste here let's make up some random dates some random numbers and then I'll just put test and then some postal code and we should be able to click subscribe here and then it'll quote unquote go through because it's a test function and once that test function actually functions we should be able to log in and actually use the app which you can see here so that's this part and I did want to show you one more use case before we sum it up so while everyone goes over how to build end to end applications using things like lovable or bolt or wind surf what people don't talk about is that you can build components with these services that lets you embed certain elements in your existing web pages so let's say you're a small business owner and you want to be able to create some form of calculator to help with lead magnets or lead engagement and let people calculate the value of whatever it is that's relevant for your business you can actually create this mini embedded app in lovable and then be able to use it as an element in your existing application so we're going to create a very basic calculator and I'll show you how we can quickly embed that and it'll give you some inspiration for what else you can use these text to web app applications for so let's say you have a cleaning business and you want to be able to generate a rough estimate for how much cleaning per week would cost for someone's house given the number of bedrooms the number of amenities Etc and they can do it self- serve so let's go here and let's say I want to create a very um engaging calculator for cleaning business for a cleaning business um it should take the number of bedrooms number of bathrooms uh square footage of the home um and be fairly simple for anyone to use and then when someone clicks submit it will then send all that information via lead form and realistically The Next Step here would be to create it via superbase like we just did and log that in but I won't prioritize that since we know how to do that I'll just worry about the form itself um I'll just say don't worry about making the calculator submission um usable or functional create the shell where you can enter things and select from dropdowns Etc so we'll just click on private here and then we'll click Send and then this is going to now send that request and ideally create that shell to show us exactly what that would look like all right and here's the first version of the draft of the calculator on the left hand side you have like we said the number of bedrooms bathrooms square footage type of service you're looking for to calculate the quote if you want a custom quote or something more detailed then you can put your name email and number again I don't care to make this functional because I want to show you how to create what's called an iframe so you can actually embed it on an existing website so what I'm going to do is I'm just going to publish this and I'm going to click on private here I'll click on on deploy this will generate some link I don't care to make it a custom domain yet what you can do is you can go to a custom domain go to netfly buy an actual domain and attach it but we don't necessarily need to do that if we click on this now this is the new URL that we have so this is important because this will be needed in our iframe that we need to embed in a website so now we can actually go and ask can you create an iframe of this calculator I can embed on my website and what this should do is create some very specific code that you can copy paste into a portion of the web page to actually do the integration and here we get the code it says if frame at the beginning and end so I know it's the right type of information in SRC it has some placeholder for website that placeholder is this so we're going to need to put that so I'm going to just make my life easier and say this this is my deployed URL can you tailor the ey frame just to be extra lazy here so it should now make another version of this that just has that embedded URL just created input it in that iframe object all right so what we're going to do is we're going to copy paste this and I see it added one component here that immediately is jumping out to me so in case you see it on your end make sure you remove it you want to remove this slash embed because it's pretty much meaningless we just just need the actual full URL of the app so if you put this in here which is html-only docomo this embed component and then once you do that it should be able to actually render and you can see here on the left hand side you can see the actual screen or if frame that we created with that core calculator where you can actually click and interact with it so let's say we actually made a web page from scratch so let's go to chat gbt I'm going to use my Pro here I'm going to say create a beautiful um HTML CSS for uh a web page for a cleaning business you don't need to do this on your end this is purely just to show you how this would work assuming you had the website so it finished actually creating the website and if we copy paste this into the HTML online you can see on the left hand side here you have some formulaic cleaning page okay so I can go back with some quick feedback to chat GPT I'll be like hey um I don't like this that's all good some picture here is not rendering we don't need that um I'll say please make the landing more minimalistic and remove the non-existing image here and I'll say please provide me with downloadable files to see this local all right so now I created an HTML file that we can copy paste as well as a CSS file if you don't know what a CSS file is it's pretty much responsible for all the styling of a particular web page so think of icons colors fonts Etc so we can copy paste both of these into two separate files so that's what I did um I created a new folder called uh web page and then I called one index.html and the other one like it said uh styles. SS it's important you name them these specific names because they reference each other so if you name this Styles 2 without updating certain components of the HTML to refer to Styles 2 then they'll not be able to talk to each other and then you'll have just a one page full of links and hyperlinks that looks pretty ugly so what I did next is now that I have them both in one folder I use this app called brackets it's free to use it basically lets you basically render things like HTML or css on your local desktop so if I click on this bad boy you'll see the actual web page as we saw it before now it looks a little bit more minimalistic and what we want to do now is go back and the whole point of this is to take this and then I want to ask it where do I put this iframe to embed it in the middle center of my web page and then we'll put this here and I'll just remove the embed like like we did before and then it should give me some updated HTML not CSS necessarily to be able to make sure that embed actually appears on that web page all right so initially chat gbt gave us small Snippets of code where it said hey take this and put this wherever you want let's say we don't want to deal with that headache I just asked it to Output the entire HTML and CSS file so I can just copy paste so it gave us these again I just copied each one went into brackets and now I just copied and then pasted same thing with the HTML I saved and then once I click Refresh on the web page itself you can see now that we have our normal web page and we have this embed from lovable you can see here we remove that and theoretically you can make this into one page you could extend it you could play around with how it appears on the web page but the bottom line is now you have a smart app that you can even integrate gbt 40 or gb40 mini if you want to add some natural language components that you can embed on your existing website so the whole point is just to show you you don't have to necessarily build something end to end if you don't want to if you already have something if you have an existing web application you have an existing website you can also use lovable to create components that make your services that much more helpful especially if you want 2025 to be a year of more leads more interest and whatever you offer this is a good way to actually get around that again without having to hire a web developer necessarily to do the thing for you and while I can keep building tons of different use cases on lovable what'll give you in the meantime are two different things to help you Kickstart using it or if you have already started using it and you've been comparing it against bolt this will help you at least understand the nuances so a lot of the things that I mentioned today such as super Bas stripe um how this works compared to other Tex web app applications I have this full guide for you that will be downloadable in the gumroad link in description below and as usual in Mark fashion I put together a GPT to help you as a co-pilot so like I said before there are some nuances in prompting lovable compared to other text to web Builders so the idea here is that similar to my bolt. new GPT I put together more than a month ago you can go on frame my project and you can say something like I want to build a web application that takes people's goals in their business and create a full road map who for them right and then this will try to create an application for you like the actual what the look and feel design it thinks is a smart idea any features you might want to consider and if you want to ask it hey can you create a succinct prompt for me I can enter into lovable then it'll do that as you'd expect so there you go create a web application that generates business schoal road maps and it goes through the different features and then you can actually ask it questions like should I integrate super base at the start or later and it should have some logic from what I fed it so it's highly recommended to integrate superbase at the start of your project here's why and goes through some of the benefits and even gives you some boiler plate code in case lovable hallucinates for whatever reason but this should be really helpful for you to get started or imilate what you already done in terms of your prompting capacity and if you wish to take apart my GPT and customize it for what you like to build on level you can just say what are your custom instructions let's open a new chat here and you click on oops new chat and then I'll just do this and say output in a code Block in markdown you can see all of my underlying instructions you can edit them create your own custom GPT of your choice whatever makes it easier for you try to load it as much as possible but maybe the examples you want to tailor to your specific use cases feel free to do that it's all yours it doesn't hurt me whatsoever so enjoy if you found this video helpful let me know down in the comments below I know it takes a bit of trial and error with these errors but once you get past them you can now build things that otherwise you would have had to Outsource to a full stack developer and you can really prove a concept or a prototype out pretty quickly and even collect payment using lovable. deev I'll see you all next time

## Timed Segments

[0:00] in this video I&#39;m going to walk you
[0:01] through how to use lovable. deev which
[0:03] is another text to web app platform
[0:05] similar to bolt. new that lets you build
[0:08] MVPs and prototypes with relative ease
[0:10] while bolt is great lovable has some
[0:13] advantages that make it a lot easier to
[0:15] use for certain functions such as
[0:16] setting up authentication hooking up a
[0:19] database as well as even enabling
[0:21] payments through stripe which has been a
[0:23] bit painful using something like bolt.
[0:25] new up to now I&#39;m going to start with a
[0:27] big picture overview of some of the key
[0:29] Concepts you should understand
[0:30] understand when you&#39;re trying to
[0:31] differentiate between these two
[0:32] applications and when you can or should
[0:34] use each of them and then I&#39;ll jump
[0:36] straight into lovable to start building
[0:38] and showing these Concepts step by step
[0:40] instead of just going through a bunch of
[0:41] slides we&#39;ll actually do application
[0:43] right away so you can see how to connect
[0:45] a database how to enable stripe and how
[0:47] to build certain types of web
[0:49] applications that you can now embed in
[0:50] other websites as well I&#39;m going to
[0:52] first Go full teacher mode and pull out
[0:54] a whiteboard to walk you through some of
[0:55] these differences what level is and
[0:57] explain what superbase is the core
[0:59] database that it uses to actually enable
[1:01] all its functionalities all right so
[1:03] teacher mode activated I&#39;m going to walk
[1:05] through the difference between lovable
[1:07] let&#39;s just capitalize
[1:10] that as well as bolt. new so let&#39;s make
[1:13] a little separator here and then we&#39;ll
[1:15] use
[1:16] bolt. new all right so on The Lovable
[1:19] side it&#39;s built on top of this database
[1:21] we&#39;ll call it a hypercharged or
[1:24] supercharged database it&#39;s called
[1:25] superbase it&#39;s even in the name super
[1:28] database and then you have bolt. new
[1:31] built on top of I&#39;m just going to call
[1:32] this web browser infrastructure so I&#39;m
[1:36] going to call it infra I don&#39;t want to
[1:38] get into semantics and details cuz
[1:40] that&#39;s not the point of this video this
[1:42] is super high level just to grasp the
[1:43] core key difference here that is
[1:45] responsible for all kinds of different
[1:47] functionality differences so on The
[1:48] Lovable side you can imagine you have
[1:51] this database okay and then we have some
[1:54] rows and columns and then on top of this
[1:57] database you also have functions so we
[2:00] call this let&#39;s say function one and we
[2:02] have function two these functions are
[2:05] called Edge functions okay so these Edge
[2:10] functions are what allows you in lovable
[2:12] to actually create a stripe integration
[2:15] to create a hook to a database to allow
[2:18] for authentication so these are let&#39;s
[2:21] say mini helpers that help the database
[2:23] do more than just house data it helps it
[2:25] actually be very Nimble and execute
[2:28] different workflows from One Core
[2:30] environment versus building a whole
[2:32] backend similar to what bolt does where
[2:35] you are hosting that somewhere and it&#39;s
[2:37] being executed while you&#39;re going
[2:38] through the app it&#39;s a lot more
[2:40] lightweight in the capacity that you&#39;re
[2:41] using an actual database on the bolt
[2:43] side you basically have again with the
[2:45] actual web browser it&#39;s not built on top
[2:47] of a core database now they have added
[2:50] superbase integration recently so this
[2:52] is as a few weeks ago but it&#39;s not
[2:54] actually fundamentally designed on
[2:56] superbase or a database like superbase
[2:59] so the way this creates functions is
[3:01] wildly different from the way this
[3:02] creates functions meaning certain things
[3:05] are easier to do in Bolt certain things
[3:07] are easier to use in lovable it really
[3:08] depends on the use case you&#39;re looking
[3:10] for now in terms of the llms that play
[3:13] or how the app actually fundamentally
[3:15] Works they&#39;re very similar in the idea
[3:18] that they both have an llm or llms
[3:21] actually orchestrating everything so
[3:24] with bolt you primarily have Claude 3.5
[3:27] sonnet as the llm of choice whereas
[3:30] based on the documentation of lovable
[3:32] you have open AI you have Gina AI you
[3:36] also have uh I think also CLA or
[3:39] anthropic so I think there&#39;s a hodg
[3:42] podge of ones being used in lovable
[3:43] versus ones in bolt on you so this is
[3:46] one core one that&#39;s being responsible
[3:48] for the bolt on new infrastructure and
[3:50] then you have a midly for lovable and I
[3:53] realized I should have made this orange
[3:54] but you get the point comparing some
[3:55] other features at a high level so both
[3:58] of these functions have the ility to go
[4:00] back in time that is my poor way of
[4:02] drawing that let me do that in blue
[4:04] actually so both of them allow you to
[4:07] roll back if things get hairy which you
[4:09] know all of these things are still
[4:10] experimental meaning at some point you
[4:12] will hit errors it&#39;s almost a guarantee
[4:14] if you want to build a prototype or an
[4:15] MVP of value so that&#39;s one thing they
[4:17] share one thing that lovable has that
[4:20] bolt doesn&#39;t have is it allows you to
[4:22] select a specific element so I&#39;m just
[4:24] going to push down the marker here so in
[4:28] the actual box instead of taking a
[4:30] screenshot of your actual application
[4:32] saying hey fix this thing you can
[4:34] actually click on the very bottom of
[4:35] your screen which you&#39;ll see an actual
[4:37] element detector where you can click on
[4:39] the screen and say this part of the
[4:41] actual web page I want you to change it
[4:43] whereas bolt has a function that lets
[4:46] you automate basically the writing of a
[4:49] prompt it helps with the prompt
[4:50] engineering side a lot more which most
[4:53] of the time is super helpful and that&#39;s
[4:55] a feature that&#39;s yet to be in lovable
[4:57] itself both of them also connect to
[4:59] GitHub with level bolts kind of a
[5:02] oneclick button whereas with bolt you
[5:03] just have to do a little work to get
[5:05] there but it&#39;s completely doable they
[5:07] both actually use pictures as input if
[5:10] you wish so I&#39;m just going to put that
[5:11] in the middle here so picture and when
[5:13] it comes to using them for specific use
[5:15] cases I find that for now obviously
[5:17] these things change by the hour and the
[5:19] day that bolt. new is better for General
[5:23] UI plus ux so in layman&#39;s term it&#39;s
[5:27] nicer on design so has a better
[5:30] understanding of user interface and user
[5:32] experience whereas lovable has an
[5:35] advantage that you can render certain
[5:37] elements in a page that are tricker to
[5:39] do in Bolt And if that will make no
[5:41] sense but imagine you had some form of
[5:44] weight list you were setting up and on
[5:46] that weight list you not only wanted to
[5:48] easily connect some form of database
[5:51] right to apply early or to apply right
[5:54] so this would be super base so I&#39;m just
[5:56] going to put
[5:57] Supa but maybe you want to throw in a
[5:59] loom video or a vsl so you want to be
[6:01] able to embed something on the actual
[6:04] web page so imagine you want to have a
[6:05] video here right so if you try this and
[6:08] I&#39;ll show you an actual example of this
[6:10] as one of our first use cases this will
[6:12] work pretty well on the first try on
[6:14] bolt it won&#39;t and it does get back to
[6:17] how both are designed it&#39;s not to say
[6:19] this is impossible but it&#39;s infinitely
[6:21] easier on lovable at least the way it&#39;s
[6:23] designed all right so that&#39;s enough
[6:24] yapping I&#39;m going to ditch teacher mode
[6:26] now and we&#39;ll jump straight into lovable
[6:28] where we&#39;ll experiment with a few things
[6:29] you can gauge these differences in
[6:31] action versus me just speaking about
[6:32] them all right so before we even write
[6:34] our first prompt to create a very basic
[6:36] application in lovable I&#39;m going to walk
[6:39] through how to actually set up superbase
[6:41] which I&#39;ve been speaking about non-stop
[6:43] the whole time so this is the actual
[6:45] website again there&#39;s nothing crazy
[6:47] about the actual app itself it is a
[6:49] database one advantage it has over a lot
[6:51] of databases is it allows you to store
[6:54] vectors and if you don&#39;t know why that
[6:56] matters if you say want to store certain
[6:59] VOR values maybe an input from a user in
[7:01] a way that uh an llm can scan and use as
[7:05] input vectorizing is essential so one
[7:07] key Advantage with superbase is you
[7:09] could create an edge function if you
[7:11] remember that&#39;s a helper function that
[7:13] would allow you to take certain columns
[7:16] and create vectors out of them which are
[7:18] just texts and numbers that allow llms
[7:20] to process it and understand them so if
[7:22] there is some form of follow through in
[7:24] the application you want to create that
[7:26] gives you a certain Advantage so if you
[7:27] go here to product and you see here
[7:29] Vector toolkit you&#39;ll see that it
[7:31] basically lets you have a mini Vector
[7:33] database on top of your normal database
[7:35] which is why it&#39;s really useful and it
[7:37] keeps you very Nimble in terms of the
[7:38] types of applications you can actually
[7:40] create so when you go in and you log in
[7:43] you&#39;ll see some blank screen and then
[7:45] you&#39;ll be able to create your first
[7:46] project so for the purposes of this
[7:48] tutorial let&#39;s create a project and one
[7:52] prerequisite is that you&#39;d set up some
[7:53] form of organization on the free plan I
[7:56] believe you get two different projects
[7:57] for free and beyond that you have to pay
[7:59] a certain amount per month so let&#39;s
[8:01] create a new project and we&#39;ll call it
[8:03] lovable demo and for this I&#39;ll use small
[8:09] or let&#39;s use micro so there is a payment
[8:11] here per month uh to be used so be
[8:13] mindful of that and then you set up a
[8:16] database password so I&#39;m just going to
[8:17] set up a pretty simple one here and then
[8:20] you choose the region where your
[8:22] database should be hosted so I&#39;m going
[8:23] to choose Canada since I am in Canada
[8:26] I&#39;ll create new project and this will
[8:28] take around 4 to 5 minutes so I&#39;ll just
[8:30] wait for this to render and load and
[8:33] you&#39;ll see here it will say setting up
[8:35] project and once it&#39;s done you should
[8:37] see two buttons on the right hand side
[8:39] both that are green that tell you greens
[8:41] means go you&#39;re good to actually use
[8:42] this database all right and it took
[8:44] around 6 to 7 minutes I actually finish
[8:46] but now you can see project status and
[8:48] security issues are all resolved so I&#39;ll
[8:50] give you a very quick tour of superbase
[8:52] on what the features that you should
[8:54] care about are so if you go to table
[8:56] editor here this is where lovables is
[8:59] going to actually create and write the
[9:01] databases depending on the application
[9:02] you&#39;re looking to make so you&#39;re going
[9:04] to see this populated once lovable
[9:06] actually knows what you&#39;re trying to
[9:07] build when you go to Edge functions here
[9:10] this is where a lot of the functions
[9:11] that you&#39;ll need let&#39;s say if you want
[9:13] to integrate stripe or you want to do
[9:15] different functions that are outside the
[9:17] scope of normal backend this is where it
[9:19] would be hosted and if you go to Project
[9:22] settings and look at Edge functions here
[9:26] this is where certain secrets are going
[9:28] to be stored so when you set up your
[9:29] database for the first time which you
[9:31] don&#39;t have to do lovable will just know
[9:33] hey we need to create some form of
[9:34] database because you want to store XYZ
[9:37] information about the user or their
[9:39] preferences or whatever it&#39;s going to
[9:41] create some API keys for superbase here
[9:44] because it&#39;s going to be integrated with
[9:45] your infrastructure and then you can
[9:47] click on add new secret to enable things
[9:49] like openai or other llms to have their
[9:51] secrets actually embedded in the app
[9:53] itself beyond that if you are logging in
[9:55] and setting up an account for the first
[9:57] time you&#39;re going to want to go to
[9:59] authentication and providers and pick
[10:02] which providers you want to set up out
[10:03] of the box for me personally because I
[10:05] like to spin things up pretty quickly I
[10:07] just choose email and I remove this
[10:10] confirm email and secure email change to
[10:12] make things a lot easier otherwise when
[10:14] you create authentication in the app
[10:15] it&#39;ll have to confirm the email and what
[10:17] happens is the confirmation goes nowhere
[10:20] because you have to set up what&#39;s called
[10:21] a redirect URL where it comes to here
[10:24] this URL configuration so if you&#39;re just
[10:27] experimenting with this to see what&#39;s
[10:28] possible I would I just remove those
[10:30] features for now just to remove any
[10:31] headaches or friction from actually
[10:33] getting going so with that we can now
[10:35] use this database and we&#39;ll create our
[10:36] first mini demo just hooking up to
[10:38] superbase to see how that works so we&#39;ll
[10:40] go into lovable here and in here I will
[10:44] first click public to private if you
[10:47] start with a free account it will be
[10:50] public by default meaning if you go to
[10:52] featured or latest you will be able to
[10:55] access other people&#39;s projects there and
[10:57] look at their chat history if you did
[10:58] want to make sure that all your projects
[11:00] are private then you would want to
[11:01] upgrade to their $20 a month plan that
[11:03] allows you to do that and one thing to
[11:05] do is if you want to stick to the free
[11:07] just to try this out be very careful not
[11:09] to put API keys or anything publicly
[11:12] available that could hurt you or your
[11:14] wallet just because you can
[11:16] theoretically go into any of these
[11:18] featured apps right and go through their
[11:20] history and scroll up and see pretty
[11:22] much everything that happen in that
[11:23] conversation which is awesome if you
[11:25] want to be able to see some of the
[11:26] building blocks and examples of prompts
[11:28] that are more effective than others to
[11:30] build actual applications but not so
[11:32] much if you&#39;re putting publicly
[11:34] available information such as API keys
[11:37] or anything that can hurt your wallet
[11:39] that would be ideal so be very wary of
[11:40] how you enter certain API keys if you
[11:42] use public now if we go back up here we
[11:45] will say something very basic so let&#39;s
[11:48] create an app that allows me to enter my
[11:54] top five business
[11:57] schools create a design that is
[12:03] futuristic
[12:06] modern and has moving gradients in the
[12:11] background that are minimalistic now I&#39;m
[12:15] keeping this very basic just to be able
[12:17] to show the functionality so I&#39;m just
[12:18] going to click here on private we&#39;re
[12:21] going to send this and we&#39;ll wait for it
[12:23] to do his first actions
[12:52] and this took around 2 minutes but now
[12:54] you have a very basic user interface
[12:56] that lets you enter goals so I want to
[12:58] make more profit you can see the little
[13:00] gradient behind the scenes um let&#39;s do
[13:03] another one I want to hire many Allstars
[13:07] let&#39;s add that and I don&#39;t think save
[13:09] goals actually does anything because if
[13:11] we refresh the page because there&#39;s no
[13:13] database to store this information
[13:15] there&#39;s no what&#39;s called persistence so
[13:17] if I refresh this everything will go
[13:19] away because it&#39;s not tied to a user
[13:20] account so this is a good opportunity to
[13:22] show you how their native super base
[13:24] actually works so if you click on super
[13:26] base here and you go down for the first
[13:29] time you&#39;ll just need to authenticate
[13:30] into super base and then after you&#39;ll be
[13:32] able to connect to whichever database
[13:34] you wish we&#39;re going to use our actual
[13:37] project we put together here which is
[13:39] lovable demo I&#39;ll click on connect and
[13:42] then it pretty much enters an actual
[13:44] request that says please connect my
[13:45] super based project lovable demo so one
[13:48] thing you&#39;ll notice about lovable is
[13:49] even when you get errors it writes a
[13:52] prompt that you can see to actually send
[13:54] it to the app to try to resolve the
[13:55] issue so you&#39;ll see here it says I&#39;m now
[13:57] connecting to your superbase pro project
[13:59] yada yada yada it says it&#39;s properly
[14:02] authenticated it stores real data and
[14:05] there we go it tells you what kind of
[14:07] edge functions you can use and what you
[14:09] can do with that so email notifications
[14:11] payments Etc so now if we go into our
[14:15] lovable backend we still don&#39;t have a
[14:17] database because we haven&#39;t told it what
[14:18] to store so in this case I&#39;m going to
[14:20] say can we create a
[14:26] authentication with email and
[14:30] password that will allow
[14:33] us
[14:35] to log in
[14:38] and save our goals by account so again
[14:42] we&#39;re keeping things very basic here so
[14:44] as this is actually generating the first
[14:46] time I won&#39;t actually cut I&#39;m just going
[14:47] to show you even if you&#39;re not uh SQL
[14:50] Savvy and SQL stands for standard
[14:52] querying language which is a database
[14:55] language to actually create tables it is
[14:57] doing all the work on the front end here
[15:00] to create a table called business goals
[15:02] it came up with which Fields it should
[15:04] store so in this case it came up with ID
[15:06] which is some form of random ID that&#39;s
[15:08] assigned as a primary key that&#39;s
[15:10] basically the ability to create a very
[15:13] unique novel ID for a user that is
[15:16] different from user ID which once in a
[15:18] while can be um null meaning it&#39;s
[15:21] non-existent if the user hasn&#39;t actually
[15:22] authenticated yet and goal text is what
[15:25] you&#39;d actually save here once you add a
[15:27] goal and then created at would basically
[15:29] create a Tim stamp which is basically
[15:31] what time and what day was this goal
[15:33] created so one thing you&#39;ll notice is
[15:34] this thing called create policy and
[15:36] there&#39;s a lot loaded here that you
[15:38] shouldn&#39;t care about unless it becomes a
[15:40] problem later on the only time it
[15:42] becomes a problem is let&#39;s say you have
[15:43] different user accounts and let&#39;s say
[15:45] it&#39;s a matchmaking app of whatever use
[15:47] case you need to be able to see and
[15:50] remove security at an individual account
[15:52] level to be able to see all the values
[15:54] from all the accounts in order to do the
[15:55] matchmaking um in layman&#39;s terms if you
[15:58] know user a has four goals and user B
[16:02] has three goals because of the security
[16:04] the way it&#39;s set up by default user a
[16:06] can&#39;t see user be&#39;s goals but let&#39;s say
[16:08] we wanted to matchmake these business
[16:10] owners by their very similar goals we&#39;d
[16:12] have to remove this layer of security to
[16:14] enable that again you can remove that
[16:16] for now until it becomes a problem so
[16:17] one thing that lovable does is it tends
[16:19] to ask for permission a lot so in this
[16:21] case it tells you what the plan is it
[16:23] says after you approve the SQL commands
[16:26] again SQL is the language that you
[16:27] create right to databases it will do the
[16:30] following so it&#39;ll create a UI a user
[16:32] interface with email and password
[16:34] authentication it will set up superbase
[16:37] to create the actual table and then it
[16:39] will do some error handling meaning
[16:41] it&#39;ll set up some notifications to know
[16:43] um if the user hasn&#39;t signed up with a
[16:45] proper email or they haven&#39;t
[16:46] authenticated themselves it will have
[16:48] different roots to handle those
[16:49] scenarios so if we click on apply
[16:52] changes most of the time for something
[16:54] simple like this it&#39;ll say the migration
[16:55] has been applied successfully sometimes
[16:58] you&#39;ll run into scenario where it says
[16:59] it there&#39;s an error and it&#39;ll get this
[17:01] little notification on screen that&#39;ll
[17:02] say fix so most of the time I&#39;ll click
[17:05] fix two to three times and then I&#39;ll
[17:07] intervene myself if things are starting
[17:09] to get a bit hairy all right so now it
[17:10] has the UI with the email and password
[17:13] and you can notice the font Choice here
[17:15] is absolutely horrific so I&#39;m going to
[17:16] use this feature I alluded to before
[17:18] called select I&#39;m going to go into this
[17:20] box here until it hovers so you can see
[17:23] this is a section this is just the text
[17:25] and as you go down it&#39;ll tell you
[17:27] whether or not you&#39;re selecting
[17:28] something that is editable so I&#39;m going
[17:30] to click on this so now it knows I&#39;m
[17:32] referring to this part of the screen I&#39;m
[17:34] going to say the font is awful please
[17:38] make it something that goes with the
[17:41] background and ideally throw some design
[17:45] on the page with Emojis so let&#39;s see if
[17:49] that applies properly so now you&#39;ll see
[17:51] it&#39;s edited the core font here and one
[17:53] thing I couldn&#39;t select was this lime
[17:55] green font so let me screenshot this and
[17:58] use this as input and say change lime
[18:01] green to bold white font I can&#39;t see
[18:06] anything all right so we got our first
[18:07] error here it did change momentarily the
[18:11] font but then it said build unsuccessful
[18:13] so we have some error here I&#39;m going to
[18:15] act like I don&#39;t know what it is I&#39;m
[18:16] going to click on try to fix it and
[18:18] again sometimes this can be a loop that
[18:21] lasts two three times sometimes you have
[18:23] to step in one thing you can do is click
[18:25] on show error and see what the error is
[18:28] this might mean absolutely nothing to
[18:30] you but worst case you put this into
[18:31] something like perplexity and GPT and
[18:33] maybe you can nudge along what it should
[18:35] do to resolve it but typically for
[18:37] something like this it&#39;s pretty
[18:38] straightforward that it should be
[18:39] solvable pretty quickly so I ended up
[18:41] getting a few errors here you&#39;ll see
[18:42] here build unsuccessful build
[18:44] unsuccessful so it for some reason
[18:46] couldn&#39;t realize that I&#39;m talking about
[18:48] this specific email address so it
[18:50] remained green so I&#39;ll show you a little
[18:51] hack and I&#39;m happy this ER came up so
[18:53] what I&#39;ll do is I&#39;ll click on open
[18:56] preview to new tab and even if you&#39;re
[18:58] not Tech Savvy you&#39;ll see exactly what
[19:00] I&#39;m doing here so if you go on and this
[19:02] is on Google Chrome you have the
[19:04] equivalent of this in Firefox Safari Etc
[19:06] if you go to more tools and you go to
[19:09] developer tools you can click on this
[19:12] icon and by the way this works on any
[19:14] website so you can actually look at the
[19:15] element of any website if you want to
[19:17] emulate it as well so you can see here
[19:18] as I&#39;m going down I can see the name of
[19:21] certain elements so when I click on this
[19:23] it shows me some name so all I did is I
[19:25] copied this name and then clicked on
[19:27] this Arrow went back found this copy
[19:31] pasted it if you see here all I did is I
[19:33] need to change this color to bold white
[19:36] I just copy pasted what the element name
[19:39] is from here as well as the second one
[19:42] and then I just said make it white and
[19:43] as soon as I did that you&#39;ll see here it
[19:45] worked immediately so that part was
[19:48] alleviated there so now if we close this
[19:51] and we set up an account for the first
[19:52] time and we&#39;ll do this and let&#39;s make
[19:55] some password and sign up
[19:59] so in this case I just want to double
[20:00] check that we disabled authentication so
[20:03] if we go on authentication and then
[20:07] providers I think email went back to
[20:09] confirm email so let&#39;s take that off
[20:11] here and let&#39;s we can log in it&#39;ll even
[20:16] if we didn&#39;t confirm the email it will
[20:17] be able to log in given how it&#39;s
[20:18] structured so I&#39;ll just click on sign in
[20:22] let me try
[20:26] this okay so let&#39;s let&#39;s
[20:30] see um let&#39;s do
[20:35] this let&#39;s paste the error what&#39;s going
[20:39] on here so I ended up getting a few more
[20:42] issues here that popped up and I tried
[20:43] to click fix and what happened was
[20:46] because originally our super base for
[20:48] some reason it reset so if you go to the
[20:51] the section I said authentication and
[20:53] then providers you&#39;ll see if you go back
[20:55] to email these are all clicked on so it
[20:58] did need you to confirm your email and
[20:59] because the email was not confirmed it
[21:01] was having issues so if I disable these
[21:04] now and I refresh just to make sure this
[21:06] took
[21:06] effect let me just do this one thing
[21:09] that I forgot to do is after actually
[21:11] toggling these off you have to go and
[21:13] actually click save so that didn&#39;t help
[21:15] my case and just so I can start from
[21:17] scratch I went to here users and then
[21:21] the two users I made which is my prompt
[21:23] advisor email as well as the temp email
[21:25] I put together I deleted them from the
[21:26] database so they atically if I go in
[21:29] here now and I do Mark a prompt advisors
[21:32] and I create a password and I sign up
[21:35] right so I should be able to log in
[21:36] immediately because there&#39;s no
[21:37] confirming email and now if I add a goal
[21:40] and I say I want to make millions as a
[21:43] goal and I add that theoretically that
[21:46] should update our database in real time
[21:48] if it&#39;s synced up in the proper way so
[21:50] how you can check that is if you go back
[21:51] to table editor you&#39;ll see now lovables
[21:54] created through superbase a table called
[21:57] business goals and if if I refresh this
[22:00] you&#39;ll see that there&#39;s nothing here so
[22:02] what I&#39;ll do is I&#39;m going to ask it um
[22:06] so I was able to log
[22:09] in but it doesn&#39;t seem like my goals are
[22:14] being stored at the account level so
[22:17] you&#39;ll see here in the message you came
[22:18] up with it said looking at the RLS
[22:20] policies so just think of that as
[22:21] security policies I noticed that while
[22:23] we have yada yada yada basically there&#39;s
[22:25] no permission to write and read from
[22:26] there so it basically wrote this SQL
[22:29] code this database code and I&#39;m going to
[22:31] click on apply most of the time they&#39;ll
[22:33] say successfully so there we go so
[22:35] theoretically if I now have this View
[22:38] rerender and I add a goal it should add
[22:40] it to the actual database let&#39;s sign
[22:42] back in and then I&#39;m going to enter
[22:47] password and we have nothing logged in
[22:49] now right so let&#39;s do I want to make
[22:54] millions whoops let&#39;s do add goal and
[22:57] click on Save save goals okay goal saved
[23:01] so we have an error here so I want to
[23:03] see if the errors is associate to saving
[23:05] at all so it did save it so the error we
[23:08] got was for something unrelated so I&#39;m
[23:09] going to click on show logs here um I
[23:13] feel like it&#39;s just not communicating in
[23:15] the correct way but it did the right
[23:16] thing so I&#39;m just going to click on try
[23:18] to fix it I won&#39;t hold you hostage until
[23:21] this resolves and I&#39;ll show you what it
[23:22] looks like after so it looks like we&#39;re
[23:24] in the clear now so if I say another one
[23:26] I want to hire unicorn
[23:29] I do add goal I click on Save goals and
[23:32] I go back here I don&#39;t even have to
[23:33] refresh you can see it&#39;s actually sync
[23:35] towards here so this is working now and
[23:37] if we log out our test can be let&#39;s sign
[23:40] up with a temporary email so I&#39;m going
[23:42] to go to Temp hyphen mail.org I&#39;m going
[23:46] to create a new account okay I&#39;m going
[23:49] to create another password I&#39;m going to
[23:51] sign up and then let&#39;s just add a goal
[23:55] test goal and I click add this should
[23:58] save under a different user ID a
[24:00] different created ad and it should store
[24:02] separately so if I refresh here we
[24:05] should have oh one thing I forgot is to
[24:07] actually save the goal so that should be
[24:09] something I changed in the actual
[24:11] interface so for now let&#39;s click on this
[24:14] you can see here we got test goal for a
[24:16] different user ID a different unique ID
[24:18] for the actual goal itself so if we go
[24:21] back here let&#39;s now step this up just a
[24:23] tad and say okay now I want to be able
[24:29] to
[24:30] automatically save the goal
[24:33] anytime I enter it
[24:37] without
[24:39] having to basically click save goals to
[24:43] click save goals in order to write to
[24:48] superbase this will make the oops
[24:52] spelling mistakes here will make the
[24:54] user experience more seamless so it says
[24:58] there&#39;s an autosave functionality now
[25:00] which is looks weird it looks like it&#39;s
[25:02] infinitely saving things to the database
[25:04] so I&#39;m just curious what chaos is
[25:06] happening okay um so I&#39;m just going to
[25:09] take a screenshot here and then I&#39;m
[25:12] going to paste it here I&#39;m going to say
[25:14] we don&#39;t need this to autosave every
[25:19] moment like it is now just
[25:23] when we actually enter the core goal
[25:29] otherwise there&#39;s
[25:32] useless functionality Autos saving
[25:35] nothing all right so now it finished it
[25:37] didn&#39;t take more than just one little
[25:39] reminder and now it said something very
[25:41] important here so it said the business
[25:43] goals whatever file is getting very long
[25:45] so one thing lovable is interesting at
[25:47] doing is it looks at all the AI code
[25:49] that&#39;s been generated and once in a
[25:51] while it will tell you hey I think you
[25:52] should summarize this down cuz it&#39;s
[25:53] getting a bit too meaty there might be
[25:55] too much fat in your code so you can
[25:57] actually say
[25:59] sure refactor the code without
[26:03] disturbing any functionality and then
[26:05] one thing to check here is when we did
[26:07] add goal now if we do test goal three
[26:09] and we click on ADD goal right this will
[26:12] automatically save so if I refresh here
[26:14] this should say test goal 23 like you
[26:16] saw here so we&#39;re good on that front so
[26:19] I&#39;m just going to send this here to do
[26:20] that code refactoring which again is
[26:22] just summarizing and leaning down your
[26:24] code to be as Nimble as possible all
[26:25] right so now that it&#39;s done refactoring
[26:27] the code we can say let&#39;s now rework the
[26:32] underlying design to look more like
[26:37] Spotify design but instead
[26:41] of green and
[26:44] black It&#39;s a combination of white and
[26:49] the current Violet we have so I&#39;m just
[26:52] more so showing you how you can alter
[26:55] design by giving it a reference point so
[26:56] Spotify is very well known in terms of
[26:58] the actual design principle so if you
[27:00] send that we should be able to change it
[27:02] so with a few different iterations at
[27:04] first it gave me a poor attempt here
[27:05] where it wasn&#39;t the nicest it was on a
[27:07] blank page I basically said try again
[27:10] make it a bit more sleek and nicer then
[27:12] insisted on the white background versus
[27:14] the purple so then I said make the
[27:16] background purple and the core Parts
[27:17] white so vice versa of what you have and
[27:19] then we got something like this so we&#39;ll
[27:21] just settle with this for now I can see
[27:22] the font&#39;s a bit more Spotify esque um
[27:25] let&#39;s focus on integrating stripe which
[27:27] was a bit of a Frankenstein show using
[27:29] it in Bolt if you watch that last video
[27:31] I did a few weeks ago if not then we&#39;re
[27:34] going to go into stripe here and what
[27:37] you can do in lovable is say I want to
[27:40] integrate stripe so that anyone who
[27:45] wants to use this application has to pay
[27:51] $1 let&#39;s do1 199 a
[27:56] month so now what it should do is it&#39;s
[27:58] smart enough and I think they&#39;ve trained
[28:00] their back end to be able to tell you
[28:02] exactly what elements you need to set
[28:04] that up and what it&#39;s going to do if you
[28:06] remember at the very beginning of the
[28:07] video we now are going to take advantage
[28:08] of an edge function so a helper function
[28:11] to go and create some form of
[28:12] integration into stripe so here it tells
[28:14] you step by step you need a stripe
[28:16] account then you need a stripe account
[28:18] with a recurring price of $1.99 then you
[28:21] need your stripe API key so what I&#39;m
[28:23] going to do is I&#39;m just going to go into
[28:24] a test account of stripe so I&#39;ve logged
[28:27] into stripe and I&#39;ve gone on test mode
[28:29] which is good because we don&#39;t want to
[28:31] spend real money on this and you can
[28:33] simulate actual payments so if we go to
[28:35] payment links I&#39;m going to create a new
[28:38] one I&#39;m going to say um business goals
[28:43] and then I&#39;m going to say it&#39;s recurring
[28:45] and then it&#39;s $199 per month okay so
[28:49] we&#39;ll do add
[28:50] product and then we need a few things it
[28:53] told you you need a price ID so I&#39;ll
[28:56] show you where to get that when you
[28:57] create your product you can go and then
[29:00] click on the product itself and then you
[29:03] can go click on this number and then if
[29:06] you go down you&#39;ll see here a new price
[29:09] was created if I click on this you&#39;ll
[29:12] see here the price ID if I click on this
[29:15] one you&#39;ll see this ID at the top right
[29:18] this ID is what we need so I&#39;m going to
[29:20] take this and I&#39;m going to go into
[29:22] lovable and I&#39;m going to say here is the
[29:26] price ID
[29:29] okay and then what else do we need we
[29:31] have the stripe account we have this the
[29:33] API key I think is going to offer to
[29:36] embedd it itself so I&#39;m going to say ask
[29:39] me for my stripe API key so I can give
[29:45] it to you so this is an actual feature
[29:46] within lovable that it actually prompts
[29:48] you for API Keys instead of you just
[29:50] entering it in the chat uh I realized I
[29:53] spelled this wrong give it to you okay
[29:56] so let me just send this so so it should
[29:58] Now log this price ID as our products
[30:01] price ID it&#39;ll now come back with an
[30:04] actual request for the stripe API key
[30:06] while I won&#39;t show the actual ID where
[30:08] you have to go to retrieve it is you
[30:09] want to click on developers here and on
[30:11] here you want to click on API keys and
[30:13] then you&#39;ll see a section that says
[30:15] secret key you want to copy paste that
[30:17] and then input that into lovable so in
[30:19] this case I&#39;m going to enter my stripe
[30:21] key into this handy dandy button it gave
[30:24] us I&#39;ll click on submit all right so now
[30:26] we get a subscribe to gold tracker from
[30:28] the get-go which looks very much like a
[30:30] normal software as a service application
[30:32] if you click on subscribe now we get an
[30:34] error so it&#39;s something with the actual
[30:37] Edge function so I&#39;m going to let it
[30:38] figure that out on its own so I&#39;m going
[30:40] to click on try to fix so now we&#39;ll get
[30:42] this page again and if you click on
[30:44] subscribe now within this actual view it
[30:46] will just load forever so what you want
[30:48] to do is you want to click on this which
[30:51] is open preview to new tab you want to
[30:53] go here and then you&#39;ll get that view
[30:55] rendered again and then once you
[30:58] actually log in so let&#39;s do this let&#39;s
[31:01] log in right so now I have to pay going
[31:05] to click on subscribe now it says fail
[31:08] to start checkout process so I&#39;m just
[31:11] going to tell it so I opened it and let
[31:15] me screenshot it to make it
[31:17] easier and then paste this so This
[31:20] should lead to the stripe page that then
[31:23] I can pay and then it sends some more
[31:24] request back to the database saying hey
[31:26] Marcus paid so if if I say so I opened
[31:28] it and got this error when I clicked
[31:32] subscribe now um I think it has
[31:37] something to do with the edge function
[31:40] after two more tries I&#39;m still getting
[31:42] the same error and one thing that I&#39;m
[31:43] realizing is because I can&#39;t actually
[31:45] render this within the view itself this
[31:47] little mini view it doesn&#39;t really see
[31:49] the error so again if we go back to our
[31:51] old trick here if we open this in a new
[31:53] tab and if we go to the three dots here
[31:56] and go to more tools TOS developer tools
[32:00] and then we basically try this again
[32:02] let&#39;s click on subscribe now you get
[32:04] this failure you now at least have some
[32:06] traceability of the failure so what I&#39;ll
[32:08] do is I will just take this and I will
[32:13] screenshot it and I&#39;ll say here are the
[32:17] errors
[32:19] right it has the same
[32:23] error here is the main error and one
[32:28] thing here it&#39;s invited me to do now
[32:29] after running this again and showing it
[32:31] that error is it says create checkout
[32:33] logs so if I go to create checkout logs
[32:36] this is our Edge function for create
[32:37] checkout and you can see an error every
[32:40] single time so this is the full error
[32:43] message and if I copy this it says error
[32:47] combining currencies
[32:49] interesting um so if I go to this this
[32:54] is the core error should only be
[32:58] $199 USD per month shouldn&#39;t be an issue
[33:04] with the currencies so getting the error
[33:07] again this is what I&#39;m going to do and
[33:08] then this is the whole point of this
[33:09] tutorial I&#39;ll show you what do you do
[33:11] when things go wrong so I&#39;m going to go
[33:12] to history here and then I&#39;m going to go
[33:16] to right after we did the purple to
[33:19] White authentication thing sorry purple
[33:21] to White redesign of the app so let&#39;s go
[33:23] to that I&#39;m going to click restore and
[33:26] now we&#39;ve reverted to
[33:28] before chaos ensued and I&#39;m just going
[33:31] to go in here I&#39;m just going to delete
[33:32] some of these older subscriptions so let
[33:35] me deactivate this because I think maybe
[33:38] my test account is malfunctioning with
[33:41] all of these different uh actual payment
[33:44] links so let me just deactivate all of
[33:46] them and then we&#39;ll create one from
[33:48] scratch and just for Simplicity we&#39;ll
[33:50] make it Canadian dollars because I don&#39;t
[33:52] know if it really wants me to be
[33:53] Canadian so we&#39;ll create a new one we&#39;ll
[33:55] just call it uh add a new product
[33:58] goals I&#39;ll just make it recurring $1.
[34:01] 199 Canadian a month and I&#39;ll click add
[34:05] product and then I will just create this
[34:08] link and it&#39;ll do the same thing um I
[34:11] will just go to goals I&#39;ll go to the
[34:15] actual price I&#39;ll go to Price ID I&#39;ll
[34:19] click on this I&#39;ll take that link and
[34:22] I&#39;ll go back and I&#39;ll close this and
[34:24] I&#39;ll say Let&#39;s uh make it so that any
[34:27] anyone who wants to use the
[34:31] app has to pay in order to use it ask me
[34:37] for my stripe API
[34:42] key and here is the price ID okay we&#39;ll
[34:47] paste that so we&#39;ll redo that part and
[34:50] I&#39;ll go into my developers thing again
[34:52] and get an API key here we&#39;ll go to
[34:55] stripe secret key what add it and we&#39;ll
[34:58] see if this makes things a little bit
[35:00] easier so now when we take our second
[35:02] attempt here I&#39;m going to open this in a
[35:03] new tab we&#39;re going to get the Gold
[35:06] Tracker now when you log in you&#39;re going
[35:07] to see subscribe now which should take
[35:10] you to an actual account here and you
[35:12] should be able to subscribe so I&#39;m going
[35:14] to use the fake stripe credit card
[35:16] credit card test so then I will put this
[35:21] 424242 and let&#39;s just go into here to
[35:24] make sure we have the right CSV so let&#39;s
[35:27] do copy and then let&#39;s paste here let&#39;s
[35:31] make up some random dates some random
[35:34] numbers and then I&#39;ll just put test and
[35:38] then some postal code and we should be
[35:40] able to click subscribe here and then
[35:42] it&#39;ll quote unquote go through because
[35:44] it&#39;s a test function and once that test
[35:47] function actually functions we should be
[35:49] able to log in and actually use the app
[35:51] which you can see here so that&#39;s this
[35:52] part and I did want to show you one more
[35:53] use case before we sum it up so while
[35:55] everyone goes over how to build end to
[35:57] end applications using things like
[35:59] lovable or bolt or wind surf what people
[36:01] don&#39;t talk about is that you can build
[36:03] components with these services that lets
[36:06] you embed certain elements in your
[36:07] existing web pages so let&#39;s say you&#39;re a
[36:10] small business owner and you want to be
[36:11] able to create some form of calculator
[36:13] to help with lead magnets or lead
[36:15] engagement and let people calculate the
[36:17] value of whatever it is that&#39;s relevant
[36:19] for your business you can actually
[36:21] create this mini embedded app in lovable
[36:24] and then be able to use it as an element
[36:27] in your existing application so we&#39;re
[36:29] going to create a very basic calculator
[36:31] and I&#39;ll show you how we can quickly
[36:32] embed that and it&#39;ll give you some
[36:33] inspiration for what else you can use
[36:36] these text to web app applications for
[36:37] so let&#39;s say you have a cleaning
[36:39] business and you want to be able to
[36:40] generate a rough estimate for how much
[36:43] cleaning per week would cost for
[36:44] someone&#39;s house given the number of
[36:46] bedrooms the number of amenities Etc and
[36:49] they can do it self- serve so let&#39;s go
[36:52] here and let&#39;s say I want to create a
[36:56] very um
[36:58] engaging
[37:00] calculator for cleaning business for a
[37:03] cleaning business um it should
[37:08] take the number of
[37:11] bedrooms number of
[37:14] bathrooms uh square
[37:18] footage of the home um and be
[37:23] fairly simple for
[37:26] anyone to
[37:30] use and then when someone clicks submit
[37:35] it will then send all that information
[37:39] via lead form and realistically The Next
[37:43] Step here would be to create it via
[37:44] superbase like we just did and log that
[37:46] in but I won&#39;t prioritize that since we
[37:48] know how to do that I&#39;ll just worry
[37:49] about the form itself um I&#39;ll just say
[37:52] don&#39;t worry about making
[37:55] the calculator
[37:58] submission um usable or
[38:03] functional create the shell where you
[38:07] can enter things
[38:10] and select from
[38:13] dropdowns Etc so we&#39;ll just click on
[38:17] private here and then we&#39;ll click Send
[38:20] and then this is going to now send that
[38:22] request and ideally create that shell to
[38:24] show us exactly what that would look
[38:25] like all right and here&#39;s the first
[38:27] version of the draft of the calculator
[38:30] on the left hand side you have like we
[38:32] said the number of bedrooms bathrooms
[38:34] square footage type of service you&#39;re
[38:36] looking for to calculate the quote if
[38:39] you want a custom quote or something
[38:41] more detailed then you can put your name
[38:43] email and number again I don&#39;t care to
[38:45] make this functional because I want to
[38:46] show you how to create what&#39;s called an
[38:48] iframe so you can actually embed it on
[38:50] an existing website so what I&#39;m going to
[38:52] do is I&#39;m just going to publish this and
[38:54] I&#39;m going to click on private here I&#39;ll
[38:57] click on on deploy this will generate
[38:59] some link I don&#39;t care to make it a
[39:01] custom domain yet what you can do is you
[39:03] can go to a custom domain go to netfly
[39:06] buy an actual domain and attach it but
[39:07] we don&#39;t necessarily need to do that if
[39:09] we click on this now this is the new URL
[39:12] that we have so this is important
[39:15] because this will be needed in our
[39:17] iframe that we need to embed in a
[39:19] website so now we can actually go and
[39:21] ask can you create an iframe of this
[39:25] calculator
[39:27] I can embed on my website and what this
[39:32] should do is create some very specific
[39:35] code that you can copy paste into a
[39:37] portion of the web page to actually do
[39:40] the integration and here we get the code
[39:42] it says if frame at the beginning and
[39:44] end so I know it&#39;s the right type of
[39:45] information in SRC it has some
[39:48] placeholder for website that placeholder
[39:51] is this so we&#39;re going to need to put
[39:53] that so I&#39;m going to just make my life
[39:55] easier and say this this
[39:59] is my deployed
[40:02] URL can you tailor the ey frame just to
[40:07] be extra lazy here so it should now make
[40:10] another version of this that just has
[40:11] that embedded URL just created input it
[40:14] in that iframe object all right so what
[40:15] we&#39;re going to do is we&#39;re going to copy
[40:17] paste this and I see it added one
[40:19] component here that immediately is
[40:20] jumping out to me so in case you see it
[40:22] on your end make sure you remove it you
[40:24] want to remove this slash embed because
[40:25] it&#39;s pretty much meaningless we just
[40:27] just need the actual full URL of the app
[40:29] so if you put this in here which is
[40:31] html-only
[40:35] docomo this embed component and then
[40:39] once you do that it should be able to
[40:40] actually render and you can see here on
[40:42] the left hand side you can see the
[40:44] actual screen or if frame that we
[40:46] created with that core calculator where
[40:48] you can actually click and interact with
[40:49] it so let&#39;s say we actually made a web
[40:52] page from scratch so let&#39;s go to chat
[40:54] gbt I&#39;m going to use my Pro here I&#39;m
[40:57] going to say create a beautiful um HTML
[41:01] CSS for uh a web page for a cleaning
[41:07] business you don&#39;t need to do this on
[41:09] your end this is purely just to show you
[41:11] how this would work assuming you had the
[41:12] website so it finished actually creating
[41:14] the website and if we copy paste this
[41:16] into the HTML online you can see on the
[41:17] left hand side here you have some
[41:19] formulaic cleaning page okay so I can go
[41:23] back with some quick feedback to chat
[41:26] GPT I&#39;ll be like hey um I don&#39;t like
[41:31] this that&#39;s all good some picture here
[41:34] is not rendering we don&#39;t need that um
[41:38] I&#39;ll say please make the landing more
[41:43] minimalistic and remove the non-existing
[41:47] image here and I&#39;ll say please provide
[41:51] me with
[41:54] downloadable files to see this local all
[41:57] right so now I created an HTML file that
[41:59] we can copy paste as well as a CSS file
[42:03] if you don&#39;t know what a CSS file is
[42:05] it&#39;s pretty much responsible for all the
[42:07] styling of a particular web page so
[42:09] think of icons colors fonts Etc so we
[42:12] can copy paste both of these into two
[42:15] separate files so that&#39;s what I did um I
[42:18] created a new folder called uh web page
[42:21] and then I called one index.html and the
[42:24] other one like it said uh styles. SS
[42:28] it&#39;s important you name them these
[42:29] specific names because they reference
[42:31] each other so if you name this Styles 2
[42:35] without updating certain components of
[42:36] the HTML to refer to Styles 2 then
[42:40] they&#39;ll not be able to talk to each
[42:41] other and then you&#39;ll have just a one
[42:43] page full of links and hyperlinks that
[42:45] looks pretty ugly so what I did next is
[42:47] now that I have them both in one folder
[42:50] I use this app called brackets it&#39;s free
[42:52] to use it basically lets you basically
[42:54] render things like HTML or css on your
[42:57] local desktop so if I click on this bad
[43:00] boy you&#39;ll see the actual web page as we
[43:03] saw it before now it looks a little bit
[43:05] more minimalistic and what we want to do
[43:07] now is go back and the whole point of
[43:10] this is to take this and then I want to
[43:13] ask it where do I put this iframe to
[43:17] embed it in the middle center of my web
[43:23] page and then we&#39;ll put this here and
[43:25] I&#39;ll just remove the embed like like we
[43:27] did before and then it should give me
[43:29] some updated HTML not CSS necessarily to
[43:33] be able to make sure that embed actually
[43:35] appears on that web page all right so
[43:36] initially chat gbt gave us small
[43:38] Snippets of code where it said hey take
[43:40] this and put this wherever you want
[43:42] let&#39;s say we don&#39;t want to deal with
[43:43] that headache I just asked it to Output
[43:45] the entire HTML and CSS file so I can
[43:48] just copy paste so it gave us these
[43:50] again I just copied each one went into
[43:53] brackets and now I just copied and then
[43:55] pasted same thing with the HTML
[43:57] I saved and then once I click Refresh on
[44:00] the web page itself you can see now that
[44:02] we have our normal web page and we have
[44:05] this embed from lovable you can see here
[44:07] we remove that and theoretically you can
[44:10] make this into one page you could extend
[44:12] it you could play around with how it
[44:13] appears on the web page but the bottom
[44:15] line is now you have a smart app that
[44:17] you can even integrate gbt 40 or gb40
[44:20] mini if you want to add some natural
[44:22] language components that you can embed
[44:24] on your existing website so the whole
[44:25] point is just to show you you don&#39;t have
[44:27] to necessarily build something end to
[44:28] end if you don&#39;t want to if you already
[44:30] have something if you have an existing
[44:32] web application you have an existing
[44:34] website you can also use lovable to
[44:36] create components that make your
[44:38] services that much more helpful
[44:39] especially if you want 2025 to be a year
[44:41] of more leads more interest and whatever
[44:43] you offer this is a good way to actually
[44:45] get around that again without having to
[44:47] hire a web developer necessarily to do
[44:49] the thing for you and while I can keep
[44:51] building tons of different use cases on
[44:52] lovable what&#39;ll give you in the meantime
[44:54] are two different things to help you
[44:56] Kickstart using it or if you have
[44:58] already started using it and you&#39;ve been
[44:59] comparing it against bolt this will help
[45:01] you at least understand the nuances so a
[45:04] lot of the things that I mentioned today
[45:05] such as super Bas stripe um how this
[45:08] works compared to other Tex web app
[45:11] applications I have this full guide for
[45:13] you that will be downloadable in the
[45:15] gumroad link in description below and as
[45:17] usual in Mark fashion I put together a
[45:19] GPT to help you as a co-pilot so like I
[45:22] said before there are some nuances in
[45:24] prompting lovable compared to other text
[45:26] to web Builders so the idea here is that
[45:29] similar to my bolt. new GPT I put
[45:32] together more than a month ago you can
[45:33] go on frame my project and you can say
[45:35] something like I want to build a web
[45:40] application that takes people&#39;s goals in
[45:45] their
[45:46] business and create a full road
[45:50] map
[45:52] who for them right and then this will
[45:56] try to create an application for you
[45:58] like the actual what the look and feel
[46:01] design it thinks is a smart idea any
[46:03] features you might want to consider and
[46:05] if you want to ask it hey can you create
[46:08] a succinct prompt for me I can enter
[46:12] into
[46:13] lovable then it&#39;ll do that as you&#39;d
[46:16] expect so there you go create a web
[46:17] application that generates business
[46:19] schoal road maps and it goes through the
[46:21] different features and then you can
[46:23] actually ask it questions like should I
[46:26] integrate super base at the
[46:30] start or
[46:32] later and it should have some logic from
[46:35] what I fed it so it&#39;s highly recommended
[46:37] to integrate superbase at the start of
[46:39] your project here&#39;s why and goes through
[46:41] some of the benefits and even gives you
[46:43] some boiler plate code in case lovable
[46:46] hallucinates for whatever reason but
[46:47] this should be really helpful for you to
[46:49] get started or imilate what you already
[46:51] done in terms of your prompting capacity
[46:53] and if you wish to take apart my GPT and
[46:56] customize it for what you like to build
[46:58] on level you can just say what are your
[47:01] custom instructions let&#39;s open a new
[47:03] chat here and you click on oops new chat
[47:07] and then I&#39;ll just do this and say
[47:10] output in a code Block in markdown you
[47:15] can see all of my underlying
[47:16] instructions you can edit them create
[47:18] your own custom GPT of your choice
[47:20] whatever makes it easier for you try to
[47:22] load it as much as possible but maybe
[47:24] the examples you want to tailor to your
[47:25] specific use cases feel free to do that
[47:27] it&#39;s all yours it doesn&#39;t hurt me
[47:29] whatsoever so enjoy if you found this
[47:31] video helpful let me know down in the
[47:32] comments below I know it takes a bit of
[47:34] trial and error with these errors but
[47:36] once you get past them you can now build
[47:38] things that otherwise you would have had
[47:40] to Outsource to a full stack developer
[47:42] and you can really prove a concept or a
[47:44] prototype out pretty quickly and even
[47:46] collect payment using lovable. deev I&#39;ll
[47:49] see you all next time
