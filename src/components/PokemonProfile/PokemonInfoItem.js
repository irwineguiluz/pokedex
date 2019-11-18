import React from 'react';

const PokemonInfoItem = (props) => {
  return (
    <div className="pokemon__info-item">
      <div className="item-label">{props.label}</div>
      <div className="item-detail">{props.detail}</div>
    </div>
  );
}

export default PokemonInfoItem;