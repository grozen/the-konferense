import { Speaker, Speakers } from './speaker-data'

type RoomsGathering = 'C halls' | 'A2'
type RoomsOpening = 'A2'
type RoomsTalks = 'C1+C2' | 'C3' | 'C4'
type RoomsLightningEnding = 'C1+C2+C3'

export type Event<T> = {
  id : number
  title : string
  room? : T
  speakers? : Speaker[]
  description? : string
}

export type TimeSlot<T> = {
  events : Event<T>[]
  startTime : string
  endTime : string
}

export type Agenda<T> = {
  roomNames : T[],
  timeSlots : TimeSlot<T>[]
}

export const AgendaDataGathering : Agenda<RoomsGathering> = {
  roomNames: ['C halls', 'A2'],
  timeSlots: [
    {
      startTime: '08:30',
      endTime: '09:00',
      events: [{
        id: 1,
        title: 'Registration',
        room: 'C halls'
      },
      {
        id: 1,
        title: 'Breakfast',
        room: 'A2'
      }]
    }
  ]
}

export const AgendaDataOpening : Agenda<RoomsOpening> = {
  roomNames: ['A2'],
  timeSlots: [
    {
      startTime: '09:00',
      endTime: '09:15',
      events: [{
        id: 1,
        title: 'Opening words',
        room: 'A2',
        speakers: [Speakers['case taintor']]
      }]
    },
    {
      startTime: '09:15',
      endTime: '10:05',
      events: [{
        id: 1,
        title: 'Keynote - The Art of Reinvention',
        description: 'The world\'s a big place, with lots of exciting things to do and try. Yet as a society we pressure folks to pigeonhole themselves into silos: pick a major at university, choose an industry to work in, buy a house and settle down. Nowhere is this more true than in the world of tech, where there is often no clear path from engineer or product manager to leader. But what if you want to move around, especially at work? In this talk, Kara shares three key lessons gleaned from over a decade moving seamlessly between the highest levels tech, entertainment, and sports and how you can apply those strategies to your career.',
        room: 'A2',
        speakers: [Speakers['kara defrias']]
      }]
    },
    {
      startTime: '10:05',
      endTime: '10:15',
      events: [{
        id: 1,
        title: 'Break (10m)'
      }]
    },
    {
      startTime: '10:15',
      endTime: '10:35',
      events: [{
        id: 1,
        title: 'Product Vision',
        room: 'A2',
        speakers: [Speakers['david fock']]
      }]
    },
    {
      startTime: '10:35',
      endTime: '10:45',
      events: [{
        id: 1,
        title: 'Break & move downstairs (10m)'
      }]
    }
  ]
}

