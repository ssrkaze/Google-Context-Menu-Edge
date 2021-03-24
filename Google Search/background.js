function onRequest(info, tab) {
    var selection = info.selectionText;
    //do something with the selection
    var serviceCall = "https://google.com/search?q=" + encodeURIComponent(selection);
    chrome.tabs.create({ url: serviceCall });
}

chrome.contextMenus.create({
    id: "google_search",
    title: "Search with Google",
    contexts: ["selection"],
    onclick: onRequest,
});
