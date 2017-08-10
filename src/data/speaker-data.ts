import { Person } from './person'

export type Speaker = Person

import benedickKusemannPortrait from '../../public/speakers/benedick_kusemann.jpg'
import billpayPortrait from '../../public/speakers/unknown.png'
import bjornRathjensPortrait from '../../public/speakers/bjorn_rathjens.jpg'
import davidFockPortrait from '../../public/speakers/david_fock.jpg'
import eranManorPortrait from '../../public/speakers/eran_manor.jpg'
import fernandoViaCanelPortrait from '../../public/speakers/fernando_via_canel.jpg'
import georgiosKryparosPortrait from '../../public/speakers/georgios_kryparos.jpg'
import grzegorzLukaszewiczPortrait from '../../public/speakers/grzegorz_lukaszewicz.jpg'
import guyIsraeliPortrait from '../../public/speakers/guy_israeli.jpg'
import guyRozenPortrait from '../../public/speakers/guy_rozen.jpg'
import immanuelKuhnlePortrait from '../../public/speakers/immanuel_kuhnle.jpg'
import jonathanTrujilloPortrait from '../../public/speakers/jonathan_trujillo.jpg'
import karaDefriasPortrait from '../../public/speakers/kara_defrias.jpg'
import karinKullmanPortrait from '../../public/speakers/karin_kullman.jpg'
import linoyZagaPortrait from '../../public/speakers/linoy_zaga.jpg'
import majaKontrecPortrait from '../../public/speakers/maja_kontrec.jpg'
import marianaBocoiPortrait from '../../public/speakers/mariana_bocoi.jpg'
import meiYangPortrait from '../../public/speakers/mei_yang.jpg'
import nadiaMohedanoTroyanoPortrait from '../../public/speakers/nadia_mohedano_troyano.jpg'
import omriYarivPortrait from '../../public/speakers/omri_yariv.jpg'
import pauloRagonhaPortrait from '../../public/speakers/paulo_ragonha.jpg'
import talyaSternPortrait from '../../public/speakers/talya_stern.jpg'
import tamirTaubPortrait from '../../public/speakers/tamir_taub.jpg'
import josephTindale from '../../public/speakers/joseph_tindale.jpg'
import darioPasquantonio from '../../public/speakers/dario_pasquantonio.jpg'
import adamBergmarkPortrait from '../../public/speakers/adam_bergmark.jpg'
import brigitteRingbauerPortrait from '../../public/speakers/brigitte_ringbauer.jpg'
import johannaSimonssonPortrait from '../../public/speakers/johanna_simonsson.jpg'
import antonFenskePortrait from '../../public/speakers/anton_fenske.jpg'
import nirAravotPortrait from '../../public/speakers/nir_aravot.jpg'
import derekHomerPortrait from '../../public/speakers/derek_homer.jpg'
import caseTaintorPortrait from '../../public/speakers/case_taintor.jpg'
import koenKoppenPortrait from '../../public/speakers/koen-koppen.jpg'

