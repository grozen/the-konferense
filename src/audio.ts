declare var Howl:any
declare var HowlerGlobal:any

export default class Audio {

  private currentHowl = null

  private howls = []

  private loopUrls = [
    'public/loops/loop1.mp3',
    'public/loops/loop2.mp3',
    'public/loops/loop3.mp3',
    'public/loops/loop4.mp3',
    'public/loops/loop5.mp3',
    'public/loops/loop6.mp3',
    'public/loops/loop7.mp3',
    'public/loops/loop8.mp3'
  ]

  constructor() {
    HowlerGlobal.mobileAutoEnable = false

    for (var url of this.loopUrls) {
      this.howls.push(new Howl({
        src: [url],
        preload: true,
        onend: this.playNext.bind(this)
      }))
    }
  }

  private playNext() {
    this.pickRandomHowl()
    this.currentHowl.play()
  }

  public play() {
    this.pickRandomHowl()
    this.currentHowl.play()
  }

  private pickRandomHowl() {
    var rand = Math.floor(Math.random() * this.howls.length)
    console.log('playing loop ' + rand)
    this.currentHowl =  this.howls[rand];
  }
}
