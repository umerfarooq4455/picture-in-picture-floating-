// document.getElementById("toggle-pip").addEventListener("click", () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       func: togglePiP,
//     });
//   });
// });

// function togglePiP() {
//   const video = document.querySelector("video");
//   if (document.pictureInPictureElement) {
//     document.exitPictureInPicture().catch((error) => console.error(error));
//   } else {
//     video.requestPictureInPicture().catch((error) => console.error(error));
//   }
// }
