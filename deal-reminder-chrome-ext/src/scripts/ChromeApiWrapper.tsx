import { Console } from "console";
import { Deal } from "../components/DataTypes";
import { DealInfo } from "../components/DealInfo";

const userDealsChromeStorageKey = "DealReminder_UserDeals";

const saveObjectInChromeLocalStorage = async (key: string, value: any) => {
    return new Promise<void>((resolve, reject) => {
        try {
            chrome.storage.local.set({[key]: value}).then(() => {
                console.log("Saving value: " + JSON.stringify(value) + " under key: " + key + " in chrome storage");
                resolve();
            })
        } catch (ex) {
            reject(ex);
        }
    });
}

const getObjectInChromeLocalStorage = async (key: string) => {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.get([key]).then((result) => {
                console.log("Chrome storage data: " + JSON.stringify(result))
                resolve(result[key]);
            })
        } catch (ex) {
            reject(ex);
        }
    });
}

export const saveCurrentDealsToChromeStorage = async (currentDeals: Deal[]) => {
    await saveObjectInChromeLocalStorage(userDealsChromeStorageKey, JSON.stringify(currentDeals))
}

export const getCurrentDealsFromChromeStorage = async () => {
    let currentDeals = await getObjectInChromeLocalStorage(userDealsChromeStorageKey);

    if (currentDeals) {
        console.log("Current deals from chrome storage: " + currentDeals.toString())
        return JSON.parse(currentDeals.toString())
    }
    else {
        return [];
    }
}