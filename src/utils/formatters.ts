export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

// Keep formatINR as an alias to formatUSD for seamless compatibility
export const formatINR = formatUSD;

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
