const NumberOfDicesError = require("../errors/number-of-dices-error.js");
const IntegrityOfFacetsError = require("../errors/integrity-of-facets-error.js");
const NumberOfFacesError = require("../errors/number-of-faces-error.js");

class DicesValidator {
  static validateNumberOfDices(dices) {
    if (dices.length < 3) {
      throw new NumberOfDicesError();
    }
  }

  static validateIntegrityOfFacets(dices) {
    dices.forEach((dice) => {
      dice.split(",").forEach((face) => {
        const roundedFace = Math.floor(face);

        if (face != roundedFace) {
          throw new IntegrityOfFacetsError();
        }
      });
    });
  }

  static validateNumberOfFaces(dices) {
    const thereAreMistakes = dices
      .map((dice) => dice.split(","))
      .every((dice) => dice.length === 6);

    if (!thereAreMistakes) {
      throw new NumberOfFacesError();
    }
  }
}

module.exports = DicesValidator;
