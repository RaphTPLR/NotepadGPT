chrome.action.setBadgeText({ text: "ON" });
chrome.action.setBadgeBackgroundColor({ color: "green" });

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
});