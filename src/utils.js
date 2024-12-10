/**
 * Formats a date string from the format yyyy-mm to "MMM yyyy".
 *
 * @param {string} dateString - A date string in the format yyyy-mm
 * @returns The date, formatted to 'MMM yyyy'
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth()) {
    return 'Present';
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
