$idade: s("num:20 num:1")
  .gain("1 0.6")
  .s("bytebeat gm_xylophone")
  .fast(2)
  .crush(slider(7.8, 4, 10, .2))
  .struct("x x ~ x*2 ~ x*2")
  .room(0.5)
  .gain(slider(0.1, 0, 1.5, .1))
  .color("magenta purple")
  
//-------------------------------------
// note("c2 a1 e2 g1")
//   .s("cb")
//   .struct("x ~ x x ~ x ~ x") // 'x' aciona a nota, '~' é silêncio
//   .cutoff(saw.range(300, 1500).slow(4))


// A cada 4 compassos (ciclos), a estrutura esparsa ganha um filtro denso de 16 avos
// s("lt")
//   .struct("~ x ~ x") // Estrutura base: caixa no 2º e 4º tempo
//   .every(4, x => x.struct("x*16")) // No ciclo 4, subdivide a caixa em 16 acionamentos rápidos
