import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { getContributionDays, getFillColorClass } from "../../utils";

export function ContributionTableRow({
  dayOfWeek,
  contributionDaysInterval,
  contributionData
}) {
  return (
    <tr>
      <td className="contribution-graph">
        {dayOfWeek !== "Вт" &&
        dayOfWeek !== "Чт" &&
        dayOfWeek !== "Сб" &&
        dayOfWeek !== "Вс"
          ? dayOfWeek
          : ""}
      </td>
      {getContributionDays(dayOfWeek, contributionDaysInterval).map((item) => {
        return (
          <td
            className={`contribution-day ${getFillColorClass(
              contributionData[item]
            )}`}
            key={item}
            data-tooltip-id="contribution-info-tooltip"
            data-tooltip-content={`${
              contributionData[item] ? contributionData[item] : "No"
            } contributions \n ${format(parseISO(item), "EE, MMMM d, y", {
              locale: ru
            })}`}
            data-tooltip-place="top"
          ></td>
        );
      })}
    </tr>
  );
}
