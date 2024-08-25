import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/header";
import useAuth from "../../hooks/useAuth";
import { RegisterRequest } from "../../types";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();
  if (!auth) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setErrorMessage("Please enter a password");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const registerRequest: RegisterRequest = {
      username,
      password,
      confirmPassword,
      email,
      firstName,
      lastName,
      city,
      country,
      gender,
      mobile,
    };

    const res = await auth.register(registerRequest);
    if (res) {
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <div
          className={
            "alert alert-danger alert-dismissible fade" +
            (errorMessage ? " show" : "")
          }
          role="alert"
        >
          {errorMessage}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="/login"
                  className="float-right btn btn-outline-primary mt-1"
                >
                  Log in
                </a>
                <h4 className="card-title mt-2">Sign up</h4>
              </header>
              <article className="card-body">
                <form data-bitwarden-watching="1" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col form-group">
                      <label>First name </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="first_name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </div>
                    <div className="col form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" "
                        name="last_name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder=""
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>

                  <div className="form-group">
                    <label>Moblie</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="mobile"
                      onChange={(e) => setMobile(e.target.value)}
                      value={mobile}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                        value="M"
                        checked={gender === "M"}
                      />
                      <span className="form-check-label"> Male </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="F"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "F"}
                      />
                      <span className="form-check-label"> Female</span>
                    </label>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <select
                        id="inputState"
                        className="form-control"
                        name="country"
                        defaultValue={"in"}
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                      >
                        <option> Choose...</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="ru">Russia</option>
                        <option value="us">United States</option>
                        <option value="in">India</option>
                        <option value="af">Afganistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Create password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirm_password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  <small className="text-muted">
                    By clicking the 'Sign Up' button, you confirm that you
                    accept our <br /> Terms of use and Privacy Policy.
                  </small>
                </form>
              </article>
              <div className="border-top card-body text-center">
                Have an account? <a href="/login">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
