var currentTab;

var socket = io.connect("http://localhost:3002", {query: "type=extension"});

socket.on("connect", function()
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
  {
    socket.emit("extensionConnect", tabs[0]);
  })
});

chrome.tabs.onActivated.addListener(function(activeInfo)
{
  chrome.tabs.get(activeInfo.tabId, function(tab)
  {
    if(socket.connected) socket.emit("tabChange", tab);
    currentTab = tab;
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
  if(changeInfo.url !== undefined && currentTab.url !== tab.url)
  {
    if(socket.connected) socket.emit("tabChange", tab);
    currentTab = tab;
  }
});
