import { isInt } from "./isNumberInt";
import moment from "moment";

export const formatGraphData = (data: any) => {
  // "date","transfers_count","avg_transfer_value"
  const dates = data.filter((item: any) => {
    return typeof item === "string";
  });

  const numbers = data.filter((item: any) => {
    return typeof item === "number";
  });

  const transfersCount = numbers.filter((item: any) => {
    return isInt(item);
  });

  const avgTransferValue = numbers.filter((item: any) => {
    return !isInt(item);
  });

  const formattedData = dates.map((date: string, index: number) => {
    return {
      date: moment(date).format("YYYY-MM-DD"),
      transfersCount: transfersCount[index],
      avgTransferValue: avgTransferValue[index],
    };
  });

  formattedData.sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return formattedData;
};
