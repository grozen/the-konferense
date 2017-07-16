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
        speakers: [Speakers['phillippe vimard']]
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
        title: 'Screenscraping Browsers',
        description: 'It\'s a secret!',
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
        description: '--REDACTED--',
        room: 'C1+C2',
        speakers: [Speakers['adam bergmark']]
      },
      {
        id: 1,
        title: 'Wavy Under the Hood',
        description: 'If you open the hood of your car and see a Wavy in there, you should consider taking your car to the shop',
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
        title: 'Design for Snap',
        description: 'Palm tree x3',
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
        description: 'Machine Learning seems to be on everyone\'s lips these days. In fact there is so much information out there that it is hard to really understand what it is and why you would want to use it. Never fear, when you come to my talk you will get an overview of the types of machine learning and different ways in which people are using it!&nbsp;The first step is demystifying the math. All you need to know is what the terms mean so you know which functions to call to start getting results!&nbsp;Now that you know the what let\'s explore the how! You will learn to identify good problems and I will walk you through my own learning experience.&nbsp;Finally, I will give you some tips on how to solve the problems you have today and the ones you will encounter tomorrow (or maybe just let your robot do those too).',
        room: 'C1+C2',
        speakers: [Speakers['mariana bocoi']]
      },
      {
        id: 1,
        title: 'Cashless Society and the Impact on Klarna and Beggary',
        description: 'With a push from governments, banks and consumers, becoming a cashless society is closer than ever.&nbsp;In this session I will talk about the efforts done in different countries to move away from cash, the benefits and challenges in a no cash society and new opportunities for Klarna.&nbsp;Will we become a cashless society in the foreseeable future?&nbsp;If you are an engineer or a product manager who wants to learn more about this important change that will impact each and everyone of us, this talk is for you.',
        room: 'C3',
        speakers: [Speakers['eran manor']]
      },
      {
        id: 1,
        title: 'Evolution Through Genetic Algorithms',
        description: 'Have you ever wondered about how evolution did such a good job in creating us, humans, even though billion years ago Earth was populated exclusively by simple, single celled organisms? Isn\'t that amazing?&nbsp;What is even cooler about it is that it can be used to solve all kinds of other problems!&nbsp;This talk will show you how evolution can be used as an all purpose algorithm to solve some optimisation problems you might run into. It will show you how to model your own evolution by teaching you how to tailor your own, specific crossover and mutation operators and how to choose the fittest individuals to drive forward your search of a solution.&nbsp;To prove that all of this is true and working, we are going to play with some usual and unusual applications of the evolution - from a small world with animals trying to evolve to get more food and mates, to usage of evolution in music composition and medicine.',
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
        description: 'This is the story of how Kubernetes became the platform for the Klarna build farm. Back in 2016, an idea for solving the problems of slow feedback loops and stagnant structures of running Jenkins in KCloud, was born. This was the beginning.&nbsp;In this session I will tell you the story of this Dawn of Joy, full of promises of new, cool features. I will also tell you about the Days of Improvement, during which we were blissfully unaware of the impending D-Day, the KCloud Decommission, the day which put everything to the test.&nbsp;But how did it end? Did it end? Did we solve our initial problem? Did we learn anything by implementing a cool, new, bleeding edge technology? By digging through post mortems and the shared team memory, I\'ll share the war stories of porting our entire service portfolio to a new platform, and teach you what you need to know if you ever want to go to war.',
        room: 'C1+C2',
        speakers: [Speakers['johanna simonsson']]
      },
      {
        id: 1,
        title: 'Billpay / Luke Tuttle',
        description: 'Man versus company! Only one will emerge victorious!',
        room: 'C3'
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
        description: 'Most developers are familiar with the concept of “technical debt”. Technical debt comes in many forms: it\'s constant library updates, security patches, changing contracts with other tools and systems, and many other. All of these become a “tax” on working software. It may be possible to ignore this tax for certain amount of time but after a while either the software stops working or the changes to it become really hard to perform. Many developers participated in rewriting some existing legacy system from scratch. When does software become “legacy” and how can its lifetime be prolonged? Can we avoid rewriting everything from scratch every 5 years? Do microservices change things? How will containerisation affect this? What about serverless infrastructure? Why some tools like Heroku call themselves “erosion resistant”?&nbsp;I don\'t aim to provide ready-made answers, but I hope to raise awareness and bring up discussions about ways of building maintainable software systems at Klarna.',
        room: 'C1+C2',
        speakers: [Speakers['sergey evstifeev']]
      },
      {
        id: 1,
        title: 'UX Design in Context',
        description: 'This talk is so mysterious, one could only guess what it is about',
        room: 'C3',
        speakers: [Speakers['brigitte ringbauer']]
      },
      {
        id: 1,
        title: 'Connecting the Dots - How Does Cookie Syncing Works, Based on Klarna Upstream Project',
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

// Go over all events and give them a unique ID
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
