import { useParams, Link, Outlet } from "react-router-dom";

function Movies({movies}) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <Outlet/>
      <nav>
        {movies.map(movie => {
          return <Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title} |</Link>
        })}
      </nav>
      
    </div>
  );
}

export default Movies;

