import { SplashData } from './data/splash-data'
import { Agenda, AgendaDataGathering, AgendaDataOpening, AgendaDataTalks, AgendaDataLightningEnding } from './data/agenda-data'
import { default as TeamMembers, TeamMember } from './data/team-data'

type AppDataType = {
  'The KonferenSE' : any,
  'Agenda' : {
    [index : string] : Agenda<any>
  },
  'Venue' : undefined,
  'Team' : TeamMember[],
  '2016 Highlights' : undefined,
  'How we choose talks' : undefined
}

export const AppData : AppDataType = {
  'The KonferenSE': SplashData,
  'Agenda': {
    'Gathering': AgendaDataGathering,
    'Opening': AgendaDataOpening,
    'Talks': AgendaDataTalks,
    'LightningEnding': AgendaDataLightningEnding
  },
  'Venue': undefined,
  'Team': TeamMembers,
  '2016 Highlights': undefined,
  'How we choose talks': undefined
}
