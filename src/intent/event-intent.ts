import xs, { Stream } from 'xstream'
import { DOMSource } from '@cycle/dom'
import { Reducer, initialState, AppState } from '../state'
import { possibleStates as EventAnimationStates } from '../state'

function nextStateForAnimationStart(currentState : EventAnimationStates) : EventAnimationStates {
  switch (currentState) {
  case 'collapsed':
    return 'expanding'
  case 'expanding':
    return 'collapsing'
  case 'collapsing':
    return 'expanding'
  case 'expanded':
    return 'collapsing'
  default:
    throw 'impossible state'
  }
}

function nextStateForAnimationEnd(currentState : EventAnimationStates) : EventAnimationStates {
  switch (currentState) {
  case 'collapsed':
    return currentState
  case 'expanding':
    return 'expanded'
  case 'collapsing':
    return 'collapsed'
  case 'expanded':
    return currentState
  default:
    throw 'impossible state'
  }
}

function buildStartEventDescriptionAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const eventDiv = (ev.currentTarget as HTMLElement).parentElement as HTMLElement
      const eventID = parseInt(eventDiv.dataset.eventid as string)

      newState.events[eventID].descriptionState = nextStateForAnimationStart(prev.events[eventID].descriptionState)
      return newState
    }
  )
}

function buildFinishEventDescriptionAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const eventDiv = ((ev.currentTarget as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement
      const eventID = parseInt(eventDiv.dataset.eventid as string)

      newState.events[eventID].descriptionState = nextStateForAnimationEnd(prev.events[eventID].descriptionState)
      return newState
    }
  )
}

function buildStartSpeakerBioAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const speakerDiv = ev.currentTarget as HTMLElement
      const eventDiv = (speakerDiv.parentElement as HTMLElement).parentElement as HTMLElement
      const eventID = parseInt(eventDiv.dataset.eventid as string)
      const speakerIndex = parseInt(speakerDiv.dataset.speakerindex as string)

      newState.events[eventID].speakerStates[speakerIndex] = nextStateForAnimationStart(prev.events[eventID].speakerStates[speakerIndex])
      return newState
    }
  )
}

function buildFinishSpeakerBioAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const speakerDiv = (ev.currentTarget as HTMLElement).parentElement as HTMLElement
      const eventDiv = (speakerDiv.parentElement as HTMLElement).parentElement as HTMLElement
      const eventID = parseInt(eventDiv.dataset.eventid as string)
      const speakerIndex = parseInt(speakerDiv.dataset.speakerindex as string)

      newState.events[eventID].speakerStates[speakerIndex] = nextStateForAnimationEnd(prev.events[eventID].speakerStates[speakerIndex])
      return newState
    }
  )
}

export default function EventIntent(DOM : DOMSource) : Stream<Reducer> {
  const eventDescriptionClick$ = DOM.select('.event-description').events('click')
  const eventDescriptionAnimationEnd$ = DOM.select('.event-description > p').events('animationend')

  const startEventDescriptionAnimation$ = eventDescriptionClick$.map(ev => buildStartEventDescriptionAnimationReducer(ev))
  const finishEventDescriptionAnimation$ = eventDescriptionAnimationEnd$.map(ev => buildFinishEventDescriptionAnimationReducer(ev))

  const speakerClick$ = DOM.select('.speaker').events('click')
  const speakerBioAnimationEnd$ = DOM.select('.speaker > p').events('animationend')

  const startSpeakerBioAnimation$ = speakerClick$.map(ev => buildStartSpeakerBioAnimationReducer(ev))
  const finishSpeakerBioAnimation$ = speakerBioAnimationEnd$.map(ev => buildFinishSpeakerBioAnimationReducer(ev))

  return xs.merge<Reducer>(
    startEventDescriptionAnimation$,
    finishEventDescriptionAnimation$,
    startSpeakerBioAnimation$,
    finishSpeakerBioAnimation$
  )
}