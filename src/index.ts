import xs from 'xstream'
import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { makeHTTPDriver } from '@cycle/http'
import onionify from 'cycle-onionify'

import { Component, Sources, RootSinks } from './interfaces'
import { App } from './app'

import { cssRule } from 'typestyle'
import {normalize, setupPage} from 'csstips'
import bgImage from '../public/bg.png'

const browser = require('detect-browser')

if (browser.name === 'ie') {
  const appElement : HTMLElement = document.getElementById('app') as HTMLElement
  appElement.innerHTML = '<h2>You appear to be using Internet Explorer<br/>This would be a good time to examine the life choices that have led you to this moment in time</h2>'
  appElement.style.cssText = 'height: 100%; text-align: center; padding-top: 50vh; background-color: black;'
  appElement.id = 'nope'
}

normalize()
setupPage('#app')

const popArtShadow = {textShadow: '5px 5px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -2px 0 black, -2px 0 0 black', color: '#fff'}

cssRule('body', {fontFamily: '"PT Sans", sans-serif', background: `#bb270f url(${bgImage})`, backgroundSize: 'cover', color: '#fff', fontSize: '20px'})
cssRule('h1', {fontFamily: 'Bangers, sans-serif', transform: 'rotate(-4deg)', letterSpacing: '5px', margin: '150px 0 20px 0', textAlign: 'center', fontSize: '4em'}, popArtShadow)
cssRule('h2', {fontFamily: 'Bangers, sans-serif', transform: 'rotate(0deg)', letterSpacing: '2px', margin: '30px 0 20px 0', textAlign: 'center', fontSize: '2em'}, popArtShadow)
cssRule('a', {color: '#fff'})

const main : Component = onionify(App)

const drivers : any = {
    DOM: makeDOMDriver('#app'),
    HTTP: makeHTTPDriver()
}
export const driverNames : string[] = Object.keys(drivers)

// Cycle apps (main functions) are allowed to return any number of sinks streams
// This sets defaults for all drivers that are not used by the app
const defaultSinks : (s : Sources) => RootSinks = sources => ({
    ...driverNames.map(n => ({ [n]: xs.never() })).reduce(Object.assign, {}),
    ...main(sources)
})

run(defaultSinks, drivers)
