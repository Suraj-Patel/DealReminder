import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container, Card } from 'react-bootstrap';
import { Heading } from './components/Heading';
import { CurrentDeals } from './components/CurrentDeals';
import { SampleDeals } from './data/SampleDeals';
import { AddDeal } from './components/AddDeal';

function App() {

  const[currentDeals, setCurrentDeals] = useState(SampleDeals.Deals);

  return (
    <Container fluid>
      <Heading styles={{textAlign: 'center'}}>Deal Reminder</Heading>
      <Tabs defaultActiveKey="deals" className="mb-3">
        <Tab eventKey="deals" title="Deals">
          <CurrentDeals currentDeals={currentDeals}></CurrentDeals>        
        </Tab>
        <Tab eventKey="addDeal" title="Add New Deal">
          <AddDeal currentDeals={currentDeals}></AddDeal>      
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
