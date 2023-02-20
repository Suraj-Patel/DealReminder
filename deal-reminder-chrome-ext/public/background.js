const allowList = []

const getObjectInChromeLocalStorage = async (key) => {
  try {
      let result = await chrome.storage.local.get([key]);
      return result[key]
  } catch (ex) {
      console.log(ex);
      throw "Error occured while getting value for key '" + key + "' from chrome storage"
  }
}

const extractRedeemWebsites = async () => {
  try {
    let result = await chrome.storage.local.get([key]);
    return result[key]
  } catch (ex) {
    console.log(ex);
    throw "Error occured while getting value for key '" + key + "' from chrome storage"
  }
}

const createReminderMessage = (dealToRemind) => {

  let reminderMessage = '';

  if (dealToRemind.dealCard) {
    reminderMessage +=  "Use card " + dealToRemind.dealCard + " to redeem offer.\n";
  };

  if (dealToRemind.dealDesc) {
    reminderMessage += "Deal Type: " + dealToRemind.dealDesc + ".\n";
  }

  if (dealToRemind.dealCouponCode) {
    reminderMessage += "Coupon Code: " + dealToRemind.dealCouponCode + ".\n";
  }

  return reminderMessage;
  
}

chrome.storage.onChanged.addListener(async (changes) => {

  if ('DealReminder_RedeemWebsites' in changes) {
    allowList.length = 0;

    let redeemWebsites = await getObjectInChromeLocalStorage('DealReminder_RedeemWebsites');

    redeemWebsites.forEach((site) => {
      allowList.push(site);
    });

    console.log("AllowList: " + JSON.stringify(allowList));
  }
});

chrome.webNavigation.onCompleted.addListener(async (details) => {

  let currentDeals = await getObjectInChromeLocalStorage('DealReminder_UserDeals');

  allowList.forEach((value) => {

    let currentDealsJson = JSON.parse(currentDeals);  

    if (details.url.includes(value)) {

      let dealToRemind = currentDealsJson.find(deal => deal.redeemWebsite === value);
      let reminderMessage = createReminderMessage(dealToRemind);

      console.log("User visited " + value);
      chrome.notifications.create("Example", 
      {
        type: "basic",
        iconUrl: "favicon.ico",
        title: "Reminder",
        message: reminderMessage
      });
    }
  });
});