import React from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import Button from './button';
import {addCustomerAction, addManyCustomerAction, removeCustomerAction,editCustomerAction} from './store/customerReducer';
function App() {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);

    const addCustomer = (name, number) => {
        const customer = {
            name,
            number,
            id: Date.now()
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = customer => {
        dispatch(removeCustomerAction(customer.id));
    };

    const fetchCustomersFromDatabase = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(addManyCustomerAction(response.data));
        } catch (error) {
            alert("error");
        }
    };

    const editCustomer = (id, newName, newNumber) => {
        dispatch(editCustomerAction({ id, name: newName, number: newNumber }));
    };

    return (
        <div className="App">
            <div style={{ display: 'flex' }}>
                <Button onClick={() => addCustomer(prompt('Enter name'), prompt('Enter number'))}>Добавить контакт</Button>
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
                    onClick={() => fetchCustomersFromDatabase()}
                >
                    Получить Контакты из бд
                </button>
            </div>

            {customers.length > 0 ? (
                <div style={{ cursor: 'pointer' }}>
                    {customers.map(customer => (
                        <div
                            key={customer.id}
                            style={{
                                fontSize: '2rem',
                                border: '1px solid black',
                                padding: '10px',
                                marginTop: 5,
                                width: 'fit-content',
                                borderRadius: '5px',
                                margin: '0 auto',
                                marginBottom: '10px'
                            }}
                        >
                            {customer.name} - {customer.number}{' '}
                            <button
                                style={{
                                    fontSize: '2rem',
                                    border: '1px solid black',
                                    backgroundColor: '#3498db',

                                    padding: '10px',
                                    marginTop: 5,
                                    width: 'fit-content',
                                    borderRadius: '5px',
                                    margin: '0 auto',
                                    marginBottom: '10px'
                                }}
                                onClick={() => removeCustomer(customer)}>DELETE</button>
                            <button
                                style={{
                                    fontSize: '2rem',
                                    border: '1px solid black',
                                    backgroundColor: '#3498db',

                                    padding: '10px',
                                    marginTop: 5,
                                    width: 'fit-content',
                                    borderRadius: '5px',
                                    margin: '0 auto',
                                    marginBottom: '10px'
                                }}
                                onClick={() => editCustomer(customer.id, prompt('Enter new name'), prompt('Enter new number'))}>EDIT</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ fontSize: '2rem', marginTop: 20 }}>Контакты отсутствуют!</div>
            )}
        </div>
    );
}

export default App;