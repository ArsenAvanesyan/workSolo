import React, { useState } from 'react';
import { Movie, MovieWithoutIdSecond } from '../types/movie';
import axiosInstance from '../../../services/axiosInstance';

type MovieUpdateProps = {
    movie: MovieWithoutIdSecond
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>
}

function MovieUpdate({movie, setIsUpdating, setMovies}: MovieUpdateProps): JSX.Element {
    const [name, setName] = useState(movie.name)
    const [info, setInfo] = useState(movie.info)
    const [img, setImg] = useState(movie.img)

    const onHandleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const response = await axiosInstance.put(`/movie/${movie.id}`, {
                name,
                img,
                info,
            })

            if (response.status === 200) {
                setMovies((prev) => prev.map((m) => m.id === response.data.movie.id ? response.data.movie : m))
                setIsUpdating(false)
            }
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className='MovieUpdate'>
        <div>
            <h3>Изменить Фильм</h3>
        </div>
        <form onSubmit={onHandleUpdate}>
            <input placeholder='Название' type='text' onChange={(e) => setName(e.target.value)} />
            <input placeholder='Обложка' type='text' onChange={(e) => setImg(e.target.value)} />
            <input placeholder='Информация' type='text' onChange={(e) => setInfo(e.target.value)} />
            <button type='submit'>Изменить</button>
        </form>
    </div>
  );
};

export default MovieUpdate;
