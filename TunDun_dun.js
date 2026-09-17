await initHydra({feedStrudel:1})
//
src(s0).kaleid(H("<8 9 5 6>"))
//.diff(osc(1,0.5,5))
.modulateScale(osc(2, -0.25, 5))
.out()
//


all(x=>x.fft(4).scope({pos:0,smear:.95}))

setcpm(120/4)

const velocidade = "1"

//trilha sonora 

$lead: s("clavisynth sds5_bd*4")
  .gain("0.3 0.7 0.9")
  .color("red purple")
  .coarse("<16 32>")  //grosseria
  .fast(velocidade)

_$sd: s("sd sd ~ sd*2")
  .s("gm_voice_oohs:6")
  .jux(iter(4))
  .room(1.2)
  .color("magenta")
  .gain("2 2.5 3")
  ._spiral({ steady: .46 })
  .fast(velocidade)


_$note: note("c4 d4 c4 e4".slow(2))
  .gain("0.45")
  .s("pulse")
  .jux(press)
  .fast(velocidade)

_$ss_hh_cp: s("[cp, ss] ~ ss, hh*4")
  //.bank("RolandTR808")
  .crush("<4 3 2>")
  .decay("1 2 2.5 2 1")
  .color("cyan")
  .fast(velocidade)

_$pratos:  s("<clash:1 clash:2>, clash")
  .gain("0.4 1 2")
  .delay(0.3)
  .fast(velocidade)


  