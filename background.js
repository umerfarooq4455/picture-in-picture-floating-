chrome.action.onClicked.addListener((tab) => {
  // Ensure the tab's URL is a valid HTTP(S) page, not chrome:// or file://
  if (tab.url.startsWith('http') || tab.url.startsWith('https')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: togglePiP,
    });
  } else {
    console.warn('Picture-in-Picture is not allowed on this page.');
  }
});

function togglePiP() {
  const video = document.querySelector("video");
  if (video) {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch((error) => console.error(error));
    } else {
      video.requestPictureInPicture().catch((error) => console.error(error));
    }
  } else {
    console.log("No video element found on the page.");
  }
}
