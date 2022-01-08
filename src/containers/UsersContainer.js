import React from "react";
import  useJWT  from "../hooks/JWT";
import SignUpForm from "../components/signup";
import Books from "../components/Books";

export default function UsersContainer() {
  const { jwt, setJWT } = useJWT();
  setJWT((value) => {
    this.setState({ jwt: value });
  });
  console.log(jwt, "Rafael-once");
  setJWT({ Test: "Test" });
  console.log(jwt, "Rafael-post");
  //   setJwt;

  return (
    <>
      <SignUpForm />
      <Books />
      {/* Global State */}
    </>
  );
}
