import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

import Select from "react-select";

import { formattedGraphDataInterface } from "../../../types/graphTypes";

import Container from "@/GenericComponents/Container/Container";
import HeaderRow from "@/GenericComponents/HeaderRow/HeaderRow";

interface GraphViewProps {
  graphData: formattedGraphDataInterface | unknown;
  handleChangeGranularity: (option: { label: string; value: string }) => void;
  granularityOptions: { label: string; value: string }[];
  granularity: string;
}

const GraphView = ({
  graphData,
  handleChangeGranularity,
  granularityOptions,
  granularity,
}: GraphViewProps) => {
  const data = graphData as formattedGraphDataInterface | any;

  return (
    <Container
      column
      classes="min-h-[300px] h-[300px] md:h-[450px]  2xl:h-[600px] items-center mx-auto"
    >
      <HeaderRow>GraphView</HeaderRow>
      <ResponsiveContainer className={"mt-[10%]"} width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="dates" />
          <YAxis />

          <Legend />
          <Bar dataKey="avgTransferValue" fill="#8884d8" />
          <Bar
            dataKey={
              granularity === "month" || granularity === "week"
                ? "avgTransfersCount"
                : "transfersCount"
            }
            fill="#82ca9d"
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="w-full md:w-1/2 mx-auto mt-4">
        <Select
          value={granularityOptions.find(
            (option) => option.value === granularity
          )}
          onChange={handleChangeGranularity}
          options={granularityOptions}
        />
      </div>
    </Container>
  );
};

export default GraphView;
