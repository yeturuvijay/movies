import { useContext, useEffect } from 'react'
import WatchlistContext from '../context/WatchlistContext'
import { getWatchlist } from '../services/RestDBWatchlistService'
import MovieList from './MovieList'
import './Watchlist.css'

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext)

  useEffect(() => {
    getWatchlist().then((res) => {
      console.log('res', res)
    })
  }, [])

  return (
    <div className='Watchlist'>
      <h2>My movies watchlist</h2>
      <MovieList movieList={watchlist} />
    </div>
  )
}

export default Watchlist
