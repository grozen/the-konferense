import { AppState } from '../state'
import { possibleStates as EventAnimationStates } from '../state'
import { Event } from '../data/agenda-data'
import { Speaker as SpeakerType } from '../data/speaker-data'
import { VNode } from '@cycle/dom'
import { classes, style, keyframes } from 'typestyle'
import * as csstips from 'csstips'
import { amountToWidthClass} from '../helpers'

import Speaker from './speaker'
import expandImage from '../../public/expand-down.png'

function eventAnimationStateToDesciptionClass(state : EventAnimationStates) : string {
  const expandKeyframes = keyframes({
    '0%': {maxHeight: '1.3em'},
    '100%': {maxHeight: '75em'}
  })

  const collapseKeyframes = keyframes({
    '100%': {maxHeight: '1.3em'},
    '0%': {maxHeight: '75em'}
  })

  const baseStyle = {
    fontSize: '0.85em',
    lineHeight: '1.4em',
    cursor: 'pointer',
    marginBottom: 0
  }

  const collapsedClass = style({
    textAlign: 'center',
    height: '1.3em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }, baseStyle)
  const expandingClass = style({
    textAlign: 'justify',
    maxHeight: '1.3em',
    overflow: 'hidden',
    animationName: expandKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(1,0,1,0)'
  }, baseStyle)
  const expandedClass = style({
    textAlign: 'justify',
    maxHeight: '75em',
    overflow: 'hidden'
  }, baseStyle)
  const collapsingClass = style({
    textAlign: 'justify',
    maxHeight: '75em',
    overflow: 'hidden',
    animationName: collapseKeyframes,
    animationDuration: '0.5s',
    animationTimingFunction: 'cubic-bezier(0,1,0,1)'
  }, baseStyle)

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

function eventAnimationStateToExpanderClass(state : EventAnimationStates) : string {
  const baseClass = {
    cursor: 'pointer',
    width: '35px'
  }

  const expandKeyframes = keyframes({
    '0%': {transform: 'scaleY(1)'},
    '100%': {transform: 'scaleY(-1)'}
  })

  const collapseKeyframes = keyframes({
    '100%': {transform: 'scaleY(1)'},
    '0%': {transform: 'scaleY(-1)'}
  })

  const collapsedClass = style(baseClass)
  const expandingClass = style({
    animationName: expandKeyframes,
    animationDuration: '0.5s'
  }, baseClass)

  const expandedClass = style({transform: 'scaleY(-1)'}, baseClass)

  const collapsingClass = style({
    animationName: collapseKeyframes,
    animationDuration: '0.5s'
  }, baseClass)

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

  let titleClass = style({
    color: '#fff',
    margin: '0',
    textAlign: 'center'
  })

  if (event.speakers) {
    titleClass = style({
      color: '#fff',
      fontFamily: 'Bangers, sans-serif',
      fontSize: '1.5em',
      letterSpacing: '1px',
      margin: '0',
      textAlign: 'center',
      textShadow: '4px 4px 0 #000, -1px -1px 0 black, 0 -1px 0 black, -1px 0 0 black',
      cursor: 'pointer'
    })
  }

  let titleHighlightClass = undefined
  if (event.description) {
    titleHighlightClass = style({
      $nest: {
        [`&:hover .${titleClass}`]: {
          color: 'moccasin'
        }
      }
    })
  }

  return (
    <div className={classes(eventMarginClass, widthClass)} data-eventid={event.id.toString()}>
      {event.speakers ? Speakers(event.speakers, state.events[event.id].speakerStates) : undefined}
      <div className={classes('event-description', titleHighlightClass)}>
        <p className={titleClass}>{event.title}</p>
        {event.description ? <p className={eventAnimationStateToDesciptionClass(state.events[event.id].descriptionState)}>{event.description}</p> : undefined}
        {event.description ? <img className={eventAnimationStateToExpanderClass(state.events[event.id].descriptionState)} src={expandImage}></img> : undefined}
      </div>
    </div>
  )
}
