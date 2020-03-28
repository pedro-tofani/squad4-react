const questions = [
  {
    question: "Por quanto tempo o corona vírus sobrevive em superfícies e objetos?",
    options: [
      "Até 1 dia",
      "Até 3 Dias",
      "Até 1 Semana",
      "Até 1 Mês",
    ],
    correct: 2,
  }, {
    question: "O uso de máscaras é recomendado para:",
    options: [
      "Pessoas saudáveis.",
      "Profissionais de saúde.",
      "Todo mundo.",
      "Pessoas infectadas.",
    ],
    correct: 4,
  }, {
    question: "Ao espirrar ou tossir repentinamente, qual o procedimento mais adequado?",
    options: [
      "Cobrir a boca e o nariz com a mão rapidamente.",
      "Não fazer nada, apenas espirrar.",
      "Cobrir a boca e o nariz com um lenço de papel descartável - ou com o próprio cotovelo.",
      "Tentar sempre segurar a tosse e o espirro para não contaminar ninguém.",
    ],
    correct: 3,
  }, {
    question: "Todos estes fazem parte do grupo de risco para infecção por COVID-19, EXCETO:",
    options: [
      "Quem tem sinusite e rinite, alérgicas ou crônicas",
      "Diabéticos",
      "Quem tem insuficiência renal crônica, idosos",
      "Quem tem doença respiratória crônica",
    ],
    correct: 1,
  }, {
    question: "Por quanto tempo o corona vírus sobrevive em superfícies e objetos:",
    options: [
      "Quem tem sinusite e rinite, alérgicas ou crônicas",
      "Diabéticos",
      "Quem tem insuficiência renal crônica, idosos",
      "Quem tem doença respiratória crônica",
    ],
    correct: 1,
  }, {
    question: "Caso seja necessário ir a mercado, farmácia ou qualquer outro ambiente com aglomeração social, devo tomar as seguintes precauções, exceto:",
    options: [
      "Usar máscara mesmo sem ter sintomas semelhantes aos do corona.",
      "Manter distância mínima de 2 metros entre pessoas.",
      "Usar álcool em gel sempre que possível após manusear produtos.",
      "Usar máscara caso esteja com sintomas semelhantes aos do corona.",
    ],
    correct: 1,
  }, {
    question: "Qual o período de incubação do coronavírus – tempo para os primeiros sintomas aparecerem?",
    options: [
      "Mais de 30 dias",
      "De 15 a 30 dias.",
      "De 1 a 14 dias.",
      "Indefinido.",
    ],
    correct: 3,
  }, {
    question: "Qual o primeiro passo para começar a lavar as mãos?",
    options: [
      "Abrir a torneira e umedecer as mãos",
      "Aplicar uma quantidade satisfatória de sabão nas mãos e passar por toda a superficíe das mãos",
      "Esfregar as mãos, para poder passar sabão",
      "Ver se suas mãos estão sujas, em caso negativo, não lavar as mãos",
    ],
    correct: 1,
  }, {
    question: "Por se tratar de um vírus que tem a capacidade de se manter suspenso no ar, qual é a recomendação para ambientes de convívio :",
    options: [
      "Utilizar do ar condicionado para fazer a circulação do ar ",
      "Manter as portas entre ambientes fechadas",
      "Manter as janelas abertas sempre que possível.",
      "Evitar que tenham muitas pessoas no mesmo cômodo.",
    ],
    correct: 3
  }, {
    question: "Todas são formas de transmissão do novo coronavirus, exceto:",
    options: [
      "Animais domésticos",
      "Saliva",
      "Toque",
      "Objetos e superfícies contaminadas",
    ],
    correct: 1
  }, {
    question: "Qual a melhor forma de cumprimentar seu amigo?",
    options: [
      "Abraço",
      "Aperto de mão",
      "Toque de cotovelo",
      "Acenar de longe",
    ],
    correct: 4,
  }, {
    question: "Depois de tocar em superfícies como maçaneta ou apoio do onibus, é recomendado fazer o quê?",
    options: [
      "Higienizar rapidamente as mãos com um lencinho de papel",
      "Lavar as mãos com água e sabão",
      "Esfregar uma mão na outra para matar o vírus com o atrito",
      "Nada, não há perigo nenhum nisso",
    ],
    correct: 3
  }, {
    question: "Qual o processo de lavar as mãos eu não devo aplicar?",
    options: [
      "Ensaboar as palmas das mãos",
      "Fechar a torneira com as mãos ensaboadas e em seguida tirar o resíduo de sabão com papel ou toalha",
      "Aplique na palma da mão quantidade suficiente de sabonete líquido para cobrir todas as superfícies das mãos",
      "Seque as mãos com papel-toalha descartável, iniciando pelas mãos e seguindo pelos punhos.",
    ],
    correct: 2
  }
];

export const generateRandom = (questions) => {
  runningQuestion = Math.floor(Math.random() * (questions.length-1));
}
