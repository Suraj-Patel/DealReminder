import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap"
import { DealInfo } from "./DealInfo";
import { Deal } from "./DataTypes"
import { saveCurrentDealsToChromeStorage, saveRedeemWebsitesToChromeStorage } from "../scripts/ChromeApiWrapper";

type CurrentDealsProps = {
    currentDeals : Deal[],
    setCurrentDeals : Function    
}

export const CurrentDeals = (props: CurrentDealsProps) => {

    const [deleteId, setDeleteId] = useState(0);

    // In case of deletion, refresh indexes to keep them as 1 to n for n deals.
    const refreshDealIndexes = (deals: Deal[]) => {
        let counter = 1;
        deals.map((deal: Deal) => {
            deal.id = counter;
            counter += 1;
        });
    }

    const extractRedeemWebsitesFromCurrentDeals = (deals: Deal[]) => {
        let redeemWebsites: String[] = [];

        deals.forEach((deal) => {
            if (deal.redeemWebsite) {
                redeemWebsites.push(deal.redeemWebsite);
            }
        });

        return redeemWebsites;
    }

    useEffect(() => {
        if (deleteId > 0) {
            console.log("Delete ID: " + deleteId);
            props.currentDeals = props.currentDeals.filter((deal) => deal.id != deleteId)
            refreshDealIndexes(props.currentDeals);
            props.setCurrentDeals(props.currentDeals);
            saveCurrentDealsToChromeStorage(props.currentDeals);
            saveRedeemWebsitesToChromeStorage(extractRedeemWebsitesFromCurrentDeals(props.currentDeals));
            setDeleteId(0);        
        }
    });

    return (
        <Accordion>
            {
                props.currentDeals
                    .filter((deal) => deal.id != deleteId)
                    .map((deal) => {
                        return (
                            <DealInfo deal={deal} setDeleteId={setDeleteId}></DealInfo>
                        )
                    })
            }
        </Accordion>
    )
}