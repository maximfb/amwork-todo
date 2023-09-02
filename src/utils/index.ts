import { faker } from '@faker-js/faker'

export function normalizeFormatDate(date: Date): string {
  const shortMouths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  return `${shortMouths[date.getMonth()]}, ${time}`
}

export function getDate(from: string, to: string): Date {
  return faker.date.between({
    from,
    to,
  })
}
