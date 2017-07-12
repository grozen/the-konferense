import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style, keyframes } from 'typestyle'
import { titleToAnchor } from '../helpers'

const container = style({display: 'flex'})
const column = style({flex: '1', padding: '20px 30px 0', lineHeight: '1.5em'})

export default function how() : VNode {
  return (
    <div id={titleToAnchor('How we choose talks')}>
      <h1>How We Choose Talks:</h1>
      <div className={container}>
        <div className={column}>
          <h2>We want talks that</h2>
          <p>
            Are innovative. New ideas and creative or surprising solutions. Interesting to a wide audience. Inspiring. Code that was shared or that helped in unexpected ways. Things that made Klarna a better place to work. Based on real experiences. What worked well, and what didn’t. Diverse. We want talks on a variety of subjects and speakers from across the organisation. Entertaining. Narrative and humor make a big difference.
          </p>
        </div>
        <div className={column}>
          <h2>We avoid talks that</h2>
          <p>
            Are better as a brown bag. If your talk is only relevant to part of the organization it might be more suitable as a brown bag. Too basic or preaching to the choir. Don’t tell us what we already know or can easily find out by ourselves. Design reviews. We’re less interested in what you plan to do, as it’s too soon to say if its good or bad. Second hand. We’d rather hear you talk about your hands-on experience than something you heard from someone else.
          </p>
        </div>
        <div className={column}>
          <h2>We want lightning talks</h2>
          <p>
            which are fun, inspiring and make the audience laugh and think at the same time.
          </p>
        </div>
      </div>
    </div>
  )
}
