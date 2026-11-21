export function getCurrentMonthIndex(date = new Date()): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(date)
  const year = Number(parts.find((part) => part.type === 'year')!.value)
  const month = Number(parts.find((part) => part.type === 'month')!.value)
  return year * 12 + month - 1
}

export function getMonthIndex(month: string): number {
  const [year, value] = month.split('.').map(Number)
  return year * 12 + value - 1
}

// Match the existing career entries: count both the starting and ending month.
export function getDurationMonths(start: string, endMonth: number): number {
  return Math.max(0, endMonth - getMonthIndex(start) + 1)
}

export function formatDuration(months: number): string {
  const years = Math.floor(months / 12)
  const remainder = months % 12
  return [years ? `${years}년` : '', remainder || !years ? `${remainder}개월` : '']
    .filter(Boolean)
    .join(' ')
}
