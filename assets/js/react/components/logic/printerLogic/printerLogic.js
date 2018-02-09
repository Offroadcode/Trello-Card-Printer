import React from 'react';
import { connect } from 'react-redux';

// Store
import { selectBoardId, updateBoards, updateCards } from '../../../store/actions/printer';

// Utils
import Api from '../../../utils/api';
import Constants from '../../../utils/constants';

// View
import PrinterView from '../../views/printerView/printerView';

/**
 * @class PrinterLogic
 */
class PrinterLogic extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	// React Lifecycle Methods /////////////////////////////////////////////////

	componentDidMount() {
		this.getBoards();
	}

	// Helper Functions ////////////////////////////////////////////////////////

	/**
	 * @method getBoards - Request a list of open boards in Trello for the
	 * offroadcode org, and populate the dropdown with them.
	 */
	getBoards = () => {
		Api.Trello.getBoardsInOrg(Constants.ORG_NAME, true, (boards) => {
			this.props.updateBoards(boards);
		});
	};

	// Event Handlers //////////////////////////////////////////////////////////

	/**
	 * @method onBoardChange
	 * @param {Event} e
	 * @returns {void}
	 */
	onBoardChange = (e: Event): void => {
        const value = e.target.value;
        const name = e.target[e.target.selectedIndex].text;
        this.props.selectBoardId(value, name);
        Api.Trello.getCardsOnBoard(value, (cards) => {
            this.props.updateCards(cards);
        });
	};

	// Render Assisting Methods ////////////////////////////////////////////////

	// Render //////////////////////////////////////////////////////////////////

	render() {
		const events = {
			onBoardChange: this.onBoardChange.bind(this)
		};

        return (<PrinterView 
            boards={this.props.boards} 
            boardName={this.props.boardName}
            cards={this.props.cards} 
            events={events} 
        />);
	}
}

const mapStateToProps = (state) => {
	return {
        boardId: state.printer.boardId,
        boardName: state.printer.boardName,
        boards: state.printer.boards,
        cards: state.printer.cards
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        selectBoardId: (boardId, boardName) => dispatch(selectBoardId(boardId, boardName)),
        updateBoards: (boards) => dispatch(updateBoards(boards)),
        updateCards: (cards) => dispatch(updateCards(cards))
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(PrinterLogic);
