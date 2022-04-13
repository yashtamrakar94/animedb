import { useState, useEffect } from "react";
import React from "react";
import { Table } from "../components/Table";
import { Loading } from "../components/Loading";

export function Home() {
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    setLoading(false);

    setTopAnime(temp.top.slice(0, 5));
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <div className="content-wrap">
        {loading ? <Loading /> : <Table topAnime={topAnime} />}
      </div>
    </div>
  );
}
