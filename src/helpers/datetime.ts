import dayjs from 'dayjs';
import humanizeDuration from 'humanize-duration';

/**
 * Returns the Dayjs object based on the date sent by parameter.
 */
export function getDate(date?: Date | number | string, format?: string) {
  return dayjs(date ? new Date(date) : undefined, format);
}

/**
 * Calculates the difference between `from` and `to` experience position dates.
 *
 * Taking into consideration that dates without day will be invalid in Safari
 * as well as in iOS devices, we must tweak this helper function to assume it's
 * the first day of the month when parsing.
 */
export function getExperiencePositionDifference(
  from: string,
  to: 'Present' | string,
) {
  const appendDay = (date: string) => `1 ${date}`;
  const unit = 'month';

  const start = getDate(appendDay(from)).startOf(unit);
  const end = getDate(to !== 'Present' ? appendDay(to) : undefined).endOf(unit);

  return start.diff(end);
}

/**
 * Humanizes the experience position duration from milliseconds to readable string.
 *
 * @example 16 months -> 1 year 4 months.
 */
export function humanizeExperiencePositionDuration(diff: number) {
  return humanizeDuration(diff, { units: ['y', 'mo'], round: true });
}
