class NumberOfFacesError extends Error {
  constructor() {
    super("The number of faces should be 6.");
  }
}

module.exports = NumberOfFacesError;
