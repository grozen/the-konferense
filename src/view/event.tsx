import { AppState } from '../state'
import { possibleStates as EventAnimationStates } from '../state/event-state'
import { Event } from '../data/agenda-data'
import { Speaker as SpeakerType } from '../data/speaker-data'
import { VNode } from '@cycle/dom'
import { classes, style, keyframes } from 'typestyle'
import * as csstips from 'csstips'
import { amountToWidthClass} from '../helpers'

import Speaker from './speaker'

function eventAnimationStateToClass(state : EventAnimationStates) : string {
  const expandKeyframes = keyframes({
    '0%': {maxHeight: '1.2em'},
    '100%': {maxHeight: '75em'}
  })

  const collapseKeyframes = keyframes({
    '100%': {maxHeight: '1.2em'},
    '0%': {maxHeight: '75em'}
  })

  const collapsedClass = style({
    textAlign: 'justify',
    height: '1.2em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  })
  const expandingClass = style({
    textAlign: 'justify',
    maxHeight: '1.2em',
    overflow: 'hidden',
    animationName: expandKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(1,0,1,0)'
  })
  const expandedClass = style({
    textAlign: 'justify',
    maxHeight: '75em',
    overflow: 'hidden'
  })
  const collapsingClass = style({
    textAlign: 'justify',
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

function Speakers(speakers : SpeakerType[], speakerStates : EventAnimationStates[]) : VNode {
  const speakersContainerClass = style(csstips.horizontal, csstips.aroundJustified)
  const speakerWidthClass = amountToWidthClass(speakers.length, 10)

  return (
    <div className={speakersContainerClass}>
      {speakers.map((speaker, index) => Speaker(speaker, speakerWidthClass, speakerStates[index], index))}
    </div>
  )
}

export default function Event<T>(event : Event<T>, state : AppState, widthClass : string = '') : VNode {
  const eventMarginClass = style({margin: '0 auto'})

  const titleClass = style({
    color: '#fff',
    fontFamily: 'Bangers, sans-serif',
    fontSize: '1.5em',
    letterSpacing: '1px',
    margin: '0',
    textAlign: 'center',
    textShadow: '4px 4px 0 #000, -1px -1px 0 black, 0 -1px 0 black, -1px 0 0 black'
  })

  return (
    <div className={classes(eventMarginClass, widthClass)} data-eventid={event.id}>
      {event.speakers ? Speakers(event.speakers, state.events[event.id].speakerStates) : undefined}
      <p className={titleClass}>{event.title}</p>
      <div className='event-description'>
        {event.description ? <p className={eventAnimationStateToClass(state.events[event.id].descriptionState)}>{event.description}</p> : undefined}
      </div>
    </div>
  )
}
