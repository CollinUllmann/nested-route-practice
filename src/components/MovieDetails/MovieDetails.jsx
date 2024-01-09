import { useParams, Outlet } from "react-router-dom";

function MovieDetails({movies}) {
  const { movieId } = useParams();
  // console.log(movieId)
  let foundMovie = movies.find(movie => {
    return movie.id == movieId
  })
  console.log(foundMovie)
  return (
    <div className='comp purple'>
      <h1>{foundMovie.title}</h1>
      <p>{foundMovie.description}</p>
    </div>
  );
}

export default MovieDetails;
