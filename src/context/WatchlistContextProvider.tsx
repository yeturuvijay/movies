import { ReactNode, useState } from 'react'
import Movie from '../models/Movie'
import {
  postWatchlist,
  removeWatchlist,
} from '../services/RestDBWatchlistService'
import WatchlistContext from './WatchlistContext'

interface Props {
  children: ReactNode
}

const WatchlistContextProvider = ({ children }: Props) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([])
  const addToWatchlist = (movie: Movie): void => {
    setWatchlist((prev) => [...prev, movie])
    postWatchlist(movie).then((res) => {
      console.log('res', res)
    })
  }
  const removeFromWatchlist = (id: number): void => {
    setWatchlist((prev) => {
      const index: number = prev.findIndex((item) => item.id === id)
      return [...prev.slice(0, index), ...prev.slice(index + 1)]
    })
    removeWatchlist(id).then((res) => {
      console.log('res', res)
    })
  }
  const inWatchlist = (id: number): boolean =>
    watchlist.some((movie) => movie.id === id)

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, inWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  )
}

export default WatchlistContextProvider
