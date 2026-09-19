await initHydra({feedStrudel:1})

// O H() para o Hydra entender o padrão do Strudel nativamente
src(s0)
    .kaleid(H("<4 5 6>"))
    //.colorama(1)
    //.pixelate(200, 200)
    .repeat(H("<1 2>"), 1)
    .rotate(0, .2)
    //.modulate(noise(1, 0.05))
    .out()

  all(x=>x.fft(4).scope({pos:0,smear:.78}))

//___________________________________________________

setcpm(130/4)

$number: s("num:1 num:2 num:3").struct("<x*3>")
  // .gain("1 0.6 0.2 1")
  // .fast(2)
  // .crush(slider(6, 4, 10, .2))
  // .struct("x@3 x ~ x*2 ~ x*2")
  // .room(0.2)
  // .gain(slider(0.4, 0, 1.5, .1))
  // .color("magenta purple")


// 14 16 13@2
_$note: n("0 1 2 3 4 5")
  .scale("A:minor")
  //.s(" gm_overdriven_guitar")
  .s("sqr,  pink")
  .lastOf(2, x=>x.rev())
  .jux(iter(4))
  .color("red cyan")
  .tremolosync("4").tremoloskew("0.7").gain(3)
  .fast(2)
  .room(0.2)
  .gain(slider(0.2, 0, 1.5, .1))
  ._pianoroll()

//rm50_bd(103) , sh09_bd(43)
_$badass: s("sh09_bd:1*4")
  .gain(slider(0.4, 0, 1, .1))
  .markcss('text-decoration:underline')
  .every(4, x => x.struct("x*4").s("z_sawtooth"))
  .color("orange")
  

_$hh: s("lt")
  .s("bytebeat")
  .struct(" x*4 ~ x*4 ~ ")
  .every(4, x => x.struct("x*4").fast(4))
  
  .gain(slider(0.7, 0, 2, .1))
  
//-----------------