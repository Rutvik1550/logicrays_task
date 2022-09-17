import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { useDispatch } from 'react-redux'
import { ActionTypes } from "./redux/actionType";

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('resize', function() {
      if(this.window.innerWidth <= 600 && !isMobile) {
        setIsMobile(true)
        dispatch({type: ActionTypes.IS_MOBILE, payload: true})
      } else if(this.window.innerWidth > 600 && isMobile) {
        setIsMobile(false)
        dispatch({type: ActionTypes.IS_MOBILE, payload: false})
      }
    })
  })
  
  return (
    <>
      <Home />
    </>
  );
};

export default App;
