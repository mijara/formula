const data = {
  "folders": [
    {
      "title": "Ondas de De Broglie",
      "formulas": [
        {
          "title": "Longitud de Onda",
          "formula": "\\lambda = \\frac{h}{p} = \\frac{h}{mv}",
          "comment": "Para una particula",
        },
        {
          "title": "Energía total de una partícula",
          "formula": "E = hf",
        },
        {
          "title": "Momentum Angular",
          "formula": "L = mvr = n \\frac{h}{2\\pi}",
          "comment": "Para una particula",
        },
        {
          "title": "Difracción de Electrones",
          "formula": "d \\sin \\theta = m \\lambda",
        },
        {
          "title": "Longitud de Onda para un Electrón",
          "formula": "\\lambda = \\frac{h}{\\sqrt{2m eV_{ba}}}",
          "comment": "V_{ba} es el voltaje de aceleración",
        },
        {
          "title": "Energía Cinética",
          "formula": "E = \\frac{p^2}{2m}",
          "comment": "En un volumen en torno a (x, y, z)",
        }
      ]
    },
    {
      "title": "Probabilidad e Incertidumbre",
      "formulas": [
        {
          "title": "Principio de Incertidumbre",
          "formula": "\\Delta x \\Delta p_x \\geq \\frac{\\hbar}{2}",
        },
        {
          "title": "Incertidumbre en la Energía",
          "formula": "\\Delta E \\Delta t \\geq \\frac{\\hbar}{2}",
        },
      ]
    },
    {
      "title": "Función de Onda",
      "formulas": [
        {
          "title": "Función de Onda",
          "formula": "\\Psi (x, y, z, t)",
        },
        {
          "title": "Distribución de Probabilidad",
          "formula": "|\\Psi|^2",
          "comment": "Cerca de un punto",
        },
        {
          "title": "Distribución de Probabilidad",
          "formula": "|\\Psi|^2 dV",
          "comment": "En un volumen en torno a (x, y, z)",
        },
      ]
    },
    {
      "title": "Ecuación de Schrodinger",
      "formulas": [
        {
          "title": "En una dimensión",
          "formula": "- \\frac{\\hbar^2}{2m} \\frac{d^2 \\psi(x)}{dx^2} + U(x) \\psi(x) = E \\psi(x)",
        },
        {
          "title": "Partícula Libre",
          "formula": "\\psi(x, t) = A e^{ikx} e^{-iwt}",
        },
      ]
    },
    {
      "title": "Partícula en una Caja",
      "formulas": [
        {
          "title": "Ecuación de Onda",
          "formula": "\\psi(x) = \\sqrt{\\frac{2}{L}} \\sin \\frac{n \\pi}{L} x",
        },
        {
          "title": "Momentum",
          "formula": "P_n = \\frac{h}{\\lambda_n} = \\frac{nh}{2L}",
        },
        {
          "title": "Energía",
          "formula": "E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2m L^2}",
        },
      ]
    },
  ]
};

export default data;
