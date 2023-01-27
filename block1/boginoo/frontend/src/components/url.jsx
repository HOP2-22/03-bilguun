import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import Loading from "../assets/99274-loading.json";

export const Url = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`
        https://bilguun-boginoo.onrender.com/short/${id}
        `);
        if (data) window.location.replace(data.original);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div>
      <Lottie animationData={Loading} loop={true} />
    </div>
  );
};
