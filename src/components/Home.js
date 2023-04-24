import { Fragment } from "react";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Movie from "./Movie";
import useMovies from '../hooks/useMovies';
import useWatchList from '../hooks/useWatchList';
import Form from 'react-bootstrap/Form';

const Home = () => {
    const { movies, searchMovies } = useMovies();
    const { handleAddWatchList, watchListMovies } = useWatchList();
    const watchListMovieIds = [];
    watchListMovies.forEach((wm) => {
        watchListMovieIds.push(wm.movie_id);
    });

    console.log(movies);
  
    return(
        <Fragment>
            <Header />
            <Container>
                <Row className="justify-content-md-center mt_30">
                    {/* <Col xs lg="2">
                    1 of 3
                    </Col> */}
                    <Col lg="12">
                        <Form.Control
                            className='me-auto'
                            type="text"
                            id="searchTxt"
                            aria-describedby="searchBlock"
                            placeholder="search movies by name, genre"
                            onChange={(e) => searchMovies(e.target.value)}
                        />
                    </Col>
                    {/* <Col xs lg="2">
                    <Button variant="dark" id="searchBtn" onClick={search}>Search</Button>
                    </Col> */}
                </Row>
                <Row className="justify-content-md-center mt_30">
                    {movies.map((movie) => 
                        <Movie key={movie._id} movie={movie} handleAddWatchList={handleAddWatchList} watchListMovieIds={watchListMovieIds} watchListPage={false}/>
                    )}
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home;