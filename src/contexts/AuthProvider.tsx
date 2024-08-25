import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import env from "../lib/config";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from "../types";

export interface AuthContextType {
  login: (request: LoginRequest) => Promise<LoginResponse | undefined>;
  logout: () => Promise<void>;
  register: (request: RegisterRequest) => Promise<RegisterResponse | undefined>;
  getUser: () => Promise<User | undefined>;
  token?: string;
  user?: User;
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string>(
    localStorage.getItem("access-token") || ""
  );
  const navigate = useNavigate();
  const login = async ({
    username,
    password,
  }: LoginRequest): Promise<LoginResponse | undefined> => {
    try {
      const response = await fetch(env.VITE_SERVER_URL + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const res = await response.json();

      const data = res.data as LoginResponse;
      if (data) {
        console.log(data);
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("access-token", data.token);
        navigate("/");
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    setUser(undefined);
    setToken("");
    localStorage.removeItem("access-token");
    navigate("/login");
  };

  const getUser = async (): Promise<User | undefined> => {
    const token = localStorage.getItem("access-token");
    // console.log({ token, user });
    if (!token) return undefined;
    if (user) return user;

    try {
      const response = await fetch(env.VITE_SERVER_URL + "/api/current-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();
      const user = res.data.user as User;
      console.log(user);
      if (user) {
        setUser(user);
        return user;
      }
    } catch (err) {}
  };

  const register = async (
    request: RegisterRequest
  ): Promise<RegisterResponse | undefined> => {
    try {
      const response = await fetch(env.VITE_SERVER_URL + "/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      const res = await response.json();
      const data = res.data as RegisterResponse;
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, getUser, register, token, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
