import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import { DataContext } from "../src/Components/DataProvider/DataProvider";
import { Type } from "./utility/action.type";
import { auth } from "./utility/firebase";

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;
