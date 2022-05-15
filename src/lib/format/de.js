import _ from 'lodash';

/**
 * de
 * @description
 * Renvoie "de " ou "d'" selon la chaîne passée en paramètre
 * @param {string} str
 * @returns {string}
 */
function de(str) {
	if (!str) return '';
	return _.indexOf('AEIOU', _.upperCase(_.deburr(str)).charAt(0)) > -1 ? "d'" : 'de ';
}

export default de;
