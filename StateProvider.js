import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = useContext();

//build a provider
export const StateProvider = { reducer, initialState, children };
