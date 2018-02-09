import * as ActionTypes from '../types';
import { connect } from 'react-redux';

export const selectBoardId = (boardId, boardName) => ({
    type: ActionTypes.SELECT_BOARD_ID,
    boardId: boardId,
    boardName: boardName
});

export const updateBoards = (boards) => ({
	type: ActionTypes.UPDATE_BOARDS,
	boards: boards
});

export const updateCards = (cards) => ({
    type: ActionTypes.UPDATE_CARDS,
    cards: cards
})