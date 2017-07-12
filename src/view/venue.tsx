import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style } from 'typestyle'
import { titleToAnchor } from '../helpers'

import venueImage from '../../public/venue.png'

const imageClass = style({maxWidth: '90vw'})
const venueClass = style({textAlign: 'center', fontSize: '1.5em', position: 'relative'})

export default function Venue() : VNode {
  return (
    <div id={titleToAnchor('Venue')}>
      <h1>Venue:</h1>
      <div className={venueClass}>
      <p>
        Stockholm Waterfront Conference Centre
        <br/> Nils Ericsons Plan 4, Stockholm
        <br/>
        <a href='https://goo.gl/maps/bbJXRbmPQ7k' target='_blank'>see in Google Maps</a>
      </p>
      <img src={venueImage} className={imageClass} />
      </div>
    </div>
  )
}
