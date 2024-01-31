import React from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import Button from './button';
import {addCustomerAction, addManyCustomerAction, removeCustomerAction} from './store/customerReducer';

function App() {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customers.customers);


    const addCustomer = name => {
        const customer = {
            name,
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
            alert("error")
        }
    };





    return (
        <div className="App">

            <div style={{display: 'flex'}}>
                <Button onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
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
                    Получить клиентов из бд
                </button>
            </div>

            {customers.length > 0 ? (
                <div style={{cursor: 'pointer'}}>
                    {customers.map(customer => (
                        <div
                            key={customer.id}  onClick={() => removeCustomer(customer)}
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
                            {customer.name}{' '}

                        </div>
                    ))}
                </div>
            ) : (
                <div style={{fontSize: '2rem', marginTop: 20}}>Клиенты отсутствуют!</div>
            )}
        </div>
    );
}

export default App;
