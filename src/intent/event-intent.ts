import xs, { Stream } from 'xstream'
import { DOMSource } from '@cycle/dom'
import { Reducer, initialState, AppState } from '../state'
import { possibleStates as EventAnimationStates } from '../state/event-state'
  
function buildStartAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const eventID = parseInt((ev.currentTarget as HTMLElement).dataset.eventid as string)

      let newDescriptionState : EventAnimationStates = 'collapsed'

       switch (prev.events[eventID].descriptionState) {
        case 'collapsed':
          newDescriptionState = 'expanding'
          break
        case 'expanding':
          newDescriptionState = 'collapsing'
          break
        case 'collapsing':
          newDescriptionState = 'expanding'
          break
        case 'expanded':
          newDescriptionState = 'collapsing'
          break
        default:
          throw 'impossible state'
      }

      newState.events[eventID].descriptionState = newDescriptionState
      return newState
    }
  )
}

function buildFinishAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const descriptionDiv = (ev.currentTarget as HTMLElement).parentElement as HTMLElement
      const eventID = parseInt(descriptionDiv.dataset.eventid as string)

      let newDescriptionState : EventAnimationStates = 'collapsed'

       switch (prev.events[eventID].descriptionState) {
        case 'collapsed':
          // Do nothing
          break
        case 'expanding':
          newDescriptionState = 'expanded'
          break
        case 'collapsing':
          newDescriptionState = 'collapsed'
          break
        case 'expanded':
          // Do nothing
          break
        default:
          throw 'impossible state'
      }

      newState.events[eventID].descriptionState = newDescriptionState
      return newState
    }
  )
}
  
export default function EventIntent(DOM : DOMSource) : Stream<Reducer> {
  const click$ = DOM.select('.event-description').events('click')
  const animationEnd$ = DOM.select('.event-description > p').events('animationend')

  const startAnimation$ = click$.map(ev => buildStartAnimationReducer(ev))
  const finishAnimation$ = animationEnd$.map(ev => buildFinishAnimationReducer(ev))

  return xs.merge<Reducer>(startAnimation$, finishAnimation$)
}