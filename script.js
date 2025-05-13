
const data = [
  
  { keyword: "pqr", ruta: "PQR → Tasa → Total", url: "tasa.html" },
  { keyword: "red", ruta: "PQR → Comportamiento Comuniaciones → Vicepresidencia de Red", url: "comite_red.html" },
  { keyword: "riesgo", ruta: "PQR → Comportamiento Comuniaciones → Vicepresidencia de Riesgo", url: "comite_riesgo.html" },
  { keyword: "operaciones", ruta: "PQR → Comportamiento Comuniaciones → Vicepresidencia de Operaciones", url: "comite_operaciones.html" },
  { keyword: "pcr", ruta: "PQR → Comportamiento Comuniaciones → PCRR", url: "pcrr.html" },
  { keyword: "contención", ruta: "Acompañamiento → Contención", url: "contencion.html" },
  { keyword: "pqr premium", ruta: "Acompañamiento → PQR Premium → Tasa", url: "pqr_premium.html" },
  { keyword: "resarcimiento", ruta: "Acompañamiento → Resarcimiento", url: "#" },
  { keyword: "back", ruta: "Acompañamiento → Back de Operación", url: "#" },
  { keyword: "trazadores", ruta: "Medición y Seguimiento → Medición → Satisfacción → Trazadores", url: "trazadores.html" },
  { keyword: "pbs", ruta: "Medición y Seguimiento → Medición → Satisfacción → Modulos Encuesta → Modulos PBS", url: "modulos_pbs.html" },
  { keyword: "premium", ruta: "Medición y Seguimiento → Medición → Satisfacción → Modulos Encuesta → Modulos Premium", url: "modulos_premium.html" },
  { keyword: "centros medicos", ruta: "Medición y Seguimiento → Medición → Satisfacción → Prestación → Centros Médicos", url: "centro_medico.html" },
  { keyword: "central de urgencias", ruta: "Medición y Seguimiento → Medición → Satisfacción → Prestación → Centros Médicos", url: "central_urgencias.html" },
  { keyword: "red externa", ruta: "Medición y Seguimiento → Medición → Satisfacción → Prestación → Red Externa", url: "red_externa.html" },
  { keyword: "canal presencial", ruta: "Medición y Seguimiento → Medición → Satisfacción → Canales → Canal Presencial", url: "canal_presencial.html" },
  { keyword: "medicamentos", ruta: "Modelo → Rutas → Medicamentos", url: "medicamentos.html" },
  { keyword: "experiencia", ruta: "Dirección de Experiencia → Humanización → Colaboradores", url: "#" }
  // Puedes seguir agregando más rutas aquí
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');

  if (!input || !resultsContainer) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    resultsContainer.innerHTML = '';

    if (query.length < 2) {
      resultsContainer.style.display = 'none';
      return;
    }

    const resultados = data.filter(item => item.keyword.includes(query));

    if (resultados.length > 0) {
      resultados.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.ruta;
        div.onclick = () => {
          window.location.href = item.url;
        };
        resultsContainer.appendChild(div);
      });
      resultsContainer.style.display = 'block';
    } else {
      resultsContainer.style.display = 'none';
    }
  });
});






