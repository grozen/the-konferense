import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { Speaker } from '../data/speaker-data'

import { style } from 'typestyle'

export default function Speaker(speaker : Speaker) : VNode {
  const speakerImageClass = style({
    borderRadius: '50%',
    height: '150px',
    boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000'
  })

  return (
    <div>
      <img className={speakerImageClass} src={speaker.portrait}/>
      <p>{speaker.name}</p>
      <p>{speaker.bio}</p>
    </div>
  )
}
