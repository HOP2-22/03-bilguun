import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

export const Comment = ({ commentText, list, setList, index }) => {
  const handleClick = (e) => {
    setList(list.filter((_, ind) => ind !== index));
  };
  let { theme } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        borderBottom: "1px solid grey",
        width: "80%",
        height: "5vh",
        margintop: "100px",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
      }}
    >
      <Typography sx={{ color: theme === "white" ? "white" : "black" }}>
        {commentText}
      </Typography>
      <HighlightOffSharpIcon
        sx={{ color: theme === "white" ? "white" : "black" }}
        onClick={handleClick}
      />
    </Box>
  );
};
export const User = () => {
  let { theme } = useContext(ColorModeContext);
  let { id } = useParams();
  const [post, setPost] = useState([]);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const instance = axios.create({
          baseURL: `https://dummyapi.io/data/v1/post/${id}`,
          headers: { "app-id": "636e0d6642c1f665f684f489" },
        });
        const res = await instance.get("/");
        setPost(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, [id]);
  console.log(post);
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: theme === "dark" ? "white" : "black",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "0",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            marginTop: "100px",
            marginBottom: "20px ",
            fontWeight: "400",
            color: theme === "white" ? "white" : "#25313C",
          }}
        >
          {post?.text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Typography sx={{ color: theme === "white" ? "white" : "black" }}>
            {post?.owner?.firstName}
            {post?.owner?.lastName}
          </Typography>

          <Typography sx={{ color: theme === "white" ? "white" : "black" }}>
            {post?.publishDate}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "450px",
            position: "relative",
            overflow: "hidden",
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "450px",
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgba(0,0,0,0.2)",
              filter: "blur(8px)",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "450px",
              backgroundImage: `url(${post.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          ></Box>
        </Box>
        <Container maxWidth="md" sx={{ marginTop: "100px" }}>
          <Typography
            variant="body1"
            component="div"
            sx={{
              marginBottom: "10px",
              marginTop: "10px",
              color: theme === "white" ? "white" : "black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nemo, fuga ab nisi minima facere, officiis explicabo veritatis
            accusantium doloremque voluptatum dolor perferendis! Eligendi
            laborum doloremque libero voluptate porro deleniti?
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              marginBottom: "10px",
              color: theme === "white" ? "white" : "black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nemo, fuga ab nisi minima facere, officiis explicabo veritatis
            accusantium doloremque voluptatum dolor perferendis! Eligendi
            laborum doloremque libero voluptate porro deleniti?
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              marginBottom: "10px",
              color: theme === "white" ? "white" : "black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nemo, fuga ab nisi minima facere, officiis explicabo veritatis
            accusantium doloremque voluptatum dolor perferendis! Eligendi
            laborum doloremque libero voluptate porro deleniti?
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              marginBottom: "10px",
              color: theme === "white" ? "white" : "black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nemo, fuga ab nisi minima facere, officiis explicabo veritatis
            accusantium doloremque voluptatum dolor perferendis! Eligendi
            laborum doloremque libero voluptate porro deleniti?
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              marginBottom: "10px",
              color: theme === "white" ? "white" : "black",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nemo, fuga ab nisi minima facere, officiis explicabo veritatis
            accusantium doloremque voluptatum dolor perferendis! Eligendi
            laborum doloremque libero voluptate porro deleniti?
          </Typography>
        </Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            marginTop: "100px",
          }}
        >
          <img src={post?.owner?.picture} alt="pro" width={50} height={50} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: theme === "white" ? "white" : "black" }}>
              Written by
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: theme === "white" ? "white" : "black" }}
            >
              {post?.owner?.firstName}
              {post?.owner?.lastName}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid grey",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingTop: "50px",
            marginBottom: "50px",
          }}
        >
          {list.map((toDo, ind) => {
            return (
              <Comment
                commentText={toDo}
                key={ind}
                list={list}
                setList={setList}
                index={ind}
              />
            );
          })}
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "gray", marginBottom: "40px" }}
          >
            Join the conversation
          </Typography>
          <form
            onSubmit={handleSubmit}
            sx={{
              dipslay: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <img src={post?.owner?.picture} alt="pr" width={40} height={40} />
            <input
              type="text"
              placeholder="Comment..."
              style={{ width: "40vw", height: "15vh" }}
              value={inputValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setList([...list, inputValue]);
                }
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </form>
        </Box>
      </Container>
    </Box>
  );
};
export default User;
