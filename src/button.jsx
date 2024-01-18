import React from 'react';

const Button = ({ onClick, children }) => {
  const handleClick = () => {
    const userInput = prompt("Введите значение:");

    // Проверяем, чтобы не было отмены ввода (null) и передаём введённое значение обратно во внешнюю функцию
    if (userInput !== null) {
      onClick(userInput);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease'
        }}
        onClick={handleClick} // Используем внутреннюю функцию для обработки клика
      >
        {children}
      </button>
    </div>
  );
};

export default Button;