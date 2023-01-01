import { myQuery as GetBlocksWeeklyQuery } from "../api/GetBlocksWeeklyQuery";
import { myQuery as GetTransactionsWeeklyQuery } from "../api/GetTransactionsWeeklyQuery";
import { myQuery as GetWeeklyActiveSenderQuery } from "../api/GetWeeklyActiveSenderQuery";
import { myQuery as GetWeeklyNewSenderQuery } from "../api/GetWeeklyNewSenderQuery";
import { Row, Col, Container } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Fees() {
  return (
    <Container>
      <Row className="pb-2">
        <Col className='h1 text-white'>Fees</Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetBlocksWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Blocks Per Week"
            //chartYAxisLabel=[""]
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetTransactionsWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Transactions Per Week"
            //chartYAxisLabel=[""]
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
