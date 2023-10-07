import { useEffect, useState } from "react";
import { dayOfWeek } from "../../const";
import { api } from "../../services/services";
import { ContributionTableRow } from "../contribution-table-row/contribution-table-row";

export function ContributionTableRows({ contributionDaysInterval }) {
  const [contributionData, setContributionData] = useState();

  const getContributionData = async () => {
    const { data } = await api.get();
    return data;
  };

  useEffect(() => {
    getContributionData().then((result) => {
      setContributionData(result);
    });
  }, []);
  if (contributionData) {
    return (
      <>
        {dayOfWeek.map((weekDay) => {
          return (
            <ContributionTableRow
              dayOfWeek={weekDay}
              contributionData={contributionData}
              contributionDaysInterval={contributionDaysInterval}
              key={weekDay}
            />
          );
        })}
      </>
    );
  }
  return null;
}
