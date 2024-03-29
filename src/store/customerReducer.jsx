const defaultState = {
  customers: []
};
const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";
const EDIT_CUSTOMERS = "EDIT_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id !== action.payload)
      };
    case EDIT_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.map(customer =>
            customer.id === action.payload.id
                ? { ...customer, name: action.payload.name,number:action.payload.number }
                : customer
        )
      };
    default:
      return state;
  }
};

export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload });
export const addManyCustomerAction = payload => ({ type: ADD_MANY_CUSTOMER, payload });
export const removeCustomerAction = payload => ({ type: REMOVE_CUSTOMERS, payload });
export const editCustomerAction = payload => ({ type: EDIT_CUSTOMERS, payload });
