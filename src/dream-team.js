module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	const result = members.filter(x => typeof(x) == 'string').map(x => x.toUpperCase()).map(x => x.match(/[A-Z]/)).map(x => x[0]).sort().join('');
	return result;
};
