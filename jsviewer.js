const viewer = document.getElementById('viewer');

// 首次交互后自动旋转
viewer.addEventListener('interaction-prompt-dismissed', () => {
  viewer.autoRotate = true;
});

// 页面不可见时暂停旋转
document.addEventListener('visibilitychange', () => {
  viewer.autoRotate = !document.hidden;
});
