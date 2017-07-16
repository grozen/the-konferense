import { style } from 'typestyle'

export function titleToAnchor(title : string) : string {
    return title.toLowerCase().replace(' ', '_')
}

export function amountToWidthClass(amount : number, slack : number = 0) : string {
  const classMap : { [n : number] : string } = {}

  let result = classMap[amount]

  if (result !== undefined) {
    return result
  }

  classMap[amount] = result = style({width: `${(99 - slack) / amount}%`})

  return result
}