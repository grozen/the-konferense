import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { Speaker } from '../data/speaker-data'

import { style } from 'typestyle'

export default function Speaker(speaker : Speaker, widthClass : string) : VNode {
  const speakerImageClass = style({
    borderRadius: '50%',
    height: '150px',
    boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000'
  })

  const speakerBioClass = style({textAlign: 'justify'})

  return (
    <div className={widthClass}>
      <img className={speakerImageClass} src={speaker.portrait}/>
      <p>{speaker.name}</p>
      <p className={speakerBioClass}>{speaker.bio}</p>
    </div>
  )
}
