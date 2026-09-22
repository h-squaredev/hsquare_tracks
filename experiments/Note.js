
//-------------------------------------
// note("c2 a1 e2 g1")
//   .s("cb")
//   .struct("x ~ x x ~ x ~ x") // 'x' aciona a nota, '~' é silêncio
//   .cutoff(saw.range(300, 1500).slow(4))

//--------------------------------------

// _$note: note("<[0, 1]/4>, <[2, 4]> ")//.struct(`[x ~ x x ~ ~ x x ~ x x ~ x],[~ x ~ x x ~ x ~ x ~ x ~ x],[~ x ~ x ~ x x ~ x x x ~ x],[x ~ x x x ~ x ~ x ~ x x x]`)
//   .scale("G:minor")
//   //.attack("-15")
//   .s("gm_overdriven_guitar:2")
//   //.jux(iter(5))
//   .struct(`
//                               [x ~ x ~ x ~ x x x ~],
//                               [~ x x x ~ x ~ x ~ x]
//                               [~ x ~ x ~ x ~ x ~ ],
//                               [x ~ x x x x x ~ x x]
//                                                 `)
//   .every(2, x=>x.s("gm_overdriven_guitar"))
//   //.cutoff(saw.range(0, 6000).slow(1))
//   .fast(1)
//   .slow(4)
//   .gain(0.1)
//   .color("cyan blue")
//   ._pianoroll()

//--------------------------------------