import React from 'react'
import { Route, Routes,useLocation} from "react-router-dom";
import { Home } from "../Pages/Home"
import { Store } from "../Pages/Store";
import { About } from "../Pages/Aboutus";
import { Cart } from "../Pages/Cart";
import { Form } from "../Pages/form";
import { Alreadyexists } from "../Pages/Alreadyexists";
import { AfterSignUp } from "../Components/AfterSignUp";
import { NOTFOUND } from "../Pages/NOTFOUND";
import { AnimatePresence } from 'framer-motion';
export const ROUTESAnimations = () => {
    const Location = useLocation();
  return (
    <div>
        <AnimatePresence>
         <Routes location={Location} key={Location.pathname} >
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Subscribe" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignIn" element={<Alreadyexists />} />
          <Route path="/YourCart" element={<Cart />} />
          <Route path="/Subscribedsuccessfully" element={<AfterSignUp />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
        </AnimatePresence>
        </div>
  )
}
