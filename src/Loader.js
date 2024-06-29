import React from 'react';

const Loader = () => {
  const loaderStyle = {
    backgroundColor: 'black',
    position: 'relative',
    width: '2.5em',
    height: '2.5em',
    transformOrigin: 'center',
    transition: '1s',
    borderRadius: '50px',
    boxShadow: 'inset 0px 0px 10px purple, inset 5px 5px 12px rgba(44, 0, 114, 0.8), inset 8px 8px 1px rgba(160, 120, 255, 0.7), 0px 0px 1px rgba(160, 120, 255, 0.6)',
    animation: 'first682 1.2s linear infinite'
  };

  const commonStyle = {
    width: 'inherit',
    height: 'inherit',
    position: 'absolute'
  };

  const beforeStyle = {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: 'calc(50% - 1em / 2)',
    width: '1em',
    height: '1em',
    backgroundColor: 'rgb(44, 0, 114)',
    boxShadow: 'inset 5px 5px 10px rgb(160, 120, 255), 0px 0px 2px white',
    borderRadius: '50px'
  };

  const firstStyle = {
    ...commonStyle,
    transform: 'rotate(90deg)'
  };

  const secondStyle = {
    ...commonStyle,
    transform: 'rotate(90deg)'
  };

  const thirdStyle = {
    ...commonStyle,
    transform: 'rotate(90deg)'
  };

  return (
    <div className="loader" style={loaderStyle}>
      <div id="first" style={firstStyle}>
        <div id="second" style={secondStyle}>
          <div id="third" style={thirdStyle}></div>
        </div>
      </div>
      <style>
        {`
          @keyframes first682 {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(90deg); }
            50% { transform: rotate(180deg); }
            75% { transform: rotate(270deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes jump2 {
            0% { top: 100%; }
            25% { top: 230%; }
            50% { top: 100%; }
            75% { height: 0.6em; }
            100% { height: 1em; }
          }

          .loader #first::before {
            ${Object.entries(beforeStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
            animation: jump2 0.8s ease-in infinite;
          }

          .loader #second::before {
            ${Object.entries(beforeStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
            animation: jump2 1.5s ease-in infinite;
          }

          .loader #third::before {
            ${Object.entries(beforeStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
            animation: jump2 1.6s ease-in infinite;
          }

          .loader::after {
            ${Object.entries(beforeStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
            animation: jump2 1.2s ease-in 1s alternate infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
