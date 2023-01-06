import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import AccordionItem from "react-bootstrap/esm/AccordionItem"

type DealInfoProps = {
    id: number,
    dealCompany: string,
    dealCard?: string,
    dealDesc?: string,
    dealCouponCode?: string,
    redeemWebsite?: string
}

export const DealInfo = (props: DealInfoProps) => {
    const {
        dealCard = "",
        dealDesc = "",
        dealCouponCode = "",
        redeemWebsite = ""
    } = props

    return (
        <div>
            <AccordionItem eventKey={props.id.toString()}>
                <AccordionHeader>{props.dealCompany}</AccordionHeader>
                <AccordionBody>
                    <ListGroup>
                        <ListGroupItem>Card: {props.dealCard}</ListGroupItem>
                        <ListGroupItem>Deal Type: {props.dealDesc}</ListGroupItem>
                        <ListGroupItem>Coupon Code: {props.dealCard}</ListGroupItem>
                        <ListGroupItem>Redeem Website: {props.redeemWebsite}</ListGroupItem>
                    </ListGroup>
                </AccordionBody>
            </AccordionItem>
        </div>
    );
}