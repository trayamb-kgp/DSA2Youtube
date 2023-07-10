chrome.runtime.onInstalled.addListener(()=>{
    //checking
    // console.log("hello this is background.js");


    //receiving message from manifest
    // chrome.runtime.onMessage.addListener(
    //     function(request, sender, sendResponse){
    //         console.log(sender.tab? "from content script:" + sender.tab.url : "from the extension");
    //         if(request.greeting == "hello")
    //             sendResponse({farewell: "good bye"});
    //     }
    // )

    //create context menu
    chrome.contextMenus.create({
        id: "1",
        title: "Search \"%s\" to Youtube",
        contexts: ["selection"],
    });
});

//listner for context menu
chrome.contextMenus.onClicked.addListener(function(info, tab){
    //base url of wikipedia that will be added to letter
    // let baseUr_wiki = "https://en.wikipedia.org/wiki/";
    let baseUr_yt = "https://www.youtube.com/results?search_query="
    let newUrl = baseUr_yt + info.selectionText;
    //create a new url in the user's browser
    chrome.tabs.create({url: newUrl});
});