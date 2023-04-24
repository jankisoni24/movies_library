import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useWatchList = () => {

    const [watchListMovies, setWatchListMovies] = useState([]);
    const [movieId, setMovieId] = useState('');

    useEffect(() => {
        (async () => {
            await axios.post('http://localhost:3000/api/get_watchlist_movies', {user_id: JSON.parse(localStorage.getItem('user'))._id})
            .then(response =>  {
                // const watchListMovieIds = [];
                // response.data.forEach((wm) => {
                //     watchListMovieIds.push(wm.user_id);
                // });
                setWatchListMovies(response.data);
            });
        })();
    },[JSON.stringify(watchListMovies), movieId]);

    const handleAddWatchList = useCallback((movieId) => {
        setMovieId(movieId);
        var reqBody = {
            user_id: JSON.parse(localStorage.getItem('user'))._id,
            movie_id: movieId
        }
        if(movieId) {
            axios.post('http://localhost:3000/api/create_watchlist', reqBody)
            .then(response =>  {
                console.log(response);
                setMovieId('');
            });
        }
    },[movieId]);

    return {
        handleAddWatchList,
        watchListMovies
    };
}

export default useWatchList;