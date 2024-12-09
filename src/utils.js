/**
 * Formats a date string from the format yyyy-mm to "MMM yyyy".
 *
 * @param {string} dateString - A date string in the format yyyy-mm
 * @returns The date, formatted to 'MMM yyyy'
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
