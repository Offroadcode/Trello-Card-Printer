/**
 * @class orcAjax
 * @description A basic AJAX handler. Learn more at https://github.com/Offroadcode/ORC-AJAX
 * @author Offroadcode Limited (http://offroadcode.com)
 */
var orcAjax = {
	request: false,
	/**
	 * @method get
	 * @param {string} url
	 * @param {function=string} onSuccess
	 * @param {function=string} onError
	 * @param {boolean} shouldLogResponse
	 * @returns {void}
	 * @description Sends an AJAX GET request to the url provided. The response is
	 * provided to either the onSuccess or onError callback, depending on the status.
	 */
	get: function(url, onSuccess, onError, shouldLogResponse) {
		orcAjax.request = new XMLHttpRequest();
		orcAjax.request.onreadystatechange = function(e) {
			if (e.target) {
				var reply = e.target;
				var DONE = 4; // readyState 4 means the request is done.
				var OK = 200; // status 200 is a successful return.
				if (reply.readyState === DONE) {
					if (reply.status === OK) {
						var response = false;
						if (reply.responseType === 'json') {
							response = reply.response;
						} else {
							response = JSON.parse(reply.responseText);
						}
						if (shouldLogResponse) {
							console.log('Success: orcAjax.get(' + url + ') response:', response);
						}
						if (onSuccess) {
							onSuccess(response);
						}
					} else {
						if (shouldLogResponse) {
							console.log('Error: orcAjax.get(' + url + '):', reply.status);
						}
						if (onError) {
							onError(reply);
						}
					}
				}
			}
		};
		orcAjax.request.open('GET', url, true);
		orcAjax.request.responseType = 'json';
		orcAjax.request.send();
	},
	/**
	 * @method post
	 * @param {string} url
	 * @param {JSON} data - the data to submit in JSON format.
	 * @param {function=string} onSuccess
	 * @param {function=string} onError
	 * @param {boolean} shouldLogResponse
	 * @returns {void}
	 * @description Sends an AJAX POST request to the url provided. The response is
	 * provided to either the onSuccess or onError callback, depending on the status.
	 */

	post: function(url, data, onSuccess, onError, shouldLogResponse) {
		orcAjax.request = new XMLHttpRequest();
		orcAjax.request.onreadystatechange = function(e) {
			if (e.target) {
				var reply = e.target;
				var DONE = 4; // readyState 4 means the request is done.
				var OK = 200; // status 200 is a successful return.
				if (reply.readyState === DONE) {
					if (reply.status === OK) {
						var response = false;
						if (reply.responseType === 'json') {
							response = reply.response;
						} else {
							response = JSON.parse(reply.responseText);
						}
						if (shouldLogResponse) {
							console.log('Success: orcAjax.get(' + url + ') response:', response);
						}
						if (onSuccess) {
							onSuccess(response);
						}
					} else {
						if (shouldLogResponse) {
							console.log('Error: orcAjax.get(' + url + '):', reply.status);
						}
						if (onError) {
							onError(reply);
						}
					}
				}
			}
		};
		orcAjax.request.open('POST', url, true);
		orcAjax.request.setRequestHeader('Content-type', 'application/json');
		orcAjax.request.responseType = 'json';
		orcAjax.request.send(JSON.stringify(data));
	}
};

module.exports = orcAjax;
