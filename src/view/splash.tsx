import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style, keyframes } from 'typestyle'
import { titleToAnchor } from '../helpers'
import splashImage from '../../public/logo-yellow.png'

export default function splash() : VNode {
  const pulsateKeyframes = keyframes({
    '0%, 100%': {transform: 'rotate(-2deg) scale(1, 1)'},
    '50%': {transform: 'rotate(-6deg) scale(1.2, 1.2)'}
  })

  const popArtShadow = {textShadow: '4px 4px 0 #000, -1px -1px 0 black, 0 -1px 0 black, -1px 0 0 black', color: '#fff'}
  const splashImageClass = style({
    maxWidth: '1200px', height: '65vh', margin: '0 auto',
    background: `url(${splashImage}) no-repeat 50%`,
    backgroundSize: 'contain', marginTop: '40px'})
  const dateClass = style({
    textAlign: 'center',
    fontSize: '5em',
    fontFamily: 'Bangers',
    margin: '0 auto',
    maxWidth: '1000px',
    animation: `${pulsateKeyframes} 3s infinite`
  }, popArtShadow)
  const signupClass = style({
    textAlign: 'center',
    fontSize: '3em',
    fontFamily: 'Bangers',
    margin: '0 auto',
    maxWidth: '1000px',
    animation: `${pulsateKeyframes} 4s infinite`
  }, popArtShadow)

  return (
    <div id={titleToAnchor('The KonferenSE')}>
      <div className={splashImageClass}>
      </div>
      <div className={dateClass}>
        {AppData['The KonferenSE'].date}
      </div>
      <div className={signupClass}>
        <a href='https://goo.gl/forms/1WD8m5g0S0MleRjr1' target='_blank'>sign up now !!!</a>
      </div>
    </div>
  )
}