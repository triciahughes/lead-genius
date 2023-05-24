import React, { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/keywords")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      {typeof backendData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.map((i) => <p key={i._id}>{i.word}</p>)
      )}
    </div>
  );
};

export default App;
