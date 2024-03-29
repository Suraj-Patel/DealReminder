import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { getCurrentDealsFromChromeStorage, getRedeemWebsitesFromChromeStorage, saveCurrentDealsToChromeStorage, saveRedeemWebsitesToChromeStorage } from "../scripts/ChromeApiWrapper";
import { Deal } from "./DataTypes";

type AddDealProps = {
    setCurrentDeals : Function
}

export const AddDeal = (props : AddDealProps) => {

    const[newDealCompany, setNewDealCompany] = useState('');
    const[newDealCard, setNewDealCard] = useState('');
    const[newDealType, setNewDealType] = useState('');
    const[newDealCouponCode, setNewDealCouponCode] = useState('');
    const[newDealRedeemWebsite, setNewDealRedeemWebsite] = useState('');

    const handleAdd = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let currentDeals : Deal[] = await getCurrentDealsFromChromeStorage();
        let reminderWebsites : String[] = await getRedeemWebsitesFromChromeStorage();

        const newId = currentDeals.length + 1;
        const newDeal: Deal = {
            id: newId,
            dealCompany: newDealCompany,
            dealCard: newDealCard,
            dealDesc: newDealType,
            dealCouponCode: newDealCouponCode,
            redeemWebsite: newDealRedeemWebsite
        };

        currentDeals.push(newDeal);
        saveCurrentDealsToChromeStorage(currentDeals);

        if (newDeal.redeemWebsite) {
            reminderWebsites.push(newDeal.redeemWebsite);
            await saveRedeemWebsitesToChromeStorage(reminderWebsites);
        }

        props.setCurrentDeals(currentDeals);

        setNewDealCompany('')
        setNewDealCard('')
        setNewDealType('')
        setNewDealCouponCode('')
        setNewDealRedeemWebsite('')
    }

    return (
        <div className="mb-2">
            <Form className="container">
                <Form.Group className="mb-2">
                    <Form.Control placeholder="Deal Company Name" onChange={e => setNewDealCompany(e.target.value)} value={newDealCompany} required={true}></Form.Control>
                    <Form.Control placeholder="Credit/Debit Card name (if applicable)" onChange={e => setNewDealCard(e.target.value)} value={newDealCard}></Form.Control>
                    <Form.Control placeholder="Deal type/Reminder message" onChange={e => setNewDealType(e.target.value)} value={newDealType}></Form.Control>
                    <Form.Control placeholder="Coupon code (if applicable)" onChange={e => setNewDealCouponCode(e.target.value)} value={newDealCouponCode}></Form.Control>
                    <Form.Control type="url" placeholder="Website to Redeem the offer" onChange={e => setNewDealRedeemWebsite(e.target.value)} value={newDealRedeemWebsite}></Form.Control>
                </Form.Group>
                <Container>
                    <Row>
                        <Button onClick={event => handleAdd(event)}>Add New Deal</Button>
                    </Row>
                </Container>                    
            </Form>
        </div>
    );
}