module.exports = function countCats(matrix) {
  return matrix.join(',').split(',').filter(x => x === '^^').length;
};
