import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/login";

const App = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/keywords")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      {typeof backendData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.map((i) => <p key={i._id}>{i.word}</p>)
      )}
    </>
  );
};

export default App;
