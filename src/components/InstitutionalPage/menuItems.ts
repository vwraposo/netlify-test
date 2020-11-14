export interface MenuItems {
  title: string
  href?: string
  target?: string
}

export interface InstitutionalMenu {
  [key: string]: MenuItems
}

export const institutionalMenuItems: InstitutionalMenu = {
  'quem-somos': { title: 'Quem Somos' },
  'politica-de-compra': { title: 'Política de Compra' },
  'seguranca-e-privacidade': { title: 'Segurança e Privacidade' },
  'trocas-e-devolucoes': { title: 'Trocas e Devoluções' },
  'assistencia-tecnica': {
    title: 'Assistência Técnica',
    href:
      'https://www.tramontina.com.br/atendimento-suporte/assistencia-tecnica',
    target: '_blank',
  },
  contato: { title: 'Fale Conosco' },
}
