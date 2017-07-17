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

  const baseStyle = {
    fontSize: '0.85em',
    lineHeight: '1.4em',
    cursor: 'pointer'
  }

  const collapsedClass = style({
    textAlign: 'justify',
    height: '0',
    overflow: 'hidden'
  }, baseStyle)
  const expandingClass = style({
    textAlign: 'justify',
    maxHeight: '0',
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

export default function Speaker(speaker : Speaker, widthClass : string, speakerState : EventAnimationStates, index : number) : VNode {
  const speakerClass = style({
    position: 'relative',
    $nest: {
      '&:nth-child(2)::before': {
        content: `'&'`,
        color: '#fff',
        fontFamily: 'Bangers, sans-serif',
        fontSize: '4em',
        textShadow: '4px 4px 0 #000, -1px -1px 0 black, 0 -1px 0 black, -1px 0 0 black',
        top: '35px',
        position: 'absolute',
        left: '-35px'
      }
    }
  })

  const speakerImageClass = style({
    borderRadius: '50%',
    height: '150px',
    boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000'
  })

  const speakerNameClass = style({
    margin: '10px 0 0 0',
    cursor: 'pointer'
  })

  return (
    <div className={classes('speaker', widthClass, speakerClass)} data-speakerindex={index.toString()}>
      <img className={speakerImageClass} src={speaker.portrait}/>
      <p className={speakerNameClass}>{speaker.name}</p>
      <p className={eventAnimationStateToClass(speakerState)}>{speaker.bio}</p>
    </div>
  )
}
