function padToTwoDigits(num: number): string {
  return num.toString().padStart(2, '0');
}

export function formatDate(date: Date, format: string): string {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const year = date.getFullYear();
  const month = padToTwoDigits(date.getMonth() + 1); // Months are 0-based
  const day = padToTwoDigits(date.getDate());
  const hours = padToTwoDigits(date.getHours());
  const minutes = padToTwoDigits(date.getMinutes());
  const seconds = padToTwoDigits(date.getSeconds());
  const milliseconds = padToTwoDigits(date.getMilliseconds());

  const replacements: { [key: string]: string } = {
    yyyy: year.toString(),
    yy: year.toString().substring(2),
    MM: month,
    MMM: months[date.getMonth()],
    dd: day,
    HH: hours,
    mm: minutes,
    ss: seconds,
    SSS: milliseconds,
  };

  return format.replace(
    /yyyy|yy|MMM|MM|dd|HH|mm|ss|SSS/g,
    (match) => replacements[match]
  );
}

export const getWorkingTimeRangeForDate = (tradingDate: Date) => {
  const workingHours: Date[] = [];

  const dtStartDateTime = new Date(tradingDate);
  dtStartDateTime.setHours(9);
  dtStartDateTime.setMinutes(16);

  const dtEndDateTime = new Date(tradingDate);
  dtEndDateTime.setHours(15);
  dtEndDateTime.setMinutes(30);

  let dtInitialDateTime = dtStartDateTime;

  while (dtInitialDateTime <= dtEndDateTime) {
    workingHours.push(new Date(dtInitialDateTime));
    dtInitialDateTime.setMinutes(dtInitialDateTime.getMinutes() + 1);
  }

  return workingHours;
};

export function findNearestValue(arr: number[], target: number): number {
  if (arr.length === 0) {
    throw new Error('Array must not be empty');
  }

  let closestValue = arr[0];
  let smallestDiff = Math.abs(arr[0] - target);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;

    const currentDiff = Math.abs(arr[i] - target);

    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closestValue = arr[i];
    }
  }

  return closestValue;
  // return arr.reduce((prev, curr) => {
  //   return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  // });
}

export function findNearestIndex(arr: number[], target: number): number {
  if (arr.length === 0) {
    throw new Error('Array must not be empty');
  }

  let closestIndex = 0;
  let smallestDiff = Math.abs(arr[0] - target);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;

    const currentDiff = Math.abs(arr[i] - target);

    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closestIndex = i;
    }
  }

  return closestIndex;

  // return arr.reduce((nearestIndex, currValue, currIndex) => {
  //   return Math.abs(currValue - target) < Math.abs(arr[nearestIndex] - target)
  //     ? currIndex
  //     : nearestIndex;
  // }, 0);
}

export function areDatesEqual(date1: Date, date2: Date): boolean {
  if (date1 < date2 || date1 > date2) {
    return false;
  } else {
    return true;
  }
}

export const delayAsync = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
/**
 * Calculates the nearest strike price given the last price and strike price difference.
 * @param lastPrice - The last price of the asset.
 * @param strikePriceDiff - The difference between consecutive strike prices.
 * @returns The nearest strike price.
 */
export function getNearestStrikePrice(
  lastPrice: number,
  strikePriceDiff: number
): number {
  // Find the nearest lower strike price
  const lowerStrikePrice =
    Math.floor(lastPrice / strikePriceDiff) * strikePriceDiff;
  // Find the nearest higher strike price
  const higherStrikePrice = lowerStrikePrice + strikePriceDiff;

  // Determine which of the lower or higher strike prices is closer to the last price
  if (
    Math.abs(lastPrice - lowerStrikePrice) <=
    Math.abs(lastPrice - higherStrikePrice)
  ) {
    return lowerStrikePrice;
  } else {
    return higherStrikePrice;
  }
}

export function getTimeDiffInYear(date1: Date, date2: Date): number {
  // Calculate the difference in milliseconds
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // Approximation considering leap years
  const msDifference = date2.getTime() - date1.getTime();

  // Calculate the difference in years
  const yearDifference = msDifference / msPerYear;

  return yearDifference;
}

