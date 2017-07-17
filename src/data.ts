import { SplashData } from './data/splash-data'
import { Agenda, AgendaDataGathering, AgendaDataOpening, AgendaDataTalks, AgendaDataLightningEnding } from './data/agenda-data'

type AppDataType = {
  'The KonferenSE' : any,
  'Agenda' : {
    [index : string] : Agenda<any>
  },
  'Venue' : undefined,
  'Team' : undefined,
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
  'Team': undefined,
  '2016 Highlights': undefined,
  'How we choose talks': undefined
}
