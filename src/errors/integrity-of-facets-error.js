class IntegrityOfFacetsError extends Error {
  constructor() {
    super("All faces must be integer values.");
  }
}

module.exports = IntegrityOfFacetsError;
