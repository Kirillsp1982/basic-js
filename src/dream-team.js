module.exports = function createDreamTeam(members) {
	const result = members.map(x => x.toUpperCase()).map(x => x.match(/[A-Z]/)).map(x => x[0]).sort().join('');
	return result;
	return result;
};
