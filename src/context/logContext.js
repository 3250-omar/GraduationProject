import { createContext, useState } from "react";

export const LogContext = createContext(null);

export const LogContextProvider = ({ children }) => {
  const [email , setEmail] =useState('')
  const [user, setUser] = useState("");
  const [Phone,setPhone] =useState(null)
  const logIn = (user) => {
    setUser(user);
  };
  const logOut = () => {
    setUser("");
  };
  const ReturnedValues = { user, logIn, logOut, setUser ,email,setEmail,setPhone,Phone};
  return (
    <LogContext.Provider value={ReturnedValues}>{children}</LogContext.Provider>
  );
};
