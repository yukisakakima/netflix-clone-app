import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.scss";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

// 映画のデータを管理するためのstateの型定義
interface Movie {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // APIのベースURLを設定
  const api_base_url = "https://api.themoviedb.org/3";
  // 画像のベースURLを設定
  const image_base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const url = `${api_base_url}${fetchUrl}`;
      console.log("Requesting:", url);
      try {
        const request: any = await axios.get(url);
        console.log("Data received:", request.data.results);
        setMovies(request.data.results || []); // resultsがundefinedの場合は空の配列をセット
        // return request;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* movies が undefined または null でないことを確認し、安全に map 関数を呼び出す */}
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
              src={`${image_base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title || movie.original_name}
            />
          ))}
      </div>
    </div>
  );
};
