import Constants from '../utils/constants';
import OrcAjax from '../utils/orcAjax';

/**
 * @const Api
 */
const Api = {
	Trello: {
		/**
		 * @method getBoardsInOrg - Get a list of boards that exist on Trello
		 * for the provided org. The `org` parameter is the the name listed in
		 * the url for the org in Trello.
		 * @param {string} org
		 * @param {boolean} openOnly - default is `false`
		 * @param {string} fields - default is `'id,name'`
		 * @param {Function} callback
		 * @returns {void}
		 */
		getBoardsInOrg: function(org, openOnly, fields, callback) {
			let filter = 'filter=all';
			if (typeof openOnly == 'string') {
				fields = openOnly;
			} else if (typeof openOnly == 'function') {
				callback = openOnly;
			} else if (typeof openOnly == 'boolean') {
				if (openOnly) {
					filter = 'filter=open';
				}
			}
			if (typeof fields == 'function') {
				callback = fields;
				fields = 'id,name';
			} else if (typeof fields == 'undefined') {
				fields = 'id,name';
			}
			const url =
				'https://api.trello.com/1/organizations/' +
				org +
				'/boards?&fields=' +
				fields +
				'&' +
				filter +
				'&key=' +
				Constants.TRELLO_API_KEY +
				'&token=' +
				Constants.TOKEN;

			OrcAjax.get(url, (response) => {
				if (response && callback && typeof callback == 'function') {
					callback(response);
				}
			});
        },

        /**
         * @method getCardsOnBoard
         * @param {string} boardId
         * @param {string} filter
         * @param {Function} callback
         * @returns {void}
         */
        getCardsOnBoard: function(boardId, filter, callback) {
            if (typeof filter == 'function') {
                callback = filter;
                filter = 'all'
            } else if (typeof filter == 'undefined') {
                filter = 'all'
            }

            const url = 'https://api.trello.com/1/boards/' + boardId + '/cards' + 
            '?key=' + Constants.TRELLO_API_KEY + '&token=' + Constants.TOKEN + 
            '&filter=' + filter;

            OrcAjax.get(url, (response) => {
                if (response && callback && typeof callback == 'function') {
                    callback(response);
                }
            })
        }
	}
};

module.exports = Api;
