let debug = false;

browser.tabs.onActivated.addListener((tab) => {
  debug && console.log(tab)
  browser.tabs.query({pinned:true, windowId:tab.windowId}).then((pinnedTabs)=>{
  	debug && console.log(pinnedTabs);
  	debug && console.log(pinnedTabs.length);
    debug && console.log(pinnedTabs.map(pinnedTab=>pinnedTab.id))
    debug && console.log(tab.tabId)
    let activatedTagIspinnedTab = pinnedTabs.map(pinnedTab=>pinnedTab.id).includes(tab.tabId)
    if(activatedTagIspinnedTab) {
      browser.tabs.move(tab.tabId, {windowId: tab.windowId, index: 0});
      debug && console.log("pinned tag activated");
      return;
    }
    let moving = browser.tabs.move(tab.tabId, {windowId: tab.windowId, index: pinnedTabs.length});
  });
});


browser.tabs.onCreated.addListener((tab) => {
  debug && console.log(tab)
  browser.tabs.query({pinned:true, windowId:tab.windowId}).then((pinnedTabs)=>{
  	debug && console.log(pinnedTabs);
  	debug && console.log(pinnedTabs.length);
    debug && console.log(pinnedTabs.map(pinnedTab=>pinnedTab.id))
    debug && console.log(tab.id)
    let activatedTagIsPinnedTab = pinnedTabs.map(pinnedTab=>pinnedTab.id).includes(tab.id)
    if(activatedTagIsPinnedTab) {
      browser.tabs.move(tab.id, {windowId: tab.windowId, index: 0});
      debug && console.log("pinned tag activated");
      return;
    }
    let moving = browser.tabs.move(tab.id, {windowId: tab.windowId, index: pinnedTabs.length});
  });
});
