import React from 'react';
import Header from './Header';

const Template = (props) => {
  return (
    <div className="pokedex__template">
      <Header />
      <div className="pokedex__template-container">
        <div className="pokedex__template-wrapper">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Template;