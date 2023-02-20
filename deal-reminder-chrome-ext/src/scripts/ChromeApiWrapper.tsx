import { Deal } from "../components/DataTypes";

const userDealsChromeStorageKey = "DealReminder_UserDeals";
const redeemWebsitesChromeStorageKey = "DealReminder_RedeemWebsites";

const saveObjectInChromeLocalStorage = async (key: string, value: any) => {
        try {
            chrome.storage.local.set({[key]: value}).then(() => {
                console.log("Saved value: " + JSON.stringify(value) + " under key: " + key + " in chrome storage");
            })
        } catch (ex) {
            console.log(ex);
            throw "Error occured while saving to chrome storage"
        }
}

const getObjectInChromeLocalStorage = async (key: string) => {
        try {
            let result = await chrome.storage.local.get([key]);
            return result[key]
        } catch (ex) {
            console.log(ex);
            throw "Error occured while getting value for key '" + key + "' from chrome storage"
        }
}

export const saveCurrentDealsToChromeStorage = async (currentDeals: Deal[]) => {
    await saveObjectInChromeLocalStorage(userDealsChromeStorageKey, JSON.stringify(currentDeals))
}

export const saveRedeemWebsitesToChromeStorage = async (websites : String[]) => {
    await saveObjectInChromeLocalStorage(redeemWebsitesChromeStorageKey, websites);
}

export const getRedeemWebsitesFromChromeStorage = async () => {
    let redeemWebsites = await getObjectInChromeLocalStorage(redeemWebsitesChromeStorageKey)

    if (redeemWebsites) {
        console.log("Websites to create reminder: " + redeemWebsites);
        return redeemWebsites;
    } else {
        return []
    }
}

export const getCurrentDealsFromChromeStorage = async () => {
    let currentDeals = await getObjectInChromeLocalStorage(userDealsChromeStorageKey);

    if (currentDeals) {
        console.log("Current deals from chrome storage: " + currentDeals.toString());
        return JSON.parse(currentDeals.toString())
    } else {
        return [];
    }
}