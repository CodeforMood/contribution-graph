import { eachDayOfInterval, getMonth, parseISO } from "date-fns";
import { ContributionTableRows } from "./components/contribution-table-rows/contribution-table-rows";
import "./styles.css";
import {
  getContributionDays,
  getFirstDay,
  getLastDay,
  getMonths
} from "./utils";
import { Tooltip } from "react-tooltip";
import { dayOfWeek } from "./const";
import { ContributionTableInfoRow } from "./components/contribution-table-info-row/contribution-table-info-row";

export default function App() {
  const currentDate = new Date();
  const lastDate = getLastDay(currentDate);
  const firstDate = getFirstDay(currentDate);
  const contributionDaysInterval = eachDayOfInterval({
    start: firstDate,
    end: lastDate
  });
  const mondays = getContributionDays(dayOfWeek[0], contributionDaysInterval);
  const monthsNumbers = new Set([
    ...mondays.map((date) => getMonth(parseISO(date)))
  ]);
  const months = getMonths(Array.from(monthsNumbers));

  return (
    <div className="App">
      <div className="contribution-graph">
        <Tooltip
          id="contribution-info-tooltip"
          offset="6"
          className="tooltip"
        />
        <table>
          <thead>
            <tr>
              <td></td>
              {months.map((month, index) => {
                const colSpanNum = mondays.reduce((acc, monday) => {
                  if (getMonths(getMonth(parseISO(monday))).includes(month)) {
                    return ++acc;
                  }

                  return acc;
                }, 0);

                return (
                  <td colSpan={colSpanNum} key={index} align="center">
                    {month}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <ContributionTableRows
              contributionDaysInterval={contributionDaysInterval}
            />
          </tbody>
        </table>
      </div>
      <div className="contribution-info-graph">
        <Tooltip
          id="contribution-info-tooltip"
          offset="6"
          className="tooltip"
        />
        <table>
          <tbody>
            <ContributionTableInfoRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}
