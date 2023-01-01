import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import EmptyChart from "./EmptyChart";

import SQLButton from "./SQLButton";
import JSONButton from "./JSONButton";
import { Container, Row, Col, Spinner } from "reactstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const template = (
  finalChart,
  chartTitle,
  chartQuery,
  chartJsonData,
  needSpinner
) => {
  return (
    <Container className="bg-amber-100 rounded-4 p-4">
      <Row>
        <Col xs="4">{needSpinner ? <Spinner /> : <></>}</Col>
        <Col>{chartTitle}</Col>
        <Col xs="4">
          <SQLButton sqlQuery={chartQuery}></SQLButton>
          <JSONButton
            jsonData={chartJsonData || { error: "Chart Not Loaded Yet..." }}
          ></JSONButton>
        </Col>
      </Row>
      <Row>{finalChart}</Row>
    </Container>
  );
};

export default function TimeBarChartV2({
  chartDataLoad,
  chartTitle,
  chartYAxisLabel,
  chartBackgroundColors,
  chartQuery,
}) {
  if (!chartDataLoad) {
    return template(<EmptyChart />, chartTitle, chartQuery, null, true);
  }

  const yAxisLabel = chartYAxisLabel || [""];

  const dataV2 = {
    datasets: [
      {
        label: yAxisLabel[0],
        data: chartDataLoad.records,
        backgroundColor: chartBackgroundColors[0],
      },
    ],
  };

  const optionsV2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: yAxisLabel[0] ? true : false,
      },
      title: {
        display: false,
        text: chartTitle,
      },
    },
    parsing: {
      xAxisKey: chartDataLoad.columns[0].toString().toLowerCase(),
      yAxisKey: chartDataLoad.columns[1].toString().toLowerCase(),
    },
  };

  return template(
    <Bar options={optionsV2} data={dataV2} />,
    chartTitle,
    chartQuery,
    chartDataLoad,
    false
  );
}
