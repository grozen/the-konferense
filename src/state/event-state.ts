export type possibleStates = 'collapsed' | 'expanding' | 'collapsing' | 'expanded'

export type EventState = {
  descriptionState : possibleStates
  speakerStates : possibleStates[]
}