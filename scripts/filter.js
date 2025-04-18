// scripts/filter.js

document.addEventListener('DOMContentLoaded', () => {

  //
  // 1. Generic Filter Function
  //
  function setupFilter(buttons, items, allFilterValue = 'all') {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        items.forEach(item => {
          item.style.display = (filter === allFilterValue || item.classList.contains(filter)) ? '' : 'none';
        });
      });
    });

    // Show only filter buttons that match at least one item
    buttons.forEach(button => {
      const filter = button.getAttribute('data-filter');
      const hasMatch = Array.from(items).some(item =>
        filter === allFilterValue || item.classList.contains(filter)
      );
      button.style.display = hasMatch ? '' : 'none';
    });
  }

  //
  // 2. Technologies & Certifications Filtering
  //
  setupFilter(
    document.querySelectorAll('#technologies .filter-buttons button'),
    document.querySelectorAll('.tech-item')
  );

  setupFilter(
    document.querySelectorAll('#certifications .filter-buttons-certifications button'),
    document.querySelectorAll('.certificate-item'),
    'all' // Special "all" value for certifications
  );

  //
  // 3. Projects Filtering
  //
  const projectButtons = document.querySelectorAll('.projects .filter-buttons button');
  const projectRows = document.querySelectorAll('.projects tr[data-category]');

  // Add class to each row to simulate filter system consistency
  projectRows.forEach(row => row.classList.add(row.dataset.category));

  setupFilter(projectButtons, projectRows);

  //
  // 4. Project Popup (Memory Game, etc.)
  //
  const popup = document.getElementById('popup');
  const popupIframe = document.getElementById('popupIframe');
  const closeButton = document.getElementById('closePopup');

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      popupIframe.src = link.getAttribute('data-src');
      popup.style.display = 'flex';
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
      popupIframe.src = '';
    });
  }

});
