/* ============================================================
   REGRAS DO SISTEMA — edite este arquivo para ajustar o sistema.
   O site lê tudo daqui (calculadora, especialidades, qualidades…).
   ============================================================ */
window.REGRAS = {

/* ---------- PROGRESSÃO ---------- */
progressao: [
  [1,  "Especialização de Raça"],
  [5,  "Especialização de Raça +2 pontos em atributos"],
  [10, "Especialização de Raça +2 pontos em atributos"],
  [15, "Especialização de Raça +2 pontos em atributos"],
  [20, "Especialização de Raça +2 pontos em atributos"],
  [25, "Especialização de Raça +2 pontos em atributos"],
  [30, "Especialização de Raça 2x"]
],

/* ---------- PROFICIÊNCIA ----------
   Bônus de Proficiência por nível: [nível mínimo, bônus]
   Perícias treinadas = periciasBase + Modificador de Inteligência        */
proficiencia: [[1,2],[5,3],[9,4],[13,5],[17,6],[21,7],[25,8]],
periciasBase: 5,

/* Atributo padrão de cada perícia (o jogador pode trocar na ficha).
   Valores: for, des, con, int, esp                                       */
pericias: [
  ["Atletismo","for"],["Acrobacia","des"],["Furtividade","des"],["Percepção","esp"],["Intuição","esp"],
  ["Diplomacia","int"],["Fortitude","con"],["Iniciativa","des"],["Atuação","int"],["Provocação","esp"],
  ["Vontade","esp"],["Persuasão","int"],["Intimidação","esp"],["Enganação","int"],["Sobrevivência","esp"],
  ["Medicina","int"],["História","int"],["Reflexos","des"],["Tecnologia","int"],["Ressonância","esp"],["Ciência","int"]
],

/* ---------- RAÇAS ----------
   hpBase, hpDado (dado de vida), hpFixo (valor fixo), rtBase,
   rtMod: "full" = Mod. Espírito inteiro | "half" = metade do Mod. Espírito,
   rtNivel (Reiatsu por nível), desloc (base, em metros), ca (base)      */
racas: {
  shinigami: {
    nome:"Shinigami", kanji:"死神",
    desc:"Almas com alto poder espiritual que governam o fluxo de vidas entre o mundo humano e a Sociedade das Almas. Usam espadas chamadas Zanpakutō e combatem Hollows.",
    base:{hpBase:10,hpDado:10,hpFixo:5,rtBase:3,rtMod:"full",rtNivel:5,desloc:5,ca:10,tamanho:"1,50 a 2,00 m (Médio)",peso:"50 a 100 kg"},
    beneficios:[["Adaptação","O Shinigami aumenta o valor de um atributo qualquer em +1, mesmo que tenha sido afetado pelo “Ajuste de Habilidade”. Um de seus atributos pode ter 22 como limite."]],
    maleficios:[], notas:[]
  },
  hollow: {
    nome:"Hollow / Arrancar", kanji:"虚",
    desc:"Criaturas de natureza caótica, almas que ficaram apegadas ao mundo humano e tiveram o coração consumido. A progressão é dividida em formas. Arrancars (que arrancaram a máscara) usam a forma original para PV, Reiatsu e atributos.",
    formas:{
      menos:{nome:"Menos", nivelReq:"Inicial",
        base:{hpBase:8,hpDado:8,hpFixo:4,rtBase:3,rtMod:"half",rtNivel:3,desloc:3,ca:8,tamanho:"3,00 a 7,00 m (Grande)",peso:"Variável"},
        beneficios:[["Crecer","Hollows dessa classe são fracos por estarem no estágio inicial, mas para compensar, podem ter uma técnica única e exclusiva que não consome Reiatsu e irão usar como arma principal até evoluírem para sua próxima forma."]],
        maleficios:[]},
      gillian:{nome:"Menos Grande (Gillian)", nivelReq:"Nível 7",
        base:{hpBase:10,hpDado:10,hpFixo:5,rtBase:4,rtMod:"half",rtNivel:4,desloc:1,ca:9,tamanho:"15 a 30 m (Colossal)",peso:"Variável"},
        beneficios:[["Instinto","Capazes de utilizar Cero, além de terem uma redução de danos passiva em geral em qualquer parte que não seja a máscara Hollow."]],
        maleficios:[["Tortura","Obrigatoriamente 0 em Intelecto e desvantagem em testes de Destreza, além de o valor necessário para tirar um crítico contra eles ser 17-20."]]},
      adjucha:{nome:"Adjucha", nivelReq:"Nível 10",
        base:{hpBase:10,hpDado:10,hpFixo:5,rtBase:4,rtMod:"full",rtNivel:4,desloc:5,ca:10,tamanho:"1,50 a 2,00 m (Médio)",peso:"Variável"},
        beneficios:[["Bestia","Capazes de utilizar Cero, além da técnica que tinham na forma Menos e adquirem mais uma técnica. Recebem +3 pontos para distribuir livremente em seus atributos, e recuperam os pontos perdidos de Intelecto da forma Gillian."]],
        maleficios:[["Regreso","Caso não fiquem constantemente aumentando o seu poder consumindo outros Hollows ou Almas, deve todo dia em sessão girar 1d100, e se tirar 20 ou menos, irá se transformar em um Gillian de forma permanente, devendo tentar virar um Vasto Lorde ou ter uma parte do corpo devorado e ficar estagnado nessa forma."]]},
      vasto:{nome:"Vasto Lorde", nivelReq:"Nível 20",
        base:{hpBase:12,hpDado:12,hpFixo:6,rtBase:5,rtMod:"full",rtNivel:5,desloc:5,ca:12,tamanho:"1,50 a 2,00 m (Médio)",peso:"Variável"},
        beneficios:[["Superioridad","Capazes de utilizar todas as técnicas padrão de um Hollow, fora suas técnicas exclusivas, como também ganham um bônus de +1 ponto em todos os seus atributos físicos."]],
        maleficios:[]}
    },
    notas:[
      ["Arrancar","Um Hollow pode arrancar a própria máscara e adquirir uma forma humanoide, mantendo características Hollow (partes da máscara e o buraco no peito). Pode fazer isso em qualquer forma, mas PV, Reiatsu e cálculo de atributo são feitos com base na forma original, e não poderá mais evoluir nem regredir. Adquire todas as Especialidades de Hollow e uma Zanpakutō com parte de seu poder original selado, e ganha 1d4 níveis com a transformação. Geralmente perde as técnicas únicas de Hollow anteriores."],
      ["Bônus por Forma (Arrancar)","Menos: +15 de Reiatsu. Gillian: +2 pontos bônus livres de atributos e +15 de Reiatsu. Adjucha: +3 pontos bônus livres de atributos e +20 de Reiatsu. Vasto Lorde: +3 pontos bônus livres de atributos, +20 de Reiatsu e herda técnicas únicas de formas Hollow anteriores."],
      ["Fraqueza Comum","Todos os Hollows têm como ponto fraco a própria máscara: ao receberem um acerto crítico natural, o oponente pode girar 1d2 e, se tirar 2, pode optar por acertar a Máscara Hollow e dar um golpe HK. Essa fraqueza é menos punitiva em Arrancars, que ao terem a máscara destruída ficam incapazes de usar Resurrección e perdem 2 de CA permanente enquanto a máscara não for consertada. Durante a Resurrección, essa fraqueza desaparece."]
    ]
  },
  quincy: {
    nome:"Quincy", kanji:"滅却師",
    desc:"Raça antiga, derivação ou evolução de humano, com maior longevidade e capaz de criar armas de Reishi (partículas espirituais) para combate. Atualmente poucos existem.",
    base:{hpBase:6,hpDado:6,hpFixo:3,rtBase:6,rtMod:"full",rtNivel:6,desloc:5,ca:10,tamanho:"1,50 a 2,00 m (Médio)",peso:"50 a 100 kg"},
    beneficios:[
      ["Absorção de Reishi","Absorve o Reishi da área; o mestre determina o nível: Nulo, Comum ou Alto. Nulo: nenhum benefício. Comum: ação bônus para recuperar Reiatsu igual ao Bônus de Proficiência. Alto: recupera Reiatsu passivamente igual ao Bônus de Proficiência e ganha vantagem em seus ataques."],
      ["Análise","Gasta uma ação completa para analisar o oponente e, se bem sucedido, adquire +1 de Modificador no atributo ideal para lidar com ele, além de +2 de Modificador de Dano adicional."]
    ],
    maleficios:[["Envenenamento Hollow","Ao receber dano de ataque direto de um Hollow ou técnica com Reiatsu do mesmo, recebe Envenenado (1d12 de dano por turno) até a ferida ser adequadamente tratada, e recebe dano com vantagem."]],
    notas:[
      ["Echt","Quincys de Sangue Puro, descendentes diretos do Rei Quincy e dos Quincys Originais. Precisam de 1 nível a menos para alcançar as Especialidades Quincy e já começam com a Especialidade Blut de bônus."],
      ["Gemischt","Quincys híbridos (misturados com humanos ou outros Quincys de sangue não puro). Devem treinar para aprender as técnicas, mas são mais proficientes com Gintos e Equipamentos Quincy: gastam 1 de Reiatsu a menos para usar Ginto e requerem 2 níveis a menos para utilizar os Equipamentos Quincy."]
    ]
  },
  fullbringer: {
    nome:"Fullbringer", kanji:"完現術者",
    desc:"Humanos que sofreram ataques de Hollow ainda no útero ou sobreviveram a eles, adquirindo poderes ligados a um acessório de apego ou membro do corpo profundamente conectado a eles.",
    base:{hpBase:8,hpDado:8,hpFixo:4,rtBase:4,rtMod:"full",rtNivel:4,desloc:4,ca:8,tamanho:"1,50 a 2,00 m (Médio)",peso:"50 a 100 kg"},
    beneficios:[
      ["Sobrevivente","Com HP igual ou abaixo de 1/4 do HP Máximo, recebe vantagem em testes de um atributo à sua escolha e +1 de Modificador nele."],
      ["Natural ao Sobrenatural","A cada nível par, recebe o dobro de Reiatsu e possui o dobro de bônus de proficiência em perícias ligadas ao atributo de Espírito."]
    ],
    maleficios:[["Fragilidade Mortal","Ainda são humanos em sua base: possuem desvantagem em testes de Constituição ao ficarem com o HP abaixo de 1/5 do HP Máximo."]],
    notas:[]
  }
},

/* ---------- ESPECIALIDADES (por raça) ----------
   niveis: [Iniciante, Praticante, Expert, Mestre]                     */
especialidades: {
shinigami:[
 {id:"zanjutsu",nome:"Zanjutsu",
  intro:"Arte do combate armado, usando Zanpakutō e esgrima avançada, fazendo a lâmina atuar como extensão do corpo. Golpes armados usam Força e Destreza como acerto.",
  niveis:[
   "Adiciona o próprio bônus de proficiência no acerto de seus golpes armados com sua Zanpakutō. Adiciona o Modificador de Força ou Destreza como dano adicional aos seus ataques.",
   "Pode realizar dois ataques por padrão caso use sua Zanpakutō (técnicas não inclusas), porém o segundo ataque não tem modificador adicional de acerto. Ganha +1 de CA enquanto lutar usando sua Zanpakutō.",
   "Ao causar um acerto crítico com sua Zanpakutō, pode realizar outro ataque adicional, e a margem de crítico do próximo golpe é reduzida em 1 (acumulativo até o limite máximo).",
   "A margem de crítico necessária com sua Zanpakutō é naturalmente reduzida em 1 permanente, e possui vantagem em qualquer ação usando Zanpakutō (ataques, testes), também aumentando o dano base de seus golpes com Zanpakutō em 1 dado permanente."]},
 {id:"kido",nome:"Kidō",
  intro:"Feitiços transmitidos por ensinamento, manifestações puras de energia espiritual. Kidōs usam o Modificador de Espírito para o acerto.",
  niveis:[
   "Usa qualquer Kidō numerado de 1 até 20, que adicionam o bônus de proficiência como acerto adicional. É obrigatório usar a Ação Bônus para recitar os cânticos e lançar Kidōs.",
   "Usa qualquer Kidō de 21 até 40, adicionando o Modificador de Espírito como dano adicional. Pode lançar Kidō sem cânticos, porém o dano e efeito são reduzidos pela metade.",
   "Usa qualquer Kidō de 41 até 60, podendo lançar um Kidō como ação bônus, porém com dano e efeitos reduzidos. O cântico não é mais obrigatório e não há desvantagem ao usar Kidō sem ele.",
   "Pode usar qualquer Kidō, incluindo os poderosos e proibidos de 61 até 99. Pode lançar 1 Kidō adicional à ação padrão como ação extra, e lançar Kidō como ação bônus não tem desvantagem ou consequência. Gastar uma ação bônus para recitar cântico fortalece o Kidō: +1 dado de dano/efeito e +1 na CD. Usar um Kidō com uma Ação Completa aumenta em +2 dados de dano/efeito e +2 na CD, com vantagem no uso."]},
 {id:"hakuda",nome:"Hakuda",
  intro:"Arte do combate desarmado, usando o próprio corpo como arma e escudo. Usa o Modificador de Força ou Destreza como acerto.",
  niveis:[
   "Pode gastar uma ação padrão para dar um golpe desarmado adicional à sua ação padrão, adicionando o bônus de proficiência como dano adicional aos golpes desarmados.",
   "Ao lutar corpo a corpo, recebe +1 de CA e seus oponentes têm desvantagem em reações contra seus golpes desarmados, adicionando o Modificador de Força ou Destreza como dano adicional.",
   "Se o oponente errar um golpe em curta distância, pode aplicar um golpe de oportunidade, gastando a reação. Ao causar um acerto crítico, pode aplicar automaticamente um golpe certeiro, mas com o dano desarmado sem bônus adicional.",
   "O golpe de oportunidade contra um golpe errado em curta distância conta como ação extra, sem gastar reação. Pode gastar a reação para contra-atacar (se tirar acerto maior que o do oponente, anula o ataque dele), possuindo vantagem permanente em suas ações de combate corpo a corpo."]},
 {id:"hoho",nome:"Hohō (Shunpo)",
  intro:"Arte da velocidade: usar o poder espiritual para aprimorar agilidade e tempo de reação. Todos os Shinigamis usam o Shunpo, por vezes ao dia igual ao bônus de proficiência, como ação padrão para dobrar o deslocamento sem deixar golpe de oportunidade.",
  niveis:[
   "Usa o Shunpo de forma ofensiva: avança contra um oponente como ação padrão para desferir um ataque básico (sem ser Kidō ou técnicas), com +2 no acerto.",
   "O Shunpo pode ser gasto como ação bônus, e o oponente deve fazer um teste oposto de Destreza contra o usuário, ou terá a CA reduzida em 2 durante o acerto desse golpe.",
   "Usa o Shunpo também como proteção, aumentando em +2 o bônus de CA e aplicando desvantagem no acerto do oponente; se o golpe errar, o usuário pode se mover para uma posição dentro do alcance. Funciona como reação.",
   "Usa o Shunpo como algo natural: +3 de CA quando usado defensivamente e, ao usar ofensivamente, oponentes que falharem em teste de Destreza oposto recebem golpes garantidos (mas não críticos)."]}
],
hollow:[
 {id:"cero",nome:"Cero",
  intro:"Disparo concentrado de Reiatsu devastador, liberado a partir da forma Gillian ou da transformação em Arrancar, disparado de uma parte específica do corpo (escolha uma, somente ela). Consumo padrão: 7 de Reiatsu, +1 para carregar mais tempo e aumentar o dano.",
  niveis:[
   "Causa 1/4 do Level + d8 (mín. 1) de dano de Energia, alcance de 7 m; ação bônus para carregar e padrão para disparar.",
   "Causa 1/4 do Level + d8 (mín. 1) de dano de Energia, alcance de 14 m; usa apenas a ação padrão para disparar, podendo gastar ação bônus para aumentar o dano em 1 dado.",
   "Causa 1/4 do Level + d8 (mín. 1) + Mod. de Espírito de dano de Energia, alcance de 20 m; usa ação bônus para disparar, podendo gastar turnos para acumular 1 dado de dano adicional por turno.",
   "Causa 1/3 do Level + d10 (mín. 1) + Mod. de Espírito, alcance de 25 m; pode usar como ação adicional à ação padrão ou bônus, podendo gastar turnos para acumular 2 dados de dano adicionais por turno."]},
 {id:"sonido",nome:"Sonido",
  intro:"Técnica de velocidade natural para Arrancars e Hollows de Classe Adjucha ou superior, com bônus em furtividade. Por vezes ao dia igual ao bônus de proficiência, dobra o deslocamento e a furtividade como ação padrão.",
  niveis:[
   "Usa o Sonido de forma ofensiva: avança contra um oponente como ação padrão para desferir um ataque básico (sem Kidō ou técnicas), e o oponente tem desvantagem em reação.",
   "O Sonido pode ser gasto como ação bônus; o oponente faz teste oposto de Percepção contra o usuário (Furtividade). Se falhar, gire 1d2 (1 é ataque certeiro, 2 será crítico caso acerte).",
   "Usa o Sonido também como proteção: +2 de CA e camuflagem igual à metade do bônus de proficiência × 10; se o golpe errar, o usuário pode se mover para uma posição dentro do alcance. Funciona como reação.",
   "Usa o Sonido como algo natural: +3 de CA quando usado defensivamente e, ao usar ofensivamente, oponentes que falharem em teste de Percepção oposto recebem a condição Vulnerável e o usuário tem vantagem no acerto."]},
 {id:"hierro",nome:"Hierro",
  intro:"Técnica passiva em Hollows de Classe Adjucha ou superior e Arrancars: a pele do usuário fica densa e resistente como uma armadura natural, reduzindo ou anulando o dano de golpes.",
  niveis:[
   "Redução fixa de dano igual à metade do Bônus de Proficiência (mín. 1). Dados de dano de golpes físicos são girados com desvantagem.",
   "Reduz o dano recebido em valor igual ao Bônus de Proficiência. Escolhe um tipo de dano físico (Concussão, Cortante ou Perfurante) para receber Resistência.",
   "Aumenta em +1 a CA de forma fixa e a redução de dano passa a ser Bônus de Proficiência + metade do Mod. de Constituição. Resistência a danos físicos em geral (Concussão, Cortante e Perfurante).",
   "Aumenta a CA permanentemente em +2 e a redução de dano passa a ser Bônus de Proficiência + metade do Modificador do maior atributo. Resistência a danos físicos em geral, e qualquer outro tipo de dano que fosse receber é girado com desvantagem."]},
 {id:"pesquisa",nome:"Pesquisa",
  intro:"Técnica sensorial de busca e rastreamento, que localiza indivíduos na área através de suas pressões espirituais e rastros residuais.",
  niveis:[
   "Ação padrão; alcance igual ao Mod. de Percepção em metros. Identifica quantos indivíduos há no alcance e se são conhecidos ou não.",
   "Ação padrão; alcance igual à metade do Atributo de Espírito em metros. Distingue a raça dos indivíduos e onde estão aproximadamente.",
   "Ação bônus; alcance igual ao Atributo de Espírito em metros. Determina nível de poder, forma, aparência e tipo de poder sem ver o indivíduo. Ao usar, fica imune a golpes de oportunidade na rodada e cancela a furtividade de oponentes.",
   "Ação bônus; alcance igual ao Bônus de Proficiência em quilômetros. Sabe emoções, estado e intenções dos seres localizados, se falam a verdade e a plenitude base de suas técnicas (tipo de Zanpakutō ou poder, potencial oculto). Vantagem em reações na rodada, além da imunidade a golpes de oportunidade."]},
 {id:"bala",nome:"Bala",
  intro:"Técnica ofensiva básica semelhante ao Cero, mas que causa dano pela quantidade: pequenas esferas de energia disparadas simultaneamente, lançadas da mesma parte do Cero. Consumo padrão: 2 de Reiatsu por projétil.",
  niveis:[
   "Ação padrão; cada projétil causa 1d4 de dano de energia, com acerto girado individualmente; quantidade máxima igual ao Mod. de Espírito; alcance 9 m.",
   "Ação padrão; cada projétil causa 1d6 de dano de energia; quantidade máxima igual ao Mod. de Espírito + metade do Bônus de Proficiência; alcance 18 m.",
   "Ação bônus; cada projétil causa 2d4 de dano de energia; quantidade máxima igual ao Mod. de Espírito + Bônus de Proficiência; alcance 24 m.",
   "Ação bônus; cada projétil causa 2d6 de dano de energia; quantidade máxima igual ao Atributo de Espírito; alcance 32 m."]}
],
quincy:[
 {id:"heilig",nome:"Heilig Waffe",
  intro:"Arma espiritual feita de Reishi, com iluminação azul brilhante. Tem os atributos de qualquer arma à escolha do usuário (padrão: arco e flecha). Gasta ação bônus para invocar.",
  niveis:[
   "Adiciona o bônus de proficiência no acerto de golpes armados com a Heilig Waffe. Adiciona o Mod. de Inteligência ou Destreza como dano adicional.",
   "Bônus de acerto acumulativo de +1 de acordo com o nível do Reishi ambiente, também aplicado ao dano. Pode gastar uma ação padrão para absorver mais Reishi e aumentar esse bônus pelo resto do combate.",
   "Acumular Reishi para fortalecer as armas custa apenas a ação bônus por turno, e invocar a arma passa a ser ação livre. Ganha um ataque extra por turno.",
   "A margem de crítico é reduzida em 1 em ambiente com Bom Reishi, e em 2 com Reishi abundante. As armas de Reishi têm 1 dado de dano adicional e vantagem permanente no dano e no acerto."]},
 {id:"hirenkyaku",nome:"Hirenkyaku",
  intro:"Técnica de deslocamento: condensa o Reishi do ambiente em uma plataforma luminosa nos pés. Por vezes ao dia, dobra o deslocamento, com bônus de acordo com o Reishi (Comum: +1 Destreza e +3 m / Alto: +2 Destreza e +6 m).",
  niveis:[
   "As plataformas ficam presas somente aos pés; deve gastar uma ação bônus para conjurar e manter a técnica.",
   "As plataformas são mais flexíveis: pode gastar uma ação padrão para o bônus passar de dobro para triplo. A CA aumenta em 2 durante o uso dessa forma.",
   "A plataforma leva a si mesmo e até 1 aliado a 1 m de distância, usando o seu deslocamento como base para ambos. Não gasta mais ação bônus para manter, somente para ativar.",
   "A plataforma leva até 2 indivíduos a até 2 m de distância. Pode usar a técnica como ação livre e sempre será o triplo do deslocamento."]},
 {id:"blut",nome:"Blut",
  intro:"Técnica defensiva versátil: faz o Reishi fluir pela corrente sanguínea e se manifestar como circuitos luminosos. Ação bônus ou reação; custa 5 de Reiatsu por uso.",
  niveis:[
   "Blut Vene: forma básica e defensiva, reveste a região que receberia o impacto, reduzindo o dano recebido em valor igual ao Modificador mais alto do Quincy.",
   "Blut Arterie: forma ofensiva e bruta, reforça golpes físicos e da Arma Espiritual: +1 dado de dano e vantagem no dano ou no acerto (escolhe um).",
   "Aprimora Vene e Arterie: o Vene dá resistência a um tipo de dano à escolha (definido no início do combate); o Arterie concede vantagem no dano e no acerto simultaneamente.",
   "Blut Vene Anhaben: versão que se expande para fora do corpo, custo dobrado, defesa de 2 m de circunferência, absorve técnicas de reiatsu/reishi e reduz pela metade o dano geral recebido. Se um ser vivo entrar em contato, faz teste de Vontade contra o usuário ou recebe dano igual a 1/6 do HP Máximo e tem 1/4 do Reiatsu Atual absorvido. Usos por dia: metade do Bônus de Proficiência."]},
 {id:"ginto",nome:"Ginto",
  intro:"Cápsula de prata com Reishi líquido condensado, usada para feitiços e construtos avançados semelhantes aos Kidōs, com encantamento a ser conjurado e necessidade de carregar os materiais.",
  niveis:[
   "Precisa das Cápsulas de Ginto para conjurar, e gasta uma ação bônus para recitar o encantamento; os usados como reação devem ser preparados com antecedência.",
   "Precisa de 1 cápsula a menos do que o necessário (mín. 1) e pode gastar 1 cápsula adicional para aumentar o efeito (adicionar o Modificador mais alto) ou aumentar em 1 dado o dano.",
   "Não precisa mais de encantamentos, mas ainda requer Cápsulas. Pode gastar ação bônus e 5 de Reiatsu para restaurar uma Cápsula, por vezes ao dia igual ao bônus de proficiência.",
   "Conjura Gintos sem Cápsulas, de forma natural. Pode usar Gintos como ação adicional ao turno e dobrar o custo para adicionar o próprio Modificador mais alto como dano e acerto adicional."]},
 {id:"ransotengai",nome:"Ransōtengai (marionete de Reishi)",
  intro:"Técnica avançada: linhas de Reishi complexas, controladas pelo cérebro, movem o corpo como uma marionete, fortalecendo e coordenando os movimentos, permitindo lutar mesmo com o corpo debilitado. Ação bônus para ativar e manter; 7 de Reiatsu por turno para manter.",
  niveis:[
   "Linhas leves: 10 de HP temporário e vantagem em testes de Destreza, Força e Constituição (não se aplica a Perícias).",
   "Linhas mais densas: 15 de HP temporário e vantagem em testes de Destreza, Força e Constituição, incluindo suas perícias.",
   "Linhas mais completas: ignora por completo condições físicas recebidas e concede 20 de HP temporário.",
   "Nível avançado: vantagem em reações, +1 em todos os Modificadores de Força, Destreza e Constituição, e 25 de HP temporário."]}
],
fullbringer:[
 {id:"bringerlight",nome:"Bringer Light",
  intro:"Movimento de alta velocidade: concentra Reishi e Reiatsu nos pés para criar impulsos luminosos. Pode usar por vezes ao dia igual ao bônus de proficiência.",
  niveis:[
   "Ainda frágil: dobra o deslocamento ao usar e anula danos de queda, podendo usar como reação e ação bônus.",
   "Mais estável: pode usar de forma ofensiva para ofuscar e avançar contra inimigos, que devem fazer teste de Reflexos ou ficam com a condição Ofuscado.",
   "Mais denso e poderoso: pode desviar por completo de um ataque se passar em teste de Reflexos contra o acerto do oponente. Se tirar acerto crítico ou o oponente tirar erro crítico, pode dar um ataque com acerto garantido.",
   "Pode usar o dobro de vezes o bônus de proficiência, mas deve gastar 5 de Reiatsu (não pode ser reduzido) por uso consecutivo."]},
 {id:"strongsoul",nome:"Strong Soul",
  intro:"Habilidade natural de compartilhar poder e essência com aliados para fornecer suporte. Ressoa a alma com aliados em quantidade igual ao Bônus de Proficiência; gasta ação bônus.",
  niveis:[
   "Alma ressoa fraco: dá vantagem em uma perícia à escolha, por vezes igual à metade do Bônus de Proficiência.",
   "Alma mais forte: sincroniza intenções em comum, podendo fornecer vantagem no acerto ou no dano de um ataque, além dos efeitos adicionais.",
   "Sincroniza intenções e pensamentos básicos mas essenciais: +1 dado de dano para si e aliados, além dos efeitos anteriores, por vezes iguais ao bônus de proficiência.",
   "Sincronia perfeita: todos atuam como um só, com vantagem em todos os testes, acertos e dano, além dos efeitos anteriores, e +5 de Reiatsu por cada indivíduo sincronizado."]},
 {id:"fullbring",nome:"Fullbring (vínculo)",
  intro:"A conexão tão forte com seu objeto ou membro o transforma em uma arma espiritual poderosa e versátil de forma passiva.",
  niveis:[
   "O objeto ou membro de vínculo causa dano igual ao Modificador mais alto + d2, que pode ser Concussão, Cortante, Perfurante, Energia, Frio ou Fogo.",
   "O vínculo tem o bônus de proficiência adicionado como dano e acerto adicional, e vantagem no dano ou no acerto (escolhe um).",
   "Mais poderoso: dano passa a Modificador mais alto + d4, com vantagem no dano e no acerto simultaneamente.",
   "Conexão íntima e poderosa: crítico reduzido para 18-20 e dano crítico multiplicado por 3."]}
]
},

/* ---------- QUALIDADES ---------- */
qualidades: [
 ["Adaptável","Ao passar 2 turnos em terreno difícil, você deixa de receber as desvantagens do terreno."],
 ["Aprendizado Rápido","Você se adapta fácil a situações e aprende fácil com os erros, realizando treinos com metade do tempo necessário."],
 ["Belo","Com uma beleza escultural você recebe +2 em testes de interação Social onde sua beleza possa ser usada."],
 ["Bom Senso","Você tem uma considerável sabedoria prática e cotidiana. Toda vez que estiver prestes a fazer algo contrário ao bom senso, uma vez por sessão, o mestre pode te alertar se uma decisão é ruim ou não."],
 ["Técnica Assinatura","Você usou e praticou tanto uma técnica que ganhou um domínio único sobre ela, ganhando +1 de dano com a mesma e gastando -1 de Reiatsu nela e variantes."],
 ["Corpo Resiliente","Ao ser curado, você recebe 1 dado a mais de cura."],
 ["Corpo Resistente","Possui resistência contra doenças e venenos."],
 ["Descansado","Seus descansos levam metade do tempo para acontecer."],
 ["Reiatsu Absurda","☆ Você é alguém escolhido, nasceu com um Reiatsu fora do comum, ganhando +2 por nível (girar d20 e tirar 20)."],
 ["Estudioso","Você consegue escolher mais duas perícias para ser treinado."],
 ["Fofo","Tão fofo que não parece perigoso: seu inimigo deve fazer um teste de Vontade (CD Técnica+2); se falhar, deve girar 1d4 e, se tirar 1, não poderá lhe atacar."],
 ["Frívolo","Você não sabe lidar ou não entende as pessoas ao seu redor, então provocações e ofensas não costumam te afetar. Vantagem em testes de Resistência contra Intimidação, Provocação e Persuasão."],
 ["Indomável","Você pode gastar 2 de Reiatsu para receber uma ação de movimento extra."],
 ["Intimidador","Você possui uma aura extremamente poderosa: ao iniciar o combate, pode fazer um teste de Intimidação contra a Vontade dos alvos; se obtiver sucesso, o alvo terá desvantagem nas jogadas neste turno."],
 ["Jura de Vingança","Ao jurar vingança a alguém que lhe causou um grande mal, sempre que o encontrar você deverá tentar matá-lo, recebendo +5 em jogadas contra o alvo."],
 ["Mentiroso","Um mentiroso nato: as pessoas acreditam fielmente em suas palavras. Vantagem em testes de Enganação."],
 ["Nobre","Você vem de uma família nobre, recebendo maior reconhecimento: +2 em Diplomacia."],
 ["Protetor","Você sente um dever moral de proteger algo ou alguém. Ao iniciar uma sessão, escolha algo ou alguém para proteger: +2 em rolagens para proteger tal coisa."],
 ["Proficiente","Você treinou tanto uma perícia que possui grande proficiência com ela: escolha uma perícia e, uma vez por dia, passe em qualquer teste nela por uma rodada."],
 ["Sentido Aguçado","+2 em Percepção, não fica desprevenido contra inimigos que não possa ver (sem ser por técnicas) e, sempre que erra um ataque devido a camuflagem ou camuflagem total, pode rolar mais uma vez o dado da chance de falha. Requisitos: Espírito 15, treinado em Percepção."],
 ["Sexto Sentido","Um sexto sentido que te avisa de perigos: uma vez por dia pode fazer um teste de Percepção com +2 (CD definida pelo mestre) para perceber perigos próximos."],
 ["Situação Crítica","Ao estar correndo risco de vida, você recebe +2 em qualquer teste (o risco é definido pelo mestre da mesa)."],
 ["Sortudo","Você pode gastar 6 de Reiatsu para rolar novamente um teste recém-realizado (apenas uma vez por cena); deve ficar com o novo resultado."],
 ["Terreno Favorito","Escolha um tipo de terreno entre: Cidades, Florestas, Desertos, Construções ou Oceano/Praia. Seu dano nesse local aumenta em 1d8."]
],

/* ---------- DEFEITOS ---------- */
defeitos: [
 ["Dificuldade de Espírito","Faz você girar qualquer teste envolvendo Reiatsu com dificuldade, além de não se beneficiar de efeitos de redução de custo."],
 ["Amnésia","Você não consegue guardar informação por muito tempo, mesmo coisas bobas ou importantes. Desvantagem em qualquer Teste de Habilidade e em testes para lembrar de alguma informação."],
 ["Analfabeto","Você não foi alfabetizado na infância e não consegue ler absolutamente nada. Falha automaticamente em testes de leitura."],
 ["Audição Ruim","Sua audição é reduzida por um defeito genético, sequela de batalha ou outro motivo. Desvantagem em testes relacionados à audição."],
 ["Azarado","A vida parece sempre querer rir da sua cara: alguma coisa sempre acaba dando errado. Uma vez por dia, o Mestre pode transformar uma rolagem bem-sucedida em falha, sua ou de qualquer outro, desde que seja para lhe atrapalhar."],
 ["Cego","Você não enxerga nada, mas possui audição aguçada (vantagem em testes de audição). Recebe a condição cego permanentemente."],
 ["Código de Honra","Você tem um código que deve seguir acima de tudo. Ao agir contra o código, recebe -4 em qualquer teste até o fim da cena; ao agir a favor, recebe +2 em testes até o fim da cena."],
 ["Compulsivo","Você tem algum tipo de compulsão psicológica: limpeza, perfeição, contar vantagem, furtar, jogar, exagerar as coisas ou simplesmente falar."],
 ["Convencido","Você adora falar sobre si mesmo e sempre tenta receber todos os créditos de qualquer situação, ouvida e falada. Desvantagem em Testes de Carisma."],
 ["Dependente","Você é extremamente dependente dos seus companheiros: -2 em todos os atributos ao ver algum deles receber um ferimento grave (metade da vida ou mais)."],
 ["Depressivo","Você tem o hábito de se diminuir e não confia em suas habilidades. Uma vez por cena, gire 1d4; se cair entre 1-2, recebe -5 em rolagens até o fim da cena."],
 ["Doença","Você tem uma doença que afeta seu corpo e não tem cura. [A Doença deve ser analisada e aprovada pelo Mestre]"],
 ["Distraído","Você tem dificuldade para se concentrar. Consequentemente, não possui o conhecimento necessário em várias situações."],
 ["Olfato Ruim","Dificuldade em distinguir cheiros, podendo ser facilmente afetado por substâncias tóxicas no ar. Desvantagem em testes de Percepção para distinguir cheiros."],
 ["Ódio","Você sente um ódio irracional, absoluto e em grande medida incontrolável por uma certa coisa (espécie de animal, classe de pessoas, cor, situação…) e está constantemente em busca de uma oportunidade para prejudicar ou controlar o objeto de seu ódio."],
 ["Pacifista","Você é contra a violência e tenta resolver tudo na conversa: -2 passos de dano em técnicas e ataques corpo a corpo, porém +2 em CD e testes de interação Social."],
 ["Super Orgulhoso","Você é incapaz de ignorar provocações e insultos direcionados a você, seus companheiros ou entes queridos, independentemente de quão inapropriada seja a situação."],
 ["Tato Ruim","Dificuldade em sentir o ambiente, não conseguindo distinguir com exatidão as coisas sem ver."],
 ["Timidez","A timidez lhe atrapalha bastante: desvantagem em testes de interação Social."],
 ["Trauma Mental","Trauma devido a uma situação específica (especificar). Ao entrar em situação com o motivo do trauma ativo, desvantagem em todos os testes e -3 em todos os Modificadores até se livrar dele. Pode fazer um teste de Inteligência para se livrar do trauma por alguns instantes (CD 25)."],
 ["Visão Ruim","Problema de visão: no início do combate gire 1d2; se for 1, desvantagem em ataques à distância e -5 na CA; se for 2, nada acontece."],
 ["Descontrole de Reiatsu","Seu poder espiritual é tão absurdo que você não consegue regulá-lo bem, gastando o dobro de Reiatsu necessário."],
 ["Pobre","Seu dinheiro é cortado pela metade."],
 ["Sem Braço","Devido a algum acontecimento, você perdeu um braço, não podendo usar armas de duas mãos ou qualquer item que necessite das duas mãos."],
 ["Sincero","Você não consegue mentir nem permitir que outras pessoas o façam à sua frente. Não pode realizar testes de Enganação."],
 ["Sósia","Você é idêntico a outra pessoa, podendo ser confundido com ela a qualquer momento, o que pode ou não lhe gerar problemas."],
 ["Surdo","Você não consegue ouvir nada e não pode realizar testes que envolvam audição. Um surdo de nascença é automaticamente Mudo."]
]
};
