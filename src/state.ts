import { AppData } from './data'
import { EventState } from './state/event-state'
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
      eventStates[event.id] = { descriptionState: 'collapsed', speakerState: 'collapsed'}
    })
  })

  return eventStates
}

export function initialState() : AppState {
  return {
    events: {
      ...SetCollapsedEvents(AppData.Agenda.Gathering),
      ...SetCollapsedEvents(AppData.Agenda.Opening)
    }
  }
}