import { VNode } from '@cycle/dom'

import { style } from 'typestyle'

const container = style({textAlign: 'center'})

export default function codeOfConduct() : VNode {
  return (
    <div>
      <h1>Code of Conduct:</h1>
      <div className={container}>
        We want the Konferense to be a positive experience for all attendees and so you are expected to be nice and respectful. More about that can be found <a href='public/code-of-conduct-klarna-events.pdf' target='_blank'>here</a>. 
      </div>
    </div>
  )
}
