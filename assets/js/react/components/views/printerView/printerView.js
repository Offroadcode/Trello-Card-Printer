import React from 'react';

// Views
import BoardsDropdown from './components/boardsDropdown/boardsDropdown';
import CardList from './components/cardList/cardList';

/**
 * @const PrinterView
 * @param {JSON} props
 * @returns {JSX.Element}
 */
const PrinterView = (props) => {
	const events = props.events;

	return (<div>
        <div className="printer-header">
			<h1>
                <span>Trello Card Printer </span>
			    <BoardsDropdown boards={props.boards} onChange={events.onBoardChange} />        
            </h1>
        </div>
		<div className="printer-container">
            <CardList cards={props.cards} boardName={props.boardName} />
		</div>
	</div>);
};

module.exports = PrinterView;
