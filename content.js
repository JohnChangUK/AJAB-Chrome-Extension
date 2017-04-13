function startChat() {
  var someVar = {text: 'test', foo: 1, bar: false}
  chrome.tabs.executeScript({
    code: '(' + function(params){
      document.body.insertAdjacentHTML('beforeend',
       '<div id="root"></div>' +
       '<script type="text/javascript" src="https://firebasestorage.googleapis.com/v0/b/chat-app-7fc5f.appspot.com/o/bundle.js?alt=media&token=1abd25e9-f1cb-4a60-88a9-821719f845ce"></script>'
     );
      return {success: true, html: document.body.innerHTML};
    } + ')(' + JSON.stringify(someVar) + ');'
  }, function(results){ console.log(results[0]);});

  chrome.tabs.executeScript(null, {file:"dist/bundle.js"});
}



chrome.browserAction.onClicked.addListener(startChat);
