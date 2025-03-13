class NumberOfDicesError extends Error {
  constructor() {
    super("The number of cubes must be more than 2.");
  }
}

module.exports = NumberOfDicesError;
