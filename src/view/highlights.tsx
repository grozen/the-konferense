import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style, keyframes } from 'typestyle'
import { titleToAnchor } from '../helpers'

const videoContainer = style({textAlign: 'center'})

export default function highlights() : VNode {
  return (
    <div id={titleToAnchor('2017 Highlights')}>
      <h1>Last year's highlights:</h1>
      <div className={videoContainer}>
        <iframe width='800' height='450' src='https://www.youtube.com/embed/GCju7UYleQ4' frameborder='0' allowfullscreen></iframe>
      </div>
    </div>
  )
}
