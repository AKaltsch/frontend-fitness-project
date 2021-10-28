import React, { createContext, useReducer } from "react";
import CalorieReducer from "./CalorieReducer"

const initialState = {
  entries: [
    { id: 1, text: "salad", calories:-200 },
    { id: 2, text: "30min jog", calories: 300 },
    { id: 3, text: "Banana", calories: -100 },
    { id: 4, text: "15min walk", calories: 100 },
  ],
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(CalorieReducer, initialState);

    function deleteEntry(id) {
      dispatch({
        type: 'DELETE_ENTRY',
        payload: id
      })
    }

    function addEntry(entry) {
      dispatch({
        type: 'ADD_ENTRY',
        payload: entry
      })
    }

    return (<GlobalContext.Provider value={{
        entries: state.entries,
        deleteEntry,
        addEntry
        }}>
        {children}
    </GlobalContext.Provider>)
}
