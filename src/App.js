import "./App.css";
import React, { useEffect, useState } from "react";
import SignUpForm from "./components/signup";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(books);
      })
      .catch((error) => {
        console.log("error!");
      });
  }, []);
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
};

export default App;
