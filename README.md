# Project: Encore

_Party music management application for HCI class at the University of Rochester_

## Problem Statement

Have you ever been at a party or event where everyone is shouting over each other? Have you ever had to fight for the aux cord? Have you ever completely lost the attention of a group because they couldn’t stand your music choice?

We’ve all been there.

Introducing our application: a new organized way to queue an awesome party playlist. Instead just hoping a collaborative playlist will go over well the night of, our application offers a unique way to have real time collaboration. 

Our system is hosted by the DJ and can be interacted with party guests. Guests can easily submit requests, see the queue, or veto songs even before they’re played. This way, everyone can have their favorite track played without having to find or reach out to the DJ. 

## Need Finding

In order to specify which aspects of the application deserve the most attention, or are even worth creating at all, our group must identify the needs of a target audience. Because we are a student group operating out of a college campus, it will be practical to limit our audience to university party-goers. This will maximize our connectivity to the audience and allow us to tailor even crude prototypes to a key set of features.

Anything other than observation in a party setting will be difficult because most attendees go there to escape things like boring surveys. They would probably be displeased if they got cornered into an interview. Even if they accepted to providing data, it’s likely that they wouldn’t be sober enough to give accurate answers. These more active methods of need finding are probably best done outside the scope of an ongoing party. That being said, in order to get perspective for our most common use cases, it should be important to get data from users who are in a relevant mindset. Contextual inquiry could prove helpful in this case, as striking up a conversation about music at a party is common.

### Survey
Making use of a survey sent to a number of Greek organizations would provide large amounts of data from very frequent party goers and party hosts. Using a Likert scale to take measurements on aspects like party attendee satisfaction with music choice could offer valuable insight to how we can angle the app. While interviewing users could provide specific details on attendee interaction, it’s worth seeing which areas need improvement on the large scale.

### Interviews
Party attendees often have stories to tell about how they couldn’t get their favorite song played all night, or when everyone hated it when it finally came on. These interactions can help us design ways to maximize user satisfaction. It will be hard to strike a balance on how much influence each attendee has on the system without first listening to stories of both DJ’s and listeners. As well, seeing how DJ’s manage the requests of everyone, decide when to skip a track, and make a night successful is key to the core design of the app. 

### Observation
Measuring levels of audience satisfaction, phone use, interaction with the DJ and activity levels during songs also can help us with the app format. This is a very feasible method of need finding within party environments. Observers can stand on the side of the dance floor to record interactions, conflicts, etc. This more passive approach might reveal nuances in the social atmosphere that could help make the service feel more natural to use.

## Prototyping

To start prototyping we could storyboard out the scenarios in which our users would be listening to music in a social context where songs could be requested. These scenarios range from fraternity parties, clubs and bars, house parties, dinner parties, and even something such as a middle school dance. Although the end goal of providing music that the attendees want to hear is the same the scenarios surrounding that goal can be quite different. The majority of our ability to needfind currently will likely come from Greek organizations so we will and ought to focus on the fraternity party storyboard but it is important to think about all of the scenarios as well.

We could then move on to paper prototyping. Based on our results from needfinding we can make sketches of the different interfaces this service would need. The users need a different interface than the DJ so we would need to prototype how to reach each interface and how to differentiate them. 

We can then move on to higher fidelity prototypes using wireframing software such as InVision to turn the paper prototype sketches into more realistic images of what the program would look like and how to navigate it. 

So far each of the prototyping methods discussed have had an increasing amount of breadth but very little depth. The prototypes depth would mostly be limited to navigation and perhaps a few very rudimentary features in the paper and wireframe prototypes. One way we could use to increase the depth of a wireframe prototype would be to make it using Android Studio. We could use Android Studio and a bit of XML to construct the layout of the different interfaces the users would use and use simple “onClick” methods to navigate easily between them thus making a ‘dummy app’. This would maintain the breadth of the wireframe but we could write the code to perform some of the actions we want to prototype into this dummy app to greatly increase the depth. This has the added benefit of being able to use or adapt some of the code written for this dummy app into the final product.

