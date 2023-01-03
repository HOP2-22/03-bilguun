import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/list";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [desc, setDesc] = useState("");
  const [dataa, setData] = useState([]);
  const createData = async () => {
    try {
      const res = await axios.post("http://localhost:8029/todo/create", {
        title: inputValue,
        description: desc,
      });
      console.log(res);
      const temp = [...dataa, res.data];
      setInputValue("");
      setDesc("");
      setData(temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8029/todo");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8029/todo/${id}`);
      console.log(res);
      const newRes = dataa.filter((i) => i._id !== id);
      console.log(newRes);
      setData(newRes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "black", fontStyle: "italic", fontSize: "45px" }}>
          Todo list
        </p>
        <div
          style={{ display: "flex", gap: "30px" }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button
            onClick={() => {
              createData();
              console.log("Done");
            }}
          >
            commit
          </button>
        </div>
        <div>
          {dataa?.map((data1, index) => {
            return (
              <List key={index} data={data1} deleteHandler={deleteHandler} />
            );
          })}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
