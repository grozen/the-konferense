import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'
import { titleToAnchor } from '../helpers'

import { style } from 'typestyle'
import * as csstips from 'csstips'
import topBarBg from '../../public/yellow-dither.png'

export default function topBar(state : AppState) : VNode {
  const topBarClass = style(csstips.horizontal, csstips.content, csstips.height(85), {background: `url(${topBarBg})`, position: 'fixed', width: '100%', top: 0, zIndex: 1})
  const topBarImageSectionClass = style(csstips.height(55), csstips.flex1, csstips.centerCenter, {fontFamily: 'Bangers', fontSize: '2em', color: '#000', letterSpacing: '1px'})
  const topBarMenuSectionClass = style(csstips.height(55),csstips.flex3, csstips.horizontal, csstips.endJustified, csstips.center)
  const imageSizeClass = style({height: '50px', width: 'auto'})
  const linelessLinkClass = style({textDecorationLine: 'none', marginRight: '5em', textAlign: 'center', color: '#000', letterSpacing: '1px'})

  return (
    <nav className={topBarClass}>
      <div className={topBarImageSectionClass}>
        The KonferenSE
      </div>
      <div className={topBarMenuSectionClass}>
        {Object.keys(AppData).map((section) =>
          <a className={linelessLinkClass} href={`#${titleToAnchor(section)}`}>{section}</a>
        )}
      </div>
    </nav>
  )
}
