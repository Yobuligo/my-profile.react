export class DateTime {
  static compare(left: Date, right: Date): number {
    if (left > right) {
      return 1;
    }

    if (left < right) {
      return -1;
    }

    return 0;
  }

  static toDate(date: Date): string {
    const [dateString] = date.toString().split("T");
    return dateString;
  }

  static toTime(date: Date): string {
    const [, timeString] = date.toString().split("T");
    return timeString;
  }
}
