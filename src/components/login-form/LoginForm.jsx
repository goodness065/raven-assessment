import { useState } from "react";
import md5 from "md5";

import { useNavigate } from "react-router-dom";
import { useAuthProviderContext } from "../../providers/auth-provider/AuthProvider";

import "./style/login-form.css";
import Button from "../button/Button";

const LoginForm = () => {
  const history = useNavigate();

  const { setEmail, setGravatarHash, setGitRepo } = useAuthProviderContext();
  const [email, setEmailAddress] = useState("");

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(email);
    const gravatarHash = md5(email.trim().toLowerCase());
    setGravatarHash(gravatarHash);
    history("/exchange");

    try {
      //can't get git hub users via email
      const response = await fetch(
        `https://api.github.com/users/${email}/repos`
      );
      if (response.ok) {
        const data = await response.json();
        setGitRepo(data);
      } else {
        setGitRepo([]);
      }
    } catch (error) {
      console.error("Error:", error);
      setGitRepo([]);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email:"
          onChange={handleChange}
          required
        />
        <div>
          <Button type="submit" buttonClassName="button--gradient" title="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
