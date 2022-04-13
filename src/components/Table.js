import React from "react";
import { Link } from "react-router-dom";

export const Table = ({ topAnime }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rank</th>
          <th>Rating</th>
          <th>Episodes</th>
        </tr>
      </thead>
      {topAnime &&
        topAnime.map((item, key) => {
          return (
            <tbody key={"body" + key}>
              <tr key={key}>
                <td>
                  <Link to={`/details/${item.mal_id}`}>{item.title}</Link>
                </td>
                <td>{item.rank}</td>
                <td>{item.score}</td>
                <td>{item.episodes}</td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};