## User Study / Evaluation

Our hypothesis for evaluation will be that the use of our app improves enjoyment of a given party for both the attendees and the DJ. We will try to pilot our app at real-world parties and pull from people who we know will be in attendance to try out the app and share it with their friends.
We will likely only be able to evaluate the real world use in comparison with the participants prior experience at parties, because holding multiple tests with the same participant would prove very difficult. If we could get the app used at at least 2 parties and poll some of those in attendance who used it, we should be able to get a pretty accurate picture of its effectiveness.

The experiment would ideally operate as follows:

## Implementation

Implementing this application would likely follow the path of a web application. Considering this, we believe the MERN technology stack would be the best option for implementing our product. This would allow us to write a large majority of our code using JavaScript, which is ideal for web applications. MERN consists of MongoDB, to be used for our database in order to store information in our back end, Express.js, to be used as our back end web development framework, React, to be used as our front end development and design, and Node.js, which allows us to implement our application in the back end. As of right now, the bulk of our back end function should be implemented within Express.js in order to keep a lot of the functionality in the back end and closer to the MongoDB database.

#### Features will include:
* Fully functional music player and search system
* Current and queued Song Presentation
* Voting and veto system of songs selected
* Private parties, likely similar to how games like “Quiplash” are played (needing a code to enter the party)
* Preview songs that are currently available to vote on
* Song suggestion system to play similar songs if the queue is empty

Technical challenges will include presenting the songs in a user-friendly way that makes the voting system easily accessible and intuitive as well as figuring out a way to manage a song suggestion service for the product.

Some solutions for user-friendly interfaces could be found in other song players such as a Spotify or Apple Music interface, possibly using a similar presentation for the music making everything very clear and intuitive. The song suggestion service may be attainable through a Spotify API.

We will have a back end needed in order to retrieve song data and store certain information in our database. For example, the voting and decision making algorithm will be coded within the back end. The front end should mainly be developed using React, however some features may be created using JavaScript. For front end we hope to have a home/connect screen that allows the user to enter their “party code”, as well as the in-party interface which includes song selection, voting, and searching within one screen.

We are creating a web application that should be easily accessible through a web browser on mobile devices. This should allow us to make the product inter-platform and attract the largest 

## Timeline and Deliverable

### 3/19 
  Assemble needfinding materials
  Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 3/21 
  Do needfinding tasks
  Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 3/26
	Assemble prototype
	Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 3/28
	Get feedback for prototype
	Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 4/2
  Construct final GUI
  Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 4/4
	Work on final implementation
  Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 4/11
	Finish final implementation
  Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo
### 4/18
  Complete user study tasks, begin project materials
	Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo

### 4/20
	Finish project materials
  Conley Ernst, Clay Emmel, Jon Roman, Ben Schmitz, and Dan Cancelmo
  
## Alternative Solution

If a party management system fails to gain traction, an easier idea to execute with a more general audience could be a playlist/music interest collaboration platform. This might use some of the core technology we may have implemented when things go south. The integration with music platforms, playlist/queue structure and online format are still applicable.

If the multi-user aspect of the application becomes too demanding for the timeline of the project, we can try creating a terminal-style approach. The DJ could mount something like an iPad to the DJ booth that would take in music requests without giving explicit control to the audience. This way, we still fix the problem we set out to solve with less tedious development at the expense of accessibility.

## Meet the Team

### Conley Ernst Front End Developer 
	Areas of Study: Computer Science and Digital Media Studies
	Skills: React, MERN stack, Java, Python, Swift

### Clay Emmel Back End Developer 
  Areas of Study: Computer Science
  Skills: Cloud Platforms, Backend

### Jonathan Roman UX/UI Researcher
  Areas of Study: Computer Science and Business
  Skills: Java, Python, SQL, Javascript

### Ben Schmitz Audio Engineer
  Areas of Study: Audio and Music Engineering and Computer Science
  Skills: Audio programming

### Dan Cancelmo Android Developer
	Areas of Study: Computer Science and History
	Skills: Android, Java, SQL