export function getYearFromDateString(dateString: string): string {
  const date = new Date(dateString);
  return date.getFullYear().toString();
}

export function getYearFromDate(date: Date): number {
  return date.getFullYear();
}

export function getYearRange(startDate: Date, endDate: Date): number[] {
  const startYear = getYearFromDate(startDate);
  const endYear = getYearFromDate(endDate);
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return years;
}

export function getYearMonthFromDateString(dateString: string) {
  const date = new Date(dateString);
  return getYearMonthFromDate(date);
}

export function getYearMonthFromDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, pad single digit months
  return `${year}-${month}`;
}

export function getYearMonthRange(startDate: Date, endDate: Date): string[] {
  // Initialize an array to store the year-month strings
  const yearMonthRange = [];

  // Create a date object to iterate from the start date
  let currentDate = new Date(startDate);

  // Loop until the current date is after the end date
  while (currentDate <= endDate) {
    // Format the current date as 'YYYY-MM'
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
    const yearMonth = `${year}-${month}`;

    // Add the formatted string to the array
    yearMonthRange.push(yearMonth);

    // Move to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  // Return the array of year-month strings
  return yearMonthRange;
}

export function formatTimeDifference(ms: number): string {
  const milliseconds = ms % 1000;
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  const hoursDisplay = hours > 0 ? hours + 'h ' : '';
  const minutesDisplay = minutes > 0 ? minutes + 'm ' : '';
  const secondsDisplay = seconds > 0 ? seconds + 's ' : '';
  const millisecondsDisplay = milliseconds > 0 ? milliseconds + 'ms' : '';

  return hoursDisplay + minutesDisplay + secondsDisplay + millisecondsDisplay;
}

export function parseOptionString(optionString: string) {
  // Regex to match the required parts
  const regex = /^([A-Z]+)(\d{2})([A-Z]{3})(\d{2})([CP])(\d+)$/;
  const match = optionString.match(regex);

  if (!match) {
    throw new Error('Invalid option string format');
  }

  const [_, underlying, day, monthStr, year, tradeType, strikePrice] = match;

  // Convert month abbreviation to month number
  const monthMap: { [key: string]: string } = {
    JAN: '01',
    FEB: '02',
    MAR: '03',
    APR: '04',
    MAY: '05',
    JUN: '06',
    JUL: '07',
    AUG: '08',
    SEP: '09',
    OCT: '10',
    NOV: '11',
    DEC: '12',
  };

  const month = monthMap[monthStr];

  if (!month) {
    throw new Error('Invalid month abbreviation in option string');
  }

  // Construct expiry date in YYYY-MM-DD format
  const expiry = `20${year}-${month}-${day}`;

  return {
    underlying,
    expiry,
    tradeType: tradeType === 'C' ? 'Call' : 'Put',
    strikePrice: parseFloat(strikePrice).toFixed(2),
  };
}

export function getUniqueValues<T>(arr: T[]): T[] {
  // Create a Set from the array to automatically remove duplicates
  const uniqueSet = new Set(arr);

  // Convert the Set back to an array
  return Array.from(uniqueSet);
}
export function isYearMonthFormat(str: string): boolean {
  // Regular expression to match 'YYYY-MM' format
  const yearMonthRegex = /^\d{4}-(0[1-9]|1[0-2])$/;

  // Test the string against the regular expression
  return yearMonthRegex.test(str);
}

export function parseCookie(cookieString: string) {
  const cookie: Record<string, string> = {};
  const pairs = cookieString.split('; ');

  const pair = pairs[0].split('=');
  cookie[pair[0]] = decodeURIComponent(pair[1]);

  return cookie;
}

export function configureLoginCookies(cookieRecord: Record<string, string>) {
  const cookies = [];
  for (var key in cookieRecord) {
    if (cookieRecord[key]) {
      cookies.push(key + '=' + cookieRecord[key]);
    }
  }

  return cookies;
}

// function to convert camalelCase to snake_case
export function toSnakeCase(str: string): string {
  // return str
  //   .replace(/([A-Z])/g, '$1')
  //   .replace(/_/g, '-')
  //   .toLowerCase();
  str = str[0].toLowerCase() + str.slice(1);
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
