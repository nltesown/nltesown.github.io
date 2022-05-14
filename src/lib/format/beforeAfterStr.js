/**
 * beforeAfterStr
 * @description
 * Ajoute des chaînes avant et après une chaîne si celle-ci existe.
 * Fonction utilitaire pour formater un contenu variable, et ne pas formater en l'absence de contenu.
 * @param {string|function} before Chaîne à ajouter avant (ou fonction)
 * @param {string|function} after Chaîne à ajouter après (ou fonction)
 * @param {string} str  Chaîne à traîter
 * @returns {string}
 */
function beforeAfterStr(before, after, str) {
	if (!str) return '';
	let _before = before;
	let _after = after;
	if (typeof before !== 'function') before = () => _before || '';
	if (typeof after !== 'function') after = () => _after || '';
	return `${before(str)}${str}${after(str)}`;
}

export default beforeAfterStr;
