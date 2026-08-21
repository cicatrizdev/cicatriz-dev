import type { UiStrings } from '@/content/types'

export const pt = {
  meta: {
    title: 'cicatriz(1) — Pedro Mello',
    description:
      'Página de manual de Pedro "Cicatriz" Mello: engenheiro de software no Brasil, construindo produtos web e mobile com React e React Native, consultoria para times e mentoria de devs.',
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
  },
  sections: {
    name: 'Nome',
    synopsis: 'Sinopse',
    description: 'Descrição',
    options: 'Opções',
    examples: 'Exemplos',
    history: 'Histórico',
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
      'Pedro Mello (vulgo Cicatriz) é um engenheiro de software autodidata baseado no Brasil. Constrói aplicações web e mobile agradáveis de usar e sãs de manter — e faz isso há tempo suficiente pra preferir soluções chatas que chegam em produção.',
      'A stack é majoritariamente TypeScript: React e React Native primeiro, Node.js e Next.js em volta, com Flutter e UI design ao alcance quando o projeto pede.',
      'Está sempre aprendendo algo novo e gosta ainda mais de compartilhar. Ajudar devs nos primeiros passos — e nos seguintes — é a parte do trabalho que faria de graça.',
    ],
    skillsLead: 'Stack',
  },
  options: {
    lead: 'Os serviços a seguir estão disponíveis. Qualquer um pode ser solicitado em BUGS, abaixo.',
  },
  examples: {
    lead: 'Trabalhos selecionados. A saída pode variar.',
    visit: 'abrir',
    source: 'código',
  },
  history: {
    lead: 'Do mais recente ao mais antigo.',
    present: 'atual',
    empty: 'O histórico ainda está sendo escrito.',
  },
  bugs: {
    lead: 'Reporte bugs, ideias de projeto e pedidos de mentoria pelo formulário abaixo, ou escreva para',
    form: {
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
        label: 'github(1)',
        href: 'https://github.com/cicatrizdev',
        description: 'código e experimentos',
      },
      {
        label: 'linkedin(1)',
        href: 'https://www.linkedin.com/in/pedro-c-mello',
        description: 'histórico profissional',
      },
      {
        label: 'blog(7)',
        href: 'https://pedro-mello.netlify.com',
        description: 'artigos, em português',
      },
    ],
  },
  notFound: {
    title: 'Não há entrada de manual para',
    body: 'Parece um link quebrado ou um caminho digitado errado.',
    back: 'Veja cicatriz(1)',
  },
} satisfies UiStrings
