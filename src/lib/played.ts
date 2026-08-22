import { experience } from '@/content/experience'

/** Whole years and months between an ISO `YYYY-MM` and a date. */
export function monthsBetween(
  startIsoMonth: string,
  until: Date
): { years: number; months: number } {
  const [y, m] = startIsoMonth.split('-').map(Number)
  const total =
    (until.getUTCFullYear() - y) * 12 + (until.getUTCMonth() + 1 - m)
  return { years: Math.floor(total / 12), months: total % 12 }
}

/** Earliest start across the whole history: the character's creation date. */
export function careerStart(): string {
  return experience.map((job) => job.start).sort()[0]
}

/** Start of the current "level": the earliest still-ongoing role. */
export function currentLevelStart(): string | null {
  const ongoing = experience
    .filter((job) => job.end === null)
    .map((job) => job.start)
  return ongoing.length ? ongoing.sort()[0] : null
}
