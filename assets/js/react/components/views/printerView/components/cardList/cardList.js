import React from 'react';

import Card from './components/card/card';

/**
 * @method CardList
 * @param {JSON} props 
 * @returns {JSX.Element}
 */
const CardList = (props) => {
    const cards = props.cards.map((card, index) => {
		return (<Card key={'card-' + index} card={card} boardName={props.boardName} />);
    });
    
    return (<ul id="cards">
        {cards}
    </ul>);
};

module.exports = CardList;