import React, { createContext, useState, useEffect } from "react";
import getState from "./flux";

export const AppContext = createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updateStore) =>
          setState({
            store: Object.assign(state.store, updateStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      state.actions.getPersonajes("https://www.swapi.tech/api/people");
      state.actions.getPlanetas("https://www.swapi.tech/api/planets/");
      state.actions.getVehiculos("https://www.swapi.tech/api/vehicles/");
    }, []);

    return (
      <AppContext.Provider value={state}>
        <PassedComponent {...props} />
      </AppContext.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
