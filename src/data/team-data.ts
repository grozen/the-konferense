import { Person } from './person'

export type TeamMember = Person

import alexanderLindholmPortrait from '../../public/team/alexander.jpg'
import adiBartalPortrait from '../../public/team/adi.jpg'
import guyRozenPortrait from '../../public/speakers/guy_rozen.jpg'
import kimObergPortrait from '../../public/team/kim.jpg'
import moriaAhiMordehaiPortrait from '../../public/team/moria.jpg'
import caseTaintorPortrait from '../../public/speakers/case_taintor.jpg'
import christianNiehoffPortrait from '../../public/team/christian.jpg'
import elspethAndrellPortrait from '../../public/team/elspeth.jpg'
import joshGloverPortrait from '../../public/team/josh.jpg'
import manuelBraunPortrait from '../../public/team/manuel.jpg'
import markusMichalskyPortrait from '../../public/team/markus.jpg'
import matthiasFeistPortrait from '../../public/team/matthias.jpg'
import talyaSternPortrait from '../../public/speakers/talya_stern.jpg'

const TeamListUnshuffled : TeamMember[] = [
  {
    portrait: alexanderLindholmPortrait,
    name: 'Alexander Lindholm',
    bio: 'Alexander is working for the Payments domain in Stockholm and has been at Klarna for 2.5 years. He started in team Wallstreet when there was only three people and are now at the team Ironbank writing Scala. Alexander is born and raised in Stockholm. Before joining Klarna Alexander has been working a lot with PKI and systems for managing that infrastructure. When he is not working he enjoys going to the gym and listens a lot to music.'
  },
  {
    portrait: adiBartalPortrait,
    name: 'Adi Bartal',
    bio: 'Adi is part of the HR team in the TLV site and has been at Klarna since the beginning of 2016. She started as an office coordinator and 7 months ago moved to be HR Coordinator. Part of her role is to make sure the recruitment process is running smoothly, to manage the onboarding process, to build a great PR for Klarna TLV and to help produce all Klarna TLV events. Nowadays, she’s enjoying the summer and the beach of TLV, spending time with her friends and doing lots of Pilates!'
  },
  {
    portrait: guyRozenPortrait,
    name: 'Guy Rozen',
    bio: 'Naturally drawn to smoothness, Guy manifested at the TLV office nearly six years ago and has since refused to leave. Enjoys writing beautiful code that makes sense, quick feedback cycles and long walks on the beach. Vehemently dislikes WordPress. In his spare time, Guy is an avid gamer and family man who desperately attempts to maintain too many additional hobbies.'
  },
  {
    portrait: kimObergPortrait,
    name: 'Kim Öberg',
    bio: 'Despite being a robotics engineer at heart, these days Kim prefer to keep the hardware integrations to a minimum. Instead she’s putting her efforts into writing increasingly functional code (in Scala) and optimising the team’s deployment and testing practises (through Docker mostly). Before becoming a robotics engineer she lived abroad in both Sydney and Berlin and when she’s not working you’re bound to find her either in the kitchen baking (cupcakes mostly) or in front of her PS4 (currently playing Horizon Zero Dawn and Destiny).'
  },
  {
    portrait: moriaAhiMordehaiPortrait,
    name: 'Moria Ahi Mordehai',
    bio: 'Moria is a proud web developer who believes good code should be written for human beings first, robots second. Moria has experience with GIS technologies, the gaming industry and Fintech. In 2015 she won an award in the annual GameIS contest (The Digital Games Industry Association in Israel).'
  },
  {
    portrait: caseTaintorPortrait,
    name: 'Case Taintor',
    bio: 'Sed sollicitudin pellentesque diam, at tempus tellus congue quis. Maecenas quam augue, sagittis sit amet quam id, fermentum ultricies nunc. Nam aliquet eros felis, a placerat orci placerat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam viverra ipsum sit amet libero consectetur, sit amet congue nibh maximus. Suspendisse metus ligula, ullamcorper id aliquam vitae, aliquam sed ligula. Fusce ac erat lacinia, congue felis lobortis, egestas libero. Curabitur at mollis nisl, ac interdum dui. Suspendisse potenti. Aenean a lacinia felis, eget aliquam odio.'
  },
  {
    portrait: christianNiehoffPortrait,
    name: 'Christian Niehoff',
    bio: 'Nam ut ipsum commodo, sollicitudin erat sed, pulvinar leo. Curabitur quis aliquam lectus. Nullam posuere ligula in bibendum accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut est et ipsum iaculis rutrum. Cras libero massa, finibus et urna quis, sodales condimentum libero. Fusce lobortis luctus nisl, sed varius neque iaculis fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ut ligula aliquet, faucibus velit non, volutpat lacus. Nam a sollicitudin metus, eget elementum odio. Duis fringilla lectus at egestas aliquam.'
  },
  {
    portrait: elspethAndrellPortrait,
    name: 'Elspeth Andrell',
    bio: 'Elspeth has been at Klarna for a year as Engineering Department Coordinator, making sure everything runs smooothly. She’s a jack of all trades, helping out with a wide range of things like the engineering newsletter, tech talks, meetups, managing Safari, you name it! She moved to Stockholm from the UK and spends her free time baking, spoiling her dogs, and re-reading Harry Potter.'
  },
  {
    portrait: joshGloverPortrait,
    name: 'Josh Glover',
    bio: 'Aliquam et purus id felis vehicula dignissim eu id elit. Suspendisse augue odio, iaculis id orci vel, dignissim dictum urna. Mauris tincidunt pharetra dui, id dapibus lorem ullamcorper ut. Ut eu metus eu nibh hendrerit suscipit. Curabitur id sollicitudin nulla, in sollicitudin lacus. Nam viverra urna nunc, vitae porttitor sapien mattis placerat. Sed ut ullamcorper lectus. Suspendisse vestibulum mauris nisl, ac volutpat neque cursus vitae. Sed quis tortor a ligula tempus varius non id lectus. Suspendisse tellus est, aliquam id mi vitae, posuere ornare leo.'
  },
  {
    portrait: manuelBraunPortrait,
    name: 'Manuel Braun',
    bio: 'Manuel passed 16+ years of working experience in various companies. He is Scrum Master and Developer at Office Linden. Develops with pleasure software and hardware. His heart beats for podcasts, photo and sound.'
  },
  {
    portrait: markusMichalskyPortrait,
    name: 'Markus Michalsky',
    bio: 'Praesent tincidunt, nibh a pulvinar rutrum, neque ipsum congue dui, ultrices imperdiet tortor sem in ante. Sed at sem dapibus, cursus felis non, ultricies ex. Donec condimentum lacus nibh. Aenean purus eros, hendrerit sed aliquet nec, tincidunt sit amet dolor. Proin diam lacus, porttitor sodales mi quis, varius molestie tortor. Nullam tincidunt dictum velit, quis vehicula quam placerat non. Nulla ut neque auctor, semper magna non, malesuada eros.'
  },
  {
    portrait: matthiasFeistPortrait,
    name: 'Matthias Feist',
    bio: 'Matthias is working for the Merchant domain in Stockholm where he moved about two years ago from Germany. Originally having studied some weird stuff called “Media Production” he worked in a lot of different jobs and companies (e.g. as a ambulance driver, for a TV production, in a studio recording music, as a wedding photographer and as a photo retoucher in an advertising agency) before finally settling with programming. Now he enjoys life in Stockholm with a lot of fika, awesome colleagues and of course the KonferenSE.'
  },
  {
    portrait: talyaSternPortrait,
    name: 'Talya Stern',
    bio: 'From a young age, Talya has taken into math and linguistics. During her 1st degree in Mathematics she accidentally stumbled upon software engineering, a passion she continues to pursue in the decade since. Talya has been part of Klarna TLV for over 3 years, finding joy in well-crafted code, teamwork, slick process and constant improvement. She is the editor of the engineering management book Leading Snowflakes. In her spare time Talya might be found West Coast Swing dancing, or working on a project for Burning Man\'s Israeli regional event.'
  }
]

const shuffledList = TeamListUnshuffled
for (let i = shuffledList.length; i; i--) {
  const j = Math.floor(Math.random() * i);
  [shuffledList[i - 1], shuffledList[j]] = [shuffledList[j], shuffledList[i - 1]]
}

export default shuffledList