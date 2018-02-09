/**
 * @class Cookie
 * @description Helper functions for adding and deleting cookies.
 */
var Cookie = {
	/**
	 * @method delete
	 * @param {string} cookieName - The name of the cookie to delete.
	 * @description Deletes the indicated cookie.
	 */
	delete: function(cookieName) {
		if (cookieName) {
			Cookie.set(cookieName, '', -1);
		}
	},

	/**
	 * @method get
	 * @param {string} cookieName - The name of the cookie to retrieve
	 * @returns {string}
	 * @description Get the value stored in the cookie with the matching name, if any.
	 */
	get: function(cookieName) {
		if (cookieName) {
			var name = cookieName + '=';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
		}
		return '';
	},

	/**
	 * @method set
	 * @description Creates or overwrites the indicated cookie with the provided value, and optionally sets an expiration date.
	 * @param {string} cookieName - The name of the cookie to set or overwrite
	 * @param {string} cookieValue - The value to assign to the cookie
	 * @param {number=} expirationDays - The time, in days, to store the cookie.
	 */
	set: function(cookieName, cookieValue, expirationDays) {
		if (cookieName) {
			var d = new Date();
			var expires = '';
			if (expirationDays) {
				d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
				expires = 'expires=' + d.toUTCString();
			}
			document.cookie = cookieName + '=' + cookieValue + '; ' + expires + '; path=/';
		}
	}
};

module.exports = Cookie;
