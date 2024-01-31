import React from 'react';

const Button = ({ onClick, children }) => {
    const handleClick = () => {
        const userInput = prompt("Введите значение:");

        if (userInput !== null) {
            onClick(userInput);
        }
    };

    return (
        <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
            <button
                style={{
                    padding: '12px 24px',
                    fontSize: '18px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                onClick={handleClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
