import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Url = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8029/short/${id}`);
        if (data) window.location.replace(data.original);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return <div>hi</div>;
};
