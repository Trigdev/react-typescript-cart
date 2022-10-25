import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

type AppProviderProps = {
  children: React.ReactNode;
};

type AppContextProps = {
  loading: boolean;
  cart: {}[];
  total: number;
  amount: number;
  clearCart: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
};

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = (): void => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id: number): void => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id: number): void => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id: number): void => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LEADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* make sure use */
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
