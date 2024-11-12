import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    const handlePrevPage = () => setPageNo(prev => Math.max(prev - 1, 1));
    const handleNextPage = () => setPageNo(prev => prev + 1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2f63c404e761fbb9a9039bb6ba9ec2da&language=en-US&page=${pageNo}`)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, [pageNo]);

    return (
        <div className='p-5'>
            <div className='text-2xl m-5 font-bold text-center'>Trending Movies</div>
            <div className='flex flex-row flex-wrap justify-around gap-5'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} poster_path={movie.poster_path} name={movie.original_title} />
                ))}
            </div>
            <Pagination pageNo={pageNo} onNext={handleNextPage} onPrev={handlePrevPage} />
        </div>
    );
}

export default Movies;
