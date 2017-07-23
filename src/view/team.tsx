import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import TeamMembers from '../data/team-data'

import { style } from 'typestyle'
import * as csstips from 'csstips'
import { titleToAnchor } from '../helpers'

import TeamMember from './team-member'

const container = style(csstips.horizontal, csstips.wrap, csstips.centerJustified, csstips.horizontallyCenterChildren, csstips.aroundJustified)
const autoWidthClass = style({width: 'auto'})

export default function team(state : AppState) : VNode {
  return (
    <div id={titleToAnchor('team')}>
      <h1>The Team:</h1>
      <div className={container}>
        {TeamMembers.map((member, index) => TeamMember(member, state.team[index], index))}
      </div>
    </div>
  )
}
