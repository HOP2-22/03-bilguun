import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { User } from "../context/Context";
import Group from "../assets/Group.svg";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../css/boginoo.css";

export const Boginoo = () => {
  const [value, setValue] = useState("");
  const [short, setShort] = useState(false);
  const [valid, setValid] = useState(false);
  const [links, setLinks] = useState({
    original: "",
    short: "",
  });
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  const { email } = useContext(User);
  const navigate = useNavigate();
  const createData = async () => {
    let random = (Math.random() + 1).toString(36).substring(7);

    if (email === "") {
      try {
        const res = await axios.post(
          `https://bilguun-boginoo.onrender.com/short/create`,
          {
            original: value,
            short: random,
          }
        );
        console.log(res);
        setValue("");
        setShort(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post(
          `https://bilguun-boginoo.onrender.com/short/create`,
          {
            original: value,
            short: random,
            user: email,
          }
        );
        console.log(res);
        setValue("");
        setShort(true);
      } catch (error) {
        console.log(error);
      }
    }
    setLinks({
      original: value,
      short: random,
    });
  };

  return (
    <div className="container">
      <div
        className="logo-container"
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img src={Group} alt="group" />
        <p
          style={{ fontFamily: "Lobster", fontSize: "56px", color: "#02B589" }}
        >
          Boginoo
        </p>
      </div>
      <div className="link-shortener">
        <input
          placeholder="Type Boginoo an url "
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let checkUrl = isValidUrl(value);
            if (checkUrl) {
              createData();
            } else {
              setValid(true);
            }
          }}
          className="button"
        >
          Богиносгох
        </button>
      </div>
      {valid ? (
        <div style={{ color: "red", fontSize: "15px", fontFamily: "Ubuntu" }}>
          Url is not valid
        </div>
      ) : null}
      {short ? (
        <div className="shortened-container">
          <div className="shortened-container">
            <p className="word2">Өгөгдсөн холбоос:</p>
            <p className="link">{links?.original}</p>
          </div>
          <div>
            <p className="word2">Богино холбоос:</p>
            <div className="link-short">
              <p>
                <a
                  href={`https://boginoo-eed24.web.app/${links?.short}`}
                  className="link"
                >
                  https://boginoo-eed24.web.app/{`${links?.short}`}
                </a>
              </p>
              <CopyToClipboard
                text={`https://boginoo-eed24.web.app/${links?.short}`}
              >
                <button className="button">Хуулж авах</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Boginoo;
