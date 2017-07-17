import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { Agenda, TimeSlot, Event } from '../data/agenda-data'

import { style, classes } from 'typestyle'
import * as csstips from 'csstips'

import { amountToWidthClass, inverseWidthClass } from '../helpers'

import EventView from './event'

const transparentBlackBackground = {background: 'rgba(0,0,0,.2)'}
const agendaSlotClass = style({}, transparentBlackBackground)
const slotWideEventColumnClass = style({width: '99%'})

function TimeSlotEvents<T>(roomNames : T[], timeslot : TimeSlot<T>, state : AppState) : JSX.Element[] {
  const eventCellClass = style({
    textAlign: 'center',
    padding: '20px 40px', 
    verticalAlign: 'top'
  })

  const multiSpeakersClass = style(csstips.horizontal, csstips.wrap)

  if (timeslot.events.every(event => event.room === undefined)) {
    return (
      [<td className={classes(eventCellClass, slotWideEventColumnClass)} colSpan={roomNames.length}>
        {timeslot.events.map(event => EventView(event, state))}
      </td>]
    )
  }
  else if (timeslot.events.some(event => event.room === undefined)) {
    throw `Only some of the events in the timeslot (${timeslot.startTime} - ${timeslot.endTime}) have an assigned room`
  }

  return (
    roomNames.map(roomName => {
      const roomEvents : Event<T>[] = timeslot.events.filter(event => event.room === roomName)

      if (roomNames.length > 1) {
        return (
          <td className={classes(eventCellClass, amountToWidthClass(roomNames.length))}>
            {roomEvents.map(event => EventView(event, state, inverseWidthClass(roomNames.length)))}
          </td>
        )
      }
      else {
        return (
          <td className={classes(eventCellClass, amountToWidthClass(roomNames.length))}>
            <div className={multiSpeakersClass}>
              {roomEvents.map(event => EventView(event, state, inverseWidthClass(roomNames.length)))}
            </div>
          </td>
        )
      }
    })
  )
}

function timeslotTimespan(timeslot : TimeSlot<any>) : string {
  if (timeslot.startTime.length === 0 && timeslot.endTime.length === 0) {
    return ''
  }

  return `${timeslot.startTime} - ${timeslot.endTime}`
}

function TimeSlot<T>(roomNames : T[], timeslot : TimeSlot<T>, state : AppState) : VNode {
  const timeSlotClass = style({whiteSpace: 'nowrap', verticalAlign: 'top', padding: '10px'})

  return (
    <tr className={agendaSlotClass}>
      <td className={timeSlotClass}>{timeslotTimespan(timeslot)}</td>
      {TimeSlotEvents(roomNames, timeslot, state)}
    </tr>
  )
}

export default function SpecificAgenda<T>(agendaData : Agenda<T>, state : AppState) : VNode {
  const agendaTableClass = style({
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
    tableLayout: 'fixed'
  })

  const tableHeadClass = style(transparentBlackBackground, {fontFamily: 'Bangers', fontSize: '2em', letterSpacing: '4px'})
  const tableHeadTimeCellClass = style(transparentBlackBackground, {textAlign: 'left', padding: '10px'})

  const tableHeadCellWidthClass = amountToWidthClass(agendaData.roomNames.length)
  const tableHeadCellClass = style(transparentBlackBackground, {textAlign: 'center', padding: '10px'})

  return (
    <table className={agendaTableClass}>
      <thead className={tableHeadClass}>
        <tr className={agendaSlotClass}>
          <th className={tableHeadTimeCellClass}>Time</th>
          {agendaData.roomNames.map(roomName => <th className={classes(tableHeadCellWidthClass, tableHeadCellClass)}>{roomName}</th>)}
        </tr>
      </thead>
      <tbody>
        {agendaData.timeSlots.map(timeslot => TimeSlot(agendaData.roomNames, timeslot, state))}
      </tbody>
    </table>
  )
}
