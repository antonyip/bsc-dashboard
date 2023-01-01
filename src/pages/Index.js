import { myQuery as GetBlocksWeeklyQuery } from "../api/GetBlocksWeeklyQuery";
import { myQuery as GetTransactionsWeeklyQuery } from "../api/GetTransactionsWeeklyQuery";
import { myQuery as GetWeeklyActiveSenderQuery } from "../api/GetWeeklyActiveSenderQuery";
import { myQuery as GetWeeklyNewSenderQuery } from "../api/GetWeeklyNewSenderQuery";
import { Row, Col, Container } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Index() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Col className='h1 text-white'>Binance Smart Chain</Col>
      </Row>
      <Row className="pb-2">
        <Col className='rounded' xs={12} md={6}>
          <GenerateChart
            chartQuery={GetBlocksWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Blocks Per Week"
            //chartYAxisLabel={["Blocks Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col className='rounded' xs={12} md={6}>
          <GenerateChart
            chartQuery={GetTransactionsWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Transactions Per Week"
            //chartYAxisLabel={["Transactions Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col className='rounded' xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyActiveSenderQuery}
            chartType="TimeBarChart"
            chartTitle="Active Senders Per Week"
            //chartYAxisLabel={["Active Senders Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col className='rounded' xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyNewSenderQuery}
            chartType="TimeBarChart"
            chartTitle="New Wallets Per Week"
            //chartYAxisLabel={["New Wallets Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
