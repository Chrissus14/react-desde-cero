import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 20,
    "profesor": "Christian Gómez"
  },
  {
    "title": "Vue desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
    "price": 30,
    "profesor": "Elizabeth Zacks"
  },
  {
    "title": "Angular desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png",
    "price": 40,
    "profesor": "Valentina Kryp"
  }
]

const App = () => (
  <>
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

    <div className="ed-grid m-grid-3">
      {
cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
      }
    </div>
  </>
)

export default App;
