import React, { useEffect, useState } from "react";
import axios from "axios";

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
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dataa]);

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8029/todo/${id}`);
      console.log(res);
      const newRes = dataa.filter((i) => i.id == id);
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
        <div style={{ display: "flex", gap: "30px" }}>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <input
            type="text"
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
              <div
                style={{
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  gap: "100px",
                }}
                key={index}
              >
                <div
                  style={{
                    width: "200px",
                    height: "30px",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: "50px",
                    paddingLeft: "20px",
                  }}
                >
                  {data1?.title}
                  <button>edit</button>
                </div>
                <div
                  style={{
                    width: "200px",
                    height: "30px",
                    border: "1px solid black",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: "50px",
                    paddingLeft: "20px",
                  }}
                >
                  {data1?.description}
                  <button>edit</button>
                </div>
                <button onClick={() => deleteHandler(data1._id)}>delete</button>
              </div>
            );
          })}
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
