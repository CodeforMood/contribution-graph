import { format, parseISO } from "date-fns";
import { getContributionDays, getFillColorClass } from "../../utils";

export function ContributionTableInfoRow({
  dayOfWeek,
  contributionDaysInterval,
  contributionData
}) {
  return (
    <tr>
      <td className="contribution-graph info">{"Меньше"}</td>

      <td
        className={`contribution-day`}
        data-tooltip-id="contribution-info-tooltip"
        data-tooltip-content="No contributions"
        data-tooltip-place="top"
      ></td>
      <td
        className={`contribution-day lth_nine`}
        data-tooltip-id="contribution-info-tooltip"
        data-tooltip-content="1-9 contributions"
        data-tooltip-place="top"
      ></td>
      <td
        className={`contribution-day lth_nineteen`}
        data-tooltip-id="contribution-info-tooltip"
        data-tooltip-content="10-19 contributions"
        data-tooltip-place="top"
      ></td>
      <td
        className={`contribution-day lth_twenty_nine`}
        data-tooltip-id="contribution-info-tooltip"
        data-tooltip-content="20-29 contributions"
        data-tooltip-place="top"
      ></td>
      <td
        className={`contribution-day gth_thirty`}
        data-tooltip-id="contribution-info-tooltip"
        data-tooltip-content="30+ contributions"
        data-tooltip-place="top"
      ></td>

      <td className="contribution-graph info">{"Больше"}</td>
    </tr>
  );
}
