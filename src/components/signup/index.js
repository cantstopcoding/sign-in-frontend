import { useState } from "react";
import { FormStyle } from "./styles";

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const signUp = (event) => {
    event.preventDefault();
    // contact API to signup
    fetch("");
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
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email</label>
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
