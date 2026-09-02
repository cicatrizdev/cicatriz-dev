import type { UiStrings } from '@/content/types'

export const pt = {
  meta: {
    title: 'cicatriz(1) — Pedro Mello',
    description:
      'Página de manual de Pedro "Cicatriz" Mello: engenheiro de software no Brasil atuando em toda a stack — web, mobile e back-end, com TypeScript no centro — consultoria para times, mentoria de devs e addons para WoW Classic.',
    ogAlt: 'cicatriz(1) — Pedro Mello, engenheiro de software. Uma man page.',
  },
  chrome: {
    manual: 'Manual de Comandos Gerais',
    skipToContent: 'Pular para o conteúdo',
    themeToggle: 'Alternar tema de cores',
    themeLight: 'claro',
    themeDark: 'escuro',
    langSwitch: 'Read in English',
    sourceLink: 'código',
    built: 'gerado',
    played: {
      total: 'Tempo total jogado',
      level: 'Tempo jogado neste nível',
      years: ['ano', 'anos'],
      months: ['mês', 'meses'],
    },
  },
  sections: {
    name: 'Nome',
    synopsis: 'Sinopse',
    description: 'Descrição',
    options: 'Opções',
    examples: 'Exemplos',
    history: 'Histórico',
    standards: 'Padrões',
    bugs: 'Bugs',
    seeAlso: 'Veja também',
  },
  name: {
    summary:
      'Pedro Mello, engenheiro de software, mentor e riff lord nas horas vagas.',
    avatarAlt: 'Retrato de Pedro Mello',
  },
  synopsis: {
    note: 'As opções podem ser combinadas. Sem opções, continua a leitura.',
  },
  description: {
    paragraphs: [
      'Pedro Mello (vulgo Cicatriz) é um engenheiro de software autodidata baseado no Brasil. Atua em toda a stack — front-ends de produto, apps mobile, APIs e o ferramental que segura tudo junto — e já entregou o bastante de cada um pra preferir soluções chatas que chegam em produção.',
      'A especialidade é TypeScript de ponta a ponta: React e Next.js na web, React Native no mobile, Node.js por trás. Em volta desse núcleo, vai aonde o problema estiver: Python e Rust pra ferramentas, Swift e Kotlin quando nativo é a escolha certa, e o encanamento de cloud e CI que coloca tudo no ar.',
      'Está sempre aprendendo algo novo e gosta ainda mais de compartilhar. Ajudar devs nos primeiros passos — e nos seguintes — é a parte do trabalho que faria de graça.',
      'Fora do expediente, costuma estar em algum lugar de Azeroth. O hobby está virando foco: addons em Lua, WeakAuras e macros para a comunidade de WoW Classic, feitos com o mesmo cuidado de tudo acima.',
    ],
    skillsLead: 'Stack',
    qualityLegend: 'Cores por raridade de item:',
    quality: {
      legendary: 'especialidade',
      epic: 'uso diário',
      rare: 'confortável',
      uncommon: 'familiar',
      common: 'já vi',
    },
  },
  options: {
    lead: 'Cada opção é um serviço. Para invocar qualquer uma, veja BUGS — ou use o prompt logo abaixo dela.',
    request: 'Solicitar',
  },
  examples: {
    lead: 'Trabalho para clientes fica sob NDA — veja',
    visit: 'abrir',
    source: 'código',
    wip: 'em andamento',
  },
  history: {
    lead: 'Do mais recente ao mais antigo.',
    present: 'atual',
    via: 'via',
    empty: 'O histórico ainda está sendo escrito.',
  },
  standards: {
    lead: 'cicatriz está em conformidade com os seguintes padrões:',
    inProgress: 'em andamento',
    note: 'A conformidade com metalcore(7) é voluntária e contínua.',
  },
  bugs: {
    lead: 'Reporte bugs, ideias de projeto, pedidos de addon e de mentoria pelo formulário abaixo, ou escreva para',
    form: {
      topic: 'Assunto',
      topicOther: 'outra coisa',
      name: 'Seu nome',
      namePlaceholder: 'Edson Arantes',
      email: 'Seu e-mail',
      emailPlaceholder: 'edson@exemplo.com',
      message: 'Mensagem',
      messagePlaceholder: 'E aí! Bora tomar uma cerveja 🍺',
      send: 'enviar',
      sending: 'enviando…',
      sentTitle: '200 OK',
      sentBody:
        'Mensagem entregue em contato@cicatriz.dev. Resposta em até alguns dias.',
      sendAnother: 'enviar outra',
      retryIn: 'Muitas mensagens. Tente de novo em {seconds}s.',
      mailtoFallback: 'Escreva direto para contato@cicatriz.dev',
      errors: {
        required: 'obrigatório',
        invalid_email: 'e-mail inválido',
        too_short: 'muito curto',
        too_long: 'muito longo',
      },
      status: {
        invalid: 'Confira os campos destacados.',
        forbidden: 'Requisição recusada.',
        too_large: 'Mensagem grande demais.',
        rate_limited: 'Muitas mensagens. Tente de novo em alguns minutos.',
        captcha: 'Não deu pra confirmar que você é humano. Tente de novo.',
        send_failed:
          'Falha na entrega. Tente de novo ou escreva para contato@cicatriz.dev.',
        unavailable: 'O formulário está fora do ar no momento.',
        network:
          'Não deu pra alcançar o servidor. Confira sua conexão e tente de novo.',
      },
    },
  },
  seeAlso: {
    items: [
      {
        label: 'stoic.log(7)',
        href: 'https://log.cicatriz.dev/pt',
        description: 'ensaios sobre estoicismo aplicado a construir software',
      },
      {
        label: 'npx cicatriz',
        href: 'https://www.npmjs.com/package/cicatriz',
        description: 'este manual, no seu terminal',
      },
      {
        label: 'github(1)',
        href: 'https://github.com/cicatrizdev',
        description: 'código e experimentos',
      },
      {
        label: 'linkedin(1)',
        href: 'https://www.linkedin.com/in/pedro-c-mello',
        description: 'histórico profissional',
      },
    ],
  },
  notFound: {
    title: 'Não há entrada de manual para',
    body: 'Parece um link quebrado ou um caminho digitado errado.',
    back: 'Veja cicatriz(1)',
    flavor: 'Alvo inválido.',
  },
} satisfies UiStrings
