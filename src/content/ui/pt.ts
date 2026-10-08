import type { UiStrings } from '@/content/types'

export const pt = {
  meta: {
    title: 'cicatriz(1) — Pedro Mello',
    description:
      'Pedro Mello (Cicatriz) — engenheiro de software no Brasil. Desenvolvimento web e mobile, consultoria para times e mentoria de devs.',
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
    uptime: {
      total: 'há',
      current: 'neste trabalho',
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
  page: {
    sections: {
      name: 'Nome',
      synopsis: 'Sinopse',
      description: 'Sobre',
      options: 'Serviços',
      examples: 'Trabalho',
      history: 'Trajetória',
      standards: 'Formação',
      bugs: 'Contato',
      seeAlso: 'Veja também',
    },
    optionsLead:
      'Três formas de trabalhar juntos. O prompt abaixo de cada uma já abre o formulário no assunto certo.',
    historyLead: 'X-Team, Alura, Riachuelo — do mais recente ao mais antigo.',
  },
  name: {
    summary:
      'Pedro Mello, engenheiro de software. Produtos, consultoria e mentoria.',
    pitch:
      'Da primeira tela ao ar — web, mobile e back-end. Trabalho com empresas e times de produto, sozinho ou junto da engenharia que você já tem.',
    proof: 'X-Team · Alura · Riachuelo',
    avatarAlt: 'Retrato de Pedro Mello',
  },
  synopsis: {
    note: 'As opções podem ser combinadas. Sem opções, continua a leitura.',
  },
  description: {
    paragraphs: [
      'Pedro Mello (vulgo Cicatriz) é um engenheiro de software autodidata baseado no Brasil. Atua em toda a stack — front-ends de produto, apps mobile, APIs e o ferramental que segura tudo junto — e já entregou o bastante de cada um pra preferir soluções chatas que chegam em produção.',
      'A especialidade é TypeScript de ponta a ponta: React e Next.js na web, React Native no mobile, Node.js por trás. Em volta desse núcleo, vai aonde o problema estiver.',
      'Está sempre aprendendo, e gosta ainda mais de ensinar. Fora do expediente, costuma estar em algum lugar de Azeroth.',
    ],
    skillsLead: 'Stack',
    fontLegend: 'Tipos:',
    font: {
      bold: 'especialidade',
      underline: 'uso diário',
      roman: 'confortável',
      dim: 'familiar',
    },
  },
  options: {
    lead: 'Cada opção é um serviço. Para invocar qualquer uma, veja BUGS.',
  },
  examples: {
    lead: 'O que dá pra mostrar. Cliente sob NDA entra pelo nome da empresa — o histórico completo está em',
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
    lead: 'Projeto, consultoria, mentoria, ou um oi. Formulário abaixo, ou escreva para',
    form: {
      topic: 'Assunto',
      topicOther: 'outra coisa',
      name: 'Seu nome',
      namePlaceholder: 'Edson Arantes',
      email: 'Seu e-mail',
      emailPlaceholder: 'edson@exemplo.com',
      message: 'Mensagem',
      messagePlaceholder:
        'Conta o que você precisa — um produto, uma consultoria, uma mentoria, ou um oi.',
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
  },
} satisfies UiStrings
