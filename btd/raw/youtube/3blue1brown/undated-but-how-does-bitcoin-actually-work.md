---
title: "But how does bitcoin actually work?"
creator: "3blue1brown"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4"
video_id: "bBC-nXj3Ng4"
duration: "25:16"
transcript_method: "youtube-captions"
segment_count: 384
char_count: 24636
status: ingested
topics: []
meta_patterns: []
---

# But how does bitcoin actually work?

**Creator**: 3blue1brown | **Duration**: 25:16
**URL**: https://www.youtube.com/watch?v=bBC-nXj3Ng4
**Transcript**: 384 segments, 24636 chars

## Transcript

What does it mean to have a Bitcoin? Many people have heard of Bitcoin, that it's a fully digital currency with no government to issue it, that no banks need to manage accounts and verify transactions, and that no one really knows who invented it. And yet many people don't know the answer to this question, at least not in full. To get there, and to make sure that the technical details underlying the answer actually feel motivated, we're going to walk through, step by step, how you might have invented your own version of Bitcoin. We'll start with you keeping track of payments with your friends using a communal ledger, and then as you start to trust your friends and the world around you less and less, and if you're clever enough to bring in a few ideas from cryptography to help circumvent the need for trust, what you end up with is what's called a cryptocurrency. Bitcoin is just the first implemented example of a cryptocurrency, and now there are thousands more on exchanges with traditional currencies. Walking the path of inventing your own can help to set the foundations for understanding some of the more recent players in the game, and recognizing when and why there's room for different design choices. In fact, one of the reasons I chose this topic is that in the last year there's been a huge amount of attention, investment, and hype directed at these currencies. I'm not going to comment or speculate on the current or future exchange rates, but I think we'd all agree that anyone looking to buy a cryptocurrency should really know what it is. And I don't just mean in terms of analogies with vague connections to gold mining, I mean an actual direct description of what the computers are doing when we send, receive, and create cryptocurrencies. One thing worth stressing is that even though you and I are going to dig into the details here, and that takes meaningful time, you don't actually need to know those details if you just want to use the cryptocurrency, just like you don't need to know the details of what happens under the hood when you swipe a credit card. Like any digital payment, there's lots of user-friendly applications that let you just send and receive the currencies without thinking about what's going on. The difference is that the backbone underlying this is not a bank that verifies transactions, instead it's a clever system of decentralized trustless verification based on some of the math born in cryptography. But to start I want you to actually set aside the thought of cryptocurrencies and all that just for a few minutes. We're going to begin the story with something more down to earth, ledgers and digital signatures. If you and your friends exchange money pretty frequently, paying your share of the dinner bill and such, it can be inconvenient to exchange cash all the time. So you might keep a communal ledger that records all the payments you intend to make at some point in the future. Alice pays Bob $20, Bob pays Charlie $40, things like that. This ledger is going to be something public and accessible to everyone, like a website where anyone can go and add new lines. And let's say at the end of every month you all get together, look at the list of transactions, and settle up. If you spent more than you received, you put that money in the pot, and if you received more than you spent, you take that money out. So the protocol for being part of this very simple system might look like this. Anyone can add lines to the ledger, and at the end of every month you all get together and settle up. Now one problem with a public ledger like this is that anyone can add a line. So what's to prevent Bob from going and writing Alice pays Bob $100 without Alice approving? How are we supposed to trust that all of these transactions are what the sender meant them to be? Well this is where the first bit of cryptography comes in, digital signatures. Like handwritten signatures, the idea here is that Alice should be able to add something next to that transaction that proves that she has seen it and that she's approved of it, and it should be infeasible for anyone else to forge that signature. At first, it might seem like a digital signature shouldn't even be possible. I mean, whatever data makes up that signature can just be read and copied by a computer. So how do you prevent forgeries? Well the way this works is that everyone generates what's called a public key-private key pair, each of which looks like some string of bits. The private key is sometimes also called a secret key, so we can abbreviate it as SK while abbreviating the public key as PK. As the name suggests, this secret key is something you want to keep to yourself. In the real world, your handwritten signature looks the same no matter what document you're signing. But a digital signature is actually much stronger, because it changes for different messages. It looks like some string of 1s and 0s, commonly something like 256 bits, and altering the message even slightly completely changes what the signature on that message should look like. Speaking a little more formally, producing a signature involves a function that depends both on the message itself and on your private key. The private key ensures that only you can produce that signature, and the fact that it depends on the message means that no one can just copy one of your signatures and forge it on another message. Hand-in-hand with this is a second function used to verify that a signature is valid, and this is where the public key comes into play. All it does is output true or false to indicate if this was a signature produced by the private key associated with the public key you're using for verification. I won't go into the details of how exactly both these functions work, but the idea is that it should be completely infeasible to find a valid signature if you don't know the secret key. Specifically, there's no strategy better than just guessing and checking random signatures, which you can check using the public key that everyone knows. Now think about how many signatures there are with a length of 256 bits. That's 2 to the power of 256! This is a stupidly large number. To call it astronomically large would be giving way too much credit to astronomy. In fact, I made a supplemental video devoted just to illustrating what a huge number this is. Right here, let's just say that when you verify that a signature against a given message is valid, you can feel extremely confident that the only way someone could have produced it is if they knew the secret key associated with the public key you used for verification. Making sure people sign transactions on the ledger is pretty good, but there's one slight loophole. If Alice signs a transaction like Alice pays Bob $100, even though Bob can't forge Alice's signature on a new message, he could just copy that same line as many times as he wants. I mean, that message-signature combination remains valid. To get around this, we make it so that when you sign a transaction, the message has to include some sort of unique ID associated with that transaction. That way, if Alice pays Bob $100 multiple times, each one of those lines on the ledger requires a completely new signature. Alright, great. Digital signatures remove a huge aspect of trust in this initial protocol. But even still, if you were to really do this, you would be relying on an honor system of sorts. Namely, you're trusting that everyone will actually follow through and settle up in cash at the end of each month. What if, for example, Charlie racks up thousands of dollars in debt and just refuses to show up? The only real reason to revert back to cash to settle up is if some people, I'm looking at you Charlie, owe a lot of money. So maybe you have the clever idea that you never actually have to settle up in cash as long as you have some way to prevent people from spending too much more than they take in. Maybe you start by having everyone pay $100 into the pot, and then have the first few lines of the ledger read Alice gets $100, Bob gets $100, Charlie gets $100, etc. Now, just don't accept any transactions where someone is spending more than they already have on that ledger. For example, if the first two transactions are Charlie pays Alice $50 and Charlie pays Bob $50, if he would have tried to add Charlie pays you $20, that would be invalid, as invalid as if he had never signed it. Notice, this means verifying a transaction requires knowing the full history of transactions up to that point. This is also going to be true in cryptocurrencies, though there is a little room for optimization. What's interesting here is that this step removes the connection between the ledger and actual physical US dollars. In theory, if everyone in the world was using this ledger, you could live your whole life just sending and receiving money on this ledger without ever having to convert to real US dollars. In fact, to emphasize this point, let's start referring to the quantities on the ledger as ledger dollars, or LD for short. You are of course free to exchange ledger dollars for real US dollars. For example, maybe Alice gives Bob a $10 bill in the real world in exchange for him adding and signing the transaction $10 Bob pays Alice $10 to this communal ledger. But exchanges like that are not guaranteed by the protocol. It's now more analogous to how you might exchange dollars for Euros or any other currency on the open market. It's just its own independent thing. This is the first important thing to understand about Bitcoin, or any other cryptocurrency. What it is, is a ledger. The history of transactions is the currency. Of course, with Bitcoin, money doesn't enter the ledger with people buying in using cash. I'll get to how new money enters the ledger in just a few minutes. But before that, there's actually an even more significant difference between our current system of ledger dollars and how cryptocurrencies work. So far, I've said that this ledger is in some public place, like a website where anyone can add new lines. But that would require trusting a central location, namely, who hosts the website, who controls the rules of adding new lines. To remove that bit of trust, we'll have everybody keep their own copy of the ledger. Then when you want to make a transaction, like Alice pays Bob 100 Ledger Dollars, what you do is broadcast that out into the world for people to hear and record on their own private ledgers. But unless you do something more, this system is absurdly bad. How could you get everyone to agree on what the right ledger is? When Bob receives a transaction, like Alice pays Bob 10 Ledger Dollars, how can he be sure that everyone else received and believes that same transaction? That he'll be able to later on go to Charlie and use those same 10 Ledger Dollars to make a transaction? Really, imagine yourself just listening to transactions being broadcast. How can you be sure that everyone else is recording the same transactions and in the same order? This is really the heart of the issue. This is an interesting puzzle. Can you come up with a protocol for how to accept or reject transactions, and in what order, so that you can feel confident that anyone else in the world who's following that same protocol has a personal ledger that looks the same as yours? This is the problem addressed in the original Bitcoin paper. At a high level, the solution that Bitcoin offers is to trust whichever ledger has the most computational work put into it. I'll take a moment to explain exactly what that means. It involves this thing called a cryptographic hash function. The general idea that we'll build to is that if you use computational work as a basis for what to trust, you can make it so that fraudulent transactions and conflicting ledgers would require an infeasible amount of computation to bring about. Again, I'll remind you that this is getting well into the weeds beyond what anyone would need to know just to use a currency like this. But it's a really cool idea, and if you understand it, you understand the heart of Bitcoin and other cryptocurrencies. So first things first, what's a hash function? The inputs for one of these functions can be any kind of message or file, it really doesn't matter. And the output is a string of bits with some kind of fixed length, like 256 bits. This output is called the hash or digest of the message, and the intent is that it looks random. It's not random, it always gives the same output for a given input. But the idea is that if you slightly change the input, maybe editing just one of the characters, the resulting hash changes completely. In fact, for the hash function I'm showing here, called SHA256, the way the output changes as you slightly change that input is entirely unpredictable. You see, this is not just any hash function, it's a cryptographic hash function. That means it's infeasible to compute in the reverse direction. If I show you some string of 1s and 0s, and ask you to find an input so that the SHA256 hash of that input gives this exact string of bits, you will have no better method than to just guess and check. And again, if you want to feel for how much computation would be needed to go through two to the 256 guesses, just take a look at the supplement video. I actually had way too much fun writing that thing. You might think that if you just really dig into the details of how exactly this function works, you could reverse engineer the appropriate input without having to guess and check. But no one has ever figured out a way to do that. Interestingly, there's no cold hard rigorous proof that it's hard to compute in the reverse direction. And yet, a huge amount of modern security depends on cryptographic hash functions and the idea that they have this property. If you were to look at what algorithms underlie the secure connection that your browser is making with YouTube right now, or that it makes with your bank, you'll likely see the name SHA256 show up in there. For right now, our focus will be on how such a function can prove that a particular list of transactions is associated with a large amount of computational effort. Imagine someone shows you a list of transactions, and they say, hey, I found a special number so that when you put that number at the end of this list of transactions, and apply SHA256 to the entire thing, the first 30 bits of that output are all zeros. How hard do you think it was for them to find that number? Well, for a random message, the probability that a hash happens to start with 30 successive zeros is 1 in 2 to the 30, which is about 1 in a billion. And because SHA256 is a cryptographic hash function, the only way to find a special number like that is just guessing and checking. So this person almost certainly had to go through about a billion different numbers before finding this special one. And once you know that number, it's really quick to verify, you just run the hash and see that there are 30 zeros. So in other words, you can verify that they went through a large amount of work, but without having to go through that same effort yourself. This is called a proof of work. And importantly, all of this work is intrinsically tied to the list of transactions. If you change one of those transactions, even slightly, it would completely change the hash. So you'd have to go through another billion guesses to find a new proof of work, a new number that makes it so that the hash of the altered list together with this new number starts with 30 zeros. So now think back to our distributed ledger situation. Everyone is there broadcasting transactions and we want a way for them to agree on what the correct ledger is. As I mentioned, the idea behind the original Bitcoin paper is to have everyone trust whichever ledger has the most work put into it. The way this works is to first organize a given ledger into blocks, where each block consists of a list of transactions together with a proof of work. That is, a special number so that the hash of the whole block starts with a bunch of zeros. For the moment, let's say it has to start with 60 zeros, but later we'll return back to a more systematic way you might want to choose that number. In the same way that a transaction is only considered valid when it's signed by the sender, a block is only considered valid if it has a proof of work. Also, to make sure there's a standard order to these blocks, we'll make it so that a block has to contain the hash of the previous block at its header. That way, if you were to go back and change any one of the blocks, or to swap the order of two blocks, it would change the block that comes after it, which changes that block's hash, which changes the one that comes after it, and so on. That would require redoing all of the work, finding a new special number for each of these blocks that makes their hashes start with 60 zeros. Because blocks are chained together like this, instead of calling it a ledger, it's common to call it a blockchain. As part of our updated protocol, we'll now allow anyone in the world to be a block creator. What that means is that they're going to listen for transactions being broadcast, collect them into some block, and then do a whole bunch of work to find a special number that makes the hash of that block start with 60 zeros. Once they find it, they broadcast out the block they found. To reward a block creator for all this work, when she puts together a block, we'll allow her to include a very special transaction at the top of it, in which she gets, say, 10 ledger dollars out of thin air. This is called the block reward, and it's an exception to our usual rules about whether or not to accept transactions. It doesn't come from anyone, so it doesn't have to be signed. It also means that the total number of ledger dollars in our economy increases with each new block. Creating blocks is often called mining, since it requires doing a lot of work, and it introduces new bits of currency into the economy. But when you hear or read about miners, keep in mind that what they're really doing is listening for transactions, creating blocks, broadcasting those blocks, and getting rewarded with new money for doing so. From the miners' perspective, each block is like a miniature lottery, where everyone is guessing numbers as fast as they can, until one lucky individual finds a special number that makes the hash of the block start with many zeros, and they get the reward. For anyone else who just wants to use this system to make payments, instead of listening for transactions, they all start listening just for blocks being broadcast by miners, and updating their own personal copies of the blockchain. Now the key addition to our protocol is that if you hear two distinct blockchains with conflicting transaction histories, you defer to the longest one, the one with the most work put into it. If there's a tie, just wait until you hear an additional block that makes one of them longer. So even though there's no central authority, and everyone is maintaining their own copy of the blockchain, if everyone agrees to give preference to whichever blockchain has the most work put into it, we have a way to arrive at decentralized consensus. To see why this makes for a trustworthy system, and to understand at what point you should trust that a payment is legit, it's actually really helpful to walk through exactly what it would take to fool someone using this system. Maybe Alice is trying to fool Bob with a fraudulent block, namely she tries to send him one that includes her paying him 100 Ledger dollars, but without broadcasting that block to the rest of the network, that way everyone else still thinks she has those 100 Ledger dollars. To do this, she would have to find a valid proof of work before all the other miners, each working on their own block. And that could definitely happen, maybe Alice just happens to win this miniature lottery before everyone else. But Bob is still going to be hearing the broadcasts made by other miners, so to keep him believing this fraudulent block, Alice would have to do all the work herself to keep adding blocks on this special fork in Bob's blockchain that's different from what he's hearing from the rest of the miners. Remember, as per the protocol, Bob always trusts the longest chain he knows about. Alice might be able to keep this up for a few blocks if just by chance she finds blocks more quickly than the rest of the miners on the network all combined. But unless she has close to 50% of the computing resources among all of the miners, the probability becomes overwhelming that the blockchain that all the other miners are working on grows faster than the single fraudulent blockchain Alice is feeding to Bob. So after enough time, Bob will just reject what he's hearing from Alice in favor of the longer chain that everyone else is working on. Notice, that means you shouldn't necessarily trust a new block you hear immediately. Instead, you should wait for several new blocks to be added on top of it. If you still haven't heard of any longer blockchains, you can trust that this block is part of the same chain that everyone else is using. And with that, we've hit all the main ideas. This distributed ledger system based on a proof of work is more or less how the Bitcoin protocol works, and how many other cryptocurrencies work. There's just a few details to clear up. Earlier I said that the proof of work might be to find a special number so that the hash of the block starts with 60 zeros. Well, the way the actual Bitcoin protocol works is to periodically change that number of zeros so that it should take, on average, 10 minutes to find a new block. So as there are more and more miners added to the network, the challenge gets harder and harder in such a way that this miniature lottery only has about one winner every 10 minutes. Many newer cryptocurrencies have much shorter block times than that. And all of the money in Bitcoin ultimately comes from some block reward. In the beginning, these rewards were 50 Bitcoin per block. There's actually a great website you can go to called Block Explorer that makes it easy to look through the Bitcoin blockchain. And if you look at the very first few blocks on the chain, they contain no transactions other than that 50 Bitcoin reward to the miner. But every 210,000 blocks, which is about every 4 years, that reward gets cut in half. So right now, the reward is 12.5 Bitcoin per block. And because this reward decreases geometrically over time, it means there will never be more than 21 million Bitcoin in existence. However, this doesn't mean miners will stop earning money. In addition to the block reward, miners can also pick up transaction fees. The way this works is that whenever you make a payment, you can purely optionally include a transaction fee with it that will go to the miner of whichever block includes that payment. The reason you might do that is to incentivize miners to actually include the transaction you broadcast into the next block. You see, in Bitcoin, each block is limited to about 2400 transactions, which many critics argue is unnecessarily restrictive. For comparison, Visa processes an average of about 1700 transactions per second, and they're capable of handling more than 24,000 per second. This comparatively slow processing on Bitcoin makes for higher transaction fees, since that's what determines which transactions miners choose to include in a new block. All of this is far from a comprehensive coverage of cryptocurrencies. There are still many nuances and alternate design choices that I haven't even touched. But my hope is that this can provide a stable WaitButWhy-style tree-trunk of understanding for anyone looking to add a few more branches with further reading. Like I said at the start, one of the motives behind this is that a lot of money has started flowing towards cryptocurrencies, and even though I don't want to make any claims about whether that's a good or bad investment, I really do think it's healthy for people getting into the game to at least know the fundamentals of the technology. As always, my sincerest thanks to those of you making this channel possible on Patreon. I understand that not everyone is in a position to contribute, but if you're still interested in helping out, one of the best ways to do that is simply to share videos that you think might be interesting or helpful to others. I know you know that, but it really does help.

