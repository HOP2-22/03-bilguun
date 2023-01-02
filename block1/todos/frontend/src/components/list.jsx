import React, { useState } from "react";

export const List = ({ index, deleteHandler, updateHandler, data }) => {
  const [edit, setEdit] = useState(false);
  const list = () => {
    console.log(data);
  };
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
        {data?.title}
        <button
          onClick={() => {
            updateHandler(data._id);
            setEdit(true);
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
        {data?.description}

        <button
          onClick={() => {
            updateHandler(data._id);
            setEdit(true);
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