export const AgendaDataTalks : Agenda<RoomsTalks> = {
  roomNames: ['C1+C2', 'C3', 'C4'],
  timeSlots: [
    {
      startTime: '10:45',
      endTime: '11:15',
      events: [{
        id: 1,
        title: 'LiveOps Darkest Secrets',
        description: 'What is LiveOps? What do we do? Why do we even need a LiveOps team? How can you benefit from our existence? Those are some of the questions I will be answering during this talk. I will also share some cool numbers and graphs that you might not even know existed; one of the benefits of being a team that has been around since before Engineering existed. Actually, even before Klarna existed!',
        room: 'C1+C2',
        speakers: [Speakers['nadia mohedano troyano']]
      },
      {
        id: 1,
        title: 'The (inter)view From Over Here',
        description: 'The TLV site has changed quite a bit in form and function during its six years of existence. This is possibly most evident in the site\'s hiring process, which was constantly honed to ensure we have the right people for the challenges ahead. We will examine the process\'s evolution, its strong ties to our office culture and the challenges we faced along the way. Not only will this journey expose a unique perspective of the TLV site\'s history, it will also offer our insights into hiring people you would love to work with.',
        room: 'C3',
        speakers: [Speakers['guy rozen']]
      },
      {
        id: 1,
        title: 'Headless But Not Brainless',
        description: 'Browsers support more and more web features everyday. If you are using web automation for either testing or scraping you don’t want to rely on frameworks that only support half of those features or do not behave like real browsers. Luckily chromium just introduced their headless mode and with chrome being one of the most used browsers it supports all web features and also behaves like a real browser. In this session I will introduce you to chromium, the headless mode and how to work with it. Furthermore I will go through changes that we made in our scraping infrastructure to use this technology and features that chromium does not offer so that we had to fork it.',
        room: 'C4',
        speakers: [Speakers['christian diehl']]
      }]
    },
    {
      startTime: '11:15',
      endTime: '11:30',
      events: [{
        id: 1,
        title: 'Transition'
      }]
    },
    {
      startTime: '11:30',
      endTime: '12:00',
      events: [{
        id: 1,
        title: 'First Class Error Handling',
        description: 'Thinking of all possible errors in a program is almost impossible and it often seems like busy work that doesn\'t get you closer to your business goals. One reason it is hard is that we often push errors to the side, leaving them as an afterthought. In this talk we\'ll look at ways to allow you to stay on the happy path of what you want to achieve without having unexpected errors slip through the cracks.',
        room: 'C1+C2',
        speakers: [Speakers['adam bergmark']]
      },
      {
        id: 1,
        title: 'WTF is Wavy? A story from zero to something',
        description: 'How do you take 14 people from an insolvent company, a Swedish payment giant and an office dog and make a p2p payment app for Europe in half a year? In this session we will talk about the past six months at Wavy - how we work, what mistakes we made, which best practices we ignored and how we plug into Klarna. We will also show the best (and worst) parts of the complex system beneath the elegant surface.',
        room: 'C3',
        speakers: [Speakers['dario pasquantonio'], Speakers['joseph tindale']]
      },
      {
        id: 1,
        title: 'Adobe Flash: Post-mortem',
        description: 'Flash is dead, but it didn\'t go down without a fight. I\'ll be taking you on a journey from the early days of Flash as an animation tool to when it became a rich software development suite. I\'ll be pointing out some interesting similarities between Flash and recent web technologies: SVG, JSX, Typescript, AJAX streams, video manipulation - Flash was the hipster kid who liked them before they were cool.',
        room: 'C4',
        speakers: [Speakers['omri yariv']]
      }]
    },
    {
      startTime: '12:00',
      endTime: '13:00',
      events: [{
        id: 1,
        title: 'Lunch'
      }]
    },
    {
      startTime: '13:00',
      endTime: '13:30',
      events: [{
        id: 1,
        title: 'When You Know Better, You Do Better',
        description: 'We are all in the product business, either directly or indirectly. Some teams in engineering build products that reach external customers, and some serve internal support functions. No matter which role we play we can always strive to do better, and data is key to that. I will explain a mindset where data is seen as an integral part of the product, and how this can be leveraged to create more value and better products. As a way to achieve this I\'ll introduce the Business Intelligence team and present the mutual benefits with a partnership. We will also go into some examples on how to use our data, and you might learn a few things about our products that you didn\'t know before!',
        room: 'C1+C2',
        speakers: [Speakers['karin kullman']]
      },
      {
        id: 1,
        title: 'Design (and Build) for Snap',
        description: '“That was easy and quick - done with the snap of a finger!”. Is this how ALL your users perceive your product? If so, you might be better off going to the talk next door... The idea behind this talk began with my dog getting frustrated when failing to get to his delicious treat (I’ll show you exactly why). It made me think about user-centered design and its challenges. How can us product developers build products that actually support this approach? How can we design and build products for all user types when they differ so much from one another? This talk is for all you product developers. It is not focused on visual design styles. It is not focused on new technologies either. This talk maps out practices, supported by real-life examples. Following these practices will help you build products that users will love using.',
        room: 'C3',
        speakers: [Speakers['nir aravot']]
      },
      {
        id: 1,
        title: 'The Least Painful Way to Build a Web App',
        description: 'Server calls, user interactions, cross iframe communication... there\'s a lot happening in web apps. Trying to reason about all the conditions in the application logic is tricky and without some guidelines to keep it simple it can easily get out of hand.',
        room: 'C4',
        speakers: [Speakers['fernando vía canel'], Speakers['paulo ragonha']]
      }]
    },
    {
      startTime: '13:30',
      endTime: '13:45',
      events: [{
        id: 1,
        title: 'Transition'
      }]
    },
    {
      startTime: '13:45',
      endTime: '14:15',
      events: [{
        id: 1,
        title: 'Machine Learning For The Masses',
        description: 'Machine Learning seems to be on everyone\'s lips these days. In fact there is so much information out there that it is hard to really understand what it is and why you would want to use it. Never fear, when you come to my talk you will get an overview of the types of machine learning and different ways in which people are using it! The first step is demystifying the math. All you need to know is what the terms mean so you know which functions to call to start getting results! Now that you know the what let\'s explore the how! You will learn to identify good problems and I will walk you through my own learning experience. Finally, I will give you some tips on how to solve the problems you have today and the ones you will encounter tomorrow (or maybe just let your robot do those too).',
        room: 'C1+C2',
        speakers: [Speakers['mariana bocoi']]
      },
      {
        id: 1,
        title: 'Cashless Society and the Impact on Klarna and Beggary',
        description: 'With a push from governments, banks and consumers, becoming a cashless society is closer than ever. In this session I will talk about the efforts done in different countries to move away from cash, the benefits and challenges in a no cash society and new opportunities for Klarna. Will we become a cashless society in the foreseeable future? If you are an engineer or a product manager who wants to learn more about this important change that will impact each and everyone of us, this talk is for you.',
        room: 'C3',
        speakers: [Speakers['eran manor']]
      },
      {
        id: 1,
        title: 'Evolution Through Genetic Algorithms',
        description: 'Have you ever wondered about how evolution did such a good job in creating us, humans, even though billion years ago Earth was populated exclusively by simple, single celled organisms? Isn\'t that amazing? What is even cooler about it is that it can be used to solve all kinds of other problems! This talk will show you how evolution can be used as an all purpose algorithm to solve some optimisation problems you might run into. It will show you how to model your own evolution by teaching you how to tailor your own, specific crossover and mutation operators and how to choose the fittest individuals to drive forward your search of a solution. To prove that all of this is true and working, we are going to play with some usual and unusual applications of the evolution - from a small world with animals trying to evolve to get more food and mates, to usage of evolution in music composition and medicine.',
        room: 'C4',
        speakers: [Speakers['maja kontrec']]
      }]
    },
    {
      startTime: '14:15',
      endTime: '14:30',
      events: [{
        id: 1,
        title: 'Transition'
      }]
    },
    {
      startTime: '14:30',
      endTime: '15:00',
      events: [{
        id: 1,
        title: 'War Stories: A Journey of Implementing Kubernetes',
        description: 'This is the story of how Kubernetes became the platform for the Klarna build farm. Back in 2016, an idea for solving the problems of slow feedback loops and stagnant structures of running Jenkins in KCloud, was born. This was the beginning. In this session I will tell you the story of this Dawn of Joy, full of promises of new, cool features. I will also tell you about the Days of Improvement, during which we were blissfully unaware of the impending D-Day, the KCloud Decommission, the day which put everything to the test. But how did it end? Did it end? Did we solve our initial problem? Did we learn anything by implementing a cool, new, bleeding edge technology? By digging through post mortems and the shared team memory, I\'ll share the war stories of porting our entire service portfolio to a new platform, and teach you what you need to know if you ever want to go to war.',
        room: 'C1+C2',
        speakers: [Speakers['johanna simonsson']]
      },
      {
        id: 1,
        title: 'Mystery Talk',
        description: 'Shh... it\'s a secret',
        room: 'C3',
        speakers: [Speakers['a speaker']]
      },
      {
        id: 1,
        title: 'Prototype your idea today!',
        description: 'Product managers want to materialize their ideas rapidly and test their truths. On the other hand, designers and engineers don\'t like to build something that will be thrown away. Seriously, who would? Prototyping should be a low commitment effort. For the Klarna Payments Direct Debit launch, we came up with a pretty nice setup to swiftly build high-fidelity prototypes using Sagui, the Klarna UI and some more React. In this session, I\'ll show you how to build your own cool prototypes, and tell you why you should do it more often.',
        room: 'C4',
        speakers: [Speakers['jonathan trujillo']]
      }]
    },
    {
      startTime: '15:00',
      endTime: '15:15',
      events: [{
        id: 1,
        title: 'Transition'
      }]
    },
    {
      startTime: '15:15',
      endTime: '15:45',
      events: [{
        id: 1,
        title: 'Software Erosion Resistance',
        description: 'Most developers are familiar with the concept of “technical debt”. Technical debt comes in many forms: it\'s constant library updates, security patches, changing contracts with other tools and systems, and many other. All of these become a “tax” on working software. It may be possible to ignore this tax for certain amount of time but after a while either the software stops working or the changes to it become really hard to perform. Many developers participated in rewriting some existing legacy system from scratch. When does software become “legacy” and how can its lifetime be prolonged? Can we avoid rewriting everything from scratch every 5 years? Do microservices change things? How will containerisation affect this? What about serverless infrastructure? Why some tools like Heroku call themselves “erosion resistant”? I don\'t aim to provide ready-made answers, but I hope to raise awareness and bring up discussions about ways of building maintainable software systems at Klarna.',
        room: 'C1+C2',
        speakers: [Speakers['sergey evstifeev']]
      },
      {
        id: 1,
        title: 'UX Design in Context',
        description: 'Have you ever asked yourself, why you don´t manage to buy a ticket at the ticket machine in a foreign town even though you have an engineering degree? The talk will explain the principles that underlie good UX design and give some background on user and task requirements. You will learn, why UI toolkits are not enough to produce usable UIs and that data and collaboration is key to do a really good job in UX/UI design.',
        room: 'C3',
        speakers: [Speakers['brigitte ringbauer']]
      },
      {
        id: 1,
        title: 'Connecting the Dots - How Cookie Syncing Works',
        description: 'Internet advertising is one of the fastest growing market on the planet. The goal in most cases is to maximize revenue from the ads. One of the way to go towards this goal is to narrow the target audience to people that actually may be interested in the product/service. To help with that advertisers utilizing cookie syncing to collect and properly activate user data.',
        room: 'C4',
        speakers: [Speakers['grzegorz łukaszewicz']]
      }]
    },
    {
      startTime: '15:45',
      endTime: '16:15',
      events: [{
        id: 1,
        title: 'Fika'
      }]
    }
  ]
}

