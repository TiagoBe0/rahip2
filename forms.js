document.querySelectorAll('.star-rating input').forEach(input => {
    // Al cambiar el radio, actualizamos clases (si quieres alguna lógica extra)
    input.addEventListener('change', evt => {
      console.log(`Valoración seleccionada: ${evt.target.value}`);
      // Aquí podrías disparar un fetch() para enviar al servidor…
    });
  });
  
  // Soporte básico de teclado (flechas)
  const labels = Array.from(document.querySelectorAll('.star-rating label'));
  labels.forEach((label, idx) => {
    label.tabIndex = 0;
    label.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        let next = idx + (e.key === 'ArrowLeft' ? 1 : -1);
        if (next >= 0 && next < labels.length) {
          labels[next].focus();
          labels[next].click();
        }
      }
    });
  });
  