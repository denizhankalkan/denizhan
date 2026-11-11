/** "10:51" for the given IANA time zone, or "--:--" if the browser does not know the zone. */
export function timeIn(timeZone: string, at: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone,
    }).format(at);
  } catch {
    return '--:--';
  }
}
