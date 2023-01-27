import Button from "@mui/material/Button";
import { useContext } from "react";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";
import { User } from "../context/Context";
import "../css/login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, LoginFunc } = useContext(User);
  return (
    <div className="container-login">
      <div
        className="logo-container"
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img src={Group} alt="group" />
        <p
          style={{
            fontFamily: "Lobster",
            fontSize: "56px",
            color: "#02B589",
            margin: "0",
          }}
        >
          Boginoo
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          LoginFunc();
        }}
      >
        <div>
          <p
            style={{
              fontSize: "38px",
              color: "#02B589",
              marginLeft: "10px",
              fontFamily: "Ubuntu",
            }}
          >
            Нэвтрэх
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              fontFamily: "Ubuntu",
            }}
          >
            Цахим хаяг
          </p>
          <input
            placeholder="name@mail.domain"
            type="email"
            required
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <p
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              fontFamily: "Ubuntu",
            }}
          >
            Нууц үг
          </p>

          <input
            placeholder="••••••••••"
            required
            type="password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <input type="checkbox" name="" id="" className="checkbox" />
              <p style={{ color: "#02B589" }}>Намайг сана</p>
            </div>
            <p>
              <a href="/" style={{ color: "black" }}>
                Нууц үг мартсан
              </a>
            </p>
          </div>
          <button type="submit" className="button-login">
            Нэвтрэх
          </button>
          <p>
            <a href="/signup" style={{ color: "black" }}>
              Шинэ хэрэглэгч бол энд дарна уу
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
