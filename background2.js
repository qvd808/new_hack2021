var arr = ["youtube", "twitch", "facebook", "instagram", "games", "snapchat",
"twitter"]
alert("hello");
chrome.runtime.onInstalled.addListener(()=> {
   
      function checkTab() {
         chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
         function(tabs){
         // console.logs correctly
         // console.log(tabs[0].url);
         // remove the slashes from the URL and only keep the main part
     
         let currentTabLongURL = tabs[0].url;
         let currentTabShortURL = shortenedURL(currentTabLongURL);

         for (let i = 0; i < arr.length; i++) {
            if (currentTabShortURL.includes(arr[i])) {
               var options = {
                  type: "basic",
                  title: "Notification from opengenus foundation",
                  message: "You are procrastinating",
                  iconUrl: "icon128.png"
                  };

                  chrome.notifications.create(options, callback);
    
                  function callback(){
                      console.log('Popup done!')
                  }
               
            }
         }

         });
      }
      

    // function to shorten the URL 
      function shortenedURL(longUrl){
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
    
});
//alert("hello");
//chrome.tab.get(checkTab);