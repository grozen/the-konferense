import { VNode } from '@cycle/dom'

import { style } from 'typestyle'

const container = style({textAlign: 'center'})

export default function codeOfConduct() : VNode {
  return (
    <div>
      <h1>Code of Conduct:</h1>
      <div className={container}>
        We want the Konferense to be a positive experience for all attendees and so you are expected to be nice and respectful. More about that can be found <a href='https://docs.google.com/a/klarna.com/document/d/1JLxLQ6JlysCSXpFOzm9fcCQwDzsDiElqNfMRpG3pvbs/preview?usp=sharing' target='_blank'>here</a>. 
      </div>
    </div>
  )
}
