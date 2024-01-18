import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import Button from './button';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncAction/cunstomers';

function App() {
  const dispatch=useDispatch()
const cash=useSelector(state=>state.cash.cash)
const customers = useSelector(state => state.customers.customers);
   
   const addCash=(cash)=>{
      dispatch({type:'ADD_CASH',payload:cash})
   }
   const getCash=(cash)=>{
    dispatch({type:'GET_CASH',payload:cash})
   }

   const addCustomer=(name)=>{
       const customer={
        name,
        id:Date.now()
       }
       dispatch(addCustomerAction(customer))
   }

   const removeCustomer=(customer)=>{
    dispatch(removeCustomerAction(customer.id))
   }
  return (
    <div className="App">
      <div style={{fontSize:'3rem'}}>{cash}</div>

      <div style={{display:'flex'}}>

      <Button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</Button>
      <Button onClick={() => getCash(Number(prompt()))}>Снять со счёта</Button>
      <Button onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
      <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из бд</button>
       
      </div>

      {customers.length > 0
       ?
       (<div  >{customers.map(customer => <div onClick={()=>removeCustomer(customer)} style={{fontSize:'2rem',border:'1px solid black',padding:'10px',marginTop:5,width:'fit-content' ,borderRadius:'5px',margin: '0 auto', marginBottom: '10px'}}>{customer.name}</div>)}</div>)
        : 
       (<div style={{ fontSize: '2rem', marginTop: 20 }}>
         Клиенты отсутствуют!
       </div>)
       }
    </div>
  );
}

export default App;
