import React from 'react';

/**
 * @const BoardsDropdown
 * @param {JSON} props
 * @returns {JSX.Element}
 */
const BoardsDropdown = (props) => {
	const options = props.boards.map((board, index) => {
		return (
			<option key={'board-option-' + index} value={board.id}>
				{board.name}
			</option>
		);
	});

	return (
		<select onChange={props.onChange}>
			<option value="0">Select Board</option>
			{options}
		</select>
	);
};

module.exports = BoardsDropdown;
