//Feito por &HSQUARE / (h-squaredev)

// c==dó d==ré e==mi f==fá g==sol a==lá b==Si

//Sol Sol Lá Sol Dó Si (Pa-ra-béns pra vo-cê)
//Sol Sol Lá Sol Ré Dó (Nes-ta da-ta que-ri-da)
//Sol Sol Sol(agudo) Mi Dó Si Lá (Mui-tas fe-li-ci-da-des)
//Fá Fá Mi Dó Ré Dó (Mui-tos a-nos de vi-da)
$lead: note(`
     g5 g5 a5 g5 c5 b5 ~ 
     g5 g5 a5 g5 d5 c5 ~
     g5 g5 g6 e5 c5 b5 a5 ~ 
     f5 f5 e5 c5 d5 c5 
  `).color("cyan")
  .sound("piano")
  .slow(3.5)
  .gain(1.5)
  //.sound("sawtooth")
  //.jux(rev)
  //.room(1)
  .pianoroll({labels: 1}).color("white")

_$bd_hh: s("bd bd bd bd, hh hh")
  .bank("rolandTR909")
  .shape(0.7)
  .room(0.5)
  .color ("red")
  ._scope()
  
_$espacial: s("[space:11]*3 ~ space:10")
  .gain(0.5)