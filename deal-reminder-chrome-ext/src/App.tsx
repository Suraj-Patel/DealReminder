import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container, Card } from 'react-bootstrap';
import { Heading } from './components/Heading';

function App() {
  return (
    <Container fluid>
      <Heading>Deal Reminder</Heading>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="deals" title="Deals">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="addDeal" title="Add New Deal">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>          
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
