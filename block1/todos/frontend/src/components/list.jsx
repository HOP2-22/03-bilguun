import React, { useState, useEffect } from "react";
import axios from "axios";

export const List = ({ index, deleteHandler, data }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(data.title);
  const [newDesc, setNewDesc] = useState(data.description);

  const updateHandler = async (id) => {
    await axios.put(`http://localhost:8029/todo/update/${id}`, {
      title: newTitle,
      description: newDesc,
    });
    console.log("updated");
    setEditing(false);
  };
  if (editing) {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={newDesc}
          onChange={(e) => {
            setNewDesc(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setEditing(false);
            updateHandler(data._id);
            console.log(data._id);
          }}
        >
          save
        </button>
      </div>
    );
  }

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
        {newTitle}
        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          edit
        </button>
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
        {}

        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          edit
        </button>
      </div>
      <button
        onClick={() => {
          deleteHandler(data._id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default List;
