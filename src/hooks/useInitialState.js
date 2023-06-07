import { useState, useEffect } from "react";
import axios from "axios";
import initialState from "../initialState"

const API = '';

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  // useEffect(async () => {
  //   const response = await axios(API);
  //   setState(response.data);
  // }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [
        ...state.cart, payload
      ]
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    })
  }

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      buyer: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  }
}

export default useInitialState