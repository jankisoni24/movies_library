import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const useMovies = () => {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        (async () => {
            if(!searchQuery) {
                await axios.get('http://localhost:3000/api/get_all_movies')
                .then(response =>  setMovies(response.data));
            }
        })();
    },[JSON.stringify(movies)]);

    const searchMovies = useCallback((query) => {
        setSearchQuery(query);
        var reqBody = {
            query: query
        }
        axios.post('http://localhost:3000/api/search_movies', reqBody)
        .then(response =>  {
            setMovies(response.data);
        });
    },[searchQuery]);

    return {
        movies,
        searchMovies
    };
}

export default useMovies;