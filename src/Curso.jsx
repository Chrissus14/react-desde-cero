import React from 'react';
import PropTypes from 'prop-types';

const Curso = props => (
    <article className="card" id={ props.title }>
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={ props.image } alt={ props.title }/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{ props.title }</h3>
      <div className="s-main-center">{ `Profesor: ${ props.profesor }` }</div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="http://www.google.com.mx">{ `$ ${ props.price }` }</a>
      </div>
    </div>
  </article>
) 

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontro título",
  image: "Imagen no encontrada",
  price: "--",
  profesor: ""
}

export default Curso;