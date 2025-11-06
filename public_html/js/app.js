// ===== Configuración =====
// Cambiá este código cuando quieras:
const ACCESS_CODE = "23";

// Fuerza modo noche por horario local (20 a 6). Respeta además prefers-color-scheme.
(function setNightModeByTime(){
  try{
    const h = new Date().getHours();
    if (h >= 20 || h < 6) {
      document.documentElement.classList.add('night');
    }
  }catch(_){}
})();

// UX + Acceso
(function(){
  const form = document.getElementById('form-acceso');
  const input = document.getElementById('codigo');
  const error = document.getElementById('error');

  // Entrar con Enter (desde el documento) o con Espacio como atajo
  document.addEventListener('keydown', (e) => {
    if (!form) return;
    if (e.key === 'Enter' && document.activeElement !== input) {
      form.requestSubmit();
    }
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  // Guardar que el usuario pasó por la portada (por si luego se usa)
  try { localStorage.setItem('en_visitado', '1'); } catch(_){}

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = (input.value || "").trim();
    const ok = (val === ACCESS_CODE);

    if(ok){
      error.hidden = true;
      // Se puede agregar aquí lógica adicional (auditoría, analytics, etc.)
      window.location.href = "principal.html";
    }else{
      error.hidden = false;
      form.classList.remove('shake');
      // Forzar reflow para reiniciar animación
      void form.offsetWidth;
      form.classList.add('shake');
      input.focus();
      input.select?.();
    }
  });
})();
