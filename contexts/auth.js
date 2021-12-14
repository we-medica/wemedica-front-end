import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// const tokenUrl = `${baseUrl}api/token/`;
const tokenUrl = 'http://localhost:8000/api/token/';
const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}


export function AuthProvider(props) {

  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });



  async function login(username, password) {
    const response = await axios.post(tokenUrl, { username, password });
    const decodedAccess = jwt.decode(response.data.access);
    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        password: decodedAccess.password,
      },
    };

    setState((prevState) => ({ ...prevState, ...newState }));
    localStorage.setItem("Auth", JSON.stringify(newState.user))


  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
