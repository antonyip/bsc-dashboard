import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardLink,
  CardText,
} from "reactstrap";
export default function AboutPage() {
  return (
    <Card
      style={{
        width: "24rem",
      }}
    >
      <CardBody>
        <CardTitle className="h1">About Me!</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h2">
          Hi! I'm Anton. Just a programmer looking for fun things to do!
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText className="p-2">You can find the sources of this project at... </CardText>
        <CardText className="p-2">
          <CardLink className="text-blue-600 rounded border-black border-2 p-2" href="https://github.com/antonyip/bsc-dashboard">
            Link to Github
          </CardLink>
        </CardText>
        <br></br>
        <CardText className="p-2">
          Visit the organizations that motivated me to build this site!{" "}
        </CardText>
        <CardText className="p-2">
          <CardLink className="text-blue-600 rounded border-black border-2 p-2" href="https://flipsidecrypto.xyz">FlipsideCrypto</CardLink>{" "}
        </CardText>
        <CardText className="p-2">
          <CardLink className="text-blue-600 rounded border-black border-2 p-2" href="https://metricsdao.xyz">MetricsDAO</CardLink>
        </CardText>
        <br></br>
        <CardLink className="text-blue-600 rounded border-black border-2 p-2" href="http://www.antonyip.com">www.antonyip.com</CardLink>
        <CardLink className="text-blue-600 rounded border-black border-2 p-2" href="https://twitter.com/msgAnton">@msgAnton</CardLink>
      </CardBody>
    </Card>
  );
}
