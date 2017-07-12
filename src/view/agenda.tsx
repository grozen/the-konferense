import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import specificAgenda from './specific-agenda'

import { titleToAnchor } from '../helpers'

export default function Agenda(state : AppState) : VNode {
  return (
    <div id={titleToAnchor('Agenda')}>
      <h1>Agenda:</h1>
      {specificAgenda(AppData.Agenda.Gathering, state)}
      {specificAgenda(AppData.Agenda.Opening, state)}
      {specificAgenda(AppData.Agenda.Talks, state)}
    </div>
  )
}
