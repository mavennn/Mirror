import React, { useEffect } from 'react';

const AvailableColors = ({ colors, changeColor}) => {

    useEffect(() => {
        const allColorsButtonsArray = [...document.querySelectorAll('.color-button')];
        allColorsButtonsArray.map(button => {
            button.addEventListener('click', () => {
                allColorsButtonsArray.map(color => {
                    color.style.borderBottom = "0px";

                });
                button.style.borderBottom = "3px solid greenyellow";
            });
        });
    });

    return (
        <div className="colors">
            <p><strong>Выберите размер: </strong></p>
            <ul className="choose-list">
                {
                    colors.map(color => (
                        <li key={color}>
                            <button className="color-button" onClick={() => changeColor(color)}>{ color }</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default AvailableColors;