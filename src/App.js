import "./App.css";
import React, { useEffect, useState } from "react";
import SignUpForm from "./components/signup";
import Dump from "./components/dump";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data, "tututu");
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <SignUpForm />
      {/* if books.message.token exists then return books, else return error  */}
      <Dump sendDown={books} />
    </div>
  );
};

export default App;
