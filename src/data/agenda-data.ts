import { Speaker, Speakers } from './speaker-data'

type RoomsGathering = 'C halls' | 'A2'
type RoomsOpening = 'A2'
type RoomsTalks = 'C1+C2' | 'C3' | 'C4'
type RoomsLightningEnding = 'C1+C2+C3'

export type Event<T> = {
  id : number
  title : string
  room? : T
  speaker? : Speaker
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
        room: 'A2'
      }]
    },
    {
      startTime: '09:15',
      endTime: '10:05',
      events: [{
        id: 1,
        title: 'Keynote - The Art of Reinvention',
        room: 'A2',
        speaker: Speakers['kara defrias']
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
        room: 'A2'
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
      startTime: '08:00',
      endTime: '09:00',
      events: [{
        id: 1,
        title: 'I\'m a cross room event with no speaker!'
      }]
    },
    {
      startTime: '09:00',
      endTime: '09:30',
      events: [{
        id: 1,
        title: 'This is some dude talking to everyone',
        description: 'You would use something like this for the keynote and the opening words',
        speaker: Speakers['speaker mcspeakerface']
      }]
    },
    {
      startTime: '09:30',
      endTime: '10:30',
      events: [{
        id: 1,
        title: 'Thing A',
        description: 'It\'s that first thing, you know how they are',
        room: 'C1+C2',
        speaker: Speakers['alice']
      },
      {
        id: 1,
        title: 'Thing B',
        description: 'Thing #2, I choose you!',
        room: 'C3',
        speaker: Speakers['bob']
      },
      {
        id: 1,
        title: 'Thing C',
        description: 'The third thing can sometimes get out of hand, so I would be on the lookout if I were you. Also the text here is a little longer in order to test out expansion.'.repeat(5),
        room: 'C4',
        speaker: Speakers['carol']
      }]
    },
    {
      startTime: '10:30',
      endTime: '11:00',
      events: [{
        id: 1,
        title: 'Dinner'
      },
      {
        id: 1,
        title: 'A show (demonstrates consequtive events in same timeslot)'
      }]
    },
    {
      startTime: '11:00',
      endTime: '12:00',
      events: [{
        id: 1,
        title: 'Lightning Talks'
      },
      {
        id: 1,
        title: 'Long description',
        description: 'This is a really long description. The idea behind this is that I really want to see how text expansion/collapsing works and in order to get that done I really need a good chunk of text. I think this will do nicely.'.repeat(3),
        speaker: Speakers['foo']
      },
      {
        id: 1,
        title: 'Shocking title',
        description: 'Shocking description',
        speaker: Speakers['bar']
      },
      {
        id: 1,
        title: 'Shocking title',
        description: 'Shocking description',
        speaker: Speakers['baz']
      },
      {
        id: 1,
        title: 'Shocking title',
        description: 'Shocking description',
        speaker: Speakers['sanic']
      },
      {
        id: 1,
        title: 'Shocking title',
        description: 'Shocking description',
        speaker: Speakers['baman']
      },
      {
        id: 1,
        title: 'Shocking title',
        description: 'Shocking description',
        speaker: Speakers['piderman']
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
