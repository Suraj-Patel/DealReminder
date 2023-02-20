import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container, Card, Row } from 'react-bootstrap';
import { Heading } from './components/Heading';
import { CurrentDeals } from './components/CurrentDeals';
import { AddDeal } from './components/AddDeal';
import { getCurrentDealsFromChromeStorage } from './scripts/ChromeApiWrapper';
import { About } from './components/About';

function App() {
  const[currentDeals, setCurrentDeals] = useState(Array());

  useEffect(() => {
    const populateUserDeals = async () => {
      console.log("Initial loading of deals from storage.")
      setCurrentDeals(await getCurrentDealsFromChromeStorage());
    }
    
    populateUserDeals();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Heading styles={{textAlign: 'center'}}>Deal Reminder</Heading>
      </Row>
      <Row className='mb-2'>
        <Tabs defaultActiveKey="deals" className="mb-3" unmountOnExit={ true }>
          <Tab eventKey="deals" title="Deals">
            <CurrentDeals currentDeals = {currentDeals} setCurrentDeals={setCurrentDeals}></CurrentDeals>        
          </Tab>
          <Tab eventKey="addDeal" title="Add New Deal">
            <AddDeal setCurrentDeals={setCurrentDeals}></AddDeal>      
          </Tab>
          <Tab eventKey="about" title="About Us">
            <About></About>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
