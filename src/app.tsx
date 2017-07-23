import xs, { Stream } from 'xstream'
import { VNode, DOMSource } from '@cycle/dom'
import { StateSource } from 'cycle-onionify'

import { style } from 'typestyle'
import * as csstips from 'csstips'

import { Sources, Sinks } from './interfaces'
import { AppState, Reducer, initialState } from './state'

import eventIntent from './intent/event-intent'
import teamIntent from './intent/team-intent'

import topBar from './view/top-bar'
import splash from './view/splash'
import agenda from './view/agenda'
import venue from './view/venue'
import team from './view/team'
import highlights from './view/highlights'
import how from './view/how'
import footer from './view/footer'

import backgroundLeft from '../public/bg-l.png'
import backgroundRight from '../public/bg-r.png'

export type AppSources = Sources & { onion : StateSource<AppState> }
export type AppSinks = Sinks & { onion : Stream<Reducer> }

export function App(sources : AppSources) : AppSinks {
  const action$ : Stream<Reducer> = intent(sources.DOM)
  const vdom$ : Stream<VNode> = view(sources.onion.state$)

  return {
    DOM: vdom$,
    onion: action$
  }
}

function intent(DOM : DOMSource) : Stream<Reducer> {
  const init$ : Stream<Reducer> = xs.of<Reducer>(initialState)
  const eventExpansion$ : Stream<Reducer> = eventIntent(DOM)
  const teamExpansion$ : Stream<Reducer> = teamIntent(DOM)

  return xs.merge(init$, eventExpansion$, teamExpansion$)
}

function view(state$ : Stream<AppState>) : Stream<VNode> {
  const siteBackground = {
    paddingTop: '55px'
  }

  const topContainerClass = style(csstips.fillParent, csstips.vertical, siteBackground)
  const contentContainerClass = style(csstips.flex, {overflowY: 'auto'})
  return state$
    .map(state =>
      <div className={topContainerClass}>
        {topBar(state)}
        <div className={contentContainerClass}>
          {splash()}
          {agenda(state)}
          {venue()}
          {team(state)}
          {highlights()}
          {how()}
          {footer()}
        </div>
      </div>
    )
}
