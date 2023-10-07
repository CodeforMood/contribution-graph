import {
  addDays,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
  subDays,
  subWeeks,
  lightFormat
} from "date-fns";
import { ContributionDayColorClasses, Months } from "./const";

export function getLastDay(date) {
  if (isMonday(date)) {
    return addDays(date, 6);
  } else if (isTuesday(date)) {
    return addDays(date, 5);
  } else if (isWednesday(date)) {
    return addDays(date, 4);
  } else if (isThursday(date)) {
    return addDays(date, 3);
  } else if (isFriday(date)) {
    return addDays(date, 2);
  } else if (isSaturday(date)) {
    return addDays(date, 1);
  } else if (isSunday(date)) {
    return date;
  }
}

export function getFirstDay(date) {
  if (isMonday(date)) {
    return subWeeks(date, 51);
  } else if (isTuesday(date)) {
    return subWeeks(subDays(date, 1), 50);
  } else if (isWednesday(date)) {
    return subWeeks(subDays(date, 2), 50);
  } else if (isThursday(date)) {
    return subWeeks(subDays(date, 3), 50);
  } else if (isFriday(date)) {
    return subWeeks(subDays(date, 4), 50);
  } else if (isSaturday(date)) {
    return subWeeks(subDays(date, 5), 50);
  } else if (isSunday(date)) {
    return subWeeks(subDays(date, 6), 50);
  }
}

export function getMonths(arr) {
  const months = [];
  if (!Array.isArray(arr)) {
    months.push(Months[arr]);
  } else {
    arr.forEach((num) => {
      months.push(Months[num]);
    });
  }
  return months;
}

export function getFillColorClass(contributionNum) {
  if (contributionNum <= 9) {
    return ContributionDayColorClasses.LowerThanNine;
  } else if (contributionNum > 9 && contributionNum <= 19) {
    return ContributionDayColorClasses.LowerThanNineteen;
  } else if (contributionNum > 19 && contributionNum <= 29) {
    return ContributionDayColorClasses.LowerThanTwentyNine;
  } else if (contributionNum > 29) {
    return ContributionDayColorClasses.GreaterThanThirty;
  } else {
    return "";
  }
}

export function getContributionDays(dayOfWeek, contributionDaysInterval) {
  switch (dayOfWeek) {
    case "Пн":
      return contributionDaysInterval
        .filter((date) => isMonday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    case "Вт":
      return contributionDaysInterval
        .filter((date) => isTuesday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    case "Ср":
      return contributionDaysInterval
        .filter((date) => isWednesday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    case "Чт":
      return contributionDaysInterval
        .filter((date) => isThursday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    case "Пт":
      return contributionDaysInterval
        .filter((date) => isFriday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    case "Сб":
      return contributionDaysInterval
        .filter((date) => isSaturday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    case "Вс":
      return contributionDaysInterval
        .filter((date) => isSunday(date))
        .map((item) => lightFormat(item, "yyyy-MM-dd"));
    default:
      return "";
  }
}
