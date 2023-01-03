import { myQuery as GetWeeklyNewSenderQuery } from "../api/GetWeeklyNewSenderQuery";
import { Row, Col, Container } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Users() {
  return (
    <Container>
      <Row className="pb-2">
        <Col className='h1 text-white'>User</Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyNewSenderQuery}
            chartType="MultiAxisLineBarChart"
            chartTitle="Senders Per Week"
            chartFlipYData={true}
            chartYAxisLabel={["Total Senders","New Senders Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK,CHARTCOLORS.COLOR1] }
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
