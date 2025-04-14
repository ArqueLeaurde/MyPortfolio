// Script de sélection du thème
  const selector = document.getElementById('themeSelector');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    selector.value = savedTheme;
  }

  selector.addEventListener('change', () => {
    document.body.className = '';
    const theme = selector.value;

    if (theme) {
      document.body.classList.add(theme);
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  });
