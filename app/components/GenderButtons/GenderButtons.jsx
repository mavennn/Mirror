import React from 'react';

const GenderButtons = ({ toggleGender }) => {
  return (
    <div className="gender-button-container">
      <div className="gender-button" onClick={() => toggleGender('male')}>
        Мужчинам
      </div>
      <div className="gender-button" onClick={() => toggleGender('female')}>
        Женщинам
      </div>
      <div
        className="gender-button"
        onClick={() => toggleGender('child')}
        style={{ borderBottom: '3px solid greenyellow' }}
      >
        Детям
      </div>
    </div>
  );
};

export default GenderButtons;
