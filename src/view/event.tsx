import { AppState } from '../state'
import { Event } from '../data/agenda-data'
import { VNode } from '@cycle/dom'
import { style, keyframes } from 'typestyle'
import { possibleStates as EventAnimationStates } from '../state/event-state'

import Speaker from './speaker'

function stateToClass(state : EventAnimationStates) : string {
  const expandKeyframes = keyframes({
    '0%': {maxHeight: '1.2em'},
    '100%': {maxHeight: '75em'}
  })

  const collapseKeyframes = keyframes({
    '100%': {maxHeight: '1.2em'},
    '0%': {maxHeight: '75em'}
  })
  
  const collapsedClass = style({
    height: '1.2em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  })
  const expandingClass = style({
    maxHeight: '1.2em',
    overflow: 'hidden',
    animationName: expandKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(1,0,1,0)'
  })
  const expandedClass = style({
    maxHeight: '75em',
    overflow: 'hidden'
  })
  const collapsingClass = style({
    maxHeight: '75em',
    overflow: 'hidden',
    animationName: collapseKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(0,1,0,1)'
  })

  switch (state) {
    case 'collapsed':
      return collapsedClass
    case 'expanding':
      return expandingClass
    case 'collapsing':
      return collapsingClass
    case 'expanded':
      return expandedClass
    default:
      throw 'impossible state'
  }
}

export default function Event(event : Event, state : AppState) : VNode {
  return (
    <div>
      {event.speaker ? Speaker(event.speaker) : undefined}
      <p>{event.title}</p>
      <div className='event-description' data-eventid={event.id}>
        {event.description ? <p className={stateToClass(state.events[event.id].descriptionState)}>{event.description}</p> : undefined}
      </div>
    </div>
  )
}