const SpeakerList : Speaker[] = [
  {
    portrait: koenKoppenPortrait,
    name: 'Koen Köppen',
    bio: 'TBA'
  },
  {
    portrait: billpayPortrait,
    name: 'A speaker',
    bio: 'Maybe several speakers? The air of mystery is indeed thick.'
  },
  {
    portrait: karaDefriasPortrait,
    name: 'Kara Defrias',
    bio: 'Kara\'s passion for designing engaging experiences has brought her to many exciting places, including the Super Bowl, Oscars, and most recently, the White House as UX Director for Vice President Biden. Previously, Kara was in the first class of Presidential Innovation Fellows, where she served as entrepreneur in residence to reimagine the relationship between the government and the people from a technology perspective. She also spent 4 years at TurboTax and founded TEDxIntuit. Twitter: @KaraDeFrias.'
  },
  {
    portrait: davidFockPortrait,
    name: 'David Fock',
    bio: 'TBA'
  },
  {
    portrait: nadiaMohedanoTroyanoPortrait,
    name: 'Nadia Mohedano Troyano',
    bio: 'Nadia always wanted to be a math teacher but, decided to go for Telecommunications Engineering since it sounded more challenging. She was not wrong! She thinks life is better with a smile, and that\'s why you might recognise her by her loud laugh. But it\'s all a trick! She is part of LiveOps, those mean people that wake you up in the middle of the night and ask for Incident Reports when things break! She likes to keep herself busy and loves to give back by being part of initiatives such as ClojureBridge, GeekGirlMeetup, and PinkProgramming Summer Camps. She also likes to talk, and what better place to do it than at the KonferenSE?'
  },
  {
    portrait: guyRozenPortrait,
    name: 'Guy Rozen',
    bio: 'Naturally drawn to smoothness, Guy manifested at the TLV office nearly six years ago and has since refused to leave. Enjoys writing beautiful code that makes sense, quick feedback cycles and long walks on the beach. Vehemently dislikes WordPress. In his spare time, Guy is an avid gamer and family man who desperately attempts to maintain too many additional hobbies.'
  },
  {
    portrait: bjornRathjensPortrait,
    name: 'Björn Rathjens',
    bio: 'Björn is the guy sitting in the corner of the office from where weird sounds emerge. He is convinced that those sounds are most often called metal or medieval rock. Inside and outside the office he works in team BeeHive and is always happy to help wherever he can. When out of the office his hobbies include gardening and his Ninja ZX-10R. For more fun around the house he started to be interested in house automation but on the other side he is afraid to live in an Ultrahouse 3000.'
  },
  {
    portrait: adamBergmarkPortrait,
    name: 'Adam Bergmark',
    bio: 'Adam travels the world (limited to Europe) to learn how to write robust software which coincidentally also makes it fun. He is currently focusing on functional programming, the new and cool paradigm that was invented in the 30s.'
  },
  {
    portrait: darioPasquantonio,
    name: 'Dario Pasquantonio',
    bio: 'Dario was not like the other Italians. Dario didn\'t have a funny accent, he didn\'t use his hands during a conversation. He didn\'t love his mom, didn\'t like good food, the sun or the crystal clear sea. One day he had enough: he packed his backpack, and started seeking new adventures. He ended up in Berlin, where he found what he has always been looking for: rain, cold, Pizza Hawaii and darkness. During the last three years he found his place in the FinTech startup scene, in the sombre shadows of the backend; it is a challenging, stressful place, from which he constantly tries to escape using his most powerful weapon: sarcasm.'
  },
  {
    portrait: josephTindale,
    name: 'Joseph Tindale',
    bio: 'Joe is a European Brit, making him a bit of an outcast in the country of his birth. He moved to Berlin and joined Cookies, a really awesome startup. Unfortunately, the company went insolvent shortly after his arrival, although he is convinced the two events were not connected. Luckily, Wavy emerged from the ashes and he gets to continue working with amazing colleagues. Outside of work, Joe captains a cricket team where he plays with players from all over the world and confuses everyone else in the office with talk of “short legs” and “silly points”. He also satisfies his creative needs by playing classical and jazz piano.'
  },
  {
    portrait: omriYarivPortrait,
    name: 'Omri Yariv',
    bio: 'Omri started playing around with building websites as a teenager thinking he could become a Graphic Designer. When he understood he sucks at Graphic Design he moved on to focus on programming. Since then throughout his career he stayed close to the Frontend. His first real-world job was building Flash banners and landing pages for the advertising industry - for this he asks your forgiveness.'
  },
  {
    portrait: karinKullmanPortrait,
    name: 'Karin Kullman',
    bio: 'Karin set out with big dreams in life, but not much of a plan. She attended one year at Karlstad uni and one day at KTH, acquired a medieval jousting team, apprenticed in a smithy, got herself a six shooter and founded a toy weapons store. Thanks to the webshop she decided to study software development, and joined the Klarna Erlang crew one glorious day in May. Karin now resides in the data warehouse team, creating sense and meaning from data where there seem to be none. She loves the puzzles she faces at work, and also really enjoys playing boardgames with friends.'
  },
  {
    portrait: nirAravotPortrait,
    name: 'Nir Aravot',
    bio: 'Husband, cool uncle, twin, dog owner, animal lover, product manager, industrial engineer, entrepreneur, innovative, technology passionate, lean advocate, data driven, team player, open minded, book worm, tel-avivian, adventurous traveller.'
  },
  {
    portrait: fernandoViaCanelPortrait,
    name: 'Fernando Vía Canel',
    bio: 'Fernando tried to be a wizard, a warrior and a bard at the same time, so he ended up not being good at anything. As a last measure, to avoid imminent dishonor, he took after his parents and their parents before them and joined the programmer\'s guild as an apprentice. Through toil and sweat he found out that it\'s way easier to make management happy by pushing a couple of pixels than by building rockets, so he slyly turned into a con-art... front-end developer. Totally serious job, and not at all the reason why he is no longer allowed in his ancestor\'s shrine.'
  },
  {
    portrait: pauloRagonhaPortrait,
    name: 'Paulo Ragonha',
    bio: 'Paulo woke up one day and realised he had to write a bio for himself, unaware of what to do, he wrote down this long sentence in attempt to catch the reader\'s imagination into thinking he is a great software developer that enjoys doing open-source and biking.'
  },
  {
    portrait: marianaBocoiPortrait,
    name: 'Mariana Bocoi',
    bio: 'Mariana is a passionate software developer by day and a graphic designer by night. Some of the teams at Klarna have logos created by Mariana.&nbsp;What you might not know is that she studied human computer interaction and usability. Then she had a short stint in a german fabLab learning and having fun with laser cutters and electronics where Mariana manufactured her own small batch of arduino clones. &nbsp;The thing Mariana enjoys the most is learning new things! One of her learning journeys led her to discover clojure well enough to teach it to beginners. Now she is developing in clojure with her current team. Her next learning challenge became Machine learning...'
  },
  {
    portrait: eranManorPortrait,
    name: 'Eran Manor',
    bio: 'Eran started working at Klarna in 2013. He is the Product manager for Personas and Preferences at Klarna TLV, Eran is passionate about simplifying complex problems and building intuitive, easy to use and valuable services. He has over 15 years of Product Management experience in various companies from small to big size corporates. In his free time Eran likes to run and play on different musical instruments (with little success though). Recently he became addicted to Chess and plays Blitz games with people around the world.'
  },
  {
    portrait: majaKontrecPortrait,
    name: 'Maja Kontrec',
    bio: 'Maja is a passionate (functional) programmer and a musician. As an artist in engineers body, she is always curious about finding unusual solutions to usual problems. Growing up surrounded by computers her dad would bring home, she managed to greet the world through a program for the first time at the age of 11. Little did she know that one day, she would do something similar for living. So here she is now, hacking her days away as an Erlang Solution\'s consultant at Klarna.'
  },
  {
    portrait: johannaSimonssonPortrait,
    name: 'Johanna Simonsson',
    bio: 'After 3 years at university studying Mechanical Engineering, Johanna discovered she didn\'t like machines at all. In fact, the more abstract the concept, the better. Fortunately, coding seemed to be just that. She steered her career away from anything tangible, and ended up at Klarna as a System Engineer herding non-tangible machines in the cloud. As she succeeded abstracting her world at work, in private Johanna likes everything low-tech, old and manual. This includes cross-stitching, reading fantasy fiction and pre-enlightenment history.'
  },
  {
    portrait: jonathanTrujilloPortrait,
    name: 'Jonathan Trujillo',
    bio: 'Jonathan Trujillo is a Software Engineer and Front-end Developer from Caracas, Venezuela, where he started making websites in some form or other since he was 13 years old. In 2015, he left behind the tropical heat and moved to Stockholm to join Klarna, where he has been working on Klarna Checkout and Payments. Jonathan likes building applications that humans can actually use. Also enjoys punk rock, black coffee and vinyl records.'
  },
  {
    portrait: antonFenskePortrait,
    name: 'Anton Fenske',
    bio: 'At some point of his professional career, after working at a banking corporation, transferring money between different continents, Anton decided that he couldn\'t be part of that evil any longer, and his eagerness of proper FinTech has brought him to a Scandinavian payment disruptor called Klarna. Over the course of the last 2 years, Anton has been involved in multiple initiatives aimed at improving risk assessment processes, working together with brilliant individuals on different challenges, such as consumer identification, risk variable modelling and the like. In September he is starting another adventure in the purchase domain to make the checkout experience even smooother.'
  },
  {
    portrait: brigitteRingbauerPortrait,
    name: 'Brigitte Ringbauer',
    bio: 'Brigitte likes working at interdisciplinary boundaries and pushing theory to practice. She holds a degree in psychology, specialized in cognitive sciences, and user research. Starting her working life as a usability engineer telling designers and developers what doesn’t work, she is happy having entered UX design and being part of the creative bunch of people to make things happen. She is passionate about the „why“ of human behavior and attitudes and tries hard to translate that into features and good UX design.'
  },
  {
    portrait: grzegorzLukaszewiczPortrait,
    name: 'Grzegorz Łukaszewicz',
    bio: 'For 11 years I was working as a developer. For 4 years now I am working in Clearcode S.A. as a Project Manager leading an agile team. We are specialized on AdTech/MarTech solutions for our clients utilizing great variety of tool and technologies. I always try to learn new things and improve. I am a big fun of automation everything that is to be automated.'
  },
  {
    portrait: immanuelKuhnlePortrait,
    name: 'Immanuel Kühnle',
    bio: 'TBA'
  },
  {
    portrait: linoyZagaPortrait,
    name: 'Linoy Zaga',
    bio: 'Linoy studied Software Engineering at the Israeli Defense Forces, serving 4 years as a software engineer in the Navy. During this time she had started studying Psychology at the Open University of Israel for fun, and soon discovered that Computer science and Psychology make a great combination. She now tries to fit the two together in her day-to-day work. Linoy has been working at Klarna since Dec 2016. She is 23 years old, making her the youngest engineer at Klarna TLV site. On her spare time, Linoy enjoys dancing and knitting, and was recently trained as a one-star diver.'
  },
  {
    portrait: benedickKusemannPortrait,
    name: 'Benedikt Kusemann',
    bio: 'Benedikt joined SOFORT in early 2016 coming fresh off the university. After taking a dip in the world of Frontend development at the famous “A-Team” he joined the Backend Team “BeeHive”. Right now he is delving deep into the world of Java, MicroServices and Screen Scraping, while sometimes also developing small React Components for the Bank Formulars, which could fill every UX Designers heart with horror and despair.'
  },
  {
    portrait: derekHomerPortrait,
    name: 'Derek Homer',
    bio: 'Derek became intrigued by technology at the tender age of six, when he ruined his father\'s laptop by moving its OS to floppy disc (apparently, there wasn\'t a way to restore it). Years later, he decided to learn how to use technology "properly", forging a career that took him from IT Support, through Project Management to Agile Delivery. He is a believer, and is totally fascinated by the interplay between people and their ways of working that makes achieving the impossible possible.'
  },
  {
    portrait: talyaSternPortrait,
    name: 'Talya Stern',
    bio: 'From a young age, Talya has taken into math and linguistics. During her 1st degree in Mathematics she accidentally stumbled upon software engineering, a passion she continues to pursue in the decade since. Talya has been part of Klarna TLV for over 3 years, finding joy in well-crafted code, teamwork, slick process and constant improvement. She is the editor of the engineering management book Leading Snowflakes. In her spare time Talya might be found West Coast Swing dancing, or working on a project for Burning Man\'s Israeli regional event.'
  },
  {
    portrait: meiYangPortrait,
    name: 'Mei Yang',
    bio: 'Mei Yang started her career in an agile consultant company as a quality advocator. She is passionate about improving the quality throughout the whole product development lifecycle. Apart from working with different delivery projects, she also went to India as a coach to teach people agile practices and agile testing, where she discovered she loves learning and coaching. After 2 years in Stockholm, Mei still enjoys the weather a lot. She loves traveling and is passionate about cooking and playing board games.'
  },
  {
    portrait: tamirTaubPortrait,
    name: 'Tamir Taub',
    bio: 'Tamir started writing software about 10 years ago, juggling high school with Computer Science studies at the The Open University. After his mandatory IDF stint, he decided to abandon his strongly typed roots of Java and .Net and took on a Ruby developer position at Klarna TLV, where he has been working for the past year. He enjoys life\'s simple pleasures - hitting the snooze button, drinking a hot cup o\' joe and experiencing post-lunch comas, and as of late you might also find him bouldering, scuba diving or skiing.'
  },
  {
    portrait: guyIsraeliPortrait,
    name: 'Guy Israeli',
    bio: 'He is a guy from Israel, that name he didn\'t choose; yet for a fake user people still confuse; In New Jersey Guy was in school; Also did some cyber, but before it was cool; He would have wanted to write poems in some distant land; or play guitar in some esoteric progressive rock band... Had a startup about shopping online, product images and a map; suspiciously similar to some features that exist in the new Klapp;'
  },
  {
    portrait: georgiosKryparosPortrait,
    name: 'Georgios Kryparos',
    bio: 'Georgios is a farmer at heart who gave up his dreams when his grandparents told him that farming requires waking up really early in the morning. Many years later, he started as a UNIX sysadmin while studying Computer Engineering. He soon realised this is too hard when his mail server got hacked and he had to postpone sleeping for some days until the server was back online. “Life would be so much easier if I were a web developer instead”, he thought but when a senior colleague demoed an SQL injection he had introduced, he despaired and decided to join the dark side. And there he roams for the last decade...'
  },
  {
    portrait: caseTaintorPortrait,
    name: 'Case Taintor',
    bio: 'Case is an American living abroad who likes to travel, code, and enjoy the outdoors by foot or bike.'
  }
]

type SpeakerDictionary = {[name : string] : Speaker}

// Export a dictionary of speakers indexed by their lowercase name
export const Speakers : SpeakerDictionary =
  SpeakerList.reduce<SpeakerDictionary>((speakers : SpeakerDictionary, speaker : Speaker) => {
    speakers[speaker.name.toLowerCase()] = speaker
    return speakers
  }, {})
