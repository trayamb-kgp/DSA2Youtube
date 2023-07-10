// document.body.style.backgroundColor = "blue";
console.log("console for user hi");

//sending response
chrome.runtime.sendMessage({"greeting" : "hello"}, function(response){
    console.log(response.farewell);
})