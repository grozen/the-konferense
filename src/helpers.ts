import { style } from 'typestyle'

export function titleToAnchor(title : string) : string {
    return title.toLowerCase().replace(' ', '_')
}

const classMap : { [n : number] : string } = {}

export function amountToWidthClass(amount : number, slack : number = 0) : string {
  let result = classMap[amount]

  if (result !== undefined) {
    return result
  }

  classMap[amount] = result = style({width: `${(99 - slack) / amount}%`})

  return result
}