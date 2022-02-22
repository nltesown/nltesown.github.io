/**
 * artTitre
 * Concaténation (française) d'un article défini et d'un titre
 * @description
 * @param {string|null} art
 * @param {string} titre
 * @returns {string}
 */
function artTitre(art, titre) {
	return !art ? titre : art === "L'" ? `${art}${titre}` : `${art} ${titre}`;
}

export default artTitre;
