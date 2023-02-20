import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import AccordionItem from "react-bootstrap/esm/AccordionItem"
import { Deal } from "./DataTypes"
import { MdDelete } from 'react-icons/md'

type DealInfoProps = {
    deal : Deal,
    setDeleteId: Function
}

export const DealInfo = (props: DealInfoProps) => {

    const handleDelete = async (e : React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        props.setDeleteId(id);
    }

    return (
        <div>
            <AccordionItem eventKey={props.deal.id.toString()}>
                <Container fluid>
                    <Row lg={2} md={2} sm={2} xl={2} xs={2} xxl={2}>
                        <Col lg={10} md={10} sm={10} xl={10} xs={10} xxl={10}>
                            <AccordionHeader className="d-flex">{props.deal.dealCompany}</AccordionHeader>
                        </Col>
                        <Col className="d-flex justify-content-center" lg={2} md={2} sm={2} xl={2} xs={2} xxl={2}>
                                <Button onClick={event => handleDelete(event, props.deal.id)}>
                                    <MdDelete />
                                </Button>
                        </Col>
                    </Row>
                </Container>
                <AccordionBody>
                    <ListGroup>
                        <ListGroupItem>Card: {props.deal.dealCard}</ListGroupItem>
                        <ListGroupItem>Deal Type: {props.deal.dealDesc}</ListGroupItem>
                        <ListGroupItem>Coupon Code: {props.deal.dealCouponCode}</ListGroupItem>
                        <ListGroupItem>Redeem Website: {props.deal.redeemWebsite}</ListGroupItem>
                    </ListGroup>
                </AccordionBody>
            </AccordionItem>
        </div>
    );
}