import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const Card = (props) => {
    const card = props.card;
    const date = moment(card.dateLastActivity).format('DD MMM YYYY');

    return (<li className="card">
        <h2 className="card-title">{card.name}</h2>
        <div className="card-content">
            <div className="meta">
                <div className="board meta-item"><b>Board:</b> {props.boardName}&nbsp;</div>
                <div className="shortURL meta-item"><b>Short URL:</b> <a href={card.shortUrl} target="_blank">{card.shortUrl}</a>&nbsp;</div>
                <div className="updated meta-item"><b>Last updated:</b> {date}</div>
            </div>
            <hr/>
            <div className="desc-container">
                <ReactMarkdown source={card.desc} />
            </div>
        </div>
    </li>);
};

module.exports = Card;