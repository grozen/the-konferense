import { style, keyframes } from 'typestyle'

import { possibleStates as EventAnimationStates } from './state'

export function titleToAnchor(title : string) : string {
    return title.toLowerCase().replace(' ', '_')
}

const classMap : { [s : string] : string } = {}

export function amountToWidthClass(amount : number, slack : number = 0) : string {
  const classKey : string = `${amount}-${slack}`

  let result = classMap[classKey]

  if (result !== undefined) {
    return result
  }

  classMap[classKey] = result = style({width: `${(99 - slack) / amount}%`})

  return result
}

export function inverseWidthClass(amount : number) : string {
  const classKey : string = `inv${amount}`

  let result = classMap[classKey]

  if (result !== undefined) {
    return result
  }

  classMap[classKey] = result = style({width: `${Math.min(100, 40 * amount)}%`})

  return result
}