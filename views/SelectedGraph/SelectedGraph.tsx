import { useEffect, useState } from "react";
import moment from "moment";
import _ from "lodash";

import { formattedGraphDataInterface } from "../../types/graphTypes";

import { singleGraphData } from "../../API/mockData";
import { formatGraphData } from "../../helpers/formatGraphData";
import { getMonthName } from "../../helpers/getMonthName";

import GraphView from "./components/GraphView";

const SelectedGraph = () => {
  const [formattedGraphData, setFormattedGraphData] = useState<
    unknown | formattedGraphDataInterface
  >([]);
  const [granularity, setGranularity] = useState<"day" | "week" | "month">(
    "day"
  );

  const granularityOptions = [
    { value: "day", label: "day" },
    { value: "week", label: "week" },
    { value: "month", label: "month" },
  ];

  useEffect(() => {
    handleFormatGraphData();
  }, []);

  useEffect(() => {
    switch (granularity) {
      case "day":
        handleFormatGraphData();
        return;
      case "week":
        handleGranulateWeek();
        break;
      case "month":
        handleGranulateMonth();
        break;
      default:
        break;
    }
  }, [granularity]);

  const handleFormatGraphData = () => {
    const formattedData = formatGraphData(singleGraphData);
    setFormattedGraphData(formattedData);
  };

  const handleGranulateMonth = () => {
    const data = formatGraphData(singleGraphData);

    const monthly = data.map((data: any) => {
      const { date, transfersCount, avgTransferValue } = data;

      const month = getMonthName(new Date(date).getMonth());

      return {
        dates: month,
        transfersCount,
        avgTransferValue,
      };
    });

    const groupedByMonth = Object.values(_.groupBy(monthly, "dates"));

    const avarage = groupedByMonth.map((month: any) => {
      let sumTransfers = 0;
      let sumAvgTransferValue = 0;

      month.forEach((singleMonth: any) => {
        sumTransfers += singleMonth.transfersCount;
        sumAvgTransferValue += singleMonth.avgTransferValue;
      });

      const { dates } = month[0];
      const avarageTransfersCount = sumTransfers / month.length;
      const avarageAvgTransferValue = sumAvgTransferValue / month.length;

      return {
        dates,
        avgTransfersCount: avarageTransfersCount,
        avgTransferValue: avarageAvgTransferValue,
      };
    });

    setFormattedGraphData(avarage);
  };

  const handleGranulateWeek = () => {
    const data = formatGraphData(singleGraphData);
    const weekly = data.map((data: any) => {
      const { date, transfersCount, avgTransferValue } = data;

      const week = moment(date).week();

      return {
        dates: week,
        transfersCount,
        avgTransferValue,
      };
    });

    const goupedByWeek = Object.values(_.groupBy(weekly, "dates"));

    const avarage = goupedByWeek.map((week: any) => {
      let sumTransfers = 0;
      let sumAvgTransferValue = 0;

      week.forEach((singleWeek: any) => {
        sumTransfers += singleWeek.transfersCount;
        sumAvgTransferValue += singleWeek.avgTransferValue;
      });

      const { dates } = week[0];
      const avarageTransfersCount = sumTransfers / week.length;
      const avarageAvgTransferValue = sumAvgTransferValue / week.length;

      return {
        dates,
        avgTransfersCount: avarageTransfersCount,
        avgTransferValue: avarageAvgTransferValue,
      };
    });

    setFormattedGraphData(avarage);
  };

  const handleChangeGranularity = (selectedOption: {
    value: string;
    label: string;
  }) => {
    setGranularity(selectedOption.value as "day" | "week" | "month");
  };

  return (
    <GraphView
      handleChangeGranularity={handleChangeGranularity}
      graphData={formattedGraphData}
      granularityOptions={granularityOptions}
      granularity={granularity}
    ></GraphView>
  );
};

export default SelectedGraph;
