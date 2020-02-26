module.exports = function createDreamTeam(members) {
	const result = members.map(x => x[0]).sort().join('');
	return result;
};
