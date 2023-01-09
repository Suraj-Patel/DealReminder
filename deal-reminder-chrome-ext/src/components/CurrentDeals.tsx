import { useState } from "react";
import { Accordion, Card } from "react-bootstrap"
import { DealInfo } from "./DealInfo";
import { SampleDeals } from "../data/SampleDeals";

export const CurrentDeals = () => {

    const[currentDeals, setCurrentDeals] = useState({ SampleDeals });

    return (
        <Accordion>
            {
                currentDeals.SampleDeals.Deals.map((deal) => {
                    return (
                        <DealInfo deal={deal}></DealInfo>
                    )
                })
            }
        </Accordion>
    )
}