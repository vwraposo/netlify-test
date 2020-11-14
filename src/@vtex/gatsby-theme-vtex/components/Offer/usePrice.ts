const regex = /Boleto (?<percentage>[0-9]*)%/

interface CommercialOffer {
  price: number
  listPrice: number
  teasers: Array<{ name?: string }>
}

export const usePrice = ({ teasers, price: fullPrice }: CommercialOffer) => {
  const boleto = teasers[0]?.name ?? ''
  const maybeDiscount = boleto.match(regex)?.groups?.percentage
  const discount = Number(maybeDiscount ?? '0')

  return {
    discount,
    price: (fullPrice * (100 - discount)) / 100,
  }
}
