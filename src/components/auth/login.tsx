import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/header";
import useAuth from "../../hooks/useAuth";
import { LoginRequest } from "../../types";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();
  if (!auth) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const request: LoginRequest = { username, password, rememberMe: false };
    const res = await auth.login(request);
    if (res) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="/register"
                  className="float-right btn btn-outline-primary mt-1"
                >
                  Sign up
                </a>
                <h4 className="card-title mt-2">Log in</h4>
              </header>
              <article className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </form>
              </article>
              <div className="border-top card-body text-center">
                Don't have a account? <a href="/register">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
