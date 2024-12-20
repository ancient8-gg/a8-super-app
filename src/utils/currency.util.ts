import BigNumber from 'bignumber.js'

export const formatCurrency = (
  amount?: number,
  includeSymbol: boolean = false,
  symbolPosition: 'before' | 'after' = 'before',
  symbol: string = '$',
): string => {
  if (amount === undefined || amount === null || amount === 0) {
    return '--'
  }

  const formattedAmount = amount.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  })

  if (!includeSymbol) {
    return formattedAmount
  }

  return symbolPosition === 'before'
    ? `${symbol} ${formattedAmount}`
    : `${formattedAmount} ${symbol}`
}

export const formatPrice = (value: number, decimals: number): number => {
  return BigNumber(value).div(BigNumber(10).pow(decimals)).toNumber()
}
