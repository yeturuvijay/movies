import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Movie from '../models/Movie'
import {
  getFilteredMovies,
  getMovieDetails,
  getTrendingMovies,
} from '../services/MovieService'
import FilterMovieForm from './FilterMovieForm'
import './Main.css'
import MovieList from './MovieList'

const Main = () => {
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [filterParams] = useSearchParams()
  const runtime = parseInt(filterParams.get('runtime') || '')
  const rating = parseInt(filterParams.get('rating') || '')
  const genres = filterParams.get('genres') || ''
  const [moviesListTitle, setMoviesListTitle] = useState('Trending')

  useEffect(() => {
    if (genres || runtime || rating) {
      getFilteredMovies(genres, runtime, rating).then((response) => {
        setMovieList(response.results)
        setMoviesListTitle('Search Results')
      })
    } else
      getTrendingMovies().then((response) => {
        setMovieList(response.results)
        setMoviesListTitle('Trending')
      })
  }, [genres, runtime, rating])
  return (
    <div className='Main'>
      <h3>{moviesListTitle}</h3>
      <MovieList movieList={movieList} />
      <FilterMovieForm />
    </div>
  )
}

export default Main
