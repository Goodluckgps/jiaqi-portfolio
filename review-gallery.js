const reviewGallery = document.querySelector('.review-gallery');
const reviewNames = ['品牌经营驾驶舱','渠道经营分析','商品 SKU 分析','达人直播分析','行业竞争分析','AI 品牌顾问'];
const reviewNamesEn = ['Brand Dashboard','Channel Performance','Product & SKU Analysis','Creator Livestream Analysis','Market Competition','AI Brand Advisor'];
let reviewIndex = 0;
let reviewOpener;
const reviewThumbs = document.querySelector('[data-review-thumbnails]');
reviewNames.forEach((name, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  const img = document.createElement('img');
  img.src = 'assets/brand-review-screen-' + (index + 1) + '.png';
  img.alt = name;
  button.append(img);
  button.addEventListener('click', () => showReviewPage(index));
  reviewThumbs.append(button);
});
function showReviewPage(index) {
  reviewIndex = (index + reviewNames.length) % reviewNames.length;
  const names = document.documentElement.lang === 'en' ? reviewNamesEn : reviewNames;
  const img = reviewGallery.querySelector('[data-review-image]');
  img.src = 'assets/brand-review-screen-' + (reviewIndex + 1) + '.png';
  img.alt = names[reviewIndex];
  reviewGallery.querySelector('[data-review-title]').textContent = names[reviewIndex];
  reviewGallery.querySelector('[data-review-count]').textContent = (reviewIndex + 1) + ' / ' + reviewNames.length;
  [...reviewThumbs.children].forEach((button, i) => {
    button.classList.toggle('is-active', i === reviewIndex);
    button.setAttribute('aria-label', names[i]);
    button.setAttribute('aria-pressed', String(i === reviewIndex));
  });
}
document.querySelectorAll('[data-review-open]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  reviewOpener = link;
  showReviewPage(0);
  reviewGallery.showModal();
}));
reviewGallery.querySelector('[data-review-close]').addEventListener('click', () => reviewGallery.close());
reviewGallery.querySelector('[data-review-prev]').addEventListener('click', () => showReviewPage(reviewIndex - 1));
reviewGallery.querySelector('[data-review-next]').addEventListener('click', () => showReviewPage(reviewIndex + 1));
reviewGallery.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showReviewPage(reviewIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
reviewGallery.addEventListener('close', () => reviewOpener?.focus());
let reviewTouchX = null;
reviewGallery.querySelector('.review-image-stage').addEventListener('touchstart', event => { reviewTouchX = event.touches[0].clientX; }, { passive: true });
reviewGallery.querySelector('.review-image-stage').addEventListener('touchend', event => {
  if (reviewTouchX !== null && Math.abs(event.changedTouches[0].clientX - reviewTouchX) > 60) {
    showReviewPage(reviewIndex + (event.changedTouches[0].clientX < reviewTouchX ? 1 : -1));
  }
  reviewTouchX = null;
}, { passive: true });
