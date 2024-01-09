import { NavLink } from 'react-router-dom';

function MovieNavBar({movies}) {
  return (
    <nav>
        {movies.map(movie => {
          return <NavLink key={movie.id} to={`${movie.id}`}>{movie.title} |</NavLink>
        })}
      </nav>
  )
}

export default MovieNavBar