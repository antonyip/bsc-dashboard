import axios from "axios";
import { useEffect, useState } from "react";
import TimeBarChartV2 from "./TimeBarChartV2";
import MultiAxisLineBarChartV2 from "./MultiAxisLineBarChartV2";


export default function GenerateChart({
  chartQuery,
  chartType,
  chartTitle,
  chartYAxisLabel,
  chartBackgroundColors,
  chartFlipYData,
}) {
  const [queryResult, setQueryResult] = useState();

  useEffect(() => {
    axios
      .post("https://flipside-api.antonyip.com/getCachedQuery", {
        query: chartQuery,
      })
      .then((res) => {
        setQueryResult(res.data);
      });
  }, []);

  const chartDetails = {
    chartDataLoad: queryResult,
    chartYAxisLabel: chartYAxisLabel,
    chartTitle: chartTitle,
    chartBackgroundColors: chartBackgroundColors,
    chartQuery: chartQuery,
    chartFlipYData: chartFlipYData
  }

  if (chartType === 'TimeBarChart'){
    return TimeBarChartV2(chartDetails);
  }
  if (chartType === 'MultiAxisLineBarChart'){
    return MultiAxisLineBarChartV2(chartDetails);
  }


  return <>Invalid Chart Type Given</>
}
