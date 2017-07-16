import { AppState } from '../state'
import { Event } from '../data/agenda-data'
import { Speaker as SpeakerType } from '../data/speaker-data'
import { VNode } from '@cycle/dom'
import { classes, style, keyframes } from 'typestyle'
import * as csstips from 'csstips'
import { amountToWidthClass } from '../helpers'

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

function Speakers(speakers : SpeakerType[]) : VNode {
  const speakersContainerClass = style(csstips.horizontal, csstips.aroundJustified)
  const speakerWidthClass = amountToWidthClass(speakers.length, 10)

  return (
    <div className={speakersContainerClass}>
      {speakers.map(speaker => Speaker(speaker, speakerWidthClass))}
    </div>
  )
}

export default function Event<T>(event : Event<T>, state : AppState, widthClass : string) : VNode {
  const eventMarginClass = style({margin: '0 auto'})

  return (
    <div className={classes(eventMarginClass, widthClass)}>
      {event.speakers ? Speakers(event.speakers) : undefined}
      <p>{event.title}</p>
      <div className='event-description' data-eventid={event.id}>
        {event.description ? <p className={stateToClass(state.events[event.id].descriptionState)}>{event.description}</p> : undefined}
      </div>
    </div>
  )
}