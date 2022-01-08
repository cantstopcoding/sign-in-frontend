import { useContext } from "react";
import TokenContext from "../components/TokenContext";

// create a hook that uses the context for a jwt token, is able to set it and returns it

const useJWT = () => {
  const { jwt, setJWT } = useContext(TokenContext);
  setJWT((value) => {
    jwt.value = { ...value };
  });
  return { jwt, setJWT };
};

export default useJWT;