export const AgendaDataLightningEnding : Agenda<RoomsLightningEnding> = {
  roomNames: ['C1+C2+C3'],
  timeSlots: [
    {
      startTime: '16:15',
      endTime: '17:15',
      events: [{
        id: 1,
        title: 'Lightning Talks',
        room: 'C1+C2+C3'
      }]
    },
    {
      startTime: '',
      endTime: '',
      events: [{
        id: 1,
        title: 'How to make things accessible with html5&co?',
        description: 'TBA',
        room: 'C1+C2+C3',
        speakers: [Speakers['immanuel kühnle']]
      },
      {
        id: 1,
        title: 'A (wo)man\'s world!',
        description: 'Gender diversity is a hot topic at the moment! Here in Engineering, I\'m one of only two Team Leads that identify as a woman. I would like to share my experience of leading a team of only men. I joined Klarna almost 7 years ago, fresh from university, at a time when there were only 3-4 women in Engineering. I will share how hard (or easy) it has been for me to get to where I am today, what I\'ve heard (and learnt) in the process (good and bad), what helped me get here and what almost made me give up!',
        room: 'C1+C2+C3',
        speakers: [Speakers['nadia mohedano troyano']]
      }]
    },
    {
      startTime: '',
      endTime: '',
      events: [{
        id: 1,
        title: 'Trust me, I work in IT',
        description: 'Telephone tech support scams are very common. And apparently successful. Why? Trust is the foundation of all human connections and eventually people want to trust people. This is a talk about what happens when such a scammer calls a security guy with free time on his hands.',
        room: 'C1+C2+C3',
        speakers: [Speakers['georgios kryparos']]
      },
      {
        id: 1,
        title: 'Color psychology in web design',
        description: 'Colors have an enormous impact on our mood and emotional state. Although the effects of colors differ from person to person, some effects are universal. What does that mean, and how can we utilize it as developers, designers and product people? Let\'s find out!',
        room: 'C1+C2+C3',
        speakers: [Speakers['linoy zaga']]
      }]
    },
    {
      startTime: '',
      endTime: '',
      events: [{
        id: 1,
        title: 'Screen Scraping - The Good, the Bad and the Funny',
        description: 'SOFORTs main product is based on the screen scraping of bank websites. While developing and maintaining such Technology, one comes into contact with an API not expected to be used in that way. This talk centers around common pitfalls, daily boulder rolling and other things Sisyphus would do to escape death another time, while also maintaining sanity when dealing with the craziest errors.',
        room: 'C1+C2+C3',
        speakers: [Speakers['benedikt kusemann']]
      },
      {
        id: 1,
        title: 'Juggle Me This, Juggle Me That',
        description: 'Team "Awesome" seem to have a lot on these days. They have company goals, domain goals, experiments they want to build and tech debt to tied up. Urgent Production Issues seem to pop up out of nowhere... and on top of it all, their Product Manager has just added this-next-great-thing to their backlog! How are they supposed to manage it all? I feel for them; I really do. But it\'s not unlike the situation I face each month: as soon as the paycheck comes in, my significant other always seems to have other ideas as to where that money should go. In my talk, I\'m going to illustrate a lightweight budgeting system that we use to make sure essential bills are paid, commitments are met, surprises are catered for and little luxuries are picked up along the way. It means conversations about what we pay for and when can be clearer and easier, leaving us alot happier as a result. And as they say, a happy wife is a happy life...',
        room: 'C1+C2+C3',
        speakers: [Speakers['derek homer']]
      }]
    },
    {
      startTime: '',
      endTime: '',
      events: [{
        id: 1,
        title: 'A SOLID grasp on functional programming',
        description: 'SOLID principles are the golden guidelines of every Object-Oriented programmer. But can they be applicable for Functional Programming as well? Case-specific or a universal truth? The talk will explore these questions.',
        room: 'C1+C2+C3',
        speakers: [Speakers['talya stern']]
      },
      {
        id: 1,
        title: 'How China and Brazil worked it out',
        description: 'Distance makes everything harder. With me and my boyfriend in China and Brazil, the relationship needed special attention. Being on a team spanning two continents, we had to adopt practices to help us perform as ONE team. I will share my two stories, what I learned from them, and how you can use them to be effective in a global world.',
        room: 'C1+C2+C3',
        speakers: [Speakers['mei yang']]
      }]
    },
    {
      startTime: '',
      endTime: '',
      events: [{
        id: 1,
        title: 'Go home Ruby, you\'re drunk',
        description: 'Ruby is renowned for being one of the most programmer-friendly languages out there. Its feature richness is usually a blessing, but it is also a curse - an abundance of features sets the stage for many, many WTFs. In this short session we\'ll cover some questionable Ruby features, ranging from simple annoyances to monstrous clusters of horror.',
        room: 'C1+C2+C3',
        speakers: [Speakers['tamir taub']]
      },
      {
        id: 1,
        title: 'Dashboard Driven Development',
        description: 'Data helps making sense of your service, yet, it\'s meaningless without context and subsequent actions. In this life-changing talk, you will learn how dashboards can assist you in getting the answer to your most pressing questions.',
        room: 'C1+C2+C3',
        speakers: [Speakers['guy israeli']]
      }]
    },
    {
      startTime: '17:15',
      endTime: '17:20',
      events: [{
        id: 1,
        title: 'Closing words',
        room: 'C1+C2+C3',
        speakers: [Speakers['phillippe vimard']]
      }]
    },
    {
      startTime: '17:20',
      endTime: '19:00',
      events: [{
        id: 1,
        title: 'Drinks'
      }]
    }
  ]
}

// Go over all events and give them and their speakers a unique ID
let eventID : number = 1
function GenerateEventIDs<T>(agendaData : Agenda<T>) : void {
  agendaData.timeSlots.forEach(timeslot => {
    timeslot.events.forEach(event => {
      event.id = eventID
      eventID += 1
    })
  })
}

GenerateEventIDs(AgendaDataGathering)
GenerateEventIDs(AgendaDataOpening)
GenerateEventIDs(AgendaDataTalks)
GenerateEventIDs(AgendaDataLightningEnding)
