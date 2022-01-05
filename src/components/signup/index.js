import { useState } from "react";
import { FormStyle } from "./styles";

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const signUp = (event) => {
    event.preventDefault();
    // contact API to signup
    fetch("http://localhost:3000/api/v1/signup", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: {
          name: userInfo.name,
          username: userInfo.username,
          email: userInfo.email,
          password: userInfo.password,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((token) => console.log(token.token, "token"));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(" name:: ", name, " value:: ", value);
  //   setUserInfo({ ...userInfo, [name]: value });
  // };

  return (
    <FormStyle>
      <form onSubmit={signUp}>
        <h1>Sing Up:</h1>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" onChange={handleInputChange} />
      </form>
    </FormStyle>
  );
};

export default SignUpForm;
