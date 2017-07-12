import { Person } from './person'

export type Speaker = Person

const SpeakerList : Speaker[] = [
  {portrait: 'http://lorempixel.com/200/200/animals', name: 'Speaker McSpeakerFace', bio: 'Raised by ninja rockstars, Speaker set out to disrupt the disruption industry'},
  {portrait: 'http://lorempixel.com/200/200/business', name: 'Alice', bio: 'She is of wonderland'},
  {portrait: 'http://lorempixel.com/200/200/cats', name: 'Bob', bio: 'Enjoys bobbing for apples'},
  {portrait: 'http://lorempixel.com/200/200/people', name: 'Carol', bio: 'Always feels like a third wheel, which is essential for a tricycle'},

  {portrait: 'https://static.giantbomb.com/uploads/original/5/57577/2845919-9106143613-VPUkF.jpg', name: 'Foo', bio: 'People tend to pity him'},
  {portrait: 'https://s3-media1.fl.yelpcdn.com/bphoto/IBSio8BRKz5m2l0oEzFI1Q/348s.jpg', name: 'Bar', bio: 'People keep walking into him'},
  {portrait: 'http://www.repstatic.it/content/localirep/img/rep-roma/2015/08/04/193550031-70a05297-5e57-419e-b590-a29a26d88972.jpg', name: 'Baz', bio: 'I don\'t even'},
  {portrait: 'http://rs24.pbsrc.com/albums/c13/MarchexTsuki/IMG_0580_zpslxqnvryg.jpg~c200', name: 'Sanic', bio: 'Gotta go fast!'},
  {portrait: 'https://media4.giphy.com/media/nDsAStQGq8RLG/200_s.gif', name: 'Baman', bio: 'Poorly illuminated like the dusk'},
  {portrait: 'https://pbs.twimg.com/profile_images/772560273307762688/4gxXPQ30.jpg', name: 'Piderman', bio: 'Friendly neighbourhood pider'}
]

type SpeakerDictionary = {[name : string] : Speaker}

// Export a dictionary of speakers indexed by their lowercase name
export const Speakers : SpeakerDictionary =
  SpeakerList.reduce<SpeakerDictionary>((speakers : SpeakerDictionary, speaker : Speaker) => { 
    speakers[speaker.name.toLowerCase()] = speaker
    return speakers
  }, {})