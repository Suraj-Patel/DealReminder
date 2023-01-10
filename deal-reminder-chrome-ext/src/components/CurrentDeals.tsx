import { useState } from "react";
import { Accordion, Card } from "react-bootstrap"
import { DealInfo } from "./DealInfo";
import { SampleDeals } from "../data/SampleDeals";
import { Deal } from "./DataTypes"


type CurrentDealsProps = {
    currentDeals : Deal[]
}

export const CurrentDeals = (props: CurrentDealsProps) => {
    return (
        <Accordion>
            {
                props.currentDeals.map((deal) => {
                    return (
                        <DealInfo deal={deal}></DealInfo>
                    )
                })
            }
        </Accordion>
    )
}