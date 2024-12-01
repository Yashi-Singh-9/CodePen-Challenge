function toggleMode() {
    const body = document.body;
    const toggleSwitch = document.querySelector('.toggle-switch');
    const glowEffect = document.querySelector('.glow');
    
    body.classList.toggle('dark-mode');
    toggleSwitch.classList.toggle('dark');
    glowEffect.classList.toggle('dark');
  }