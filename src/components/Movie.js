import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Movie = ({ movie, handleAddWatchList, watchListMovieIds, watchListPage }) => {
  return (
    <Card style={{ width: '18rem', marginRight : '10px', marginBottom: '10px' }} className="text-center">
      <Card.Img variant="top" src={movie.image} style={{height: '388px', width: '262px', marginTop: '10px'}} />
      <Card.Body>
        <Card.Title className='text-truncate' style={{maxWidth: '230px'}}>
            <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">{movie.title}</Tooltip>}
            >
            {({ ref, ...triggerHandler }) => (
                <div
                {...triggerHandler}
                ref={ref}
                className='text-truncate'
                >
                    {movie.title}
                </div>
            )}
            </OverlayTrigger>
            
        </Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{movie.genre}</ListGroup.Item>
        <ListGroup.Item>{movie.release_year}</ListGroup.Item>
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      {!watchListPage && <Card.Body>
        {watchListMovieIds.includes(movie._id) ? 'Added to Watchlist' : <Button variant="dark" onClick={() => handleAddWatchList(movie._id)}>+ Add to Watch List</Button>}
      </Card.Body>}
    </Card>
  );
}

export default Movie;