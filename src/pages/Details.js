import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "../components/DetailComponent";
import { Loading } from "../components/Loading";
import NotFound from "./NotFound";

export const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getAnimeById = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    if (response.status >= 200 && response.status <= 299) {
      const resp = await response.json();
      setData(resp);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getAnimeById();
  }, [getAnimeById]);

  return loading ? (
    <Loading />
  ) : data.data ? (
    <DetailComponent data={data} />
  ) : (
    <NotFound />
  );
};
