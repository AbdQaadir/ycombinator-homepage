import { useEffect, useState } from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FeedContainer from './components/FeedContainer/FeedContainer';

const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";
const pageLimit = 30;

function App() {

  const [feeds, setFeeds] = useState([]);
  const [feedIds, setFeedIds] = useState([]);
  const [page, setPage] = useState(1); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all the IDs of the feeds.
  const fetchFeedIds = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/newstories.json?print=pretty`)
      const data = await response.json();
      setFeedIds(data);

      // Get the feeds stories for the first value of pageLimit (line 10);
      const stories = await Promise.all(data.slice(0, pageLimit).map(fetchFeed));
      setFeeds(stories);
      setLoading(false);

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  // Method to fetch individual feed story.
  const fetchFeed = async (id) => {
    try {
      const response = await fetch(`${BASE_API_URL}/item/${id}.json`);
      const data = await response.json();
      return data;

    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Gets called on Component Mounts
  useEffect(() => {
    fetchFeedIds();
    // eslint-disable-next-line 
  }, []);

  // Trigger FetchMore on page number increment
  useEffect(() => {
    if(page > 1){
      fetchMore();
    }
    // eslint-disable-next-line 
  }, [page])

  // Method to fetch more data when the page number increases
  const fetchMore = async () => {
      setLoading(true);

      try {

        // Get the data for the next set of values with Promise
        const stories = await Promise.all(feedIds.slice(feeds.length, feeds.length + pageLimit).map(fetchFeed));
        setFeeds((prev) => ([...prev, ...stories]));
        setLoading(false);

      } catch (error) {

        setError(error.message);
        setLoading(false);

      }
    }
  

  // Method that renders the main View depending on the state.
  const renderView = () => {
    if(loading && feeds.length === 0){
      return <Row className="loading-status">
        <p>Loading...</p>
      </Row>
    }

    if(error){
      return <Row className="loading-status">
        <p>{error}</p>
      </Row>
    }

    if(feeds.length){
      return  <FeedContainer 
                loading={loading} 
                feeds={feeds} 
                setPage={setPage} 
                hasMore={feeds.length < feedIds.length} 
              />
    }
    return null;
  }


  return (
    <Container id="app-container" className="pt-2 px-md-5">
      <Header />

      {renderView()}
      
      <Footer />
    </Container>
  );
}

export default App;
