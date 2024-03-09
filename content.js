// content.js
setInterval(() => {
  removeAds();
}, 1000);

function removeAds() {
  const ads = document.querySelectorAll('.ytp-ad-module');
  ads.forEach(ad => {
    ad.remove();
  });
}
