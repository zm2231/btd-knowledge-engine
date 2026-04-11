---
title: "Master ALL 20 Agentic AI Design Patterns [Complete Course]"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=e2zIr_2JMbE"
video_id: "e2zIr_2JMbE"
duration: "1:03:41"
transcript_method: "youtube-captions"
segment_count: 1894
char_count: 72295
status: ingested
topics: []
meta_patterns: []
---

# Master ALL 20 Agentic AI Design Patterns [Complete Course]

**Creator**: mark-kashef | **Duration**: 1:03:41
**URL**: https://www.youtube.com/watch?v=e2zIr_2JMbE
**Transcript**: 1894 segments, 72295 chars

## Transcript

There are 20 agentic design patterns that separate pros from beginners. A Google engineer recently released a 400page book on agentic design patterns. And in this video, I'm going to give you a summary of that book in plain English. I spent hours trying to simplify these architectures to make them as easy to understand as possible. No jargon, no theory, just practical patterns that you can use today. And each one of these patterns could solve an actual problem that you're facing right now. And if you watch till the end of the video, you'll have a deeper understanding of agentic structures and I'm going to give you tons of stuff for free to help upskill you as well. So without further ado, let's dive into it. So I have 20 agentic patterns that we're going to dive through today. And each one has a set of visuals. So it's not going to be some clear-cut and dry just plain text. We're going to walk through actual workflows where I did my best to label what would happen in each pattern in plain English. And the first one we're starting with is prompt chaining. Now, for each one of these, I'm going to give you a summary TLDDR, too long, don't read of what is involved in this design pattern, and then I'll walk through very quickly when you could use it, where you could use it, the pros and cons, and some actual applications for that pattern. And my idea is whether you watch this or you take the transcript of this video, you could essentially feed your Claude code or your cursor or where have you this transcript and it would understand which pattern it should employ for what kind of problem. So prompt chaining is where you break a big task into smaller steps and you run one after the other. And the good thing about prompt chaining is it gives multiple areas to basically catch a failure before it happens because each step in that chain, that's why it's called a chain, validates the output of the one before it before it passes data to the next one. So you can think of it like an assembly line where each station completes its part, checks quality, then hands it off to the next section. So tactically you would have some form of user input and then that user input would be broken down into subtasks. Once the data contracts or contracts between these tasks are created then you go and execute task one. Then when you go through executing task one you want to validate the output of task one. So task two will now validate first that the test passed or the data actually passed properly from output one and then we go to output two and it keeps going and it if it fails it retries until it finally passes and in this case we only go through three executions but theoretically prompt chaining could be infinite assuming your budget is infinite for LLM costs but there is diminishing returns so if you put 50 different language model chains together at some point you're either adding too much or you're basically pushing it to the limit where it starts hallucinating on something it wouldn't have hallucinated before. It starts to overthink. So there is a magic number depending on your workflow where it could be from three to five different parts of that chain where it's good enough to do that validation. And the idea is is that you merge all the results. You assemble the final output. You log all the artifacts. So anything that happened throughout the entire chain. So if something does go wrong or your output looks a little bit suspicious, you can go back through the entire chain and see exactly where that happened. So in terms of when to use, I use prompt chaining a lot in all kinds of flows, whether it be an automation, an agentic automation or both. And you can think of it as very useful with complex multi-step processes, data transformation. So imagine you have really dirty data or data that's just not standardized or fully structured. You could have a pipeline with a mix of generative AI and non-generative AI. So let's say Pythonic or JavaScript where it goes through and each part has a pass. So let's say you had awful columns. they're not properly labeled. Step one could be let's label all the columns based on the first couple rows of data using Genai and then assuming that it makes sense it passes it goes to the next step where now maybe we clean and make sure that each row has the proper type of data in the right expected structure and these multi-step processes is where prompt chaining can help a lot. So given that it's helpful for things like document processing data ETL code generation and one that'll basically reemerge over and over again is content creation. A lot of these design patterns depending on your flow for content creation is very helpful. So the pro of using this design pattern is it's modular, meaning you can swap in or swap out different parts of the chain and not necessarily break the entire flow, assuming that the chain you input is very similar to what is expected from the other parts of that chain. But one of the major cons for this is context explosion. And this is essentially because you're going from maybe step one to step seven. And what if you were carrying over all the context from step one all the way to step seven? So you could theoretically have a lot of data depending on what kind of structure this data is. So imagine it's JSON, JavaScript object notation or something that's a payload structure. Those are very expensive on the token side. So if you keep looping those and adding it to the next part of the chain, you can now end up at step seven where you have all of this context and all the prompts and now your new prompt for step seven and now the likelihood for hallucination could beat or defeat the whole purpose of doing this to begin with. And the next thing is if your prompts are not very well tested, then it could pass. So let's say you go from chain one to chain two to chain three and somehow it passes, but there's an actual error or it shouldn't have passed to begin with. So that's a prompting issue. You then have error propagation where every single node or every single part of that chain is inheriting the first mistake you made. And obviously this is going to be slower because you have multiple points of inference which in plain English means multiple points where a language model is going to have to be intervening. So you have to wait for that to run before the next step. And then applications of this could be legal document analysis, e-commerce product descriptions, academic research assistance and anything related to report generation. The next design pattern is routing. And routing in plain English is where you have incoming requests that get analyzed and sent to the right specialist agent based on what they need. And you can think of it like a smart receptionist or an operator who listens to what you need and directs you to the right person or the right department depending on tech support, accounting, etc. And the key thing here is if the operator is unsure, they should go back and ask you some more clarifying questions to better understand where to route that request. So using that as a segue, you have a user request. The AI then analyzes the intent and the context behind that request. So once it does that, it has to make a decision and that decision will be whether or not it should be going to the technical support agent, the sales agent, the account management agent or any of the other agents in your workflow. And if it doesn't know, the key thing here is it's going to request clarification until the confidence is higher. Now confidence could be a number generated by an LLM where it goes through the decision and you ask in the prompt out of 10 tell me how sure you are. Now again you open yourself up here to hallucination because what if it says it's an eight but actually meant six and if you ran it again it would have been five or six. So in this case it could be helpful to add something deterministic where you have something statistical that takes a look at the decisions and assesses it in some way that gives you a number that you can rely on to go back in that loop. And once you get a response from any of the agents that it ends up routing to, it goes to either a success or a failure. And then it comes to some form of decision and delivers the end result. Whether that be a piece of information, a summary or what have you. This makes sense when you have multiple domains. So you have like we said technical, we have accounting, we have finance, we have different departments or specializations for our agents that we'd have to basically distribute to. And it's also helpful because if you have a specific tool that can only or should only be invoked with a specific path or a specific department, this is helpful to segregate all those different paths. And it'll also help prevent misfires where an agent uses a tool it shouldn't have used or thought it should have used or ends up doing a whole process without executing the very tool it needed to come to that conclusion. which if you use something like NAD, you'll notice all the time if you actually watch what's happening with the AI agent node, it will sometimes use a tool then not use the tool then decide to end up using the tool last minute and then you get the end result assuming that the whole process was correct to begin with. So like the example, this is great for customer service, enterprise automations and healthcare triage, especially if you have some form of healthc care front-end receptionist that is a voice agent that takes calls and it either routes it to a specific department. It basically does a booking or does something along the lines of answering questions on when are you open, what services do you have? So, these could be different parts of that specific chain. The pros here is that you have specialization, scalability, and efficiency. But on the con side, because you have multiple possible paths, you can always route to the wrong path. And in the real world, it's less likely for that to happen because if you have someone on the phone asking you clarifying questions, they literally won't let you pass until they know exactly where to route you. And if they don't know, they'll probably ask their manager. So with that same analogy, it might make sense to add to that workflow some form of manager agent that assesses the decision of the initial agent. But one of the many things to look out for is this specific one here, which is being prone to edge cases. So you could have a case that comes out of nowhere. And it's good to have some form of confidence interval or confidence marker. So you can basically quarantine or add in a human in the loop if there's one case that just can't be properly tagged. And again, one of the best applications for this is likely in customer service or anything that's front-facing from a business standpoint. Now, the next one is parallelization, which in plain English means splitting a large job into independent chunks that can be processed at the same time by multiple workers. And when we say workers here, that is a proxy for agents. And the analogy here is like having 10 people each read different chapters of a book simultaneously, then combining all the summaries at the end. So each one works on one separate chapter, then we put it together to create the book. In practice, this looks meaty, but it's actually not too difficult. So you have some form of large input. Then that input is analyzed. Then that analysis determines how you're going to split that big task. So imagine you're working at a company and the CEO of that company tells you go and reduce our customer churn for our SAS platform by 20%. Now that 20% is a huge ambitious goal and what you have to do is take that goal break it down into independent units in this case subtasks that can lead to accomplishing that goal. So for example you could run some form of survey across those customers to see why are people leaving. Maybe you have some exit interviews so you have a better understanding of why or what problems might lie in the underlying SAS platform. In the same way, the agent here has to check resources, see what resources it has available to it, and then once it sees what it's dealing with, it can spawn up parallel workers. And each of these workers can work on subtasks that lead to accomplishing that bigger goal. So you can think of each one of these workers as employee agents where each one retries and works until it succeeds its specific task. And if it fails, it keeps going in a loop until it goes through. And then once you collect all the results from all of the workers, you then normalize them, which just in plain English means you make them into a same format. So it's like having apples, oranges, and pineapples. You want to make sure that all of them are apples or all of them are pineapples or all of them are oranges. And then you merge those results. You simplify it to a single output. Then you generate a summary. And what providence here is like you're citing which parts of this final output came from which workers. So if you understand where the failure point is, you can go and have a conversation with that specific worker, which in this case means adjusting the prompt or adjusting the system for that worker to make sure you get the right coordinated result. So this is helpful to use with largecale data, time-sensitive operations where you need to break something down very quickly and you want some way to draft some agents to help you break it up. And then web scraping is a good example cuz web scraping has multiple processes. You can go on a page, inspect the elements, see whether or not it's HTML or how you want to use JavaScript. Then you break it down into different processes. Maybe you crawl different pages. So you can think of a very meaty process in this regard. where it fits are things like document processing, data enrichment, research automation, and testing frameworks. And in terms of the pros and cons if you put them side by side. So pros are, like I said before, specialization, it can scale because technically like a company, you can keep adding more employees, but in this case, you don't need to raise venture capital funding to do that. You can just add more resources. But you'll see this con happen over and over again in these agentic design patterns where as you add more employees naturally a normal company it adds more complexity adds more layers adds more drama you might need to hire HR so in the same way you might need to bring in an agentic version of HR to now manage these workers better and then obviously unifying all of the outputs from the workers sounds easy when I say it but when you're tactically doing this in the real world it's sometimes hard to equate or equalize all of those same parameters and variables. So from the real world applications, I would say the news aggregation service is the one I've seen as well as document intelligence systems as well. The next one is reflection. And reflection is exactly what you would anticipate it to be where you generate a first draft, then you have a critic review it against quality standards and then based on the feedback, you revise and you improve. And you essentially repeat this until you meet your quality standards. So the analogy here would be like writing an essay, having a teacher review it for you, and then making improvements until you finally get a passing grade. In terms of general structure, not too tricky. So you have some form of initial request, you generate a first draft, then you have initial output, then you have this critic agent that goes through the output and assesses what needs to happen to make this better. So in this case, we could apply quality rubrics where you literally create a rubric for this agent to assess the output. You run unit tests which are predisposed tests that you've put together for edge cases and things that you're looking for. And then let's say it is the essay example. In this case, it would be grammar and logic check. So assuming that all of these pass and meet the quality bar, then if it meets the criteria, we go down this path here. You accept the output. You record success patterns. You update any prompts or rules if anything's needed and you're good to go. But if it doesn't pass, then you generate some structured feedback. Very similar. So imagine having one agent generate structured feedback that goes back into that loop to the original agent and goes back and forth until you finally reach all of those quality standards. Now let's say there's a fundamental flaw in your workflow or automation you're building. You then have to ideally have a max count. So loop through until you meet the standards. You have three times very similar to school where you couldn't endlessly submit an essay in like grade five or six. You would have maybe one or two tries and then after that the grade is the grade. So when to use this is if you have to really keep track of quality control and you have complex reasoning tasks or tasks that are more creative where you want to use the chaotic feature of a language model but you don't necessarily want to have a chaotic result that's unpredicted every single time. Where this fits is anything around really content generation. So content legal academic writing product descriptions for products. So imagine you had an agentic system. You have an Amazon FBA store. you have thousands of products, you're trying to find ways to write descriptions for each one of them that's not formulaic and AI slop. This could be an example where you adjust and use this pattern. The pros is essentially you're focusing on quality, which is awesome. What is not awesome is the cost. Any form of API throttling. So let's say you're ripping requests over and over again for each product and you have 10,000 products and you're running them all at the same time. You can have ways where the API will just time out. So this specific pattern needs a lot of planning. And like I said, anything related to content generation is where this would be really helpful. So the next one is tool use. And this one is straightforward as well. So when the AI needs external information or actions, it discovers available tools, checks permissions, and then calls the right tool with proper parameters. So it's like a chef who needs ingredients, checks what's available in the pantry, then verifies they can use it, and then retrieves and actually uses it in the recipe. So tactically, you have a user make a request. You analyze those specific requirements. you discover what tools you have available. So in this case, let's say we have an agentic tool that has access to the web search API, database query tool, calculator function, file system access, and other APIs. We then select which tool should be used. And this alone can be tricky depending on what kind of generative AI, if you're using a reasoning model or what have you. And then you match the capabilities to the need. So you do a safety check. Did I basically choose the right tool for the job? If it passes, you prepare the tool call. You execute the tool call. If it doesn't work for whatever reason, again adding some logic here as to whether or not or how many times it should loop through. And then as you go through, you have the parse tool output. You have a fallback method. You can do normalization with the language model where you have the language model take the outputs of this automation and then basically configure in a way or format it in a way that's easier for it to interpret or use. Now, if you don't use the right tool and you fail, then ideally there's some form of reason. So, you deny access to using the tool with a reason saying you use the wrong tool and let's log this so that someone like me can intervene and add some more flavor and change the structure of the agentic workflow to work a little bit better. So, tool use is used all over the place. So, the applications are endless. So, I won't touch on that too much, but anywhere where it's multi-step is much more helpful. where it fits, research assistance, data analysis, customer service, content management, and in terms of pros and cons, you have the quality improvement, you have error reduction, and on the con side, you have, like we said before, if we have a misfire and we use a tool and it says it passed, but it shouldn't have passed, then you carry that same mistake over through the entire workflow. So you can think of this as starting a math equation back in elementary school and you're doing division and you divide incorrectly in step one. Everything you do after that point will be wrong because your essential first step was wrong too. Now for the rest of them since you're getting the gist of this I'm going to just glance through the real world applications. You'll basically get it into where it fits. Planning straightforward again where you have some form of big goal and you create a step-by-step plan. This is what I do personally when I use things like clawed code or cursor. I don't write code for like 40 minutes or AI doesn't write code for 40 to 50 minutes. I plan and plan and plan until it's ready to go and I know exactly what's going to happen. Then I let it run. And even then, sometimes the AI manages to still hallucinate some parts, but it's a much better way to compartmentalize everything you're trying to do and execute it in the most efficient way possible. So this one is like planning a road trip with checkpoints, monitoring traffic and routing where needed. So in this case, you have some form of goal input and then you break it down into milestones. You create what's called a dependency graph and then you check your constraints. So in this case, if it's data oriented, it could be data availability. It could be authorization, could be budget limits, could be deadlines of any form. And then you generate a step-by-step plan. You assign which agent or agents should be used and what tools of those agents and then you just go and execute each step. So similar structure to prompt chaining except you're not necessarily carrying over the output of the previous one to the next one. You're basically going through sequentially until you get to step number n. N could be six steps, 10 steps. You track your progress and assuming your goals are met, then you go through the acceptance criteria and you're good to go. Otherwise, like we said, you're going to see this theme recurring. You have some form of backup where if this doesn't work, you analyze what happened and assess whether or not there's new information. If so, if this is an edge case, like I said before, maybe it deserves a human in the loop. Otherwise, you want to escalate that issue, handle the exception, and then you're good to go. So, this is especially helpful with things like goal oriented workflows where you have again ambitious goal, but you want to break it up into substeps to get to that goal. So this is good for project management, software development or research projects. And in terms of the pros and cons, the big pro is that you have very strategic execution because the more time you spend planning or the more time the agent spends planning, it has more clarity on exactly what it should do. And by nature of that, it makes your entire workflow or automation a lot more adaptable to new variables, new environments. The biggest con though is the setup and the complexity and coordinating all those agents to make sure that each one has the right tool, each one has the right system prompt and that you have the proper fallback mechanism if things don't go right. This next one is multi- aent collaboration and this is one that you would expect and you see all the time especially with those humongous anend workflows with seven agents, six sub agents and you have that whole network. So the crux of this one is that you have multiple specialized agents working together on a different part of a complex task coordinated by some central manager. In many cases they share a common memory which is important here because if you share a common memory then your memory mechanism whatever that is an MCP server any form of function has to be well structured so that all the memories don't overlap but you focus on the proper memories that need to persist. And my analogy here is like having a film crew where the director coordinates while camera, sound, and lighting specialists each handle their part sharing the same script and timeline. On the multi- aent side, you have some form of complex task and then because of that task, you have to define specialist roles. So you might have an agent that literally just decides what other agent should be chosen which is similar to the idea before where we had that operator but in this case the operator has to be an agent where depending on what we're looking for in the task it decides okay let's use a research agent or the analysis agent or what have you and then in your infrastructure you should have some form of shared resources whether that be shared memory stores artifacts version control and then once you have the coordination protocol as it's referred to you have your orchestrator ator go through and then the coordinator manages the flow. It assigns it to each agent. It assigns each task to the right agent. So imagine you had a a sauna board or a Jira board and you have a bunch of tickets. The coordinator is essentially tagging each ticket to one or more agents and after each one finishes they have some proverbial contract until they go to the next agent and each one goes through checks off and the contract again using my analogy of tickets. Each ticket on a project management software has criteria, acceptance criteria. Assuming that acceptance criteria has been met, then you can go to the next stage. And then there's an overall acceptance test. If it passes, you're good to go. If it fails, maybe you go and run a simulation. You loop back. You make sure and see where did the coordination fail. And again, you can set some form of max here where it doesn't keep retrying for infinity. So out of all of these, one of the best applications of this is for iterative refinement, which really lends itself well to AI or general product development where there's multiple phases, multiple tickets, and then different ways to solve the same problem. So software development, product development, financial analysis, content production or creation and research projects is where this shines. And in terms of the pros and cons, the pros like before you have the ability to specialize and you have parallel processing. But on the con side, once again, all of these systems need to be set up and tested and tested over time as these language models evolve and drift. The last section acts as a great segue for memory management where this is classifying incoming information as short-term conversation, episodic events, or long-term knowledge. And you store each type appropriately with metadata like recency and relevance. And this is exactly how your brain keeps track of things briefly. Some like specific memories or permanent knowledge, things that you will never forget. And one thing I would say here is that there are so many tools and MCP servers trying to solve this. And I've yet to find something perfect because I noticed that depending on what you're trying to build agentically, memory management is really contextually specific on what you're trying to remember and what is not worth remembering. But the main idea is you have some form of user interaction. You capture information and then you decide what kind of memory would this be? Is this something I have to remember in the long run? Is this short-term memory? Is this knowledge that I have to store in perpetuity forever? So is this episodic memory? Is this long-term memory? Is this something I'm just going to keep for the remainder of this session? So that's why it says here, is context window full? If yes, then you compress whatever it is you're trying to remember or you compress your existing memories because you don't have to hold on to them anyway after the session. Now, if you do need to store them, then you need to index them and then add metadata, add a recency score, create frequency or topic tags so it's easy to retrieve those. Think of something like a vector database of sorts where you need some way to generate your top five results. based on a single question. And on the shorter term memory side of things, you want to retrieve a memory if it's relevant. You want to query your memory store. Maybe you want to apply some filters by rule, time horizon, or topic match. Then you pick the right memories that you should use. And then you process the request. And if privacy is an issue, this is where you deal with that. Whether you redact anything from that memory or you save a different version of that memory, then if so, you update your memories and then you continue the interaction. So this is not a a gentic pattern of its own. This is more so a subset of where you'd use it in other gentic patterns. So the main use case with long-term memory management is conversational continuity. So ideally if you talk to Claude, you'd be able to have that conversation with Chad GBT with the exact same context without having to reexlain who you are, what you do, or what you're trying to accomplish. This is awesome for experiences that require tailoring. So customer service, personal assistance. I'd say the biggest application that I could see is educational assistance or platforms where they learn that you struggled with concept A. So when you go to concept B, it knows that you have a weakness with concept A. So it basically overexlains parts of concept B that are dependent on understanding concept A. The pro is obviously context preservation over time. But on the con side, you want to make sure that as you store memories, you're not compromising security. You're not over storing memories. You have a way to flush out older memories or you have a system to determine when a memory is indeed old. The next one is learning and adaptation where this is collecting feedback from user corrections, ratings, and outcomes. You want to clean and validate the data to remove noise and then you use it to update prompts, policies, or examples. It's like adjusting a recipe based on customer feedback and taste tests. So essentially, you'd have some form of system operation and you collect feedback from a feedback source. That could be some form of correction from a user, quality ratings, automated evaluations, or some form of rubric or task outcomes. You then take these quality signals or these feedback signals. You do a quality check and then you either dn noiseise it, you clean it. If it's something malicious, like you're a restaurant and they say there's cockroaches everywhere, but there's not a cockroach in sight. So, you maybe disregard but you log that specific review. Additionally, you want to make sure that your main system doesn't have any fluff or noise in it. So, you go through this process and then you decide how is this going to be quote unquote learned? Am I going to update the prompts associated with my workflow? Am I going to update my policies examples in the prompts? If you're doing a multi-shot prompt, am I going to update existing preferences in the tool or product itself? Am I going to fine-tune a model? This is very rare that you'd want to do that, but it is an option that you can use. Then after this, you do some form of AB testing. you monitor the performance after taking in the feedback to see has this course corrected this agent to do a better job at whatever. So naturally this is a great system to use if you need feedback incorporation and you need to have some way to have a feedback loop and stimuli taken into the system so that the system learns in whatever way learning is for you whether it's the prompt itself or the knowledge base or any form of policy that your agents adhere to. So where it fits is similar to memory management anywhere where there is a tailored service where you are receiving feedback from a customer or an avatar. So the pro and con is that you have continuous improvement but on the con side you have training costs right. So every single time you're updating a prompt you're having probably a language model do that. So these things become a combinatorial cost problem where as you keep adding more and more checks or feedback loops you're also adding more cost. And now you could learn something wrong. Right? So what if someone said the restaurant is full of cockroaches and now your system learns that it has cockroaches. So it says something like warn people before they book with your restaurant that there are cockroaches everywhere. So you could learn the wrong thing. So you want to make sure that you have some checks and balances against that. The next one is goal setting and monitoring. And this one is basically defining specific measurable goals. A lot of times they call these smart goals. Specific, measurable, achievable. Two other ones I I forget right now. I think realistic and then time based. Yeah, you have measurable goals with deadlines and budgets and then as work progresses, you continuously monitor metrics and compare to targets and it's like having a GPS that sets a destination, monitors your progress, and then recalculates when you're off course. So, how the system works is you have some form of objective that is defined. Then you create these smart goals. So, you have everything that I mentioned before. You set your constraints. Let's say your your main constraints that you deem as the most important are time and resource and budget. Then you define some metrics or KPIs, key performance indicators for this agent. Then you go through some quality gates. Quality gates is essentially just double-checking that everything's in line. You begin your execution. You go through continuous monitoring. You track progress, create checkpoints, have status events. You collect those metrics. You compare them to targets. And then you go through this entire rest of the system. If the system starts to drift because it's not adhering to your KPIs or your metrics, that's where we go and analyze the cause and you decide what needs to happen. Do you need more resources? Do you need to adjust the plan? Do you need to modify the scope in any way? And then if it does pass, then you continue the execution. You make sure that your goal is achieved, whatever that goal was. And then if it isn't achieved, you escalate it. Otherwise, it's successful. And theoretically here, you could generate some form of report summarizing everything that happened. Then you have the goal achieved. In terms of where and when to use this, this is a more advanced technique. So you'd use this for complex projects, really autonomous operations you're going for and strategic execution. And on where it fits, it's for, let's say, sales pipelines, very sophisticated pipelines, system optimization or cost management. I would likely use it only in these two occurrences. There's probably simpler ways to create a sales pipeline. And on the pros is you try to be as efficient as possible with your resources. But on the con side, you have potentially goal conflicts or rigid constraints throughout your system where you have to run this quite a few times to catch any not only edge cases but any rigidities that pop up depending on the variability of your input. Next up, we have exception handling and recovery. And I could summarize this whole sticky note in one line, which is this is just the way that you catch errors in your agentic workflows. So this is an agentic pattern to help catch issues in your other agentic patterns. So essentially what you're trying to do is you do something, you add safety checks, you make the call to these services or tools or both. Then you assess whether or not it worked. If it didn't work, you take that error, you catch it, and then you have to assess and classify what kind of error is it. Is it a permanent error? Meaning it's something that's not going to resolve itself. If so, it's good to have a plan B in your workflow. If it's a temporary error, then try again. Wait a bit. So, sometimes we call this back off or exponential back off where it waits 1 minute. Let's say there's a timeout with an API or you've sent too many requests, maybe it backs off. That's why it's called exponential backoff and it goes back and tries again in a minute. But obviously, you want to cap out how many times it should try because it could be that what you think is a temporary failure is a permanent failure. So, for a critical response, you'd have an emergency response. You'd save your current work, alert the team, determine whether or not it's safe to continue, and then you keep going until you get to the point where you can continue working and you're unblocked. Otherwise, you need to maybe do a full stop and reassess the entire system and see where the issue lies. In terms of backup options, this could be using a simpler method, using saved data, using default answers, or getting again that human in the loop to assist. Then you start the recovery process, which flows into the exact same recovery process from before. Now in terms of when to use this, you can use this pretty much in every pattern, but specific ones are the ones where you need a lot of focusing on error handling where errors are more prone to happen like systems that are actually in production, quality assurance, cost management, and anything where there are vital and critical mistakes that you have to account for. So this is one of those patterns that would be a good use case for enterprise AI deployments because there are so many fail safes and plan B's and C's. So the pros and the cons are obviously that you have more performance visibility. You can see exactly what's happening, what's failing, why it's failing, and have areas of recourse if it fails. And then you have more user trust naturally because you have more fallbacks in place. But on the con side, there is a lot of infrastructure and complexity to make this happen. And sometimes you might have a lot of false alarms. So depending on how many times you get an alert, you should be very judicious or very specific about when or what is worth an alert. So you don't get alert fatigue. It's kind of like the story about the sheep that cried wolf. When a cried wolf multiple times and the wolf was actually there and they ignored the wolf. So the same analogy applies here. This next one is human in the loop which like the name says is adding a human in the loop where there's low to high risk depending on the situation or most importantly edge cases. So this one we can kind of like breeze through because it's pretty straightforward or you have some form of agent processing, you have a decision point and one of those decisions could be that a review is needed or you need to actually step in and intervene. So a good actual tactical example is imagine you're using some form of agentic browser or agent mode in chat GBT. At some point it will realize it needs you to step in to add your credentials to log in to your email to Upwork to whatever service it is. And that's where you have a review cue and then you prioritize by urgency if it's multiple things. You present in the UI like agent mode and chat GBT where it physically tells you Mark please intervene and take over and then give me back control once you're done. It shows full context displays differences. There's usually some form of timer. And on the human side they can decide whether to deny, edit or take over or whether to approve. And assuming that the human approves, it goes through the rest of the workflow. And assuming that no more intervention is required, then this process is complete. So you want to use human loop anywhere where you have a highstake decision, you have regulatory compliance, where you can't leave it up to a generative AI model to hallucinate, and when you want to catch things like edge cases. So it fits everywhere. There's only a few examples here like content moderation and medical diagnosis, but it fits everywhere you can imagine. So the pro is that you have more trust in the system because you know exactly where the failure points are and what the next course of action is with a human when you reach that failure point. When you're adding human in the loop, you're naturally adding more latency or more buffer time to that system because you're it has to wait for you. So if you take 10 minutes to intervene, then that's the system running 10 minutes longer than it should be. This next pattern is very familiar to a lot of you where it's basically just rag. It's knowledge retrieval. So just to define it, it's indexing documents by parsing, chunking, and creating searchable embeddings. Literally rag. So it's like having a librarian and you want to categorize or index a series of information and systems. So this one is pretty straightforward where you have a user query. You have some sources that you've ingested. You've parsed those documents, categorized them, embedded them, which again means in plain English, you take words, you turn them into vectors, you store vectors into library. So when you ask a question, you try to match the vector of the question to the vectors in your library with the closest match. And then in terms of chunking strategies, you have fixed size chunks, semantic boundaries, context aware chunks. There's all kinds of different ways to do this. Then you generate embeddings like I said, you store it in something like a vector database. You get the query. Is there if there's any form of rewriting for that query to make sure that you can get a better match, then you would do that in the system. you would retrieve the top matches. So this is called top K. You could have five matches, you could have 10 matches. Just be aware that the more matches you add to the system, the more that the language model can choose and hallucinate from. In terms of reranking, this is where you would reassess all the vectors and better organize them through scoring them and optimizing them to get better matches. So you can have more grounded responses. You have citations potentially. You obviously have to test your rag and if it fails then you have to go through adjust whatever parameters need to be adjusted. Then if it passes you deliver the response and then maybe you have some form of metrics that you score on like precision or recall. Then you optimize the system and then your rag technically would be complete. So you want to use this wherever you have document knowledge needs and that could be small or large really depends on the scenario. So this fits anywhere where you have enterprise search, customer support, research assistance, any form of documentation you need to split up and use. But rag is something a lot of us know about. So this is not too hard to wrap your head around. So the pros is that you can add more accuracy and scalability to your system, but it can come at the cost that you have to not only build infrastructure but maintain that infrastructure, which means maintaining those vectors that you accumulate over time. This next one is definitely worth refining which is called inter agent communication. And this is basically where you have agents communicate through a structured messaging system with defined protocols and then you have message including IDs for tracking expiration times and security checks. So analogy here is it's like an office email system with red receipts, security clearances and spam filters that prevent reply all disasters. So this is where you have language models talking to other language models. So from a system perspective, this is where you could have multiple AI agents speak to one another and then you have to decide how they should communicate. So either they have one boss, one that manages all the other agents, which is sometimes really helpful to have because you have a single vector of failure that everything can report to. The next one is that everyone is equal, meaning everyone has a say at the table. It is a pure agentic democracy which sounds great but in practice really hard to dial in because you're always dealing with the risk of hallucination and misfiring. And then you have potentially like a big thread. Imagine you have a school community for agents and all of them are looking at the board or the pinned posts and that's how they communicate. They communicate as comments on those pin posts. So in this case that you set up communication rules, how they can speak, how they can object, what happens when they have conflict with one another. In terms of message rules themselves, you either have to track numbers for each message. You create an expiration for each message. So let's say you have a conversation and you're now at 100 messages between all of the agents. You probably don't want to maintain or store the third message from a singular agent unless that's one of the only things it's set. If there are important messages, then you need a system to mark which one is important. So this is where you can get a lot of spaghetti where you have agents on tops of agents. Then you have language models assessing those agents. So the number of potential points of failure is very high. So what's interesting here is that you can even create a system where you can designate which agent is allowed to speak. Then you verify their identity. You check what they can or can't do. Depending on that, you can give them the green light for communication. They send a message, deliver it to a prescribed agent. The agent gets the message, processes that message, and then it determines, do I need to reply or do I need to execute the thing that the agent told me to do? But this is where it gets messy where you want to assess, do you have any problems? If so, you could have an endless loop and when do you stop that loop? If all the agents keep talking to each other and it just doesn't stop, you need some mechanism to make it stop. If an agent gets stuck, do you have a mechanism to unstick the agent? If it's stuck at firing a tool or it's stuck on one particular point that it keeps looping back to. If there are messages that are way too long, then maybe you remove those old messages from the context to keep it going. Then you alert a human. And this is again where human in a loop is very helpful because you might need one to just push the conversation along. Otherwise, if life is all good, you can keep going. You can save the conversation history. You can create an activity report. But genuinely looking at the system, I've never seen a company that has implemented this one at all, two properly, or three in a really scalable manner. This would make a really good YouTube video, but not a really good production system. So, in terms of when to use this, I would personally tell you you probably don't want to do this, even though it looks beautiful. It sounds great. Unless you're trying to build a prototype system of automating an entire company with just agents, I'm sure it's possible with some implementation. But you probably could do much more useful things with that time that are more deterministic and reliable because as language models change, you'd have to basically create your own framework for how all of these systems should work. I don't think you'll be able to pull something off the shelf like a crew AI and be like, "Cool, this is the system that we're going to depend our whole company on." If you are going to do it then enterprise level makes sense because you need tons of resources, engineers, you need proper production and for the other ones you can see here one of the use cases that popped up was smart city systems. So this is very complex. This is at a very very high level. Now the one key pro here I want to dial in on is fault isolation. So in this system if you manage it properly you can know exactly which agent is the culprit for a particular issue or what happens when all the agents go back and forth and have conflict. you can basically root everything that happens. Whereas in a real company, sometimes you can't pin down exactly why something didn't work. Was it a personnel issue? Was it issues within the personnel? You can't necessarily have full big brother intelligence over what's happening. But here you can. And the cons speak for themselves where you have a lot of complexity, a lot of debugging. You have to see all the states of the agents at a particular point in time. You have to keep track that the context of the conversation isn't getting overloaded, that the agents themselves are speaking the same language literally or at least the language that you've designated them to have. This next pattern might be new to a lot of you and it's called resourceaware optimization. What it means is analyzing a task complexity and then routing to appropriate resources. So simple tasks use cheap, fast models, but complex tasks use powerful but expensive models. Think of something like GPT5 where there was a huge uproar because we lost all of our models. Then we got either quick thinking, kind of thinking, hard thinking or like professional thinking. Each one of those would route your request in chat GBT to the model that it thought would be the best suited for that particular outcome. So the analogy here is a playful one where it's like choosing between walking, a bus or a taxi depending on the distance, the urgency or the budget. So you get a task and then based on that task's complexity, you set a budget. That budget could be a token limit, a time constraint, a money budget on how much you're willing to spend for that kind of inference or that kind of API. Then you have a router agent classify that complexity, whether it's simple, medium, complex, and if it's unknown, it has to run a quick test to maybe check the confidence of how sure it is as to whether it's simple or complex. If it's simple, then maybe it goes to a small model. If it's medium, then a standard model. And naturally, if it's more complex, then a reasoning model of sorts. And then once you execute the tasks, you monitor resources. You look at the token count and response time as well as API costs. Maybe you have some form of function that's keeping track of the rolling cost. And as long as it's within limits, then you're good to go. It keeps continue processing until the task is complete. And then you finally get whatever the outcome is, a report or something along those lines. And if you're not within the limit, then you need some form of optimization. So either you need to cut away from the context in your prompts for the agents or you need to take advantage of something called prompt caching where essentially you have a language model physically cache results for up to an hour. So you can keep referencing and sending that prompt over without having to send all that context over and over again. Then naturally, one of the best fallbacks would be just to switch to a cheaper model across the board. If you're finding that even your complex cases could be solved by potentially chaining multiple LLMs and this is where you start having a combination of design patterns where knowing about that prompt chaining in number one is helpful now because now you have different ways that you can pivot and implement your system. So this is useful to use when you have costs sensitive operations, high volume processing, or you have budget constraints and you have a very large system where you need to keep track of every single dollar being passed through because maybe you're running this at thousands or millions. And you won't most likely see this workflow for a momand pop business or a small medium business. This will be more enterprise and larger size platforms. The pro is naturally cost reduction. That was what all the uproar around GPD5 was is it was seen as a costcutting act to route as many requests as possible to the cheapest language model while still charging you that 20 bucks a month. So that was a pro. But in terms of the con is you have complexity increase. You have tuning challenges. It's hard to necessarily know how often it's going to go to simple versus complex. So your system and your rubric for what is complex and what is simple has to be really robust and iron tight. And at the same time, you'll still have edge cases. So what does that system that looks at confidence interval look like? All of this needs a lot of planning, a lot of resources, and a lot of testing. The next one are reasoning techniques. So this one in plain English means choosing the right method for the right problem. So chain of thought for step-by-step logic. Tree of thought, a very interesting technique. It's actually one of my favorite for different use cases that need creativity and imagination for exploring multiple paths. So this one is like solving a puzzle by trying different strategies until one finally works. So while you might not find this fun, I find this one particularly fun. So you have a complex problem and then you want to find a reasoning method to help you solve set problem. So you can either go sequential where you have chain of thought which is very similar to prompt chaining where you break it up into steps. You do step one, you think, you reason, then you conclude and then step two or the possible second path could be branching where you have tree of thought. Very interesting technique for you to take a look at. You generate literal branches of thought. You explore each one of those paths. You evaluate which one seems the most viable. And then you do what's called pruning. And pruning is essentially if you have many branches, you cut off the dead branches or the ones you want to be dead because you have a path forward you've decided on. And then you have a few other methods where you combine multiple of these methods and you combine it with self-consistency. You generate multiple solutions. So multiple solution paths and you score them. And then you have a few other ones where you have adversarial where you have a debate method where you have a proponent agent and an opponent agent. It's kind of like having your mini parliament where you have two agents go back and forth until one wins and exchange arguments and then based on those arguments you decide what is the best path forward. So the key thing here is that you basically do all of these and then you score all the solutions here and then based on the rubric that you come up with, you run tests, you validate logic, you rank the candidates of which method is the best based on your specific complex problem. You then select the best one and you can either combine all of them or you can create one single one. So you could say I just want to use tree of thought based on this rubric or you know what I think that I'll do the prompt chaining and then train of thought because I see some synergies here. Little disclaimer here is knowing exactly how these methods work is very fundamental to actually making this work. So this is on the end of the spectrum in my opinion. This is advanced. So in terms of when to use this, like I said, advanced technique. So only for very complex things, mathematical reasoning, strategic planning at scale if you really need it. But nine times out of 10, you won't need it. But this is a very interesting workflow to get into once you graduate to that level of prompt engineering. So out of all of these, one of the most interesting applications could be both legal analysis and medical diagnosis because some of these problems in both of these domains are very meaty and very complex and need very creative ways to break them down. The pros of this method is that you're very exhaustive and robust in your process. But the cons is that you have a lot of token consumption complexity. There is such a thing as overthinking with language models the same way that you and I can overthink as well. So that can increase your latency, explode your cost and combinations. So even though this is cool, it's not necessarily cool for every use case. It's not cool for 90% plus of use cases. To me, this is highly experimental and you do this if you have a lot of bandwidth or free time or willing to put some resources behind this to see whether or not it makes sense. This next one is about evaluation and monitoring. And we're finally back to normal English words that we can understand. So this is about setting up quality gates and golden tests before deployment and continuously monitoring accuracy, performance, cost and drift in production. And what drift is is when you have the same model or the same suite of models output one response but over time that response degrades or gets worse or more unpredictable. In terms of the analogy to conceptualize it, you can think of it as a factory quality control system that checks products at every stage. So you can imagine an assembly line where one person is taking care of the wheels or one person is taking care of the door and making sure that the actual cover of the car is proper etc. So how this could work is you could have some system deployed and then you define some quality gates. So the quality criteria could be accuracy metrics, it could be performance SLAs's, it could be compliance, it could be user experience. Then for each one you have the specific metric. So for accuracy metric there should be some golden test sets. For performance, it could be some performance benchmarks. And then you keep going depending on the specific type of metric. And depending on what you decide on, it could be all of them. You create a test suite where you do unit tests, contract tests, integration tests, you have some critical path tests. And this is very comprehensive again and very robust of a testing system. And you want to assess whether or not your case actually deserves something like this. And in terms of analyzing patterns, the whole point of this is to do things like detecting drifts, finding regressions from the mean, which means that if the mean is the average, if the average thing stops happening, and you find something that's two standard deviations or very different from what's expected, this is what's called a regression. And this also gives you the ability to look for anomalies, identify trends, and then you can set a threshold as to when you decide that any of these or all of these have failed. And if so, you can do something like alerting a team. They investigate the issue. Again, you have a human in the loop there. And you keep going. And ideally, you conduct periodic audits to make sure that your systems, your mechanisms, your evaluation sets all are up to date and as expected. So, this is definitely some form of quality assurance that you'd want to employ with production grade systems. And where this might make sense again is enterprise, SAS, healthcare, especially the finance industry might benefit from this and very large scale e-commerce. So, one of the biggest pros here is naturally that you have more reliability, but the corresponding con is not only alert fatigue, but also performance impact where you need a system that's so robust that can handle this level of scrutiny and testing on a very large scale. So, when I hear things like AI is going to take everyone's job, I start laughing because I don't know of a single AI framework that could do this kind of infrastructure setup at scale. I've never seen it. I don't think we will see it from just language models, at least for a long time. So guardrails and safety patterns are derivative somewhat of what we just saw before. So this one's about checking all the inputs for harmful content, personal info or injection attacks. So this is much more top offunnel of that entire infrastructure. So you're classifying risk levels and apply appropriate controls. So the main analogy here is airport security where you have multiple checkpoints where someone asks you for things like your passport, your boarding pass, and then as you go through their job is to make sure to look for threats. So when it comes to your input being received, you then have to sanitize that input. Then you want to check what that input is. Is it some form of personal identifiable information or PII, in which case you want to detect it and maybe redact it. So if it's someone's SIN number, maybe you take off the whole SIN number or you hash it or you replace all the numbers with apostrophes or asterisks or whatever, but you want to find a way to mask anything that's very secure that shouldn't be going into your system. The next one could be injection detection. They rhyme for a reason. So if someone's trying to break into your system, get access to your tables and doing something called like a SQL injection where they try to retrieve all the data in your tables of your application. And this could be related also to malicious content. So in both cases, you either want to filter this or you want to block it entirely. And this is where you do risk classification where you assess is this low risk, medium or high. And if it's high, nine times out of 10 you should involve a human in the loop. And then depending on the severity of low to medium then you could either process it normally or process it with additional conditions or constraints then you execute the task. You have some form of output moderation where you check the policies the ethical guidelines the compliance brand safety you create a safety score and then if that score is above a threshold then you have tool restrictions or you put it in a sandbox environment and then if there is nothing above the threshold then you just allow the input and the system keeps on going. So a system like this would be used especially when PR is on the line. Something public facing, a big system representing the government would be on the line. This is where you'd need all of these checks and balances to make sure that very few people can send an input that is malicious that won't be caught downstream in the system. Ideally, the more upstream you can find the issue, the sooner you can make sure that the rest of the system is not compromised. So from having built for enterprise, I can tell you that one of the best vectors for malicious injections is anything with an open text box or chat bots, which is why I typically recommend as well as my team that if you create an application that's customerf facing and you have thousands or tens of thousands of users, then doing a pre-prompted strategy is probably better where you have already canned responses or canned prompts you can click on where there's no open text box. you can only go through a series of clicking through a journey. The pros is you definitely get a lot more risk mitigation. This is better for compliance and brand protection and user safety most importantly. But the cons is you could have some false positives where things that look malicious aren't malicious and vice versa. You're obviously going to have some user frustration if the system is being adding way too much friction in the process. But you have to balance that level of friction with your need for safety, which obviously safety should take precedence. All right, we're almost there. This is the second last design pattern which is prioritization. So this is about scoring tasks based on value, risk, effort and urgency. So the strategy in this pattern is you build something called a dependency graph to understand what needs to happen first. What in sequence needs to happen before the next following actions can follow after. And if you want one of my beautiful analogies, it's like having an emergency room triage system that handles the most critical cases first, but it makes sure that everyone gets seen eventually. So basically you have a task and then you build this dependency graph and this is what it could look like where you have a task list. You have task one 2 3 4 all the way to not infinity but maybe 100 tasks. Then you score each task based on a series of scoring factors. So some of these factors could be dependency count. So how many things are affected by this thing being solved or not being solved. time sensitivity, effort required, risk level, business value, and all of them go together to get some form of overall priority score. Once you yield that priority score, that's where you have something where you multiply value and effort times urgency by risk. And obviously, you can make this priority formula whatever you want. But in this case, this is the template you can use to do that. So then you rank the tasks based on the scores. You have an initial order right here. Then you have a scheduling strategy where either you're doing something like load balancing, task aging, applying quotas, and depending on what it is we're actually applying this for, it goes through this process. It gets prioritized in a queue. Then you execute the top task, you go through, you then double check whether or not priorities have shifted after changing the first task. So once you execute the top task, you shouldn't necessarily go to the next sequence of events. You should assess whether or not there is a new priority. If there is a new priority, then maybe you push forward whatever was next. You save the state and then you go to the new event section. You recalculate the priorities accordingly. So to make this a lot more tactical and less airy fairy in the sky. Imagine you were starting your day out and your number one goal was to go to the gym, then come back home and eat, and then go to work. But what if you went to the gym, you left the gym, there was a huge accident on the highway or the street, and now you're an hour late. Maybe you skip going back home to nourish yourself and you go to a drive-thru along the way before you go to work. In this case, doing action number one presented environment number two where you had to reassess the state and then change the course of action. So, using that example as a segue, dynamic environments could be one major application of where this makes sense. where your initial plan might change because the first thing you do might cause a ripple effect of additional variables coming into the equation that change the next natural action that you should do. So this would make sense in task management systems, customer service, manufacturing, healthcare and devops. So the key value here is obviously adaptability and transparency. But the downside would be something like context switching where maybe you assess every single time especially if you're using generative AI based agents and it reassesses the next natural action or the new priority in a different light in one run versus the other run. So not having a deterministic way to assess whether or not you should go off course and reassess the priorities becomes the hardest part of the system, especially if the environment or the dynamic environment you're applying this in has edge cases and variables all the time. And last but not least, you have exploration and discovery where this in plain English is starting by broadly exploring the knowledge space across papers, data, and expert sources and identifying patterns and clustering them into themes. And this one is like a detective gathering clues from everywhere, finding patterns, then focusing on the most promising leads. So this one starts out with a research goal. Then from that goal, you explore your sources, whether it's domain experts, data sets, academic papers. Then you compile all that information into one spot. You map the what's called knowledge space. You identify the key areas of interest and then you go to cluster the themes. And what clustering means in plain English is that you have a series of data points that you can converge and bring together to be able to assess apples to apples, oranges to oranges and see if there are patterns are existing. Once you assess those patterns, you then go through some selection criteria. We look at some form of a novelty score, potential impact, knowledge gaps, feasibility. And the whole point of this is to pick where you should actually explore and you should target. And once you know that and you dial in, this is kind of like a research agent design pattern where it's just researching what is worth pursuing. And once you do that deep investigation, you extract some artifacts. These artifacts could be conceptual models, they could be expert contacts, they could be curated data sets, bibliographies, whatever it is contextually specific that you're doing. And once you synthesize these insights, you extract key insights, add some open questions, and maybe generate some hypotheses, you go through and loop until you come to a point where you conclude your exploration and you have a generated report if that is the output you're looking for. You document your findings and then you recommend the next steps. So if I zoom out for a second, you can imagine this as the system responsible for things like perplexity deep research, claw deep research. Anything that has to go the next natural mile will take 40 minutes, spin up multiple agents to execute that research and scope out what is worth looking at versus what's not worth looking at. Which citations are worth including in the final analysis versus not. So this is a full research agent design pattern. And with that, there should be no surprise that the best place to use this is for research projects as well as anywhere where you need to do some form of really detailed competitive analysis. And where it fits is research of all kinds including academic R&D departments. And one really cool use case is drug discovery. Now the key thing here is innovation enablement where the agent can decide what is worth pursuing or what topic and what angle of that topic is worth diving into. And then on the con side, the obvious con is that it's timesensitive, very resource heavy. There's a lot of generative AI being used here and also sifting through very large documents and zooming through to see what is relevant and what's not relevant. And I know this was a longer video, but now that sums up 20 different design patterns and there are 21 in the book itself, but I excluded MCPS just because I have covered it over and over again. But wait, we're not done yet. I do have a free gift for all of you. So, all of this work I put together is in this repository that I made available in the second link in the description below. It includes all the patterns I mentioned from this book as well as a series of aski art. And as art is one of my new things I'm nerding out on where it basically breaks down what this looks like step by step. And then if you go back to the last one, if you go to the mermaid diagrams, this covers a lot of the diagrams that I went through in detail. So you have access to everything that I put together and it will help you really level up your agentic understanding so you can apply this and be a master of the craft. Now if this very long video was helpful for you, it helped save you the time to read the book, then I'd super appreciate if you left a comment down below so that the algo can give this some extra love. And the best thank you you can give me is sharing this with someone else to increase the visibility of the video as well as the channel. And if you want to go even deeper on things like agentic patterns and prompt engineering and everything that's involved in becoming the super AI generalist of your dreams, then check out the first link in the description below. I run a community where I put my heart and soul and do all this kinds of stuff every single day pretty much. So check out that first link and maybe I'll see you inside. I'll see you in the next one.

