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

function buildStartTeamMemberBioAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const teamMemberDiv = ev.currentTarget as HTMLElement
      const teamMemberIndex = parseInt(teamMemberDiv.dataset.teammemberindex as string)

      newState.team[teamMemberIndex] = nextStateForAnimationStart(prev.team[teamMemberIndex])
      return newState
    }
  )
}

function buildFinishTeamMemberBioAnimationReducer(ev : Event) : Reducer {
  return(
    (prev : AppState) => {
      const newState : AppState = {...prev}
      const teamMemberDiv = ((ev.currentTarget) as HTMLElement).parentElement as HTMLElement
      const teamMemberIndex = parseInt(teamMemberDiv.dataset.teammemberindex as string)

      newState.team[teamMemberIndex] = nextStateForAnimationEnd(prev.team[teamMemberIndex])
      return newState
    }
  )
}

export default function TeamIntent(DOM : DOMSource) : Stream<Reducer> {
  const teamMemberClick$ = DOM.select('.team-member').events('click')
  const teamMemberBioAnimationEnd$ = DOM.select('.team-member > p').events('animationend')

  const startTeamMemberBioAnimation$ = teamMemberClick$.map(ev => buildStartTeamMemberBioAnimationReducer(ev))
  const finishTeamMemberBioAnimation$ = teamMemberBioAnimationEnd$.map(ev => buildFinishTeamMemberBioAnimationReducer(ev))

  return xs.merge<Reducer>(
    startTeamMemberBioAnimation$,
    finishTeamMemberBioAnimation$
  )
}