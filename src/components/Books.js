import React, { useContext, useEffect, useState } from "react";
import TokenContext from "./TokenContext";

export default function Books() {
  const [books, setBooks] = useState([]);
  const token = useContext(TokenContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setBooks(data);
        console.log(data, "yoo!!!!");
      })
      .then((err) => console.log(err));
  }, []);

  return <></>;
}
