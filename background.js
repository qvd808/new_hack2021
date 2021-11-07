// if the user is on a new website, add that website to the dictionary
// make sure only the first part of the URL is saved. 

// if the user is on a website they already visited, add time to that website 

// create a variable called firstTime on chrome local storage to keep track of the first time they open their active tab

// then, after the user switches tabs, it will do the currentTime - firstTime, and add that time to the dictionary


// create a dictionary, save to chrome local storage

/*
chrome.runtime.onInstalled.addListener(()=> {

   var dict = { };

   // var currentTimeOnPage = 0;

   // chrome.storage.sync.set({currentTimeOnPage});
   chrome.storage.sync.set({dict});
   
   function checkTab(previousTab) {
      chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
      function(tabs){
         // console.logs correctly
         // console.log(tabs[0].url);

         // remove the slashes from the URL and only keep the main part
         
         let currentTabLongURL = tabs[0].url;
         let currentTabShortURL = shortenedURL(currentTabLongURL);
         
         if(currentTabShortURL == previousTab ){
            // do nothing
         }

         else if (currentTabShortURL == "."){
            // first iteration
            // don't do anything to calculate time 
         }
         
         // they changed tabs
         else{

            // the tab is not yet in the dictionary
            if(dict[currentTabShortURL] == undefined){
               
               // track the time they spent looking at the previous tab
               
               let previousTabElapsedTime = new Date() - chrome.storage.local.get(['start']);
               chrome.storage.sync.get("dict", ({dict}) => {
                  let newDict = dict[previousTab] += previousTabElapsedTime;
                  chrome.storage.sync.set()
               })


               // add this new current tab theyre on to the dictionary 
               dict[currentTabShortURL,0];

               var start = new Date();
               // starting time of this new tab
               chrome.storage.local.set(start);
            }

            else{
               // they moved back to a website they've visited before
               
               let previousTabElapsedTime = new Date() - chrome.storage.local.get(['start']);
               dict[previousTab, previousTabElapsedTime];
                              
            }

            // set time time they started looking at the new tab
            var start = new Date();
            chrome.storage.local.set(start);
         }
         
         // recursively call checkTab with a delay
         chrome.storage.sync.get("dict", ({dict}) =>{
            console.log(dict);
         });

         setTimeout(() => { checkTab(currentTabShortURL); }, 2000);

      });
  }

*/

chrome.runtime.onInstalled.addListener(()=> {
   
   function checkTab() {
      chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
      function(tabs){
         // console.logs correctly
         // console.log(tabs[0].url);

         // remove the slashes from the URL and only keep the main part
         
         let currentTabLongURL = tabs[0].url;
         let currentTabShortURL = shortenedURL(currentTabLongURL);
         console.log(currentTabShortURL);

      });

  }
  

   // function to shorten the URL 
   function shortenedURL(longUrl){

      // if(longUrl == "chrome://extensions/"){
      //    return "fail";
      // }

      let numberOfSlashes = 0;
      var shortURL = "";
      
      for(let i = 0; i < longUrl.length; i++){
         
         shortURL += (longUrl[i]);
         
         if(longUrl[i] == "/"){
            numberOfSlashes++;
         }
         if(numberOfSlashes == 3){
            console.log(shortURL);
            return shortURL;
         }

      }
   }
   
  setInterval(checkTab(),2000);

});


