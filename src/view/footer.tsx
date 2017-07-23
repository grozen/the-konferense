import { style } from 'typestyle'
import { VNode } from '@cycle/dom'

import cycleLogo from '../../public/cyclejs_logo.svg'
import typescriptLogo from '../../public/typescript.png'

export default function footer() : VNode {
  const footerClass = style({width: '100%', backgroundColor: 'black', padding: '1em'})
  const cycleJSClass = style({width: '26px', height: '26px', verticalAlign: 'bottom'})
  const typescriptClass = cycleJSClass

  return (
    <div className={footerClass}>
      <p>Made with ♥ using <a href='https://cycle.js.org/'>cyclejs <img className={cycleJSClass} src={cycleLogo}/></a>, <a href='https://www.typescriptlang.org/'>typescript <img className={typescriptClass} src={typescriptLogo}/></a> and <a href='http://typestyle.io/#/'>typestyle 🌹</a></p>
    </div>
  )
}