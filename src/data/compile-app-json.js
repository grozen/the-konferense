import { AgendaDataGathering, AgendaDataOpening, AgendaDataTalks, AgendaDataLightningEnding } from './agenda-data'
import teamList from './team-data'
import { SpeakerList } from './speaker-data'

var groups = []
const KONFERENSE_DATE = '2017-09-14'

function processAgenda(agenda) {
  for (var timeSlot of agenda.timeSlots) {
    var groupObj = {
      time: timeSlot.startTime,
      sessions: []
    }
    for (var event of timeSlot.events) {
      var speakerNames = event.speakers ? event.speakers : []
      speakerNames = speakerNames.map((elem) => elem.name)
      groupObj.sessions.push({
        name: event.title,
        location: event.room,
        description: event.description ? event.description : '',
        speakerNames,
        timeStart: timeSlot.startTime,
        timeEnd: timeSlot.endTime,
        trackId: event.room,
        tracks: ['KonferenSE']
      })
    }
    groups.push(groupObj)
  }
}

function processSpeaker() {
  var result = []

  for (var speaker of SpeakerList) {
    result.push({
      name: speaker.name,
      twitter: '',
      about: speaker.bio,
      location: 'Klarna',
      profilePic: 'assets/img/speakers/' + speaker.portrait,
      talkPic: 'assets/img/speakers/' + speaker.portrait
    })
  }

  return result
}

function processTeam() {
  var result = []

  for (var speaker of teamList) {
    result.push({
      name: speaker.name,
      twitter: '',
      about: speaker.bio,
      location: 'Klarna',
      profilePic: 'assets/img/team/' + speaker.portrait,
      talkPic: 'assets/img/team/' + speaker.portrait
    })
  }

  return result
}

processAgenda(AgendaDataGathering)
processAgenda(AgendaDataOpening)
processAgenda(AgendaDataTalks)
processAgenda(AgendaDataLightningEnding)

var result = {
  schedule: [{
    date: KONFERENSE_DATE,
    groups
  }],
  "map": [
    {
      "name": "Stockholm Waterfront Conference Centre",
      "lat": 59.329586,
      "lng": 18.057054,
      "center": true
    },
    {
      "name": "Klarna HQ",
      "lat": 59.3371687,
      "lng": 18.0619308
    }
  ],
  speakers: processSpeaker(),
  team: processTeam()
}

var fs = require('fs');
fs.writeFileSync(process.cwd() + '/public/data.json', JSON.stringify(result, null, 2))
console.log('\nApp json file written')
