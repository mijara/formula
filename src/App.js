import React from 'react';
import './App.css';
import Formula from "./components/Formula/Formula";
import Folder from "./components/Folder/Folder";
import Header from "./components/Header/Header";

class App extends React.Component {
  state = {

  };

  onSearchChange = (e) => {

  };

  render() {
    return (
      <div>
        <Header onSearchChange={this.onSearchChange}>Formula</Header>

        <Folder title="Ondas de De Broglie">
          <Formula
            title="Longitud de Onda"
            formula="\lambda = \frac{h}{p} = \frac{h}{mv}"
            comment="Para una particula"
          />

          <Formula
            title="Energía total de una partícula"
            formula="E = hf"
          />

          <Formula
            title="Momentum Angular"
            formula="L = mvr = n \frac{h}{2\pi}"
          />

          <Formula
            title="Difracción de Electrones"
            formula="d \sin \theta = m \lambda"
          />

          <Formula
            title="Longitud de Onda para un Electrón"
            formula="\lambda = \frac{h}{\sqrt{2m eV_{ba}}}"
            comment="V_{ba} es el voltaje de aceleración"
          />

          <Formula
            title="Energía Cinética"
            formula="E = \frac{p^2}{2m}"
            comment="En un volumen en torno a (x, y, z)"
          />
        </Folder>

        <Folder title="Probabilidad e Incertidumbre">
          <Formula
            title="Principio de Incertidumbre"
            formula="\Delta x \Delta p_x \geq \frac{\hbar}{2}"
          />

          <Formula
            title="Incertidumbre en la Energía"
            formula="\Delta E \Delta t \geq \frac{\hbar}{2}"
          />
        </Folder>

        <Folder title="Función de Onda">
          <Formula
            title="Función de Onda"
            formula="\Psi (x, y, z, t)"
          />

          <Formula
            title="Distribución de Probabilidad"
            formula="|\Psi|^2"
            comment="Cerca de un punto"
          />

          <Formula
            title="Distribución de Probabilidad"
            formula="|\Psi|^2 dV"
            comment="En un volumen en torno a (x, y, z)"
          />
        </Folder>

        <Folder title="Ecuación de Schrodinger">
          <Formula
            title="En una dimensión"
            formula="- \frac{\hbar^2}{2m} \frac{d^2 \psi(x)}{dx^2} + U(x) \psi(x) = E \psi(x)"
          />

          <Formula
            title="Partícula Libre"
            formula="\psi(x, t) = A e^{ikx} e^{-iwt}"
          />
        </Folder>

        <Folder title="Partícula en una Caja">
          <Formula
            title="Ecuación de Onda"
            formula="\psi(x) = \sqrt{\frac{2}{L}} \sin \frac{n \pi}{L} x"
          />

          <Formula
            title="Momentum"
            formula="P_n = \frac{h}{\lambda_n} = \frac{nh}{2L}"
          />

          <Formula
            title="Energía"
            formula="E_n = \frac{n^2 \pi^2 \hbar^2}{2m L^2}"
          />
        </Folder>
      </div>
    );
  }
}

export default App;
