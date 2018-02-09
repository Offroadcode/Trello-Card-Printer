import * as ActionTypes from '../actions/types';

const printer = (state, action) => {
	if (typeof state == 'undefined') {
		return {
            boardId: 0,
            boardName: '',
            boards: [],
            cards: []
		};
    }
    let stateChange = {};

	switch (action.type) {
        case ActionTypes.SELECT_BOARD_ID:
            stateChange = {
                boardId: action.boardId,
                boardName: action.boardName
            };
            return Object.assign({}, state, stateChange);
        case ActionTypes.UPDATE_BOARDS:
			stateChange = {
				boards: action.boards
			};
            return Object.assign({}, state, stateChange);
        case ActionTypes.UPDATE_CARDS:
            stateChange = {
                cards: action.cards
            };
            return Object.assign({}, state, stateChange);
		default:
			return state;
	}
};

module.exports = printer;
