# &HSQUARE | Strudel Tracks

Bem-vindo ao repositório!

Repositório dedicado aos experimentos, patterns e faixas de live coding criadas no [Strudel REPL](https://strudel.cc/). 
Todos os códigos fontes estão versionados aqui para garantir o backup e facilitar a integração visual.

## Arquivo de Faixas

Tabela centralizadora de tracks para uso integrado com o Miro.

| Faixa / Experimento | Arquivo Fonte | Ouvir no Strudel | Descrição / Anotações |
| :--- | :--- | :--- | :--- |
| **01 - CasteloAnimado** | [`CasteloAnimado.js`](./CasteloAnimado.js) | [▶ Executar][link_CasteloAnimado] | Brincando em copiar a trilha sonora do Castelo Animado |
| **02 - Parabéns** | [`Parabens.js`](./Parabens.js) | [▶ Executar][link_Parabens] | Minha primeira música em código (feito por mim) tendo como referência a famosa celebração "Parabéns para você" |
<<<<<<< HEAD
| **03 - TunDun_dun** | [`TunDun_dun.js`](./TunDun_dun.js) | [▶ Executar][link_TunDun_dun] | Experimento com audiovisual misturando os visuais psicodélicos do Hydra com as batidas eletrônicas do Strudel. Tem uma pegada glitch futurista, batidas marcadas de sintetizadores (clavisynth), texturas vocais robotizadas (gm_voice_oohs) e distorção analógica (crush, coarse). |
=======
| **03 - TunDun_dun** | [`TunDun_dun.js`](./TunDun_dun.js) | [▶ Executarl][link_TunDun_dun] | Experimento com audiovisual misturando os visuais psicodélicos do Hydra com as batidas eletrônicas do Strudel. Tem uma pegada glitch futurista, batidas marcadas de sintetizadores (clavisynth), texturas vocais robotizadas (gm_voice_oohs) e distorção analógica (crush, coarse). |
| **04 - OneTwoThree** | [`OneTwoThree.js`](./OneTwoThree.js) | [▶ Executarl][link_TunDun_dun] | Após estudar conjuntos de filtros e funções, eu estava com muita vontade de usar alguma voz, e misturando tudo tivemos essa música louca. |
<<<<<<< HEAD
=======
>>>>>>> e73e54f (update snippets)
>>>>>>> temp-work


## Como reproduzir

1. Acesse o link **"▶ Executar no Strudel"** na tabela acima.
2. O código será carregado automaticamente no seu navegador.
3. Clique em **Play** ou pressione `Ctrl + Enter` no editor para rodar o som.

## Dica de Execução (Dinâmica de Live Coding)

Ao analisar os códigos das faixas no Strudel, você pode notar que algumas linhas começam com um *underline* (ex: `_$bd_hh:` ou `_$espacial:`). 

Eu utilizo esse `_` propositalmente para deixar essas camadas sonoras "mutadas" ou inativas no momento do *play* inicial. Como a ideia é tocar ao vivo, essa marcação me permite apagar os underlines gradualmente durante a execução, construindo a música e introduzindo novos elementos aos poucos.

Se você quiser ouvir a versão completa da faixa imediatamente, basta remover todos os `_` antes dos cifrões (`$`) e pressionar `Ctrl + Enter`!

O mesmo vale para algumas linhas que estão comentadas ( `//` ). 

---
*Live coding por [h-squaredev](https://github.com/h-squaredev)*

<!-- REFERÊNCIAS DE LINKS -->
[link_CasteloAnimado]: https://strudel.cc/...#Ly9ub3RlKCJkNCBnNCBhIzQgZDUgfiBjNSBhIzQgYTQgYSM0IGc0IGEjNCBkNSBmNSB%2BIGQ1IGY1IGE1IGc1IGY1IGU1IGY1IGc1IikKbm90ZSgiZDQgZzQgYSM0IGQ1IH4gfiBjNSBhIzQgYTQgYSM0IH4gfiB%2BIGQ0IGc0IGEjNCBnNSB%2BIGc1IH4gZzUgYTUgZSM1IGY1IGUjNSBnNSIpLmNvbG9yKCIjQjZEMTZCIikKICAgIC5zb3VuZCgicGlhbm8iKQogICAgLnJvb20oMC44KQogICAgLy8uZmFzdCgpCiAgICAuc2xvdyg0LjUpCiAgICAucGlhbm9yb2xsKHtsYWJlbHM6IDF9KQogICAgLmNvbG9yKCIjNTBBREJGIik%3D
[link_parabens]: https://strudel.cc/#Ly8gUHJlYmFrZSBzY3JpcHQKLy8KLy8gVGhpcyBpcyBjb2RlIHRoYXQgaXMgbG9hZGVkIGJlZm9yZSB5b3VyIHBhdHRlcm4gaXMgcnVuLgovLyBZb3UgY2FuIHVzZSBpdCB0byBkZWZpbmUgY3VzdG9tIGZ1bmN0aW9ucyB0byB1c2UgaW4gYW55IHBhdHRlcm4uCi8vIAovLyBUaGlzIGlzIGFuIGluaXRpYWwgZXhhbXBsZSBzY3JpcHQuIFlvdSBjYW4gZWRpdCBpdCB0byBhZGQgCi8vIHlvdXIgb3duIGZ1bnRpb25zLgovLwovLyBUbyB1c2UgYSBzY3JpcHQgc2hhcmVkIGJ5IHNvbWUgb3RoZXIgdXNlciB5b3UgY2FuIHVzZQovLyB0aGUgaW1wb3J0LWJ1dHRvbiBvciBwYXN0ZSB0aGUgc2NyaXB0IGluIHRoaXMgZWRpdG9yLgoKY29uc3QgcmF0Y2hldCA9IHJlZ2lzdGVyKCdyYXRjaGV0JywgKHBhdCkgPT4gcGF0LnNvbWV0aW1lcyhwbHkoMikpKQoKLy9GZWl0byBwb3IgJkhTUVVBUkUgLyAoaC1zcXVhcmVkZXYpCgovLyBjPT1kw7MgZD09csOpIGU9PW1pIGY9PWbDoSBnPT1zb2wgYT09bMOhIGI9PVNpCgovL1NvbCBTb2wgTMOhIFNvbCBEw7MgU2kgKFBhLXJhLWLDqW5zIHByYSB2by1jw6opCi8vU29sIFNvbCBMw6EgU29sIFLDqSBEw7MgKE5lcy10YSBkYS10YSBxdWUtcmktZGEpCi8vU29sIFNvbCBTb2woYWd1ZG8pIE1pIETDsyBTaSBMw6EgKE11aS10YXMgZmUtbGktY2ktZGEtZGVzKQovL0bDoSBGw6EgTWkgRMOzIFLDqSBEw7MgKE11aS10b3MgYS1ub3MgZGUgdmktZGEpCiRsZWFkOiBub3RlKGAKICAgICBnNSBnNSBhNSBnNSBjNSBiNSB%2BIAogICAgIGc1IGc1IGE1IGc1IGQ1IGM1IH4KICAgICBnNSBnNSBnNiBlNSBjNSBiNSBhNSB%2BIAogICAgIGY1IGY1IGU1IGM1IGQ1IGM1IAogIGApLmNvbG9yKCJjeWFuIikKICAuc291bmQoInBpYW5vIikKICAuc2xvdygzLjUpCiAgLmdhaW4oMS41KQogIC8vLnNvdW5kKCJzYXd0b290aCIpIC8vIDwtLSBSZXRybyBHYW1lCiAgLy8uanV4KHJldikKICAvLy5yb29tKDEpCiAgLnBpYW5vcm9sbCh7bGFiZWxzOiAxfSkuY29sb3IoIndoaXRlIikKCl8kYmRfaGg6IHMoImJkIGJkIGJkIGJkLCBoaCBoaCIpCiAgLmJhbmsoInJvbGFuZFRSOTA5IikKICAuc2hhcGUoMC43KQogIC5yb29tKDAuNSkKICAuY29sb3IgKCJyZWQiKQogIC5fc2NvcGUoKQpfJGVzcGFjaWFsOiBzKCJbc3BhY2U6MTFdKjMgfiBzcGFjZToxMCIpCiAgLmdhaW4oMC41KQ%3D%3D
[link_TunDun_dun]: https://strudel.cc/#Ly9GZWl0byBwb3IgJkhTUVVBUkUgKGgtc3F1YXJlZGV2KQoKYXdhaXQgaW5pdEh5ZHJhKHtmZWVkU3RydWRlbDoxfSkKLy8Kc3JjKHMwKS5rYWxlaWQoSCgiPDggOSA1IDY%2BIikpCi8vLmRpZmYob3NjKDEsMC41LDUpKQoubW9kdWxhdGVTY2FsZShvc2MoMiwgLTAuMjUsIDUpKQoub3V0KCkKLy8KCgphbGwoeD0%2BeC5mZnQoNCkuc2NvcGUoe3BvczowLHNtZWFyOi45NX0pKQoKc2V0Y3BtKDEyMC80KQoKY29uc3QgdmVsb2NpZGFkZSA9ICIxIgoKLy90cmlsaGEgc29ub3JhIAoKJGxlYWQ6IHMoImNsYXZpc3ludGggc2RzNV9iZCo0IikKICAuZ2FpbigiMC4zIDAuNyAwLjkiKQogIC5jb2xvcigicmVkIHB1cnBsZSIpCiAgLmNvYXJzZSgiPDE2IDMyPiIpICAvL2dyb3NzZXJpYQogIC5mYXN0KHZlbG9jaWRhZGUpCgpfJHNkOiBzKCJzZCBzZCB%2BIHNkKjIiKQogIC5zKCJnbV92b2ljZV9vb2hzOjYiKQogIC5qdXgoaXRlcig0KSkKICAucm9vbSgxLjIpCiAgLmNvbG9yKCJtYWdlbnRhIikKICAuZ2FpbigiMiAyLjUgMyIpCiAgLl9zcGlyYWwoeyBzdGVhZHk6IC40NiB9KQogIC5mYXN0KHZlbG9jaWRhZGUpCgoKXyRub3RlOiBub3RlKCJjNCBkNCBjNCBlNCIuc2xvdygyKSkKICAuZ2FpbigiMC40NSIpCiAgLnMoInB1bHNlIikKICAuanV4KHByZXNzKQogIC5mYXN0KHZlbG9jaWRhZGUpCgpfJHNzX2hoX2NwOiBzKCJbY3AsIHNzXSB%2BIHNzLCBoaCo0IikKICAvLy5iYW5rKCJSb2xhbmRUUjgwOCIpCiAgLmNydXNoKCI8NCAzIDI%2BIikKICAuZGVjYXkoIjEgMiAyLjUgMiAxIikKICAuY29sb3IoImN5YW4iKQogIC5mYXN0KHZlbG9jaWRhZGUpCgpfJHByYXRvczogIHMoIjxjbGFzaDoxIGNsYXNoOjI%2BLCBjbGFzaCIpCiAgLmdhaW4oIjAuNCAxIDIiKQogIC5kZWxheSgwLjMpCiAgLmZhc3QodmVsb2NpZGFkZSkKCgogIA%3D%3D
[link_OneTwoThree]: https://strudel.cc/#YXdhaXQgaW5pdEh5ZHJhKHtmZWVkU3RydWRlbDoxfSkKCi8vIE8gSCgpIHBhcmEgbyBIeWRyYSBlbnRlbmRlciBvIHBhZHLDo28gZG8gU3RydWRlbCBuYXRpdmFtZW50ZQpzcmMoczApCiAgICAua2FsZWlkKEgoIjw0IDUgNj4iKSkKICAgIC8vLmNvbG9yYW1hKDEpCiAgICAvLy5waXhlbGF0ZSgyMDAsIDIwMCkKICAgIC5yZXBlYXQoSCgiPDEgMj4iKSwgMSkKICAgIC5yb3RhdGUoMCwgLjIpCiAgICAvLy5tb2R1bGF0ZShub2lzZSgxLCAwLjA1KSkKICAgIC5vdXQoKQoKICBhbGwoeD0%2BeC5mZnQoNCkuc2NvcGUoe3BvczowLHNtZWFyOi43OH0pKQoKLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18KCnNldGNwbSgxMzAvNCkKCiRudW1iZXI6IHMoIm51bToxIG51bToyIG51bTozIikuc3RydWN0KCI8eCozPiIpCiAgLy8gLmdhaW4oIjEgMC42IDAuMiAxIikKICAvLyAuZmFzdCgyKQogIC8vIC5jcnVzaChzbGlkZXIoNiwgNCwgMTAsIC4yKSkKICAvLyAuc3RydWN0KCJ4QDMgeCB%2BIHgqMiB%2BIHgqMiIpCiAgLy8gLnJvb20oMC4yKQogIC8vIC5nYWluKHNsaWRlcigwLjQsIDAsIDEuNSwgLjEpKQogIC8vIC5jb2xvcigibWFnZW50YSBwdXJwbGUiKQoKCi8vIDE0IDE2IDEzQDIKXyRub3RlOiBuKCIwIDEgMiAzIDQgNSIpCiAgLnNjYWxlKCJBOm1pbm9yIikKICAvLy5zKCIgZ21fb3ZlcmRyaXZlbl9ndWl0YXIiKQogIC5zKCJzcXIsICBwaW5rIikKICAubGFzdE9mKDIsIHg9PngucmV2KCkpCiAgLmp1eChpdGVyKDQpKQogIC5jb2xvcigicmVkIGN5YW4iKQogIC50cmVtb2xvc3luYygiNCIpLnRyZW1vbG9za2V3KCIwLjciKS5nYWluKDMpCiAgLmZhc3QoMikKICAucm9vbSgwLjIpCiAgLmdhaW4oc2xpZGVyKDAuMiwgMCwgMS41LCAuMSkpCiAgLl9waWFub3JvbGwoKQoKLy9ybTUwX2JkKDEwMykgLCBzaDA5X2JkKDQzKQpfJGJhZGFzczogcygic2gwOV9iZDoxKjQiKQogIC5nYWluKHNsaWRlcigwLjQsIDAsIDEsIC4xKSkKICAubWFya2NzcygndGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZScpCiAgLmV2ZXJ5KDQsIHggPT4geC5zdHJ1Y3QoIngqNCIpLnMoInpfc2F3dG9vdGgiKSkKICAuY29sb3IoIm9yYW5nZSIpCiAgCgpfJGhoOiBzKCJsdCIpCiAgLnMoImJ5dGViZWF0IikKICAuc3RydWN0KCIgeCo0IH4geCo0IH4gIikKICAuZXZlcnkoNCwgeCA9PiB4LnN0cnVjdCgieCo0IikuZmFzdCg0KSkKICAKICAuZ2FpbihzbGlkZXIoMC43LCAwLCAyLCAuMSkpCiAgCgovLy0tLS0tLS0tLS0tLS0tLS0tCgoKCg%3D%3D