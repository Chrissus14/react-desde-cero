import React from 'react';
import "./styles/styles.scss";
// import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';

const App = () => (
  <>
    <Banner/>
    <Formulario/>

    {/* <div className="ed-grid m-grid-3">
      {
        cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor}/>)
      }
    </div> */}
  </>
)

export default App;
