function startChat() {

  chrome.tabs.executeScript({
    code: '(' + function(params){
      document.body.insertAdjacentHTML('beforeend','<div id="root"></div>');
      return {success: true, html: document.body.innerHTML};
    } + ')();'
  });

  chrome.tabs.executeScript({file:"dist/bundle.js"});
}



chrome.browserAction.onClicked.addListener(startChat);
