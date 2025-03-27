const initAccordion = () => {
  const accordion = document.querySelector('.accordion');
  if (!accordion) return;
  const buttons = accordion.querySelectorAll('.accordion-button');
  
  buttons.forEach((button, index) => {
    button.addEventListener('keydown', (event) => {
      const targetId = button.getAttribute('aria-control');
      const targetPanel = document.getElementById(targetId);
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        const nextButton = buttons[(index + 1) % buttons.length];
        nextButton.focus();
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        const prevButton = buttons[(index - 1 + buttons.length) % buttons.length];
        prevButton.focus();
        break;
      case 'Home':
        event.preventDefault();
        buttons[0].focus();
        break;
      case ' ':
      case 'End':
        event.preventDefault();
        buttons[buttons.length - 1].focus();
        break;
      case 'Enter':
        event.preventDefault();
        togglePanel(button, targetPanel);
        break;
    }
  });

  button.addEventListener('click', () => {
    togglePanel(button, targetPanel);
  });
  });
};


const togglePanel = (button, panel) => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  const newExpandedState = !isExpanded;

  button.setAttribute('aria-expanded', newExpandedState);

  if (newExpandedState) {
    panel.hidden = false;

    requestAnimationFrame(() => {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  } else {
    panel.style.maxHeight = '0';
    panel.addEventListener('transitionend', () => {
      panel.hidden = true;
    }, {
      once: true
    });
  };
};


