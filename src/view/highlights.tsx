import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style, keyframes } from 'typestyle'
import { titleToAnchor } from '../helpers'

const videoContainer = style({textAlign: 'center'})

export default function highlights() : VNode {
  return (
    <div id={titleToAnchor('2016 Highlights')}>
      <h1>Last year's highlights:</h1>
      <div className={videoContainer}>
        <iframe width="800" height="450" src="https://www.youtube.com/embed/935CDUYCeBE?list=PLYaD-TFUU2hiEVWA3DMDeemFab6RFARCR" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  )
}
