import BigNumber from 'bignumber.js'

export const formatCurrency = (
  amount?: number,
  includeSymbol: boolean = false,
  symbol: string = '$',
): string => {
  if (amount === undefined || amount === null) {
    return '--'
  }
  return (
    (includeSymbol ? symbol : '') +
    amount.toLocaleString('en-US', { maximumFractionDigits: 2 })
  )
}

export const formatPrice = (value: number, decimals: number): number => {
  return BigNumber(value).div(BigNumber(10).pow(decimals)).toNumber()
}
