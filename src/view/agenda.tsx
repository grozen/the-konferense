import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'
import { RoomNames, TimeSlot, Event } from '../data/agenda-data'

import { style } from 'typestyle'
import { titleToAnchor } from '../helpers'

import EventView from './event'

const transparentBlackBackground = {background: 'rgba(0,0,0,.2)'}
const agendaSlotClass = style({}, transparentBlackBackground)
const eventColumnClass = style({width: '33%'})
const slotWideEventColumnClass = style({width: '99%'})

function TimeSlotEvents(timeslot : TimeSlot, state : AppState) : JSX.Element[] {
  const eventCellClass = style({textAlign: 'center', padding: '10px'})

  if (timeslot.events.every(event => event.room === undefined)) {
    return (
      [<td className={`${eventCellClass} ${slotWideEventColumnClass}`} colSpan='3'>
        {timeslot.events.map(event => EventView(event, state))}
      </td>]
    )
  }
  else if (timeslot.events.some(event => event.room === undefined)) {
    throw `Only some of the events in the timeslot (${timeslot.startTime} - ${timeslot.endTime}) have an assigned room`
  }

  return (
    RoomNames.map(roomName => {
      const roomEvents : Event[] = timeslot.events.filter(event => event.room === roomName)

      return (
        <td className={`${eventCellClass} ${eventColumnClass}`}>{roomEvents.map(event => EventView(event, state))}</td>
      )
    })
  )
}

function TimeSlot(timeslot : TimeSlot, state : AppState) : VNode {
  let crossRoomEvent : boolean

  if (timeslot.events.every(event => event.room === undefined)) {
    crossRoomEvent = true
  }
  else if (timeslot.events.every(event => !!event.room)) {
    crossRoomEvent = false
  }
  else {
    throw `Only some of the events in the timeslot (${timeslot.startTime} - ${timeslot.endTime}) have an assigned room`
  }

  const timeSlotClass = style({whiteSpace: 'nowrap', verticalAlign: 'top', padding: '10px'})

  return (
    <tr className={agendaSlotClass}>
      <td className={timeSlotClass}>{`${timeslot.startTime} - ${timeslot.endTime}`}</td>
      {TimeSlotEvents(timeslot, state)}
    </tr>
  )
}

export default function Agenda(state : AppState) : VNode {
  const agendaTableClass = style({
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
    tableLayout: 'fixed'
  })

  const tableHeadClass = style(transparentBlackBackground, {fontFamily: 'Bangers', fontSize: '2em', letterSpacing: '4px'})
  const tableHeadTimeCellClass = style(transparentBlackBackground, {textAlign: 'left', padding: '10px'})
  const tableHeadCellClass = style(transparentBlackBackground, {width: '33%', textAlign: 'center', padding: '10px'})

  return (
    <div id={titleToAnchor('Agenda')}>
      <h1>Agenda:</h1>
      <table className={agendaTableClass}>
        <thead className={tableHeadClass}>
          <tr className={agendaSlotClass}>
            <th className={tableHeadTimeCellClass}>Time</th>
            {RoomNames.map(roomName => <th className={tableHeadCellClass}>{roomName}</th>)}
          </tr>
        </thead>
        <tbody>
          {AppData.Agenda.timeSlots.map(timeslot => TimeSlot(timeslot, state))}
        </tbody>
      </table>
    </div>
  )
}
