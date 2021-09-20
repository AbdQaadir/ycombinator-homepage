import React from 'react'
import { Row } from 'react-bootstrap';

import FeedItem from '../FeedItem/FeedItem'

import './FeedContainer.css'
const FeedContainer = ({loading, feeds, setPage, hasMore}) => {

    const handleClick = () => {
        setPage((prev) => prev + 1);
    }
    return (
        <Row id="feed-container" className="">
            { feeds?.map((feed, index) => <FeedItem key={index} count={index} feed={feed} />) }

            {hasMore && (
            <button onClick={!loading ? handleClick : null} className="more-btn">
                {loading ? "Loading More..." : "More"}
            </button> 
            )}
        </Row>
    )
}

export default FeedContainer
