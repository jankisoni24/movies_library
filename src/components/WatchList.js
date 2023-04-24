import { Fragment } from "react";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Movie from "./Movie";
import useMovies from '../hooks/useMovies';
import useWatchList from '../hooks/useWatchList';

const WatchList = () => {
    const { movies } = useMovies();
    const { watchListMovies } = useWatchList();
    const watchListMoviesFiltered = [];
    const watchListMovieIds = [];
    watchListMovies.forEach((wm) => {
        watchListMovieIds.push(wm.movie_id);
    });
    movies.forEach((wm) => {
        if(watchListMovieIds.includes(wm._id)) {
            watchListMoviesFiltered.push(wm);
        }
    });
  
    return(
        <Fragment>
            <Header />
            <Container>
                <Row className="justify-content-md-center mt_30">
                    {watchListMoviesFiltered.map((movie) => 
                        <Movie key={movie._id} movie={movie} handleAddWatchList={null} watchListMovieIds={null} watchListPage={true}/>
                    )}
                </Row>
            </Container>
        </Fragment>
    )
}

export default WatchList;