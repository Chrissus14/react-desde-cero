import React from 'react';

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&w=1000&q=80" alt="banner" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">React JS</p>
            <p>Cruso de React en Edteam</p>
            <a href="ed.team" class="button">Entrar</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner;