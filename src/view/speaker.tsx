import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { possibleStates as EventAnimationStates } from '../state/event-state'
import { Speaker } from '../data/speaker-data'

import { classes, style, keyframes } from 'typestyle'

function eventAnimationStateToClass(state : EventAnimationStates) : string {
  const expandKeyframes = keyframes({
    '0%': {maxHeight: '0'},
    '100%': {maxHeight: '75em'}
  })

  const collapseKeyframes = keyframes({
    '100%': {maxHeight: '0em'},
    '0%': {maxHeight: '75em'}
  })

  const collapsedClass = style({
    textAlign: 'justify',
    height: '0',
    overflow: 'hidden'
  })
  const expandingClass = style({
    textAlign: 'justify',
    maxHeight: '0',
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

export default function Speaker(speaker : Speaker, widthClass : string, speakerState : EventAnimationStates, index : number) : VNode {
  const speakerImageClass = style({
    borderRadius: '50%',
    height: '150px',
    boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000'
  })

  const speakerBioClass = style({textAlign: 'justify'})

  return (
    <div className={classes('speaker', widthClass)} data-speakerindex={index}>
      <img className={speakerImageClass} src={speaker.portrait}/>
      <p>{speaker.name}</p>
      <p className={eventAnimationStateToClass(speakerState)}>{speaker.bio}</p>
    </div>
  )
}
