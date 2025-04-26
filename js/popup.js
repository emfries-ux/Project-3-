const icons = document.querySelectorAll('.icon');
  const popups = document.querySelectorAll('.popup');

  icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      // 关闭所有 popup
      popups.forEach(p => p.style.display = 'none');

      const popupId = icon.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      const rect = icon.getBoundingClientRect();

      // 设置弹窗位置
      popup.style.top = `${rect.top + window.scrollY + 70}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;

      popup.style.display = 'block';
    });
  });

  // 允许点击弹窗关闭
  popups.forEach(popup => {
    popup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });

  const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // 防止触发 popup 自身的 click 事件
    const popup = btn.closest('.popup');
    popup.style.display = 'none';
  });
});