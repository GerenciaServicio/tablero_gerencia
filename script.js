
const data = [
  
  { keyword: "pqr", ruta: "PQR → Tasa", url: "tasa.html" },
  { keyword: "tasa", ruta: "PQR → Tasa", url: "tasa.html" },
  { keyword: "red", ruta: "PQR → Vicepresidencia de Red", url: "comite_red.html" },
  { keyword: "riesgo", ruta: "PQR → Vicepresidencia de Riesgo", url: "comite_riesgo.html" },
  { keyword: "operaciones", ruta: "PQR → Vicepresidencia de Operaciones", url: "comite_operaciones.html" },
  { keyword: "pcr", ruta: "PQR → PCRR", url: "pcrr.html" },
  { keyword: "pqr", ruta: "PQR → Vicepresidencia de Red", url: "comite_red.html" },
  { keyword: "pqr", ruta: "PQR → Vicepresidencia de Riesgo", url: "comite_riesgo.html" },
  { keyword: "pqr", ruta: "PQR → Vicepresidencia de Operaciones", url: "comite_operaciones.html" },
  { keyword: "pqr", ruta: "PQR → PCRR", url: "pcrr.html" },
  { keyword: "contención", ruta: "Acompañamiento → Contención", url: "contencion.html" },
  { keyword: "pqr premium", ruta: "Acompañamiento → PQR Premium", url: "pqr_premium.html" },
  { keyword: "resarcimiento", ruta: "Acompañamiento → Resarcimiento", url: "#" },
  { keyword: "back", ruta: "Acompañamiento → Back de Operación", url: "#" },
  { keyword: "trazadores", ruta: "Satisfacción → Trazadores", url: "trazadores.html" },
  { keyword: "satisfacción", ruta: "Satisfacción → Trazadores", url: "trazadores.html" },
  { keyword: "pbs", ruta: "Satisfacción → Modulos PBS", url: "modulos_pbs.html" },
  { keyword: "premium", ruta: "Satisfacción → Modulos Premium", url: "modulos_premium.html" },
  { keyword: "centros medicos", ruta: "Satisfacción → Centros Médicos", url: "centro_medico.html" },
  { keyword: "central de urgencias", ruta: "Satisfacción → Central de Urgencias", url: "central_urgencias.html" },
  { keyword: "red externa", ruta: "Satisfacción → Red Externa", url: "red_externa.html" },
  { keyword: "canal presencial", ruta: "Satisfacción → Canal Presencial", url: "canal_presencial.html" },
  { keyword: "calidad", ruta: "Documentación → Calidad", url: "calidad.html" },
  { keyword: "satisfacción", ruta: "Satisfacción → Modulos PBS", url: "modulos_pbs.html" },
  { keyword: "satisfacción", ruta: "Satisfacción → Modulos Premium", url: "modulos_premium.html" },
  { keyword: "satisfacción", ruta: "Satisfacción → Centros Médicos", url: "centro_medico.html" },
  { keyword: "satisfacción", ruta: "Satisfacción → Red Externa", url: "red_externa.html" },
  { keyword: "satisfacción", ruta: "Satisfacción → Canal Presencial", url: "canal_presencial.html" },
  { keyword: "medicamentos", ruta: "Modelo → Rutas → Medicamentos", url: "medicamentos.html" },
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

// Codigo para los submenus de la pagina de PQR//

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-submenu");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      const submenu = parent.querySelector(".submenu");
      parent.classList.toggle("open");
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });
});

// codigo para las rutas de las páginas de ubiacion actual: //

document.addEventListener("DOMContentLoaded", () => {
  const archivo = window.location.pathname.split("/").pop().toLowerCase();

  const rutas = {
    "index.html": "Indicadores Gerencia de Servicio",
    "tasa.html": "PQR → Tasa",
    "comite_red.html": "PQR → Vicepresidencia de Red",
    "comite_riesgo.html": "PQR → Vicepresidencia de Riesgo",
    "comite_operaciones.html": "PQR → Vicepresidencia de Operaciones",
    "pcrr.html": "PQR → PCRR",
    "oportunidad.html": "PQR → Oportunidad",
    "vencidas.html": "PQR → Vencidas a fin de mes",
    "cierre.html": "PQR → Cierre de PQR",
    "contencion.html": "Acompañamiento → Contención",
    "medicamentos.html": "Modelo → Medicamentos",
    "trazadores.html": "Satisfacción → Trazadores",
    "calidad.html": "Documentación → Calidad",
    "canal_presencial.html": "Satisfacción → Canal Presención",
    "central_urgencias.html": "Satisfacción → Central de Urgencias",
    "centro_medico.html": "Satisfacción → Centro Médico",
    "modulos_pbs.html": "Satisfacción → Modulos PBS",
    "modulos_premium.html": "Satisfacción → Modulos Premium",
    "red_externa.html": "Satisfacción → Red Externa",
    "direccion_pqr.html": "Dirección de PQR",
    "acompanamiento.html": "Dirección de Acompañamiento",
    "direccion_medicion_seguimiento.html": "Dirección de Medición y Seguimiento",
    "direccion_experiencia.html": "Dirección de Experiencia",
    "direccion_modelo.html": "Dirección de Modelo",
    "direccion_participacion.html": "Dirección de Participación Ciudadana"
  };

  // Mostrar breadcrumb
  document.getElementById("breadcrumb").textContent = `${rutas[archivo] || "Ruta no identificada"}`;

  // Cargar JSON
  fetch("actualizaciones.json")
    .then(res => res.json())
    .then(data => {
      if (data[archivo]) {
        const { fecha, hora } = data[archivo];
        document.getElementById("last-update").textContent = `Última actualización: ${fecha} - ${hora}`;
      } else {
        document.getElementById("last-update").textContent = "Última actualización: no disponible";
      }
    })
    .catch(() => {
      document.getElementById("last-update").textContent = "Última actualización: no disponible";
    });
});