## Timed Segments

[0:03] What does it mean to have a Bitcoin?
[0:07] Many people have heard of Bitcoin, that it&#39;s a fully digital currency
[0:11] with no government to issue it, that no banks need to manage accounts
[0:15] and verify transactions, and that no one really knows who invented it.
[0:19] And yet many people don&#39;t know the answer to this question, at least not in full.
[0:24] To get there, and to make sure that the technical details underlying
[0:27] the answer actually feel motivated, we&#39;re going to walk through,
[0:31] step by step, how you might have invented your own version of Bitcoin.
[0:36] We&#39;ll start with you keeping track of payments with your friends using a communal ledger,
[0:40] and then as you start to trust your friends and the world around you less and less,
[0:44] and if you&#39;re clever enough to bring in a few ideas from cryptography to help circumvent
[0:48] the need for trust, what you end up with is what&#39;s called a cryptocurrency.
[0:53] Bitcoin is just the first implemented example of a cryptocurrency,
[0:57] and now there are thousands more on exchanges with traditional currencies.
[1:03] Walking the path of inventing your own can help to set the foundations
[1:06] for understanding some of the more recent players in the game,
[1:09] and recognizing when and why there&#39;s room for different design choices.
[1:14] In fact, one of the reasons I chose this topic is that in the last year there&#39;s
[1:18] been a huge amount of attention, investment, and hype directed at these currencies.
[1:24] I&#39;m not going to comment or speculate on the current or future exchange rates,
[1:28] but I think we&#39;d all agree that anyone looking to buy a cryptocurrency should really
[1:32] know what it is.
[1:33] And I don&#39;t just mean in terms of analogies with vague connections to gold mining,
[1:38] I mean an actual direct description of what the computers are doing when we send,
[1:43] receive, and create cryptocurrencies.
[1:46] One thing worth stressing is that even though you and I are going to dig into the
[1:50] details here, and that takes meaningful time,
[1:52] you don&#39;t actually need to know those details if you just want to use the
[1:56] cryptocurrency, just like you don&#39;t need to know the details of what happens
[2:00] under the hood when you swipe a credit card.
[2:03] Like any digital payment, there&#39;s lots of user-friendly applications that let
[2:07] you just send and receive the currencies without thinking about what&#39;s going on.
[2:11] The difference is that the backbone underlying this is not a bank that
[2:15] verifies transactions, instead it&#39;s a clever system of decentralized
[2:20] trustless verification based on some of the math born in cryptography.
[2:25] But to start I want you to actually set aside the thought
[2:28] of cryptocurrencies and all that just for a few minutes.
[2:31] We&#39;re going to begin the story with something more down to earth,
[2:33] ledgers and digital signatures.
[2:36] If you and your friends exchange money pretty frequently,
[2:39] paying your share of the dinner bill and such,
[2:41] it can be inconvenient to exchange cash all the time.
[2:44] So you might keep a communal ledger that records all the
[2:47] payments you intend to make at some point in the future.
[2:50] Alice pays Bob $20, Bob pays Charlie $40, things like that.
[2:55] This ledger is going to be something public and accessible to everyone,
[2:59] like a website where anyone can go and add new lines.
[3:02] And let&#39;s say at the end of every month you all get together,
[3:05] look at the list of transactions, and settle up.
[3:08] If you spent more than you received, you put that money in the pot,
[3:11] and if you received more than you spent, you take that money out.
[3:15] So the protocol for being part of this very simple system might look like this.
[3:20] Anyone can add lines to the ledger, and at the end
[3:22] of every month you all get together and settle up.
[3:26] Now one problem with a public ledger like this is that anyone can add a line.
[3:31] So what&#39;s to prevent Bob from going and writing
[3:34] Alice pays Bob $100 without Alice approving?
[3:37] How are we supposed to trust that all of these
[3:40] transactions are what the sender meant them to be?
[3:44] Well this is where the first bit of cryptography comes in, digital signatures.
[3:49] Like handwritten signatures, the idea here is that Alice should be able to add
[3:53] something next to that transaction that proves that she has seen it and that she&#39;s
[3:58] approved of it, and it should be infeasible for anyone else to forge that signature.
[4:04] At first, it might seem like a digital signature shouldn&#39;t even be possible.
[4:09] I mean, whatever data makes up that signature can just be read and copied by a computer.
[4:14] So how do you prevent forgeries?
[4:17] Well the way this works is that everyone generates what&#39;s called a public
[4:20] key-private key pair, each of which looks like some string of bits.
[4:24] The private key is sometimes also called a secret key,
[4:27] so we can abbreviate it as SK while abbreviating the public key as PK.
[4:32] As the name suggests, this secret key is something you want to keep to yourself.
[4:37] In the real world, your handwritten signature looks
[4:39] the same no matter what document you&#39;re signing.
[4:42] But a digital signature is actually much stronger,
[4:44] because it changes for different messages.
[4:47] It looks like some string of 1s and 0s, commonly something like 256 bits,
[4:52] and altering the message even slightly completely changes what
[4:56] the signature on that message should look like.
[5:00] Speaking a little more formally, producing a signature involves a
[5:04] function that depends both on the message itself and on your private key.
[5:09] The private key ensures that only you can produce that signature,
[5:12] and the fact that it depends on the message means that no one can
[5:16] just copy one of your signatures and forge it on another message.
[5:21] Hand-in-hand with this is a second function used to verify that a signature is valid,
[5:25] and this is where the public key comes into play.
[5:29] All it does is output true or false to indicate if this was a signature produced
[5:33] by the private key associated with the public key you&#39;re using for verification.
[5:38] I won&#39;t go into the details of how exactly both these functions work,
[5:42] but the idea is that it should be completely infeasible to
[5:45] find a valid signature if you don&#39;t know the secret key.
[5:50] Specifically, there&#39;s no strategy better than just guessing and checking random
[5:54] signatures, which you can check using the public key that everyone knows.
[5:58] Now think about how many signatures there are with a length of 256 bits.
[6:03] That&#39;s 2 to the power of 256!
[6:07] This is a stupidly large number.
[6:09] To call it astronomically large would be giving way too much credit to astronomy.
[6:14] In fact, I made a supplemental video devoted just
[6:17] to illustrating what a huge number this is.
[6:20] Right here, let&#39;s just say that when you verify that a signature against a given message
[6:25] is valid, you can feel extremely confident that the only way someone could have produced
[6:30] it is if they knew the secret key associated with the public key you used for
[6:34] verification.
[6:37] Making sure people sign transactions on the ledger is pretty good,
[6:40] but there&#39;s one slight loophole.
[6:42] If Alice signs a transaction like Alice pays Bob $100,
[6:46] even though Bob can&#39;t forge Alice&#39;s signature on a new message,
[6:49] he could just copy that same line as many times as he wants.
[6:54] I mean, that message-signature combination remains valid.
[6:57] To get around this, we make it so that when you sign a transaction,
[7:01] the message has to include some sort of unique ID associated with that transaction.
[7:07] That way, if Alice pays Bob $100 multiple times,
[7:10] each one of those lines on the ledger requires a completely new signature.
[7:16] Alright, great. Digital signatures remove a huge aspect of trust in this initial protocol.
[7:22] But even still, if you were to really do this,
[7:24] you would be relying on an honor system of sorts.
[7:27] Namely, you&#39;re trusting that everyone will actually follow
[7:30] through and settle up in cash at the end of each month.
[7:33] What if, for example, Charlie racks up thousands
[7:36] of dollars in debt and just refuses to show up?
[7:40] The only real reason to revert back to cash to settle up is if some people,
[7:44] I&#39;m looking at you Charlie, owe a lot of money.
[7:47] So maybe you have the clever idea that you never actually have to settle up in cash as
[7:52] long as you have some way to prevent people from spending too much more than they take
[7:56] in.
[7:57] Maybe you start by having everyone pay $100 into the pot,
[8:01] and then have the first few lines of the ledger read Alice gets $100, Bob gets $100,
[8:06] Charlie gets $100, etc.
[8:09] Now, just don&#39;t accept any transactions where someone
[8:12] is spending more than they already have on that ledger.
[8:16] For example, if the first two transactions are Charlie pays Alice $50
[8:21] and Charlie pays Bob $50, if he would have tried to add Charlie pays you $20,
[8:27] that would be invalid, as invalid as if he had never signed it.
[8:32] Notice, this means verifying a transaction requires
[8:35] knowing the full history of transactions up to that point.
[8:40] This is also going to be true in cryptocurrencies,
[8:43] though there is a little room for optimization.
[8:48] What&#39;s interesting here is that this step removes the
[8:51] connection between the ledger and actual physical US dollars.
[8:56] In theory, if everyone in the world was using this ledger,
[8:59] you could live your whole life just sending and receiving money
[9:02] on this ledger without ever having to convert to real US dollars.
[9:07] In fact, to emphasize this point, let&#39;s start referring to the
[9:10] quantities on the ledger as ledger dollars, or LD for short.
[9:14] You are of course free to exchange ledger dollars for real US dollars.
[9:19] For example, maybe Alice gives Bob a $10 bill in the real world in exchange for him
[9:24] adding and signing the transaction $10 Bob pays Alice $10 to this communal ledger.
[9:30] But exchanges like that are not guaranteed by the protocol.
[9:34] It&#39;s now more analogous to how you might exchange dollars
[9:37] for Euros or any other currency on the open market.
[9:41] It&#39;s just its own independent thing.
[9:44] This is the first important thing to understand about Bitcoin,
[9:48] or any other cryptocurrency.
[9:49] What it is, is a ledger.
[9:53] The history of transactions is the currency.
[9:57] Of course, with Bitcoin, money doesn&#39;t enter the ledger with people buying in using cash.
[10:02] I&#39;ll get to how new money enters the ledger in just a few minutes.
[10:05] But before that, there&#39;s actually an even more significant difference
[10:08] between our current system of ledger dollars and how cryptocurrencies work.
[10:13] So far, I&#39;ve said that this ledger is in some public place,
[10:16] like a website where anyone can add new lines.
[10:19] But that would require trusting a central location, namely,
[10:22] who hosts the website, who controls the rules of adding new lines.
[10:27] To remove that bit of trust, we&#39;ll have everybody keep their own copy of the ledger.
[10:32] Then when you want to make a transaction, like Alice pays Bob 100 Ledger Dollars,
[10:37] what you do is broadcast that out into the world for people to
[10:40] hear and record on their own private ledgers.
[10:44] But unless you do something more, this system is absurdly bad.
[10:49] How could you get everyone to agree on what the right ledger is?
[10:53] When Bob receives a transaction, like Alice pays Bob 10 Ledger Dollars,
[10:57] how can he be sure that everyone else received and believes that same transaction?
[11:02] That he&#39;ll be able to later on go to Charlie and use
[11:04] those same 10 Ledger Dollars to make a transaction?
[11:08] Really, imagine yourself just listening to transactions being broadcast.
[11:12] How can you be sure that everyone else is recording
[11:15] the same transactions and in the same order?
[11:19] This is really the heart of the issue.
[11:21] This is an interesting puzzle.
[11:23] Can you come up with a protocol for how to accept or reject transactions,
[11:27] and in what order, so that you can feel confident that anyone else in the world
[11:32] who&#39;s following that same protocol has a personal ledger that looks the same as yours?
[11:38] This is the problem addressed in the original Bitcoin paper.
[11:44] At a high level, the solution that Bitcoin offers is to trust
[11:48] whichever ledger has the most computational work put into it.
[11:52] I&#39;ll take a moment to explain exactly what that means.
[11:55] It involves this thing called a cryptographic hash function.
[11:58] The general idea that we&#39;ll build to is that if you use computational work as a
[12:02] basis for what to trust, you can make it so that fraudulent transactions and
[12:07] conflicting ledgers would require an infeasible amount of computation to bring about.
[12:13] Again, I&#39;ll remind you that this is getting well into the weeds beyond
[12:16] what anyone would need to know just to use a currency like this.
[12:20] But it&#39;s a really cool idea, and if you understand it,
[12:22] you understand the heart of Bitcoin and other cryptocurrencies.
[12:28] So first things first, what&#39;s a hash function?
[12:30] The inputs for one of these functions can be any kind of message or file,
[12:34] it really doesn&#39;t matter. And the output is a string of bits
[12:38] with some kind of fixed length, like 256 bits.
[12:41] This output is called the hash or digest of the message,
[12:44] and the intent is that it looks random.
[12:48] It&#39;s not random, it always gives the same output for a given input.
[12:52] But the idea is that if you slightly change the input,
[12:55] maybe editing just one of the characters, the resulting hash changes completely.
[13:00] In fact, for the hash function I&#39;m showing here, called SHA256,
[13:05] the way the output changes as you slightly change that input is entirely unpredictable.
[13:12] You see, this is not just any hash function, it&#39;s a cryptographic hash function.
[13:17] That means it&#39;s infeasible to compute in the reverse direction.
[13:21] If I show you some string of 1s and 0s, and ask you to find an input
[13:25] so that the SHA256 hash of that input gives this exact string of bits,
[13:30] you will have no better method than to just guess and check.
[13:35] And again, if you want to feel for how much computation would be needed to
[13:39] go through two to the 256 guesses, just take a look at the supplement video.
[13:44] I actually had way too much fun writing that thing.
[13:48] You might think that if you just really dig into the details of how exactly this function
[13:52] works, you could reverse engineer the appropriate input without having to guess and
[13:57] check.
[13:58] But no one has ever figured out a way to do that.
[14:01] Interestingly, there&#39;s no cold hard rigorous proof
[14:04] that it&#39;s hard to compute in the reverse direction.
[14:07] And yet, a huge amount of modern security depends on cryptographic
[14:11] hash functions and the idea that they have this property.
[14:14] If you were to look at what algorithms underlie the secure connection
[14:18] that your browser is making with YouTube right now,
[14:21] or that it makes with your bank, you&#39;ll likely see the name SHA256 show up in there.
[14:27] For right now, our focus will be on how such a function can prove that a particular
[14:32] list of transactions is associated with a large amount of computational effort.
[14:38] Imagine someone shows you a list of transactions, and they say, hey,
[14:42] I found a special number so that when you put that number at the end of this list of
[14:47] transactions, and apply SHA256 to the entire thing,
[14:50] the first 30 bits of that output are all zeros.
[14:54] How hard do you think it was for them to find that number?
[14:58] Well, for a random message, the probability that a hash happens to start
[15:02] with 30 successive zeros is 1 in 2 to the 30, which is about 1 in a billion.
[15:08] And because SHA256 is a cryptographic hash function,
[15:11] the only way to find a special number like that is just guessing and checking.
[15:16] So this person almost certainly had to go through about a
[15:19] billion different numbers before finding this special one.
[15:23] And once you know that number, it&#39;s really quick to verify,
[15:26] you just run the hash and see that there are 30 zeros.
[15:29] So in other words, you can verify that they went through a large amount of work,
[15:33] but without having to go through that same effort yourself.
[15:37] This is called a proof of work.
[15:39] And importantly, all of this work is intrinsically tied to the list of transactions.
[15:44] If you change one of those transactions, even slightly,
[15:47] it would completely change the hash.
[15:50] So you&#39;d have to go through another billion guesses to find a new proof of work,
[15:54] a new number that makes it so that the hash of the altered list
[15:57] together with this new number starts with 30 zeros.
[16:01] So now think back to our distributed ledger situation.
[16:04] Everyone is there broadcasting transactions and we want
[16:07] a way for them to agree on what the correct ledger is.
[16:12] As I mentioned, the idea behind the original Bitcoin paper is to
[16:15] have everyone trust whichever ledger has the most work put into it.
[16:19] The way this works is to first organize a given ledger into blocks,
[16:22] where each block consists of a list of transactions together with a proof of work.
[16:27] That is, a special number so that the hash of
[16:29] the whole block starts with a bunch of zeros.
[16:33] For the moment, let&#39;s say it has to start with 60 zeros,
[16:36] but later we&#39;ll return back to a more systematic way you might want to choose
[16:40] that number. In the same way that a transaction is only considered valid when
[16:44] it&#39;s signed by the sender,
[16:45] a block is only considered valid if it has a proof of work.
[16:50] Also, to make sure there&#39;s a standard order to these blocks,
[16:54] we&#39;ll make it so that a block has to contain the hash of the previous block
[16:58] at its header.
[17:00] That way, if you were to go back and change any one of the blocks,
[17:03] or to swap the order of two blocks, it would change the block that comes after it,
[17:08] which changes that block&#39;s hash, which changes the one that comes after it, and so on.
[17:13] That would require redoing all of the work, finding a new special number
[17:17] for each of these blocks that makes their hashes start with 60 zeros.
[17:22] Because blocks are chained together like this,
[17:24] instead of calling it a ledger, it&#39;s common to call it a blockchain.
[17:30] As part of our updated protocol, we&#39;ll now allow
[17:32] anyone in the world to be a block creator.
[17:35] What that means is that they&#39;re going to listen for transactions being broadcast,
[17:39] collect them into some block, and then do a whole bunch of work to find a
[17:42] special number that makes the hash of that block start with 60 zeros.
[17:46] Once they find it, they broadcast out the block they found.
[17:50] To reward a block creator for all this work, when she puts together a block,
[17:55] we&#39;ll allow her to include a very special transaction at the top of it,
[17:59] in which she gets, say, 10 ledger dollars out of thin air.
[18:03] This is called the block reward, and it&#39;s an exception to
[18:06] our usual rules about whether or not to accept transactions.
[18:10] It doesn&#39;t come from anyone, so it doesn&#39;t have to be signed.
[18:13] It also means that the total number of ledger
[18:16] dollars in our economy increases with each new block.
[18:20] Creating blocks is often called mining, since it requires doing a lot of work,
[18:25] and it introduces new bits of currency into the economy.
[18:29] But when you hear or read about miners, keep in mind that what they&#39;re
[18:33] really doing is listening for transactions, creating blocks,
[18:36] broadcasting those blocks, and getting rewarded with new money for doing so.
[18:41] From the miners&#39; perspective, each block is like a miniature lottery,
[18:45] where everyone is guessing numbers as fast as they can,
[18:48] until one lucky individual finds a special number that makes the hash of the block
[18:53] start with many zeros, and they get the reward.
[18:57] For anyone else who just wants to use this system to make payments,
[19:01] instead of listening for transactions, they all start listening just for blocks
[19:05] being broadcast by miners, and updating their own personal copies of the blockchain.
[19:10] Now the key addition to our protocol is that if you hear two
[19:14] distinct blockchains with conflicting transaction histories,
[19:17] you defer to the longest one, the one with the most work put into it.
[19:22] If there&#39;s a tie, just wait until you hear an
[19:25] additional block that makes one of them longer.
[19:28] So even though there&#39;s no central authority, and everyone is maintaining their own
[19:33] copy of the blockchain, if everyone agrees to give preference to whichever blockchain
[19:38] has the most work put into it, we have a way to arrive at decentralized consensus.
[19:43] To see why this makes for a trustworthy system,
[19:45] and to understand at what point you should trust that a payment is legit,
[19:49] it&#39;s actually really helpful to walk through exactly what it would take to
[19:53] fool someone using this system.
[19:55] Maybe Alice is trying to fool Bob with a fraudulent block,
[19:58] namely she tries to send him one that includes her paying him 100 Ledger dollars,
[20:03] but without broadcasting that block to the rest of the network,
[20:07] that way everyone else still thinks she has those 100 Ledger dollars.
[20:11] To do this, she would have to find a valid proof of work before all the other miners,
[20:16] each working on their own block.
[20:19] And that could definitely happen, maybe Alice just happens
[20:22] to win this miniature lottery before everyone else.
[20:25] But Bob is still going to be hearing the broadcasts made by other miners,
[20:29] so to keep him believing this fraudulent block,
[20:32] Alice would have to do all the work herself to keep adding blocks on this
[20:36] special fork in Bob&#39;s blockchain that&#39;s different from what he&#39;s hearing
[20:40] from the rest of the miners.
[20:42] Remember, as per the protocol, Bob always trusts the longest chain he knows about.
[20:49] Alice might be able to keep this up for a few blocks if just by chance she finds
[20:53] blocks more quickly than the rest of the miners on the network all combined.
[20:58] But unless she has close to 50% of the computing resources among all of the miners,
[21:03] the probability becomes overwhelming that the blockchain that all the other miners
[21:08] are working on grows faster than the single fraudulent blockchain Alice is feeding to
[21:13] Bob.
[21:15] So after enough time, Bob will just reject what he&#39;s hearing from
[21:18] Alice in favor of the longer chain that everyone else is working on.
[21:23] Notice, that means you shouldn&#39;t necessarily trust a new block you hear immediately.
[21:29] Instead, you should wait for several new blocks to be added on top of it.
[21:33] If you still haven&#39;t heard of any longer blockchains,
[21:36] you can trust that this block is part of the same chain that everyone else is using.
[21:42] And with that, we&#39;ve hit all the main ideas.
[21:45] This distributed ledger system based on a proof of work is more or less
[21:49] how the Bitcoin protocol works, and how many other cryptocurrencies work.
[21:54] There&#39;s just a few details to clear up.
[21:56] Earlier I said that the proof of work might be to find a special
[21:59] number so that the hash of the block starts with 60 zeros.
[22:03] Well, the way the actual Bitcoin protocol works is to periodically change that
[22:07] number of zeros so that it should take, on average, 10 minutes to find a new block.
[22:12] So as there are more and more miners added to the network,
[22:16] the challenge gets harder and harder in such a way that this
[22:19] miniature lottery only has about one winner every 10 minutes.
[22:23] Many newer cryptocurrencies have much shorter block times than that.
[22:28] And all of the money in Bitcoin ultimately comes from some block reward.
[22:32] In the beginning, these rewards were 50 Bitcoin per block.
[22:36] There&#39;s actually a great website you can go to called Block
[22:38] Explorer that makes it easy to look through the Bitcoin blockchain.
[22:41] And if you look at the very first few blocks on the chain,
[22:45] they contain no transactions other than that 50 Bitcoin reward to the miner.
[22:49] But every 210,000 blocks, which is about every 4 years, that reward gets cut in half.
[22:56] So right now, the reward is 12.5 Bitcoin per block.
[23:00] And because this reward decreases geometrically over time,
[23:04] it means there will never be more than 21 million Bitcoin in existence.
[23:10] However, this doesn&#39;t mean miners will stop earning money.
[23:13] In addition to the block reward, miners can also pick up transaction fees.
[23:18] The way this works is that whenever you make a payment,
[23:21] you can purely optionally include a transaction fee with it
[23:24] that will go to the miner of whichever block includes that payment.
[23:29] The reason you might do that is to incentivize miners to actually
[23:32] include the transaction you broadcast into the next block.
[23:36] You see, in Bitcoin, each block is limited to about 2400 transactions,
[23:41] which many critics argue is unnecessarily restrictive.
[23:45] For comparison, Visa processes an average of about 1700 transactions per second,
[23:51] and they&#39;re capable of handling more than 24,000 per second.
[23:56] This comparatively slow processing on Bitcoin makes for higher transaction fees,
[24:00] since that&#39;s what determines which transactions miners choose to include in a new block.
[24:07] All of this is far from a comprehensive coverage of cryptocurrencies.
[24:12] There are still many nuances and alternate design choices that I haven&#39;t even touched.
[24:16] But my hope is that this can provide a stable WaitButWhy-style tree-trunk of
[24:20] understanding for anyone looking to add a few more branches with further reading.
[24:25] Like I said at the start, one of the motives behind this is that a lot of money has
[24:28] started flowing towards cryptocurrencies, and even though I don&#39;t want to make any
[24:32] claims about whether that&#39;s a good or bad investment,
[24:35] I really do think it&#39;s healthy for people getting into the game to at least know the
[24:38] fundamentals of the technology.
[24:41] As always, my sincerest thanks to those of you making this channel possible on Patreon.
[24:46] I understand that not everyone is in a position to contribute,
[24:48] but if you&#39;re still interested in helping out,
[24:51] one of the best ways to do that is simply to share videos that you think
[24:54] might be interesting or helpful to others.
[24:57] I know you know that, but it really does help.
