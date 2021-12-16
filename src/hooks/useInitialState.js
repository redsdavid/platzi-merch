import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () =>{
    const[state, setState] = useState(initialState);

    const addToCart = payload => {
        const repeatedElement = state.cart.filter(items => items.id === payload.id)
        
        if(!repeatedElement.length){
            return setState({
                ...state,
                cart: [...state.cart, payload],
            });
        }
        const copiaPayload = { ... payload}
            copiaPayload.id = Math.floor(Math.random() * 1000).toString();
            return setState({
                ...state,
                cart: [...state.cart, copiaPayload],
            });
    };

    const removeFromCart = payload => {
        setState({
          ...state,
          cart: state.cart.filter(items => items.id !== payload.id),
        });
      };

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer:[...state.buyer, payload]
        });
    };

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    };

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    };
};

export default useInitialState;