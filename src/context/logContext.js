import { createContext, useState } from "react";

export const LogContext = createContext(null);

export const LogContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const logIn = (user) => {
    setUser(user);
  };
  const logOut = () => {
    setUser("");
  };
  const ReturnedValues = { user, logIn, logOut, setUser };
  return (
    <LogContext.Provider value={ReturnedValues}>{children}</LogContext.Provider>
  );
};