## Timed Segments

[0:00] There are 20 agentic design patterns
[0:02] that separate pros from beginners. A
[0:04] Google engineer recently released a
[0:06] 400page book on agentic design patterns.
[0:09] And in this video, I&#39;m going to give you
[0:11] a summary of that book in plain English.
[0:13] I spent hours trying to simplify these
[0:15] architectures to make them as easy to
[0:17] understand as possible. No jargon, no
[0:19] theory, just practical patterns that you
[0:22] can use today. And each one of these
[0:23] patterns could solve an actual problem
[0:25] that you&#39;re facing right now. And if you
[0:27] watch till the end of the video, you&#39;ll
[0:28] have a deeper understanding of agentic
[0:30] structures and I&#39;m going to give you
[0:32] tons of stuff for free to help upskill
[0:34] you as well. So without further ado,
[0:36] let&#39;s dive into it. So I have 20 agentic
[0:38] patterns that we&#39;re going to dive
[0:39] through today. And each one has a set of
[0:42] visuals. So it&#39;s not going to be some
[0:43] clear-cut and dry just plain text. We&#39;re
[0:46] going to walk through actual workflows
[0:48] where I did my best to label what would
[0:50] happen in each pattern in plain English.
[0:53] And the first one we&#39;re starting with is
[0:54] prompt chaining. Now, for each one of
[0:56] these, I&#39;m going to give you a summary
[0:57] TLDDR, too long, don&#39;t read of what is
[1:00] involved in this design pattern, and
[1:02] then I&#39;ll walk through very quickly when
[1:04] you could use it, where you could use
[1:06] it, the pros and cons, and some actual
[1:08] applications for that pattern. And my
[1:10] idea is whether you watch this or you
[1:12] take the transcript of this video, you
[1:13] could essentially feed your Claude code
[1:15] or your cursor or where have you this
[1:18] transcript and it would understand which
[1:20] pattern it should employ for what kind
[1:22] of problem. So prompt chaining is where
[1:23] you break a big task into smaller steps
[1:26] and you run one after the other. And the
[1:28] good thing about prompt chaining is it
[1:30] gives multiple areas to basically catch
[1:32] a failure before it happens because each
[1:35] step in that chain, that&#39;s why it&#39;s
[1:36] called a chain, validates the output of
[1:38] the one before it before it passes data
[1:40] to the next one. So you can think of it
[1:42] like an assembly line where each station
[1:44] completes its part, checks quality, then
[1:46] hands it off to the next section. So
[1:48] tactically you would have some form of
[1:50] user input and then that user input
[1:52] would be broken down into subtasks. Once
[1:55] the data contracts or contracts between
[1:57] these tasks are created then you go and
[2:00] execute task one. Then when you go
[2:02] through executing task one you want to
[2:04] validate the output of task one. So task
[2:07] two will now validate first that the
[2:09] test passed or the data actually passed
[2:11] properly from output one and then we go
[2:13] to output two and it keeps going and it
[2:16] if it fails it retries until it finally
[2:18] passes and in this case we only go
[2:20] through three executions but
[2:22] theoretically prompt chaining could be
[2:24] infinite assuming your budget is
[2:25] infinite for LLM costs but there is
[2:28] diminishing returns so if you put 50
[2:30] different language model chains together
[2:32] at some point you&#39;re either adding too
[2:34] much or you&#39;re basically pushing it to
[2:36] the limit where it starts hallucinating
[2:37] on something it wouldn&#39;t have
[2:38] hallucinated before. It starts to
[2:40] overthink. So there is a magic number
[2:43] depending on your workflow where it
[2:44] could be from three to five different
[2:46] parts of that chain where it&#39;s good
[2:48] enough to do that validation. And the
[2:49] idea is is that you merge all the
[2:51] results. You assemble the final output.
[2:53] You log all the artifacts. So anything
[2:55] that happened throughout the entire
[2:56] chain. So if something does go wrong or
[2:59] your output looks a little bit
[3:00] suspicious, you can go back through the
[3:02] entire chain and see exactly where that
[3:03] happened. So in terms of when to use, I
[3:05] use prompt chaining a lot in all kinds
[3:07] of flows, whether it be an automation,
[3:09] an agentic automation or both. And you
[3:11] can think of it as very useful with
[3:13] complex multi-step processes, data
[3:16] transformation. So imagine you have
[3:18] really dirty data or data that&#39;s just
[3:20] not standardized or fully structured.
[3:22] You could have a pipeline with a mix of
[3:24] generative AI and non-generative AI. So
[3:26] let&#39;s say Pythonic or JavaScript where
[3:29] it goes through and each part has a
[3:30] pass. So let&#39;s say you had awful
[3:32] columns. they&#39;re not properly labeled.
[3:34] Step one could be let&#39;s label all the
[3:36] columns based on the first couple rows
[3:38] of data using Genai and then assuming
[3:40] that it makes sense it passes it goes to
[3:42] the next step where now maybe we clean
[3:44] and make sure that each row has the
[3:46] proper type of data in the right
[3:48] expected structure and these multi-step
[3:50] processes is where prompt chaining can
[3:52] help a lot. So given that it&#39;s helpful
[3:54] for things like document processing data
[3:56] ETL code generation and one that&#39;ll
[3:59] basically reemerge over and over again
[4:00] is content creation. A lot of these
[4:02] design patterns depending on your flow
[4:05] for content creation is very helpful. So
[4:07] the pro of using this design pattern is
[4:09] it&#39;s modular, meaning you can swap in or
[4:11] swap out different parts of the chain
[4:13] and not necessarily break the entire
[4:14] flow, assuming that the chain you input
[4:17] is very similar to what is expected from
[4:20] the other parts of that chain. But one
[4:21] of the major cons for this is context
[4:23] explosion. And this is essentially
[4:25] because you&#39;re going from maybe step one
[4:27] to step seven. And what if you were
[4:30] carrying over all the context from step
[4:32] one all the way to step seven? So you
[4:34] could theoretically have a lot of data
[4:36] depending on what kind of structure this
[4:37] data is. So imagine it&#39;s JSON,
[4:39] JavaScript object notation or something
[4:42] that&#39;s a payload structure. Those are
[4:44] very expensive on the token side. So if
[4:46] you keep looping those and adding it to
[4:48] the next part of the chain, you can now
[4:50] end up at step seven where you have all
[4:52] of this context and all the prompts and
[4:54] now your new prompt for step seven and
[4:56] now the likelihood for hallucination
[4:59] could beat or defeat the whole purpose
[5:01] of doing this to begin with. And the
[5:02] next thing is if your prompts are not
[5:04] very well tested, then it could pass. So
[5:06] let&#39;s say you go from chain one to chain
[5:08] two to chain three and somehow it
[5:10] passes, but there&#39;s an actual error or
[5:13] it shouldn&#39;t have passed to begin with.
[5:14] So that&#39;s a prompting issue. You then
[5:16] have error propagation where every
[5:19] single node or every single part of that
[5:20] chain is inheriting the first mistake
[5:22] you made. And obviously this is going to
[5:24] be slower because you have multiple
[5:26] points of inference which in plain
[5:27] English means multiple points where a
[5:29] language model is going to have to be
[5:30] intervening. So you have to wait for
[5:32] that to run before the next step. And
[5:33] then applications of this could be legal
[5:35] document analysis, e-commerce product
[5:37] descriptions, academic research
[5:39] assistance and anything related to
[5:41] report generation. The next design
[5:42] pattern is routing. And routing in plain
[5:45] English is where you have incoming
[5:47] requests that get analyzed and sent to
[5:49] the right specialist agent based on what
[5:51] they need. And you can think of it like
[5:53] a smart receptionist or an operator who
[5:55] listens to what you need and directs you
[5:58] to the right person or the right
[5:59] department depending on tech support,
[6:01] accounting, etc. And the key thing here
[6:03] is if the operator is unsure, they
[6:05] should go back and ask you some more
[6:07] clarifying questions to better
[6:08] understand where to route that request.
[6:10] So using that as a segue, you have a
[6:12] user request. The AI then analyzes the
[6:15] intent and the context behind that
[6:18] request. So once it does that, it has to
[6:20] make a decision and that decision will
[6:21] be whether or not it should be going to
[6:23] the technical support agent, the sales
[6:25] agent, the account management agent or
[6:28] any of the other agents in your
[6:29] workflow. And if it doesn&#39;t know, the
[6:31] key thing here is it&#39;s going to request
[6:33] clarification until the confidence is
[6:35] higher. Now confidence could be a number
[6:37] generated by an LLM where it goes
[6:39] through the decision and you ask in the
[6:41] prompt out of 10 tell me how sure you
[6:43] are. Now again you open yourself up here
[6:45] to hallucination because what if it says
[6:47] it&#39;s an eight but actually meant six and
[6:49] if you ran it again it would have been
[6:51] five or six. So in this case it could be
[6:52] helpful to add something deterministic
[6:55] where you have something statistical
[6:56] that takes a look at the decisions and
[6:58] assesses it in some way that gives you a
[7:00] number that you can rely on to go back
[7:01] in that loop. And once you get a
[7:03] response from any of the agents that it
[7:04] ends up routing to, it goes to either a
[7:07] success or a failure. And then it comes
[7:09] to some form of decision and delivers
[7:11] the end result. Whether that be a piece
[7:13] of information, a summary or what have
[7:15] you. This makes sense when you have
[7:16] multiple domains. So you have like we
[7:19] said technical, we have accounting, we
[7:21] have finance, we have different
[7:23] departments or specializations for our
[7:25] agents that we&#39;d have to basically
[7:27] distribute to. And it&#39;s also helpful
[7:28] because if you have a specific tool that
[7:31] can only or should only be invoked with
[7:33] a specific path or a specific
[7:35] department, this is helpful to segregate
[7:37] all those different paths. And it&#39;ll
[7:39] also help prevent misfires where an
[7:41] agent uses a tool it shouldn&#39;t have used
[7:43] or thought it should have used or ends
[7:45] up doing a whole process without
[7:47] executing the very tool it needed to
[7:49] come to that conclusion. which if you
[7:50] use something like NAD, you&#39;ll notice
[7:52] all the time if you actually watch
[7:54] what&#39;s happening with the AI agent node,
[7:56] it will sometimes use a tool then not
[7:58] use the tool then decide to end up using
[8:00] the tool last minute and then you get
[8:01] the end result assuming that the whole
[8:03] process was correct to begin with. So
[8:05] like the example, this is great for
[8:07] customer service, enterprise automations
[8:10] and healthcare triage, especially if you
[8:12] have some form of healthc care front-end
[8:14] receptionist that is a voice agent that
[8:16] takes calls and it either routes it to a
[8:18] specific department. It basically does a
[8:20] booking or does something along the
[8:21] lines of answering questions on when are
[8:23] you open, what services do you have? So,
[8:25] these could be different parts of that
[8:27] specific chain. The pros here is that
[8:29] you have specialization, scalability,
[8:31] and efficiency. But on the con side,
[8:34] because you have multiple possible
[8:36] paths, you can always route to the wrong
[8:38] path. And in the real world, it&#39;s less
[8:40] likely for that to happen because if you
[8:42] have someone on the phone asking you
[8:43] clarifying questions, they literally
[8:45] won&#39;t let you pass until they know
[8:47] exactly where to route you. And if they
[8:48] don&#39;t know, they&#39;ll probably ask their
[8:50] manager. So with that same analogy, it
[8:52] might make sense to add to that workflow
[8:55] some form of manager agent that assesses
[8:57] the decision of the initial agent. But
[9:00] one of the many things to look out for
[9:02] is this specific one here, which is
[9:03] being prone to edge cases. So you could
[9:06] have a case that comes out of nowhere.
[9:08] And it&#39;s good to have some form of
[9:10] confidence interval or confidence
[9:12] marker. So you can basically quarantine
[9:14] or add in a human in the loop if there&#39;s
[9:16] one case that just can&#39;t be properly
[9:18] tagged. And again, one of the best
[9:20] applications for this is likely in
[9:21] customer service or anything that&#39;s
[9:23] front-facing from a business standpoint.
[9:25] Now, the next one is parallelization,
[9:27] which in plain English means splitting a
[9:30] large job into independent chunks that
[9:32] can be processed at the same time by
[9:34] multiple workers. And when we say
[9:36] workers here, that is a proxy for
[9:39] agents. And the analogy here is like
[9:40] having 10 people each read different
[9:43] chapters of a book simultaneously, then
[9:45] combining all the summaries at the end.
[9:47] So each one works on one separate
[9:48] chapter, then we put it together to
[9:50] create the book. In practice, this looks
[9:52] meaty, but it&#39;s actually not too
[9:53] difficult. So you have some form of
[9:55] large input. Then that input is
[9:57] analyzed. Then that analysis determines
[10:00] how you&#39;re going to split that big task.
[10:02] So imagine you&#39;re working at a company
[10:04] and the CEO of that company tells you go
[10:07] and reduce our customer churn for our
[10:09] SAS platform by 20%.
[10:12] Now that 20% is a huge ambitious goal
[10:15] and what you have to do is take that
[10:17] goal break it down into independent
[10:19] units in this case subtasks that can
[10:22] lead to accomplishing that goal. So for
[10:24] example you could run some form of
[10:25] survey across those customers to see why
[10:28] are people leaving. Maybe you have some
[10:30] exit interviews so you have a better
[10:31] understanding of why or what problems
[10:34] might lie in the underlying SAS
[10:35] platform. In the same way, the agent
[10:37] here has to check resources, see what
[10:39] resources it has available to it, and
[10:42] then once it sees what it&#39;s dealing
[10:43] with, it can spawn up parallel workers.
[10:46] And each of these workers can work on
[10:48] subtasks that lead to accomplishing that
[10:51] bigger goal. So you can think of each
[10:52] one of these workers as employee agents
[10:55] where each one retries and works until
[10:57] it succeeds its specific task. And if it
[11:00] fails, it keeps going in a loop until it
[11:02] goes through. And then once you collect
[11:04] all the results from all of the workers,
[11:07] you then normalize them, which just in
[11:09] plain English means you make them into a
[11:11] same format. So it&#39;s like having apples,
[11:14] oranges, and pineapples. You want to
[11:15] make sure that all of them are apples or
[11:17] all of them are pineapples or all of
[11:19] them are oranges. And then you merge
[11:21] those results. You simplify it to a
[11:23] single output. Then you generate a
[11:25] summary. And what providence here is
[11:27] like you&#39;re citing which parts of this
[11:30] final output came from which workers. So
[11:32] if you understand where the failure
[11:34] point is, you can go and have a
[11:36] conversation with that specific worker,
[11:38] which in this case means adjusting the
[11:40] prompt or adjusting the system for that
[11:42] worker to make sure you get the right
[11:44] coordinated result. So this is helpful
[11:46] to use with largecale data,
[11:48] time-sensitive operations where you need
[11:50] to break something down very quickly and
[11:52] you want some way to draft some agents
[11:54] to help you break it up. And then web
[11:56] scraping is a good example cuz web
[11:58] scraping has multiple processes. You can
[12:00] go on a page, inspect the elements, see
[12:03] whether or not it&#39;s HTML or how you want
[12:05] to use JavaScript. Then you break it
[12:07] down into different processes. Maybe you
[12:08] crawl different pages. So you can think
[12:10] of a very meaty process in this regard.
[12:13] where it fits are things like document
[12:14] processing, data enrichment, research
[12:17] automation, and testing frameworks. And
[12:19] in terms of the pros and cons if you put
[12:21] them side by side. So pros are, like I
[12:23] said before, specialization, it can
[12:26] scale because technically like a
[12:27] company, you can keep adding more
[12:29] employees, but in this case, you don&#39;t
[12:30] need to raise venture capital funding to
[12:32] do that. You can just add more
[12:34] resources. But you&#39;ll see this con
[12:36] happen over and over again in these
[12:37] agentic design patterns where as you add
[12:39] more employees naturally a normal
[12:41] company it adds more complexity adds
[12:43] more layers adds more drama you might
[12:45] need to hire HR so in the same way you
[12:47] might need to bring in an agentic
[12:49] version of HR to now manage these
[12:50] workers better and then obviously
[12:52] unifying all of the outputs from the
[12:54] workers sounds easy when I say it but
[12:56] when you&#39;re tactically doing this in the
[12:58] real world it&#39;s sometimes hard to equate
[13:01] or equalize all of those same parameters
[13:03] and variables. So from the real world
[13:05] applications, I would say the news
[13:06] aggregation service is the one I&#39;ve seen
[13:08] as well as document intelligence systems
[13:10] as well. The next one is reflection. And
[13:12] reflection is exactly what you would
[13:14] anticipate it to be where you generate a
[13:16] first draft, then you have a critic
[13:18] review it against quality standards and
[13:20] then based on the feedback, you revise
[13:23] and you improve. And you essentially
[13:25] repeat this until you meet your quality
[13:27] standards. So the analogy here would be
[13:28] like writing an essay, having a teacher
[13:31] review it for you, and then making
[13:32] improvements until you finally get a
[13:34] passing grade. In terms of general
[13:36] structure, not too tricky. So you have
[13:37] some form of initial request, you
[13:39] generate a first draft, then you have
[13:41] initial output, then you have this
[13:43] critic agent that goes through the
[13:45] output and assesses what needs to happen
[13:47] to make this better. So in this case, we
[13:48] could apply quality rubrics where you
[13:50] literally create a rubric for this agent
[13:52] to assess the output. You run unit tests
[13:55] which are predisposed tests that you&#39;ve
[13:58] put together for edge cases and things
[14:00] that you&#39;re looking for. And then let&#39;s
[14:02] say it is the essay example. In this
[14:03] case, it would be grammar and logic
[14:05] check. So assuming that all of these
[14:06] pass and meet the quality bar, then if
[14:09] it meets the criteria, we go down this
[14:10] path here. You accept the output. You
[14:13] record success patterns. You update any
[14:15] prompts or rules if anything&#39;s needed
[14:16] and you&#39;re good to go. But if it doesn&#39;t
[14:18] pass, then you generate some structured
[14:20] feedback. Very similar. So imagine
[14:23] having one agent generate structured
[14:25] feedback that goes back into that loop
[14:27] to the original agent and goes back and
[14:29] forth until you finally reach all of
[14:31] those quality standards. Now let&#39;s say
[14:32] there&#39;s a fundamental flaw in your
[14:34] workflow or automation you&#39;re building.
[14:36] You then have to ideally have a max
[14:38] count. So loop through until you meet
[14:40] the standards. You have three times very
[14:42] similar to school where you couldn&#39;t
[14:44] endlessly submit an essay in like grade
[14:46] five or six. You would have maybe one or
[14:48] two tries and then after that the grade
[14:50] is the grade. So when to use this is if
[14:52] you have to really keep track of quality
[14:54] control and you have complex reasoning
[14:56] tasks or tasks that are more creative
[14:59] where you want to use the chaotic
[15:00] feature of a language model but you
[15:02] don&#39;t necessarily want to have a chaotic
[15:04] result that&#39;s unpredicted every single
[15:06] time. Where this fits is anything around
[15:08] really content generation. So content
[15:11] legal academic writing product
[15:13] descriptions for products. So imagine
[15:14] you had an agentic system. You have an
[15:16] Amazon FBA store. you have thousands of
[15:19] products, you&#39;re trying to find ways to
[15:20] write descriptions for each one of them
[15:22] that&#39;s not formulaic and AI slop. This
[15:24] could be an example where you adjust and
[15:26] use this pattern. The pros is
[15:28] essentially you&#39;re focusing on quality,
[15:30] which is awesome. What is not awesome is
[15:33] the cost. Any form of API throttling. So
[15:36] let&#39;s say you&#39;re ripping requests over
[15:37] and over again for each product and you
[15:39] have 10,000 products and you&#39;re running
[15:41] them all at the same time. You can have
[15:43] ways where the API will just time out.
[15:45] So this specific pattern needs a lot of
[15:47] planning. And like I said, anything
[15:48] related to content generation is where
[15:50] this would be really helpful. So the
[15:51] next one is tool use. And this one is
[15:53] straightforward as well. So when the AI
[15:55] needs external information or actions,
[15:57] it discovers available tools, checks
[15:59] permissions, and then calls the right
[16:01] tool with proper parameters. So it&#39;s
[16:03] like a chef who needs ingredients,
[16:05] checks what&#39;s available in the pantry,
[16:07] then verifies they can use it, and then
[16:09] retrieves and actually uses it in the
[16:10] recipe. So tactically, you have a user
[16:12] make a request. You analyze those
[16:14] specific requirements. you discover what
[16:16] tools you have available. So in this
[16:18] case, let&#39;s say we have an agentic tool
[16:20] that has access to the web search API,
[16:22] database query tool, calculator
[16:25] function, file system access, and other
[16:27] APIs. We then select which tool should
[16:30] be used. And this alone can be tricky
[16:32] depending on what kind of generative AI,
[16:34] if you&#39;re using a reasoning model or
[16:36] what have you. And then you match the
[16:38] capabilities to the need. So you do a
[16:40] safety check. Did I basically choose the
[16:42] right tool for the job? If it passes,
[16:45] you prepare the tool call. You execute
[16:47] the tool call. If it doesn&#39;t work for
[16:49] whatever reason, again adding some logic
[16:51] here as to whether or not or how many
[16:54] times it should loop through. And then
[16:56] as you go through, you have the parse
[16:58] tool output. You have a fallback method.
[17:01] You can do normalization with the
[17:03] language model where you have the
[17:04] language model take the outputs of this
[17:06] automation and then basically configure
[17:09] in a way or format it in a way that&#39;s
[17:11] easier for it to interpret or use. Now,
[17:12] if you don&#39;t use the right tool and you
[17:15] fail, then ideally there&#39;s some form of
[17:17] reason. So, you deny access to using the
[17:19] tool with a reason saying you use the
[17:21] wrong tool and let&#39;s log this so that
[17:24] someone like me can intervene and add
[17:26] some more flavor and change the
[17:28] structure of the agentic workflow to
[17:30] work a little bit better. So, tool use
[17:31] is used all over the place. So, the
[17:33] applications are endless. So, I won&#39;t
[17:35] touch on that too much, but anywhere
[17:36] where it&#39;s multi-step is much more
[17:38] helpful. where it fits, research
[17:40] assistance, data analysis, customer
[17:43] service, content management, and in
[17:44] terms of pros and cons, you have the
[17:47] quality improvement, you have error
[17:48] reduction, and on the con side, you
[17:51] have, like we said before, if we have a
[17:53] misfire and we use a tool and it says it
[17:56] passed, but it shouldn&#39;t have passed,
[17:58] then you carry that same mistake over
[18:00] through the entire workflow. So you can
[18:02] think of this as starting a math
[18:04] equation back in elementary school and
[18:06] you&#39;re doing division and you divide
[18:09] incorrectly in step one. Everything you
[18:11] do after that point will be wrong
[18:13] because your essential first step was
[18:14] wrong too. Now for the rest of them
[18:16] since you&#39;re getting the gist of this
[18:17] I&#39;m going to just glance through the
[18:19] real world applications. You&#39;ll
[18:20] basically get it into where it fits.
[18:22] Planning straightforward again where you
[18:24] have some form of big goal and you
[18:26] create a step-by-step plan. This is what
[18:28] I do personally when I use things like
[18:30] clawed code or cursor. I don&#39;t write
[18:32] code for like 40 minutes or AI doesn&#39;t
[18:34] write code for 40 to 50 minutes. I plan
[18:37] and plan and plan until it&#39;s ready to go
[18:39] and I know exactly what&#39;s going to
[18:40] happen. Then I let it run. And even
[18:43] then, sometimes the AI manages to still
[18:45] hallucinate some parts, but it&#39;s a much
[18:47] better way to compartmentalize
[18:49] everything you&#39;re trying to do and
[18:50] execute it in the most efficient way
[18:52] possible. So this one is like planning a
[18:53] road trip with checkpoints, monitoring
[18:56] traffic and routing where needed. So in
[18:58] this case, you have some form of goal
[19:00] input and then you break it down into
[19:02] milestones. You create what&#39;s called a
[19:04] dependency graph and then you check your
[19:06] constraints. So in this case, if it&#39;s
[19:08] data oriented, it could be data
[19:09] availability. It could be authorization,
[19:12] could be budget limits, could be
[19:13] deadlines of any form. And then you
[19:15] generate a step-by-step plan. You assign
[19:18] which agent or agents should be used and
[19:21] what tools of those agents and then you
[19:23] just go and execute each step. So
[19:25] similar structure to prompt chaining
[19:27] except you&#39;re not necessarily carrying
[19:29] over the output of the previous one to
[19:31] the next one. You&#39;re basically going
[19:32] through sequentially until you get to
[19:34] step number n. N could be six steps, 10
[19:37] steps. You track your progress and
[19:39] assuming your goals are met, then you go
[19:42] through the acceptance criteria and
[19:43] you&#39;re good to go. Otherwise, like we
[19:46] said, you&#39;re going to see this theme
[19:47] recurring. You have some form of backup
[19:49] where if this doesn&#39;t work, you analyze
[19:52] what happened and assess whether or not
[19:54] there&#39;s new information. If so, if this
[19:57] is an edge case, like I said before,
[19:58] maybe it deserves a human in the loop.
[20:00] Otherwise, you want to escalate that
[20:02] issue, handle the exception, and then
[20:04] you&#39;re good to go. So, this is
[20:05] especially helpful with things like goal
[20:07] oriented workflows where you have again
[20:09] ambitious goal, but you want to break it
[20:11] up into substeps to get to that goal. So
[20:13] this is good for project management,
[20:15] software development or research
[20:17] projects. And in terms of the pros and
[20:19] cons, the big pro is that you have very
[20:22] strategic execution because the more
[20:23] time you spend planning or the more time
[20:25] the agent spends planning, it has more
[20:28] clarity on exactly what it should do.
[20:29] And by nature of that, it makes your
[20:31] entire workflow or automation a lot more
[20:34] adaptable to new variables, new
[20:36] environments. The biggest con though is
[20:37] the setup and the complexity and
[20:39] coordinating all those agents to make
[20:41] sure that each one has the right tool,
[20:44] each one has the right system prompt and
[20:46] that you have the proper fallback
[20:47] mechanism if things don&#39;t go right. This
[20:49] next one is multi- aent collaboration
[20:52] and this is one that you would expect
[20:53] and you see all the time especially with
[20:55] those humongous anend workflows with
[20:58] seven agents, six sub agents and you
[21:00] have that whole network. So the crux of
[21:02] this one is that you have multiple
[21:03] specialized agents working together on a
[21:06] different part of a complex task
[21:08] coordinated by some central manager. In
[21:10] many cases they share a common memory
[21:12] which is important here because if you
[21:14] share a common memory then your memory
[21:16] mechanism whatever that is an MCP server
[21:19] any form of function has to be well
[21:22] structured so that all the memories
[21:24] don&#39;t overlap but you focus on the
[21:25] proper memories that need to persist.
[21:27] And my analogy here is like having a
[21:28] film crew where the director coordinates
[21:30] while camera, sound, and lighting
[21:32] specialists each handle their part
[21:34] sharing the same script and timeline. On
[21:36] the multi- aent side, you have some form
[21:38] of complex task and then because of that
[21:40] task, you have to define specialist
[21:43] roles. So you might have an agent that
[21:45] literally just decides what other agent
[21:47] should be chosen which is similar to the
[21:49] idea before where we had that operator
[21:51] but in this case the operator has to be
[21:53] an agent where depending on what we&#39;re
[21:55] looking for in the task it decides okay
[21:57] let&#39;s use a research agent or the
[21:59] analysis agent or what have you and then
[22:01] in your infrastructure you should have
[22:03] some form of shared resources whether
[22:05] that be shared memory stores artifacts
[22:07] version control and then once you have
[22:09] the coordination protocol as it&#39;s
[22:11] referred to you have your orchestrator
[22:13] ator go through and then the coordinator
[22:16] manages the flow. It assigns it to each
[22:19] agent. It assigns each task to the right
[22:21] agent. So imagine you had a a sauna
[22:23] board or a Jira board and you have a
[22:25] bunch of tickets. The coordinator is
[22:27] essentially tagging each ticket to one
[22:30] or more agents and after each one
[22:32] finishes they have some proverbial
[22:34] contract until they go to the next agent
[22:37] and each one goes through checks off and
[22:39] the contract again using my analogy of
[22:41] tickets. Each ticket on a project
[22:43] management software has criteria,
[22:46] acceptance criteria. Assuming that
[22:48] acceptance criteria has been met, then
[22:50] you can go to the next stage. And then
[22:51] there&#39;s an overall acceptance test. If
[22:53] it passes, you&#39;re good to go. If it
[22:55] fails, maybe you go and run a
[22:57] simulation. You loop back. You make sure
[22:59] and see where did the coordination fail.
[23:01] And again, you can set some form of max
[23:03] here where it doesn&#39;t keep retrying for
[23:05] infinity. So out of all of these, one of
[23:07] the best applications of this is for
[23:08] iterative refinement, which really lends
[23:10] itself well to AI or general product
[23:14] development where there&#39;s multiple
[23:15] phases, multiple tickets, and then
[23:18] different ways to solve the same
[23:19] problem. So software development,
[23:20] product development, financial analysis,
[23:22] content production or creation and
[23:24] research projects is where this shines.
[23:26] And in terms of the pros and cons, the
[23:29] pros like before you have the ability to
[23:31] specialize and you have parallel
[23:33] processing. But on the con side, once
[23:35] again, all of these systems need to be
[23:38] set up and tested and tested over time
[23:40] as these language models evolve and
[23:42] drift. The last section acts as a great
[23:45] segue for memory management where this
[23:47] is classifying incoming information as
[23:50] short-term conversation, episodic
[23:52] events, or long-term knowledge. And you
[23:54] store each type appropriately with
[23:56] metadata like recency and relevance. And
[23:58] this is exactly how your brain keeps
[24:00] track of things briefly. Some like
[24:02] specific memories or permanent
[24:04] knowledge, things that you will never
[24:05] forget. And one thing I would say here
[24:06] is that there are so many tools and MCP
[24:09] servers trying to solve this. And I&#39;ve
[24:11] yet to find something perfect because I
[24:13] noticed that depending on what you&#39;re
[24:15] trying to build agentically, memory
[24:17] management is really contextually
[24:19] specific on what you&#39;re trying to
[24:20] remember and what is not worth
[24:22] remembering. But the main idea is you
[24:23] have some form of user interaction. You
[24:25] capture information and then you decide
[24:27] what kind of memory would this be? Is
[24:29] this something I have to remember in the
[24:30] long run? Is this short-term memory? Is
[24:32] this knowledge that I have to store in
[24:34] perpetuity forever? So is this episodic
[24:37] memory? Is this long-term memory? Is
[24:40] this something I&#39;m just going to keep
[24:41] for the remainder of this session? So
[24:43] that&#39;s why it says here, is context
[24:44] window full? If yes, then you compress
[24:47] whatever it is you&#39;re trying to remember
[24:49] or you compress your existing memories
[24:51] because you don&#39;t have to hold on to
[24:52] them anyway after the session. Now, if
[24:54] you do need to store them, then you need
[24:55] to index them and then add metadata, add
[24:58] a recency score, create frequency or
[25:00] topic tags so it&#39;s easy to retrieve
[25:02] those. Think of something like a vector
[25:04] database of sorts where you need some
[25:06] way to generate your top five results.
[25:09] based on a single question. And on the
[25:11] shorter term memory side of things, you
[25:13] want to retrieve a memory if it&#39;s
[25:14] relevant. You want to query your memory
[25:16] store. Maybe you want to apply some
[25:18] filters by rule, time horizon, or topic
[25:21] match. Then you pick the right memories
[25:23] that you should use. And then you
[25:25] process the request. And if privacy is
[25:27] an issue, this is where you deal with
[25:29] that. Whether you redact anything from
[25:31] that memory or you save a different
[25:34] version of that memory, then if so, you
[25:36] update your memories and then you
[25:37] continue the interaction. So this is not
[25:39] a a gentic pattern of its own. This is
[25:41] more so a subset of where you&#39;d use it
[25:44] in other gentic patterns. So the main
[25:46] use case with long-term memory
[25:48] management is conversational continuity.
[25:50] So ideally if you talk to Claude, you&#39;d
[25:52] be able to have that conversation with
[25:54] Chad GBT with the exact same context
[25:56] without having to reexlain who you are,
[25:59] what you do, or what you&#39;re trying to
[26:00] accomplish. This is awesome for
[26:02] experiences that require tailoring. So
[26:04] customer service, personal assistance.
[26:06] I&#39;d say the biggest application that I
[26:08] could see is educational assistance or
[26:10] platforms where they learn that you
[26:13] struggled with concept A. So when you go
[26:15] to concept B, it knows that you have a
[26:17] weakness with concept A. So it basically
[26:19] overexlains parts of concept B that are
[26:22] dependent on understanding concept A.
[26:23] The pro is obviously context
[26:25] preservation over time. But on the con
[26:27] side, you want to make sure that as you
[26:28] store memories, you&#39;re not compromising
[26:31] security. You&#39;re not over storing
[26:33] memories. You have a way to flush out
[26:34] older memories or you have a system to
[26:36] determine when a memory is indeed old.
[26:39] The next one is learning and adaptation
[26:42] where this is collecting feedback from
[26:44] user corrections, ratings, and outcomes.
[26:46] You want to clean and validate the data
[26:48] to remove noise and then you use it to
[26:50] update prompts, policies, or examples.
[26:53] It&#39;s like adjusting a recipe based on
[26:55] customer feedback and taste tests. So
[26:58] essentially, you&#39;d have some form of
[26:59] system operation and you collect
[27:01] feedback from a feedback source. That
[27:03] could be some form of correction from a
[27:05] user, quality ratings, automated
[27:07] evaluations, or some form of rubric or
[27:09] task outcomes. You then take these
[27:11] quality signals or these feedback
[27:13] signals. You do a quality check and then
[27:16] you either dn noiseise it, you clean it.
[27:18] If it&#39;s something malicious, like you&#39;re
[27:19] a restaurant and they say there&#39;s
[27:21] cockroaches everywhere, but there&#39;s not
[27:22] a cockroach in sight. So, you maybe
[27:24] disregard but you log that specific
[27:26] review. Additionally, you want to make
[27:28] sure that your main system doesn&#39;t have
[27:29] any fluff or noise in it. So, you go
[27:31] through this process and then you decide
[27:34] how is this going to be quote unquote
[27:35] learned? Am I going to update the
[27:39] prompts associated with my workflow? Am
[27:41] I going to update my policies examples
[27:43] in the prompts? If you&#39;re doing a
[27:45] multi-shot prompt, am I going to update
[27:47] existing preferences in the tool or
[27:49] product itself? Am I going to fine-tune
[27:51] a model? This is very rare that you&#39;d
[27:53] want to do that, but it is an option
[27:55] that you can use. Then after this, you
[27:56] do some form of AB testing. you monitor
[27:59] the performance after taking in the
[28:00] feedback to see has this course
[28:02] corrected this agent to do a better job
[28:05] at whatever. So naturally this is a
[28:07] great system to use if you need feedback
[28:09] incorporation and you need to have some
[28:11] way to have a feedback loop and stimuli
[28:13] taken into the system so that the system
[28:15] learns in whatever way learning is for
[28:18] you whether it&#39;s the prompt itself or
[28:20] the knowledge base or any form of policy
[28:22] that your agents adhere to. So where it
[28:24] fits is similar to memory management
[28:26] anywhere where there is a tailored
[28:27] service where you are receiving feedback
[28:30] from a customer or an avatar. So the pro
[28:32] and con is that you have continuous
[28:34] improvement but on the con side you have
[28:36] training costs right. So every single
[28:38] time you&#39;re updating a prompt you&#39;re
[28:40] having probably a language model do
[28:41] that. So these things become a
[28:44] combinatorial cost problem where as you
[28:46] keep adding more and more checks or
[28:48] feedback loops you&#39;re also adding more
[28:50] cost. And now you could learn something
[28:52] wrong. Right? So what if someone said
[28:54] the restaurant is full of cockroaches
[28:56] and now your system learns that it has
[28:59] cockroaches. So it says something like
[29:01] warn people before they book with your
[29:03] restaurant that there are cockroaches
[29:05] everywhere. So you could learn the wrong
[29:07] thing. So you want to make sure that you
[29:09] have some checks and balances against
[29:10] that. The next one is goal setting and
[29:12] monitoring. And this one is basically
[29:14] defining specific measurable goals. A
[29:17] lot of times they call these smart
[29:18] goals. Specific, measurable, achievable.
[29:21] Two other ones I I forget right now. I
[29:23] think realistic and then time based.
[29:25] Yeah, you have measurable goals with
[29:27] deadlines and budgets and then as work
[29:29] progresses, you continuously monitor
[29:30] metrics and compare to targets and it&#39;s
[29:32] like having a GPS that sets a
[29:35] destination, monitors your progress, and
[29:37] then recalculates when you&#39;re off
[29:38] course. So, how the system works is you
[29:40] have some form of objective that is
[29:42] defined. Then you create these smart
[29:44] goals. So, you have everything that I
[29:46] mentioned before. You set your
[29:47] constraints. Let&#39;s say your your main
[29:50] constraints that you deem as the most
[29:51] important are time and resource and
[29:53] budget. Then you define some metrics or
[29:55] KPIs, key performance indicators for
[29:58] this agent. Then you go through some
[30:00] quality gates. Quality gates is
[30:01] essentially just double-checking that
[30:03] everything&#39;s in line. You begin your
[30:05] execution. You go through continuous
[30:07] monitoring. You track progress, create
[30:09] checkpoints, have status events. You
[30:11] collect those metrics. You compare them
[30:13] to targets. And then you go through this
[30:15] entire rest of the system. If the system
[30:17] starts to drift because it&#39;s not
[30:19] adhering to your KPIs or your metrics,
[30:22] that&#39;s where we go and analyze the cause
[30:23] and you decide what needs to happen. Do
[30:25] you need more resources? Do you need to
[30:27] adjust the plan? Do you need to modify
[30:30] the scope in any way? And then if it
[30:32] does pass, then you continue the
[30:34] execution. You make sure that your goal
[30:35] is achieved, whatever that goal was. And
[30:38] then if it isn&#39;t achieved, you escalate
[30:40] it. Otherwise, it&#39;s successful. And
[30:42] theoretically here, you could generate
[30:43] some form of report summarizing
[30:45] everything that happened. Then you have
[30:46] the goal achieved. In terms of where and
[30:48] when to use this, this is a more
[30:50] advanced technique. So you&#39;d use this
[30:52] for complex projects, really autonomous
[30:55] operations you&#39;re going for and
[30:56] strategic execution. And on where it
[30:58] fits, it&#39;s for, let&#39;s say, sales
[31:01] pipelines, very sophisticated pipelines,
[31:03] system optimization or cost management.
[31:05] I would likely use it only in these two
[31:07] occurrences. There&#39;s probably simpler
[31:09] ways to create a sales pipeline. And on
[31:11] the pros is you try to be as efficient
[31:14] as possible with your resources. But on
[31:16] the con side, you have potentially goal
[31:18] conflicts or rigid constraints
[31:20] throughout your system where you have to
[31:22] run this quite a few times to catch any
[31:24] not only edge cases but any rigidities
[31:26] that pop up depending on the variability
[31:29] of your input. Next up, we have
[31:30] exception handling and recovery. And I
[31:33] could summarize this whole sticky note
[31:34] in one line, which is this is just the
[31:36] way that you catch errors in your
[31:38] agentic workflows. So this is an agentic
[31:41] pattern to help catch issues in your
[31:43] other agentic patterns. So essentially
[31:44] what you&#39;re trying to do is you do
[31:46] something, you add safety checks, you
[31:48] make the call to these services or tools
[31:51] or both. Then you assess whether or not
[31:53] it worked. If it didn&#39;t work, you take
[31:56] that error, you catch it, and then you
[31:58] have to assess and classify what kind of
[32:01] error is it. Is it a permanent error?
[32:04] Meaning it&#39;s something that&#39;s not going
[32:05] to resolve itself. If so, it&#39;s good to
[32:07] have a plan B in your workflow. If it&#39;s
[32:09] a temporary error, then try again. Wait
[32:12] a bit. So, sometimes we call this back
[32:14] off or exponential back off where it
[32:16] waits 1 minute. Let&#39;s say there&#39;s a
[32:18] timeout with an API or you&#39;ve sent too
[32:20] many requests, maybe it backs off.
[32:22] That&#39;s why it&#39;s called exponential
[32:23] backoff and it goes back and tries again
[32:25] in a minute. But obviously, you want to
[32:26] cap out how many times it should try
[32:29] because it could be that what you think
[32:31] is a temporary failure is a permanent
[32:33] failure. So, for a critical response,
[32:35] you&#39;d have an emergency response. You&#39;d
[32:37] save your current work, alert the team,
[32:40] determine whether or not it&#39;s safe to
[32:41] continue, and then you keep going until
[32:44] you get to the point where you can
[32:45] continue working and you&#39;re unblocked.
[32:47] Otherwise, you need to maybe do a full
[32:49] stop and reassess the entire system and
[32:51] see where the issue lies. In terms of
[32:53] backup options, this could be using a
[32:54] simpler method, using saved data, using
[32:57] default answers, or getting again that
[32:59] human in the loop to assist. Then you
[33:01] start the recovery process, which flows
[33:03] into the exact same recovery process
[33:05] from before. Now in terms of when to use
[33:07] this, you can use this pretty much in
[33:08] every pattern, but specific ones are the
[33:10] ones where you need a lot of focusing on
[33:12] error handling where errors are more
[33:14] prone to happen like systems that are
[33:16] actually in production, quality
[33:18] assurance, cost management, and anything
[33:20] where there are vital and critical
[33:22] mistakes that you have to account for.
[33:24] So this is one of those patterns that
[33:25] would be a good use case for enterprise
[33:27] AI deployments because there are so many
[33:29] fail safes and plan B&#39;s and C&#39;s. So the
[33:32] pros and the cons are obviously that you
[33:34] have more performance visibility. You
[33:36] can see exactly what&#39;s happening, what&#39;s
[33:38] failing, why it&#39;s failing, and have
[33:40] areas of recourse if it fails. And then
[33:42] you have more user trust naturally
[33:44] because you have more fallbacks in
[33:45] place. But on the con side, there is a
[33:48] lot of infrastructure and complexity to
[33:50] make this happen. And sometimes you
[33:52] might have a lot of false alarms. So
[33:54] depending on how many times you get an
[33:56] alert, you should be very judicious or
[33:58] very specific about when or what is
[34:00] worth an alert. So you don&#39;t get alert
[34:02] fatigue. It&#39;s kind of like the story
[34:04] about the sheep that cried wolf. When a
[34:06] cried wolf multiple times and the wolf
[34:07] was actually there and they ignored the
[34:09] wolf. So the same analogy applies here.
[34:11] This next one is human in the loop which
[34:13] like the name says is adding a human in
[34:15] the loop where there&#39;s low to high risk
[34:17] depending on the situation or most
[34:19] importantly edge cases. So this one we
[34:21] can kind of like breeze through because
[34:22] it&#39;s pretty straightforward or you have
[34:24] some form of agent processing, you have
[34:26] a decision point and one of those
[34:28] decisions could be that a review is
[34:30] needed or you need to actually step in
[34:32] and intervene. So a good actual tactical
[34:35] example is imagine you&#39;re using some
[34:37] form of agentic browser or agent mode in
[34:39] chat GBT. At some point it will realize
[34:42] it needs you to step in to add your
[34:44] credentials to log in to your email to
[34:46] Upwork to whatever service it is. And
[34:48] that&#39;s where you have a review cue and
[34:51] then you prioritize by urgency if it&#39;s
[34:53] multiple things. You present in the UI
[34:55] like agent mode and chat GBT where it
[34:57] physically tells you Mark please
[34:59] intervene and take over and then give me
[35:01] back control once you&#39;re done. It shows
[35:03] full context displays differences.
[35:06] There&#39;s usually some form of timer. And
[35:07] on the human side they can decide
[35:09] whether to deny, edit or take over or
[35:12] whether to approve. And assuming that
[35:14] the human approves, it goes through the
[35:16] rest of the workflow. And assuming that
[35:18] no more intervention is required, then
[35:20] this process is complete. So you want to
[35:22] use human loop anywhere where you have a
[35:24] highstake decision, you have regulatory
[35:26] compliance, where you can&#39;t leave it up
[35:28] to a generative AI model to hallucinate,
[35:30] and when you want to catch things like
[35:32] edge cases. So it fits everywhere.
[35:34] There&#39;s only a few examples here like
[35:35] content moderation and medical
[35:36] diagnosis, but it fits everywhere you
[35:38] can imagine. So the pro is that you have
[35:40] more trust in the system because you
[35:42] know exactly where the failure points
[35:44] are and what the next course of action
[35:46] is with a human when you reach that
[35:48] failure point. When you&#39;re adding human
[35:49] in the loop, you&#39;re naturally adding
[35:51] more latency or more buffer time to that
[35:53] system because you&#39;re it has to wait for
[35:55] you. So if you take 10 minutes to
[35:58] intervene, then that&#39;s the system
[36:00] running 10 minutes longer than it should
[36:01] be. This next pattern is very familiar
[36:03] to a lot of you where it&#39;s basically
[36:04] just rag. It&#39;s knowledge retrieval. So
[36:07] just to define it, it&#39;s indexing
[36:09] documents by parsing, chunking, and
[36:11] creating searchable embeddings.
[36:13] Literally rag. So it&#39;s like having a
[36:15] librarian and you want to categorize or
[36:17] index a series of information and
[36:19] systems. So this one is pretty
[36:20] straightforward where you have a user
[36:21] query. You have some sources that you&#39;ve
[36:24] ingested. You&#39;ve parsed those documents,
[36:26] categorized them, embedded them, which
[36:28] again means in plain English, you take
[36:30] words, you turn them into vectors, you
[36:33] store vectors into library. So when you
[36:35] ask a question, you try to match the
[36:37] vector of the question to the vectors in
[36:39] your library with the closest match. And
[36:41] then in terms of chunking strategies,
[36:42] you have fixed size chunks, semantic
[36:45] boundaries, context aware chunks.
[36:47] There&#39;s all kinds of different ways to
[36:49] do this. Then you generate embeddings
[36:50] like I said, you store it in something
[36:52] like a vector database. You get the
[36:54] query. Is there if there&#39;s any form of
[36:57] rewriting for that query to make sure
[36:59] that you can get a better match, then
[37:00] you would do that in the system. you
[37:02] would retrieve the top matches. So this
[37:05] is called top K. You could have five
[37:07] matches, you could have 10 matches. Just
[37:08] be aware that the more matches you add
[37:10] to the system, the more that the
[37:12] language model can choose and
[37:13] hallucinate from. In terms of reranking,
[37:15] this is where you would reassess all the
[37:17] vectors and better organize them through
[37:19] scoring them and optimizing them to get
[37:21] better matches. So you can have more
[37:23] grounded responses. You have citations
[37:26] potentially. You obviously have to test
[37:28] your rag and if it fails then you have
[37:29] to go through adjust whatever parameters
[37:32] need to be adjusted. Then if it passes
[37:34] you deliver the response and then maybe
[37:35] you have some form of metrics that you
[37:37] score on like precision or recall. Then
[37:39] you optimize the system and then your
[37:41] rag technically would be complete. So
[37:43] you want to use this wherever you have
[37:44] document knowledge needs and that could
[37:46] be small or large really depends on the
[37:48] scenario. So this fits anywhere where
[37:50] you have enterprise search, customer
[37:53] support, research assistance, any form
[37:55] of documentation you need to split up
[37:56] and use. But rag is something a lot of
[37:58] us know about. So this is not too hard
[38:00] to wrap your head around. So the pros is
[38:02] that you can add more accuracy and
[38:03] scalability to your system, but it can
[38:05] come at the cost that you have to not
[38:07] only build infrastructure but maintain
[38:09] that infrastructure, which means
[38:11] maintaining those vectors that you
[38:12] accumulate over time. This next one is
[38:14] definitely worth refining which is
[38:16] called inter agent communication. And
[38:18] this is basically where you have agents
[38:20] communicate through a structured
[38:22] messaging system with defined protocols
[38:24] and then you have message including IDs
[38:26] for tracking expiration times and
[38:28] security checks. So analogy here is it&#39;s
[38:31] like an office email system with red
[38:34] receipts, security clearances and spam
[38:36] filters that prevent reply all
[38:38] disasters. So this is where you have
[38:40] language models talking to other
[38:42] language models. So from a system
[38:43] perspective, this is where you could
[38:45] have multiple AI agents speak to one
[38:47] another and then you have to decide how
[38:49] they should communicate. So either they
[38:51] have one boss, one that manages all the
[38:53] other agents, which is sometimes really
[38:55] helpful to have because you have a
[38:57] single vector of failure that everything
[38:59] can report to. The next one is that
[39:00] everyone is equal, meaning everyone has
[39:02] a say at the table. It is a pure agentic
[39:05] democracy which sounds great but in
[39:07] practice really hard to dial in because
[39:09] you&#39;re always dealing with the risk of
[39:11] hallucination and misfiring. And then
[39:13] you have potentially like a big thread.
[39:15] Imagine you have a school community for
[39:17] agents and all of them are looking at
[39:19] the board or the pinned posts and that&#39;s
[39:21] how they communicate. They communicate
[39:22] as comments on those pin posts. So in
[39:25] this case that you set up communication
[39:27] rules, how they can speak, how they can
[39:29] object, what happens when they have
[39:31] conflict with one another. In terms of
[39:33] message rules themselves, you either
[39:34] have to track numbers for each message.
[39:37] You create an expiration for each
[39:39] message. So let&#39;s say you have a
[39:40] conversation and you&#39;re now at 100
[39:42] messages between all of the agents. You
[39:44] probably don&#39;t want to maintain or store
[39:47] the third message from a singular agent
[39:49] unless that&#39;s one of the only things
[39:51] it&#39;s set. If there are important
[39:52] messages, then you need a system to mark
[39:54] which one is important. So this is where
[39:56] you can get a lot of spaghetti where you
[39:58] have agents on tops of agents. Then you
[40:00] have language models assessing those
[40:02] agents. So the number of potential
[40:04] points of failure is very high. So
[40:06] what&#39;s interesting here is that you can
[40:07] even create a system where you can
[40:10] designate which agent is allowed to
[40:12] speak. Then you verify their identity.
[40:14] You check what they can or can&#39;t do.
[40:16] Depending on that, you can give them the
[40:18] green light for communication. They send
[40:21] a message, deliver it to a prescribed
[40:23] agent. The agent gets the message,
[40:26] processes that message, and then it
[40:27] determines, do I need to reply or do I
[40:29] need to execute the thing that the agent
[40:31] told me to do? But this is where it gets
[40:33] messy where you want to assess, do you
[40:34] have any problems? If so, you could have
[40:37] an endless loop and when do you stop
[40:39] that loop? If all the agents keep
[40:41] talking to each other and it just
[40:42] doesn&#39;t stop, you need some mechanism to
[40:44] make it stop. If an agent gets stuck, do
[40:47] you have a mechanism to unstick the
[40:49] agent? If it&#39;s stuck at firing a tool or
[40:52] it&#39;s stuck on one particular point that
[40:53] it keeps looping back to. If there are
[40:55] messages that are way too long, then
[40:56] maybe you remove those old messages from
[40:58] the context to keep it going. Then you
[41:00] alert a human. And this is again where
[41:01] human in a loop is very helpful because
[41:03] you might need one to just push the
[41:05] conversation along. Otherwise, if life
[41:07] is all good, you can keep going. You can
[41:09] save the conversation history. You can
[41:10] create an activity report. But genuinely
[41:13] looking at the system, I&#39;ve never seen a
[41:15] company that has implemented this one at
[41:18] all, two properly, or three in a really
[41:20] scalable manner. This would make a
[41:22] really good YouTube video, but not a
[41:24] really good production system. So, in
[41:25] terms of when to use this, I would
[41:26] personally tell you you probably don&#39;t
[41:28] want to do this, even though it looks
[41:30] beautiful. It sounds great. Unless
[41:32] you&#39;re trying to build a prototype
[41:34] system of automating an entire company
[41:36] with just agents, I&#39;m sure it&#39;s possible
[41:38] with some implementation. But you
[41:40] probably could do much more useful
[41:43] things with that time that are more
[41:44] deterministic and reliable because as
[41:47] language models change, you&#39;d have to
[41:49] basically create your own framework for
[41:50] how all of these systems should work. I
[41:52] don&#39;t think you&#39;ll be able to pull
[41:53] something off the shelf like a crew AI
[41:55] and be like, &quot;Cool, this is the system
[41:57] that we&#39;re going to depend our whole
[41:58] company on.&quot; If you are going to do it
[42:00] then enterprise level makes sense
[42:01] because you need tons of resources,
[42:03] engineers, you need proper production
[42:06] and for the other ones you can see here
[42:07] one of the use cases that popped up was
[42:09] smart city systems. So this is very
[42:11] complex. This is at a very very high
[42:13] level. Now the one key pro here I want
[42:15] to dial in on is fault isolation. So in
[42:17] this system if you manage it properly
[42:20] you can know exactly which agent is the
[42:22] culprit for a particular issue or what
[42:24] happens when all the agents go back and
[42:26] forth and have conflict. you can
[42:28] basically root everything that happens.
[42:30] Whereas in a real company, sometimes you
[42:32] can&#39;t pin down exactly why something
[42:34] didn&#39;t work. Was it a personnel issue?
[42:37] Was it issues within the personnel? You
[42:39] can&#39;t necessarily have full big brother
[42:40] intelligence over what&#39;s happening. But
[42:42] here you can. And the cons speak for
[42:44] themselves where you have a lot of
[42:45] complexity, a lot of debugging. You have
[42:48] to see all the states of the agents at a
[42:50] particular point in time. You have to
[42:52] keep track that the context of the
[42:54] conversation isn&#39;t getting overloaded,
[42:56] that the agents themselves are speaking
[42:59] the same language literally or at least
[43:01] the language that you&#39;ve designated them
[43:02] to have. This next pattern might be new
[43:04] to a lot of you and it&#39;s called
[43:06] resourceaware optimization. What it
[43:08] means is analyzing a task complexity and
[43:11] then routing to appropriate resources.
[43:13] So simple tasks use cheap, fast models,
[43:16] but complex tasks use powerful but
[43:19] expensive models. Think of something
[43:21] like GPT5 where there was a huge uproar
[43:23] because we lost all of our models. Then
[43:25] we got either quick thinking, kind of
[43:28] thinking, hard thinking or like
[43:31] professional thinking. Each one of those
[43:33] would route your request in chat GBT to
[43:36] the model that it thought would be the
[43:37] best suited for that particular outcome.
[43:39] So the analogy here is a playful one
[43:41] where it&#39;s like choosing between
[43:43] walking, a bus or a taxi depending on
[43:47] the distance, the urgency or the budget.
[43:49] So you get a task and then based on that
[43:51] task&#39;s complexity, you set a budget.
[43:54] That budget could be a token limit, a
[43:56] time constraint, a money budget on how
[43:58] much you&#39;re willing to spend for that
[44:00] kind of inference or that kind of API.
[44:02] Then you have a router agent classify
[44:04] that complexity, whether it&#39;s simple,
[44:07] medium, complex, and if it&#39;s unknown, it
[44:09] has to run a quick test to maybe check
[44:11] the confidence of how sure it is as to
[44:14] whether it&#39;s simple or complex. If it&#39;s
[44:16] simple, then maybe it goes to a small
[44:18] model. If it&#39;s medium, then a standard
[44:20] model. And naturally, if it&#39;s more
[44:22] complex, then a reasoning model of
[44:24] sorts. And then once you execute the
[44:26] tasks, you monitor resources. You look
[44:28] at the token count and response time as
[44:30] well as API costs. Maybe you have some
[44:32] form of function that&#39;s keeping track of
[44:34] the rolling cost. And as long as it&#39;s
[44:36] within limits, then you&#39;re good to go.
[44:38] It keeps continue processing until the
[44:41] task is complete. And then you finally
[44:44] get whatever the outcome is, a report or
[44:46] something along those lines. And if
[44:47] you&#39;re not within the limit, then you
[44:49] need some form of optimization. So
[44:50] either you need to cut away from the
[44:52] context in your prompts for the agents
[44:55] or you need to take advantage of
[44:56] something called prompt caching where
[44:59] essentially you have a language model
[45:00] physically cache results for up to an
[45:03] hour. So you can keep referencing and
[45:05] sending that prompt over without having
[45:07] to send all that context over and over
[45:09] again. Then naturally, one of the best
[45:11] fallbacks would be just to switch to a
[45:13] cheaper model across the board. If
[45:14] you&#39;re finding that even your complex
[45:16] cases could be solved by potentially
[45:18] chaining multiple LLMs and this is where
[45:21] you start having a combination of design
[45:23] patterns where knowing about that prompt
[45:25] chaining in number one is helpful now
[45:28] because now you have different ways that
[45:30] you can pivot and implement your system.
[45:31] So this is useful to use when you have
[45:33] costs sensitive operations, high volume
[45:36] processing, or you have budget
[45:37] constraints and you have a very large
[45:39] system where you need to keep track of
[45:41] every single dollar being passed through
[45:43] because maybe you&#39;re running this at
[45:44] thousands or millions. And you won&#39;t
[45:46] most likely see this workflow for a
[45:48] momand pop business or a small medium
[45:50] business. This will be more enterprise
[45:52] and larger size platforms. The pro is
[45:54] naturally cost reduction. That was what
[45:56] all the uproar around GPD5 was is it was
[45:59] seen as a costcutting act to route as
[46:02] many requests as possible to the
[46:04] cheapest language model while still
[46:06] charging you that 20 bucks a month. So
[46:08] that was a pro. But in terms of the con
[46:10] is you have complexity increase. You
[46:12] have tuning challenges. It&#39;s hard to
[46:14] necessarily know how often it&#39;s going to
[46:17] go to simple versus complex. So your
[46:19] system and your rubric for what is
[46:21] complex and what is simple has to be
[46:23] really robust and iron tight. And at the
[46:25] same time, you&#39;ll still have edge cases.
[46:27] So what does that system that looks at
[46:29] confidence interval look like? All of
[46:31] this needs a lot of planning, a lot of
[46:33] resources, and a lot of testing. The
[46:35] next one are reasoning techniques. So
[46:37] this one in plain English means choosing
[46:39] the right method for the right problem.
[46:41] So chain of thought for step-by-step
[46:43] logic. Tree of thought, a very
[46:45] interesting technique. It&#39;s actually one
[46:46] of my favorite for different use cases
[46:48] that need creativity and imagination for
[46:51] exploring multiple paths. So this one is
[46:53] like solving a puzzle by trying
[46:55] different strategies until one finally
[46:58] works. So while you might not find this
[46:59] fun, I find this one particularly fun.
[47:02] So you have a complex problem and then
[47:03] you want to find a reasoning method to
[47:05] help you solve set problem. So you can
[47:08] either go sequential where you have
[47:09] chain of thought which is very similar
[47:11] to prompt chaining where you break it up
[47:13] into steps. You do step one, you think,
[47:15] you reason, then you conclude and then
[47:18] step two or the possible second path
[47:20] could be branching where you have tree
[47:22] of thought. Very interesting technique
[47:24] for you to take a look at. You generate
[47:26] literal branches of thought. You explore
[47:29] each one of those paths. You evaluate
[47:31] which one seems the most viable. And
[47:33] then you do what&#39;s called pruning. And
[47:35] pruning is essentially if you have many
[47:36] branches, you cut off the dead branches
[47:39] or the ones you want to be dead because
[47:40] you have a path forward you&#39;ve decided
[47:42] on. And then you have a few other
[47:44] methods where you combine multiple of
[47:46] these methods and you combine it with
[47:47] self-consistency. You generate multiple
[47:50] solutions. So multiple solution paths
[47:52] and you score them. And then you have a
[47:54] few other ones where you have
[47:55] adversarial where you have a debate
[47:57] method where you have a proponent agent
[47:59] and an opponent agent. It&#39;s kind of like
[48:00] having your mini parliament where you
[48:02] have two agents go back and forth until
[48:04] one wins and exchange arguments and then
[48:06] based on those arguments you decide what
[48:08] is the best path forward. So the key
[48:10] thing here is that you basically do all
[48:12] of these and then you score all the
[48:14] solutions here and then based on the
[48:16] rubric that you come up with, you run
[48:18] tests, you validate logic, you rank the
[48:20] candidates of which method is the best
[48:22] based on your specific complex problem.
[48:25] You then select the best one and you can
[48:28] either combine all of them or you can
[48:30] create one single one. So you could say
[48:32] I just want to use tree of thought based
[48:34] on this rubric or you know what I think
[48:36] that I&#39;ll do the prompt chaining and
[48:38] then train of thought because I see some
[48:40] synergies here. Little disclaimer here
[48:41] is knowing exactly how these methods
[48:44] work is very fundamental to actually
[48:46] making this work. So this is on the end
[48:48] of the spectrum in my opinion. This is
[48:50] advanced. So in terms of when to use
[48:51] this, like I said, advanced technique.
[48:53] So only for very complex things,
[48:56] mathematical reasoning, strategic
[48:58] planning at scale if you really need it.
[49:00] But nine times out of 10, you won&#39;t need
[49:02] it. But this is a very interesting
[49:04] workflow to get into once you graduate
[49:06] to that level of prompt engineering. So
[49:08] out of all of these, one of the most
[49:09] interesting applications could be both
[49:11] legal analysis and medical diagnosis
[49:13] because some of these problems in both
[49:15] of these domains are very meaty and very
[49:18] complex and need very creative ways to
[49:20] break them down. The pros of this method
[49:21] is that you&#39;re very exhaustive and
[49:23] robust in your process. But the cons is
[49:25] that you have a lot of token consumption
[49:27] complexity. There is such a thing as
[49:29] overthinking with language models the
[49:31] same way that you and I can overthink as
[49:33] well. So that can increase your latency,
[49:36] explode your cost and combinations. So
[49:38] even though this is cool, it&#39;s not
[49:40] necessarily cool for every use case.
[49:42] It&#39;s not cool for 90% plus of use cases.
[49:45] To me, this is highly experimental and
[49:47] you do this if you have a lot of
[49:49] bandwidth or free time or willing to put
[49:52] some resources behind this to see
[49:53] whether or not it makes sense. This next
[49:54] one is about evaluation and monitoring.
[49:57] And we&#39;re finally back to normal English
[49:59] words that we can understand. So this is
[50:01] about setting up quality gates and
[50:03] golden tests before deployment and
[50:05] continuously monitoring accuracy,
[50:07] performance, cost and drift in
[50:10] production. And what drift is is when
[50:12] you have the same model or the same
[50:14] suite of models output one response but
[50:17] over time that response degrades or gets
[50:19] worse or more unpredictable. In terms of
[50:21] the analogy to conceptualize it, you can
[50:23] think of it as a factory quality control
[50:25] system that checks products at every
[50:27] stage. So you can imagine an assembly
[50:29] line where one person is taking care of
[50:31] the wheels or one person is taking care
[50:33] of the door and making sure that the
[50:35] actual cover of the car is proper etc.
[50:38] So how this could work is you could have
[50:39] some system deployed and then you define
[50:41] some quality gates. So the quality
[50:43] criteria could be accuracy metrics, it
[50:46] could be performance SLAs&#39;s, it could be
[50:48] compliance, it could be user experience.
[50:50] Then for each one you have the specific
[50:53] metric. So for accuracy metric there
[50:55] should be some golden test sets. For
[50:57] performance, it could be some
[50:58] performance benchmarks. And then you
[51:00] keep going depending on the specific
[51:02] type of metric. And depending on what
[51:03] you decide on, it could be all of them.
[51:05] You create a test suite where you do
[51:07] unit tests, contract tests, integration
[51:10] tests, you have some critical path
[51:12] tests. And this is very comprehensive
[51:14] again and very robust of a testing
[51:16] system. And you want to assess whether
[51:17] or not your case actually deserves
[51:19] something like this. And in terms of
[51:20] analyzing patterns, the whole point of
[51:22] this is to do things like detecting
[51:24] drifts, finding regressions from the
[51:27] mean, which means that if the mean is
[51:29] the average, if the average thing stops
[51:31] happening, and you find something that&#39;s
[51:33] two standard deviations or very
[51:35] different from what&#39;s expected, this is
[51:37] what&#39;s called a regression. And this
[51:38] also gives you the ability to look for
[51:40] anomalies, identify trends, and then you
[51:42] can set a threshold as to when you
[51:44] decide that any of these or all of these
[51:46] have failed. And if so, you can do
[51:48] something like alerting a team. They
[51:50] investigate the issue. Again, you have a
[51:52] human in the loop there. And you keep
[51:53] going. And ideally, you conduct periodic
[51:56] audits to make sure that your systems,
[51:58] your mechanisms, your evaluation sets
[52:00] all are up to date and as expected. So,
[52:03] this is definitely some form of quality
[52:04] assurance that you&#39;d want to employ with
[52:07] production grade systems. And where this
[52:09] might make sense again is enterprise,
[52:11] SAS, healthcare, especially the finance
[52:13] industry might benefit from this and
[52:15] very large scale e-commerce. So, one of
[52:17] the biggest pros here is naturally that
[52:19] you have more reliability, but the
[52:20] corresponding con is not only alert
[52:23] fatigue, but also performance impact
[52:25] where you need a system that&#39;s so robust
[52:27] that can handle this level of scrutiny
[52:30] and testing on a very large scale. So,
[52:32] when I hear things like AI is going to
[52:34] take everyone&#39;s job, I start laughing
[52:36] because I don&#39;t know of a single AI
[52:38] framework that could do this kind of
[52:40] infrastructure setup at scale. I&#39;ve
[52:42] never seen it. I don&#39;t think we will see
[52:44] it from just language models, at least
[52:45] for a long time. So guardrails and
[52:47] safety patterns are derivative somewhat
[52:49] of what we just saw before. So this
[52:51] one&#39;s about checking all the inputs for
[52:53] harmful content, personal info or
[52:55] injection attacks. So this is much more
[52:57] top offunnel of that entire
[52:58] infrastructure. So you&#39;re classifying
[53:00] risk levels and apply appropriate
[53:02] controls. So the main analogy here is
[53:05] airport security where you have multiple
[53:07] checkpoints where someone asks you for
[53:09] things like your passport, your boarding
[53:11] pass, and then as you go through their
[53:13] job is to make sure to look for threats.
[53:15] So when it comes to your input being
[53:16] received, you then have to sanitize that
[53:18] input. Then you want to check what that
[53:20] input is. Is it some form of personal
[53:23] identifiable information or PII, in
[53:25] which case you want to detect it and
[53:27] maybe redact it. So if it&#39;s someone&#39;s
[53:29] SIN number, maybe you take off the whole
[53:31] SIN number or you hash it or you replace
[53:33] all the numbers with apostrophes or
[53:35] asterisks or whatever, but you want to
[53:37] find a way to mask anything that&#39;s very
[53:39] secure that shouldn&#39;t be going into your
[53:41] system. The next one could be injection
[53:43] detection. They rhyme for a reason. So
[53:45] if someone&#39;s trying to break into your
[53:47] system, get access to your tables and
[53:49] doing something called like a SQL
[53:51] injection where they try to retrieve all
[53:53] the data in your tables of your
[53:54] application. And this could be related
[53:56] also to malicious content. So in both
[53:58] cases, you either want to filter this or
[54:00] you want to block it entirely. And this
[54:02] is where you do risk classification
[54:04] where you assess is this low risk,
[54:06] medium or high. And if it&#39;s high, nine
[54:08] times out of 10 you should involve a
[54:10] human in the loop. And then depending on
[54:12] the severity of low to medium then you
[54:14] could either process it normally or
[54:16] process it with additional conditions or
[54:18] constraints then you execute the task.
[54:21] You have some form of output moderation
[54:23] where you check the policies the ethical
[54:25] guidelines the compliance brand safety
[54:28] you create a safety score and then if
[54:30] that score is above a threshold then you
[54:32] have tool restrictions or you put it in
[54:34] a sandbox environment and then if there
[54:36] is nothing above the threshold then you
[54:38] just allow the input and the system
[54:40] keeps on going. So a system like this
[54:41] would be used especially when PR is on
[54:44] the line. Something public facing, a big
[54:46] system representing the government would
[54:48] be on the line. This is where you&#39;d need
[54:49] all of these checks and balances to make
[54:51] sure that very few people can send an
[54:54] input that is malicious that won&#39;t be
[54:57] caught downstream in the system.
[54:58] Ideally, the more upstream you can find
[55:00] the issue, the sooner you can make sure
[55:02] that the rest of the system is not
[55:03] compromised. So from having built for
[55:06] enterprise, I can tell you that one of
[55:07] the best vectors for malicious
[55:09] injections is anything with an open text
[55:11] box or chat bots, which is why I
[55:14] typically recommend as well as my team
[55:15] that if you create an application that&#39;s
[55:17] customerf facing and you have thousands
[55:20] or tens of thousands of users, then
[55:22] doing a pre-prompted strategy is
[55:24] probably better where you have already
[55:26] canned responses or canned prompts you
[55:29] can click on where there&#39;s no open text
[55:31] box. you can only go through a series of
[55:33] clicking through a journey. The pros is
[55:35] you definitely get a lot more risk
[55:37] mitigation. This is better for
[55:38] compliance and brand protection and user
[55:41] safety most importantly. But the cons is
[55:43] you could have some false positives
[55:45] where things that look malicious aren&#39;t
[55:46] malicious and vice versa. You&#39;re
[55:48] obviously going to have some user
[55:49] frustration if the system is being
[55:52] adding way too much friction in the
[55:54] process. But you have to balance that
[55:55] level of friction with your need for
[55:57] safety, which obviously safety should
[55:58] take precedence. All right, we&#39;re almost
[56:00] there. This is the second last design
[56:02] pattern which is prioritization. So this
[56:04] is about scoring tasks based on value,
[56:07] risk, effort and urgency. So the
[56:09] strategy in this pattern is you build
[56:11] something called a dependency graph to
[56:13] understand what needs to happen first.
[56:15] What in sequence needs to happen before
[56:18] the next following actions can follow
[56:20] after. And if you want one of my
[56:21] beautiful analogies, it&#39;s like having an
[56:23] emergency room triage system that
[56:25] handles the most critical cases first,
[56:27] but it makes sure that everyone gets
[56:28] seen eventually. So basically you have a
[56:30] task and then you build this dependency
[56:32] graph and this is what it could look
[56:34] like where you have a task list. You
[56:36] have task one 2 3 4 all the way to not
[56:39] infinity but maybe 100 tasks. Then you
[56:42] score each task based on a series of
[56:45] scoring factors. So some of these
[56:47] factors could be dependency count. So
[56:49] how many things are affected by this
[56:51] thing being solved or not being solved.
[56:53] time sensitivity, effort required, risk
[56:56] level, business value, and all of them
[56:58] go together to get some form of overall
[57:01] priority score. Once you yield that
[57:03] priority score, that&#39;s where you have
[57:04] something where you multiply value and
[57:06] effort times urgency by risk. And
[57:09] obviously, you can make this priority
[57:10] formula whatever you want. But in this
[57:12] case, this is the template you can use
[57:14] to do that. So then you rank the tasks
[57:16] based on the scores. You have an initial
[57:18] order right here. Then you have a
[57:20] scheduling strategy where either you&#39;re
[57:22] doing something like load balancing,
[57:23] task aging, applying quotas, and
[57:26] depending on what it is we&#39;re actually
[57:27] applying this for, it goes through this
[57:29] process. It gets prioritized in a queue.
[57:32] Then you execute the top task, you go
[57:35] through, you then double check whether
[57:36] or not priorities have shifted after
[57:38] changing the first task. So once you
[57:40] execute the top task, you shouldn&#39;t
[57:42] necessarily go to the next sequence of
[57:44] events. You should assess whether or not
[57:46] there is a new priority. If there is a
[57:48] new priority, then maybe you push
[57:50] forward whatever was next. You save the
[57:53] state and then you go to the new event
[57:55] section. You recalculate the priorities
[57:58] accordingly. So to make this a lot more
[57:59] tactical and less airy fairy in the sky.
[58:02] Imagine you were starting your day out
[58:03] and your number one goal was to go to
[58:06] the gym, then come back home and eat,
[58:08] and then go to work. But what if you
[58:10] went to the gym, you left the gym, there
[58:12] was a huge accident on the highway or
[58:14] the street, and now you&#39;re an hour late.
[58:16] Maybe you skip going back home to
[58:18] nourish yourself and you go to a
[58:20] drive-thru along the way before you go
[58:22] to work. In this case, doing action
[58:23] number one presented environment number
[58:25] two where you had to reassess the state
[58:28] and then change the course of action.
[58:30] So, using that example as a segue,
[58:32] dynamic environments could be one major
[58:35] application of where this makes sense.
[58:37] where your initial plan might change
[58:39] because the first thing you do might
[58:41] cause a ripple effect of additional
[58:43] variables coming into the equation that
[58:46] change the next natural action that you
[58:48] should do. So this would make sense in
[58:49] task management systems, customer
[58:51] service, manufacturing, healthcare and
[58:53] devops. So the key value here is
[58:55] obviously adaptability and transparency.
[58:58] But the downside would be something like
[59:00] context switching where maybe you assess
[59:02] every single time especially if you&#39;re
[59:04] using generative AI based agents and it
[59:07] reassesses the next natural action or
[59:09] the new priority in a different light in
[59:11] one run versus the other run. So not
[59:14] having a deterministic way to assess
[59:16] whether or not you should go off course
[59:18] and reassess the priorities becomes the
[59:20] hardest part of the system, especially
[59:21] if the environment or the dynamic
[59:23] environment you&#39;re applying this in has
[59:25] edge cases and variables all the time.
[59:27] And last but not least, you have
[59:29] exploration and discovery where this in
[59:31] plain English is starting by broadly
[59:33] exploring the knowledge space across
[59:35] papers, data, and expert sources and
[59:38] identifying patterns and clustering them
[59:40] into themes. And this one is like a
[59:42] detective gathering clues from
[59:44] everywhere, finding patterns, then
[59:46] focusing on the most promising leads. So
[59:48] this one starts out with a research
[59:50] goal. Then from that goal, you explore
[59:52] your sources, whether it&#39;s domain
[59:54] experts, data sets, academic papers.
[59:56] Then you compile all that information
[59:58] into one spot. You map the what&#39;s called
[60:01] knowledge space. You identify the key
[60:03] areas of interest and then you go to
[60:06] cluster the themes. And what clustering
[60:07] means in plain English is that you have
[60:09] a series of data points that you can
[60:11] converge and bring together to be able
[60:13] to assess apples to apples, oranges to
[60:15] oranges and see if there are patterns
[60:17] are existing. Once you assess those
[60:19] patterns, you then go through some
[60:20] selection criteria. We look at some form
[60:23] of a novelty score, potential impact,
[60:25] knowledge gaps, feasibility. And the
[60:28] whole point of this is to pick where you
[60:29] should actually explore and you should
[60:31] target. And once you know that and you
[60:33] dial in, this is kind of like a research
[60:36] agent design pattern where it&#39;s just
[60:38] researching what is worth pursuing. And
[60:40] once you do that deep investigation, you
[60:42] extract some artifacts. These artifacts
[60:45] could be conceptual models, they could
[60:47] be expert contacts, they could be
[60:48] curated data sets, bibliographies,
[60:51] whatever it is contextually specific
[60:52] that you&#39;re doing. And once you
[60:54] synthesize these insights, you extract
[60:56] key insights, add some open questions,
[60:58] and maybe generate some hypotheses, you
[61:01] go through and loop until you come to a
[61:03] point where you conclude your
[61:04] exploration and you have a generated
[61:07] report if that is the output you&#39;re
[61:08] looking for. You document your findings
[61:10] and then you recommend the next steps.
[61:12] So if I zoom out for a second, you can
[61:14] imagine this as the system responsible
[61:16] for things like perplexity deep
[61:18] research, claw deep research. Anything
[61:20] that has to go the next natural mile
[61:22] will take 40 minutes, spin up multiple
[61:24] agents to execute that research and
[61:26] scope out what is worth looking at
[61:28] versus what&#39;s not worth looking at.
[61:30] Which citations are worth including in
[61:32] the final analysis versus not. So this
[61:34] is a full research agent design pattern.
[61:36] And with that, there should be no
[61:37] surprise that the best place to use this
[61:40] is for research projects as well as
[61:42] anywhere where you need to do some form
[61:43] of really detailed competitive analysis.
[61:45] And where it fits is research of all
[61:47] kinds including academic R&amp;D
[61:50] departments. And one really cool use
[61:52] case is drug discovery. Now the key
[61:53] thing here is innovation enablement
[61:55] where the agent can decide what is worth
[61:58] pursuing or what topic and what angle of
[62:01] that topic is worth diving into. And
[62:03] then on the con side, the obvious con is
[62:06] that it&#39;s timesensitive, very resource
[62:08] heavy. There&#39;s a lot of generative AI
[62:10] being used here and also sifting through
[62:12] very large documents and zooming through
[62:14] to see what is relevant and what&#39;s not
[62:16] relevant. And I know this was a longer
[62:17] video, but now that sums up 20 different
[62:20] design patterns and there are 21 in the
[62:22] book itself, but I excluded MCPS just
[62:25] because I have covered it over and over
[62:27] again. But wait, we&#39;re not done yet. I
[62:29] do have a free gift for all of you. So,
[62:32] all of this work I put together is in
[62:33] this repository that I made available in
[62:35] the second link in the description
[62:37] below. It includes all the patterns I
[62:39] mentioned from this book as well as a
[62:41] series of aski art. And as art is one of
[62:44] my new things I&#39;m nerding out on where
[62:45] it basically breaks down what this looks
[62:48] like step by step. And then if you go
[62:50] back to the last one, if you go to the
[62:52] mermaid diagrams, this covers a lot of
[62:54] the diagrams that I went through in
[62:56] detail. So you have access to everything
[62:58] that I put together and it will help you
[63:00] really level up your agentic
[63:02] understanding so you can apply this and
[63:04] be a master of the craft. Now if this
[63:06] very long video was helpful for you, it
[63:08] helped save you the time to read the
[63:10] book, then I&#39;d super appreciate if you
[63:12] left a comment down below so that the
[63:13] algo can give this some extra love. And
[63:15] the best thank you you can give me is
[63:17] sharing this with someone else to
[63:19] increase the visibility of the video as
[63:20] well as the channel. And if you want to
[63:21] go even deeper on things like agentic
[63:24] patterns and prompt engineering and
[63:26] everything that&#39;s involved in becoming
[63:27] the super AI generalist of your dreams,
[63:30] then check out the first link in the
[63:31] description below. I run a community
[63:33] where I put my heart and soul and do all
[63:34] this kinds of stuff every single day
[63:36] pretty much. So check out that first
[63:38] link and maybe I&#39;ll see you inside. I&#39;ll
[63:39] see you in the next one.
