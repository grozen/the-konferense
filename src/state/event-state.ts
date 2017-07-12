export type possibleStates = 'collapsed' | 'expanding' | 'collapsing' | 'expanded'

export type EventState = {
  descriptionState : possibleStates
  speakerState : possibleStates
}