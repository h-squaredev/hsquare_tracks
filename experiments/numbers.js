$idade: s("num:20 num:1")
  .gain("1 0.6")
  .s("bytebeat gm_xylophone")
  .fast(2)
  .crush(slider(7.8, 4, 10, .2))
  .struct("x x ~ x*2 ~ x*2")
  .room(0.5)
  .gain(slider(0.1, 0, 1.5, .1))
  .color("magenta 
  
//--------------------------------------

// $voz:// s("num num:1 num:2 num:3 num:4 num:5 num:6 num:7 num:8 ".slow(4))
//   s("num:8")//.struct("x x ~ x*2")
//     .struct("x x*2 ~ x*4")
//     .gain(slider(0,0,2,0.1))
//     .room(1)