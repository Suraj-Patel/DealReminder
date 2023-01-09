import { ListGroup, ListGroupItem } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import AccordionItem from "react-bootstrap/esm/AccordionItem"
import { Deal } from "./DataTypes"

type DealInfoProps = {
    deal : Deal
}

export const DealInfo = (props: DealInfoProps) => {

    return (
        <div>
            <AccordionItem eventKey={props.deal.id.toString()}>
                <AccordionHeader>{props.deal.dealCompany}</AccordionHeader>
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