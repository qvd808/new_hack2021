
// if the user is on a new website, add that website to the dictionary
// make sure only the first part of the URL is saved. 

// if the user is on a website they already visited, add time to that website 

// create a variable called firstTime on chrome local storage to keep track of the first time they open their active tab

// then, after the user switches tabs, it will do the currentTime - firstTime, and add that time to the dictionary


// create a dictionary, save to chrome local storage

var dict = { };

// check which website the user is on every second

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){  
      alert(tabs[0].url);
   }
);

