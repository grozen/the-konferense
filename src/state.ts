import { AppData } from './data'
import { EventState } from './state/event-state'
import { TimeSlot } from './data/agenda-data'

type EventStates = {[eventID : number] : EventState}

export type Reducer = (prev : AppState) => AppState

export type AppState = {
  events : EventStates
}

export function initialState() : AppState {
  const eventStates : EventStates = {}
  AppData.Agenda.timeSlots.forEach((timeslot => {
    timeslot.events.forEach(event => {
      eventStates[event.id] = { descriptionState: 'collapsed', speakerState: 'collapsed'}
    })
  }))

  return {
    events: eventStates
  }
}