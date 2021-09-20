import React from 'react'
import { Row, Col } from 'react-bootstrap';

import { parseTime, getHostname } from '../../utils';
import VoteArrow from './vote-arrow.gif';

import './FeedItem.css';


const FeedItem = ({count, feed}) => {
    const isEmpty =  feed === undefined || Object.keys(feed).length === 0;

    if(isEmpty){
        return null;
    }

    const { by, descendants, kids = [], score, time, title, url} = feed;

    return (
        <Row className="d-flex feed-item px-0 mx-0">
           <Col sm={12} className="col">
                <span className="count">{count + 1}.</span>
                <button className="vote-btn">
                    <img src={VoteArrow} alt="Vote Arrow"/>
                </button>
                <div>
                    <div>
                        <a className="title" href={url}>{title} </a>
                        <a className="source" href={`https://news.ycombinator.com/from?site=${getHostname(url)}`}> {` (${getHostname(url)})`}</a>
                    </div>
                    <div className="subtitle">
                        {score} point(s) by {by} {parseTime(time)} ago | hide | {descendants || kids.length} comments
                    </div>
                </div>
           </Col>
        </Row>
    )
}

export default FeedItem
