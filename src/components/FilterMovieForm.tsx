import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FilterMovieForm.css'

const FilterMovieForm = () => {
  const [runtime, setRuntime] = useState('')
  const [rating, setRating] = useState('')
  const [genres, setGenres] = useState('')

  const navigate = useNavigate()
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    navigate(`/?${new URLSearchParams({ runtime, rating, genres })}`)
  }

  return (
    <form className='FilterMovieForm' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='runtime'>Runtime</label>
      <input
        type='number'
        id='runtime'
        name='runtime'
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
      />
      <br />
      <label htmlFor='rating'>Rating</label>
      <input
        type='number'
        id='rating'
        name='rating'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <label htmlFor='genres'>Genres</label>
      <input
        type='text'
        id='genres'
        name='genres'
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />
      <br />
      <button type='submit'>Search</button>
    </form>
  )
}

export default FilterMovieForm
