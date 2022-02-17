import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getData(url) {
    setLoading(true);
    try {
      axios.get(url).then((res) => {
        if (res.data) setData(res.data);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, loading };
}
export default useFetch;
