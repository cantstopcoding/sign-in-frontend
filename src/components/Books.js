import React, { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data, "hiiii!!");
      })

      .catch((error) => {
        console.log("error!");
      });
  }, []);

  return <></>;
}
