import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import humanizeDuration from 'humanize-duration';

// configure extensions
dayjs.extend(duration);
dayjs.extend(relativeTime);

/**
 * Returns the Dayjs object based on the date sent by parameter.
 */
export function getDate(date?: Date | number | string, format?: string) {
  return dayjs(date ? new Date(date) : undefined, format);
}

/**
 * Calculates the difference between `from` and `to` experience position dates.
 */
export function getExperiencePositionDifference(
  from: string,
  to: 'Present' | string,
) {
  const format = 'MMMM YYYY';
  const unit = 'month';

  const dateFrom = getDate(from, format).startOf(unit);
  const dateTo = getDate(to !== 'Present' ? to : undefined, format).endOf(unit);

  return dateFrom.diff(dateTo);
}

/**
 * Humanizes the experience position duration from milliseconds to readable string.
 *
 * @example 16 months -> 1 year 4 months.
 */
export function humanizeExperiencePositionDuration(diff: number) {
  return humanizeDuration(diff, { units: ['y', 'mo'], round: true });
}
