import { memo } from "react";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: MovieProps[];
}

export function ContentComponent (props:ContentProps) {
  return (
    <div className="movies-list">
    {
      props.movies.map(movie => (
      <MovieCard 
        key ={movie.imdbID} 
        title={movie.Title} 
        poster={movie.Poster} 
        runtime={movie.Runtime} 
        rating={movie.Ratings[0].Value} 
      />)
      )
    }
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
})