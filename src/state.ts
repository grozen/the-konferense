import { AppData } from './data'
import { possibleStates, EventState } from './state/event-state'
import { Agenda, TimeSlot } from './data/agenda-data'

type EventStates = {[eventID : number] : EventState}

export type Reducer = (prev : AppState) => AppState

export type AppState = {
  events : EventStates
}

function SetCollapsedEvents<T>(agendaData : Agenda<T>) : EventStates {
  const eventStates : EventStates = {}
  agendaData.timeSlots.forEach(timeslot => {
    timeslot.events.forEach(event => {
      eventStates[event.id] = {
        descriptionState: 'collapsed',
        speakerStates: event.speakers ? event.speakers.map<possibleStates>(s => 'collapsed') : []
      }
    })
  })

  return eventStates
}

export function initialState() : AppState {
  const initialEventStates : EventStates = {}
  Object.assign(initialEventStates, ...(Object.keys(AppData.Agenda).map<EventStates>(key => SetCollapsedEvents(AppData.Agenda[key]))))

  return {
    events: initialEventStates
  }
}