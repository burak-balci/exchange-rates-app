import { useState } from "react";
import axios from "axios";
import { setAuthToken } from "../../helpers/setAuthToken";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");
      setAuthToken(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.line}>
            <div className={styles.column}>
              <span className={styles.subTitle}>Kullanıcı Adı</span>
              <input
                type="text"
                placeholder="Kullanıcı adı"
                value={username}
                className={styles.input}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.column}>
              <span className={styles.subTitle}>Şifre</span>
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            disabled={!username || !password}
            className={styles.button}
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
