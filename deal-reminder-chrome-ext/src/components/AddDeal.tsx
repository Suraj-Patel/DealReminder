import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Deal } from "./DataTypes";

type AddDealProps = {
    currentDeals : Deal[]
}

export const AddDeal = (props : AddDealProps) => {

    const[newDealCompany, setNewDealCompany] = useState('');
    const[newDealCard, setNewDealCard] = useState('');
    const[newDealType, setNewDealType] = useState('');
    const[newDealCouponCode, setNewDealCouponCode] = useState('');
    const[newDealRedeemWebsite, setNewDealRedeemWebsite] = useState('');

    const handleAdd = (e : React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        const newDeal: Deal = {
            id: id,
            dealCompany: newDealCompany,
            dealCard: newDealCard,
            dealDesc: newDealType,
            dealCouponCode: newDealCouponCode,
            redeemWebsite: newDealRedeemWebsite
        };

        console.log(JSON.stringify(newDeal));
    }

    return (
        <div className="mb-2">
            <Form className="container">
                <Form.Group className="mb-2">
                    <Form.Control placeholder="Company for which the deal is offered" onChange={e => setNewDealCompany(e.target.value)}></Form.Control>
                    <Form.Control placeholder="Credit/Debit Card name (if applicable)" onChange={e => setNewDealCard(e.target.value)}></Form.Control>
                    <Form.Control placeholder="Deal type (cashback/points/discount/other)" onChange={e => setNewDealType(e.target.value)}></Form.Control>
                    <Form.Control placeholder="Coupon code (if applicable)" onChange={e => setNewDealCouponCode(e.target.value)}></Form.Control>
                    <Form.Control type="url" placeholder="Website to Redeem the offer" onChange={e => setNewDealRedeemWebsite(e.target.value)}></Form.Control>
                </Form.Group>
                <Container>
                    <Row>
                        <Button size="lg" onClick={event => handleAdd(event, props.currentDeals.length+1)}>Add New Deal</Button>
                    </Row>
                </Container>                    
            </Form>
        </div>
    );
}