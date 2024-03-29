import "./styles.css";
import axios from "axios";
import { useState } from "react";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitInfo = async (event) => {
    event.preventDefault();
    try {
      const postResponse = await axios.post(
        "http://localhost:4000/user/login",
        {
          email: email,
          password: password,
        }
      );
      props.tokenSetter(postResponse.data.jwt);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitInfo}>
        <div className="inputContainer">
          <label>Email</label>
          <input
            type="text"
            name="uname"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="buttonContainer">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
